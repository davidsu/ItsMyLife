'use strict';

define(['react', '_', 'consts', 'baseRepo', 'ReceiptPlaceholder'
//'AutoComplete'
], function (React, _, consts, baseRepo, ReceiptPlaceholder, AutoComplete) {
    var Popup = React.createClass({
        displayName: 'Popup',

        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        mixins: [React.addons.LinkedStateMixin],
        getInitialState: function getInitialState() {
            var state = {};
            _.forEach(consts.criancas.HEADERS, function (field) {
                state[field] = '';
            });
            baseRepo.getFilesPath((function (error, files) {
                if (error) {
                    console.log(error);
                } else {
                    this.setState({ files: files });
                }
            }).bind(this), '/Criancas');

            state.numOfPayments = 1;
            state.date = new Date();
            state.firstPaymentDate = new Date();
            state.children = 'Sham Gabi Serena';
            state.payMethod = 'Cartao';
            return state;
        },
        getPdf: function getPdf() {
            var pdfSrc = '/file?path=' + this.state.receipt;

            return this.state.receipt ? React.createElement(ReceiptPlaceholder, {
                src: pdfSrc,
                isPDF: pdfSrc.indexOf('.pdf') !== -1
            }) : null;
            //return this.state.receipt ? (
            //    <embed
            //        src={pdfSrc}
            //        type="application/pdf"
            //        key={pdfSrc}
            //        style={{width:'100%', height:'600px'}}>
            //    </embed>) :
            //    null;
        },
        componentDidUpdate: function componentDidUpdate() {
            this.calcFirstPayVal();
        },
        render: function render() {

            return(
                //<AutoComplete className='col-xs-8' baseDir='/Criancas'/>

                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'row', style: { margin: '3px' } },
                        React.createElement(
                            'div',
                            { className: 'col-xs-3' },
                            'receipt'
                        ),
                        React.createElement(
                            'select',
                            { className: 'col-xs-8', valueLink: this.linkState('receipt') },
                            _.map(this.state.files, function (file) {
                                return React.createElement(
                                    'option',
                                    { value: file },
                                    file
                                );
                            })
                        )
                    ),
                    _.map(consts.criancas.HEADERS, (function (field) {
                        return field === 'receipt' || field === 'files' ? null : React.createElement(
                            'div',
                            { className: 'row', style: { margin: '3px' } },
                            React.createElement(
                                'div',
                                { className: 'col-xs-3' },
                                field
                            ),
                            React.createElement('input', { type: 'text', className: 'col-xs-8', valueLink: this.linkState(field),
                                style: { marginRight: '10px' },
                                onFocus: this.inputGotFocus.bind(this, field) })
                        );
                    }).bind(this)),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement('div', { className: 'col-xs-10' }),
                        React.createElement(
                            'div',
                            { className: 'col-xs-1' },
                            React.createElement(
                                'button',
                                {
                                    clasName: 'btn btn-default',
                                    onClick: this.save,
                                    style: { width: '100%' } },
                                'Save'
                            )
                        )
                    ),
                    this.getPdf()
                )
            );
        },
        inputGotFocus: function inputGotFocus(field, e) {
            switch (field) {
                case 'firstPaymentValue':
                    this.calcFirstPayVal();
                    break;
            }
        },
        calcFirstPayVal: function calcFirstPayVal() {
            var delta = 2;
            var expectedFirstPayVal = this.state.payValue / this.state.numOfPayments;
            var firstPayIsSet = this.state.firstPaymentValue <= expectedFirstPayVal + delta && this.state.firstPaymentValue >= expectedFirstPayVal - delta;

            if (firstPayIsSet) {
                return;
            }
            this.setState({
                firstPaymentValue: this.state.payValue / this.state.numOfPayments
            });
        },
        save: function save() {
            var data = _.pick(this.state, function (val, key) {
                return key !== 'files';
            });
            this.addItem(data);
            this.context.router.replaceWith('/');
        },
        addItem: function addItem(item) {

            var request = new XMLHttpRequest();
            request.open('POST', '/criancas');
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(JSON.stringify(item));
        }
    });
    return Popup;
});

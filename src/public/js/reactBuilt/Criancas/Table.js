'use strict';

define(['_', 'publishers', 'consts', 'Row', 'Headers', 'react', 'mainStore'], function (_, publishers, consts, Row, Headers, React, mainStore) {

    var Table = React.createClass({
        displayName: 'Table',

        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        getDefaultProps: function getDefaultProps() {
            return {
                HEADERS: ['receipt', 'payTo', 'children', 'numOfPayments', 'firstPayment', 'payMethod', 'payValue']
            };
        },
        componentWillMount: function componentWillMount() {
            publishers.criancas.list((function () {
                this.forceUpdate();
            }).bind(this));
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: '_table _main' },
                React.createElement(Headers, { HEADERS: this.props.HEADERS }),
                _.map(mainStore.criancas.list, (function (item) {

                    return React.createElement(Row, { item: item, HEADERS: this.props.HEADERS, key: item._id });
                }).bind(this))
            );
        }
    });

    return Table;
});

'use strict';

define(['_', 'publishers', 'consts', 'Row', 'Headers', 'react', 'mainStore'], function (_, publishers, consts, Row, Headers, React, mainStore) {

    var Table = React.createClass({
        displayName: 'Table',

        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        getDefaultProps: function getDefaultProps() {
            return {
                HEADERS: ['payTo', 'children', 'numOfPayments', 'firstPayment', 'payMethod', 'payValue']
            };
        },
        componentWillMount: function componentWillMount() {
            publishers.criancas.list((function () {
                this.forceUpdate();
            }).bind(this));
        },
        render: function render() {
            return React.createElement(
                'table',
                { className: 'table table-hover table-striped table bordered' },
                React.createElement(Headers, { HEADERS: this.props.HEADERS }),
                React.createElement(
                    'tbody',
                    null,
                    _.map(mainStore.criancas.list, (function (item) {

                        return React.createElement(Row, { item: item, HEADERS: this.props.HEADERS, key: item._id });
                    }).bind(this))
                )
            );
        }
    });

    return Table;
});

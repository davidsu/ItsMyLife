'use strict';

define(['_', 'publishers', 'consts', 'Row', 'Headers', 'react', 'mainStore'], function (_, publishers, consts, Row, Headers, React, mainStore) {

    var Table = React.createClass({
        displayName: 'Table',

        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        getDefaultProps: function getDefaultProps() {
            return {
                HEADERS: _.difference(consts.criancas.HEADERS, ['receipt'])
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
                null,
                React.createElement(
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
                ),
                React.createElement(
                    'button',
                    { onClick: this.addEntry },
                    'Add entry'
                )
            );
        },
        addEntry: function addEntry() {
            this.context.router.transitionTo(consts.router.inserts.criancas, { prefix: 'criancas/' });
        }
    });

    return Table;
});

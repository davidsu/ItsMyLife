require.config({
    paths:{
        CriRow: '/js/reactBuilt/Criancas/Row',
        CriCell: '/js/reactBuilt/Criancas/Cell',
        CriHeaders: '/js/reactBuilt/Criancas/Headers',
        CriCellFactory: '/js/reactBuilt/Criancas/cellFactory'
    }
});
define(
    [
        '_',
        'publishers',
        'consts',
        'CriRow',
        'CriHeaders'
    ],
    function (_, publishers, consts, Row, Headers) {

    var Table = React.createClass({displayName: "Table",
        getDefaultProps: function () {
            return {
                HEADERS: ['receipt', 'payTo', 'children', 'numOfPayments', 'firstPayment', 'payMethod', 'payValue']
            };
        },
        render: function () {
            if (this.props.items.length === 0) {
                return React.createElement("div", null);
            }
            return (React.createElement("div", {className: "table main"}, 
                React.createElement(Headers, {HEADERS: this.props.HEADERS}), 
                _.map(
                    this.props.items,
                    function (item) {

                        return React.createElement(Row, {item: item, HEADERS: this.props.HEADERS, key: item._id})
                    }.bind(this)
                )
            ));
        }
    });


    return Table;
});
define(['_', 'publishers', 'consts', '/'+'./Row'], function (_, publishers, consts, Row) {

    var Headers = React.createClass({displayName: "Headers",
        render: function () {
            return (React.createElement("div", {className: "heading"}, 
                    
                        this.props.HEADERS.map(function (header) {
                                var className = 'cell ' + header;
                                return (React.createElement("div", {className: className, key: header}, 
                                    header
                                ))
                            }
                        )
                    
                )
            );
        }
    });

    var Table = React.createClass({displayName: "Table",
        getDefaultProps: function () {
            return {
                HEADERS: ['receipt', 'payTo', 'children', 'numOfPayments', 'firstPayment', 'payMethod', 'payValue']
            };
        },
        getInitialState: function () {
            return {
                items: []
            };
        },
        componentWillUnmount: function () {
            publishers.criancas.unsubscribe(this.itemsReceived);
        },
        componentWillMount: function () {
            //this.itemsReceived = this.itemsReceived.bind(this);
            publishers.criancas.subscribe(this.itemsReceived);
        },
        itemsReceived: function (newItems) {
            this.setState({items: newItems});
        },

        render: function () {
            if (this.state.items.length === 0) {
                return React.createElement("div", null);
            }
            return (React.createElement("div", {className: "table main"}, 
                React.createElement(Headers, {HEADERS: this.props.HEADERS}), 
                _.map(
                    this.state.items,
                    function (item) {

                        return React.createElement(Row, {item: item, HEADERS: this.props.HEADERS, key: item._id})
                    }.bind(this)
                )
            ));
        }
    });


    return Table;
});
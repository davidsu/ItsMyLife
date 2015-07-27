define(['_', 'publishers', 'consts'], function (_, publishers, consts) {


    var Cell = React.createClass({displayName: "Cell",

        getClassName: function () {
            return 'cell ' + this.props.columnName;
        },
        getReceipt: function () {
            //pubsub.publish('popupReceipt', this.props.item._id);
        },

        render: function () {
            return (React.createElement("div", {className: this.getClassName()}, this.props.children));
        }
    });


    function cellFactory(item, columnName) {
        var key = item._id + columnName;
        if (columnName === 'receipt') {
            return (React.createElement(Cell, {columnName: columnName, item: item, key: key}, 
                React.createElement("button", {onClick: 
                    function(){
                        publishers.popup.publish(item._id, consts.pubsubEvents.PDF);
                    }
                }, "View"
                )
            ));

        }
        return React.createElement(Cell, {columnName: columnName, key: key}, item[columnName]);
    }

    var Row = React.createClass({displayName: "Row",
        getClassName: function () {
            return 'row ';
        },
        render: function () {
            return (React.createElement("div", {className: this.getClassName()}, 
                
                    this.props.HEADERS.map(
                        _.curry(cellFactory)(this.props.item)
                    )
                

            ));
        }
    });

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
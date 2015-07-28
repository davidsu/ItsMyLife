define(['CriCellFactory'], function(cellFactory){
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
    return Row;
});
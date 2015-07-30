define(['CellFactory'], function(cellFactory){
    var Row = React.createClass({
        getClassName: function () {
            return 'row ';
        },
        render: function () {
            return (<div className={this.getClassName()}>
                {
                    this.props.HEADERS.map(
                        _.curry(cellFactory)(this.props.item)
                    )
                }

            </div>);
        }
    });
    return Row;
});
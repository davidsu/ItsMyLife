define(['CellFactory', 'react'], function(cellFactory, React){
    var Row = React.createClass({
        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        getClassName: function () {
            return '_row ';
        },
        render: function () {
            return (<div className={this.getClassName()}>
                {
                    this.props.HEADERS.map(
                        _.curry(cellFactory)(this.props.item, this.context.router, 'popup')
                    )
                }

            </div>);
        }
    });
    return Row;
});
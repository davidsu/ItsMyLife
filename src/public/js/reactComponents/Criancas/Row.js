define(['CellFactory', 'react'], function(cellFactory, React){
    var Row = React.createClass({
        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        getClassName: function () {
            return '_row ';
        },
        render: function () {
            return (<tr className={this.getClassName()} onClick={this.clicked}>
                {
                    this.props.HEADERS.map(
                        _.curry(cellFactory)(this.props.item, this.context.router, 'popup')
                    )
                }

            </tr>);
        },
        clicked: function(){
            var pdfquery = this.props.item.isPDF?'?pdf=true':'?pdf=false';
            this.context.router.transitionTo(
                '/criancas/'+this.props.item._id.toString()+pdfquery,
                {prefix:'criancas/'});
        }
    });
    return Row;
});
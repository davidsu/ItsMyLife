define(['react'], function(React){
    return React.createClass({

        getClassName: function () {
            return 'cell ' + this.props.columnName;
        },
        render: function () {
            return (<div className={this.getClassName()}>{this.props.children}</div>);
        }
    });
});
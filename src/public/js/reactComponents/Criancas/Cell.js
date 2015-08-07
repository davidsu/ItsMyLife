define(['react'], function(React){
    return React.createClass({

        getClassName: function () {
            return '_cell ' + this.props.columnName;
        },
        render: function () {
            return (<td className={this.getClassName()}>{this.props.children}</td>);
        }
    });
});
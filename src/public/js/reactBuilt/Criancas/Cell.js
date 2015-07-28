define([], function(){
    return React.createClass({

        getClassName: function () {
            return 'cell ' + this.props.columnName;
        },
        render: function () {
            return (React.createElement("div", {className: this.getClassName()}, this.props.children));
        }
    });
});
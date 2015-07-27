define([], function(){
    return React.createClass({

        getClassName: function () {
            return 'cell ' + this.props.columnName;
        },
        getReceipt: function () {
            //pubsub.publish('popupReceipt', this.props.item._id);
        },

        render: function () {
            return (<div className={this.getClassName()}>{this.props.children}</div>);
        }
    });
});
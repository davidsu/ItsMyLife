'use strict';

define(['react'], function (React) {
    return React.createClass({

        getClassName: function getClassName() {
            return '_cell ' + this.props.columnName;
        },
        render: function render() {
            return React.createElement(
                'td',
                { className: this.getClassName() },
                this.props.children
            );
        }
    });
});

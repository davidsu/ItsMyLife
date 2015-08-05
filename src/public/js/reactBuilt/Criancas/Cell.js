'use strict';

define(['react'], function (React) {
    return React.createClass({

        getClassName: function getClassName() {
            return 'cell ' + this.props.columnName;
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: this.getClassName() },
                this.props.children
            );
        }
    });
});

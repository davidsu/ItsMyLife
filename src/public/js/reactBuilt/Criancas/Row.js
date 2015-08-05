'use strict';

define(['CellFactory', 'react'], function (cellFactory, React) {
    var Row = React.createClass({
        displayName: 'Row',

        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        getClassName: function getClassName() {
            return '_row ';
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: this.getClassName() },
                this.props.HEADERS.map(_.curry(cellFactory)(this.props.item, this.context.router, 'popup'))
            );
        }
    });
    return Row;
});

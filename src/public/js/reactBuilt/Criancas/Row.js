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
                'tr',
                { className: this.getClassName(), onClick: this.clicked },
                this.props.HEADERS.map(_.curry(cellFactory)(this.props.item, this.context.router, 'popup'))
            );
        },
        clicked: function clicked() {
            this.context.router.transitionTo('/criancas/' + this.props.item._id.toString(), { prefix: 'criancas/' });
        }
    });
    return Row;
});

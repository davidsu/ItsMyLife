'use strict';

define(['publishers', 'consts', 'react'], function (publishers, consts, React) {

    var Popup = React.createClass({
        displayName: 'Popup',

        contextTypes: {
            router: React.PropTypes.func.isRequired
        },
        getClassName: function getClassName() {
            var className = 'popup-cart';
            if (this.state.src) {
                className += ' visible';
            }
            return className;
        },
        render: function render() {
            return React.createElement(
                'div',
                { id: "popup-cart-container" },
                React.createElement(
                    'div',
                    { style: {
                            position: 'fixed',
                            width: '100%',
                            height: '90%',
                            display: 'flex'
                        } },
                    React.createElement('embed', {
                        src: this.props.path,
                        type: "application/pdf",
                        style: { width: '100%' } })
                )
            );
        }

    });
    return Popup;
});

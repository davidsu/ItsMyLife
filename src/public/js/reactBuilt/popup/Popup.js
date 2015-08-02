define(['publishers', 'consts', 'react'], function (publishers, consts, React) {

    var Popup = React.createClass({displayName: "Popup",
            contextTypes: {
                router: React.PropTypes.func.isRequired
            },
            getClassName: function () {
                var className = 'popup-cart';
                if (this.state.src) {
                    className += ' visible';
                }
                return className;
            },
            render: function () {
                return (
                    React.createElement("div", {id: "popup-cart-container"}, 
                        React.createElement("embed", {
                            src: this.props.path, 
                            type: "application/pdf"})
                    ));
            }

        })
        ;
    return Popup;
})
;
define(['publishers', 'consts'], function (publishers, consts) {

    var Popup = React.createClass({displayName: "Popup",
            propTypes:{
                //TODO
                //src: React.type.string
            },
            getSrc: function () {
                return '/criancas/' + this.props.src;
            },
            getClassName: function () {
                var className = 'popup-cart';
                if (this.state.src) {
                    className += ' visible';
                }
                return className;
            },
            close: function () {
                publishers.popup.publish('', consts.pubsubEvents.PDF);
            },
            render: function () {
                return (
                    React.createElement("div", {id: "popup-cart-container"}, 
                        React.createElement("button", {
                            onClick: this.close}, "close"
                        ), 
                        React.createElement("embed", {
                            src: this.getSrc(), 
                            type: "application/pdf"})
                    ));
            }

        })
        ;
    return Popup;
})
;
define(['publishers', 'consts', 'react'], function (publishers, consts, React) {

    var Popup = React.createClass({
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
                    <div id="popup-cart-container">
                        <button
                            onClick={this.close}>close
                        </button>
                        <embed
                            src={this.getSrc()}
                            type="application/pdf"></embed>
                    </div>);
            }

        })
        ;
    return Popup;
})
;
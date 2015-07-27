define(['publishers', 'consts'], function (publishers, consts) {
    var Popup = React.createClass({

            getInitialState: function () {
                return {
                    src: ''
                };
            },
            componentWillMount: function () {
                publishers.popup.subscribe( this.srcReceived, consts.pubsubEvents.PDF);
            },
            componentWillUnmount: function () {
                publishers.popup.unsubscribe(this.srcReceived, consts.pubsubEvents.PDF);
            },
            srcReceived: function (newSrc) {
                this.setState({src: newSrc})
            },
            getSrc: function () {
                return '/criancas/' + this.state.src;
            },
            getClassName: function () {
                var className = 'popup-cart';
                if (this.state.src) {
                    className += ' visible';
                }
                return className;
            },
            close: function () {
                this.setState({src: ''});
            },
            render: function () {
                if (!this.state.src) {
                    return <div />;
                }
                return (

                    //<div className={this.getClassName()}>
                    <div id="popup-cart-container">
                        <button
                            onClick={this.close}>close
                        </button>
                        <embed
                            src={this.getSrc()}
                            type="application/pdf"></embed>
                    </div>);
            }

            //</div>

        })
        ;
    return Popup;
})
;
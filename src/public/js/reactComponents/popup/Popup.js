define(['ReceiptPlaceholder', 'publishers', 'consts', 'react'], function (ReceiptPlaceholder, publishers, consts, React) {

    var Popup = React.createClass({
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
                    <div id="popup-cart-container">
                        <ReceiptPlaceholder src={this.props.path} isPDF={this.props.query.pdf==='true'}
                            style={{
                            position:'fixed',
                            width:'100%',
                            height:'90%',
                            display:'flex'
                        }}/>
                    </div>);
            }

        });
    return Popup;
})
;
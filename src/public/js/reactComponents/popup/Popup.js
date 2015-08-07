define(['publishers', 'consts', 'react'], function (publishers, consts, React) {

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
                        <div style={{
                            position:'fixed',
                            width:'100%',
                            height:'90%',
                            display:'flex'
                        }}>
                        <embed
                            src={this.props.path}
                            type="application/pdf"
                            style={{width:'100%'}}></embed>
                            </div>
                    </div>);
            }

        });
    return Popup;
})
;
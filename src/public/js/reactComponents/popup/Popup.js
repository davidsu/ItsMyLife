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
                        <embed
                            src={this.props.path}
                            type="application/pdf"></embed>
                    </div>);
            }

        })
        ;
    return Popup;
})
;
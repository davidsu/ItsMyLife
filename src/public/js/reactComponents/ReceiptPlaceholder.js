define(
    [
        'react'
    ],
    function (React) {
        return React.createClass({
            propTypes: {
                src: React.PropTypes.string,
                isPDF: React.PropTypes.bool
            },
            render: function () {
                if (!this.props.src) {
                    return null;
                }
                var style = this.props.style || {width:'100%', minHeight:'600px'};
                if (this.props.isPDF) {
                    return (
                        <embed
                            src={this.props.src}
                            type="application/pdf"
                            key={this.props.src}
                            style={style}>
                        </embed>
                    );
                } else {
                    return(
                        <img
                            src={this.props.src}
                            style={style}
                            />
                    );
                }
            }
        });
    }
);
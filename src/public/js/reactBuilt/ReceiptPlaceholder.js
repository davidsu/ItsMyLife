'use strict';

define(['react'], function (React) {
    return React.createClass({
        propTypes: {
            src: React.PropTypes.string,
            isPDF: React.PropTypes.bool
        },
        render: function render() {
            if (!this.props.src) {
                return null;
            }
            var style = { width: '100%', minHeight: '600px' };
            if (this.props.isPDF) {
                return React.createElement('embed', {
                    src: this.props.src,
                    type: "application/pdf",
                    key: this.props.src,
                    style: style });
            } else {
                return React.createElement('img', {
                    src: this.props.src,
                    style: style
                });
            }
        }
    });
});

'use strict';

define(['react'], function (React) {
    return React.createClass({
        render: function render() {
            return React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    null,
                    this.props.HEADERS.map(function (header) {
                        var className = 'cell ' + header;
                        return React.createElement(
                            'th',
                            { key: header },
                            header.toUpperCase()
                        );
                    })
                )
            );
        }
    });
});

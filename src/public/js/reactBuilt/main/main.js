'use strict';

define(['pubsub', 'criancasTbl', 'publishers', 'mainStore', 'react', 'reactRouter'], function (pubsub, CriancasTbl, publishers, mainStore, React, reactRouter) {
    var RouteHandler = reactRouter.RouteHandler;
    var Main = React.createClass({
        displayName: 'Main',

        contextTypes: {
            router: React.PropTypes.func.isRequired
        },

        componentWillMount: function componentWillMount() {
            pubsub.setAfterPublishCallback((function () {
                this.forceUpdate();
            }).bind(this));
        },
        contentFactory: function contentFactory() {
            return React.createElement(
                'main',
                { className: 'container' },
                React.createElement(
                    'nav',
                    { className: 'navbar navbar-default' },
                    React.createElement(
                        'ul',
                        { className: 'nav navbar-nav' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#/criancas' },
                                'Fetch'
                            )
                        )
                    )
                ),
                React.createElement(RouteHandler, this.props)
            );
        },
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'main',
                    { className: 'container' },
                    React.createElement(
                        'nav',
                        { className: 'navbar navbar-default' },
                        React.createElement(
                            'ul',
                            { className: 'nav navbar-nav' },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '#/criancas' },
                                    'Fetch'
                                )
                            )
                        )
                    ),
                    React.createElement(RouteHandler, this.props)
                )
            );
        }
    });

    return Main;
});

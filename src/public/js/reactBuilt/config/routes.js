'use strict';

define(['react', 'reactRouter', 'main', 'criancasTbl', 'Popup'], function (React, Router, Main, CriancasTbl, Popup) {
    var DefaultRoute = Router.DefaultRoute;
    var Route = Router.Route;

    var routes = React.createElement(
        Route,
        { name: "app", path: "/", handler: Main },
        React.createElement(Route, { name: 'criancas', path: '/criancas', handler: CriancasTbl }),
        React.createElement(Route, { name: 'criancas/:id', path: '/criancas/:id', handler: Popup }),
        React.createElement(Route, { name: 'popup', path: '/popup', handler: Popup })
    );

    return function () {
        Router.run(routes, function (Root, state) {
            React.render(React.createElement(Root, state), document.querySelector('.container'));
        });
    };
});

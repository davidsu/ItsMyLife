'use strict';

define(['react', 'reactRouter', 'consts', 'main', 'criancasTbl', 'Popup', 'insertCriancas', 'AutoComplete'], function (React, Router, consts, Main, CriancasTbl, Popup, CriancasInsert, AutoComplete) {
    var DefaultRoute = Router.DefaultRoute;
    var Route = Router.Route;
    var Redirect = Router.Redirect;

    var routes = React.createElement(
        Route,
        { name: "app", path: "/", handler: Main },
        React.createElement(Route, { name: 'criancas', path: '/criancas', handler: CriancasTbl }),
        React.createElement(Route, { name: 'criancas/:id', path: '/criancas/:id', handler: Popup }),
        React.createElement(Route, {
            name: consts.router.inserts.criancas,
            path: consts.router.inserts.criancas,
            handler: CriancasInsert }),
        React.createElement(Route, { name: 'popup', path: '/popup', handler: Popup }),
        React.createElement(Route, { path: '/AutoComplete', handler: AutoComplete }),
        React.createElement(Redirect, { from: '/', to: 'criancas' })
    );

    return function () {
        Router.run(routes, function (Root, state) {
            React.render(React.createElement(Root, state), document.querySelector('.container'));
        });
    };
});

define(
    [
        'react',
        'reactRouter',
        'main',
        'criancasTbl',
        'Popup'
    ], function (React, Router, Main, CriancasTbl, Popup) {
        var DefaultRoute = Router.DefaultRoute;
        var Route = Router.Route;
        var Redirect = Router.Redirect;

        var routes = (
            <Route name="app" path="/" handler={Main}>
                <Route name='criancas' path='/criancas' handler={CriancasTbl}/>
                <Route name='criancas/:id' path='/criancas/:id' handler={Popup} />
                <Route name='popup' path='/popup' handler={Popup}/>
                <Redirect from='/' to='criancas'/>
            </Route>
        );

        return function () {
            Router.run(routes, function (Root, state) {
                React.render(<Root {...state} />, document.querySelector('.container'));
            });
        }
    });
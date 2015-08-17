define(
    [
        'react',
        'reactRouter',
        'consts',
        'main',
        'criancasTbl',
        'Popup',
        'insertCriancas',
        'AutoComplete'
    ], function (React,
                 Router,
                 consts,
                 Main,
                 CriancasTbl,
                 Popup,
                 CriancasInsert,
                 AutoComplete
    ) {
        var DefaultRoute = Router.DefaultRoute;
        var Route = Router.Route;
        var Redirect = Router.Redirect;

        var routes = (
            <Route name="app" path="/" handler={Main}>
                <Route name='criancas' path='/criancas' handler={CriancasTbl}/>
                <Route name='criancas/:id' path='/criancas/:id' handler={Popup}/>
                <Route
                    name={consts.router.inserts.criancas}
                    path={consts.router.inserts.criancas}
                    handler={CriancasInsert}/>

                <Route name='popup' path='/popup' handler={Popup}/>
                <Route path='/AutoComplete' handler={AutoComplete}/>
                <Redirect from='/' to='criancas'/>
            </Route>
        );

        return function () {
            Router.run(routes, function (Root, state) {
                React.render(<Root {...state} />, document.querySelector('.container'));
            });
        }
    });
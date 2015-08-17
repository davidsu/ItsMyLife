define(
    [
        'pubsub',
        'criancasTbl',
        'publishers',
        'mainStore',
        'react',
        'reactRouter'

    ],
    function (pubsub,  CriancasTbl, publishers, mainStore, React, reactRouter) {
        var RouteHandler = reactRouter.RouteHandler;
        var Main = React.createClass({
            contextTypes: {
                router: React.PropTypes.func.isRequired
            },

            componentWillMount: function(){
                pubsub.setAfterPublishCallback(function(){
                    this.forceUpdate();
                }.bind(this));
            },
            contentFactory: function () {
                return (
                    <main className='container'>
                        <nav  className='navbar navbar-default'>
                            <ul className='nav navbar-nav'>
                                <li><a href='#/criancas'>Fetch</a></li>
                            </ul>
                        </nav>
                        <RouteHandler {...this.props} />
                    </main>
                );

            },
            render: function () {
                return (
                    <div>
                        <main className='container'>
                            <nav  className='navbar navbar-default'>
                                <ul className='nav navbar-nav'>
                                    <li><a href='#/criancas'>Fetch</a></li>
                                </ul>
                            </nav>
                            <RouteHandler {...this.props} />
                        </main>
                    </div>
                )
            }
        });


        return Main;
    });
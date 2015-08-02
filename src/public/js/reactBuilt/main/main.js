define(
    [
        'pubsub',
        'Popup',
        'criancasTbl',
        'publishers',
        'mainStore',
        'react',
        'reactRouter'

    ],
    function (pubsub, Popup, CriancasTbl, publishers, mainStore, React, reactRouter) {
        var RouteHandler = reactRouter.RouteHandler;
        var Main = React.createClass({displayName: "Main",
            contextTypes: {
                router: React.PropTypes.func.isRequired
            },
            componentWillMount: function(){
                pubsub.setAfterPublishCallback(function(){
                    this.forceUpdate();
                }.bind(this));
            },
            contentFactory: function () {
                if (mainStore.popup.pdfSrc) {
                    return React.createElement(Popup, {src: mainStore.popup.pdfSrc});
                }
                return (
                    React.createElement("main", {className: "container"}, 
                        React.createElement("nav", {className: "navbar navbar-default"}, 
                            React.createElement("ul", {className: "nav navbar-nav"}, 
                                React.createElement("li", null, React.createElement("a", {href: "#/criancas"}, "Fetch"))
                            )
                        ), 
                        React.createElement(RouteHandler, React.__spread({},  this.props))
                    )
                );

            },
            render: function () {
                return (
                    React.createElement("div", null, 
                        this.contentFactory()
                    )
                )
            }
        });


        return Main;
    });
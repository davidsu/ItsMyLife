define(
    [
        'Popup',
        'criancasTbl',
        'publishers',
        'mainStore',
        'react'

    ],
    function (Popup, CriancasTbl, publishers, mainStore, React) {
        var Main = React.createClass({displayName: "Main",
            contentFactory: function () {
                if(mainStore.popup.pdfSrc){
                    return React.createElement(Popup, {src: mainStore.popup.pdfSrc});
                }
                return(
                    React.createElement("main", {className: "container"}, 
                        React.createElement("div", {className: "mainNavigation"}, 
                            React.createElement("button", {onClick: this.criancasClick}, "Fetch")
                        ), 
                        React.createElement(CriancasTbl, {items: mainStore.criancas.list})
                    )
                );

            },
            criancasClick: function () {
                publishers.criancas.list();
            },
            render: function () {
                return (
                    React.createElement("div", null, 
                        this.contentFactory()
                    )
                )
            }
        });

        function reRender() {
            React.render(React.createElement(Main, null), document.querySelector('.container'));
        }

        return reRender;
    });
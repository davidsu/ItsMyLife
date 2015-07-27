define(['Popup', 'criancasTbl', 'publishers'], function (Popup, CriancasTbl, publishers) {
    var Main = React.createClass({displayName: "Main",
        criancasClick: function () {
            publishers.criancas.list();

        },
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(Popup, null), 
                    React.createElement("main", {className: "container"}, 
                        React.createElement("div", {className: "mainNavigation"}, 
                            React.createElement("button", {onClick: this.criancasClick}, "Fetch")
                        ), 
                        React.createElement(CriancasTbl, null)
                    )
                )
            )
        }
    });

    function reRender() {
        React.render(React.createElement(Main, null), document.body);
    }

    return reRender;
});
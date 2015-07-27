define(['Popup', 'criancasTbl', 'publishers'], function (Popup, CriancasTbl, publishers) {
    var Main = React.createClass({
        criancasClick: function () {
            publishers.criancas.list();

        },
        render: function () {
            return (
                <div>
                    <Popup />
                    <main className='container'>
                        <div className='mainNavigation'>
                            <button onClick={this.criancasClick}>Fetch</button>
                        </div>
                        <CriancasTbl />
                    </main>
                </div>
            )
        }
    });

    function reRender() {
        React.render(<Main />, document.body);
    }

    return reRender;
});
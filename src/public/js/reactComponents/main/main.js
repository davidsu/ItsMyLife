define(
    [
        'Popup',
        'criancasTbl',
        'publishers',
        'mainStore'

    ],
    function (Popup, CriancasTbl, publishers, mainStore) {
        var Main = React.createClass({
            contentFactory: function () {
                if(mainStore.popup.pdfSrc){
                    return <Popup src={mainStore.popup.pdfSrc} />;
                }
                return(
                    <main className='container'>
                        <div className='mainNavigation'>
                            <button onClick={this.criancasClick}>Fetch</button>
                        </div>
                        <CriancasTbl items={mainStore.criancas.list}/>
                    </main>
                );

            },
            criancasClick: function () {
                publishers.criancas.list();
            },
            render: function () {
                return (
                    <div>
                        {this.contentFactory()}
                    </div>
                )
            }
        });

        function reRender() {
            React.render(<Main />, document.querySelector('.container'));
        }

        return reRender;
    });
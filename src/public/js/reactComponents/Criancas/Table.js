define(
    [
        '_',
        'publishers',
        'consts',
        'Row',
        'Headers',
        'react',
        'mainStore'
    ],
    function (_, publishers, consts, Row, Headers, React, mainStore) {

        var Table = React.createClass({
            contextTypes: {
                router: React.PropTypes.func.isRequired
            },
            getDefaultProps: function () {
                return {
                    HEADERS: _.difference(consts.criancas.HEADERS, ['receipt'])
                };
            },
            componentWillMount: function () {
                publishers.criancas.list(function () {
                    this.forceUpdate()
                }.bind(this));
            },
            render: function () {
                return (
                    <div>
                    <table className='table table-hover table-striped table bordered'>
                        <Headers HEADERS={this.props.HEADERS}></Headers>
                        <tbody>
                            {_.map(
                                mainStore.criancas.list,
                                function (item) {

                                    return <Row item={item} HEADERS={this.props.HEADERS} key={item._id}/>
                                }.bind(this)
                            )}
                        </tbody>
                    </table>
                        <button onClick={this.addEntry}>Add entry</button>
                    </div>
                );
            },
            addEntry:function(){
                this.context.router.transitionTo(consts.router.inserts.criancas, {prefix:'criancas/'});
            }
        });


        return Table;
    });
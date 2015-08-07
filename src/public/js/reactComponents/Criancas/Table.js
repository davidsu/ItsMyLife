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
                    HEADERS: ['payTo', 'children', 'numOfPayments', 'firstPayment', 'payMethod', 'payValue']
                };
            },
            componentWillMount: function () {
                publishers.criancas.list(function () {
                    this.forceUpdate()
                }.bind(this));
            },
            render: function () {
                return (<table className='table table-hover table-striped table bordered'>
                    <Headers HEADERS={this.props.HEADERS}></Headers>
                    <tbody>
                        {_.map(
                            mainStore.criancas.list,
                            function (item) {

                                return <Row item={item} HEADERS={this.props.HEADERS} key={item._id}/>
                            }.bind(this)
                        )}
                    </tbody>
                </table>);
            }
        });


        return Table;
    });
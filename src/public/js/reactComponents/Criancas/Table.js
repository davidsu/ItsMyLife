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
                HEADERS: ['receipt', 'payTo', 'children', 'numOfPayments', 'firstPayment', 'payMethod', 'payValue']
            };
        },
        componentWillMount: function(){
            publishers.criancas.list(function(){
                this.forceUpdate()
            }.bind(this));
        },
        render: function () {
            return (<div className='_table _main'>
                <Headers HEADERS={this.props.HEADERS}></Headers>
                {_.map(
                    mainStore.criancas.list,
                    function (item) {

                        return <Row item={item} HEADERS={this.props.HEADERS} key={item._id}/>
                    }.bind(this)
                )}
            </div>);
        }
    });


    return Table;
});
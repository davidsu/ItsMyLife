define(['/'+'./Cell', 'publishers', 'consts'], function(Cell, publishers, consts){
    return function (item, columnName) {
        var key = item._id + columnName;
        if (columnName === 'receipt') {
            return (<Cell columnName={columnName} item={item} key={key}>
                <button onClick={
                    function(){
                        publishers.popup.publish(item._id, consts.pubsubEvents.PDF);
                    }
                }>View
                </button>
            </Cell>);

        }
        return <Cell columnName={columnName} key={key}>{item[columnName]}</Cell>;
    }
});
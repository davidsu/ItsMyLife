define(['/'+'./Cell', 'publishers', 'consts'], function(Cell, publishers, consts){
    return function (item, columnName) {
        var key = item._id + columnName;
        if (columnName === 'receipt') {
            return (React.createElement(Cell, {columnName: columnName, item: item, key: key}, 
                React.createElement("button", {onClick: 
                    function(){
                        publishers.popup.publish(item._id, consts.pubsubEvents.PDF);
                    }
                }, "View"
                )
            ));

        }
        return React.createElement(Cell, {columnName: columnName, key: key}, item[columnName]);
    }
});
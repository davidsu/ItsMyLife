define(['Cell', 'publishers', 'consts', 'react'], function(Cell, publishers, consts, React){
    return function (item, router, requestPath, columnName) {
        var key = item._id + columnName;
        if (columnName === 'receipt') {
            return (React.createElement(Cell, {columnName: columnName, item: item, key: key}, 
                React.createElement("button", {className: "btn btn-default btn-xs", onClick: 
                    function(){
                        router.transitionTo('/criancas/'+item._id.toString(), {prefix:'criancas/'});
                    }
                }, "View"
                )
            ));

        }
        return React.createElement(Cell, {columnName: columnName, key: key}, item[columnName]);
    }
});
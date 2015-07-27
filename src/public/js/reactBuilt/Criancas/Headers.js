define(function(){
    return  React.createClass({
            render: function () {
                return (React.createElement("div", {className: "heading"}, 
                        
                            this.props.HEADERS.map(function (header) {
                                    var className = 'cell ' + header;
                                    return (React.createElement("div", {className: className, key: header}, 
                                        header
                                    ))
                                }
                            )
                        
                    )
                );
            }
        });
});
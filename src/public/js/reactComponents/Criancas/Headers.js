define(function(){
    return  React.createClass({
            render: function () {
                return (<div className='heading'>
                        {
                            this.props.HEADERS.map(function (header) {
                                    var className = 'cell ' + header;
                                    return (<div className={className} key={header}>
                                        {header}
                                    </div>)
                                }
                            )
                        }
                    </div>
                );
            }
        });
});
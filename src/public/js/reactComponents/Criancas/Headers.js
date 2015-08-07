define(['react'], function (React) {
    return React.createClass({
        render: function () {
            return (
                <thead>
                    <tr>
                        {
                            this.props.HEADERS.map(function (header) {
                                    var className = 'cell ' + header;
                                    return (<th key={header}>
                                        {header.toUpperCase()}
                                    </th>)
                                }
                            )
                        }
                    </tr>
                </thead>
            );
        }
    });
});
define(['_', 'baseRepo', 'consts'], function (_, baseRepo, consts) {


    var AutoComplete = React.createClass({
        getInitialState: function () {
            return {
                typedLength: 1000,
                value: '',
                filesList: baseRepo.getFilesPath(this._filesPathReceived),
                filteredFilesList: [],
                isDeleting: false
            };
        },
        componentDidUpdate: function () {
            React.findDOMNode(this.refs.input)
                .setSelectionRange(
                this.state.typedLength,
                this.state.value.length
            );
        },
        render: function () {
            return (<input ref='input'
                           className='autoCompleteInput'
                           value={this.state.value}
                           onChange={this._onChange}
                           onKeyDown={this._onKeyDown}>
            </input>);
        },
        _onChange: function (e) {
            var newValue = e.target.value,
                newTypedLength = 1000,
                newFilteredFilesList =
                _.filter(
                    this.state.filesList,
                    function(item){
                        return item.indexOf(newValue) === 0;
                    }
                );

            if(newFilteredFilesList.length > 0 && !this.state.isDeleting){
                newTypedLength = newValue.length;
                newValue = newFilteredFilesList[0];
            }

            this.setState({
                typedLength:newTypedLength,
                filteredFilesList:newFilteredFilesList,
                value:newValue
            });

        },
        _onKeyDown: function (e) {
            var key = e.keyCode;
            this.setState(
                {
                    isDeleting: (
                        key === consts.eventKeys.BACKSPACE ||
                        key === consts.eventKeys.DELETE
                    )
                }
            );
        },
        _filesPathReceived: function (error, json) {
            if (error) {
                console.log(error);
            } else {
                var filesList = JSON.parse(json);
                this.setState(
                    {
                        filesList: filesList,
                        filteredFilesList: filesList
                    }
                );
            }
        }
    });

    return AutoComplete;
});
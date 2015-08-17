define(['_', 'baseRepo', 'consts', 'react'], function (_, baseRepo, consts, React) {


    var AutoComplete = React.createClass({
        getInitialState: function () {
            return {
                typedLength: 1000,
                value: '',
                filesList: baseRepo.getFilesPath(this._filesPathReceived, this.props.baseDir || '/Criancas'),
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
                           className={this.props.className}
                           value={this.state.value}
                           onChange={this._onChange}
                           onKeyDown={this._onKeyDown}
                           key={1}>
            </input>);
        },
        helperProps:{},
        _onChange: function (e) {
            var newValue = e.target.value,
                newTypedLength = 1000,
                newFilteredFilesList =
                    _.filter(
                        this.state.filesList,
                        function (item) {
                            return item.indexOf(newValue) === 0;
                        }
                    );

            if (this.helperProps.isDeleting) {
                //TODO fix newValue to delete selection
                var selectionStart = this.helperProps.selectionStart,
                    selectionEnd = this.helperProps.selectionEnd;
                if (selectionStart < selectionEnd) {
                    newValue = (_.filter(this.state.value.split(''), function(val, index){
                        return index<selectionStart || index>=selectionEnd;
                    })).join('');

                    console.log(newValue);

                }
            } else if (newFilteredFilesList.length > 0) {
                newTypedLength = newValue.length;
                newValue = newFilteredFilesList[0];
            }

            this.setState({
                typedLength: newTypedLength,
                filteredFilesList: newFilteredFilesList,
                value: newValue
            });

        },
        _onKeyDown: function (e) {
            this.helperProps.isDeleting = false;
            this.helperProps.selectionStart = React.findDOMNode(this.refs.input).selectionStart;
            this.helperProps.selectionEnd = React.findDOMNode(this.refs.input).selectionEnd;
            switch (e.keyCode) {
                case consts.eventKeys.BACKSPACE:
                case consts.eventKeys.DELETE:
                    this.helperProps.isDeleting = true;
                    break;
                case consts.eventKeys.ENTER:
                case consts.eventKeys.RIGHT_ARROW:
                    if(this.helperProps.selectionStart<this.helperProps.selectionEnd)
                        this.setState({typedLength : 1000});
                    break;
            }
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
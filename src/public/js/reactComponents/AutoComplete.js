define(['_', 'baseRepo', 'consts', '/' + '../lib/react-typeahead'], function (_, baseRepo, consts, ReactTypeahead) {


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
            //React.findDOMNode(this.refs.input)
            //    .setSelectionRange(
            //    this.state.typedLength,
            //    this.state.value.length
            //);
        },
        render: function () {
            return (<ReactTypeahead.Typeahead
                options={this.state.filesList}
                allowCustomValues={4}
                defaultValue=""
                className="topcoat-list"
                maxVisible={3}
                customClasses={{
          input: "topcoat-text-input",
          results: "topcoat-list__container",
          listItem: "topcoat-list__item",
          hover: "topcoat-active",
          customAdd: "topcoat-addme"
        }}
                ></ReactTypeahead.Typeahead>);
        },
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

            if (newFilteredFilesList.length > 0 && !this.state.isDeleting) {
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
            var newState = {isDeleting: false};
            switch (e.keyCode) {
                case consts.eventKeys.BACKSPACE:
                case consts.eventKeys.DELETE:
                    newState.isDeleting = true;
                    break;
                case consts.eventKeys.ENTER:
                    newState.typedLength = 1000;
                    break;
                case consts.eventKeys.RIGHT_ARROW:
                    newState.typedLength = this.state.typedLength + 1;
                    break;
            }
            this.setState(newState);
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
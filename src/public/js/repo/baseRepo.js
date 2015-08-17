define(function(){
    function getCriancasList(callback){
        var request = new XMLHttpRequest();
        request.open('GET', '/criancas');
        request.onload = function () {
            var error;
            if (request.status < 200 || request.status >= 400) {
                error = {requestStatus: request.status};
            }


           callback(error, request.responseText);
        };
        request.send();
    }

    function getFilesPath(callback, baseDir){
        var request = new XMLHttpRequest();
        request.open('GET', '/filesPath' + baseDir);
        request.onload = function () {
            var error;
            if (request.status < 200 || request.status >= 400) {
                error = {requestStatus: request.status};
            }


            callback(error, JSON.parse(request.responseText));
        };
        request.send();
    }

    return{
        getCriancasList: getCriancasList,
        getFilesPath: getFilesPath
    }
});
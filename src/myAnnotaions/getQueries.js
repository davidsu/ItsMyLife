/*criancas list*/
var request = new XMLHttpRequest();
request.open('GET', '/criancas');
request.onload = function(){
    // If everything is cool...
    if (request.status >= 200 && request.status < 400) {

        var val = JSON.parse(request.responseText);
        console.log(val);

    } else {
        console.log('error');

    }
};
request.send();


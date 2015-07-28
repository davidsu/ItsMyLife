define(
    [
        'publishers',
        'consts'
    ], function (publishers, consts) {
        var criancas = {
            list: []
        };
        var popup = {
            pdfSrc:''
        };
        var dirStruct = {
            list:[]
        };

        publishers.criancas.subscribe(function(list){
            criancas.list = list;
        });

        publishers.popup.subscribe( function(path){
            popup.pdfSrc = path;
        }, consts.pubsubEvents.PDF);

        return{
            criancas: criancas,
            popup: popup,
            dirStruct: dirStruct
        }
    });
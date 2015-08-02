define(
    [
        'baseRepo',
        'pubsub',
        'consts'
    ],
    function (baseRepo, pubsub, consts) {
        var criancas = pubsub.makePublisher({
            list: function (callback) {
                baseRepo.getCriancasList(function (error, json) {
                    if (error) {
                        console.log('error on getting list ' + error);
                    } else {
                        this.publish(JSON.parse(json));
                        callback();
                    }
                }.bind(this))
            }
        });


        var popup = pubsub.makePublisher({
            pdf: function (srcPath, router, requestPath) {
               this.publish(srcPath, consts.pubsubEvents.PDF, router, requestPath);
            }
        });

        return {
            criancas: criancas,
            popup: popup
        }
    }
);
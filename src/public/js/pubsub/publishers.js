define(
    [
        'baseRepo',
        'pubsub',
        'consts'
    ],
    function (baseRepo, pubsub, consts) {
        var criancas = pubsub.makePublisher({
            list: function () {
                baseRepo.getCriancasList(function (error, json) {
                    if (error) {
                        console.log('error on getting list ' + error);
                    } else {
                        this.publish(JSON.parse(json));
                    }
                }.bind(this))
            }
        });


        var popup = pubsub.makePublisher({
            pdf: function (srcPath) {
               this.publish(srcPath, consts.pubsubEvents.PDF);
            }
        });

        return {
            criancas: criancas,
            popup: popup
        }
    }
);
define(
    [
        'baseRepo',
        'pubsub',
        'consts'
    ],
    function (baseRepo, pubsub, consts) {
        var criancas = {
            list: function () {
                baseRepo.getCriancasList(function (error, json) {
                    if (error) {
                        console.log('error on getting list ' + error);
                    } else {
                        this.publish(JSON.parse(json));
                    }
                }.bind(this))
            }
        };


        var popup = {
            pdf: function (srcPath) {
               this.publish(srcPath, consts.pubsubEvents.PDF);
            }
        };

        pubsub.makePublisher(criancas);
        pubsub.makePublisher(popup);
        return {
            criancas: criancas,
            popup: popup
        }
    }
);
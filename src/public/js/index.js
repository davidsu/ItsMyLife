require.config({
    baseUrl:'js/',
    paths:{
        mainStore: 'stores/mainStore',
        criancasTbl: 'reactBuilt/Criancas/Table',
        _: 'lib/lodash',
        main: 'reactBuilt/main/main',
        Popup: 'reactBuilt/popup/Popup',
        pubsub: 'pubsub/pubsub',
        publishers: 'pubsub/publishers',
        baseRepo: 'repo/baseRepo',
        consts: 'consts',
        AutoComplete: 'reactBuilt/AutoComplete'
    }
});

require(['main', 'pubsub'], function (renderRoot, pubsub) {
    //renderRoot(pubsub.setAfterPublishCallback);
    pubsub.setAfterPublishCallback(renderRoot);
    renderRoot();
});
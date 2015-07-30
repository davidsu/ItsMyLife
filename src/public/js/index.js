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
        AutoComplete: 'reactBuilt/AutoComplete',
        page: 'lib/page'
    }
});

require(['main', 'pubsub', 'page'], function (renderRoot, pubsub, page) {
    //renderRoot(pubsub.setAfterPublishCallback);

    pubsub.setAfterPublishCallback(renderRoot);
    renderRoot();
});
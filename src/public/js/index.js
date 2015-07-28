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
        _AutoComplete: 'reactBuilt/_AutoComplete'
    }
});

require(['main', 'pubsub'], function (renderRoot, pubsub) {
    pubsub.setAfterPublishCallback(renderRoot);
    renderRoot();
});
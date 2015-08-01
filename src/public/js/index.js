require.config({
    baseUrl:'js/',
    paths:{
        _: 'lib/lodash',
        page: 'lib/page',
        reactRouter: 'lib/ReactRouter',
        react: 'lib/react'
    },
    map:{
        '*':{
            AutoComplete: 'reactBuilt/AutoComplete',
            main: 'reactBuilt/main/main',
            Popup: 'reactBuilt/popup/Popup',
            pubsub: 'pubsub/pubsub',
            publishers: 'pubsub/publishers',
            baseRepo: 'repo/baseRepo',
            consts: 'consts',
            mainStore: 'stores/mainStore',
            criancasTbl: 'reactBuilt/Criancas/Table',
            routing: 'pubsub/routing'
        },
        'reactBuilt/Criancas':{
            Row: 'reactBuilt/Criancas/Row',
            Cell: 'reactBuilt/Criancas/Cell',
            Headers: 'reactBuilt/Criancas/Headers',
            CellFactory: 'reactBuilt/Criancas/cellFactory'
        }
    }
});

require(['main', 'pubsub', 'reactRouter', 'react'], function (renderRoot, pubsub, ReactRouter, React) {
    //renderRoot(pubsub.setAfterPublishCallback);
    //console.log(page);
    pubsub.setAfterPublishCallback(renderRoot);
    //Router.run()
    renderRoot();
});
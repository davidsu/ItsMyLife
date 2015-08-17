require.config({
    baseUrl:'js/',
    paths:{
        _: 'lib/lodash',
        page: 'lib/page',
        reactRouter: 'lib/ReactRouter',
        react: 'lib/react-with-addons'
    },
    map:{
        '*':{
            AutoComplete: 'reactBuilt/AutoComplete',
            ReceiptPlaceholder: 'reactBuilt/ReceiptPlaceholder',
            main: 'reactBuilt/main/main',
            Popup: 'reactBuilt/popup/Popup',
            pubsub: 'pubsub/pubsub',
            publishers: 'pubsub/publishers',
            baseRepo: 'repo/baseRepo',
            consts: 'consts',
            mainStore: 'stores/mainStore',
            criancasTbl: 'reactBuilt/Criancas/Table',
            routes: 'reactBuilt/config/routes'
        },
        'reactBuilt/Criancas':{
            Row: 'reactBuilt/Criancas/Row',
            Cell: 'reactBuilt/Criancas/Cell',
            Headers: 'reactBuilt/Criancas/Headers',
            CellFactory: 'reactBuilt/Criancas/cellFactory'
        },
        'reactBuilt/config':{
            insertCriancas: 'reactBuilt/inserts/criancas'
        }
    }
});

require(['main', 'pubsub', 'reactRouter', 'react', 'routes'], function (renderRoot, pubsub, Router, React, routes) {
    //renderRoot(pubsub.setAfterPublishCallback);
    //console.log(page);
    //pubsub.setAfterPublishCallback(renderRoot);
    routes();
});
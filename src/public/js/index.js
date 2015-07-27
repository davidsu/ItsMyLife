require.config({
    baseUrl:'js/',
    paths:{
        criancasTbl: 'reactBuilt/Criancas/tbl',
        _: 'lib/lodash',
        main: 'reactBuilt/main/main',
        Popup: 'reactBuilt/popup/Popup',
        pubsub: 'pubsub/pubsub',
        publishers: 'pubsub/publishers',
        baseRepo: 'repo/baseRepo',
        consts: 'consts'
    }
});

require(['main'], function (main) {
    main();
});
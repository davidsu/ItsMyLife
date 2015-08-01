define(
    ['publishers', 'page'],
    function (publishers, page) {
        page('/#criancas', publishers.criancas.list.bind(publishers.criancas));
        page.start();
    });
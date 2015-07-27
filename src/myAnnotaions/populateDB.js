function addItem(item){

    var request = new XMLHttpRequest();
    request.open('POST', '/criancas');
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(item));
}

addItem(
    {
          receipt: '/Users/davidsu/Dropbox/Pagamentos/Criancas/2015_07_00_keitanaSchia.pdf'
        , payTo: 'keytanaSchia second period'
        , numOfPayments: 3
        , children: 'Gabi Serena'
        , date: new Date('July 16, 2015')
        , payMethod: 'credit card'
        , payValue: 3600
        , firstPayment: new Date('August 7, 2015')
    }
);


addItem(
    {
        receipt: '/Users/davidsu/Dropbox/Pagamentos/Criancas/2015_07_01_keitanaSchia.pdf'
        , payTo: 'keytanaSchia first period'
        , numOfPayments: 3
        , children: 'Gabi Serena'
        , date: new Date('July 2, 2015')
        , payMethod: 'credit card'
        , payValue: 3700
        , firstPayment: new Date('July 7, 2015')
    }
);

addItem(
    {
        receipt: '/Users/davidsu/Dropbox/Pagamentos/Criancas/2015_07_24_superTivTaam.pdf'
        , payTo: 'super'
        , numOfPayments: 1
        , children: 'Sham Gabi Serena'
        , date: new Date('July 24, 2015')
        , payMethod: 'credit card'
        , payValue: 355.3
        , firstPayment: new Date('July 24, 2015')
    }
);


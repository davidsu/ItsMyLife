var mongoose = require('mongoose');

// Create a new schema for our tweet data
var schema = new mongoose.Schema({
      receipt: String
    , payTo: String
    , numOfPayments: Number
    , children: String
    , date: Date
    , payMethod: String
    , payValue: Number
    , firstPayment: Date
});

// Return a Tweet model based upon the defined schema
var Criancas = mongoose.model('Criancas', schema);

exports.list = function(req, res, next){
    Criancas.find({}, function(err, despesas){
        if(err){
            return next(err);
        }else{
            res.json(despesas);
        }
    });
};

exports.create = function(req, res, next){
    var despesa = new Criancas(req.body);
    despesa.save(function(err){
        if(err){
            return next(err);
        }else{
            res.json(despesa);
        }
    });
};

exports.getReceiptById = function(req, res, next){
    Criancas.findOne({_id:req.params.id}, function(err, despesas){
        if(err){
            return next(err);
        }else{
            res.sendFile(despesas.receipt);
        }
    });
};
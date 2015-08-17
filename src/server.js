'use strict';
// Require our dependencies
var
    express = require('express'),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Criancas = require('./models/Criancas.js'),
    receiptDir = require('./utils/receiptDir.js');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8081;

app.disable('etag');

mongoose.connect('mongodb://localhost/ItsMyLife');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.route('/criancas/:id')
    .get(Criancas.getReceiptById);

app.route('/criancas')
    .get(Criancas.list)
    .post(Criancas.create);

app.route('/filesPath')
    .get(function (req, res) {
        receiptDir.getFilesPaths(
            function (list) {
            res.json(list);
        });
    });

app.route('/filesPath/:path')
    .get(function (req, res) {
        console.log('just logging');
        receiptDir.getFilesPaths(
            function (list) {
                res.json(list);
            },
            req.params.path
        );
    });

app.route('/file')
    .get(function(req,res){
        console.log('file/:name');
        var filePath = path.join(process.cwd(), '../', req.query.path);
        console.log(filePath);
        if(fs.existsSync(filePath)){
            res.sendFile(filePath);
        }else{
            console.log('invalidFile: ' + filePath);
            res.status(405).send(filePath+' not a valid file');
        }
    });

var server = http.createServer(app).listen(port, function () {
    console.log('Express server listening on port ' + port);
});

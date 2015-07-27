var fs = require('fs');
var _ = require('lodash-node');

function getSubDirectories(path){
    if(!fs.lstatSync(path).isDirectory()){
        return [];
    }
}

function findDropBoxFolder(){

}

console.log()

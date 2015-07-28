var fs = require('fs');
var path = require('path');
var baseDir = path.join(process.cwd(), '../../');


var walk = function (dir, done) {
    var results = [];

    fs.readdir(dir, function (err, list) {
        if (err) return done(err);
        list = list.filter(function (path) {
            return path.indexOf('ItsMyLife') === -1;
        });
        var pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(function (file) {
            file = path.resolve(dir, file);
            fs.stat(file, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function (err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    if(file.indexOf('.DS_Store') === -1) {
                        results.push(file);
                    }
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

function getAllFilesFullPath(callback) {
    walk(baseDir, function (err, results) {
        if (err) throw err;
        callback(results);
    });
}
function getFilesPaths(callback) {
    getAllFilesFullPath(function(results){
        callback(results.map(function (item) {
                    return item.split('Pagamentos/')[1];
                }
            )
        )
    });
}

module.exports.getAllFilesFullPath = getAllFilesFullPath;
module.exports.getFilesPaths = getFilesPaths;
module.exports.baseDir = baseDir;
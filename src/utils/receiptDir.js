var fs = require('fs');
var path = require('path');
var baseDir = path.join(process.cwd(), '../');
var _ = require('lodash-node');

if(baseDir.indexOf('ItsMyLife')!==-1){
    baseDir = path.join(baseDir, '../');
}

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
                    if (file.indexOf('.DS_Store') === -1 && file.indexOf('.idea') === -1) {
                        results.push(file);
                    }
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

function getAllFilesFullPath(callback, baseDirectory) {
    walk(
        baseDirectory || baseDir,
        function (err, results) {
            if (err) throw err;
            callback(results);
        }
    );
}
function getFilesPaths(callback, baseDirectory) {

    getAllFilesFullPath(
        function (results) {
            var res = _.chain(results)
                .map(function (item) {
                    return item.split('Pagamentos/')[1];
                }).compact();
            callback(res);
        },
        path.join(baseDir, baseDirectory || '')
    );

}

module.exports.getAllFilesFullPath = getAllFilesFullPath;
module.exports.getFilesPaths = getFilesPaths;
module.exports.baseDir = baseDir;
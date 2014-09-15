var fs = require('fs');

var filteredList = function(path, extension, callback) {
    fs.readdir(path, function (err, list) {
        if (err) {
            return callback(err, filtered);
        }

        var filtered = list.filter(function(x) {
            return x.split('.')[1] == extension;
        });

        callback(null, filtered);
    });
};

module.exports = filteredList;

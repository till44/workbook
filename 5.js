var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];

var callback = function (err, list) {
    var a = list.filter(function(x) {
        return x.split('.')[1] == extension;
    })
    console.log(a.join('\n'));
};

fs.readdir(path, callback);



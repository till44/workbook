var fs = require('fs');
var file = process.argv[2];

var callback = function(err, buffer) {
    console.log(buffer.toString().split('\n').length - 1);
};

var buffer = fs.readFile(file, callback);

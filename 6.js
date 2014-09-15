var filteredList = require('./6m');

var path = process.argv[2];
var extension = process.argv[3];

var callback = function(err, list) {
    console.log(list.join('\n'));
};

filteredList(path, extension, callback);

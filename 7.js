var http = require('http');

var url = process.argv[2];

var onData = function(data) {
    console.log(data);
};

var onResponse = function (response) {
    response.setEncoding('utf8');
    response.on("data", onData);
};

http.get(url, onResponse);

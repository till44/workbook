var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var onRequest = function (request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
};

var server = http.createServer(onRequest);
server.listen(port);

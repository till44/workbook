var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var filename = process.argv[3];

var onRequest = function (request, response) {
    stream = fs.createReadStream(filename);
    stream.on('open', function () {
        stream.pipe(response);
    });
};

var server = http.createServer(onRequest);
server.listen(port);

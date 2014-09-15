var http = require('http');

var url = process.argv[2];

var allData = "";

var onData = function(data) {
    allData += data;
};

var onEnd = function(data) {
    console.log(allData.length);
    console.log(allData);
};

var onResponse = function (response) {
    response.setEncoding('utf8');
    response.on("data", onData);
    response.on("end", onEnd);
};

http.get(url, onResponse);

var http = require('http');

var urls = process.argv.slice(2);

var bodies = [];
var ready = 0;

var out = function() {
    console.log(bodies.join('\n'));
};

urls.forEach(function (url, index) {
    bodies.push("");

    http.get(url, function (response) {
        response.setEncoding('utf8');

        response.on("data", function(data) {
            bodies[index] += data;
        });
        response.on("end", function(data) {
            ready += 1;
            if (ready >= 3) {
                out();
            }
        });
    });
});

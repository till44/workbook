var net = require('net');

var timeOffset = 2;
var port = process.argv[2];

var datetime = function () {
    date = new Date();
    date.setHours(date.getHours() + timeOffset);
    var datetime = date.toISOString().split('T');
    datetime[1] = datetime[1].split(':').slice(0, 2).join(':');
    return datetime.join(' ');
};

var onConnect = function (socket) {
    socket.write(datetime());
    socket.close();
};

var server = net.createServer(onConnect);
server.listen(port);

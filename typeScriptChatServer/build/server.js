"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = require("ws");
var http = require("http");
var models_1 = require("./models");
var port = process.env.PORT || 3000;
var metricsPort = 8081;
var server = new WebSocket.Server({ port: port });
var metricsServer = http.createServer(requestHandler);
var connections = 0;
var errorCount = 0;
server.on('connection', function (ws) {
    console.log('new connection');
    connections++;
    ws.on('message', function (message) {
        try {
            var userMessage = new models_1.UserMessage(message);
            broadcast(JSON.stringify(userMessage));
        }
        catch (e) {
            console.error(e.message);
            errorCount++;
        }
    });
});


metricsServer.listen(metricsPort, function (err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log("server is listening on " + metricsPort);
});
function broadcast(data) {
    server.clients.forEach(function (client) {
        client.send(data);
    });
}
;
function requestHandler(request, response) {
    response.end("connections " + connections + "\nerror_count " + errorCount);
}
console.log('Server is running on port', port);

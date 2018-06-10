"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebSocket = require("ws");
var socket = new WebSocket("ws://server:3000");
for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
        socket.send('garbage');
    }, i * 1000);
}

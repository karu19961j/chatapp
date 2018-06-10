"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserMessage = (function () {
    function UserMessage(payload) {
        var data = JSON.parse(payload);
        if (!data.name || !data.message) {
            throw new Error('Invalid message payload received: ' + payload);
        }
        this.name = data.name;
        this.message = data.message;
    }
    return UserMessage;
}());
exports.UserMessage = UserMessage;

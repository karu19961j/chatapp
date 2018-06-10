import { Message } from 'type-script-server/src/index';


//define what our chat message will look like
//make a simple interface and an implementation of that interface that is able to parse an incoming string
//Our messages will just have two fields: a name and the message itself. We make an implementation of this interface so that we can have a way to create a message given a string value. That way when our client sends a message as a string, we can pull the username and the message from it and make a Message from it.
export class UserMessage implements Message {
    name: string;
    message: string;

    constructor(payload: string) {
        var data = JSON.parse(payload);

        if (!data.name || !data.message) {
            throw new Error('Invalid message payload received: ' + payload);
        }

        this.name = data.name;
        this.message = data.message;
    }
}
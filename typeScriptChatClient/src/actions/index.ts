//we declared our own Action type that will have type ADD_MESSAGE or ADD_USER as //well as the fields we will need for executing those actions (the message, //socket, and username). We also defined two functions that create our actions //that will be used when we want to dispatch a given action to Redux.
import { Message as MessageModel } from 'type-script-server/src/index';

export type Action = {
  type: 'ADD_MESSAGE',
  message: MessageModel
} | {
  type: 'ADD_USER',
  username: string,
  socket: WebSocket
}

export const addMessageAction = (message: MessageModel): Action => ({
  type: 'ADD_MESSAGE',
  message
});

export const addUserAction = (username: string, socket: WebSocket): Action => ({
  type: 'ADD_USER',
  username,
  socket
});

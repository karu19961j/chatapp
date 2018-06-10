import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, compose, Reducer } from 'redux';
import { Provider } from 'react-redux';
import store from './store';
import { App } from './components/App';
import { Action, addMessageAction } from './actions';
import { addMessage } from './reducers/addMessage';
import { addUser } from './reducers/addUser';
import { UserMessage } from './model/UserMessage';
import { ChatState } from './state';
const socket: WebSocket = new WebSocket("ws://chatapp-ts-server.herokuapp.com");





// Listen for messages from the server
socket.onmessage = (message: MessageEvent) => {
  store.dispatch(addMessageAction(new UserMessage(message.data)));
};

ReactDOM.render(
  <Provider store={store}>
      <App socket={socket} />
  </Provider>,
  document.getElementById("app")
);

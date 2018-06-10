import { createStore, compose, Reducer } from 'redux';
import { Action, addMessageAction } from './actions';
import { addMessage } from './reducers/addMessage';
import { addUser } from './reducers/addUser';
import { App } from './components/App';

import { UserMessage } from './model/UserMessage';
import { ChatState } from './state';


//we pass three parameters: a function to tell Redux how //to delegate actions to our reducers (we just pass an //action to every reducer and they decide if they handle //it or not), the initial state (undefined here because //our reducers handle making the initial state as a //default parameter), and the last parameter allows us to //use the Redux dev tools in Chrome.
function combineReducers(...reducers: Reducer<ChatState>[]) {
  return (state: ChatState, action: Action) => {
    return reducers.reduce((previous: ChatState, next: Reducer<ChatState>) => next(previous, action), state);
  }
}

let store = createStore(combineReducers(addMessage, addUser), undefined, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;
//responsible for checking if it is an action it cares about, and if so it makes //the appropriate modification. This reducer says when it finds the ADD_MESSAGE //action, it should modify our application state by adding a new message to our //list of messages. Note that we return a copy of the state, we don’t directly //modify the state.
import { Action } from '../actions';
import { ChatState } from '../state';

const initialState: ChatState = {
  messages: [],
  users: []
};

export function addMessage(state: ChatState = initialState, action: Action): ChatState {
  if (action.type === 'ADD_MESSAGE') {
    console.log("ADDING MESSAGE");
    return {
      messages: [ ...state.messages, action.message ],
      users: state.users
    };
  }

  return state;
}

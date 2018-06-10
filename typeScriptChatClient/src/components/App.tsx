import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';
import { addUserAction } from '../actions';
import { ChatState } from '../state';
import { ChatApp } from './ChatApp';
import store from '../store';
import '../../styles/components/App.scss';
//This function will map any field in the Redux store into the given prop of our component. In this case we aren’t pulling anything from the Redux store.
const mapStateToProps = (state: ChatState, ownProps: OwnProps): ConnectedState => ({});

//This function maps functions that will dispatch Redux actions to props in our component. In this case, our component will get an addUser prop that is a function that will dispatch our ADD_USER action and update our Redux store using the addUser reducer.
const mapDispatchToProps = (dispatch: redux.Dispatch<ChatState>): ConnectedDispatch => ({
  addUser: (username: string, socket: WebSocket) => {
    dispatch(addUserAction(username, socket));
  }
});
//defining what is handed to the React component, and what will be pulled out of the Redux store and mapped to the component props.

//The OwnProps interface shows that this component expects to be handed a WebSocket.
interface OwnProps {
  socket: WebSocket
}

//The ConnectedState would be any props that would be pulled directly out of the Redux store, in this case there isn’t anything we are pulling out of the store. 
interface ConnectedState {
}

//The ConnectedDispatch interface will map any of our action creators to the props of our component. So in this case we are expecting to get an addUser() function that takes a username and a WebSocket. 
interface ConnectedDispatch {
  addUser: (username: string, socket: WebSocket) => void
}

//the OwnState interface defines what the component state will be that isn’t pulled from our Redux store. This component will be keeping track of the current username and whether or not the sign in form has been submitted in its state.
interface OwnState {
  username: string,
  submitted: boolean
}

export class AppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  // Initialize the state
  state = {
    username: '',
    submitted: false
  };
  // Whenever the username field changes, store that in the component state so
  // we have an up to date copy when we submit the form
  usernameChangeHandler = (event: any) => {
    this.setState({ username: event.target.value });
  };

  // Whenever the username form is submitted, update the component state to say
  // it has been submitted (so we show the main app rather than the login page)
  // and fire the addUser() action to update our Redux store.
  usernameSubmitHandler = (event: any) => {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
    this.props.addUser(this.state.username, this.props.socket);
  };

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} socket={this.props.socket} />
      );
    }
    return (
      
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1 className="title">React Instant Chat</h1>
        <div>
        <h1>Hello</h1>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required
            className="username-field" />
        </div>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    );
  }
}

export const AppNotConnected: React.ComponentClass<OwnProps> = AppComponent;

export const App: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
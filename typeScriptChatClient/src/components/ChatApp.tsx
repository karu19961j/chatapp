//This component isn’t dispatching any actions, but it //is connecting to the Redux store in order to pull the //current list of messages out as a prop. It also //defines what to do when a user posts a message (just //send it with our socket).
import * as React from 'react';
import * as redux from 'redux';
import { connect } from 'react-redux';

import { Message as MessageModel } from 'type-script-server/src/index';
import { UserMessage } from '../model/UserMessage';
import { ChatState } from '../state';

import { Messages } from './Messages';
import { ChatInput } from './ChatInput';

const mapStateToProps = (state: ChatState, ownProps: OwnProps): ConnectedState => ({
  messages: state.messages
});

const mapDispatchToProps = (dispatch: redux.Dispatch<ChatState>): ConnectedDispatch => ({});

interface OwnProps {
  socket: WebSocket,
  username: string
}

interface ConnectedState {
  messages: MessageModel[]
}

interface ConnectedDispatch {
}

interface OwnState {
}

export class ChatAppComponent extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, OwnState> {

  sendHandler = (message: string) => {
    const messageObject: MessageModel = {
      name: this.props.username,
      message: message
    }
    this.props.socket.send(JSON.stringify(messageObject));
  }

  render() {
     return (
       <div className="container">
         <h1 className="title">React Instant Chat</h1>
         <Messages username={this.props.username} messages={this.props.messages} />
         <ChatInput onSend={this.sendHandler} />
       </div>
     );
   }
}

export const ChatAppTest:React.ComponentClass<OwnProps> = ChatAppComponent;

export const ChatApp: React.ComponentClass<OwnProps> = connect(mapStateToProps, mapDispatchToProps)(ChatAppComponent);

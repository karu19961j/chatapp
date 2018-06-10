//This simply renders a chat message, and marks if the //message is from the current user.
import * as React from 'react';

interface OwnProps {
  key: number,
  username: string,
  message: string,
  fromMe: boolean
}

interface OwnState {
}

export class Message extends React.Component<OwnProps, OwnState> {

  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div className={`message ${fromMe}`}>
        <div className='username'>
          { this.props.username }:  { this.props.message }
        </div>
      </div>
    );
  }
}

export const MessageTest:React.ComponentClass<OwnProps> = Message
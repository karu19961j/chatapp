import * as React from 'react';
import { shallow } from 'enzyme';
import { MessagesTest }  from '../Messages';

const socket: WebSocket = new WebSocket("ws://localhost:3000");

it("renders a div tag", () => {
  const component = shallow(<MessagesTest username="test" messages={[]}/>);
  expect(component.contains(<div className="messages" id="messageList" />)).toBe(true);
})
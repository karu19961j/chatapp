import * as React from 'react';
import { shallow } from 'enzyme';
import { ChatAppTest }  from '../ChatApp';


const socket: WebSocket = new WebSocket("ws://localhost:3000");

it("renders a h1 tag", () => {
  const component = shallow(<ChatAppTest socket={socket} username=""/>);
  
  expect(component.contains(<h1 className="title">React Instant Chat</h1>)).toBe(true);
})
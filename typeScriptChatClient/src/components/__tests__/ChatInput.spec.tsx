import * as React from 'react';
import { shallow } from 'enzyme';
import { ChatInput }  from '../ChatInput';


const socket: WebSocket = new WebSocket("ws://localhost:3000");

it("renders a p tag", () => {
  const component = shallow(<ChatInput onSend={() => console.log("test")}/>);
  
  expect(component.contains(<p></p>)).toBe(true);
})
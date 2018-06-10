import * as React from 'react';
import { shallow } from 'enzyme';
import { AppNotConnected }  from '../App';


const socket: WebSocket = new WebSocket("ws://localhost:3000");

it("renders a h1 tag", () => {
  const component = shallow(<AppNotConnected socket={socket}/>);
  
  expect(component.contains(<h1>Hello</h1>)).toBe(true);
})
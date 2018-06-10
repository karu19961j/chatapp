import * as React from 'react';
import { shallow } from 'enzyme';
import { MessageTest }  from '../Message';

const socket: WebSocket = new WebSocket("ws://localhost:3000");

it("renders a div tag", () => {
  const component = shallow(<MessageTest key={1} username="test" message="testings" fromMe={true}/>);
  expect(component.contains(<div className="message from-me"><div className='username'>
  test:  testings
</div></div>)).toBe(true);
})
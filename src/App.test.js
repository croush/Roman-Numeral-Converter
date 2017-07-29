import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './';

const todo = {};
const wrapper = mount(
  <App App={todo} />
);
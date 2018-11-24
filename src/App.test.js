import React from 'react';
import { mount } from 'enzyme';

import App from './App.js'

describe('Output', function() {
  it('should output error if input is not JSON', function() {
  	const app = mount(<App/>);

  	const input = app.find('.input');
  	const output = app.find('.output');

  	input.instance().value = 'not valid JSON';
  	input.simulate('change');
  	
  	expect(output.render().text()).toBe('Please insert valid JSON');
  	
  });

  it('should output JSON if input is correct', function() {
  	const app = mount(<App/>);

  	const input = app.find('.input');
  	const output = app.find('.output');

  	input.instance().value = '{}';
  	input.simulate('change');

  	expect(output.text()).not.toBe('Please insert valid JSON')
  	
  });

});

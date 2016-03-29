jest.unmock('../app');

import App from '../app';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);

    const expectedItems = 3;
    expect(wrapper.find('.item').length).toEqual(expectedItems);
  });
});

jest.unmock('../app');

import App from '../app';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('App', () => {
  it('lives', () => {
    const renderer = TestUtils.createRenderer();
    const instance = React.createElement(App);

    renderer.render(instance);
    const output = renderer.getRenderOutput();

    expect(output.props.children.length).toEqual(3);
  });
});

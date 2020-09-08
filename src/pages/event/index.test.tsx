import React from 'react';
import { render } from '@testing-library/react';
import EventList from './index';

import renderer from 'react-test-renderer';

window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

describe('EventList component renders correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <EventList />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  
});

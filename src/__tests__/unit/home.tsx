import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../../pages/index';

test('Make sure the home page is rendered', () => {
  const wrapper = mount(<IndexPage />);
  expect(wrapper).toBeDefined();
});

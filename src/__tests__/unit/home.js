import React from 'react';
import { mount } from 'enzyme';
import IndexPage from '../../pages/index';
// TODO: https://github.com/RajaBellebon/tulec/issues/14
test.skip('Make sure the home page is rendered', () => {
  const wrapper = mount(<IndexPage />);
  expect(wrapper).toBeDefined();
});

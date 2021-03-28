import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from '../../pages/index';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<IndexPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

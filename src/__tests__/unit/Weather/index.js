import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Weather from './../components/Weather/Weather';
import { feeling, weatherEmoji } from './../components/Weather/helper'

Describe('Weather Functions', () => {
  test('Feeling function should return default emoji 👋🏾)', () => {
    expect(feeling(undefined)).toBe('👋🏾');
  });
  test('Weather emoji function should return default emoji 👋🏾', () => {
    expect(weatherEmoji(undefined)).toBe('👋🏾');
  });
});


Describe('Weather Components', () => {
  const wrapper = mount(<Weather />);
  test('Weather component should render', () => {
    expect(wrapper).toBeDefined();
  });
  test('Weather component should match snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
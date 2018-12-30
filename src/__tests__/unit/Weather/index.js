import React from 'react';
import { mount, configure } from 'enzyme';
import cases from 'jest-in-case';

import Weather from './../../../components/weather/Weather';
import {
  feelingEmoji,
  weatherEmoji,
} from './../../../components/weather/helper';

cases(
  'Weather Feeling Function',
  opts => {
    expect(feelingEmoji(opts.temperature)).toBe(opts.emoji);
  },
  [
    { name: 'Undefined', temperature: undefined, emoji: '😫' },
    { name: 'temp >= 25', temperature: 25, emoji: '🤩' },
    { name: 'temp >= 25', temperature: 30, emoji: '🤩' },
    { name: 'temp < 25 && temp >= 20', temperature: 20, emoji: '😓' },
    { name: 'temp < 25 && temp >= 20', temperature: 22, emoji: '😓' },
    { name: 'temp < 20  && temp >= 0', temperature: 15, emoji: '😰' },
    { name: 'temp < 20  && temp >= 0', temperature: '0', emoji: '😰' },
    { name: 'temp <= 0', temperature: -10, emoji: '🤧' },
    { name: 'Not a valid temperature', temperature: 'a', emoji: '👋🏾' },
  ],
);

cases(
  'Weather Emoji Function',
  opts => {
    expect(weatherEmoji(opts.description)).toBe(opts.emoji);
  },
  [
    { name: 'Undefined', description: undefined, emoji: '😫' },
    { name: 'Rain', description: 'rain', emoji: '🌧 ☔️' },
    { name: 'Sun', description: 'sun', emoji: '☀️' },
    { name: 'Clear', description: 'clear', emoji: '☀️' },
    { name: 'Sun, clouds', description: 'sun, clouds', emoji: '🌤⛅' },
    { name: 'Sun and Cloud', description: 'Sun And Cloud', emoji: '🌤⛅' },
    { name: 'Sun, cloud', description: 'Sun, cloud', emoji: '🌤⛅' },
    { name: 'Cloud', description: 'cloud', emoji: '☁️' },
    { name: 'Clouds', description: 'clouds', emoji: '☁️' },
    { name: 'Fog', description: 'fog', emoji: '🌫' },
    { name: 'Snow', description: 'snow', emoji: '❄️' },
    { name: 'Wind', description: 'wind', emoji: '🌬' },
    { name: 'Winds', description: 'winds', emoji: '🌬' },
    { name: 'Not a valid parameter', description: 'a', emoji: '👋🏾' },
  ],
);

describe('Weather Components', () => {
  const wrapper = mount(<Weather />);
  test('Weather component should render', () => {
    expect(wrapper).toBeDefined();
  });
  test('Weather component should match snapshots when state changes', () => {
    wrapper.setState({
      Country: 'AU',
      Name: 'Randwick',
      Lat: -33.9139319,
      Long: 151.2423863,
    });
    expect(wrapper).toMatchSnapshot();
  });
});

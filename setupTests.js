const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// https://github.com/airbnb/enzyme#installation
Enzyme.configure({ adapter: new Adapter() });

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

global.navigator.geolocation = mockGeolocation;

module.exports = {
  testMatch: [`${__dirname}/**/__tests__/**/*.(js|tsx|ts)`],
  // NOTE: all options with 'pattern' in the name are javascript regex's that will match if they match
  // anywhere in the string. Where-ever there are an array of patterns, jest simply 'or's all of them
  // i.e /\/__tests__\/_.*?|\/__tests__\/.*?\/_.*?|\/__tests__\/integration\//
  testPathIgnorePatterns: [
    // ignore files that are under a directory starting with "_" at the root of __tests__
    '/__tests__\\/_.*?',
    // ignore files under __tests__ that start with an underscore
    '/__tests__\\/.*?\\/_.*?',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  modulePathIgnorePatterns: ['./node_modules', '/dist/', '/.cache/'],
  moduleFileExtensions: ['js', 'json'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};

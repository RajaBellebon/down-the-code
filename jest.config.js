const transformNodeModules = [
  'react-syntax-highlighter', // uses dynamic imports which are not valid in node
  'ts-is-defined', // exports ESM in the package.json browser field
  'ts-tiny-invariant', // exports ESM in the package.json browser field
];

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
    '\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  // don't transform any files under node_modules except those defined in transformNodeModules
  transformIgnorePatterns: [
    `\\/node_modules\\/(?!${transformNodeModules.join('|')})`,
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  modulePathIgnorePatterns: ['./node_modules', '/dist/', '/.cache/'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  setupFiles: ['./setupTests.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
};

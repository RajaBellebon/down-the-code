const fs = require('fs');

require("dotenv").config({
  path: `${__dirname}/.env`,
})

const { SourceMapConsumer } = require('source-map');
if (SourceMapConsumer.initialize) {
  SourceMapConsumer.initialize({
    'lib/mappings.wasm': require.resolve('source-map/lib/mappings.wasm'),
  });
}
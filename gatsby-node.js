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

// Workaround for postcss-discard-overridden bug in Gatsby 3
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript' || stage === 'build-html') {
    const config = getConfig();
    
    // Find CssMinimizerPlugin and disable discardOverridden
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer.forEach((plugin) => {
        if (plugin.constructor.name === 'CssMinimizerPlugin') {
          // Modify the plugin options
          if (!plugin.options) plugin.options = {};
          if (!plugin.options.minimizerOptions) plugin.options.minimizerOptions = {};
          
          // Set preset to disable discardOverridden
          plugin.options.minimizerOptions.preset = ['default', { discardOverridden: false }];
        }
      });
      
      actions.replaceWebpackConfig(config);
    }
  }
};
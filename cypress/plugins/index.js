/// <reference types="cypress" />

const {cypressEsbuildPreprocessor} = require('cypress-esbuild-preprocessor');
const path = require('path');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on(
        'file:preprocessor',
        cypressEsbuildPreprocessor({
            esbuildOptions: {
                resolveExtensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
                define: {'process.env.NODE_ENV': '"development"'},
            },
        }),
    );
  // config.env.webpackFilename = 'webpack.config.cypress.js'
  // require('cypress-react-unit-test/plugins/load-webpack')(on, config)
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return config
}

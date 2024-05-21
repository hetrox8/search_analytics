const { environment } = require('@rails/webpacker');
const babelConfig = require('./babel.config');

// Babel Loader
environment.loaders.append('babel', {
  test: /\.(js|jsx|mjs)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: babelConfig()
  }
});

module.exports = environment;

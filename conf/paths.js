const path = require('path');

module.exports = {
  srcDir: path.join(__dirname, '..', 'src'),
  srcEntry: './src/index.js',
  confDir: __dirname,
  distDir: path.join(__dirname, '..', 'dist'),
  WebpackDevServerAssets: path.join(__dirname, 'WebpackDevServerAssets')
};

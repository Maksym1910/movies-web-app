const path = require('path');

module.exports = () => ({
  historyApiFallback: true,
  port: 8080,
  static: path.join(__dirname, 'static'),
  hot: true,
  compress: true,
});

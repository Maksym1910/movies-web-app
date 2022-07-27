const path = require('path');

module.exports = () => ({
  modules: [
    path.join(__dirname, 'src'),
    'node_modules',
  ],
  extensions: ['.tsx', '.jsx', '.ts', '.js'],
});

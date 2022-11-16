const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './lib/components/Index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [{test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}],
  },
};

const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  mode: "production",
  entry: './src/index',
  entry: {
    'fold-menu': './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: "bundle",
    filename: '[name].js',
    library: 'FoldMenu',
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CheckerPlugin
  ]
};
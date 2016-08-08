var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', './src/index'],
    vendors: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.[chunkhash].js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      entryJs: '/static/app.js',
      vendorsJs: '/static/vendors.js',
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel',
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }],
  },
};

var express = require('express'),
  app = express(),
  webpack = require('webpack'),
  WebpackMiddleware = require('webpack-dev-middleware'),
  WebpackHotMiddleware = require('webpack-hot-middleware'),
  config = require('./webpack.dev.config'),
  compiler = webpack(config),
  history = require('connect-history-api-fallback');

var host = 'localhost',
  port = 3000;

app.use(history({
  index: '/static/index.html',
  verbose: true,
  logger: console.log.bind(console),
}));

app.use(WebpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))

app.use(WebpackHotMiddleware(compiler));

app.listen(port, host, function (error) {
  if(error){
    console.log(error);
    return;
  }

  console.log('Listening at http://' + host + ':' + port);
});

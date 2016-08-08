

var markup = '<!doctype html><html><body></body></html>';
var jsdom = require('jsdom').jsdom;

var exposedProperties = [
  'window',
  'navigator',
  'document',
];

global.document = jsdom(markup || '');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

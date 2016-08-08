var zombie = require('zombie');

function World() {
  this.browser = new zombie();

  this.browser.keyDown = function(targetSelector, keyCode) {
    var event = this.window.document.createEvent('HTMLEvents');
    event.initEvent('keydown', true, true);
    event.which = keyCode;
    event.keyCode = keyCode;
    var target = this.window.document.querySelector(targetSelector);
    target && target.dispatchEvent(event);
  };

  this.visit = function(url, callback) {
    this.browser.visit(url, callback);
  };

}

module.exports = function() {
  this.World = World;
};
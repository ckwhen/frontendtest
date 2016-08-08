module.exports = function() {
  var origin = 0;
  this.Given(/^進入待辦事項$/, function(callback) {
    this.visit('http://localhost:3000', callback);

  });

  this.When(/^我輸入"([^"]*)"$/, function (task, callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser
      .fill('.todobox__input', task);

    origin = this.browser.querySelectorAll('.todolist').length;
    callback();
  });

  this.When(/^按下enter$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser
      .keyDown('.todobox__input', 13);

    callback();
  });

  this.Then(/^待辦事項會增加一筆$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions

    this.browser
      .assert.elements('.todolist', { atMost: origin + 1 });

    callback();
  });

  this.Then(/^輸入欄位會被清空$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    this.browser
      .assert.elements('.todobox__input', '');

    callback();
  });
};
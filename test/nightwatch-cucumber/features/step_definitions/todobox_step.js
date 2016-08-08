module.exports = function() {
  this.Given(/^進入待辦事項$/, function() {
    this.url('http://localhost.com:3000')
      .pause(3000);

  });

  this.When(/^我輸入"([^"]*)"$/, function (task) {
    // Write code here that turns the phrase above into concrete actions
    this.setValue('.todobox__input', task);

  });

  this.When(/^按下enter$/, function () {
    // Write code here that turns the phrase above into concrete actions
    this.setValue('.todobox__input', this.Keys.ENTER);
  });

  this.Then(/^待辦事項會增加一筆$/, function () {
    // Write code here that turns the phrase above into concrete actions
    this.expect.element('.todoitem').to.be.present.before(3000);

  });

  this.Then(/^輸入欄位會被清空$/, function () {
    // Write code here that turns the phrase above into concrete actions
    this.expect.element('.todobox__input').to.have.value.that.equal('');
  });
};
module.exports = {
  'Todo Box': function(browser) {
    browser
      .url('http://localhost:3000')
      .pause(3000);

    browser.setValue('.todobox__input', 'dinner with friends.');
    browser.expect.element('.todobox__input').to.have.value.that.equal('dinner with friends.');

    browser.setValue('.todobox__input', browser.Keys.ENTER);

    browser.expect.element('.todoitem').to.be.present.before(3000);

    browser.expect.element('.todobox__input').to.have.value.that.equal('');

    browser.end();

  },
};

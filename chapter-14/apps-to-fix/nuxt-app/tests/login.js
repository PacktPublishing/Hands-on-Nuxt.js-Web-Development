'use strict'

module.exports = {
  'Local login test': function (browser) {
    browser
      .url(browser.launchUrl + '/login')
      .waitForElementVisible('body', 1000)
      .assert.title('nuxt-e2e-tests')
      .assert.containsText('h1', 'Please login to see the secret content')
      .assert.visible('input[type=text][name=username]')
      .assert.visible('input[type=password][name=password]')
      .setValue('input[type=text][name=username]', 'demo')
      .setValue('input[type=password][name=password]', '123123')
      .click('button[type=submit]')
      .pause(1000)
      .assert.containsText('h2', 'Hello Alexandre!')
      .end()
  }
}

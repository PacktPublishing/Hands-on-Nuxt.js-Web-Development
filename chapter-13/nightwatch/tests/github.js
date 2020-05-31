'use strict'

module.exports = {
  'Demo test GitHub' : function (browser) {
    browser
      .url(browser.launchUrl) // or https://github.com/lautiamkok without setting launch_url in nightwatch.json
      .waitForElementVisible('body', 1000)
      .assert.title('lautiamkok (LAU TIAM KOK) · GitHub')
      .assert.visible('input[type=text][placeholder=Search]')
      .setValue('input[type=text][placeholder=Search]', 'nuxt')
      .waitForElementVisible('li[id=jump-to-suggestion-search-scoped]', 1000)
      .click('li[id=jump-to-suggestion-search-scoped]')
      .pause(1000)
      .assert.visible('ul[class=repo-list]')
      .assert.containsText('em:first-child', 'nuxt')
      .end()
  }
}

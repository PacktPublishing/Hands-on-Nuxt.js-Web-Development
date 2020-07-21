const chromedriver = require("chromedriver")
module.exports = (function (settings) {
  // console.log('Firefox Path:\r\n', gecko.path)
  settings.test_workers = false
  settings.webdriver.server_path = chromedriver.path
  return settings
})(require("./nightwatch.json"))

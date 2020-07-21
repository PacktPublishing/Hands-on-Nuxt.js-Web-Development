const geckodriver = require("geckodriver")
module.exports = (function (settings) {
  // console.log('Firefox Path:\r\n', geckodriver.path)
  settings.test_workers = false
  settings.webdriver.server_path = geckodriver.path
  return settings
})(require("./nightwatch.json"))

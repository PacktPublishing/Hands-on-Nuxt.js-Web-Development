module.exports = {
  src_folders: ["tests"],

  webdriver: {
    "start_process": true,
    "server_path": require('geckodriver').path,
    "port": 4444
  },

  test_settings: {
    default: {
      launch_url: 'https://github.com/lautiamkok',
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ],
          }
        }
      }
    }
  }
}

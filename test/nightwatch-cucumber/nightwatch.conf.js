var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
var nightwatchCucumber = require('nightwatch-cucumber')();

module.exports = (function() {

  return {
    "src_folders" : [nightwatchCucumber],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",

    "selenium": {
      "start_process": true,
      "server_path": seleniumServer.path,
      "host": "127.0.0.1",
      "port": 5000,
      "cli_args": {
        "webdriver.chrome.driver": chromedriver.path
      }
    },

    "test_settings" : {
      "default" : {
        "launch_url" : "http://127.0.0.1",
        "selenium_port"  : 5000,
        "selenium_host"  : "127.0.0.1",
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "firefox",
          "acceptSslCerts": false
        }
      },

      "chrome" : {
        "desiredCapabilities": {
          "browserName": "chrome",
          "acceptSslCerts": true
        }
      },

      "ie" : {
        "desiredCapabilities": {
          "browserName": "internet explorer",
          "acceptSslCerts": true
        }
      }
    }
  };
})();


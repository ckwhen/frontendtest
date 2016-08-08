# **前端自動化測試** #

分享幾個 frontend 自動化測試的套件
與介紹 unit test 與 TDD 等測試流程與方法

### 開始

```

git clone https://github.com/ckwhen/frontendtest.git

cd frontendtest

npm install

```

### 執行本機 server

預設位址: localhost:3000

### 指令

```
npm run test:enzyme
npm run test:cucumber
npm run test:nightwatch
npm run test:nightwatchcucumber

若無法正常測試，可能要將 module 安裝到 global
npm install -g mocha
npm install -g cucumber
npm install -g nightwatch
```

### 環境建置說明

介紹基礎的環境建置與各工具的環境如何使用

* [資料夾結構](#資料夾結構)
* [enzyme](#enzyme)
* [cucumber js](#cucumber-js)
* [nightwatch js](#nightwatch-js)
* [nightwatch-cucumber](#nightwatch-cucumber)

### 資料夾結構 ###

```

frontendtest
├─ lib/
├─ src/ // demo的 todo list 頁面
│   ├─ components/ // todo list component
│   ├─ index.html
│   └─ index.js // entry
│
├─ test/ // 所有測試 code
│   ├─ cucumberjs
│   ├─ enzyme
│   ├─ nightwatch
│   └─ nightwatch-cucumber
│
├─ .babelrc // Babel configs
├─ .gitignore // 讓 git 不要追蹤設定裡的檔案
├─ devServer // 本機 server
├─ package.json // 此專案的腳本與使用的模組
└─ webpack.dev.config // 本機 server webpack 設定

```

### enzyme ###

npm run test:enzyme 指令說明

```
mocha test/enzyme/test_helper.js test/enzyme/**/*_spec.js --require babel-register --require ignore-styles --recursive --watch -r mock-local-storage

test/enzyme/test_helper.js: 測試的環境建置
test/enzyme/**/*_spec.js: 受測的檔案

--require babel-register: 用 babel 轉碼
--require ignore-styles: 測試時忽略 css
-r mock-local-storage: 模擬 local storage

--recursive: 測試目標資料夾底下的所有測試碼
--watch: 監控，當測試碼有更動時重新執行
```

使用套件

```
enzyme

react-addons-test-utils
react-dom

mocha
chai
jsdom
```

### cucumber js ###

test:cucumber 指令說明

```
cucumber.js test/cucumberjs

test/cucumberjs: 受測資料夾，預設找尋 features 資料夾
```

使用套件

```
cucumber

zombie: headless browser for testing
```

### nightwatch js ###

nightwatch.json

```
src_folders: 測試資料夾
output_folder: 測試報告輸出資料夾

selenium
├─ server_path: selenium jar 檔案的位址
├─ cli_args
│   ├─ webdriver.chrome.driver: chrome browser driver 位址
│   └─ webdriver.ie.driver: ie browser driver 位址

test_settings: 測試的環境設定，多數的。預設為 default
desiredCapabilities: 設定測試的使用瀏覽器
```

### nightwatch-cucumber ###

大部分設定與 nightwatch, cucumber 相同
但在 src_folders 要加入 nightwatch-cucumber

```
var nightwatchCucumber = require('nightwatch-cucumber')();

{
  "src_folders" : [nightwatchCucumber]
}

```

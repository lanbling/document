# Vue工程中webpack配置



## 综述

配置和cli工具的版本相关

关键的配置：

publicPath

outputDir

assetsDir

devServer

productionSourceMap



vue.config.js

vue inspect > output.js

冒烟测试



## 调试

- vue.config.js文件的配置，用以在浏览器中展示源代码。（据测试，有写没写都可以调试。）

  ```js
  module.exports = {
    configureWebpack: {
      devtool: 'source-map'
    }
  }
  ```

- vscode要安装debugger for chrome。

- 配置launch.json文件，端口号要对上。先跑项目，后写这个文件。

  ```json
  {
      https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
          {
              "type": "chrome",
              "request": "launch",
              "name": "lanbling: 运行谷歌",
              "url": "http://localhost:8080",
              "webRoot": "${workspaceFolder}",
              "breakOnLoad": false,
              "sourceMapPathOverrides": {
                  "webpack:///src/*": "${webRoot}/*",
                  "webpack:///./*": "${webRoot}/*"
              }
          }
      ]
  }
  ```

- 会重新打开一个浏览器。设置断点，vscode和浏览器都能进行调试。


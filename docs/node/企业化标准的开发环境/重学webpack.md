# 重学webpack



## 核心概念

1. 入口
2. 输出
3. Loader
4. 插件
5. 模式/兼容性



## Webpack安装&使用

- 初始化项目

  ```bash
  #快速创建nodejs项目
  npm init -y
  ```

- nvm,node,npm环境确认

  ```bash
  nvm install/use v10.16.9
  node -v
  npm -v
  ```

- 两种webpack安装与三种使用方式

  ```bash
  npm install -g/-D webpack webpack-cli
  
  npx webpack&.node_modules/.bin/webpack&npm run
  ```



## 入口与输出

- 关键词entry，output

- Node的路径相关：path模块的使用

- output中的path需要使用绝对路径

  path.join()去拼接路径，Nodejs全局变量__dirname



## loaders、插件、HMR

- 关键词loaders、plugins

  test去匹配文件、loader倒序加载流水线处理

- plugin的使用，热模块替换

- 安装plugin的依赖，在plugins属性中new一个plugin

- webpack-dev-server

  引用HMR插件，修改js的时候，自动刷新页面



## 一些常用的babel和plugin

### babel

安装依赖

```bash
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
```

@babel/plugin-transform-runtime依赖于@babel/runtime

主要用于生产环境时提供一个运行环境

```bash
npm install @babel/runtime -S
```



### 打包时清除原打包目录：clear-webpack-plugin

```bash
npm install clean-webpack-plugin -D
```



### 复制资源文件：copy-webpack-plugin

```bash
npm install copy-webpack-plugin -D
```



### 压缩css文件和js文件

- css压缩

  ```bash
  npm install optimize-css-assets-webpack-plugin -D
  ```

- css分离

  ```bash
  npm install mini-css-extract-plugin -D
  ```

- js压缩

  ```bash
  npm install   -D
  ```



## 遇到的一些错误

- 在全局使用webpack和webpack-cli容易造成与项目版本不符合，最好将webpack和webpack-cli安装在项目目录中。安装前先删除package-lock.json文件。

- webpack-dev-server中的hot默认为true。

  因此不必在plugins中添加该模块，webpack.HotModuleReplacementPlugin。
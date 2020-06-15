# webpack入门

[TOC]



## 起步

使用两个包

```shell
npm install webpack  webpack-cli -D
```

初始化项目

```shell
npm init -y
//新建 src/index.js
```

编辑src/index.js

```js
//index.js
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const dog = new Animal('dog');
```

直接编译

```shell
npx webpack --mode=development
```

webpack有默认的设置，

入口文件默认src/index，编译后的目录名dist，编译后的入口文件main.js。

会发现这样打包出来的代码没有转成低版本的js。

这里就引入了loader的概念了，将源码转换



## loader

将js转成低版本，需要用babel-loader。

```shell
npm install babel-loader -D
```

光靠这一个loader没法工作，给它找几个队友

```shell
npm install @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

npm install @babel/runtime @babel/runtime-corejs3

```

在哪里去使用这些babel呢？

webapck的配置文件啊-webpack.config.js，根目录创建。

```js
//webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/ //排除 node_modules 目录
            }
        ]
    }
}

```

看清楚些哪里哦，module配置项下的rules属性。

每个配置下有几项

1. test：正则匹配文件后缀
2. use：应该要用的loader。use可以是对象也可以是数组。对象就代表只有一个，数组就代表有多个loader。
3. exclude：需要排除的文件

拿babel来举个栗子：

babel的配置项蛮多的，可以在根目录下创建配置文件.babelrc，也可以将配置项写在webpack.config.js。

##### 创建.babelrc

```js
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3
            }
        ]
    ]
}

```



##### 在webpack.config中直接写

```js
//webpack.config.js
module.exports = {
    // mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            [
                                "@babel/plugin-transform-runtime",
                                {
                                    "corejs": 3
                                }
                            ]
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}

```

编译完，会发现版本的js转换成低版本的js了。

刚才在编译时用的命令

```shell
npx webpack --mode=development
```

可以把这个mode写在配置文件中

```js
module.exports = {
    //....
    mode: "development",
    module: {
        //...
    }
}

```

起到的作用是，将process.env.NODE_ENV的值设为mode的值。

不同的模式有不一样的编译方式，开发和生产所需要的的东西是不一样的。这个需要去翻看细节。



## 在浏览器中查看页面

```shell
npm install html-webpack-plugin -D 
```

修改配置文件

```js
//首先引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //...
    plugins: [
        //数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            minify: {
                removeAttributeQuotes: false, //是否删除属性的双引号
                collapseWhitespace: false, //是否折叠空白
            },
            // hash: true //是否加上hash，默认是 false
        })
    ]
}
```

这个插件还提供了配置文件。可以根据配置内容动态渲染页面。

在public中创建配置文件config.js

```js
//public/config.js 除了以下的配置之外，这里面还可以有许多其他配置，例如,pulicPath 的路径等等
module.exports = {
    dev: {
        template: {
            title: '你好',
            header: false,
            footer: false
        }
    },
    build: {
        template: {
            title: '你好才怪',
            header: true,
            footer: false
        }
    }
}

```

在webpack.config中做修改

```js
//webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];

modue.exports = {
    //...
    mode: isDev ? 'development' : 'production'
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            config: config.template
        })
    ]
}

```

在index.html就可以使用config这个变量了

index.html如下

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <% if(htmlWebpackPlugin.options.config.header) { %>
    <link rel="stylesheet" type="text/css" href="//common/css/header.css">
    <% } %>
    <title><%= (htmlWebpackPlugin.options.config.title) %></title>
</head>

<body>
</body> 
<% if(htmlWebpackPlugin.options.config.header) { %>
<script src="//common/header.min.js" type="text/javascript"></script> 
<% } %>
</html>

```

process.env是node中的环境变量，默认是没有NODE_ENV的这个变量的，因此需要手动写入。在package.json中的script写入。

兼容windwos和mac

```shell
npm install cross-env -D
```

```json
{
    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack",
        "build": "cross-env NODE_ENV=production webpack"
    }
}
```

npm run dev这个命令其实就是

```shell
npx webpack  //前面设置了变量
```

- #### 如何在浏览器中实时展示效果

```shell
npm install webpack-dev-server -D
```

```json
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server",
    "build": "cross-env NODE_ENV=production webpack"

},

```

webpack-dev-server有一些配置参数：

```js
//webpack.config.js
module.exports = {
    //...
    devServer: {
        port: '3000', //默认是8080
        quiet: false, //默认不启用
        inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
        stats: "errors-only", //终端仅打印 error
        overlay: false, //默认不启用
        clientLogLevel: "silent", //日志等级
        compress: true //是否启用 gzip 压缩
    }
}
```



## devtool

将编译后的代码映射回原始代码。不同的值会影响构建速度。

可供选择值有：

- cheap-module-eval-source-map  开发环境下使用

  可以定位到源码错误，原先的行数。

  **开发环境使用**

- none。

  **生产环境使用**

- source-map

  生成.map文件。根据报错信息找到，在打包出的js文件中增加一个引用注释，以便开发工具在哪里可以找到它。

  **生产环境使用**

- hidden-source-map

  生成.map文件

  **生产环境使用**

###### 注意点：一般不会将.map文件部署到CDN，更希望将.map文件传到错误解析系统，然后格局上报的错误信息，直接解析到出错的源码位置。



## 如何处理样式文件

```shell
npm install style-loader less-loader css-loader postcss-loader autoprefixer less -D
```

配置文件：

```js
//webpack.config.js
module.exports = {
    //...
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')({
                                    "overrideBrowserslist": [
                                        ">0.25%",
                                        "not dead"
                                    ]
                                })
                            ]
                        }
                    }
                }, 'less-loader'],
                exclude: /node_modules/
            }
        ]
    }
}
```

#### 各个loader的作用：

- style-loader

  生成style标签，插入到head中

- css-loader

  处理@import等语句

- postcss-loader和autoprefix

  自动生成浏览器前缀

- less-loader

  将less文件转成css文件

#### loader的执行顺序：

less-laoder --> postcss-loader --> css-loader -->style-loader

#### 将autoprefix中为配置单独提取成一个文件.browserslistrc

```json
{
	"overrideBrowserslist": [
        ">0.25%",
        "not dead"
    ]
}
```



## 图片/字体文件处理

```shell
npm install url-loader url-file-loader -D
```

在webpack.config.js中配置

```js
//webpack.config.js
module.exports = {
    //...
    modules: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240, //10K
                            esModule: false 
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
}
```

可以通过options参数修改输入的文件名

```js
//....
use: [
    {
        loader: 'url-loader',
        options: {
            limit: 10240, //10K
            esModule: false,
            name: '[name]_[hash:6].[ext]'
        }
    }
]
```



## 处理html中的本地图片

```html
<!-- index.html -->
<img src="<%= require('./thor.jpeg') %>" />
```

webpack的默认配置有些是很好用的，为了满足自己的需求，才进行修改。



## 入口文件

entry的值可以是一个字符串，也可以是数组和对象

```js
//webpack.config.js
module.exports = {
    entry: './src/index.js' //webpack的默认配置
}
```

多个入口的写法：

```js
entry: [
    './src/polyfills.js',
    './src/index.js'
]
```



## 出口文件

```js
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //必须是绝对路径
        filename: 'bundle.js',
        publicPath: '/' //通常是CDN地址
    }
}
```

如果要将编译出来的代码部署到CDN上，资源地址为：

“http://AAA/BBB/yourProject/XXX”，可以将publicPath改为：/AAA/BBB。



CDN有缓存问你，给filename加上hash

```js
//webpack.config.js
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'), //必须是绝对路径
        filename: 'bundle.[hash].js',
        publicPath: '/' //通常是CDN地址
    }
}
//hash是可以指定长度的。bundle.[hash:6].js
```



## 每次打包前清空dist目录

```shell
npm install clean-webpack-plugin -D
```

```js
//webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //...
    plugins: [
        //不需要传参数喔，它可以找到 outputPath
        new CleanWebpackPlugin() 
    ]
}
```

希望有些文件不要被清空

```js
//webpack.config.js
module.exports = {
    //...
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['**/*', '!dll', '!dll/**'] //不删除dll目录下的文件
        })
    ]
}
```



## 资料查阅

### loader的写法

```js
//1   只有一个loader
{
    test: /\.jsx?$/,
    use: 'babel-loader'
}

//2  只有一个loader
{
    test: /\.jsx?$/,
    loader: 'babel-loader',
    options: {
        
    }
}

//3  只有一个loader
{
    test: /\.jsx?$/,
    use: {
        loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "@babel/plugin-transform-runtime",
                        {
                            "corejs": 3
                        }
                    ]
                ]
            }
    }
}

//4 多个loader
{
    test: /\.jsx?$/,
    use: ['style-loader', 'css-loader']
}
这个use中的每一项可以是字符串，也可以是对象
```



### npx

npx想要解决的主要问题，就是调用内部安装的模块。比如，项目内部安装了测试工具Mocha。

```node
npm install -D mocha
```

一般来说，调用Mocha，只能在项目脚本和package.json的script字段里面，如果想在命令行下调用，必须像下面这样。

```js
node_modules/.bin/mocha --version
```

npx就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样执行就可以了

```js
npx mocha --version
```

npx的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。



npx后面的模块无法在本地发现，就会下载同名模块。使用后，就删除



### npx与npm

npm安装包，跑脚本；

npx执行命令行。



## 参考链接

[带你深度解锁Webpack系列(基础篇)](https://juejin.im/post/5e5c65fc6fb9a07cd00d8838#heading-8)
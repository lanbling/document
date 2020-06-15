# webpack进阶

[TOC]

## 1、静态资源拷贝

在入口文件src/index.js中，引入其它js或者css文件，则会参与编译。

如果在public/index.html中引入其它文件，这里则不参与编译，因此导入文件的时候会报文件找不到的错误。因此，在index.html引入的文件，需要额外输出到编译后的dist文件中。

```
public的目录结构：
```

```html
├── public
│   ├── config.js
│   ├── index.html
│   ├── js
│   │   ├── base.js
│   │   └── other.js
│   └── login.html

```

现在，在index.html引入./js/base。

```index
<script src="./js/base"></script>
```

安装插件CopyWebpackPlugin，它的作用是将单个文件或者整个目录复制到构建目录中。

```shell
npm install copy-webpack-plugin -D
```

修改当前配置

```js
//webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = [
    //...
    plugins: [
    	new CopyWebpackPlugin([
    		{
    			from: 'public/js/*.js',
    			to: path.resolve(__dirname, 'dist', 'js'),
                flatten: true
    		}
		])
	]
]
```

flatten参数为true时则只拷贝文件，不会把文件夹路径也带上。



## 2、ProvidePlugin

ProvidePlugin作用就是提供全局变量，在文件中使用类似jquery、react这样的库时，不需要每次import或者require。

ProvidePlugin是webpack的内置插件。

```js
//webpack.config.js
const webpack = require('webpack');
module.exports = {
    //...
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            Components: ['react', 'Component'],
            Vue: ['vue/dist/vue.esm.js', 'default'],
            $: 'jquery',
            _map: ['loadsh', 'map']
        })
    ]
}
```

默认查找这些库的路径是当前文件夹./**和node_modules。



## 3、抽离CSS

编译后打包成一个文件太大了，可以将css文件抽离出来。

首先，安装loader

```shell
npm install mini-css-extract-plugin -D
```

修改配置文件

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader': {
                    	loader: 'postcss-loader',
                    	options: {
                    		plugins: function(){
                				return [
                					require('autoprefixer')({
            							"overrideBrowserslist": [
            								"defaults"
        								]
            						})
                				]
            				}
                    	}
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
}
```

可以将关于浏览器的配置写在根目录的.browserslistrc文件中，这样所有的loader可以共用。

```shell
last 2 version
> 0.25%
not dead
```

则上面的配置文件可以简化为

```js
//webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader': {
                    	loader: 'postcss-loader',
                    	options: {
                    		plugins: function(){
                				return [
                					require('autoprefixer')()
                				]
            				}
                    	}
                    }
                ],
                exclude: /node_modules/
            }
        ]
    }
}
```

重新编译：npm run build，生成的目录结构如下

```html
.
├── dist
│   ├── assets
│   │   ├── alita_e09b5c.jpg
│   │   └── thor_e09b5c.jpeg
│   ├── css
│   │   ├── index.css
│   │   └── index.css.map
│   ├── bundle.fb6d0c.js
│   ├── bundle.fb6d0c.js.map
│   └── index.html
```



## 4、按需加载

我们不需要一次性加载所有的js文件，而应该在不同阶段去加载。可以使用import语法。

import（）语法，需要@babel/plugin-syntax-dynamic-import的插件支持，但是因为当前@babel/preset-env预设中已经包含了，因此不需要单独再去配置

```js
document.getElementById('btn').onclick = function() {
    import('./handle').then(fn => fn.default());
}
```

打开浏览器的network会发现是点击之后才回去加载文件。

直接npm run buidl进行构建，会发现构建时生成一个chunk，当代码执行到chunk的时候，才会去加载chunk。

![image-20200614091922014](http://image.lanbling.com/image-20200614091922014.png)



## 5、热更新

之前修改除了配置文件外的文件时，每次保存后，都会重新刷新页面，配置一下热更新，将不会刷新整个页面。

1. 首先配置devServer的hot为true

2. 并且在plugins中增加new webpack.HotModuleReplacementPlugin()

   ```js
   //webpack.config.js
   const webpack = require('webpack');
   module.exports = {
       //...
       devServer: {
           hot: true
       },
       plugins: [
           new webpack.HotModuleReplacementPlugin()
       ]
   }
   ```

3. 在入口文件中新增

   ```js
   //src/index
   if(module && module.hot){
       module.hot.accept();
   }
   ```

   



## 6、多页应用打包

```js
//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        login: './src/login.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:6].js'
    },
    //...
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './public/login.html',
            filename: 'login.html'
        })
    ]
}
```

编译后的目录如下：

```html
.
├── dist
│   ├── 2.463ccf.js
│   ├── assets
│   │   └── thor_e09b5c.jpeg
│   ├── css
│   │   ├── index.css
│   │   └── login.css
│   ├── index.463ccf.js
│   ├── index.html
│   ├── js
│   │   └── base.js
│   ├── login.463ccf.js
│   └── login.html
```

这样子写有个文件，就是在login.html和index.html中都会把所有编译后的文件都引入。因此需要制定chunks。

```js
//webpack.config.js
module.exports = {
    //...
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html', //打包后的文件名
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './public/login.html',
            filename: 'login.html', //打包后的文件名
            chunks: ['login']
        }),
    ]
}
```



## 7、resolve配置

resolve可以约定按照一定的规则去寻找模块对应的文件。

1. modules

   ```js
   //webpack.config.js
   module.exports = {
       //...
       resolve: {
           modules: ['./src/components', 'node_modules']
       }
   }
   ```

2. alias
   别名，映射成新的导入路径。

   ```js
   //webpack.config.js
   modules.exports = {
       //...
       resolve: {
           alias: {
               'react-native': '@my/react-native-web'
           }
       }
   }
   ```

3. extensions

   省略后缀，当去寻找文件时，会按照约定的规则寻找

   ```js
   //webpack.config.js
   module.exports = {
       //...
       resolve: {
           extension: ['web.js', '.js']
       }
   }
   ```

   

4. enforeExtensions

   设置为true时，不可省略后缀

## 8、区分不同的环境

我们将所有的配置内容写在webpack.config.js文件中，当要区分开发环境还是生产环境时，使用process.env.NODE_ENV。如果存在多处需要区分时，就会显得繁琐。

因此将文件拆分成三部分

- webpack.config.base.js
- webpack.config.dev.js
- webpack.config.prod.js

这里需要用到一个合并的函数，webpack-merge提供的merge函数，用于连接数组，合并对象。

```shell
npm install webpack-merge -D
```

以webpack.config.dev.js为例子：

```js
//webpack.config.dev.js
const merge = require('webpack-merge');
const baseWebpackConfig = require('./wepack.config.base');
module.exports = merge(baseWebpackConfig, {
    mode: 'development'
})
```

在package.json中指定对应的config文件：

```json
//package.json
{
    "scripts": {
        "dev": "cross-env NODE_ENV=development webpack-dev-server --config=webpack.config.dev.js",
        "build": "cross-env NODE_ENV=production webpack --config=webpack.config.prod.js"
    }
}
```

合并的方法有来各种：merge函数、merge.smart函数



## 9、定义环境变量

在webpack中定义环境变量，代码中使用。

webpack中的DefinePlugin来定义环境变量。

```js
//webpack.config.dev.js
const webpack = require('webpack');
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringfy('dev'),  //字符串
            FLAG: 'true'   //布尔值
        })
    ]
}
```

如何使用：

```js
//src/index.js
if(DEV === 'dev'){
    //开发环境
}else{
    //生产环境
}
```



## 10、利用webpack解决跨域问题

在4000端口跑一个server.js

```js
let express = require('express');
let app = express();
app.get('/api/user', (req, res) => {
    res.json({name: 'lanbing'});
});
app.listen(4000);
```

在本地直接访问这个http://localhost:4000/api/user，可以访问的到。

在3000端口请求

```js
fetch("/api/user")
.then(res => {})
.catch(err => {})

```

跨域请求，需要配置下

```js
//webpack.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrire: {
                    '/api': ''
                }
            }
        }
    }
}
```



## 11、前端模拟数据

```markdown
|简单数据模拟
```

```js
//wbpack.dev.js
module.exports = {
    devServer: {
        before(app){
            app.get('/user', (req, res) => {
                res.send({
                    name: 'lanbling'
                });
            })
        }
    }
}
```

在src/index.js中请求数据：

```js
fetch('user')
.then(res => {})
.catch(err => {} )
```

```markdown
|使用mocker-api mock数据接口
```

1. 安装mocker-api：

   ```shell
   npm install mocker-api -D
   ```

   

2. 在项目中新建mock文件夹，新建mocker.js，文件如下：

   ```js
   //mocker.js
   module.exports = {
       'GET /user': {name: 'lanbing'},
       'POST /login/account': (req, res) => {
           const {password, username} = req.body;
           if(password === '666' && username === 'lanbling' ){
               return res.send({
                   status: 'ok',
                   code: 0,
                   token: 'sadaf',
                   data: {
                       id: 1,
                       name: 'lanbling'
                   }
               });
           }else{
               return res.send({
                   status: 'error',
                   code: 403
               });
           }
       }
   }
   ```

   

3. 修改webpack.config.dev.js

   ```js
   //webpack.config.dev.js
   const apiMocker = require('mocker-api');
   const path = require('path');
   module.exports = {
       //...
       devServer: {
           before(app){
               apiMocker(app, path.resolve('./mock/mocker.js'))
           }
       }
   }
   ```

   

4. 重启npm run dev，可以看到，访问成功

5. 修改src/index.js，检查POST接口是否成功

   ```js
   //src/index.js
   fetch("/login/account", {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-type': 'applicaiton/json'
       },
       body: JSON.stringfy({
           username: 'labling',
           password: '888'
       })
   })
   .then(data => {})
   .catch(err => {})
   ```




## 参考链接

[带你深度解锁Webpack系列(进阶篇)](https://juejin.im/post/5e6518946fb9a07c820fbaaf#heading-13)

[测试](http://www.baidu.com)


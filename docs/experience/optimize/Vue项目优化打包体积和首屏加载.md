# Vue项目优化打包体积和首屏加载



## 优化打包体积

- 采用gzip压缩

  ```js
  productionGzip: true
  ```

  同时nginx也需要加入配置项

  ```nginx
  gzip on;
  gzip_min_length 1k;
  gzip_buffers 4 16k;
  gzip_comp_level 6;
  gzip_types application/javascript text/plain application/x-javascript text/css application/xml text/javascript application/json;
  gzip_vary on;
  ```

- 优化package

  - 按需加载element-ui

  - 按需加载lodash

    ```bash
    npm i babel-plugin-lodash lodash-webpack-plugin -D
    ```

    配置 .babelrc 文件

    ```js
    "plugins": [
      "lodash"
    ]
    ```

- 异步组件

  正常加载：

  ```js
  import CustomSql from '@/components/CustomSql'
  export default {
    components: {
      CustomSql
    }
  }
  ```

  并非所有的组件都需要渲染，按需加载组件

  ```js
  export default {
  	components: {
  		CustomSql: () => import('./CustomSql')
  	}
  }
  ```

- 路由懒加载

  ```
  //router.js
  //原来的写法
  import Home from '@/components/PC/Home'
//改成下面这种形式
  const Home = () => import('@/components/PC/Home')
  ```
  

- 使用CDN外部加载资源

  适用于`echarts`、`jQuery`、`lodash`这种**暴露了一个全局变量的库**。

  防止将某些import的包（package）打包到bundle中，而是在运行时（runtime）再去从外部获取这些扩展依赖（external dependencies）。具有外部依赖的bundle可以在各种模块上下文中使用。例如：CommonJS、AMD、全局变量和ES6模块。

  具体做法：

  ```html
  //index.html
  <script src="https://cdn.bootcss.com/echarts/4.1.0/echarts.min.js"></script>
  ```

  然后再webpack.base.config.js中，做改动

  ```js
  module.exports = {
      externals: {
          "echarts": "echarts"
      }
  }
  ```

- 减少打包的时间

  有些库已经被编译过了，就不需要再编译了。可以在babel中设置exclude。

  ```js
  {
  	test: /\.js$/,
      include: path.resolve(__dirname, '../src'),
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader'
      }]
  }
  ```

- 合理配置resolve，防止减慢打包时间

  省后缀的操作。会增加查找时间

- 使用DllPlugin插件，优化提高打包时间

  ```
  DllPlugin的入口文件（里面包含需要导入的公共库）->
  DllPlugin的配置文件->
  npm run dll生成编译后的文件->
  webpack.config.js用DllReferencePlugin进行声明->
  项目模板中引用公共资源
  ```

  将一些公共库提前打包，当重新构建的时候，这部分内容直接到固定的文件中去取。

  ```js
  //webpack.config.js
  module.exports = {
      entry: {
          // 项目入口文件
          'app':path.resolve(src, 'js', 'main.js')
      },
      plugins: [
          // dllPlugin关联配置
          new webpack.DllReferencePlugin({
              // 跟dll.config里面DllPlugin的context一致
              context: process.cwd(), 
              
              // dll过程生成的manifest文件
              manifest: require(path.join(src, 'js', "dll", "vendor-manifest.json"))
          })
      ]
  }
  ```

  项目模板中引用公共静态资源

  ```html
  //index.html
  <script type="text/javascript" src="/src/js/dll/vendor.dll.js"></script>
  ```

  在本地开发（dev）和线上构建过程中，将不再重复静态资源的构建，极大地缩减我们的构建时间。

- 提取公共代码

  webpack3使用：CommonsChunkPlugin

  webpack4使用：SplitChunksPlugin



## 优化首屏加载

减少app.js  vendor体积  这个两个大项体积

- 关于preload和prefetch

- 使用HTTP缓存

  ```nginx
  location ~ .*\.(js|css|ttf|svg|ico){
      add_header Cache-Control  max-age=86400;
  }
  ```


- 路由懒加载

## 原文链接

[记一次前端性能优化](https://juejin.im/post/5cd4d991e51d453a4a357e69)


# gulp开发流程



## 综述

task：用src方法指定文件夹，用pipe方法指定所需操作。

可以设置多个任务，形成任务流。



## 所需插件

```bash
npm install gulp -D
```

```bash
npm install gulp-uglify gulp-rename  del gulp-autoprefixer gulp-sass gulp-load-plugins -D
```

#### 插件用途：

gulp-uglify：压缩代码

gulp-rename  

del：删除文件夹

gulp-autoprefixer：浏览器前缀

gulp-sass：编译scss文件

gulp-load-plugins ：简写以gulp开头的插件

browser-sync：开发热编译、浏览器自动刷新

#### 配置package.json文件，为了配合autoprefiexer

```json
{
    "browserlist": [
        "last 2 Version",
        "> 2%"
    ]
}
```



## 一个简单的demo

```js
const {src, dest, series, watch} = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
const del = require('del');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//压缩js  uglify.js
function js(cb){
    src('js/*.js')
    .pipe(plugins.uglify())
    .pipe(dest('./dist/js'))
    .pipe(reload({ stream: true }));
    cb();
}

//对scss/less编译、压缩，输出css文件
function css(cb){
    src('css/*.scss')
    .pipe(plugins.sass({ outputStyle: 'compressed' }))
    .pipe(plugins.autoprefixer({
        cascade: false,
        remove: false
    }))
    .pipe(dest('./dist/css'))
    .pipe(reload({ stream: true }));
    cb();
}

//删除dist目录中的内容
function clean(cb){
    del('./dist');
    cb();
}

function html(cb){
    src('./*.html')
    .pipe(plugins.plumber({
        errorHandler: onError
    }))
    .pipe(dest('./dest/'))
    .pipe(reload({ stream: true }));
    cb();
}

//监听这些文件的变化
function watcher(){
    watch('js/*.js', js);
    watch('css/*.scss', css);
    watch('*.html', html);
}

//这个会主动去寻找./文件下的index.html文件
function server(cb){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    cb();
}

// exports.js = js
// exports.css = css
// exports.clean = clean
exports.default = series([
    clean,
    html,
    js,
    css,
    server,
    watcher
])
```


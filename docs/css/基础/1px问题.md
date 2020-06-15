# 1PX问题



## 概念

- 设备像素：设备的物理像素，其尺寸大小是绝对的
- 逻辑像素：CSS的像素单位，其尺寸大小是相对的，也称为独立像素
- 分辨率：屏长的设备像素 * 屏宽的设备像素
- dpi（dots per inch）：像素密度，表示水平或垂直方向每英寸的像素数目
- ppi（pixels per inch）：像素密度，表示沿对角线每英寸长度的像素数目
- 缩放因子（scale factor）：逻辑像素相对于设备像素的放大比例，可通过window.devicePixelRatio获取，但二者并不完全相同。



## 关系

- 关系1
  $$
  设备尺寸 * 像素密度 = 分辨率（设备像素）
  $$
  举例：

  iphone6s对角线长度为5.5inches，像素密度401ppi，分辨率1920*1080，计算可得对角线的设备像素为2250.5。

  5.5*4.1=2250.5
  $$
  √（1920^2+1080^2）=2202
  $$

- 关系2
  $$
  逻辑像素 = 设备像素 * 缩放因子
  $$
  举例：

  iphone6的逻辑像素为375×667，分辨率为750×1334，缩放因此为2

  1个逻辑像素点 = 设备宽度的1/375

  1个设备像素点 = 设备宽度的1/750



## 关于长度的理解

![image-20200615093255894](http://image.lanbling.com/image-20200615093255894.png)

ppi代表每英寸的像素数目，这个像素数目指的是设备像素。

例如，6的ppi为326，则一个设备像素的长度为1/326inch。

```
问：iphone6上1px等于多少英寸？

答：1px就是一个逻辑像素，逻辑像素与设备像素的转换通过缩放因子。

即1px上有2个设备像素，因此1px=1/326 * 2 = 1/163inch
```

```
问：已知设备分辨率和ppi，如何计算屏幕尺寸？

答：屏幕尺寸指的是对角线的长度。设备像素 / ppi = 屏幕尺寸。

因此iphone6的尺寸为 

√（750^2 + 1334^2）= 1530 设备像素

1530 /  326 ≈ 4.7 inch
```



## iphone6 plus

iphone6s的ppi达到了401，按照比率，它的缩放因子应该等于2.6

![image-20200615094732202](http://image.lanbling.com/image-20200615094732202.png)

但是2.6这个比例不方便切图，所以改成了3，然后再整体压缩87%（2.6/3）。这也是为啥iphon6 plus的全屏截图为1242*2208。



## 使用场景

1. ppi适配

   ```html
   ppi适配要解决的问题是：在最小基本单位尺寸不固定的情况下，如何找到一个固定大小的尺寸单位。
   对于文字，我们希望16px的文字无论在什么样的屏幕下看起来都是一样大的。也就是说我们希望这里的px是一个实际物理尺寸固定的单位。
   设置viewport就可以实现这个目的。
   <meta name="viewport" content-width="width=device-width">
   1个逻辑像素的尺寸 = 1 / ppi * 缩放因子 = 1/163 inch
   ```

   

2. resolution适配

   ```html
   	分辨率适配要解决的问题是：找到一个相对单位，使得同一尺寸在不同大小的屏幕上看上去相对大小一致。
   
   　　比如一张宽100%，高100unit 的 banner 图，我们希望它在任何大小的屏幕上能够等比例缩放，因此我们需要这里的 unit 是一个相对单位。
   
   　　vw 和 vh 就是很好的相对单位，但考虑到兼容性，只有用 js 实现一个 vw，具体可参见文末链接。
   ```

   

3. dpr适配

   ```html
   	devicePixelRatio 适配要解决的问题是：在设置了 viewport，width=device-width 的情况下，如何画出1px（设备像素）的问题。
   
   　　dpr=2意味着 CSS 中的1px 会用两个设备像素来渲染，在 iphone6s 上更会用3个设备像素来渲染。
   
   　　解决的方案大致有：用小数、用图片、用渐变、用阴影、用 transform 缩放。手机淘宝的做法是使用 js 动态设置 viewport 的 initial-scale。
   ```

   ![image-20200615095804245](http://image.lanbling.com/image-20200615095804245.png)



## 移动端的适配问题

移动端设计稿一般是根据iphone6的尺寸设置的，分辨率是750*1334。但是对于其它手机型号而言这个设计稿并不合适，需要根据屏幕分辨率来进行调整。

```
解决方案：viewport+rem
```

```html
<meta name="viewport" content="width=device-width;initial-scale=1" >
```

当设备宽度为375（iphone）时，16px=1em。

比如iphone6设计稿某个元素的长度为12px，由于iphone8的尺寸大于iphone6，因此这个长度显然该大于12px，那么该如何计算呢？

```
iphone8的屏宽 / 375 * 12
```

因此在根元素，即html中设置

```css
html{
	font-size: 16px;
}
```

除文本外的其它元素都用rem做单位，1个rem等于是16px（这里px换算rem会比较繁琐，有相应的工具解决）。

只需要改变根目录中font-size的大小，就可以实现长度自适应了。

```js
 /**
    * ================================================
    *   设置根元素font-size
    * 当设备宽度为375(iPhone6)时，根元素font-size=16px; 
    × ================================================
    */
(function (doc, win) {
  var docEl = win.document.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  
  var refreshRem = function () {
    var clientWidth = win.innerWidth
                      || doc.documentElement.clientWidth
                      || doc.body.clientWidth;

    console.log(clientWidth)
    if (!clientWidth) return;
    var fz;
    var width = clientWidth;
    fz = 16 * width / 375;
    docEl.style.fontSize = fz + 'px';//这样每一份也是16px,即1rem=16px
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener('DOMContentLoaded', refreshRem, false);
  refreshRem();

})(document, window);

```



## 如何实现1px

如过dpr为1，则1px代表的就是1px。dpr为2，则1px代表的是2个设备像素，因此出现了1px的讨论问题。

- viewport+rem实现

  同时通过设置对应的viewport的rem基准值，这种方式就可以像以前一样轻松愉快的写1px了。

  在devicePixelRatio = 2时，输出viewport：

  ```html
  <meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">
  ```

  在devicePixelRatio=3时，输出viewport：

  ```html
  <meta name="viewport" content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no">
  ```

  对于这种兼容方案相对比较完美，适合新的项目，老的项目修改成本过大。

  对于这种方案，参考[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)

- 伪类+transform实现

  对于老项目，这个方案比较合适。

  原理是先把原先元素的border去掉，然后利用:before或者:after重做border，使用transform的scale缩小一半，原先的元素相对定位，新做的元素绝对定位。

  ```css
  /*单条border样式设置*/
  .scale-1px{
    position: relative;
    border:none;
  }
  .scale-1px:after{
    content: '';
    position: absolute;
    bottom: 0;
    background: #000;
    width: 100%;
    height: 1px;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  ```

  ```css
  /* 四条border样式设置*/
  .scale-1px{
    position: relative;
    margin-bottom: 20px;
    border:none;
  }
  .scale-1px:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  ```

  



## 参考链接

[1px 究竟是多大](https://www.cnblogs.com/kidney/p/6692312.html)

[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)

[7种方法解决移动端Retina屏幕1px边框问题](https://www.jianshu.com/p/7e63f5a32636)
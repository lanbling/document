# CSS盒模型

## 基本概念：标准模型+IE模型

![image-20200504155614190](http://image.lanbling.com/md/image-20200504155614190.png)



![image-20200504155648205](http://image.lanbling.com/md/image-20200504155648205.png)



## 标准模型和IE模型的区别



## CSS如何设置这两种模型

```css
box-sizing:content-box;  标准模型
box-sizing:border-box;  IE模型
```



## JS如何设置获取盒模型对应的宽和高

```js
dom.style.width/height：只能取到内联样式的宽高，link引入的读不到
是否能取到所有元素的宽高？
dom.currentStyle.width/height  渲染以后的样式，只有IE支持
window.getComputedStyle(dom).width/height  兼容性佳
dom.getBoundingClientRect().width/height  
这个是窗口的，left、top、right、bottom，计算一个元素的宽高
```



## 实例题（根据盒模型解释边距重叠）

![image-20200504221550556](http://image.lanbling.com/md/image-20200504221550556.png)

 

## BFC（边距重叠解决方案 Block Formatting Context）

块级格式化上下文    IFC：内联格式化上下文

###### 1、BFC的基本概念

###### 2、BFC的原理：

2.1  BFC这个元素的垂直边距不会发生重叠

2.2	BFC这个元素不与与浮动元素重叠

2.3    BFC在页面上是一个独立的容器，内外元素不影响

2.4 	计算高度，浮动元素高度也会参与计算

###### 3、如何创建BFC？

3.1 overflow不为visible

3.2  float值不为none

3.3  position不为static

3.4 display属性table方面的

###### 4、BFC的使用场景
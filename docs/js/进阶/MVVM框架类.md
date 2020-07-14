# MVVM框架类

[TOC]



## 引言

1. 了解MVVM框架吗？

2. 谈谈你对MVVM的认识？

3. 双向绑定是什么原理，可以写出来吗？

4. 使用了什么设计模式？

5. 生命周期是什么？

6. 有看过源码吗？

   

## 了解MVVM框架吗

了解Vue.js



## 谈谈对MVVM的认识

### 基本概念：

1. 先聊MVC
2. 聊聊MVVM的定义

![image-20200511114046091](http://image.lanbling.com/md/image-20200511114046091.png)

###### 注意事项：

聊聊MVC，彰显知识面涉猎较多；

把mvvm的定义说清楚，表达概念理解到位；

对比mvvm和mvc；



### mvc：

![](http://image.lanbling.com/md/9051543-953903112d35c46f.webp)

###### mvc的变形：

![图2](http://image.lanbling.com/md/1975281-833880b92e745a8a.webp)

图2更符合我的理解（tp5中的mvp），Vide和Model是解耦的，二者通过控制器进行连接

- View（视图）

  用户看到并与之交互的界面；

- Model（模型）

  主要是和数据库打交道

- Controller（控制器）

  接收用户的输入并调用模型和视图去完成用户的需求



### mvp：

PM模，展示模型

![](http://image.lanbling.com/md/mvp.webp)



### mvvm：

视图模型，其实就是PM模式中的展示模型

视图和视图行进行了绑定

总结：无论是MVVM还是Presentation Model，其中重要的不是如何同步视图和展示模型/视图模型的状态，也不是使用观察者模式、双向绑定还是其它机制。**最为关键的点是，展示模型/视图模型创建了一个视图的抽象，将视图中的状态和行为抽离出一个新的抽象。**

![](http://image.lanbling.com/md/1975281-0f927ea02175ea30.webp)

### 总结：

各个架构模式的作用就是分离关注，将属于不同模块的功能分散都合适的位置中，同时尽量降低各个模块的相互依赖并且减少需要联系的胶水代码。

[参考链接]: https://www.jianshu.com/p/ebd2c5914d20



## 双向绑定的原理

### 概念：

![image-20200511124103898](http://image.lanbling.com/md/image-20200511124103898.png)

正向：数据驱动页面，没有这个之前，模板的方式把数据渲染在模板中，如php。

反向：之前的做法，绑定事件，例如change、input事件。

绑定：自动化处理，框架帮忙处理好的

### 原理：

![image-20200513081813305](http://image.lanbling.com/md/image-20200513081813305.png)

Object.defineProperty：

[定义]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

#### 提几点要求：

1. Object.definePeoperty的用法要熟记于心
2. Object.defindProperty与reflect.defineProperty的区别（返回值）
3. Object.defineProperty要会手写

```html
configurable为false时，除了将writable改为false， 的单向过程。就不能任何修改了，这是一个不可逆的过程。
value默认值为undefined
拥有布尔值的键configurable、enumerable、writable的默认值都是false；
属性值和函数的键value、get和set字段的默认值为undefined；

```

![48125d0ad237aaf0b83f98d1d40fca8](http://image.lanbling.com/md/48125d0ad237aaf0b83f98d1d40fca8.png)

**数据描述符有四个，存储描述符有四个，二者都有的是enumrable和configurable。如果设置一个属性，同时包含这两种，则会报错**

```js
var o = {};
o.a = 1;
等同于
Object.defineProperty(o, 'a', {
    value: 1,
    configurable: true,
    enumerable: true,
    writable: true
});
```

value叫做访问者属性



## 设计模式



![055565ced6407d4aece606cffae1790](http://image.lanbling.com/md/055565ced6407d4aece606cffae1790.png)

1. 观察者设计模式的原理要了如指掌
2. 最好能写出设计模式的伪代码



## 生命周期

- 熟记对应的几个节点
- 熟记每个节点触发的时机 
- 做好多演练一下

![](http://image.lanbling.com/md/lifecycle.png)



## 源码分析

  [一张思维导图辅助你深入了解 Vue | Vue-Router | Vuex 源码架构 #27](https://github.com/biaochenxuying/blog/issues/27#)
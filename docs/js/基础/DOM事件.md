# DOM事件



## 综述

基本概念:DOM事件的级别

DOM事件模型

DOM事件流

描述DOM事件捕获的具体流程

Event对象的常见应用

自定义事件



## DOM事件的级别

![image-20200505003637820](http://image.lanbling.com/md/image-20200505003413118.png)

在ie中，DOM2的事件是，attachEventListener

DOM3事件类型增加了很多，鼠标键盘事件等



## DOM事件模型、DOM事件流

![image-20200505003413118](http://image.lanbling.com/md/image-20200505003637820.png)

### 描述DOM事件捕获的具体流程：

window->document->html->body->普通html结构一级级传递->目标元素

获取body节点：

document.body

获取html节点：

document.documentElement



## Event对象

- event.preventDefault()
  阻止默认事件

- event.stopPropagation()
  阻止冒泡

- event.stopImmediatePropagation()
  如果一个节点注册了两个事件，执行了第一个，并调用这个函数，则后面一个不会执行

- event.currentTarget

  当前注册事件的节点。如果觉得子节点的事件太多，可以定义在父节点上。

- event.target
  当前被点击的节点。

在早期的ie版本中不支持event.target，用soucreTarget



## 自定义事件

![image-20200603155107550](http://image.lanbling.com/image-20200603155107550.png)


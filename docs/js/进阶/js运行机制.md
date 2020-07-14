# js运行机制

## 例题

1. 

```js
console.log(1);
setTimeout(function(){
    console.log(3);
}, 0);
console.log(2);
```

单线程：一个时间只能做一件事

任务队列

setTimeout是异步任务

同步任务执行完，才执行异步任务



2.

```js
console.log('A');
while(true){
    
}
console.log('B');
```

执行不到B，同步任务while会一直执行

```js
console.log('A');
setTimeout(function(){
    console.log('B');
}, 0);
while(true){
    
}
```



3、

```js
for(var i=0; i<4; i++){
	setTimeout(function(){
        console.log(i);
    }, 1000);
}
//输入4个4
```

setTimeout到时后才会放入异步队列中



## 如何理解JS的单线程、任务队列、Event Loop

<a data-fancybox title="image-20200510095255986" href="http://image.lanbling.com/md/image-20200510095255986.png">![image-20200510095255986](http://image.lanbling.com/md/image-20200510095255986.png)</a>



## 异步任务

- setTimeout和setInterval
- DOM事件
- ES6中的Promise



## 总结：

- 理解JS的单线程的概念
- 理解任务队列
- 理解Event Loop
- 理解那些语句会放入到异步任务队列
- 理解语句放入异步任务队列的时机



## 参考链接

[从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-0)

[Promise的队列与setTimeout的队列有何关联？](https://www.zhihu.com/question/36972010)
# 面向对象的Javascript

## 1.1动态类型语言和鸭子类型

```javascript
var duck = {
    duckSinging: function(){
        console.log('嘎嘎嘎');
    }
}
var chicken = {
    duckSinging: function(){
        console.log('嘎嘎嘎');
    }
}
var choir = [];
var joinChoir = function(animal){
    if(animal && typeof animal.duckSinging === 'function'){
        choir.push(animal);
    }
}
joinChoir(duck);
joinChoir(chicken);
```



## 1.2多态



## 1.3封装



## 1.4原型模式和基于原型继承的Javascript对象系统
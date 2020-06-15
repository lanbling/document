# Sass语法总结

[TOC]



## 1、变量

### 1.1 声明

内外都能声明，作用域不一样

```scss
$nav-color: #f90;
nav{
    $width: 100px;
    width: $width;
    color: $nav-color;
}
```

编译后的结果

```scss
nav{
    width: 100px;
    color: #f90;
}
```



### 1.2 引用

变量的粒度可以划分的很细

```scss
$highlight-color: #f90;
$highlight-border: 1px solid $hightlight-color;
.selected{
    border: $highlight-border;
}
//编译后
.selected{
    border: 1px solid #f90;
}
```



### 1.3 提示

变量名使用中划线"-"还是使用下划线"_"都是可以的。

用中划线命名的变量可以使用下划线来访问。



## 2、嵌套CSS规则

### 2.1 用Sass改写CSS规则

```scss
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```

改写后的形式

```scss
#content{
    article{
        h1 { color: #333 }
        p { margin-bottom: 1.4em }
    }
    aside { background-color: #EEE }
}
```

普通样式和嵌套样式可以一起

```scss
#content{
    background-color: red;
    aside { background-color: #EEE }
}
```



### 2.2 父选择器的标识符&

- #### 例1

  当你想用Sass改写以下例子

  ```scss
  article a{
      color: blue;
  }
  article a:hover{
      color: red;
  }
  //&闪亮登场
  article a{
      color: blue;
      &:hover{
          color: red;
      }
  }
  ```

  如果是这样写用没有想过什么结果？

  ```scss
  article a{
      color: blue;
      :hover{
          color: red;
      }
  }
  //编译后
  article a :hover{color: red;}  //这段代码没作用
  ```



- #### 例2：如何在父选择器前面添加选择器

  ```scss
  #content aside{
      color: red;
      body.ie &{}
  }
  ```



### 2.3 群组选择器的嵌套

- #### 例子1

  如何简化以下形式？

  ```scss
  .container h1, .container h2, .container h3 { 		margin-bottom: .8em 
  }
  
  ```

  用Sass改写

  ```scss
  .container{
      h1,h2,h3{
          margin-bottom: .8em 
      }
  }
  ```

  ###### 提示：别看代码量很少，编译后的css可能很大

- #### 子组合选择器和同层组合选择器：>、+、~

  - ##### >

    子选择器

  - +

    同层相邻，后面

  - ~

    同层，后面

  - ##### 举例

    ```scss
    article {
      ~ article { border-top: 1px dashed #ccc }
      > section { background: #eee }
      dl > {
        dt { color: #333 }
        dd { color: #555 }
      }
      nav + & { margin-top: 0 }
    }
    //编译后
    article ~ article {}   //同层，后面的所有article
    article > section {}	//直接子元素中的，所有section
    article dl > dt {}	//所有子元素中的dl，dl中的直接子元素dt
    article dl > dd {}
    article nav + article {} //所有子元素中的nav，同层，后面，相邻的article
    ```



### 2.4 属性嵌套

```scss
nav{
	border-style: solid;
    border-width: 1px;
    border-color: #ccc; 
}
//用Sass改写后
nav{
    border: {
        style: solid;
        width: 1px;
       color: #ccc;
    }
}
//对缩写形式的改写
nav{
    border: 1px solid #ccc{
    	left: 0;
        right: 0;
    }
}
```



## 3、导入SASS文件

### 3.1 使用SASS部分文件

- 文件名开头用下划线"_"
- 省略后缀名

```vue
@import "themes/_night-sky"
```



### 3.2 默认变量值

```scss
//box-width.scss
$box-width: 50px;
```

```scss
//app.vue
@import './assets/themes/box-width';
$box-width: 200px !default;
.box-1{
  width: $box-width;
  height: 200px;
  background-color: pink;
}
```

- 如果在引入的文件box-width.scss中存在变量$box-width，则使用引入的值，如果不存在，则使用当前设置的值。

- 如果将@import的位置放在$box-width设置之后，则用当前设置的值。



### 3.3 嵌套导入

```scss
//_blue-theme.scss
aside{
    background: blue;
    color: white;
}
```

```scss
//app.vue
.blue-theme{
	@import 'blue-theme'
}
//编译后
.blue-theme{
    aside{
        //...
    }
}
```



### 3.4 原生导入



## 4、静默注释

当你希望写在scss中的注释不出现在编译后的文件中时

- 标准注释

  ```
  /* 注释内容 */   
  ```

  这种注释会正常显示

- 静默注释

  ```
  // 注释内容
  ```

  这种注释将不显示

- 当标准注释出现在不应该出现的地方时，也不会显示

  ```scss
  body {
    color /* 这块注释内容不会出现在生成的css中 */: #333;
    padding: 1; /* 这块注释内容也不会出现在生成的css中 */ 0;
  }
  ```

  

## 5、混合器

### 概述

用变量只能设置一个值，使用混合器，可以使用一大段样式。

```scss
@mixin rounded-corners{
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```

在样式表中的其它地方就可以进行引用：

```scss
notice{
    background-color: green;
    border: 2px solid #00aa00;
    @include rounded-corners;
}
```

编译后生成：

```scss
notice{
    background-color: green;
    border: 2px solid #00aa00;
   -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```



### 5.1 何时使用混合器

类名：描述html元素是哪方面的内容。比如notice，就知道这个元素是承载公告的。

混合器：描述一段样式的作用。比如rounded-corners，知道这段样式是写一个圆角。



### 5.2 混合器中的CSS规则

混合器中不仅有属性，还可以有css规则。

```scss
@mixin no-bullets{
    list-style: none;
    li{
        list-style-image: none;
        list-style-type: none;
        margin-left: 0px;
    }
}
```

当含有css规则的混合器通过@include包含在一个父规则时，则成为了一个嵌套规则

```scss
ul.pain{
    color: #444;
    @include no-bullets;
}
```

编译后的结果：

```scss
ul.pain{
    color: #333;
    list-style: none;
}
ul.pain li{
    //...
}
```



### 5.3 给选择器传参

```scss
@mixin link-colors($normal, $hover, $visited){
    color: $normal;
    &:hover{ color: $hover; }
    &:visited: { color: $visited; }
}
```

使用这个混入规则：

```scss
a{
    @include link-colors(blue, red, green);
}
```

编译后的结果是：

```scss
a{
   	color: blue;
    &:hover{ color: red; }
    &:visited: { color: green; } 
}
//
a{ color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```



### 5.4 默认参数值

```scss
@mixin link-colors(
	$normal,
    $hover: $normal,
    $visited: $normal
)
{
      color: $normal;
      &:hover { color: $hover; }
      &:visited { color: $visited; }  
}
```



## 6、继承

### 简单展示

关键字：@extend

```scss
.wrapper .error{
    font-size: 3em;
}
.error{
    border: 1px solid red;
    background-color: #fdd;
}
.error a {
    color: blue;
}
.seriousError{
    @extend .error;
    border-width: 3px;
}
```

编译后的结果：

```scss
.wrapper .error, 
.wrapper .seriousError{
    font-size: 3em;
}
.error,
.seriousError{
    border: 1px solid red;
    background-color: #fdd;
}
.error a,
.seriousError a{
    color: blue;
}
.seriousError{
    border-width: 3px;
}
```

凡是出现了error的地方，seriousError以同样的方式出现了



### 6.1 何时使用继承

如果一个类seriousError中的样式与另一个类error相同，可以使用选择器组

```scss
.error,
.seriousError{
	//...
}
```

如果error在其它选择器中具有的样式，seriousError也有，比如

```scss
.wrapper .error{ 
	//...
}
//seriousError也具有一样的样式
.wrapper .seriousError{
   //...  
}
```

如果error出现在文件的多个位置，那seriousError也需要写多次，为了解决这个重复的问题，就有了继承。



### 6.2 使用继承的最佳实践

不要用后代选择器去继承css规则。

```scss
.foo .bar { @extend .baz; }
.bip .baz { a: b; }
```



## 7、总结

​		变量是saas提供的最基本的工具。通过变量可以让独立的css值变得可重用，无论是在一条单独的规则范围还是在整个样式表中。变量、混合器的命名甚至sass的文件名，可以互换通用_和-。

​		同样基础的是sass的嵌套机制。嵌套允许css规则内嵌套css规则，减少重复编写常用的选择器，同时让样式表的接口一眼望去更加清晰。sass同时提供了特殊的父选择器标识符&，通过它可以构造出更高效的嵌套。

​		sass的另一个重要特性，样式导入。通过样式导入可以把分散在多个sass文件中的内容合并到一个css文件，避免了项目中有大量的css文件通过原生的css@import带来的性能问题。通过嵌套导入和默认变量值，导入可以构建更强有力的、可定制的样式。

​		混合器允许用户编写语义化样式的同时避免视觉层面上的样式的重复。不仅学到了如何使用混合器减少重复，同时学习到了如何使用混合器让你的css变得更加可维护和语义化。

​		最后，我们学习了与混合器相辅相成的选择器继承。继承允许你声明类之间语义化的关系，通过这些关系可以保持你的css的整洁和可维护性。



## 参考链接

[sass入门](https://www.sass.hk/guide/)


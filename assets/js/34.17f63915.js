(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{306:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"原型链类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链类"}},[t._v("#")]),t._v(" 原型链类")]),t._v(" "),s("h2",{attrs:{id:"创建对象有几种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建对象有几种方法"}},[t._v("#")]),t._v(" 创建对象有几种方法")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("对象字面量 var obj = {}")])]),t._v(" "),s("li",[s("p",[t._v("new构造函数")])]),t._v(" "),s("li",[s("p",[t._v("new Object")])]),t._v(" "),s("li",[s("p",[t._v("Object.create(null)")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200505142437841",href:"http://image.lanbling.com/md/image-20200505143057392.png"}},[s("img",{attrs:{src:"http://image.lanbling.com/md/image-20200505143057392.png",alt:"image-20200505142437841"}})])])])]),t._v(" "),s("p",[t._v("对象字面量两种  打印出来都有object")]),t._v(" "),s("h2",{attrs:{id:"原型、构造函数、实例、原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型、构造函数、实例、原型链"}},[t._v("#")]),t._v(" 原型、构造函数、实例、原型链")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200505143057392",href:"http://image.lanbling.com/md/image-20200505142437841.png"}},[s("img",{attrs:{src:"http://image.lanbling.com/md/image-20200505142437841.png",alt:"image-20200505143057392"}})])]),t._v(" "),s("h2",{attrs:{id:"instanceof的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof的原理"}},[t._v("#")]),t._v(" instanceof的原理")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200505153538124",href:"http://image.lanbling.com/md/image-20200505144651531.png"}},[s("img",{attrs:{src:"http://image.lanbling.com/md/image-20200505144651531.png",alt:"image-20200505153538124"}})])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("每个函数都有prototype属性\n函数的prototype属性指向一个对象，原型对象，原型对象有个constructor方法，指向构造函数\n对像是从哪里new出来的，instance结果就是哪里\nObject.prototype是原型对象，这个Object从new Object来\n")])])]),s("h2",{attrs:{id:"new运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new运算符"}},[t._v("#")]),t._v(" new运算符")]),t._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200505144651531",href:"http://image.lanbling.com/md/image-20200505153538124.png"}},[s("img",{attrs:{src:"http://image.lanbling.com/md/image-20200505153538124.png",alt:"image-20200505144651531"}})])]),t._v(" "),s("h4",{attrs:{id:"new的背后原理："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new的背后原理："}},[t._v("#")]),t._v(" new的背后原理：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("M")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("new2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"原型链顶端的事情"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链顶端的事情"}},[t._v("#")]),t._v(" 原型链顶端的事情")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype是原型链的顶端，有没有想过Object是怎么来的？\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" Object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),t._v("\n看到没，其实Object是一个函数。\n所以你看到的生成对象的字面量写法\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，这样理解起来就很正常了。\n\n如果Object是一个函数，那Object就是Function的一个实例了\n\n最最最关键的一点来了：\n你以为所有的原型对象都是对象类型，其实有一个不是的\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200603212234269",href:"http://image.lanbling.com/image-20200603212234269.png"}},[s("img",{attrs:{src:"http://image.lanbling.com/image-20200603212234269.png",alt:"image-20200603212234269"}})])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("所以Function的prototype是一个函数\n但还有更有趣的一点\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"image-20200603212405491",href:"http://image.lanbling.com/image-20200603212405491.png"}},[s("img",{attrs:{src:"http://image.lanbling.com/image-20200603212405491.png",alt:"image-20200603212405491"}})])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("居然Function的prototype和__proto__指向同一个地方，而且这个地方是一个函数。\n自此，形成了一个完成的闭环，所以在我看来，js中最高贵的果然还是函数，函数生万物。\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",title:"e13c5d19f81e0dc78384ae37cc1a49f",href:"http://image.lanbling.com/e13c5d19f81e0dc78384ae37cc1a49f.jpg"}},[s("img",{attrs:{src:"http://image.lanbling.com/e13c5d19f81e0dc78384ae37cc1a49f.jpg",alt:"e13c5d19f81e0dc78384ae37cc1a49f"}})])])])}),[],!1,null,null,null);a.default=e.exports}}]);
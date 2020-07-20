(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{309:function(t,a,v){"use strict";v.r(a);var _=v(28),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http协议类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议类"}},[t._v("#")]),t._v(" HTTP协议类")]),t._v(" "),v("h2",{attrs:{id:"http协议的主要特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议的主要特点"}},[t._v("#")]),t._v(" HTTP协议的主要特点")]),t._v(" "),v("p",[t._v("简单快速：某个图片某个资源，统一资源定位符uri")]),t._v(" "),v("p",[t._v("灵活：不同数据类型的传输")]),t._v(" "),v("p",[t._v("无连接：连接一次就断了，不会保持连接")]),t._v(" "),v("p",[t._v("无状态：建立连接，传输，断开，下次客户端再过来，服务端没法判断是不是同一个客户端")]),t._v(" "),v("h2",{attrs:{id:"http报文的组成部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http报文的组成部分"}},[t._v("#")]),t._v(" HTTP报文的组成部分")]),t._v(" "),v("h4",{attrs:{id:"请求报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[t._v("#")]),t._v(" 请求报文")]),t._v(" "),v("p",[t._v("请求行   请求头  空行  请求体")]),t._v(" "),v("p",[t._v("请求行包含: GET / HTTP/1.1")]),t._v(" "),v("p",[t._v("请求头：key-value值")]),t._v(" "),v("p",[t._v("空行：告诉服务端往下不再是请求行的部分")]),t._v(" "),v("p",[t._v("请求体：")]),t._v(" "),v("h4",{attrs:{id:"响应报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应报文"}},[t._v("#")]),t._v(" 响应报文")]),t._v(" "),v("p",[t._v("状态行  响应头  空行 响应体")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://image.lanbling.com/md/image-20200505122539844.png",alt:"image-20200505122539844"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"http://image.lanbling.com/md/image-20200505122623027.png",alt:"image-20200505122623027"}})]),t._v(" "),v("h2",{attrs:{id:"http方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http方法"}},[t._v("#")]),t._v(" HTTP方法")]),t._v(" "),v("p",[t._v("GET  获取资源")]),t._v(" "),v("p",[t._v("POST 传输资源")]),t._v(" "),v("p",[t._v("PUT\t更新资源")]),t._v(" "),v("p",[t._v("DELETE  删除资源")]),t._v(" "),v("p",[t._v("HEAD\t获得报文首部")]),t._v(" "),v("h2",{attrs:{id:"post和get的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#post和get的区别"}},[t._v("#")]),t._v(" POST和GET的区别")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("GET在浏览器回退时是无害的，而POST会再次提交请求")])]),t._v(" "),v("li",[t._v("GET产生的URL地址可以被收藏的，而POST不可以")]),t._v(" "),v("li",[v("strong",[t._v("GET请求会被浏览器主动缓存，而POST不会，除非手动设置")])]),t._v(" "),v("li",[t._v("GET请求只能进行url编码，而POST支持多种编码格式")]),t._v(" "),v("li",[v("strong",[t._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留")])]),t._v(" "),v("li",[v("strong",[t._v("GET请求在URL中传送的参数的有长度限制的，而POST没有限制")])]),t._v(" "),v("li",[t._v("对参数的数据类型，GET只接受ASCII字符，而POST没有限制")]),t._v(" "),v("li",[t._v("GET比POST更不安全 ，因为参数直接暴露在URL上，所以不能用来传递敏感信息")]),t._v(" "),v("li",[v("strong",[t._v("GET参数通过URL传递，POST放在Request body中")])])]),t._v(" "),v("h2",{attrs:{id:"什么是状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是状态码"}},[t._v("#")]),t._v(" 什么是状态码")]),t._v(" "),v("p",[t._v("1xx：指示信息-表示请求已接受，继续处理")]),t._v(" "),v("p",[t._v("2xx：成功-表示请求已被成功接受")]),t._v(" "),v("p",[t._v("3xx：重定向-要完成请求必须进行更近一步的操作")]),t._v(" "),v("p",[t._v("4xx: 客户端错误-请求有语法错误或请求无法实现")]),t._v(" "),v("p",[t._v("5xx：服务器错误-服务器未能实现合法的请求")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://image.lanbling.com/image-20200603183814812.png",alt:"image-20200603183814812"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"http://image.lanbling.com/image-20200603183933579.png",alt:"image-20200603183933579"}})]),t._v(" "),v("h2",{attrs:{id:"什么是持久连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是持久连接"}},[t._v("#")]),t._v(" 什么是持久连接")]),t._v(" "),v("p",[t._v("HTTP协议采用“请求-应答”模式，当使用普通模式，即非keep-alive模式时，每个请求/应答，客户和服务器都要新建一个连接，完成之后立即断开连接（HTTP协议为无连接的协议）。")]),t._v(" "),v("p",[t._v("当使用keep-alive模式（又称持久连接、连接重用）时，keep-alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，keep-alive功能避免了建立或者重新建立连接。")]),t._v(" "),v("p",[t._v("1.1版本才支持")]),t._v(" "),v("h2",{attrs:{id:"什么是管线化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是管线化"}},[t._v("#")]),t._v(" 什么是管线化")]),t._v(" "),v("p",[t._v("在使用持久连接的情况下，某个连接上消息的传递类似于")]),t._v(" "),v("p",[t._v("请求1->响应1->请求2->响应2->请求3->响应3")]),t._v(" "),v("p",[t._v("某个连接上的消息变成了类似这样")]),t._v(" "),v("p",[t._v("请求1->请求2->请求3->响应1->响应2->响应3")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://image.lanbling.com/md/image-20200505141703006.png",alt:"image-20200505141703006"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);
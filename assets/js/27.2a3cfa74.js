(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{251:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"小程序性能优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序性能优化"}},[t._v("#")]),t._v(" 小程序性能优化")]),t._v(" "),s("h2",{attrs:{id:"小程序官方性能指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序官方性能指标"}},[t._v("#")]),t._v(" 小程序官方性能指标")]),t._v(" "),s("ul",[s("li",[t._v("首屏时间不超过5秒")]),t._v(" "),s("li",[t._v("渲染时间不超过500ms")]),t._v(" "),s("li",[t._v("每秒调用setData的次数不超过20次")]),t._v(" "),s("li",[t._v("setData的数据在JSON.stringfy后不超过256kb")]),t._v(" "),s("li",[t._v("页面WXML节点少于1000个，节点树深度少于30层，子节点树不大于60个")]),t._v(" "),s("li",[t._v("所有网络请求都在1内返回结果")])]),t._v(" "),s("h2",{attrs:{id:"小程序底层架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序底层架构"}},[t._v("#")]),t._v(" 小程序底层架构")]),t._v(" "),s("p",[t._v("对于传统的网页来说，UI渲染和JS脚本是在同一个线程中进行，所以经常会出现“阻塞”行为。微信小程序基于性能的考虑，启用了双线程模型：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("视图层：也就是webview线程，负责启用不同的webview来渲染不同的小程序页面；")])]),t._v(" "),s("li",[s("p",[t._v("逻辑层：一个单独的线程执行JS代码，可以控制视图层的逻辑。"),s("img",{attrs:{src:"http://image.lanbling.com/md/06dee7fb8293b482.png",alt:"06dee7fb8293b482"}})]),t._v(" "),s("p",[t._v("然而，任何线程间的数据传输都是有延时的，这意味着逻辑层和视图层间通信是异步行为。除此之外，微信为小程序提供了很多客户端原生能力，在调用客户端原生能力的过程中，微信主线程和小程序双线程之间也会发生通信，这也是一种异步行为。")]),t._v(" "),s("p",[t._v("常见的几个问题：")]),t._v(" "),s("ul",[s("li",[t._v("小程序启动慢")]),t._v(" "),s("li",[t._v("白屏时间长")]),t._v(" "),s("li",[t._v("页面渲染慢")]),t._v(" "),s("li",[t._v("运行内存不足")])])])]),t._v(" "),s("h2",{attrs:{id:"小程序启动慢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序启动慢"}},[t._v("#")]),t._v(" 小程序启动慢")]),t._v(" "),s("p",[t._v("在这个阶段，微信会完成几项工作：")]),t._v(" "),s("ol",[s("li",[t._v("准备运行环境")]),t._v(" "),s("li",[t._v("下载小程序代码包")]),t._v(" "),s("li",[t._v("加载小程序代码包")]),t._v(" "),s("li",[t._v("初始化小程序首页")])]),t._v(" "),s("p",[t._v("优化策略：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("无用文件、函数、样式剔除")])]),t._v(" "),s("li",[s("p",[t._v("减少代码包中的静态资源文件")]),t._v(" "),s("p",[t._v("小程序代码包最终会经过GZIP压缩后放在CDN上，但是GZIP压缩对图片资源来说效果很低。如JPG、PNG等格式文件，本身就已经被压缩过，再用GZIP压缩有可能体积更大。建议开发者把图片、视频等静态资源都放在CDN上。")]),t._v(" "),s("p",[t._v("Base64本质上是长字符串，和CDN地址比起来会更占空间。")])]),t._v(" "),s("li",[s("p",[t._v("逻辑后移，精简业务代码")]),t._v(" "),s("p",[t._v("不涉及前端计算的展示类逻辑，都可以适当做后移。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("复用模板插件")])])]),t._v(" "),s("li",[s("p",[t._v("分包加载")])]),t._v(" "),s("li",[s("p",[t._v("部分页面h5化")]),t._v(" "),s("p",[t._v("小程序提供了web-view组件。")]),t._v(" "),s("p",[t._v("小程序和h5通信可以通过JSSDK或postMessage通道来实现，详见"),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序开发文档"),s("OutboundLink")],1),t._v(";")])])]),t._v(" "),s("h2",{attrs:{id:"白屏时间长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#白屏时间长"}},[t._v("#")]),t._v(" 白屏时间长")]),t._v(" "),s("p",[t._v("影响白屏加载时间：")]),t._v(" "),s("ul",[s("li",[t._v("网络资源加载时间")]),t._v(" "),s("li",[t._v("渲染时间")])]),t._v(" "),s("p",[t._v("优化策略：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("启用本地缓存")]),t._v(" "),s("p",[t._v("并非所有场景都适合缓存策略，譬如对数据即时性要求非常高的场景（如抢购入口）。")])]),t._v(" "),s("li",[s("p",[t._v("数据预拉取")]),t._v(" "),s("p",[t._v("小程序冷启动时，微信服务器代理小程序客户端发起一个HTTP请求到第三方服务器来获取数据，并且把响应数据存储在本地客户端供小程序前端调用。当小程序加载完成后，只需要调用微信提供的API wx.getBackgroundFetchData 从本地缓存获取数据即可。这种做法可以充分利用小程序启动和初始化阶段的等待时间，使更快地完成页面渲染。")]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("预拉取数据强缓存30分钟，对于数据实时性高的系统来说非常致命")]),t._v(" "),s("li",[t._v("微信服务器发起的请求没有提供区分线上版本和开发版的参数，且没有提供用户IP等信息。")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("跳转时预拉取")])])]),t._v(" "),s("li",[s("p",[t._v("分包预加载")]),t._v(" "),s("p",[t._v("开启了分包加载，在用户访问到包内某个页面时，小程序才会开始下载对应的分包。等待时，页面会维持“白屏”转态。")]),t._v(" "),s("p",[t._v("小程序提供了分包预下载能力，开发者可以配置进入某个页面时下载可能用到的分包。")])]),t._v(" "),s("li",[s("p",[t._v("非关键渲染数据延迟请求")]),t._v(" "),s("p",[t._v("页面结构划分成两类：主体模块和非主体模块。")]),t._v(" "),s("p",[t._v("在初始化首页时，小程序会发起一个聚合接口请求来获取主体模块的数据，而非主体模块的数据则从另一个接口获取。通过拆分的手段来降低主接口的调用时延，同时减少响应体的数据量，减少网络传输时间。")])]),t._v(" "),s("li",[s("p",[t._v("分屏渲染")]),t._v(" "),s("p",[t._v("接着上面的第5步骤。当小程序获取到主体模块的数据后，会优先渲染首屏模块，在所有首屏模块都渲染完成后才会想渲染非首屏模块和非主体模块，以此确保首屏内容以最快速度呈现。")])]),t._v(" "),s("li",[s("p",[t._v("接口聚合，请求合并")])]),t._v(" "),s("li",[s("p",[t._v("图片资源优化")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("使用WebP格式，在肉眼无差别的图片质量前提下具有更小的图片体积")])]),t._v(" "),s("li",[s("p",[t._v("图片裁剪&降质")]),t._v(" "),s("p",[t._v("鉴于移动端的设备分辨率是有上限的，很多图片的尺寸常常远大于页面元素尺寸（图片尺寸2倍于页面尺寸），这非常浪费网络资源。")])]),t._v(" "),s("li",[s("p",[t._v("图片懒加载、雪碧图优化")])]),t._v(" "),s("li",[s("p",[t._v("降级加载图片")]),t._v(" "),s("p",[t._v("先模糊后高清")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("//banner.wxml\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{url}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n//图片加载器\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("image")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{preloadUrl}}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onImgLoad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("binderror")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onErrorLoad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//banner.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("originUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://path/to/picture'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("originUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            preloadUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("originUrl\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onImgLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("originUrl\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[t._v("骨架屏")])])]),t._v(" "),s("h2",{attrs:{id:"页面渲染慢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染慢"}},[t._v("#")]),t._v(" 页面渲染慢")]),t._v(" "),s("p",[t._v("有效的渲染方向：")]),t._v(" "),s("ul",[s("li",[t._v("降低线程间通信频次")]),t._v(" "),s("li",[t._v("减少线程间通信的数据量")]),t._v(" "),s("li",[t._v("减少WXML节点数量")])]),t._v(" "),s("p",[t._v("优化策略：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("合并setData调用")])]),t._v(" "),s("li",[s("p",[t._v("只把与界面渲染相关的数据放在data中")])]),t._v(" "),s("li",[s("p",[t._v("应用层的数据diff")]),t._v(" "),s("p",[t._v("在setData之前，把数据和之前的数据做对比，没有变化就不需要了。因为每一次setData都会导致data数据和WXML构建出新的节点树，和之前的节点树做比较，然后更新。")])]),t._v(" "),s("li",[s("p",[t._v("去掉不必要的事件绑定")]),t._v(" "),s("p",[t._v("逻辑层绑定了回调函数，就会触发通信过程。像OnPageScroll这种事件，频繁触发的，尽量避免。")])]),t._v(" "),s("li",[s("p",[t._v("去掉不必要的节点属性")]),t._v(" "),s("p",[t._v("节点属性越多，通信时间越长。")])]),t._v(" "),s("li",[s("p",[t._v("适当的组件颗粒度")]),t._v(" "),s("p",[t._v("适当的组件化可以减少数据更新时的影响范围，如倒计时组件。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("事件总线，代替组件间数据绑定的通信方式")])])]),t._v(" "),s("li",[s("p",[t._v("组件层面的diff")]),t._v(" "),s("p",[t._v("渲染时如果新的数据是旧的数据的子集，且顺序不变，则把消失的位置置位none，而不是直接setData，降低试图渲染的压力。")])])]),t._v(" "),s("h2",{attrs:{id:"运行内存不足"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行内存不足"}},[t._v("#")]),t._v(" 运行内存不足")]),t._v(" "),s("p",[t._v("优化策略：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("内存预警")]),t._v(" "),s("p",[t._v("做埋点，做日志监测")])]),t._v(" "),s("li",[s("p",[t._v("回收后台页面计时器")]),t._v(" "),s("p",[t._v("一个页面一个webview线程，但js线程只有一个。当页面处于onHide状态时，可以把耗费js线程资源的操作先清理掉，例如定时器（主要是里面的代码逻辑），然后在onShow的时候再恢复。")])]),t._v(" "),s("li",[s("p",[t._v("避免频发事件中重度内存操作")]),t._v(" "),s("p",[t._v("对于频发事件的监听，需要遵守的原则：")]),t._v(" "),s("ul",[s("li",[t._v("onPageScroll事件需要节流")]),t._v(" "),s("li",[t._v("避免CPU密集型操作，譬如复杂的计算")]),t._v(" "),s("li",[t._v("避免调用，实在要调用要较少setData的数据量")]),t._v(" "),s("li",[t._v("尽量使用IntersectionObserver来替代SelectorQuery，前者对性能影响更小")])])]),t._v(" "),s("li",[s("p",[t._v("大图、长列表优化")]),t._v(" "),s("p",[t._v("对图片降质或者裁剪，当然不是最好的。")]),t._v(" "),s("p",[t._v("瀑布流思路：利用intersectionObserver监听长列表内组件与视窗的相交关系，当组件距离视窗大于某个临界点时，销毁该组件释放内存，并用同等的骨架图占屏；当距离小于临界点时，再取缓存数据加载该组件。")]),t._v(" "),s("p",[t._v("如果用户滑的很快，销毁后来不及加载，视觉上会出现白屏。我们可以适当调整销毁的时间点，或者优化骨架图样式来提升体验。")]),t._v(" "),s("p",[t._v("小程序官方的长列表组件。")])])]),t._v(" "),s("h2",{attrs:{id:"小程序生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序生命周期"}},[t._v("#")]),t._v(" 小程序生命周期")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://image.lanbling.com/md/page-lifecycle.2e646c86.png",alt:"page-lifecycle.2e646c86"}})]),t._v(" "),s("h2",{attrs:{id:"原文链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原文链接"}},[t._v("#")]),t._v(" 原文链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://aotu.io/notes/2020/03/25/high-performance-miniprogram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何打造高性能小程序门户"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);
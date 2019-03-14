(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{203:function(e,v,_){"use strict";_.r(v);var t=_(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("h3",{attrs:{id:"vue是什么？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue是什么？","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue是什么？")]),e._v(" "),_("p",[e._v("Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的"),_("strong",[e._v("渐进式框架")]),e._v("，发布于 2014 年 2 月。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。"),_("strong",[e._v("Vue 的核心库只关注视图层")]),e._v("，不仅易于上手，还便于与第三方库（如："),_("code",[e._v("vue-router")]),e._v("，"),_("code",[e._v("vue-resource")]),e._v("，"),_("code",[e._v("vuex")]),e._v("）或既有项目整合。")]),e._v(" "),_("h3",{attrs:{id:"mvvm-模式的实现者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-模式的实现者","aria-hidden":"true"}},[e._v("#")]),e._v(" MVVM 模式的实现者")]),e._v(" "),_("ul",[_("li",[e._v("Model：模型层，在这里表示 JavaScript 对象")]),e._v(" "),_("li",[e._v("View：视图层，在这里表示 DOM（HTML 操作的元素）")]),e._v(" "),_("li",[e._v("ViewModel：连接视图和数据的中间件，"),_("strong",[e._v("Vue.js 就是 MVVM 中的 ViewModel 层的实现者")])])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.star59.top/bg/20190312/EXEkULbWR8f6.png",alt:"img"}})]),e._v(" "),_("p",[e._v("在 MVVM 架构中，是不允许 "),_("strong",[e._v("数据")]),e._v(" 和 "),_("strong",[e._v("视图")]),e._v(" 直接通信的，只能通过 "),_("code",[e._v("ViewModel")]),e._v(" 来通信，而 ViewModel 就是定义了一个 "),_("code",[e._v("Observer")]),e._v(" 观察者")]),e._v(" "),_("ul",[_("li",[e._v("ViewModel 能够观察到数据的变化，并对视图对应的内容进行更新")]),e._v(" "),_("li",[e._v("ViewModel 能够监听到视图的变化，并能够通知数据发生改变")])]),e._v(" "),_("p",[e._v("Vue.js 就是一个 MVVM 的实现者，他的核心就是实现了 "),_("code",[e._v("DOM 监听")]),e._v(" 与 "),_("code",[e._v("数据绑定")])]),e._v(" "),_("h3",{attrs:{id:"其它-mvvm-实现者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它-mvvm-实现者","aria-hidden":"true"}},[e._v("#")]),e._v(" 其它 MVVM 实现者")]),e._v(" "),_("ul",[_("li",[e._v("AngularJS")]),e._v(" "),_("li",[e._v("ReactJS")]),e._v(" "),_("li",[e._v("微信小程序")])]),e._v(" "),_("h3",{attrs:{id:"使用-vue-js的优势"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-vue-js的优势","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Vue.js的优势")]),e._v(" "),_("ul",[_("li",[e._v("轻量级，体积小是一个重要指标。Vue.js 压缩后有只有 "),_("strong",[e._v("20多kb")]),e._v(" （Angular 压缩后 "),_("strong",[e._v("56kb+")]),e._v("，React 压缩后 "),_("strong",[e._v("44kb+")]),e._v("）")]),e._v(" "),_("li",[e._v("移动优先。更适合移动端，比如移动端的 Touch 事件")]),e._v(" "),_("li",[e._v("易上手，学习曲线平稳，文档齐全")]),e._v(" "),_("li",[e._v("吸取了 Angular（"),_("code",[e._v("模块化")]),e._v("）和 React（"),_("code",[e._v("虚拟 DOM")]),e._v("）的长处，并拥有自己独特的功能，如："),_("code",[e._v("计算属性")])]),e._v(" "),_("li",[e._v("开源，社区活跃度高")])]),e._v(" "),_("h2",{attrs:{id:"vue-js-的两大核心要素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-的两大核心要素","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue.js 的两大核心要素")]),e._v(" "),_("h3",{attrs:{id:"数据驱动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动","aria-hidden":"true"}},[e._v("#")]),e._v(" 数据驱动")]),e._v(" "),_("p",[e._v("当你把一个普通的 JavaScript 对象传给 Vue 实例的 "),_("code",[e._v("data")]),e._v(" 选项，Vue 将遍历此对象所有的属性，并使用 "),_("code",[e._v("Object.defineProperty")]),e._v(" 把这些属性全部转为 "),_("code",[e._v("getter/setter")]),e._v("。"),_("strong",[e._v("Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器")]),e._v("。")]),e._v(" "),_("p",[e._v("这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。这里需要注意的问题是浏览器控制台在打印数据对象时 getter/setter 的格式化并不同，所以你可能需要安装 "),_("code",[e._v("vue-devtools")]),e._v(" 来获取更加友好的检查接口。")]),e._v(" "),_("p",[e._v("每个组件实例都有相应的 "),_("strong",[e._v("watcher")]),e._v(" 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 "),_("code",[e._v("setter")]),e._v(" 被调用时，会通知 "),_("code",[e._v("watcher")]),e._v(" 重新计算，从而致使它关联的组件得以更新。")]),e._v(" "),_("h3",{attrs:{id:"组件化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件化","aria-hidden":"true"}},[e._v("#")]),e._v(" 组件化")]),e._v(" "),_("ul",[_("li",[e._v("页面上每个独立的可交互的区域视为一个组件")]),e._v(" "),_("li",[e._v("每个组件对应一个工程目录，组件所需的各种资源在这个目录下就近维护")]),e._v(" "),_("li",[e._v("页面不过是组件的容器，组件可以嵌套自由组合（复用）形成完整的页面")])])])}],!1,null,null,null);v.default=r.exports}}]);
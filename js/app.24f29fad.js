(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-949dd180":"89b2d283","chunk-f770d21e":"a859791a"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-949dd180":1,"chunk-f770d21e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-949dd180":"8050b62a","chunk-f770d21e":"a34aed92"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-mall-admin/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0b0f":function(e,t,n){},"10de":function(e,t,n){"use strict";var a=n("6225"),r=n.n(a);r.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="4678"},"4c79":function(e,t,n){"use strict";var a=n("bb36");t["a"]={getProductsList:function(e){return a["a"].get("/products/all",{params:e})},addProduce:function(e){return a["a"].post("/products/add",e)},getProductDetail:function(e){return a["a"].get("/products/".concat(e))},editProduct:function(e){return a["a"].put("/products/edit",e)},removeProduct:function(e){var t=e.id;return a["a"].delete("/products/".concat(t))},uploadImages:function(e){return a["a"].post("/upload/images",e)}}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2819"),o=n.n(r),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"app",data:function(){return{}}},u=c,l=(n("034f"),n("2877")),d=Object(l["a"])(u,s,i,!1,null,null,null),f=d.exports,m=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("a-form-model",{ref:"loginForm",staticClass:"login-form",attrs:{"label-col":{span:6},"wrapper-col":{span:16,offset:1},model:e.form,rules:e.rules},on:{submit:e.handleSubmit},nativeOn:{submit:function(e){e.preventDefault()}}},[n("a-form-model-item",{staticClass:"username",attrs:{label:"邮箱",prop:"email"}},[n("a-auto-complete",{attrs:{"data-source":e.dataSource,placeholder:"Email"},on:{change:e.handleChange},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("a-form-model-item",{staticClass:"password",attrs:{label:"密码",prop:"password"}},[n("a-input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:7}}},[n("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("登录")]),n("a-button",{attrs:{type:"default"},on:{click:e.register}},[e._v("注册")])],1)],1)],1)},h=[],b=(n("c975"),n("bb36")),g={getUserMenu:function(e){return"customer"===e?{roles:["test"],username:e,menus:[{title:"商品",name:"goods",icon:"inbox",hidden:0},{title:"商品列表",name:"goodsList",icon:"unordered-list",hidden:0},{title:"添加商品",name:"goodsAdd",icon:"file-add",hidden:0},{title:"编辑商品",name:"goodsEdit",icon:"file-edit",hidden:1}]}:{roles:["test"],username:e,menus:[{title:"商品",level:0,name:"goods",icon:"inbox",hidden:0},{title:"商品列表",name:"goodsList",icon:"unordered-list",hidden:0},{title:"添加商品",name:"goodsAdd",icon:"file-add",hidden:0},{title:"商品类目管理",name:"goodsCategory",icon:"category",hidden:0},{title:"编辑商品",name:"goodsEdit",icon:"file-edit",hidden:1}]}},login:function(e){return b["a"].post("/passport/login",e)}},v={data:function(){return{dataSource:[],formLayout:"horizontal",form:{username:"",email:"",password:""},rules:{email:[{required:!0,message:"Please input your email!"}],password:[{required:!0,message:"Please input your note!"}]}}},methods:{handleChange:function(e){this.dataSource=!e||e.indexOf("@")>=0?[]:["".concat(e,"@gmail.com"),"".concat(e,"@163.com"),"".concat(e,"@qq.com"),"".concat(e,"@duyi-inc.com")]},handleSubmit:function(e){var t=this;e.preventDefault(),this.$refs.loginForm.validate((function(e){e?g.login(t.form).then((function(e){console.log("======",e),t.$store.dispatch("login",e),t.$router.push({name:"home"})})):console.log("error")}))},register:function(e){e.preventDefault(),this.$router.push({name:"register"})}}},j=v,y=(n("10de"),Object(l["a"])(j,p,h,!1,null,null,null)),_=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 注册 ")])},w=[],S={},E=Object(l["a"])(S,k,w,!1,null,null,null),O=E.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper"},[n("slider-nav",{key:e.sliderKey}),n("div",{class:[e.$store.state.sliderBar.opened?"expend-collapsed":"","app-main"]},[n("nav-bar"),n("div",{staticClass:"container"},[n("router-view")],1)],1)],1)},x=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-nav"},[n("a-menu",{attrs:{"default-selected-keys":[e.$router.currentRoute.name],"default-open-keys":[e.$router.currentRoute.matched[0].name],mode:"inline",theme:"dark",inlineCollapsed:e.$store.state.sliderBar.opened}},e._l(e.routes,(function(t){return n("a-sub-menu",{key:t.name},[t.hidden?e._e():n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:t.meta.icon}}),n("span",[e._v(e._s(t.meta.title))])],1),e._l(t.children,(function(a){return[a.hidden?e._e():n("a-menu-item",{key:a.name},[n("router-link",{attrs:{to:t.path&&"/"!=t.path?t.path+"/"+a.path:a.path}},[n("a-icon",{attrs:{type:a.meta.icon}}),n("span",[e._v(e._s(a.meta.title))])],1)],1)]}))],2)})),1)],1)},z=[],P=(n("4de4"),{data:function(){return{routes:this.$store.state.permission.routers.filter((function(e){return!e.hidden}))}},computed:{},methods:{}}),R=P,T=Object(l["a"])(R,$,z,!1,null,null,null),L=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("a-button",{staticClass:"collapsed",attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[n("a-icon",{attrs:{type:e.$store.state.sliderBar.opened?"menu-unfold":"menu-fold"}})],1),n("a-breadcrumb",{attrs:{routes:e.routes},scopedSlots:e._u([{key:"itemRender",fn:function(t){var a=t.route;return[a.meta.isPage?n("router-link",{attrs:{to:{name:a.name,path:a.path?a.path:"/home"}}},[e._v(e._s(a.meta.title))]):n("span",[e._v(e._s(a.meta.title))])]}}])}),n("ul",{staticClass:"user-info"},[n("li",{staticClass:"username"},[e._v(" 欢迎"+e._s(e.$store.state.user.name)+" "),n("a-icon",{attrs:{type:"down"}})],1),n("li",{staticClass:"login-out-btn",on:{click:e.loginOut}},[e._v(" 退出 ")])])],1)},D=[],B={data:function(){return{routes:[]}},computed:{},watch:{$route:{handler:function(){this.changeRoutes()}}},methods:{toggleCollapsed:function(){this.$store.dispatch("toggleSideBar")},changeRoutes:function(){this.routes=this.$router.currentRoute.matched},loginOut:function(){this.$store.dispatch("loginOut"),location.reload()}},mounted:function(){this.routes=this.$router.currentRoute.matched}},I=B,N=Object(l["a"])(I,A,D,!1,null,null,null),G=N.exports,M={data:function(){return{sliderKey:1}},computed:{},watch:{$route:function(){this.sliderKey+=1}},components:{sliderNav:L,NavBar:G}},F=M,U=(n("f4a9"),Object(l["a"])(F,C,x,!1,null,null,null)),q=U.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"goods-list"},[n("select-form",{attrs:{form:e.selectionForm},on:{search:e.search}}),n("a-button",{staticClass:"goods-add-btn",on:{click:e.addGoods}},[e._v("新增商品")]),n("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e._id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"status",fn:function(t){return[n("div",[e._v(" "+e._s(t?"上架":"下架")+" ")])]}},{key:"operation",fn:function(t){return[n("div",[n("a-button",{on:{click:function(n){return e.editGoods(t)}}},[e._v("编辑")]),n("a-button",{on:{click:function(n){return e.deleteGoods(t.id)}}},[e._v("删除")])],1)]}}])})],1)},W=[],J=(n("4160"),n("d81d"),n("b0c0"),n("159b"),n("5530")),H=(n("96cf"),n("1da1")),V=n("4c79"),Q=n("c405"),X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select"},[n("a-form-model",{attrs:{layout:"inline",model:e.formData}},[e._l(e.formData,(function(t){return n("a-form-model-item",{key:t.name,attrs:{label:t.label,labelCol:{span:10},wrapperCol:{span:12},prop:t.name}},["input"==t.type?n("a-input",{attrs:{placeholder:"input placeholder"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"field.value"}}):"select"==t.type?n("a-select",{attrs:{placeholder:"please select your zone",allowClear:!0},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"field.value"}},e._l(t.options,(function(t){return n("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.label))])})),1):e._e()],1)})),n("a-form-model-item",[n("a-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("搜索")])],1)],2)],1)},Y=[],Z={data:function(){return{}},props:["form"],computed:{formData:function(){return Object(J["a"])({},this.form)}},methods:{submit:function(){var e={};for(var t in this.formData)e[t]=this.formData[t].value;this.$emit("search",e)}}},ee=Z,te=Object(l["a"])(ee,X,Y,!1,null,null,null),ne=te.exports,ae={data:function(){return{selectionForm:{searchWord:{label:"搜索关键字",name:"searchWord",value:"",type:"input",options:[]},category:{label:"商品类目",name:"category",value:void 0,type:"select",options:[]}},data:[],pagination:{current:1,pageSize:20,showSizeChanger:!0},loading:!1,columns:[{title:"id",dataIndex:"id"},{title:"标题",dataIndex:"title",width:"20%"},{title:"描述",dataIndex:"desc"},{title:"类目",dataIndex:"categoryName"},{title:"预售价格",dataIndex:"price"},{title:"折扣价格",dataIndex:"price_off"},{title:"标签",dataIndex:"tags"},{title:"限制购买数量",dataIndex:"inventory"},{title:"上架状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",width:"20%",scopedSlots:{customRender:"operation"}}]}},components:{selectForm:ne},created:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Q["a"].getCategoryList().then((function(t){e.selectionForm.category.options=t.data.map((function(e){return Object(J["a"])({},e,{label:e.name})}))})),e.fetch();case 2:case"end":return t.stop()}}),t)})))()},methods:{handleTableChange:function(e,t){var n=Object(J["a"])({},this.pagination);n.current=e.current,n.pageSize=e.pageSize,this.pagination=n,this.fetch(Object(J["a"])({results:e.pageSize,page:e.current},t))},search:function(){this.fetch()},fetch:function(){var e=this;this.loading=!0,V["a"].getProductsList({page:this.pagination.current||1,size:this.pagination.pageSize||10,searchWord:this.selectionForm.searchWord.value,category:this.selectionForm.category.value}).then((function(t){var n=Object(J["a"])({},e.pagination);n.total=parseInt(t.total);var a=e.selectionForm.category.options;e.data=t.data.map((function(e){var t="";return a.forEach((function(n){n.id===e.category&&(t=n.name)})),e.categoryName=t,e})),e.pagination=n})).finally((function(){e.loading=!1}))},addGoods:function(){this.$router.push({path:"/goods/add"})},editGoods:function(e){console.log(e),this.$router.push({path:"/goods/edit/".concat(e.id)})},deleteGoods:function(e){var t=this;V["a"].removeProduct({id:e}).then((function(){t.fetch()}))}}},re=ae,oe=(n("bee7"),Object(l["a"])(re,K,W,!1,null,null,null)),se=oe.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticStyle:{"background-color":"#ececec",padding:"20px"}},[n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"商品总览",bordered:!1}},[n("p",[e._v("card content")])])],1),n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"用户总览",bordered:!1}},[n("p",[e._v("card content")])])],1),n("a-col",{attrs:{span:8}},[n("a-card",{attrs:{title:"销售总览",bordered:!1}},[n("p",[e._v("card content")])])],1)],1)],1),n("ve-line",{attrs:{data:e.chartData,settings:e.chartSettings}})],1)},ce=[],ue={data:function(){return this.chartSettings={stack:{"用户":["访问用户","下单用户"]},area:!0},{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}}},le=ue,de=Object(l["a"])(le,ie,ce,!1,null,null,null),fe=de.exports;a["a"].use(m["a"]);var me=[{path:"/login",component:_,hidden:!0,name:"login"},{path:"/register",component:O,name:"register",hidden:!0},{path:"/",component:q,redirect:{path:"/home"},name:"index",meta:{title:"首页",icon:"home",isPage:!1},children:[{path:"/home",component:fe,name:"home",meta:{title:"统计",icon:"home",isPage:!0}}]}],pe=[{path:"/goods",component:q,name:"goods",meta:{title:"商品",icon:"inbox",isPage:!1},children:[{path:"list",name:"goodsList",meta:{title:"商品列表",icon:"unordered-list",isPage:!0},component:se},{path:"add",name:"goodsAdd",meta:{title:"新增商品",icon:"file-add",isPage:!0},component:function(){return n.e("chunk-949dd180").then(n.bind(null,"5141"))}},{path:"category",name:"goodsCategory",meta:{title:"商品类别管理",icon:"category",isPage:!1},component:function(){return n.e("chunk-f770d21e").then(n.bind(null,"a17e"))}},{path:"edit/:id",name:"goodsEdit",meta:{title:"编辑商品",icon:"file-edit",isPage:!0},component:function(){return n.e("chunk-949dd180").then(n.bind(null,"5141"))}}]}],he=new m["a"]({mode:"hash",base:"/vue-mall-admin/",routes:me}),be=he,ge=n("2f62");n("99af");function ve(e,t){for(var n=0;n<t.length;n++){var a=t[n];if(e===a.name)return a}return null}function je(e,t){if(t.name){var n=ve(t.name,e);return null!=n?(null!=n.title&&""!==n.title&&(t.meta.title=n.title),null!=n.icon&&""!==n.title&&(t.meta.icon=n.icon),null!=n.hidden&&(t.hidden=0!==n.hidden),!0):void 0!==t.hidden&&!0===t.hidden}return!0}var ye={state:{routers:me,addRouters:[]},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t,e.routers=me.concat(t)}},actions:{generateRoutes:function(e,t){var n=e.commit,a=t.menus,r=pe.filter((function(e){return!!je(a,e)&&(e.children&&e.children.length>0?(e.children=e.children.filter((function(e){return!!je(a,e)&&e})),e):e)}));n("SET_ROUTERS",r)}}},_e=ye,ke=(n("498a"),n("a78e")),we=n.n(ke),Se="username";function Ee(){return we.a.get(Se)}function Oe(e){return we.a.set(Se,e)}function Ce(){return we.a.remove(Se)}var xe={state:{name:Ee(),avatar:"",roles:[]},mutations:{SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t}},actions:{login:function(e,t){var n=e.commit,a=t.username.trim();n("SET_NAME",a),Oe(a)},loginOut:function(e){var t=e.commit;t("SET_NAME",""),Ce()},getUserMenu:function(e){var t=e.commit,n=e.state,a=g.getUserMenu(n.roles);return a.roles&&a.roles.length>0&&t("SET_ROLES",a.roles),a}}},$e=xe;a["a"].use(ge["a"]);var ze=new ge["a"].Store({state:{sliderBar:{opened:!1}},mutations:{TOGGLE_SLIDERBAR:function(e){e.sliderBar.opened=!e.sliderBar.opened}},actions:{toggleSideBar:function(e){var t=e.commit;t("TOGGLE_SLIDERBAR")}},modules:{permission:_e,user:$e},getters:{addRouters:function(e){return e.permission.addRouters},routers:function(e){return e.permission.routers}}}),Pe=n("f23d");n("0b0f");a["a"].use(Pe["a"]),be.beforeEach((function(e,t,n){return"/login"===e.path?n():ze.state.user.name?0===ze.state.user.roles.length?ze.dispatch("getUserMenu").then((function(t){var a=t.username,r=t.menus;return ze.dispatch("generateRoutes",{menus:r,username:a}).then((function(){be.addRoutes(ze.getters.addRouters),n(Object(J["a"])({},e,{replace:!0}))})).catch((function(){n("/")}))})):n():n("/login")})),a["a"].config.productionTip=!1,a["a"].use(o.a),new a["a"]({router:be,store:ze,render:function(e){return e(f)}}).$mount("#app")},6225:function(e,t,n){},"85ec":function(e,t,n){},bb36:function(e,t,n){"use strict";n("d3b7");var a=n("5530"),r=n("bc3a"),o=n.n(r),s=o.a.create({baseURL:"https://mallapi.duyiedu.com/"});s.interceptors.request.use((function(e){return e.params=Object(a["a"])({},e.params,{appkey:"aaaaaa_1595418182431"}),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return 200!==e.status?e.statusText:"success"!==e.data.status?Promise.reject(e.data.msg):e.data.data}),(function(e){return Promise.reject(e)})),t["a"]=s},bed7:function(e,t,n){},bee7:function(e,t,n){"use strict";var a=n("bed7"),r=n.n(a);r.a},c405:function(e,t,n){"use strict";var a=n("bb36");t["a"]={getCategoryList:function(e){return a["a"].get("/category/all",{params:e})},addCategory:function(e){return a["a"].post("/category/add",e)},editCategory:function(e){return a["a"].put("/category/edit",e)},deleteCategory:function(e){var t=e.id;return a["a"].delete("/category/".concat(t))}}},e5be:function(e,t,n){},f4a9:function(e,t,n){"use strict";var a=n("e5be"),r=n.n(a);r.a}});
//# sourceMappingURL=app.24f29fad.js.map
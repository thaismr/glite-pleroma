(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8b70"],{K3CD:function(e,t,s){},ZvHC:function(e,t,s){"use strict";var n=s("K3CD");s.n(n).a},c11S:function(e,t,s){"use strict";var n=s("gTgX");s.n(n).a},gTgX:function(e,t,s){},ntYl:function(e,t,s){"use strict";s.r(t);var n=s("J4zp"),o=s.n(n),a=s("XJYT"),r=s("wAo7"),i=s("mSNy"),l={name:"Login",components:{"svg-icon":r.a},data:function(){return{loginForm:{username:"",password:""},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var e=this;if(this.loading=!0,this.checkUsername()){var t=this.getLoginData();this.$store.dispatch("LoginByUsername",t).then(function(){e.loading=!1,e.$router.push({path:e.redirect||"/users/index"})}).catch(function(){e.loading=!1})}else Object(a.Message)({message:i.a.t("login.errorMessage"),type:"error",duration:7e3}),this.$store.dispatch("addErrorLog",{message:i.a.t("login.errorMessage")}),this.loading=!1},checkUsername:function(){return this.loginForm.username.includes("@")},getLoginData:function(){var e=this.loginForm.username.split("@"),t=o()(e,2),s=t[0],n=t[1];return{username:s.trim(),authHost:n.trim(),password:this.loginForm.password}}}},c=(s("c11S"),s("ZvHC"),s("KHd+")),p=Object(c.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("login.title"))+"\n      ")])]),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{attrs:{placeholder:e.$t("login.username"),name:"username",type:"text","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{attrs:{type:e.passwordType,placeholder:e.$t("login.password"),name:"password","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n      "+e._s(e.$t("login.logIn"))+"\n    ")])],1)],1)},[],!1,null,"57350b8e",null);p.options.__file="index.vue";t.default=p.exports}}]);
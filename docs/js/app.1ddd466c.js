(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],h=0,f=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"011a":function(e,t,a){e.exports=a.p+"img/redbit.ffcabbca.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("bc3a"),i=a.n(s),r=a("a7fe"),o=a.n(r),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e.$vuetify.breakpoint.mdAndUp?a("div",e._l(e.pages,(function(t){return a("v-btn",{key:t.name,attrs:{exact:"",to:{name:t.name},text:""}},[e._v(e._s(t.name))])})),1):e._e(),e.$vuetify.breakpoint.smAndDown?a("div",{staticClass:"d-flex align-center"},[a("v-btn",{attrs:{text:""},on:{click:function(t){e.drawer=!0}}},[a("v-icon",[e._v("mdi-menu")])],1)],1):e._e(),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/RedBita",text:""}},[e.$vuetify.breakpoint.mdAndUp?a("span",{staticClass:"mr-2"},[e._v("github repo")]):e._e(),e.$vuetify.breakpoint.mdAndUp?a("v-icon",[e._v("mdi-open-in-new")]):e._e(),e.$vuetify.breakpoint.smAndDown?a("v-icon",[e._v("mdi-github")]):e._e()],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},e._l(e.pages,(function(t){return a("v-list-item-group",{key:t.name},[a("v-list-item",{attrs:{exact:"",to:{name:t.name}}},[a("v-list-item-title",[e._v(e._s(t.name))])],1)],1)})),1)],1),a("v-main",{staticClass:"secondary"},[a("router-view",{staticClass:"ma-0"})],1)],1)},l=[],u=(a("99af"),a("4de4"),a("c975"),a("b0c0"),{name:"App",components:{},data:function(){return{drawer:!1,home:[{name:"home",path:"/"}],pages:[]}},mounted:function(){var e=this;console.log(this.$vuetify.breakpoint.xsOnly),this.axios.get("https://api.github.com/repos/Redbita/redbita.github.io/contents/data").then((function(t){var a=t.data.filter((function(e){return e.name.indexOf(".html")<0}));e.pages=e.home.concat(a),console.log(e.pages)}))}}),h=u,f=a("2877"),m=a("6544"),d=a.n(m),p=a("7496"),v=a("40dc"),b=a("8336"),g=a("132d"),w=a("8860"),_=a("da13"),y=a("1baa"),x=a("5d23"),C=a("f6c4"),k=a("f774"),P=a("2fa4"),O=Object(f["a"])(h,c,l,!1,null,null,null),S=O.exports;d()(O,{VApp:p["a"],VAppBar:v["a"],VBtn:b["a"],VIcon:g["a"],VList:w["a"],VListItem:_["a"],VListItemGroup:y["a"],VListItemTitle:x["a"],VMain:C["a"],VNavigationDrawer:k["a"],VSpacer:P["a"]});var I=a("f309");n["a"].use(I["a"]);var V=new I["a"]({theme:{dark:!0,themes:{dark:{primary:"#ff2400",secondary:"#000000",accent:"#8c9eff",error:"#b71c1c"}}}}),R=a("8c4f"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ma-0 pa-0"},[a("v-row",{staticClass:"ma-0 pa-0"},[a("v-toolbar",{staticClass:"mt-4",attrs:{dark:"",color:"black"}},[e.$vuetify.breakpoint.smAndDown?e._e():a("v-toolbar-title",[e._v("Search for machines")]),a("v-text-field",{staticClass:"mx-2",attrs:{"hide-no-data":"","hide-details":"",label:"What are you stuck on?","solo-inverted":"","append-icon":"mdi-magnify"},on:{change:e.update_list,keyup:e.delayed_update},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),a("v-row",{staticClass:"px-2 py-2 ma-0"},e._l(e.machines_to_show,(function(t){return a("v-col",{key:t.name,attrs:{cols:"12",sm:"12",md:"3"}},[t.done?a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var s=n.hover;return[a("v-card",{class:{"on-hover":s},on:{click:function(a){return e.open_machine(t.name)}}},[a("div",{staticClass:"d-flex"},[a("div",[a("v-avatar",{staticClass:"ma-3",attrs:{size:"70",tile:""}},[a("v-img",{attrs:{src:t.img}})],1),a("h3",{staticClass:"d-flex justify-center"},[e._v(e._s(t.Points))]),a("p",{staticClass:"d-flex justify-center"},[e._v("points")])],1),a("div",[a("v-card-title",{staticClass:"headline"},[e._v(e._s(t.name))]),a("v-card-subtitle",{class:e.getColor(t.Difficulty)},[e._v(e._s(t.Difficulty))]),a("v-card-subtitle",[e._v("IP: "+e._s(t.IP))])],1),a("v-spacer"),a("div",[a("v-avatar",{staticClass:"ma-3",attrs:{size:"30",tile:""}},[a("v-img",{attrs:{src:e.getOSImage(t.OS)}})],1)],1)],1)])]}}],null,!0)}):a("v-card",[a("div",{staticClass:"d-flex to-do"},[a("div",[a("v-avatar",{staticClass:"ma-3",attrs:{size:"70",tile:""}},[a("v-img",{attrs:{src:t.img}})],1),a("h3",{staticClass:"d-flex justify-center"},[e._v(e._s(t.Points))]),a("p",{staticClass:"d-flex justify-center"},[e._v("points")])],1),a("div",[a("v-card-title",{staticClass:"headline"},[e._v(e._s(t.name))]),a("v-card-subtitle",{class:e.getColor(t.Difficulty)},[e._v(e._s(t.Difficulty))]),a("v-card-subtitle",[e._v("IP: "+e._s(t.IP))])],1),a("v-spacer"),a("div",[a("v-avatar",{staticClass:"ma-3",attrs:{size:"30",tile:""}},[a("v-img",{attrs:{src:e.getOSImage(t.OS)}})],1)],1)],1)])],1)})),1)],1)},j=[],L=(a("4160"),a("caad"),a("ac1f"),a("2532"),a("841c"),a("1276"),a("159b"),a("96cf"),a("1da1")),$=a("c7cc"),A={name:"HelloWorld",data:function(){return{machines:[],machines_to_show:[],search:""}},mounted:function(){var e=Object(L["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.get_machines_writeup();case 2:t=e.sent,a=[],t.forEach((function(e){a.push(e.name.split(".")[0].toLowerCase())})),console.log(a,$),$.forEach((function(e){e["done"]=a.includes(e.name.toLowerCase()),console.log(e)})),n=$.sort((function(e,t){var a=e.done===t.done?0:e.done?-1:1;return parseInt(e.Points)-parseInt(t.Points)+a})),this.machines=n,this.machines_to_show=n;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getOSImage:function(e){return"Linux"===e?"https://www.hackthebox.eu/images/linux.png":"Windows"===e?"https://www.hackthebox.eu/images/win.png":"https://www.flaticon.com/svg/static/icons/svg/1661/1661995.svg"},getColor:function(e){return"Easy"==e?"green--text":"Medium"==e?"yellow--text":"Hard"==e?"orange--text":"red--text"},get_machines_writeup:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("https://api.github.com/repos/RedBita/redbita.github.io/contents/data/machines");case 3:return a=t.sent,t.abrupt("return",a.data);case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},open_machine:function(e){this.$vuetify.breakpoint.mdAndDown?window.open("https://redbita.github.io/data/machines/"+e.toLowerCase()+".pdf"):(this.$router.push("/machines/"+e),console.log(e))},update_list:function(){var e=this.search,t=this.machines.filter((function(t){if(console.log(t),t.name.toLowerCase().includes(e.toLowerCase()))return t}));this.machines_to_show=t},delayed_update:function(){var e=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){e.update_list()}),150)}}},M=A,T=(a("72b4"),a("8212")),E=a("b0af"),W=a("99d9"),H=a("62ad"),J=a("ce87"),B=a("adda"),z=a("0fd9"),F=a("8654"),U=a("71d9"),K=a("2a7f"),N=Object(f["a"])(M,D,j,!1,null,"092b3807",null),G=N.exports;d()(N,{VAvatar:T["a"],VCard:E["a"],VCardSubtitle:W["a"],VCardTitle:W["b"],VCol:H["a"],VHover:J["a"],VImg:B["a"],VRow:z["a"],VSpacer:P["a"],VTextField:F["a"],VToolbar:U["a"],VToolbarTitle:K["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"fill-height pa-0 ma-0"},[e.$vuetify.breakpoint.smAndDown?e._e():a("v-col",{staticClass:"fill-height pa-0 ma-0 align-stretch",attrs:{col:"12",md:"3",sm:"0"}},[a("h1",{staticClass:"d-flex justify-center"},[e._v(e._s(e.name))]),a("v-row",{staticClass:"d-flex justify-center",attrs:{width:"100px"}},[a("v-img",{attrs:{src:e.machine_info.img,"max-height":"100","max-width":"100"}})],1),a("h3",{staticClass:"d-flex justify-center"},[e._v(e._s(e.machine_info.IP))]),a("v-row",{staticClass:"d-flex justify-center"},[a("h3",{class:e.getColor(e.machine_info.Difficulty)},[e._v(" "+e._s(e.machine_info.Difficulty)+" ")])]),a("v-row",{staticClass:"d-flex justify-center"},[a("h3",[e._v("Released: "+e._s(e.machine_info.Release))])]),a("v-row",{staticClass:"d-flex justify-center"},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"30",tile:""}},[a("v-img",{attrs:{src:e.getOSImage(e.machine_info.OS)}})],1)],1),a("v-row",{staticClass:"d-flex justify-center align-end align-stretch align-bottom"},[a("v-img",{attrs:{"max-width":"300",src:"https://www.hackthebox.eu/badge/image/371504"}})],1)],1),a("v-col",{staticClass:"pa-0 ma-0",attrs:{col:"12",md:"9",sm:"12",xs:"12"}},[a("iframe",{staticStyle:{border:"none"},attrs:{src:e.filePath,width:"100%",height:"100%"}})])],1)},Y=[],q=(a("d81d"),{data:function(){return{filePath:"",name:name,machine_info:{}}},mounted:function(){var e=$.map((function(e){return e.name})).indexOf(this.$route.params.name);this.machine_info=$[e],this.name=this.$route.params.name,this.filePath="https://redbita.github.io/data/machines/"+this.name.toLowerCase()+".pdf",console.log(this.file)},methods:{getOSImage:function(e){return"Linux"===e?"https://www.hackthebox.eu/images/linux.png":"Windows"===e?"https://www.hackthebox.eu/images/win.png":"https://www.flaticon.com/svg/static/icons/svg/1661/1661995.svg"},getColor:function(e){return console.log(e),"Easy"==e?"green--text":"Medium"==e?"yellow--text":"Hard"==e?"orange--text":"red--text"}}}),X=q,Z=Object(f["a"])(X,Q,Y,!1,null,null,null),ee=Z.exports;d()(Z,{VAvatar:T["a"],VCol:H["a"],VImg:B["a"],VRow:z["a"]});var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"text-center d-flex justify-center ma-0"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("011a"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("Welcome to RedBit")]),n("p",{staticClass:"subheading font-weight-regular"},[e._v(" If you wanna hang out with us "),n("br"),e._v("please join our online "),n("a",{attrs:{href:"https://discord.gg/YKQa2uW",target:"_blank"}},[e._v("Discord Community")])])])],1)},ae=[],ne={name:"HelloWorld",data:function(){return{}}},se=ne,ie=Object(f["a"])(se,te,ae,!1,null,null,null),re=ie.exports;d()(ie,{VCol:H["a"],VImg:B["a"],VRow:z["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ma-5"},[a("v-row",{staticClass:"ma-0"},[a("v-toolbar",{attrs:{dark:"",color:"black"}},[a("v-text-field",{attrs:{"hide-no-data":"","hide-details":"",label:"What challenge are you interested in?","solo-inverted":"","append-icon":"mdi-magnify"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),a("v-row",[a("v-col",{staticClass:"mx-4"},e._l(e.challenges,(function(t){return a("v-card",{key:t.name,staticClass:"my-3",attrs:{elevation:"2",shaped:""},on:{click:function(a){return e.open_challenge(t.path)}}},[a("v-row",[a("v-card-title",{staticClass:"margin ml-5"},[e._v(e._s(t.name))]),a("v-spacer"),a("v-btn",{staticClass:"ma-5",attrs:{text:""}},[a("v-icon",[e._v("mdi-arrow-right")])],1)],1)],1)})),1)],1)],1)},ce=[],le={name:"HelloWorld",data:function(){return{search:"",challenges:[{name:"Reply Cyber Security challenge 2020",path:"rcs2020"},{name:"Reply Cyber Security challenge 2019",path:"rcs2019"}]}},methods:{open_challenge:function(e){this.$router.push("/challenges/"+e),console.log(e)}}},ue=le,he=Object(f["a"])(ue,oe,ce,!1,null,null,null),fe=he.exports;d()(he,{VBtn:b["a"],VCard:E["a"],VCardTitle:W["b"],VCol:H["a"],VIcon:g["a"],VRow:z["a"],VSpacer:P["a"],VTextField:F["a"],VToolbar:U["a"]}),n["a"].config.productionTip=!1,n["a"].use(o.a,i.a),n["a"].use(R["a"]);var me=[{path:"/machines",component:G,name:"machines"},{path:"/machines/:name",component:ee,name:"single"},{path:"/challenges",component:fe,name:"challenges"},{path:"/",component:re,name:"home"}],de=new R["a"]({routes:me});new n["a"]({router:de,vuetify:V,render:function(e){return e(S)}}).$mount("#app")},"70ea":function(e,t,a){},"72b4":function(e,t,a){"use strict";var n=a("70ea"),s=a.n(n);s.a},c7cc:function(e){e.exports=JSON.parse('[{"img":"https://www.hackthebox.eu/storage/avatars/241315b7f1bf911eb1b8dfa0b87e4723_thumb.png","name":"Cache","OS":"Linux","Difficulty":"Medium","Points":"30","Release":"09 May 2020","IP":"10.10.10.188"},{"img":"https://www.hackthebox.eu/storage/avatars/eab2ccffece8cdfa57d0743164b9776e_thumb.png","name":"Dyplesher","OS":"Linux","Difficulty":"Insane","Points":"50","Release":"23 May 2020","IP":"10.10.10.190"},{"img":"https://www.hackthebox.eu/storage/avatars/6437ea67350beceeb5c313f386bd1abe_thumb.png","name":"Blunder","OS":"Linux","Difficulty":"Easy","Points":"20","Release":"30 May 2020","IP":"10.10.10.191"},{"img":"https://www.hackthebox.eu/storage/avatars/7c69c876f496cd729a077277757d219d_thumb.png","name":"Blackfield","OS":"Windows","Difficulty":"Hard","Points":"40","Release":"06 Jun 2020","IP":"10.10.10.192"},{"img":"https://www.hackthebox.eu/storage/avatars/ca7a993af1eef2b5676f39dccd8fbb2f_thumb.png","name":"Fuse","OS":"Windows","Difficulty":"Medium","Points":"30","Release":"13 Jun 2020","IP":"10.10.10.193"},{"img":"https://www.hackthebox.eu/storage/avatars/9b4c7b192eb00be8460364338e48f21f_thumb.png","name":"Tabby","OS":"Linux","Difficulty":"Easy","Points":"20","Release":"20 Jun 2020","IP":"10.10.10.194"},{"img":"https://www.hackthebox.eu/storage/avatars/c2847af85c98ff1b15a75aec060fa2de_thumb.png","name":"RopeTwo","OS":"Linux","Difficulty":"Insane","Points":"50","Release":"27 Jun 2020","IP":"10.10.10.196"},{"img":"https://www.hackthebox.eu/storage/avatars/41fa976e012eb51bee13efc5419ce8ac_thumb.png","name":"Intense","OS":"Linux","Difficulty":"Hard","Points":"40","Release":"04 Jul 2020","IP":"10.10.10.195"},{"img":"https://www.hackthebox.eu/storage/avatars/5f5ab2f3fb31673d80623bdd98b286c3_thumb.png","name":"SneakyMailer","OS":"Linux","Difficulty":"Medium","Points":"30","Release":"11 Jul 2020","IP":"10.10.10.197"},{"img":"https://www.hackthebox.eu/storage/avatars/093f9f313b10d6e1dc4668d6c8485761_thumb.png","name":"Buff","OS":"Windows","Difficulty":"Easy","Points":"20","Release":"18 Jul 2020","IP":"10.10.10.198"},{"img":"https://www.hackthebox.eu/storage/avatars/792cdcf6434dad849ef37c4ab16bd68b_thumb.png","name":"OpenKeyS","OS":"OpenBSD","Difficulty":"Medium","Points":"30","Release":"25 Jul 2020","IP":"10.10.10.199"},{"img":"https://www.hackthebox.eu/storage/avatars/a6decd9e6fc0f628974ea0d691424be7_thumb.png","name":"Unbalanced","OS":"Linux","Difficulty":"Hard","Points":"40","Release":"01 Aug 2020","IP":"10.10.10.200"},{"img":"https://www.hackthebox.eu/storage/avatars/60b130ca117771c40ca35aef7bd40c4b_thumb.png","name":"Laser","OS":"Linux","Difficulty":"Insane","Points":"50","Release":"08 Aug 2020","IP":"10.10.10.201"},{"img":"https://www.hackthebox.eu/storage/avatars/13358d0b09074485f107f36625b50a5c_thumb.png","name":"Worker","OS":"Windows","Difficulty":"Medium","Points":"30","Release":"15 Aug 2020","IP":"10.10.10.203"},{"img":"https://www.hackthebox.eu/storage/avatars/547286d87bae2e17e0694432b7e4b920_thumb.png","name":"Omni","OS":"Other","Difficulty":"Easy","Points":"20","Release":"22 Aug 2020","IP":"10.10.10.204"},{"img":"https://www.hackthebox.eu/storage/avatars/1841efd90078820d7ddee432715f339d_thumb.png","name":"Feline","OS":"Linux","Difficulty":"Hard","Points":"40","Release":"29 Aug 2020","IP":"10.10.10.205"},{"img":"https://www.hackthebox.eu/storage/avatars/ec88bbe570fd512ab370208e5139bb41_thumb.png","name":"Passage","OS":"Linux","Difficulty":"Medium","Points":"30","Release":"05 Sep 2020","IP":"10.10.10.206"},{"img":"https://www.hackthebox.eu/storage/avatars/8cdb7b8009bb1de144e51f9c26847e69_thumb.png","name":"Compromised","OS":"Linux","Difficulty":"Hard","Points":"40","Release":"12 Sep 2020","IP":"10.10.10.207"},{"img":"https://www.hackthebox.eu/storage/avatars/0d507407f9e85f1447c5c5fb89c4a506_thumb.png","name":"CrossFit","OS":"Linux","Difficulty":"Insane","Points":"50","Release":"19 Sep 2020","IP":"10.10.10.208"},{"img":"https://www.hackthebox.eu/storage/avatars/256280ee1fb4fd4d7610881c209a2b5e_thumb.png","name":"Doctor","OS":"Linux","Difficulty":"Easy","Points":"20","Release":"26 Sep 2020","IP":"10.10.10.209"}]')}});
//# sourceMappingURL=app.1ddd466c.js.map
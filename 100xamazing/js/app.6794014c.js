(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/100xamazing/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"17f8":function(t,e,n){t.exports=n.p+"img/100XA brand name2.c332d782.png"},"49bc":function(t,e,n){t.exports=n.p+"img/100XA icon_nograd3.d0ba301a.png"},5549:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{staticClass:"indigo darken-3",attrs:{app:"",dark:"","inverted-scroll":""}},[n("h1",{staticClass:"text-lg-h4 text-h5 font-weight-thin"},[t._v("100 X Amazing")]),n("v-spacer"),n("div",{staticClass:"d-none d-sm-inline"},t._l(t.items,(function(e,i){return n("v-btn",{key:i,attrs:{text:""},on:{click:function(n){return t.scrollToSection(e.sectionId)}}},[n("v-icon",{staticClass:"mr-2"},[t._v(t._s(e.icon))]),n("span",[t._v(t._s(e.title))])],1)})),1),n("div",{staticClass:"d-inline d-sm-none"},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),n("v-navigation-drawer",{staticClass:"indigo darken-4",attrs:{temporary:"",fixed:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dark:"",nav:"",dense:""}},[n("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.items,(function(e,i){return n("v-list-item",{key:i,staticStyle:{cursor:"pointer"},attrs:{inactive:""},on:{click:function(n){return t.scrollToSection(e.sectionId)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1),n("v-main",[n("Banner"),n("Bio"),n("Highlight"),n("Socials"),n("div",{staticClass:"grey darken-4 pa-5",attrs:{id:"footer"}},[n("h5",[t._v("Copyright © 2020 100xAmazing")])])],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-parallax",{attrs:{dark:"",src:n("b5e0"),id:"banner-parallax",height:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("img",{staticClass:"mb-4 fadeInDown",attrs:{width:"300px",src:n("49bc")}}),i("h1",{staticClass:"text-md-h1 text-h2 font-weight-thin mb-4 fadeInDown"},[t._v(" 100 X Amazing ")]),i("h3",{staticClass:"subheading fadeInDown"},[t._v(" Worship in Progress ")]),i("v-btn",{staticClass:"mt-8 fadeInUp",attrs:{rounded:""},on:{click:function(e){return t.scrollToHighlight("highlight-header")}}},[t._v(" Watch our latest video ")])],1)],1)],1)},s=[],c={name:"Banner",data:function(){return{}},methods:{scrollToHighlight:function(){var t=document.getElementById("highlight-video");t.scrollIntoView({behavior:"smooth",block:"center"})}}},l=c,u=(n("f230"),n("2877")),d=n("6544"),h=n.n(d),f=n("8336"),p=n("62ad"),g=n("8b9c"),m=n("0fd9"),v=Object(u["a"])(l,o,s,!1,null,null,null),b=v.exports;h()(v,{VBtn:f["a"],VCol:p["a"],VParallax:g["a"],VRow:m["a"]});var w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-sheet",{staticClass:"ma-lg-12 pa-lg-8 my-10 mx-2 d-flex flex-lg-row flex-column mb-6",attrs:{id:"bio-sheet"}},[i("div",{staticClass:"bio-col my-8"},[i("h1",{staticClass:"text-lg-h1 text-h2 font-weight-thin"},[t._v(" Who we are ")])]),i("div",{staticClass:"bio-col"},[i("img",{staticClass:"mb-4",attrs:{id:"bio-logo",width:"300px",src:n("17f8")}}),i("p",{staticClass:"mx-sm-8 mx-md-0"},[t._v(" Based in the city of Guelph, we are the youth worship band for the "),i("a",{attrs:{href:"https://www.facebook.com/Guelph-Vietnamese-Church-611755712211309/"}},[t._v(" Guelph Vietnamese Church")]),t._v(". Although we are just starting out, our ambitions are big and our God is bigger. We aim to use the gift of music to reach other youths, tell the good news, and worship God together. We may not be perfect but we are a worship in progress. ")])])])},x=[],_={name:"Bio",data:function(){return{}}},y=_,C=(n("c9ca"),n("8dd9")),V=Object(u["a"])(y,w,x,!1,null,null,null),k=V.exports;h()(V,{VSheet:C["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"px-lg-16 py-10 px-2 indigo darken-4"},[n("div",{staticClass:"mt-1 mx-2",attrs:{id:"highlight-header"}},[n("h1",{staticClass:"text-lg-h2 text-h3 font-weight-thin"},[t._v("Highlight Video")])]),n("div",{staticClass:"ma-10",attrs:{id:"highlight-video"}},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/rlYIgiFwBXA",frameborder:"0",loading:"lazy",allowfullscreen:""}})])])},j=[],O={name:"Highlight",data:function(){return{}}},B=O,S=(n("65df"),Object(u["a"])(B,I,j,!1,null,null,null)),A=S.exports;h()(S,{VRow:m["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"px-lg-16 py-lg-16 py-10 flex-md-row flex-column grey darken-4"},[n("div",{staticClass:"mb-8",attrs:{id:"socials-header"}},[n("h1",{staticClass:"text-lg-h2 text-h3 font-weight-thin"},[t._v("Follow Us")])]),n("div",{attrs:{id:"socials-links"}},[n("v-btn",{attrs:{text:"",ico:"",href:"https://www.youtube.com/channel/UCgIYXc5x8nLjF_kdD1sc-Ig"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-youtube")])],1),n("v-btn",{attrs:{text:"",icon:"",href:"https://www.instagram.com/100xamazing/"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-instagram")])],1),n("v-btn",{attrs:{text:"",ico:"",href:"https://www.facebook.com/100xamazing"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-facebook")])],1)],1)])},T=[],z={name:"Socials",data:function(){return{}}},E=z,H=(n("f95f"),n("132d")),G=Object(u["a"])(E,P,T,!1,null,null,null),L=G.exports;h()(G,{VBtn:f["a"],VIcon:H["a"],VRow:m["a"]});var M={name:"App",components:{Banner:b,Bio:k,Highlight:A,Socials:L},data:function(){return{items:[{title:"Home",icon:"mdi-home-variant",sectionId:"banner-parallax"},{title:"About",icon:"mdi-instrument-triangle",sectionId:"bio-logo"},{title:"Videos",icon:"mdi-music-note-eighth",sectionId:"highlight-video"},{title:"Social Media",icon:"mdi-account-multiple-plus",sectionId:"socials-header"}],drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}},methods:{scrollToSection:function(t){var e=document.getElementById(t);e.scrollIntoView({behavior:"smooth",block:"center"})}}},X=M,$=(n("034f"),n("7496")),D=n("40dc"),W=n("5bc1"),F=n("8860"),R=n("da13"),U=n("1baa"),J=n("34c3"),N=n("5d23"),Y=n("f6c4"),q=n("f774"),K=n("2fa4"),Q=Object(u["a"])(X,a,r,!1,null,null,null),Z=Q.exports;h()(Q,{VApp:$["a"],VAppBar:D["a"],VAppBarNavIcon:W["a"],VBtn:f["a"],VIcon:H["a"],VList:F["a"],VListItem:R["a"],VListItemGroup:U["a"],VListItemIcon:J["a"],VListItemTitle:N["a"],VMain:Y["a"],VNavigationDrawer:q["a"],VSpacer:K["a"]});var tt=n("f309");i["a"].use(tt["a"]);var et=new tt["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:et,render:function(t){return t(Z)}}).$mount("#app")},"65df":function(t,e,n){"use strict";n("d804")},"7fdb":function(t,e,n){},"85ec":function(t,e,n){},"9b77":function(t,e,n){},b5e0:function(t,e,n){t.exports=n.p+"img/hero.e7f655f6.png"},c9ca:function(t,e,n){"use strict";n("5549")},d804:function(t,e,n){},f230:function(t,e,n){"use strict";n("7fdb")},f95f:function(t,e,n){"use strict";n("9b77")}});
//# sourceMappingURL=app.6794014c.js.map
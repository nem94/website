(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={app:0},r={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b21e5106","chunk-008b3ed4":"e9fa5aaf","chunk-22375e22":"9f8bb4cc","chunk-359887d8":"11cb60ac","chunk-0aead758":"ac99ef46","chunk-705c18e0":"3cfe4904","chunk-58793de4":"94342a2d","chunk-6947a707":"e7062bda","chunk-2d210c47":"863ab3ec"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-008b3ed4":1,"chunk-22375e22":1,"chunk-359887d8":1,"chunk-0aead758":1,"chunk-705c18e0":1,"chunk-58793de4":1,"chunk-6947a707":1};i[e]?t.push(i[e]):0!==i[e]&&a[e]&&t.push(i[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-008b3ed4":"6f423411","chunk-22375e22":"1223ee40","chunk-359887d8":"05d2c0f5","chunk-0aead758":"6dd80138","chunk-705c18e0":"2515596f","chunk-58793de4":"e4aeadd5","chunk-6947a707":"49fa7fed","chunk-2d210c47":"31d6cfe0"}[e]+".css",r=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[e],f.parentNode.removeChild(f),a(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/website/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"16e2":function(e,t,a){"use strict";var n=a("6ca6"),i=a.n(n);i.a},"2d41":function(e,t,a){"use strict";var n=a("d98f"),i=a.n(n);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"header-info"},[n("b-img",{attrs:{src:a("cf05")}}),n("div",{staticClass:"info-list"},[n("div",{staticClass:"item"},[n("b-icon-telephone"),e._m(0)],1),n("div",{staticClass:"item"},[n("b-icon-clock-history"),e._m(1)],1),n("div",{staticClass:"item"},[n("b-icon-map"),e._m(2)],1)])],1),n("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),n("b-nav-item",{attrs:{to:"/about"}},[e._v("About")]),n("b-nav-item",{attrs:{to:"/services",activeClass:e.activeClass},on:{mouseover:e.onOver,mouseleave:e.onLeave}},[e._v(" Services "),n("b-dropdown",{ref:"dropdown",attrs:{"no-caret":"",variant:"primary",text:"Drop-Right"}},[n("b-dropdown-item",{ref:"civil",attrs:{to:"/services/civil"},on:{click:e.setParentActive}},[e._v("Constructii civile")]),n("b-dropdown-item",{attrs:{to:"/services/industrial"},on:{click:e.setParentActive}},[e._v("Constructii industriale")]),n("b-dropdown-item",{attrs:{to:"/services/certifications"},on:{click:e.setParentActive}},[e._v("Certificari")])],1)],1),n("b-nav-item",{attrs:{to:"/projects"}},[e._v("Projects")]),n("b-nav-item",{attrs:{to:"/contact-us"}},[e._v("Contact")])],1)],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ml-2"},[a("span",{staticClass:"d-block text-uppercase"},[e._v("Telefon")]),a("span",[e._v("0757 000 000")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ml-2"},[a("span",{staticClass:"d-block text-uppercase"},[e._v("Program")]),a("span",[e._v("Luni - Sambata 08:00 - 18:00")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ml-2"},[a("span",{staticClass:"d-block text-uppercase"},[e._v("Adresa")]),a("span",[e._v("Sos. Buzaului 3 B, Braila")])])}],c={data:function(){return{isClicked:!1}},computed:{activeClass:function(){return this.isClicked?"router-link-exact-active":""}},methods:{onOver:function(){this.$refs.dropdown.visible=!0},onLeave:function(){this.$refs.dropdown.visible=!1},setParentActive:function(){this.isClicked=!0}}},u=c,l=(a("c231"),a("2877")),d=Object(l["a"])(u,o,s,!1,null,"56c2495f",null),f=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"bg-primary"},[a("b-container",{attrs:{fluid:""}})],1)},m=[],v={},b=v,h=(a("2d41"),Object(l["a"])(b,p,m,!1,null,"15e61948",null)),_=h.exports,g={components:{Header:f,Footer:_}},k=g,C=(a("5c0b"),Object(l["a"])(k,i,r,!1,null,null,null)),y=C.exports,w=(a("d3b7"),a("8c4f")),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"home",attrs:{fluid:""}},[a("b-row",[a("div",{staticClass:"home-banner d-flex align-items-center"},[a("div",{staticClass:"overlay"}),a("b-col",{attrs:{"offset-md":"3",md:"9","data-aos":"fade-up-left","data-aos-delay":"20","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[a("h1",{staticClass:"title"},[e._v(" Realizam orice tip de lucrare, atat pentru persoane juridice, cat si pentru persoane fizice ")])])],1)]),a("b-row",{staticClass:"bg-primary middle-banner",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"20","data-aos-duration":"800","data-aos-easing":"ease-in-out"}},[a("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h3",[e._v("Specialisti in domeniul constructiilor")]),a("p",{staticClass:"mb-0"},[e._v(" Oferim solutii eficiente perfect adaptate cerintelor dumneavoastră, promptitudinea si seriozitatea fiind principile de baza in onorarea proiectelor. "),a("br"),e._v("Suntem o echipa de profesionisti in stransa colaborare cu arhitecți, instalatori și urbaniști pentru realizarea proiectelor de calitate. ")])])],1),a("b-row",{staticClass:"services"},[a("b-container",[a("h2",[e._v("Servicii")]),a("b-row",{staticClass:"description"},[a("b-col",{staticClass:"item",attrs:{cols:"12",md:"6","data-aos":"fade-down-right","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[a("b-icon-house",{attrs:{"font-scale":"3"}}),a("h4",[e._v("Constructii civile")]),a("p",[e._v(" Oferim solutii personalizate pentru orice tip de constructii civile. "),a("br"),e._v("Profesionalismul ne permite sa obtinem rezultate remarcabile indiferent ca vorbim de case de locuit, constructii cu destinatie turistica sau constructii birouri. ")])],1),a("b-col",{staticClass:"item",attrs:{cols:"12",md:"6","data-aos":"fade-down-left","data-aos-delay":"500","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[a("b-icon-building",{attrs:{"font-scale":"3"}}),a("h4",[e._v("Constructii industriale")]),a("p",[e._v(" Constructiile industriale sunt si vor fi intotdeauna un segment de maxim interes in zona constructiilor. "),a("br"),e._v("Fiecare constructie industriala reprezinta o provocare si tocmai de aceea oferim servicii de calitate in ceea ce priveste construirea acestora. ")])],1)],1)],1)],1),a("b-row",{staticClass:"why bg-primary"},[a("b-container",[a("b-row",[a("b-col",{attrs:{cols:"12",md:"6","data-aos":"zoom-in-up","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[a("h2",[e._v("De ce noi ?")]),a("p",{staticClass:"m-0"},[e._v(" Profesionalismul ne permite sa obtinem rezultate remarcabile indiferent ca vorbim de case de locuit, constructii cu destinatie turistica sau constructii birouri. "),a("br"),e._v("Cunoastem importanta materialelor de constructii si stim ce anume se potriveste cel mai bine in cazul fiecarei structuri. "),a("br"),e._v("Materialele sunt puse in valoare astfel incat rezultatul final sa fie cu adevarat remarcabil. ")])]),a("b-col",{staticClass:"d-flex justify-content-between align-items-center",attrs:{md:"6","data-aos-id":"count","data-aos":"zoom-in-left","data-aos-delay":"1000","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[a("div",{staticClass:"ml-3"},[a("b-icon-building",{attrs:{"font-scale":"3"}}),a("h5",[e._v("Lucrari executate")]),a("span",[e._v(e._s(e.animatedProjects))])],1),a("div",{staticClass:"mr-3"},[a("b-icon-person-circle",{attrs:{"font-scale":"3"}}),a("h5",[e._v("Angajati")]),a("span",[e._v(e._s(e.animatedEmployees))])],1)])],1)],1)],1)],1)},P=[],x=(a("b680"),a("cffa")),E={data:function(){return{employees:50,employeesNumber:0,projects:150,projectsNumber:0}},computed:{animatedEmployees:function(){var e=this;return document.addEventListener("aos:in:count",(function(){x["a"].to(e.$data,{duration:5,employeesNumber:e.employees})})),this.employeesNumber.toFixed(0)},animatedProjects:function(){var e=this;return document.addEventListener("aos:in:count",(function(){x["a"].to(e.$data,{duration:5,projectsNumber:e.projects})})),this.projectsNumber.toFixed(0)}}},O=E,z=(a("16e2"),Object(l["a"])(O,j,P,!1,null,"0a3d2196",null)),S=z.exports;n["default"].use(w["a"]);var A=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/projects",name:"Projects",component:function(){return a.e("chunk-008b3ed4").then(a.bind(null,"acca"))}},{path:"/services",name:"Services",component:function(){return Promise.all([a.e("chunk-22375e22"),a.e("chunk-58793de4")]).then(a.bind(null,"65ac"))}},{path:"/services/industrial",name:"Industrial",component:function(){return Promise.all([a.e("chunk-22375e22"),a.e("chunk-359887d8"),a.e("chunk-705c18e0")]).then(a.bind(null,"e280"))}},{path:"/services/civil",name:"Civil",component:function(){return Promise.all([a.e("chunk-22375e22"),a.e("chunk-359887d8"),a.e("chunk-0aead758")]).then(a.bind(null,"6dfa"))}},{path:"/services/certifications",name:"Certificate",component:function(){return Promise.all([a.e("chunk-22375e22"),a.e("chunk-6947a707")]).then(a.bind(null,"6335"))}},{path:"/contact-us",name:"Contact",component:function(){return a.e("chunk-2d210c47").then(a.bind(null,"b8fa"))}}],$=new w["a"]({mode:"history",base:"/website/",routes:A}),L=$,N=(a("fce9"),a("5f5b")),T=a("b1e0"),B=a("f5af"),F=a.n(B),H=(a("e829"),a("c9ec")),M=a.n(H);n["default"].use(M.a),n["default"].use(N["a"]),n["default"].use(T["a"]),n["default"].config.productionTip=!1,new n["default"]({created:function(){F.a.init()},router:L,render:function(e){return e(y)}}).$mount("#app")},"58aa":function(e,t,a){},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"6ca6":function(e,t,a){},"9c0c":function(e,t,a){},c231:function(e,t,a){"use strict";var n=a("58aa"),i=a.n(n);i.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d98f:function(e,t,a){},fce9:function(e,t,a){}});
//# sourceMappingURL=app.9e6637ee.js.map
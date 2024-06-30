(function(){"use strict";var t={8536:function(t,e,n){var r=n(7195),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("PublicLayout",[e("router-view")],1)],1)},a=[],i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("NavBar"),e("div",{staticClass:"body-content"},[t._t("default")],2),e("Footer")],1)},c=[],s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-navbar",{attrs:{toggleable:"sm",fixed:"top",type:"light",variant:"light"}},[e("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),e("b-navbar-brand",[e("img",{staticClass:"animated-scale",attrs:{src:"logo.ico",alt:"Logo de Farmacia"}}),e("router-link",{attrs:{to:t.PATH.ROOT}},[t._v(" FARMAMEL ")])],1),e("b-navbar-brand",{staticClass:"cart"},[e("router-link",{attrs:{to:t.PATH.CART}},[t.counter>0?e("div",{staticClass:"cart__counter"},[t._v(t._s(t.counter))]):t._e(),e("b-icon",{staticClass:"animated-shake",staticStyle:{width:"20px",height:"20px"},attrs:{icon:"cart"}})],1)],1),e("b-collapse",{attrs:{id:"nav-text-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:t.PATH.ROOT}},[e("span",[t._v("Home")])]),e("b-nav-item",{attrs:{to:t.PATH.PRODUCTS}},[e("span",[t._v("Productos")])]),e("b-nav-item",{attrs:{to:t.PATH.RECETAS}},[e("span",[t._v("Recetas")])])],1)],1)],1)},u=[],l=n(2304),d={name:"NavBar",props:{},components:{},data(){return{PATH:l.Z}},computed:{counter(){return this.$store.getters.numberOfProductsInCart}},created(){},methods:{}},f=d,p=n(1001),m=(0,p.Z)(f,s,u,!1,null,"89b103b6",null),v=m.exports,b=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},h=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("footer",{staticClass:"pie"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footer-section contact-details"},[e("h4",[t._v("Detalles de Contacto")]),e("p",[t._v("Farmacia en todo Momento")]),e("p",[t._v("Dirección: Calle Falsa 123, Buenos Aires, Argentina")]),e("p",[t._v("Teléfono: (123) 456-7890")]),e("p",[t._v("Email: contacto@farmamel.com")])]),e("div",{staticClass:"footer-section useful-info"},[e("h4",[t._v("Información Útil")]),e("p",[t._v("Horarios: Lunes a Viernes de 9:00 AM a 8:00 PM")]),e("p",[t._v("Sábados de 9:00 AM a 3:00 PM")]),e("p",[t._v("Servicios: Recetas, Entrega a Domicilio, Asesoría Farmacéutica")])]),e("div",{staticClass:"footer-section social-links"},[e("h4",[t._v("Síguenos en")]),e("a",{attrs:{href:"https://www.facebook.com",target:"_blank"}},[e("img",{attrs:{src:"img/facebook_logo_icon_147291.png",alt:"Facebook"}})]),e("a",{attrs:{href:"https://www.twitter.com",target:"_blank"}},[e("img",{attrs:{src:"img/twitter_x_new_logo_x_rounded_icon_256078.png",alt:"Twitter"}})]),e("a",{attrs:{href:"https://www.instagram.com",target:"_blank"}},[e("img",{attrs:{src:"img/Instagram_icon-icons.com_66804.png",alt:"Instagram"}})])])])])}],g={name:"Footer",props:{},components:{},data(){return{PATH:l.Z}},computed:{},created(){},methods:{}},_=g,y=(0,p.Z)(_,b,h,!1,null,"55f6f8b2",null),P=y.exports,C={name:"PublicLayout",components:{NavBar:v,Footer:P},data(){return{}},computed:{},created(){},methods:{}},T=C,w=(0,p.Z)(T,i,c,!1,null,"57c32d6f",null),A=w.exports,O={name:"App",components:{PublicLayout:A}},k=O,I=(0,p.Z)(k,o,a,!1,null,null,null),E=I.exports,x=n(4359),S=n(7244),R=n(2241),Z=[{path:l.Z.ROOT,component:()=>n.e(937).then(n.bind(n,3937))},{path:l.Z.PRODUCTS,component:()=>Promise.all([n.e(920),n.e(337)]).then(n.bind(n,4337))},{path:l.Z.CART,component:()=>Promise.all([n.e(920),n.e(10),n.e(434)]).then(n.bind(n,434))},{path:l.Z.CHECKOUT,component:()=>Promise.all([n.e(920),n.e(10),n.e(421)]).then(n.bind(n,3421))},{path:l.Z.GRATITUDE,component:()=>n.e(734).then(n.bind(n,8734))},{path:l.Z.RECETAS,component:()=>n.e(12).then(n.bind(n,6012))}];r["default"].use(R.ZP);const D=new R.ZP({mode:"history",routes:Z,scrollBehavior(){return{x:0,y:0}}});var F=D,j=n(408),B=n(6006);r["default"].use(j.ZP);const H=new j.ZP.Store({state:{productsIncart:[]},getters:{isIncart:t=>e=>{const n=t.productsIncart.find((t=>t.id===e));return!!n},numberOfProductsInCart:t=>t.productsIncart.length,totalPrice:t=>t.productsIncart.reduce(((t,{price:e,quantity:n})=>t+e*n),0)},mutations:{updateCart(t,e){t.productsIncart=e},addProduct(t,e){t.productsIncart=t.productsIncart.concat(e)},removeProduct(t,e){t.productsIncart=t.productsIncart.filter((t=>t.id!==e))},updateProductByID(t,e){const{items:n,id:r}=e,o=t.productsIncart.findIndex((t=>t.id===r));-1!==o&&t.productsIncart.splice(o,1,{...t.productsIncart[o],...n})}},actions:{updateCart({commit:t},e){t("updateCart",e)},addProduct({commit:t},e){e.quantity||(e.quantity=1),e.note||(e.note=null),t("addProduct",e)},removeProduct({commit:t},e){t("removeProduct",e)},updateProductByID({commit:t},e){t("updateProductByID",e)}},plugins:[(0,B.Z)()]});var L=H;r["default"].config.productionTip=!1,r["default"].use(x.XG7),r["default"].use(S.X),new r["default"]({router:F,store:L,render:t=>t(E)}).$mount("#app")},2304:function(t,e){e.Z={ROOT:"/",PRODUCTS:"/products",RECETAS:"/recetas",CART:"/cart",CHECKOUT:"/checkout",GRATITUDE:"/gratitude",ID:"/:id"}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{10:"92c4cc0e",12:"5a59cfd0",337:"9aab6eb5",421:"873159b4",434:"9ccc32e8",734:"e24c3245",920:"6731a49f",937:"84781639"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{10:"7bb617dd",12:"6f6bb4b5",337:"53b5d61f",421:"ae966b48",434:"ca568d35",734:"129b7777",920:"7006846c",937:"b03a0ee6"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="farmacia-app:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var f=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var c=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,c=n&&n.target&&n.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=c,i.parentNode&&i.parentNode.removeChild(i),a(s)}};return i.onerror=i.onload=c,i.href=e,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),c=n.p+i;if(e(i,c))return o();t(r,c,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={10:1,12:1,337:1,421:1,434:1,734:1,920:1,937:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(1|92)0$/.test(e))t[e]=0;else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],s=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkfarmacia_app"]=self["webpackChunkfarmacia_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8536)}));r=n.O(r)})();
//# sourceMappingURL=app.917c2404.js.map
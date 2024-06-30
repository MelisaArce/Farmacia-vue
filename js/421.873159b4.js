"use strict";(self["webpackChunkfarmacia_app"]=self["webpackChunkfarmacia_app"]||[]).push([[421],{8615:function(t,e,n){n.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"input-wrapper"},[e("button",{on:{click:function(e){return t.onChange(t.value-1)}}},[e("b-icon",{attrs:{icon:"dash"}})],1),e("input",{attrs:{type:"number",min:t.min,max:t.max},domProps:{value:t.value},on:{input:t.inputChange}}),e("button",{on:{click:function(e){return t.onChange(t.value+1)}}},[e("b-icon",{attrs:{icon:"plus"}})],1)])},i=[],s={name:"NumberInput",props:{value:{type:Number,default:1},min:{type:Number,default:1},max:{type:Number,default:9999}},components:{},data(){return{}},computed:{},created(){},mounted(){},methods:{onChange(t){t<this.min||t>this.max||(this.$emit("input",t),this.$emit("onChange",t))},inputChange(t){if(t.target.value>this.max||t.target.value<this.min)return;const e=Number(t.target.value);Number.isInteger(e)&&this.onChange(Number(t.target.value))}}},l=s,o=n(1001),r=(0,o.Z)(l,a,i,!1,null,"853a1ab8",null),u=r.exports},1107:function(t,e,n){n.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"table-container"},[e("b-table",{attrs:{items:t.items,fields:t.fields,"thead-class":t.theadClass},scopedSlots:t._u([t._l(t.$scopedSlots,(function(e,n){return{key:n,fn:function(e){return[t._t(n,null,null,e)]}}}))],null,!0)})],1)},i=[],s={name:"Table",props:{fields:[],items:[],theadClass:""},components:{},data(){return{}},computed:{},created(){},mounted(){},methods:{}},l=s,o=n(1001),r=(0,o.Z)(l,a,i,!1,null,null,null),u=r.exports},9183:function(t,e,n){n.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"input-wrapper",attrs:{"data-before-content":t.showRemainCharacter&&t.label}},[e("input",{attrs:{type:"text",placeholder:t.placeholder,maxlength:t.maxlength},domProps:{value:t.value},on:{input:function(e){return t.onChange(e.target.value)}}})])},i=[],s={name:"TextInput",props:{value:{type:String,default:""},showRemainCharacter:{type:Boolean,default:!1},placeholder:{type:String,default:"Input your content"},maxlength:{type:Number,default:25}},components:{},data(){return{}},computed:{label(){const t=this.maxlength-(this.value?this.value.length:0);return this.maxlength===t?`${t} Characters`:`${t} Characters left`}},created(){},mounted(){},methods:{onChange(t){this.$emit("input",t),this.$emit("onChange",t)}}},l=s,o=n(1001),r=(0,o.Z)(l,a,i,!1,null,"6c9e1242",null),u=r.exports},3421:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"checkout-wrapper",style:{paddingBottom:t.isMobile?t.isInBilling?"136px":"88px":""}},[t.products.length?[e("b-container",{staticClass:"p-0"},[e("b-row",[e("b-col",{class:t.isInBilling&&t.isMobile&&"d-none",attrs:{cols:"12",md:"5"}},[e("div",{staticClass:"checkout-wrapper__title-main"},[e("b"),e("span",[t._v("Resumen del Pedido")]),e("b")]),e("Table",{attrs:{items:t.products,fields:t.fields},scopedSlots:t._u([{key:"cell(item)",fn:function({item:n}){return[e("div",{staticClass:"product"},[e("img",{staticStyle:{width:"48px",height:"48px"},attrs:{src:n.image_url,alt:""}}),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"d-flex align-items-center"},[e("span",[t._v(t._s(n.name))]),e("span",{staticClass:"font-weight-bold col flex-nowrap",staticStyle:{"min-width":"max-content"}},[t._v("x "+t._s(n.quantity))])]),n.note?e("div",[e("b-icon",{staticClass:"mr-2",attrs:{icon:"pencil"}}),e("span",{staticClass:"note-style"},[t._v(t._s(n.note))])],1):t._e()])])]}},{key:"cell(subtotal)",fn:function({item:n}){return[e("div",[t._v(t._s(t.formatValue(n.quantity*n.price)))])]}}],null,!1,2893879937)}),e("div",{staticClass:"checkout-wrapper__action d-none d-md-block"},[e("div",[e("div",{staticClass:"d-flex justify-content-between"},[t._v(" Subtotal: "),e("span",{staticClass:"font-weight-bold ml-2"},[t._v(t._s(t.formatValue(t.totalPrice)))])]),e("div",{staticClass:"d-flex justify-content-between"},[t._v(" Envío: "),e("span",{staticClass:"font-weight-bold ml-2"},[t._v(t._s(t.formatValue(t.shippingFee)))])]),e("div",{staticClass:"d-flex justify-content-between"},[t._v(" Total: "),e("span",{staticClass:"font-weight-bold ml-2"},[t._v(t._s(t.formatValue(t.totalPrice+t.shippingFee)))])])])])],1),e("b-col",{staticClass:"d-md-block",class:!t.isInBilling&&t.isMobile&&"d-none",attrs:{cols:"12",md:"7"}},[e("div",{staticClass:"checkout-wrapper__title-main"},[e("b"),e("span",[t._v("Información de Facturación")]),e("b")]),e("div",{staticClass:"form"},[e("b-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"Información de Contacto","label-class":"font-weight-bold","label-size":"lg"}},[e("b-container",{staticClass:"p-0"},[e("b-row",{},[e("b-col",[e("b-form-group",{attrs:{id:"fieldset-1",label:"Introduce tu nombre *","label-for":"input-1","invalid-feedback":"Nombre inválido",state:t.nameState}},[e("b-form-input",{attrs:{id:"input-1",state:t.nameState,trim:""},model:{value:t.billInfo.name,callback:function(e){t.$set(t.billInfo,"name",e)},expression:"billInfo.name"}})],1)],1)],1),e("b-row",[e("b-col",{attrs:{cols:"12",md:"7"}},[e("b-form-group",{attrs:{label:"Introduce tu correo electrónico","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",trim:""},model:{value:t.billInfo.email,callback:function(e){t.$set(t.billInfo,"email",e)},expression:"billInfo.email"}})],1)],1),e("b-col",{attrs:{cols:"12",md:"5"}},[e("b-form-group",{attrs:{label:"Tu teléfono *","label-for":"input-3","invalid-feedback":"Teléfono inválido",state:t.phoneState}},[e("b-form-input",{attrs:{id:"input-3",state:t.phoneState,trim:""},model:{value:t.billInfo.phone,callback:function(e){t.$set(t.billInfo,"phone",e)},expression:"billInfo.phone"}})],1)],1)],1)],1)],1),e("b-form-group",{attrs:{label:"Métodos de Envío","label-class":"font-weight-bold","label-size":"lg"}},[e("b-form-radio",{attrs:{name:"shipping-methods-radios",value:"pickup"},model:{value:t.billInfo.shippingMethod,callback:function(e){t.$set(t.billInfo,"shippingMethod",e)},expression:"billInfo.shippingMethod"}},[t._v("Recoger en tienda")]),e("b-form-radio",{attrs:{name:"shipping-methods-radios",value:"delivery"},model:{value:t.billInfo.shippingMethod,callback:function(e){t.$set(t.billInfo,"shippingMethod",e)},expression:"billInfo.shippingMethod"}},[t._v("Entrega")])],1),e("b-form-group",{attrs:{label:"Método de Pago","label-class":"font-weight-bold","label-size":"lg"}},[e("b-form-radio",{attrs:{name:"payment-methods-radios",value:"later"},model:{value:t.billInfo.paymentMethod,callback:function(e){t.$set(t.billInfo,"paymentMethod",e)},expression:"billInfo.paymentMethod"}},[t._v("Pagar después")])],1),e("b-button",{staticClass:"d-none d-md-inline",attrs:{type:"submit",variant:"secondary"}},[t._v("Realizar Pedido")])],1)],1)])],1)],1),e("div",{staticClass:"bottom-area fixed-bottom d-flex flex-column d-md-none"},[e("div",{staticClass:"p-2"},[t.isInBilling?[e("div",{staticClass:"d-flex justify-content-between"},[t._v(" Subtotal: "),e("span",{staticClass:"font-weight-bold ml-2"},[t._v(t._s(t.formatValue(t.totalPrice)))])]),e("div",{staticClass:"d-flex justify-content-between"},[t._v(" Envío: "),e("span",{staticClass:"font-weight-bold ml-2"},[t._v(t._s(t.formatValue(t.shippingFee)))])])]:t._e(),e("div",{staticClass:"d-flex justify-content-between"},[t._v(" Total: "),e("span",{staticClass:"font-weight-bold ml-2"},[t._v(t._s(t.formatValue(t.totalPrice+t.shippingFee)))])])],2),e("div",{staticClass:"d-flex"},[e("router-link",{staticClass:"flex-grow-1",attrs:{to:t.PATH.CART}},[e("b-button",{staticClass:"btn btn-lg w-100 rounded-0",attrs:{variant:"outline-secondary"}},[e("b-icon",{staticStyle:{"margin-right":"8px"},attrs:{icon:"arrow-left"}}),t._v("Carrito")],1)],1),e("b-button",{staticClass:"btn btn-lg text-capitalize flex-grow-1 rounded-0",on:{click:t.checkout}},[t._v(t._s(t.isInBilling?"realizar pedido":"finalizar compra"))])],1)])]:[t._m(0),t._v(" Tu carrito está vacío "),e("router-link",{attrs:{to:t.PATH.PRODUCTS}},[e("b-button",{staticClass:"btn mr-4",attrs:{variant:"outline-dark"}},[t._v("Seguir Comprando"),e("b-icon",{staticStyle:{"margin-left":"8px"},attrs:{icon:"arrow-right"}})],1)],1)]],2)},i=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"checkout-wrapper__title-main"},[e("b"),e("span",[t._v("Resumen del Pedido")]),e("b")])}],s=(n(7658),n(8615)),l=n(9183),o=n(1107),r=n(2304),u=n(3689),c={name:"Checkout",components:{Table:o.Z,NumberInput:s.Z,TextInput:l.Z},data(){return{PATH:r.Z,fields:[{key:"item",label:"Item"},{key:"subtotal",label:"Total Price",thClass:"max-content",tdClass:"align-middle"}],billInfo:{shippingMethod:"pickup",paymentMethod:"later",name:"",email:"",phone:""},isInBilling:!1,check:!1,isMobile:!1}},computed:{products(){return this.$store.state.productsIncart},totalPrice(){return this.$store.getters.totalPrice},shippingFee(){return"pickup"===this.billInfo.shippingMethod?0:2},nameState(){return this.check?this.billInfo.name.length>0:null},phoneState(){return this.check?/^(\+54|54|0)?(9[0-9]{2}|[0-9]{2,4})[0-9]{6,8}$/.test(this.billInfo.phone):null}},created(){},mounted(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{checkout(){this.isInBilling?this.$refs.form.requestSubmit():this.isInBilling=!0},formatValue(t){return(0,u.x)(t)},onSubmit(){this.check=!0,this.nameState&&this.phoneState&&this.$router.push(r.Z.GRATITUDE).then((()=>{this.$store.dispatch("updateCart",[])}))},onResize(){this.isMobile=window.innerWidth<768}},beforeDestroy(){window.removeEventListener("resize",this.onResize,{passive:!0})}},d=c,p=n(1001),m=(0,p.Z)(d,a,i,!1,null,"0c5b33f2",null),f=m.exports},3689:function(t,e,n){n.d(e,{x:function(){return a}});const a=t=>{let e=new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"});return e.format(t)}}}]);
//# sourceMappingURL=421.873159b4.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4],{332:function(t,e,o){var content=o(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("10ea652a",content,!0,{sourceMap:!1})},333:function(t,e,o){var content=o(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("1b40f482",content,!0,{sourceMap:!1})},342:function(t,e,o){"use strict";o(332)},343:function(t,e,o){var n=o(53)((function(i){return i[1]}));n.push([t.i,".contact-info[data-v-f3514fd6]{background-color:#26735b;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1);padding:25px}.contact-info h4[data-v-f3514fd6]{color:#fff;font-weight:700}.contact-info p[data-v-f3514fd6]{font-size:1.1rem;line-height:1.6}",""]),n.locals={},t.exports=n},344:function(t,e,o){"use strict";o(333)},345:function(t,e,o){var n=o(53)((function(i){return i[1]}));n.push([t.i,"form[data-v-3fb22b3b]{background-color:#26735b;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,.1);padding:25px}form .form-label[data-v-3fb22b3b]{font-weight:600}textarea[data-v-3fb22b3b]{resize:vertical}.btn-primary[data-v-3fb22b3b]{background-color:#319b79;border-color:#319b79}.btn-primary[data-v-3fb22b3b]:hover{background-color:#268b64;border-color:#268b64}",""]),n.locals={},t.exports=n},357:function(t,e,o){"use strict";o.r(e);var n={name:"ContactInfo"},r=(o(342),o(47)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info flex-fill"},[e("h4",[t._v("Cooking Tips & Inspiration")]),t._v(" "),e("p",[t._v("Looking for some culinary inspiration or need help in the kitchen? Our team of chefs is here to help you with recipes, tips, and advice!")]),t._v(" "),e("p",[e("strong",[t._v("Location:")]),t._v(" 123 Gourmet Street, Culinary City, Foodland")]),t._v(" "),e("p",[e("strong",[t._v("Phone:")]),t._v(" +1 800-123-4567")]),t._v(" "),e("p",[e("strong",[t._v("Email:")]),t._v(" support@cookingwebsite.com")]),t._v(" "),e("p",[t._v("Whether you're a beginner or a pro, we're happy to assist with any cooking-related questions!")])])}],!1,null,"f3514fd6",null);e.default=component.exports},358:function(t,e,o){"use strict";o.r(e);o(25);var n={name:"ContactForm",data:function(){return{name:"",email:"",message:""}},methods:{handleSubmit:function(){this.name&&this.email&&this.message&&(alert("Message Sent! Thank you for contacting us."),this.name="",this.email="",this.message="")}}},r=(o(344),o(47)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("form",{staticClass:"flex-fill",on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("Email Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Your Message")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{id:"message",rows:"5",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"d-grid gap-2"},[t("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[this._v("Send Message")])])}],!1,null,"3fb22b3b",null);e.default=component.exports},365:function(t,e,o){var content=o(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("32ad598d",content,!0,{sourceMap:!1})},376:function(t,e,o){"use strict";o(365)},377:function(t,e,o){var n=o(53)((function(i){return i[1]}));n.push([t.i,".container[data-v-fae8e466]{max-width:900px}h2[data-v-fae8e466]{color:#fff;font-weight:700}.d-flex[data-v-fae8e466]{display:flex}.flex-fill[data-v-fae8e466]{flex:1}.row[data-v-fae8e466]{display:flex;flex-wrap:wrap}@media (max-width:768px){.row[data-v-fae8e466]{flex-direction:column}.mt-4[data-v-fae8e466]{margin-top:1.5rem}}@media (max-width:576px){h2[data-v-fae8e466]{font-size:1.5rem}}",""]),n.locals={},t.exports=n},395:function(t,e,o){"use strict";o.r(e);var n=o(357),r=o(358),l={name:"Contact",components:{ContactInfo:n.default,ContactForm:r.default}},c=(o(376),o(47)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-5"},[e("h2",{staticClass:"text-center mb-4"},[t._v("Contact")]),t._v(" "),e("div",{staticClass:"row justify-content-between align-items-stretch"},[e("div",{staticClass:"col-md-5 d-flex flex-column order-md-1 order-2 mt-4 mt-md-0"},[e("ContactInfo")],1),t._v(" "),e("div",{staticClass:"col-md-6 d-flex flex-column order-md-2 order-1"},[e("ContactForm")],1)])])}),[],!1,null,"fae8e466",null);e.default=component.exports;installComponents(component,{ContactInfo:o(357).default,ContactForm:o(358).default})}}]);
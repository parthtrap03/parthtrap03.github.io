(function(){"use strict";var t={753:function(t,e,a){var n=a(5130),o=a(6768);function r(t,e,a,n,r,s){const l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(l)}var s={name:"App"},l=a(1241);const u=(0,l.A)(s,[["render",r]]);var d=u,i=a(4232);const c={border:"1"},p=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Id"),(0,o.Lk)("td",null,"Name"),(0,o.Lk)("td",null,"Address"),(0,o.Lk)("td",null,"contact"),(0,o.Lk)("td",null,"Actions")],-1),m=["onClick"];function h(t,e,a,n,r,s){const l=(0,o.g2)("Header"),u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(l),(0,o.Lk)("h1",null,"Hello "+(0,i.v_)(r.name)+", welcome on Home Page",1),(0,o.Lk)("table",c,[p,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.restaurants,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.id},[(0,o.Lk)("td",null,(0,i.v_)(t.id),1),(0,o.Lk)("td",null,(0,i.v_)(t.name),1),(0,o.Lk)("td",null,(0,i.v_)(t.address),1),(0,o.Lk)("td",null,(0,i.v_)(t.contact),1),(0,o.Lk)("td",null,[(0,o.bF)(u,{to:"/Update/"+t.id},{default:(0,o.k6)((()=>[(0,o.eW)("Update")])),_:2},1032,["to"]),(0,o.Lk)("button",{onClick:e=>s.deleteRestaurant(t.id)}," Delete ",8,m)])])))),128))])],64)}a(4114);var g=a(4373);const f={class:"nav"},k=(0,o.Lk)("a",{href:"/"},"Home",-1);function L(t,e,a,n,r,s){const l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",f,[k,(0,o.bF)(l,{to:"add"},{default:(0,o.k6)((()=>[(0,o.eW)("Add Restaurant")])),_:1}),(0,o.bF)(l,{to:"update"},{default:(0,o.k6)((()=>[(0,o.eW)("Update Restaurant")])),_:1}),(0,o.Lk)("a",{onClick:e[0]||(e[0]=(...t)=>s.logout&&s.logout(...t))},"Logout")])}var v={name:"HeaderPage",methods:{logout(){localStorage.clear(),this.$router.push({name:"Login-Page"})}}};const b=(0,l.A)(v,[["render",L]]);var w=b,y={name:"Home-Page",data(){return{name:"",restaurants:[]}},components:{Header:w},methods:{async deleteRestaurant(t){let e=await g.A.delete("http://localhost:3000/restaurant/"+t);200==e.status&&this.loadData()},async loadData(){let t=localStorage.getItem("user-info");this.name=JSON.parse(t).name,t||this.$router.push({name:"SignUp"});let e=await g.A.get("http://localhost:3000/restaurant");this.restaurants=e.data}},mounted(){this.loadData()}};const U=(0,l.A)(y,[["render",h]]);var S=U,A=a.p+"img/restoimage.c5dc0cd4.webp";const E=(0,o.Lk)("img",{class:"logo",src:A},null,-1),P=(0,o.Lk)("h1",null," Sign Up",-1),H={class:"register"};function C(t,e,a,r,s,l){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[E,P,(0,o.Lk)("div",H,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>s.name=t),placeholder:"Enter Name"},null,512),[[n.Jo,s.name]]),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":e[1]||(e[1]=t=>s.email=t),placeholder:"Enter Email"},null,512),[[n.Jo,s.email]]),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=t=>s.password=t),placeholder:"Enter Password"},null,512),[[n.Jo,s.password]]),(0,o.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>l.SignUp&&l.SignUp(...t))}," Sign Up"),(0,o.Lk)("p",null,[(0,o.bF)(u,{to:"/login"},{default:(0,o.k6)((()=>[(0,o.eW)("Already have an account? Login")])),_:1})])])],64)}var O={name:"SignUp",data(){return{name:"",email:"",password:""}},methods:{async SignUp(){console.warn("SignUp",this.name,this.email,this.password);let t=await g.A.post("http://localhost:3000/users",{email:this.email,password:this.password,name:this.name});console.warn(t),201==t.status&&(localStorage.setItem("user-info",JSON.stringify(t.data)),this.$router.push({name:"Home-Page"}))}},mounted(){let t=localStorage.getItem("user-info");t&&this.$router.push({name:"Home-Page"})}};const _=(0,l.A)(O,[["render",C]]);var F=_,J=a(973);const R=(0,o.Lk)("img",{class:"logo",src:A},null,-1),$=(0,o.Lk)("h1",null,"Login",-1),x={class:"login"};function V(t,e,a,r,s,l){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[R,$,(0,o.Lk)("div",x,[(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=t=>s.email=t),placeholder:"Enter Email"},null,512),[[n.Jo,s.email]]),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=t=>s.password=t),placeholder:"Enter Password"},null,512),[[n.Jo,s.password]]),(0,o.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>l.login&&l.login(...t))}," Login "),(0,o.Lk)("p",null,[(0,o.bF)(u,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Sign Up")])),_:1})])])],64)}var I={name:"Login-Page",data(){return{email:"",password:""}},methods:{async login(){let t=await g.A.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);200==t.status&&t.data.length>0&&(localStorage.setItem("user-info",JSON.stringify(t.data[0])),this.$router.push({name:"Home-Page"}))}},mounted(){let t=localStorage.getItem("user-info");t&&this.$router.push({name:"Home-Page"})}};const N=(0,l.A)(I,[["render",V]]);var X=N;const j=(0,o.Lk)("h1",null," Hello user ,Welcome to Add Restaurant",-1),W={class:"add"};function K(t,e,a,r,s,l){const u=(0,o.g2)("Header");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(u),j,(0,o.Lk)("form",W,[(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Name","onUpdate:modelValue":e[0]||(e[0]=t=>s.restaurant.name=t),name:"name"},null,512),[[n.Jo,s.restaurant.name]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Address","onUpdate:modelValue":e[1]||(e[1]=t=>s.restaurant.address=t),name:"address"},null,512),[[n.Jo,s.restaurant.address]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Contact","onUpdate:modelValue":e[2]||(e[2]=t=>s.restaurant.contact=t),name:"contact"},null,512),[[n.Jo,s.restaurant.contact]]),(0,o.Lk)("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>l.addRestaurant&&l.addRestaurant(...t))},"Add New Restaurant")])],64)}var D={name:"AddPage",components:{Header:w},data(){return{restaurant:{name:"",address:"",contact:""}}},methods:{async addRestaurant(){console.warn(this.restaurant);const t=await g.A.post("http://localhost:3000/restaurant",{name:this.restaurant.name,address:this.restaurant.address,contact:this.restaurant.contact});201==t.status&&this.$router.push({name:"Home-Page"}),console.warn("result",t)}},mounted(){let t=localStorage.getItem("user-info");t||this.$router.push({name:"SignUp"})}};const T=(0,l.A)(D,[["render",K]]);var M=T;const q=(0,o.Lk)("h1",null," Hello user ,Welcome to Update Restaurant",-1),z={class:"add"};function B(t,e,a,r,s,l){const u=(0,o.g2)("Header");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(u),q,(0,o.Lk)("form",z,[(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Name","onUpdate:modelValue":e[0]||(e[0]=t=>s.restaurant.name=t),name:"name"},null,512),[[n.Jo,s.restaurant.name]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Address","onUpdate:modelValue":e[1]||(e[1]=t=>s.restaurant.address=t),name:"address"},null,512),[[n.Jo,s.restaurant.address]]),(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Enter Contact","onUpdate:modelValue":e[2]||(e[2]=t=>s.restaurant.contact=t),name:"contact"},null,512),[[n.Jo,s.restaurant.contact]]),(0,o.Lk)("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>l.updateRestaurant&&l.updateRestaurant(...t))},"Update New Restaurant")])],64)}var G={name:"UpdatePage",components:{Header:w},data(){return{restaurant:{name:"",address:"",contact:""}}},methods:{async updateRestaurant(){const t=await g.A.put("http://localhost:3000/restaurant/"+this.$route.params.id,{name:this.restaurant.name,address:this.restaurant.address,contact:this.restaurant.contact});200==t.status&&this.$router.push({name:"Home-Page"})}},async mounted(){let t=localStorage.getItem("user-info");t||this.$router.push({name:"SignUp"});const e=await g.A.get("http://localhost:3000/restaurant/"+this.$route.params.id);this.restaurant=e.data}};const Q=(0,l.A)(G,[["render",B]]);var Y=Q;const Z=[{name:"SignUp",component:F,path:"/"},{name:"Home-Page",component:S,path:"/home-page"},{name:"Login-Page",component:X,path:"/login"},{name:"Add",component:M,path:"/add"},{name:"Update",component:Y,path:"/update/:id"}],tt=(0,J.aE)({history:(0,J.LA)(),routes:Z});var et=tt;(0,n.Ef)(d).use(et).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,r){if(!n){var s=1/0;for(i=0;i<t.length;i++){n=t[i][0],o=t[i][1],r=t[i][2];for(var l=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(l=!1,r<s&&(s=r));if(l){t.splice(i--,1);var d=o();void 0!==d&&(e=d)}}return e}r=r||0;for(var i=t.length;i>0&&t[i-1][2]>r;i--)t[i]=t[i-1];t[i]=[n,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,s=n[0],l=n[1],u=n[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(u)var i=u(a)}for(e&&e(n);d<s.length;d++)r=s[d],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(i)},n=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(753)}));n=a.O(n)})();
//# sourceMappingURL=app.5a5d95fb.js.map
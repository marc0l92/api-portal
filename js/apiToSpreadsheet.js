// Project: https://github.com/marc0l92/api-portal
import{a as $,b as x,c as ee}from"./chunk-4J5MRHYN.js";import{a as de}from"./chunk-ZV64DBZP.js";import{b as Y}from"./chunk-3Y52CSI6.js";import{d as V,g as te,h as se,i as re,k as ie,l as oe}from"./chunk-GGBUZBTM.js";import"./chunk-KH7MCBP5.js";import{a as U}from"./chunk-6NTOL2IZ.js";import{$ as F,B as T,C as A,E as k,F as q,G as C,I as E,L as g,W as H,X as R,Y as _,Z as N,_ as O,aa as I,ba as D,ca as M,da as G,g as pe,ga as P,h as L,n as y,o as j,oa as K,p as B,pa as Q,r as z,t as J,z as v}from"./chunk-E6WZCZXE.js";L();L();L();var fe=pe(de());function ne(i){let s,e,t;return{c(){s=k("div"),e=k("progress"),g(e,"class","progress is-info is-small"),e.value=i[2],g(e,"max",t=i[0].length),g(s,"class","block")},m(r,o){T(r,s,o),v(s,e)},p(r,o){o&4&&(e.value=r[2]),o&1&&t!==(t=r[0].length)&&g(e,"max",t)},d(r){r&&A(s)}}}function ge(i){let s,e,t,r,o,m,c,h,d,b,l,w,f=i[1]&&i[2]>=0&&ne(i);return{c(){s=k("div"),e=k("div"),t=k("button"),r=q("Download selected service"),m=C(),c=k("button"),h=q("Download all services"),b=C(),f&&f.c(),g(t,"class",o="button is-primary "+(i[1]?"is-loading":"")),t.disabled=i[1],g(c,"class",d="button is-primary "+(i[1]?"is-loading":"")),c.disabled=i[1],g(e,"class","block"),g(s,"class","box")},m(u,a){T(u,s,a),v(s,e),v(e,t),v(t,r),v(e,m),v(e,c),v(c,h),v(s,b),f&&f.m(s,null),l||(w=[E(t,"click",i[3]),E(c,"click",i[4])],l=!0)},p(u,[a]){a&2&&o!==(o="button is-primary "+(u[1]?"is-loading":""))&&g(t,"class",o),a&2&&(t.disabled=u[1]),a&2&&d!==(d="button is-primary "+(u[1]?"is-loading":""))&&g(c,"class",d),a&2&&(c.disabled=u[1]),u[1]&&u[2]>=0?f?f.p(u,a):(f=ne(u),f.c(),f.m(s,null)):f&&(f.d(1),f=null)},i:j,o:j,d(u){u&&A(s),f&&f.d(),l=!1,B(w)}}}function ve(i,s,e){let{apiName:t=""}=s,{services:r=[]}=s,{selectedService:o=null}=s,m=!1,c=-1;function h(l){let w=$(l),f=x(w);return ee(f)}function d(){return P(this,void 0,void 0,function*(){if(e(1,m=!0),e(2,c=-1),o){let l=h(o);ie(`${o.getName()}.ods`,re(l))}e(1,m=!1)})}function b(){return P(this,void 0,void 0,function*(){if(e(1,m=!0),e(2,c=0),r.length>0){let l=new fe.default;for(let w of r){let f=h(w);f&&l.file(te(`${w.getName()}.ods`),f),e(2,c++,c)}yield se(t,l)}e(1,m=!1)})}return i.$$set=l=>{"apiName"in l&&e(5,t=l.apiName),"services"in l&&e(0,r=l.services),"selectedService"in l&&e(6,o=l.selectedService)},[r,m,c,d,b,t,o]}var W=class extends M{constructor(s){super(),D(this,s,ve,ge,z,{apiName:5,services:0,selectedService:6})}},ae=W;function ce(i){let s,e,t;return e=new Y({props:{services:i[1],servicesSelectSize:8}}),e.$on("serviceSelect",i[6]),{c(){s=k("div"),O(e.$$.fragment),g(s,"class","box")},m(r,o){T(r,s,o),F(e,s,null),t=!0},p(r,o){let m={};o&2&&(m.services=r[1]),e.$set(m)},i(r){t||(_(e.$$.fragment,r),t=!0)},o(r){N(e.$$.fragment,r),t=!1},d(r){r&&A(s),I(e)}}}function me(i){let s,e;return s=new ae({props:{selectedService:i[2],services:i[1],apiName:i[0].getName()}}),{c(){O(s.$$.fragment)},m(t,r){F(s,t,r),e=!0},p(t,r){let o={};r&4&&(o.selectedService=t[2]),r&2&&(o.services=t[1]),r&1&&(o.apiName=t[0].getName()),s.$set(o)},i(t){e||(_(s.$$.fragment,t),e=!0)},o(t){N(s.$$.fragment,t),e=!1},d(t){I(s,t)}}}function be(i){let s,e,t,r,o,m,c,h,d,b,l,w,f,u;s=new Q({props:{activePage:"apiToSpreadsheet"}}),m=new oe({}),m.$on("apiChange",i[5]);let a=i[1].length>0&&ce(i);d=new U({props:{messages:i[3]}});let p=i[2]&&me(i);return f=new G({}),{c(){O(s.$$.fragment),e=C(),t=k("div"),r=k("section"),r.innerHTML=`<div class="hero-body"><h1 class="title">Api to Spreadsheet</h1> 
      <p class="subtitle">Convert OpenAPI/Swagger file to flat Spreadsheets</p></div>`,o=C(),O(m.$$.fragment),c=C(),a&&a.c(),h=C(),O(d.$$.fragment),b=C(),p&&p.c(),w=C(),O(f.$$.fragment),g(r,"class","hero is-small"),g(t,"class",l="container "+(i[4].fluidLayout?"is-fluid":""))},m(n,S){F(s,n,S),T(n,e,S),T(n,t,S),v(t,r),v(t,o),F(m,t,null),v(t,c),a&&a.m(t,null),v(t,h),F(d,t,null),v(t,b),p&&p.m(t,null),T(n,w,S),F(f,n,S),u=!0},p(n,[S]){n[1].length>0?a?(a.p(n,S),S&2&&_(a,1)):(a=ce(n),a.c(),_(a,1),a.m(t,h)):a&&(H(),N(a,1,1,()=>{a=null}),R());let Z={};S&8&&(Z.messages=n[3]),d.$set(Z),n[2]?p?(p.p(n,S),S&4&&_(p,1)):(p=me(n),p.c(),_(p,1),p.m(t,null)):p&&(H(),N(p,1,1,()=>{p=null}),R()),(!u||S&16&&l!==(l="container "+(n[4].fluidLayout?"is-fluid":"")))&&g(t,"class",l)},i(n){u||(_(s.$$.fragment,n),_(m.$$.fragment,n),_(a),_(d.$$.fragment,n),_(p),_(f.$$.fragment,n),u=!0)},o(n){N(s.$$.fragment,n),N(m.$$.fragment,n),N(a),N(d.$$.fragment,n),N(p),N(f.$$.fragment,n),u=!1},d(n){I(s,n),n&&A(e),n&&A(t),I(m),a&&a.d(),I(d),p&&p.d(),n&&A(w),I(f,n)}}}function _e(i,s,e){let t;J(i,K,b=>e(4,t=b));let r=null,o=[],m=null,c=[];function h(b){return P(this,void 0,void 0,function*(){try{e(3,c=[]),e(0,r=null),e(1,o=[]),e(2,m=null);let l=b.detail.apiObject;l&&(e(0,r=V(l)),yield r.resolveReferences(),e(1,o=r.getServices()),o.length===0&&e(3,c=[...c,"Warning: No services found"]))}catch(l){e(3,c=[...c,"Error: "+l.message])}})}function d(b){e(2,m=o[b.detail.selectedServiceIndex])}return[r,o,m,c,t,h,d]}var X=class extends M{constructor(s){super(),D(this,s,_e,be,z,{})}},ue=X;new ue({target:document.body});y();

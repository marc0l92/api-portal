// Project: https://github.com/marc0l92/api-tools
import{a as Q,b as U,c as V}from"./chunk-4QWW2BAC.js";import{a as Y,b as x,c as ee,d as te,e as se,f as ce}from"./chunk-6MW3FK47.js";import{c as G,e as K}from"./chunk-C4NF4F2T.js";import"./chunk-KMHCSZEL.js";import{c as F,d as $}from"./chunk-5B23PD3G.js";import{I as q,J as E,K as _,L as k,M as C,N as A,O as T,P,Q as D,R as B,S as J,g as ae,h as W,i as M,j as X,k as I,o as d,p as Z,q as z,r as y,t as w,u as O,v as N,x as j,y as g}from"./chunk-BQMZXNLR.js";var ie=ae(ce());function re(i){let s,t,e;return{c(){s=w("div"),t=w("progress"),g(t,"class","progress is-info is-small"),t.value=i[2],g(t,"max",e=i[0].length),g(s,"class","block")},m(r,o){z(r,s,o),d(s,t)},p(r,o){o&4&&(t.value=r[2]),o&1&&e!==(e=r[0].length)&&g(t,"max",e)},d(r){r&&y(s)}}}function me(i){let s,t,e,r,o,f,u,S,p,b,m,v,c=i[1]&&i[2]>=0&&re(i);return{c(){s=w("div"),t=w("div"),e=w("button"),r=O("Download selected service"),f=N(),u=w("button"),S=O("Download all services"),b=N(),c&&c.c(),g(e,"class",o="button is-primary "+(i[1]?"is-loading":"")),e.disabled=i[1],g(u,"class",p="button is-primary "+(i[1]?"is-loading":"")),u.disabled=i[1],g(t,"class","block"),g(s,"class","box")},m(n,a){z(n,s,a),d(s,t),d(t,e),d(e,r),d(t,f),d(t,u),d(u,S),d(s,b),c&&c.m(s,null),m||(v=[j(e,"click",i[3]),j(u,"click",i[4])],m=!0)},p(n,[a]){a&2&&o!==(o="button is-primary "+(n[1]?"is-loading":""))&&g(e,"class",o),a&2&&(e.disabled=n[1]),a&2&&p!==(p="button is-primary "+(n[1]?"is-loading":""))&&g(u,"class",p),a&2&&(u.disabled=n[1]),n[1]&&n[2]>=0?c?c.p(n,a):(c=re(n),c.c(),c.m(s,null)):c&&(c.d(1),c=null)},i:M,o:M,d(n){n&&y(s),c&&c.d(),m=!1,X(v)}}}function ue(i,s,t){let{apiName:e=""}=s,{services:r=[]}=s,{selectedService:o=null}=s,f=!1,u=-1;function S(m){let v=Q(m),c=U(v);return V(c)}function p(){return F(this,void 0,void 0,function*(){if(t(1,f=!0),t(2,u=-1),o){let m=S(o);te(`${o.getName()}.ods`,ee(m))}t(1,f=!1)})}function b(){return F(this,void 0,void 0,function*(){if(t(1,f=!0),t(2,u=0),r.length>0){let m=new ie.default;for(let v of r){let c=S(v);c&&m.file(Y(`${v.getName()}.ods`),c),t(2,u++,u)}yield x(e,m)}t(1,f=!1)})}return i.$$set=m=>{"apiName"in m&&t(5,e=m.apiName),"services"in m&&t(0,r=m.services),"selectedService"in m&&t(6,o=m.selectedService)},[r,f,u,p,b,e,o]}var H=class extends D{constructor(s){super(),P(this,s,ue,me,I,{apiName:5,services:0,selectedService:6})}},oe=H;function pe(i){Z(i,"svelte-1gzs1yt",".hero.is-small.svelte-1gzs1yt .hero-body.svelte-1gzs1yt{padding-left:0;padding-right:0}")}function ne(i){let s,t,e;return t=new K({props:{services:i[1],servicesSelectSize:8}}),t.$on("serviceSelect",i[5]),{c(){s=w("div"),C(t.$$.fragment),g(s,"class","box")},m(r,o){z(r,s,o),A(t,s,null),e=!0},p(r,o){let f={};o&2&&(f.services=r[1]),t.$set(f)},i(r){e||(_(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){r&&y(s),T(t)}}}function le(i){let s,t;return s=new oe({props:{selectedService:i[2],services:i[1],apiName:i[0].getName()}}),{c(){C(s.$$.fragment)},m(e,r){A(s,e,r),t=!0},p(e,r){let o={};r&4&&(o.selectedService=e[2]),r&2&&(o.services=e[1]),r&1&&(o.apiName=e[0].getName()),s.$set(o)},i(e){t||(_(s.$$.fragment,e),t=!0)},o(e){k(s.$$.fragment,e),t=!1},d(e){T(s,e)}}}function de(i){let s,t,e,r,o,f,u,S,p,b,m,v,c;s=new J({props:{activePage:"apiToSpreadsheet"}}),f=new se({}),f.$on("apiChange",i[4]);let n=i[1].length>0&&ne(i);p=new $({props:{messages:i[3]}});let a=i[2]&&le(i);return v=new B({}),{c(){C(s.$$.fragment),t=N(),e=w("div"),r=w("section"),r.innerHTML=`<div class="hero-body svelte-1gzs1yt"><h1 class="title">Api to Spreadsheet</h1> 
      <p class="subtitle">Convert OpenAPI/Swagger file to flat Spreadsheets</p></div>`,o=N(),C(f.$$.fragment),u=N(),n&&n.c(),S=N(),C(p.$$.fragment),b=N(),a&&a.c(),m=N(),C(v.$$.fragment),g(r,"class","hero is-small svelte-1gzs1yt"),g(e,"class","container")},m(l,h){A(s,l,h),z(l,t,h),z(l,e,h),d(e,r),d(e,o),A(f,e,null),d(e,u),n&&n.m(e,null),d(e,S),A(p,e,null),d(e,b),a&&a.m(e,null),z(l,m,h),A(v,l,h),c=!0},p(l,[h]){l[1].length>0?n?(n.p(l,h),h&2&&_(n,1)):(n=ne(l),n.c(),_(n,1),n.m(e,S)):n&&(q(),k(n,1,1,()=>{n=null}),E());let R={};h&8&&(R.messages=l[3]),p.$set(R),l[2]?a?(a.p(l,h),h&4&&_(a,1)):(a=le(l),a.c(),_(a,1),a.m(e,null)):a&&(q(),k(a,1,1,()=>{a=null}),E())},i(l){c||(_(s.$$.fragment,l),_(f.$$.fragment,l),_(n),_(p.$$.fragment,l),_(a),_(v.$$.fragment,l),c=!0)},o(l){k(s.$$.fragment,l),k(f.$$.fragment,l),k(n),k(p.$$.fragment,l),k(a),k(v.$$.fragment,l),c=!1},d(l){T(s,l),l&&y(t),l&&y(e),T(f),n&&n.d(),T(p),a&&a.d(),l&&y(m),T(v,l)}}}function ge(i,s,t){let e=null,r=[],o=null,f=[];function u(p){return F(this,void 0,void 0,function*(){try{t(3,f=[]),t(0,e=null),t(1,r=[]),t(2,o=null);let b=p.detail.apiObject;b&&(t(0,e=G(b)),yield e.resolveReferences(),t(1,r=e.getServices()),r.length===0&&t(3,f=[...f,"Warning: No services found"]))}catch(b){t(3,f=[...f,"Error: "+b.message])}})}function S(p){t(2,o=r[p.detail.selectedServiceIndex])}return[e,r,o,f,u,S]}var L=class extends D{constructor(s){super(),P(this,s,ge,de,I,{},pe)}},fe=L;new fe({target:document.body});W();

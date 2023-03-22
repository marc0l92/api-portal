// Project: https://github.com/marc0l92/api-tools
import{a as U,b as V,c as Y}from"./chunk-TLXUUV3Y.js";import{a as x,b as ee,c as te,d as se,e as re,f as ue}from"./chunk-KKX7BOUS.js";import{c as K,e as Q}from"./chunk-EWRFGDAZ.js";import"./chunk-WIF3LMWW.js";import{c as I,d as G}from"./chunk-I5QQGVG7.js";import{$ as M,A as z,B as y,D as w,E as j,F as N,H as q,J as g,T as E,U as H,V as _,W as k,X as C,Y as A,Z as T,_ as D,aa as J,ba as $,g as me,h as F,n as X,o as O,p as Z,q as P,y as d,z as B}from"./chunk-6K5LROKE.js";F();F();F();var ne=me(ue());function ie(i){let s,t,e;return{c(){s=w("div"),t=w("progress"),g(t,"class","progress is-info is-small"),t.value=i[2],g(t,"max",e=i[0].length),g(s,"class","block")},m(r,o){z(r,s,o),d(s,t)},p(r,o){o&4&&(t.value=r[2]),o&1&&e!==(e=r[0].length)&&g(t,"max",e)},d(r){r&&y(s)}}}function pe(i){let s,t,e,r,o,f,u,S,p,b,m,v,c=i[1]&&i[2]>=0&&ie(i);return{c(){s=w("div"),t=w("div"),e=w("button"),r=j("Download selected service"),f=N(),u=w("button"),S=j("Download all services"),b=N(),c&&c.c(),g(e,"class",o="button is-primary "+(i[1]?"is-loading":"")),e.disabled=i[1],g(u,"class",p="button is-primary "+(i[1]?"is-loading":"")),u.disabled=i[1],g(t,"class","block"),g(s,"class","box")},m(n,a){z(n,s,a),d(s,t),d(t,e),d(e,r),d(t,f),d(t,u),d(u,S),d(s,b),c&&c.m(s,null),m||(v=[q(e,"click",i[3]),q(u,"click",i[4])],m=!0)},p(n,[a]){a&2&&o!==(o="button is-primary "+(n[1]?"is-loading":""))&&g(e,"class",o),a&2&&(e.disabled=n[1]),a&2&&p!==(p="button is-primary "+(n[1]?"is-loading":""))&&g(u,"class",p),a&2&&(u.disabled=n[1]),n[1]&&n[2]>=0?c?c.p(n,a):(c=ie(n),c.c(),c.m(s,null)):c&&(c.d(1),c=null)},i:O,o:O,d(n){n&&y(s),c&&c.d(),m=!1,Z(v)}}}function de(i,s,t){let{apiName:e=""}=s,{services:r=[]}=s,{selectedService:o=null}=s,f=!1,u=-1;function S(m){let v=U(m),c=V(v);return Y(c)}function p(){return I(this,void 0,void 0,function*(){if(t(1,f=!0),t(2,u=-1),o){let m=S(o);se(`${o.getName()}.ods`,te(m))}t(1,f=!1)})}function b(){return I(this,void 0,void 0,function*(){if(t(1,f=!0),t(2,u=0),r.length>0){let m=new ne.default;for(let v of r){let c=S(v);c&&m.file(x(`${v.getName()}.ods`),c),t(2,u++,u)}yield ee(e,m)}t(1,f=!1)})}return i.$$set=m=>{"apiName"in m&&t(5,e=m.apiName),"services"in m&&t(0,r=m.services),"selectedService"in m&&t(6,o=m.selectedService)},[r,f,u,p,b,e,o]}var L=class extends M{constructor(s){super(),D(this,s,de,pe,P,{apiName:5,services:0,selectedService:6})}},le=L;function ge(i){B(i,"svelte-1gzs1yt",".hero.is-small.svelte-1gzs1yt .hero-body.svelte-1gzs1yt{padding-left:0;padding-right:0}")}function fe(i){let s,t,e;return t=new Q({props:{services:i[1],servicesSelectSize:8}}),t.$on("serviceSelect",i[5]),{c(){s=w("div"),C(t.$$.fragment),g(s,"class","box")},m(r,o){z(r,s,o),A(t,s,null),e=!0},p(r,o){let f={};o&2&&(f.services=r[1]),t.$set(f)},i(r){e||(_(t.$$.fragment,r),e=!0)},o(r){k(t.$$.fragment,r),e=!1},d(r){r&&y(s),T(t)}}}function ae(i){let s,t;return s=new le({props:{selectedService:i[2],services:i[1],apiName:i[0].getName()}}),{c(){C(s.$$.fragment)},m(e,r){A(s,e,r),t=!0},p(e,r){let o={};r&4&&(o.selectedService=e[2]),r&2&&(o.services=e[1]),r&1&&(o.apiName=e[0].getName()),s.$set(o)},i(e){t||(_(s.$$.fragment,e),t=!0)},o(e){k(s.$$.fragment,e),t=!1},d(e){T(s,e)}}}function ve(i){let s,t,e,r,o,f,u,S,p,b,m,v,c;s=new $({props:{activePage:"apiToSpreadsheet"}}),f=new re({}),f.$on("apiChange",i[4]);let n=i[1].length>0&&fe(i);p=new G({props:{messages:i[3]}});let a=i[2]&&ae(i);return v=new J({}),{c(){C(s.$$.fragment),t=N(),e=w("div"),r=w("section"),r.innerHTML=`<div class="hero-body svelte-1gzs1yt"><h1 class="title">Api to Spreadsheet</h1> 
      <p class="subtitle">Convert OpenAPI/Swagger file to flat Spreadsheets</p></div>`,o=N(),C(f.$$.fragment),u=N(),n&&n.c(),S=N(),C(p.$$.fragment),b=N(),a&&a.c(),m=N(),C(v.$$.fragment),g(r,"class","hero is-small svelte-1gzs1yt"),g(e,"class","container")},m(l,h){A(s,l,h),z(l,t,h),z(l,e,h),d(e,r),d(e,o),A(f,e,null),d(e,u),n&&n.m(e,null),d(e,S),A(p,e,null),d(e,b),a&&a.m(e,null),z(l,m,h),A(v,l,h),c=!0},p(l,[h]){l[1].length>0?n?(n.p(l,h),h&2&&_(n,1)):(n=fe(l),n.c(),_(n,1),n.m(e,S)):n&&(E(),k(n,1,1,()=>{n=null}),H());let W={};h&8&&(W.messages=l[3]),p.$set(W),l[2]?a?(a.p(l,h),h&4&&_(a,1)):(a=ae(l),a.c(),_(a,1),a.m(e,null)):a&&(E(),k(a,1,1,()=>{a=null}),H())},i(l){c||(_(s.$$.fragment,l),_(f.$$.fragment,l),_(n),_(p.$$.fragment,l),_(a),_(v.$$.fragment,l),c=!0)},o(l){k(s.$$.fragment,l),k(f.$$.fragment,l),k(n),k(p.$$.fragment,l),k(a),k(v.$$.fragment,l),c=!1},d(l){T(s,l),l&&y(t),l&&y(e),T(f),n&&n.d(),T(p),a&&a.d(),l&&y(m),T(v,l)}}}function _e(i,s,t){let e=null,r=[],o=null,f=[];function u(p){return I(this,void 0,void 0,function*(){try{t(3,f=[]),t(0,e=null),t(1,r=[]),t(2,o=null);let b=p.detail.apiObject;b&&(t(0,e=K(b)),yield e.resolveReferences(),t(1,r=e.getServices()),r.length===0&&t(3,f=[...f,"Warning: No services found"]))}catch(b){t(3,f=[...f,"Error: "+b.message])}})}function S(p){t(2,o=r[p.detail.selectedServiceIndex])}return[e,r,o,f,u,S]}var R=class extends M{constructor(s){super(),D(this,s,_e,ve,P,{},ge)}},ce=R;new ce({target:document.body});X();

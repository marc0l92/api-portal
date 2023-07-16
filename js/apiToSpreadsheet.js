// Project: https://github.com/marc0l92/api-portal
import{a as te,b as se,c as re}from"./chunk-G5V23EKF.js";import{a as _e}from"./chunk-HKWFFKJE.js";import{b as ee}from"./chunk-H5Q6I7DR.js";import{d as x,g as ie,h as oe,i as ne,k as le,l as fe}from"./chunk-ZXW4T5YT.js";import"./chunk-F43KEAJJ.js";import{a as $}from"./chunk-GUNJQIHY.js";import{$ as S,A as _,C as T,D as A,F as k,G as q,H as C,J as E,M as v,W as G,Y as K,Z as H,_ as R,aa as N,ba as Q,ca as O,da as F,ea as L,fa as I,g as ve,ga as M,h as P,ha as U,ka as z,n as B,o as j,p as J,r as D,sa as V,t as y,ta as Y}from"./chunk-COUEQVKQ.js";P();P();P();var ue=ve(_e());function ae(o){let s,e,t;return{c(){s=k("div"),e=k("progress"),v(e,"class","progress is-info is-small"),e.value=o[2],v(e,"max",t=o[0].length),v(s,"class","block")},m(i,n){T(i,s,n),_(s,e)},p(i,n){n&4&&(e.value=i[2]),n&1&&t!==(t=i[0].length)&&v(e,"max",t)},d(i){i&&A(s)}}}function be(o){let s,e,t,i,n,u,r,g,m,b,f,w,a=o[1]&&o[2]>=0&&ae(o);return{c(){s=k("div"),e=k("div"),t=k("button"),i=q("Download selected service"),u=C(),r=k("button"),g=q("Download all services"),b=C(),a&&a.c(),v(t,"class",n="button is-primary "+(o[1]?"is-loading":"")),t.disabled=o[1],v(r,"class",m="button is-primary "+(o[1]?"is-loading":"")),r.disabled=o[1],v(e,"class","block"),v(s,"class","box")},m(p,c){T(p,s,c),_(s,e),_(e,t),_(t,i),_(e,u),_(e,r),_(r,g),_(s,b),a&&a.m(s,null),f||(w=[E(t,"click",o[3]),E(r,"click",o[4])],f=!0)},p(p,[c]){c&2&&n!==(n="button is-primary "+(p[1]?"is-loading":""))&&v(t,"class",n),c&2&&(t.disabled=p[1]),c&2&&m!==(m="button is-primary "+(p[1]?"is-loading":""))&&v(r,"class",m),c&2&&(r.disabled=p[1]),p[1]&&p[2]>=0?a?a.p(p,c):(a=ae(p),a.c(),a.m(s,null)):a&&(a.d(1),a=null)},i:j,o:j,d(p){p&&A(s),a&&a.d(),f=!1,J(w)}}}function Se(o,s,e){let{apiName:t=""}=s,{services:i=[]}=s,{selectedService:n=null}=s,u=!1,r=-1;function g(f){let w=te(f),a=se(w);return re(a)}function m(){return z(this,void 0,void 0,function*(){if(e(1,u=!0),e(2,r=-1),n){let f=g(n);le(`${n.getName()}.ods`,ne(f))}e(1,u=!1)})}function b(){return z(this,void 0,void 0,function*(){if(e(1,u=!0),e(2,r=0),i.length>0){let f=new ue.default;for(let w of i){let a=g(w);a&&f.file(ie(`${w.getName()}.ods`),a),e(2,r++,r)}yield oe(t,f)}e(1,u=!1)})}return o.$$set=f=>{"apiName"in f&&e(5,t=f.apiName),"services"in f&&e(0,i=f.services),"selectedService"in f&&e(6,n=f.selectedService)},[i,u,r,m,b,t,n]}var W=class extends M{constructor(s){super(),I(this,s,Se,be,D,{apiName:5,services:0,selectedService:6})}},me=W;function pe(o){let s,e,t,i;function n(r){o[6](r)}let u={services:o[1],servicesSelectSize:8};return o[2]!==void 0&&(u.selectedService=o[2]),e=new ee({props:u}),G.push(()=>Q(e,"selectedService",n)),{c(){s=k("div"),O(e.$$.fragment),v(s,"class","box")},m(r,g){T(r,s,g),F(e,s,null),i=!0},p(r,g){let m={};g&2&&(m.services=r[1]),!t&&g&4&&(t=!0,m.selectedService=r[2],K(()=>t=!1)),e.$set(m)},i(r){i||(S(e.$$.fragment,r),i=!0)},o(r){N(e.$$.fragment,r),i=!1},d(r){r&&A(s),L(e)}}}function de(o){let s,e;return s=new me({props:{selectedService:o[2],services:o[1],apiName:o[0].getName()}}),{c(){O(s.$$.fragment)},m(t,i){F(s,t,i),e=!0},p(t,i){let n={};i&4&&(n.selectedService=t[2]),i&2&&(n.services=t[1]),i&1&&(n.apiName=t[0].getName()),s.$set(n)},i(t){e||(S(s.$$.fragment,t),e=!0)},o(t){N(s.$$.fragment,t),e=!1},d(t){L(s,t)}}}function he(o){let s,e,t,i,n,u,r,g,m,b,f,w,a,p;s=new Y({props:{activePage:"apiToSpreadsheet"}}),u=new fe({}),u.$on("apiChange",o[5]);let c=o[1].length>0&&pe(o);m=new $({props:{errors:o[3]}});let d=o[2]&&de(o);return a=new U({}),{c(){O(s.$$.fragment),e=C(),t=k("div"),i=k("section"),i.innerHTML=`<div class="hero-body"><h1 class="title">Api to Spreadsheet</h1> 
      <p class="subtitle">Convert OpenAPI/Swagger file to flat Spreadsheets</p></div>`,n=C(),O(u.$$.fragment),r=C(),c&&c.c(),g=C(),O(m.$$.fragment),b=C(),d&&d.c(),w=C(),O(a.$$.fragment),v(i,"class","hero is-small"),v(t,"class",f="container "+(o[4].fluidLayout?"is-fluid":""))},m(l,h){F(s,l,h),T(l,e,h),T(l,t,h),_(t,i),_(t,n),F(u,t,null),_(t,r),c&&c.m(t,null),_(t,g),F(m,t,null),_(t,b),d&&d.m(t,null),T(l,w,h),F(a,l,h),p=!0},p(l,[h]){l[1].length>0?c?(c.p(l,h),h&2&&S(c,1)):(c=pe(l),c.c(),S(c,1),c.m(t,g)):c&&(H(),N(c,1,1,()=>{c=null}),R());let Z={};h&8&&(Z.errors=l[3]),m.$set(Z),l[2]?d?(d.p(l,h),h&4&&S(d,1)):(d=de(l),d.c(),S(d,1),d.m(t,null)):d&&(H(),N(d,1,1,()=>{d=null}),R()),(!p||h&16&&f!==(f="container "+(l[4].fluidLayout?"is-fluid":"")))&&v(t,"class",f)},i(l){p||(S(s.$$.fragment,l),S(u.$$.fragment,l),S(c),S(m.$$.fragment,l),S(d),S(a.$$.fragment,l),p=!0)},o(l){N(s.$$.fragment,l),N(u.$$.fragment,l),N(c),N(m.$$.fragment,l),N(d),N(a.$$.fragment,l),p=!1},d(l){L(s,l),l&&A(e),l&&A(t),L(u),c&&c.d(),L(m),d&&d.d(),l&&A(w),L(a,l)}}}function we(o,s,e){let t;y(o,V,b=>e(4,t=b));let i=null,n=[],u=null,r=[];function g(b){return z(this,void 0,void 0,function*(){try{e(3,r=[]),e(0,i=null),e(1,n=[]),e(2,u=null);let f=b.detail.apiObject;f&&(e(0,i=x(f)),yield i.resolveReferences(),e(1,n=i.getServices()),n.length===0&&e(3,r=[...r,"Warning: No services found"]))}catch(f){e(3,r=[...r,"Error: "+f.message])}})}function m(b){u=b,e(2,u)}return[i,n,u,r,t,g,m]}var X=class extends M{constructor(s){super(),I(this,s,we,he,D,{})}},ge=X;new ge({target:document.body});B();

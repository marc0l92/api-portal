// Project: https://github.com/marc0l92/api-portal
import{a as H}from"./chunk-XRXUOGU7.js";import{a as De}from"./chunk-QZT7ULQ5.js";import{b as ue}from"./chunk-U57CRXC6.js";import{d as me,g as G,h as J,l as pe}from"./chunk-SODTUS66.js";import"./chunk-LOUEVNPS.js";import{a as ce}from"./chunk-KN5XBMKS.js";import{$ as A,A as ee,B as S,C as w,D as te,E as v,F as z,G as D,I as E,L as u,M as le,Q as ie,S as re,W as Z,X as j,Y as O,Z as y,_ as M,aa as L,ba as P,ca as F,da as se,g as we,ga as I,h as B,la as R,ma as ne,n as $,na as oe,o as C,oa as ae,p as x,pa as fe,r as T,s as U,t as q,z as g}from"./chunk-YGQ2CARE.js";B();B();B();function Oe(i){ee(i,"svelte-20lhhh",".diagram-image.svelte-20lhhh{width:auto;max-width:100%}.break-text.svelte-20lhhh{word-break:break-all}")}function de(i,t,e){let l=i.slice();return l[6]=t[e],l}function Ne(i){let t;return{c(){t=v("p"),t.textContent="The selected service has no request and no responses models",u(t,"class","notification is-warning")},m(e,l){S(e,t,l)},p:C,d(e){e&&w(t)}}}function ye(i){let t,e,l,s,r,n,a=i[0],f=[];for(let o=0;o<a.length;o+=1)f[o]=_e(de(i,a,o));function d(o,_){return o[1]?Ce:Be}let k=d(i,-1),p=k(i);return{c(){t=v("div"),e=v("div"),l=v("aside"),s=v("ul");for(let o=0;o<f.length;o+=1)f[o].c();r=D(),n=v("div"),p.c(),u(s,"class","menu-list"),u(l,"class","menu"),u(e,"class","column is-one-third"),u(n,"class","column"),u(t,"class","columns")},m(o,_){S(o,t,_),g(t,e),g(e,l),g(l,s);for(let m=0;m<f.length;m+=1)f[m]&&f[m].m(s,null);g(t,r),g(t,n),p.m(n,null)},p(o,_){if(_&3){a=o[0];let m;for(m=0;m<a.length;m+=1){let c=de(o,a,m);f[m]?f[m].p(c,_):(f[m]=_e(c),f[m].c(),f[m].m(s,null))}for(;m<f.length;m+=1)f[m].d(1);f.length=a.length}k===(k=d(o,_))&&p?p.p(o,_):(p.d(1),p=k(o),p&&(p.c(),p.m(n,null)))},d(o){o&&w(t),te(f,o),p.d()}}}function _e(i){let t,e,l=i[6].name+"",s,r,n,a,f,d;function k(){return i[4](i[6])}return{c(){t=v("li"),e=v("a"),s=z(l),a=D(),u(e,"class",r="break-text "+(i[1]===i[6]?"is-active":"")+" svelte-20lhhh"),u(e,"href",n="#"+i[6].name)},m(p,o){S(p,t,o),g(t,e),g(e,s),g(t,a),f||(d=E(e,"click",k),f=!0)},p(p,o){i=p,o&1&&l!==(l=i[6].name+"")&&le(s,l),o&3&&r!==(r="break-text "+(i[1]===i[6]?"is-active":"")+" svelte-20lhhh")&&u(e,"class",r),o&1&&n!==(n="#"+i[6].name)&&u(e,"href",n)},d(p){p&&w(t),f=!1,d()}}}function Be(i){let t;return{c(){t=v("p"),t.textContent="No diagram selected",u(t,"class","notification is-warning")},m(e,l){S(e,t,l)},p:C,d(e){e&&w(t)}}}function Ce(i){let t,e,l,s,r,n,a,f,d,k,p,o,_,m;return{c(){t=v("div"),e=v("div"),l=v("div"),s=v("textarea"),a=D(),f=v("div"),d=v("a"),k=v("figure"),p=v("img"),u(s,"class","textarea"),s.readOnly=r=!0,s.value=n=i[1].uml,u(l,"class","control"),u(e,"class","field"),u(t,"class","block"),u(p,"class","diagram-image svelte-20lhhh"),U(p.src,o=i[1].image)||u(p,"src",o),u(p,"alt",_=i[1].name),u(k,"class","image"),u(d,"href",m=i[1].image),u(d,"target","_blank"),u(d,"rel","noreferrer"),u(f,"class","block")},m(c,b){S(c,t,b),g(t,e),g(e,l),g(l,s),S(c,a,b),S(c,f,b),g(f,d),g(d,k),g(k,p)},p(c,b){b&2&&n!==(n=c[1].uml)&&(s.value=n),b&2&&!U(p.src,o=c[1].image)&&u(p,"src",o),b&2&&_!==(_=c[1].name)&&u(p,"alt",_),b&2&&m!==(m=c[1].image)&&u(d,"href",m)},d(c){c&&w(t),c&&w(a),c&&w(f)}}}function Me(i){let t,e,l;function s(a,f){return a[0].length>0?ye:Ne}let r=s(i,-1),n=r(i);return{c(){t=v("div"),e=v("p"),e.innerHTML="<strong>Diagrams</strong>",l=D(),n.c(),u(e,"class","subtitle"),u(t,"class","box")},m(a,f){S(a,t,f),g(t,e),g(t,l),n.m(t,null)},p(a,[f]){r===(r=s(a,f))&&n?n.p(a,f):(n.d(1),n=r(a),n&&(n.c(),n.m(t,null)))},i:C,o:C,d(a){a&&w(t),n.d()}}}function Ae(i,t,e){let l;q(i,R,d=>e(3,l=d));let{service:s=null}=t,r=[],n=null;function a(d,k){d&&k&&(e(0,r=H(d,k)),r.length>0&&e(1,n=r[0]))}let f=d=>{e(1,n=d)};return i.$$set=d=>{"service"in d&&e(2,s=d.service)},i.$$.update=()=>{if(i.$$.dirty&12)e:a(s,l)},[r,n,s,l,f]}var W=class extends F{constructor(t){super(),P(this,t,Ae,Me,T,{service:2},Oe)}},ge=W;B();var Q=we(De());function ve(i){let t,e,l;return{c(){t=v("div"),e=v("progress"),u(e,"class","progress is-info is-small"),e.value=i[2],u(e,"max",l=i[0].length),u(t,"class","block")},m(s,r){S(s,t,r),g(t,e)},p(s,r){r&4&&(e.value=s[2]),r&1&&l!==(l=s[0].length)&&u(e,"max",l)},d(s){s&&w(t)}}}function Le(i){let t,e,l,s,r,n,a,f,d,k,p,o,_=i[1]&&i[2]>=0&&ve(i);return{c(){t=v("div"),e=v("div"),l=v("button"),s=z("Download selected service"),n=D(),a=v("button"),f=z("Download all services"),k=D(),_&&_.c(),u(l,"class",r="button is-primary "+(i[1]?"is-loading":"")),l.disabled=i[1],u(a,"class",d="button is-primary "+(i[1]?"is-loading":"")),a.disabled=i[1],u(e,"class","block"),u(t,"class","box")},m(m,c){S(m,t,c),g(t,e),g(e,l),g(l,s),g(e,n),g(e,a),g(a,f),g(t,k),_&&_.m(t,null),p||(o=[E(l,"click",i[3]),E(a,"click",i[4])],p=!0)},p(m,[c]){c&2&&r!==(r="button is-primary "+(m[1]?"is-loading":""))&&u(l,"class",r),c&2&&(l.disabled=m[1]),c&2&&d!==(d="button is-primary "+(m[1]?"is-loading":""))&&u(a,"class",d),c&2&&(a.disabled=m[1]),m[1]&&m[2]>=0?_?_.p(m,c):(_=ve(m),_.c(),_.m(t,null)):_&&(_.d(1),_=null)},i:C,o:C,d(m){m&&w(t),_&&_.d(),p=!1,x(o)}}}function Te(i,t,e){let l;q(i,R,o=>e(7,l=o));let{apiName:s=""}=t,{services:r=[]}=t,{selectedService:n=null}=t,a=!1,f=-1;function d(o,_,m){return I(this,void 0,void 0,function*(){for(let c of _){o.file(G(`${c.name}.plantuml`),c.uml);let b=yield fetch(c.image);b.ok&&o.file(G(`${c.name}.${m}`),yield b.blob())}})}function k(){return I(this,void 0,void 0,function*(){if(e(1,a=!0),e(2,f=-1),n){let o=H(n,l),_=new Q.default;yield d(_,o,l.format),yield J(s,_)}e(1,a=!1)})}function p(){return I(this,void 0,void 0,function*(){if(e(1,a=!0),e(2,f=0),r.length>0){let o=new Q.default;for(let _ of r){let m=H(_,l);yield d(o,m,l.format),e(2,f++,f)}yield J(s,o)}e(1,a=!1)})}return i.$$set=o=>{"apiName"in o&&e(5,s=o.apiName),"services"in o&&e(0,r=o.services),"selectedService"in o&&e(6,n=o.selectedService)},[r,a,f,k,p,s,n]}var V=class extends F{constructor(t){super(),P(this,t,Te,Le,T,{apiName:5,services:0,selectedService:6})}},be=V;function he(i){let t,e,l;return e=new ue({props:{services:i[1],servicesSelectSize:1}}),e.$on("serviceSelect",i[6]),{c(){t=v("div"),M(e.$$.fragment),u(t,"class","box")},m(s,r){S(s,t,r),A(e,t,null),l=!0},p(s,r){let n={};r&2&&(n.services=s[1]),e.$set(n)},i(s){l||(O(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){s&&w(t),L(e)}}}function ke(i){let t,e,l,s;return t=new ge({props:{service:i[2]}}),l=new be({props:{apiName:i[0].getName(),selectedService:i[2],services:i[1]}}),{c(){M(t.$$.fragment),e=D(),M(l.$$.fragment)},m(r,n){A(t,r,n),S(r,e,n),A(l,r,n),s=!0},p(r,n){let a={};n&4&&(a.service=r[2]),t.$set(a);let f={};n&1&&(f.apiName=r[0].getName()),n&4&&(f.selectedService=r[2]),n&2&&(f.services=r[1]),l.$set(f)},i(r){s||(O(t.$$.fragment,r),O(l.$$.fragment,r),s=!0)},o(r){y(t.$$.fragment,r),y(l.$$.fragment,r),s=!1},d(r){L(t,r),r&&w(e),L(l,r)}}}function qe(i){let t,e,l,s,r,n,a,f,d,k,p,o,_,m;t=new fe({props:{activePage:"apiToPlantUml"}}),n=new pe({}),n.$on("apiChange",i[5]);let c=i[1].length>0&&he(i);d=new ce({props:{messages:i[3]}});let b=i[2]&&ke(i);return _=new se({}),{c(){M(t.$$.fragment),e=D(),l=v("div"),s=v("section"),s.innerHTML=`<div class="hero-body"><h1 class="title">Api to PlantUML</h1> 
      <p class="subtitle">Generate PlantUML diagram of REST API</p></div>`,r=D(),M(n.$$.fragment),a=D(),c&&c.c(),f=D(),M(d.$$.fragment),k=D(),b&&b.c(),o=D(),M(_.$$.fragment),u(s,"class","hero is-small"),u(l,"class",p="container "+(i[4].fluidLayout?"is-fluid":""))},m(h,N){A(t,h,N),S(h,e,N),S(h,l,N),g(l,s),g(l,r),A(n,l,null),g(l,a),c&&c.m(l,null),g(l,f),A(d,l,null),g(l,k),b&&b.m(l,null),S(h,o,N),A(_,h,N),m=!0},p(h,[N]){h[1].length>0?c?(c.p(h,N),N&2&&O(c,1)):(c=he(h),c.c(),O(c,1),c.m(l,f)):c&&(Z(),y(c,1,1,()=>{c=null}),j());let Y={};N&8&&(Y.messages=h[3]),d.$set(Y),h[2]?b?(b.p(h,N),N&4&&O(b,1)):(b=ke(h),b.c(),O(b,1),b.m(l,null)):b&&(Z(),y(b,1,1,()=>{b=null}),j()),(!m||N&16&&p!==(p="container "+(h[4].fluidLayout?"is-fluid":"")))&&u(l,"class",p)},i(h){m||(O(t.$$.fragment,h),O(n.$$.fragment,h),O(c),O(d.$$.fragment,h),O(b),O(_.$$.fragment,h),m=!0)},o(h){y(t.$$.fragment,h),y(n.$$.fragment,h),y(c),y(d.$$.fragment,h),y(b),y(_.$$.fragment,h),m=!1},d(h){L(t,h),h&&w(e),h&&w(l),L(n),c&&c.d(),L(d),b&&b.d(),h&&w(o),L(_,h)}}}function Pe(i,t,e){let l;q(i,ae,k=>e(4,l=k));let s=null,r=[],n=null,a=[];function f(k){return I(this,void 0,void 0,function*(){try{e(0,s=null),e(1,r=[]),e(2,n=null),e(3,a=[]);let p=k.detail.apiObject;p&&(e(0,s=me(p)),s.setModelsTitle(),yield s.resolveReferences(),e(1,r=s.getServices()),r.length===0&&e(3,a=[...a,"Warning: No services found"]))}catch(p){e(3,a=[...a,"Error: "+p.message])}})}function d(k){e(2,n=r[k.detail.selectedServiceIndex])}return ie(()=>{ne()}),re(()=>{oe()}),[s,r,n,a,l,f,d]}var X=class extends F{constructor(t){super(),P(this,t,Pe,qe,T,{})}},Se=X;new Se({target:document.body});$();

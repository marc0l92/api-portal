// Project: https://github.com/marc0l92/api-portal
import{a as R}from"./chunk-WPFLLCC6.js";import{a as ye}from"./chunk-TNX3NFU7.js";import{b as _e}from"./chunk-SHIWSQKU.js";import{d as de,f as W,g as K,k as ge}from"./chunk-EURPGJ36.js";import"./chunk-WMLYKKQG.js";import{a as Z}from"./chunk-67DGOYCL.js";import{$ as O,A as b,B as te,C as w,D,E as le,F as h,G as H,H as N,J as I,M as d,N as re,R as ie,T as se,W as ne,Y as oe,Z as G,_ as J,aa as y,ba as ae,ca as B,da as C,ea as M,fa as q,g as Oe,ga as P,h as T,ha as fe,ka as E,n as x,o as z,p as ee,pa as U,qa as ce,r as A,ra as ue,s as j,sa as me,t as L,ta as pe}from"./chunk-DD7ECPPK.js";T();T();T();function Be(r){te(r,"svelte-20lhhh",".diagram-image.svelte-20lhhh{width:auto;max-width:100%}.break-text.svelte-20lhhh{word-break:break-all}")}function ve(r,t,e){let l=r.slice();return l[6]=t[e],l}function Ce(r){let t;return{c(){t=h("p"),t.textContent="The selected service has no request and no responses models",d(t,"class","notification is-warning")},m(e,l){w(e,t,l)},p:z,d(e){e&&D(t)}}}function Me(r){let t,e,l,o,s,n,i=r[0],f=[];for(let m=0;m<i.length;m+=1)f[m]=be(ve(r,i,m));function c(m,p){return m[1]?Ae:Te}let k=c(r,-1),_=k(r);return{c(){t=h("div"),e=h("div"),l=h("aside"),o=h("ul");for(let m=0;m<f.length;m+=1)f[m].c();s=N(),n=h("div"),_.c(),d(o,"class","menu-list"),d(l,"class","menu"),d(e,"class","column is-one-third"),d(n,"class","column"),d(t,"class","columns")},m(m,p){w(m,t,p),b(t,e),b(e,l),b(l,o);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(o,null);b(t,s),b(t,n),_.m(n,null)},p(m,p){if(p&3){i=m[0];let v;for(v=0;v<i.length;v+=1){let g=ve(m,i,v);f[v]?f[v].p(g,p):(f[v]=be(g),f[v].c(),f[v].m(o,null))}for(;v<f.length;v+=1)f[v].d(1);f.length=i.length}k===(k=c(m,p))&&_?_.p(m,p):(_.d(1),_=k(m),_&&(_.c(),_.m(n,null)))},d(m){m&&D(t),le(f,m),_.d()}}}function be(r){let t,e,l=r[6].name+"",o,s,n,i,f,c;function k(){return r[4](r[6])}return{c(){t=h("li"),e=h("a"),o=H(l),i=N(),d(e,"class",s="break-text "+(r[1]===r[6]?"is-active":"")+" svelte-20lhhh"),d(e,"href",n="#"+r[6].name)},m(_,m){w(_,t,m),b(t,e),b(e,o),b(t,i),f||(c=I(e,"click",k),f=!0)},p(_,m){r=_,m&1&&l!==(l=r[6].name+"")&&re(o,l),m&3&&s!==(s="break-text "+(r[1]===r[6]?"is-active":"")+" svelte-20lhhh")&&d(e,"class",s),m&1&&n!==(n="#"+r[6].name)&&d(e,"href",n)},d(_){_&&D(t),f=!1,c()}}}function Te(r){let t;return{c(){t=h("p"),t.textContent="No diagram selected",d(t,"class","notification is-warning")},m(e,l){w(e,t,l)},p:z,d(e){e&&D(t)}}}function Ae(r){let t,e,l,o,s,n,i,f,c,k,_,m,p,v;return{c(){t=h("div"),e=h("div"),l=h("div"),o=h("textarea"),i=N(),f=h("div"),c=h("a"),k=h("figure"),_=h("img"),d(o,"class","textarea"),o.readOnly=s=!0,o.value=n=r[1].uml,d(l,"class","control"),d(e,"class","field"),d(t,"class","block"),d(_,"class","diagram-image svelte-20lhhh"),j(_.src,m=r[1].image)||d(_,"src",m),d(_,"alt",p=r[1].name),d(k,"class","image"),d(c,"href",v=r[1].image),d(c,"target","_blank"),d(c,"rel","noreferrer"),d(f,"class","block")},m(g,u){w(g,t,u),b(t,e),b(e,l),b(l,o),w(g,i,u),w(g,f,u),b(f,c),b(c,k),b(k,_)},p(g,u){u&2&&n!==(n=g[1].uml)&&(o.value=n),u&2&&!j(_.src,m=g[1].image)&&d(_,"src",m),u&2&&p!==(p=g[1].name)&&d(_,"alt",p),u&2&&v!==(v=g[1].image)&&d(c,"href",v)},d(g){g&&D(t),g&&D(i),g&&D(f)}}}function Le(r){let t,e,l;function o(i,f){return i[0].length>0?Me:Ce}let s=o(r,-1),n=s(r);return{c(){t=h("div"),e=h("p"),e.innerHTML="<strong>Diagrams</strong>",l=N(),n.c(),d(e,"class","subtitle"),d(t,"class","box")},m(i,f){w(i,t,f),b(t,e),b(t,l),n.m(t,null)},p(i,[f]){s===(s=o(i,f))&&n?n.p(i,f):(n.d(1),n=s(i),n&&(n.c(),n.m(t,null)))},i:z,o:z,d(i){i&&D(t),n.d()}}}function qe(r,t,e){let l;L(r,U,c=>e(3,l=c));let{service:o=null}=t,s=[],n=null;function i(c,k){c&&k&&(e(0,s=R(c,k)),s.length>0&&e(1,n=s[0]))}let f=c=>{e(1,n=c)};return r.$$set=c=>{"service"in c&&e(2,o=c.service)},r.$$.update=()=>{if(r.$$.dirty&12)e:i(o,l)},[s,n,o,l,f]}var Q=class extends P{constructor(t){super(),q(this,t,qe,Le,A,{service:2},Be)}},he=Q;T();var X=Oe(ye());function ke(r){let t,e,l;return{c(){t=h("div"),e=h("progress"),d(e,"class","progress is-info is-small"),e.value=r[3],d(e,"max",l=r[0].length),d(t,"class","block")},m(o,s){w(o,t,s),b(t,e)},p(o,s){s&8&&(e.value=o[3]),s&1&&l!==(l=o[0].length)&&d(e,"max",l)},d(o){o&&D(t)}}}function Pe(r){let t,e,l,o,s,n,i,f,c,k,_,m,p,v,g,u=r[2]&&r[3]>=0&&ke(r);return m=new Z({props:{errors:r[1],level:"warning"}}),{c(){t=h("div"),e=h("div"),l=h("button"),o=H("Download selected service"),n=N(),i=h("button"),f=H("Download all services"),k=N(),u&&u.c(),_=N(),B(m.$$.fragment),d(l,"class",s="button is-primary "+(r[2]?"is-loading":"")),l.disabled=r[2],d(i,"class",c="button is-primary "+(r[2]?"is-loading":"")),i.disabled=r[2],d(e,"class","block"),d(t,"class","box")},m(a,S){w(a,t,S),b(t,e),b(e,l),b(l,o),b(e,n),b(e,i),b(i,f),b(t,k),u&&u.m(t,null),w(a,_,S),C(m,a,S),p=!0,v||(g=[I(l,"click",r[4]),I(i,"click",r[5])],v=!0)},p(a,[S]){(!p||S&4&&s!==(s="button is-primary "+(a[2]?"is-loading":"")))&&d(l,"class",s),(!p||S&4)&&(l.disabled=a[2]),(!p||S&4&&c!==(c="button is-primary "+(a[2]?"is-loading":"")))&&d(i,"class",c),(!p||S&4)&&(i.disabled=a[2]),a[2]&&a[3]>=0?u?u.p(a,S):(u=ke(a),u.c(),u.m(t,null)):u&&(u.d(1),u=null);let F={};S&2&&(F.errors=a[1]),m.$set(F)},i(a){p||(O(m.$$.fragment,a),p=!0)},o(a){y(m.$$.fragment,a),p=!1},d(a){a&&D(t),u&&u.d(),a&&D(_),M(m,a),v=!1,ee(g)}}}function Ee(r,t,e){let l;L(r,U,p=>e(8,l=p));let{apiName:o=""}=t,{services:s=[]}=t,{selectedService:n=null}=t,i=[],f=!1,c=-1;function k(p,v,g){return E(this,void 0,void 0,function*(){for(let u of v){p.file(W(`${u.name}.plantuml`),u.uml);try{let a=yield fetch(u.image);a.ok?p.file(W(`${u.name}.${g}`),yield a.blob()):e(1,i=[...i,`${a.status} - ${a.statusText}`])}catch(a){console.error(a),e(1,i=[...i,a])}}})}function _(){return E(this,void 0,void 0,function*(){if(e(2,f=!0),e(3,c=-1),e(1,i=[]),n){let p=R(n,l),v=new X.default;yield k(v,p,l.format),yield K(o,v)}e(2,f=!1)})}function m(){return E(this,void 0,void 0,function*(){if(e(2,f=!0),e(3,c=0),e(1,i=[]),s.length>0){let p=new X.default;for(let v of s){let g=R(v,l);yield k(p,g,l.format),e(3,c++,c)}yield K(o,p)}e(2,f=!1)})}return r.$$set=p=>{"apiName"in p&&e(6,o=p.apiName),"services"in p&&e(0,s=p.services),"selectedService"in p&&e(7,n=p.selectedService)},[s,i,f,c,_,m,o,n]}var Y=class extends P{constructor(t){super(),q(this,t,Ee,Pe,A,{apiName:6,services:0,selectedService:7})}},Se=Y;function we(r){let t,e,l,o;function s(i){r[6](i)}let n={services:r[1],servicesSelectSize:1};return r[2]!==void 0&&(n.selectedService=r[2]),e=new _e({props:n}),ne.push(()=>ae(e,"selectedService",s)),{c(){t=h("div"),B(e.$$.fragment),d(t,"class","box")},m(i,f){w(i,t,f),C(e,t,null),o=!0},p(i,f){let c={};f&2&&(c.services=i[1]),!l&&f&4&&(l=!0,c.selectedService=i[2],oe(()=>l=!1)),e.$set(c)},i(i){o||(O(e.$$.fragment,i),o=!0)},o(i){y(e.$$.fragment,i),o=!1},d(i){i&&D(t),M(e)}}}function De(r){let t,e,l,o;return t=new he({props:{service:r[2]}}),l=new Se({props:{apiName:r[0].getName(),selectedService:r[2],services:r[1]}}),{c(){B(t.$$.fragment),e=N(),B(l.$$.fragment)},m(s,n){C(t,s,n),w(s,e,n),C(l,s,n),o=!0},p(s,n){let i={};n&4&&(i.service=s[2]),t.$set(i);let f={};n&1&&(f.apiName=s[0].getName()),n&4&&(f.selectedService=s[2]),n&2&&(f.services=s[1]),l.$set(f)},i(s){o||(O(t.$$.fragment,s),O(l.$$.fragment,s),o=!0)},o(s){y(t.$$.fragment,s),y(l.$$.fragment,s),o=!1},d(s){M(t,s),s&&D(e),M(l,s)}}}function Fe(r){let t,e,l,o,s,n,i,f,c,k,_,m,p,v;t=new pe({props:{activePage:"apiToPlantUml"}}),n=new ge({}),n.$on("apiChange",r[5]);let g=r[1].length>0&&we(r);c=new Z({props:{errors:r[3]}});let u=r[2]&&De(r);return p=new fe({}),{c(){B(t.$$.fragment),e=N(),l=h("div"),o=h("section"),o.innerHTML=`<div class="hero-body"><h1 class="title">Api to PlantUML</h1> 
      <p class="subtitle">Generate PlantUML diagram of REST API</p></div>`,s=N(),B(n.$$.fragment),i=N(),g&&g.c(),f=N(),B(c.$$.fragment),k=N(),u&&u.c(),m=N(),B(p.$$.fragment),d(o,"class","hero is-small"),d(l,"class",_="container "+(r[4].fluidLayout?"is-fluid":""))},m(a,S){C(t,a,S),w(a,e,S),w(a,l,S),b(l,o),b(l,s),C(n,l,null),b(l,i),g&&g.m(l,null),b(l,f),C(c,l,null),b(l,k),u&&u.m(l,null),w(a,m,S),C(p,a,S),v=!0},p(a,[S]){a[1].length>0?g?(g.p(a,S),S&2&&O(g,1)):(g=we(a),g.c(),O(g,1),g.m(l,f)):g&&(G(),y(g,1,1,()=>{g=null}),J());let F={};S&8&&(F.errors=a[3]),c.$set(F),a[2]?u?(u.p(a,S),S&4&&O(u,1)):(u=De(a),u.c(),O(u,1),u.m(l,null)):u&&(G(),y(u,1,1,()=>{u=null}),J()),(!v||S&16&&_!==(_="container "+(a[4].fluidLayout?"is-fluid":"")))&&d(l,"class",_)},i(a){v||(O(t.$$.fragment,a),O(n.$$.fragment,a),O(g),O(c.$$.fragment,a),O(u),O(p.$$.fragment,a),v=!0)},o(a){y(t.$$.fragment,a),y(n.$$.fragment,a),y(g),y(c.$$.fragment,a),y(u),y(p.$$.fragment,a),v=!1},d(a){M(t,a),a&&D(e),a&&D(l),M(n),g&&g.d(),M(c),u&&u.d(),a&&D(m),M(p,a)}}}function ze(r,t,e){let l;L(r,me,k=>e(4,l=k));let o=null,s=[],n=null,i=[];function f(k){return E(this,void 0,void 0,function*(){try{e(0,o=null),e(1,s=[]),e(2,n=null),e(3,i=[]);let _=k.detail.apiObject;_&&(e(0,o=de(_)),o.setModelsTitle(),yield o.resolveReferences(),e(1,s=o.getServices()),s.length===0&&e(3,i=[...i,"Warning: No services found"]))}catch(_){e(3,i=[...i,"Error: "+_.message])}})}ie(()=>{ce()}),se(()=>{ue()});function c(k){n=k,e(2,n)}return[o,s,n,i,l,f,c]}var $=class extends P{constructor(t){super(),q(this,t,ze,Fe,A,{})}},Ne=$;new Ne({target:document.body});x();

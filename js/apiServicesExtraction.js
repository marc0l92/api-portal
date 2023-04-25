// Project: https://github.com/marc0l92/api-portal
import{c as ee,d as te,j as ne,k as se,l as oe}from"./chunk-GGBUZBTM.js";import"./chunk-KH7MCBP5.js";import{a as x}from"./chunk-6NTOL2IZ.js";import{$ as P,A as z,B as y,C as F,D as G,E as g,F as q,G as v,I as D,L as h,M as K,W as Q,X as U,Y as k,Z as O,_ as N,aa as j,ba as E,ca as J,da as X,ga as L,h as w,n as V,o as M,oa as Y,pa as Z,r as I,t as W,z as m}from"./chunk-E6WZCZXE.js";w();w();w();w();function ie(o,n){let e=JSON.parse(JSON.stringify(o.toJson()));for(let t of n)if(!t.keep){let i=t.data;i.getPath()in e.paths&&(i.getMethod()in e.paths[i.getPath()]&&delete e.paths[i.getPath()][i.getMethod()],Object.keys(e.paths[i.getPath()]).filter(l=>l!=="parameters").length===0&&delete e.paths[i.getPath()])}switch(ee(e)){case 2:A(e,e.parameters,"#/parameters"),A(e,e.responses,"#/responses"),A(e,e.definitions,"#/definitions");break;case 3:e.components&&(A(e,e.components.parameters,"#/components/parameters"),A(e,e.components.headers,"#/components/headers"),A(e,e.components.callbacks,"#/components/callbacks"),A(e,e.components.requestBodies,"#/components/requestBodies"),A(e,e.components.responses,"#/components/responses"),A(e,e.components.schemas,"#/components/schemas"));break}return e}var A=(o,n,e)=>{if(n){let t=!0;for(;t;){t=!1;let i=JSON.stringify(o);for(let l in n){let s=`"$ref":"${e}/${l}"`;i.indexOf(s)==-1&&(delete n[l],t=!0)}}}};function me(o){let n,e,t,i,l,s,a;return{c(){n=g("div"),e=g("div"),t=g("button"),i=q("Download Api"),h(t,"class",l="button is-primary "+(o[0]?"is-loading":"")),t.disabled=o[0],h(e,"class","block"),h(n,"class","box")},m(f,r){y(f,n,r),m(n,e),m(e,t),m(t,i),s||(a=D(t,"click",o[1]),s=!0)},p(f,[r]){r&1&&l!==(l="button is-primary "+(f[0]?"is-loading":""))&&h(t,"class",l),r&1&&(t.disabled=f[0])},i:M,o:M,d(f){f&&F(n),s=!1,a()}}}function ue(o,n,e){let{api:t=null}=n,{servicesFilter:i=[]}=n,l=!1;function s(){return L(this,void 0,void 0,function*(){e(0,l=!0);let a=ie(t,i);se(`${t.getName()}.json`,ne(a)),e(0,l=!1)})}return o.$$set=a=>{"api"in a&&e(2,t=a.api),"servicesFilter"in a&&e(3,i=a.servicesFilter)},[l,s,t,i]}var B=class extends J{constructor(n){super(),E(this,n,ue,me,I,{api:2,servicesFilter:3})}},re=B;function de(o){z(o,"svelte-1ghsbhp",".menu-list.svelte-1ghsbhp label.svelte-1ghsbhp:hover{background-color:#f5f5f5;color:#363636}.menu-list.svelte-1ghsbhp label.svelte-1ghsbhp{border-radius:2px;color:#4a4a4a;display:block;padding:0.5em 0.75em}")}function le(o,n,e){let t=o.slice();return t[6]=n[e],t[7]=n,t[8]=e,t}function ae(o){let n,e,t,i,l=o[1],s=[];for(let a=0;a<l.length;a+=1)s[a]=pe(le(o,l,a));return{c(){n=g("div"),e=g("p"),e.innerHTML="<strong>Services to keep</strong>",t=v(),i=g("ul");for(let a=0;a<s.length;a+=1)s[a].c();h(e,"class","subtitle"),h(i,"class","menu-list svelte-1ghsbhp"),h(n,"class","box")},m(a,f){y(a,n,f),m(n,e),m(n,t),m(n,i);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(i,null)},p(a,f){if(f&2){l=a[1];let r;for(r=0;r<l.length;r+=1){let u=le(a,l,r);s[r]?s[r].p(u,f):(s[r]=pe(u),s[r].c(),s[r].m(i,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=l.length}},d(a){a&&F(n),G(s,a)}}}function pe(o){let n,e,t,i,l=o[6].data.getName()+"",s,a,f,r;function u(){o[5].call(t,o[7],o[8])}return{c(){n=g("li"),e=g("label"),t=g("input"),i=v(),s=q(l),a=v(),h(t,"type","checkbox"),h(e,"class","checkbox svelte-1ghsbhp")},m(b,S){y(b,n,S),m(n,e),m(e,t),t.checked=o[6].keep,m(e,i),m(e,s),m(n,a),f||(r=D(t,"change",u),f=!0)},p(b,S){o=b,S&2&&(t.checked=o[6].keep),S&2&&l!==(l=o[6].data.getName()+"")&&K(s,l)},d(b){b&&F(n),f=!1,r()}}}function fe(o){let n,e;return n=new re({props:{api:o[0],servicesFilter:o[1]}}),{c(){N(n.$$.fragment)},m(t,i){P(n,t,i),e=!0},p(t,i){let l={};i&1&&(l.api=t[0]),i&2&&(l.servicesFilter=t[1]),n.$set(l)},i(t){e||(k(n.$$.fragment,t),e=!0)},o(t){O(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function he(o){let n,e,t,i,l,s,a,f,r,u,b,S,$,C;n=new Z({props:{activePage:"apiServicesExtraction"}}),s=new oe({}),s.$on("apiChange",o[4]);let d=o[1].length>0&&ae(o);r=new x({props:{messages:o[2]}});let c=o[0]&&o[1].length>0&&fe(o);return $=new X({}),{c(){N(n.$$.fragment),e=v(),t=g("div"),i=g("section"),i.innerHTML=`<div class="hero-body"><h1 class="title">Api Services Extraction</h1> 
      <p class="subtitle">Remove some of the services from an api document</p></div>`,l=v(),N(s.$$.fragment),a=v(),d&&d.c(),f=v(),N(r.$$.fragment),u=v(),c&&c.c(),S=v(),N($.$$.fragment),h(i,"class","hero is-small"),h(t,"class",b="container "+(o[3].fluidLayout?"is-fluid":""))},m(p,_){P(n,p,_),y(p,e,_),y(p,t,_),m(t,i),m(t,l),P(s,t,null),m(t,a),d&&d.m(t,null),m(t,f),P(r,t,null),m(t,u),c&&c.m(t,null),y(p,S,_),P($,p,_),C=!0},p(p,[_]){p[1].length>0?d?d.p(p,_):(d=ae(p),d.c(),d.m(t,f)):d&&(d.d(1),d=null);let R={};_&4&&(R.messages=p[2]),r.$set(R),p[0]&&p[1].length>0?c?(c.p(p,_),_&3&&k(c,1)):(c=fe(p),c.c(),k(c,1),c.m(t,null)):c&&(Q(),O(c,1,1,()=>{c=null}),U()),(!C||_&8&&b!==(b="container "+(p[3].fluidLayout?"is-fluid":"")))&&h(t,"class",b)},i(p){C||(k(n.$$.fragment,p),k(s.$$.fragment,p),k(r.$$.fragment,p),k(c),k($.$$.fragment,p),C=!0)},o(p){O(n.$$.fragment,p),O(s.$$.fragment,p),O(r.$$.fragment,p),O(c),O($.$$.fragment,p),C=!1},d(p){j(n,p),p&&F(e),p&&F(t),j(s),d&&d.d(),j(r),c&&c.d(),p&&F(S),j($,p)}}}function ge(o,n,e){let t;W(o,Y,r=>e(3,t=r));let i=null,l=[],s=[];function a(r){return L(this,void 0,void 0,function*(){try{e(0,i=null),e(1,l=[]),e(2,s=[]);let u=r.detail.apiObject;u&&(e(0,i=te(u)),e(1,l=i.getServices().map(b=>({data:b,keep:!0}))),l.length===0&&e(2,s=[...s,"Warning: No services found"]))}catch(u){e(2,s=[...s,"Error: "+u.message])}})}function f(r,u){r[u].keep=this.checked,e(1,l)}return[i,l,s,t,a,f]}var H=class extends J{constructor(n){super(),E(this,n,ge,he,I,{},de)}},ce=H;new ce({target:document.body});V();
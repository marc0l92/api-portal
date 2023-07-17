// Project: https://github.com/marc0l92/api-portal
import{c as ee,d as te,j as ne,k as oe,l as se}from"./chunk-WZAW7NZR.js";import"./chunk-CED5N3WL.js";import{a as x}from"./chunk-IWQ7Y3C2.js";import{$ as k,A as m,B as z,C as y,D as F,E as G,F as g,G as q,H as v,J as D,M as h,N as K,Z as Q,_ as U,aa as O,ca as N,da as P,ea as j,fa as E,ga as J,h as w,ha as X,ka as L,n as V,o as M,r as I,sa as Y,t as W,ta as Z}from"./chunk-IQOH2Y7Y.js";w();w();w();w();function re(s,n){let e=JSON.parse(JSON.stringify(s.toJson()));for(let t of n)if(!t.keep){let r=t.data;r.getPath()in e.paths&&(r.getMethod()in e.paths[r.getPath()]&&delete e.paths[r.getPath()][r.getMethod()],Object.keys(e.paths[r.getPath()]).filter(l=>l!=="parameters").length===0&&delete e.paths[r.getPath()])}switch(ee(e)){case 2:A(e,e.parameters,"#/parameters"),A(e,e.responses,"#/responses"),A(e,e.definitions,"#/definitions");break;case 3:e.components&&(A(e,e.components.parameters,"#/components/parameters"),A(e,e.components.headers,"#/components/headers"),A(e,e.components.callbacks,"#/components/callbacks"),A(e,e.components.requestBodies,"#/components/requestBodies"),A(e,e.components.responses,"#/components/responses"),A(e,e.components.schemas,"#/components/schemas"));break}return e}var A=(s,n,e)=>{if(n){let t=!0;for(;t;){t=!1;let r=JSON.stringify(s);for(let l in n){let o=`"$ref":"${e}/${l}"`;r.indexOf(o)==-1&&(delete n[l],t=!0)}}}};function me(s){let n,e,t,r,l,o,a;return{c(){n=g("div"),e=g("div"),t=g("button"),r=q("Download Api"),h(t,"class",l="button is-primary "+(s[0]?"is-loading":"")),t.disabled=s[0],h(e,"class","block"),h(n,"class","box")},m(f,i){y(f,n,i),m(n,e),m(e,t),m(t,r),o||(a=D(t,"click",s[1]),o=!0)},p(f,[i]){i&1&&l!==(l="button is-primary "+(f[0]?"is-loading":""))&&h(t,"class",l),i&1&&(t.disabled=f[0])},i:M,o:M,d(f){f&&F(n),o=!1,a()}}}function ue(s,n,e){let{api:t=null}=n,{servicesFilter:r=[]}=n,l=!1;function o(){return L(this,void 0,void 0,function*(){e(0,l=!0);let a=re(t,r);oe(`${t.getName()}.json`,ne(a)),e(0,l=!1)})}return s.$$set=a=>{"api"in a&&e(2,t=a.api),"servicesFilter"in a&&e(3,r=a.servicesFilter)},[l,o,t,r]}var B=class extends J{constructor(n){super(),E(this,n,ue,me,I,{api:2,servicesFilter:3})}},ie=B;function de(s){z(s,"svelte-1ghsbhp",".menu-list.svelte-1ghsbhp label.svelte-1ghsbhp:hover{background-color:#f5f5f5;color:#363636}.menu-list.svelte-1ghsbhp label.svelte-1ghsbhp{border-radius:2px;color:#4a4a4a;display:block;padding:0.5em 0.75em}")}function le(s,n,e){let t=s.slice();return t[6]=n[e],t[7]=n,t[8]=e,t}function ae(s){let n,e,t,r,l=s[1],o=[];for(let a=0;a<l.length;a+=1)o[a]=pe(le(s,l,a));return{c(){n=g("div"),e=g("p"),e.innerHTML="<strong>Services to keep</strong>",t=v(),r=g("ul");for(let a=0;a<o.length;a+=1)o[a].c();h(e,"class","subtitle"),h(r,"class","menu-list svelte-1ghsbhp"),h(n,"class","box")},m(a,f){y(a,n,f),m(n,e),m(n,t),m(n,r);for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(r,null)},p(a,f){if(f&2){l=a[1];let i;for(i=0;i<l.length;i+=1){let u=le(a,l,i);o[i]?o[i].p(u,f):(o[i]=pe(u),o[i].c(),o[i].m(r,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=l.length}},d(a){a&&F(n),G(o,a)}}}function pe(s){let n,e,t,r,l=s[6].data.getName()+"",o,a,f,i;function u(){s[5].call(t,s[7],s[8])}return{c(){n=g("li"),e=g("label"),t=g("input"),r=v(),o=q(l),a=v(),h(t,"type","checkbox"),h(e,"class","checkbox svelte-1ghsbhp")},m(b,S){y(b,n,S),m(n,e),m(e,t),t.checked=s[6].keep,m(e,r),m(e,o),m(n,a),f||(i=D(t,"change",u),f=!0)},p(b,S){s=b,S&2&&(t.checked=s[6].keep),S&2&&l!==(l=s[6].data.getName()+"")&&K(o,l)},d(b){b&&F(n),f=!1,i()}}}function fe(s){let n,e;return n=new ie({props:{api:s[0],servicesFilter:s[1]}}),{c(){N(n.$$.fragment)},m(t,r){P(n,t,r),e=!0},p(t,r){let l={};r&1&&(l.api=t[0]),r&2&&(l.servicesFilter=t[1]),n.$set(l)},i(t){e||(k(n.$$.fragment,t),e=!0)},o(t){O(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function he(s){let n,e,t,r,l,o,a,f,i,u,b,S,$,C;n=new Z({props:{activePage:"apiServicesExtraction"}}),o=new se({}),o.$on("apiChange",s[4]);let d=s[1].length>0&&ae(s);i=new x({props:{errors:s[2]}});let c=s[0]&&s[1].length>0&&fe(s);return $=new X({}),{c(){N(n.$$.fragment),e=v(),t=g("div"),r=g("section"),r.innerHTML=`<div class="hero-body"><h1 class="title">Api Services Extraction</h1> 
      <p class="subtitle">Remove some of the services from an api document</p></div>`,l=v(),N(o.$$.fragment),a=v(),d&&d.c(),f=v(),N(i.$$.fragment),u=v(),c&&c.c(),S=v(),N($.$$.fragment),h(r,"class","hero is-small"),h(t,"class",b="container "+(s[3].fluidLayout?"is-fluid":""))},m(p,_){P(n,p,_),y(p,e,_),y(p,t,_),m(t,r),m(t,l),P(o,t,null),m(t,a),d&&d.m(t,null),m(t,f),P(i,t,null),m(t,u),c&&c.m(t,null),y(p,S,_),P($,p,_),C=!0},p(p,[_]){p[1].length>0?d?d.p(p,_):(d=ae(p),d.c(),d.m(t,f)):d&&(d.d(1),d=null);let R={};_&4&&(R.errors=p[2]),i.$set(R),p[0]&&p[1].length>0?c?(c.p(p,_),_&3&&k(c,1)):(c=fe(p),c.c(),k(c,1),c.m(t,null)):c&&(Q(),O(c,1,1,()=>{c=null}),U()),(!C||_&8&&b!==(b="container "+(p[3].fluidLayout?"is-fluid":"")))&&h(t,"class",b)},i(p){C||(k(n.$$.fragment,p),k(o.$$.fragment,p),k(i.$$.fragment,p),k(c),k($.$$.fragment,p),C=!0)},o(p){O(n.$$.fragment,p),O(o.$$.fragment,p),O(i.$$.fragment,p),O(c),O($.$$.fragment,p),C=!1},d(p){j(n,p),p&&F(e),p&&F(t),j(o),d&&d.d(),j(i),c&&c.d(),p&&F(S),j($,p)}}}function ge(s,n,e){let t;W(s,Y,i=>e(3,t=i));let r=null,l=[],o=[];function a(i){return L(this,void 0,void 0,function*(){try{e(0,r=null),e(1,l=[]),e(2,o=[]);let u=i.detail.apiObject;u&&(e(0,r=te(u)),e(1,l=r.getServices().map(b=>({data:b,keep:!0}))),l.length===0&&e(2,o=[...o,"Warning: No services found"]))}catch(u){e(2,o=[...o,"Error: "+u.message])}})}function f(i,u){i[u].keep=this.checked,e(1,l)}return[r,l,o,t,a,f]}var H=class extends J{constructor(n){super(),E(this,n,ge,he,I,{},de)}},ce=H;new ce({target:document.body});V();

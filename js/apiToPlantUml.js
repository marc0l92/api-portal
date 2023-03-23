// Project: https://github.com/marc0l92/api-tools
import{a as H,b as ae,c as fe,d as me,e as z}from"./chunk-G46OTYXQ.js";import"./chunk-EKH2GIRG.js";import{a as we}from"./chunk-PTNAZI2O.js";import{b as ce}from"./chunk-3WBL2XKV.js";import{a as $,b as j,f as ue}from"./chunk-SHJGD6JO.js";import{d as oe}from"./chunk-AXU3TOLV.js";import"./chunk-IKILPUXY.js";import{c as F,d as ne}from"./chunk-H52OBMJJ.js";import{$ as P,A as k,B as S,C as ee,D as b,E as I,F as w,H as L,J as p,K as te,O as le,Q as ie,T as U,U as Z,V as D,W as N,X as O,Y as C,Z as B,_ as q,aa as re,ba as se,g as Se,h as M,n as X,o as A,p as Y,q as T,r as R,s as E,y as v,z as x}from"./chunk-FEMFINP7.js";M();M();M();function De(i){x(i,"svelte-20lhhh",".diagram-image.svelte-20lhhh{width:auto;max-width:100%}.break-text.svelte-20lhhh{word-break:break-all}")}function de(i,t,e){let l=i.slice();return l[6]=t[e],l}function Ne(i){let t;return{c(){t=b("p"),t.textContent="The selected service has no request and no responses models",p(t,"class","notification is-warning")},m(e,l){k(e,t,l)},p:A,d(e){e&&S(t)}}}function ye(i){let t,e,l,s,u,a,f=i[0],m=[];for(let r=0;r<f.length;r+=1)m[r]=pe(de(i,f,r));function c(r,_){return r[1]?Ce:Oe}let h=c(i,-1),o=h(i);return{c(){t=b("div"),e=b("div"),l=b("aside"),s=b("ul");for(let r=0;r<m.length;r+=1)m[r].c();u=w(),a=b("div"),o.c(),p(s,"class","menu-list"),p(l,"class","menu"),p(e,"class","column is-one-third"),p(a,"class","column"),p(t,"class","columns")},m(r,_){k(r,t,_),v(t,e),v(e,l),v(l,s);for(let n=0;n<m.length;n+=1)m[n].m(s,null);v(t,u),v(t,a),o.m(a,null)},p(r,_){if(_&3){f=r[0];let n;for(n=0;n<f.length;n+=1){let d=de(r,f,n);m[n]?m[n].p(d,_):(m[n]=pe(d),m[n].c(),m[n].m(s,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=f.length}h===(h=c(r,_))&&o?o.p(r,_):(o.d(1),o=h(r),o&&(o.c(),o.m(a,null)))},d(r){r&&S(t),ee(m,r),o.d()}}}function pe(i){let t,e,l=i[6].name+"",s,u,a,f,m,c;function h(){return i[4](i[6])}return{c(){t=b("li"),e=b("a"),s=I(l),f=w(),p(e,"class",u="break-text "+(i[1]===i[6]?"is-active":"")+" svelte-20lhhh"),p(e,"href",a="#"+i[6].name)},m(o,r){k(o,t,r),v(t,e),v(e,s),v(t,f),m||(c=L(e,"click",h),m=!0)},p(o,r){i=o,r&1&&l!==(l=i[6].name+"")&&te(s,l),r&3&&u!==(u="break-text "+(i[1]===i[6]?"is-active":"")+" svelte-20lhhh")&&p(e,"class",u),r&1&&a!==(a="#"+i[6].name)&&p(e,"href",a)},d(o){o&&S(t),m=!1,c()}}}function Oe(i){let t;return{c(){t=b("p"),t.textContent="No diagram selected",p(t,"class","notification is-warning")},m(e,l){k(e,t,l)},p:A,d(e){e&&S(t)}}}function Ce(i){let t,e,l,s,u,a,f,m,c,h,o,r,_,n;return{c(){t=b("div"),e=b("div"),l=b("div"),s=b("textarea"),f=w(),m=b("div"),c=b("a"),h=b("figure"),o=b("img"),p(s,"class","textarea"),s.readOnly=u=!0,s.value=a=i[1].uml,p(l,"class","control"),p(e,"class","field"),p(t,"class","block"),p(o,"class","diagram-image svelte-20lhhh"),R(o.src,r=i[1].image)||p(o,"src",r),p(o,"alt",_=i[1].name),p(h,"class","image"),p(c,"href",n=i[1].image),p(c,"target","_blank"),p(c,"rel","noreferrer"),p(m,"class","block")},m(d,g){k(d,t,g),v(t,e),v(e,l),v(l,s),k(d,f,g),k(d,m,g),v(m,c),v(c,h),v(h,o)},p(d,g){g&2&&a!==(a=d[1].uml)&&(s.value=a),g&2&&!R(o.src,r=d[1].image)&&p(o,"src",r),g&2&&_!==(_=d[1].name)&&p(o,"alt",_),g&2&&n!==(n=d[1].image)&&p(c,"href",n)},d(d){d&&S(t),d&&S(f),d&&S(m)}}}function Be(i){let t,e,l;function s(f,m){return f[0].length>0?ye:Ne}let u=s(i,-1),a=u(i);return{c(){t=b("div"),e=b("p"),e.innerHTML="<strong>Diagrams</strong>",l=w(),a.c(),p(e,"class","subtitle"),p(t,"class","box")},m(f,m){k(f,t,m),v(t,e),v(t,l),a.m(t,null)},p(f,[m]){u===(u=s(f,m))&&a?a.p(f,m):(a.d(1),a=u(f),a&&(a.c(),a.m(t,null)))},i:A,o:A,d(f){f&&S(t),a.d()}}}function Me(i,t,e){let l;E(i,H,c=>e(3,l=c));let{service:s=null}=t,u=[],a=null;function f(c,h){c&&h&&(e(0,u=z(c,h)),u.length>0&&e(1,a=u[0]))}let m=c=>{e(1,a=c)};return i.$$set=c=>{"service"in c&&e(2,s=c.service)},i.$$.update=()=>{if(i.$$.dirty&12){e:f(s,l)}},[u,a,s,l,m]}var G=class extends P{constructor(t){super(),q(this,t,Me,Be,T,{service:2},De)}},_e=G;M();var W=Se(we());function ge(i){let t,e,l;return{c(){t=b("div"),e=b("progress"),p(e,"class","progress is-info is-small"),e.value=i[2],p(e,"max",l=i[0].length),p(t,"class","block")},m(s,u){k(s,t,u),v(t,e)},p(s,u){u&4&&(e.value=s[2]),u&1&&l!==(l=s[0].length)&&p(e,"max",l)},d(s){s&&S(t)}}}function Ae(i){let t,e,l,s,u,a,f,m,c,h,o,r,_=i[1]&&i[2]>=0&&ge(i);return{c(){t=b("div"),e=b("div"),l=b("button"),s=I("Download selected service"),a=w(),f=b("button"),m=I("Download all services"),h=w(),_&&_.c(),p(l,"class",u="button is-primary "+(i[1]?"is-loading":"")),l.disabled=i[1],p(f,"class",c="button is-primary "+(i[1]?"is-loading":"")),f.disabled=i[1],p(e,"class","block"),p(t,"class","box")},m(n,d){k(n,t,d),v(t,e),v(e,l),v(l,s),v(e,a),v(e,f),v(f,m),v(t,h),_&&_.m(t,null),o||(r=[L(l,"click",i[3]),L(f,"click",i[4])],o=!0)},p(n,[d]){d&2&&u!==(u="button is-primary "+(n[1]?"is-loading":""))&&p(l,"class",u),d&2&&(l.disabled=n[1]),d&2&&c!==(c="button is-primary "+(n[1]?"is-loading":""))&&p(f,"class",c),d&2&&(f.disabled=n[1]),n[1]&&n[2]>=0?_?_.p(n,d):(_=ge(n),_.c(),_.m(t,null)):_&&(_.d(1),_=null)},i:A,o:A,d(n){n&&S(t),_&&_.d(),o=!1,Y(r)}}}function Te(i,t,e){let l;E(i,H,r=>e(7,l=r));let{apiName:s=""}=t,{services:u=[]}=t,{selectedService:a=null}=t,f=!1,m=-1;function c(r,_,n){return F(this,void 0,void 0,function*(){for(let d of _){r.file($(`${d.name}.plantuml`),d.uml);let g=yield fetch(d.image);g.ok&&r.file($(`${d.name}.${n}`),yield g.blob())}})}function h(){return F(this,void 0,void 0,function*(){if(e(1,f=!0),e(2,m=-1),a){let r=z(a,l),_=new W.default;yield c(_,r,l.format),yield j(s,_)}e(1,f=!1)})}function o(){return F(this,void 0,void 0,function*(){if(e(1,f=!0),e(2,m=0),u.length>0){let r=new W.default;for(let _ of u){let n=z(_,l);yield c(r,n,l.format),e(2,m++,m)}yield j(s,r)}e(1,f=!1)})}return i.$$set=r=>{"apiName"in r&&e(5,s=r.apiName),"services"in r&&e(0,u=r.services),"selectedService"in r&&e(6,a=r.selectedService)},[u,f,m,h,o,s,a]}var K=class extends P{constructor(t){super(),q(this,t,Te,Ae,T,{apiName:5,services:0,selectedService:6})}},ve=K;function be(i){let t,e,l;return e=new ce({props:{services:i[1],servicesSelectSize:1}}),e.$on("serviceSelect",i[5]),{c(){t=b("div"),O(e.$$.fragment),p(t,"class","box")},m(s,u){k(s,t,u),C(e,t,null),l=!0},p(s,u){let a={};u&2&&(a.services=s[1]),e.$set(a)},i(s){l||(D(e.$$.fragment,s),l=!0)},o(s){N(e.$$.fragment,s),l=!1},d(s){s&&S(t),B(e)}}}function he(i){let t,e,l,s,u,a,f,m,c,h;return t=new _e({props:{service:i[2]}}),f=new me({}),c=new ve({props:{apiName:i[0].getName(),selectedService:i[2],services:i[1]}}),{c(){O(t.$$.fragment),e=w(),l=b("div"),s=b("details"),u=b("summary"),u.textContent="Diagrams generation options",a=w(),O(f.$$.fragment),m=w(),O(c.$$.fragment),p(l,"class","box")},m(o,r){C(t,o,r),k(o,e,r),k(o,l,r),v(l,s),v(s,u),v(s,a),C(f,s,null),k(o,m,r),C(c,o,r),h=!0},p(o,r){let _={};r&4&&(_.service=o[2]),t.$set(_);let n={};r&1&&(n.apiName=o[0].getName()),r&4&&(n.selectedService=o[2]),r&2&&(n.services=o[1]),c.$set(n)},i(o){h||(D(t.$$.fragment,o),D(f.$$.fragment,o),D(c.$$.fragment,o),h=!0)},o(o){N(t.$$.fragment,o),N(f.$$.fragment,o),N(c.$$.fragment,o),h=!1},d(o){B(t,o),o&&S(e),o&&S(l),B(f),o&&S(m),B(c,o)}}}function qe(i){let t,e,l,s,u,a,f,m,c,h,o,r,_;t=new se({props:{activePage:"apiToPlantUml"}}),a=new ue({}),a.$on("apiChange",i[4]);let n=i[1].length>0&&be(i);c=new ne({props:{messages:i[3]}});let d=i[2]&&he(i);return r=new re({}),{c(){O(t.$$.fragment),e=w(),l=b("div"),s=b("section"),s.innerHTML=`<div class="hero-body"><h1 class="title">Api to PlantUML</h1> 
      <p class="subtitle">Generate PlantUML diagram of REST API</p></div>`,u=w(),O(a.$$.fragment),f=w(),n&&n.c(),m=w(),O(c.$$.fragment),h=w(),d&&d.c(),o=w(),O(r.$$.fragment),p(s,"class","hero is-small"),p(l,"class","container")},m(g,y){C(t,g,y),k(g,e,y),k(g,l,y),v(l,s),v(l,u),C(a,l,null),v(l,f),n&&n.m(l,null),v(l,m),C(c,l,null),v(l,h),d&&d.m(l,null),k(g,o,y),C(r,g,y),_=!0},p(g,[y]){g[1].length>0?n?(n.p(g,y),y&2&&D(n,1)):(n=be(g),n.c(),D(n,1),n.m(l,m)):n&&(U(),N(n,1,1,()=>{n=null}),Z());let V={};y&8&&(V.messages=g[3]),c.$set(V),g[2]?d?(d.p(g,y),y&4&&D(d,1)):(d=he(g),d.c(),D(d,1),d.m(l,null)):d&&(U(),N(d,1,1,()=>{d=null}),Z())},i(g){_||(D(t.$$.fragment,g),D(a.$$.fragment,g),D(n),D(c.$$.fragment,g),D(d),D(r.$$.fragment,g),_=!0)},o(g){N(t.$$.fragment,g),N(a.$$.fragment,g),N(n),N(c.$$.fragment,g),N(d),N(r.$$.fragment,g),_=!1},d(g){B(t,g),g&&S(e),g&&S(l),B(a),n&&n.d(),B(c),d&&d.d(),g&&S(o),B(r,g)}}}function Pe(i,t,e){let l=null,s=[],u=null,a=[];function f(c){return F(this,void 0,void 0,function*(){try{e(0,l=null),e(1,s=[]),e(2,u=null),e(3,a=[]);let h=c.detail.apiObject;h&&(e(0,l=oe(h)),l.setModelsTitle(),yield l.resolveReferences(),e(1,s=l.getServices()),s.length===0&&e(3,a=[...a,"Warning: No services found"]))}catch(h){e(3,a=[...a,"Error: "+h.message])}})}function m(c){e(2,u=s[c.detail.selectedServiceIndex])}return le(()=>{ae()}),ie(()=>{fe()}),[l,s,u,a,f,m]}var Q=class extends P{constructor(t){super(),q(this,t,Pe,qe,T,{})}},ke=Q;new ke({target:document.body});X();

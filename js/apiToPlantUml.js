// Project: https://github.com/marc0l92/api-tools
import{a as R,b as ae,c as fe,d as me,e as L}from"./chunk-QGW46RES.js";import"./chunk-THDK2H4Z.js";import{a as j,b as G,e as ue,f as we}from"./chunk-R4RXQNAQ.js";import{c as oe,e as ce}from"./chunk-3GSRCN3G.js";import"./chunk-2JOT6BPF.js";import{c as P,d as ne}from"./chunk-SFSLPUK7.js";import{$ as re,A as ee,B as b,C as F,D as w,F as I,H as p,I as te,M as le,O as ie,R as Z,S as $,T as y,U as D,V as O,W as z,X as C,Y as T,Z as q,_ as se,g as Se,h as B,l as Y,m as M,n as x,o as A,p as U,q as E,w as v,x as H,y as k,z as S}from"./chunk-NE5HTCJ7.js";B();B();B();function ye(i){H(i,"svelte-20lhhh",".diagram-image.svelte-20lhhh{width:auto;max-width:100%}.break-text.svelte-20lhhh{word-break:break-all}")}function de(i,t,e){let l=i.slice();return l[6]=t[e],l}function De(i){let t;return{c(){t=b("p"),t.textContent="The selected service has no request and no responses models",p(t,"class","notification is-warning")},m(e,l){k(e,t,l)},p:M,d(e){e&&S(t)}}}function Ne(i){let t,e,l,r,u,a,f=i[0],m=[];for(let s=0;s<f.length;s+=1)m[s]=pe(de(i,f,s));function c(s,g){return s[1]?ze:Oe}let h=c(i,-1),o=h(i);return{c(){t=b("div"),e=b("div"),l=b("aside"),r=b("ul");for(let s=0;s<m.length;s+=1)m[s].c();u=w(),a=b("div"),o.c(),p(r,"class","menu-list"),p(l,"class","menu"),p(e,"class","column is-one-third"),p(a,"class","column"),p(t,"class","columns")},m(s,g){k(s,t,g),v(t,e),v(e,l),v(l,r);for(let n=0;n<m.length;n+=1)m[n].m(r,null);v(t,u),v(t,a),o.m(a,null)},p(s,g){if(g&3){f=s[0];let n;for(n=0;n<f.length;n+=1){let d=de(s,f,n);m[n]?m[n].p(d,g):(m[n]=pe(d),m[n].c(),m[n].m(r,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=f.length}h===(h=c(s,g))&&o?o.p(s,g):(o.d(1),o=h(s),o&&(o.c(),o.m(a,null)))},d(s){s&&S(t),ee(m,s),o.d()}}}function pe(i){let t,e,l=i[6].name+"",r,u,a,f,m,c;function h(){return i[4](i[6])}return{c(){t=b("li"),e=b("a"),r=F(l),f=w(),p(e,"class",u="break-text "+(i[1]===i[6]?"is-active":"")+" svelte-20lhhh"),p(e,"href",a="#"+i[6].name)},m(o,s){k(o,t,s),v(t,e),v(e,r),v(t,f),m||(c=I(e,"click",h),m=!0)},p(o,s){i=o,s&1&&l!==(l=i[6].name+"")&&te(r,l),s&3&&u!==(u="break-text "+(i[1]===i[6]?"is-active":"")+" svelte-20lhhh")&&p(e,"class",u),s&1&&a!==(a="#"+i[6].name)&&p(e,"href",a)},d(o){o&&S(t),m=!1,c()}}}function Oe(i){let t;return{c(){t=b("p"),t.textContent="No diagram selected",p(t,"class","notification is-warning")},m(e,l){k(e,t,l)},p:M,d(e){e&&S(t)}}}function ze(i){let t,e,l,r,u,a,f,m,c,h,o,s,g,n;return{c(){t=b("div"),e=b("div"),l=b("div"),r=b("textarea"),f=w(),m=b("div"),c=b("a"),h=b("figure"),o=b("img"),p(r,"class","textarea"),r.readOnly=u=!0,r.value=a=i[1].uml,p(l,"class","control"),p(e,"class","field"),p(t,"class","block"),p(o,"class","diagram-image svelte-20lhhh"),U(o.src,s=i[1].image)||p(o,"src",s),p(o,"alt",g=i[1].name),p(h,"class","image"),p(c,"href",n=i[1].image),p(c,"target","_blank"),p(c,"rel","noreferrer"),p(m,"class","block")},m(d,_){k(d,t,_),v(t,e),v(e,l),v(l,r),k(d,f,_),k(d,m,_),v(m,c),v(c,h),v(h,o)},p(d,_){_&2&&a!==(a=d[1].uml)&&(r.value=a),_&2&&!U(o.src,s=d[1].image)&&p(o,"src",s),_&2&&g!==(g=d[1].name)&&p(o,"alt",g),_&2&&n!==(n=d[1].image)&&p(c,"href",n)},d(d){d&&S(t),d&&S(f),d&&S(m)}}}function Ce(i){let t,e,l;function r(f,m){return f[0].length>0?Ne:De}let u=r(i,-1),a=u(i);return{c(){t=b("div"),e=b("p"),e.innerHTML="<strong>Diagrams</strong>",l=w(),a.c(),p(e,"class","subtitle"),p(t,"class","box")},m(f,m){k(f,t,m),v(t,e),v(t,l),a.m(t,null)},p(f,[m]){u===(u=r(f,m))&&a?a.p(f,m):(a.d(1),a=u(f),a&&(a.c(),a.m(t,null)))},i:M,o:M,d(f){f&&S(t),a.d()}}}function Be(i,t,e){let l;E(i,R,c=>e(3,l=c));let{service:r=null}=t,u=[],a=null;function f(c,h){c&&h&&(e(0,u=L(c,h)),u.length>0&&e(1,a=u[0]))}let m=c=>{e(1,a=c)};return i.$$set=c=>{"service"in c&&e(2,r=c.service)},i.$$.update=()=>{if(i.$$.dirty&12){e:f(r,l)}},[u,a,r,l,m]}var J=class extends q{constructor(t){super(),T(this,t,Be,Ce,A,{service:2},ye)}},ge=J;B();var K=Se(we());function _e(i){let t,e,l;return{c(){t=b("div"),e=b("progress"),p(e,"class","progress is-info is-small"),e.value=i[2],p(e,"max",l=i[0].length),p(t,"class","block")},m(r,u){k(r,t,u),v(t,e)},p(r,u){u&4&&(e.value=r[2]),u&1&&l!==(l=r[0].length)&&p(e,"max",l)},d(r){r&&S(t)}}}function Me(i){let t,e,l,r,u,a,f,m,c,h,o,s,g=i[1]&&i[2]>=0&&_e(i);return{c(){t=b("div"),e=b("div"),l=b("button"),r=F("Download selected service"),a=w(),f=b("button"),m=F("Download all services"),h=w(),g&&g.c(),p(l,"class",u="button is-primary "+(i[1]?"is-loading":"")),l.disabled=i[1],p(f,"class",c="button is-primary "+(i[1]?"is-loading":"")),f.disabled=i[1],p(e,"class","block"),p(t,"class","box")},m(n,d){k(n,t,d),v(t,e),v(e,l),v(l,r),v(e,a),v(e,f),v(f,m),v(t,h),g&&g.m(t,null),o||(s=[I(l,"click",i[3]),I(f,"click",i[4])],o=!0)},p(n,[d]){d&2&&u!==(u="button is-primary "+(n[1]?"is-loading":""))&&p(l,"class",u),d&2&&(l.disabled=n[1]),d&2&&c!==(c="button is-primary "+(n[1]?"is-loading":""))&&p(f,"class",c),d&2&&(f.disabled=n[1]),n[1]&&n[2]>=0?g?g.p(n,d):(g=_e(n),g.c(),g.m(t,null)):g&&(g.d(1),g=null)},i:M,o:M,d(n){n&&S(t),g&&g.d(),o=!1,x(s)}}}function Ae(i,t,e){let l;E(i,R,s=>e(7,l=s));let{apiName:r=""}=t,{services:u=[]}=t,{selectedService:a=null}=t,f=!1,m=-1;function c(s,g,n){return P(this,void 0,void 0,function*(){for(let d of g){s.file(j(`${d.name}.plantuml`),d.uml);let _=yield fetch(d.image);_.ok&&s.file(j(`${d.name}.${n}`),yield _.blob())}})}function h(){return P(this,void 0,void 0,function*(){if(e(1,f=!0),e(2,m=-1),a){let s=L(a,l),g=new K.default;yield c(g,s,l.format),yield G(r,g)}e(1,f=!1)})}function o(){return P(this,void 0,void 0,function*(){if(e(1,f=!0),e(2,m=0),u.length>0){let s=new K.default;for(let g of u){let n=L(g,l);yield c(s,n,l.format),e(2,m++,m)}yield G(r,s)}e(1,f=!1)})}return i.$$set=s=>{"apiName"in s&&e(5,r=s.apiName),"services"in s&&e(0,u=s.services),"selectedService"in s&&e(6,a=s.selectedService)},[u,f,m,h,o,r,a]}var Q=class extends q{constructor(t){super(),T(this,t,Ae,Me,A,{apiName:5,services:0,selectedService:6})}},ve=Q;function Te(i){H(i,"svelte-1gzs1yt",".hero.is-small.svelte-1gzs1yt .hero-body.svelte-1gzs1yt{padding-left:0;padding-right:0}")}function be(i){let t,e,l;return e=new ce({props:{services:i[1],servicesSelectSize:1}}),e.$on("serviceSelect",i[5]),{c(){t=b("div"),O(e.$$.fragment),p(t,"class","box")},m(r,u){k(r,t,u),z(e,t,null),l=!0},p(r,u){let a={};u&2&&(a.services=r[1]),e.$set(a)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){D(e.$$.fragment,r),l=!1},d(r){r&&S(t),C(e)}}}function he(i){let t,e,l,r,u,a,f,m,c,h;return t=new ge({props:{service:i[2]}}),f=new me({}),c=new ve({props:{apiName:i[0].getName(),selectedService:i[2],services:i[1]}}),{c(){O(t.$$.fragment),e=w(),l=b("div"),r=b("details"),u=b("summary"),u.textContent="Diagrams generation options",a=w(),O(f.$$.fragment),m=w(),O(c.$$.fragment),p(l,"class","box")},m(o,s){z(t,o,s),k(o,e,s),k(o,l,s),v(l,r),v(r,u),v(r,a),z(f,r,null),k(o,m,s),z(c,o,s),h=!0},p(o,s){let g={};s&4&&(g.service=o[2]),t.$set(g);let n={};s&1&&(n.apiName=o[0].getName()),s&4&&(n.selectedService=o[2]),s&2&&(n.services=o[1]),c.$set(n)},i(o){h||(y(t.$$.fragment,o),y(f.$$.fragment,o),y(c.$$.fragment,o),h=!0)},o(o){D(t.$$.fragment,o),D(f.$$.fragment,o),D(c.$$.fragment,o),h=!1},d(o){C(t,o),o&&S(e),o&&S(l),C(f),o&&S(m),C(c,o)}}}function qe(i){let t,e,l,r,u,a,f,m,c,h,o,s,g;t=new re({props:{activePage:"apiToPlantUml"}}),a=new ue({}),a.$on("apiChange",i[4]);let n=i[1].length>0&&be(i);c=new ne({props:{messages:i[3]}});let d=i[2]&&he(i);return s=new se({}),{c(){O(t.$$.fragment),e=w(),l=b("div"),r=b("section"),r.innerHTML=`<div class="hero-body svelte-1gzs1yt"><h1 class="title">Api to PlantUML</h1> 
      <p class="subtitle">Generate PlantUML diagram of REST API</p></div>`,u=w(),O(a.$$.fragment),f=w(),n&&n.c(),m=w(),O(c.$$.fragment),h=w(),d&&d.c(),o=w(),O(s.$$.fragment),p(r,"class","hero is-small svelte-1gzs1yt"),p(l,"class","container")},m(_,N){z(t,_,N),k(_,e,N),k(_,l,N),v(l,r),v(l,u),z(a,l,null),v(l,f),n&&n.m(l,null),v(l,m),z(c,l,null),v(l,h),d&&d.m(l,null),k(_,o,N),z(s,_,N),g=!0},p(_,[N]){_[1].length>0?n?(n.p(_,N),N&2&&y(n,1)):(n=be(_),n.c(),y(n,1),n.m(l,m)):n&&(Z(),D(n,1,1,()=>{n=null}),$());let X={};N&8&&(X.messages=_[3]),c.$set(X),_[2]?d?(d.p(_,N),N&4&&y(d,1)):(d=he(_),d.c(),y(d,1),d.m(l,null)):d&&(Z(),D(d,1,1,()=>{d=null}),$())},i(_){g||(y(t.$$.fragment,_),y(a.$$.fragment,_),y(n),y(c.$$.fragment,_),y(d),y(s.$$.fragment,_),g=!0)},o(_){D(t.$$.fragment,_),D(a.$$.fragment,_),D(n),D(c.$$.fragment,_),D(d),D(s.$$.fragment,_),g=!1},d(_){C(t,_),_&&S(e),_&&S(l),C(a),n&&n.d(),C(c),d&&d.d(),_&&S(o),C(s,_)}}}function Pe(i,t,e){let l=null,r=[],u=null,a=[];function f(c){return P(this,void 0,void 0,function*(){try{e(0,l=null),e(1,r=[]),e(2,u=null),e(3,a=[]);let h=c.detail.apiObject;h&&(e(0,l=oe(h)),l.setModelsTitle(),yield l.resolveReferences(),e(1,r=l.getServices()),r.length===0&&e(3,a=[...a,"Warning: No services found"]))}catch(h){e(3,a=[...a,"Error: "+h.message])}})}function m(c){e(2,u=r[c.detail.selectedServiceIndex])}return le(()=>{ae()}),ie(()=>{fe()}),[l,r,u,a,f,m]}var V=class extends q{constructor(t){super(),T(this,t,Pe,qe,A,{},Te)}},ke=V;new ke({target:document.body});Y();

// Project: https://github.com/marc0l92/api-portal
import{$ as A,A as r,C as g,D as k,E as G,F as u,G as O,H as w,M as c,aa as F,ca as P,da as R,ea as S,fa as I,ga as J,h as H,ha as K,i as z,l as q,n as B,o as N,r as D,sa as M,t as E,ta as Q}from"./chunk-DD7ECPPK.js";H();H();function T(o,t,s){let l=o.slice();return l[1]=t[s],l}function X(o){let t,s,l;return{c(){t=u("span"),s=u("i"),c(s,"class",l=o[1].icon),c(t,"class","icon")},m(i,m){g(i,t,m),r(t,s)},p:N,d(i){i&&k(t)}}}function Y(o){let t,s=o[1].subtitle+"",l;return{c(){t=u("p"),l=O(s),c(t,"class","subtitle is-6")},m(i,m){g(i,t,m),r(t,l)},p:N,d(i){i&&k(t)}}}function Z(o){let t,s=o[1].description+"",l;return{c(){t=u("div"),l=O(s),c(t,"class","content")},m(i,m){g(i,t,m),r(t,l)},p:N,d(i){i&&k(t)}}}function U(o){let t,s,l,i,m,d,_,b,L=o[1].title+"",y,v,h,$,f,e=o[1].icon&&X(o),a=o[1].subtitle&&Y(o),n=o[1].description&&Z(o);return{c(){t=u("div"),s=u("a"),l=u("div"),i=u("div"),m=u("div"),d=u("div"),_=u("p"),e&&e.c(),b=w(),y=O(L),v=w(),a&&a.c(),h=w(),n&&n.c(),f=w(),c(_,"class","title is-4"),c(d,"class","media-content"),c(m,"class","media"),c(i,"class","card-content"),c(l,"class","card"),c(s,"href",$=o[1].link),c(s,"target","_blank"),c(s,"rel","noreferrer"),c(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(p,C){g(p,t,C),r(t,s),r(s,l),r(l,i),r(i,m),r(m,d),r(d,_),e&&e.m(_,null),r(_,b),r(_,y),r(d,v),a&&a.m(d,null),r(i,h),n&&n.m(i,null),r(t,f)},p(p,C){p[1].icon&&e.p(p,C),p[1].subtitle&&a.p(p,C),p[1].description&&n.p(p,C)},d(p){p&&k(t),e&&e.d(),a&&a.d(),n&&n.d()}}}function x(o){let t,s,l,i,m,d,_,b,L,y,v,h;t=new Q({props:{activePage:"home"}});let $=q(),f=[];for(let e=0;e<$.length;e+=1)f[e]=U(T(o,$,e));return v=new K({}),{c(){P(t.$$.fragment),s=w(),l=u("div"),i=u("section"),m=u("div"),d=u("h1"),d.textContent=`${z()}`,_=w(),b=u("div");for(let e=0;e<f.length;e+=1)f[e].c();y=w(),P(v.$$.fragment),c(d,"class","title"),c(m,"class","hero-body"),c(i,"class","hero is-small"),c(b,"class","columns is-multiline"),c(l,"class",L="container "+(o[0].fluidLayout?"is-fluid":""))},m(e,a){R(t,e,a),g(e,s,a),g(e,l,a),r(l,i),r(i,m),r(m,d),r(l,_),r(l,b);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(b,null);g(e,y,a),R(v,e,a),h=!0},p(e,[a]){if(a&0){$=q();let n;for(n=0;n<$.length;n+=1){let p=T(e,$,n);f[n]?f[n].p(p,a):(f[n]=U(p),f[n].c(),f[n].m(b,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=$.length}(!h||a&1&&L!==(L="container "+(e[0].fluidLayout?"is-fluid":"")))&&c(l,"class",L)},i(e){h||(A(t.$$.fragment,e),A(v.$$.fragment,e),h=!0)},o(e){F(t.$$.fragment,e),F(v.$$.fragment,e),h=!1},d(e){S(t,e),e&&k(s),e&&k(l),G(f,e),e&&k(y),S(v,e)}}}function ee(o,t,s){let l;return E(o,M,i=>s(0,l=i)),[l]}var j=class extends J{constructor(t){super(),I(this,t,ee,x,D,{})}},V=j;new V({target:document.body});B();

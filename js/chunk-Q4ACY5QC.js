// Project: https://github.com/marc0l92/api-tools
import{M as k,N as q,i as f,k as d,n as o,p as u,q as h,r as p,s as r,t as v,u as x,x as m,y as b}from"./chunk-7SHNLHGV.js";function C(a,n,i){let s=a.slice();return s[1]=n[i],s}function S(a){let n,i,s=a[1]+"",e,l;return{c(){n=r("li"),i=r("pre"),e=v(s),l=x(),m(n,"class","notification is-danger is-small")},m(c,t){u(c,n,t),o(n,i),o(i,e),o(n,l)},p(c,t){t&1&&s!==(s=c[1]+"")&&b(e,s)},d(c){c&&h(n)}}}function j(a){let n,i,s=a[0],e=[];for(let l=0;l<s.length;l+=1)e[l]=S(C(a,s,l));return{c(){n=r("div"),i=r("ul");for(let l=0;l<e.length;l+=1)e[l].c();m(n,"class","box")},m(l,c){u(l,n,c),o(n,i);for(let t=0;t<e.length;t+=1)e[t].m(i,null)},p(l,[c]){if(c&1){s=l[0];let t;for(t=0;t<s.length;t+=1){let g=C(l,s,t);e[t]?e[t].p(g,c):(e[t]=S(g),e[t].c(),e[t].m(i,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=s.length}},i:f,o:f,d(l){l&&h(n),p(e,l)}}}function w(a,n,i){let{messages:s=[]}=n;return a.$$set=e=>{"messages"in e&&i(0,s=e.messages)},[s]}var _=class extends q{constructor(n){super(),k(this,n,w,j,d,{messages:0})}},z=_;export{z as a};

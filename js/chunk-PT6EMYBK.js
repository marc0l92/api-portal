// Project: https://github.com/marc0l92/api-tools
import{A as u,B as _,C as v,D as r,E as b,F as k,G as q,K as m,L as C,aa as N,ba as S,h as g,n as h,q as p,y as o}from"./chunk-O7STRZLD.js";g();function j(c,i,e){let l=c.slice();return l[2]=i[e],l}function w(c){let i,e,l=c[0],t=[];for(let n=0;n<l.length;n+=1)t[n]=x(j(c,l,n));return{c(){i=r("div"),e=r("ul");for(let n=0;n<t.length;n+=1)t[n].c();m(i,"class","box")},m(n,f){u(n,i,f),o(i,e);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(n,f){if(f&3){l=n[0];let s;for(s=0;s<l.length;s+=1){let a=j(n,l,s);t[s]?t[s].p(a,f):(t[s]=x(a),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(n){n&&_(i),v(t,n)}}}function x(c){let i,e,l=c[2]+"",t,n,f;return{c(){i=r("li"),e=r("pre"),t=b(l),n=k(),m(i,"class",f="notification is-"+c[1]+" is-small")},m(s,a){u(s,i,a),o(i,e),o(e,t),o(i,n)},p(s,a){a&1&&l!==(l=s[2]+"")&&C(t,l),a&2&&f!==(f="notification is-"+s[1]+" is-small")&&m(i,"class",f)},d(s){s&&_(i)}}}function y(c){let i,e=c[0].length>0&&w(c);return{c(){e&&e.c(),i=q()},m(l,t){e&&e.m(l,t),u(l,i,t)},p(l,[t]){l[0].length>0?e?e.p(l,t):(e=w(l),e.c(),e.m(i.parentNode,i)):e&&(e.d(1),e=null)},i:h,o:h,d(l){e&&e.d(l),l&&_(i)}}}function z(c,i,e){let{messages:l=[]}=i,{level:t="danger"}=i;return c.$$set=n=>{"messages"in n&&e(0,l=n.messages),"level"in n&&e(1,t=n.level)},[l,t]}var d=class extends S{constructor(i){super(),N(this,i,z,y,p,{messages:0,level:1})}},D=d;export{D as a};

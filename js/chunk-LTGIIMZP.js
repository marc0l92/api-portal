// Project: https://github.com/marc0l92/api-tools
import{A as _,B as b,C as x,D as u,E as k,F as w,H as y,K as p,L as z,N as O,O as N,Q as I,S as L,U as B,aa as C,ba as E,h as q,n as P,q as j,y as m,z as M}from"./chunk-G7MV4BHC.js";q();function U(e){M(e,"svelte-q3ocdf",".select.is-expanded.svelte-q3ocdf.svelte-q3ocdf{width:100%}.select.is-expanded.svelte-q3ocdf>select.svelte-q3ocdf{width:100%}.select.is-multiple.svelte-q3ocdf>select.svelte-q3ocdf{height:auto;padding:0}.select.is-multiple.svelte-q3ocdf option.svelte-q3ocdf{padding:0.3em 1em}")}function G(e,s,r){let t=e.slice();return t[5]=s[r],t[7]=r,t}function H(e){let s,r=e[5].getName()+"",t,a;return{c(){s=u("option"),t=k(r),s.__value=a=e[7],s.value=s.__value,p(s,"class","svelte-q3ocdf")},m(i,l){_(i,s,l),m(s,t)},p(i,l){l&1&&r!==(r=i[5].getName()+"")&&z(t,r)},d(i){i&&b(s)}}}function W(e){let s,r,t,a,i,l,g,d,D,v=e[0],c=[];for(let n=0;n<v.length;n+=1)c[n]=H(G(e,v,n));return{c(){s=u("p"),s.innerHTML="<strong>Services</strong>",r=w(),t=u("div"),a=u("div"),i=u("div"),l=u("select");for(let n=0;n<c.length;n+=1)c[n].c();p(s,"class","subtitle"),p(l,"size",e[1]),p(l,"class","svelte-q3ocdf"),e[2]===void 0&&B(()=>e[3].call(l)),p(i,"class",g="select is-expanded "+(e[1]>1?"is-multiple":"")+" svelte-q3ocdf"),p(a,"class","control"),p(t,"class","field")},m(n,f){_(n,s,f),_(n,r,f),_(n,t,f),m(t,a),m(a,i),m(i,l);for(let o=0;o<c.length;o+=1)c[o]&&c[o].m(l,null);O(l,e[2],!0),d||(D=y(l,"change",e[3]),d=!0)},p(n,[f]){if(f&1){v=n[0];let o;for(o=0;o<v.length;o+=1){let S=G(n,v,o);c[o]?c[o].p(S,f):(c[o]=H(S),c[o].c(),c[o].m(l,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=v.length}f&2&&p(l,"size",n[1]),f&4&&O(l,n[2]),f&2&&g!==(g="select is-expanded "+(n[1]>1?"is-multiple":"")+" svelte-q3ocdf")&&p(i,"class",g)},i:P,o:P,d(n){n&&b(s),n&&b(r),n&&b(t),x(c,n),d=!1,D()}}}function F(e,s,r){let{services:t=[]}=s,{servicesSelectSize:a=8}=s,i=0,l=L();I(()=>{l("serviceSelect",{selectedServiceIndex:i})});function g(){i=N(this),r(2,i)}return e.$$set=d=>{"services"in d&&r(0,t=d.services),"servicesSelectSize"in d&&r(1,a=d.servicesSelectSize)},[t,a,i,g]}var A=class extends E{constructor(s){super(),C(this,s,F,W,j,{services:0,servicesSelectSize:1},U)}},Q=A;q();var h=(e,s="")=>{if(!e)return e;for(let r in e)if(r==="allOf"){if(e[r].length===1)e=Object.assign({},h(e[r][0]),e),delete e.allOf;else{let t=Object.assign({},e,{type:"object",required:[],properties:{}});delete t.allOf;for(let a in e[r]){let i=h(e[r][a],s+"/["+a+"]");!t.title&&i.title&&(t.title=i.title),"properties"in i&&Object.assign(t.properties,i.properties),"required"in i&&(t.required=t.required.concat(i.required)),"additionalProperties"in i&&typeof i.additionalProperties=="object"&&Object.assign(t.additionalProperties,i.additionalProperties),"minProperties"in i&&("minProperties"in t?t.minProperties+=i.minProperties:t.minProperties=i.minProperties),"maxProperties"in i&&console.warn("WARNING: maxProperties not supported while merging allOf definitions")}t.required.length===0?delete t.required:t.required=[...new Set([...t.required])],Object.keys(t.properties).length===0&&delete t.properties,e=t}break}if("properties"in e)for(let r in e.properties)e.properties[r]=h(e.properties[r],s+"/"+r);else"items"in e?e.items=h(e.items,s+"[]"):"additionalProperties"in e&&typeof e.additionalProperties=="object"&&(e.additionalProperties=h(e.additionalProperties));return e};export{h as a,Q as b};
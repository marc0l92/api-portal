// Project: https://github.com/marc0l92/api-tools
import{h as f,o,q as b}from"./chunk-CK7JNY37.js";f();var n=[];function q(s,l=o){let i,r=new Set;function u(t){if(b(s,t)&&(s=t,i)){let c=!n.length;for(let e of r)e[1](),n.push(e,s);if(c){for(let e=0;e<n.length;e+=2)n[e][0](n[e+1]);n.length=0}}}function a(t){u(t(s))}function p(t,c=o){let e=[t,c];return r.add(e),r.size===1&&(i=l(u)||o),t(s),()=>{r.delete(e),r.size===0&&(i(),i=null)}}return{set:u,update:a,subscribe:p}}export{q as a};

// Project: https://github.com/marc0l92/api-portal
import{a as be}from"./chunk-NLYUMGMV.js";import{d as Pe,l as ge}from"./chunk-GGBUZBTM.js";import"./chunk-KH7MCBP5.js";import{a as fe}from"./chunk-6NTOL2IZ.js";import{$ as M,A as Q,B as y,C as v,D as Z,E as _,F as R,G as A,H as X,I as ee,J as _e,L as h,M as P,Q as qe,T as Re,W as z,X as j,Y as b,Z as C,_ as N,aa as q,ba as G,ca as J,da as Ie,ga as se,h as I,n as Se,o as H,oa as ze,p as Ne,pa as je,q as de,r as V,t as Me,z as m}from"./chunk-E6WZCZXE.js";I();I();I();I();I();var K={["Added"]:"is-success",["Modified"]:"is-warning",["Removed"]:"is-danger",["No Changes"]:"is-light"},ne=["title","type","example","minLength","maxLength","minItems","maxItems","minProperties","maxProperties","pattern","format","enum","description","required","additionalProperties","readOnly","writeOnly","allowEmptyValue","collectionFormat","default","maximum","minimum","exclusiveMaximum","exclusiveMinimum","uniqueItems","multipleOf"];I();var ae=(l,e,i)=>i===0&&(e===null||l!==null&&l>=e)||i===1&&(l===null||e!==null&&l<=e),re=(l,e,i)=>i===0&&(e===null||l!==null&&l<=e)||i===1&&(l===null||e!==null&&l>=e),Ft=(l,e)=>e!==null&&l===e,te=(l,e)=>e===null||l===e,oe=()=>!0,Le={title:oe,example:oe,description:oe,type:Ft,minLength:ae,maxLength:re,minItems:ae,maxItems:re,minProperties:ae,maxProperties:re,minimum:ae,maximum:re,exclusiveMinimum:(l,e,i)=>e===l||i!==0&&e!==!0||i!==1&&e===!0,exclusiveMaximum:(l,e,i)=>e===l||i!==0&&e!==!0||i!==1&&e===!0,pattern:te,format:te,collectionFormat:te,multipleOf:te,uniqueItems:te,default:oe,allowEmptyValue:(l,e,i,t)=>e===null||e!==t||l===e,enum:(l,e,i)=>i===1||e===null||l!==null&&l.every(t=>e.indexOf(t)!==-1),required:(l,e,i)=>i===0&&(e===null||l!==null&&e.every(t=>l.indexOf(t)!==-1))||i===1&&(l===null||e!==null&&l.every(t=>e.indexOf(t)!==-1)),readOnly:(l,e,i,t)=>i===1||t===!1||l!==!0||e===!0,writeOnly:(l,e,i,t)=>i===0||t===!1||e!==!0||l===!0,additionalProperties:(l,e,i)=>i===1||e!==!0||l===!0},he=(l,e,i)=>l==="No Changes"||i===!1||e===0&&l==="Removed"||e===1&&l==="Added";function Je(l,e){let i={isBackwardCompatible:!0,metadata:[],services:{}};i.metadata=ce(He(l),He(e)).items;let t=e.getServices();for(let s of l.getServices()){let f=t.findIndex(a=>a.getName()===s.getName());if(f>=0){let a=t[f],n={diffType:"Modified",isBackwardCompatible:!0,metadata:{isBackwardCompatible:!0,items:[]},parameters:{isBackwardCompatible:!0,items:[]},request:{isBackwardCompatible:!0,items:[]},responses:{}};n.metadata=ce(Ve(s),Ve(a)),n.parameters=Ht(s.getRequestParameters(),a.getRequestParameters()),n.request=ke(s.getRequest(),a.getRequest(),0),n.responses=Vt(s.getResponses(),a.getResponses()),(n.metadata.items.length||n.parameters.items.length||n.request.items.length||n.request.model&&n.request.model.diffType!=="No Changes"||Object.keys(n.responses).length)&&(n.isBackwardCompatible&&(n.isBackwardCompatible=n.metadata.isBackwardCompatible&&n.parameters.isBackwardCompatible&&n.request.isBackwardCompatible&&Object.values(n.responses).every(r=>r.isBackwardCompatible)),i.isBackwardCompatible&&(i.isBackwardCompatible=n.isBackwardCompatible),i.services[s.getName()]=n),t.splice(f,1)}else i.isBackwardCompatible=!1,i.services[s.getName()]={diffType:"Removed",isBackwardCompatible:!1}}for(let s of t)i.services[s.getName()]={diffType:"Added",isBackwardCompatible:!0};return i}function He(l){return Object.fromEntries(Object.entries(l.toJson()).filter(([e,i])=>["paths","definitions","responses","parameters","components"].indexOf(e)===-1))}function Ve(l){return Object.fromEntries(Object.entries(l.toJson()).filter(([e,i])=>["parameters","responses","requestBody"].indexOf(e)===-1))}function Ge(l){return Object.fromEntries(Object.entries(l).filter(([e,i])=>["schema"].indexOf(e)===-1))}function pe(l,e,i){return i?`${l}[${e}]`:`${l}/${e}`}function Lt(l,e){if(l===e)return"No Changes";if(l==null)return"Added";if(e==null)return"Removed";if(Array.isArray(l)&&Array.isArray(e)){let i=e.slice().sort();if(l.length===e.length&&l.slice().sort().every((t,s)=>t===i[s]))return"No Changes"}return"Modified"}function ce(l,e,i="",t=[]){let s={isBackwardCompatible:!0,items:[]},f=Object.keys(e);for(let a of Object.keys(l)){let n=f.indexOf(a);if(n>=0){if(typeof l[a]=="object"&&typeof e[a]=="object"){let r=ce(l[a],e[a],pe(i,a,Array.isArray(l)),t);s.isBackwardCompatible&&(s.isBackwardCompatible=r.isBackwardCompatible),s.items=s.items.concat(r.items)}else if(l[a]!==e[a]){let r=pe(i,a,Array.isArray(l)),p=t.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:r,diffType:"Modified",leftValue:l[a],rightValue:e[a],isBackwardCompatible:p})}f.splice(n,1)}else{let r=pe(i,a,Array.isArray(l)),p=t.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:r,diffType:"Removed",leftValue:l[a],isBackwardCompatible:p})}}for(let a of f){let n=pe(i,a,Array.isArray(e)),r=t.indexOf(n)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=r),s.items.push({path:n,diffType:"Added",rightValue:e[a],isBackwardCompatible:r})}return s}function Ht(l,e){let i={isBackwardCompatible:!0,items:[]},t=Object.keys(e).map(s=>parseInt(s));for(let s of l){let f=e.findIndex(a=>a.name===s.name&&a.in===s.in);if(f>=0){let a=e[f],n=ke(s,a,0);i.isBackwardCompatible&&(i.isBackwardCompatible=n.isBackwardCompatible),i.items=i.items.concat(n.items),t.splice(t.indexOf(f),1)}else i.isBackwardCompatible=!1,i.items.push({path:s["x-path"],diffType:"Removed",leftValue:s,isBackwardCompatible:!1})}for(let s of t){let f=e[s];i.items.push({path:f["x-path"],diffType:"Added",rightValue:f,isBackwardCompatible:!0})}return i}function ke(l,e,i){let t={isBackwardCompatible:!0,items:[]};if(!l&&!e)return t;if(!l&&e)return{items:[{path:e["x-path"],diffType:"Added",rightValue:e,isBackwardCompatible:!0}],isBackwardCompatible:!0};if(l&&!e)return{items:[{path:l["x-path"],diffType:"Removed",rightValue:l,isBackwardCompatible:!1}],isBackwardCompatible:!1};let s=["in","name","type","required","schema"];t=ce(Ge(l),Ge(e),l["x-path"],s);let f=ie(l.schema,e.schema,i);return f.diffType!=="No Changes"&&(t.model=f,t.isBackwardCompatible&&(t.isBackwardCompatible=f.isBackwardCompatible)),t}function Vt(l,e){let i={},t=Object.keys(e);for(let s of Object.keys(l)){let f=l[s],a=t.indexOf(s);if(a>=0){let n=e[s],r=ke(f,n,1);(r.items.length||r.model)&&(i[s]=r),t.splice(a,1)}else i[s]={items:[{path:f["x-path"],diffType:"Removed",rightValue:f,isBackwardCompatible:!1}],isBackwardCompatible:!1}}for(let s of t){let f=e[s];i[s]={items:[{path:f["x-path"],diffType:"Added",rightValue:f,isBackwardCompatible:!0}],isBackwardCompatible:!0}}return i}function ie(l,e,i,t=!1){var f,a;if(!l&&!e)return{diffType:"No Changes",isBackwardCompatible:!0};if(!l&&e)return Object.assign({diffType:"Added",isBackwardCompatible:he("Added",i,t)},e);if(l&&!e)return Object.assign({diffType:"Removed",isBackwardCompatible:he("Removed",i,t)},l);let s={isBackwardCompatible:!0,diffType:"No Changes",properties:{}};for(let n of ne){let r={diffType:Lt(l[n],e[n]),isBackwardCompatible:Le[n]((f=l[n])!=null?f:null,(a=e[n])!=null?a:null,i,t),leftValue:l[n],rightValue:e[n]};r.diffType!=="No Changes"&&(s[n]=r,s.isBackwardCompatible&&(s.isBackwardCompatible=r.isBackwardCompatible),s.diffType="Modified")}if(l.items!==e.items&&(s.items=ie(l.items,e.items,i),s.items.diffType!=="No Changes"&&(s.diffType="Modified")),l.properties!==e.properties){let n=l.required||[],r=e.properties?Object.keys(e.properties):[];if(l.properties)for(let o in l.properties){let d=n.indexOf(o)!==-1,c=r.indexOf(o);if(c!==-1){r.splice(c,1);let u=ie(l.properties[o],e.properties[o],i,d);u.diffType!=="No Changes"&&(s.properties[o]=u,s.diffType="Modified")}else s.properties[o]=ie(l.properties[o],null,i,d),s.diffType="Modified"}let p=e.required||[];for(let o of r){let d=p.indexOf(o)!==-1;s.properties[o]=ie(null,e.properties[o],i,d)}r.length>0&&(s.diffType="Modified")}return Object.keys(s.properties).length===0&&delete s.properties,s}I();I();function Gt(l){Q(l,"svelte-p30usc",".longText.svelte-p30usc{cursor:pointer;word-break:break-all}")}function Jt(l){let e,i;return{c(){e=_("div"),i=R(l[1])},m(t,s){y(t,e,s),m(e,i)},p(t,s){s&2&&P(i,t[1])},d(t){t&&v(e)}}}function Ut(l){let e,i=(l[2]?l[1]:l[3])+"",t,s,f;return{c(){e=_("div"),t=R(i),h(e,"class","longText svelte-p30usc"),h(e,"title","Double click to expand")},m(a,n){y(a,e,n),m(e,t),s||(f=ee(e,"dblclick",l[4]),s=!0)},p(a,n){n&14&&i!==(i=(a[2]?a[1]:a[3])+"")&&P(t,i)},d(a){a&&v(e),s=!1,f()}}}function Kt(l){let e;function i(f,a){return f[1].length>f[0]?Ut:Jt}let t=i(l,-1),s=t(l);return{c(){s.c(),e=X()},m(f,a){s.m(f,a),y(f,e,a)},p(f,[a]){t===(t=i(f,a))&&s?s.p(f,a):(s.d(1),s=t(f),s&&(s.c(),s.m(e.parentNode,e)))},i:H,o:H,d(f){s.d(f),f&&v(e)}}}function Qt(l,e,i){let{maxLength:t=30}=e,{text:s}=e,{keepEnd:f=!1}=e,a=!1,n="";function r(){i(2,a=!a)}return l.$$set=p=>{"maxLength"in p&&i(0,t=p.maxLength),"text"in p&&i(1,s=p.text),"keepEnd"in p&&i(5,f=p.keepEnd)},l.$$.update=()=>{if(l.$$.dirty&35)e:s&&(s.length>t?f?i(3,n="..."+s.substring(s.length-t)):i(3,n=s.substring(0,t)+"..."):i(3,n=s))},[t,s,a,n,r,f]}var ye=class extends J{constructor(e){super(),G(this,e,Qt,Kt,V,{maxLength:0,text:1,keepEnd:5},Gt)}},me=ye;function Xt(l){Q(l,"svelte-zx4u3q",".diff-table-container.svelte-zx4u3q.svelte-zx4u3q{overflow-x:auto;max-width:100%}.diff-table-container.svelte-zx4u3q .is-fullwidth.svelte-zx4u3q{width:calc(100% - 1px)}.diff-table-container.svelte-zx4u3q.svelte-zx4u3q:not(:last-child){margin-bottom:1em}")}function Ue(l,e,i){let t=l.slice();return t[1]=e[i],t}function Ke(l){let e,i,t,s,f,a,n=l[0],r=[];for(let o=0;o<n.length;o+=1)r[o]=Xe(Ue(l,n,o));let p=o=>C(r[o],1,1,()=>{r[o]=null});return{c(){e=_("div"),i=_("table"),t=_("thead"),t.innerHTML=`<tr><th>Type</th> 
                    <th>Location</th> 
                    <th>Left Value</th> 
                    <th>Right Value</th></tr>`,s=A(),f=_("tbody");for(let o=0;o<r.length;o+=1)r[o].c();h(i,"class","table is-bordered is-striped is-narrow is-hoverable is-fullwidth svelte-zx4u3q"),h(e,"class","diff-table-container svelte-zx4u3q")},m(o,d){y(o,e,d),m(e,i),m(i,t),m(i,s),m(i,f);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(f,null);a=!0},p(o,d){if(d&1){n=o[0];let c;for(c=0;c<n.length;c+=1){let u=Ue(o,n,c);r[c]?(r[c].p(u,d),b(r[c],1)):(r[c]=Xe(u),r[c].c(),b(r[c],1),r[c].m(f,null))}for(z(),c=n.length;c<r.length;c+=1)p(c);j()}},i(o){if(!a){for(let d=0;d<n.length;d+=1)b(r[d]);a=!0}},o(o){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)C(r[d]);a=!1},d(o){o&&v(e),Z(r,o)}}}function Qe(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function Xe(l){let e,i,t,s,f=l[1].diffType+"",a,n,r,p,o,d,c,u,g,O,k,T,D,w=!l[1].isBackwardCompatible&&Qe(l);return o=new me({props:{text:l[1].path||"",maxLength:Yt,keepEnd:!0}}),u=new me({props:{text:l[1].leftValue?JSON.stringify(l[1].leftValue):"",maxLength:We}}),k=new me({props:{text:l[1].rightValue?JSON.stringify(l[1].rightValue):"",maxLength:We}}),{c(){e=_("tr"),i=_("td"),t=_("span"),w&&w.c(),s=A(),a=R(f),r=A(),p=_("td"),N(o.$$.fragment),d=A(),c=_("td"),N(u.$$.fragment),g=A(),O=_("td"),N(k.$$.fragment),T=A(),h(t,"class",n="tag "+K[l[1].diffType]+" svelte-zx4u3q")},m($,E){y($,e,E),m(e,i),m(i,t),w&&w.m(t,null),m(t,s),m(t,a),m(e,r),m(e,p),M(o,p,null),m(e,d),m(e,c),M(u,c,null),m(e,g),m(e,O),M(k,O,null),m(e,T),D=!0},p($,E){$[1].isBackwardCompatible?w&&(w.d(1),w=null):w||(w=Qe($),w.c(),w.m(t,s)),(!D||E&1)&&f!==(f=$[1].diffType+"")&&P(a,f),(!D||E&1&&n!==(n="tag "+K[$[1].diffType]+" svelte-zx4u3q"))&&h(t,"class",n);let B={};E&1&&(B.text=$[1].path||""),o.$set(B);let L={};E&1&&(L.text=$[1].leftValue?JSON.stringify($[1].leftValue):""),u.$set(L);let Y={};E&1&&(Y.text=$[1].rightValue?JSON.stringify($[1].rightValue):""),k.$set(Y)},i($){D||(b(o.$$.fragment,$),b(u.$$.fragment,$),b(k.$$.fragment,$),D=!0)},o($){C(o.$$.fragment,$),C(u.$$.fragment,$),C(k.$$.fragment,$),D=!1},d($){$&&v(e),w&&w.d(),q(o),q(u),q(k)}}}function Wt(l){let e,i,t=l[0]&&l[0].length>0&&Ke(l);return{c(){t&&t.c(),e=X()},m(s,f){t&&t.m(s,f),y(s,e,f),i=!0},p(s,[f]){s[0]&&s[0].length>0?t?(t.p(s,f),f&1&&b(t,1)):(t=Ke(s),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&v(e)}}}var Yt=30,We=120;function Zt(l,e,i){let{diffItems:t}=e;return l.$$set=s=>{"diffItems"in s&&i(0,t=s.diffItems)},[t]}var ve=class extends J{constructor(e){super(),G(this,e,Zt,Wt,V,{diffItems:0},Xt)}},x=ve;I();function xt(l){Q(l,"svelte-1vfpz50","table.table.is-ghost.svelte-1vfpz50 td.svelte-1vfpz50,table.table.is-ghost.svelte-1vfpz50 th.svelte-1vfpz50{border:0}table.table.is-ghost.svelte-1vfpz50 td.svelte-1vfpz50:first-child,table.table.is-ghost.svelte-1vfpz50 th.svelte-1vfpz50:first-child{margin-left:0;padding-left:0}.table.svelte-1vfpz50.svelte-1vfpz50:not(:last-child){margin-bottom:0.5rem}")}function Ye(l,e,i){let t=l.slice();return t[2]=e[i][0],t[3]=e[i][1],t}function Ze(l,e,i){let t=l.slice();return t[6]=e[i][0],t[7]=e[i][1],t}function xe(l){let e,i,t,s,f=l[1].length>0&&et(l),a=l[0].properties&&nt(l),n=l[0].items&&ct(l);return{c(){e=_("div"),f&&f.c(),i=A(),a&&a.c(),t=A(),n&&n.c(),h(e,"class","diff-model-container")},m(r,p){y(r,e,p),f&&f.m(e,null),m(e,i),a&&a.m(e,null),m(e,t),n&&n.m(e,null),s=!0},p(r,p){r[1].length>0?f?f.p(r,p):(f=et(r),f.c(),f.m(e,i)):f&&(f.d(1),f=null),r[0].properties?a?(a.p(r,p),p&1&&b(a,1)):(a=nt(r),a.c(),b(a,1),a.m(e,t)):a&&(z(),C(a,1,1,()=>{a=null}),j()),r[0].items?n?(n.p(r,p),p&1&&b(n,1)):(n=ct(r),n.c(),b(n,1),n.m(e,null)):n&&(z(),C(n,1,1,()=>{n=null}),j())},i(r){s||(b(a),b(n),s=!0)},o(r){C(a),C(n),s=!1},d(r){r&&v(e),f&&f.d(),a&&a.d(),n&&n.d()}}}function et(l){let e,i,t=l[1],s=[];for(let f=0;f<t.length;f+=1)s[f]=ft(Ze(l,t,f));return{c(){e=_("table"),i=_("tbody");for(let f=0;f<s.length;f+=1)s[f].c();h(e,"class","table is-narrow is-ghost svelte-1vfpz50")},m(f,a){y(f,e,a),m(e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(i,null)},p(f,a){if(a&2){t=f[1];let n;for(n=0;n<t.length;n+=1){let r=Ze(f,t,n);s[n]?s[n].p(r,a):(s[n]=ft(r),s[n].c(),s[n].m(i,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=t.length}},d(f){f&&v(e),Z(s,f)}}}function tt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function it(l){let e,i=JSON.stringify(l[7].leftValue)+"",t;return{c(){e=_("span"),t=R(i)},m(s,f){y(s,e,f),m(e,t)},p(s,f){f&2&&i!==(i=JSON.stringify(s[7].leftValue)+"")&&P(t,i)},d(s){s&&v(e)}}}function lt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-right-long")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function st(l){let e,i=JSON.stringify(l[7].rightValue)+"",t;return{c(){e=_("span"),t=R(i)},m(s,f){y(s,e,f),m(e,t)},p(s,f){f&2&&i!==(i=JSON.stringify(s[7].rightValue)+"")&&P(t,i)},d(s){s&&v(e)}}}function ft(l){let e,i,t,s,f=l[7].diffType+"",a,n,r,p,o=l[6]+"",d,c,u,g,O,k,T,D=!l[7].isBackwardCompatible&&tt(l),w=l[7].leftValue&&it(l),$=l[7].diffType==="Modified"&&lt(l),E=l[7].rightValue&&st(l);return{c(){e=_("tr"),i=_("td"),t=_("span"),D&&D.c(),s=A(),a=R(f),r=A(),p=_("th"),d=R(o),c=R(":"),u=A(),g=_("td"),w&&w.c(),O=A(),$&&$.c(),k=A(),E&&E.c(),T=A(),h(t,"class",n="tag "+K[l[7].diffType]+" svelte-1vfpz50"),h(i,"class","svelte-1vfpz50"),h(p,"class","svelte-1vfpz50"),h(g,"class","svelte-1vfpz50")},m(B,L){y(B,e,L),m(e,i),m(i,t),D&&D.m(t,null),m(t,s),m(t,a),m(e,r),m(e,p),m(p,d),m(p,c),m(e,u),m(e,g),w&&w.m(g,null),m(g,O),$&&$.m(g,null),m(g,k),E&&E.m(g,null),m(e,T)},p(B,L){B[7].isBackwardCompatible?D&&(D.d(1),D=null):D||(D=tt(B),D.c(),D.m(t,s)),L&2&&f!==(f=B[7].diffType+"")&&P(a,f),L&2&&n!==(n="tag "+K[B[7].diffType]+" svelte-1vfpz50")&&h(t,"class",n),L&2&&o!==(o=B[6]+"")&&P(d,o),B[7].leftValue?w?w.p(B,L):(w=it(B),w.c(),w.m(g,O)):w&&(w.d(1),w=null),B[7].diffType==="Modified"?$||($=lt(B),$.c(),$.m(g,k)):$&&($.d(1),$=null),B[7].rightValue?E?E.p(B,L):(E=st(B),E.c(),E.m(g,null)):E&&(E.d(1),E=null)},d(B){B&&v(e),D&&D.d(),w&&w.d(),$&&$.d(),E&&E.d()}}}function nt(l){let e,i,t,s=Object.entries(l[0].properties),f=[];for(let n=0;n<s.length;n+=1)f[n]=pt(Ye(l,s,n));let a=n=>C(f[n],1,1,()=>{f[n]=null});return{c(){e=_("table"),i=_("tbody");for(let n=0;n<f.length;n+=1)f[n].c();h(e,"class","table is-bordered is-narrow is-fullwidth svelte-1vfpz50")},m(n,r){y(n,e,r),m(e,i);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(i,null);t=!0},p(n,r){if(r&1){s=Object.entries(n[0].properties);let p;for(p=0;p<s.length;p+=1){let o=Ye(n,s,p);f[p]?(f[p].p(o,r),b(f[p],1)):(f[p]=pt(o),f[p].c(),b(f[p],1),f[p].m(i,null))}for(z(),p=s.length;p<f.length;p+=1)a(p);j()}},i(n){if(!t){for(let r=0;r<s.length;r+=1)b(f[r]);t=!0}},o(n){f=f.filter(Boolean);for(let r=0;r<f.length;r+=1)C(f[r]);t=!1},d(n){n&&v(e),Z(f,n)}}}function at(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function rt(l){let e,i,t=l[3].diffType+"",s,f,a=!l[3].isBackwardCompatible&&ot(l);return{c(){e=_("span"),a&&a.c(),i=A(),s=R(t),h(e,"class",f="tag "+K[l[3].diffType]+" svelte-1vfpz50")},m(n,r){y(n,e,r),a&&a.m(e,null),m(e,i),m(e,s)},p(n,r){n[3].isBackwardCompatible?a&&(a.d(1),a=null):a||(a=ot(n),a.c(),a.m(e,i)),r&1&&t!==(t=n[3].diffType+"")&&P(s,t),r&1&&f!==(f="tag "+K[n[3].diffType]+" svelte-1vfpz50")&&h(e,"class",f)},d(n){n&&v(e),a&&a.d()}}}function ot(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function ei(l){let e=JSON.stringify(ue(l[3]))+"",i;return{c(){i=R(e)},m(t,s){y(t,i,s)},p(t,s){s&1&&e!==(e=JSON.stringify(ue(t[3]))+"")&&P(i,e)},i:H,o:H,d(t){t&&v(i)}}}function ti(l){let e,i;return e=new le({props:{diffModel:l[3]}}),{c(){N(e.$$.fragment)},m(t,s){M(e,t,s),i=!0},p(t,s){let f={};s&1&&(f.diffModel=t[3]),e.$set(f)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){q(e,t)}}}function pt(l){let e,i,t,s=l[2]+"",f,a,n,r,p,o,d,c,u=!l[3].isBackwardCompatible&&at(l),g=l[3].diffType!=="Modified"&&rt(l),O=[ti,ei],k=[];function T(D,w){return D[3].diffType==="Modified"?0:1}return p=T(l,-1),o=k[p]=O[p](l),{c(){e=_("tr"),i=_("td"),u&&u.c(),t=A(),f=R(s),a=A(),g&&g.c(),n=A(),r=_("td"),o.c(),d=A()},m(D,w){y(D,e,w),m(e,i),u&&u.m(i,null),m(i,t),m(i,f),m(i,a),g&&g.m(i,null),m(e,n),m(e,r),k[p].m(r,null),m(e,d),c=!0},p(D,w){D[3].isBackwardCompatible?u&&(u.d(1),u=null):u||(u=at(D),u.c(),u.m(i,t)),(!c||w&1)&&s!==(s=D[2]+"")&&P(f,s),D[3].diffType!=="Modified"?g?g.p(D,w):(g=rt(D),g.c(),g.m(i,null)):g&&(g.d(1),g=null);let $=p;p=T(D,w),p===$?k[p].p(D,w):(z(),C(k[$],1,1,()=>{k[$]=null}),j(),o=k[p],o?o.p(D,w):(o=k[p]=O[p](D),o.c()),b(o,1),o.m(r,null))},i(D){c||(b(o),c=!0)},o(D){C(o),c=!1},d(D){D&&v(e),u&&u.d(),g&&g.d(),k[p].d()}}}function ct(l){let e,i,t,s,f,a,n,r,p,o,d=!l[0].items.isBackwardCompatible&&mt(l),c=l[0].items.diffType!=="Modified"&&ut(l),u=[li,ii],g=[];function O(k,T){return k[0].items.diffType==="Modified"?0:1}return r=O(l,-1),p=g[r]=u[r](l),{c(){e=_("table"),i=_("tbody"),t=_("tr"),s=_("td"),d&&d.c(),f=R(`
                            [ ]
                            `),c&&c.c(),a=A(),n=_("td"),p.c(),h(e,"class","table is-bordered is-narrow is-fullwidth svelte-1vfpz50")},m(k,T){y(k,e,T),m(e,i),m(i,t),m(t,s),d&&d.m(s,null),m(s,f),c&&c.m(s,null),m(t,a),m(t,n),g[r].m(n,null),o=!0},p(k,T){k[0].items.isBackwardCompatible?d&&(d.d(1),d=null):d||(d=mt(k),d.c(),d.m(s,f)),k[0].items.diffType!=="Modified"?c?c.p(k,T):(c=ut(k),c.c(),c.m(s,null)):c&&(c.d(1),c=null);let D=r;r=O(k,T),r===D?g[r].p(k,T):(z(),C(g[D],1,1,()=>{g[D]=null}),j(),p=g[r],p?p.p(k,T):(p=g[r]=u[r](k),p.c()),b(p,1),p.m(n,null))},i(k){o||(b(p),o=!0)},o(k){C(p),o=!1},d(k){k&&v(e),d&&d.d(),c&&c.d(),g[r].d()}}}function mt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function ut(l){let e,i,t=l[0].items.diffType+"",s,f,a=!l[0].items.isBackwardCompatible&&dt(l);return{c(){e=_("span"),a&&a.c(),i=A(),s=R(t),h(e,"class",f="tag "+K[l[0].items.diffType]+" svelte-1vfpz50")},m(n,r){y(n,e,r),a&&a.m(e,null),m(e,i),m(e,s)},p(n,r){n[0].items.isBackwardCompatible?a&&(a.d(1),a=null):a||(a=dt(n),a.c(),a.m(e,i)),r&1&&t!==(t=n[0].items.diffType+"")&&P(s,t),r&1&&f!==(f="tag "+K[n[0].items.diffType]+" svelte-1vfpz50")&&h(e,"class",f)},d(n){n&&v(e),a&&a.d()}}}function dt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function ii(l){let e=JSON.stringify(ue(l[0].items))+"",i;return{c(){i=R(e)},m(t,s){y(t,i,s)},p(t,s){s&1&&e!==(e=JSON.stringify(ue(t[0].items))+"")&&P(i,e)},i:H,o:H,d(t){t&&v(i)}}}function li(l){let e,i;return e=new le({props:{diffModel:l[0].items}}),{c(){N(e.$$.fragment)},m(t,s){M(e,t,s),i=!0},p(t,s){let f={};s&1&&(f.diffModel=t[0].items),e.$set(f)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){q(e,t)}}}function si(l){let e,i,t=l[0]&&xe(l);return{c(){t&&t.c(),e=X()},m(s,f){t&&t.m(s,f),y(s,e,f),i=!0},p(s,[f]){s[0]?t?(t.p(s,f),f&1&&b(t,1)):(t=xe(s),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&v(e)}}}function ue(l){return Object.fromEntries(Object.entries(l).filter(([e,i])=>["diffType","isBackwardCompatible"].indexOf(e)===-1))}function fi(l,e,i){let{diffModel:t}=e,s=[];return l.$$set=f=>{"diffModel"in f&&i(0,t=f.diffModel)},l.$$.update=()=>{if(l.$$.dirty&1)e:i(1,s=Object.entries(t).filter(([f,a])=>ne.indexOf(f)!==-1))},[t,s]}var le=class extends J{constructor(e){super(),G(this,e,fi,si,V,{diffModel:0},xt)}},De=le;function ni(l){Q(l,"svelte-11qy9pw","details[open].svelte-11qy9pw:not(:last-child){margin-bottom:1.5em}.table-title.svelte-11qy9pw{font-weight:bold}")}function _t(l,e,i){let t=l.slice();return t[3]=e[i][0],t[4]=e[i][1],t}function bt(l,e,i){let t=l.slice();return t[7]=e[i][0],t[8]=e[i][1],t}function gt(l){let e,i,t,s=!l[0].metadata.length&&!Object.keys(l[0].services).length,f,a,n=!l[0].isBackwardCompatible&&ht(l),r=l[0].metadata.length>0&&kt(l),p=Object.entries(l[0].services),o=[];for(let u=0;u<p.length;u+=1)o[u]=St(_t(l,p,u));let d=u=>C(o[u],1,1,()=>{o[u]=null}),c=s&&Nt(l);return{c(){n&&n.c(),e=A(),r&&r.c(),i=A();for(let u=0;u<o.length;u+=1)o[u].c();t=A(),c&&c.c(),f=X()},m(u,g){n&&n.m(u,g),y(u,e,g),r&&r.m(u,g),y(u,i,g);for(let O=0;O<o.length;O+=1)o[O]&&o[O].m(u,g);y(u,t,g),c&&c.m(u,g),y(u,f,g),a=!0},p(u,g){if(u[0].isBackwardCompatible?n&&(n.d(1),n=null):n||(n=ht(u),n.c(),n.m(e.parentNode,e)),u[0].metadata.length>0?r?(r.p(u,g),g&1&&b(r,1)):(r=kt(u),r.c(),b(r,1),r.m(i.parentNode,i)):r&&(z(),C(r,1,1,()=>{r=null}),j()),g&1){p=Object.entries(u[0].services);let O;for(O=0;O<p.length;O+=1){let k=_t(u,p,O);o[O]?(o[O].p(k,g),b(o[O],1)):(o[O]=St(k),o[O].c(),b(o[O],1),o[O].m(t.parentNode,t))}for(z(),O=p.length;O<o.length;O+=1)d(O);j()}g&1&&(s=!u[0].metadata.length&&!Object.keys(u[0].services).length),s?c||(c=Nt(u),c.c(),c.m(f.parentNode,f)):c&&(c.d(1),c=null)},i(u){if(!a){b(r);for(let g=0;g<p.length;g+=1)b(o[g]);a=!0}},o(u){C(r),o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)C(o[g]);a=!1},d(u){n&&n.d(u),u&&v(e),r&&r.d(u),u&&v(i),Z(o,u),u&&v(t),c&&c.d(u),u&&v(f)}}}function ht(l){let e;return{c(){e=_("div"),e.innerHTML=`<i class="fa-solid fa-triangle-exclamation mx-1" title="Not backward compatible change"></i>
                Not backward compatible changes detected`,h(e,"class","notification is-small is-info")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function kt(l){let e,i,t,s,f;return s=new x({props:{diffItems:l[0].metadata}}),{c(){e=_("details"),i=_("summary"),i.textContent="Apis Metadata",t=A(),N(s.$$.fragment),h(i,"class","title is-5"),h(e,"class","svelte-11qy9pw")},m(a,n){y(a,e,n),m(e,i),m(e,t),M(s,e,null),f=!0},p(a,n){let r={};n&1&&(r.diffItems=a[0].metadata),s.$set(r)},i(a){f||(b(s.$$.fragment,a),f=!0)},o(a){C(s.$$.fragment,a),f=!1},d(a){a&&v(e),q(s)}}}function yt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function vt(l){let e,i,t,s,f,a=!l[4].metadata.isBackwardCompatible&&Dt(l);return s=new x({props:{diffItems:l[4].metadata.items}}),{c(){e=_("p"),a&&a.c(),i=R(`
                        Metadata`),t=A(),N(s.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(n,r){y(n,e,r),a&&a.m(e,null),m(e,i),y(n,t,r),M(s,n,r),f=!0},p(n,r){n[4].metadata.isBackwardCompatible?a&&(a.d(1),a=null):a||(a=Dt(n),a.c(),a.m(e,i));let p={};r&1&&(p.diffItems=n[4].metadata.items),s.$set(p)},i(n){f||(b(s.$$.fragment,n),f=!0)},o(n){C(s.$$.fragment,n),f=!1},d(n){n&&v(e),a&&a.d(),n&&v(t),q(s,n)}}}function Dt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function wt(l){let e,i,t,s,f,a=!l[4].parameters.isBackwardCompatible&&Ct(l);return s=new x({props:{diffItems:l[4].parameters.items}}),{c(){e=_("p"),a&&a.c(),i=R(`
                        Request Parameters`),t=A(),N(s.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(n,r){y(n,e,r),a&&a.m(e,null),m(e,i),y(n,t,r),M(s,n,r),f=!0},p(n,r){n[4].parameters.isBackwardCompatible?a&&(a.d(1),a=null):a||(a=Ct(n),a.c(),a.m(e,i));let p={};r&1&&(p.diffItems=n[4].parameters.items),s.$set(p)},i(n){f||(b(s.$$.fragment,n),f=!0)},o(n){C(s.$$.fragment,n),f=!1},d(n){n&&v(e),a&&a.d(),n&&v(t),q(s,n)}}}function Ct(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function $t(l){let e,i,t,s,f,a,n,r=!l[4].request.isBackwardCompatible&&Et(l);return s=new x({props:{diffItems:l[4].request.items}}),a=new De({props:{diffModel:l[4].request.model}}),{c(){e=_("p"),r&&r.c(),i=R(`
                        Request Body`),t=A(),N(s.$$.fragment),f=A(),N(a.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(p,o){y(p,e,o),r&&r.m(e,null),m(e,i),y(p,t,o),M(s,p,o),y(p,f,o),M(a,p,o),n=!0},p(p,o){p[4].request.isBackwardCompatible?r&&(r.d(1),r=null):r||(r=Et(p),r.c(),r.m(e,i));let d={};o&1&&(d.diffItems=p[4].request.items),s.$set(d);let c={};o&1&&(c.diffModel=p[4].request.model),a.$set(c)},i(p){n||(b(s.$$.fragment,p),b(a.$$.fragment,p),n=!0)},o(p){C(s.$$.fragment,p),C(a.$$.fragment,p),n=!1},d(p){p&&v(e),r&&r.d(),p&&v(t),q(s,p),p&&v(f),q(a,p)}}}function Et(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function At(l){let e,i,t=Object.entries(l[4].responses),s=[];for(let a=0;a<t.length;a+=1)s[a]=Bt(bt(l,t,a));let f=a=>C(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=X()},m(a,n){for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(a,n);y(a,e,n),i=!0},p(a,n){if(n&1){t=Object.entries(a[4].responses);let r;for(r=0;r<t.length;r+=1){let p=bt(a,t,r);s[r]?(s[r].p(p,n),b(s[r],1)):(s[r]=Bt(p),s[r].c(),b(s[r],1),s[r].m(e.parentNode,e))}for(z(),r=t.length;r<s.length;r+=1)f(r);j()}},i(a){if(!i){for(let n=0;n<t.length;n+=1)b(s[n]);i=!0}},o(a){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)C(s[n]);i=!1},d(a){Z(s,a),a&&v(e)}}}function Ot(l){let e,i,t=l[7]+"",s,f,a,n,r,p,o=!l[8].isBackwardCompatible&&Tt(l);return a=new x({props:{diffItems:l[8].items}}),r=new De({props:{diffModel:l[8].model}}),{c(){e=_("p"),o&&o.c(),i=R(`
                                Response: `),s=R(t),f=A(),N(a.$$.fragment),n=A(),N(r.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(d,c){y(d,e,c),o&&o.m(e,null),m(e,i),m(e,s),y(d,f,c),M(a,d,c),y(d,n,c),M(r,d,c),p=!0},p(d,c){d[8].isBackwardCompatible?o&&(o.d(1),o=null):o||(o=Tt(d),o.c(),o.m(e,i)),(!p||c&1)&&t!==(t=d[7]+"")&&P(s,t);let u={};c&1&&(u.diffItems=d[8].items),a.$set(u);let g={};c&1&&(g.diffModel=d[8].model),r.$set(g)},i(d){p||(b(a.$$.fragment,d),b(r.$$.fragment,d),p=!0)},o(d){C(a.$$.fragment,d),C(r.$$.fragment,d),p=!1},d(d){d&&v(e),o&&o.d(),d&&v(f),q(a,d),d&&v(n),q(r,d)}}}function Tt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function Bt(l){let e,i,t=(l[8].items.length||l[8].model)&&Ot(l);return{c(){t&&t.c(),e=X()},m(s,f){t&&t.m(s,f),y(s,e,f),i=!0},p(s,f){s[8].items.length||s[8].model?t?(t.p(s,f),f&1&&b(t,1)):(t=Ot(s),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&v(e)}}}function St(l){let e,i,t=l[3]+"",s,f,a,n,r=l[4].diffType+"",p,o,d,c,u,g,O,k=!l[4].isBackwardCompatible&&yt(l),T=l[4].metadata&&l[4].metadata.items.length&&vt(l),D=l[4].parameters&&l[4].parameters.items.length&&wt(l),w=l[4].request&&(l[4].request.items.length||l[4].request.model)&&$t(l),$=l[4].responses&&At(l);return{c(){e=_("details"),i=_("summary"),s=R(t),f=A(),a=_("span"),k&&k.c(),n=A(),p=R(r),d=A(),T&&T.c(),c=A(),D&&D.c(),u=A(),w&&w.c(),g=A(),$&&$.c(),h(a,"class",o="tag "+K[l[4].diffType]+" svelte-11qy9pw"),h(i,"class","title is-5"),e.open=!0,h(e,"class","svelte-11qy9pw")},m(E,B){y(E,e,B),m(e,i),m(i,s),m(i,f),m(i,a),k&&k.m(a,null),m(a,n),m(a,p),m(e,d),T&&T.m(e,null),m(e,c),D&&D.m(e,null),m(e,u),w&&w.m(e,null),m(e,g),$&&$.m(e,null),O=!0},p(E,B){(!O||B&1)&&t!==(t=E[3]+"")&&P(s,t),E[4].isBackwardCompatible?k&&(k.d(1),k=null):k||(k=yt(E),k.c(),k.m(a,n)),(!O||B&1)&&r!==(r=E[4].diffType+"")&&P(p,r),(!O||B&1&&o!==(o="tag "+K[E[4].diffType]+" svelte-11qy9pw"))&&h(a,"class",o),E[4].metadata&&E[4].metadata.items.length?T?(T.p(E,B),B&1&&b(T,1)):(T=vt(E),T.c(),b(T,1),T.m(e,c)):T&&(z(),C(T,1,1,()=>{T=null}),j()),E[4].parameters&&E[4].parameters.items.length?D?(D.p(E,B),B&1&&b(D,1)):(D=wt(E),D.c(),b(D,1),D.m(e,u)):D&&(z(),C(D,1,1,()=>{D=null}),j()),E[4].request&&(E[4].request.items.length||E[4].request.model)?w?(w.p(E,B),B&1&&b(w,1)):(w=$t(E),w.c(),b(w,1),w.m(e,g)):w&&(z(),C(w,1,1,()=>{w=null}),j()),E[4].responses?$?($.p(E,B),B&1&&b($,1)):($=At(E),$.c(),b($,1),$.m(e,null)):$&&(z(),C($,1,1,()=>{$=null}),j())},i(E){O||(b(T),b(D),b(w),b($),O=!0)},o(E){C(T),C(D),C(w),C($),O=!1},d(E){E&&v(e),k&&k.d(),T&&T.d(),D&&D.d(),w&&w.d(),$&&$.d()}}}function Nt(l){let e;return{c(){e=_("p"),e.textContent="No differences detected"},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function ai(l){let e,i,t=l[0]&&gt(l);return{c(){e=_("div"),t&&t.c()},m(s,f){y(s,e,f),t&&t.m(e,null),i=!0},p(s,[f]){s[0]?t?(t.p(s,f),f&1&&b(t,1)):(t=gt(s),t.c(),b(t,1),t.m(e,null)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){s&&v(e),t&&t.d()}}}function ri(l,e,i){let{leftApi:t}=e,{rightApi:s}=e,f;return l.$$set=a=>{"leftApi"in a&&i(1,t=a.leftApi),"rightApi"in a&&i(2,s=a.rightApi)},l.$$.update=()=>{if(l.$$.dirty&7)e:t&&s&&(i(0,f=Je(t,s)),console.log({apiDiff:f}))},[f,t,s]}var we=class extends J{constructor(e){super(),G(this,e,ri,ai,V,{leftApi:1,rightApi:2},ni)}},Mt=we;I();function qt(l){let e;return{c(){e=R("Ok")},m(i,t){y(i,e,t)},d(i){i&&v(e)}}}function oi(l){let e,i=l[0]&&l[1]&&qt(l);return{c(){e=_("div"),i&&i.c()},m(t,s){y(t,e,s),i&&i.m(e,null)},p(t,[s]){t[0]&&t[1]?i||(i=qt(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:H,o:H,d(t){t&&v(e),i&&i.d()}}}function pi(l,e,i){let{leftApi:t}=e,{rightApi:s}=e;return l.$$set=f=>{"leftApi"in f&&i(0,t=f.leftApi),"rightApi"in f&&i(1,s=f.rightApi)},[t,s]}var Ce=class extends J{constructor(e){super(),G(this,e,pi,oi,V,{leftApi:0,rightApi:1})}},Rt=Ce;I();function ci(l){Q(l,"svelte-1gj2ttm",".tabs-with-options.svelte-1gj2ttm.svelte-1gj2ttm{display:flex;flex-wrap:nowrap;align-content:center;align-items:stretch}.tabs-with-options.svelte-1gj2ttm .tabs.svelte-1gj2ttm{flex-grow:1;margin-bottom:0}")}function mi(l){let e,i,t,s,f,a,n,r,p,o,d,c,u,g;return{c(){e=_("div"),i=_("div"),t=_("ul"),s=_("li"),f=_("a"),f.innerHTML=`<span class="icon is-small"><i class="fas fa-circle-nodes"></i></span> 
                    <span>Api Diff</span>`,r=A(),p=_("li"),o=_("a"),o.innerHTML=`<span class="icon is-small"><i class="fas fa-diagram-project"></i></span> 
                    <span>Diagrams Diff</span>`,h(f,"href",a="#"),h(s,"class",n=l[0]==="api-diff"?"is-active":""),h(o,"href",d="#"),h(p,"class",c=l[0]==="diagrams-diff"?"is-active":""),h(i,"class","tabs is-boxed is-floating svelte-1gj2ttm"),h(e,"class","tabs-with-options svelte-1gj2ttm")},m(O,k){y(O,e,k),m(e,i),m(i,t),m(t,s),m(s,f),m(t,r),m(t,p),m(p,o),u||(g=[ee(f,"click",_e(l[2])),ee(o,"click",_e(l[3]))],u=!0)},p(O,[k]){k&1&&n!==(n=O[0]==="api-diff"?"is-active":"")&&h(s,"class",n),k&1&&c!==(c=O[0]==="diagrams-diff"?"is-active":"")&&h(p,"class",c)},i:H,o:H,d(O){O&&v(e),u=!1,Ne(g)}}}function ui(l,e,i){let{selectedTab:t="api-diff"}=e,s=Re();function f(r){return se(this,void 0,void 0,function*(){i(0,t=r),s("tabChange",{selectedTab:t})})}let a=()=>f("api-diff"),n=()=>f("diagrams-diff");return l.$$set=r=>{"selectedTab"in r&&i(0,t=r.selectedTab)},[t,f,a,n]}var $e=class extends J{constructor(e){super(),G(this,e,ui,mi,V,{selectedTab:0},ci)}},It=$e;function di(l){Q(l,"svelte-1nizkyl",".is-center.svelte-1nizkyl{display:flex;justify-content:center;align-items:center;flex-direction:column}")}function zt(l){let e,i,t,s,f,a,n;return e=new It({props:{selectedTab:l[2]}}),e.$on("tabChange",l[5]),s=new be({props:{isVisible:l[2]==="api-diff",$$slots:{default:[_i]},$$scope:{ctx:l}}}),a=new be({props:{isVisible:l[2]==="diagrams-diff",$$slots:{default:[bi]},$$scope:{ctx:l}}}),{c(){N(e.$$.fragment),i=A(),t=_("div"),N(s.$$.fragment),f=A(),N(a.$$.fragment),h(t,"class","box flat-top")},m(r,p){M(e,r,p),y(r,i,p),y(r,t,p),M(s,t,null),m(t,f),M(a,t,null),n=!0},p(r,p){let o={};p&4&&(o.selectedTab=r[2]),e.$set(o);let d={};p&4&&(d.isVisible=r[2]==="api-diff"),p&131&&(d.$$scope={dirty:p,ctx:r}),s.$set(d);let c={};p&4&&(c.isVisible=r[2]==="diagrams-diff"),p&131&&(c.$$scope={dirty:p,ctx:r}),a.$set(c)},i(r){n||(b(e.$$.fragment,r),b(s.$$.fragment,r),b(a.$$.fragment,r),n=!0)},o(r){C(e.$$.fragment,r),C(s.$$.fragment,r),C(a.$$.fragment,r),n=!1},d(r){q(e,r),r&&v(i),r&&v(t),q(s),q(a)}}}function _i(l){let e,i;return e=new Mt({props:{leftApi:l[0].api,rightApi:l[1].api}}),{c(){N(e.$$.fragment)},m(t,s){M(e,t,s),i=!0},p(t,s){let f={};s&1&&(f.leftApi=t[0].api),s&2&&(f.rightApi=t[1].api),e.$set(f)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){q(e,t)}}}function bi(l){let e,i;return e=new Rt({props:{leftApi:l[0].api,rightApi:l[1].api}}),{c(){N(e.$$.fragment)},m(t,s){M(e,t,s),i=!0},p(t,s){let f={};s&1&&(f.leftApi=t[0].api),s&2&&(f.rightApi=t[1].api),e.$set(f)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){q(e,t)}}}function gi(l){let e,i,t,s,f,a,n,r,p,o,d,c,u,g,O,k,T,D,w,$,E,B,L,Y;e=new je({props:{activePage:"compare"}}),s=new fe({props:{messages:["This feature is not completed yet"]}}),o=new ge({props:{browserHash:l[0].hash,storagePrefix:"left"}}),o.$on("apiChange",function(){de(l[4](l[0]))&&l[4](l[0]).apply(this,arguments)}),c=new fe({props:{messages:l[0].errors}}),T=new ge({props:{browserHash:l[1].hash,storagePrefix:"right"}}),T.$on("apiChange",function(){de(l[4](l[1]))&&l[4](l[1]).apply(this,arguments)}),w=new fe({props:{messages:l[1].errors}});let F=l[0].api&&l[1].api&&zt(l);return L=new Ie({}),{c(){N(e.$$.fragment),i=A(),t=_("div"),N(s.$$.fragment),f=A(),a=_("section"),a.innerHTML=`<div class="hero-body"><h1 class="title">Api Compare</h1> 
      <p class="subtitle">List changes between two Apis</p></div>`,n=A(),r=_("div"),p=_("div"),N(o.$$.fragment),d=A(),N(c.$$.fragment),u=A(),g=_("div"),g.innerHTML='<p class="title is-2"><i class="fa-solid fa-right-long"></i></p>',O=A(),k=_("div"),N(T.$$.fragment),D=A(),N(w.$$.fragment),$=A(),F&&F.c(),B=A(),N(L.$$.fragment),h(a,"class","hero is-small"),h(p,"class","column"),h(g,"class","column is-center is-narrow svelte-1nizkyl"),h(k,"class","column"),h(r,"class","columns"),h(t,"class",E="container "+(l[3].fluidLayout?"is-fluid":""))},m(S,U){M(e,S,U),y(S,i,U),y(S,t,U),M(s,t,null),m(t,f),m(t,a),m(t,n),m(t,r),m(r,p),M(o,p,null),m(p,d),M(c,p,null),m(r,u),m(r,g),m(r,O),m(r,k),M(T,k,null),m(k,D),M(w,k,null),m(t,$),F&&F.m(t,null),y(S,B,U),M(L,S,U),Y=!0},p(S,[U]){l=S;let Ae={};U&1&&(Ae.browserHash=l[0].hash),o.$set(Ae);let Oe={};U&1&&(Oe.messages=l[0].errors),c.$set(Oe);let Te={};U&2&&(Te.browserHash=l[1].hash),T.$set(Te);let Be={};U&2&&(Be.messages=l[1].errors),w.$set(Be),l[0].api&&l[1].api?F?(F.p(l,U),U&3&&b(F,1)):(F=zt(l),F.c(),b(F,1),F.m(t,null)):F&&(z(),C(F,1,1,()=>{F=null}),j()),(!Y||U&8&&E!==(E="container "+(l[3].fluidLayout?"is-fluid":"")))&&h(t,"class",E)},i(S){Y||(b(e.$$.fragment,S),b(s.$$.fragment,S),b(o.$$.fragment,S),b(c.$$.fragment,S),b(T.$$.fragment,S),b(w.$$.fragment,S),b(F),b(L.$$.fragment,S),Y=!0)},o(S){C(e.$$.fragment,S),C(s.$$.fragment,S),C(o.$$.fragment,S),C(c.$$.fragment,S),C(T.$$.fragment,S),C(w.$$.fragment,S),C(F),C(L.$$.fragment,S),Y=!1},d(S){q(e,S),S&&v(i),S&&v(t),q(s),q(o),q(c),q(T),q(w),F&&F.d(),S&&v(B),q(L,S)}}}function hi(l,e,i){let t;Me(l,ze,o=>i(3,t=o));let s={hash:null,api:null,errors:[]},f={hash:null,api:null,errors:[]},a="api-diff";function n(){let o=new URLSearchParams(window.location.search);s.hash&&o.set("leftApi",s.hash),f.hash&&o.set("rightApi",f.hash),window.history.pushState(null,null,"?"+o.toString())}function r(o){return d=>se(this,void 0,void 0,function*(){let c=d.detail.apiObject;if(o.api=null,o.errors=[],o.hash=d.detail.hash,c){try{o.api=Pe(c),o.api.setModelsTitle()}catch(u){o.errors=[...o.errors,"Error: "+u.message]}if(o.api)try{yield o.api.resolveReferences()}catch(u){console.error(u),o.errors=[...o.errors,"Error while parsing api: "+u.message]}}i(0,s),i(1,f),n()})}function p(o){i(2,a=o.detail.selectedTab)}return qe(()=>{let o=new URLSearchParams(window.location.search);i(0,s.hash=o.get("leftApi"),s),i(1,f.hash=o.get("rightApi"),f)}),[s,f,a,t,r,p]}var Ee=class extends J{constructor(e){super(),G(this,e,hi,gi,V,{},di)}},jt=Ee;new jt({target:document.body});Se();

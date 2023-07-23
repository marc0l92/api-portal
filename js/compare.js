// Project: https://github.com/marc0l92/api-portal
import{a as _e}from"./chunk-M76IC4SC.js";import{d as He,l as be}from"./chunk-PR6L3SXO.js";import"./chunk-RN4ZYUKE.js";import{a as se}from"./chunk-5IA6LTRU.js";import{$ as g,A as d,B as Q,C as y,D as w,E as Z,F as b,G as j,H as A,I as X,J as ee,K as de,M as h,N as F,R as Ne,W as Me,Y as je,Z as I,_ as P,aa as C,ba as Re,ca as B,da as N,ea as M,fa as G,ga as V,h as R,ha as Ie,ka as Pe,n as qe,o as z,p as Se,q as ue,r as J,sa as Fe,t as Be,ta as Le}from"./chunk-PS4XM7S3.js";R();R();R();R();R();var K={["Added"]:"is-success",["Modified"]:"is-warning",["Removed"]:"is-danger",["No Changes"]:"is-light"},ne=["title","type","example","minLength","maxLength","minItems","maxItems","minProperties","maxProperties","pattern","format","enum","description","required","additionalProperties","readOnly","writeOnly","allowEmptyValue","collectionFormat","default","maximum","minimum","exclusiveMaximum","exclusiveMinimum","uniqueItems","multipleOf"];R();var fe=(l,e,i)=>i===0&&(e===null||l!==null&&l>=e)||i===1&&(l===null||e!==null&&l<=e),ae=(l,e,i)=>i===0&&(e===null||l!==null&&l<=e)||i===1&&(l===null||e!==null&&l>=e),zt=(l,e)=>e!==null&&l===e,te=(l,e)=>e===null||l===e,re=()=>!0,Je={title:re,example:re,description:re,type:zt,minLength:fe,maxLength:ae,minItems:fe,maxItems:ae,minProperties:fe,maxProperties:ae,minimum:fe,maximum:ae,exclusiveMinimum:(l,e,i)=>e===l||i!==0&&e!==!0||i!==1&&e===!0,exclusiveMaximum:(l,e,i)=>e===l||i!==0&&e!==!0||i!==1&&e===!0,pattern:te,format:te,collectionFormat:te,multipleOf:te,uniqueItems:te,default:re,allowEmptyValue:(l,e,i,t)=>e===null||e!==t||l===e,enum:(l,e,i)=>i===1||e===null||l!==null&&l.every(t=>e.indexOf(t)!==-1),required:(l,e,i)=>i===0&&(e===null||l!==null&&e.every(t=>l.indexOf(t)!==-1))||i===1&&(l===null||e!==null&&l.every(t=>e.indexOf(t)!==-1)),readOnly:(l,e,i,t)=>i===1||t===!1||l!==!0||e===!0,writeOnly:(l,e,i,t)=>i===0||t===!1||e!==!0||l===!0,additionalProperties:(l,e,i)=>i===1||e!==!0||l===!0},ge=(l,e,i)=>l==="No Changes"||i===!1||e===0&&l==="Removed"||e===1&&l==="Added";function Ke(l,e){let i={isBackwardCompatible:!0,metadata:[],services:{}};i.metadata=ce(Ge(l),Ge(e)).items;let t=e.getServices();for(let s of l.getServices()){let n=t.findIndex(a=>a.getName()===s.getName());if(n>=0){let a=t[n],f={diffType:"Modified",isBackwardCompatible:!0,metadata:{isBackwardCompatible:!0,items:[]},parameters:{isBackwardCompatible:!0,items:[]},request:{isBackwardCompatible:!0,items:[]},responses:{}};f.metadata=ce(Ve(s),Ve(a)),f.parameters=Gt(s.getRequestParameters(),a.getRequestParameters()),f.request=he(s.getRequest(),a.getRequest(),0),f.responses=Vt(s.getResponses(),a.getResponses()),(f.metadata.items.length||f.parameters.items.length||f.request.items.length||f.request.model&&f.request.model.diffType!=="No Changes"||Object.keys(f.responses).length)&&(f.isBackwardCompatible&&(f.isBackwardCompatible=f.metadata.isBackwardCompatible&&f.parameters.isBackwardCompatible&&f.request.isBackwardCompatible&&Object.values(f.responses).every(r=>r.isBackwardCompatible)),i.isBackwardCompatible&&(i.isBackwardCompatible=f.isBackwardCompatible),i.services[s.getName()]=f),t.splice(n,1)}else i.isBackwardCompatible=!1,i.services[s.getName()]={diffType:"Removed",isBackwardCompatible:!1}}for(let s of t)i.services[s.getName()]={diffType:"Added",isBackwardCompatible:!0};return i}function Ge(l){return Object.fromEntries(Object.entries(l.toJson()).filter(([e])=>["paths","definitions","responses","parameters","components"].indexOf(e)===-1))}function Ve(l){return Object.fromEntries(Object.entries(l.toJson()).filter(([e])=>["parameters","responses","requestBody"].indexOf(e)===-1))}function Ue(l){return Object.fromEntries(Object.entries(l).filter(([e])=>["schema"].indexOf(e)===-1))}function oe(l,e,i){return i?`${l}[${e}]`:`${l}/${e}`}function Jt(l,e){if(l===e)return"No Changes";if(l==null)return"Added";if(e==null)return"Removed";if(Array.isArray(l)&&Array.isArray(e)){let i=e.slice().sort();if(l.length===e.length&&l.slice().sort().every((t,s)=>t===i[s]))return"No Changes"}return JSON.stringify(l)===JSON.stringify(e)?"No Changes":"Modified"}function ce(l,e,i="",t=[]){let s={isBackwardCompatible:!0,items:[]},n=Object.keys(e);for(let a of Object.keys(l)){let f=n.indexOf(a);if(f>=0){if(typeof l[a]=="object"&&typeof e[a]=="object"){let r=ce(l[a],e[a],oe(i,a,Array.isArray(l)),t);s.isBackwardCompatible&&(s.isBackwardCompatible=r.isBackwardCompatible),s.items=s.items.concat(r.items)}else if(l[a]!==e[a]){let r=oe(i,a,Array.isArray(l)),c=t.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=c),s.items.push({path:r,diffType:"Modified",leftValue:l[a],rightValue:e[a],isBackwardCompatible:c})}n.splice(f,1)}else{let r=oe(i,a,Array.isArray(l)),c=t.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=c),s.items.push({path:r,diffType:"Removed",leftValue:l[a],isBackwardCompatible:c})}}for(let a of n){let f=oe(i,a,Array.isArray(e)),r=t.indexOf(f)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=r),s.items.push({path:f,diffType:"Added",rightValue:e[a],isBackwardCompatible:r})}return s}function Gt(l,e){let i={isBackwardCompatible:!0,items:[]},t=Object.keys(e).map(s=>parseInt(s));for(let s of l){let n=e.findIndex(a=>a.name===s.name&&a.in===s.in);if(n>=0){let a=e[n],f=he(s,a,0);i.isBackwardCompatible&&(i.isBackwardCompatible=f.isBackwardCompatible),i.items=i.items.concat(f.items),t.splice(t.indexOf(n),1)}else i.isBackwardCompatible=!1,i.items.push({path:s["x-path"],diffType:"Removed",leftValue:s,isBackwardCompatible:!1})}for(let s of t){let n=e[s];i.items.push({path:n["x-path"],diffType:"Added",rightValue:n,isBackwardCompatible:!0})}return i}function he(l,e,i){let t={isBackwardCompatible:!0,items:[]};if(!l&&!e)return t;if(!l&&e)return{items:[{path:e["x-path"],diffType:"Added",rightValue:e,isBackwardCompatible:!0}],isBackwardCompatible:!0};if(l&&!e)return{items:[{path:l["x-path"],diffType:"Removed",rightValue:l,isBackwardCompatible:!1}],isBackwardCompatible:!1};let s=["in","name","type","required","schema"];t=ce(Ue(l),Ue(e),l["x-path"],s);let n=ie(l.schema,e.schema,i);return n.diffType!=="No Changes"&&(t.model=n,t.isBackwardCompatible&&(t.isBackwardCompatible=n.isBackwardCompatible)),t}function Vt(l,e){let i={},t=Object.keys(e);for(let s of Object.keys(l)){let n=l[s],a=t.indexOf(s);if(a>=0){let f=e[s],r=he(n,f,1);(r.items.length||r.model)&&(i[s]=r),t.splice(a,1)}else i[s]={items:[{path:n["x-path"],diffType:"Removed",rightValue:n,isBackwardCompatible:!1}],isBackwardCompatible:!1}}for(let s of t){let n=e[s];i[s]={items:[{path:n["x-path"],diffType:"Added",rightValue:n,isBackwardCompatible:!0}],isBackwardCompatible:!0}}return i}function ie(l,e,i,t=!1){var n,a;if(!l&&!e)return{diffType:"No Changes",isBackwardCompatible:!0};if(!l&&e)return Object.assign({diffType:"Added",isBackwardCompatible:ge("Added",i,t)},e);if(l&&!e)return Object.assign({diffType:"Removed",isBackwardCompatible:ge("Removed",i,t)},l);let s={isBackwardCompatible:!0,diffType:"No Changes",properties:{}};for(let f of ne){let r={diffType:Jt(l[f],e[f]),isBackwardCompatible:Je[f]((n=l[f])!=null?n:null,(a=e[f])!=null?a:null,i,t),leftValue:l[f],rightValue:e[f]};r.diffType!=="No Changes"&&(s[f]=r,s.isBackwardCompatible&&(s.isBackwardCompatible=r.isBackwardCompatible),s.diffType="Modified")}if(l.items!==e.items&&(s.items=ie(l.items,e.items,i),s.items.diffType!=="No Changes"&&(s.diffType="Modified")),l.properties!==e.properties){let f=l.required||[],r=e.properties?Object.keys(e.properties):[];if(l.properties)for(let o in l.properties){let m=f.indexOf(o)!==-1,p=r.indexOf(o);if(p!==-1){r.splice(p,1);let u=ie(l.properties[o],e.properties[o],i,m);u.diffType!=="No Changes"&&(s.properties[o]=u,s.diffType="Modified")}else s.properties[o]=ie(l.properties[o],null,i,m),s.diffType="Modified"}let c=e.required||[];for(let o of r){let m=c.indexOf(o)!==-1;s.properties[o]=ie(null,e.properties[o],i,m)}r.length>0&&(s.diffType="Modified")}return Object.keys(s.properties).length===0&&delete s.properties,s}R();R();function Ut(l){Q(l,"svelte-p30usc",".longText.svelte-p30usc{cursor:pointer;word-break:break-all}")}function Kt(l){let e,i;return{c(){e=b("div"),i=j(l[1])},m(t,s){y(t,e,s),d(e,i)},p(t,s){s&2&&F(i,t[1])},d(t){t&&w(e)}}}function Qt(l){let e,i=(l[2]?l[1]:l[3])+"",t,s,n;return{c(){e=b("div"),t=j(i),h(e,"class","longText svelte-p30usc"),h(e,"title","Double click to expand")},m(a,f){y(a,e,f),d(e,t),s||(n=ee(e,"dblclick",l[4]),s=!0)},p(a,f){f&14&&i!==(i=(a[2]?a[1]:a[3])+"")&&F(t,i)},d(a){a&&w(e),s=!1,n()}}}function Xt(l){let e;function i(n,a){return n[1].length>n[0]?Qt:Kt}let t=i(l,-1),s=t(l);return{c(){s.c(),e=X()},m(n,a){s.m(n,a),y(n,e,a)},p(n,[a]){t===(t=i(n,a))&&s?s.p(n,a):(s.d(1),s=t(n),s&&(s.c(),s.m(e.parentNode,e)))},i:z,o:z,d(n){s.d(n),n&&w(e)}}}function Wt(l,e,i){let{maxLength:t=30}=e,{text:s}=e,{keepEnd:n=!1}=e,a=!1,f="";function r(){i(2,a=!a)}return l.$$set=c=>{"maxLength"in c&&i(0,t=c.maxLength),"text"in c&&i(1,s=c.text),"keepEnd"in c&&i(5,n=c.keepEnd)},l.$$.update=()=>{if(l.$$.dirty&35)e:s&&(s.length>t?n?i(3,f="..."+s.substring(s.length-t)):i(3,f=s.substring(0,t)+"..."):i(3,f=s))},[t,s,a,f,r,n]}var ke=class extends V{constructor(e){super(),G(this,e,Wt,Xt,J,{maxLength:0,text:1,keepEnd:5},Ut)}},pe=ke;function Yt(l){Q(l,"svelte-zx4u3q",".diff-table-container.svelte-zx4u3q.svelte-zx4u3q{overflow-x:auto;max-width:100%}.diff-table-container.svelte-zx4u3q .is-fullwidth.svelte-zx4u3q{width:calc(100% - 1px)}.diff-table-container.svelte-zx4u3q.svelte-zx4u3q:not(:last-child){margin-bottom:1em}")}function Qe(l,e,i){let t=l.slice();return t[1]=e[i],t}function Xe(l){let e,i,t,s,n,a,f=l[0],r=[];for(let o=0;o<f.length;o+=1)r[o]=Ye(Qe(l,f,o));let c=o=>C(r[o],1,1,()=>{r[o]=null});return{c(){e=b("div"),i=b("table"),t=b("thead"),t.innerHTML=`<tr><th>Type</th> 
                    <th>Location</th> 
                    <th>Left Value</th> 
                    <th>Right Value</th></tr>`,s=A(),n=b("tbody");for(let o=0;o<r.length;o+=1)r[o].c();h(i,"class","table is-bordered is-striped is-narrow is-hoverable is-fullwidth svelte-zx4u3q"),h(e,"class","diff-table-container svelte-zx4u3q")},m(o,m){y(o,e,m),d(e,i),d(i,t),d(i,s),d(i,n);for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(n,null);a=!0},p(o,m){if(m&1){f=o[0];let p;for(p=0;p<f.length;p+=1){let u=Qe(o,f,p);r[p]?(r[p].p(u,m),g(r[p],1)):(r[p]=Ye(u),r[p].c(),g(r[p],1),r[p].m(n,null))}for(I(),p=f.length;p<r.length;p+=1)c(p);P()}},i(o){if(!a){for(let m=0;m<f.length;m+=1)g(r[m]);a=!0}},o(o){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)C(r[m]);a=!1},d(o){o&&w(e),Z(r,o)}}}function We(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function Ye(l){let e,i,t,s,n=l[1].diffType+"",a,f,r,c,o,m,p,u,_,E,k,T,D,v=!l[1].isBackwardCompatible&&We(l);return o=new pe({props:{text:l[1].path||"",maxLength:xt,keepEnd:!0}}),u=new pe({props:{text:l[1].leftValue?JSON.stringify(l[1].leftValue):"",maxLength:Ze}}),k=new pe({props:{text:l[1].rightValue?JSON.stringify(l[1].rightValue):"",maxLength:Ze}}),{c(){e=b("tr"),i=b("td"),t=b("span"),v&&v.c(),s=A(),a=j(n),r=A(),c=b("td"),B(o.$$.fragment),m=A(),p=b("td"),B(u.$$.fragment),_=A(),E=b("td"),B(k.$$.fragment),T=A(),h(t,"class",f="tag "+K[l[1].diffType]+" svelte-zx4u3q")},m($,O){y($,e,O),d(e,i),d(i,t),v&&v.m(t,null),d(t,s),d(t,a),d(e,r),d(e,c),N(o,c,null),d(e,m),d(e,p),N(u,p,null),d(e,_),d(e,E),N(k,E,null),d(e,T),D=!0},p($,O){$[1].isBackwardCompatible?v&&(v.d(1),v=null):v||(v=We($),v.c(),v.m(t,s)),(!D||O&1)&&n!==(n=$[1].diffType+"")&&F(a,n),(!D||O&1&&f!==(f="tag "+K[$[1].diffType]+" svelte-zx4u3q"))&&h(t,"class",f);let q={};O&1&&(q.text=$[1].path||""),o.$set(q);let H={};O&1&&(H.text=$[1].leftValue?JSON.stringify($[1].leftValue):""),u.$set(H);let Y={};O&1&&(Y.text=$[1].rightValue?JSON.stringify($[1].rightValue):""),k.$set(Y)},i($){D||(g(o.$$.fragment,$),g(u.$$.fragment,$),g(k.$$.fragment,$),D=!0)},o($){C(o.$$.fragment,$),C(u.$$.fragment,$),C(k.$$.fragment,$),D=!1},d($){$&&w(e),v&&v.d(),M(o),M(u),M(k)}}}function Zt(l){let e,i,t=l[0]&&l[0].length>0&&Xe(l);return{c(){t&&t.c(),e=X()},m(s,n){t&&t.m(s,n),y(s,e,n),i=!0},p(s,[n]){s[0]&&s[0].length>0?t?(t.p(s,n),n&1&&g(t,1)):(t=Xe(s),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(I(),C(t,1,1,()=>{t=null}),P())},i(s){i||(g(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&w(e)}}}var xt=30,Ze=120;function ei(l,e,i){let{diffItems:t}=e;return l.$$set=s=>{"diffItems"in s&&i(0,t=s.diffItems)},[t]}var ye=class extends V{constructor(e){super(),G(this,e,ei,Zt,J,{diffItems:0},Yt)}},x=ye;R();function ti(l){Q(l,"svelte-1w93qj4","table.table.is-ghost.svelte-1w93qj4 td.svelte-1w93qj4,table.table.is-ghost.svelte-1w93qj4 th.svelte-1w93qj4{border:0}table.table.is-ghost.svelte-1w93qj4 td.svelte-1w93qj4:first-child,table.table.is-ghost.svelte-1w93qj4 th.svelte-1w93qj4:first-child{margin-left:0;padding-left:0}.table.svelte-1w93qj4.svelte-1w93qj4:not(:last-child){margin-bottom:0.5rem}.diff-model-container.svelte-1w93qj4.svelte-1w93qj4{overflow-x:auto;max-width:100%}.diff-model-container.svelte-1w93qj4 .is-fullwidth.svelte-1w93qj4{width:calc(100% - 1px)}")}function xe(l,e,i){let t=l.slice();return t[2]=e[i][0],t[3]=e[i][1],t}function et(l,e,i){let t=l.slice();return t[6]=e[i][0],t[7]=e[i][1],t}function tt(l){let e,i,t,s,n=l[1].length>0&&it(l),a=l[0].properties&&rt(l),f=l[0].items&&ut(l);return{c(){e=b("div"),n&&n.c(),i=A(),a&&a.c(),t=A(),f&&f.c(),h(e,"class","diff-model-container svelte-1w93qj4")},m(r,c){y(r,e,c),n&&n.m(e,null),d(e,i),a&&a.m(e,null),d(e,t),f&&f.m(e,null),s=!0},p(r,c){r[1].length>0?n?n.p(r,c):(n=it(r),n.c(),n.m(e,i)):n&&(n.d(1),n=null),r[0].properties?a?(a.p(r,c),c&1&&g(a,1)):(a=rt(r),a.c(),g(a,1),a.m(e,t)):a&&(I(),C(a,1,1,()=>{a=null}),P()),r[0].items?f?(f.p(r,c),c&1&&g(f,1)):(f=ut(r),f.c(),g(f,1),f.m(e,null)):f&&(I(),C(f,1,1,()=>{f=null}),P())},i(r){s||(g(a),g(f),s=!0)},o(r){C(a),C(f),s=!1},d(r){r&&w(e),n&&n.d(),a&&a.d(),f&&f.d()}}}function it(l){let e,i,t=l[1],s=[];for(let n=0;n<t.length;n+=1)s[n]=at(et(l,t,n));return{c(){e=b("table"),i=b("tbody");for(let n=0;n<s.length;n+=1)s[n].c();h(e,"class","table is-narrow is-ghost svelte-1w93qj4")},m(n,a){y(n,e,a),d(e,i);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(i,null)},p(n,a){if(a&2){t=n[1];let f;for(f=0;f<t.length;f+=1){let r=et(n,t,f);s[f]?s[f].p(r,a):(s[f]=at(r),s[f].c(),s[f].m(i,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=t.length}},d(n){n&&w(e),Z(s,n)}}}function lt(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function st(l){let e,i=JSON.stringify(l[7].leftValue)+"",t;return{c(){e=b("span"),t=j(i)},m(s,n){y(s,e,n),d(e,t)},p(s,n){n&2&&i!==(i=JSON.stringify(s[7].leftValue)+"")&&F(t,i)},d(s){s&&w(e)}}}function nt(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-right-long")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function ft(l){let e,i=JSON.stringify(l[7].rightValue)+"",t;return{c(){e=b("span"),t=j(i)},m(s,n){y(s,e,n),d(e,t)},p(s,n){n&2&&i!==(i=JSON.stringify(s[7].rightValue)+"")&&F(t,i)},d(s){s&&w(e)}}}function at(l){let e,i,t,s,n=l[7].diffType+"",a,f,r,c,o=l[6]+"",m,p,u,_,E,k,T,D=!l[7].isBackwardCompatible&&lt(l),v=l[7].leftValue&&st(l),$=l[7].diffType==="Modified"&&nt(l),O=l[7].rightValue&&ft(l);return{c(){e=b("tr"),i=b("td"),t=b("span"),D&&D.c(),s=A(),a=j(n),r=A(),c=b("th"),m=j(o),p=j(":"),u=A(),_=b("td"),v&&v.c(),E=A(),$&&$.c(),k=A(),O&&O.c(),T=A(),h(t,"class",f="tag "+K[l[7].diffType]+" svelte-1w93qj4"),h(i,"class","svelte-1w93qj4"),h(c,"class","svelte-1w93qj4"),h(_,"class","svelte-1w93qj4")},m(q,H){y(q,e,H),d(e,i),d(i,t),D&&D.m(t,null),d(t,s),d(t,a),d(e,r),d(e,c),d(c,m),d(c,p),d(e,u),d(e,_),v&&v.m(_,null),d(_,E),$&&$.m(_,null),d(_,k),O&&O.m(_,null),d(e,T)},p(q,H){q[7].isBackwardCompatible?D&&(D.d(1),D=null):D||(D=lt(q),D.c(),D.m(t,s)),H&2&&n!==(n=q[7].diffType+"")&&F(a,n),H&2&&f!==(f="tag "+K[q[7].diffType]+" svelte-1w93qj4")&&h(t,"class",f),H&2&&o!==(o=q[6]+"")&&F(m,o),q[7].leftValue?v?v.p(q,H):(v=st(q),v.c(),v.m(_,E)):v&&(v.d(1),v=null),q[7].diffType==="Modified"?$||($=nt(q),$.c(),$.m(_,k)):$&&($.d(1),$=null),q[7].rightValue?O?O.p(q,H):(O=ft(q),O.c(),O.m(_,null)):O&&(O.d(1),O=null)},d(q){q&&w(e),D&&D.d(),v&&v.d(),$&&$.d(),O&&O.d()}}}function rt(l){let e,i,t,s=Object.entries(l[0].properties),n=[];for(let f=0;f<s.length;f+=1)n[f]=mt(xe(l,s,f));let a=f=>C(n[f],1,1,()=>{n[f]=null});return{c(){e=b("table"),i=b("tbody");for(let f=0;f<n.length;f+=1)n[f].c();h(e,"class","table is-bordered is-narrow is-fullwidth svelte-1w93qj4")},m(f,r){y(f,e,r),d(e,i);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(i,null);t=!0},p(f,r){if(r&1){s=Object.entries(f[0].properties);let c;for(c=0;c<s.length;c+=1){let o=xe(f,s,c);n[c]?(n[c].p(o,r),g(n[c],1)):(n[c]=mt(o),n[c].c(),g(n[c],1),n[c].m(i,null))}for(I(),c=s.length;c<n.length;c+=1)a(c);P()}},i(f){if(!t){for(let r=0;r<s.length;r+=1)g(n[r]);t=!0}},o(f){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)C(n[r]);t=!1},d(f){f&&w(e),Z(n,f)}}}function ot(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function ct(l){let e,i,t=l[3].diffType+"",s,n,a=!l[3].isBackwardCompatible&&pt(l);return{c(){e=b("span"),a&&a.c(),i=A(),s=j(t),h(e,"class",n="tag "+K[l[3].diffType]+" svelte-1w93qj4")},m(f,r){y(f,e,r),a&&a.m(e,null),d(e,i),d(e,s)},p(f,r){f[3].isBackwardCompatible?a&&(a.d(1),a=null):a||(a=pt(f),a.c(),a.m(e,i)),r&1&&t!==(t=f[3].diffType+"")&&F(s,t),r&1&&n!==(n="tag "+K[f[3].diffType]+" svelte-1w93qj4")&&h(e,"class",n)},d(f){f&&w(e),a&&a.d()}}}function pt(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function ii(l){let e=JSON.stringify(me(l[3]))+"",i;return{c(){i=j(e)},m(t,s){y(t,i,s)},p(t,s){s&1&&e!==(e=JSON.stringify(me(t[3]))+"")&&F(i,e)},i:z,o:z,d(t){t&&w(i)}}}function li(l){let e,i;return e=new le({props:{diffModel:l[3]}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.diffModel=t[3]),e.$set(n)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function mt(l){let e,i,t,s=l[2]+"",n,a,f,r,c,o,m,p,u=!l[3].isBackwardCompatible&&ot(l),_=l[3].diffType!=="Modified"&&ct(l),E=[li,ii],k=[];function T(D,v){return D[3].diffType==="Modified"?0:1}return c=T(l,-1),o=k[c]=E[c](l),{c(){e=b("tr"),i=b("td"),u&&u.c(),t=A(),n=j(s),a=A(),_&&_.c(),f=A(),r=b("td"),o.c(),m=A()},m(D,v){y(D,e,v),d(e,i),u&&u.m(i,null),d(i,t),d(i,n),d(i,a),_&&_.m(i,null),d(e,f),d(e,r),k[c].m(r,null),d(e,m),p=!0},p(D,v){D[3].isBackwardCompatible?u&&(u.d(1),u=null):u||(u=ot(D),u.c(),u.m(i,t)),(!p||v&1)&&s!==(s=D[2]+"")&&F(n,s),D[3].diffType!=="Modified"?_?_.p(D,v):(_=ct(D),_.c(),_.m(i,null)):_&&(_.d(1),_=null);let $=c;c=T(D,v),c===$?k[c].p(D,v):(I(),C(k[$],1,1,()=>{k[$]=null}),P(),o=k[c],o?o.p(D,v):(o=k[c]=E[c](D),o.c()),g(o,1),o.m(r,null))},i(D){p||(g(o),p=!0)},o(D){C(o),p=!1},d(D){D&&w(e),u&&u.d(),_&&_.d(),k[c].d()}}}function ut(l){let e,i,t,s,n,a,f,r,c,o,m=!l[0].items.isBackwardCompatible&&dt(l),p=l[0].items.diffType!=="Modified"&&_t(l),u=[ni,si],_=[];function E(k,T){return k[0].items.diffType==="Modified"?0:1}return r=E(l,-1),c=_[r]=u[r](l),{c(){e=b("table"),i=b("tbody"),t=b("tr"),s=b("td"),m&&m.c(),n=j(`
                            []
                            `),p&&p.c(),a=A(),f=b("td"),c.c(),h(e,"class","table is-bordered is-narrow is-fullwidth svelte-1w93qj4")},m(k,T){y(k,e,T),d(e,i),d(i,t),d(t,s),m&&m.m(s,null),d(s,n),p&&p.m(s,null),d(t,a),d(t,f),_[r].m(f,null),o=!0},p(k,T){k[0].items.isBackwardCompatible?m&&(m.d(1),m=null):m||(m=dt(k),m.c(),m.m(s,n)),k[0].items.diffType!=="Modified"?p?p.p(k,T):(p=_t(k),p.c(),p.m(s,null)):p&&(p.d(1),p=null);let D=r;r=E(k,T),r===D?_[r].p(k,T):(I(),C(_[D],1,1,()=>{_[D]=null}),P(),c=_[r],c?c.p(k,T):(c=_[r]=u[r](k),c.c()),g(c,1),c.m(f,null))},i(k){o||(g(c),o=!0)},o(k){C(c),o=!1},d(k){k&&w(e),m&&m.d(),p&&p.d(),_[r].d()}}}function dt(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function _t(l){let e,i,t=l[0].items.diffType+"",s,n,a=!l[0].items.isBackwardCompatible&&bt(l);return{c(){e=b("span"),a&&a.c(),i=A(),s=j(t),h(e,"class",n="tag "+K[l[0].items.diffType]+" svelte-1w93qj4")},m(f,r){y(f,e,r),a&&a.m(e,null),d(e,i),d(e,s)},p(f,r){f[0].items.isBackwardCompatible?a&&(a.d(1),a=null):a||(a=bt(f),a.c(),a.m(e,i)),r&1&&t!==(t=f[0].items.diffType+"")&&F(s,t),r&1&&n!==(n="tag "+K[f[0].items.diffType]+" svelte-1w93qj4")&&h(e,"class",n)},d(f){f&&w(e),a&&a.d()}}}function bt(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function si(l){let e=JSON.stringify(me(l[0].items))+"",i;return{c(){i=j(e)},m(t,s){y(t,i,s)},p(t,s){s&1&&e!==(e=JSON.stringify(me(t[0].items))+"")&&F(i,e)},i:z,o:z,d(t){t&&w(i)}}}function ni(l){let e,i;return e=new le({props:{diffModel:l[0].items}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.diffModel=t[0].items),e.$set(n)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function fi(l){let e,i,t=l[0]&&tt(l);return{c(){t&&t.c(),e=X()},m(s,n){t&&t.m(s,n),y(s,e,n),i=!0},p(s,[n]){s[0]?t?(t.p(s,n),n&1&&g(t,1)):(t=tt(s),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(I(),C(t,1,1,()=>{t=null}),P())},i(s){i||(g(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&w(e)}}}function me(l){return Object.fromEntries(Object.entries(l).filter(([e,i])=>["diffType","isBackwardCompatible"].indexOf(e)===-1))}function ai(l,e,i){let{diffModel:t}=e,s=[];return l.$$set=n=>{"diffModel"in n&&i(0,t=n.diffModel)},l.$$.update=()=>{if(l.$$.dirty&1)e:t&&i(1,s=Object.entries(t).filter(([n,a])=>ne.indexOf(n)!==-1))},[t,s]}var le=class extends V{constructor(e){super(),G(this,e,ai,fi,J,{diffModel:0},ti)}},we=le;function ri(l){Q(l,"svelte-11qy9pw","details[open].svelte-11qy9pw:not(:last-child){margin-bottom:1.5em}.table-title.svelte-11qy9pw{font-weight:bold}")}function gt(l,e,i){let t=l.slice();return t[3]=e[i][0],t[4]=e[i][1],t}function ht(l,e,i){let t=l.slice();return t[7]=e[i][0],t[8]=e[i][1],t}function kt(l){let e,i,t,s=!l[0].metadata.length&&!Object.keys(l[0].services).length,n,a,f=!l[0].isBackwardCompatible&&yt(l),r=l[0].metadata.length>0&&wt(l),c=Object.entries(l[0].services),o=[];for(let u=0;u<c.length;u+=1)o[u]=Nt(gt(l,c,u));let m=u=>C(o[u],1,1,()=>{o[u]=null}),p=s&&Mt(l);return{c(){f&&f.c(),e=A(),r&&r.c(),i=A();for(let u=0;u<o.length;u+=1)o[u].c();t=A(),p&&p.c(),n=X()},m(u,_){f&&f.m(u,_),y(u,e,_),r&&r.m(u,_),y(u,i,_);for(let E=0;E<o.length;E+=1)o[E]&&o[E].m(u,_);y(u,t,_),p&&p.m(u,_),y(u,n,_),a=!0},p(u,_){if(u[0].isBackwardCompatible?f&&(f.d(1),f=null):f||(f=yt(u),f.c(),f.m(e.parentNode,e)),u[0].metadata.length>0?r?(r.p(u,_),_&1&&g(r,1)):(r=wt(u),r.c(),g(r,1),r.m(i.parentNode,i)):r&&(I(),C(r,1,1,()=>{r=null}),P()),_&1){c=Object.entries(u[0].services);let E;for(E=0;E<c.length;E+=1){let k=gt(u,c,E);o[E]?(o[E].p(k,_),g(o[E],1)):(o[E]=Nt(k),o[E].c(),g(o[E],1),o[E].m(t.parentNode,t))}for(I(),E=c.length;E<o.length;E+=1)m(E);P()}_&1&&(s=!u[0].metadata.length&&!Object.keys(u[0].services).length),s?p||(p=Mt(u),p.c(),p.m(n.parentNode,n)):p&&(p.d(1),p=null)},i(u){if(!a){g(r);for(let _=0;_<c.length;_+=1)g(o[_]);a=!0}},o(u){C(r),o=o.filter(Boolean);for(let _=0;_<o.length;_+=1)C(o[_]);a=!1},d(u){f&&f.d(u),u&&w(e),r&&r.d(u),u&&w(i),Z(o,u),u&&w(t),p&&p.d(u),u&&w(n)}}}function yt(l){let e;return{c(){e=b("div"),e.innerHTML=`<i class="fa-solid fa-triangle-exclamation mx-1" title="Not backward compatible change"></i>
                Not backward compatible changes detected`,h(e,"class","notification is-small is-info")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function wt(l){let e,i,t,s,n;return s=new x({props:{diffItems:l[0].metadata}}),{c(){e=b("details"),i=b("summary"),i.textContent="Apis Metadata",t=A(),B(s.$$.fragment),h(i,"class","title is-5"),h(e,"class","svelte-11qy9pw")},m(a,f){y(a,e,f),d(e,i),d(e,t),N(s,e,null),n=!0},p(a,f){let r={};f&1&&(r.diffItems=a[0].metadata),s.$set(r)},i(a){n||(g(s.$$.fragment,a),n=!0)},o(a){C(s.$$.fragment,a),n=!1},d(a){a&&w(e),M(s)}}}function Dt(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function vt(l){let e,i,t,s,n,a=!l[4].metadata.isBackwardCompatible&&Ct(l);return s=new x({props:{diffItems:l[4].metadata.items}}),{c(){e=b("p"),a&&a.c(),i=j(`
                        Metadata`),t=A(),B(s.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(f,r){y(f,e,r),a&&a.m(e,null),d(e,i),y(f,t,r),N(s,f,r),n=!0},p(f,r){f[4].metadata.isBackwardCompatible?a&&(a.d(1),a=null):a||(a=Ct(f),a.c(),a.m(e,i));let c={};r&1&&(c.diffItems=f[4].metadata.items),s.$set(c)},i(f){n||(g(s.$$.fragment,f),n=!0)},o(f){C(s.$$.fragment,f),n=!1},d(f){f&&w(e),a&&a.d(),f&&w(t),M(s,f)}}}function Ct(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function $t(l){let e,i,t,s,n,a=!l[4].parameters.isBackwardCompatible&&Et(l);return s=new x({props:{diffItems:l[4].parameters.items}}),{c(){e=b("p"),a&&a.c(),i=j(`
                        Request Parameters`),t=A(),B(s.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(f,r){y(f,e,r),a&&a.m(e,null),d(e,i),y(f,t,r),N(s,f,r),n=!0},p(f,r){f[4].parameters.isBackwardCompatible?a&&(a.d(1),a=null):a||(a=Et(f),a.c(),a.m(e,i));let c={};r&1&&(c.diffItems=f[4].parameters.items),s.$set(c)},i(f){n||(g(s.$$.fragment,f),n=!0)},o(f){C(s.$$.fragment,f),n=!1},d(f){f&&w(e),a&&a.d(),f&&w(t),M(s,f)}}}function Et(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function Ot(l){let e,i,t,s,n,a,f,r=!l[4].request.isBackwardCompatible&&At(l);return s=new x({props:{diffItems:l[4].request.items}}),a=new we({props:{diffModel:l[4].request.model}}),{c(){e=b("p"),r&&r.c(),i=j(`
                        Request Body`),t=A(),B(s.$$.fragment),n=A(),B(a.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(c,o){y(c,e,o),r&&r.m(e,null),d(e,i),y(c,t,o),N(s,c,o),y(c,n,o),N(a,c,o),f=!0},p(c,o){c[4].request.isBackwardCompatible?r&&(r.d(1),r=null):r||(r=At(c),r.c(),r.m(e,i));let m={};o&1&&(m.diffItems=c[4].request.items),s.$set(m);let p={};o&1&&(p.diffModel=c[4].request.model),a.$set(p)},i(c){f||(g(s.$$.fragment,c),g(a.$$.fragment,c),f=!0)},o(c){C(s.$$.fragment,c),C(a.$$.fragment,c),f=!1},d(c){c&&w(e),r&&r.d(),c&&w(t),M(s,c),c&&w(n),M(a,c)}}}function At(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function Tt(l){let e,i,t=Object.entries(l[4].responses),s=[];for(let a=0;a<t.length;a+=1)s[a]=Bt(ht(l,t,a));let n=a=>C(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=X()},m(a,f){for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(a,f);y(a,e,f),i=!0},p(a,f){if(f&1){t=Object.entries(a[4].responses);let r;for(r=0;r<t.length;r+=1){let c=ht(a,t,r);s[r]?(s[r].p(c,f),g(s[r],1)):(s[r]=Bt(c),s[r].c(),g(s[r],1),s[r].m(e.parentNode,e))}for(I(),r=t.length;r<s.length;r+=1)n(r);P()}},i(a){if(!i){for(let f=0;f<t.length;f+=1)g(s[f]);i=!0}},o(a){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)C(s[f]);i=!1},d(a){Z(s,a),a&&w(e)}}}function qt(l){let e,i,t=l[7]+"",s,n,a,f,r,c,o=!l[8].isBackwardCompatible&&St(l);return a=new x({props:{diffItems:l[8].items}}),r=new we({props:{diffModel:l[8].model}}),{c(){e=b("p"),o&&o.c(),i=j(`
                                Response: `),s=j(t),n=A(),B(a.$$.fragment),f=A(),B(r.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(m,p){y(m,e,p),o&&o.m(e,null),d(e,i),d(e,s),y(m,n,p),N(a,m,p),y(m,f,p),N(r,m,p),c=!0},p(m,p){m[8].isBackwardCompatible?o&&(o.d(1),o=null):o||(o=St(m),o.c(),o.m(e,i)),(!c||p&1)&&t!==(t=m[7]+"")&&F(s,t);let u={};p&1&&(u.diffItems=m[8].items),a.$set(u);let _={};p&1&&(_.diffModel=m[8].model),r.$set(_)},i(m){c||(g(a.$$.fragment,m),g(r.$$.fragment,m),c=!0)},o(m){C(a.$$.fragment,m),C(r.$$.fragment,m),c=!1},d(m){m&&w(e),o&&o.d(),m&&w(n),M(a,m),m&&w(f),M(r,m)}}}function St(l){let e;return{c(){e=b("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function Bt(l){let e,i,t=(l[8].items.length||l[8].model)&&qt(l);return{c(){t&&t.c(),e=X()},m(s,n){t&&t.m(s,n),y(s,e,n),i=!0},p(s,n){s[8].items.length||s[8].model?t?(t.p(s,n),n&1&&g(t,1)):(t=qt(s),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(I(),C(t,1,1,()=>{t=null}),P())},i(s){i||(g(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&w(e)}}}function Nt(l){let e,i,t=l[3]+"",s,n,a,f,r=l[4].diffType+"",c,o,m,p,u,_,E,k=!l[4].isBackwardCompatible&&Dt(l),T=l[4].metadata&&l[4].metadata.items.length&&vt(l),D=l[4].parameters&&l[4].parameters.items.length&&$t(l),v=l[4].request&&(l[4].request.items.length||l[4].request.model)&&Ot(l),$=l[4].responses&&Tt(l);return{c(){e=b("details"),i=b("summary"),s=j(t),n=A(),a=b("span"),k&&k.c(),f=A(),c=j(r),m=A(),T&&T.c(),p=A(),D&&D.c(),u=A(),v&&v.c(),_=A(),$&&$.c(),h(a,"class",o="tag "+K[l[4].diffType]+" svelte-11qy9pw"),h(i,"class","title is-5"),e.open=!0,h(e,"class","svelte-11qy9pw")},m(O,q){y(O,e,q),d(e,i),d(i,s),d(i,n),d(i,a),k&&k.m(a,null),d(a,f),d(a,c),d(e,m),T&&T.m(e,null),d(e,p),D&&D.m(e,null),d(e,u),v&&v.m(e,null),d(e,_),$&&$.m(e,null),E=!0},p(O,q){(!E||q&1)&&t!==(t=O[3]+"")&&F(s,t),O[4].isBackwardCompatible?k&&(k.d(1),k=null):k||(k=Dt(O),k.c(),k.m(a,f)),(!E||q&1)&&r!==(r=O[4].diffType+"")&&F(c,r),(!E||q&1&&o!==(o="tag "+K[O[4].diffType]+" svelte-11qy9pw"))&&h(a,"class",o),O[4].metadata&&O[4].metadata.items.length?T?(T.p(O,q),q&1&&g(T,1)):(T=vt(O),T.c(),g(T,1),T.m(e,p)):T&&(I(),C(T,1,1,()=>{T=null}),P()),O[4].parameters&&O[4].parameters.items.length?D?(D.p(O,q),q&1&&g(D,1)):(D=$t(O),D.c(),g(D,1),D.m(e,u)):D&&(I(),C(D,1,1,()=>{D=null}),P()),O[4].request&&(O[4].request.items.length||O[4].request.model)?v?(v.p(O,q),q&1&&g(v,1)):(v=Ot(O),v.c(),g(v,1),v.m(e,_)):v&&(I(),C(v,1,1,()=>{v=null}),P()),O[4].responses?$?($.p(O,q),q&1&&g($,1)):($=Tt(O),$.c(),g($,1),$.m(e,null)):$&&(I(),C($,1,1,()=>{$=null}),P())},i(O){E||(g(T),g(D),g(v),g($),E=!0)},o(O){C(T),C(D),C(v),C($),E=!1},d(O){O&&w(e),k&&k.d(),T&&T.d(),D&&D.d(),v&&v.d(),$&&$.d()}}}function Mt(l){let e;return{c(){e=b("p"),e.textContent="No differences detected"},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function oi(l){let e,i,t=l[0]&&kt(l);return{c(){e=b("div"),t&&t.c()},m(s,n){y(s,e,n),t&&t.m(e,null),i=!0},p(s,[n]){s[0]?t?(t.p(s,n),n&1&&g(t,1)):(t=kt(s),t.c(),g(t,1),t.m(e,null)):t&&(I(),C(t,1,1,()=>{t=null}),P())},i(s){i||(g(t),i=!0)},o(s){C(t),i=!1},d(s){s&&w(e),t&&t.d()}}}function ci(l,e,i){let{leftApi:t}=e,{rightApi:s}=e,n;return l.$$set=a=>{"leftApi"in a&&i(1,t=a.leftApi),"rightApi"in a&&i(2,s=a.rightApi)},l.$$.update=()=>{if(l.$$.dirty&7)e:t&&s&&(i(0,n=Ke(t,s)),console.log({apiDiff:n}))},[n,t,s]}var De=class extends V{constructor(e){super(),G(this,e,ci,oi,J,{leftApi:1,rightApi:2},ri)}},jt=De;R();function Rt(l){let e;return{c(){e=j("Work in progress")},m(i,t){y(i,e,t)},d(i){i&&w(e)}}}function pi(l){let e,i=l[0]&&l[1]&&Rt(l);return{c(){e=b("div"),i&&i.c()},m(t,s){y(t,e,s),i&&i.m(e,null)},p(t,[s]){t[0]&&t[1]?i||(i=Rt(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:z,o:z,d(t){t&&w(e),i&&i.d()}}}function mi(l,e,i){let{leftApi:t}=e,{rightApi:s}=e;return l.$$set=n=>{"leftApi"in n&&i(0,t=n.leftApi),"rightApi"in n&&i(1,s=n.rightApi)},[t,s]}var ve=class extends V{constructor(e){super(),G(this,e,mi,pi,J,{leftApi:0,rightApi:1})}},It=ve;R();function ui(l){Q(l,"svelte-1gj2ttm",".tabs-with-options.svelte-1gj2ttm.svelte-1gj2ttm{display:flex;flex-wrap:nowrap;align-content:center;align-items:stretch}.tabs-with-options.svelte-1gj2ttm .tabs.svelte-1gj2ttm{flex-grow:1;margin-bottom:0}")}function di(l){let e,i,t,s,n,a,f,r,c,o,m,p,u,_;return{c(){e=b("div"),i=b("div"),t=b("ul"),s=b("li"),n=b("a"),n.innerHTML=`<span class="icon is-small"><i class="fas fa-circle-nodes"></i></span> 
                    <span>Api Diff</span>`,r=A(),c=b("li"),o=b("a"),o.innerHTML=`<span class="icon is-small"><i class="fas fa-diagram-project"></i></span> 
                    <span>Diagrams Diff</span>`,h(n,"href",a=""),h(s,"class",f=l[0]==="api-diff"?"is-active":""),h(o,"href",m=""),h(c,"class",p=l[0]==="diagrams-diff"?"is-active":""),h(i,"class","tabs is-boxed is-floating svelte-1gj2ttm"),h(e,"class","tabs-with-options svelte-1gj2ttm")},m(E,k){y(E,e,k),d(e,i),d(i,t),d(t,s),d(s,n),d(t,r),d(t,c),d(c,o),u||(_=[ee(n,"click",de(l[1])),ee(o,"click",de(l[2]))],u=!0)},p(E,[k]){k&1&&f!==(f=E[0]==="api-diff"?"is-active":"")&&h(s,"class",f),k&1&&p!==(p=E[0]==="diagrams-diff"?"is-active":"")&&h(c,"class",p)},i:z,o:z,d(E){E&&w(e),u=!1,Se(_)}}}function _i(l,e,i){let{selectedTab:t="api-diff"}=e,s=()=>i(0,t="api-diff"),n=()=>i(0,t="diagrams-diff");return l.$$set=a=>{"selectedTab"in a&&i(0,t=a.selectedTab)},[t,s,n]}var Ce=class extends V{constructor(e){super(),G(this,e,_i,di,J,{selectedTab:0},ui)}},Pt=Ce;function bi(l){Q(l,"svelte-1nizkyl",".is-center.svelte-1nizkyl{display:flex;justify-content:center;align-items:center;flex-direction:column}")}function Ft(l){let e,i,t,s,n,a,f,r;function c(m){l[5](m)}let o={};return l[2]!==void 0&&(o.selectedTab=l[2]),e=new Pt({props:o}),Me.push(()=>Re(e,"selectedTab",c)),n=new _e({props:{isVisible:l[2]==="api-diff",$$slots:{default:[gi]},$$scope:{ctx:l}}}),f=new _e({props:{isVisible:l[2]==="diagrams-diff",$$slots:{default:[hi]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment),t=A(),s=b("div"),B(n.$$.fragment),a=A(),B(f.$$.fragment),h(s,"class","box flat-top")},m(m,p){N(e,m,p),y(m,t,p),y(m,s,p),N(n,s,null),d(s,a),N(f,s,null),r=!0},p(m,p){let u={};!i&&p&4&&(i=!0,u.selectedTab=m[2],je(()=>i=!1)),e.$set(u);let _={};p&4&&(_.isVisible=m[2]==="api-diff"),p&131&&(_.$$scope={dirty:p,ctx:m}),n.$set(_);let E={};p&4&&(E.isVisible=m[2]==="diagrams-diff"),p&131&&(E.$$scope={dirty:p,ctx:m}),f.$set(E)},i(m){r||(g(e.$$.fragment,m),g(n.$$.fragment,m),g(f.$$.fragment,m),r=!0)},o(m){C(e.$$.fragment,m),C(n.$$.fragment,m),C(f.$$.fragment,m),r=!1},d(m){M(e,m),m&&w(t),m&&w(s),M(n),M(f)}}}function gi(l){let e,i;return e=new jt({props:{leftApi:l[0].api,rightApi:l[1].api}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.leftApi=t[0].api),s&2&&(n.rightApi=t[1].api),e.$set(n)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function hi(l){let e,i;return e=new It({props:{leftApi:l[0].api,rightApi:l[1].api}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.leftApi=t[0].api),s&2&&(n.rightApi=t[1].api),e.$set(n)},i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function ki(l){let e,i,t,s,n,a,f,r,c,o,m,p,u,_,E,k,T,D,v,$,O,q,H,Y;e=new Le({props:{activePage:"compare"}}),s=new se({props:{errors:["This feature is not completed yet"]}}),o=new be({props:{browserHash:l[0].hash,storagePrefix:"left"}}),o.$on("apiChange",function(){ue(l[4](l[0]))&&l[4](l[0]).apply(this,arguments)}),p=new se({props:{errors:l[0].errors}}),T=new be({props:{browserHash:l[1].hash,storagePrefix:"right"}}),T.$on("apiChange",function(){ue(l[4](l[1]))&&l[4](l[1]).apply(this,arguments)}),v=new se({props:{errors:l[1].errors}});let L=l[0].api&&l[1].api&&Ft(l);return H=new Ie({}),{c(){B(e.$$.fragment),i=A(),t=b("div"),B(s.$$.fragment),n=A(),a=b("section"),a.innerHTML=`<div class="hero-body"><h1 class="title">Api Compare</h1> 
      <p class="subtitle">List changes between two Apis</p></div>`,f=A(),r=b("div"),c=b("div"),B(o.$$.fragment),m=A(),B(p.$$.fragment),u=A(),_=b("div"),_.innerHTML='<p class="title is-2"><i class="fa-solid fa-right-long"></i></p>',E=A(),k=b("div"),B(T.$$.fragment),D=A(),B(v.$$.fragment),$=A(),L&&L.c(),q=A(),B(H.$$.fragment),h(a,"class","hero is-small"),h(c,"class","column"),h(_,"class","column is-center is-narrow svelte-1nizkyl"),h(k,"class","column"),h(r,"class","columns"),h(t,"class",O="container "+(l[3].fluidLayout?"is-fluid":""))},m(S,U){N(e,S,U),y(S,i,U),y(S,t,U),N(s,t,null),d(t,n),d(t,a),d(t,f),d(t,r),d(r,c),N(o,c,null),d(c,m),N(p,c,null),d(r,u),d(r,_),d(r,E),d(r,k),N(T,k,null),d(k,D),N(v,k,null),d(t,$),L&&L.m(t,null),y(S,q,U),N(H,S,U),Y=!0},p(S,[U]){l=S;let Ee={};U&1&&(Ee.browserHash=l[0].hash),o.$set(Ee);let Oe={};U&1&&(Oe.errors=l[0].errors),p.$set(Oe);let Ae={};U&2&&(Ae.browserHash=l[1].hash),T.$set(Ae);let Te={};U&2&&(Te.errors=l[1].errors),v.$set(Te),l[0].api&&l[1].api?L?(L.p(l,U),U&3&&g(L,1)):(L=Ft(l),L.c(),g(L,1),L.m(t,null)):L&&(I(),C(L,1,1,()=>{L=null}),P()),(!Y||U&8&&O!==(O="container "+(l[3].fluidLayout?"is-fluid":"")))&&h(t,"class",O)},i(S){Y||(g(e.$$.fragment,S),g(s.$$.fragment,S),g(o.$$.fragment,S),g(p.$$.fragment,S),g(T.$$.fragment,S),g(v.$$.fragment,S),g(L),g(H.$$.fragment,S),Y=!0)},o(S){C(e.$$.fragment,S),C(s.$$.fragment,S),C(o.$$.fragment,S),C(p.$$.fragment,S),C(T.$$.fragment,S),C(v.$$.fragment,S),C(L),C(H.$$.fragment,S),Y=!1},d(S){M(e,S),S&&w(i),S&&w(t),M(s),M(o),M(p),M(T),M(v),L&&L.d(),S&&w(q),M(H,S)}}}function yi(l,e,i){let t;Be(l,Fe,o=>i(3,t=o));let s={hash:null,api:null,errors:[]},n={hash:null,api:null,errors:[]},a="api-diff";function f(){let o=new URLSearchParams(window.location.search);s.hash&&o.set("leftApi",s.hash),n.hash&&o.set("rightApi",n.hash),window.history.pushState(null,null,"?"+o.toString())}function r(o){return m=>Pe(this,void 0,void 0,function*(){let p=m.detail.apiObject;if(o.api=null,o.errors=[],o.hash=m.detail.hash,p){try{o.api=He(p),o.api.setModelsTitle()}catch(u){o.errors=[...o.errors,"Error: "+u.message]}if(o.api)try{yield o.api.resolveReferences()}catch(u){console.error(u),o.errors=[...o.errors,"Error while parsing api: "+u.message]}}i(0,s),i(1,n),f()})}Ne(()=>{let o=new URLSearchParams(window.location.search);i(0,s.hash=o.get("leftApi"),s),i(1,n.hash=o.get("rightApi"),n)});function c(o){a=o,i(2,a)}return[s,n,a,t,r,c]}var $e=class extends V{constructor(e){super(),G(this,e,yi,ki,J,{},bi)}},Lt=$e;new Lt({target:document.body});qe();

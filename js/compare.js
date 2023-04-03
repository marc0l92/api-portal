// Project: https://github.com/marc0l92/api-tools
import{a as fe}from"./chunk-NXBIQTT6.js";import{d as Be,l as oe}from"./chunk-7L4OU73F.js";import"./chunk-KYQDACTX.js";import{a as ie}from"./chunk-PT6EMYBK.js";import{$ as N,A as h,B as k,C as x,D as b,E as L,F as A,G as Y,H as ee,I as re,K as _,L as X,P as $e,S as Ae,V as H,W as U,X as d,Y as g,Z as R,_ as M,aa as z,ba as K,ca as Ce,fa as te,h as I,m as ye,n as J,na as Se,o as ve,oa as Oe,p as le,q as F,s as Ee,y as u,z as G}from"./chunk-O7STRZLD.js";I();I();I();I();I();var Z={["Added"]:"is-success",["Modified"]:"is-warning",["Removed"]:"is-danger"},Te=["title","type","example","minLength","maxLength","minItems","maxItems","minProperties","maxProperties","pattern","format","enum","description","required","additionalProperties","readOnly","writeOnly"];I();var Re={title:()=>!0,example:()=>!0,description:()=>!0,type:(t,e)=>e!==null&&t===e,minLength:(t,e,a)=>a===0&&(e===null||t!==null&&t>=e)||a===1&&(t===null||e!==null&&t<=e),maxLength:(t,e,a)=>a===0&&(e===null||t!==null&&t<=e)||a===1&&(t===null||e!==null&&t>=e),minItems:(t,e,a)=>a===0&&(e===null||t!==null&&t>=e)||a===1&&(t===null||e!==null&&t<=e),maxItems:(t,e,a)=>a===0&&(e===null||t!==null&&t<=e)||a===1&&(t===null||e!==null&&t>=e),minProperties:(t,e,a)=>a===0&&(e===null||t!==null&&t>=e)||a===1&&(t===null||e!==null&&t<=e),maxProperties:(t,e,a)=>a===0&&(e===null||t!==null&&t<=e)||a===1&&(t===null||e!==null&&t>=e),pattern:(t,e)=>e===null||t===e,format:(t,e)=>e===null||t===e,enum:(t,e,a)=>a===1||e===null||t!==null&&t.every(i=>e.indexOf(i)!==-1),required:(t,e,a)=>a===0&&(e===null||t!==null&&e.every(i=>t.indexOf(i)!==-1))||a===1&&(t===null||e!==null&&t.every(i=>e.indexOf(i)!==-1)),readOnly:(t,e,a,i)=>a===1||i===!1||t!==!0||e===!0,writeOnly:(t,e,a,i)=>a===0||i===!1||e!==!0||t===!0,additionalProperties:(t,e,a)=>a===1||e!==!0||t===!0},pe=(t,e,a)=>t==="No Changes"||a===!1||e===0&&t==="Removed"||e===1&&t==="Added";function Ie(t,e){let a={isBackwardCompatible:!0,metadata:[],services:{}};a.metadata=se(Me(t),Me(e)).items;let i=e.getServices();for(let s of t.getServices()){let f=i.findIndex(n=>n.getName()===s.getName());if(f>=0){let n=i[f],r={diffType:"Modified",isBackwardCompatible:!0,metadata:{isBackwardCompatible:!0,items:[]},parameters:{isBackwardCompatible:!0,items:[]},request:{isBackwardCompatible:!0,items:[]},responses:{}};r.metadata=se(Ne(s),Ne(n)),r.parameters=bt(s.getRequestParameters(),n.getRequestParameters()),r.request=me(s.getRequest(),n.getRequest(),0),r.responses=_t(s.getResponses(),n.getResponses()),(r.metadata.items.length||r.parameters.items.length||r.request.items.length||Object.keys(r.responses).length)&&(r.isBackwardCompatible&&(r.isBackwardCompatible=r.metadata.isBackwardCompatible&&r.parameters.isBackwardCompatible&&r.request.isBackwardCompatible&&Object.values(r.responses).every(l=>l.isBackwardCompatible)),a.isBackwardCompatible&&(a.isBackwardCompatible=r.isBackwardCompatible),a.services[s.getName()]=r),i.splice(f,1)}else a.isBackwardCompatible=!1,a.services[s.getName()]={diffType:"Removed",isBackwardCompatible:!1}}for(let s of i)a.services[s.getName()]={diffType:"Added",isBackwardCompatible:!0};return a}function Me(t){return Object.fromEntries(Object.entries(t.toJson()).filter(([e,a])=>["paths","definitions","responses","parameters","components"].indexOf(e)===-1))}function Ne(t){return Object.fromEntries(Object.entries(t.toJson()).filter(([e,a])=>["parameters","responses","requestBody"].indexOf(e)===-1))}function qe(t){return Object.fromEntries(Object.entries(t).filter(([e,a])=>["schema"].indexOf(e)===-1))}function ae(t,e,a){return a?`${t}[${e}]`:`${t}/${e}`}function dt(t,e){return t==null?"Added":e==null?"Removed":t===e?"No Changes":"Modified"}function se(t,e,a="",i=[]){let s={isBackwardCompatible:!0,items:[]},f=Object.keys(e);for(let n of Object.keys(t)){let r=f.indexOf(n);if(r>=0){if(typeof t[n]=="object"&&typeof e[n]=="object"){let l=se(t[n],e[n],ae(a,n,Array.isArray(t)),i);s.isBackwardCompatible&&(s.isBackwardCompatible=l.isBackwardCompatible),s.items=s.items.concat(l.items)}else if(t[n]!==e[n]){let l=ae(a,n,Array.isArray(t)),p=i.indexOf(l)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:l,diffType:"Modified",leftValue:t[n],rightValue:e[n],isBackwardCompatible:p})}f.splice(r,1)}else{let l=ae(a,n,Array.isArray(t)),p=i.indexOf(l)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:l,diffType:"Removed",leftValue:t[n],isBackwardCompatible:p})}}for(let n of f){let r=ae(a,n,Array.isArray(e)),l=i.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=l),s.items.push({path:r,diffType:"Added",rightValue:e[n],isBackwardCompatible:l})}return s}function bt(t,e){let a={isBackwardCompatible:!0,items:[]},i=Object.keys(e).map(s=>parseInt(s));for(let s of t){let f=e.findIndex(n=>n.name===s.name&&n.in===s.in);if(f>=0){let n=e[f],r=me(s,n,0);a.isBackwardCompatible&&(a.isBackwardCompatible=r.isBackwardCompatible),a.items=a.items.concat(r.items),i.splice(i.indexOf(f),1)}else a.isBackwardCompatible=!1,a.items.push({path:s["x-path"],diffType:"Removed",leftValue:s,isBackwardCompatible:!1})}for(let s of i){let f=e[s];a.items.push({path:f["x-path"],diffType:"Added",rightValue:f,isBackwardCompatible:!0})}return a}function me(t,e,a){let i={isBackwardCompatible:!0,items:[]};if(!t&&!e)return i;if(!t&&e)return{items:[{path:e["x-path"],diffType:"Added",rightValue:e,isBackwardCompatible:!0}],isBackwardCompatible:!0};if(t&&!e)return{items:[{path:t["x-path"],diffType:"Removed",rightValue:t,isBackwardCompatible:!1}],isBackwardCompatible:!1};let s=["in","name","type","required","schema"],f=se(qe(t),qe(e),t["x-path"],s);return i.model=gt(t.schema,e.schema,a),i.isBackwardCompatible&&(i.isBackwardCompatible=f.isBackwardCompatible&&i.model.isBackwardCompatible),i}function _t(t,e){let a={},i=Object.keys(e);for(let s of Object.keys(t)){let f=t[s],n=i.indexOf(s);if(n>=0){let r=e[s],l=me(f,r,1);l.items.length&&(a[s]=l),i.splice(n,1)}else a[s]={items:[{path:f["x-path"],diffType:"Removed",rightValue:f,isBackwardCompatible:!1}],isBackwardCompatible:!1}}for(let s of i){let f=e[s];a[s]={items:[{path:f["x-path"],diffType:"Added",rightValue:f,isBackwardCompatible:!0}],isBackwardCompatible:!0}}return a}function gt(t,e,a,i=!1){var f,n;if(!t&&!e)return{diffType:"No Changes",isBackwardCompatible:!0,leftValue:t,rightValue:e};if(!t&&e)return{diffType:"Added",isBackwardCompatible:pe("Added",a,i),rightValue:e};if(t&&!e)return{diffType:"Removed",isBackwardCompatible:pe("Removed",a,i),leftValue:t};let s={isBackwardCompatible:!0,diffType:"Modified"};for(let r of Te)s[r]={diffType:dt(t[r],e[r]),isBackwardCompatible:Re[r]((f=t[r])!=null?f:null,(n=e[r])!=null?n:null,a,i),leftValue:t[r],rightValue:e[r]};return s}I();I();function ht(t){G(t,"svelte-p30usc",".longText.svelte-p30usc{cursor:pointer;word-break:break-all}")}function kt(t){let e,a;return{c(){e=b("div"),a=L(t[1])},m(i,s){h(i,e,s),u(e,a)},p(i,s){s&2&&X(a,i[1])},d(i){i&&k(e)}}}function Dt(t){let e,a=(t[2]?t[1]:t[3])+"",i,s,f;return{c(){e=b("div"),i=L(a),_(e,"class","longText svelte-p30usc"),_(e,"title","Double click to expand")},m(n,r){h(n,e,r),u(e,i),s||(f=ee(e,"dblclick",t[4]),s=!0)},p(n,r){r&14&&a!==(a=(n[2]?n[1]:n[3])+"")&&X(i,a)},d(n){n&&k(e),s=!1,f()}}}function wt(t){let e;function a(f,n){return f[1].length>f[0]?Dt:kt}let i=a(t,-1),s=i(t);return{c(){s.c(),e=Y()},m(f,n){s.m(f,n),h(f,e,n)},p(f,[n]){i===(i=a(f,n))&&s?s.p(f,n):(s.d(1),s=i(f),s&&(s.c(),s.m(e.parentNode,e)))},i:J,o:J,d(f){s.d(f),f&&k(e)}}}function yt(t,e,a){let{maxLength:i=30}=e,{text:s}=e,{keepEnd:f=!1}=e,n=!1,r="";function l(){a(2,n=!n)}return t.$$set=p=>{"maxLength"in p&&a(0,i=p.maxLength),"text"in p&&a(1,s=p.text),"keepEnd"in p&&a(5,f=p.keepEnd)},t.$$.update=()=>{if(t.$$.dirty&35)e:s&&(s.length>i?f?a(3,r="..."+s.substring(s.length-i)):a(3,r=s.substring(0,i)+"..."):a(3,r=s))},[i,s,n,r,l,f]}var ce=class extends K{constructor(e){super(),z(this,e,yt,wt,F,{maxLength:0,text:1,keepEnd:5},ht)}},ne=ce;function vt(t){G(t,"svelte-1fdpyhf",".diff-table-container.svelte-1fdpyhf.svelte-1fdpyhf{overflow-x:auto;max-width:100%}.diff-table-container.svelte-1fdpyhf .is-fullwidth.svelte-1fdpyhf{width:calc(100% - 1px)}")}function je(t,e,a){let i=t.slice();return i[1]=e[a],i}function Pe(t){let e,a,i,s,f,n,r=t[0],l=[];for(let o=0;o<r.length;o+=1)l[o]=He(je(t,r,o));let p=o=>g(l[o],1,1,()=>{l[o]=null});return{c(){e=b("div"),a=b("table"),i=b("thead"),i.innerHTML=`<tr><th>Type</th> 
                    <th>Location</th> 
                    <th>Left Value</th> 
                    <th>Right Value</th></tr>`,s=A(),f=b("tbody");for(let o=0;o<l.length;o+=1)l[o].c();_(a,"class","table is-bordered is-striped is-narrow is-hoverable is-fullwidth svelte-1fdpyhf"),_(e,"class","diff-table-container svelte-1fdpyhf")},m(o,E){h(o,e,E),u(e,a),u(a,i),u(a,s),u(a,f);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(f,null);n=!0},p(o,E){if(E&1){r=o[0];let c;for(c=0;c<r.length;c+=1){let m=je(o,r,c);l[c]?(l[c].p(m,E),d(l[c],1)):(l[c]=He(m),l[c].c(),d(l[c],1),l[c].m(f,null))}for(H(),c=r.length;c<l.length;c+=1)p(c);U()}},i(o){if(!n){for(let E=0;E<r.length;E+=1)d(l[E]);n=!0}},o(o){l=l.filter(Boolean);for(let E=0;E<l.length;E+=1)g(l[E]);n=!1},d(o){o&&k(e),x(l,o)}}}function Le(t){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function He(t){let e,a,i,s,f=t[1].diffType+"",n,r,l,p,o,E,c,m,v,y,O,j,T,w=!t[1].isBackwardCompatible&&Le(t);return o=new ne({props:{text:t[1].path||"",maxLength:$t,keepEnd:!0}}),m=new ne({props:{text:t[1].leftValue?JSON.stringify(t[1].leftValue):"",maxLength:Ue}}),O=new ne({props:{text:t[1].rightValue?JSON.stringify(t[1].rightValue):"",maxLength:Ue}}),{c(){e=b("tr"),a=b("td"),i=b("span"),w&&w.c(),s=A(),n=L(f),l=A(),p=b("td"),R(o.$$.fragment),E=A(),c=b("td"),R(m.$$.fragment),v=A(),y=b("td"),R(O.$$.fragment),j=A(),_(i,"class",r="tag "+Z[t[1].diffType]+" svelte-1fdpyhf")},m(D,C){h(D,e,C),u(e,a),u(a,i),w&&w.m(i,null),u(i,s),u(i,n),u(e,l),u(e,p),M(o,p,null),u(e,E),u(e,c),M(m,c,null),u(e,v),u(e,y),M(O,y,null),u(e,j),T=!0},p(D,C){D[1].isBackwardCompatible?w&&(w.d(1),w=null):w||(w=Le(D),w.c(),w.m(i,s)),(!T||C&1)&&f!==(f=D[1].diffType+"")&&X(n,f),(!T||C&1&&r!==(r="tag "+Z[D[1].diffType]+" svelte-1fdpyhf"))&&_(i,"class",r);let B={};C&1&&(B.text=D[1].path||""),o.$set(B);let $={};C&1&&($.text=D[1].leftValue?JSON.stringify(D[1].leftValue):""),m.$set($);let q={};C&1&&(q.text=D[1].rightValue?JSON.stringify(D[1].rightValue):""),O.$set(q)},i(D){T||(d(o.$$.fragment,D),d(m.$$.fragment,D),d(O.$$.fragment,D),T=!0)},o(D){g(o.$$.fragment,D),g(m.$$.fragment,D),g(O.$$.fragment,D),T=!1},d(D){D&&k(e),w&&w.d(),N(o),N(m),N(O)}}}function Et(t){let e,a,i=t[0]&&t[0].length>0&&Pe(t);return{c(){i&&i.c(),e=Y()},m(s,f){i&&i.m(s,f),h(s,e,f),a=!0},p(s,[f]){s[0]&&s[0].length>0?i?(i.p(s,f),f&1&&d(i,1)):(i=Pe(s),i.c(),d(i,1),i.m(e.parentNode,e)):i&&(H(),g(i,1,1,()=>{i=null}),U())},i(s){a||(d(i),a=!0)},o(s){g(i),a=!1},d(s){i&&i.d(s),s&&k(e)}}}var $t=30,Ue=120;function At(t,e,a){let{diffItems:i}=e;return t.$$set=s=>{"diffItems"in s&&a(0,i=s.diffItems)},[i]}var ue=class extends K{constructor(e){super(),z(this,e,At,Et,F,{diffItems:0},vt)}},V=ue;function Ct(t){G(t,"svelte-11qy9pw","details[open].svelte-11qy9pw:not(:last-child){margin-bottom:1.5em}.table-title.svelte-11qy9pw{font-weight:bold}")}function Qe(t,e,a){let i=t.slice();return i[3]=e[a][0],i[4]=e[a][1],i}function Fe(t,e,a){let i=t.slice();return i[7]=e[a][0],i[8]=e[a][1],i}function ze(t){let e,a,i,s=!t[0].metadata.length&&!Object.keys(t[0].services).length,f,n,r=!t[0].isBackwardCompatible&&Ke(t),l=t[0].metadata.length>0&&Ge(t),p=Object.entries(t[0].services),o=[];for(let m=0;m<p.length;m+=1)o[m]=st(Qe(t,p,m));let E=m=>g(o[m],1,1,()=>{o[m]=null}),c=s&&nt(t);return{c(){r&&r.c(),e=A(),l&&l.c(),a=A();for(let m=0;m<o.length;m+=1)o[m].c();i=A(),c&&c.c(),f=Y()},m(m,v){r&&r.m(m,v),h(m,e,v),l&&l.m(m,v),h(m,a,v);for(let y=0;y<o.length;y+=1)o[y]&&o[y].m(m,v);h(m,i,v),c&&c.m(m,v),h(m,f,v),n=!0},p(m,v){if(m[0].isBackwardCompatible?r&&(r.d(1),r=null):r||(r=Ke(m),r.c(),r.m(e.parentNode,e)),m[0].metadata.length>0?l?(l.p(m,v),v&1&&d(l,1)):(l=Ge(m),l.c(),d(l,1),l.m(a.parentNode,a)):l&&(H(),g(l,1,1,()=>{l=null}),U()),v&1){p=Object.entries(m[0].services);let y;for(y=0;y<p.length;y+=1){let O=Qe(m,p,y);o[y]?(o[y].p(O,v),d(o[y],1)):(o[y]=st(O),o[y].c(),d(o[y],1),o[y].m(i.parentNode,i))}for(H(),y=p.length;y<o.length;y+=1)E(y);U()}v&1&&(s=!m[0].metadata.length&&!Object.keys(m[0].services).length),s?c||(c=nt(m),c.c(),c.m(f.parentNode,f)):c&&(c.d(1),c=null)},i(m){if(!n){d(l);for(let v=0;v<p.length;v+=1)d(o[v]);n=!0}},o(m){g(l),o=o.filter(Boolean);for(let v=0;v<o.length;v+=1)g(o[v]);n=!1},d(m){r&&r.d(m),m&&k(e),l&&l.d(m),m&&k(a),x(o,m),m&&k(i),c&&c.d(m),m&&k(f)}}}function Ke(t){let e;return{c(){e=b("div"),e.innerHTML=`<i class="fa-solid fa-triangle-exclamation mx-1" title="Not backward compatible change"></i>
                Not backward compatible changes detected`,_(e,"class","notification is-small is-danger")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function Ge(t){let e,a,i,s,f;return s=new V({props:{diffItems:t[0].metadata}}),{c(){e=b("details"),a=b("summary"),a.textContent="Apis Metadata",i=A(),R(s.$$.fragment),_(a,"class","title is-5"),_(e,"class","svelte-11qy9pw")},m(n,r){h(n,e,r),u(e,a),u(e,i),M(s,e,null),f=!0},p(n,r){let l={};r&1&&(l.diffItems=n[0].metadata),s.$set(l)},i(n){f||(d(s.$$.fragment,n),f=!0)},o(n){g(s.$$.fragment,n),f=!1},d(n){n&&k(e),N(s)}}}function Je(t){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function Xe(t){let e,a,i,s,f,n=!t[4].metadata.isBackwardCompatible&&We(t);return s=new V({props:{diffItems:t[4].metadata.items}}),{c(){e=b("p"),n&&n.c(),a=L(`
                        Metadata`),i=A(),R(s.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(r,l){h(r,e,l),n&&n.m(e,null),u(e,a),h(r,i,l),M(s,r,l),f=!0},p(r,l){r[4].metadata.isBackwardCompatible?n&&(n.d(1),n=null):n||(n=We(r),n.c(),n.m(e,a));let p={};l&1&&(p.diffItems=r[4].metadata.items),s.$set(p)},i(r){f||(d(s.$$.fragment,r),f=!0)},o(r){g(s.$$.fragment,r),f=!1},d(r){r&&k(e),n&&n.d(),r&&k(i),N(s,r)}}}function We(t){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function Ye(t){let e,a,i,s,f,n=!t[4].parameters.isBackwardCompatible&&Ze(t);return s=new V({props:{diffItems:t[4].parameters.items}}),{c(){e=b("p"),n&&n.c(),a=L(`
                        Request Parameters`),i=A(),R(s.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(r,l){h(r,e,l),n&&n.m(e,null),u(e,a),h(r,i,l),M(s,r,l),f=!0},p(r,l){r[4].parameters.isBackwardCompatible?n&&(n.d(1),n=null):n||(n=Ze(r),n.c(),n.m(e,a));let p={};l&1&&(p.diffItems=r[4].parameters.items),s.$set(p)},i(r){f||(d(s.$$.fragment,r),f=!0)},o(r){g(s.$$.fragment,r),f=!1},d(r){r&&k(e),n&&n.d(),r&&k(i),N(s,r)}}}function Ze(t){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function Ve(t){let e,a,i,s,f,n=!t[4].request.isBackwardCompatible&&xe(t);return s=new V({props:{diffItems:t[4].request.items}}),{c(){e=b("p"),n&&n.c(),a=L(`
                        Request Body`),i=A(),R(s.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(r,l){h(r,e,l),n&&n.m(e,null),u(e,a),h(r,i,l),M(s,r,l),f=!0},p(r,l){r[4].request.isBackwardCompatible?n&&(n.d(1),n=null):n||(n=xe(r),n.c(),n.m(e,a));let p={};l&1&&(p.diffItems=r[4].request.items),s.$set(p)},i(r){f||(d(s.$$.fragment,r),f=!0)},o(r){g(s.$$.fragment,r),f=!1},d(r){r&&k(e),n&&n.d(),r&&k(i),N(s,r)}}}function xe(t){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function et(t){let e,a,i=Object.entries(t[4].responses),s=[];for(let n=0;n<i.length;n+=1)s[n]=at(Fe(t,i,n));let f=n=>g(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=Y()},m(n,r){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(n,r);h(n,e,r),a=!0},p(n,r){if(r&1){i=Object.entries(n[4].responses);let l;for(l=0;l<i.length;l+=1){let p=Fe(n,i,l);s[l]?(s[l].p(p,r),d(s[l],1)):(s[l]=at(p),s[l].c(),d(s[l],1),s[l].m(e.parentNode,e))}for(H(),l=i.length;l<s.length;l+=1)f(l);U()}},i(n){if(!a){for(let r=0;r<i.length;r+=1)d(s[r]);a=!0}},o(n){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)g(s[r]);a=!1},d(n){x(s,n),n&&k(e)}}}function tt(t){let e,a,i=t[7]+"",s,f,n,r,l=!t[8].isBackwardCompatible&&it(t);return n=new V({props:{diffItems:t[8].items}}),{c(){e=b("p"),l&&l.c(),a=L(`
                                Response: `),s=L(i),f=A(),R(n.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(p,o){h(p,e,o),l&&l.m(e,null),u(e,a),u(e,s),h(p,f,o),M(n,p,o),r=!0},p(p,o){p[8].isBackwardCompatible?l&&(l.d(1),l=null):l||(l=it(p),l.c(),l.m(e,a)),(!r||o&1)&&i!==(i=p[7]+"")&&X(s,i);let E={};o&1&&(E.diffItems=p[8].items),n.$set(E)},i(p){r||(d(n.$$.fragment,p),r=!0)},o(p){g(n.$$.fragment,p),r=!1},d(p){p&&k(e),l&&l.d(),p&&k(f),N(n,p)}}}function it(t){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function at(t){let e,a,i=t[8].items.length&&tt(t);return{c(){i&&i.c(),e=Y()},m(s,f){i&&i.m(s,f),h(s,e,f),a=!0},p(s,f){s[8].items.length?i?(i.p(s,f),f&1&&d(i,1)):(i=tt(s),i.c(),d(i,1),i.m(e.parentNode,e)):i&&(H(),g(i,1,1,()=>{i=null}),U())},i(s){a||(d(i),a=!0)},o(s){g(i),a=!1},d(s){i&&i.d(s),s&&k(e)}}}function st(t){let e,a,i=t[3]+"",s,f,n,r,l,p,o=t[4].diffType+"",E,c,m,v,y,O,j,T=!t[4].isBackwardCompatible&&Je(t),w=t[4].metadata&&t[4].metadata.items.length&&Xe(t),D=t[4].parameters&&t[4].parameters.items.length&&Ye(t),C=t[4].request&&t[4].request.items.length&&Ve(t),B=t[4].responses&&et(t);return{c(){e=b("details"),a=b("summary"),s=L(i),f=A(),n=b("p"),r=L(`Status:
                    `),l=b("span"),T&&T.c(),p=A(),E=L(o),m=A(),w&&w.c(),v=A(),D&&D.c(),y=A(),C&&C.c(),O=A(),B&&B.c(),_(a,"class","title is-5"),_(l,"class",c="tag "+Z[t[4].diffType]+" svelte-11qy9pw"),_(n,"class","mb-2"),e.open=!0,_(e,"class","svelte-11qy9pw")},m($,q){h($,e,q),u(e,a),u(a,s),u(e,f),u(e,n),u(n,r),u(n,l),T&&T.m(l,null),u(l,p),u(l,E),u(e,m),w&&w.m(e,null),u(e,v),D&&D.m(e,null),u(e,y),C&&C.m(e,null),u(e,O),B&&B.m(e,null),j=!0},p($,q){(!j||q&1)&&i!==(i=$[3]+"")&&X(s,i),$[4].isBackwardCompatible?T&&(T.d(1),T=null):T||(T=Je($),T.c(),T.m(l,p)),(!j||q&1)&&o!==(o=$[4].diffType+"")&&X(E,o),(!j||q&1&&c!==(c="tag "+Z[$[4].diffType]+" svelte-11qy9pw"))&&_(l,"class",c),$[4].metadata&&$[4].metadata.items.length?w?(w.p($,q),q&1&&d(w,1)):(w=Xe($),w.c(),d(w,1),w.m(e,v)):w&&(H(),g(w,1,1,()=>{w=null}),U()),$[4].parameters&&$[4].parameters.items.length?D?(D.p($,q),q&1&&d(D,1)):(D=Ye($),D.c(),d(D,1),D.m(e,y)):D&&(H(),g(D,1,1,()=>{D=null}),U()),$[4].request&&$[4].request.items.length?C?(C.p($,q),q&1&&d(C,1)):(C=Ve($),C.c(),d(C,1),C.m(e,O)):C&&(H(),g(C,1,1,()=>{C=null}),U()),$[4].responses?B?(B.p($,q),q&1&&d(B,1)):(B=et($),B.c(),d(B,1),B.m(e,null)):B&&(H(),g(B,1,1,()=>{B=null}),U())},i($){j||(d(w),d(D),d(C),d(B),j=!0)},o($){g(w),g(D),g(C),g(B),j=!1},d($){$&&k(e),T&&T.d(),w&&w.d(),D&&D.d(),C&&C.d(),B&&B.d()}}}function nt(t){let e;return{c(){e=b("p"),e.textContent="No differences detected"},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function St(t){let e,a,i=t[0]&&ze(t);return{c(){e=b("div"),i&&i.c()},m(s,f){h(s,e,f),i&&i.m(e,null),a=!0},p(s,[f]){s[0]?i?(i.p(s,f),f&1&&d(i,1)):(i=ze(s),i.c(),d(i,1),i.m(e,null)):i&&(H(),g(i,1,1,()=>{i=null}),U())},i(s){a||(d(i),a=!0)},o(s){g(i),a=!1},d(s){s&&k(e),i&&i.d()}}}function Ot(t,e,a){let{leftApi:i}=e,{rightApi:s}=e,f;return t.$$set=n=>{"leftApi"in n&&a(1,i=n.leftApi),"rightApi"in n&&a(2,s=n.rightApi)},t.$$.update=()=>{if(t.$$.dirty&6)e:i&&s&&a(0,f=Ie(i,s))},[f,i,s]}var de=class extends K{constructor(e){super(),z(this,e,Ot,St,F,{leftApi:1,rightApi:2},Ct)}},lt=de;I();function rt(t){let e;return{c(){e=L("Ok")},m(a,i){h(a,e,i)},d(a){a&&k(e)}}}function Bt(t){let e,a=t[0]&&t[1]&&rt(t);return{c(){e=b("div"),a&&a.c()},m(i,s){h(i,e,s),a&&a.m(e,null)},p(i,[s]){i[0]&&i[1]?a||(a=rt(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:J,o:J,d(i){i&&k(e),a&&a.d()}}}function Tt(t,e,a){let{leftApi:i}=e,{rightApi:s}=e;return t.$$set=f=>{"leftApi"in f&&a(0,i=f.leftApi),"rightApi"in f&&a(1,s=f.rightApi)},[i,s]}var be=class extends K{constructor(e){super(),z(this,e,Tt,Bt,F,{leftApi:0,rightApi:1})}},ft=be;I();function Rt(t){G(t,"svelte-1gj2ttm",".tabs-with-options.svelte-1gj2ttm.svelte-1gj2ttm{display:flex;flex-wrap:nowrap;align-content:center;align-items:stretch}.tabs-with-options.svelte-1gj2ttm .tabs.svelte-1gj2ttm{flex-grow:1;margin-bottom:0}")}function Mt(t){let e,a,i,s,f,n,r,l,p,o,E,c,m,v;return{c(){e=b("div"),a=b("div"),i=b("ul"),s=b("li"),f=b("a"),f.innerHTML=`<span class="icon is-small"><i class="fas fa-circle-nodes"></i></span> 
                    <span>Api Diff</span>`,l=A(),p=b("li"),o=b("a"),o.innerHTML=`<span class="icon is-small"><i class="fas fa-diagram-project"></i></span> 
                    <span>Diagrams Diff</span>`,_(f,"href",n="#"),_(s,"class",r=t[0]==="api-diff"?"is-active":""),_(o,"href",E="#"),_(p,"class",c=t[0]==="diagrams-diff"?"is-active":""),_(a,"class","tabs is-boxed is-floating svelte-1gj2ttm"),_(e,"class","tabs-with-options svelte-1gj2ttm")},m(y,O){h(y,e,O),u(e,a),u(a,i),u(i,s),u(s,f),u(i,l),u(i,p),u(p,o),m||(v=[ee(f,"click",re(t[2])),ee(o,"click",re(t[3]))],m=!0)},p(y,[O]){O&1&&r!==(r=y[0]==="api-diff"?"is-active":"")&&_(s,"class",r),O&1&&c!==(c=y[0]==="diagrams-diff"?"is-active":"")&&_(p,"class",c)},i:J,o:J,d(y){y&&k(e),m=!1,ve(v)}}}function Nt(t,e,a){let{selectedTab:i="api-diff"}=e,s=Ae();function f(l){return te(this,void 0,void 0,function*(){a(0,i=l),s("tabChange",{selectedTab:i})})}let n=()=>f("api-diff"),r=()=>f("diagrams-diff");return t.$$set=l=>{"selectedTab"in l&&a(0,i=l.selectedTab)},[i,f,n,r]}var _e=class extends K{constructor(e){super(),z(this,e,Nt,Mt,F,{selectedTab:0},Rt)}},ot=_e;function qt(t){G(t,"svelte-1nizkyl",".is-center.svelte-1nizkyl{display:flex;justify-content:center;align-items:center;flex-direction:column}")}function pt(t){let e,a,i,s,f,n,r;return e=new ot({props:{selectedTab:t[2]}}),e.$on("tabChange",t[5]),s=new fe({props:{isVisible:t[2]==="api-diff",$$slots:{default:[It]},$$scope:{ctx:t}}}),n=new fe({props:{isVisible:t[2]==="diagrams-diff",$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment),a=A(),i=b("div"),R(s.$$.fragment),f=A(),R(n.$$.fragment),_(i,"class","box flat-top")},m(l,p){M(e,l,p),h(l,a,p),h(l,i,p),M(s,i,null),u(i,f),M(n,i,null),r=!0},p(l,p){let o={};p&4&&(o.selectedTab=l[2]),e.$set(o);let E={};p&4&&(E.isVisible=l[2]==="api-diff"),p&131&&(E.$$scope={dirty:p,ctx:l}),s.$set(E);let c={};p&4&&(c.isVisible=l[2]==="diagrams-diff"),p&131&&(c.$$scope={dirty:p,ctx:l}),n.$set(c)},i(l){r||(d(e.$$.fragment,l),d(s.$$.fragment,l),d(n.$$.fragment,l),r=!0)},o(l){g(e.$$.fragment,l),g(s.$$.fragment,l),g(n.$$.fragment,l),r=!1},d(l){N(e,l),l&&k(a),l&&k(i),N(s),N(n)}}}function It(t){let e,a;return e=new lt({props:{leftApi:t[0].api,rightApi:t[1].api}}),{c(){R(e.$$.fragment)},m(i,s){M(e,i,s),a=!0},p(i,s){let f={};s&1&&(f.leftApi=i[0].api),s&2&&(f.rightApi=i[1].api),e.$set(f)},i(i){a||(d(e.$$.fragment,i),a=!0)},o(i){g(e.$$.fragment,i),a=!1},d(i){N(e,i)}}}function jt(t){let e,a;return e=new ft({props:{leftApi:t[0].api,rightApi:t[1].api}}),{c(){R(e.$$.fragment)},m(i,s){M(e,i,s),a=!0},p(i,s){let f={};s&1&&(f.leftApi=i[0].api),s&2&&(f.rightApi=i[1].api),e.$set(f)},i(i){a||(d(e.$$.fragment,i),a=!0)},o(i){g(e.$$.fragment,i),a=!1},d(i){N(e,i)}}}function Pt(t){let e,a,i,s,f,n,r,l,p,o,E,c,m,v,y,O,j,T,w,D,C,B,$,q;e=new Oe({props:{activePage:"compare"}}),s=new ie({props:{messages:["This feature is not completed yet"]}}),o=new oe({props:{browserHash:t[0].hash,storagePrefix:"left"}}),o.$on("apiChange",function(){le(t[4](t[0]))&&t[4](t[0]).apply(this,arguments)}),c=new ie({props:{messages:t[0].errors}}),j=new oe({props:{browserHash:t[1].hash,storagePrefix:"right"}}),j.$on("apiChange",function(){le(t[4](t[1]))&&t[4](t[1]).apply(this,arguments)}),w=new ie({props:{messages:t[1].errors}});let P=t[0].api&&t[1].api&&pt(t);return $=new Ce({}),{c(){R(e.$$.fragment),a=A(),i=b("div"),R(s.$$.fragment),f=A(),n=b("section"),n.innerHTML=`<div class="hero-body"><h1 class="title">Api Compare</h1> 
      <p class="subtitle">List changes between two Apis</p></div>`,r=A(),l=b("div"),p=b("div"),R(o.$$.fragment),E=A(),R(c.$$.fragment),m=A(),v=b("div"),v.innerHTML='<p class="title is-2"><i class="fa-solid fa-right-long"></i></p>',y=A(),O=b("div"),R(j.$$.fragment),T=A(),R(w.$$.fragment),D=A(),P&&P.c(),B=A(),R($.$$.fragment),_(n,"class","hero is-small"),_(p,"class","column"),_(v,"class","column is-center is-narrow svelte-1nizkyl"),_(O,"class","column"),_(l,"class","columns"),_(i,"class",C="container "+(t[3].fluidLayout?"is-fluid":""))},m(S,Q){M(e,S,Q),h(S,a,Q),h(S,i,Q),M(s,i,null),u(i,f),u(i,n),u(i,r),u(i,l),u(l,p),M(o,p,null),u(p,E),M(c,p,null),u(l,m),u(l,v),u(l,y),u(l,O),M(j,O,null),u(O,T),M(w,O,null),u(i,D),P&&P.m(i,null),h(S,B,Q),M($,S,Q),q=!0},p(S,[Q]){t=S;let he={};Q&1&&(he.browserHash=t[0].hash),o.$set(he);let ke={};Q&1&&(ke.messages=t[0].errors),c.$set(ke);let De={};Q&2&&(De.browserHash=t[1].hash),j.$set(De);let we={};Q&2&&(we.messages=t[1].errors),w.$set(we),t[0].api&&t[1].api?P?(P.p(t,Q),Q&3&&d(P,1)):(P=pt(t),P.c(),d(P,1),P.m(i,null)):P&&(H(),g(P,1,1,()=>{P=null}),U()),(!q||Q&8&&C!==(C="container "+(t[3].fluidLayout?"is-fluid":"")))&&_(i,"class",C)},i(S){q||(d(e.$$.fragment,S),d(s.$$.fragment,S),d(o.$$.fragment,S),d(c.$$.fragment,S),d(j.$$.fragment,S),d(w.$$.fragment,S),d(P),d($.$$.fragment,S),q=!0)},o(S){g(e.$$.fragment,S),g(s.$$.fragment,S),g(o.$$.fragment,S),g(c.$$.fragment,S),g(j.$$.fragment,S),g(w.$$.fragment,S),g(P),g($.$$.fragment,S),q=!1},d(S){N(e,S),S&&k(a),S&&k(i),N(s),N(o),N(c),N(j),N(w),P&&P.d(),S&&k(B),N($,S)}}}function Lt(t,e,a){let i;Ee(t,Se,o=>a(3,i=o));let s={hash:null,api:null,errors:[]},f={hash:null,api:null,errors:[]},n="api-diff";function r(){let o=new URLSearchParams(window.location.search);s.hash&&o.set("leftApi",s.hash),f.hash&&o.set("rightApi",f.hash),window.history.pushState(null,null,"?"+o.toString())}function l(o){return E=>te(this,void 0,void 0,function*(){let c=E.detail.apiObject;if(o.api=null,o.errors=[],o.hash=E.detail.hash,c){try{o.api=Be(c),o.api.setModelsTitle()}catch(m){o.errors=[...o.errors,"Error: "+m.message]}if(o.api)try{yield o.api.resolveReferences()}catch(m){console.error(m),o.errors=[...o.errors,"Error while parsing api: "+m.message]}}a(0,s),a(1,f),r()})}function p(o){a(2,n=o.detail.selectedTab)}return $e(()=>{let o=new URLSearchParams(window.location.search);a(0,s.hash=o.get("leftApi"),s),a(1,f.hash=o.get("rightApi"),f)}),[s,f,n,i,l,p]}var ge=class extends K{constructor(e){super(),z(this,e,Lt,Pt,F,{},qt)}},mt=ge;new mt({target:document.body});ye();

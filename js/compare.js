// Project: https://github.com/marc0l92/api-tools
import{a as fe}from"./chunk-NXBIQTT6.js";import{d as Se,l as oe}from"./chunk-7L4OU73F.js";import"./chunk-KYQDACTX.js";import{a as ie}from"./chunk-PT6EMYBK.js";import{$ as M,A as h,B as D,C as x,D as b,E as P,F as C,G as X,H as ee,I as re,K as _,L as G,P as $e,S as Ee,V,W as H,X as d,Y as g,Z as R,_ as N,aa as F,ba as z,ca as Ce,fa as te,h as L,m as we,n as J,na as Ae,o as ye,oa as Be,p as le,q as Q,s as ve,y as u,z as K}from"./chunk-O7STRZLD.js";L();L();L();L();L();var Y={["Added"]:"is-success",["Modified"]:"is-warning",["Removed"]:"is-danger"},Te=["title","type","example","minLength","maxLength","minItems","maxItems","minProperties","maxProperties","pattern","format","enum","description","required","additionalProperties","readOnly","writeOnly"],Oe={title:()=>!0,example:()=>!0,description:()=>!0,type:(i,e)=>i===e,minLength:(i,e,a)=>a===0&&i>=e||a===1&&i<=e,maxLength:(i,e,a)=>a===0&&i<=e||a===1&&i>=e,minItems:(i,e,a)=>a===0&&i>=e||a===1&&i<=e,maxItems:(i,e,a)=>a===0&&i<=e||a===1&&i>=e,minProperties:(i,e,a)=>a===0&&i>=e||a===1&&i<=e,maxProperties:(i,e,a)=>a===0&&i<=e||a===1&&i>=e,pattern:(i,e)=>i===e,format:(i,e)=>i===e,enum:(i,e)=>i.every(a=>e.indexOf(a)!==-1),required:(i,e,a)=>a===0&&e.every(t=>i.indexOf(t)!==-1)||a===1&&i.every(t=>e.indexOf(t)!==-1),readOnly:(i,e,a,t)=>a===1||i===e||e===!1&&!t,writeOnly:(i,e,a,t)=>a===0||i===e||e===!0&&!t||e===!1&&!t,additionalProperties:(i,e,a)=>a===0&&i!==e&&e!==!1};function qe(i,e){let a={isBackwardCompatible:!0,metadata:[],services:{}};a.metadata=se(Re(i),Re(e)).items;let t=e.getServices();for(let s of i.getServices()){let f=t.findIndex(n=>n.getName()===s.getName());if(f>=0){let n=t[f],r={diffType:"Modified",isBackwardCompatible:!0,metadata:{isBackwardCompatible:!0,items:[]},parameters:{isBackwardCompatible:!0,items:[]},request:{isBackwardCompatible:!0,items:[]},responses:{}};r.metadata=se(Ne(s),Ne(n)),r.parameters=mt(s.getRequestParameters(),n.getRequestParameters()),r.request=pe(s.getRequest(),n.getRequest(),0),r.responses=ut(s.getResponses(),n.getResponses()),(r.metadata.items.length||r.parameters.items.length||r.request.items.length||Object.keys(r.responses).length)&&(r.isBackwardCompatible&&(r.isBackwardCompatible=r.metadata.isBackwardCompatible&&r.parameters.isBackwardCompatible&&r.request.isBackwardCompatible&&Object.values(r.responses).every(l=>l.isBackwardCompatible)),a.isBackwardCompatible&&(a.isBackwardCompatible=r.isBackwardCompatible),a.services[s.getName()]=r),t.splice(f,1)}else a.isBackwardCompatible=!1,a.services[s.getName()]={diffType:"Removed",isBackwardCompatible:!1}}for(let s of t)a.services[s.getName()]={diffType:"Added",isBackwardCompatible:!0};return a}function Re(i){return Object.fromEntries(Object.entries(i.toJson()).filter(([e,a])=>["paths","definitions","responses","parameters","components"].indexOf(e)===-1))}function Ne(i){return Object.fromEntries(Object.entries(i.toJson()).filter(([e,a])=>["parameters","responses","requestBody"].indexOf(e)===-1))}function Me(i){return Object.fromEntries(Object.entries(i).filter(([e,a])=>["schema"].indexOf(e)===-1))}function ae(i,e,a){return a?`${i}[${e}]`:`${i}/${e}`}function ct(i,e){return i==null?"Added":e==null?"Removed":i===e?"No Changes":"Modified"}function se(i,e,a="",t=[]){let s={isBackwardCompatible:!0,items:[]},f=Object.keys(e);for(let n of Object.keys(i)){let r=f.indexOf(n);if(r>=0){if(typeof i[n]=="object"&&typeof e[n]=="object"){let l=se(i[n],e[n],ae(a,n,Array.isArray(i)),t);s.isBackwardCompatible&&(s.isBackwardCompatible=l.isBackwardCompatible),s.items=s.items.concat(l.items)}else if(i[n]!==e[n]){let l=ae(a,n,Array.isArray(i)),p=t.indexOf(l)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:l,diffType:"Modified",leftValue:i[n],rightValue:e[n],isBackwardCompatible:p})}f.splice(r,1)}else{let l=ae(a,n,Array.isArray(i)),p=t.indexOf(l)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:l,diffType:"Removed",leftValue:i[n],isBackwardCompatible:p})}}for(let n of f){let r=ae(a,n,Array.isArray(e)),l=t.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=l),s.items.push({path:r,diffType:"Added",rightValue:e[n],isBackwardCompatible:l})}return s}function mt(i,e){let a={isBackwardCompatible:!0,items:[]},t=Object.keys(e).map(s=>parseInt(s));for(let s of i){let f=e.findIndex(n=>n.name===s.name&&n.in===s.in);if(f>=0){let n=e[f],r=pe(s,n,0);a.isBackwardCompatible&&(a.isBackwardCompatible=r.isBackwardCompatible),a.items=a.items.concat(r.items),t.splice(t.indexOf(f),1)}else a.isBackwardCompatible=!1,a.items.push({path:s["x-path"],diffType:"Removed",leftValue:s,isBackwardCompatible:!1})}for(let s of t){let f=e[s];a.items.push({path:f["x-path"],diffType:"Added",rightValue:f,isBackwardCompatible:!0})}return a}function pe(i,e,a){let t={isBackwardCompatible:!0,items:[]};if(!i&&!e)return t;if(!i&&e)return{items:[{path:e["x-path"],diffType:"Added",rightValue:e,isBackwardCompatible:!0}],isBackwardCompatible:!0};if(i&&!e)return{items:[{path:i["x-path"],diffType:"Removed",rightValue:i,isBackwardCompatible:!1}],isBackwardCompatible:!1};let s=["in","name","type","required","schema"],f=se(Me(i),Me(e),i["x-path"],s);return t.model=dt(i.schema,e.schema,a),t.isBackwardCompatible&&(t.isBackwardCompatible=f.isBackwardCompatible&&t.model.isBackwardCompatible),t}function ut(i,e){let a={},t=Object.keys(e);for(let s of Object.keys(i)){let f=i[s],n=t.indexOf(s);if(n>=0){let r=e[s],l=pe(f,r,1);l.items.length&&(a[s]=l),t.splice(n,1)}else a[s]={items:[{path:f["x-path"],diffType:"Removed",rightValue:f,isBackwardCompatible:!1}],isBackwardCompatible:!1}}for(let s of t){let f=e[s];a[s]={items:[{path:f["x-path"],diffType:"Added",rightValue:f,isBackwardCompatible:!0}],isBackwardCompatible:!0}}return a}function dt(i,e,a,t=!1){var f,n;if(!i&&!e)return{diffType:"No Changes",isBackwardCompatible:!0,leftValue:i,rightValue:e};if(!i&&e)return{diffType:"Added",isBackwardCompatible:a===1||!t,rightValue:e};if(i&&!e)return{diffType:"Removed",isBackwardCompatible:a===0||!t,leftValue:i};let s={isBackwardCompatible:!0,diffType:"Modified"};for(let r of Te)s[r]={diffType:ct(i[r],e[r]),isBackwardCompatible:Oe[r]((f=i[r])!=null?f:null,(n=e[r])!=null?n:null,a,t),leftValue:i[r],rightValue:e[r]};return s}L();L();function bt(i){K(i,"svelte-p30usc",".longText.svelte-p30usc{cursor:pointer;word-break:break-all}")}function _t(i){let e,a;return{c(){e=b("div"),a=P(i[1])},m(t,s){h(t,e,s),u(e,a)},p(t,s){s&2&&G(a,t[1])},d(t){t&&D(e)}}}function gt(i){let e,a=(i[2]?i[1]:i[3])+"",t,s,f;return{c(){e=b("div"),t=P(a),_(e,"class","longText svelte-p30usc"),_(e,"title","Double click to expand")},m(n,r){h(n,e,r),u(e,t),s||(f=ee(e,"dblclick",i[4]),s=!0)},p(n,r){r&14&&a!==(a=(n[2]?n[1]:n[3])+"")&&G(t,a)},d(n){n&&D(e),s=!1,f()}}}function ht(i){let e;function a(f,n){return f[1].length>f[0]?gt:_t}let t=a(i,-1),s=t(i);return{c(){s.c(),e=X()},m(f,n){s.m(f,n),h(f,e,n)},p(f,[n]){t===(t=a(f,n))&&s?s.p(f,n):(s.d(1),s=t(f),s&&(s.c(),s.m(e.parentNode,e)))},i:J,o:J,d(f){s.d(f),f&&D(e)}}}function Dt(i,e,a){let{maxLength:t=30}=e,{text:s}=e,{keepEnd:f=!1}=e,n=!1,r="";function l(){a(2,n=!n)}return i.$$set=p=>{"maxLength"in p&&a(0,t=p.maxLength),"text"in p&&a(1,s=p.text),"keepEnd"in p&&a(5,f=p.keepEnd)},i.$$.update=()=>{if(i.$$.dirty&35)e:s&&(s.length>t?f?a(3,r="..."+s.substring(s.length-t)):a(3,r=s.substring(0,t)+"..."):a(3,r=s))},[t,s,n,r,l,f]}var ce=class extends z{constructor(e){super(),F(this,e,Dt,ht,Q,{maxLength:0,text:1,keepEnd:5},bt)}},ne=ce;function kt(i){K(i,"svelte-1fdpyhf",".diff-table-container.svelte-1fdpyhf.svelte-1fdpyhf{overflow-x:auto;max-width:100%}.diff-table-container.svelte-1fdpyhf .is-fullwidth.svelte-1fdpyhf{width:calc(100% - 1px)}")}function Ie(i,e,a){let t=i.slice();return t[1]=e[a],t}function je(i){let e,a,t,s,f,n,r=i[0],l=[];for(let o=0;o<r.length;o+=1)l[o]=Pe(Ie(i,r,o));let p=o=>g(l[o],1,1,()=>{l[o]=null});return{c(){e=b("div"),a=b("table"),t=b("thead"),t.innerHTML=`<tr><th>Type</th> 
                    <th>Location</th> 
                    <th>Left Value</th> 
                    <th>Right Value</th></tr>`,s=C(),f=b("tbody");for(let o=0;o<l.length;o+=1)l[o].c();_(a,"class","table is-bordered is-striped is-narrow is-hoverable is-fullwidth svelte-1fdpyhf"),_(e,"class","diff-table-container svelte-1fdpyhf")},m(o,$){h(o,e,$),u(e,a),u(a,t),u(a,s),u(a,f);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(f,null);n=!0},p(o,$){if($&1){r=o[0];let m;for(m=0;m<r.length;m+=1){let c=Ie(o,r,m);l[m]?(l[m].p(c,$),d(l[m],1)):(l[m]=Pe(c),l[m].c(),d(l[m],1),l[m].m(f,null))}for(V(),m=r.length;m<l.length;m+=1)p(m);H()}},i(o){if(!n){for(let $=0;$<r.length;$+=1)d(l[$]);n=!0}},o(o){l=l.filter(Boolean);for(let $=0;$<l.length;$+=1)g(l[$]);n=!1},d(o){o&&D(e),x(l,o)}}}function Le(i){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function Pe(i){let e,a,t,s,f=i[1].diffType+"",n,r,l,p,o,$,m,c,v,y,S,I,O,w=!i[1].isBackwardCompatible&&Le(i);return o=new ne({props:{text:i[1].path||"",maxLength:yt,keepEnd:!0}}),c=new ne({props:{text:i[1].leftValue?JSON.stringify(i[1].leftValue):"",maxLength:Ve}}),S=new ne({props:{text:i[1].rightValue?JSON.stringify(i[1].rightValue):"",maxLength:Ve}}),{c(){e=b("tr"),a=b("td"),t=b("span"),w&&w.c(),s=C(),n=P(f),l=C(),p=b("td"),R(o.$$.fragment),$=C(),m=b("td"),R(c.$$.fragment),v=C(),y=b("td"),R(S.$$.fragment),I=C(),_(t,"class",r="tag "+Y[i[1].diffType]+" svelte-1fdpyhf")},m(k,A){h(k,e,A),u(e,a),u(a,t),w&&w.m(t,null),u(t,s),u(t,n),u(e,l),u(e,p),N(o,p,null),u(e,$),u(e,m),N(c,m,null),u(e,v),u(e,y),N(S,y,null),u(e,I),O=!0},p(k,A){k[1].isBackwardCompatible?w&&(w.d(1),w=null):w||(w=Le(k),w.c(),w.m(t,s)),(!O||A&1)&&f!==(f=k[1].diffType+"")&&G(n,f),(!O||A&1&&r!==(r="tag "+Y[k[1].diffType]+" svelte-1fdpyhf"))&&_(t,"class",r);let T={};A&1&&(T.text=k[1].path||""),o.$set(T);let E={};A&1&&(E.text=k[1].leftValue?JSON.stringify(k[1].leftValue):""),c.$set(E);let q={};A&1&&(q.text=k[1].rightValue?JSON.stringify(k[1].rightValue):""),S.$set(q)},i(k){O||(d(o.$$.fragment,k),d(c.$$.fragment,k),d(S.$$.fragment,k),O=!0)},o(k){g(o.$$.fragment,k),g(c.$$.fragment,k),g(S.$$.fragment,k),O=!1},d(k){k&&D(e),w&&w.d(),M(o),M(c),M(S)}}}function wt(i){let e,a,t=i[0]&&i[0].length>0&&je(i);return{c(){t&&t.c(),e=X()},m(s,f){t&&t.m(s,f),h(s,e,f),a=!0},p(s,[f]){s[0]&&s[0].length>0?t?(t.p(s,f),f&1&&d(t,1)):(t=je(s),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(V(),g(t,1,1,()=>{t=null}),H())},i(s){a||(d(t),a=!0)},o(s){g(t),a=!1},d(s){t&&t.d(s),s&&D(e)}}}var yt=30,Ve=120;function vt(i,e,a){let{diffItems:t}=e;return i.$$set=s=>{"diffItems"in s&&a(0,t=s.diffItems)},[t]}var me=class extends z{constructor(e){super(),F(this,e,vt,wt,Q,{diffItems:0},kt)}},Z=me;function $t(i){K(i,"svelte-11qy9pw","details[open].svelte-11qy9pw:not(:last-child){margin-bottom:1.5em}.table-title.svelte-11qy9pw{font-weight:bold}")}function He(i,e,a){let t=i.slice();return t[3]=e[a][0],t[4]=e[a][1],t}function Ue(i,e,a){let t=i.slice();return t[7]=e[a][0],t[8]=e[a][1],t}function Qe(i){let e,a,t,s=!i[0].metadata.length&&!Object.keys(i[0].services).length,f,n,r=!i[0].isBackwardCompatible&&Fe(i),l=i[0].metadata.length>0&&ze(i),p=Object.entries(i[0].services),o=[];for(let c=0;c<p.length;c+=1)o[c]=at(He(i,p,c));let $=c=>g(o[c],1,1,()=>{o[c]=null}),m=s&&st(i);return{c(){r&&r.c(),e=C(),l&&l.c(),a=C();for(let c=0;c<o.length;c+=1)o[c].c();t=C(),m&&m.c(),f=X()},m(c,v){r&&r.m(c,v),h(c,e,v),l&&l.m(c,v),h(c,a,v);for(let y=0;y<o.length;y+=1)o[y]&&o[y].m(c,v);h(c,t,v),m&&m.m(c,v),h(c,f,v),n=!0},p(c,v){if(c[0].isBackwardCompatible?r&&(r.d(1),r=null):r||(r=Fe(c),r.c(),r.m(e.parentNode,e)),c[0].metadata.length>0?l?(l.p(c,v),v&1&&d(l,1)):(l=ze(c),l.c(),d(l,1),l.m(a.parentNode,a)):l&&(V(),g(l,1,1,()=>{l=null}),H()),v&1){p=Object.entries(c[0].services);let y;for(y=0;y<p.length;y+=1){let S=He(c,p,y);o[y]?(o[y].p(S,v),d(o[y],1)):(o[y]=at(S),o[y].c(),d(o[y],1),o[y].m(t.parentNode,t))}for(V(),y=p.length;y<o.length;y+=1)$(y);H()}v&1&&(s=!c[0].metadata.length&&!Object.keys(c[0].services).length),s?m||(m=st(c),m.c(),m.m(f.parentNode,f)):m&&(m.d(1),m=null)},i(c){if(!n){d(l);for(let v=0;v<p.length;v+=1)d(o[v]);n=!0}},o(c){g(l),o=o.filter(Boolean);for(let v=0;v<o.length;v+=1)g(o[v]);n=!1},d(c){r&&r.d(c),c&&D(e),l&&l.d(c),c&&D(a),x(o,c),c&&D(t),m&&m.d(c),c&&D(f)}}}function Fe(i){let e;return{c(){e=b("div"),e.innerHTML=`<i class="fa-solid fa-triangle-exclamation mx-1" title="Not backward compatible change"></i>
                Not backward compatible changes detected`,_(e,"class","notification is-small is-danger")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function ze(i){let e,a,t,s,f;return s=new Z({props:{diffItems:i[0].metadata}}),{c(){e=b("details"),a=b("summary"),a.textContent="Apis Metadata",t=C(),R(s.$$.fragment),_(a,"class","title is-5"),_(e,"class","svelte-11qy9pw")},m(n,r){h(n,e,r),u(e,a),u(e,t),N(s,e,null),f=!0},p(n,r){let l={};r&1&&(l.diffItems=n[0].metadata),s.$set(l)},i(n){f||(d(s.$$.fragment,n),f=!0)},o(n){g(s.$$.fragment,n),f=!1},d(n){n&&D(e),M(s)}}}function Ke(i){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function Je(i){let e,a,t,s,f,n=!i[4].metadata.isBackwardCompatible&&Ge(i);return s=new Z({props:{diffItems:i[4].metadata.items}}),{c(){e=b("p"),n&&n.c(),a=P(`
                        Metadata`),t=C(),R(s.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(r,l){h(r,e,l),n&&n.m(e,null),u(e,a),h(r,t,l),N(s,r,l),f=!0},p(r,l){r[4].metadata.isBackwardCompatible?n&&(n.d(1),n=null):n||(n=Ge(r),n.c(),n.m(e,a));let p={};l&1&&(p.diffItems=r[4].metadata.items),s.$set(p)},i(r){f||(d(s.$$.fragment,r),f=!0)},o(r){g(s.$$.fragment,r),f=!1},d(r){r&&D(e),n&&n.d(),r&&D(t),M(s,r)}}}function Ge(i){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function Xe(i){let e,a,t,s,f,n=!i[4].parameters.isBackwardCompatible&&We(i);return s=new Z({props:{diffItems:i[4].parameters.items}}),{c(){e=b("p"),n&&n.c(),a=P(`
                        Request Parameters`),t=C(),R(s.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(r,l){h(r,e,l),n&&n.m(e,null),u(e,a),h(r,t,l),N(s,r,l),f=!0},p(r,l){r[4].parameters.isBackwardCompatible?n&&(n.d(1),n=null):n||(n=We(r),n.c(),n.m(e,a));let p={};l&1&&(p.diffItems=r[4].parameters.items),s.$set(p)},i(r){f||(d(s.$$.fragment,r),f=!0)},o(r){g(s.$$.fragment,r),f=!1},d(r){r&&D(e),n&&n.d(),r&&D(t),M(s,r)}}}function We(i){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function Ye(i){let e,a,t,s,f,n=!i[4].request.isBackwardCompatible&&Ze(i);return s=new Z({props:{diffItems:i[4].request.items}}),{c(){e=b("p"),n&&n.c(),a=P(`
                        Request Body`),t=C(),R(s.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(r,l){h(r,e,l),n&&n.m(e,null),u(e,a),h(r,t,l),N(s,r,l),f=!0},p(r,l){r[4].request.isBackwardCompatible?n&&(n.d(1),n=null):n||(n=Ze(r),n.c(),n.m(e,a));let p={};l&1&&(p.diffItems=r[4].request.items),s.$set(p)},i(r){f||(d(s.$$.fragment,r),f=!0)},o(r){g(s.$$.fragment,r),f=!1},d(r){r&&D(e),n&&n.d(),r&&D(t),M(s,r)}}}function Ze(i){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function xe(i){let e,a,t=Object.entries(i[4].responses),s=[];for(let n=0;n<t.length;n+=1)s[n]=it(Ue(i,t,n));let f=n=>g(s[n],1,1,()=>{s[n]=null});return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=X()},m(n,r){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(n,r);h(n,e,r),a=!0},p(n,r){if(r&1){t=Object.entries(n[4].responses);let l;for(l=0;l<t.length;l+=1){let p=Ue(n,t,l);s[l]?(s[l].p(p,r),d(s[l],1)):(s[l]=it(p),s[l].c(),d(s[l],1),s[l].m(e.parentNode,e))}for(V(),l=t.length;l<s.length;l+=1)f(l);H()}},i(n){if(!a){for(let r=0;r<t.length;r+=1)d(s[r]);a=!0}},o(n){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)g(s[r]);a=!1},d(n){x(s,n),n&&D(e)}}}function et(i){let e,a,t=i[7]+"",s,f,n,r,l=!i[8].isBackwardCompatible&&tt(i);return n=new Z({props:{diffItems:i[8].items}}),{c(){e=b("p"),l&&l.c(),a=P(`
                                Response: `),s=P(t),f=C(),R(n.$$.fragment),_(e,"class","table-title svelte-11qy9pw")},m(p,o){h(p,e,o),l&&l.m(e,null),u(e,a),u(e,s),h(p,f,o),N(n,p,o),r=!0},p(p,o){p[8].isBackwardCompatible?l&&(l.d(1),l=null):l||(l=tt(p),l.c(),l.m(e,a)),(!r||o&1)&&t!==(t=p[7]+"")&&G(s,t);let $={};o&1&&($.diffItems=p[8].items),n.$set($)},i(p){r||(d(n.$$.fragment,p),r=!0)},o(p){g(n.$$.fragment,p),r=!1},d(p){p&&D(e),l&&l.d(),p&&D(f),M(n,p)}}}function tt(i){let e;return{c(){e=b("i"),_(e,"class","fa-solid fa-triangle-exclamation mr-1"),_(e,"title","Not backward compatible change")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function it(i){let e,a,t=i[8].items.length&&et(i);return{c(){t&&t.c(),e=X()},m(s,f){t&&t.m(s,f),h(s,e,f),a=!0},p(s,f){s[8].items.length?t?(t.p(s,f),f&1&&d(t,1)):(t=et(s),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(V(),g(t,1,1,()=>{t=null}),H())},i(s){a||(d(t),a=!0)},o(s){g(t),a=!1},d(s){t&&t.d(s),s&&D(e)}}}function at(i){let e,a,t=i[3]+"",s,f,n,r,l,p,o=i[4].diffType+"",$,m,c,v,y,S,I,O=!i[4].isBackwardCompatible&&Ke(i),w=i[4].metadata&&i[4].metadata.items.length&&Je(i),k=i[4].parameters&&i[4].parameters.items.length&&Xe(i),A=i[4].request&&i[4].request.items.length&&Ye(i),T=i[4].responses&&xe(i);return{c(){e=b("details"),a=b("summary"),s=P(t),f=C(),n=b("p"),r=P(`Status:
                    `),l=b("span"),O&&O.c(),p=C(),$=P(o),c=C(),w&&w.c(),v=C(),k&&k.c(),y=C(),A&&A.c(),S=C(),T&&T.c(),_(a,"class","title is-5"),_(l,"class",m="tag "+Y[i[4].diffType]+" svelte-11qy9pw"),_(n,"class","mb-2"),e.open=!0,_(e,"class","svelte-11qy9pw")},m(E,q){h(E,e,q),u(e,a),u(a,s),u(e,f),u(e,n),u(n,r),u(n,l),O&&O.m(l,null),u(l,p),u(l,$),u(e,c),w&&w.m(e,null),u(e,v),k&&k.m(e,null),u(e,y),A&&A.m(e,null),u(e,S),T&&T.m(e,null),I=!0},p(E,q){(!I||q&1)&&t!==(t=E[3]+"")&&G(s,t),E[4].isBackwardCompatible?O&&(O.d(1),O=null):O||(O=Ke(E),O.c(),O.m(l,p)),(!I||q&1)&&o!==(o=E[4].diffType+"")&&G($,o),(!I||q&1&&m!==(m="tag "+Y[E[4].diffType]+" svelte-11qy9pw"))&&_(l,"class",m),E[4].metadata&&E[4].metadata.items.length?w?(w.p(E,q),q&1&&d(w,1)):(w=Je(E),w.c(),d(w,1),w.m(e,v)):w&&(V(),g(w,1,1,()=>{w=null}),H()),E[4].parameters&&E[4].parameters.items.length?k?(k.p(E,q),q&1&&d(k,1)):(k=Xe(E),k.c(),d(k,1),k.m(e,y)):k&&(V(),g(k,1,1,()=>{k=null}),H()),E[4].request&&E[4].request.items.length?A?(A.p(E,q),q&1&&d(A,1)):(A=Ye(E),A.c(),d(A,1),A.m(e,S)):A&&(V(),g(A,1,1,()=>{A=null}),H()),E[4].responses?T?(T.p(E,q),q&1&&d(T,1)):(T=xe(E),T.c(),d(T,1),T.m(e,null)):T&&(V(),g(T,1,1,()=>{T=null}),H())},i(E){I||(d(w),d(k),d(A),d(T),I=!0)},o(E){g(w),g(k),g(A),g(T),I=!1},d(E){E&&D(e),O&&O.d(),w&&w.d(),k&&k.d(),A&&A.d(),T&&T.d()}}}function st(i){let e;return{c(){e=b("p"),e.textContent="No differences detected"},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function Et(i){let e,a,t=i[0]&&Qe(i);return{c(){e=b("div"),t&&t.c()},m(s,f){h(s,e,f),t&&t.m(e,null),a=!0},p(s,[f]){s[0]?t?(t.p(s,f),f&1&&d(t,1)):(t=Qe(s),t.c(),d(t,1),t.m(e,null)):t&&(V(),g(t,1,1,()=>{t=null}),H())},i(s){a||(d(t),a=!0)},o(s){g(t),a=!1},d(s){s&&D(e),t&&t.d()}}}function Ct(i,e,a){let{leftApi:t}=e,{rightApi:s}=e,f;return i.$$set=n=>{"leftApi"in n&&a(1,t=n.leftApi),"rightApi"in n&&a(2,s=n.rightApi)},i.$$.update=()=>{if(i.$$.dirty&6)e:t&&s&&a(0,f=qe(t,s))},[f,t,s]}var ue=class extends z{constructor(e){super(),F(this,e,Ct,Et,Q,{leftApi:1,rightApi:2},$t)}},nt=ue;L();function lt(i){let e;return{c(){e=P("Ok")},m(a,t){h(a,e,t)},d(a){a&&D(e)}}}function At(i){let e,a=i[0]&&i[1]&&lt(i);return{c(){e=b("div"),a&&a.c()},m(t,s){h(t,e,s),a&&a.m(e,null)},p(t,[s]){t[0]&&t[1]?a||(a=lt(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:J,o:J,d(t){t&&D(e),a&&a.d()}}}function Bt(i,e,a){let{leftApi:t}=e,{rightApi:s}=e;return i.$$set=f=>{"leftApi"in f&&a(0,t=f.leftApi),"rightApi"in f&&a(1,s=f.rightApi)},[t,s]}var de=class extends z{constructor(e){super(),F(this,e,Bt,At,Q,{leftApi:0,rightApi:1})}},rt=de;L();function St(i){K(i,"svelte-1gj2ttm",".tabs-with-options.svelte-1gj2ttm.svelte-1gj2ttm{display:flex;flex-wrap:nowrap;align-content:center;align-items:stretch}.tabs-with-options.svelte-1gj2ttm .tabs.svelte-1gj2ttm{flex-grow:1;margin-bottom:0}")}function Tt(i){let e,a,t,s,f,n,r,l,p,o,$,m,c,v;return{c(){e=b("div"),a=b("div"),t=b("ul"),s=b("li"),f=b("a"),f.innerHTML=`<span class="icon is-small"><i class="fas fa-circle-nodes"></i></span> 
                    <span>Api Diff</span>`,l=C(),p=b("li"),o=b("a"),o.innerHTML=`<span class="icon is-small"><i class="fas fa-diagram-project"></i></span> 
                    <span>Diagrams Diff</span>`,_(f,"href",n="#"),_(s,"class",r=i[0]==="api-diff"?"is-active":""),_(o,"href",$="#"),_(p,"class",m=i[0]==="diagrams-diff"?"is-active":""),_(a,"class","tabs is-boxed is-floating svelte-1gj2ttm"),_(e,"class","tabs-with-options svelte-1gj2ttm")},m(y,S){h(y,e,S),u(e,a),u(a,t),u(t,s),u(s,f),u(t,l),u(t,p),u(p,o),c||(v=[ee(f,"click",re(i[2])),ee(o,"click",re(i[3]))],c=!0)},p(y,[S]){S&1&&r!==(r=y[0]==="api-diff"?"is-active":"")&&_(s,"class",r),S&1&&m!==(m=y[0]==="diagrams-diff"?"is-active":"")&&_(p,"class",m)},i:J,o:J,d(y){y&&D(e),c=!1,ye(v)}}}function Ot(i,e,a){let{selectedTab:t="api-diff"}=e,s=Ee();function f(l){return te(this,void 0,void 0,function*(){a(0,t=l),s("tabChange",{selectedTab:t})})}let n=()=>f("api-diff"),r=()=>f("diagrams-diff");return i.$$set=l=>{"selectedTab"in l&&a(0,t=l.selectedTab)},[t,f,n,r]}var be=class extends z{constructor(e){super(),F(this,e,Ot,Tt,Q,{selectedTab:0},St)}},ft=be;function Rt(i){K(i,"svelte-1nizkyl",".is-center.svelte-1nizkyl{display:flex;justify-content:center;align-items:center;flex-direction:column}")}function ot(i){let e,a,t,s,f,n,r;return e=new ft({props:{selectedTab:i[2]}}),e.$on("tabChange",i[5]),s=new fe({props:{isVisible:i[2]==="api-diff",$$slots:{default:[Nt]},$$scope:{ctx:i}}}),n=new fe({props:{isVisible:i[2]==="diagrams-diff",$$slots:{default:[Mt]},$$scope:{ctx:i}}}),{c(){R(e.$$.fragment),a=C(),t=b("div"),R(s.$$.fragment),f=C(),R(n.$$.fragment),_(t,"class","box flat-top")},m(l,p){N(e,l,p),h(l,a,p),h(l,t,p),N(s,t,null),u(t,f),N(n,t,null),r=!0},p(l,p){let o={};p&4&&(o.selectedTab=l[2]),e.$set(o);let $={};p&4&&($.isVisible=l[2]==="api-diff"),p&131&&($.$$scope={dirty:p,ctx:l}),s.$set($);let m={};p&4&&(m.isVisible=l[2]==="diagrams-diff"),p&131&&(m.$$scope={dirty:p,ctx:l}),n.$set(m)},i(l){r||(d(e.$$.fragment,l),d(s.$$.fragment,l),d(n.$$.fragment,l),r=!0)},o(l){g(e.$$.fragment,l),g(s.$$.fragment,l),g(n.$$.fragment,l),r=!1},d(l){M(e,l),l&&D(a),l&&D(t),M(s),M(n)}}}function Nt(i){let e,a;return e=new nt({props:{leftApi:i[0].api,rightApi:i[1].api}}),{c(){R(e.$$.fragment)},m(t,s){N(e,t,s),a=!0},p(t,s){let f={};s&1&&(f.leftApi=t[0].api),s&2&&(f.rightApi=t[1].api),e.$set(f)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}function Mt(i){let e,a;return e=new rt({props:{leftApi:i[0].api,rightApi:i[1].api}}),{c(){R(e.$$.fragment)},m(t,s){N(e,t,s),a=!0},p(t,s){let f={};s&1&&(f.leftApi=t[0].api),s&2&&(f.rightApi=t[1].api),e.$set(f)},i(t){a||(d(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}function qt(i){let e,a,t,s,f,n,r,l,p,o,$,m,c,v,y,S,I,O,w,k,A,T,E,q;e=new Be({props:{activePage:"compare"}}),s=new ie({props:{messages:["This feature is not completed yet"]}}),o=new oe({props:{browserHash:i[0].hash,storagePrefix:"left"}}),o.$on("apiChange",function(){le(i[4](i[0]))&&i[4](i[0]).apply(this,arguments)}),m=new ie({props:{messages:i[0].errors}}),I=new oe({props:{browserHash:i[1].hash,storagePrefix:"right"}}),I.$on("apiChange",function(){le(i[4](i[1]))&&i[4](i[1]).apply(this,arguments)}),w=new ie({props:{messages:i[1].errors}});let j=i[0].api&&i[1].api&&ot(i);return E=new Ce({}),{c(){R(e.$$.fragment),a=C(),t=b("div"),R(s.$$.fragment),f=C(),n=b("section"),n.innerHTML=`<div class="hero-body"><h1 class="title">Api Compare</h1> 
      <p class="subtitle">List changes between two Apis</p></div>`,r=C(),l=b("div"),p=b("div"),R(o.$$.fragment),$=C(),R(m.$$.fragment),c=C(),v=b("div"),v.innerHTML='<p class="title is-2"><i class="fa-solid fa-right-long"></i></p>',y=C(),S=b("div"),R(I.$$.fragment),O=C(),R(w.$$.fragment),k=C(),j&&j.c(),T=C(),R(E.$$.fragment),_(n,"class","hero is-small"),_(p,"class","column"),_(v,"class","column is-center is-narrow svelte-1nizkyl"),_(S,"class","column"),_(l,"class","columns"),_(t,"class",A="container "+(i[3].fluidLayout?"is-fluid":""))},m(B,U){N(e,B,U),h(B,a,U),h(B,t,U),N(s,t,null),u(t,f),u(t,n),u(t,r),u(t,l),u(l,p),N(o,p,null),u(p,$),N(m,p,null),u(l,c),u(l,v),u(l,y),u(l,S),N(I,S,null),u(S,O),N(w,S,null),u(t,k),j&&j.m(t,null),h(B,T,U),N(E,B,U),q=!0},p(B,[U]){i=B;let ge={};U&1&&(ge.browserHash=i[0].hash),o.$set(ge);let he={};U&1&&(he.messages=i[0].errors),m.$set(he);let De={};U&2&&(De.browserHash=i[1].hash),I.$set(De);let ke={};U&2&&(ke.messages=i[1].errors),w.$set(ke),i[0].api&&i[1].api?j?(j.p(i,U),U&3&&d(j,1)):(j=ot(i),j.c(),d(j,1),j.m(t,null)):j&&(V(),g(j,1,1,()=>{j=null}),H()),(!q||U&8&&A!==(A="container "+(i[3].fluidLayout?"is-fluid":"")))&&_(t,"class",A)},i(B){q||(d(e.$$.fragment,B),d(s.$$.fragment,B),d(o.$$.fragment,B),d(m.$$.fragment,B),d(I.$$.fragment,B),d(w.$$.fragment,B),d(j),d(E.$$.fragment,B),q=!0)},o(B){g(e.$$.fragment,B),g(s.$$.fragment,B),g(o.$$.fragment,B),g(m.$$.fragment,B),g(I.$$.fragment,B),g(w.$$.fragment,B),g(j),g(E.$$.fragment,B),q=!1},d(B){M(e,B),B&&D(a),B&&D(t),M(s),M(o),M(m),M(I),M(w),j&&j.d(),B&&D(T),M(E,B)}}}function It(i,e,a){let t;ve(i,Ae,o=>a(3,t=o));let s={hash:null,api:null,errors:[]},f={hash:null,api:null,errors:[]},n="api-diff";function r(){let o=new URLSearchParams(window.location.search);s.hash&&o.set("leftApi",s.hash),f.hash&&o.set("rightApi",f.hash),window.history.pushState(null,null,"?"+o.toString())}function l(o){return $=>te(this,void 0,void 0,function*(){let m=$.detail.apiObject;if(o.api=null,o.errors=[],o.hash=$.detail.hash,m){try{o.api=Se(m),o.api.setModelsTitle()}catch(c){o.errors=[...o.errors,"Error: "+c.message]}if(o.api)try{yield o.api.resolveReferences()}catch(c){console.error(c),o.errors=[...o.errors,"Error while parsing api: "+c.message]}}a(0,s),a(1,f),r()})}function p(o){a(2,n=o.detail.selectedTab)}return $e(()=>{let o=new URLSearchParams(window.location.search);a(0,s.hash=o.get("leftApi"),s),a(1,f.hash=o.get("rightApi"),f)}),[s,f,n,t,l,p]}var _e=class extends z{constructor(e){super(),F(this,e,It,qt,Q,{},Rt)}},pt=_e;new pt({target:document.body});we();

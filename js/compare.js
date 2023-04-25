// Project: https://github.com/marc0l92/api-portal
import{a as be}from"./chunk-NLYUMGMV.js";import{d as Pe,l as ge}from"./chunk-GGBUZBTM.js";import"./chunk-KH7MCBP5.js";import{a as ne}from"./chunk-6NTOL2IZ.js";import{$ as N,A as Q,B as y,C as D,D as Z,E as _,F as R,G as O,H as X,I as ee,J as _e,L as h,M as P,Q as Me,T as Re,W as z,X as j,Y as b,Z as C,_ as B,aa as M,ba as G,ca as V,da as Ie,ga as se,h as I,n as Se,o as H,oa as ze,p as Be,pa as je,q as de,r as J,t as Ne,z as m}from"./chunk-E6WZCZXE.js";I();I();I();I();I();var K={["Added"]:"is-success",["Modified"]:"is-warning",["Removed"]:"is-danger",["No Changes"]:"is-light"},ae=["title","type","example","minLength","maxLength","minItems","maxItems","minProperties","maxProperties","pattern","format","enum","description","required","additionalProperties","readOnly","writeOnly","allowEmptyValue","collectionFormat","default","maximum","minimum","exclusiveMaximum","exclusiveMinimum","uniqueItems","multipleOf"];I();var fe=(l,e,i)=>i===0&&(e===null||l!==null&&l>=e)||i===1&&(l===null||e!==null&&l<=e),re=(l,e,i)=>i===0&&(e===null||l!==null&&l<=e)||i===1&&(l===null||e!==null&&l>=e),Ft=(l,e)=>e!==null&&l===e,te=(l,e)=>e===null||l===e,oe=()=>!0,Le={title:oe,example:oe,description:oe,type:Ft,minLength:fe,maxLength:re,minItems:fe,maxItems:re,minProperties:fe,maxProperties:re,minimum:fe,maximum:re,exclusiveMinimum:(l,e,i)=>e===l||i!==0&&e!==!0||i!==1&&e===!0,exclusiveMaximum:(l,e,i)=>e===l||i!==0&&e!==!0||i!==1&&e===!0,pattern:te,format:te,collectionFormat:te,multipleOf:te,uniqueItems:te,default:oe,allowEmptyValue:(l,e,i,t)=>e===null||e!==t||l===e,enum:(l,e,i)=>i===1||e===null||l!==null&&l.every(t=>e.indexOf(t)!==-1),required:(l,e,i)=>i===0&&(e===null||l!==null&&e.every(t=>l.indexOf(t)!==-1))||i===1&&(l===null||e!==null&&l.every(t=>e.indexOf(t)!==-1)),readOnly:(l,e,i,t)=>i===1||t===!1||l!==!0||e===!0,writeOnly:(l,e,i,t)=>i===0||t===!1||e!==!0||l===!0,additionalProperties:(l,e,i)=>i===1||e!==!0||l===!0},he=(l,e,i)=>l==="No Changes"||i===!1||e===0&&l==="Removed"||e===1&&l==="Added";function Ve(l,e){let i={isBackwardCompatible:!0,metadata:[],services:{}};i.metadata=pe(He(l),He(e)).items;let t=e.getServices();for(let s of l.getServices()){let n=t.findIndex(f=>f.getName()===s.getName());if(n>=0){let f=t[n],a={diffType:"Modified",isBackwardCompatible:!0,metadata:{isBackwardCompatible:!0,items:[]},parameters:{isBackwardCompatible:!0,items:[]},request:{isBackwardCompatible:!0,items:[]},responses:{}};a.metadata=pe(Je(s),Je(f)),a.parameters=Ht(s.getRequestParameters(),f.getRequestParameters()),a.request=ke(s.getRequest(),f.getRequest(),0),a.responses=Jt(s.getResponses(),f.getResponses()),(a.metadata.items.length||a.parameters.items.length||a.request.items.length||a.request.model&&a.request.model.diffType!=="No Changes"||Object.keys(a.responses).length)&&(a.isBackwardCompatible&&(a.isBackwardCompatible=a.metadata.isBackwardCompatible&&a.parameters.isBackwardCompatible&&a.request.isBackwardCompatible&&Object.values(a.responses).every(r=>r.isBackwardCompatible)),i.isBackwardCompatible&&(i.isBackwardCompatible=a.isBackwardCompatible),i.services[s.getName()]=a),t.splice(n,1)}else i.isBackwardCompatible=!1,i.services[s.getName()]={diffType:"Removed",isBackwardCompatible:!1}}for(let s of t)i.services[s.getName()]={diffType:"Added",isBackwardCompatible:!0};return i}function He(l){return Object.fromEntries(Object.entries(l.toJson()).filter(([e,i])=>["paths","definitions","responses","parameters","components"].indexOf(e)===-1))}function Je(l){return Object.fromEntries(Object.entries(l.toJson()).filter(([e,i])=>["parameters","responses","requestBody"].indexOf(e)===-1))}function Ge(l){return Object.fromEntries(Object.entries(l).filter(([e,i])=>["schema"].indexOf(e)===-1))}function ce(l,e,i){return i?`${l}[${e}]`:`${l}/${e}`}function Lt(l,e){if(l===e)return"No Changes";if(l==null)return"Added";if(e==null)return"Removed";if(Array.isArray(l)&&Array.isArray(e)){let i=e.slice().sort();if(l.length===e.length&&l.slice().sort().every((t,s)=>t===i[s]))return"No Changes"}return JSON.stringify(l)===JSON.stringify(e)?"No Changes":"Modified"}function pe(l,e,i="",t=[]){let s={isBackwardCompatible:!0,items:[]},n=Object.keys(e);for(let f of Object.keys(l)){let a=n.indexOf(f);if(a>=0){if(typeof l[f]=="object"&&typeof e[f]=="object"){let r=pe(l[f],e[f],ce(i,f,Array.isArray(l)),t);s.isBackwardCompatible&&(s.isBackwardCompatible=r.isBackwardCompatible),s.items=s.items.concat(r.items)}else if(l[f]!==e[f]){let r=ce(i,f,Array.isArray(l)),c=t.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=c),s.items.push({path:r,diffType:"Modified",leftValue:l[f],rightValue:e[f],isBackwardCompatible:c})}n.splice(a,1)}else{let r=ce(i,f,Array.isArray(l)),c=t.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=c),s.items.push({path:r,diffType:"Removed",leftValue:l[f],isBackwardCompatible:c})}}for(let f of n){let a=ce(i,f,Array.isArray(e)),r=t.indexOf(a)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=r),s.items.push({path:a,diffType:"Added",rightValue:e[f],isBackwardCompatible:r})}return s}function Ht(l,e){let i={isBackwardCompatible:!0,items:[]},t=Object.keys(e).map(s=>parseInt(s));for(let s of l){let n=e.findIndex(f=>f.name===s.name&&f.in===s.in);if(n>=0){let f=e[n],a=ke(s,f,0);i.isBackwardCompatible&&(i.isBackwardCompatible=a.isBackwardCompatible),i.items=i.items.concat(a.items),t.splice(t.indexOf(n),1)}else i.isBackwardCompatible=!1,i.items.push({path:s["x-path"],diffType:"Removed",leftValue:s,isBackwardCompatible:!1})}for(let s of t){let n=e[s];i.items.push({path:n["x-path"],diffType:"Added",rightValue:n,isBackwardCompatible:!0})}return i}function ke(l,e,i){let t={isBackwardCompatible:!0,items:[]};if(!l&&!e)return t;if(!l&&e)return{items:[{path:e["x-path"],diffType:"Added",rightValue:e,isBackwardCompatible:!0}],isBackwardCompatible:!0};if(l&&!e)return{items:[{path:l["x-path"],diffType:"Removed",rightValue:l,isBackwardCompatible:!1}],isBackwardCompatible:!1};let s=["in","name","type","required","schema"];t=pe(Ge(l),Ge(e),l["x-path"],s);let n=ie(l.schema,e.schema,i);return n.diffType!=="No Changes"&&(t.model=n,t.isBackwardCompatible&&(t.isBackwardCompatible=n.isBackwardCompatible)),t}function Jt(l,e){let i={},t=Object.keys(e);for(let s of Object.keys(l)){let n=l[s],f=t.indexOf(s);if(f>=0){let a=e[s],r=ke(n,a,1);(r.items.length||r.model)&&(i[s]=r),t.splice(f,1)}else i[s]={items:[{path:n["x-path"],diffType:"Removed",rightValue:n,isBackwardCompatible:!1}],isBackwardCompatible:!1}}for(let s of t){let n=e[s];i[s]={items:[{path:n["x-path"],diffType:"Added",rightValue:n,isBackwardCompatible:!0}],isBackwardCompatible:!0}}return i}function ie(l,e,i,t=!1){var n,f;if(!l&&!e)return{diffType:"No Changes",isBackwardCompatible:!0};if(!l&&e)return Object.assign({diffType:"Added",isBackwardCompatible:he("Added",i,t)},e);if(l&&!e)return Object.assign({diffType:"Removed",isBackwardCompatible:he("Removed",i,t)},l);let s={isBackwardCompatible:!0,diffType:"No Changes",properties:{}};for(let a of ae){let r={diffType:Lt(l[a],e[a]),isBackwardCompatible:Le[a]((n=l[a])!=null?n:null,(f=e[a])!=null?f:null,i,t),leftValue:l[a],rightValue:e[a]};r.diffType!=="No Changes"&&(s[a]=r,s.isBackwardCompatible&&(s.isBackwardCompatible=r.isBackwardCompatible),s.diffType="Modified")}if(l.items!==e.items&&(s.items=ie(l.items,e.items,i),s.items.diffType!=="No Changes"&&(s.diffType="Modified")),l.properties!==e.properties){let a=l.required||[],r=e.properties?Object.keys(e.properties):[];if(l.properties)for(let o in l.properties){let d=a.indexOf(o)!==-1,p=r.indexOf(o);if(p!==-1){r.splice(p,1);let u=ie(l.properties[o],e.properties[o],i,d);u.diffType!=="No Changes"&&(s.properties[o]=u,s.diffType="Modified")}else s.properties[o]=ie(l.properties[o],null,i,d),s.diffType="Modified"}let c=e.required||[];for(let o of r){let d=c.indexOf(o)!==-1;s.properties[o]=ie(null,e.properties[o],i,d)}r.length>0&&(s.diffType="Modified")}return Object.keys(s.properties).length===0&&delete s.properties,s}I();I();function Gt(l){Q(l,"svelte-p30usc",".longText.svelte-p30usc{cursor:pointer;word-break:break-all}")}function Vt(l){let e,i;return{c(){e=_("div"),i=R(l[1])},m(t,s){y(t,e,s),m(e,i)},p(t,s){s&2&&P(i,t[1])},d(t){t&&D(e)}}}function Ut(l){let e,i=(l[2]?l[1]:l[3])+"",t,s,n;return{c(){e=_("div"),t=R(i),h(e,"class","longText svelte-p30usc"),h(e,"title","Double click to expand")},m(f,a){y(f,e,a),m(e,t),s||(n=ee(e,"dblclick",l[4]),s=!0)},p(f,a){a&14&&i!==(i=(f[2]?f[1]:f[3])+"")&&P(t,i)},d(f){f&&D(e),s=!1,n()}}}function Kt(l){let e;function i(n,f){return n[1].length>n[0]?Ut:Vt}let t=i(l,-1),s=t(l);return{c(){s.c(),e=X()},m(n,f){s.m(n,f),y(n,e,f)},p(n,[f]){t===(t=i(n,f))&&s?s.p(n,f):(s.d(1),s=t(n),s&&(s.c(),s.m(e.parentNode,e)))},i:H,o:H,d(n){s.d(n),n&&D(e)}}}function Qt(l,e,i){let{maxLength:t=30}=e,{text:s}=e,{keepEnd:n=!1}=e,f=!1,a="";function r(){i(2,f=!f)}return l.$$set=c=>{"maxLength"in c&&i(0,t=c.maxLength),"text"in c&&i(1,s=c.text),"keepEnd"in c&&i(5,n=c.keepEnd)},l.$$.update=()=>{if(l.$$.dirty&35)e:s&&(s.length>t?n?i(3,a="..."+s.substring(s.length-t)):i(3,a=s.substring(0,t)+"..."):i(3,a=s))},[t,s,f,a,r,n]}var ye=class extends V{constructor(e){super(),G(this,e,Qt,Kt,J,{maxLength:0,text:1,keepEnd:5},Gt)}},me=ye;function Xt(l){Q(l,"svelte-zx4u3q",".diff-table-container.svelte-zx4u3q.svelte-zx4u3q{overflow-x:auto;max-width:100%}.diff-table-container.svelte-zx4u3q .is-fullwidth.svelte-zx4u3q{width:calc(100% - 1px)}.diff-table-container.svelte-zx4u3q.svelte-zx4u3q:not(:last-child){margin-bottom:1em}")}function Ue(l,e,i){let t=l.slice();return t[1]=e[i],t}function Ke(l){let e,i,t,s,n,f,a=l[0],r=[];for(let o=0;o<a.length;o+=1)r[o]=Xe(Ue(l,a,o));let c=o=>C(r[o],1,1,()=>{r[o]=null});return{c(){e=_("div"),i=_("table"),t=_("thead"),t.innerHTML=`<tr><th>Type</th> 
                    <th>Location</th> 
                    <th>Left Value</th> 
                    <th>Right Value</th></tr>`,s=O(),n=_("tbody");for(let o=0;o<r.length;o+=1)r[o].c();h(i,"class","table is-bordered is-striped is-narrow is-hoverable is-fullwidth svelte-zx4u3q"),h(e,"class","diff-table-container svelte-zx4u3q")},m(o,d){y(o,e,d),m(e,i),m(i,t),m(i,s),m(i,n);for(let p=0;p<r.length;p+=1)r[p]&&r[p].m(n,null);f=!0},p(o,d){if(d&1){a=o[0];let p;for(p=0;p<a.length;p+=1){let u=Ue(o,a,p);r[p]?(r[p].p(u,d),b(r[p],1)):(r[p]=Xe(u),r[p].c(),b(r[p],1),r[p].m(n,null))}for(z(),p=a.length;p<r.length;p+=1)c(p);j()}},i(o){if(!f){for(let d=0;d<a.length;d+=1)b(r[d]);f=!0}},o(o){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)C(r[d]);f=!1},d(o){o&&D(e),Z(r,o)}}}function Qe(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function Xe(l){let e,i,t,s,n=l[1].diffType+"",f,a,r,c,o,d,p,u,g,A,k,T,w,v=!l[1].isBackwardCompatible&&Qe(l);return o=new me({props:{text:l[1].path||"",maxLength:Yt,keepEnd:!0}}),u=new me({props:{text:l[1].leftValue?JSON.stringify(l[1].leftValue):"",maxLength:We}}),k=new me({props:{text:l[1].rightValue?JSON.stringify(l[1].rightValue):"",maxLength:We}}),{c(){e=_("tr"),i=_("td"),t=_("span"),v&&v.c(),s=O(),f=R(n),r=O(),c=_("td"),B(o.$$.fragment),d=O(),p=_("td"),B(u.$$.fragment),g=O(),A=_("td"),B(k.$$.fragment),T=O(),h(t,"class",a="tag "+K[l[1].diffType]+" svelte-zx4u3q")},m($,E){y($,e,E),m(e,i),m(i,t),v&&v.m(t,null),m(t,s),m(t,f),m(e,r),m(e,c),N(o,c,null),m(e,d),m(e,p),N(u,p,null),m(e,g),m(e,A),N(k,A,null),m(e,T),w=!0},p($,E){$[1].isBackwardCompatible?v&&(v.d(1),v=null):v||(v=Qe($),v.c(),v.m(t,s)),(!w||E&1)&&n!==(n=$[1].diffType+"")&&P(f,n),(!w||E&1&&a!==(a="tag "+K[$[1].diffType]+" svelte-zx4u3q"))&&h(t,"class",a);let q={};E&1&&(q.text=$[1].path||""),o.$set(q);let L={};E&1&&(L.text=$[1].leftValue?JSON.stringify($[1].leftValue):""),u.$set(L);let Y={};E&1&&(Y.text=$[1].rightValue?JSON.stringify($[1].rightValue):""),k.$set(Y)},i($){w||(b(o.$$.fragment,$),b(u.$$.fragment,$),b(k.$$.fragment,$),w=!0)},o($){C(o.$$.fragment,$),C(u.$$.fragment,$),C(k.$$.fragment,$),w=!1},d($){$&&D(e),v&&v.d(),M(o),M(u),M(k)}}}function Wt(l){let e,i,t=l[0]&&l[0].length>0&&Ke(l);return{c(){t&&t.c(),e=X()},m(s,n){t&&t.m(s,n),y(s,e,n),i=!0},p(s,[n]){s[0]&&s[0].length>0?t?(t.p(s,n),n&1&&b(t,1)):(t=Ke(s),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&D(e)}}}var Yt=30,We=120;function Zt(l,e,i){let{diffItems:t}=e;return l.$$set=s=>{"diffItems"in s&&i(0,t=s.diffItems)},[t]}var De=class extends V{constructor(e){super(),G(this,e,Zt,Wt,J,{diffItems:0},Xt)}},x=De;I();function xt(l){Q(l,"svelte-et0dzq","table.table.is-ghost.svelte-et0dzq td.svelte-et0dzq,table.table.is-ghost.svelte-et0dzq th.svelte-et0dzq{border:0}table.table.is-ghost.svelte-et0dzq td.svelte-et0dzq:first-child,table.table.is-ghost.svelte-et0dzq th.svelte-et0dzq:first-child{margin-left:0;padding-left:0}.table.svelte-et0dzq.svelte-et0dzq:not(:last-child){margin-bottom:0.5rem}.diff-model-container.svelte-et0dzq.svelte-et0dzq{overflow-x:auto}.diff-model-container.svelte-et0dzq>table.table.svelte-et0dzq{width:calc(100% - 1px)}")}function Ye(l,e,i){let t=l.slice();return t[2]=e[i][0],t[3]=e[i][1],t}function Ze(l,e,i){let t=l.slice();return t[6]=e[i][0],t[7]=e[i][1],t}function xe(l){let e,i,t,s,n=l[1].length>0&&et(l),f=l[0].properties&&at(l),a=l[0].items&&pt(l);return{c(){e=_("div"),n&&n.c(),i=O(),f&&f.c(),t=O(),a&&a.c(),h(e,"class","diff-model-container svelte-et0dzq")},m(r,c){y(r,e,c),n&&n.m(e,null),m(e,i),f&&f.m(e,null),m(e,t),a&&a.m(e,null),s=!0},p(r,c){r[1].length>0?n?n.p(r,c):(n=et(r),n.c(),n.m(e,i)):n&&(n.d(1),n=null),r[0].properties?f?(f.p(r,c),c&1&&b(f,1)):(f=at(r),f.c(),b(f,1),f.m(e,t)):f&&(z(),C(f,1,1,()=>{f=null}),j()),r[0].items?a?(a.p(r,c),c&1&&b(a,1)):(a=pt(r),a.c(),b(a,1),a.m(e,null)):a&&(z(),C(a,1,1,()=>{a=null}),j())},i(r){s||(b(f),b(a),s=!0)},o(r){C(f),C(a),s=!1},d(r){r&&D(e),n&&n.d(),f&&f.d(),a&&a.d()}}}function et(l){let e,i,t=l[1],s=[];for(let n=0;n<t.length;n+=1)s[n]=nt(Ze(l,t,n));return{c(){e=_("table"),i=_("tbody");for(let n=0;n<s.length;n+=1)s[n].c();h(e,"class","table is-narrow is-ghost svelte-et0dzq")},m(n,f){y(n,e,f),m(e,i);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(i,null)},p(n,f){if(f&2){t=n[1];let a;for(a=0;a<t.length;a+=1){let r=Ze(n,t,a);s[a]?s[a].p(r,f):(s[a]=nt(r),s[a].c(),s[a].m(i,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=t.length}},d(n){n&&D(e),Z(s,n)}}}function tt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function it(l){let e,i=JSON.stringify(l[7].leftValue)+"",t;return{c(){e=_("span"),t=R(i)},m(s,n){y(s,e,n),m(e,t)},p(s,n){n&2&&i!==(i=JSON.stringify(s[7].leftValue)+"")&&P(t,i)},d(s){s&&D(e)}}}function lt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-right-long")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function st(l){let e,i=JSON.stringify(l[7].rightValue)+"",t;return{c(){e=_("span"),t=R(i)},m(s,n){y(s,e,n),m(e,t)},p(s,n){n&2&&i!==(i=JSON.stringify(s[7].rightValue)+"")&&P(t,i)},d(s){s&&D(e)}}}function nt(l){let e,i,t,s,n=l[7].diffType+"",f,a,r,c,o=l[6]+"",d,p,u,g,A,k,T,w=!l[7].isBackwardCompatible&&tt(l),v=l[7].leftValue&&it(l),$=l[7].diffType==="Modified"&&lt(l),E=l[7].rightValue&&st(l);return{c(){e=_("tr"),i=_("td"),t=_("span"),w&&w.c(),s=O(),f=R(n),r=O(),c=_("th"),d=R(o),p=R(":"),u=O(),g=_("td"),v&&v.c(),A=O(),$&&$.c(),k=O(),E&&E.c(),T=O(),h(t,"class",a="tag "+K[l[7].diffType]+" svelte-et0dzq"),h(i,"class","svelte-et0dzq"),h(c,"class","svelte-et0dzq"),h(g,"class","svelte-et0dzq")},m(q,L){y(q,e,L),m(e,i),m(i,t),w&&w.m(t,null),m(t,s),m(t,f),m(e,r),m(e,c),m(c,d),m(c,p),m(e,u),m(e,g),v&&v.m(g,null),m(g,A),$&&$.m(g,null),m(g,k),E&&E.m(g,null),m(e,T)},p(q,L){q[7].isBackwardCompatible?w&&(w.d(1),w=null):w||(w=tt(q),w.c(),w.m(t,s)),L&2&&n!==(n=q[7].diffType+"")&&P(f,n),L&2&&a!==(a="tag "+K[q[7].diffType]+" svelte-et0dzq")&&h(t,"class",a),L&2&&o!==(o=q[6]+"")&&P(d,o),q[7].leftValue?v?v.p(q,L):(v=it(q),v.c(),v.m(g,A)):v&&(v.d(1),v=null),q[7].diffType==="Modified"?$||($=lt(q),$.c(),$.m(g,k)):$&&($.d(1),$=null),q[7].rightValue?E?E.p(q,L):(E=st(q),E.c(),E.m(g,null)):E&&(E.d(1),E=null)},d(q){q&&D(e),w&&w.d(),v&&v.d(),$&&$.d(),E&&E.d()}}}function at(l){let e,i,t,s=Object.entries(l[0].properties),n=[];for(let a=0;a<s.length;a+=1)n[a]=ct(Ye(l,s,a));let f=a=>C(n[a],1,1,()=>{n[a]=null});return{c(){e=_("table"),i=_("tbody");for(let a=0;a<n.length;a+=1)n[a].c();h(e,"class","table is-bordered is-narrow is-fullwidth svelte-et0dzq")},m(a,r){y(a,e,r),m(e,i);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(i,null);t=!0},p(a,r){if(r&1){s=Object.entries(a[0].properties);let c;for(c=0;c<s.length;c+=1){let o=Ye(a,s,c);n[c]?(n[c].p(o,r),b(n[c],1)):(n[c]=ct(o),n[c].c(),b(n[c],1),n[c].m(i,null))}for(z(),c=s.length;c<n.length;c+=1)f(c);j()}},i(a){if(!t){for(let r=0;r<s.length;r+=1)b(n[r]);t=!0}},o(a){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)C(n[r]);t=!1},d(a){a&&D(e),Z(n,a)}}}function ft(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function rt(l){let e,i,t=l[3].diffType+"",s,n,f=!l[3].isBackwardCompatible&&ot(l);return{c(){e=_("span"),f&&f.c(),i=O(),s=R(t),h(e,"class",n="tag "+K[l[3].diffType]+" svelte-et0dzq")},m(a,r){y(a,e,r),f&&f.m(e,null),m(e,i),m(e,s)},p(a,r){a[3].isBackwardCompatible?f&&(f.d(1),f=null):f||(f=ot(a),f.c(),f.m(e,i)),r&1&&t!==(t=a[3].diffType+"")&&P(s,t),r&1&&n!==(n="tag "+K[a[3].diffType]+" svelte-et0dzq")&&h(e,"class",n)},d(a){a&&D(e),f&&f.d()}}}function ot(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function ei(l){let e=JSON.stringify(ue(l[3]))+"",i;return{c(){i=R(e)},m(t,s){y(t,i,s)},p(t,s){s&1&&e!==(e=JSON.stringify(ue(t[3]))+"")&&P(i,e)},i:H,o:H,d(t){t&&D(i)}}}function ti(l){let e,i;return e=new le({props:{diffModel:l[3]}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.diffModel=t[3]),e.$set(n)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function ct(l){let e,i,t,s=l[2]+"",n,f,a,r,c,o,d,p,u=!l[3].isBackwardCompatible&&ft(l),g=l[3].diffType!=="Modified"&&rt(l),A=[ti,ei],k=[];function T(w,v){return w[3].diffType==="Modified"?0:1}return c=T(l,-1),o=k[c]=A[c](l),{c(){e=_("tr"),i=_("td"),u&&u.c(),t=O(),n=R(s),f=O(),g&&g.c(),a=O(),r=_("td"),o.c(),d=O()},m(w,v){y(w,e,v),m(e,i),u&&u.m(i,null),m(i,t),m(i,n),m(i,f),g&&g.m(i,null),m(e,a),m(e,r),k[c].m(r,null),m(e,d),p=!0},p(w,v){w[3].isBackwardCompatible?u&&(u.d(1),u=null):u||(u=ft(w),u.c(),u.m(i,t)),(!p||v&1)&&s!==(s=w[2]+"")&&P(n,s),w[3].diffType!=="Modified"?g?g.p(w,v):(g=rt(w),g.c(),g.m(i,null)):g&&(g.d(1),g=null);let $=c;c=T(w,v),c===$?k[c].p(w,v):(z(),C(k[$],1,1,()=>{k[$]=null}),j(),o=k[c],o?o.p(w,v):(o=k[c]=A[c](w),o.c()),b(o,1),o.m(r,null))},i(w){p||(b(o),p=!0)},o(w){C(o),p=!1},d(w){w&&D(e),u&&u.d(),g&&g.d(),k[c].d()}}}function pt(l){let e,i,t,s,n,f,a,r,c,o,d=!l[0].items.isBackwardCompatible&&mt(l),p=l[0].items.diffType!=="Modified"&&ut(l),u=[li,ii],g=[];function A(k,T){return k[0].items.diffType==="Modified"?0:1}return r=A(l,-1),c=g[r]=u[r](l),{c(){e=_("table"),i=_("tbody"),t=_("tr"),s=_("td"),d&&d.c(),n=R(`
                            [ ]
                            `),p&&p.c(),f=O(),a=_("td"),c.c(),h(e,"class","table is-bordered is-narrow svelte-et0dzq")},m(k,T){y(k,e,T),m(e,i),m(i,t),m(t,s),d&&d.m(s,null),m(s,n),p&&p.m(s,null),m(t,f),m(t,a),g[r].m(a,null),o=!0},p(k,T){k[0].items.isBackwardCompatible?d&&(d.d(1),d=null):d||(d=mt(k),d.c(),d.m(s,n)),k[0].items.diffType!=="Modified"?p?p.p(k,T):(p=ut(k),p.c(),p.m(s,null)):p&&(p.d(1),p=null);let w=r;r=A(k,T),r===w?g[r].p(k,T):(z(),C(g[w],1,1,()=>{g[w]=null}),j(),c=g[r],c?c.p(k,T):(c=g[r]=u[r](k),c.c()),b(c,1),c.m(a,null))},i(k){o||(b(c),o=!0)},o(k){C(c),o=!1},d(k){k&&D(e),d&&d.d(),p&&p.d(),g[r].d()}}}function mt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function ut(l){let e,i,t=l[0].items.diffType+"",s,n,f=!l[0].items.isBackwardCompatible&&dt(l);return{c(){e=_("span"),f&&f.c(),i=O(),s=R(t),h(e,"class",n="tag "+K[l[0].items.diffType]+" svelte-et0dzq")},m(a,r){y(a,e,r),f&&f.m(e,null),m(e,i),m(e,s)},p(a,r){a[0].items.isBackwardCompatible?f&&(f.d(1),f=null):f||(f=dt(a),f.c(),f.m(e,i)),r&1&&t!==(t=a[0].items.diffType+"")&&P(s,t),r&1&&n!==(n="tag "+K[a[0].items.diffType]+" svelte-et0dzq")&&h(e,"class",n)},d(a){a&&D(e),f&&f.d()}}}function dt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function ii(l){let e=JSON.stringify(ue(l[0].items))+"",i;return{c(){i=R(e)},m(t,s){y(t,i,s)},p(t,s){s&1&&e!==(e=JSON.stringify(ue(t[0].items))+"")&&P(i,e)},i:H,o:H,d(t){t&&D(i)}}}function li(l){let e,i;return e=new le({props:{diffModel:l[0].items}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.diffModel=t[0].items),e.$set(n)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function si(l){let e,i,t=l[0]&&xe(l);return{c(){t&&t.c(),e=X()},m(s,n){t&&t.m(s,n),y(s,e,n),i=!0},p(s,[n]){s[0]?t?(t.p(s,n),n&1&&b(t,1)):(t=xe(s),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&D(e)}}}function ue(l){return Object.fromEntries(Object.entries(l).filter(([e,i])=>["diffType","isBackwardCompatible"].indexOf(e)===-1))}function ni(l,e,i){let{diffModel:t}=e,s=[];return l.$$set=n=>{"diffModel"in n&&i(0,t=n.diffModel)},l.$$.update=()=>{if(l.$$.dirty&1)e:i(1,s=Object.entries(t).filter(([n,f])=>ae.indexOf(n)!==-1))},[t,s]}var le=class extends V{constructor(e){super(),G(this,e,ni,si,J,{diffModel:0},xt)}},we=le;function ai(l){Q(l,"svelte-11qy9pw","details[open].svelte-11qy9pw:not(:last-child){margin-bottom:1.5em}.table-title.svelte-11qy9pw{font-weight:bold}")}function _t(l,e,i){let t=l.slice();return t[3]=e[i][0],t[4]=e[i][1],t}function bt(l,e,i){let t=l.slice();return t[7]=e[i][0],t[8]=e[i][1],t}function gt(l){let e,i,t,s=!l[0].metadata.length&&!Object.keys(l[0].services).length,n,f,a=!l[0].isBackwardCompatible&&ht(l),r=l[0].metadata.length>0&&kt(l),c=Object.entries(l[0].services),o=[];for(let u=0;u<c.length;u+=1)o[u]=St(_t(l,c,u));let d=u=>C(o[u],1,1,()=>{o[u]=null}),p=s&&Bt(l);return{c(){a&&a.c(),e=O(),r&&r.c(),i=O();for(let u=0;u<o.length;u+=1)o[u].c();t=O(),p&&p.c(),n=X()},m(u,g){a&&a.m(u,g),y(u,e,g),r&&r.m(u,g),y(u,i,g);for(let A=0;A<o.length;A+=1)o[A]&&o[A].m(u,g);y(u,t,g),p&&p.m(u,g),y(u,n,g),f=!0},p(u,g){if(u[0].isBackwardCompatible?a&&(a.d(1),a=null):a||(a=ht(u),a.c(),a.m(e.parentNode,e)),u[0].metadata.length>0?r?(r.p(u,g),g&1&&b(r,1)):(r=kt(u),r.c(),b(r,1),r.m(i.parentNode,i)):r&&(z(),C(r,1,1,()=>{r=null}),j()),g&1){c=Object.entries(u[0].services);let A;for(A=0;A<c.length;A+=1){let k=_t(u,c,A);o[A]?(o[A].p(k,g),b(o[A],1)):(o[A]=St(k),o[A].c(),b(o[A],1),o[A].m(t.parentNode,t))}for(z(),A=c.length;A<o.length;A+=1)d(A);j()}g&1&&(s=!u[0].metadata.length&&!Object.keys(u[0].services).length),s?p||(p=Bt(u),p.c(),p.m(n.parentNode,n)):p&&(p.d(1),p=null)},i(u){if(!f){b(r);for(let g=0;g<c.length;g+=1)b(o[g]);f=!0}},o(u){C(r),o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)C(o[g]);f=!1},d(u){a&&a.d(u),u&&D(e),r&&r.d(u),u&&D(i),Z(o,u),u&&D(t),p&&p.d(u),u&&D(n)}}}function ht(l){let e;return{c(){e=_("div"),e.innerHTML=`<i class="fa-solid fa-triangle-exclamation mx-1" title="Not backward compatible change"></i>
                Not backward compatible changes detected`,h(e,"class","notification is-small is-info")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function kt(l){let e,i,t,s,n;return s=new x({props:{diffItems:l[0].metadata}}),{c(){e=_("details"),i=_("summary"),i.textContent="Apis Metadata",t=O(),B(s.$$.fragment),h(i,"class","title is-5"),h(e,"class","svelte-11qy9pw")},m(f,a){y(f,e,a),m(e,i),m(e,t),N(s,e,null),n=!0},p(f,a){let r={};a&1&&(r.diffItems=f[0].metadata),s.$set(r)},i(f){n||(b(s.$$.fragment,f),n=!0)},o(f){C(s.$$.fragment,f),n=!1},d(f){f&&D(e),M(s)}}}function yt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function Dt(l){let e,i,t,s,n,f=!l[4].metadata.isBackwardCompatible&&wt(l);return s=new x({props:{diffItems:l[4].metadata.items}}),{c(){e=_("p"),f&&f.c(),i=R(`
                        Metadata`),t=O(),B(s.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(a,r){y(a,e,r),f&&f.m(e,null),m(e,i),y(a,t,r),N(s,a,r),n=!0},p(a,r){a[4].metadata.isBackwardCompatible?f&&(f.d(1),f=null):f||(f=wt(a),f.c(),f.m(e,i));let c={};r&1&&(c.diffItems=a[4].metadata.items),s.$set(c)},i(a){n||(b(s.$$.fragment,a),n=!0)},o(a){C(s.$$.fragment,a),n=!1},d(a){a&&D(e),f&&f.d(),a&&D(t),M(s,a)}}}function wt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function vt(l){let e,i,t,s,n,f=!l[4].parameters.isBackwardCompatible&&Ct(l);return s=new x({props:{diffItems:l[4].parameters.items}}),{c(){e=_("p"),f&&f.c(),i=R(`
                        Request Parameters`),t=O(),B(s.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(a,r){y(a,e,r),f&&f.m(e,null),m(e,i),y(a,t,r),N(s,a,r),n=!0},p(a,r){a[4].parameters.isBackwardCompatible?f&&(f.d(1),f=null):f||(f=Ct(a),f.c(),f.m(e,i));let c={};r&1&&(c.diffItems=a[4].parameters.items),s.$set(c)},i(a){n||(b(s.$$.fragment,a),n=!0)},o(a){C(s.$$.fragment,a),n=!1},d(a){a&&D(e),f&&f.d(),a&&D(t),M(s,a)}}}function Ct(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function $t(l){let e,i,t,s,n,f,a,r=!l[4].request.isBackwardCompatible&&Et(l);return s=new x({props:{diffItems:l[4].request.items}}),f=new we({props:{diffModel:l[4].request.model}}),{c(){e=_("p"),r&&r.c(),i=R(`
                        Request Body`),t=O(),B(s.$$.fragment),n=O(),B(f.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(c,o){y(c,e,o),r&&r.m(e,null),m(e,i),y(c,t,o),N(s,c,o),y(c,n,o),N(f,c,o),a=!0},p(c,o){c[4].request.isBackwardCompatible?r&&(r.d(1),r=null):r||(r=Et(c),r.c(),r.m(e,i));let d={};o&1&&(d.diffItems=c[4].request.items),s.$set(d);let p={};o&1&&(p.diffModel=c[4].request.model),f.$set(p)},i(c){a||(b(s.$$.fragment,c),b(f.$$.fragment,c),a=!0)},o(c){C(s.$$.fragment,c),C(f.$$.fragment,c),a=!1},d(c){c&&D(e),r&&r.d(),c&&D(t),M(s,c),c&&D(n),M(f,c)}}}function Et(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function Ot(l){let e,i,t=Object.entries(l[4].responses),s=[];for(let f=0;f<t.length;f+=1)s[f]=qt(bt(l,t,f));let n=f=>C(s[f],1,1,()=>{s[f]=null});return{c(){for(let f=0;f<s.length;f+=1)s[f].c();e=X()},m(f,a){for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(f,a);y(f,e,a),i=!0},p(f,a){if(a&1){t=Object.entries(f[4].responses);let r;for(r=0;r<t.length;r+=1){let c=bt(f,t,r);s[r]?(s[r].p(c,a),b(s[r],1)):(s[r]=qt(c),s[r].c(),b(s[r],1),s[r].m(e.parentNode,e))}for(z(),r=t.length;r<s.length;r+=1)n(r);j()}},i(f){if(!i){for(let a=0;a<t.length;a+=1)b(s[a]);i=!0}},o(f){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)C(s[a]);i=!1},d(f){Z(s,f),f&&D(e)}}}function At(l){let e,i,t=l[7]+"",s,n,f,a,r,c,o=!l[8].isBackwardCompatible&&Tt(l);return f=new x({props:{diffItems:l[8].items}}),r=new we({props:{diffModel:l[8].model}}),{c(){e=_("p"),o&&o.c(),i=R(`
                                Response: `),s=R(t),n=O(),B(f.$$.fragment),a=O(),B(r.$$.fragment),h(e,"class","table-title svelte-11qy9pw")},m(d,p){y(d,e,p),o&&o.m(e,null),m(e,i),m(e,s),y(d,n,p),N(f,d,p),y(d,a,p),N(r,d,p),c=!0},p(d,p){d[8].isBackwardCompatible?o&&(o.d(1),o=null):o||(o=Tt(d),o.c(),o.m(e,i)),(!c||p&1)&&t!==(t=d[7]+"")&&P(s,t);let u={};p&1&&(u.diffItems=d[8].items),f.$set(u);let g={};p&1&&(g.diffModel=d[8].model),r.$set(g)},i(d){c||(b(f.$$.fragment,d),b(r.$$.fragment,d),c=!0)},o(d){C(f.$$.fragment,d),C(r.$$.fragment,d),c=!1},d(d){d&&D(e),o&&o.d(),d&&D(n),M(f,d),d&&D(a),M(r,d)}}}function Tt(l){let e;return{c(){e=_("i"),h(e,"class","fa-solid fa-triangle-exclamation mr-1"),h(e,"title","Not backward compatible change")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function qt(l){let e,i,t=(l[8].items.length||l[8].model)&&At(l);return{c(){t&&t.c(),e=X()},m(s,n){t&&t.m(s,n),y(s,e,n),i=!0},p(s,n){s[8].items.length||s[8].model?t?(t.p(s,n),n&1&&b(t,1)):(t=At(s),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){t&&t.d(s),s&&D(e)}}}function St(l){let e,i,t=l[3]+"",s,n,f,a,r=l[4].diffType+"",c,o,d,p,u,g,A,k=!l[4].isBackwardCompatible&&yt(l),T=l[4].metadata&&l[4].metadata.items.length&&Dt(l),w=l[4].parameters&&l[4].parameters.items.length&&vt(l),v=l[4].request&&(l[4].request.items.length||l[4].request.model)&&$t(l),$=l[4].responses&&Ot(l);return{c(){e=_("details"),i=_("summary"),s=R(t),n=O(),f=_("span"),k&&k.c(),a=O(),c=R(r),d=O(),T&&T.c(),p=O(),w&&w.c(),u=O(),v&&v.c(),g=O(),$&&$.c(),h(f,"class",o="tag "+K[l[4].diffType]+" svelte-11qy9pw"),h(i,"class","title is-5"),e.open=!0,h(e,"class","svelte-11qy9pw")},m(E,q){y(E,e,q),m(e,i),m(i,s),m(i,n),m(i,f),k&&k.m(f,null),m(f,a),m(f,c),m(e,d),T&&T.m(e,null),m(e,p),w&&w.m(e,null),m(e,u),v&&v.m(e,null),m(e,g),$&&$.m(e,null),A=!0},p(E,q){(!A||q&1)&&t!==(t=E[3]+"")&&P(s,t),E[4].isBackwardCompatible?k&&(k.d(1),k=null):k||(k=yt(E),k.c(),k.m(f,a)),(!A||q&1)&&r!==(r=E[4].diffType+"")&&P(c,r),(!A||q&1&&o!==(o="tag "+K[E[4].diffType]+" svelte-11qy9pw"))&&h(f,"class",o),E[4].metadata&&E[4].metadata.items.length?T?(T.p(E,q),q&1&&b(T,1)):(T=Dt(E),T.c(),b(T,1),T.m(e,p)):T&&(z(),C(T,1,1,()=>{T=null}),j()),E[4].parameters&&E[4].parameters.items.length?w?(w.p(E,q),q&1&&b(w,1)):(w=vt(E),w.c(),b(w,1),w.m(e,u)):w&&(z(),C(w,1,1,()=>{w=null}),j()),E[4].request&&(E[4].request.items.length||E[4].request.model)?v?(v.p(E,q),q&1&&b(v,1)):(v=$t(E),v.c(),b(v,1),v.m(e,g)):v&&(z(),C(v,1,1,()=>{v=null}),j()),E[4].responses?$?($.p(E,q),q&1&&b($,1)):($=Ot(E),$.c(),b($,1),$.m(e,null)):$&&(z(),C($,1,1,()=>{$=null}),j())},i(E){A||(b(T),b(w),b(v),b($),A=!0)},o(E){C(T),C(w),C(v),C($),A=!1},d(E){E&&D(e),k&&k.d(),T&&T.d(),w&&w.d(),v&&v.d(),$&&$.d()}}}function Bt(l){let e;return{c(){e=_("p"),e.textContent="No differences detected"},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function fi(l){let e,i,t=l[0]&&gt(l);return{c(){e=_("div"),t&&t.c()},m(s,n){y(s,e,n),t&&t.m(e,null),i=!0},p(s,[n]){s[0]?t?(t.p(s,n),n&1&&b(t,1)):(t=gt(s),t.c(),b(t,1),t.m(e,null)):t&&(z(),C(t,1,1,()=>{t=null}),j())},i(s){i||(b(t),i=!0)},o(s){C(t),i=!1},d(s){s&&D(e),t&&t.d()}}}function ri(l,e,i){let{leftApi:t}=e,{rightApi:s}=e,n;return l.$$set=f=>{"leftApi"in f&&i(1,t=f.leftApi),"rightApi"in f&&i(2,s=f.rightApi)},l.$$.update=()=>{if(l.$$.dirty&7)e:t&&s&&(i(0,n=Ve(t,s)),console.log({apiDiff:n}))},[n,t,s]}var ve=class extends V{constructor(e){super(),G(this,e,ri,fi,J,{leftApi:1,rightApi:2},ai)}},Nt=ve;I();function Mt(l){let e;return{c(){e=R("Work in progress")},m(i,t){y(i,e,t)},d(i){i&&D(e)}}}function oi(l){let e,i=l[0]&&l[1]&&Mt(l);return{c(){e=_("div"),i&&i.c()},m(t,s){y(t,e,s),i&&i.m(e,null)},p(t,[s]){t[0]&&t[1]?i||(i=Mt(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},i:H,o:H,d(t){t&&D(e),i&&i.d()}}}function ci(l,e,i){let{leftApi:t}=e,{rightApi:s}=e;return l.$$set=n=>{"leftApi"in n&&i(0,t=n.leftApi),"rightApi"in n&&i(1,s=n.rightApi)},[t,s]}var Ce=class extends V{constructor(e){super(),G(this,e,ci,oi,J,{leftApi:0,rightApi:1})}},Rt=Ce;I();function pi(l){Q(l,"svelte-1gj2ttm",".tabs-with-options.svelte-1gj2ttm.svelte-1gj2ttm{display:flex;flex-wrap:nowrap;align-content:center;align-items:stretch}.tabs-with-options.svelte-1gj2ttm .tabs.svelte-1gj2ttm{flex-grow:1;margin-bottom:0}")}function mi(l){let e,i,t,s,n,f,a,r,c,o,d,p,u,g;return{c(){e=_("div"),i=_("div"),t=_("ul"),s=_("li"),n=_("a"),n.innerHTML=`<span class="icon is-small"><i class="fas fa-circle-nodes"></i></span> 
                    <span>Api Diff</span>`,r=O(),c=_("li"),o=_("a"),o.innerHTML=`<span class="icon is-small"><i class="fas fa-diagram-project"></i></span> 
                    <span>Diagrams Diff</span>`,h(n,"href",f="#"),h(s,"class",a=l[0]==="api-diff"?"is-active":""),h(o,"href",d="#"),h(c,"class",p=l[0]==="diagrams-diff"?"is-active":""),h(i,"class","tabs is-boxed is-floating svelte-1gj2ttm"),h(e,"class","tabs-with-options svelte-1gj2ttm")},m(A,k){y(A,e,k),m(e,i),m(i,t),m(t,s),m(s,n),m(t,r),m(t,c),m(c,o),u||(g=[ee(n,"click",_e(l[2])),ee(o,"click",_e(l[3]))],u=!0)},p(A,[k]){k&1&&a!==(a=A[0]==="api-diff"?"is-active":"")&&h(s,"class",a),k&1&&p!==(p=A[0]==="diagrams-diff"?"is-active":"")&&h(c,"class",p)},i:H,o:H,d(A){A&&D(e),u=!1,Be(g)}}}function ui(l,e,i){let{selectedTab:t="api-diff"}=e,s=Re();function n(r){return se(this,void 0,void 0,function*(){i(0,t=r),s("tabChange",{selectedTab:t})})}let f=()=>n("api-diff"),a=()=>n("diagrams-diff");return l.$$set=r=>{"selectedTab"in r&&i(0,t=r.selectedTab)},[t,n,f,a]}var $e=class extends V{constructor(e){super(),G(this,e,ui,mi,J,{selectedTab:0},pi)}},It=$e;function di(l){Q(l,"svelte-1nizkyl",".is-center.svelte-1nizkyl{display:flex;justify-content:center;align-items:center;flex-direction:column}")}function zt(l){let e,i,t,s,n,f,a;return e=new It({props:{selectedTab:l[2]}}),e.$on("tabChange",l[5]),s=new be({props:{isVisible:l[2]==="api-diff",$$slots:{default:[_i]},$$scope:{ctx:l}}}),f=new be({props:{isVisible:l[2]==="diagrams-diff",$$slots:{default:[bi]},$$scope:{ctx:l}}}),{c(){B(e.$$.fragment),i=O(),t=_("div"),B(s.$$.fragment),n=O(),B(f.$$.fragment),h(t,"class","box flat-top")},m(r,c){N(e,r,c),y(r,i,c),y(r,t,c),N(s,t,null),m(t,n),N(f,t,null),a=!0},p(r,c){let o={};c&4&&(o.selectedTab=r[2]),e.$set(o);let d={};c&4&&(d.isVisible=r[2]==="api-diff"),c&131&&(d.$$scope={dirty:c,ctx:r}),s.$set(d);let p={};c&4&&(p.isVisible=r[2]==="diagrams-diff"),c&131&&(p.$$scope={dirty:c,ctx:r}),f.$set(p)},i(r){a||(b(e.$$.fragment,r),b(s.$$.fragment,r),b(f.$$.fragment,r),a=!0)},o(r){C(e.$$.fragment,r),C(s.$$.fragment,r),C(f.$$.fragment,r),a=!1},d(r){M(e,r),r&&D(i),r&&D(t),M(s),M(f)}}}function _i(l){let e,i;return e=new Nt({props:{leftApi:l[0].api,rightApi:l[1].api}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.leftApi=t[0].api),s&2&&(n.rightApi=t[1].api),e.$set(n)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function bi(l){let e,i;return e=new Rt({props:{leftApi:l[0].api,rightApi:l[1].api}}),{c(){B(e.$$.fragment)},m(t,s){N(e,t,s),i=!0},p(t,s){let n={};s&1&&(n.leftApi=t[0].api),s&2&&(n.rightApi=t[1].api),e.$set(n)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){C(e.$$.fragment,t),i=!1},d(t){M(e,t)}}}function gi(l){let e,i,t,s,n,f,a,r,c,o,d,p,u,g,A,k,T,w,v,$,E,q,L,Y;e=new je({props:{activePage:"compare"}}),s=new ne({props:{messages:["This feature is not completed yet"]}}),o=new ge({props:{browserHash:l[0].hash,storagePrefix:"left"}}),o.$on("apiChange",function(){de(l[4](l[0]))&&l[4](l[0]).apply(this,arguments)}),p=new ne({props:{messages:l[0].errors}}),T=new ge({props:{browserHash:l[1].hash,storagePrefix:"right"}}),T.$on("apiChange",function(){de(l[4](l[1]))&&l[4](l[1]).apply(this,arguments)}),v=new ne({props:{messages:l[1].errors}});let F=l[0].api&&l[1].api&&zt(l);return L=new Ie({}),{c(){B(e.$$.fragment),i=O(),t=_("div"),B(s.$$.fragment),n=O(),f=_("section"),f.innerHTML=`<div class="hero-body"><h1 class="title">Api Compare</h1> 
      <p class="subtitle">List changes between two Apis</p></div>`,a=O(),r=_("div"),c=_("div"),B(o.$$.fragment),d=O(),B(p.$$.fragment),u=O(),g=_("div"),g.innerHTML='<p class="title is-2"><i class="fa-solid fa-right-long"></i></p>',A=O(),k=_("div"),B(T.$$.fragment),w=O(),B(v.$$.fragment),$=O(),F&&F.c(),q=O(),B(L.$$.fragment),h(f,"class","hero is-small"),h(c,"class","column"),h(g,"class","column is-center is-narrow svelte-1nizkyl"),h(k,"class","column"),h(r,"class","columns"),h(t,"class",E="container "+(l[3].fluidLayout?"is-fluid":""))},m(S,U){N(e,S,U),y(S,i,U),y(S,t,U),N(s,t,null),m(t,n),m(t,f),m(t,a),m(t,r),m(r,c),N(o,c,null),m(c,d),N(p,c,null),m(r,u),m(r,g),m(r,A),m(r,k),N(T,k,null),m(k,w),N(v,k,null),m(t,$),F&&F.m(t,null),y(S,q,U),N(L,S,U),Y=!0},p(S,[U]){l=S;let Oe={};U&1&&(Oe.browserHash=l[0].hash),o.$set(Oe);let Ae={};U&1&&(Ae.messages=l[0].errors),p.$set(Ae);let Te={};U&2&&(Te.browserHash=l[1].hash),T.$set(Te);let qe={};U&2&&(qe.messages=l[1].errors),v.$set(qe),l[0].api&&l[1].api?F?(F.p(l,U),U&3&&b(F,1)):(F=zt(l),F.c(),b(F,1),F.m(t,null)):F&&(z(),C(F,1,1,()=>{F=null}),j()),(!Y||U&8&&E!==(E="container "+(l[3].fluidLayout?"is-fluid":"")))&&h(t,"class",E)},i(S){Y||(b(e.$$.fragment,S),b(s.$$.fragment,S),b(o.$$.fragment,S),b(p.$$.fragment,S),b(T.$$.fragment,S),b(v.$$.fragment,S),b(F),b(L.$$.fragment,S),Y=!0)},o(S){C(e.$$.fragment,S),C(s.$$.fragment,S),C(o.$$.fragment,S),C(p.$$.fragment,S),C(T.$$.fragment,S),C(v.$$.fragment,S),C(F),C(L.$$.fragment,S),Y=!1},d(S){M(e,S),S&&D(i),S&&D(t),M(s),M(o),M(p),M(T),M(v),F&&F.d(),S&&D(q),M(L,S)}}}function hi(l,e,i){let t;Ne(l,ze,o=>i(3,t=o));let s={hash:null,api:null,errors:[]},n={hash:null,api:null,errors:[]},f="api-diff";function a(){let o=new URLSearchParams(window.location.search);s.hash&&o.set("leftApi",s.hash),n.hash&&o.set("rightApi",n.hash),window.history.pushState(null,null,"?"+o.toString())}function r(o){return d=>se(this,void 0,void 0,function*(){let p=d.detail.apiObject;if(o.api=null,o.errors=[],o.hash=d.detail.hash,p){try{o.api=Pe(p),o.api.setModelsTitle()}catch(u){o.errors=[...o.errors,"Error: "+u.message]}if(o.api)try{yield o.api.resolveReferences()}catch(u){console.error(u),o.errors=[...o.errors,"Error while parsing api: "+u.message]}}i(0,s),i(1,n),a()})}function c(o){i(2,f=o.detail.selectedTab)}return Me(()=>{let o=new URLSearchParams(window.location.search);i(0,s.hash=o.get("leftApi"),s),i(1,n.hash=o.get("rightApi"),n)}),[s,n,f,t,r,c]}var Ee=class extends V{constructor(e){super(),G(this,e,hi,gi,J,{},di)}},jt=Ee;new jt({target:document.body});Se();

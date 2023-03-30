// Project: https://github.com/marc0l92/api-tools
import{a as le}from"./chunk-HOPA2RU2.js";import{d as De,k as re}from"./chunk-TINJP4UA.js";import"./chunk-RHDLZGTA.js";import{a as se}from"./chunk-KPHIGS2K.js";import{$ as R,A as y,B as D,C as X,D as d,E as I,F as C,G as Y,H as ie,I as ae,K as g,L as K,P as ke,S as we,V as P,W as J,X as $,Y as A,Z as M,_ as T,aa as H,ba as F,ca as ve,fa as Z,h as N,m as be,n as z,na as $e,o as he,oa as ye,p as te,q as L,s as _e,y as m,z as U}from"./chunk-IQS4FNAD.js";N();N();N();N();var G={["Added"]:"is-success",["Modified"]:"is-warning",["Removed"]:"is-danger"};function Oe(a,e){let t={isBackwardCompatible:!0,metadata:[],services:{}};t.metadata=ee(Ce(a),Ce(e)).items;let i=e.getServices();for(let s of a.getServices()){let f=i.findIndex(l=>l.getName()===s.getName());if(f>=0){let l=i[f],r={type:"Modified",isBackwardCompatible:!0,metadata:{isBackwardCompatible:!0,items:[]},parameters:{isBackwardCompatible:!0,items:[]},request:{isBackwardCompatible:!0,items:[]},responses:{}};r.metadata=ee(Ae(s),Ae(l)),r.parameters=et(s.getRequestParameters(),l.getRequestParameters()),r.request=je(s.getRequest(),l.getRequest()),r.responses=tt(s.getResponses(),l.getResponses()),(r.metadata.items.length||r.parameters.items.length||r.request.items.length||Object.keys(r.responses).length)&&(r.isBackwardCompatible&&(r.isBackwardCompatible=r.metadata.isBackwardCompatible&&r.parameters.isBackwardCompatible&&r.request.isBackwardCompatible&&Object.values(r.responses).every(n=>n.isBackwardCompatible)),t.isBackwardCompatible&&(t.isBackwardCompatible=r.isBackwardCompatible),t.services[s.getName()]=r),i.splice(f,1)}else t.isBackwardCompatible=!1,t.services[s.getName()]={type:"Removed",isBackwardCompatible:!1}}for(let s of i)t.services[s.getName()]={type:"Added",isBackwardCompatible:!0};return t}function Ce(a){return Object.fromEntries(Object.entries(a.toJson()).filter(([e,t])=>["paths","definitions","responses","parameters","components"].indexOf(e)===-1))}function Ae(a){return Object.fromEntries(Object.entries(a.toJson()).filter(([e,t])=>["parameters","responses","requestBody"].indexOf(e)===-1))}function Be(a){return Object.fromEntries(Object.entries(a).filter(([e,t])=>["schema"].indexOf(e)===-1))}function x(a,e,t){return t?`${a}[${e}]`:`${a}/${e}`}function ee(a,e,t="",i=[]){let s={isBackwardCompatible:!0,items:[]},f=Object.keys(e);for(let l of Object.keys(a)){let r=f.indexOf(l);if(r>=0){if(typeof a[l]=="object"&&typeof e[l]=="object"){let n=ee(a[l],e[l],x(t,l,Array.isArray(a)),i);s.isBackwardCompatible&&(s.isBackwardCompatible=n.isBackwardCompatible),s.items=s.items.concat(n.items)}else if(a[l]!==e[l]){let n=x(t,l,Array.isArray(a)),p=i.indexOf(n)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:n,type:"Modified",leftValue:a[l],rightValue:e[l],isBackwardCompatible:p})}f.splice(r,1)}else{let n=x(t,l,Array.isArray(a)),p=i.indexOf(n)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=p),s.items.push({path:n,type:"Removed",leftValue:a[l],isBackwardCompatible:p})}}for(let l of f){let r=x(t,l,Array.isArray(e)),n=i.indexOf(r)===-1;s.isBackwardCompatible&&(s.isBackwardCompatible=n),s.items.push({path:r,type:"Added",rightValue:e[l],isBackwardCompatible:n})}return s}function et(a,e){let t={isBackwardCompatible:!0,items:[]},i=Object.keys(e).map(s=>parseInt(s));for(let s of a){let f=e.findIndex(l=>l.name===s.name&&l.in===s.in);if(f>=0){let l=e[f],r=je(s,l);t.isBackwardCompatible&&(t.isBackwardCompatible=r.isBackwardCompatible),t.items=t.items.concat(r.items),i.splice(i.indexOf(f),1)}else t.isBackwardCompatible=!1,t.items.push({path:s["x-path"],type:"Removed",leftValue:s,isBackwardCompatible:!1})}for(let s of i){let f=e[s];t.items.push({path:f["x-path"],type:"Added",rightValue:f,isBackwardCompatible:!0})}return t}function je(a,e){let t={isBackwardCompatible:!0,items:[]};if(!a&&!e)return t;if(!a&&e)return{items:[{path:e["x-path"],type:"Added",rightValue:e,isBackwardCompatible:!0}],isBackwardCompatible:!0};if(a&&!e)return{items:[{path:a["x-path"],type:"Removed",rightValue:a,isBackwardCompatible:!1}],isBackwardCompatible:!1};let i=["in","name","type","required","schema"],s=ee(Be(a),Be(e),a["x-path"],i),f=it(a.schema,e.schema,a["x-path"]);return t.isBackwardCompatible&&(t.isBackwardCompatible=s.isBackwardCompatible&&f.isBackwardCompatible),t.items=t.items.concat(s.items,f.items),t}function tt(a,e){return{}}function it(a,e,t){return{isBackwardCompatible:!0,items:[]}}N();function qe(a,e,t){let i=a.slice();return i[1]=e[t],i}function Se(a){let e,t,i,s,f=a[0],l=[];for(let r=0;r<f.length;r+=1)l[r]=Te(qe(a,f,r));return{c(){e=d("table"),t=d("thead"),t.innerHTML=`<tr><th>Type</th> 
                <th>Location</th> 
                <th>Left Value</th> 
                <th>Right Value</th></tr>`,i=C(),s=d("tbody");for(let r=0;r<l.length;r+=1)l[r].c();g(e,"class","table is-bordered is-striped is-narrow is-hoverable is-fullwidth")},m(r,n){y(r,e,n),m(e,t),m(e,i),m(e,s);for(let p=0;p<l.length;p+=1)l[p].m(s,null)},p(r,n){if(n&1){f=r[0];let p;for(p=0;p<f.length;p+=1){let o=qe(r,f,p);l[p]?l[p].p(o,n):(l[p]=Te(o),l[p].c(),l[p].m(s,null))}for(;p<l.length;p+=1)l[p].d(1);l.length=f.length}},d(r){r&&D(e),X(l,r)}}}function Me(a){let e;return{c(){e=d("i"),g(e,"class","fa-solid fa-triangle-exclamation mr-1"),g(e,"title","Not backward compatible change")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function Te(a){let e,t,i,s,f=a[1].type+"",l,r,n,p,o=a[1].path+"",q,w,c,h=(a[1].leftValue?JSON.stringify(a[1].leftValue):"")+"",b,S,V,E=(a[1].rightValue?JSON.stringify(a[1].rightValue):"")+"",j,O,k=!a[1].isBackwardCompatible&&Me(a);return{c(){e=d("tr"),t=d("td"),i=d("span"),k&&k.c(),s=C(),l=I(f),n=C(),p=d("td"),q=I(o),w=C(),c=d("td"),b=I(h),S=C(),V=d("td"),j=I(E),O=C(),g(i,"class",r="tag "+G[a[1].type])},m(v,_){y(v,e,_),m(e,t),m(t,i),k&&k.m(i,null),m(i,s),m(i,l),m(e,n),m(e,p),m(p,q),m(e,w),m(e,c),m(c,b),m(e,S),m(e,V),m(V,j),m(e,O)},p(v,_){v[1].isBackwardCompatible?k&&(k.d(1),k=null):k||(k=Me(v),k.c(),k.m(i,s)),_&1&&f!==(f=v[1].type+"")&&K(l,f),_&1&&r!==(r="tag "+G[v[1].type])&&g(i,"class",r),_&1&&o!==(o=v[1].path+"")&&K(q,o),_&1&&h!==(h=(v[1].leftValue?JSON.stringify(v[1].leftValue):"")+"")&&K(b,h),_&1&&E!==(E=(v[1].rightValue?JSON.stringify(v[1].rightValue):"")+"")&&K(j,E)},d(v){v&&D(e),k&&k.d()}}}function at(a){let e,t=a[0]&&a[0].length>0&&Se(a);return{c(){t&&t.c(),e=Y()},m(i,s){t&&t.m(i,s),y(i,e,s)},p(i,[s]){i[0]&&i[0].length>0?t?t.p(i,s):(t=Se(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:z,o:z,d(i){t&&t.d(i),i&&D(e)}}}function st(a,e,t){let{diffItems:i}=e;return a.$$set=s=>{"diffItems"in s&&t(0,i=s.diffItems)},[i]}var ne=class extends F{constructor(e){super(),H(this,e,st,at,L,{diffItems:0})}},W=ne;function lt(a){U(a,"svelte-qjgarc","details.svelte-qjgarc:not(:last-child){margin-bottom:1.5em}.table-title.svelte-qjgarc{font-weight:bold}")}function Re(a,e,t){let i=a.slice();return i[3]=e[t][0],i[4]=e[t][1],i}function Ve(a){let e,t,i,s=!a[0].metadata.length&&!Object.keys(a[0].services).length,f,l,r=!a[0].isBackwardCompatible&&Ee(a),n=a[0].metadata.length>0&&Ne(a),p=Object.entries(a[0].services),o=[];for(let c=0;c<p.length;c+=1)o[c]=Ue(Re(a,p,c));let q=c=>A(o[c],1,1,()=>{o[c]=null}),w=s&&Qe(a);return{c(){r&&r.c(),e=C(),n&&n.c(),t=C();for(let c=0;c<o.length;c+=1)o[c].c();i=C(),w&&w.c(),f=Y()},m(c,h){r&&r.m(c,h),y(c,e,h),n&&n.m(c,h),y(c,t,h);for(let b=0;b<o.length;b+=1)o[b].m(c,h);y(c,i,h),w&&w.m(c,h),y(c,f,h),l=!0},p(c,h){if(c[0].isBackwardCompatible?r&&(r.d(1),r=null):r||(r=Ee(c),r.c(),r.m(e.parentNode,e)),c[0].metadata.length>0?n?(n.p(c,h),h&1&&$(n,1)):(n=Ne(c),n.c(),$(n,1),n.m(t.parentNode,t)):n&&(P(),A(n,1,1,()=>{n=null}),J()),h&1){p=Object.entries(c[0].services);let b;for(b=0;b<p.length;b+=1){let S=Re(c,p,b);o[b]?(o[b].p(S,h),$(o[b],1)):(o[b]=Ue(S),o[b].c(),$(o[b],1),o[b].m(i.parentNode,i))}for(P(),b=p.length;b<o.length;b+=1)q(b);J()}h&1&&(s=!c[0].metadata.length&&!Object.keys(c[0].services).length),s?w||(w=Qe(c),w.c(),w.m(f.parentNode,f)):w&&(w.d(1),w=null)},i(c){if(!l){$(n);for(let h=0;h<p.length;h+=1)$(o[h]);l=!0}},o(c){A(n),o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)A(o[h]);l=!1},d(c){r&&r.d(c),c&&D(e),n&&n.d(c),c&&D(t),X(o,c),c&&D(i),w&&w.d(c),c&&D(f)}}}function Ee(a){let e;return{c(){e=d("div"),e.innerHTML=`<i class="fa-solid fa-triangle-exclamation mx-1" title="Not backward compatible change"></i>
                Not backward compatible changes detected`,g(e,"class","notification is-small is-danger")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function Ne(a){let e,t,i,s,f;return s=new W({props:{diffItems:a[0].metadata}}),{c(){e=d("details"),t=d("summary"),t.textContent="Apis Metadata",i=C(),M(s.$$.fragment),g(t,"class","title is-5"),e.open=!0,g(e,"class","svelte-qjgarc")},m(l,r){y(l,e,r),m(e,t),m(e,i),T(s,e,null),f=!0},p(l,r){let n={};r&1&&(n.diffItems=l[0].metadata),s.$set(n)},i(l){f||($(s.$$.fragment,l),f=!0)},o(l){A(s.$$.fragment,l),f=!1},d(l){l&&D(e),R(s)}}}function Ie(a){let e;return{c(){e=d("i"),g(e,"class","fa-solid fa-triangle-exclamation mr-1"),g(e,"title","Not backward compatible change")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function Le(a){let e,t,i,s,f,l=!a[4].metadata.isBackwardCompatible&&He(a);return s=new W({props:{diffItems:a[4].metadata.items}}),{c(){e=d("p"),l&&l.c(),t=I(`
                        Metadata`),i=C(),M(s.$$.fragment),g(e,"class","table-title svelte-qjgarc")},m(r,n){y(r,e,n),l&&l.m(e,null),m(e,t),y(r,i,n),T(s,r,n),f=!0},p(r,n){r[4].metadata.isBackwardCompatible?l&&(l.d(1),l=null):l||(l=He(r),l.c(),l.m(e,t));let p={};n&1&&(p.diffItems=r[4].metadata.items),s.$set(p)},i(r){f||($(s.$$.fragment,r),f=!0)},o(r){A(s.$$.fragment,r),f=!1},d(r){r&&D(e),l&&l.d(),r&&D(i),R(s,r)}}}function He(a){let e;return{c(){e=d("i"),g(e,"class","fa-solid fa-triangle-exclamation mr-1"),g(e,"title","Not backward compatible change")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function Fe(a){let e,t,i,s,f,l=!a[4].parameters.isBackwardCompatible&&ze(a);return s=new W({props:{diffItems:a[4].parameters.items}}),{c(){e=d("p"),l&&l.c(),t=I(`
                        Request Parameters`),i=C(),M(s.$$.fragment),g(e,"class","table-title svelte-qjgarc")},m(r,n){y(r,e,n),l&&l.m(e,null),m(e,t),y(r,i,n),T(s,r,n),f=!0},p(r,n){r[4].parameters.isBackwardCompatible?l&&(l.d(1),l=null):l||(l=ze(r),l.c(),l.m(e,t));let p={};n&1&&(p.diffItems=r[4].parameters.items),s.$set(p)},i(r){f||($(s.$$.fragment,r),f=!0)},o(r){A(s.$$.fragment,r),f=!1},d(r){r&&D(e),l&&l.d(),r&&D(i),R(s,r)}}}function ze(a){let e;return{c(){e=d("i"),g(e,"class","fa-solid fa-triangle-exclamation mr-1"),g(e,"title","Not backward compatible change")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function Pe(a){let e,t,i,s,f,l=!a[4].request.isBackwardCompatible&&Je(a);return s=new W({props:{diffItems:a[4].request.items}}),{c(){e=d("p"),l&&l.c(),t=I(`
                        Request Body`),i=C(),M(s.$$.fragment),g(e,"class","table-title svelte-qjgarc")},m(r,n){y(r,e,n),l&&l.m(e,null),m(e,t),y(r,i,n),T(s,r,n),f=!0},p(r,n){r[4].request.isBackwardCompatible?l&&(l.d(1),l=null):l||(l=Je(r),l.c(),l.m(e,t));let p={};n&1&&(p.diffItems=r[4].request.items),s.$set(p)},i(r){f||($(s.$$.fragment,r),f=!0)},o(r){A(s.$$.fragment,r),f=!1},d(r){r&&D(e),l&&l.d(),r&&D(i),R(s,r)}}}function Je(a){let e;return{c(){e=d("i"),g(e,"class","fa-solid fa-triangle-exclamation mr-1"),g(e,"title","Not backward compatible change")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function Ke(a){let e;return{c(){e=d("p"),e.textContent="Responses Body",g(e,"class","table-title svelte-qjgarc")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function Ue(a){let e,t,i=a[3]+"",s,f,l,r,n,p,o=a[4].type+"",q,w,c,h,b,S,V=a[4].responses&&Object.keys(a[4].responses).length,E,j=!a[4].isBackwardCompatible&&Ie(a),O=a[4].metadata&&a[4].metadata.items.length&&Le(a),k=a[4].parameters&&a[4].parameters.items.length&&Fe(a),v=a[4].request&&a[4].request.items.length&&Pe(a),_=V&&Ke(a);return{c(){e=d("details"),t=d("summary"),s=I(i),f=C(),l=d("p"),r=I(`Status:
                    `),n=d("span"),j&&j.c(),p=C(),q=I(o),c=C(),O&&O.c(),h=C(),k&&k.c(),b=C(),v&&v.c(),S=C(),_&&_.c(),g(t,"class","title is-5"),g(n,"class",w="tag "+G[a[4].type]+" svelte-qjgarc"),g(l,"class","mb-2"),e.open=!0,g(e,"class","svelte-qjgarc")},m(u,B){y(u,e,B),m(e,t),m(t,s),m(e,f),m(e,l),m(l,r),m(l,n),j&&j.m(n,null),m(n,p),m(n,q),m(e,c),O&&O.m(e,null),m(e,h),k&&k.m(e,null),m(e,b),v&&v.m(e,null),m(e,S),_&&_.m(e,null),E=!0},p(u,B){(!E||B&1)&&i!==(i=u[3]+"")&&K(s,i),u[4].isBackwardCompatible?j&&(j.d(1),j=null):j||(j=Ie(u),j.c(),j.m(n,p)),(!E||B&1)&&o!==(o=u[4].type+"")&&K(q,o),(!E||B&1&&w!==(w="tag "+G[u[4].type]+" svelte-qjgarc"))&&g(n,"class",w),u[4].metadata&&u[4].metadata.items.length?O?(O.p(u,B),B&1&&$(O,1)):(O=Le(u),O.c(),$(O,1),O.m(e,h)):O&&(P(),A(O,1,1,()=>{O=null}),J()),u[4].parameters&&u[4].parameters.items.length?k?(k.p(u,B),B&1&&$(k,1)):(k=Fe(u),k.c(),$(k,1),k.m(e,b)):k&&(P(),A(k,1,1,()=>{k=null}),J()),u[4].request&&u[4].request.items.length?v?(v.p(u,B),B&1&&$(v,1)):(v=Pe(u),v.c(),$(v,1),v.m(e,S)):v&&(P(),A(v,1,1,()=>{v=null}),J()),B&1&&(V=u[4].responses&&Object.keys(u[4].responses).length),V?_||(_=Ke(u),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},i(u){E||($(O),$(k),$(v),E=!0)},o(u){A(O),A(k),A(v),E=!1},d(u){u&&D(e),j&&j.d(),O&&O.d(),k&&k.d(),v&&v.d(),_&&_.d()}}}function Qe(a){let e;return{c(){e=d("p"),e.textContent="No differences detected"},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function rt(a){let e,t,i=a[0]&&Ve(a);return{c(){e=d("div"),i&&i.c()},m(s,f){y(s,e,f),i&&i.m(e,null),t=!0},p(s,[f]){s[0]?i?(i.p(s,f),f&1&&$(i,1)):(i=Ve(s),i.c(),$(i,1),i.m(e,null)):i&&(P(),A(i,1,1,()=>{i=null}),J())},i(s){t||($(i),t=!0)},o(s){A(i),t=!1},d(s){s&&D(e),i&&i.d()}}}function nt(a,e,t){let{leftApi:i}=e,{rightApi:s}=e,f;return a.$$set=l=>{"leftApi"in l&&t(1,i=l.leftApi),"rightApi"in l&&t(2,s=l.rightApi)},a.$$.update=()=>{if(a.$$.dirty&6){e:i&&s&&t(0,f=Oe(i,s))}},[f,i,s]}var fe=class extends F{constructor(e){super(),H(this,e,nt,rt,L,{leftApi:1,rightApi:2},lt)}},Ge=fe;N();function We(a){let e;return{c(){e=I("Ok")},m(t,i){y(t,e,i)},d(t){t&&D(e)}}}function ft(a){let e,t=a[0]&&a[1]&&We(a);return{c(){e=d("div"),t&&t.c()},m(i,s){y(i,e,s),t&&t.m(e,null)},p(i,[s]){i[0]&&i[1]?t||(t=We(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:z,o:z,d(i){i&&D(e),t&&t.d()}}}function ot(a,e,t){let{leftApi:i}=e,{rightApi:s}=e;return a.$$set=f=>{"leftApi"in f&&t(0,i=f.leftApi),"rightApi"in f&&t(1,s=f.rightApi)},[i,s]}var oe=class extends F{constructor(e){super(),H(this,e,ot,ft,L,{leftApi:0,rightApi:1})}},Xe=oe;N();function pt(a){U(a,"svelte-1gj2ttm",".tabs-with-options.svelte-1gj2ttm.svelte-1gj2ttm{display:flex;flex-wrap:nowrap;align-content:center;align-items:stretch}.tabs-with-options.svelte-1gj2ttm .tabs.svelte-1gj2ttm{flex-grow:1;margin-bottom:0}")}function ct(a){let e,t,i,s,f,l,r,n,p,o,q,w,c,h;return{c(){e=d("div"),t=d("div"),i=d("ul"),s=d("li"),f=d("a"),f.innerHTML=`<span class="icon is-small"><i class="fas fa-circle-nodes"></i></span> 
                    <span>Api Diff</span>`,n=C(),p=d("li"),o=d("a"),o.innerHTML=`<span class="icon is-small"><i class="fas fa-diagram-project"></i></span> 
                    <span>Diagrams Diff</span>`,g(f,"href",l="#"),g(s,"class",r=a[0]==="api-diff"?"is-active":""),g(o,"href",q="#"),g(p,"class",w=a[0]==="diagrams-diff"?"is-active":""),g(t,"class","tabs is-boxed is-floating svelte-1gj2ttm"),g(e,"class","tabs-with-options svelte-1gj2ttm")},m(b,S){y(b,e,S),m(e,t),m(t,i),m(i,s),m(s,f),m(i,n),m(i,p),m(p,o),c||(h=[ie(f,"click",ae(a[2])),ie(o,"click",ae(a[3]))],c=!0)},p(b,[S]){S&1&&r!==(r=b[0]==="api-diff"?"is-active":"")&&g(s,"class",r),S&1&&w!==(w=b[0]==="diagrams-diff"?"is-active":"")&&g(p,"class",w)},i:z,o:z,d(b){b&&D(e),c=!1,he(h)}}}function mt(a,e,t){let{selectedTab:i="api-diff"}=e,s=we();function f(n){return Z(this,void 0,void 0,function*(){t(0,i=n),s("tabChange",{selectedTab:i})})}let l=()=>f("api-diff"),r=()=>f("diagrams-diff");return a.$$set=n=>{"selectedTab"in n&&t(0,i=n.selectedTab)},[i,f,l,r]}var pe=class extends F{constructor(e){super(),H(this,e,mt,ct,L,{selectedTab:0},pt)}},Ye=pe;function ut(a){U(a,"svelte-1nizkyl",".is-center.svelte-1nizkyl{display:flex;justify-content:center;align-items:center;flex-direction:column}")}function Ze(a){let e,t,i,s,f,l,r;return e=new Ye({props:{selectedTab:a[2]}}),e.$on("tabChange",a[5]),s=new le({props:{isVisible:a[2]==="api-diff",$$slots:{default:[dt]},$$scope:{ctx:a}}}),l=new le({props:{isVisible:a[2]==="diagrams-diff",$$slots:{default:[gt]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment),t=C(),i=d("div"),M(s.$$.fragment),f=C(),M(l.$$.fragment),g(i,"class","box flat-top")},m(n,p){T(e,n,p),y(n,t,p),y(n,i,p),T(s,i,null),m(i,f),T(l,i,null),r=!0},p(n,p){let o={};p&4&&(o.selectedTab=n[2]),e.$set(o);let q={};p&4&&(q.isVisible=n[2]==="api-diff"),p&131&&(q.$$scope={dirty:p,ctx:n}),s.$set(q);let w={};p&4&&(w.isVisible=n[2]==="diagrams-diff"),p&131&&(w.$$scope={dirty:p,ctx:n}),l.$set(w)},i(n){r||($(e.$$.fragment,n),$(s.$$.fragment,n),$(l.$$.fragment,n),r=!0)},o(n){A(e.$$.fragment,n),A(s.$$.fragment,n),A(l.$$.fragment,n),r=!1},d(n){R(e,n),n&&D(t),n&&D(i),R(s),R(l)}}}function dt(a){let e,t;return e=new Ge({props:{leftApi:a[0].api,rightApi:a[1].api}}),{c(){M(e.$$.fragment)},m(i,s){T(e,i,s),t=!0},p(i,s){let f={};s&1&&(f.leftApi=i[0].api),s&2&&(f.rightApi=i[1].api),e.$set(f)},i(i){t||($(e.$$.fragment,i),t=!0)},o(i){A(e.$$.fragment,i),t=!1},d(i){R(e,i)}}}function gt(a){let e,t;return e=new Xe({props:{leftApi:a[0].api,rightApi:a[1].api}}),{c(){M(e.$$.fragment)},m(i,s){T(e,i,s),t=!0},p(i,s){let f={};s&1&&(f.leftApi=i[0].api),s&2&&(f.rightApi=i[1].api),e.$set(f)},i(i){t||($(e.$$.fragment,i),t=!0)},o(i){A(e.$$.fragment,i),t=!1},d(i){R(e,i)}}}function bt(a){let e,t,i,s,f,l,r,n,p,o,q,w,c,h,b,S,V,E,j,O,k,v;e=new ye({props:{activePage:"compare"}}),n=new re({props:{browserHash:a[0].hash,storagePrefix:"left"}}),n.$on("apiChange",function(){te(a[4](a[0]))&&a[4](a[0]).apply(this,arguments)}),o=new se({props:{messages:a[0].errors}}),b=new re({props:{browserHash:a[1].hash,storagePrefix:"right"}}),b.$on("apiChange",function(){te(a[4](a[1]))&&a[4](a[1]).apply(this,arguments)}),V=new se({props:{messages:a[1].errors}});let _=a[0].api&&a[1].api&&Ze(a);return k=new ve({}),{c(){M(e.$$.fragment),t=C(),i=d("div"),s=d("section"),s.innerHTML=`<div class="hero-body"><h1 class="title">Api Compare</h1> 
      <p class="subtitle">List changes between two Apis</p></div>`,f=C(),l=d("div"),r=d("div"),M(n.$$.fragment),p=C(),M(o.$$.fragment),q=C(),w=d("div"),w.innerHTML='<p class="title is-2"><i class="fa-solid fa-right-long"></i></p>',c=C(),h=d("div"),M(b.$$.fragment),S=C(),M(V.$$.fragment),E=C(),_&&_.c(),O=C(),M(k.$$.fragment),g(s,"class","hero is-small"),g(r,"class","column"),g(w,"class","column is-center is-narrow svelte-1nizkyl"),g(h,"class","column"),g(l,"class","columns"),g(i,"class",j="container "+(a[3].fluidLayout?"is-fluid":""))},m(u,B){T(e,u,B),y(u,t,B),y(u,i,B),m(i,s),m(i,f),m(i,l),m(l,r),T(n,r,null),m(r,p),T(o,r,null),m(l,q),m(l,w),m(l,c),m(l,h),T(b,h,null),m(h,S),T(V,h,null),m(i,E),_&&_.m(i,null),y(u,O,B),T(k,u,B),v=!0},p(u,[B]){a=u;let me={};B&1&&(me.browserHash=a[0].hash),n.$set(me);let ue={};B&1&&(ue.messages=a[0].errors),o.$set(ue);let de={};B&2&&(de.browserHash=a[1].hash),b.$set(de);let ge={};B&2&&(ge.messages=a[1].errors),V.$set(ge),a[0].api&&a[1].api?_?(_.p(a,B),B&3&&$(_,1)):(_=Ze(a),_.c(),$(_,1),_.m(i,null)):_&&(P(),A(_,1,1,()=>{_=null}),J()),(!v||B&8&&j!==(j="container "+(a[3].fluidLayout?"is-fluid":"")))&&g(i,"class",j)},i(u){v||($(e.$$.fragment,u),$(n.$$.fragment,u),$(o.$$.fragment,u),$(b.$$.fragment,u),$(V.$$.fragment,u),$(_),$(k.$$.fragment,u),v=!0)},o(u){A(e.$$.fragment,u),A(n.$$.fragment,u),A(o.$$.fragment,u),A(b.$$.fragment,u),A(V.$$.fragment,u),A(_),A(k.$$.fragment,u),v=!1},d(u){R(e,u),u&&D(t),u&&D(i),R(n),R(o),R(b),R(V),_&&_.d(),u&&D(O),R(k,u)}}}function ht(a,e,t){let i;_e(a,$e,o=>t(3,i=o));let s={hash:null,api:null,errors:[]},f={hash:null,api:null,errors:[]},l="api-diff";function r(){let o=new URLSearchParams(window.location.search);s.hash&&o.set("leftApi",s.hash),f.hash&&o.set("rightApi",f.hash),window.history.pushState(null,null,"?"+o.toString())}function n(o){return q=>Z(this,void 0,void 0,function*(){let w=q.detail.apiObject;if(o.api=null,o.errors=[],o.hash=q.detail.hash,w){try{o.api=De(w),o.api.setModelsTitle()}catch(c){o.errors=[...o.errors,"Error: "+c.message]}if(o.api)try{yield o.api.resolveReferences()}catch(c){console.error(c),o.errors=[...o.errors,"Error while parsing api: "+c.message]}}t(0,s),t(1,f),r()})}function p(o){t(2,l=o.detail.selectedTab)}return ke(()=>{let o=new URLSearchParams(window.location.search);t(0,s.hash=o.get("leftApi"),s),t(1,f.hash=o.get("rightApi"),f)}),[s,f,l,i,n,p]}var ce=class extends F{constructor(e){super(),H(this,e,ht,bt,L,{},ut)}},xe=ce;new xe({target:document.body});be();

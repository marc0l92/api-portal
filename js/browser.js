// Project: https://github.com/marc0l92/api-portal
import{a as Le,b as $e,c as De,d as Re,e as _e,h as Ee}from"./chunk-IJGP5NGU.js";import{a as He}from"./chunk-X4I3E54K.js";import{$ as d,A as h,B as ie,C as g,D as v,E as L,F as b,G as $,H as q,I as D,J as x,M as m,N as R,O as de,R as ue,T as Ce,W as oe,Y as ae,Z as j,_ as F,aa as w,ba as fe,ca as V,da as P,ea as z,fa as Y,ga as Q,h as H,ha as Se,j as qe,ka as ye,m as le,n as Ae,na as je,o as M,p as Te,r as W,sa as Fe,t as se,ta as Be,y as he,z as Me}from"./chunk-WLFLO57E.js";H();H();H();var qt="browserOptions",At={favorites:{},filters:le()},[X,Ve,Pe]=je(qt,At,Tt);function Tt(s){let t=le();return s.filters&&JSON.stringify(t)===JSON.stringify(s.filters).replace(/true/g,"false")||(s.filters=t),s}H();function Mt(s){ie(s,"svelte-n6fu33",".search-bar.svelte-n6fu33.svelte-n6fu33{margin-bottom:0}.search-bar.open.svelte-n6fu33 input.svelte-n6fu33,.search-bar.open.svelte-n6fu33 button.svelte-n6fu33{border-bottom-left-radius:0;border-bottom-right-radius:0}.filters-wrapper.svelte-n6fu33.svelte-n6fu33{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 200ms}.filters-wrapper.open.svelte-n6fu33.svelte-n6fu33{grid-template-rows:1fr}.filters-wrapper.svelte-n6fu33 .filters.svelte-n6fu33{color:#4a4a4a;background-color:#fff;margin-top:0;min-height:0;padding-left:1em;padding-right:1em;transition:padding-top 200ms}.filters-wrapper.open.svelte-n6fu33 .filters.svelte-n6fu33{border:1px solid #dbdbdb;border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-top-right-radius:0;padding-top:1em;padding-bottom:1em}.label.svelte-n6fu33.svelte-n6fu33{text-transform:capitalize}.tag.is-small.svelte-n6fu33.svelte-n6fu33{margin-left:0.5em;padding:0 0.5em;border-radius:100em}")}function ze(s,t,i){let e=s.slice();return e[10]=t[i][0],e[11]=t[i][1],e}function Ge(s,t,i){let e=s.slice();return e[14]=t[i][0],e[15]=t[i][1],e}function Je(s,t,i){let e=s.slice();return e[18]=t[i][0],e[19]=t[i][1],e}function Ue(s){let t,i,e,l,a,n,o,r,f,c=s[4]>0&&Ke(s);return{c(){t=b("div"),i=b("button"),e=b("span"),e.innerHTML='<i class="fas fa-filter"></i>',l=q(),a=b("span"),a.textContent="Filters",n=q(),c&&c.c(),m(e,"class","icon is-small"),m(i,"class",o="button "+(s[2]?"is-active":"")+" svelte-n6fu33"),m(t,"class","control")},m(u,_){g(u,t,_),h(t,i),h(i,e),h(i,l),h(i,a),h(i,n),c&&c.m(i,null),r||(f=x(i,"click",s[8]),r=!0)},p(u,_){u[4]>0?c?c.p(u,_):(c=Ke(u),c.c(),c.m(i,null)):c&&(c.d(1),c=null),_&4&&o!==(o="button "+(u[2]?"is-active":"")+" svelte-n6fu33")&&m(i,"class",o)},d(u){u&&v(t),c&&c.d(),r=!1,f()}}}function Ke(s){let t,i;return{c(){t=b("span"),i=$(s[4]),m(t,"class","tag is-small is-warning svelte-n6fu33")},m(e,l){g(e,t,l),h(t,i)},p(e,l){l&16&&R(i,e[4])},d(e){e&&v(t)}}}function We(s){let t,i,e,l,a,n,o,r=Object.entries(s[0]),f=[];for(let c=0;c<r.length;c+=1)f[c]=Xe(ze(s,r,c));return{c(){t=b("div"),i=b("div");for(let c=0;c<f.length;c+=1)f[c].c();e=q(),l=b("button"),l.textContent="Reset filters",m(l,"class","button is-ghost is-small"),m(i,"class","filters svelte-n6fu33"),m(t,"class",a="filters-wrapper "+(s[2]?"open":"")+" svelte-n6fu33")},m(c,u){g(c,t,u),h(t,i);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(i,null);h(i,e),h(i,l),n||(o=x(l,"click",s[5]),n=!0)},p(c,u){if(u&65){r=Object.entries(c[0]);let _;for(_=0;_<r.length;_+=1){let p=ze(c,r,_);f[_]?f[_].p(p,u):(f[_]=Xe(p),f[_].c(),f[_].m(i,e))}for(;_<f.length;_+=1)f[_].d(1);f.length=r.length}u&4&&a!==(a="filters-wrapper "+(c[2]?"open":"")+" svelte-n6fu33")&&m(t,"class",a)},d(c){c&&v(t),L(f,c),n=!1,o()}}}function Ye(s){let t,i=s[18]+"",e,l,a,n;function o(){return s[9](s[10],s[14],s[18])}return{c(){t=b("button"),e=$(i),m(t,"class",l="button "+(s[19]?"is-active is-info":""))},m(r,f){g(r,t,f),h(t,e),a||(n=x(t,"click",o),a=!0)},p(r,f){s=r,f&1&&i!==(i=s[18]+"")&&R(e,i),f&1&&l!==(l="button "+(s[19]?"is-active is-info":""))&&m(t,"class",l)},d(r){r&&v(t),a=!1,n()}}}function Qe(s){let t,i,e,l=s[14]+"",a,n,o,r,f=Object.entries(s[15]),c=[];for(let u=0;u<f.length;u+=1)c[u]=Ye(Je(s,f,u));return{c(){t=b("div"),i=b("div"),e=b("span"),a=$(l),n=q(),o=b("div"),r=b("div");for(let u=0;u<c.length;u+=1)c[u].c();m(e,"class","label svelte-n6fu33"),m(i,"class","field-label is-normal"),m(r,"class","buttons has-addons"),m(o,"class","field-body"),m(t,"class","field is-horizontal")},m(u,_){g(u,t,_),h(t,i),h(i,e),h(e,a),h(t,n),h(t,o),h(o,r);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(r,null)},p(u,_){if(_&1&&l!==(l=u[14]+"")&&R(a,l),_&65){f=Object.entries(u[15]);let p;for(p=0;p<f.length;p+=1){let I=Je(u,f,p);c[p]?c[p].p(I,_):(c[p]=Ye(I),c[p].c(),c[p].m(r,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=f.length}},d(u){u&&v(t),L(c,u)}}}function Xe(s){let t,i,e=s[10]+"",l,a,n,o,r=Object.entries(s[11]),f=[];for(let c=0;c<r.length;c+=1)f[c]=Qe(Ge(s,r,c));return{c(){t=b("div"),i=b("p"),l=$(e),a=q();for(let c=0;c<f.length;c+=1)f[c].c();n=q(),o=b("hr"),m(i,"class","menu-label"),m(t,"class","block")},m(c,u){g(c,t,u),h(t,i),h(i,l),h(t,a);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(t,null);h(t,n),h(t,o)},p(c,u){if(u&1&&e!==(e=c[10]+"")&&R(l,e),u&65){r=Object.entries(c[11]);let _;for(_=0;_<r.length;_+=1){let p=Ge(c,r,_);f[_]?f[_].p(p,u):(f[_]=Qe(p),f[_].c(),f[_].m(t,n))}for(;_<f.length;_+=1)f[_].d(1);f.length=r.length}},d(c){c&&v(t),L(f,c)}}}function Ct(s){let t,i,e,l,a,n,o,r,f,c,u=s[3]&&Ue(s),_=s[3]&&We(s);return{c(){t=b("div"),i=b("div"),e=b("div"),l=b("input"),n=q(),u&&u.c(),r=q(),_&&_.c(),m(l,"class","input svelte-n6fu33"),m(l,"type","text"),m(l,"placeholder","Search for: package, api title, version, file name, URI"),m(e,"class","control is-expanded"),m(i,"class",o="field has-addons search-bar "+(s[2]?"open":"")+" svelte-n6fu33"),m(t,"class","block")},m(p,I){g(p,t,I),h(t,i),h(i,e),h(e,l),de(l,s[1]),h(i,n),u&&u.m(i,null),h(t,r),_&&_.m(t,null),f||(c=[x(l,"input",s[7]),Me(a=St.call(null,l))],f=!0)},p(p,[I]){I&2&&l.value!==p[1]&&de(l,p[1]),p[3]?u?u.p(p,I):(u=Ue(p),u.c(),u.m(i,null)):u&&(u.d(1),u=null),I&4&&o!==(o="field has-addons search-bar "+(p[2]?"open":"")+" svelte-n6fu33")&&m(i,"class",o),p[3]?_?_.p(p,I):(_=We(p),_.c(),_.m(t,null)):_&&(_.d(1),_=null)},i:M,o:M,d(p){p&&v(t),u&&u.d(),_&&_.d(),f=!1,Te(c)}}}function St(s){s.focus()}function yt(s,t,i){let{searchText:e=""}=t,{filters:l}=t,a=!1,n=!1,o=0;function r(){i(0,l=le())}function f(p,I,A){i(0,l[p][I][A]=!l[p][I][A],l)}ue(()=>{i(0,l=le()),i(3,n=Object.keys(l).length>0)});function c(){e=this.value,i(1,e)}let u=()=>i(2,a=!a),_=(p,I,A)=>f(p,I,A);return s.$$set=p=>{"searchText"in p&&i(1,e=p.searchText),"filters"in p&&i(0,l=p.filters)},s.$$.update=()=>{if(s.$$.dirty&17){e:if(l){i(4,o=0);for(let p in l)for(let I in l[p])for(let A in l[p][I])i(4,o+=l[p][I][A]?1:0)}}},[l,e,a,n,o,r,f,c,u,_]}var be=class extends Q{constructor(t){super(),Y(this,t,yt,Ct,W,{searchText:1,filters:0},Mt)}},Ze=be;H();H();function jt(s){ie(s,"svelte-1y7dbce",".search-match-highlight.svelte-1y7dbce{background-color:#ffff99}")}function xe(s,t,i){let e=s.slice();return e[3]=t[i],e}function Ft(s){let t=s[3].value+"",i;return{c(){i=$(t)},m(e,l){g(e,i,l)},p(e,l){l&1&&t!==(t=e[3].value+"")&&R(i,t)},d(e){e&&v(i)}}}function Bt(s){let t,i=s[3].value+"",e;return{c(){t=b("span"),e=$(i),m(t,"class","search-match-highlight svelte-1y7dbce")},m(l,a){g(l,t,a),h(t,e)},p(l,a){a&1&&i!==(i=l[3].value+"")&&R(e,i)},d(l){l&&v(t)}}}function et(s){let t;function i(a,n){return a[3].highlight?Bt:Ft}let e=i(s,-1),l=e(s);return{c(){l.c(),t=D()},m(a,n){l.m(a,n),g(a,t,n)},p(a,n){e===(e=i(a,n))&&l?l.p(a,n):(l.d(1),l=e(a),l&&(l.c(),l.m(t.parentNode,t)))},d(a){l.d(a),a&&v(t)}}}function Ht(s){let t,i=s[0],e=[];for(let l=0;l<i.length;l+=1)e[l]=et(xe(s,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=D()},m(l,a){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,a);g(l,t,a)},p(l,[a]){if(a&1){i=l[0];let n;for(n=0;n<i.length;n+=1){let o=xe(l,i,n);e[n]?e[n].p(o,a):(e[n]=et(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},i:M,o:M,d(l){L(e,l),l&&v(t)}}}function Lt(s,t,i){let{searchMatch:e=null}=t,l=[];function a(n){i(0,l=[]);let o=0;for(let[r,f]of n.indices)o<r&&l.push({value:n.value.slice(o,r),highlight:!1}),l.push({value:n.value.slice(r,f+1),highlight:!0}),o=f+1;o<n.value.length&&l.push({value:n.value.slice(o),highlight:!1})}return s.$$set=n=>{"searchMatch"in n&&i(1,e=n.searchMatch)},s.$$.update=()=>{if(s.$$.dirty&2)e:a(e)},[l,e]}var ge=class extends Q{constructor(t){super(),Y(this,t,Lt,Ht,W,{searchMatch:1},jt)}},ve=ge;H();function tt(s,t){let i=s.getApi(t);return`status-${Object.values(i.otherFiles).map(l=>s.getApi(l).status).reduce((l,a)=>Math.max(l,a))}`}function lt(s,t,i){let e=null,l=qe()+"/viewer.html";(i===null||_e(t,i))&&(e={headerHref:`${l}?packageName=${t.packageName}&apiName=${t.apiName}`,versions:[]});for(let a in t.otherVersions){let n=s.getApi(t.otherVersions[a]);if(i===null||_e(n,i)){let o=`${l}?packageName=${t.packageName}&apiName=${t.apiName}&versionName=${a}`;e===null&&(e={headerHref:o,versions:[]}),e.versions.push({name:a,href:o,cssClass:tt(s,n.hash)})}else for(let o of Object.values(n.otherFiles))if(o!==n.hash&&(i===null||_e(s.getApi(o),i))){let r=`${l}?api=${o}`;e===null&&(e={headerHref:r,versions:[]}),e.versions.push({name:a,href:r,cssClass:tt(s,n.hash)})}}return e}function $t(s){ie(s,"svelte-1q5aooc",".card-header-body.svelte-1q5aooc.svelte-1q5aooc{flex-grow:1}.card-header-title.svelte-1q5aooc.svelte-1q5aooc{word-break:break-all;display:inline-block}.card-header-icon.svelte-1q5aooc.svelte-1q5aooc{color:var(--color-accent)}.is-tag-size.svelte-1q5aooc.svelte-1q5aooc{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}.tag.status-1.svelte-1q5aooc.svelte-1q5aooc{background-color:#ffe08a;color:white}.tag.status-2.svelte-1q5aooc.svelte-1q5aooc{background-color:#f14668;color:white}.searchMatchLine.svelte-1q5aooc.svelte-1q5aooc:not(:last-child){margin-bottom:0.5em}.searchMatchLine.svelte-1q5aooc.svelte-1q5aooc{font-size:small;word-break:break-all}.searchMatchLine.svelte-1q5aooc .key.svelte-1q5aooc{font-weight:bold}")}function it(s,t,i){let e=s.slice();return e[10]=t[i],e}function nt(s,t,i){let e=s.slice();return e[13]=t[i],e}function rt(s){let t,i,e,l,a,n,o,r,f,c,u,_,p,I,A,N,T,ne,ce,U,te,J,re=[Rt,Dt],k=[];function B(O,E){return O[4]?0:1}a=B(s,-1),n=k[a]=re[a](s);let K=s[2].versions.slice(0,s[3]?void 0:pe),C=[];for(let O=0;O<K.length;O+=1)C[O]=st(nt(s,K,O));let S=s[2].versions.length>pe&&ot(s),y=s[1].length>0&&at(s);return{c(){t=b("div"),i=b("header"),e=b("a"),l=b("p"),n.c(),r=q(),f=b("button"),c=b("span"),u=b("i"),p=q(),I=b("div"),A=b("div"),N=b("div"),T=b("div");for(let O=0;O<C.length;O+=1)C[O].c();ne=q(),S&&S.c(),ce=q(),y&&y.c(),m(l,"class","card-header-title svelte-1q5aooc"),m(e,"class","card-header-body svelte-1q5aooc"),m(e,"href",o=s[2].headerHref),m(u,"class",_=(s[5].favorites[s[0].packageName]&&s[5].favorites[s[0].packageName][s[0].apiName]?"fas":"far")+" fa-star"),m(c,"class","icon"),m(f,"class","card-header-icon svelte-1q5aooc"),m(i,"class","card-header"),m(T,"class","column"),m(N,"class","columns is-multiline"),m(A,"class","content"),m(I,"class","card-content"),m(t,"class","card")},m(O,E){g(O,t,E),h(t,i),h(i,e),h(e,l),k[a].m(l,null),h(i,r),h(i,f),h(f,c),h(c,u),h(t,p),h(t,I),h(I,A),h(A,N),h(N,T);for(let Z=0;Z<C.length;Z+=1)C[Z]&&C[Z].m(T,null);h(T,ne),S&&S.m(T,null),h(A,ce),y&&y.m(A,null),U=!0,te||(J=x(f,"click",s[6]),te=!0)},p(O,E){let Z=a;if(a=B(O,E),a===Z?k[a].p(O,E):(j(),w(k[Z],1,1,()=>{k[Z]=null}),F(),n=k[a],n?n.p(O,E):(n=k[a]=re[a](O),n.c()),d(n,1),n.m(l,null)),(!U||E&4&&o!==(o=O[2].headerHref))&&m(e,"href",o),(!U||E&33&&_!==(_=(O[5].favorites[O[0].packageName]&&O[5].favorites[O[0].packageName][O[0].apiName]?"fas":"far")+" fa-star"))&&m(u,"class",_),E&12){K=O[2].versions.slice(0,O[3]?void 0:pe);let G;for(G=0;G<K.length;G+=1){let Ie=nt(O,K,G);C[G]?C[G].p(Ie,E):(C[G]=st(Ie),C[G].c(),C[G].m(T,ne))}for(;G<C.length;G+=1)C[G].d(1);C.length=K.length}O[2].versions.length>pe?S?S.p(O,E):(S=ot(O),S.c(),S.m(T,null)):S&&(S.d(1),S=null),O[1].length>0?y?(y.p(O,E),E&2&&d(y,1)):(y=at(O),y.c(),d(y,1),y.m(A,null)):y&&(j(),w(y,1,1,()=>{y=null}),F())},i(O){U||(d(n),d(y),U=!0)},o(O){w(n),w(y),U=!1},d(O){O&&v(t),k[a].d(),L(C,O),S&&S.d(),y&&y.d(),te=!1,J()}}}function Dt(s){let t=s[0].apiName+"",i;return{c(){i=$(t)},m(e,l){g(e,i,l)},p(e,l){l&1&&t!==(t=e[0].apiName+"")&&R(i,t)},i:M,o:M,d(e){e&&v(i)}}}function Rt(s){let t,i;return t=new ve({props:{searchMatch:s[4]}}),{c(){V(t.$$.fragment)},m(e,l){P(t,e,l),i=!0},p(e,l){let a={};l&16&&(a.searchMatch=e[4]),t.$set(a)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){w(t.$$.fragment,e),i=!1},d(e){z(t,e)}}}function st(s){let t,i=s[13].name+"",e,l,a;return{c(){t=b("a"),e=$(i),m(t,"class",l="tag ml-1 mb-1 "+s[13].cssClass+" svelte-1q5aooc"),m(t,"href",a=s[13].href)},m(n,o){g(n,t,o),h(t,e)},p(n,o){o&12&&i!==(i=n[13].name+"")&&R(e,i),o&12&&l!==(l="tag ml-1 mb-1 "+n[13].cssClass+" svelte-1q5aooc")&&m(t,"class",l),o&12&&a!==(a=n[13].href)&&m(t,"href",a)},d(n){n&&v(t)}}}function ot(s){let t,i,e,l,a;return{c(){t=b("button"),i=b("i"),m(i,"class",e="fas fa-angle-"+(s[3]?"left":"right")),m(t,"class","button is-white is-small is-tag-size svelte-1q5aooc")},m(n,o){g(n,t,o),h(t,i),l||(a=x(t,"click",s[9]),l=!0)},p(n,o){o&8&&e!==(e="fas fa-angle-"+(n[3]?"left":"right"))&&m(i,"class",e)},d(n){n&&v(t),l=!1,a()}}}function at(s){let t,i,e=s[1].slice(0,ut+1),l=[];for(let n=0;n<e.length;n+=1)l[n]=ct(it(s,e,n));let a=n=>w(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=D()},m(n,o){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(n,o);g(n,t,o),i=!0},p(n,o){if(o&2){e=n[1].slice(0,ut+1);let r;for(r=0;r<e.length;r+=1){let f=it(n,e,r);l[r]?(l[r].p(f,o),d(l[r],1)):(l[r]=ct(f),l[r].c(),d(l[r],1),l[r].m(t.parentNode,t))}for(j(),r=e.length;r<l.length;r+=1)a(r);F()}},i(n){if(!i){for(let o=0;o<e.length;o+=1)d(l[o]);i=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)w(l[o]);i=!1},d(n){L(l,n),n&&v(t)}}}function ft(s){let t,i,e=s[10].key+"",l,a,n,o,r,f;return o=new ve({props:{searchMatch:s[10]}}),{c(){t=b("p"),i=b("span"),l=$(e),a=$(":"),n=q(),V(o.$$.fragment),r=q(),m(i,"class","key svelte-1q5aooc"),m(t,"class","searchMatchLine svelte-1q5aooc")},m(c,u){g(c,t,u),h(t,i),h(i,l),h(i,a),h(t,n),P(o,t,null),h(t,r),f=!0},p(c,u){(!f||u&2)&&e!==(e=c[10].key+"")&&R(l,e);let _={};u&2&&(_.searchMatch=c[10]),o.$set(_)},i(c){f||(d(o.$$.fragment,c),f=!0)},o(c){w(o.$$.fragment,c),f=!1},d(c){c&&v(t),z(o)}}}function ct(s){let t,i,e=s[10].key!=="apiName"&&ft(s);return{c(){e&&e.c(),t=D()},m(l,a){e&&e.m(l,a),g(l,t,a),i=!0},p(l,a){l[10].key!=="apiName"?e?(e.p(l,a),a&2&&d(e,1)):(e=ft(l),e.c(),d(e,1),e.m(t.parentNode,t)):e&&(j(),w(e,1,1,()=>{e=null}),F())},i(l){i||(d(e),i=!0)},o(l){w(e),i=!1},d(l){e&&e.d(l),l&&v(t)}}}function Et(s){let t,i,e=s[0]&&s[2]&&rt(s);return{c(){e&&e.c(),t=D()},m(l,a){e&&e.m(l,a),g(l,t,a),i=!0},p(l,[a]){l[0]&&l[2]?e?(e.p(l,a),a&5&&d(e,1)):(e=rt(l),e.c(),d(e,1),e.m(t.parentNode,t)):e&&(j(),w(e,1,1,()=>{e=null}),F())},i(l){i||(d(e),i=!0)},o(l){w(e),i=!1},d(l){e&&e.d(l),l&&v(t)}}}var pe=6,ut=3;function Vt(s,t,i){let e;se(s,X,p=>i(5,e=p));let{apiIndex:l}=t,{apiIndexItem:a}=t,{searchMatches:n=[]}=t,{filters:o=null}=t,r=null,f=!1,c=null;function u(){e.favorites[a.packageName]||he(X,e.favorites[a.packageName]={},e),he(X,e.favorites[a.packageName][a.apiName]=!e.favorites[a.packageName][a.apiName],e)}let _=()=>i(3,f=!f);return s.$$set=p=>{"apiIndex"in p&&i(7,l=p.apiIndex),"apiIndexItem"in p&&i(0,a=p.apiIndexItem),"searchMatches"in p&&i(1,n=p.searchMatches),"filters"in p&&i(8,o=p.filters)},s.$$.update=()=>{if(s.$$.dirty&2)e:i(4,c=n.find(p=>p.key==="apiName")||null);if(s.$$.dirty&385)e:a&&i(2,r=lt(l,a,o))},[a,n,r,f,c,e,u,l,o,_]}var ke=class extends Q{constructor(t){super(),Y(this,t,Vt,Et,W,{apiIndex:7,apiIndexItem:0,searchMatches:1,filters:8},$t)}},me=ke;H();function Pt(s){let t;return{c(){t=b("div"),t.innerHTML=`<div class="hero-body"><div class="container has-text-centered"><p class="title">No results found</p> 
            <p class="subtitle">Try searching using different filters.</p></div></div>`,m(t,"class","hero")},m(i,e){g(i,t,e)},p:M,i:M,o:M,d(i){i&&v(t)}}}var we=class extends Q{constructor(t){super(),Y(this,t,null,Pt,W,{})}},Ne=we;function _t(s,t,i){let e=s.slice();return e[27]=t[i],e}function pt(s,t,i){let e=s.slice();return e[13]=t[i][0],e[14]=t[i][1],e}function mt(s,t,i){let e=s.slice();return e[17]=t[i][0],e[18]=t[i][1],e}function ht(s,t,i){let e=s.slice();return e[13]=t[i][0],e[14]=t[i][1],e}function dt(s,t,i){let e=s.slice();return e[23]=t[i][0],e[24]=t[i][1],e}function zt(s){let t;return{c(){t=b("div"),t.textContent="Fetching api index...",m(t,"class","box")},m(i,e){g(i,t,e)},p:M,i:M,o:M,d(i){i&&v(t)}}}function Gt(s){let t,i,e,l,a=[Ut,Jt],n=[];function o(r,f){return!r[1]||r[1].length<2?0:1}return t=o(s,-1),i=n[t]=a[t](s),{c(){i.c(),e=D()},m(r,f){n[t].m(r,f),g(r,e,f),l=!0},p(r,f){let c=t;t=o(r,f),t===c?n[t].p(r,f):(j(),w(n[c],1,1,()=>{n[c]=null}),F(),i=n[t],i?i.p(r,f):(i=n[t]=a[t](r),i.c()),d(i,1),i.m(e.parentNode,e))},i(r){l||(d(i),l=!0)},o(r){w(i),l=!1},d(r){n[t].d(r),r&&v(e)}}}function Jt(s){let t,i,e,l,a=[Wt,Kt],n=[];function o(r,f){return r[3].length>0?0:1}return t=o(s,-1),i=n[t]=a[t](s),{c(){i.c(),e=D()},m(r,f){n[t].m(r,f),g(r,e,f),l=!0},p(r,f){let c=t;t=o(r,f),t===c?n[t].p(r,f):(j(),w(n[c],1,1,()=>{n[c]=null}),F(),i=n[t],i?i.p(r,f):(i=n[t]=a[t](r),i.c()),d(i,1),i.m(e.parentNode,e))},i(r){l||(d(i),l=!0)},o(r){w(i),l=!1},d(r){n[t].d(r),r&&v(e)}}}function Ut(s){let t,i,e,l,a,n,o=s[6]>0&&gt(s),r=[Qt,Yt],f=[];function c(u,_){return _&16&&(i=null),i==null&&(i=Object.keys(u[4]).length>0),i?0:1}return e=c(s,-1),l=f[e]=r[e](s),{c(){o&&o.c(),t=q(),l.c(),a=D()},m(u,_){o&&o.m(u,_),g(u,t,_),f[e].m(u,_),g(u,a,_),n=!0},p(u,_){u[6]>0?o?(o.p(u,_),_&64&&d(o,1)):(o=gt(u),o.c(),d(o,1),o.m(t.parentNode,t)):o&&(j(),w(o,1,1,()=>{o=null}),F());let p=e;e=c(u,_),e===p?f[e].p(u,_):(j(),w(f[p],1,1,()=>{f[p]=null}),F(),l=f[e],l?l.p(u,_):(l=f[e]=r[e](u),l.c()),d(l,1),l.m(a.parentNode,a))},i(u){n||(d(o),d(l),n=!0)},o(u){w(o),w(l),n=!1},d(u){o&&o.d(u),u&&v(t),f[e].d(u),u&&v(a)}}}function Kt(s){let t,i;return t=new Ne({}),{c(){V(t.$$.fragment)},m(e,l){P(t,e,l),i=!0},p:M,i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){w(t.$$.fragment,e),i=!1},d(e){z(t,e)}}}function Wt(s){let t,i,e=s[3],l=[];for(let n=0;n<e.length;n+=1)l[n]=bt(_t(s,e,n));let a=n=>w(l[n],1,1,()=>{l[n]=null});return{c(){t=b("div");for(let n=0;n<l.length;n+=1)l[n].c();m(t,"class","columns is-multiline")},m(n,o){g(n,t,o);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(t,null);i=!0},p(n,o){if(o&13){e=n[3];let r;for(r=0;r<e.length;r+=1){let f=_t(n,e,r);l[r]?(l[r].p(f,o),d(l[r],1)):(l[r]=bt(f),l[r].c(),d(l[r],1),l[r].m(t,null))}for(j(),r=e.length;r<l.length;r+=1)a(r);F()}},i(n){if(!i){for(let o=0;o<e.length;o+=1)d(l[o]);i=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)w(l[o]);i=!1},d(n){n&&v(t),L(l,n)}}}function bt(s){let t,i,e,l,a;function n(r){s[11](r)}let o={apiIndex:s[0],apiIndexItem:s[27].item,searchMatches:s[27].matches};return s[2].filters!==void 0&&(o.filters=s[2].filters),i=new me({props:o}),oe.push(()=>fe(i,"filters",n)),{c(){t=b("div"),V(i.$$.fragment),l=q(),m(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(r,f){g(r,t,f),P(i,t,null),h(t,l),a=!0},p(r,f){let c={};f&1&&(c.apiIndex=r[0]),f&8&&(c.apiIndexItem=r[27].item),f&8&&(c.searchMatches=r[27].matches),!e&&f&4&&(e=!0,c.filters=r[2].filters,ae(()=>e=!1)),i.$set(c)},i(r){a||(d(i.$$.fragment,r),a=!0)},o(r){w(i.$$.fragment,r),a=!1},d(r){r&&v(t),z(i)}}}function gt(s){let t,i,e,l,a=Object.entries(s[2].favorites),n=[];for(let r=0;r<a.length;r+=1)n[r]=wt(ht(s,a,r));let o=r=>w(n[r],1,1,()=>{n[r]=null});return{c(){t=b("h4"),t.innerHTML='<i class="fas fa-star"></i> Favorites',i=q(),e=b("div");for(let r=0;r<n.length;r+=1)n[r].c();m(t,"class","subtitle is-4"),m(e,"class","columns is-multiline")},m(r,f){g(r,t,f),g(r,i,f),g(r,e,f);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);l=!0},p(r,f){if(f&5){a=Object.entries(r[2].favorites);let c;for(c=0;c<a.length;c+=1){let u=ht(r,a,c);n[c]?(n[c].p(u,f),d(n[c],1)):(n[c]=wt(u),n[c].c(),d(n[c],1),n[c].m(e,null))}for(j(),c=a.length;c<n.length;c+=1)o(c);F()}},i(r){if(!l){for(let f=0;f<a.length;f+=1)d(n[f]);l=!0}},o(r){n=n.filter(Boolean);for(let f=0;f<n.length;f+=1)w(n[f]);l=!1},d(r){r&&v(t),r&&v(i),r&&v(e),L(n,r)}}}function vt(s){let t,i,e,l;return i=new me({props:{apiIndex:s[0],apiIndexItem:s[0].getApiByName(s[13],s[23])}}),{c(){t=b("div"),V(i.$$.fragment),e=q(),m(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(a,n){g(a,t,n),P(i,t,null),h(t,e),l=!0},p(a,n){let o={};n&1&&(o.apiIndex=a[0]),n&5&&(o.apiIndexItem=a[0].getApiByName(a[13],a[23])),i.$set(o)},i(a){l||(d(i.$$.fragment,a),l=!0)},o(a){w(i.$$.fragment,a),l=!1},d(a){a&&v(t),z(i)}}}function kt(s){let t,i,e=s[24]&&vt(s);return{c(){e&&e.c(),t=D()},m(l,a){e&&e.m(l,a),g(l,t,a),i=!0},p(l,a){l[24]?e?(e.p(l,a),a&4&&d(e,1)):(e=vt(l),e.c(),d(e,1),e.m(t.parentNode,t)):e&&(j(),w(e,1,1,()=>{e=null}),F())},i(l){i||(d(e),i=!0)},o(l){w(e),i=!1},d(l){e&&e.d(l),l&&v(t)}}}function wt(s){let t,i,e=Object.entries(s[14]),l=[];for(let n=0;n<e.length;n+=1)l[n]=kt(dt(s,e,n));let a=n=>w(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=D()},m(n,o){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(n,o);g(n,t,o),i=!0},p(n,o){if(o&5){e=Object.entries(n[14]);let r;for(r=0;r<e.length;r+=1){let f=dt(n,e,r);l[r]?(l[r].p(f,o),d(l[r],1)):(l[r]=kt(f),l[r].c(),d(l[r],1),l[r].m(t.parentNode,t))}for(j(),r=e.length;r<l.length;r+=1)a(r);F()}},i(n){if(!i){for(let o=0;o<e.length;o+=1)d(l[o]);i=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)w(l[o]);i=!1},d(n){L(l,n),n&&v(t)}}}function Yt(s){let t,i;return t=new Ne({}),{c(){V(t.$$.fragment)},m(e,l){P(t,e,l),i=!0},p:M,i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){w(t.$$.fragment,e),i=!1},d(e){z(t,e)}}}function Qt(s){let t,i,e=Object.entries(s[4]),l=[];for(let n=0;n<e.length;n+=1)l[n]=Ot(pt(s,e,n));let a=n=>w(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=D()},m(n,o){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(n,o);g(n,t,o),i=!0},p(n,o){if(o&21){e=Object.entries(n[4]);let r;for(r=0;r<e.length;r+=1){let f=pt(n,e,r);l[r]?(l[r].p(f,o),d(l[r],1)):(l[r]=Ot(f),l[r].c(),d(l[r],1),l[r].m(t.parentNode,t))}for(j(),r=e.length;r<l.length;r+=1)a(r);F()}},i(n){if(!i){for(let o=0;o<e.length;o+=1)d(l[o]);i=!0}},o(n){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)w(l[o]);i=!1},d(n){L(l,n),n&&v(t)}}}function Nt(s){let t,i,e,l;function a(o){s[10](o)}let n={apiIndex:s[0],apiIndexItem:s[0].getApi(s[18])};return s[2].filters!==void 0&&(n.filters=s[2].filters),i=new me({props:n}),oe.push(()=>fe(i,"filters",a)),{c(){t=b("div"),V(i.$$.fragment),m(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(o,r){g(o,t,r),P(i,t,null),l=!0},p(o,r){let f={};r&1&&(f.apiIndex=o[0]),r&17&&(f.apiIndexItem=o[0].getApi(o[18])),!e&&r&4&&(e=!0,f.filters=o[2].filters,ae(()=>e=!1)),i.$set(f)},i(o){l||(d(i.$$.fragment,o),l=!0)},o(o){w(i.$$.fragment,o),l=!1},d(o){o&&v(t),z(i)}}}function Ot(s){let t,i=s[13]+"",e,l,a,n,o,r=Object.entries(s[14]),f=[];for(let u=0;u<r.length;u+=1)f[u]=Nt(mt(s,r,u));let c=u=>w(f[u],1,1,()=>{f[u]=null});return{c(){t=b("h4"),e=$(i),l=q(),a=b("div");for(let u=0;u<f.length;u+=1)f[u].c();n=q(),m(t,"class","subtitle is-4"),m(a,"class","columns is-multiline")},m(u,_){g(u,t,_),h(t,e),g(u,l,_),g(u,a,_);for(let p=0;p<f.length;p+=1)f[p]&&f[p].m(a,null);h(a,n),o=!0},p(u,_){if((!o||_&16)&&i!==(i=u[13]+"")&&R(e,i),_&21){r=Object.entries(u[14]);let p;for(p=0;p<r.length;p+=1){let I=mt(u,r,p);f[p]?(f[p].p(I,_),d(f[p],1)):(f[p]=Nt(I),f[p].c(),d(f[p],1),f[p].m(a,n))}for(j(),p=r.length;p<f.length;p+=1)c(p);F()}},i(u){if(!o){for(let _=0;_<r.length;_+=1)d(f[_]);o=!0}},o(u){f=f.filter(Boolean);for(let _=0;_<f.length;_+=1)w(f[_]);o=!1},d(u){u&&v(t),u&&v(l),u&&v(a),L(f,u)}}}function Xt(s){let t,i,e,l,a,n,o,r,f,c,u,_,p,I,A,N,T;t=new Be({props:{activePage:"browser"}});function ne(k){s[8](k)}function ce(k){s[9](k)}let U={};s[1]!==void 0&&(U.searchText=s[1]),s[2].filters!==void 0&&(U.filters=s[2].filters),n=new Ze({props:U}),oe.push(()=>fe(n,"searchText",ne)),oe.push(()=>fe(n,"filters",ce)),c=new He({props:{errors:s[5]}});let te=[Gt,zt],J=[];function re(k,B){return k[0]?0:1}return _=re(s,-1),p=J[_]=te[_](s),N=new Se({}),{c(){V(t.$$.fragment),i=q(),e=b("div"),l=b("section"),l.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',a=q(),V(n.$$.fragment),f=q(),V(c.$$.fragment),u=q(),p.c(),A=q(),V(N.$$.fragment),m(l,"class","hero is-small"),m(e,"class",I="container "+(s[7].fluidLayout?"is-fluid":""))},m(k,B){P(t,k,B),g(k,i,B),g(k,e,B),h(e,l),h(e,a),P(n,e,null),h(e,f),P(c,e,null),h(e,u),J[_].m(e,null),g(k,A,B),P(N,k,B),T=!0},p(k,[B]){let K={};!o&&B&2&&(o=!0,K.searchText=k[1],ae(()=>o=!1)),!r&&B&4&&(r=!0,K.filters=k[2].filters,ae(()=>r=!1)),n.$set(K);let C={};B&32&&(C.errors=k[5]),c.$set(C);let S=_;_=re(k,B),_===S?J[_].p(k,B):(j(),w(J[S],1,1,()=>{J[S]=null}),F(),p=J[_],p?p.p(k,B):(p=J[_]=te[_](k),p.c()),d(p,1),p.m(e,null)),(!T||B&128&&I!==(I="container "+(k[7].fluidLayout?"is-fluid":"")))&&m(e,"class",I)},i(k){T||(d(t.$$.fragment,k),d(n.$$.fragment,k),d(c.$$.fragment,k),d(p),d(N.$$.fragment,k),T=!0)},o(k){w(t.$$.fragment,k),w(n.$$.fragment,k),w(c.$$.fragment,k),w(p),w(N.$$.fragment,k),T=!1},d(k){z(t,k),k&&v(i),k&&v(e),z(n),z(c),J[_].d(),k&&v(A),z(N,k)}}}function Zt(s,t,i){let e,l;se(s,X,N=>i(2,e=N)),se(s,Fe,N=>i(7,l=N));let a=null,n=[],o={},r=[],f=0,c="";function u(){for(let N in e.favorites){for(let T in e.favorites[N])(!e.favorites[N][T]||!a.getApiByName(N,T))&&delete e.favorites[N][T];Object.keys(e.favorites[N]).length===0&&delete e.favorites[N]}X.set(e)}ue(()=>ye(void 0,void 0,void 0,function*(){Ve();try{i(0,a=yield Ee.fetch()),Le(a),u()}catch(N){i(5,r=[...r,N])}})),Ce(()=>{Pe()});function _(N){c=N,i(1,c)}function p(N){s.$$.not_equal(e.filters,N)&&(e.filters=N,X.set(e))}function I(N){s.$$.not_equal(e.filters,N)&&(e.filters=N,X.set(e))}function A(N){s.$$.not_equal(e.filters,N)&&(e.filters=N,X.set(e))}return s.$$.update=()=>{if(s.$$.dirty&4)e:i(6,f=Object.values(e.favorites).filter(N=>Object.values(N).filter(T=>T).length).length);if(s.$$.dirty&6)e:c.length>1&&i(3,n=De($e(c),e.filters));if(s.$$.dirty&5)e:a&&i(4,o=Re(a,e.filters))},[a,c,e,n,o,r,f,l,_,p,I,A]}var Oe=class extends Q{constructor(t){super(),Y(this,t,Zt,Xt,W,{})}},It=Oe;new It({target:document.body});Ae();

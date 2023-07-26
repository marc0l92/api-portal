// Project: https://github.com/marc0l92/api-portal
import{a as Ee,b as Re,c as He,d as be,f as Pe}from"./chunk-43JJFKZS.js";import{a as Ve}from"./chunk-FG6FFHHG.js";import{$ as b,A as h,B as ie,C as g,D as v,E as F,F as d,G as C,H as I,I as D,J as X,M as m,N as V,O as _e,R as ce,T as Se,W as me,Y as he,Z as A,_ as y,aa as w,ba as de,ca as U,da as $,ea as J,fa as Z,ga as x,h as P,ha as Ae,j as qe,ka as ye,la as Be,m as le,ma as Fe,n as Me,na as Ce,o as E,p as Te,r as Q,sa as Le,t as oe,ta as ze,y as pe,z as je}from"./chunk-DYD5A6U2.js";P();P();P();var De="browserOptions",ge={favorites:{},filters:le()},G=Ce(Object.assign({},ge)),fe=null,Ue=()=>{fe||(G.set(Object.assign({},ge,Mt(Fe(De,ge)))),fe=G.subscribe(s=>{Be(De,s)}))},$e=()=>{fe&&fe()};function Mt(s){let l=le();return s.filters&&JSON.stringify(l)===JSON.stringify(s.filters).replace(/true/g,"false")||(s.filters=l),s}P();function Tt(s){ie(s,"svelte-n6fu33",".search-bar.svelte-n6fu33.svelte-n6fu33{margin-bottom:0}.search-bar.open.svelte-n6fu33 input.svelte-n6fu33,.search-bar.open.svelte-n6fu33 button.svelte-n6fu33{border-bottom-left-radius:0;border-bottom-right-radius:0}.filters-wrapper.svelte-n6fu33.svelte-n6fu33{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 200ms}.filters-wrapper.open.svelte-n6fu33.svelte-n6fu33{grid-template-rows:1fr}.filters-wrapper.svelte-n6fu33 .filters.svelte-n6fu33{color:#4a4a4a;background-color:#fff;margin-top:0;min-height:0;padding-left:1em;padding-right:1em;transition:padding-top 200ms}.filters-wrapper.open.svelte-n6fu33 .filters.svelte-n6fu33{border:1px solid #dbdbdb;border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-top-right-radius:0;padding-top:1em;padding-bottom:1em}.label.svelte-n6fu33.svelte-n6fu33{text-transform:capitalize}.tag.is-small.svelte-n6fu33.svelte-n6fu33{margin-left:0.5em;padding:0 0.5em;border-radius:100em}")}function Je(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function Ge(s,l,n){let e=s.slice();return e[14]=l[n][0],e[15]=l[n][1],e}function Ke(s,l,n){let e=s.slice();return e[18]=l[n][0],e[19]=l[n][1],e}function We(s){let l,n,e,t,o,i,f,r,a,c=s[4]>0&&Ye(s);return{c(){l=d("div"),n=d("button"),e=d("span"),e.innerHTML='<i class="fas fa-filter"></i>',t=I(),o=d("span"),o.textContent="Filters",i=I(),c&&c.c(),m(e,"class","icon is-small"),m(n,"class",f="button "+(s[2]?"is-active":"")+" svelte-n6fu33"),m(l,"class","control")},m(p,_){g(p,l,_),h(l,n),h(n,e),h(n,t),h(n,o),h(n,i),c&&c.m(n,null),r||(a=X(n,"click",s[8]),r=!0)},p(p,_){p[4]>0?c?c.p(p,_):(c=Ye(p),c.c(),c.m(n,null)):c&&(c.d(1),c=null),_&4&&f!==(f="button "+(p[2]?"is-active":"")+" svelte-n6fu33")&&m(n,"class",f)},d(p){p&&v(l),c&&c.d(),r=!1,a()}}}function Ye(s){let l,n;return{c(){l=d("span"),n=C(s[4]),m(l,"class","tag is-small is-warning svelte-n6fu33")},m(e,t){g(e,l,t),h(l,n)},p(e,t){t&16&&V(n,e[4])},d(e){e&&v(l)}}}function Qe(s){let l,n,e,t,o,i,f,r=Object.entries(s[0]),a=[];for(let c=0;c<r.length;c+=1)a[c]=xe(Je(s,r,c));return{c(){l=d("div"),n=d("div");for(let c=0;c<a.length;c+=1)a[c].c();e=I(),t=d("button"),t.textContent="Reset filters",m(t,"class","button is-ghost is-small"),m(n,"class","filters svelte-n6fu33"),m(l,"class",o="filters-wrapper "+(s[2]?"open":"")+" svelte-n6fu33")},m(c,p){g(c,l,p),h(l,n);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(n,null);h(n,e),h(n,t),i||(f=X(t,"click",s[5]),i=!0)},p(c,p){if(p&65){r=Object.entries(c[0]);let _;for(_=0;_<r.length;_+=1){let u=Je(c,r,_);a[_]?a[_].p(u,p):(a[_]=xe(u),a[_].c(),a[_].m(n,e))}for(;_<a.length;_+=1)a[_].d(1);a.length=r.length}p&4&&o!==(o="filters-wrapper "+(c[2]?"open":"")+" svelte-n6fu33")&&m(l,"class",o)},d(c){c&&v(l),F(a,c),i=!1,f()}}}function Xe(s){let l,n=s[18]+"",e,t,o,i;function f(){return s[9](s[10],s[14],s[18])}return{c(){l=d("button"),e=C(n),m(l,"class",t="button "+(s[19]?"is-active is-info":""))},m(r,a){g(r,l,a),h(l,e),o||(i=X(l,"click",f),o=!0)},p(r,a){s=r,a&1&&n!==(n=s[18]+"")&&V(e,n),a&1&&t!==(t="button "+(s[19]?"is-active is-info":""))&&m(l,"class",t)},d(r){r&&v(l),o=!1,i()}}}function Ze(s){let l,n,e,t=s[14]+"",o,i,f,r,a=Object.entries(s[15]),c=[];for(let p=0;p<a.length;p+=1)c[p]=Xe(Ke(s,a,p));return{c(){l=d("div"),n=d("div"),e=d("span"),o=C(t),i=I(),f=d("div"),r=d("div");for(let p=0;p<c.length;p+=1)c[p].c();m(e,"class","label svelte-n6fu33"),m(n,"class","field-label is-normal"),m(r,"class","buttons has-addons"),m(f,"class","field-body"),m(l,"class","field is-horizontal")},m(p,_){g(p,l,_),h(l,n),h(n,e),h(e,o),h(l,i),h(l,f),h(f,r);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(r,null)},p(p,_){if(_&1&&t!==(t=p[14]+"")&&V(o,t),_&65){a=Object.entries(p[15]);let u;for(u=0;u<a.length;u+=1){let O=Ke(p,a,u);c[u]?c[u].p(O,_):(c[u]=Xe(O),c[u].c(),c[u].m(r,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=a.length}},d(p){p&&v(l),F(c,p)}}}function xe(s){let l,n,e=s[10]+"",t,o,i,f,r=Object.entries(s[11]),a=[];for(let c=0;c<r.length;c+=1)a[c]=Ze(Ge(s,r,c));return{c(){l=d("div"),n=d("p"),t=C(e),o=I();for(let c=0;c<a.length;c+=1)a[c].c();i=I(),f=d("hr"),m(n,"class","menu-label"),m(l,"class","block")},m(c,p){g(c,l,p),h(l,n),h(n,t),h(l,o);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(l,null);h(l,i),h(l,f)},p(c,p){if(p&1&&e!==(e=c[10]+"")&&V(t,e),p&65){r=Object.entries(c[11]);let _;for(_=0;_<r.length;_+=1){let u=Ge(c,r,_);a[_]?a[_].p(u,p):(a[_]=Ze(u),a[_].c(),a[_].m(l,i))}for(;_<a.length;_+=1)a[_].d(1);a.length=r.length}},d(c){c&&v(l),F(a,c)}}}function jt(s){let l,n,e,t,o,i,f,r,a,c,p=s[3]&&We(s),_=s[3]&&Qe(s);return{c(){l=d("div"),n=d("div"),e=d("div"),t=d("input"),i=I(),p&&p.c(),r=I(),_&&_.c(),m(t,"class","input svelte-n6fu33"),m(t,"type","text"),m(t,"placeholder","Search: package, api title, version, file name"),m(e,"class","control is-expanded"),m(n,"class",f="field has-addons search-bar "+(s[2]?"open":"")+" svelte-n6fu33"),m(l,"class","block")},m(u,O){g(u,l,O),h(l,n),h(n,e),h(e,t),_e(t,s[1]),h(n,i),p&&p.m(n,null),h(l,r),_&&_.m(l,null),a||(c=[X(t,"input",s[7]),je(o=St.call(null,t))],a=!0)},p(u,[O]){O&2&&t.value!==u[1]&&_e(t,u[1]),u[3]?p?p.p(u,O):(p=We(u),p.c(),p.m(n,null)):p&&(p.d(1),p=null),O&4&&f!==(f="field has-addons search-bar "+(u[2]?"open":"")+" svelte-n6fu33")&&m(n,"class",f),u[3]?_?_.p(u,O):(_=Qe(u),_.c(),_.m(l,null)):_&&(_.d(1),_=null)},i:E,o:E,d(u){u&&v(l),p&&p.d(),_&&_.d(),a=!1,Te(c)}}}function St(s){s.focus()}function At(s,l,n){let{searchText:e=""}=l,{filters:t}=l,o=!1,i=!1,f=0;function r(){n(0,t=le())}function a(u,O,M){n(0,t[u][O][M]=!t[u][O][M],t)}ce(()=>{n(0,t=le()),n(3,i=Object.keys(t).length>0)});function c(){e=this.value,n(1,e)}let p=()=>n(2,o=!o),_=(u,O,M)=>a(u,O,M);return s.$$set=u=>{"searchText"in u&&n(1,e=u.searchText),"filters"in u&&n(0,t=u.filters)},s.$$.update=()=>{if(s.$$.dirty&17){e:if(t){n(4,f=0);for(let u in t)for(let O in t[u])for(let M in t[u][O])n(4,f+=t[u][O][M]?1:0)}}},[t,e,o,i,f,r,a,c,p,_]}var ve=class extends x{constructor(l){super(),Z(this,l,At,jt,Q,{searchText:1,filters:0},Tt)}},et=ve;P();P();function yt(s){ie(s,"svelte-czm3hr",".search-match-highlight.svelte-czm3hr{background-color:yellow}")}function tt(s,l,n){let e=s.slice();return e[3]=l[n],e}function Bt(s){let l=s[3].value+"",n;return{c(){n=C(l)},m(e,t){g(e,n,t)},p(e,t){t&1&&l!==(l=e[3].value+"")&&V(n,l)},d(e){e&&v(n)}}}function Ft(s){let l,n=s[3].value+"",e;return{c(){l=d("span"),e=C(n),m(l,"class","search-match-highlight svelte-czm3hr")},m(t,o){g(t,l,o),h(l,e)},p(t,o){o&1&&n!==(n=t[3].value+"")&&V(e,n)},d(t){t&&v(l)}}}function lt(s){let l;function n(o,i){return o[3].highlight?Ft:Bt}let e=n(s,-1),t=e(s);return{c(){t.c(),l=D()},m(o,i){t.m(o,i),g(o,l,i)},p(o,i){e===(e=n(o,i))&&t?t.p(o,i):(t.d(1),t=e(o),t&&(t.c(),t.m(l.parentNode,l)))},d(o){t.d(o),o&&v(l)}}}function Ct(s){let l,n=s[0],e=[];for(let t=0;t<n.length;t+=1)e[t]=lt(tt(s,n,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=D()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);g(t,l,o)},p(t,[o]){if(o&1){n=t[0];let i;for(i=0;i<n.length;i+=1){let f=tt(t,n,i);e[i]?e[i].p(f,o):(e[i]=lt(f),e[i].c(),e[i].m(l.parentNode,l))}for(;i<e.length;i+=1)e[i].d(1);e.length=n.length}},i:E,o:E,d(t){F(e,t),t&&v(l)}}}function Lt(s,l,n){let{searchMatch:e=null}=l,t=[];function o(i){n(0,t=[]);let f=0;for(let[r,a]of i.indices)f<r&&t.push({value:i.value.slice(f,r),highlight:!1}),t.push({value:i.value.slice(r,a+1),highlight:!0}),f=a+1;f<i.value.length&&t.push({value:i.value.slice(f),highlight:!1})}return s.$$set=i=>{"searchMatch"in i&&n(1,e=i.searchMatch)},s.$$.update=()=>{if(s.$$.dirty&2)e:o(e)},[t,e]}var ke=class extends x{constructor(l){super(),Z(this,l,Lt,Ct,Q,{searchMatch:1},yt)}},Ne=ke;function zt(s){ie(s,"svelte-1q5aooc",".card-header-body.svelte-1q5aooc.svelte-1q5aooc{flex-grow:1}.card-header-title.svelte-1q5aooc.svelte-1q5aooc{word-break:break-all;display:inline-block}.card-header-icon.svelte-1q5aooc.svelte-1q5aooc{color:var(--color-accent)}.is-tag-size.svelte-1q5aooc.svelte-1q5aooc{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}.tag.status-1.svelte-1q5aooc.svelte-1q5aooc{background-color:#ffe08a;color:white}.tag.status-2.svelte-1q5aooc.svelte-1q5aooc{background-color:#f14668;color:white}.searchMatchLine.svelte-1q5aooc.svelte-1q5aooc:not(:last-child){margin-bottom:0.5em}.searchMatchLine.svelte-1q5aooc.svelte-1q5aooc{font-size:small;word-break:break-all}.searchMatchLine.svelte-1q5aooc .key.svelte-1q5aooc{font-weight:bold}")}function it(s,l,n){let e=s.slice();return e[10]=l[n],e}function nt(s,l,n){let e=s.slice();return e[13]=l[n][0],e[14]=l[n][1],e}function st(s){let l,n,e,t,o,i,f,r,a,c,p,_,u,O,M,B,S,ne,se=Object.keys(s[0].otherVersions).length>ut,ee,K,R,re,k=[Et,Vt],q=[];function te(N,z){return N[3]?0:1}o=te(s,-1),i=q[o]=k[o](s);let W=Object.entries(s[0].otherVersions).slice(0,s[2]?void 0:5),T=[];for(let N=0;N<W.length;N+=1)T[N]=rt(nt(s,W,N));let L=se&&ot(s),j=s[1].length>0&&at(s);return{c(){l=d("div"),n=d("header"),e=d("a"),t=d("p"),i.c(),r=I(),a=d("button"),c=d("span"),p=d("i"),u=I(),O=d("div"),M=d("div"),B=d("div"),S=d("div");for(let N=0;N<T.length;N+=1)T[N].c();ne=I(),L&&L.c(),ee=I(),j&&j.c(),m(t,"class","card-header-title svelte-1q5aooc"),m(e,"class","card-header-body svelte-1q5aooc"),m(e,"href",f=s[5]+"/viewer.html?packageName="+s[0].packageName+"&apiName="+s[0].apiName),m(p,"class",_=(s[4].favorites[s[0].packageName]&&s[4].favorites[s[0].packageName][s[0].apiName]?"fas":"far")+" fa-star"),m(c,"class","icon"),m(a,"class","card-header-icon svelte-1q5aooc"),m(n,"class","card-header"),m(S,"class","column"),m(B,"class","columns is-multiline"),m(M,"class","content"),m(O,"class","card-content"),m(l,"class","card")},m(N,z){g(N,l,z),h(l,n),h(n,e),h(e,t),q[o].m(t,null),h(n,r),h(n,a),h(a,c),h(c,p),h(l,u),h(l,O),h(O,M),h(M,B),h(B,S);for(let Y=0;Y<T.length;Y+=1)T[Y]&&T[Y].m(S,null);h(S,ne),L&&L.m(S,null),h(M,ee),j&&j.m(M,null),K=!0,R||(re=X(a,"click",s[6]),R=!0)},p(N,z){let Y=o;if(o=te(N,z),o===Y?q[o].p(N,z):(A(),w(q[Y],1,1,()=>{q[Y]=null}),y(),i=q[o],i?i.p(N,z):(i=q[o]=k[o](N),i.c()),b(i,1),i.m(t,null)),(!K||z&1&&f!==(f=N[5]+"/viewer.html?packageName="+N[0].packageName+"&apiName="+N[0].apiName))&&m(e,"href",f),(!K||z&17&&_!==(_=(N[4].favorites[N[0].packageName]&&N[4].favorites[N[0].packageName][N[0].apiName]?"fas":"far")+" fa-star"))&&m(p,"class",_),z&165){W=Object.entries(N[0].otherVersions).slice(0,N[2]?void 0:5);let H;for(H=0;H<W.length;H+=1){let Ie=nt(N,W,H);T[H]?T[H].p(Ie,z):(T[H]=rt(Ie),T[H].c(),T[H].m(S,ne))}for(;H<T.length;H+=1)T[H].d(1);T.length=W.length}z&1&&(se=Object.keys(N[0].otherVersions).length>ut),se?L?L.p(N,z):(L=ot(N),L.c(),L.m(S,null)):L&&(L.d(1),L=null),N[1].length>0?j?(j.p(N,z),z&2&&b(j,1)):(j=at(N),j.c(),b(j,1),j.m(M,null)):j&&(A(),w(j,1,1,()=>{j=null}),y())},i(N){K||(b(i),b(j),K=!0)},o(N){w(i),w(j),K=!1},d(N){N&&v(l),q[o].d(),F(T,N),L&&L.d(),j&&j.d(),R=!1,re()}}}function Vt(s){let l=s[0].apiName+"",n;return{c(){n=C(l)},m(e,t){g(e,n,t)},p(e,t){t&1&&l!==(l=e[0].apiName+"")&&V(n,l)},i:E,o:E,d(e){e&&v(n)}}}function Et(s){let l,n;return l=new Ne({props:{searchMatch:s[3]}}),{c(){U(l.$$.fragment)},m(e,t){$(l,e,t),n=!0},p(e,t){let o={};t&8&&(o.searchMatch=e[3]),l.$set(o)},i(e){n||(b(l.$$.fragment,e),n=!0)},o(e){w(l.$$.fragment,e),n=!1},d(e){J(l,e)}}}function rt(s){let l,n=s[13]+"",e,t,o;return{c(){l=d("a"),e=C(n),m(l,"class",t="tag ml-1 mb-1 "+s[7](s[14])+" svelte-1q5aooc"),m(l,"href",o=s[5]+"/viewer.html?packageName="+s[0].packageName+"&apiName="+s[0].apiName+"&versionName="+s[13])},m(i,f){g(i,l,f),h(l,e)},p(i,f){f&5&&n!==(n=i[13]+"")&&V(e,n),f&5&&t!==(t="tag ml-1 mb-1 "+i[7](i[14])+" svelte-1q5aooc")&&m(l,"class",t),f&5&&o!==(o=i[5]+"/viewer.html?packageName="+i[0].packageName+"&apiName="+i[0].apiName+"&versionName="+i[13])&&m(l,"href",o)},d(i){i&&v(l)}}}function ot(s){let l,n,e,t,o;return{c(){l=d("button"),n=d("i"),m(n,"class",e="fas fa-angle-"+(s[2]?"left":"right")),m(l,"class","button is-white is-small is-tag-size svelte-1q5aooc")},m(i,f){g(i,l,f),h(l,n),t||(o=X(l,"click",s[9]),t=!0)},p(i,f){f&4&&e!==(e="fas fa-angle-"+(i[2]?"left":"right"))&&m(n,"class",e)},d(i){i&&v(l),t=!1,o()}}}function at(s){let l,n,e=s[1].slice(0,pt+1),t=[];for(let i=0;i<e.length;i+=1)t[i]=ft(it(s,e,i));let o=i=>w(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();l=D()},m(i,f){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,f);g(i,l,f),n=!0},p(i,f){if(f&2){e=i[1].slice(0,pt+1);let r;for(r=0;r<e.length;r+=1){let a=it(i,e,r);t[r]?(t[r].p(a,f),b(t[r],1)):(t[r]=ft(a),t[r].c(),b(t[r],1),t[r].m(l.parentNode,l))}for(A(),r=e.length;r<t.length;r+=1)o(r);y()}},i(i){if(!n){for(let f=0;f<e.length;f+=1)b(t[f]);n=!0}},o(i){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)w(t[f]);n=!1},d(i){F(t,i),i&&v(l)}}}function ct(s){let l,n,e=s[10].key+"",t,o,i,f,r,a;return f=new Ne({props:{searchMatch:s[10]}}),{c(){l=d("p"),n=d("span"),t=C(e),o=C(":"),i=I(),U(f.$$.fragment),r=I(),m(n,"class","key svelte-1q5aooc"),m(l,"class","searchMatchLine svelte-1q5aooc")},m(c,p){g(c,l,p),h(l,n),h(n,t),h(n,o),h(l,i),$(f,l,null),h(l,r),a=!0},p(c,p){(!a||p&2)&&e!==(e=c[10].key+"")&&V(t,e);let _={};p&2&&(_.searchMatch=c[10]),f.$set(_)},i(c){a||(b(f.$$.fragment,c),a=!0)},o(c){w(f.$$.fragment,c),a=!1},d(c){c&&v(l),J(f)}}}function ft(s){let l,n,e=s[10].key!=="apiName"&&ct(s);return{c(){e&&e.c(),l=D()},m(t,o){e&&e.m(t,o),g(t,l,o),n=!0},p(t,o){t[10].key!=="apiName"?e?(e.p(t,o),o&2&&b(e,1)):(e=ct(t),e.c(),b(e,1),e.m(l.parentNode,l)):e&&(A(),w(e,1,1,()=>{e=null}),y())},i(t){n||(b(e),n=!0)},o(t){w(e),n=!1},d(t){e&&e.d(t),t&&v(l)}}}function Rt(s){let l,n,e=s[0]&&st(s);return{c(){e&&e.c(),l=D()},m(t,o){e&&e.m(t,o),g(t,l,o),n=!0},p(t,[o]){t[0]?e?(e.p(t,o),o&1&&b(e,1)):(e=st(t),e.c(),b(e,1),e.m(l.parentNode,l)):e&&(A(),w(e,1,1,()=>{e=null}),y())},i(t){n||(b(e),n=!0)},o(t){w(e),n=!1},d(t){e&&e.d(t),t&&v(l)}}}var ut=8,pt=3;function Ht(s,l,n){let e;oe(s,G,u=>n(4,e=u));let t=qe(),{apiIndex:o}=l,{apiIndexItem:i}=l,{searchMatches:f=[]}=l,r=!1,a=null;function c(){e.favorites[i.packageName]||pe(G,e.favorites[i.packageName]={},e),pe(G,e.favorites[i.packageName][i.apiName]=!e.favorites[i.packageName][i.apiName],e)}function p(u){let O=o.getApi(u);return`status-${Object.values(O.otherFiles).map(B=>o.getApi(B).status).reduce((B,S)=>Math.max(B,S))}`}let _=()=>n(2,r=!r);return s.$$set=u=>{"apiIndex"in u&&n(8,o=u.apiIndex),"apiIndexItem"in u&&n(0,i=u.apiIndexItem),"searchMatches"in u&&n(1,f=u.searchMatches)},s.$$.update=()=>{if(s.$$.dirty&2)e:n(3,a=f.find(u=>u.key==="apiName")||null)},[i,f,r,a,e,t,c,p,o,_]}var we=class extends x{constructor(l){super(),Z(this,l,Ht,Rt,Q,{apiIndex:8,apiIndexItem:0,searchMatches:1},zt)}},ue=we;function _t(s,l,n){let e=s.slice();return e[24]=l[n],e}function mt(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function ht(s,l,n){let e=s.slice();return e[14]=l[n][0],e[15]=l[n][1],e}function dt(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function bt(s,l,n){let e=s.slice();return e[20]=l[n][0],e[21]=l[n][1],e}function Pt(s){let l;return{c(){l=d("div"),l.textContent="Fetching api index...",m(l,"class","box")},m(n,e){g(n,l,e)},p:E,i:E,o:E,d(n){n&&v(l)}}}function Dt(s){let l,n,e,t,o=[$t,Ut],i=[];function f(r,a){return!r[0]||r[0].length<2?0:1}return l=f(s,-1),n=i[l]=o[l](s),{c(){n.c(),e=D()},m(r,a){i[l].m(r,a),g(r,e,a),t=!0},p(r,a){let c=l;l=f(r,a),l===c?i[l].p(r,a):(A(),w(i[c],1,1,()=>{i[c]=null}),y(),n=i[l],n?n.p(r,a):(n=i[l]=o[l](r),n.c()),b(n,1),n.m(e.parentNode,e))},i(r){t||(b(n),t=!0)},o(r){w(n),t=!1},d(r){i[l].d(r),r&&v(e)}}}function Ut(s){let l,n,e=s[3],t=[];for(let i=0;i<e.length;i+=1)t[i]=gt(_t(s,e,i));let o=i=>w(t[i],1,1,()=>{t[i]=null});return{c(){l=d("div");for(let i=0;i<t.length;i+=1)t[i].c();m(l,"class","columns is-multiline")},m(i,f){g(i,l,f);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(l,null);n=!0},p(i,f){if(f&12){e=i[3];let r;for(r=0;r<e.length;r+=1){let a=_t(i,e,r);t[r]?(t[r].p(a,f),b(t[r],1)):(t[r]=gt(a),t[r].c(),b(t[r],1),t[r].m(l,null))}for(A(),r=e.length;r<t.length;r+=1)o(r);y()}},i(i){if(!n){for(let f=0;f<e.length;f+=1)b(t[f]);n=!0}},o(i){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)w(t[f]);n=!1},d(i){i&&v(l),F(t,i)}}}function $t(s){let l,n,e,t=s[5]>0&&vt(s),o=Object.entries(be(s[2],s[1].filters)),i=[];for(let r=0;r<o.length;r+=1)i[r]=It(mt(s,o,r));let f=r=>w(i[r],1,1,()=>{i[r]=null});return{c(){t&&t.c(),l=I();for(let r=0;r<i.length;r+=1)i[r].c();n=D()},m(r,a){t&&t.m(r,a),g(r,l,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,a);g(r,n,a),e=!0},p(r,a){if(r[5]>0?t?(t.p(r,a),a&32&&b(t,1)):(t=vt(r),t.c(),b(t,1),t.m(l.parentNode,l)):t&&(A(),w(t,1,1,()=>{t=null}),y()),a&6){o=Object.entries(be(r[2],r[1].filters));let c;for(c=0;c<o.length;c+=1){let p=mt(r,o,c);i[c]?(i[c].p(p,a),b(i[c],1)):(i[c]=It(p),i[c].c(),b(i[c],1),i[c].m(n.parentNode,n))}for(A(),c=o.length;c<i.length;c+=1)f(c);y()}},i(r){if(!e){b(t);for(let a=0;a<o.length;a+=1)b(i[a]);e=!0}},o(r){w(t),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)w(i[a]);e=!1},d(r){t&&t.d(r),r&&v(l),F(i,r),r&&v(n)}}}function gt(s){let l,n,e,t;return n=new ue({props:{apiIndex:s[2],apiIndexItem:s[24].item,searchMatches:s[24].matches}}),{c(){l=d("div"),U(n.$$.fragment),e=I(),m(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(o,i){g(o,l,i),$(n,l,null),h(l,e),t=!0},p(o,i){let f={};i&4&&(f.apiIndex=o[2]),i&8&&(f.apiIndexItem=o[24].item),i&8&&(f.searchMatches=o[24].matches),n.$set(f)},i(o){t||(b(n.$$.fragment,o),t=!0)},o(o){w(n.$$.fragment,o),t=!1},d(o){o&&v(l),J(n)}}}function vt(s){let l,n,e,t,o=Object.entries(s[1].favorites),i=[];for(let r=0;r<o.length;r+=1)i[r]=wt(dt(s,o,r));let f=r=>w(i[r],1,1,()=>{i[r]=null});return{c(){l=d("h4"),l.innerHTML='<i class="fas fa-star"></i> Favorites',n=I(),e=d("div");for(let r=0;r<i.length;r+=1)i[r].c();m(l,"class","subtitle is-4"),m(e,"class","columns is-multiline")},m(r,a){g(r,l,a),g(r,n,a),g(r,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);t=!0},p(r,a){if(a&6){o=Object.entries(r[1].favorites);let c;for(c=0;c<o.length;c+=1){let p=dt(r,o,c);i[c]?(i[c].p(p,a),b(i[c],1)):(i[c]=wt(p),i[c].c(),b(i[c],1),i[c].m(e,null))}for(A(),c=o.length;c<i.length;c+=1)f(c);y()}},i(r){if(!t){for(let a=0;a<o.length;a+=1)b(i[a]);t=!0}},o(r){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)w(i[a]);t=!1},d(r){r&&v(l),r&&v(n),r&&v(e),F(i,r)}}}function kt(s){let l,n,e,t;return n=new ue({props:{apiIndex:s[2],apiIndexItem:s[2].getApiByName(s[10],s[20])}}),{c(){l=d("div"),U(n.$$.fragment),e=I(),m(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(o,i){g(o,l,i),$(n,l,null),h(l,e),t=!0},p(o,i){let f={};i&4&&(f.apiIndex=o[2]),i&6&&(f.apiIndexItem=o[2].getApiByName(o[10],o[20])),n.$set(f)},i(o){t||(b(n.$$.fragment,o),t=!0)},o(o){w(n.$$.fragment,o),t=!1},d(o){o&&v(l),J(n)}}}function Nt(s){let l,n,e=s[21]&&kt(s);return{c(){e&&e.c(),l=D()},m(t,o){e&&e.m(t,o),g(t,l,o),n=!0},p(t,o){t[21]?e?(e.p(t,o),o&2&&b(e,1)):(e=kt(t),e.c(),b(e,1),e.m(l.parentNode,l)):e&&(A(),w(e,1,1,()=>{e=null}),y())},i(t){n||(b(e),n=!0)},o(t){w(e),n=!1},d(t){e&&e.d(t),t&&v(l)}}}function wt(s){let l,n,e=Object.entries(s[11]),t=[];for(let i=0;i<e.length;i+=1)t[i]=Nt(bt(s,e,i));let o=i=>w(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();l=D()},m(i,f){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,f);g(i,l,f),n=!0},p(i,f){if(f&6){e=Object.entries(i[11]);let r;for(r=0;r<e.length;r+=1){let a=bt(i,e,r);t[r]?(t[r].p(a,f),b(t[r],1)):(t[r]=Nt(a),t[r].c(),b(t[r],1),t[r].m(l.parentNode,l))}for(A(),r=e.length;r<t.length;r+=1)o(r);y()}},i(i){if(!n){for(let f=0;f<e.length;f+=1)b(t[f]);n=!0}},o(i){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)w(t[f]);n=!1},d(i){F(t,i),i&&v(l)}}}function Ot(s){let l,n,e;return n=new ue({props:{apiIndex:s[2],apiIndexItem:s[2].getApi(s[15])}}),{c(){l=d("div"),U(n.$$.fragment),m(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(t,o){g(t,l,o),$(n,l,null),e=!0},p(t,o){let i={};o&4&&(i.apiIndex=t[2]),o&6&&(i.apiIndexItem=t[2].getApi(t[15])),n.$set(i)},i(t){e||(b(n.$$.fragment,t),e=!0)},o(t){w(n.$$.fragment,t),e=!1},d(t){t&&v(l),J(n)}}}function It(s){let l,n=s[10]+"",e,t,o,i,f,r=Object.entries(s[11]),a=[];for(let p=0;p<r.length;p+=1)a[p]=Ot(ht(s,r,p));let c=p=>w(a[p],1,1,()=>{a[p]=null});return{c(){l=d("h4"),e=C(n),t=I(),o=d("div");for(let p=0;p<a.length;p+=1)a[p].c();i=I(),m(l,"class","subtitle is-4"),m(o,"class","columns is-multiline")},m(p,_){g(p,l,_),h(l,e),g(p,t,_),g(p,o,_);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(o,null);h(o,i),f=!0},p(p,_){if((!f||_&6)&&n!==(n=p[10]+"")&&V(e,n),_&6){r=Object.entries(p[11]);let u;for(u=0;u<r.length;u+=1){let O=ht(p,r,u);a[u]?(a[u].p(O,_),b(a[u],1)):(a[u]=Ot(O),a[u].c(),b(a[u],1),a[u].m(o,i))}for(A(),u=r.length;u<a.length;u+=1)c(u);y()}},i(p){if(!f){for(let _=0;_<r.length;_+=1)b(a[_]);f=!0}},o(p){a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)w(a[_]);f=!1},d(p){p&&v(l),p&&v(t),p&&v(o),F(a,p)}}}function Jt(s){let l,n,e,t,o,i,f,r,a,c,p,_,u,O,M,B,S;l=new ze({props:{activePage:"browser"}});function ne(k){s[7](k)}function se(k){s[8](k)}let ee={};s[0]!==void 0&&(ee.searchText=s[0]),s[1].filters!==void 0&&(ee.filters=s[1].filters),i=new et({props:ee}),me.push(()=>de(i,"searchText",ne)),me.push(()=>de(i,"filters",se)),c=new Ve({props:{errors:s[4]}});let K=[Dt,Pt],R=[];function re(k,q){return k[2]?0:1}return _=re(s,-1),u=R[_]=K[_](s),B=new Ae({}),{c(){U(l.$$.fragment),n=I(),e=d("div"),t=d("section"),t.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',o=I(),U(i.$$.fragment),a=I(),U(c.$$.fragment),p=I(),u.c(),M=I(),U(B.$$.fragment),m(t,"class","hero is-small"),m(e,"class",O="container "+(s[6].fluidLayout?"is-fluid":""))},m(k,q){$(l,k,q),g(k,n,q),g(k,e,q),h(e,t),h(e,o),$(i,e,null),h(e,a),$(c,e,null),h(e,p),R[_].m(e,null),g(k,M,q),$(B,k,q),S=!0},p(k,[q]){let te={};!f&&q&1&&(f=!0,te.searchText=k[0],he(()=>f=!1)),!r&&q&2&&(r=!0,te.filters=k[1].filters,he(()=>r=!1)),i.$set(te);let W={};q&16&&(W.errors=k[4]),c.$set(W);let T=_;_=re(k,q),_===T?R[_].p(k,q):(A(),w(R[T],1,1,()=>{R[T]=null}),y(),u=R[_],u?u.p(k,q):(u=R[_]=K[_](k),u.c()),b(u,1),u.m(e,null)),(!S||q&64&&O!==(O="container "+(k[6].fluidLayout?"is-fluid":"")))&&m(e,"class",O)},i(k){S||(b(l.$$.fragment,k),b(i.$$.fragment,k),b(c.$$.fragment,k),b(u),b(B.$$.fragment,k),S=!0)},o(k){w(l.$$.fragment,k),w(i.$$.fragment,k),w(c.$$.fragment,k),w(u),w(B.$$.fragment,k),S=!1},d(k){J(l,k),k&&v(n),k&&v(e),J(i),J(c),R[_].d(),k&&v(M),J(B,k)}}}function Gt(s,l,n){let e,t;oe(s,G,u=>n(1,e=u)),oe(s,Le,u=>n(6,t=u));let o=null,i=[],f=[],r=0,a="";function c(){for(let u in e.favorites){for(let O in e.favorites[u])(!e.favorites[u][O]||!o.getApiByName(u,O))&&delete e.favorites[u][O];Object.keys(e.favorites[u]).length===0&&delete e.favorites[u]}G.set(e)}ce(()=>ye(void 0,void 0,void 0,function*(){Ue();try{n(2,o=yield Pe.fetch()),Ee(o),c()}catch(u){n(4,f=[...f,u])}})),Se(()=>{$e()});function p(u){a=u,n(0,a)}function _(u){s.$$.not_equal(e.filters,u)&&(e.filters=u,G.set(e))}return s.$$.update=()=>{if(s.$$.dirty&2)e:n(5,r=Object.values(e.favorites).filter(u=>Object.values(u).filter(O=>O).length).length);if(s.$$.dirty&3)e:a.length>1&&n(3,i=He(Re(a),e.filters))},[a,e,o,i,f,r,t,p,_]}var Oe=class extends x{constructor(l){super(),Z(this,l,Gt,Jt,Q,{})}},qt=Oe;new qt({target:document.body});Me();

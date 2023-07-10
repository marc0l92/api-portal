// Project: https://github.com/marc0l92/api-portal
import{b as Re}from"./chunk-JUIHNYO3.js";import{a as Ee,b as Pe,c as ge}from"./chunk-SYMKBMXZ.js";import{a as Ve}from"./chunk-YDXZNED3.js";import{$ as d,A as m,B as ne,C as v,D as k,E as P,F as g,G as q,H as M,I as H,J as ee,M as p,N as U,O as he,R as ae,T as je,W as pe,Y as me,Z as S,_ as C,aa as w,ba as de,ca as W,da as Y,ea as J,fa as te,ga as le,h as K,ha as Te,j as Ie,ka as Ae,la as Fe,m as ue,ma as Be,n as Ne,na as Le,o as D,p as ye,r as x,sa as Se,t as se,ta as Ce,y as _e,z as Me}from"./chunk-W2LZK5JL.js";K();K();K();var $e="browserOptions",qe={favorites:{}},X=Le(Object.assign({},qe)),ce=null,De=()=>{ce||(X.set(Be($e,qe)),ce=X.subscribe(s=>{Fe($e,s)}))},He=()=>{ce&&ce()};K();function Ot(s){ne(s,"svelte-gywzoz",".search-bar.svelte-gywzoz.svelte-gywzoz{margin-bottom:0}.search-bar.open.svelte-gywzoz input.svelte-gywzoz,.search-bar.open.svelte-gywzoz button.svelte-gywzoz{border-bottom-left-radius:0;border-bottom-right-radius:0}.filters-wrapper.svelte-gywzoz.svelte-gywzoz{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 200ms}.filters-wrapper.open.svelte-gywzoz.svelte-gywzoz{grid-template-rows:1fr}.filters-wrapper.svelte-gywzoz .filters.svelte-gywzoz{color:#4a4a4a;background-color:#fff;margin-top:0;min-height:0;padding-left:1em;padding-right:1em;transition:padding-top 200ms}.filters-wrapper.open.svelte-gywzoz .filters.svelte-gywzoz{border:1px solid #dbdbdb;border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-top-right-radius:0;padding-top:1em;padding-bottom:1em}.label.svelte-gywzoz.svelte-gywzoz{text-transform:capitalize}")}function Ue(s,l,n){let t=s.slice();return t[9]=l[n][0],t[10]=l[n][1],t}function Ge(s,l,n){let t=s.slice();return t[13]=l[n][0],t[14]=l[n][1],t}function Ke(s,l,n){let t=s.slice();return t[17]=l[n][0],t[18]=l[n][1],t}function We(s){let l,n,t,e,r,i,c,o;return{c(){l=g("div"),n=g("button"),t=g("span"),t.innerHTML='<i class="fas fa-filter"></i>',e=M(),r=g("span"),r.textContent="Filters",p(t,"class","icon is-small"),p(n,"class",i="button "+(s[2]?"is-active":"")+" svelte-gywzoz"),p(l,"class","control")},m(a,f){v(a,l,f),m(l,n),m(n,t),m(n,e),m(n,r),c||(o=ee(n,"click",s[7]),c=!0)},p(a,f){f&4&&i!==(i="button "+(a[2]?"is-active":"")+" svelte-gywzoz")&&p(n,"class",i)},d(a){a&&k(l),c=!1,o()}}}function Ye(s){let l,n=s[17]+"",t,e,r,i;function c(){return s[8](s[9],s[13],s[17])}return{c(){l=g("button"),t=q(n),p(l,"class",e="button "+(s[18]?"is-active is-info":""))},m(o,a){v(o,l,a),m(l,t),r||(i=ee(l,"click",c),r=!0)},p(o,a){s=o,a&2&&n!==(n=s[17]+"")&&U(t,n),a&2&&e!==(e="button "+(s[18]?"is-active is-info":""))&&p(l,"class",e)},d(o){o&&k(l),r=!1,i()}}}function Je(s){let l,n,t,e=s[13]+"",r,i,c,o,a=Object.entries(s[14]),f=[];for(let h=0;h<a.length;h+=1)f[h]=Ye(Ke(s,a,h));return{c(){l=g("div"),n=g("div"),t=g("span"),r=q(e),i=M(),c=g("div"),o=g("div");for(let h=0;h<f.length;h+=1)f[h].c();p(t,"class","label svelte-gywzoz"),p(n,"class","field-label is-normal"),p(o,"class","buttons has-addons"),p(c,"class","field-body"),p(l,"class","field is-horizontal")},m(h,_){v(h,l,_),m(l,n),m(n,t),m(t,r),m(l,i),m(l,c),m(c,o);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(o,null)},p(h,_){if(_&2&&e!==(e=h[13]+"")&&U(r,e),_&34){a=Object.entries(h[14]);let u;for(u=0;u<a.length;u+=1){let b=Ke(h,a,u);f[u]?f[u].p(b,_):(f[u]=Ye(b),f[u].c(),f[u].m(o,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=a.length}},d(h){h&&k(l),P(f,h)}}}function Qe(s){let l,n,t=s[9]+"",e,r,i,c,o=Object.entries(s[10]),a=[];for(let f=0;f<o.length;f+=1)a[f]=Je(Ge(s,o,f));return{c(){l=g("div"),n=g("p"),e=q(t),r=M();for(let f=0;f<a.length;f+=1)a[f].c();i=M(),c=g("hr"),p(n,"class","menu-label"),p(l,"class","block")},m(f,h){v(f,l,h),m(l,n),m(n,e),m(l,r);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(l,null);m(l,i),m(l,c)},p(f,h){if(h&2&&t!==(t=f[9]+"")&&U(e,t),h&34){o=Object.entries(f[10]);let _;for(_=0;_<o.length;_+=1){let u=Ge(f,o,_);a[_]?a[_].p(u,h):(a[_]=Je(u),a[_].c(),a[_].m(l,i))}for(;_<a.length;_+=1)a[_].d(1);a.length=o.length}},d(f){f&&k(l),P(a,f)}}}function It(s){let l,n,t,e,r,i,c,o,a,f,h,_,u,b,A,I=s[3]&&We(s),j=Object.entries(s[1]),F=[];for(let N=0;N<j.length;N+=1)F[N]=Qe(Ue(s,j,N));return{c(){l=g("div"),n=g("div"),t=g("div"),e=g("input"),i=M(),I&&I.c(),o=M(),a=g("div"),f=g("div");for(let N=0;N<F.length;N+=1)F[N].c();h=M(),_=g("button"),_.textContent="Reset filters",p(e,"class","input svelte-gywzoz"),p(e,"type","text"),p(e,"placeholder","Search: package, api title, version, file name"),p(t,"class","control is-expanded"),p(n,"class",c="field has-addons search-bar "+(s[2]?"open":"")+" svelte-gywzoz"),p(_,"class","button is-ghost is-small"),p(f,"class","filters svelte-gywzoz"),p(a,"class",u="filters-wrapper "+(s[2]?"open":"")+" svelte-gywzoz"),p(l,"class","block")},m(N,V){v(N,l,V),m(l,n),m(n,t),m(t,e),he(e,s[0]),m(n,i),I&&I.m(n,null),m(l,o),m(l,a),m(a,f);for(let y=0;y<F.length;y+=1)F[y]&&F[y].m(f,null);m(f,h),m(f,_),b||(A=[ee(e,"input",s[6]),Me(r=Nt.call(null,e)),ee(_,"click",s[4])],b=!0)},p(N,[V]){if(V&1&&e.value!==N[0]&&he(e,N[0]),N[3]?I?I.p(N,V):(I=We(N),I.c(),I.m(n,null)):I&&(I.d(1),I=null),V&4&&c!==(c="field has-addons search-bar "+(N[2]?"open":"")+" svelte-gywzoz")&&p(n,"class",c),V&34){j=Object.entries(N[1]);let y;for(y=0;y<j.length;y+=1){let E=Ue(N,j,y);F[y]?F[y].p(E,V):(F[y]=Qe(E),F[y].c(),F[y].m(f,h))}for(;y<F.length;y+=1)F[y].d(1);F.length=j.length}V&4&&u!==(u="filters-wrapper "+(N[2]?"open":"")+" svelte-gywzoz")&&p(a,"class",u)},i:D,o:D,d(N){N&&k(l),I&&I.d(),P(F,N),b=!1,ye(A)}}}function Nt(s){s.focus()}function yt(s,l,n){let{searchText:t=""}=l,{filters:e}=l,r=!1,i=!1;function c(){n(1,e=ue())}function o(_,u,b){n(1,e[_][u][b]=!e[_][u][b],e)}ae(()=>{n(1,e=ue()),n(3,i=Object.keys(e).length>0)});function a(){t=this.value,n(0,t)}let f=()=>n(2,r=!r),h=(_,u,b)=>o(_,u,b);return s.$$set=_=>{"searchText"in _&&n(0,t=_.searchText),"filters"in _&&n(1,e=_.filters)},[t,e,r,i,c,o,a,f,h]}var be=class extends le{constructor(l){super(),te(this,l,yt,It,x,{searchText:0,filters:1},Ot)}},Xe=be;K();K();function Mt(s){ne(s,"svelte-czm3hr",".search-match-highlight.svelte-czm3hr{background-color:yellow}")}function Ze(s,l,n){let t=s.slice();return t[3]=l[n],t}function jt(s){let l=s[3].value+"",n;return{c(){n=q(l)},m(t,e){v(t,n,e)},p(t,e){e&1&&l!==(l=t[3].value+"")&&U(n,l)},d(t){t&&k(n)}}}function Tt(s){let l,n=s[3].value+"",t;return{c(){l=g("span"),t=q(n),p(l,"class","search-match-highlight svelte-czm3hr")},m(e,r){v(e,l,r),m(l,t)},p(e,r){r&1&&n!==(n=e[3].value+"")&&U(t,n)},d(e){e&&k(l)}}}function xe(s){let l;function n(r,i){return r[3].highlight?Tt:jt}let t=n(s,-1),e=t(s);return{c(){e.c(),l=H()},m(r,i){e.m(r,i),v(r,l,i)},p(r,i){t===(t=n(r,i))&&e?e.p(r,i):(e.d(1),e=t(r),e&&(e.c(),e.m(l.parentNode,l)))},d(r){e.d(r),r&&k(l)}}}function At(s){let l,n=s[0],t=[];for(let e=0;e<n.length;e+=1)t[e]=xe(Ze(s,n,e));return{c(){for(let e=0;e<t.length;e+=1)t[e].c();l=H()},m(e,r){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,r);v(e,l,r)},p(e,[r]){if(r&1){n=e[0];let i;for(i=0;i<n.length;i+=1){let c=Ze(e,n,i);t[i]?t[i].p(c,r):(t[i]=xe(c),t[i].c(),t[i].m(l.parentNode,l))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},i:D,o:D,d(e){P(t,e),e&&k(l)}}}function Ft(s,l,n){let{searchMatch:t=null}=l,e=[];function r(i){n(0,e=[]);let c=0;for(let[o,a]of i.indices)c<o&&e.push({value:i.value.slice(c,o),highlight:!1}),e.push({value:i.value.slice(o,a+1),highlight:!0}),c=a+1;c<i.value.length&&e.push({value:i.value.slice(c),highlight:!1})}return s.$$set=i=>{"searchMatch"in i&&n(1,t=i.searchMatch)},s.$$.update=()=>{if(s.$$.dirty&2)e:r(t)},[e,t]}var ve=class extends le{constructor(l){super(),te(this,l,Ft,At,x,{searchMatch:1},Mt)}},ke=ve;function Bt(s){ne(s,"svelte-e0gv9o",".card-header-body.svelte-e0gv9o.svelte-e0gv9o{flex-grow:1}.card-header-title.svelte-e0gv9o.svelte-e0gv9o{word-break:break-all}.card-header-icon.svelte-e0gv9o.svelte-e0gv9o{color:var(--color-accent)}.is-tag-size.svelte-e0gv9o.svelte-e0gv9o{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}.tag.status-1.svelte-e0gv9o.svelte-e0gv9o{background-color:#ffe08a;color:white}.tag.status-2.svelte-e0gv9o.svelte-e0gv9o{background-color:#f14668;color:white}.searchMatchLine.svelte-e0gv9o.svelte-e0gv9o:not(:last-child){margin-bottom:0.5em}.searchMatchLine.svelte-e0gv9o.svelte-e0gv9o{font-size:small}.searchMatchLine.svelte-e0gv9o .key.svelte-e0gv9o{font-weight:bold}")}function et(s,l,n){let t=s.slice();return t[10]=l[n],t}function tt(s,l,n){let t=s.slice();return t[13]=l[n][0],t[14]=l[n][1],t}function lt(s){let l,n,t,e,r,i,c,o,a,f,h,_,u,b,A,I,j,F,N=Object.keys(s[0].otherVersions).length>at,V,y,E,oe,z=[St,Lt],T=[];function ie(O,$){return O[3]?0:1}r=ie(s,-1),i=T[r]=z[r](s);let Q=Object.entries(s[0].otherVersions).slice(0,s[2]?void 0:5),B=[];for(let O=0;O<Q.length;O+=1)B[O]=it(tt(s,Q,O));let R=N&&nt(s),L=s[1].length>0&&ot(s);return{c(){l=g("div"),n=g("header"),t=g("a"),e=g("p"),i.c(),o=M(),a=g("button"),f=g("span"),h=g("i"),u=M(),b=g("div"),A=g("div"),I=g("div"),j=g("div");for(let O=0;O<B.length;O+=1)B[O].c();F=M(),R&&R.c(),V=M(),L&&L.c(),p(e,"class","card-header-title svelte-e0gv9o"),p(t,"class","card-header-body svelte-e0gv9o"),p(t,"href",c=s[5]+"/viewer.html?api="+s[0].hash),p(h,"class",_=(s[4].favorites[s[0].packageName]&&s[4].favorites[s[0].packageName][s[0].apiName]?"fas":"far")+" fa-star"),p(f,"class","icon"),p(a,"class","card-header-icon svelte-e0gv9o"),p(n,"class","card-header"),p(j,"class","column"),p(I,"class","columns is-multiline"),p(A,"class","content"),p(b,"class","card-content"),p(l,"class","card")},m(O,$){v(O,l,$),m(l,n),m(n,t),m(t,e),T[r].m(e,null),m(n,o),m(n,a),m(a,f),m(f,h),m(l,u),m(l,b),m(b,A),m(A,I),m(I,j);for(let Z=0;Z<B.length;Z+=1)B[Z]&&B[Z].m(j,null);m(j,F),R&&R.m(j,null),m(A,V),L&&L.m(A,null),y=!0,E||(oe=ee(a,"click",s[6]),E=!0)},p(O,$){let Z=r;if(r=ie(O,$),r===Z?T[r].p(O,$):(S(),w(T[Z],1,1,()=>{T[Z]=null}),C(),i=T[r],i?i.p(O,$):(i=T[r]=z[r](O),i.c()),d(i,1),i.m(e,null)),(!y||$&1&&c!==(c=O[5]+"/viewer.html?api="+O[0].hash))&&p(t,"href",c),(!y||$&17&&_!==(_=(O[4].favorites[O[0].packageName]&&O[4].favorites[O[0].packageName][O[0].apiName]?"fas":"far")+" fa-star"))&&p(h,"class",_),$&165){Q=Object.entries(O[0].otherVersions).slice(0,O[2]?void 0:5);let G;for(G=0;G<Q.length;G+=1){let Oe=tt(O,Q,G);B[G]?B[G].p(Oe,$):(B[G]=it(Oe),B[G].c(),B[G].m(j,F))}for(;G<B.length;G+=1)B[G].d(1);B.length=Q.length}$&1&&(N=Object.keys(O[0].otherVersions).length>at),N?R?R.p(O,$):(R=nt(O),R.c(),R.m(j,null)):R&&(R.d(1),R=null),O[1].length>0?L?(L.p(O,$),$&2&&d(L,1)):(L=ot(O),L.c(),d(L,1),L.m(A,null)):L&&(S(),w(L,1,1,()=>{L=null}),C())},i(O){y||(d(i),d(L),y=!0)},o(O){w(i),w(L),y=!1},d(O){O&&k(l),T[r].d(),P(B,O),R&&R.d(),L&&L.d(),E=!1,oe()}}}function Lt(s){let l=s[0].apiName+"",n;return{c(){n=q(l)},m(t,e){v(t,n,e)},p(t,e){e&1&&l!==(l=t[0].apiName+"")&&U(n,l)},i:D,o:D,d(t){t&&k(n)}}}function St(s){let l,n;return l=new ke({props:{searchMatch:s[3]}}),{c(){W(l.$$.fragment)},m(t,e){Y(l,t,e),n=!0},p(t,e){let r={};e&8&&(r.searchMatch=t[3]),l.$set(r)},i(t){n||(d(l.$$.fragment,t),n=!0)},o(t){w(l.$$.fragment,t),n=!1},d(t){J(l,t)}}}function it(s){let l,n=s[13]+"",t,e,r;return{c(){l=g("a"),t=q(n),p(l,"class",e="tag ml-1 mb-1 "+s[7](s[14])+" svelte-e0gv9o"),p(l,"href",r=s[5]+"/viewer.html?api="+s[14])},m(i,c){v(i,l,c),m(l,t)},p(i,c){c&5&&n!==(n=i[13]+"")&&U(t,n),c&5&&e!==(e="tag ml-1 mb-1 "+i[7](i[14])+" svelte-e0gv9o")&&p(l,"class",e),c&5&&r!==(r=i[5]+"/viewer.html?api="+i[14])&&p(l,"href",r)},d(i){i&&k(l)}}}function nt(s){let l,n,t,e,r;return{c(){l=g("button"),n=g("i"),p(n,"class",t="fas fa-angle-"+(s[2]?"left":"right")),p(l,"class","button is-white is-small is-tag-size svelte-e0gv9o")},m(i,c){v(i,l,c),m(l,n),e||(r=ee(l,"click",s[9]),e=!0)},p(i,c){c&4&&t!==(t="fas fa-angle-"+(i[2]?"left":"right"))&&p(n,"class",t)},d(i){i&&k(l),e=!1,r()}}}function ot(s){let l,n,t=s[1],e=[];for(let i=0;i<t.length;i+=1)e[i]=rt(et(s,t,i));let r=i=>w(e[i],1,1,()=>{e[i]=null});return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=H()},m(i,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(i,c);v(i,l,c),n=!0},p(i,c){if(c&2){t=i[1];let o;for(o=0;o<t.length;o+=1){let a=et(i,t,o);e[o]?(e[o].p(a,c),d(e[o],1)):(e[o]=rt(a),e[o].c(),d(e[o],1),e[o].m(l.parentNode,l))}for(S(),o=t.length;o<e.length;o+=1)r(o);C()}},i(i){if(!n){for(let c=0;c<t.length;c+=1)d(e[c]);n=!0}},o(i){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)w(e[c]);n=!1},d(i){P(e,i),i&&k(l)}}}function st(s){let l,n,t=s[10].key+"",e,r,i,c,o,a;return c=new ke({props:{searchMatch:s[10]}}),{c(){l=g("p"),n=g("span"),e=q(t),r=q(":"),i=M(),W(c.$$.fragment),o=M(),p(n,"class","key svelte-e0gv9o"),p(l,"class","searchMatchLine svelte-e0gv9o")},m(f,h){v(f,l,h),m(l,n),m(n,e),m(n,r),m(l,i),Y(c,l,null),m(l,o),a=!0},p(f,h){(!a||h&2)&&t!==(t=f[10].key+"")&&U(e,t);let _={};h&2&&(_.searchMatch=f[10]),c.$set(_)},i(f){a||(d(c.$$.fragment,f),a=!0)},o(f){w(c.$$.fragment,f),a=!1},d(f){f&&k(l),J(c)}}}function rt(s){let l,n,t=s[10].key!=="apiName"&&st(s);return{c(){t&&t.c(),l=H()},m(e,r){t&&t.m(e,r),v(e,l,r),n=!0},p(e,r){e[10].key!=="apiName"?t?(t.p(e,r),r&2&&d(t,1)):(t=st(e),t.c(),d(t,1),t.m(l.parentNode,l)):t&&(S(),w(t,1,1,()=>{t=null}),C())},i(e){n||(d(t),n=!0)},o(e){w(t),n=!1},d(e){t&&t.d(e),e&&k(l)}}}function Ct(s){let l,n,t=s[0]&&lt(s);return{c(){t&&t.c(),l=H()},m(e,r){t&&t.m(e,r),v(e,l,r),n=!0},p(e,[r]){e[0]?t?(t.p(e,r),r&1&&d(t,1)):(t=lt(e),t.c(),d(t,1),t.m(l.parentNode,l)):t&&(S(),w(t,1,1,()=>{t=null}),C())},i(e){n||(d(t),n=!0)},o(e){w(t),n=!1},d(e){t&&t.d(e),e&&k(l)}}}var at=8;function Vt(s,l,n){let t;se(s,X,u=>n(4,t=u));let e=Ie(),{apiIndex:r}=l,{apiIndexItem:i}=l,{searchMatches:c=[]}=l,o=!1,a=null;function f(){t.favorites[i.packageName]||_e(X,t.favorites[i.packageName]={},t),_e(X,t.favorites[i.packageName][i.apiName]=!t.favorites[i.packageName][i.apiName],t)}function h(u){let b=r.getApi(u);return`status-${Object.values(b.otherFiles).map(I=>r.getApi(I).status).reduce((I,j)=>Math.max(I,j))}`}let _=()=>n(2,o=!o);return s.$$set=u=>{"apiIndex"in u&&n(8,r=u.apiIndex),"apiIndexItem"in u&&n(0,i=u.apiIndexItem),"searchMatches"in u&&n(1,c=u.searchMatches)},s.$$.update=()=>{if(s.$$.dirty&2)e:n(3,a=c.find(u=>u.key==="apiName")||null)},[i,c,o,a,t,e,f,h,r,_]}var we=class extends le{constructor(l){super(),te(this,l,Vt,Ct,x,{apiIndex:8,apiIndexItem:0,searchMatches:1},Bt)}},fe=we;function ct(s,l,n){let t=s.slice();return t[25]=l[n],t}function ft(s,l,n){let t=s.slice();return t[11]=l[n][0],t[12]=l[n][1],t}function ut(s,l,n){let t=s.slice();return t[15]=l[n][0],t[16]=l[n][1],t}function _t(s,l,n){let t=s.slice();return t[11]=l[n][0],t[12]=l[n][1],t}function ht(s,l,n){let t=s.slice();return t[21]=l[n][0],t[22]=l[n][1],t}function Et(s){let l;return{c(){l=g("div"),l.textContent="Fetching api index...",p(l,"class","box")},m(n,t){v(n,l,t)},p:D,i:D,o:D,d(n){n&&k(l)}}}function Pt(s){let l,n,t,e,r=[$t,Rt],i=[];function c(o,a){return!o[0]||o[0].length<2?0:1}return l=c(s,-1),n=i[l]=r[l](s),{c(){n.c(),t=H()},m(o,a){i[l].m(o,a),v(o,t,a),e=!0},p(o,a){let f=l;l=c(o,a),l===f?i[l].p(o,a):(S(),w(i[f],1,1,()=>{i[f]=null}),C(),n=i[l],n?n.p(o,a):(n=i[l]=r[l](o),n.c()),d(n,1),n.m(t.parentNode,t))},i(o){e||(d(n),e=!0)},o(o){w(n),e=!1},d(o){i[l].d(o),o&&k(t)}}}function Rt(s){let l,n,t=s[3],e=[];for(let i=0;i<t.length;i+=1)e[i]=pt(ct(s,t,i));let r=i=>w(e[i],1,1,()=>{e[i]=null});return{c(){l=g("div");for(let i=0;i<e.length;i+=1)e[i].c();p(l,"class","columns is-multiline")},m(i,c){v(i,l,c);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(l,null);n=!0},p(i,c){if(c&12){t=i[3];let o;for(o=0;o<t.length;o+=1){let a=ct(i,t,o);e[o]?(e[o].p(a,c),d(e[o],1)):(e[o]=pt(a),e[o].c(),d(e[o],1),e[o].m(l,null))}for(S(),o=t.length;o<e.length;o+=1)r(o);C()}},i(i){if(!n){for(let c=0;c<t.length;c+=1)d(e[c]);n=!0}},o(i){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)w(e[c]);n=!1},d(i){i&&k(l),P(e,i)}}}function $t(s){let l,n,t,e=s[5]>0&&mt(s),r=Object.entries(s[2].getPackages()),i=[];for(let o=0;o<r.length;o+=1)i[o]=wt(ft(s,r,o));let c=o=>w(i[o],1,1,()=>{i[o]=null});return{c(){e&&e.c(),l=M();for(let o=0;o<i.length;o+=1)i[o].c();n=H()},m(o,a){e&&e.m(o,a),v(o,l,a);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(o,a);v(o,n,a),t=!0},p(o,a){if(o[5]>0?e?(e.p(o,a),a&32&&d(e,1)):(e=mt(o),e.c(),d(e,1),e.m(l.parentNode,l)):e&&(S(),w(e,1,1,()=>{e=null}),C()),a&68){r=Object.entries(o[2].getPackages());let f;for(f=0;f<r.length;f+=1){let h=ft(o,r,f);i[f]?(i[f].p(h,a),d(i[f],1)):(i[f]=wt(h),i[f].c(),d(i[f],1),i[f].m(n.parentNode,n))}for(S(),f=r.length;f<i.length;f+=1)c(f);C()}},i(o){if(!t){d(e);for(let a=0;a<r.length;a+=1)d(i[a]);t=!0}},o(o){w(e),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)w(i[a]);t=!1},d(o){e&&e.d(o),o&&k(l),P(i,o),o&&k(n)}}}function pt(s){let l,n,t,e;return n=new fe({props:{apiIndex:s[2],apiIndexItem:s[25].item,searchMatches:s[25].matches}}),{c(){l=g("div"),W(n.$$.fragment),t=M(),p(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(r,i){v(r,l,i),Y(n,l,null),m(l,t),e=!0},p(r,i){let c={};i&4&&(c.apiIndex=r[2]),i&8&&(c.apiIndexItem=r[25].item),i&8&&(c.searchMatches=r[25].matches),n.$set(c)},i(r){e||(d(n.$$.fragment,r),e=!0)},o(r){w(n.$$.fragment,r),e=!1},d(r){r&&k(l),J(n)}}}function mt(s){let l,n,t,e,r=Object.entries(s[1].favorites),i=[];for(let o=0;o<r.length;o+=1)i[o]=bt(_t(s,r,o));let c=o=>w(i[o],1,1,()=>{i[o]=null});return{c(){l=g("h4"),l.innerHTML='<i class="fas fa-star"></i> Favorites',n=M(),t=g("div");for(let o=0;o<i.length;o+=1)i[o].c();p(l,"class","subtitle is-4"),p(t,"class","columns is-multiline")},m(o,a){v(o,l,a),v(o,n,a),v(o,t,a);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(t,null);e=!0},p(o,a){if(a&6){r=Object.entries(o[1].favorites);let f;for(f=0;f<r.length;f+=1){let h=_t(o,r,f);i[f]?(i[f].p(h,a),d(i[f],1)):(i[f]=bt(h),i[f].c(),d(i[f],1),i[f].m(t,null))}for(S(),f=r.length;f<i.length;f+=1)c(f);C()}},i(o){if(!e){for(let a=0;a<r.length;a+=1)d(i[a]);e=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)w(i[a]);e=!1},d(o){o&&k(l),o&&k(n),o&&k(t),P(i,o)}}}function dt(s){let l,n,t,e;return n=new fe({props:{apiIndex:s[2],apiIndexItem:s[2].getApiByName(s[11],s[21])}}),{c(){l=g("div"),W(n.$$.fragment),t=M(),p(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(r,i){v(r,l,i),Y(n,l,null),m(l,t),e=!0},p(r,i){let c={};i&4&&(c.apiIndex=r[2]),i&6&&(c.apiIndexItem=r[2].getApiByName(r[11],r[21])),n.$set(c)},i(r){e||(d(n.$$.fragment,r),e=!0)},o(r){w(n.$$.fragment,r),e=!1},d(r){r&&k(l),J(n)}}}function gt(s){let l,n,t=s[22]&&dt(s);return{c(){t&&t.c(),l=H()},m(e,r){t&&t.m(e,r),v(e,l,r),n=!0},p(e,r){e[22]?t?(t.p(e,r),r&2&&d(t,1)):(t=dt(e),t.c(),d(t,1),t.m(l.parentNode,l)):t&&(S(),w(t,1,1,()=>{t=null}),C())},i(e){n||(d(t),n=!0)},o(e){w(t),n=!1},d(e){t&&t.d(e),e&&k(l)}}}function bt(s){let l,n,t=Object.entries(s[12]),e=[];for(let i=0;i<t.length;i+=1)e[i]=gt(ht(s,t,i));let r=i=>w(e[i],1,1,()=>{e[i]=null});return{c(){for(let i=0;i<e.length;i+=1)e[i].c();l=H()},m(i,c){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(i,c);v(i,l,c),n=!0},p(i,c){if(c&6){t=Object.entries(i[12]);let o;for(o=0;o<t.length;o+=1){let a=ht(i,t,o);e[o]?(e[o].p(a,c),d(e[o],1)):(e[o]=gt(a),e[o].c(),d(e[o],1),e[o].m(l.parentNode,l))}for(S(),o=t.length;o<e.length;o+=1)r(o);C()}},i(i){if(!n){for(let c=0;c<t.length;c+=1)d(e[c]);n=!0}},o(i){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)w(e[c]);n=!1},d(i){P(e,i),i&&k(l)}}}function vt(s){let l,n,t;return n=new fe({props:{apiIndex:s[2],apiIndexItem:s[2].getApi(s[16])}}),{c(){l=g("div"),W(n.$$.fragment),p(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(e,r){v(e,l,r),Y(n,l,null),t=!0},p(e,r){let i={};r&4&&(i.apiIndex=e[2]),r&4&&(i.apiIndexItem=e[2].getApi(e[16])),n.$set(i)},i(e){t||(d(n.$$.fragment,e),t=!0)},o(e){w(n.$$.fragment,e),t=!1},d(e){e&&k(l),J(n)}}}function kt(s){let l=ge(s[2].getApi(s[16]),s[6]),n,t,e=l&&vt(s);return{c(){e&&e.c(),n=H()},m(r,i){e&&e.m(r,i),v(r,n,i),t=!0},p(r,i){i&68&&(l=ge(r[2].getApi(r[16]),r[6])),l?e?(e.p(r,i),i&68&&d(e,1)):(e=vt(r),e.c(),d(e,1),e.m(n.parentNode,n)):e&&(S(),w(e,1,1,()=>{e=null}),C())},i(r){t||(d(e),t=!0)},o(r){w(e),t=!1},d(r){e&&e.d(r),r&&k(n)}}}function wt(s){let l,n=s[11]+"",t,e,r,i,c,o=Object.entries(s[12]),a=[];for(let h=0;h<o.length;h+=1)a[h]=kt(ut(s,o,h));let f=h=>w(a[h],1,1,()=>{a[h]=null});return{c(){l=g("h4"),t=q(n),e=M(),r=g("div");for(let h=0;h<a.length;h+=1)a[h].c();i=M(),p(l,"class","subtitle is-4"),p(r,"class","columns is-multiline")},m(h,_){v(h,l,_),m(l,t),v(h,e,_),v(h,r,_);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null);m(r,i),c=!0},p(h,_){if((!c||_&4)&&n!==(n=h[11]+"")&&U(t,n),_&68){o=Object.entries(h[12]);let u;for(u=0;u<o.length;u+=1){let b=ut(h,o,u);a[u]?(a[u].p(b,_),d(a[u],1)):(a[u]=kt(b),a[u].c(),d(a[u],1),a[u].m(r,i))}for(S(),u=o.length;u<a.length;u+=1)f(u);C()}},i(h){if(!c){for(let _=0;_<o.length;_+=1)d(a[_]);c=!0}},o(h){a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)w(a[_]);c=!1},d(h){h&&k(l),h&&k(e),h&&k(r),P(a,h)}}}function qt(s){let l,n,t,e,r,i,c,o,a,f,h,_,u,b,A,I,j;l=new Ce({props:{activePage:"browser"}});function F(z){s[8](z)}function N(z){s[9](z)}let V={};s[0]!==void 0&&(V.searchText=s[0]),s[6]!==void 0&&(V.filters=s[6]),i=new Xe({props:V}),pe.push(()=>de(i,"searchText",F)),pe.push(()=>de(i,"filters",N)),f=new Ve({props:{errors:s[4]}});let y=[Pt,Et],E=[];function oe(z,T){return z[2]?0:1}return _=oe(s,-1),u=E[_]=y[_](s),I=new Te({}),{c(){W(l.$$.fragment),n=M(),t=g("div"),e=g("section"),e.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',r=M(),W(i.$$.fragment),a=M(),W(f.$$.fragment),h=M(),u.c(),A=M(),W(I.$$.fragment),p(e,"class","hero is-small"),p(t,"class",b="container "+(s[7].fluidLayout?"is-fluid":""))},m(z,T){Y(l,z,T),v(z,n,T),v(z,t,T),m(t,e),m(t,r),Y(i,t,null),m(t,a),Y(f,t,null),m(t,h),E[_].m(t,null),v(z,A,T),Y(I,z,T),j=!0},p(z,[T]){let ie={};!c&&T&1&&(c=!0,ie.searchText=z[0],me(()=>c=!1)),!o&&T&64&&(o=!0,ie.filters=z[6],me(()=>o=!1)),i.$set(ie);let Q={};T&16&&(Q.errors=z[4]),f.$set(Q);let B=_;_=oe(z,T),_===B?E[_].p(z,T):(S(),w(E[B],1,1,()=>{E[B]=null}),C(),u=E[_],u?u.p(z,T):(u=E[_]=y[_](z),u.c()),d(u,1),u.m(t,null)),(!j||T&128&&b!==(b="container "+(z[7].fluidLayout?"is-fluid":"")))&&p(t,"class",b)},i(z){j||(d(l.$$.fragment,z),d(i.$$.fragment,z),d(f.$$.fragment,z),d(u),d(I.$$.fragment,z),j=!0)},o(z){w(l.$$.fragment,z),w(i.$$.fragment,z),w(f.$$.fragment,z),w(u),w(I.$$.fragment,z),j=!1},d(z){J(l,z),z&&k(n),z&&k(t),J(i),J(f),E[_].d(),z&&k(A),J(I,z)}}}function Dt(s,l,n){let t,e;se(s,X,b=>n(1,t=b)),se(s,Se,b=>n(7,e=b));let r=null,i=[],c=[],o=0,a="",f={};function h(){for(let b in t.favorites){for(let A in t.favorites[b])(!t.favorites[b][A]||!r.getApiByName(b,A))&&delete t.favorites[b][A];Object.keys(t.favorites[b]).length===0&&delete t.favorites[b]}X.set(t)}ae(()=>Ae(void 0,void 0,void 0,function*(){De();try{n(2,r=yield Re.fetch()),Ee(r),h()}catch(b){n(4,c=[...c,b])}})),je(()=>{He()});function _(b){a=b,n(0,a)}function u(b){f=b,n(6,f)}return s.$$.update=()=>{if(s.$$.dirty&2)e:n(5,o=Object.values(t.favorites).filter(b=>Object.values(b).filter(A=>A).length).length);if(s.$$.dirty&1)e:a.length>1&&n(3,i=Pe(a))},[a,t,r,i,c,o,f,e,_,u]}var ze=class extends le{constructor(l){super(),te(this,l,Dt,qt,x,{})}},zt=ze;new zt({target:document.body});Ne();

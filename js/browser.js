// Project: https://github.com/marc0l92/api-portal
import{d as Ie,e as Ae,f as Ee}from"./chunk-TCXW6SPE.js";import{a as Be}from"./chunk-OLL6EACJ.js";import{$ as z,A as p,B as le,C as k,D as w,E as I,F as d,G as D,H as N,I as U,J as W,M as h,N as P,O as ce,R as Oe,T as Ne,U as je,Y as F,Z as L,_ as v,aa as V,ba as G,ca as J,da as x,ea as ee,fa as Se,h as q,ia as Me,j as be,ja as Te,k as ke,ka as $e,la as Ce,m as re,n as we,o as H,p as ze,qa as Fe,r as Z,ra as Le,t as ie,y as ae,z as ye}from"./chunk-GSR4GGTJ.js";q();q();q();q();var De="browserOptions",He={favorites:{}},Y=Ce(Object.assign({},He)),oe=null,Pe=()=>{oe||(Y.set($e(De,He)),oe=Y.subscribe(s=>{Te(De,s)}))},Re=()=>{oe&&oe()};q();function kt(s){le(s,"svelte-czm3hr",".search-match-highlight.svelte-czm3hr{background-color:yellow}")}function qe(s,l,n){let e=s.slice();return e[3]=l[n],e}function wt(s){let l=s[3].value+"",n;return{c(){n=D(l)},m(e,t){k(e,n,t)},p(e,t){t&1&&l!==(l=e[3].value+"")&&P(n,l)},d(e){e&&w(n)}}}function zt(s){let l,n=s[3].value+"",e;return{c(){l=d("span"),e=D(n),h(l,"class","search-match-highlight svelte-czm3hr")},m(t,r){k(t,l,r),p(l,e)},p(t,r){r&1&&n!==(n=t[3].value+"")&&P(e,n)},d(t){t&&w(l)}}}function Ue(s){let l;function n(r,i){return r[3].highlight?zt:wt}let e=n(s,-1),t=e(s);return{c(){t.c(),l=U()},m(r,i){t.m(r,i),k(r,l,i)},p(r,i){e===(e=n(r,i))&&t?t.p(r,i):(t.d(1),t=e(r),t&&(t.c(),t.m(l.parentNode,l)))},d(r){t.d(r),r&&w(l)}}}function yt(s){let l,n=s[0],e=[];for(let t=0;t<n.length;t+=1)e[t]=Ue(qe(s,n,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=U()},m(t,r){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,r);k(t,l,r)},p(t,[r]){if(r&1){n=t[0];let i;for(i=0;i<n.length;i+=1){let f=qe(t,n,i);e[i]?e[i].p(f,r):(e[i]=Ue(f),e[i].c(),e[i].m(l.parentNode,l))}for(;i<e.length;i+=1)e[i].d(1);e.length=n.length}},i:H,o:H,d(t){I(e,t),t&&w(l)}}}function Ot(s,l,n){let{searchMatch:e=null}=l,t=[];function r(i){n(0,t=[]);let f=0;for(let[o,a]of i.indices)f<o&&t.push({value:i.value.slice(f,o),highlight:!1}),t.push({value:i.value.slice(o,a+1),highlight:!0}),f=a+1;f<i.value.length&&t.push({value:i.value.slice(f),highlight:!1})}return s.$$set=i=>{"searchMatch"in i&&n(1,e=i.searchMatch)},s.$$.update=()=>{if(s.$$.dirty&2)e:r(e)},[t,e]}var fe=class extends ee{constructor(l){super(),x(this,l,Ot,yt,Z,{searchMatch:1},kt)}},ue=fe;function Nt(s){le(s,"svelte-e0gv9o",".card-header-body.svelte-e0gv9o.svelte-e0gv9o{flex-grow:1}.card-header-title.svelte-e0gv9o.svelte-e0gv9o{word-break:break-all}.card-header-icon.svelte-e0gv9o.svelte-e0gv9o{color:var(--color-accent)}.is-tag-size.svelte-e0gv9o.svelte-e0gv9o{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}.tag.status-1.svelte-e0gv9o.svelte-e0gv9o{background-color:#ffe08a;color:white}.tag.status-2.svelte-e0gv9o.svelte-e0gv9o{background-color:#f14668;color:white}.searchMatchLine.svelte-e0gv9o.svelte-e0gv9o:not(:last-child){margin-bottom:0.5em}.searchMatchLine.svelte-e0gv9o.svelte-e0gv9o{font-size:small}.searchMatchLine.svelte-e0gv9o .key.svelte-e0gv9o{font-weight:bold}")}function Ve(s,l,n){let e=s.slice();return e[11]=l[n],e}function Ge(s,l,n){let e=s.slice();return e[14]=l[n][0],e[15]=l[n][1],e}function Je(s){let l,n,e,t,r,i,f,o,a,c,u,_,m,b,T,$,j,M,g=Object.keys(s[2]).length>Ze,S,O,K,pe,ge=[St,jt],Q=[];function de(y,E){return y[6]?0:1}r=de(s,-1),i=Q[r]=ge[r](s);let te=Object.entries(s[2]).slice(0,s[5]?void 0:5),B=[];for(let y=0;y<te.length;y+=1)B[y]=Ke(Ge(s,te,y));let A=g&&We(s),C=s[3].length>0&&Ye(s);return{c(){l=d("div"),n=d("header"),e=d("a"),t=d("p"),i.c(),o=N(),a=d("button"),c=d("span"),u=d("i"),m=N(),b=d("div"),T=d("div"),$=d("div"),j=d("div");for(let y=0;y<B.length;y+=1)B[y].c();M=N(),A&&A.c(),S=N(),C&&C.c(),h(t,"class","card-header-title svelte-e0gv9o"),h(e,"class","card-header-body svelte-e0gv9o"),h(e,"href",f=s[8]+"/viewer.html?api="+s[4]),h(u,"class",_=(s[7].favorites[s[0]]&&s[7].favorites[s[0]][s[1]]?"fas":"far")+" fa-star"),h(c,"class","icon"),h(a,"class","card-header-icon svelte-e0gv9o"),h(n,"class","card-header"),h(j,"class","column"),h($,"class","columns is-multiline"),h(T,"class","content"),h(b,"class","card-content"),h(l,"class","card")},m(y,E){k(y,l,E),p(l,n),p(n,e),p(e,t),Q[r].m(t,null),p(n,o),p(n,a),p(a,c),p(c,u),p(l,m),p(l,b),p(b,T),p(T,$),p($,j);for(let X=0;X<B.length;X+=1)B[X]&&B[X].m(j,null);p(j,M),A&&A.m(j,null),p(T,S),C&&C.m(T,null),O=!0,K||(pe=W(a,"click",s[9]),K=!0)},p(y,E){let X=r;if(r=de(y,E),r===X?Q[r].p(y,E):(F(),z(Q[X],1,1,()=>{Q[X]=null}),L(),i=Q[r],i?i.p(y,E):(i=Q[r]=ge[r](y),i.c()),v(i,1),i.m(t,null)),(!O||E&16&&f!==(f=y[8]+"/viewer.html?api="+y[4]))&&h(e,"href",f),(!O||E&131&&_!==(_=(y[7].favorites[y[0]]&&y[7].favorites[y[0]][y[1]]?"fas":"far")+" fa-star"))&&h(u,"class",_),E&292){te=Object.entries(y[2]).slice(0,y[5]?void 0:5);let R;for(R=0;R<te.length;R+=1){let ve=Ge(y,te,R);B[R]?B[R].p(ve,E):(B[R]=Ke(ve),B[R].c(),B[R].m(j,M))}for(;R<B.length;R+=1)B[R].d(1);B.length=te.length}E&4&&(g=Object.keys(y[2]).length>Ze),g?A?A.p(y,E):(A=We(y),A.c(),A.m(j,null)):A&&(A.d(1),A=null),y[3].length>0?C?(C.p(y,E),E&8&&v(C,1)):(C=Ye(y),C.c(),v(C,1),C.m(T,null)):C&&(F(),z(C,1,1,()=>{C=null}),L())},i(y){O||(v(i),v(C),O=!0)},o(y){z(i),z(C),O=!1},d(y){y&&w(l),Q[r].d(),I(B,y),A&&A.d(),C&&C.d(),K=!1,pe()}}}function jt(s){let l;return{c(){l=D(s[1])},m(n,e){k(n,l,e)},p(n,e){e&2&&P(l,n[1])},i:H,o:H,d(n){n&&w(l)}}}function St(s){let l,n;return l=new ue({props:{searchMatch:s[6]}}),{c(){V(l.$$.fragment)},m(e,t){G(l,e,t),n=!0},p(e,t){let r={};t&64&&(r.searchMatch=e[6]),l.$set(r)},i(e){n||(v(l.$$.fragment,e),n=!0)},o(e){z(l.$$.fragment,e),n=!1},d(e){J(l,e)}}}function Ke(s){let l,n=s[14]+"",e,t,r;return{c(){l=d("a"),e=D(n),h(l,"class",t="tag ml-1 mb-1 "+xe(s[15])+" svelte-e0gv9o"),h(l,"href",r=s[8]+"/viewer.html?api="+Object.values(s[15])[0].hash)},m(i,f){k(i,l,f),p(l,e)},p(i,f){f&36&&n!==(n=i[14]+"")&&P(e,n),f&36&&t!==(t="tag ml-1 mb-1 "+xe(i[15])+" svelte-e0gv9o")&&h(l,"class",t),f&36&&r!==(r=i[8]+"/viewer.html?api="+Object.values(i[15])[0].hash)&&h(l,"href",r)},d(i){i&&w(l)}}}function We(s){let l,n,e,t,r;return{c(){l=d("button"),n=d("i"),h(n,"class",e="fas fa-angle-"+(s[5]?"left":"right")),h(l,"class","button is-white is-small is-tag-size svelte-e0gv9o")},m(i,f){k(i,l,f),p(l,n),t||(r=W(l,"click",s[10]),t=!0)},p(i,f){f&32&&e!==(e="fas fa-angle-"+(i[5]?"left":"right"))&&h(n,"class",e)},d(i){i&&w(l),t=!1,r()}}}function Ye(s){let l,n,e=s[3],t=[];for(let i=0;i<e.length;i+=1)t[i]=Xe(Ve(s,e,i));let r=i=>z(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();l=U()},m(i,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(i,f);k(i,l,f),n=!0},p(i,f){if(f&8){e=i[3];let o;for(o=0;o<e.length;o+=1){let a=Ve(i,e,o);t[o]?(t[o].p(a,f),v(t[o],1)):(t[o]=Xe(a),t[o].c(),v(t[o],1),t[o].m(l.parentNode,l))}for(F(),o=e.length;o<t.length;o+=1)r(o);L()}},i(i){if(!n){for(let f=0;f<e.length;f+=1)v(t[f]);n=!0}},o(i){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)z(t[f]);n=!1},d(i){I(t,i),i&&w(l)}}}function Qe(s){let l,n,e=s[11].key+"",t,r,i,f,o,a;return f=new ue({props:{searchMatch:s[11]}}),{c(){l=d("p"),n=d("span"),t=D(e),r=D(":"),i=N(),V(f.$$.fragment),o=N(),h(n,"class","key svelte-e0gv9o"),h(l,"class","searchMatchLine svelte-e0gv9o")},m(c,u){k(c,l,u),p(l,n),p(n,t),p(n,r),p(l,i),G(f,l,null),p(l,o),a=!0},p(c,u){(!a||u&8)&&e!==(e=c[11].key+"")&&P(t,e);let _={};u&8&&(_.searchMatch=c[11]),f.$set(_)},i(c){a||(v(f.$$.fragment,c),a=!0)},o(c){z(f.$$.fragment,c),a=!1},d(c){c&&w(l),J(f)}}}function Xe(s){let l,n,e=s[11].key!=="apiName"&&Qe(s);return{c(){e&&e.c(),l=U()},m(t,r){e&&e.m(t,r),k(t,l,r),n=!0},p(t,r){t[11].key!=="apiName"?e?(e.p(t,r),r&8&&v(e,1)):(e=Qe(t),e.c(),v(e,1),e.m(l.parentNode,l)):e&&(F(),z(e,1,1,()=>{e=null}),L())},i(t){n||(v(e),n=!0)},o(t){z(e),n=!1},d(t){e&&e.d(t),t&&w(l)}}}function Mt(s){let l,n,e=s[2]&&Je(s);return{c(){e&&e.c(),l=U()},m(t,r){e&&e.m(t,r),k(t,l,r),n=!0},p(t,[r]){t[2]?e?(e.p(t,r),r&4&&v(e,1)):(e=Je(t),e.c(),v(e,1),e.m(l.parentNode,l)):e&&(F(),z(e,1,1,()=>{e=null}),L())},i(t){n||(v(e),n=!0)},o(t){z(e),n=!1},d(t){e&&e.d(t),t&&w(l)}}}var Ze=8;function xe(s){return`status-${Object.values(s).map(n=>n.status).reduce((n,e)=>Math.max(n,e))}`}function Tt(s,l,n){let e;ie(s,Y,b=>n(7,e=b));let t=be(),{packageName:r=null}=l,{name:i=null}=l,{apiSummary:f=null}=l,{searchMatches:o=[]}=l,a="",c=!1,u=null;function _(){console.log(JSON.stringify(e)),e.favorites[r]||ae(Y,e.favorites[r]={},e),ae(Y,e.favorites[r][i]=!e.favorites[r][i],e)}let m=()=>n(5,c=!c);return s.$$set=b=>{"packageName"in b&&n(0,r=b.packageName),"name"in b&&n(1,i=b.name),"apiSummary"in b&&n(2,f=b.apiSummary),"searchMatches"in b&&n(3,o=b.searchMatches)},s.$$.update=()=>{if(s.$$.dirty&4){e:if(f){let b=Object.keys(f)[0];n(4,a=Object.values(f[b])[0].hash)}}if(s.$$.dirty&8)e:n(6,u=o.find(b=>b.key==="apiName"))},[r,i,f,o,a,c,u,e,t,_,m]}var me=class extends ee{constructor(l){super(),x(this,l,Tt,Mt,Z,{packageName:0,name:1,apiSummary:2,searchMatches:3},Nt)}},se=me;q();function $t(s){le(s,"svelte-gywzoz",".search-bar.svelte-gywzoz.svelte-gywzoz{margin-bottom:0}.search-bar.open.svelte-gywzoz input.svelte-gywzoz,.search-bar.open.svelte-gywzoz button.svelte-gywzoz{border-bottom-left-radius:0;border-bottom-right-radius:0}.filters-wrapper.svelte-gywzoz.svelte-gywzoz{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 200ms}.filters-wrapper.open.svelte-gywzoz.svelte-gywzoz{grid-template-rows:1fr}.filters-wrapper.svelte-gywzoz .filters.svelte-gywzoz{color:#4a4a4a;background-color:#fff;margin-top:0;min-height:0;padding-left:1em;padding-right:1em;transition:padding-top 200ms}.filters-wrapper.open.svelte-gywzoz .filters.svelte-gywzoz{border:1px solid #dbdbdb;border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-top-right-radius:0;padding-top:1em;padding-bottom:1em}.label.svelte-gywzoz.svelte-gywzoz{text-transform:capitalize}")}function et(s,l,n){let e=s.slice();return e[11]=l[n][0],e[12]=l[n][1],e}function tt(s,l,n){let e=s.slice();return e[15]=l[n][0],e[16]=l[n][1],e}function lt(s,l,n){let e=s.slice();return e[19]=l[n][0],e[20]=l[n][1],e}function Ct(s){let l,n,e,t,r,i,f,o;return{c(){l=d("div"),n=d("button"),e=d("span"),e.innerHTML='<i class="fas fa-filter"></i>',t=N(),r=d("span"),r.textContent="Filters",h(e,"class","icon is-small"),h(n,"class",i="button "+(s[1]?"is-active":"")+" svelte-gywzoz"),h(l,"class","control")},m(a,c){k(a,l,c),p(l,n),p(n,e),p(n,t),p(n,r),f||(o=W(n,"click",s[8]),f=!0)},p(a,c){c&2&&i!==(i="button "+(a[1]?"is-active":"")+" svelte-gywzoz")&&h(n,"class",i)},d(a){a&&w(l),f=!1,o()}}}function it(s){let l,n=s[19]+"",e,t,r,i;function f(){return s[9](s[11],s[15],s[19])}return{c(){l=d("button"),e=D(n),h(l,"class",t="button "+(s[20]?"is-active is-info":""))},m(o,a){k(o,l,a),p(l,e),r||(i=W(l,"click",f),r=!0)},p(o,a){s=o,a&4&&n!==(n=s[19]+"")&&P(e,n),a&4&&t!==(t="button "+(s[20]?"is-active is-info":""))&&h(l,"class",t)},d(o){o&&w(l),r=!1,i()}}}function nt(s){let l,n,e,t=s[15]+"",r,i,f,o,a=Object.entries(s[16]),c=[];for(let u=0;u<a.length;u+=1)c[u]=it(lt(s,a,u));return{c(){l=d("div"),n=d("div"),e=d("span"),r=D(t),i=N(),f=d("div"),o=d("div");for(let u=0;u<c.length;u+=1)c[u].c();h(e,"class","label svelte-gywzoz"),h(n,"class","field-label is-normal"),h(o,"class","buttons has-addons"),h(f,"class","field-body"),h(l,"class","field is-horizontal")},m(u,_){k(u,l,_),p(l,n),p(n,e),p(e,r),p(l,i),p(l,f),p(f,o);for(let m=0;m<c.length;m+=1)c[m]&&c[m].m(o,null)},p(u,_){if(_&4&&t!==(t=u[15]+"")&&P(r,t),_&36){a=Object.entries(u[16]);let m;for(m=0;m<a.length;m+=1){let b=lt(u,a,m);c[m]?c[m].p(b,_):(c[m]=it(b),c[m].c(),c[m].m(o,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=a.length}},d(u){u&&w(l),I(c,u)}}}function ot(s){let l,n,e=s[11]+"",t,r,i,f,o=Object.entries(s[12]),a=[];for(let c=0;c<o.length;c+=1)a[c]=nt(tt(s,o,c));return{c(){l=d("div"),n=d("p"),t=D(e),r=N();for(let c=0;c<a.length;c+=1)a[c].c();i=N(),f=d("hr"),h(n,"class","menu-label"),h(l,"class","block")},m(c,u){k(c,l,u),p(l,n),p(n,t),p(l,r);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(l,null);p(l,i),p(l,f)},p(c,u){if(u&4&&e!==(e=c[11]+"")&&P(t,e),u&36){o=Object.entries(c[12]);let _;for(_=0;_<o.length;_+=1){let m=tt(c,o,_);a[_]?a[_].p(m,u):(a[_]=nt(m),a[_].c(),a[_].m(l,i))}for(;_<a.length;_+=1)a[_].d(1);a.length=o.length}},d(c){c&&w(l),I(a,c)}}}function Ft(s){let l,n,e,t,r,i,f,o,a,c,u,_,m,b,T,$=s[3]&&Ct(s),j=Object.entries(s[2]),M=[];for(let g=0;g<j.length;g+=1)M[g]=ot(et(s,j,g));return{c(){l=d("div"),n=d("div"),e=d("div"),t=d("input"),i=N(),$&&$.c(),o=N(),a=d("div"),c=d("div");for(let g=0;g<M.length;g+=1)M[g].c();u=N(),_=d("button"),_.textContent="Reset filters",h(t,"class","input svelte-gywzoz"),h(t,"type","text"),h(t,"placeholder","Search: package, api title, version, file name"),h(e,"class","control is-expanded"),h(n,"class",f="field has-addons search-bar "+(s[1]?"open":"")+" svelte-gywzoz"),h(_,"class","button is-ghost is-small"),h(c,"class","filters svelte-gywzoz"),h(a,"class",m="filters-wrapper "+(s[1]?"open":"")+" svelte-gywzoz"),h(l,"class","block")},m(g,S){k(g,l,S),p(l,n),p(n,e),p(e,t),ce(t,s[0]),p(n,i),$&&$.m(n,null),p(l,o),p(l,a),p(a,c);for(let O=0;O<M.length;O+=1)M[O]&&M[O].m(c,null);p(c,u),p(c,_),b||(T=[W(t,"input",s[7]),W(t,"input",s[6]),ye(r=Lt.call(null,t)),W(_,"click",s[4])],b=!0)},p(g,[S]){if(S&1&&t.value!==g[0]&&ce(t,g[0]),g[3]&&$.p(g,S),S&2&&f!==(f="field has-addons search-bar "+(g[1]?"open":"")+" svelte-gywzoz")&&h(n,"class",f),S&36){j=Object.entries(g[2]);let O;for(O=0;O<j.length;O+=1){let K=et(g,j,O);M[O]?M[O].p(K,S):(M[O]=ot(K),M[O].c(),M[O].m(c,u))}for(;O<M.length;O+=1)M[O].d(1);M.length=j.length}S&2&&m!==(m="filters-wrapper "+(g[1]?"open":"")+" svelte-gywzoz")&&h(a,"class",m)},i:H,o:H,d(g){g&&w(l),$&&$.d(),I(M,g),b=!1,ze(T)}}}function Lt(s){s.focus()}function Bt(s,l,n){let e="",t=!1,r=re(),i=Object.keys(r).length>0;function f(){n(2,r=re()),c()}function o(b,T,$){n(2,r[b][T][$]=!r[b][T][$],r),c()}let a=je();function c(){a("searchTextChange",{searchText:e,filters:r})}function u(){e=this.value,n(0,e)}return[e,t,r,i,f,o,c,u,()=>n(1,t=!t),(b,T,$)=>o(b,T,$)]}var he=class extends ee{constructor(l){super(),x(this,l,Bt,Ft,Z,{},$t)}},st=he;function rt(s,l,n){let e=s.slice();return e[24]=l[n],e}function at(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function ct(s,l,n){let e=s.slice();return e[14]=l[n][0],e[15]=l[n][1],e}function ft(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function ut(s,l,n){let e=s.slice();return e[20]=l[n][0],e[21]=l[n][1],e}function It(s){let l;return{c(){l=d("div"),l.textContent="Fetching api index...",h(l,"class","box")},m(n,e){k(n,l,e)},p:H,i:H,o:H,d(n){n&&w(l)}}}function At(s){let l,n,e,t,r=[Dt,Et],i=[];function f(o,a){return!o[0]||o[0].length<2?0:1}return l=f(s,-1),n=i[l]=r[l](s),{c(){n.c(),e=U()},m(o,a){i[l].m(o,a),k(o,e,a),t=!0},p(o,a){let c=l;l=f(o,a),l===c?i[l].p(o,a):(F(),z(i[c],1,1,()=>{i[c]=null}),L(),n=i[l],n?n.p(o,a):(n=i[l]=r[l](o),n.c()),v(n,1),n.m(e.parentNode,e))},i(o){t||(v(n),t=!0)},o(o){z(n),t=!1},d(o){i[l].d(o),o&&w(e)}}}function Et(s){let l,n,e=s[3],t=[];for(let i=0;i<e.length;i+=1)t[i]=mt(rt(s,e,i));let r=i=>z(t[i],1,1,()=>{t[i]=null});return{c(){l=d("div");for(let i=0;i<t.length;i+=1)t[i].c();h(l,"class","columns is-multiline")},m(i,f){k(i,l,f);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(l,null);n=!0},p(i,f){if(f&8){e=i[3];let o;for(o=0;o<e.length;o+=1){let a=rt(i,e,o);t[o]?(t[o].p(a,f),v(t[o],1)):(t[o]=mt(a),t[o].c(),v(t[o],1),t[o].m(l,null))}for(F(),o=e.length;o<t.length;o+=1)r(o);L()}},i(i){if(!n){for(let f=0;f<e.length;f+=1)v(t[f]);n=!0}},o(i){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)z(t[f]);n=!1},d(i){i&&w(l),I(t,i)}}}function Dt(s){let l,n,e,t=s[5]>0&&ht(s),r=Object.entries(s[2]),i=[];for(let o=0;o<r.length;o+=1)i[o]=vt(at(s,r,o));let f=o=>z(i[o],1,1,()=>{i[o]=null});return{c(){t&&t.c(),l=N();for(let o=0;o<i.length;o+=1)i[o].c();n=U()},m(o,a){t&&t.m(o,a),k(o,l,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,a);k(o,n,a),e=!0},p(o,a){if(o[5]>0?t?(t.p(o,a),a&32&&v(t,1)):(t=ht(o),t.c(),v(t,1),t.m(l.parentNode,l)):t&&(F(),z(t,1,1,()=>{t=null}),L()),a&4){r=Object.entries(o[2]);let c;for(c=0;c<r.length;c+=1){let u=at(o,r,c);i[c]?(i[c].p(u,a),v(i[c],1)):(i[c]=vt(u),i[c].c(),v(i[c],1),i[c].m(n.parentNode,n))}for(F(),c=r.length;c<i.length;c+=1)f(c);L()}},i(o){if(!e){v(t);for(let a=0;a<r.length;a+=1)v(i[a]);e=!0}},o(o){z(t),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)z(i[a]);e=!1},d(o){t&&t.d(o),o&&w(l),I(i,o),o&&w(n)}}}function mt(s){let l,n,e,t;return n=new se({props:{packageName:s[24].item.packageName,name:s[24].item.apiName,apiSummary:s[24].item.apiSummary,searchMatches:s[24].matches}}),{c(){l=d("div"),V(n.$$.fragment),e=N(),h(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(r,i){k(r,l,i),G(n,l,null),p(l,e),t=!0},p(r,i){let f={};i&8&&(f.packageName=r[24].item.packageName),i&8&&(f.name=r[24].item.apiName),i&8&&(f.apiSummary=r[24].item.apiSummary),i&8&&(f.searchMatches=r[24].matches),n.$set(f)},i(r){t||(v(n.$$.fragment,r),t=!0)},o(r){z(n.$$.fragment,r),t=!1},d(r){r&&w(l),J(n)}}}function ht(s){let l,n,e,t,r=Object.entries(s[1].favorites),i=[];for(let o=0;o<r.length;o+=1)i[o]=gt(ft(s,r,o));let f=o=>z(i[o],1,1,()=>{i[o]=null});return{c(){l=d("h4"),l.innerHTML='<i class="fas fa-star"></i> Favorites',n=N(),e=d("div");for(let o=0;o<i.length;o+=1)i[o].c();h(l,"class","subtitle is-4"),h(e,"class","columns is-multiline")},m(o,a){k(o,l,a),k(o,n,a),k(o,e,a);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(e,null);t=!0},p(o,a){if(a&6){r=Object.entries(o[1].favorites);let c;for(c=0;c<r.length;c+=1){let u=ft(o,r,c);i[c]?(i[c].p(u,a),v(i[c],1)):(i[c]=gt(u),i[c].c(),v(i[c],1),i[c].m(e,null))}for(F(),c=r.length;c<i.length;c+=1)f(c);L()}},i(o){if(!t){for(let a=0;a<r.length;a+=1)v(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)z(i[a]);t=!1},d(o){o&&w(l),o&&w(n),o&&w(e),I(i,o)}}}function _t(s){let l,n,e,t;return n=new se({props:{packageName:s[10],name:s[20],apiSummary:s[2][s[10]][s[20]]}}),{c(){l=d("div"),V(n.$$.fragment),e=N(),h(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(r,i){k(r,l,i),G(n,l,null),p(l,e),t=!0},p(r,i){let f={};i&2&&(f.packageName=r[10]),i&2&&(f.name=r[20]),i&6&&(f.apiSummary=r[2][r[10]][r[20]]),n.$set(f)},i(r){t||(v(n.$$.fragment,r),t=!0)},o(r){z(n.$$.fragment,r),t=!1},d(r){r&&w(l),J(n)}}}function pt(s){let l,n,e=s[21]&&_t(s);return{c(){e&&e.c(),l=U()},m(t,r){e&&e.m(t,r),k(t,l,r),n=!0},p(t,r){t[21]?e?(e.p(t,r),r&2&&v(e,1)):(e=_t(t),e.c(),v(e,1),e.m(l.parentNode,l)):e&&(F(),z(e,1,1,()=>{e=null}),L())},i(t){n||(v(e),n=!0)},o(t){z(e),n=!1},d(t){e&&e.d(t),t&&w(l)}}}function gt(s){let l,n,e=Object.entries(s[11]),t=[];for(let i=0;i<e.length;i+=1)t[i]=pt(ut(s,e,i));let r=i=>z(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();l=U()},m(i,f){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(i,f);k(i,l,f),n=!0},p(i,f){if(f&6){e=Object.entries(i[11]);let o;for(o=0;o<e.length;o+=1){let a=ut(i,e,o);t[o]?(t[o].p(a,f),v(t[o],1)):(t[o]=pt(a),t[o].c(),v(t[o],1),t[o].m(l.parentNode,l))}for(F(),o=e.length;o<t.length;o+=1)r(o);L()}},i(i){if(!n){for(let f=0;f<e.length;f+=1)v(t[f]);n=!0}},o(i){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)z(t[f]);n=!1},d(i){I(t,i),i&&w(l)}}}function dt(s){let l,n,e;return n=new se({props:{packageName:s[10],name:s[14],apiSummary:s[15]}}),{c(){l=d("div"),V(n.$$.fragment),h(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(t,r){k(t,l,r),G(n,l,null),e=!0},p(t,r){let i={};r&4&&(i.packageName=t[10]),r&4&&(i.name=t[14]),r&4&&(i.apiSummary=t[15]),n.$set(i)},i(t){e||(v(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){t&&w(l),J(n)}}}function vt(s){let l,n=s[10]+"",e,t,r,i,f,o=Object.entries(s[11]),a=[];for(let u=0;u<o.length;u+=1)a[u]=dt(ct(s,o,u));let c=u=>z(a[u],1,1,()=>{a[u]=null});return{c(){l=d("h4"),e=D(n),t=N(),r=d("div");for(let u=0;u<a.length;u+=1)a[u].c();i=N(),h(l,"class","subtitle is-4"),h(r,"class","columns is-multiline")},m(u,_){k(u,l,_),p(l,e),k(u,t,_),k(u,r,_);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(r,null);p(r,i),f=!0},p(u,_){if((!f||_&4)&&n!==(n=u[10]+"")&&P(e,n),_&4){o=Object.entries(u[11]);let m;for(m=0;m<o.length;m+=1){let b=ct(u,o,m);a[m]?(a[m].p(b,_),v(a[m],1)):(a[m]=dt(b),a[m].c(),v(a[m],1),a[m].m(r,i))}for(F(),m=o.length;m<a.length;m+=1)c(m);L()}},i(u){if(!f){for(let _=0;_<o.length;_+=1)v(a[_]);f=!0}},o(u){a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)z(a[_]);f=!1},d(u){u&&w(l),u&&w(t),u&&w(r),I(a,u)}}}function Ht(s){let l,n,e,t,r,i,f,o,a,c,u,_,m,b,T;l=new Le({props:{activePage:"browser"}}),i=new st({}),i.$on("searchTextChange",s[7]),o=new Be({props:{messages:s[4]}});let $=[At,It],j=[];function M(g,S){return g[2]?0:1}return c=M(s,-1),u=j[c]=$[c](s),b=new Se({}),{c(){V(l.$$.fragment),n=N(),e=d("div"),t=d("section"),t.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',r=N(),V(i.$$.fragment),f=N(),V(o.$$.fragment),a=N(),u.c(),m=N(),V(b.$$.fragment),h(t,"class","hero is-small"),h(e,"class",_="container "+(s[6].fluidLayout?"is-fluid":""))},m(g,S){G(l,g,S),k(g,n,S),k(g,e,S),p(e,t),p(e,r),G(i,e,null),p(e,f),G(o,e,null),p(e,a),j[c].m(e,null),k(g,m,S),G(b,g,S),T=!0},p(g,[S]){let O={};S&16&&(O.messages=g[4]),o.$set(O);let K=c;c=M(g,S),c===K?j[c].p(g,S):(F(),z(j[K],1,1,()=>{j[K]=null}),L(),u=j[c],u?u.p(g,S):(u=j[c]=$[c](g),u.c()),v(u,1),u.m(e,null)),(!T||S&64&&_!==(_="container "+(g[6].fluidLayout?"is-fluid":"")))&&h(e,"class",_)},i(g){T||(v(l.$$.fragment,g),v(i.$$.fragment,g),v(o.$$.fragment,g),v(u),v(b.$$.fragment,g),T=!0)},o(g){z(l.$$.fragment,g),z(i.$$.fragment,g),z(o.$$.fragment,g),z(u),z(b.$$.fragment,g),T=!1},d(g){J(l,g),g&&w(n),g&&w(e),J(i),J(o),j[c].d(),g&&w(m),J(b,g)}}}function Pt(s,l,n){let e,t;ie(s,Y,m=>n(1,e=m)),ie(s,Fe,m=>n(6,t=m));let r=null,i=[],f=[],o=0,a="",c={};function u(){for(let m in e.favorites){for(let b in e.favorites[m])(!e.favorites[m][b]||!r[m]||!r[m][b])&&delete e.favorites[m][b];Object.keys(e.favorites[m]).length===0&&delete e.favorites[m]}Y.set(e)}function _(m){n(0,a=m.detail.searchText),c=m.detail.filters}return Oe(()=>Me(void 0,void 0,void 0,function*(){Pe();let m=yield fetch(ke());m.ok?(n(2,r=yield m.json()),Ae(Ie(r)),u()):n(4,f=[...f,"Error while fetching api index: "+m.status])})),Ne(()=>{Re()}),s.$$.update=()=>{if(s.$$.dirty&2)e:n(5,o=Object.values(e.favorites).filter(m=>Object.values(m).filter(b=>b).length).length);if(s.$$.dirty&1)e:a.length>1&&n(3,i=Ee(a))},[a,e,r,i,f,o,t,_]}var _e=class extends ee{constructor(l){super(),x(this,l,Pt,Ht,Z,{})}},bt=_e;new bt({target:document.body});we();

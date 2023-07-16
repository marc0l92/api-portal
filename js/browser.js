// Project: https://github.com/marc0l92/api-portal
import{b as De}from"./chunk-UMJUBFHI.js";import{a as Ee,b as qe,c as Pe,d as ge}from"./chunk-F43KEAJJ.js";import{a as Ve}from"./chunk-GUNJQIHY.js";import{$ as g,A as m,B as ne,C as v,D as b,E,F as d,G as q,H as M,I as K,J as ee,M as _,N as H,O as he,R as fe,T as Ae,W as _e,Y as me,Z as L,_ as z,aa as w,ba as de,ca as W,da as Y,ea as J,fa as te,ga as le,h as G,ha as Be,j as je,ka as Fe,la as ye,m as re,ma as Ce,n as Me,na as Le,o as U,p as Te,r as x,sa as ze,t as oe,ta as Re,y as pe,z as Se}from"./chunk-COUEQVKQ.js";G();G();G();var He="browserOptions",ve={favorites:{},filters:re()},Q=Le(Object.assign({},ve)),ce=null,Ue=()=>{ce||(Q.set(Object.assign({},ve,Ce(He,ve))),ce=Q.subscribe(s=>{ye(He,s)}))},$e=()=>{ce&&ce()};G();function Nt(s){ne(s,"svelte-n6fu33",".search-bar.svelte-n6fu33.svelte-n6fu33{margin-bottom:0}.search-bar.open.svelte-n6fu33 input.svelte-n6fu33,.search-bar.open.svelte-n6fu33 button.svelte-n6fu33{border-bottom-left-radius:0;border-bottom-right-radius:0}.filters-wrapper.svelte-n6fu33.svelte-n6fu33{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 200ms}.filters-wrapper.open.svelte-n6fu33.svelte-n6fu33{grid-template-rows:1fr}.filters-wrapper.svelte-n6fu33 .filters.svelte-n6fu33{color:#4a4a4a;background-color:#fff;margin-top:0;min-height:0;padding-left:1em;padding-right:1em;transition:padding-top 200ms}.filters-wrapper.open.svelte-n6fu33 .filters.svelte-n6fu33{border:1px solid #dbdbdb;border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-top-right-radius:0;padding-top:1em;padding-bottom:1em}.label.svelte-n6fu33.svelte-n6fu33{text-transform:capitalize}.tag.is-small.svelte-n6fu33.svelte-n6fu33{margin-left:0.5em;padding:0 0.5em;border-radius:100em}")}function Ge(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function Ke(s,l,n){let e=s.slice();return e[14]=l[n][0],e[15]=l[n][1],e}function We(s,l,n){let e=s.slice();return e[18]=l[n][0],e[19]=l[n][1],e}function Ye(s){let l,n,e,t,o,i,c,r,a,f=s[4]>0&&Je(s);return{c(){l=d("div"),n=d("button"),e=d("span"),e.innerHTML='<i class="fas fa-filter"></i>',t=M(),o=d("span"),o.textContent="Filters",i=M(),f&&f.c(),_(e,"class","icon is-small"),_(n,"class",c="button "+(s[2]?"is-active":"")+" svelte-n6fu33"),_(l,"class","control")},m(p,h){v(p,l,h),m(l,n),m(n,e),m(n,t),m(n,o),m(n,i),f&&f.m(n,null),r||(a=ee(n,"click",s[8]),r=!0)},p(p,h){p[4]>0?f?f.p(p,h):(f=Je(p),f.c(),f.m(n,null)):f&&(f.d(1),f=null),h&4&&c!==(c="button "+(p[2]?"is-active":"")+" svelte-n6fu33")&&_(n,"class",c)},d(p){p&&b(l),f&&f.d(),r=!1,a()}}}function Je(s){let l,n;return{c(){l=d("span"),n=q(s[4]),_(l,"class","tag is-small is-warning svelte-n6fu33")},m(e,t){v(e,l,t),m(l,n)},p(e,t){t&16&&H(n,e[4])},d(e){e&&b(l)}}}function Qe(s){let l,n=s[18]+"",e,t,o,i;function c(){return s[9](s[10],s[14],s[18])}return{c(){l=d("button"),e=q(n),_(l,"class",t="button "+(s[19]?"is-active is-info":""))},m(r,a){v(r,l,a),m(l,e),o||(i=ee(l,"click",c),o=!0)},p(r,a){s=r,a&1&&n!==(n=s[18]+"")&&H(e,n),a&1&&t!==(t="button "+(s[19]?"is-active is-info":""))&&_(l,"class",t)},d(r){r&&b(l),o=!1,i()}}}function Xe(s){let l,n,e,t=s[14]+"",o,i,c,r,a=Object.entries(s[15]),f=[];for(let p=0;p<a.length;p+=1)f[p]=Qe(We(s,a,p));return{c(){l=d("div"),n=d("div"),e=d("span"),o=q(t),i=M(),c=d("div"),r=d("div");for(let p=0;p<f.length;p+=1)f[p].c();_(e,"class","label svelte-n6fu33"),_(n,"class","field-label is-normal"),_(r,"class","buttons has-addons"),_(c,"class","field-body"),_(l,"class","field is-horizontal")},m(p,h){v(p,l,h),m(l,n),m(n,e),m(e,o),m(l,i),m(l,c),m(c,r);for(let u=0;u<f.length;u+=1)f[u]&&f[u].m(r,null)},p(p,h){if(h&1&&t!==(t=p[14]+"")&&H(o,t),h&65){a=Object.entries(p[15]);let u;for(u=0;u<a.length;u+=1){let I=We(p,a,u);f[u]?f[u].p(I,h):(f[u]=Qe(I),f[u].c(),f[u].m(r,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=a.length}},d(p){p&&b(l),E(f,p)}}}function Ze(s){let l,n,e=s[10]+"",t,o,i,c,r=Object.entries(s[11]),a=[];for(let f=0;f<r.length;f+=1)a[f]=Xe(Ke(s,r,f));return{c(){l=d("div"),n=d("p"),t=q(e),o=M();for(let f=0;f<a.length;f+=1)a[f].c();i=M(),c=d("hr"),_(n,"class","menu-label"),_(l,"class","block")},m(f,p){v(f,l,p),m(l,n),m(n,t),m(l,o);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(l,null);m(l,i),m(l,c)},p(f,p){if(p&1&&e!==(e=f[10]+"")&&H(t,e),p&65){r=Object.entries(f[11]);let h;for(h=0;h<r.length;h+=1){let u=Ke(f,r,h);a[h]?a[h].p(u,p):(a[h]=Xe(u),a[h].c(),a[h].m(l,i))}for(;h<a.length;h+=1)a[h].d(1);a.length=r.length}},d(f){f&&b(l),E(a,f)}}}function jt(s){let l,n,e,t,o,i,c,r,a,f,p,h,u,I,B,N=s[3]&&Ye(s),S=Object.entries(s[0]),F=[];for(let j=0;j<S.length;j+=1)F[j]=Ze(Ge(s,S,j));return{c(){l=d("div"),n=d("div"),e=d("div"),t=d("input"),i=M(),N&&N.c(),r=M(),a=d("div"),f=d("div");for(let j=0;j<F.length;j+=1)F[j].c();p=M(),h=d("button"),h.textContent="Reset filters",_(t,"class","input svelte-n6fu33"),_(t,"type","text"),_(t,"placeholder","Search: package, api title, version, file name"),_(e,"class","control is-expanded"),_(n,"class",c="field has-addons search-bar "+(s[2]?"open":"")+" svelte-n6fu33"),_(h,"class","button is-ghost is-small"),_(f,"class","filters svelte-n6fu33"),_(a,"class",u="filters-wrapper "+(s[2]?"open":"")+" svelte-n6fu33"),_(l,"class","block")},m(j,R){v(j,l,R),m(l,n),m(n,e),m(e,t),he(t,s[1]),m(n,i),N&&N.m(n,null),m(l,r),m(l,a),m(a,f);for(let T=0;T<F.length;T+=1)F[T]&&F[T].m(f,null);m(f,p),m(f,h),I||(B=[ee(t,"input",s[7]),Se(o=Mt.call(null,t)),ee(h,"click",s[5])],I=!0)},p(j,[R]){if(R&2&&t.value!==j[1]&&he(t,j[1]),j[3]?N?N.p(j,R):(N=Ye(j),N.c(),N.m(n,null)):N&&(N.d(1),N=null),R&4&&c!==(c="field has-addons search-bar "+(j[2]?"open":"")+" svelte-n6fu33")&&_(n,"class",c),R&65){S=Object.entries(j[0]);let T;for(T=0;T<S.length;T+=1){let V=Ge(j,S,T);F[T]?F[T].p(V,R):(F[T]=Ze(V),F[T].c(),F[T].m(f,p))}for(;T<F.length;T+=1)F[T].d(1);F.length=S.length}R&4&&u!==(u="filters-wrapper "+(j[2]?"open":"")+" svelte-n6fu33")&&_(a,"class",u)},i:U,o:U,d(j){j&&b(l),N&&N.d(),E(F,j),I=!1,Te(B)}}}function Mt(s){s.focus()}function Tt(s,l,n){let{searchText:e=""}=l,{filters:t}=l,o=!1,i=!1,c=0;function r(){n(0,t=re())}function a(u,I,B){n(0,t[u][I][B]=!t[u][I][B],t)}fe(()=>{n(0,t=re()),n(3,i=Object.keys(t).length>0)});function f(){e=this.value,n(1,e)}let p=()=>n(2,o=!o),h=(u,I,B)=>a(u,I,B);return s.$$set=u=>{"searchText"in u&&n(1,e=u.searchText),"filters"in u&&n(0,t=u.filters)},s.$$.update=()=>{if(s.$$.dirty&17){e:if(t){n(4,c=0);for(let u in t)for(let I in t[u])for(let B in t[u][I])n(4,c+=t[u][I][B]?1:0)}}},[t,e,o,i,c,r,a,f,p,h]}var be=class extends le{constructor(l){super(),te(this,l,Tt,jt,x,{searchText:1,filters:0},Nt)}},xe=be;G();G();function St(s){ne(s,"svelte-czm3hr",".search-match-highlight.svelte-czm3hr{background-color:yellow}")}function et(s,l,n){let e=s.slice();return e[3]=l[n],e}function At(s){let l=s[3].value+"",n;return{c(){n=q(l)},m(e,t){v(e,n,t)},p(e,t){t&1&&l!==(l=e[3].value+"")&&H(n,l)},d(e){e&&b(n)}}}function Bt(s){let l,n=s[3].value+"",e;return{c(){l=d("span"),e=q(n),_(l,"class","search-match-highlight svelte-czm3hr")},m(t,o){v(t,l,o),m(l,e)},p(t,o){o&1&&n!==(n=t[3].value+"")&&H(e,n)},d(t){t&&b(l)}}}function tt(s){let l;function n(o,i){return o[3].highlight?Bt:At}let e=n(s,-1),t=e(s);return{c(){t.c(),l=K()},m(o,i){t.m(o,i),v(o,l,i)},p(o,i){e===(e=n(o,i))&&t?t.p(o,i):(t.d(1),t=e(o),t&&(t.c(),t.m(l.parentNode,l)))},d(o){t.d(o),o&&b(l)}}}function Ft(s){let l,n=s[0],e=[];for(let t=0;t<n.length;t+=1)e[t]=tt(et(s,n,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=K()},m(t,o){for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,o);v(t,l,o)},p(t,[o]){if(o&1){n=t[0];let i;for(i=0;i<n.length;i+=1){let c=et(t,n,i);e[i]?e[i].p(c,o):(e[i]=tt(c),e[i].c(),e[i].m(l.parentNode,l))}for(;i<e.length;i+=1)e[i].d(1);e.length=n.length}},i:U,o:U,d(t){E(e,t),t&&b(l)}}}function yt(s,l,n){let{searchMatch:e=null}=l,t=[];function o(i){n(0,t=[]);let c=0;for(let[r,a]of i.indices)c<r&&t.push({value:i.value.slice(c,r),highlight:!1}),t.push({value:i.value.slice(r,a+1),highlight:!0}),c=a+1;c<i.value.length&&t.push({value:i.value.slice(c),highlight:!1})}return s.$$set=i=>{"searchMatch"in i&&n(1,e=i.searchMatch)},s.$$.update=()=>{if(s.$$.dirty&2)e:o(e)},[t,e]}var ke=class extends le{constructor(l){super(),te(this,l,yt,Ft,x,{searchMatch:1},St)}},we=ke;function Ct(s){ne(s,"svelte-e0gv9o",".card-header-body.svelte-e0gv9o.svelte-e0gv9o{flex-grow:1}.card-header-title.svelte-e0gv9o.svelte-e0gv9o{word-break:break-all}.card-header-icon.svelte-e0gv9o.svelte-e0gv9o{color:var(--color-accent)}.is-tag-size.svelte-e0gv9o.svelte-e0gv9o{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}.tag.status-1.svelte-e0gv9o.svelte-e0gv9o{background-color:#ffe08a;color:white}.tag.status-2.svelte-e0gv9o.svelte-e0gv9o{background-color:#f14668;color:white}.searchMatchLine.svelte-e0gv9o.svelte-e0gv9o:not(:last-child){margin-bottom:0.5em}.searchMatchLine.svelte-e0gv9o.svelte-e0gv9o{font-size:small}.searchMatchLine.svelte-e0gv9o .key.svelte-e0gv9o{font-weight:bold}")}function lt(s,l,n){let e=s.slice();return e[10]=l[n],e}function it(s,l,n){let e=s.slice();return e[13]=l[n][0],e[14]=l[n][1],e}function nt(s){let l,n,e,t,o,i,c,r,a,f,p,h,u,I,B,N,S,F,j=Object.keys(s[0].otherVersions).length>ct,R,T,V,se,k=[zt,Lt],A=[];function ie(O,D){return O[3]?0:1}o=ie(s,-1),i=A[o]=k[o](s);let X=Object.entries(s[0].otherVersions).slice(0,s[2]?void 0:5),y=[];for(let O=0;O<X.length;O+=1)y[O]=st(it(s,X,O));let P=j&&rt(s),C=s[1].length>0&&ot(s);return{c(){l=d("div"),n=d("header"),e=d("a"),t=d("p"),i.c(),r=M(),a=d("button"),f=d("span"),p=d("i"),u=M(),I=d("div"),B=d("div"),N=d("div"),S=d("div");for(let O=0;O<y.length;O+=1)y[O].c();F=M(),P&&P.c(),R=M(),C&&C.c(),_(t,"class","card-header-title svelte-e0gv9o"),_(e,"class","card-header-body svelte-e0gv9o"),_(e,"href",c=s[5]+"/viewer.html?api="+s[0].hash),_(p,"class",h=(s[4].favorites[s[0].packageName]&&s[4].favorites[s[0].packageName][s[0].apiName]?"fas":"far")+" fa-star"),_(f,"class","icon"),_(a,"class","card-header-icon svelte-e0gv9o"),_(n,"class","card-header"),_(S,"class","column"),_(N,"class","columns is-multiline"),_(B,"class","content"),_(I,"class","card-content"),_(l,"class","card")},m(O,D){v(O,l,D),m(l,n),m(n,e),m(e,t),A[o].m(t,null),m(n,r),m(n,a),m(a,f),m(f,p),m(l,u),m(l,I),m(I,B),m(B,N),m(N,S);for(let Z=0;Z<y.length;Z+=1)y[Z]&&y[Z].m(S,null);m(S,F),P&&P.m(S,null),m(B,R),C&&C.m(B,null),T=!0,V||(se=ee(a,"click",s[6]),V=!0)},p(O,D){let Z=o;if(o=ie(O,D),o===Z?A[o].p(O,D):(L(),w(A[Z],1,1,()=>{A[Z]=null}),z(),i=A[o],i?i.p(O,D):(i=A[o]=k[o](O),i.c()),g(i,1),i.m(t,null)),(!T||D&1&&c!==(c=O[5]+"/viewer.html?api="+O[0].hash))&&_(e,"href",c),(!T||D&17&&h!==(h=(O[4].favorites[O[0].packageName]&&O[4].favorites[O[0].packageName][O[0].apiName]?"fas":"far")+" fa-star"))&&_(p,"class",h),D&165){X=Object.entries(O[0].otherVersions).slice(0,O[2]?void 0:5);let $;for($=0;$<X.length;$+=1){let Ne=it(O,X,$);y[$]?y[$].p(Ne,D):(y[$]=st(Ne),y[$].c(),y[$].m(S,F))}for(;$<y.length;$+=1)y[$].d(1);y.length=X.length}D&1&&(j=Object.keys(O[0].otherVersions).length>ct),j?P?P.p(O,D):(P=rt(O),P.c(),P.m(S,null)):P&&(P.d(1),P=null),O[1].length>0?C?(C.p(O,D),D&2&&g(C,1)):(C=ot(O),C.c(),g(C,1),C.m(B,null)):C&&(L(),w(C,1,1,()=>{C=null}),z())},i(O){T||(g(i),g(C),T=!0)},o(O){w(i),w(C),T=!1},d(O){O&&b(l),A[o].d(),E(y,O),P&&P.d(),C&&C.d(),V=!1,se()}}}function Lt(s){let l=s[0].apiName+"",n;return{c(){n=q(l)},m(e,t){v(e,n,t)},p(e,t){t&1&&l!==(l=e[0].apiName+"")&&H(n,l)},i:U,o:U,d(e){e&&b(n)}}}function zt(s){let l,n;return l=new we({props:{searchMatch:s[3]}}),{c(){W(l.$$.fragment)},m(e,t){Y(l,e,t),n=!0},p(e,t){let o={};t&8&&(o.searchMatch=e[3]),l.$set(o)},i(e){n||(g(l.$$.fragment,e),n=!0)},o(e){w(l.$$.fragment,e),n=!1},d(e){J(l,e)}}}function st(s){let l,n=s[13]+"",e,t,o;return{c(){l=d("a"),e=q(n),_(l,"class",t="tag ml-1 mb-1 "+s[7](s[14])+" svelte-e0gv9o"),_(l,"href",o=s[5]+"/viewer.html?api="+s[14])},m(i,c){v(i,l,c),m(l,e)},p(i,c){c&5&&n!==(n=i[13]+"")&&H(e,n),c&5&&t!==(t="tag ml-1 mb-1 "+i[7](i[14])+" svelte-e0gv9o")&&_(l,"class",t),c&5&&o!==(o=i[5]+"/viewer.html?api="+i[14])&&_(l,"href",o)},d(i){i&&b(l)}}}function rt(s){let l,n,e,t,o;return{c(){l=d("button"),n=d("i"),_(n,"class",e="fas fa-angle-"+(s[2]?"left":"right")),_(l,"class","button is-white is-small is-tag-size svelte-e0gv9o")},m(i,c){v(i,l,c),m(l,n),t||(o=ee(l,"click",s[9]),t=!0)},p(i,c){c&4&&e!==(e="fas fa-angle-"+(i[2]?"left":"right"))&&_(n,"class",e)},d(i){i&&b(l),t=!1,o()}}}function ot(s){let l,n,e=s[1],t=[];for(let i=0;i<e.length;i+=1)t[i]=ft(lt(s,e,i));let o=i=>w(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();l=K()},m(i,c){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,c);v(i,l,c),n=!0},p(i,c){if(c&2){e=i[1];let r;for(r=0;r<e.length;r+=1){let a=lt(i,e,r);t[r]?(t[r].p(a,c),g(t[r],1)):(t[r]=ft(a),t[r].c(),g(t[r],1),t[r].m(l.parentNode,l))}for(L(),r=e.length;r<t.length;r+=1)o(r);z()}},i(i){if(!n){for(let c=0;c<e.length;c+=1)g(t[c]);n=!0}},o(i){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)w(t[c]);n=!1},d(i){E(t,i),i&&b(l)}}}function at(s){let l,n,e=s[10].key+"",t,o,i,c,r,a;return c=new we({props:{searchMatch:s[10]}}),{c(){l=d("p"),n=d("span"),t=q(e),o=q(":"),i=M(),W(c.$$.fragment),r=M(),_(n,"class","key svelte-e0gv9o"),_(l,"class","searchMatchLine svelte-e0gv9o")},m(f,p){v(f,l,p),m(l,n),m(n,t),m(n,o),m(l,i),Y(c,l,null),m(l,r),a=!0},p(f,p){(!a||p&2)&&e!==(e=f[10].key+"")&&H(t,e);let h={};p&2&&(h.searchMatch=f[10]),c.$set(h)},i(f){a||(g(c.$$.fragment,f),a=!0)},o(f){w(c.$$.fragment,f),a=!1},d(f){f&&b(l),J(c)}}}function ft(s){let l,n,e=s[10].key!=="apiName"&&at(s);return{c(){e&&e.c(),l=K()},m(t,o){e&&e.m(t,o),v(t,l,o),n=!0},p(t,o){t[10].key!=="apiName"?e?(e.p(t,o),o&2&&g(e,1)):(e=at(t),e.c(),g(e,1),e.m(l.parentNode,l)):e&&(L(),w(e,1,1,()=>{e=null}),z())},i(t){n||(g(e),n=!0)},o(t){w(e),n=!1},d(t){e&&e.d(t),t&&b(l)}}}function Rt(s){let l,n,e=s[0]&&nt(s);return{c(){e&&e.c(),l=K()},m(t,o){e&&e.m(t,o),v(t,l,o),n=!0},p(t,[o]){t[0]?e?(e.p(t,o),o&1&&g(e,1)):(e=nt(t),e.c(),g(e,1),e.m(l.parentNode,l)):e&&(L(),w(e,1,1,()=>{e=null}),z())},i(t){n||(g(e),n=!0)},o(t){w(e),n=!1},d(t){e&&e.d(t),t&&b(l)}}}var ct=8;function Vt(s,l,n){let e;oe(s,Q,u=>n(4,e=u));let t=je(),{apiIndex:o}=l,{apiIndexItem:i}=l,{searchMatches:c=[]}=l,r=!1,a=null;function f(){e.favorites[i.packageName]||pe(Q,e.favorites[i.packageName]={},e),pe(Q,e.favorites[i.packageName][i.apiName]=!e.favorites[i.packageName][i.apiName],e)}function p(u){let I=o.getApi(u);return`status-${Object.values(I.otherFiles).map(N=>o.getApi(N).status).reduce((N,S)=>Math.max(N,S))}`}let h=()=>n(2,r=!r);return s.$$set=u=>{"apiIndex"in u&&n(8,o=u.apiIndex),"apiIndexItem"in u&&n(0,i=u.apiIndexItem),"searchMatches"in u&&n(1,c=u.searchMatches)},s.$$.update=()=>{if(s.$$.dirty&2)e:n(3,a=c.find(u=>u.key==="apiName")||null)},[i,c,r,a,e,t,f,p,o,h]}var Oe=class extends le{constructor(l){super(),te(this,l,Vt,Rt,x,{apiIndex:8,apiIndexItem:0,searchMatches:1},Ct)}},ue=Oe;function ut(s,l,n){let e=s.slice();return e[24]=l[n],e}function pt(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function ht(s,l,n){let e=s.slice();return e[14]=l[n][0],e[15]=l[n][1],e}function _t(s,l,n){let e=s.slice();return e[10]=l[n][0],e[11]=l[n][1],e}function mt(s,l,n){let e=s.slice();return e[20]=l[n][0],e[21]=l[n][1],e}function Et(s){let l;return{c(){l=d("div"),l.textContent="Fetching api index...",_(l,"class","box")},m(n,e){v(n,l,e)},p:U,i:U,o:U,d(n){n&&b(l)}}}function qt(s){let l,n,e,t,o=[Dt,Pt],i=[];function c(r,a){return!r[0]||r[0].length<2?0:1}return l=c(s,-1),n=i[l]=o[l](s),{c(){n.c(),e=K()},m(r,a){i[l].m(r,a),v(r,e,a),t=!0},p(r,a){let f=l;l=c(r,a),l===f?i[l].p(r,a):(L(),w(i[f],1,1,()=>{i[f]=null}),z(),n=i[l],n?n.p(r,a):(n=i[l]=o[l](r),n.c()),g(n,1),n.m(e.parentNode,e))},i(r){t||(g(n),t=!0)},o(r){w(n),t=!1},d(r){i[l].d(r),r&&b(e)}}}function Pt(s){let l,n,e=s[3],t=[];for(let i=0;i<e.length;i+=1)t[i]=dt(ut(s,e,i));let o=i=>w(t[i],1,1,()=>{t[i]=null});return{c(){l=d("div");for(let i=0;i<t.length;i+=1)t[i].c();_(l,"class","columns is-multiline")},m(i,c){v(i,l,c);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(l,null);n=!0},p(i,c){if(c&12){e=i[3];let r;for(r=0;r<e.length;r+=1){let a=ut(i,e,r);t[r]?(t[r].p(a,c),g(t[r],1)):(t[r]=dt(a),t[r].c(),g(t[r],1),t[r].m(l,null))}for(L(),r=e.length;r<t.length;r+=1)o(r);z()}},i(i){if(!n){for(let c=0;c<e.length;c+=1)g(t[c]);n=!0}},o(i){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)w(t[c]);n=!1},d(i){i&&b(l),E(t,i)}}}function Dt(s){let l,n,e,t=s[5]>0&&gt(s),o=Object.entries(ge(s[2],s[1].filters)),i=[];for(let r=0;r<o.length;r+=1)i[r]=Ot(pt(s,o,r));let c=r=>w(i[r],1,1,()=>{i[r]=null});return{c(){t&&t.c(),l=M();for(let r=0;r<i.length;r+=1)i[r].c();n=K()},m(r,a){t&&t.m(r,a),v(r,l,a);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(r,a);v(r,n,a),e=!0},p(r,a){if(r[5]>0?t?(t.p(r,a),a&32&&g(t,1)):(t=gt(r),t.c(),g(t,1),t.m(l.parentNode,l)):t&&(L(),w(t,1,1,()=>{t=null}),z()),a&6){o=Object.entries(ge(r[2],r[1].filters));let f;for(f=0;f<o.length;f+=1){let p=pt(r,o,f);i[f]?(i[f].p(p,a),g(i[f],1)):(i[f]=Ot(p),i[f].c(),g(i[f],1),i[f].m(n.parentNode,n))}for(L(),f=o.length;f<i.length;f+=1)c(f);z()}},i(r){if(!e){g(t);for(let a=0;a<o.length;a+=1)g(i[a]);e=!0}},o(r){w(t),i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)w(i[a]);e=!1},d(r){t&&t.d(r),r&&b(l),E(i,r),r&&b(n)}}}function dt(s){let l,n,e,t;return n=new ue({props:{apiIndex:s[2],apiIndexItem:s[24].item,searchMatches:s[24].matches}}),{c(){l=d("div"),W(n.$$.fragment),e=M(),_(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(o,i){v(o,l,i),Y(n,l,null),m(l,e),t=!0},p(o,i){let c={};i&4&&(c.apiIndex=o[2]),i&8&&(c.apiIndexItem=o[24].item),i&8&&(c.searchMatches=o[24].matches),n.$set(c)},i(o){t||(g(n.$$.fragment,o),t=!0)},o(o){w(n.$$.fragment,o),t=!1},d(o){o&&b(l),J(n)}}}function gt(s){let l,n,e,t,o=Object.entries(s[1].favorites),i=[];for(let r=0;r<o.length;r+=1)i[r]=kt(_t(s,o,r));let c=r=>w(i[r],1,1,()=>{i[r]=null});return{c(){l=d("h4"),l.innerHTML='<i class="fas fa-star"></i> Favorites',n=M(),e=d("div");for(let r=0;r<i.length;r+=1)i[r].c();_(l,"class","subtitle is-4"),_(e,"class","columns is-multiline")},m(r,a){v(r,l,a),v(r,n,a),v(r,e,a);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(e,null);t=!0},p(r,a){if(a&6){o=Object.entries(r[1].favorites);let f;for(f=0;f<o.length;f+=1){let p=_t(r,o,f);i[f]?(i[f].p(p,a),g(i[f],1)):(i[f]=kt(p),i[f].c(),g(i[f],1),i[f].m(e,null))}for(L(),f=o.length;f<i.length;f+=1)c(f);z()}},i(r){if(!t){for(let a=0;a<o.length;a+=1)g(i[a]);t=!0}},o(r){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)w(i[a]);t=!1},d(r){r&&b(l),r&&b(n),r&&b(e),E(i,r)}}}function vt(s){let l,n,e,t;return n=new ue({props:{apiIndex:s[2],apiIndexItem:s[2].getApiByName(s[10],s[20])}}),{c(){l=d("div"),W(n.$$.fragment),e=M(),_(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(o,i){v(o,l,i),Y(n,l,null),m(l,e),t=!0},p(o,i){let c={};i&4&&(c.apiIndex=o[2]),i&6&&(c.apiIndexItem=o[2].getApiByName(o[10],o[20])),n.$set(c)},i(o){t||(g(n.$$.fragment,o),t=!0)},o(o){w(n.$$.fragment,o),t=!1},d(o){o&&b(l),J(n)}}}function bt(s){let l,n,e=s[21]&&vt(s);return{c(){e&&e.c(),l=K()},m(t,o){e&&e.m(t,o),v(t,l,o),n=!0},p(t,o){t[21]?e?(e.p(t,o),o&2&&g(e,1)):(e=vt(t),e.c(),g(e,1),e.m(l.parentNode,l)):e&&(L(),w(e,1,1,()=>{e=null}),z())},i(t){n||(g(e),n=!0)},o(t){w(e),n=!1},d(t){e&&e.d(t),t&&b(l)}}}function kt(s){let l,n,e=Object.entries(s[11]),t=[];for(let i=0;i<e.length;i+=1)t[i]=bt(mt(s,e,i));let o=i=>w(t[i],1,1,()=>{t[i]=null});return{c(){for(let i=0;i<t.length;i+=1)t[i].c();l=K()},m(i,c){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,c);v(i,l,c),n=!0},p(i,c){if(c&6){e=Object.entries(i[11]);let r;for(r=0;r<e.length;r+=1){let a=mt(i,e,r);t[r]?(t[r].p(a,c),g(t[r],1)):(t[r]=bt(a),t[r].c(),g(t[r],1),t[r].m(l.parentNode,l))}for(L(),r=e.length;r<t.length;r+=1)o(r);z()}},i(i){if(!n){for(let c=0;c<e.length;c+=1)g(t[c]);n=!0}},o(i){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)w(t[c]);n=!1},d(i){E(t,i),i&&b(l)}}}function wt(s){let l,n,e;return n=new ue({props:{apiIndex:s[2],apiIndexItem:s[2].getApi(s[15])}}),{c(){l=d("div"),W(n.$$.fragment),_(l,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(t,o){v(t,l,o),Y(n,l,null),e=!0},p(t,o){let i={};o&4&&(i.apiIndex=t[2]),o&6&&(i.apiIndexItem=t[2].getApi(t[15])),n.$set(i)},i(t){e||(g(n.$$.fragment,t),e=!0)},o(t){w(n.$$.fragment,t),e=!1},d(t){t&&b(l),J(n)}}}function Ot(s){let l,n=s[10]+"",e,t,o,i,c,r=Object.entries(s[11]),a=[];for(let p=0;p<r.length;p+=1)a[p]=wt(ht(s,r,p));let f=p=>w(a[p],1,1,()=>{a[p]=null});return{c(){l=d("h4"),e=q(n),t=M(),o=d("div");for(let p=0;p<a.length;p+=1)a[p].c();i=M(),_(l,"class","subtitle is-4"),_(o,"class","columns is-multiline")},m(p,h){v(p,l,h),m(l,e),v(p,t,h),v(p,o,h);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(o,null);m(o,i),c=!0},p(p,h){if((!c||h&6)&&n!==(n=p[10]+"")&&H(e,n),h&6){r=Object.entries(p[11]);let u;for(u=0;u<r.length;u+=1){let I=ht(p,r,u);a[u]?(a[u].p(I,h),g(a[u],1)):(a[u]=wt(I),a[u].c(),g(a[u],1),a[u].m(o,i))}for(L(),u=r.length;u<a.length;u+=1)f(u);z()}},i(p){if(!c){for(let h=0;h<r.length;h+=1)g(a[h]);c=!0}},o(p){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)w(a[h]);c=!1},d(p){p&&b(l),p&&b(t),p&&b(o),E(a,p)}}}function Ht(s){let l,n,e,t,o,i,c,r,a,f,p,h,u,I,B,N,S;l=new Re({props:{activePage:"browser"}});function F(k){s[7](k)}function j(k){s[8](k)}let R={};s[0]!==void 0&&(R.searchText=s[0]),s[1].filters!==void 0&&(R.filters=s[1].filters),i=new xe({props:R}),_e.push(()=>de(i,"searchText",F)),_e.push(()=>de(i,"filters",j)),f=new Ve({props:{errors:s[4]}});let T=[qt,Et],V=[];function se(k,A){return k[2]?0:1}return h=se(s,-1),u=V[h]=T[h](s),N=new Be({}),{c(){W(l.$$.fragment),n=M(),e=d("div"),t=d("section"),t.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',o=M(),W(i.$$.fragment),a=M(),W(f.$$.fragment),p=M(),u.c(),B=M(),W(N.$$.fragment),_(t,"class","hero is-small"),_(e,"class",I="container "+(s[6].fluidLayout?"is-fluid":""))},m(k,A){Y(l,k,A),v(k,n,A),v(k,e,A),m(e,t),m(e,o),Y(i,e,null),m(e,a),Y(f,e,null),m(e,p),V[h].m(e,null),v(k,B,A),Y(N,k,A),S=!0},p(k,[A]){let ie={};!c&&A&1&&(c=!0,ie.searchText=k[0],me(()=>c=!1)),!r&&A&2&&(r=!0,ie.filters=k[1].filters,me(()=>r=!1)),i.$set(ie);let X={};A&16&&(X.errors=k[4]),f.$set(X);let y=h;h=se(k,A),h===y?V[h].p(k,A):(L(),w(V[y],1,1,()=>{V[y]=null}),z(),u=V[h],u?u.p(k,A):(u=V[h]=T[h](k),u.c()),g(u,1),u.m(e,null)),(!S||A&64&&I!==(I="container "+(k[6].fluidLayout?"is-fluid":"")))&&_(e,"class",I)},i(k){S||(g(l.$$.fragment,k),g(i.$$.fragment,k),g(f.$$.fragment,k),g(u),g(N.$$.fragment,k),S=!0)},o(k){w(l.$$.fragment,k),w(i.$$.fragment,k),w(f.$$.fragment,k),w(u),w(N.$$.fragment,k),S=!1},d(k){J(l,k),k&&b(n),k&&b(e),J(i),J(f),V[h].d(),k&&b(B),J(N,k)}}}function Ut(s,l,n){let e,t;oe(s,Q,u=>n(1,e=u)),oe(s,ze,u=>n(6,t=u));let o=null,i=[],c=[],r=0,a="";function f(){for(let u in e.favorites){for(let I in e.favorites[u])(!e.favorites[u][I]||!o.getApiByName(u,I))&&delete e.favorites[u][I];Object.keys(e.favorites[u]).length===0&&delete e.favorites[u]}Q.set(e)}fe(()=>Fe(void 0,void 0,void 0,function*(){Ue();try{n(2,o=yield De.fetch()),Ee(o),f()}catch(u){n(4,c=[...c,u])}})),Ae(()=>{$e()});function p(u){a=u,n(0,a)}function h(u){s.$$.not_equal(e.filters,u)&&(e.filters=u,Q.set(e))}return s.$$.update=()=>{if(s.$$.dirty&2)e:n(5,r=Object.values(e.favorites).filter(u=>Object.values(u).filter(I=>I).length).length);if(s.$$.dirty&3)e:a.length>1&&n(3,i=Pe(qe(a),e.filters))},[a,e,o,i,c,r,t,p,h]}var Ie=class extends le{constructor(l){super(),te(this,l,Ut,Ht,x,{})}},It=Ie;new It({target:document.body});Me();

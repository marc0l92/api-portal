// Project: https://github.com/marc0l92/api-portal
import{d as ie}from"./chunk-OZCPK6WI.js";import{a as ye}from"./chunk-CE3XDMDN.js";import{$ as V,A as Z,B as z,C as O,D as E,E as d,F as D,G as T,H as W,I as H,L as _,M as P,N as se,Q as _e,S as he,T as de,X as q,Y as U,Z as y,_ as C,aa as G,ba as J,ca as Y,da as Q,ea as ve,h as I,ha as be,ia as ge,j as ce,ja as ke,k as ue,ka as we,m as te,n as pe,o as M,p as me,pa as ze,qa as Oe,r as K,t as X,y as le,z as h}from"./chunk-ZJU6JUCR.js";I();I();I();I();var je="browserOptions",Se={favorites:{}},R=we(Object.assign({},Se)),x=null,Ne=()=>{x||(R.set(ke(je,Se)),x=R.subscribe(n=>{ge(je,n)}))},Te=()=>{x&&x()};function xe(n){Z(n,"svelte-vtk06y",".card-header-body.svelte-vtk06y{flex-grow:1}.card-header-title.svelte-vtk06y{word-break:break-all}.card-header-icon.svelte-vtk06y{color:var(--color-accent)}.is-tag-size.svelte-vtk06y{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}.tag.status-1.svelte-vtk06y{background-color:#ffe08a;color:white}.tag.status-2.svelte-vtk06y{background-color:#f14668;color:white}")}function Ce(n,t,l){let e=n.slice();return e[9]=t[l][0],e[10]=t[l][1],e}function Fe(n){let t,l,e,i,f,s,p,o,r,a,c,u,m,j,S,N,k,g=Object.keys(n[2]).length>Ae,v,b,A=Object.entries(n[2]).slice(0,n[4]?void 0:5),F=[];for(let w=0;w<A.length;w+=1)F[w]=Be(Ce(n,A,w));let L=g&&Le(n);return{c(){t=d("div"),l=d("header"),e=d("a"),i=d("p"),f=D(n[1]),p=T(),o=d("button"),r=d("span"),a=d("i"),u=T(),m=d("div"),j=d("div"),S=d("div"),N=d("div");for(let w=0;w<F.length;w+=1)F[w].c();k=T(),L&&L.c(),_(i,"class","card-header-title svelte-vtk06y"),_(e,"class","card-header-body svelte-vtk06y"),_(e,"href",s=n[6]+"/viewer.html?api="+n[3]),_(a,"class",c=(n[5].favorites[n[0]]&&n[5].favorites[n[0]][n[1]]?"fas":"far")+" fa-star"),_(r,"class","icon"),_(o,"class","card-header-icon svelte-vtk06y"),_(l,"class","card-header"),_(N,"class","column"),_(S,"class","columns is-multiline"),_(j,"class","content"),_(m,"class","card-content"),_(t,"class","card")},m(w,$){z(w,t,$),h(t,l),h(l,e),h(e,i),h(i,f),h(l,p),h(l,o),h(o,r),h(r,a),h(t,u),h(t,m),h(m,j),h(j,S),h(S,N);for(let B=0;B<F.length;B+=1)F[B]&&F[B].m(N,null);h(N,k),L&&L.m(N,null),v||(b=H(o,"click",n[7]),v=!0)},p(w,$){if($&2&&P(f,w[1]),$&8&&s!==(s=w[6]+"/viewer.html?api="+w[3])&&_(e,"href",s),$&35&&c!==(c=(w[5].favorites[w[0]]&&w[5].favorites[w[0]][w[1]]?"fas":"far")+" fa-star")&&_(a,"class",c),$&84){A=Object.entries(w[2]).slice(0,w[4]?void 0:5);let B;for(B=0;B<A.length;B+=1){let fe=Ce(w,A,B);F[B]?F[B].p(fe,$):(F[B]=Be(fe),F[B].c(),F[B].m(N,k))}for(;B<F.length;B+=1)F[B].d(1);F.length=A.length}$&4&&(g=Object.keys(w[2]).length>Ae),g?L?L.p(w,$):(L=Le(w),L.c(),L.m(N,null)):L&&(L.d(1),L=null)},d(w){w&&O(t),E(F,w),L&&L.d(),v=!1,b()}}}function Be(n){let t,l=n[9]+"",e,i,f;return{c(){t=d("a"),e=D(l),_(t,"class",i="tag ml-1 mb-1 "+Ee(n[10])+" svelte-vtk06y"),_(t,"href",f=n[6]+"/viewer.html?api="+Object.values(n[10])[0].hash)},m(s,p){z(s,t,p),h(t,e)},p(s,p){p&20&&l!==(l=s[9]+"")&&P(e,l),p&20&&i!==(i="tag ml-1 mb-1 "+Ee(s[10])+" svelte-vtk06y")&&_(t,"class",i),p&20&&f!==(f=s[6]+"/viewer.html?api="+Object.values(s[10])[0].hash)&&_(t,"href",f)},d(s){s&&O(t)}}}function Le(n){let t,l,e,i,f;return{c(){t=d("button"),l=d("i"),_(l,"class",e="fas fa-angle-"+(n[4]?"left":"right")),_(t,"class","button is-white is-small is-tag-size svelte-vtk06y")},m(s,p){z(s,t,p),h(t,l),i||(f=H(t,"click",n[8]),i=!0)},p(s,p){p&16&&e!==(e="fas fa-angle-"+(s[4]?"left":"right"))&&_(l,"class",e)},d(s){s&&O(t),i=!1,f()}}}function et(n){let t,l=n[2]&&Fe(n);return{c(){l&&l.c(),t=W()},m(e,i){l&&l.m(e,i),z(e,t,i)},p(e,[i]){e[2]?l?l.p(e,i):(l=Fe(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:M,o:M,d(e){l&&l.d(e),e&&O(t)}}}var Ae=8;function Ee(n){return`status-${Object.values(n).map(l=>l.status).reduce((l,e)=>Math.max(l,e))}`}function tt(n,t,l){let e;X(n,R,u=>l(5,e=u));let i=ce(),{packageName:f=null}=t,{name:s=null}=t,{apiSummary:p=null}=t,o="",r=!1;function a(){console.log(JSON.stringify(e)),e.favorites[f]||le(R,e.favorites[f]={},e),le(R,e.favorites[f][s]=!e.favorites[f][s],e)}let c=()=>l(4,r=!r);return n.$$set=u=>{"packageName"in u&&l(0,f=u.packageName),"name"in u&&l(1,s=u.name),"apiSummary"in u&&l(2,p=u.apiSummary)},n.$$.update=()=>{if(n.$$.dirty&4){e:if(p){let u=Object.keys(p)[0];l(3,o=Object.values(p[u])[0].hash)}}},[f,s,p,o,r,e,i,a,c]}var oe=class extends Q{constructor(t){super(),Y(this,t,tt,et,K,{packageName:0,name:1,apiSummary:2},xe)}},ne=oe;I();function lt(n){Z(n,"svelte-gywzoz",".search-bar.svelte-gywzoz.svelte-gywzoz{margin-bottom:0}.search-bar.open.svelte-gywzoz input.svelte-gywzoz,.search-bar.open.svelte-gywzoz button.svelte-gywzoz{border-bottom-left-radius:0;border-bottom-right-radius:0}.filters-wrapper.svelte-gywzoz.svelte-gywzoz{display:grid;grid-template-rows:0fr;overflow:hidden;transition:grid-template-rows 200ms}.filters-wrapper.open.svelte-gywzoz.svelte-gywzoz{grid-template-rows:1fr}.filters-wrapper.svelte-gywzoz .filters.svelte-gywzoz{color:#4a4a4a;background-color:#fff;margin-top:0;min-height:0;padding-left:1em;padding-right:1em;transition:padding-top 200ms}.filters-wrapper.open.svelte-gywzoz .filters.svelte-gywzoz{border:1px solid #dbdbdb;border-top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:0;border-top-right-radius:0;padding-top:1em;padding-bottom:1em}.label.svelte-gywzoz.svelte-gywzoz{text-transform:capitalize}")}function Ie(n,t,l){let e=n.slice();return e[11]=t[l][0],e[12]=t[l][1],e}function Me(n,t,l){let e=n.slice();return e[15]=t[l][0],e[16]=t[l][1],e}function $e(n,t,l){let e=n.slice();return e[19]=t[l][0],e[20]=t[l][1],e}function st(n){let t,l,e,i,f,s,p,o;return{c(){t=d("div"),l=d("button"),e=d("span"),e.innerHTML='<i class="fas fa-filter"></i>',i=T(),f=d("span"),f.textContent="Filters",_(e,"class","icon is-small"),_(l,"class",s="button "+(n[1]?"is-active":"")+" svelte-gywzoz"),_(t,"class","control")},m(r,a){z(r,t,a),h(t,l),h(l,e),h(l,i),h(l,f),p||(o=H(l,"click",n[8]),p=!0)},p(r,a){a&2&&s!==(s="button "+(r[1]?"is-active":"")+" svelte-gywzoz")&&_(l,"class",s)},d(r){r&&O(t),p=!1,o()}}}function De(n){let t,l=n[19]+"",e,i,f,s;function p(){return n[9](n[11],n[15],n[19])}return{c(){t=d("button"),e=D(l),_(t,"class",i="button "+(n[20]?"is-active is-info":""))},m(o,r){z(o,t,r),h(t,e),f||(s=H(t,"click",p),f=!0)},p(o,r){n=o,r&4&&l!==(l=n[19]+"")&&P(e,l),r&4&&i!==(i="button "+(n[20]?"is-active is-info":""))&&_(t,"class",i)},d(o){o&&O(t),f=!1,s()}}}function He(n){let t,l,e,i=n[15]+"",f,s,p,o,r=Object.entries(n[16]),a=[];for(let c=0;c<r.length;c+=1)a[c]=De($e(n,r,c));return{c(){t=d("div"),l=d("div"),e=d("span"),f=D(i),s=T(),p=d("div"),o=d("div");for(let c=0;c<a.length;c+=1)a[c].c();_(e,"class","label svelte-gywzoz"),_(l,"class","field-label is-normal"),_(o,"class","buttons has-addons"),_(p,"class","field-body"),_(t,"class","field is-horizontal")},m(c,u){z(c,t,u),h(t,l),h(l,e),h(e,f),h(t,s),h(t,p),h(p,o);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(o,null)},p(c,u){if(u&4&&i!==(i=c[15]+"")&&P(f,i),u&36){r=Object.entries(c[16]);let m;for(m=0;m<r.length;m+=1){let j=$e(c,r,m);a[m]?a[m].p(j,u):(a[m]=De(j),a[m].c(),a[m].m(o,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=r.length}},d(c){c&&O(t),E(a,c)}}}function Pe(n){let t,l,e=n[11]+"",i,f,s,p,o=Object.entries(n[12]),r=[];for(let a=0;a<o.length;a+=1)r[a]=He(Me(n,o,a));return{c(){t=d("div"),l=d("p"),i=D(e),f=T();for(let a=0;a<r.length;a+=1)r[a].c();s=T(),p=d("hr"),_(l,"class","menu-label"),_(t,"class","block")},m(a,c){z(a,t,c),h(t,l),h(l,i),h(t,f);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(t,null);h(t,s),h(t,p)},p(a,c){if(c&4&&e!==(e=a[11]+"")&&P(i,e),c&36){o=Object.entries(a[12]);let u;for(u=0;u<o.length;u+=1){let m=Me(a,o,u);r[u]?r[u].p(m,c):(r[u]=He(m),r[u].c(),r[u].m(t,s))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length}},d(a){a&&O(t),E(r,a)}}}function it(n){let t,l,e,i,f,s,p,o,r,a,c,u,m,j,S=n[3]&&st(n),N=Object.entries(n[2]),k=[];for(let g=0;g<N.length;g+=1)k[g]=Pe(Ie(n,N,g));return{c(){t=d("div"),l=d("div"),e=d("div"),i=d("input"),f=T(),S&&S.c(),p=T(),o=d("div"),r=d("div");for(let g=0;g<k.length;g+=1)k[g].c();a=T(),c=d("button"),c.textContent="Reset filters",_(i,"class","input svelte-gywzoz"),_(i,"type","text"),_(i,"placeholder","Search"),_(e,"class","control is-expanded"),_(l,"class",s="field has-addons search-bar "+(n[1]?"open":"")+" svelte-gywzoz"),_(c,"class","button is-ghost is-small"),_(r,"class","filters svelte-gywzoz"),_(o,"class",u="filters-wrapper "+(n[1]?"open":"")+" svelte-gywzoz"),_(t,"class","block")},m(g,v){z(g,t,v),h(t,l),h(l,e),h(e,i),se(i,n[0]),h(l,f),S&&S.m(l,null),h(t,p),h(t,o),h(o,r);for(let b=0;b<k.length;b+=1)k[b]&&k[b].m(r,null);h(r,a),h(r,c),m||(j=[H(i,"input",n[7]),H(i,"input",n[6]),H(c,"click",n[4])],m=!0)},p(g,[v]){if(v&1&&i.value!==g[0]&&se(i,g[0]),g[3]&&S.p(g,v),v&2&&s!==(s="field has-addons search-bar "+(g[1]?"open":"")+" svelte-gywzoz")&&_(l,"class",s),v&36){N=Object.entries(g[2]);let b;for(b=0;b<N.length;b+=1){let A=Ie(g,N,b);k[b]?k[b].p(A,v):(k[b]=Pe(A),k[b].c(),k[b].m(r,a))}for(;b<k.length;b+=1)k[b].d(1);k.length=N.length}v&2&&u!==(u="filters-wrapper "+(g[1]?"open":"")+" svelte-gywzoz")&&_(o,"class",u)},i:M,o:M,d(g){g&&O(t),S&&S.d(),E(k,g),m=!1,me(j)}}}function ot(n,t,l){let e="",i=!1,f=te(),s=Object.keys(f).length>0;function p(){l(2,f=te()),a()}function o(j,S,N){l(2,f[j][S][N]=!f[j][S][N],f),a()}let r=de();function a(){r("searchTextChange",{searchText:e,filters:f})}function c(){e=this.value,l(0,e)}return[e,i,f,s,p,o,a,c,()=>l(1,i=!i),(j,S,N)=>o(j,S,N)]}var re=class extends Q{constructor(t){super(),Y(this,t,ot,it,K,{},lt)}},Re=re;function qe(n,t,l){let e=n.slice();return e[9]=t[l][0],e[10]=t[l][1],e}function Ue(n,t,l){let e=n.slice();return e[13]=t[l][0],e[14]=t[l][1],e}function Ve(n,t,l){let e=n.slice();return e[9]=t[l][0],e[10]=t[l][1],e}function Ge(n,t,l){let e=n.slice();return e[19]=t[l][0],e[20]=t[l][1],e}function nt(n){let t;return{c(){t=d("div"),t.textContent="Fetching api index...",_(t,"class","box")},m(l,e){z(l,t,e)},p:M,i:M,o:M,d(l){l&&O(t)}}}function rt(n){let t,l,e,i=n[3]>0&&!n[4]&&Je(n),f=Object.entries(ie(n[1],n[4])),s=[];for(let o=0;o<f.length;o+=1)s[o]=Xe(qe(n,f,o));let p=o=>C(s[o],1,1,()=>{s[o]=null});return{c(){i&&i.c(),t=T();for(let o=0;o<s.length;o+=1)s[o].c();l=W()},m(o,r){i&&i.m(o,r),z(o,t,r);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(o,r);z(o,l,r),e=!0},p(o,r){if(o[3]>0&&!o[4]?i?(i.p(o,r),r&24&&y(i,1)):(i=Je(o),i.c(),y(i,1),i.m(t.parentNode,t)):i&&(q(),C(i,1,1,()=>{i=null}),U()),r&18){f=Object.entries(ie(o[1],o[4]));let a;for(a=0;a<f.length;a+=1){let c=qe(o,f,a);s[a]?(s[a].p(c,r),y(s[a],1)):(s[a]=Xe(c),s[a].c(),y(s[a],1),s[a].m(l.parentNode,l))}for(q(),a=f.length;a<s.length;a+=1)p(a);U()}},i(o){if(!e){y(i);for(let r=0;r<f.length;r+=1)y(s[r]);e=!0}},o(o){C(i),s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)C(s[r]);e=!1},d(o){i&&i.d(o),o&&O(t),E(s,o),o&&O(l)}}}function Je(n){let t,l,e,i,f=Object.entries(n[0].favorites),s=[];for(let o=0;o<f.length;o+=1)s[o]=Ye(Ve(n,f,o));let p=o=>C(s[o],1,1,()=>{s[o]=null});return{c(){t=d("h4"),t.innerHTML='<i class="fas fa-star"></i> Favorites',l=T(),e=d("div");for(let o=0;o<s.length;o+=1)s[o].c();_(t,"class","subtitle is-4"),_(e,"class","columns is-multiline")},m(o,r){z(o,t,r),z(o,l,r),z(o,e,r);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);i=!0},p(o,r){if(r&3){f=Object.entries(o[0].favorites);let a;for(a=0;a<f.length;a+=1){let c=Ve(o,f,a);s[a]?(s[a].p(c,r),y(s[a],1)):(s[a]=Ye(c),s[a].c(),y(s[a],1),s[a].m(e,null))}for(q(),a=f.length;a<s.length;a+=1)p(a);U()}},i(o){if(!i){for(let r=0;r<f.length;r+=1)y(s[r]);i=!0}},o(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)C(s[r]);i=!1},d(o){o&&O(t),o&&O(l),o&&O(e),E(s,o)}}}function Ke(n){let t,l,e,i;return l=new ne({props:{packageName:n[9],name:n[19],apiSummary:n[1][n[9]][n[19]]}}),{c(){t=d("div"),V(l.$$.fragment),e=T(),_(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(f,s){z(f,t,s),G(l,t,null),h(t,e),i=!0},p(f,s){let p={};s&1&&(p.packageName=f[9]),s&1&&(p.name=f[19]),s&3&&(p.apiSummary=f[1][f[9]][f[19]]),l.$set(p)},i(f){i||(y(l.$$.fragment,f),i=!0)},o(f){C(l.$$.fragment,f),i=!1},d(f){f&&O(t),J(l)}}}function We(n){let t,l,e=n[20]&&Ke(n);return{c(){e&&e.c(),t=W()},m(i,f){e&&e.m(i,f),z(i,t,f),l=!0},p(i,f){i[20]?e?(e.p(i,f),f&1&&y(e,1)):(e=Ke(i),e.c(),y(e,1),e.m(t.parentNode,t)):e&&(q(),C(e,1,1,()=>{e=null}),U())},i(i){l||(y(e),l=!0)},o(i){C(e),l=!1},d(i){e&&e.d(i),i&&O(t)}}}function Ye(n){let t,l,e=Object.entries(n[10]),i=[];for(let s=0;s<e.length;s+=1)i[s]=We(Ge(n,e,s));let f=s=>C(i[s],1,1,()=>{i[s]=null});return{c(){for(let s=0;s<i.length;s+=1)i[s].c();t=W()},m(s,p){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,p);z(s,t,p),l=!0},p(s,p){if(p&3){e=Object.entries(s[10]);let o;for(o=0;o<e.length;o+=1){let r=Ge(s,e,o);i[o]?(i[o].p(r,p),y(i[o],1)):(i[o]=We(r),i[o].c(),y(i[o],1),i[o].m(t.parentNode,t))}for(q(),o=e.length;o<i.length;o+=1)f(o);U()}},i(s){if(!l){for(let p=0;p<e.length;p+=1)y(i[p]);l=!0}},o(s){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)C(i[p]);l=!1},d(s){E(i,s),s&&O(t)}}}function Qe(n){let t,l,e;return l=new ne({props:{packageName:n[9],name:n[13],apiSummary:n[14]}}),{c(){t=d("div"),V(l.$$.fragment),_(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(i,f){z(i,t,f),G(l,t,null),e=!0},p(i,f){let s={};f&18&&(s.packageName=i[9]),f&18&&(s.name=i[13]),f&18&&(s.apiSummary=i[14]),l.$set(s)},i(i){e||(y(l.$$.fragment,i),e=!0)},o(i){C(l.$$.fragment,i),e=!1},d(i){i&&O(t),J(l)}}}function Xe(n){let t,l=n[9]+"",e,i,f,s,p,o=Object.entries(n[10]),r=[];for(let c=0;c<o.length;c+=1)r[c]=Qe(Ue(n,o,c));let a=c=>C(r[c],1,1,()=>{r[c]=null});return{c(){t=d("h4"),e=D(l),i=T(),f=d("div");for(let c=0;c<r.length;c+=1)r[c].c();s=T(),_(t,"class","subtitle is-4"),_(f,"class","columns is-multiline")},m(c,u){z(c,t,u),h(t,e),z(c,i,u),z(c,f,u);for(let m=0;m<r.length;m+=1)r[m]&&r[m].m(f,null);h(f,s),p=!0},p(c,u){if((!p||u&18)&&l!==(l=c[9]+"")&&P(e,l),u&18){o=Object.entries(c[10]);let m;for(m=0;m<o.length;m+=1){let j=Ue(c,o,m);r[m]?(r[m].p(j,u),y(r[m],1)):(r[m]=Qe(j),r[m].c(),y(r[m],1),r[m].m(f,s))}for(q(),m=o.length;m<r.length;m+=1)a(m);U()}},i(c){if(!p){for(let u=0;u<o.length;u+=1)y(r[u]);p=!0}},o(c){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)C(r[u]);p=!1},d(c){c&&O(t),c&&O(i),c&&O(f),E(r,c)}}}function at(n){let t,l,e,i,f,s,p,o,r,a,c,u,m,j,S;t=new Oe({props:{activePage:"browser"}}),s=new Re({}),s.$on("searchTextChange",n[6]),o=new ye({props:{messages:n[2]}});let N=[rt,nt],k=[];function g(v,b){return v[1]?0:1}return a=g(n,-1),c=k[a]=N[a](n),j=new ve({}),{c(){V(t.$$.fragment),l=T(),e=d("div"),i=d("section"),i.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',f=T(),V(s.$$.fragment),p=T(),V(o.$$.fragment),r=T(),c.c(),m=T(),V(j.$$.fragment),_(i,"class","hero is-small"),_(e,"class",u="container "+(n[5].fluidLayout?"is-fluid":""))},m(v,b){G(t,v,b),z(v,l,b),z(v,e,b),h(e,i),h(e,f),G(s,e,null),h(e,p),G(o,e,null),h(e,r),k[a].m(e,null),z(v,m,b),G(j,v,b),S=!0},p(v,[b]){let A={};b&4&&(A.messages=v[2]),o.$set(A);let F=a;a=g(v,b),a===F?k[a].p(v,b):(q(),C(k[F],1,1,()=>{k[F]=null}),U(),c=k[a],c?c.p(v,b):(c=k[a]=N[a](v),c.c()),y(c,1),c.m(e,null)),(!S||b&32&&u!==(u="container "+(v[5].fluidLayout?"is-fluid":"")))&&_(e,"class",u)},i(v){S||(y(t.$$.fragment,v),y(s.$$.fragment,v),y(o.$$.fragment,v),y(c),y(j.$$.fragment,v),S=!0)},o(v){C(t.$$.fragment,v),C(s.$$.fragment,v),C(o.$$.fragment,v),C(c),C(j.$$.fragment,v),S=!1},d(v){J(t,v),v&&O(l),v&&O(e),J(s),J(o),k[a].d(),v&&O(m),J(j,v)}}}function ft(n,t,l){let e,i;X(n,R,u=>l(0,e=u)),X(n,ze,u=>l(5,i=u));let f=null,s=[],p=0,o="",r={};function a(){for(let u in e.favorites){for(let m in e.favorites[u])(!e.favorites[u][m]||!f[u]||!f[u][m])&&delete e.favorites[u][m];Object.keys(e.favorites[u]).length===0&&delete e.favorites[u]}R.set(e)}function c(u){l(4,o=u.detail.searchText),r=u.detail.filters}return _e(()=>be(void 0,void 0,void 0,function*(){Ne();let u=yield fetch(ue());u.ok?(l(1,f=yield u.json()),a()):l(2,s=[...s,"Error while fetching api index: "+u.status])})),he(()=>{Te()}),n.$$.update=()=>{if(n.$$.dirty&1)e:l(3,p=Object.values(e.favorites).filter(u=>Object.values(u).filter(m=>m).length).length)},[e,f,s,p,o,i,c]}var ae=class extends Q{constructor(t){super(),Y(this,t,ft,at,K,{})}},Ze=ae;new Ze({target:document.body});pe();

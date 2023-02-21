// Project: https://github.com/marc0l92/api-tools
import{a as ke}from"./chunk-OCRKRV2R.js";import{a as Oe,b as we}from"./chunk-BHLRT5UQ.js";import{c as ve,d as ge}from"./chunk-KPOB7BF5.js";import{A as q,B as v,C,D as j,E as X,F as oe,G as _,H as R,L as Z,N as he,Q as P,R as D,S as g,T as w,U,V as z,W as K,X as Y,Y as Q,Z as be,_ as de,h as L,i as me,l as pe,m as I,o as J,q as W,v as ne,w as b,x as _e,y as k,z as O}from"./chunk-PBHWOJOK.js";L();L();L();L();var Ne="browserOptions",je={favorites:{}},F=ke(Object.assign({},je)),Se=null,$e=()=>{F.set(we(Ne,je)),Se=F.subscribe(s=>{Oe(Ne,s)})},ye=()=>{Se()};function Ke(s){_e(s,"svelte-xoabuk",".card-header-title.svelte-xoabuk{word-break:break-all}.card-header-icon.svelte-xoabuk{color:var(--color-accent)}.is-tag-size.svelte-xoabuk{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}")}function Be(s,t,i){let e=s.slice();return e[9]=t[i],e}function Te(s){let t,i,e,n,r,l=s[2].lastVersion+"",c,o,a,f,u,m,h,T,A,B,H=s[3].fileName+"",p,S,V,E,te,le=Object.entries(s[2].versions).length>Me,ie,ce,G=Object.entries(s[2].versions).slice(0,s[4]?void 0:5),$=[];for(let d=0;d<G.length;d+=1)$[d]=Ee(Be(s,G,d));let y=le&&Ie(s);return{c(){t=v("div"),i=v("header"),e=v("p"),n=C(s[1]),r=C(" - "),c=C(l),o=j(),a=v("button"),f=v("span"),u=v("i"),h=j(),T=v("div"),A=v("div"),B=v("p"),p=C(H),S=j(),V=v("div"),E=v("div");for(let d=0;d<$.length;d+=1)$[d].c();te=j(),y&&y.c(),_(e,"class","card-header-title svelte-xoabuk"),_(u,"class",m=(s[5].favorites[s[0]]&&s[5].favorites[s[0]][s[1]]?"fas":"far")+" fa-star"),_(f,"class","icon"),_(a,"class","card-header-icon svelte-xoabuk"),_(i,"class","card-header"),_(B,"class","subtitle is-6"),_(E,"class","column"),_(V,"class","columns is-multiline"),_(A,"class","content"),_(T,"class","card-content"),_(t,"class","card")},m(d,M){k(d,t,M),b(t,i),b(i,e),b(e,n),b(e,r),b(e,c),b(i,o),b(i,a),b(a,f),b(f,u),b(t,h),b(t,T),b(T,A),b(A,B),b(B,p),b(A,S),b(A,V),b(V,E);for(let N=0;N<$.length;N+=1)$[N].m(E,null);b(E,te),y&&y.m(E,null),ie||(ce=oe(a,"click",s[7]),ie=!0)},p(d,M){if(M&2&&R(n,d[1]),M&4&&l!==(l=d[2].lastVersion+"")&&R(c,l),M&35&&m!==(m=(d[5].favorites[d[0]]&&d[5].favorites[d[0]][d[1]]?"fas":"far")+" fa-star")&&_(u,"class",m),M&8&&H!==(H=d[3].fileName+"")&&R(p,H),M&84){G=Object.entries(d[2].versions).slice(0,d[4]?void 0:5);let N;for(N=0;N<G.length;N+=1){let ue=Be(d,G,N);$[N]?$[N].p(ue,M):($[N]=Ee(ue),$[N].c(),$[N].m(E,te))}for(;N<$.length;N+=1)$[N].d(1);$.length=G.length}M&4&&(le=Object.entries(d[2].versions).length>Me),le?y?y.p(d,M):(y=Ie(d),y.c(),y.m(E,null)):y&&(y.d(1),y=null)},d(d){d&&O(t),q($,d),y&&y.d(),ie=!1,ce()}}}function Ee(s){let t,i=s[9][0]+"",e,n;return{c(){t=v("a"),e=C(i),_(t,"class","tag ml-1 mb-1"),_(t,"href",n=s[6]+"/viewer.html?api="+s[9][1].hash)},m(r,l){k(r,t,l),b(t,e)},p(r,l){l&20&&i!==(i=r[9][0]+"")&&R(e,i),l&20&&n!==(n=r[6]+"/viewer.html?api="+r[9][1].hash)&&_(t,"href",n)},d(r){r&&O(t)}}}function Ie(s){let t,i,e,n,r;return{c(){t=v("button"),i=v("i"),_(i,"class",e="fas fa-angle-"+(s[4]?"left":"right")),_(t,"class","button is-white is-small is-tag-size svelte-xoabuk")},m(l,c){k(l,t,c),b(t,i),n||(r=oe(t,"click",s[8]),n=!0)},p(l,c){c&16&&e!==(e="fas fa-angle-"+(l[4]?"left":"right"))&&_(i,"class",e)},d(l){l&&O(t),n=!1,r()}}}function Ge(s){let t,i=s[3]&&Te(s);return{c(){i&&i.c(),t=X()},m(e,n){i&&i.m(e,n),k(e,t,n)},p(e,[n]){e[3]?i?i.p(e,n):(i=Te(e),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:I,o:I,d(e){i&&i.d(e),e&&O(t)}}}var Me=5;function Je(s,t,i){let e;W(s,F,m=>i(5,e=m));let n=me(),{packageName:r=null}=t,{name:l=null}=t,{apiSummary:c=null}=t,o=null,a=!1;function f(){console.log(JSON.stringify(e)),e.favorites[r]||ne(F,e.favorites[r]={},e),ne(F,e.favorites[r][l]=!e.favorites[r][l],e)}Z(()=>{$e(),i(3,o=c.versions[c.lastVersion])}),he(()=>{ye()});let u=()=>i(4,a=!a);return s.$$set=m=>{"packageName"in m&&i(0,r=m.packageName),"name"in m&&i(1,l=m.name),"apiSummary"in m&&i(2,c=m.apiSummary)},[r,l,c,o,a,e,n,f,u]}var se=class extends Q{constructor(t){super(),Y(this,t,Je,Ge,J,{packageName:0,name:1,apiSummary:2},Ke)}},re=se;L();function Xe(s){let t;return{c(){t=v("div"),t.innerHTML='<div class="field"><div class="control is-expanded"><input class="input" type="text" placeholder="Search"/></div></div>',_(t,"class","block")},m(i,e){k(i,t,e)},p:I,i:I,o:I,d(i){i&&O(t)}}}var ae=class extends Q{constructor(t){super(),Y(this,t,null,Xe,J,{})}},Le=ae;function Ae(s,t,i){let e=s.slice();return e[4]=t[i],e}function Ce(s,t,i){let e=s.slice();return e[7]=t[i],e}function Pe(s,t,i){let e=s.slice();return e[4]=t[i],e}function De(s,t,i){let e=s.slice();return e[12]=t[i],e}function Ye(s){let t;return{c(){t=v("div"),t.textContent="Fetching api index...",_(t,"class","box")},m(i,e){k(i,t,e)},p:I,i:I,o:I,d(i){i&&O(t)}}}function Qe(s){let t,i,e,n=s[3]>0&&Fe(s),r=Object.entries(s[1]).sort(ee),l=[];for(let o=0;o<r.length;o+=1)l[o]=Ue(Ae(s,r,o));let c=o=>w(l[o],1,1,()=>{l[o]=null});return{c(){n&&n.c(),t=j();for(let o=0;o<l.length;o+=1)l[o].c();i=X()},m(o,a){n&&n.m(o,a),k(o,t,a);for(let f=0;f<l.length;f+=1)l[f].m(o,a);k(o,i,a),e=!0},p(o,a){if(o[3]>0?n?(n.p(o,a),a&8&&g(n,1)):(n=Fe(o),n.c(),g(n,1),n.m(t.parentNode,t)):n&&(P(),w(n,1,1,()=>{n=null}),D()),a&2){r=Object.entries(o[1]).sort(ee);let f;for(f=0;f<r.length;f+=1){let u=Ae(o,r,f);l[f]?(l[f].p(u,a),g(l[f],1)):(l[f]=Ue(u),l[f].c(),g(l[f],1),l[f].m(i.parentNode,i))}for(P(),f=r.length;f<l.length;f+=1)c(f);D()}},i(o){if(!e){g(n);for(let a=0;a<r.length;a+=1)g(l[a]);e=!0}},o(o){w(n),l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);e=!1},d(o){n&&n.d(o),o&&O(t),q(l,o),o&&O(i)}}}function Fe(s){let t,i,e,n,r=Object.entries(s[0].favorites),l=[];for(let o=0;o<r.length;o+=1)l[o]=qe(Pe(s,r,o));let c=o=>w(l[o],1,1,()=>{l[o]=null});return{c(){t=v("h4"),t.innerHTML='<i class="fas fa-star"></i> Favorites',i=j(),e=v("div");for(let o=0;o<l.length;o+=1)l[o].c();_(t,"class","subtitle is-4"),_(e,"class","columns is-multiline")},m(o,a){k(o,t,a),k(o,i,a),k(o,e,a);for(let f=0;f<l.length;f+=1)l[f].m(e,null);n=!0},p(o,a){if(a&3){r=Object.entries(o[0].favorites);let f;for(f=0;f<r.length;f+=1){let u=Pe(o,r,f);l[f]?(l[f].p(u,a),g(l[f],1)):(l[f]=qe(u),l[f].c(),g(l[f],1),l[f].m(e,null))}for(P(),f=r.length;f<l.length;f+=1)c(f);D()}},i(o){if(!n){for(let a=0;a<r.length;a+=1)g(l[a]);n=!0}},o(o){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);n=!1},d(o){o&&O(t),o&&O(i),o&&O(e),q(l,o)}}}function He(s){let t,i,e,n;return i=new re({props:{packageName:s[4][0],name:s[12][0],apiSummary:s[1][s[4][0]][s[12][0]]}}),{c(){t=v("div"),U(i.$$.fragment),e=j(),_(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(r,l){k(r,t,l),z(i,t,null),b(t,e),n=!0},p(r,l){let c={};l&1&&(c.packageName=r[4][0]),l&1&&(c.name=r[12][0]),l&3&&(c.apiSummary=r[1][r[4][0]][r[12][0]]),i.$set(c)},i(r){n||(g(i.$$.fragment,r),n=!0)},o(r){w(i.$$.fragment,r),n=!1},d(r){r&&O(t),K(i)}}}function Ve(s){let t,i,e=s[12][1]&&He(s);return{c(){e&&e.c(),t=X()},m(n,r){e&&e.m(n,r),k(n,t,r),i=!0},p(n,r){n[12][1]?e?(e.p(n,r),r&1&&g(e,1)):(e=He(n),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(P(),w(e,1,1,()=>{e=null}),D())},i(n){i||(g(e),i=!0)},o(n){w(e),i=!1},d(n){e&&e.d(n),n&&O(t)}}}function qe(s){let t,i,e=Object.entries(s[4][1]),n=[];for(let l=0;l<e.length;l+=1)n[l]=Ve(De(s,e,l));let r=l=>w(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=X()},m(l,c){for(let o=0;o<n.length;o+=1)n[o].m(l,c);k(l,t,c),i=!0},p(l,c){if(c&3){e=Object.entries(l[4][1]);let o;for(o=0;o<e.length;o+=1){let a=De(l,e,o);n[o]?(n[o].p(a,c),g(n[o],1)):(n[o]=Ve(a),n[o].c(),g(n[o],1),n[o].m(t.parentNode,t))}for(P(),o=e.length;o<n.length;o+=1)r(o);D()}},i(l){if(!i){for(let c=0;c<e.length;c+=1)g(n[c]);i=!0}},o(l){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)w(n[c]);i=!1},d(l){q(n,l),l&&O(t)}}}function Re(s){let t,i,e;return i=new re({props:{packageName:s[4][0],name:s[7][0],apiSummary:s[7][1]}}),{c(){t=v("div"),U(i.$$.fragment),_(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(n,r){k(n,t,r),z(i,t,null),e=!0},p(n,r){let l={};r&2&&(l.packageName=n[4][0]),r&2&&(l.name=n[7][0]),r&2&&(l.apiSummary=n[7][1]),i.$set(l)},i(n){e||(g(i.$$.fragment,n),e=!0)},o(n){w(i.$$.fragment,n),e=!1},d(n){n&&O(t),K(i)}}}function Ue(s){let t,i=s[4][0]+"",e,n,r,l,c,o=Object.entries(s[4][1]).sort(ee),a=[];for(let u=0;u<o.length;u+=1)a[u]=Re(Ce(s,o,u));let f=u=>w(a[u],1,1,()=>{a[u]=null});return{c(){t=v("h4"),e=C(i),n=j(),r=v("div");for(let u=0;u<a.length;u+=1)a[u].c();l=j(),_(t,"class","subtitle is-4"),_(r,"class","columns is-multiline")},m(u,m){k(u,t,m),b(t,e),k(u,n,m),k(u,r,m);for(let h=0;h<a.length;h+=1)a[h].m(r,null);b(r,l),c=!0},p(u,m){if((!c||m&2)&&i!==(i=u[4][0]+"")&&R(e,i),m&2){o=Object.entries(u[4][1]).sort(ee);let h;for(h=0;h<o.length;h+=1){let T=Ce(u,o,h);a[h]?(a[h].p(T,m),g(a[h],1)):(a[h]=Re(T),a[h].c(),g(a[h],1),a[h].m(r,l))}for(P(),h=o.length;h<a.length;h+=1)f(h);D()}},i(u){if(!c){for(let m=0;m<o.length;m+=1)g(a[m]);c=!0}},o(u){a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)w(a[m]);c=!1},d(u){u&&O(t),u&&O(n),u&&O(r),q(a,u)}}}function We(s){let t,i,e,n,r,l,c,o,a,f,u,m,h,T;t=new de({props:{activePage:"browser"}}),l=new Le({}),o=new ge({props:{messages:s[2]}});let A=[Qe,Ye],B=[];function H(p,S){return p[1]?0:1}return f=H(s,-1),u=B[f]=A[f](s),h=new be({}),{c(){U(t.$$.fragment),i=j(),e=v("div"),n=v("section"),n.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',r=j(),U(l.$$.fragment),c=j(),U(o.$$.fragment),a=j(),u.c(),m=j(),U(h.$$.fragment),_(n,"class","hero is-small"),_(e,"class","container")},m(p,S){z(t,p,S),k(p,i,S),k(p,e,S),b(e,n),b(e,r),z(l,e,null),b(e,c),z(o,e,null),b(e,a),B[f].m(e,null),k(p,m,S),z(h,p,S),T=!0},p(p,[S]){let V={};S&4&&(V.messages=p[2]),o.$set(V);let E=f;f=H(p,S),f===E?B[f].p(p,S):(P(),w(B[E],1,1,()=>{B[E]=null}),D(),u=B[f],u?u.p(p,S):(u=B[f]=A[f](p),u.c()),g(u,1),u.m(e,null))},i(p){T||(g(t.$$.fragment,p),g(l.$$.fragment,p),g(o.$$.fragment,p),g(u),g(h.$$.fragment,p),T=!0)},o(p){w(t.$$.fragment,p),w(l.$$.fragment,p),w(o.$$.fragment,p),w(u),w(h.$$.fragment,p),T=!1},d(p){K(t,p),p&&O(i),p&&O(e),K(l),K(o),B[f].d(),p&&O(m),K(h,p)}}}var Ze="./apis/apiIndex.json";function ee(s,t){return s[0]<t[0]}function xe(s,t,i){let e;W(s,F,c=>i(0,e=c));let n=null,r=[],l=0;return Z(()=>ve(void 0,void 0,void 0,function*(){let c=yield fetch(Ze);c.ok?i(1,n=yield c.json()):i(2,r=[...r,"Error while fetching api index: "+c.status])})),s.$$.update=()=>{if(s.$$.dirty&1){e:i(3,l=Object.values(e.favorites).filter(c=>Object.values(c).filter(o=>o).length).length)}},[e,n,r,l]}var fe=class extends Q{constructor(t){super(),Y(this,t,xe,We,J,{})}},ze=fe;new ze({target:document.body});pe();

// Project: https://github.com/marc0l92/api-tools
import{a as ke}from"./chunk-OCRKRV2R.js";import{a as Oe,b as we}from"./chunk-BHLRT5UQ.js";import{c as ve,d as ge}from"./chunk-KPOB7BF5.js";import{A as R,B as v,C as V,D as S,E as J,F as re,G as _,H as q,L as Z,N as he,Q as C,R as D,S as g,T as w,U,V as z,W as G,X as Y,Y as Q,Z as be,_ as de,h as A,i as me,l as pe,m as M,o as X,q as W,v as oe,w as b,x as _e,y as k,z as O}from"./chunk-PBHWOJOK.js";A();A();A();A();var Ne="browserOptions",Se={favorites:{}},P=ke(Object.assign({},Se)),je=null,$e=()=>{P.set(we(Ne,Se)),je=P.subscribe(i=>{Oe(Ne,i)})},ye=()=>{je()};function Ke(i){_e(i,"svelte-xoabuk",".card-header-title.svelte-xoabuk{word-break:break-all}.card-header-icon.svelte-xoabuk{color:var(--color-accent)}.is-tag-size.svelte-xoabuk{height:2em;vertical-align:baseline;padding-left:0.75em;padding-right:0.75em}")}function Ie(i,t,l){let e=i.slice();return e[9]=t[l][0],e[10]=t[l][1],e}function Te(i){let t,l,e,o,s,n=i[2].lastVersion+"",c,r,a,f,u,m,h,T,L,I,F=i[3].fileName+"",p,j,H,B,te,le=Object.keys(i[2].versions).length>Ee,ne,ce,K=Object.entries(i[2].versions).sort(Ae).slice(0,i[4]?void 0:5),$=[];for(let d=0;d<K.length;d+=1)$[d]=Be(Ie(i,K,d));let y=le&&Me(i);return{c(){t=v("div"),l=v("header"),e=v("p"),o=V(i[1]),s=V(" - "),c=V(n),r=S(),a=v("button"),f=v("span"),u=v("i"),h=S(),T=v("div"),L=v("div"),I=v("p"),p=V(F),j=S(),H=v("div"),B=v("div");for(let d=0;d<$.length;d+=1)$[d].c();te=S(),y&&y.c(),_(e,"class","card-header-title svelte-xoabuk"),_(u,"class",m=(i[5].favorites[i[0]]&&i[5].favorites[i[0]][i[1]]?"fas":"far")+" fa-star"),_(f,"class","icon"),_(a,"class","card-header-icon svelte-xoabuk"),_(l,"class","card-header"),_(I,"class","subtitle is-6"),_(B,"class","column"),_(H,"class","columns is-multiline"),_(L,"class","content"),_(T,"class","card-content"),_(t,"class","card")},m(d,E){k(d,t,E),b(t,l),b(l,e),b(e,o),b(e,s),b(e,c),b(l,r),b(l,a),b(a,f),b(f,u),b(t,h),b(t,T),b(T,L),b(L,I),b(I,p),b(L,j),b(L,H),b(H,B);for(let N=0;N<$.length;N+=1)$[N].m(B,null);b(B,te),y&&y.m(B,null),ne||(ce=re(a,"click",i[7]),ne=!0)},p(d,E){if(E&2&&q(o,d[1]),E&4&&n!==(n=d[2].lastVersion+"")&&q(c,n),E&35&&m!==(m=(d[5].favorites[d[0]]&&d[5].favorites[d[0]][d[1]]?"fas":"far")+" fa-star")&&_(u,"class",m),E&8&&F!==(F=d[3].fileName+"")&&q(p,F),E&84){K=Object.entries(d[2].versions).sort(Ae).slice(0,d[4]?void 0:5);let N;for(N=0;N<K.length;N+=1){let ue=Ie(d,K,N);$[N]?$[N].p(ue,E):($[N]=Be(ue),$[N].c(),$[N].m(B,te))}for(;N<$.length;N+=1)$[N].d(1);$.length=K.length}E&4&&(le=Object.keys(d[2].versions).length>Ee),le?y?y.p(d,E):(y=Me(d),y.c(),y.m(B,null)):y&&(y.d(1),y=null)},d(d){d&&O(t),R($,d),y&&y.d(),ne=!1,ce()}}}function Be(i){let t,l=i[9]+"",e,o;return{c(){t=v("a"),e=V(l),_(t,"class","tag ml-1 mb-1"),_(t,"href",o=i[6]+"/viewer.html?api="+i[10].hash)},m(s,n){k(s,t,n),b(t,e)},p(s,n){n&20&&l!==(l=s[9]+"")&&q(e,l),n&20&&o!==(o=s[6]+"/viewer.html?api="+s[10].hash)&&_(t,"href",o)},d(s){s&&O(t)}}}function Me(i){let t,l,e,o,s;return{c(){t=v("button"),l=v("i"),_(l,"class",e="fas fa-angle-"+(i[4]?"left":"right")),_(t,"class","button is-white is-small is-tag-size svelte-xoabuk")},m(n,c){k(n,t,c),b(t,l),o||(s=re(t,"click",i[8]),o=!0)},p(n,c){c&16&&e!==(e="fas fa-angle-"+(n[4]?"left":"right"))&&_(l,"class",e)},d(n){n&&O(t),o=!1,s()}}}function Xe(i){let t,l=i[3]&&Te(i);return{c(){l&&l.c(),t=J()},m(e,o){l&&l.m(e,o),k(e,t,o)},p(e,[o]){e[3]?l?l.p(e,o):(l=Te(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},i:M,o:M,d(e){l&&l.d(e),e&&O(t)}}}var Ee=5,Je=5;function Ae(i,t){function l(e){let o=0,s=0;for(let n of e.split(".").reverse())o+=parseInt(n)*Math.pow(10,s*Je),s++;return o}return l(t[0])-l(i[0])}function Ye(i,t,l){let e;W(i,P,m=>l(5,e=m));let o=me(),{packageName:s=null}=t,{name:n=null}=t,{apiSummary:c=null}=t,r=null,a=!1;function f(){console.log(JSON.stringify(e)),e.favorites[s]||oe(P,e.favorites[s]={},e),oe(P,e.favorites[s][n]=!e.favorites[s][n],e)}Z(()=>{$e(),l(3,r=c.versions[c.lastVersion])}),he(()=>{ye()});let u=()=>l(4,a=!a);return i.$$set=m=>{"packageName"in m&&l(0,s=m.packageName),"name"in m&&l(1,n=m.name),"apiSummary"in m&&l(2,c=m.apiSummary)},[s,n,c,r,a,e,o,f,u]}var ie=class extends Q{constructor(t){super(),Y(this,t,Ye,Xe,X,{packageName:0,name:1,apiSummary:2},Ke)}},se=ie;A();function Qe(i){let t;return{c(){t=v("div"),t.innerHTML='<div class="field"><div class="control is-expanded"><input class="input" type="text" placeholder="Search"/></div></div>',_(t,"class","block")},m(l,e){k(l,t,e)},p:M,i:M,o:M,d(l){l&&O(t)}}}var ae=class extends Q{constructor(t){super(),Y(this,t,null,Qe,X,{})}},Le=ae;function Ve(i,t,l){let e=i.slice();return e[4]=t[l][0],e[5]=t[l][1],e}function Ce(i,t,l){let e=i.slice();return e[8]=t[l][0],e[9]=t[l][1],e}function De(i,t,l){let e=i.slice();return e[4]=t[l][0],e[5]=t[l][1],e}function Pe(i,t,l){let e=i.slice();return e[14]=t[l][0],e[15]=t[l][1],e}function We(i){let t;return{c(){t=v("div"),t.textContent="Fetching api index...",_(t,"class","box")},m(l,e){k(l,t,e)},p:M,i:M,o:M,d(l){l&&O(t)}}}function Ze(i){let t,l,e,o=i[3]>0&&Fe(i),s=Object.entries(i[1]).sort(ee),n=[];for(let r=0;r<s.length;r+=1)n[r]=ze(Ve(i,s,r));let c=r=>w(n[r],1,1,()=>{n[r]=null});return{c(){o&&o.c(),t=S();for(let r=0;r<n.length;r+=1)n[r].c();l=J()},m(r,a){o&&o.m(r,a),k(r,t,a);for(let f=0;f<n.length;f+=1)n[f].m(r,a);k(r,l,a),e=!0},p(r,a){if(r[3]>0?o?(o.p(r,a),a&8&&g(o,1)):(o=Fe(r),o.c(),g(o,1),o.m(t.parentNode,t)):o&&(C(),w(o,1,1,()=>{o=null}),D()),a&2){s=Object.entries(r[1]).sort(ee);let f;for(f=0;f<s.length;f+=1){let u=Ve(r,s,f);n[f]?(n[f].p(u,a),g(n[f],1)):(n[f]=ze(u),n[f].c(),g(n[f],1),n[f].m(l.parentNode,l))}for(C(),f=s.length;f<n.length;f+=1)c(f);D()}},i(r){if(!e){g(o);for(let a=0;a<s.length;a+=1)g(n[a]);e=!0}},o(r){w(o),n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)w(n[a]);e=!1},d(r){o&&o.d(r),r&&O(t),R(n,r),r&&O(l)}}}function Fe(i){let t,l,e,o,s=Object.entries(i[0].favorites),n=[];for(let r=0;r<s.length;r+=1)n[r]=qe(De(i,s,r));let c=r=>w(n[r],1,1,()=>{n[r]=null});return{c(){t=v("h4"),t.innerHTML='<i class="fas fa-star"></i> Favorites',l=S(),e=v("div");for(let r=0;r<n.length;r+=1)n[r].c();_(t,"class","subtitle is-4"),_(e,"class","columns is-multiline")},m(r,a){k(r,t,a),k(r,l,a),k(r,e,a);for(let f=0;f<n.length;f+=1)n[f].m(e,null);o=!0},p(r,a){if(a&3){s=Object.entries(r[0].favorites);let f;for(f=0;f<s.length;f+=1){let u=De(r,s,f);n[f]?(n[f].p(u,a),g(n[f],1)):(n[f]=qe(u),n[f].c(),g(n[f],1),n[f].m(e,null))}for(C(),f=s.length;f<n.length;f+=1)c(f);D()}},i(r){if(!o){for(let a=0;a<s.length;a+=1)g(n[a]);o=!0}},o(r){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)w(n[a]);o=!1},d(r){r&&O(t),r&&O(l),r&&O(e),R(n,r)}}}function He(i){let t,l,e,o;return l=new se({props:{packageName:i[4],name:i[14],apiSummary:i[1][i[4]][i[14]]}}),{c(){t=v("div"),U(l.$$.fragment),e=S(),_(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(s,n){k(s,t,n),z(l,t,null),b(t,e),o=!0},p(s,n){let c={};n&1&&(c.packageName=s[4]),n&1&&(c.name=s[14]),n&3&&(c.apiSummary=s[1][s[4]][s[14]]),l.$set(c)},i(s){o||(g(l.$$.fragment,s),o=!0)},o(s){w(l.$$.fragment,s),o=!1},d(s){s&&O(t),G(l)}}}function Re(i){let t,l,e=i[15]&&He(i);return{c(){e&&e.c(),t=J()},m(o,s){e&&e.m(o,s),k(o,t,s),l=!0},p(o,s){o[15]?e?(e.p(o,s),s&1&&g(e,1)):(e=He(o),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(C(),w(e,1,1,()=>{e=null}),D())},i(o){l||(g(e),l=!0)},o(o){w(e),l=!1},d(o){e&&e.d(o),o&&O(t)}}}function qe(i){let t,l,e=Object.entries(i[5]),o=[];for(let n=0;n<e.length;n+=1)o[n]=Re(Pe(i,e,n));let s=n=>w(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=J()},m(n,c){for(let r=0;r<o.length;r+=1)o[r].m(n,c);k(n,t,c),l=!0},p(n,c){if(c&3){e=Object.entries(n[5]);let r;for(r=0;r<e.length;r+=1){let a=Pe(n,e,r);o[r]?(o[r].p(a,c),g(o[r],1)):(o[r]=Re(a),o[r].c(),g(o[r],1),o[r].m(t.parentNode,t))}for(C(),r=e.length;r<o.length;r+=1)s(r);D()}},i(n){if(!l){for(let c=0;c<e.length;c+=1)g(o[c]);l=!0}},o(n){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)w(o[c]);l=!1},d(n){R(o,n),n&&O(t)}}}function Ue(i){let t,l,e;return l=new se({props:{packageName:i[4],name:i[8],apiSummary:i[9]}}),{c(){t=v("div"),U(l.$$.fragment),_(t,"class","column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen")},m(o,s){k(o,t,s),z(l,t,null),e=!0},p(o,s){let n={};s&2&&(n.packageName=o[4]),s&2&&(n.name=o[8]),s&2&&(n.apiSummary=o[9]),l.$set(n)},i(o){e||(g(l.$$.fragment,o),e=!0)},o(o){w(l.$$.fragment,o),e=!1},d(o){o&&O(t),G(l)}}}function ze(i){let t,l=i[4]+"",e,o,s,n,c,r=Object.entries(i[5]).sort(ee),a=[];for(let u=0;u<r.length;u+=1)a[u]=Ue(Ce(i,r,u));let f=u=>w(a[u],1,1,()=>{a[u]=null});return{c(){t=v("h4"),e=V(l),o=S(),s=v("div");for(let u=0;u<a.length;u+=1)a[u].c();n=S(),_(t,"class","subtitle is-4"),_(s,"class","columns is-multiline")},m(u,m){k(u,t,m),b(t,e),k(u,o,m),k(u,s,m);for(let h=0;h<a.length;h+=1)a[h].m(s,null);b(s,n),c=!0},p(u,m){if((!c||m&2)&&l!==(l=u[4]+"")&&q(e,l),m&2){r=Object.entries(u[5]).sort(ee);let h;for(h=0;h<r.length;h+=1){let T=Ce(u,r,h);a[h]?(a[h].p(T,m),g(a[h],1)):(a[h]=Ue(T),a[h].c(),g(a[h],1),a[h].m(s,n))}for(C(),h=r.length;h<a.length;h+=1)f(h);D()}},i(u){if(!c){for(let m=0;m<r.length;m+=1)g(a[m]);c=!0}},o(u){a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)w(a[m]);c=!1},d(u){u&&O(t),u&&O(o),u&&O(s),R(a,u)}}}function xe(i){let t,l,e,o,s,n,c,r,a,f,u,m,h,T;t=new de({props:{activePage:"browser"}}),n=new Le({}),r=new ge({props:{messages:i[2]}});let L=[Ze,We],I=[];function F(p,j){return p[1]?0:1}return f=F(i,-1),u=I[f]=L[f](i),h=new be({}),{c(){U(t.$$.fragment),l=S(),e=v("div"),o=v("section"),o.innerHTML='<div class="hero-body"><h1 class="title">Api Browser</h1></div>',s=S(),U(n.$$.fragment),c=S(),U(r.$$.fragment),a=S(),u.c(),m=S(),U(h.$$.fragment),_(o,"class","hero is-small"),_(e,"class","container")},m(p,j){z(t,p,j),k(p,l,j),k(p,e,j),b(e,o),b(e,s),z(n,e,null),b(e,c),z(r,e,null),b(e,a),I[f].m(e,null),k(p,m,j),z(h,p,j),T=!0},p(p,[j]){let H={};j&4&&(H.messages=p[2]),r.$set(H);let B=f;f=F(p,j),f===B?I[f].p(p,j):(C(),w(I[B],1,1,()=>{I[B]=null}),D(),u=I[f],u?u.p(p,j):(u=I[f]=L[f](p),u.c()),g(u,1),u.m(e,null))},i(p){T||(g(t.$$.fragment,p),g(n.$$.fragment,p),g(r.$$.fragment,p),g(u),g(h.$$.fragment,p),T=!0)},o(p){w(t.$$.fragment,p),w(n.$$.fragment,p),w(r.$$.fragment,p),w(u),w(h.$$.fragment,p),T=!1},d(p){G(t,p),p&&O(l),p&&O(e),G(n),G(r),I[f].d(),p&&O(m),G(h,p)}}}var et="./apis/apiIndex.json";function ee(i,t){return i[0]===t[0]?0:i[0]<t[0]?-1:1}function tt(i,t,l){let e;W(i,P,c=>l(0,e=c));let o=null,s=[],n=0;return Z(()=>ve(void 0,void 0,void 0,function*(){let c=yield fetch(et);c.ok?l(1,o=yield c.json()):l(2,s=[...s,"Error while fetching api index: "+c.status])})),i.$$.update=()=>{if(i.$$.dirty&1){e:l(3,n=Object.values(e.favorites).filter(c=>Object.values(c).filter(r=>r).length).length)}},[e,o,s,n]}var fe=class extends Q{constructor(t){super(),Y(this,t,tt,xe,X,{})}},Ge=fe;new Ge({target:document.body});pe();

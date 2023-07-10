// Project: https://github.com/marc0l92/api-portal
import{a as k,h as v}from"./chunk-2FPMSHQD.js";v();v();function S(t){return Array.isArray?Array.isArray(t):pe(t)==="[object Array]"}var xe=1/0;function Se(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-xe?"-0":e}function Ee(t){return t==null?"":Se(t)}function I(t){return typeof t=="string"}function de(t){return typeof t=="number"}function Re(t){return t===!0||t===!1||we(t)&&pe(t)=="[object Boolean]"}function ge(t){return typeof t=="object"}function we(t){return ge(t)&&t!==null}function m(t){return t!=null}function V(t){return!t.trim().length}function pe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}var Le="Incorrect 'index' type",Ne=t=>`Invalid value for key ${t}`,ke=t=>`Pattern length exceeds max of ${t}.`,be=t=>`Missing ${t} property in key`,Oe=t=>`Property 'weight' in key '${t}' must be a positive integer`,ae=Object.prototype.hasOwnProperty,Y=class{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=me(n);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function me(t){let e=null,s=null,n=null,r=1,i=null;if(I(t)||S(t))n=t,e=he(t),s=z(t);else{if(!ae.call(t,"name"))throw new Error(be("name"));let c=t.name;if(n=c,ae.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Oe(c));e=he(c),s=z(c),i=t.getFn}return{path:e,id:s,weight:r,src:n,getFn:i}}function he(t){return S(t)?t:t.split(".")}function z(t){return S(t)?t.join("."):t}function $e(t,e){let s=[],n=!1,r=(i,c,o)=>{if(m(i))if(!c[o])s.push(i);else{let a=c[o],h=i[a];if(!m(h))return;if(o===c.length-1&&(I(h)||de(h)||Re(h)))s.push(Ee(h));else if(S(h)){n=!0;for(let l=0,f=h.length;l<f;l+=1)r(h[l],c,o+1)}else c.length&&r(h,c,o+1)}};return r(t,I(e)?e.split("."):e,0),n?s:s[0]}var Ce={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Te={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Fe={location:0,threshold:.6,distance:100},ve={useExtendedSearch:!1,getFn:$e,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},u=k(k(k(k({},Te),Ce),Fe),ve),Pe=/[^ ]+/g;function je(t=1,e=3){let s=new Map,n=Math.pow(10,e);return{get(r){let i=r.match(Pe).length;if(s.has(i))return s.get(i);let c=1/Math.pow(i,.5*t),o=parseFloat(Math.round(c*n)/n);return s.set(i,o),o},clear(){s.clear()}}}var C=class{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=je(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,I(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){let s=this.size();I(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!m(e)||V(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let c=r.getFn?r.getFn(e):this.getFn(e,r.path);if(m(c)){if(S(c)){let o=[],a=[{nestedArrIndex:-1,value:c}];for(;a.length;){let{nestedArrIndex:h,value:l}=a.pop();if(m(l))if(I(l)&&!V(l)){let f={v:l,i:h,n:this.norm.get(l)};o.push(f)}else S(l)&&l.forEach((f,d)=>{a.push({nestedArrIndex:d,value:f})})}n.$[i]=o}else if(I(c)&&!V(c)){let o={v:c,n:this.norm.get(c)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}};function Me(t,e,{getFn:s=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){let r=new C({getFn:s,fieldNormWeight:n});return r.setKeys(t.map(me)),r.setSources(e),r.create(),r}function De(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){let{keys:n,records:r}=t,i=new C({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function P(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){let c=e/t.length;if(i)return c;let o=Math.abs(n-s);return r?c+o/r:o?1:c}function Ke(t=[],e=u.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let c=t.length;i<c;i+=1){let o=t[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}var b=32;function We(t,e,s,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(e.length>b)throw new Error(ke(b));let l=e.length,f=t.length,d=Math.max(0,Math.min(n,f)),g=i,p=d,M=o>1||a,L=M?Array(f):[],x;for(;(x=t.indexOf(e,p))>-1;){let A=P(e,{currentLocation:x,expectedLocation:d,distance:r,ignoreLocation:h});if(g=Math.min(A,g),p=x+l,M){let R=0;for(;R<l;)L[x+R]=1,R+=1}}p=-1;let O=[],N=1,T=l+f,Ie=1<<l-1;for(let A=0;A<l;A+=1){let R=0,w=T;for(;R<w;)P(e,{errors:A,currentLocation:d+w,expectedLocation:d,distance:r,ignoreLocation:h})<=g?R=w:T=w,w=Math.floor((T-R)/2+R);T=w;let ce=Math.max(1,d-w+1),B=c?f:Math.min(d+w,f)+l,$=Array(B+2);$[B+1]=(1<<A)-1;for(let y=B;y>=ce;y-=1){let F=y-1,oe=s[t.charAt(F)];if(M&&(L[F]=+!!oe),$[y]=($[y+1]<<1|1)&oe,A&&($[y]|=(O[y+1]|O[y])<<1|1|O[y+1]),$[y]&Ie&&(N=P(e,{errors:A,currentLocation:F,expectedLocation:d,distance:r,ignoreLocation:h}),N<=g)){if(g=N,p=F,p<=d)break;ce=Math.max(1,2*d-p)}}if(P(e,{errors:A+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>g)break;O=$}let H={isMatch:p>=0,score:Math.max(.001,N)};if(M){let A=Ke(L,o);A.length?a&&(H.indices=A):H.isMatch=!1}return H}function He(t){let e={};for(let s=0,n=t.length;s<n;s+=1){let r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}var j=class{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;let l=(d,g)=>{this.chunks.push({pattern:d,alphabet:He(d),startIndex:g})},f=this.pattern.length;if(f>b){let d=0,g=f%b,p=f-g;for(;d<p;)l(this.pattern.substr(d,b),d),d+=b;if(g){let M=f-b;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(e){let{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,e.length-1]]),p}let{location:r,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options,l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:M,startIndex:L})=>{let{isMatch:x,score:O,indices:N}=We(e,p,M,{location:r+L,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:h});x&&(d=!0),f+=O,x&&N&&(l=[...l,...N])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(g.indices=l),g}},_=class{constructor(e){this.pattern=e}static isMultiMatch(e){return le(e,this.multiRegex)}static isSingleMatch(e){return le(e,this.singleRegex)}search(){}};function le(t,e){let s=t.match(e);return s?s[1]:null}var G=class extends _{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){let s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},U=class extends _{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){let n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}},J=class extends _{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){let s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}},Q=class extends _{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){let s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}},X=class extends _{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){let s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},Z=class extends _{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){let s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}},D=class extends _{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(e),this._bitapSearch=new j(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}},K=class extends _{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n,r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);let c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}},q=[G,K,J,Q,Z,X,U,D],ue=q.length,Be=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ve="|";function Ye(t,e={}){return t.split(Ve).map(s=>{let n=s.trim().split(Be).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){let o=n[i],a=!1,h=-1;for(;!a&&++h<ue;){let l=q[h],f=l.isMultiMatch(o);f&&(r.push(new l(f,e)),a=!0)}if(!a)for(h=-1;++h<ue;){let l=q[h],f=l.isSingleMatch(o);if(f){r.push(new l(f,e));break}}}return r})}var ze=new Set([D.type,K.type]),ee=class{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:h},this.pattern=s?e:e.toLowerCase(),this.query=Ye(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){let s=this.query;if(!s)return{isMatch:!1,score:1};let{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,c=[],o=0;for(let a=0,h=s.length;a<h;a+=1){let l=s[a];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){let g=l[f],{isMatch:p,indices:M,score:L}=g.search(e);if(p){if(i+=1,o+=L,n){let x=g.constructor.type;ze.has(x)?c=[...c,...M]:c.push(M)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}},te=[];function Ge(...t){te.push(...t)}function se(t,e){for(let s=0,n=te.length;s<n;s+=1){let r=te[s];if(r.condition(t,e))return new r(t,e)}return new j(t,e)}var W={AND:"$and",OR:"$or"},ne={PATH:"$path",PATTERN:"$val"},re=t=>!!(t[W.AND]||t[W.OR]),Ue=t=>!!t[ne.PATH],Je=t=>!S(t)&&ge(t)&&!re(t),fe=t=>({[W.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ae(t,e,{auto:s=!0}={}){let n=r=>{let i=Object.keys(r),c=Ue(r);if(!c&&i.length>1&&!re(r))return n(fe(r));if(Je(r)){let a=c?r[ne.PATH]:i[0],h=c?r[ne.PATTERN]:r[a];if(!I(h))throw new Error(Ne(a));let l={keyId:z(a),pattern:h};return s&&(l.searcher=se(h,e)),l}let o={children:[],operator:i[0]};return i.forEach(a=>{let h=r[a];S(h)&&h.forEach(l=>{o.children.push(n(l))})}),o};return re(t)||(t=fe(t)),n(t)}function Qe(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:c})=>{let o=r?r.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(e?1:i))}),s.score=n})}function Xe(t,e){let s=t.matches;e.matches=[],m(s)&&s.forEach(n=>{if(!m(n.indices)||!n.indices.length)return;let{indices:r,value:i}=n,c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),e.matches.push(c)})}function Ze(t,e){e.score=t.score}function qe(t,e,{includeMatches:s=u.includeMatches,includeScore:n=u.includeScore}={}){let r=[];return s&&r.push(Xe),n&&r.push(Ze),t.map(i=>{let{idx:c}=i,o={item:e[c],refIndex:c};return r.length&&r.forEach(a=>{a(i,o)}),o})}var E=class{constructor(e,s={},n){this.options=k(k({},u),s),this.options.useExtendedSearch,this._keyStore=new Y(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof C))throw new Error(Le);this._myIndex=s||Me(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){m(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){let s=[];for(let n=0,r=this._docs.length;n<r;n+=1){let i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){let{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options,a=I(e)?I(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Qe(a,{ignoreFieldNorm:o}),i&&a.sort(c),de(s)&&s>-1&&(a=a.slice(0,s)),qe(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){let s=se(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;let{isMatch:a,score:h,indices:l}=s.searchIn(i);a&&r.push({item:i,idx:c,matches:[{score:h,value:i,norm:o,indices:l}]})}),r}_searchLogical(e){let s=Ae(e,this.options),n=(o,a,h)=>{if(!o.children){let{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:d});return g&&g.length?[{idx:h,item:a,matches:g}]:[]}let l=[];for(let f=0,d=o.children.length;f<d;f+=1){let g=o.children[f],p=n(g,a,h);if(p.length)l.push(...p);else if(o.operator===W.AND)return[]}return l},r=this._myIndex.records,i={},c=[];return r.forEach(({$:o,i:a})=>{if(m(o)){let h=n(s,o,a);h.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),c}_searchObjectList(e){let s=se(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:o})=>{if(!m(c))return;let a=[];n.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:c[l],searcher:s}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:e,value:s,searcher:n}){if(!m(s))return[];let r=[];if(S(s))s.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;let{isMatch:a,score:h,indices:l}=n.searchIn(i);a&&r.push({score:h,key:e,value:i,idx:c,norm:o,indices:l})});else{let{v:i,n:c}=s,{isMatch:o,score:a,indices:h}=n.searchIn(i);o&&r.push({score:a,key:e,value:i,norm:c,indices:h})}return r}};E.version="6.6.2";E.createIndex=Me;E.parseIndex=De;E.config=u;E.parseQuery=Ae;Ge(ee);var et={includeMatches:!0,ignoreLocation:!1,threshold:.4,minMatchCharLength:2,keys:["packageName","apiName","versionName","fileName"]},ie=null;function ct(t){ie=new E(Object.values(t.getUniqueApis()),et)}function ot(t){return ie?ie.search(t):[]}function at(t,e){return t.filter(s=>ye(s.item,e))}function ht(t,e){let s=JSON.parse(JSON.stringify(t.getPackages()));for(let n in t.getPackages()){for(let r in t.getPackage(n))ye(t.getApiByName(n,r),e)||delete s[n][r];Object.keys(s[n]).length===0&&delete s[n]}return s}function ye(t,e){for(let s in e)for(let n in e[s])for(let r in e[s][n])if(e[s][n][r]){let i=s+"/"+n+"/"+r;if(t.tags.indexOf(i)===-1)return!1}return!0}export{ct as a,ot as b,at as c,ht as d};

// Project: https://github.com/marc0l92/api-portal
import{a as Ce}from"./chunk-NC3RFDWU.js";import{$ as z,A as f,B as K,C as U,D as P,E as Q,F as m,G as H,H as A,I as Z,J as N,M as d,N as q,O as ee,P as te,Q as $e,R as _e,U as X,X as ke,Z as ne,_ as ie,aa as j,c as ve,ca as W,da as F,e as et,ea as Y,fa as B,g as tt,ga as V,h as x,ha as we,ka as re,n as Te,o as M,p as be,r as D,sa as Ae,t as ye,ta as Oe}from"./chunk-K5VHTFFR.js";var Ee=et((se,oe)=>{x();(function(t,e){typeof ve=="function"&&typeof se=="object"&&typeof oe=="object"?oe.exports=e():typeof define=="function"&&define.amd?define(function(){return e()}):t.pluralize=e()})(se,function(){var t=[],e=[],i={},n={},r={};function o(u){return typeof u=="string"?new RegExp("^"+u+"$","i"):u}function s(u,p){return u===p?p:u===u.toLowerCase()?p.toLowerCase():u===u.toUpperCase()?p.toUpperCase():u[0]===u[0].toUpperCase()?p.charAt(0).toUpperCase()+p.substr(1).toLowerCase():p.toLowerCase()}function l(u,p){return u.replace(/\$(\d{1,2})/g,function(y,C){return p[C]||""})}function c(u,p){return u.replace(p[0],function(y,C){var k=l(p[1],arguments);return s(y===""?u[C-1]:y,k)})}function $(u,p,y){if(!u.length||i.hasOwnProperty(u))return p;for(var C=y.length;C--;){var k=y[C];if(k[0].test(p))return c(p,k)}return p}function g(u,p,y){return function(C){var k=C.toLowerCase();return p.hasOwnProperty(k)?s(C,k):u.hasOwnProperty(k)?s(C,u[k]):$(k,C,y)}}function b(u,p,y,C){return function(k){var R=k.toLowerCase();return p.hasOwnProperty(R)?!0:u.hasOwnProperty(R)?!1:$(R,R,y)===R}}function v(u,p,y){var C=p===1?v.singular(u):v.plural(u);return(y?p+" ":"")+C}return v.plural=g(r,n,t),v.isPlural=b(r,n,t),v.singular=g(n,r,e),v.isSingular=b(n,r,e),v.addPluralRule=function(u,p){t.push([o(u),p])},v.addSingularRule=function(u,p){e.push([o(u),p])},v.addUncountableRule=function(u){if(typeof u=="string"){i[u.toLowerCase()]=!0;return}v.addPluralRule(u,"$0"),v.addSingularRule(u,"$0")},v.addIrregularRule=function(u,p){p=p.toLowerCase(),u=u.toLowerCase(),r[u]=p,n[p]=u},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(u){return v.addIrregularRule(u[0],u[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(u){return v.addPluralRule(u[0],u[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(u){return v.addSingularRule(u[0],u[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(v.addUncountableRule),v})});x();x();x();x();var E=tt(Ee());x();var nt="https://api.dictionaryapi.dev/api/v2/entries/en/";function it(t){t.stats.noun>=t.stats.verb&&t.stats.noun>=t.stats.adjective&&(t.type.isNoun=!0),t.stats.verb>=t.stats.noun&&t.stats.verb>=t.stats.adjective&&(t.type.isVerb=!0),t.stats.adjective>=t.stats.noun&&t.stats.adjective>=t.stats.verb&&(t.type.isAdjective=!0)}function rt(t){let e=Math.max(1,t.stats.noun+t.stats.verb+t.stats.adjective);t.stats.noun=Math.round(t.stats.noun/e*100),t.stats.verb=Math.round(t.stats.verb/e*100),t.stats.adjective=Math.round(t.stats.adjective/e*100)}var Re=async t=>{let e={found:!0,stats:{noun:0,verb:0,adjective:0},type:{isNoun:!1,isVerb:!1,isAdjective:!1}},i=await fetch(nt+encodeURIComponent(t),{method:"GET"});if(!i.ok)return e.found=!1,e;let n=await i.json();for(let r of n)for(let o of r.meanings)switch(o.partOfSpeech){case"noun":e.stats.noun+=o.definitions.length;break;case"verb":e.stats.verb+=o.definitions.length;break;case"adjective":e.stats.adjective+=o.definitions.length;break}return it(e),rt(e),e};var le=(s=>(s.VERSION="version",s.CAPABILITY="capability",s.COLLECTION="collection",s.RESOURCE="resource",s.SUB_RESOURCE="sub-resource",s.CONTROLLER="controller",s))(le||{}),ae=(o=>(o.GET="GET",o.POST="POST",o.PUT="PUT",o.PATCH="PATCH",o.DELETE="DELETE",o))(ae||{}),st="Uri not completed, continue typing...";function ce(t,e){t.match(/^[a-z0-9-]*$/)||e.push(`The word "${t}" contains some characters not allowed. Allowed characters are: lowercase letters, numbers, hyphen`)}async function ue(t,e){let i=await Re(t);i.found?i.type.isNoun||e.push(`The word "${t}" is not usually used as noun (noun: ${i.stats.noun}%, verb: ${i.stats.verb}%, adjective: ${i.stats.adjective}%)`):e.push(`The word "${t}" is not present in the english dictionary`)}function ot(t){let e={type:"version",text:t,alternativeTypes:[],warnings:[]};return t.match(/^[vV]?\d+(\.\d+)?$/)||e.warnings.push(`The version "${t}" has an invalid structure. Expected something like: v1`),t.match(/^v/)||e.warnings.push(`The version "${t}" should start with a lowercase "v"`),e}async function lt(t){let e={type:"capability",text:t,alternativeTypes:[],warnings:[]};return E.isSingular(t)||e.warnings.push(`The capability "${t}" should be a singular word`),await ue(t,e.warnings),e}async function Le(t){let e={type:"collection",text:t,alternativeTypes:[],warnings:[]};return E.isPlural(t)||e.warnings.push(`The collection "${t}" should be a plural word`),ce(t,e.warnings),await ue(t,e.warnings),e}async function Ue(t){return{type:"resource",text:t,alternativeTypes:[],warnings:[]}}async function at(t){let e={type:"sub-resource",text:t,alternativeTypes:[],warnings:[]};return E.isSingular(t)||e.warnings.push(`The sub-resource "${t}" should be a singular word`),ce(t,e.warnings),await ue(t,e.warnings),e}async function Pe(t){let e={type:"controller",text:t,alternativeTypes:[],warnings:[]};return E.isPlural(t)||e.warnings.push(`The controller "${t}" should be a plural word`),ce(t,e.warnings),e}async function Se(t,e){switch(t){case"collection":return await Le(e);case"resource":return await Ue(e);case"sub-resource":return await at(e);case"controller":return await Pe(e)}return null}var xe=async(t,e,i)=>{let n={errors:[],tokens:[]},r=e.split("/").filter(s=>s!==""),o=(i.version?1:0)+(i.capability?1:0)+1;if(r.length>=o){let s=0;i.version&&n.tokens.push(ot(r[s++])),i.capability&&n.tokens.push(await lt(r[s++]));let l=!0,c=!0;for(;s<r.length;){let $=s===r.length-1;if(l){let g=await Le(r[s]);c||((!$||t!=="POST")&&g.alternativeTypes.push("sub-resource"),$&&t==="POST"&&g.alternativeTypes.push("controller")),n.tokens.push(g)}else $&&t==="POST"?n.tokens.push(await Pe(r[s])):n.tokens.push(await Ue(r[s]));l=!l,c=!1,s++}}else n.errors.push(st);return n},Ie=async(t,e,i)=>{let n=0;for(;n<e.length&&(e[n].type=="version"||e[n].type=="capability");)n++;let r=["collection"],o=!0;for(;n<e.length;){let s=e[n],l=n===e.length-2;if(r.indexOf(s.type)>=0){switch(n===i&&(e[n]=await Se(s.type,s.text),e[n].alternativeTypes=s.alternativeTypes),s.type){case"collection":r=["resource"],l&&!o&&t==="POST"&&r.push("controller");break;case"resource":r=["collection"],(!l||t!=="POST")&&r.push("sub-resource"),l&&t==="POST"&&r.push("controller");break;case"sub-resource":r=["collection"],l&&t==="POST"&&r.push("controller");break;case"controller":if(r=[],n!==e.length-1)return null;break;default:return console.error("Invalid token type"),null}o=!1,n++}else e[n]=await Se(r[0],s.text),e[n].alternativeTypes=r.slice(1)}return e},Ne=(t,e)=>{let i=t[e];return i.alternativeTypes.push(i.type),i.type=i.alternativeTypes.shift(),t},pe=(t,e)=>{let i="",n=e.length-1,r=!0;for(;n>=0;){switch(e[n].type){case"collection":r&&(i+=G.collection[t](e[n].text));break;case"resource":if(n>=1&&e[n-1].type==="collection"){if(r)if(t!=="POST")i+=G.resource[t](e[n].text,e[n-1].text);else return"Error: method POST not supported on resources";else i+=G.middle.resourceAndCollection(e[n].text,e[n-1].text);n--}else return"Error: the URI should start with a collection/resource";break;case"sub-resource":if(n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"){if(r)if(t!=="POST")i+=G.subResource[t](e[n].text,e[n-1].text,e[n-2].text);else return"Error: method POST not supported on sub-resources";else i+=G.middle.subResourceAndResourceAndCollection(e[n].text,e[n-1].text,e[n-2].text);n-=2}else return"Error: the URI should start with a collection/resource/sub-resource";break;case"controller":if(t==="POST"&&r)n>=1&&e[n-1].type==="collection"?(i+=G.controller.controllerOnCollection(e[n].text,e[n-1].text),n--):n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"?(i+=G.controller.controllerOnResource(e[n].text,e[n-1].text,e[n-2].text),n-=2):n>=3&&e[n-1].type==="sub-resource"&&e[n-2].type==="resource"&&e[n-3].type==="collection"&&(i+=G.controller.controllerOnSubResource(e[n].text,e[n-1].text,e[n-2].text,e[n-3].text),n-=3);else return"Error: it is possible to use controller only at the end of the URI with the method POST";break}n--,r=!1}return i},G={resource:{GET:(t,e)=>`Retrieve the ${E.singular(e)} with id "${t}"`,POST:(t,e)=>"",PUT:(t,e)=>`Replace with the one in request, the ${E.singular(e)} with id "${t}"`,PATCH:(t,e)=>`Apply the changes listed in request to the ${E.singular(e)} with id "${t}"`,DELETE:(t,e)=>`Delete the ${E.singular(e)} with id "${t}"`},collection:{GET:t=>`Search in the ${t}`,POST:t=>`Create a new ${E.singular(t)}`,PUT:t=>`Replace with the list in request all the ${t}`,PATCH:t=>`Replace with the list in request all the ${t}`,DELETE:t=>`Delete all the ${t}`},subResource:{GET:(t,e,i)=>`Retrieve the ${t} of the ${E.singular(i)} with id "${e}"`,POST:(t,e,i)=>"",PUT:(t,e,i)=>`Replace with the one in request, the ${t} of the ${E.singular(i)} with id "${e}"`,PATCH:(t,e,i)=>`Apply the changes listed in request to the ${t} of the ${E.singular(i)} with id "${e}"`,DELETE:(t,e,i)=>`Delete the ${t} of the ${E.singular(i)} with id "${e}"`},controller:{controllerOnCollection:(t,e)=>`Perform the action of "${E.singular(t)}" on the ${e}`,controllerOnResource:(t,e,i)=>`Perform the action of "${E.singular(t)}" on the ${E.singular(i)} with id "${e}"`,controllerOnSubResource:(t,e,i,n)=>`Perform the action of "${E.singular(t)}" on the ${e}, of the ${E.singular(n)} with id "${i}"`},middle:{resourceAndCollection:(t,e)=>`, of the ${E.singular(e)} with id "${t}"`,subResourceAndResourceAndCollection:(t,e,i)=>`, of the ${t} of the ${E.singular(i)} with id "${e}"`}};function ze(t,e,i){let n=t.slice();return n[11]=e[i],n}function Me(t){let e,i=t[11]+"",n,r;return{c(){e=m("option"),n=H(i),e.__value=r=t[11],e.value=e.__value},m(o,s){U(o,e,s),f(e,n)},p:M,d(o){o&&P(e)}}}function ct(t){let e,i,n,r,o,s,l,c,$,g,b,v,u,p,y,C,k,R,_,O,I,S,h=t[4],T=[];for(let a=0;a<h.length;a+=1)T[a]=Me(ze(t,h,a));return{c(){e=m("section"),i=m("div"),n=m("div"),r=m("div"),o=m("select");for(let a=0;a<T.length;a+=1)T[a].c();s=A(),l=m("div"),c=m("input"),$=A(),g=m("div"),b=m("div"),v=m("div"),u=m("label"),p=m("input"),y=H(`
                    Version`),C=A(),k=m("div"),R=m("label"),_=m("input"),O=H(`
                    Capability`),t[0]===void 0&&ke(()=>t[6].call(o)),d(r,"class","select"),d(n,"class","control"),d(c,"type","text"),d(c,"class","input"),d(c,"placeholder","Example: /v1/reservation/chains/AAA/links/1234567890"),d(l,"class","control is-expanded"),d(i,"class","field has-addons"),d(p,"type","checkbox"),d(u,"class","checkbox"),d(v,"class","level-item control"),d(_,"type","checkbox"),d(R,"class","checkbox"),d(k,"class","level-item control"),d(b,"class","level-left"),d(g,"class","level"),d(e,"class","box")},m(a,w){U(a,e,w),f(e,i),f(i,n),f(n,r),f(r,o);for(let L=0;L<T.length;L+=1)T[L]&&T[L].m(o,null);te(o,t[0],!0),f(i,s),f(i,l),f(l,c),ee(c,t[1]),f(e,$),f(e,g),f(g,b),f(b,v),f(v,u),f(u,p),p.checked=t[2],f(u,y),f(b,C),f(b,k),f(k,R),f(R,_),_.checked=t[3],f(R,O),I||(S=[N(o,"change",t[6]),N(o,"change",t[5]),N(c,"input",t[7]),N(c,"input",t[5]),N(p,"change",t[8]),N(p,"change",t[5]),N(_,"change",t[9]),N(_,"change",t[5])],I=!0)},p(a,[w]){if(w&16){h=a[4];let L;for(L=0;L<h.length;L+=1){let me=ze(a,h,L);T[L]?T[L].p(me,w):(T[L]=Me(me),T[L].c(),T[L].m(o,null))}for(;L<T.length;L+=1)T[L].d(1);T.length=h.length}w&17&&te(o,a[0]),w&2&&c.value!==a[1]&&ee(c,a[1]),w&4&&(p.checked=a[2]),w&8&&(_.checked=a[3])},i:M,o:M,d(a){a&&P(e),Q(T,a),I=!1,be(S)}}}function ut(t,e,i){let n=Object.keys(ae),r=n[0],o="/v1/reservation/chains/AAA/links/1234567890",s=!0,l=!0,c=X();function $(){let p=o.replace(/\?.*/,""),y=new URLSearchParams(window.location.search);y.set("method",r),y.set("uri",p),y.set("version",s?"1":"0"),y.set("capability",l?"1":"0"),window.history.pushState(null,null,"?"+y.toString()),c("uriChange",{method:r,uri:p,version:s,capability:l})}_e(()=>{let p=new URLSearchParams(window.location.search);p.has("method")&&n.indexOf(p.get("method"))>=0&&i(0,r=p.get("method")),p.has("uri")&&i(1,o=p.get("uri")),p.has("version")&&i(2,s=!!p.get("version")),p.has("capability")&&i(3,l=!!p.get("capability")),$()});function g(){r=$e(this),i(0,r),i(4,n)}function b(){o=this.value,i(1,o)}function v(){s=this.checked,i(2,s)}function u(){l=this.checked,i(3,l)}return[r,o,s,l,n,$,g,b,v,u]}var fe=class extends V{constructor(e){super(),B(this,e,ut,ct,D,{})}},je=fe;x();function pt(t){K(t,"svelte-v09ncf",".icon.is-warning.svelte-v09ncf{color:#ffe86e}span.margin-left.svelte-v09ncf{margin-left:0.5em}button.tag.svelte-v09ncf{border:none;cursor:pointer}.tags.no-margin.svelte-v09ncf{margin:0}.tag.is-separator.svelte-v09ncf{padding-left:0.25em;padding-right:0.25em;background-color:#eee}.tag.has-warning.svelte-v09ncf{text-decoration:wavy;text-decoration-line:underline;text-decoration-color:red}.tag.no-margin.svelte-v09ncf{margin:0}.tag.is-version.svelte-v09ncf{background-color:#b8fbb5}.tag.is-capability.svelte-v09ncf{background-color:#fff2b3}.tag.is-collection.svelte-v09ncf{background-color:#81d5ff}.tag.is-resource.svelte-v09ncf{background-color:#ff889a}.tag.is-sub-resource.svelte-v09ncf{background-color:#ffc2a9}.tag.is-controller.svelte-v09ncf{background-color:#e18af1}")}function He(t,e,i){let n=t.slice();return n[7]=e[i],n}function De(t,e,i){let n=t.slice();return n[10]=e[i],n}function Be(t,e,i){let n=t.slice();return n[13]=e[i],n}function Ve(t,e,i){let n=t.slice();return n[10]=e[i],n[17]=i,n}function ft(t){let e,i=t[10].text+"",n,r,o,s;return{c(){e=m("span"),n=H(i),r=A(),d(e,"title",o=t[10].type),d(e,"class",s="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(l,c){U(l,e,c),f(e,n),f(e,r)},p(l,c){c&1&&i!==(i=l[10].text+"")&&q(n,i),c&1&&o!==(o=l[10].type)&&d(e,"title",o),c&1&&s!==(s="tag is-"+l[10].type+" "+(l[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&d(e,"class",s)},d(l){l&&P(e)}}}function ht(t){let e,i=t[10].text+"",n,r,o,s,l,c,$,g;function b(){return t[5](t[17])}return{c(){e=m("button"),n=H(i),r=A(),o=m("span"),o.innerHTML='<span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>',s=A(),d(o,"class","margin-left svelte-v09ncf"),d(e,"title",l=t[10].type),d(e,"class",c="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(v,u){U(v,e,u),f(e,n),f(e,r),f(e,o),f(e,s),$||(g=N(e,"click",b),$=!0)},p(v,u){t=v,u&1&&i!==(i=t[10].text+"")&&q(n,i),u&1&&l!==(l=t[10].type)&&d(e,"title",l),u&1&&c!==(c="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&d(e,"class",c)},d(v){v&&P(e),$=!1,g()}}}function Ge(t){let e,i,n;function r(l,c){return l[10].alternativeTypes.length>0?ht:ft}let o=r(t,-1),s=o(t);return{c(){e=m("span"),e.textContent="/",i=A(),s.c(),n=Z(),d(e,"class","tag is-separator svelte-v09ncf")},m(l,c){U(l,e,c),U(l,i,c),s.m(l,c),U(l,n,c)},p(l,c){o===(o=r(l,c))&&s?s.p(l,c):(s.d(1),s=o(l),s&&(s.c(),s.m(n.parentNode,n)))},d(l){l&&P(e),l&&P(i),s.d(l),l&&P(n)}}}function Qe(t){let e,i,n,r,o,s=t[0],l=[];for(let c=0;c<s.length;c+=1)l[c]=Fe(De(t,s,c));return{c(){e=m("div"),i=m("p"),i.innerHTML="<strong>Warnings:</strong>",n=A();for(let c=0;c<l.length;c+=1)l[c].c();r=A(),o=m("p"),d(e,"class","warnings")},m(c,$){U(c,e,$),f(e,i),f(e,n);for(let g=0;g<l.length;g+=1)l[g]&&l[g].m(e,null);f(e,r),f(e,o)},p(c,$){if($&1){s=c[0];let g;for(g=0;g<s.length;g+=1){let b=De(c,s,g);l[g]?l[g].p(b,$):(l[g]=Fe(b),l[g].c(),l[g].m(e,r))}for(;g<l.length;g+=1)l[g].d(1);l.length=s.length}},d(c){c&&P(e),Q(l,c)}}}function We(t){let e,i,n,r=t[13]+"",o;return{c(){e=m("p"),i=m("span"),i.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>',n=A(),o=H(r),d(i,"class","icon is-warning svelte-v09ncf")},m(s,l){U(s,e,l),f(e,i),f(e,n),f(e,o)},p(s,l){l&1&&r!==(r=s[13]+"")&&q(o,r)},d(s){s&&P(e)}}}function Fe(t){let e,i=t[10].warnings,n=[];for(let r=0;r<i.length;r+=1)n[r]=We(Be(t,i,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=Z()},m(r,o){for(let s=0;s<n.length;s+=1)n[s]&&n[s].m(r,o);U(r,e,o)},p(r,o){if(o&1){i=r[10].warnings;let s;for(s=0;s<i.length;s+=1){let l=Be(r,i,s);n[s]?n[s].p(l,o):(n[s]=We(l),n[s].c(),n[s].m(e.parentNode,e))}for(;s<n.length;s+=1)n[s].d(1);n.length=i.length}},d(r){Q(n,r),r&&P(e)}}}function Ye(t){let e,i=t[7]+"",n,r;return{c(){e=m("span"),n=H(i),d(e,"class",r="tag no-margin is-"+t[7]+" svelte-v09ncf")},m(o,s){U(o,e,s),f(e,n)},p:M,d(o){o&&P(e)}}}function gt(t){let e,i,n,r,o,s,l,c,$,g,b,v,u,p,y,C,k,R=t[0],_=[];for(let h=0;h<R.length;h+=1)_[h]=Ge(Ve(t,R,h));let O=t[2]&&Qe(t),I=t[3],S=[];for(let h=0;h<I.length;h+=1)S[h]=Ye(He(t,I,h));return{c(){e=m("div"),i=m("p"),i.innerHTML="<strong>Result</strong>",n=A(),r=m("div");for(let h=0;h<_.length;h+=1)_[h].c();o=A(),s=m("div"),l=m("p"),c=H(t[1]),$=A(),O&&O.c(),g=A(),b=m("div"),v=m("div"),u=A(),p=m("div"),y=m("div");for(let h=0;h<S.length;h+=1)S[h].c();C=A(),k=m("div"),d(i,"class","subtitle"),d(r,"class","tags has-addons"),d(s,"class","block"),d(v,"class","level-left"),d(y,"class","tags has-addons no-margin svelte-v09ncf"),d(k,"class","level-item"),d(p,"class","level-right"),d(b,"class","level"),d(e,"class","box")},m(h,T){U(h,e,T),f(e,i),f(e,n),f(e,r);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(r,null);f(e,o),f(e,s),f(s,l),f(l,c),f(e,$),O&&O.m(e,null),f(e,g),f(e,b),f(b,v),f(b,u),f(b,p),f(p,y);for(let a=0;a<S.length;a+=1)S[a]&&S[a].m(y,null);f(p,C),f(p,k)},p(h,[T]){if(T&17){R=h[0];let a;for(a=0;a<R.length;a+=1){let w=Ve(h,R,a);_[a]?_[a].p(w,T):(_[a]=Ge(w),_[a].c(),_[a].m(r,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=R.length}if(T&2&&q(c,h[1]),h[2]?O?O.p(h,T):(O=Qe(h),O.c(),O.m(e,g)):O&&(O.d(1),O=null),T&8){I=h[3];let a;for(a=0;a<I.length;a+=1){let w=He(h,I,a);S[a]?S[a].p(w,T):(S[a]=Ye(w),S[a].c(),S[a].m(y,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=I.length}},i:M,o:M,d(h){h&&P(e),Q(_,h),O&&O.d(),Q(S,h)}}}function dt(t,e,i){let n,r=Object.values(le),{tokens:o=[]}=e,{text:s=""}=e,l=X();function c(g){l("changeTokenType",{index:g})}let $=g=>c(g);return t.$$set=g=>{"tokens"in g&&i(0,o=g.tokens),"text"in g&&i(1,s=g.text)},t.$$.update=()=>{if(t.$$.dirty&1)e:i(2,n=o.filter(g=>g.warnings.length>0).length>0)},[o,s,n,r,c,$]}var he=class extends V{constructor(e){super(),B(this,e,dt,gt,D,{tokens:0,text:1},pt)}},Je=he;x();function mt(t){let e;return{c(){e=m("div"),e.innerHTML=`<p class="subtitle"><strong>Help</strong></p> 
    <p>Work in progress...</p>`,d(e,"class","box")},m(i,n){U(i,e,n)},p:M,i:M,o:M,d(i){i&&P(e)}}}var ge=class extends V{constructor(e){super(),B(this,e,null,mt,D,{})}},qe=ge;function vt(t){K(t,"svelte-s05syh","button.box.button.is-active.svelte-s05syh{background-color:var(--color-accent);color:#fff}")}function Ke(t){let e,i;return e=new Je({props:{tokens:t[0].tokens,text:t[1]}}),e.$on("changeTokenType",t[5]),{c(){W(e.$$.fragment)},m(n,r){F(e,n,r),i=!0},p(n,r){let o={};r&1&&(o.tokens=n[0].tokens),r&2&&(o.text=n[1]),e.$set(o)},i(n){i||(z(e.$$.fragment,n),i=!0)},o(n){j(e.$$.fragment,n),i=!1},d(n){Y(e,n)}}}function Xe(t){let e,i;return e=new qe({}),{c(){W(e.$$.fragment)},m(n,r){F(e,n,r),i=!0},i(n){i||(z(e.$$.fragment,n),i=!0)},o(n){j(e.$$.fragment,n),i=!1},d(n){Y(e,n)}}}function Tt(t){let e,i,n,r,o,s,l,c,$,g,b,v,u,p,y,C,k,R,_,O,I,S;e=new Oe({props:{activePage:"restApiToText"}}),s=new je({}),s.$on("uriChange",t[4]),c=new Ce({props:{errors:t[0].errors}});let h=t[0].tokens.length>0&&Ke(t),T=t[2]&&Xe(t);return _=new we({}),{c(){W(e.$$.fragment),i=A(),n=m("div"),r=m("section"),r.innerHTML=`<div class="hero-body"><h1 class="title">REST Api to Text</h1> 
      <p class="subtitle">Input your api <i>method</i> and <i>URI</i> and check what is the meaning of it according to the REST API guidelines</p></div>`,o=A(),W(s.$$.fragment),l=A(),W(c.$$.fragment),$=A(),h&&h.c(),g=A(),b=m("button"),v=m("span"),v.innerHTML='<i class="far fa-circle-question"></i>',u=A(),p=m("span"),p.textContent="Help",C=A(),T&&T.c(),R=A(),W(_.$$.fragment),d(r,"class","hero is-small"),d(v,"class","icon is-small"),d(b,"class",y="button box "+(t[2]?"is-active":"")+" svelte-s05syh"),d(n,"class",k="container "+(t[3].fluidLayout?"is-fluid":""))},m(a,w){F(e,a,w),U(a,i,w),U(a,n,w),f(n,r),f(n,o),F(s,n,null),f(n,l),F(c,n,null),f(n,$),h&&h.m(n,null),f(n,g),f(n,b),f(b,v),f(b,u),f(b,p),f(n,C),T&&T.m(n,null),U(a,R,w),F(_,a,w),O=!0,I||(S=N(b,"click",t[6]),I=!0)},p(a,[w]){let L={};w&1&&(L.errors=a[0].errors),c.$set(L),a[0].tokens.length>0?h?(h.p(a,w),w&1&&z(h,1)):(h=Ke(a),h.c(),z(h,1),h.m(n,g)):h&&(ne(),j(h,1,1,()=>{h=null}),ie()),(!O||w&4&&y!==(y="button box "+(a[2]?"is-active":"")+" svelte-s05syh"))&&d(b,"class",y),a[2]?T?w&4&&z(T,1):(T=Xe(a),T.c(),z(T,1),T.m(n,null)):T&&(ne(),j(T,1,1,()=>{T=null}),ie()),(!O||w&8&&k!==(k="container "+(a[3].fluidLayout?"is-fluid":"")))&&d(n,"class",k)},i(a){O||(z(e.$$.fragment,a),z(s.$$.fragment,a),z(c.$$.fragment,a),z(h),z(T),z(_.$$.fragment,a),O=!0)},o(a){j(e.$$.fragment,a),j(s.$$.fragment,a),j(c.$$.fragment,a),j(h),j(T),j(_.$$.fragment,a),O=!1},d(a){Y(e,a),a&&P(i),a&&P(n),Y(s),Y(c),h&&h.d(),T&&T.d(),a&&P(R),Y(_,a),I=!1,S()}}}function bt(t,e,i){let n;ye(t,Ae,b=>i(3,n=b));let r={errors:[],tokens:[]},o="",s,l=!1;function c(b){return re(this,void 0,void 0,function*(){s=b.detail.method,i(0,r=yield xe(s,b.detail.uri,{version:b.detail.version,capability:b.detail.capability})),i(1,o=pe(s,r.tokens))})}function $(b){return re(this,void 0,void 0,function*(){let v=b.detail.index;v<r.tokens.length&&(i(0,r.tokens=Ne(r.tokens,v),r),i(0,r.tokens=yield Ie(s,r.tokens,v),r),i(1,o=pe(s,r.tokens)))})}return[r,o,l,n,c,$,()=>i(2,l=!l)]}var de=class extends V{constructor(e){super(),B(this,e,bt,Tt,D,{},vt)}},Ze=de;new Ze({target:document.body});Te();

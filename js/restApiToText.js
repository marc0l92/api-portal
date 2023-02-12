// Project: https://github.com/marc0l92/api-tools
import{c as ne,d as _e}from"./chunk-J2URVBII.js";import{A as X,B as Z,C as Te,D as be,G as J,H as ye,I as ee,J as te,K as N,L as j,M as Q,N as W,O as F,P as D,Q as B,R as $e,S as ke,c as de,e as Je,h as me,i as M,j as ve,k as z,o as f,p as q,q as R,r as S,s as G,t as v,u as H,v as w,w as K,x as I,y as m,z as Y}from"./chunk-BQMZXNLR.js";var Ae=Je((ie,se)=>{(function(t,e){typeof de=="function"&&typeof ie=="object"&&typeof se=="object"?se.exports=e():typeof define=="function"&&define.amd?define(function(){return e()}):t.pluralize=e()})(ie,function(){var t=[],e=[],i={},n={},r={};function o(c){return typeof c=="string"?new RegExp("^"+c+"$","i"):c}function s(c,p){return c===p?p:c===c.toLowerCase()?p.toLowerCase():c===c.toUpperCase()?p.toUpperCase():c[0]===c[0].toUpperCase()?p.charAt(0).toUpperCase()+p.substr(1).toLowerCase():p.toLowerCase()}function a(c,p){return c.replace(/\$(\d{1,2})/g,function($,C){return p[C]||""})}function l(c,p){return c.replace(p[0],function($,C){var A=a(p[1],arguments);return s($===""?c[C-1]:$,A)})}function k(c,p,$){if(!c.length||i.hasOwnProperty(c))return p;for(var C=$.length;C--;){var A=$[C];if(A[0].test(p))return l(p,A)}return p}function h(c,p,$){return function(C){var A=C.toLowerCase();return p.hasOwnProperty(A)?s(C,A):c.hasOwnProperty(A)?s(C,c[A]):k(A,C,$)}}function b(c,p,$,C){return function(A){var O=A.toLowerCase();return p.hasOwnProperty(O)?!0:c.hasOwnProperty(O)?!1:k(O,O,$)===O}}function T(c,p,$){var C=p===1?T.singular(c):T.plural(c);return($?p+" ":"")+C}return T.plural=h(r,n,t),T.isPlural=b(r,n,t),T.singular=h(n,r,e),T.isSingular=b(n,r,e),T.addPluralRule=function(c,p){t.push([o(c),p])},T.addSingularRule=function(c,p){e.push([o(c),p])},T.addUncountableRule=function(c){if(typeof c=="string"){i[c.toLowerCase()]=!0;return}T.addPluralRule(c,"$0"),T.addSingularRule(c,"$0")},T.addIrregularRule=function(c,p){p=p.toLowerCase(),c=c.toLowerCase(),r[c]=p,n[p]=c},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(c){return T.addIrregularRule(c[0],c[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(c){return T.addPluralRule(c[0],c[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(c){return T.addSingularRule(c[0],c[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(T.addUncountableRule),T})});var Ke="https://api.dictionaryapi.dev/api/v2/entries/en/";function Xe(t){t.stats.noun>=t.stats.verb&&t.stats.noun>=t.stats.adjective&&(t.type.isNoun=!0),t.stats.verb>=t.stats.noun&&t.stats.verb>=t.stats.adjective&&(t.type.isVerb=!0),t.stats.adjective>=t.stats.noun&&t.stats.adjective>=t.stats.verb&&(t.type.isAdjective=!0)}function Ze(t){let e=Math.max(1,t.stats.noun+t.stats.verb+t.stats.adjective);t.stats.noun=Math.round(t.stats.noun/e*100),t.stats.verb=Math.round(t.stats.verb/e*100),t.stats.adjective=Math.round(t.stats.adjective/e*100)}var we=async t=>{let e={found:!0,stats:{noun:0,verb:0,adjective:0},type:{isNoun:!1,isVerb:!1,isAdjective:!1}},i=await fetch(Ke+encodeURIComponent(t),{method:"GET"});if(!i.ok)return e.found=!1,e;let n=await i.json();for(let r of n)for(let o of r.meanings)switch(o.partOfSpeech){case"noun":e.stats.noun+=o.definitions.length;break;case"verb":e.stats.verb+=o.definitions.length;break;case"adjective":e.stats.adjective+=o.definitions.length;break}return Xe(e),Ze(e),e};var U=Ae(),re=(s=>(s.VERSION="version",s.CAPABILITY="capability",s.COLLECTION="collection",s.RESOURCE="resource",s.SUB_RESOURCE="sub-resource",s.CONTROLLER="controller",s))(re||{}),oe=(o=>(o.GET="GET",o.POST="POST",o.PUT="PUT",o.PATCH="PATCH",o.DELETE="DELETE",o))(oe||{}),et="Uri not completed, continue typing...";function ae(t,e){t.match(/^[a-z0-9\-]*$/)||e.push(`The word "${t}" contains some characters not allowed. Allowed characters are: lowercase letters, numbers, hyphen`)}async function le(t,e){let i=await we(t);i.found?i.type.isNoun||e.push(`The word "${t}" is not usually used as noun (noun: ${i.stats.noun}%, verb: ${i.stats.verb}%, adjective: ${i.stats.adjective}%)`):e.push(`The word "${t}" is not present in the english dictionary`)}function tt(t){let e={type:"version",text:t,alternativeTypes:[],warnings:[]};return t.match(/^[vV]?\d+(\.\d+)?$/)||e.warnings.push(`The version "${t}" has an invalid structure. Expected something like: v1`),t.match(/^v/)||e.warnings.push(`The version "${t}" should start with a lowercase "v"`),e}async function nt(t){let e={type:"capability",text:t,alternativeTypes:[],warnings:[]};return U.isSingular(t)||e.warnings.push(`The capability "${t}" should be a singular word`),await le(t,e.warnings),e}async function Ce(t){let e={type:"collection",text:t,alternativeTypes:[],warnings:[]};return U.isPlural(t)||e.warnings.push(`The collection "${t}" should be a plural word`),ae(t,e.warnings),await le(t,e.warnings),e}async function Ee(t){return{type:"resource",text:t,alternativeTypes:[],warnings:[]}}async function it(t){let e={type:"sub-resource",text:t,alternativeTypes:[],warnings:[]};return U.isSingular(t)||e.warnings.push(`The sub-resource "${t}" should be a singular word`),ae(t,e.warnings),await le(t,e.warnings),e}async function Re(t){let e={type:"controller",text:t,alternativeTypes:[],warnings:[]};return U.isPlural(t)||e.warnings.push(`The controller "${t}" should be a plural word`),ae(t,e.warnings),e}async function Oe(t,e){switch(t){case"collection":return await Ce(e);case"resource":return await Ee(e);case"sub-resource":return await it(e);case"controller":return await Re(e)}return null}var Se=async(t,e,i)=>{let n={errors:[],tokens:[]},r=e.split("/").filter(s=>s!==""),o=(i.version?1:0)+(i.capability?1:0)+1;if(r.length>=o){let s=0;i.version&&n.tokens.push(tt(r[s++])),i.capability&&n.tokens.push(await nt(r[s++]));let a=!0,l=!0;for(;s<r.length;){let k=s===r.length-1;if(a){let h=await Ce(r[s]);l||((!k||t!=="POST")&&h.alternativeTypes.push("sub-resource"),k&&t==="POST"&&h.alternativeTypes.push("controller")),n.tokens.push(h)}else k&&t==="POST"?n.tokens.push(await Re(r[s])):n.tokens.push(await Ee(r[s]));a=!a,l=!1,s++}}else n.errors.push(et);return n},Le=async(t,e,i)=>{let n=0;for(;n<e.length&&(e[n].type=="version"||e[n].type=="capability");)n++;let r=["collection"],o=!0;for(;n<e.length;){let s=e[n],a=n===e.length-2;if(r.indexOf(s.type)>=0){switch(n===i&&(e[n]=await Oe(s.type,s.text),e[n].alternativeTypes=s.alternativeTypes),s.type){case"collection":r=["resource"],a&&!o&&t==="POST"&&r.push("controller");break;case"resource":r=["collection"],(!a||t!=="POST")&&r.push("sub-resource"),a&&t==="POST"&&r.push("controller");break;case"sub-resource":r=["collection"],a&&t==="POST"&&r.push("controller");break;case"controller":if(r=[],n!==e.length-1)return null;break;default:return console.error("Invalid token type"),null}o=!1,n++}else e[n]=await Oe(r[0],s.text),e[n].alternativeTypes=r.slice(1)}return e},Ue=(t,e)=>{let i=t[e];return i.alternativeTypes.push(i.type),i.type=i.alternativeTypes.shift(),t},ce=(t,e)=>{let i="",n=e.length-1,r=!0;for(;n>=0;){switch(e[n].type){case"collection":r&&(i+=V.collection[t](e[n].text));break;case"resource":if(n>=1&&e[n-1].type==="collection"){if(r)if(t!=="POST")i+=V.resource[t](e[n].text,e[n-1].text);else return"Error: method POST not supported on resources";else i+=V.middle.resourceAndCollection(e[n].text,e[n-1].text);n--}else return"Error: the URI should start with a collection/resource";break;case"sub-resource":if(n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"){if(r)if(t!=="POST")i+=V.subResource[t](e[n].text,e[n-1].text,e[n-2].text);else return"Error: method POST not supported on sub-resources";else i+=V.middle.subResourceAndResourceAndCollection(e[n].text,e[n-1].text,e[n-2].text);n-=2}else return"Error: the URI should start with a collection/resource/sub-resource";break;case"controller":if(t==="POST"&&r)n>=1&&e[n-1].type==="collection"?(i+=V.controller.controllerOnCollection(e[n].text,e[n-1].text),n--):n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"?(i+=V.controller.controllerOnResource(e[n].text,e[n-1].text,e[n-2].text),n-=2):n>=3&&e[n-1].type==="sub-resource"&&e[n-2].type==="resource"&&e[n-3].type==="collection"&&(i+=V.controller.controllerOnSubResource(e[n].text,e[n-1].text,e[n-2].text,e[n-3].text),n-=3);else return"Error: it is possible to use controller only at the end of the URI with the method POST";break}n--,r=!1}return i},V={resource:{GET:(t,e)=>`Retrieve the ${U.singular(e)} with id "${t}"`,POST:(t,e)=>"",PUT:(t,e)=>`Replace with the one in request, the ${U.singular(e)} with id "${t}"`,PATCH:(t,e)=>`Apply the changes listed in request to the ${U.singular(e)} with id "${t}"`,DELETE:(t,e)=>`Delete the ${U.singular(e)} with id "${t}"`},collection:{GET:t=>`Search in the ${t}`,POST:t=>`Create a new ${U.singular(t)}`,PUT:t=>`Replace with the list in request all the ${t}`,PATCH:t=>`Replace with the list in request all the ${t}`,DELETE:t=>`Delete all the ${t}`},subResource:{GET:(t,e,i)=>`Retrieve the ${t} of the ${U.singular(i)} with id "${e}"`,POST:(t,e,i)=>"",PUT:(t,e,i)=>`Replace with the one in request, the ${t} of the ${U.singular(i)} with id "${e}"`,PATCH:(t,e,i)=>`Apply the changes listed in request to the ${t} of the ${U.singular(i)} with id "${e}"`,DELETE:(t,e,i)=>`Delete the ${t} of the ${U.singular(i)} with id "${e}"`},controller:{controllerOnCollection:(t,e)=>`Perform the action of "${t}" on the ${e}`,controllerOnResource:(t,e,i)=>`Perform the action of "${t}" on the ${U.singular(i)} with id "${e}"`,controllerOnSubResource:(t,e,i,n)=>`Perform the action of "${t}" on the ${e}, of the ${U.singular(n)} with id "${i}"`},middle:{resourceAndCollection:(t,e)=>`, of the ${U.singular(e)} with id "${t}"`,subResourceAndResourceAndCollection:(t,e,i)=>`, of the ${t} of the ${U.singular(i)} with id "${e}"`}};function Pe(t,e,i){let n=t.slice();return n[11]=e[i],n}function xe(t){let e,i=t[11]+"",n,r;return{c(){e=v("option"),n=H(i),e.__value=r=t[11],e.value=e.__value},m(o,s){R(o,e,s),f(e,n)},p:M,d(o){o&&S(e)}}}function st(t){let e,i,n,r,o,s,a,l,k,h,b,T,c,p,$,C,A,O,_,E,x,y,g=t[4],d=[];for(let u=0;u<g.length;u+=1)d[u]=xe(Pe(t,g,u));return{c(){e=v("section"),i=v("div"),n=v("div"),r=v("div"),o=v("select");for(let u=0;u<d.length;u+=1)d[u].c();s=w(),a=v("div"),l=v("input"),k=w(),h=v("div"),b=v("div"),T=v("div"),c=v("label"),p=v("input"),$=H(`
                    Version`),C=w(),A=v("div"),O=v("label"),_=v("input"),E=H(`
                    Capability`),t[0]===void 0&&ye(()=>t[6].call(o)),m(r,"class","select"),m(n,"class","control"),m(l,"type","text"),m(l,"class","input"),m(l,"placeholder","Example: /v1/reservation/chains/AAA/links/1234567890"),m(a,"class","control is-expanded"),m(i,"class","field has-addons"),m(p,"type","checkbox"),m(c,"class","checkbox"),m(T,"class","level-item control"),m(_,"type","checkbox"),m(O,"class","checkbox"),m(A,"class","level-item control"),m(b,"class","level-left"),m(h,"class","level"),m(e,"class","box")},m(u,L){R(u,e,L),f(e,i),f(i,n),f(n,r),f(r,o);for(let P=0;P<d.length;P+=1)d[P].m(o,null);Z(o,t[0]),f(i,s),f(i,a),f(a,l),X(l,t[1]),f(e,k),f(e,h),f(h,b),f(b,T),f(T,c),f(c,p),p.checked=t[2],f(c,$),f(b,C),f(b,A),f(A,O),f(O,_),_.checked=t[3],f(O,E),x||(y=[I(o,"change",t[6]),I(o,"change",t[5]),I(l,"input",t[7]),I(l,"input",t[5]),I(p,"change",t[8]),I(p,"change",t[5]),I(_,"change",t[9]),I(_,"change",t[5])],x=!0)},p(u,[L]){if(L&16){g=u[4];let P;for(P=0;P<g.length;P+=1){let ge=Pe(u,g,P);d[P]?d[P].p(ge,L):(d[P]=xe(ge),d[P].c(),d[P].m(o,null))}for(;P<d.length;P+=1)d[P].d(1);d.length=g.length}L&17&&Z(o,u[0]),L&2&&l.value!==u[1]&&X(l,u[1]),L&4&&(p.checked=u[2]),L&8&&(_.checked=u[3])},i:M,o:M,d(u){u&&S(e),G(d,u),x=!1,ve(y)}}}function rt(t,e,i){let n=Object.keys(oe),r=n[0],o="/v1/reservation/chains/AAA/links/1234567890",s=!0,a=!0,l=J();function k(){let p=o.replace(/\?.*/,""),$=new URLSearchParams(window.location.search);$.set("method",r),$.set("uri",p),$.set("version",s?"1":"0"),$.set("capability",a?"1":"0"),window.history.pushState(null,null,"?"+$.toString()),l("uriChange",{method:r,uri:p,version:s,capability:a})}be(()=>{let p=new URLSearchParams(window.location.search);p.has("method")&&n.indexOf(p.get("method"))>=0&&i(0,r=p.get("method")),p.has("uri")&&i(1,o=p.get("uri")),p.has("version")&&i(2,s=!!p.get("version")),p.has("capability")&&i(3,a=!!p.get("capability")),k()});function h(){r=Te(this),i(0,r),i(4,n)}function b(){o=this.value,i(1,o)}function T(){s=this.checked,i(2,s)}function c(){a=this.checked,i(3,a)}return[r,o,s,a,n,k,h,b,T,c]}var ue=class extends B{constructor(e){super(),D(this,e,rt,st,z,{})}},Ie=ue;function ot(t){q(t,"svelte-v09ncf",".icon.is-warning.svelte-v09ncf{color:#ffe86e}span.margin-left.svelte-v09ncf{margin-left:0.5em}button.tag.svelte-v09ncf{border:none;cursor:pointer}.tags.no-margin.svelte-v09ncf{margin:0}.tag.is-separator.svelte-v09ncf{padding-left:0.25em;padding-right:0.25em;background-color:#eee}.tag.has-warning.svelte-v09ncf{text-decoration:wavy;text-decoration-line:underline;text-decoration-color:red}.tag.no-margin.svelte-v09ncf{margin:0}.tag.is-version.svelte-v09ncf{background-color:#b8fbb5}.tag.is-capability.svelte-v09ncf{background-color:#fff2b3}.tag.is-collection.svelte-v09ncf{background-color:#81d5ff}.tag.is-resource.svelte-v09ncf{background-color:#ff889a}.tag.is-sub-resource.svelte-v09ncf{background-color:#ffc2a9}.tag.is-controller.svelte-v09ncf{background-color:#e18af1}")}function Ne(t,e,i){let n=t.slice();return n[7]=e[i],n}function Me(t,e,i){let n=t.slice();return n[10]=e[i],n}function je(t,e,i){let n=t.slice();return n[13]=e[i],n}function He(t,e,i){let n=t.slice();return n[10]=e[i],n[17]=i,n}function at(t){let e,i=t[10].text+"",n,r,o,s;return{c(){e=v("span"),n=H(i),r=w(),m(e,"title",o=t[10].type),m(e,"class",s="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(a,l){R(a,e,l),f(e,n),f(e,r)},p(a,l){l&1&&i!==(i=a[10].text+"")&&Y(n,i),l&1&&o!==(o=a[10].type)&&m(e,"title",o),l&1&&s!==(s="tag is-"+a[10].type+" "+(a[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&m(e,"class",s)},d(a){a&&S(e)}}}function lt(t){let e,i=t[10].text+"",n,r,o,s,a,l,k,h;function b(){return t[5](t[17])}return{c(){e=v("button"),n=H(i),r=w(),o=v("span"),o.innerHTML='<span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>',s=w(),m(o,"class","margin-left svelte-v09ncf"),m(e,"title",a=t[10].type),m(e,"class",l="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(T,c){R(T,e,c),f(e,n),f(e,r),f(e,o),f(e,s),k||(h=I(e,"click",b),k=!0)},p(T,c){t=T,c&1&&i!==(i=t[10].text+"")&&Y(n,i),c&1&&a!==(a=t[10].type)&&m(e,"title",a),c&1&&l!==(l="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&m(e,"class",l)},d(T){T&&S(e),k=!1,h()}}}function ze(t){let e,i,n;function r(a,l){return a[10].alternativeTypes.length>0?lt:at}let o=r(t,-1),s=o(t);return{c(){e=v("span"),e.textContent="/",i=w(),s.c(),n=K(),m(e,"class","tag is-separator svelte-v09ncf")},m(a,l){R(a,e,l),R(a,i,l),s.m(a,l),R(a,n,l)},p(a,l){o===(o=r(a,l))&&s?s.p(a,l):(s.d(1),s=o(a),s&&(s.c(),s.m(n.parentNode,n)))},d(a){a&&S(e),a&&S(i),s.d(a),a&&S(n)}}}function De(t){let e,i,n,r,o,s=t[0],a=[];for(let l=0;l<s.length;l+=1)a[l]=Ve(Me(t,s,l));return{c(){e=v("div"),i=v("p"),i.innerHTML="<strong>Warnings:</strong>",n=w();for(let l=0;l<a.length;l+=1)a[l].c();r=w(),o=v("p"),m(e,"class","warnings")},m(l,k){R(l,e,k),f(e,i),f(e,n);for(let h=0;h<a.length;h+=1)a[h].m(e,null);f(e,r),f(e,o)},p(l,k){if(k&1){s=l[0];let h;for(h=0;h<s.length;h+=1){let b=Me(l,s,h);a[h]?a[h].p(b,k):(a[h]=Ve(b),a[h].c(),a[h].m(e,r))}for(;h<a.length;h+=1)a[h].d(1);a.length=s.length}},d(l){l&&S(e),G(a,l)}}}function Be(t){let e,i,n,r=t[13]+"",o;return{c(){e=v("p"),i=v("span"),i.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>',n=w(),o=H(r),m(i,"class","icon is-warning svelte-v09ncf")},m(s,a){R(s,e,a),f(e,i),f(e,n),f(e,o)},p(s,a){a&1&&r!==(r=s[13]+"")&&Y(o,r)},d(s){s&&S(e)}}}function Ve(t){let e,i=t[10].warnings,n=[];for(let r=0;r<i.length;r+=1)n[r]=Be(je(t,i,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=K()},m(r,o){for(let s=0;s<n.length;s+=1)n[s].m(r,o);R(r,e,o)},p(r,o){if(o&1){i=r[10].warnings;let s;for(s=0;s<i.length;s+=1){let a=je(r,i,s);n[s]?n[s].p(a,o):(n[s]=Be(a),n[s].c(),n[s].m(e.parentNode,e))}for(;s<n.length;s+=1)n[s].d(1);n.length=i.length}},d(r){G(n,r),r&&S(e)}}}function Ge(t){let e,i=t[7]+"",n,r;return{c(){e=v("span"),n=H(i),m(e,"class",r="tag no-margin is-"+t[7]+" svelte-v09ncf")},m(o,s){R(o,e,s),f(e,n)},p:M,d(o){o&&S(e)}}}function ct(t){let e,i,n,r,o,s,a,l,k,h,b,T,c,p,$,C,A,O=t[0],_=[];for(let g=0;g<O.length;g+=1)_[g]=ze(He(t,O,g));let E=t[2]&&De(t),x=t[3],y=[];for(let g=0;g<x.length;g+=1)y[g]=Ge(Ne(t,x,g));return{c(){e=v("div"),i=v("p"),i.innerHTML="<strong>Result</strong>",n=w(),r=v("div");for(let g=0;g<_.length;g+=1)_[g].c();o=w(),s=v("div"),a=v("p"),l=H(t[1]),k=w(),E&&E.c(),h=w(),b=v("div"),T=v("div"),c=w(),p=v("div"),$=v("div");for(let g=0;g<y.length;g+=1)y[g].c();C=w(),A=v("div"),m(i,"class","subtitle"),m(r,"class","tags has-addons"),m(s,"class","block"),m(T,"class","level-left"),m($,"class","tags has-addons no-margin svelte-v09ncf"),m(A,"class","level-item"),m(p,"class","level-right"),m(b,"class","level"),m(e,"class","box")},m(g,d){R(g,e,d),f(e,i),f(e,n),f(e,r);for(let u=0;u<_.length;u+=1)_[u].m(r,null);f(e,o),f(e,s),f(s,a),f(a,l),f(e,k),E&&E.m(e,null),f(e,h),f(e,b),f(b,T),f(b,c),f(b,p),f(p,$);for(let u=0;u<y.length;u+=1)y[u].m($,null);f(p,C),f(p,A)},p(g,[d]){if(d&17){O=g[0];let u;for(u=0;u<O.length;u+=1){let L=He(g,O,u);_[u]?_[u].p(L,d):(_[u]=ze(L),_[u].c(),_[u].m(r,null))}for(;u<_.length;u+=1)_[u].d(1);_.length=O.length}if(d&2&&Y(l,g[1]),g[2]?E?E.p(g,d):(E=De(g),E.c(),E.m(e,h)):E&&(E.d(1),E=null),d&8){x=g[3];let u;for(u=0;u<x.length;u+=1){let L=Ne(g,x,u);y[u]?y[u].p(L,d):(y[u]=Ge(L),y[u].c(),y[u].m($,null))}for(;u<y.length;u+=1)y[u].d(1);y.length=x.length}},i:M,o:M,d(g){g&&S(e),G(_,g),E&&E.d(),G(y,g)}}}function ut(t,e,i){let n,r=Object.values(re),{tokens:o=[]}=e,{text:s=""}=e,a=J();function l(h){a("changeTokenType",{index:h})}let k=h=>l(h);return t.$$set=h=>{"tokens"in h&&i(0,o=h.tokens),"text"in h&&i(1,s=h.text)},t.$$.update=()=>{if(t.$$.dirty&1){e:i(2,n=o.filter(h=>h.warnings.length>0).length>0)}},[o,s,n,r,l,k]}var pe=class extends B{constructor(e){super(),D(this,e,ut,ct,z,{tokens:0,text:1},ot)}},Qe=pe;function pt(t){let e;return{c(){e=v("div"),e.innerHTML=`<p class="subtitle"><strong>Help</strong></p> 
    <p>Work in progress...</p>`,m(e,"class","box")},m(i,n){R(i,e,n)},p:M,i:M,o:M,d(i){i&&S(e)}}}var fe=class extends B{constructor(e){super(),D(this,e,null,pt,z,{})}},We=fe;function ft(t){q(t,"svelte-sbe5kd",".hero.is-small.svelte-sbe5kd .hero-body.svelte-sbe5kd{padding-left:0;padding-right:0}button.box.button.is-active.svelte-sbe5kd.svelte-sbe5kd{background-color:var(--color-accent);color:#fff}")}function Fe(t){let e,i;return e=new Qe({props:{tokens:t[0].tokens,text:t[1]}}),e.$on("changeTokenType",t[4]),{c(){Q(e.$$.fragment)},m(n,r){W(e,n,r),i=!0},p(n,r){let o={};r&1&&(o.tokens=n[0].tokens),r&2&&(o.text=n[1]),e.$set(o)},i(n){i||(N(e.$$.fragment,n),i=!0)},o(n){j(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function Ye(t){let e,i;return e=new We({}),{c(){Q(e.$$.fragment)},m(n,r){W(e,n,r),i=!0},i(n){i||(N(e.$$.fragment,n),i=!0)},o(n){j(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function ht(t){let e,i,n,r,o,s,a,l,k,h,b,T,c,p,$,C,A,O,_,E,x;e=new ke({props:{activePage:"restApiToText"}}),s=new Ie({}),s.$on("uriChange",t[3]),l=new _e({props:{messages:t[0].errors}});let y=t[0].tokens.length>0&&Fe(t),g=t[2]&&Ye(t);return O=new $e({}),{c(){Q(e.$$.fragment),i=w(),n=v("div"),r=v("section"),r.innerHTML=`<div class="hero-body svelte-sbe5kd"><h1 class="title">REST Api to Text</h1> 
      <p class="subtitle">Input your api <i>method</i> and <i>URI</i> and check what is the meaning of it according to the REST API guidelines</p></div>`,o=w(),Q(s.$$.fragment),a=w(),Q(l.$$.fragment),k=w(),y&&y.c(),h=w(),b=v("button"),T=v("span"),T.innerHTML='<i class="far fa-circle-question"></i>',c=w(),p=v("span"),p.textContent="Help",C=w(),g&&g.c(),A=w(),Q(O.$$.fragment),m(r,"class","hero is-small svelte-sbe5kd"),m(T,"class","icon is-small"),m(b,"class",$="button box "+(t[2]?"is-active":"")+" svelte-sbe5kd"),m(n,"class","container")},m(d,u){W(e,d,u),R(d,i,u),R(d,n,u),f(n,r),f(n,o),W(s,n,null),f(n,a),W(l,n,null),f(n,k),y&&y.m(n,null),f(n,h),f(n,b),f(b,T),f(b,c),f(b,p),f(n,C),g&&g.m(n,null),R(d,A,u),W(O,d,u),_=!0,E||(x=I(b,"click",t[5]),E=!0)},p(d,[u]){let L={};u&1&&(L.messages=d[0].errors),l.$set(L),d[0].tokens.length>0?y?(y.p(d,u),u&1&&N(y,1)):(y=Fe(d),y.c(),N(y,1),y.m(n,h)):y&&(ee(),j(y,1,1,()=>{y=null}),te()),(!_||u&4&&$!==($="button box "+(d[2]?"is-active":"")+" svelte-sbe5kd"))&&m(b,"class",$),d[2]?g?u&4&&N(g,1):(g=Ye(d),g.c(),N(g,1),g.m(n,null)):g&&(ee(),j(g,1,1,()=>{g=null}),te())},i(d){_||(N(e.$$.fragment,d),N(s.$$.fragment,d),N(l.$$.fragment,d),N(y),N(g),N(O.$$.fragment,d),_=!0)},o(d){j(e.$$.fragment,d),j(s.$$.fragment,d),j(l.$$.fragment,d),j(y),j(g),j(O.$$.fragment,d),_=!1},d(d){F(e,d),d&&S(i),d&&S(n),F(s),F(l),y&&y.d(),g&&g.d(),d&&S(A),F(O,d),E=!1,x()}}}function gt(t,e,i){let n={errors:[],tokens:[]},r="",o,s=!1;function a(h){return ne(this,void 0,void 0,function*(){o=h.detail.method,i(0,n=yield Se(o,h.detail.uri,{version:h.detail.version,capability:h.detail.capability})),i(1,r=ce(o,n.tokens))})}function l(h){return ne(this,void 0,void 0,function*(){let b=h.detail.index;b<n.tokens.length&&(i(0,n.tokens=Ue(n.tokens,b),n),i(0,n.tokens=yield Le(o,n.tokens,b),n),i(1,r=ce(o,n.tokens)))})}return[n,r,s,a,l,()=>i(2,s=!s)]}var he=class extends B{constructor(e){super(),D(this,e,gt,ht,z,{},ft)}},qe=he;new qe({target:document.body});me();
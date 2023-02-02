// Project: https://github.com/marc0l92/api-tools
import{a as ne,b as _e}from"./chunk-QYEGALKP.js";import{A as J,B as be,C as K,D as X,E as x,F as q,G as Q,H as W,I as F,J as z,K as D,L as ke,a as de,c as Je,f as me,g as M,h as ve,i as H,k as f,l as G,m as S,n as L,o as V,p as m,q as j,r as C,s as Z,t as N,u as d,v as Y,w as ee,x as te,y as Te,z as ye}from"./chunk-LEI3LKW5.js";var we=Je((ie,se)=>{(function(t,e){typeof de=="function"&&typeof ie=="object"&&typeof se=="object"?se.exports=e():typeof define=="function"&&define.amd?define(function(){return e()}):t.pluralize=e()})(ie,function(){var t=[],e=[],i={},n={},s={};function o(l){return typeof l=="string"?new RegExp("^"+l+"$","i"):l}function r(l,u){return l===u?u:l===l.toLowerCase()?u.toLowerCase():l===l.toUpperCase()?u.toUpperCase():l[0]===l[0].toUpperCase()?u.charAt(0).toUpperCase()+u.substr(1).toLowerCase():u.toLowerCase()}function a(l,u){return l.replace(/\$(\d{1,2})/g,function($,A){return u[A]||""})}function c(l,u){return l.replace(u[0],function($,A){var O=a(u[1],arguments);return r($===""?l[A-1]:$,O)})}function _(l,u,$){if(!l.length||i.hasOwnProperty(l))return u;for(var A=$.length;A--;){var O=$[A];if(O[0].test(u))return c(u,O)}return u}function p(l,u,$){return function(A){var O=A.toLowerCase();return u.hasOwnProperty(O)?r(A,O):l.hasOwnProperty(O)?r(A,l[O]):_(O,A,$)}}function k(l,u,$,A){return function(O){var R=O.toLowerCase();return u.hasOwnProperty(R)?!0:l.hasOwnProperty(R)?!1:_(R,R,$)===R}}function y(l,u,$){var A=u===1?y.singular(l):y.plural(l);return($?u+" ":"")+A}return y.plural=p(s,n,t),y.isPlural=k(s,n,t),y.singular=p(n,s,e),y.isSingular=k(n,s,e),y.addPluralRule=function(l,u){t.push([o(l),u])},y.addSingularRule=function(l,u){e.push([o(l),u])},y.addUncountableRule=function(l){if(typeof l=="string"){i[l.toLowerCase()]=!0;return}y.addPluralRule(l,"$0"),y.addSingularRule(l,"$0")},y.addIrregularRule=function(l,u){u=u.toLowerCase(),l=l.toLowerCase(),s[l]=u,n[u]=l},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(l){return y.addIrregularRule(l[0],l[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(l){return y.addPluralRule(l[0],l[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(l){return y.addSingularRule(l[0],l[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(y.addUncountableRule),y})});var Ke="https://api.dictionaryapi.dev/api/v2/entries/en/";function Xe(t){t.stats.noun>=t.stats.verb&&t.stats.noun>=t.stats.adjective&&(t.type.isNoun=!0),t.stats.verb>=t.stats.noun&&t.stats.verb>=t.stats.adjective&&(t.type.isVerb=!0),t.stats.adjective>=t.stats.noun&&t.stats.adjective>=t.stats.verb&&(t.type.isAdjective=!0)}function Ze(t){let e=Math.max(1,t.stats.noun+t.stats.verb+t.stats.adjective);t.stats.noun=Math.round(t.stats.noun/e*100),t.stats.verb=Math.round(t.stats.verb/e*100),t.stats.adjective=Math.round(t.stats.adjective/e*100)}var $e=async t=>{let e={found:!0,stats:{noun:0,verb:0,adjective:0},type:{isNoun:!1,isVerb:!1,isAdjective:!1}},i=await fetch(Ke+encodeURIComponent(t),{method:"GET"});if(!i.ok)return e.found=!1,e;let n=await i.json();for(let s of n)for(let o of s.meanings)switch(o.partOfSpeech){case"noun":e.stats.noun+=o.definitions.length;break;case"verb":e.stats.verb+=o.definitions.length;break;case"adjective":e.stats.adjective+=o.definitions.length;break}return Xe(e),Ze(e),e};var U=we(),re=(r=>(r.VERSION="version",r.CAPABILITY="capability",r.COLLECTION="collection",r.RESOURCE="resource",r.SUB_RESOURCE="sub-resource",r.CONTROLLER="controller",r))(re||{}),oe=(o=>(o.GET="GET",o.POST="POST",o.PUT="PUT",o.PATCH="PATCH",o.DELETE="DELETE",o))(oe||{}),et="Uri not completed, continue typing...";function ae(t,e){t.match(/^[a-z0-9\-]*$/)||e.push(`The word "${t}" contains some characters not allowed. Allowed characters are: lowercase letters, numbers, hyphen`)}async function le(t,e){let i=await $e(t);i.found?i.type.isNoun||e.push(`The word "${t}" is not usually used as noun (noun: ${i.stats.noun}%, verb: ${i.stats.verb}%, adjective: ${i.stats.adjective}%)`):e.push(`The word "${t}" is not present in the english dictionary`)}function tt(t){let e={type:"version",text:t,alternativeTypes:[],warnings:[]};return t.match(/^[vV]?\d+(\.\d+)?$/)||e.warnings.push(`The version "${t}" has an invalid structure. Expected something like: v1`),t.match(/^v/)||e.warnings.push(`The version "${t}" should start with a lowercase "v"`),e}async function nt(t){let e={type:"capability",text:t,alternativeTypes:[],warnings:[]};return U.isSingular(t)||e.warnings.push(`The capability "${t}" should be a singular word`),await le(t,e.warnings),e}async function Oe(t){let e={type:"collection",text:t,alternativeTypes:[],warnings:[]};return U.isPlural(t)||e.warnings.push(`The collection "${t}" should be a plural word`),ae(t,e.warnings),await le(t,e.warnings),e}async function Ce(t){return{type:"resource",text:t,alternativeTypes:[],warnings:[]}}async function it(t){let e={type:"sub-resource",text:t,alternativeTypes:[],warnings:[]};return U.isSingular(t)||e.warnings.push(`The sub-resource "${t}" should be a singular word`),ae(t,e.warnings),await le(t,e.warnings),e}async function Ee(t){let e={type:"controller",text:t,alternativeTypes:[],warnings:[]};return U.isPlural(t)||e.warnings.push(`The controller "${t}" should be a plural word`),ae(t,e.warnings),e}async function Ae(t,e){switch(t){case"collection":return await Oe(e);case"resource":return await Ce(e);case"sub-resource":return await it(e);case"controller":return await Ee(e)}return null}var Re=async(t,e,i)=>{let n={errors:[],tokens:[]},s=e.split("/").filter(r=>r!==""),o=(i.version?1:0)+(i.capability?1:0)+1;if(s.length>=o){let r=0;i.version&&n.tokens.push(tt(s[r++])),i.capability&&n.tokens.push(await nt(s[r++]));let a=!0,c=!0;for(;r<s.length;){let _=r===s.length-1;if(a){let p=await Oe(s[r]);c||((!_||t!=="POST")&&p.alternativeTypes.push("sub-resource"),_&&t==="POST"&&p.alternativeTypes.push("controller")),n.tokens.push(p)}else _&&t==="POST"?n.tokens.push(await Ee(s[r])):n.tokens.push(await Ce(s[r]));a=!a,c=!1,r++}}else n.errors.push(et);return n},Se=async(t,e,i)=>{let n=0;for(;n<e.length&&(e[n].type=="version"||e[n].type=="capability");)n++;let s=["collection"],o=!0;for(;n<e.length;){let r=e[n],a=n===e.length-2;if(s.indexOf(r.type)>=0){switch(n===i&&(e[n]=await Ae(r.type,r.text),e[n].alternativeTypes=r.alternativeTypes),r.type){case"collection":s=["resource"],a&&!o&&t==="POST"&&s.push("controller");break;case"resource":s=["collection"],(!a||t!=="POST")&&s.push("sub-resource"),a&&t==="POST"&&s.push("controller");break;case"sub-resource":s=["collection"],a&&t==="POST"&&s.push("controller");break;case"controller":if(s=[],n!==e.length-1)return null;break;default:return console.error("Invalid token type"),null}o=!1,n++}else e[n]=await Ae(s[0],r.text),e[n].alternativeTypes=s.slice(1)}return e},Le=(t,e)=>{let i=t[e];return i.alternativeTypes.push(i.type),i.type=i.alternativeTypes.shift(),t},ce=(t,e)=>{let i="",n=e.length-1,s=!0;for(;n>=0;){switch(e[n].type){case"collection":s&&(i+=B.collection[t](e[n].text));break;case"resource":if(n>=1&&e[n-1].type==="collection"){if(s)if(t!=="POST")i+=B.resource[t](e[n].text,e[n-1].text);else return"Error: method POST not supported on resources";else i+=B.middle.resourceAndCollection(e[n].text,e[n-1].text);n--}else return"Error: the URI should start with a collection/resource";break;case"sub-resource":if(n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"){if(s)if(t!=="POST")i+=B.subResource[t](e[n].text,e[n-1].text,e[n-2].text);else return"Error: method POST not supported on sub-resources";else i+=B.middle.subResourceAndResourceAndCollection(e[n].text,e[n-1].text,e[n-2].text);n-=2}else return"Error: the URI should start with a collection/resource/sub-resource";break;case"controller":if(t==="POST"&&s)n>=1&&e[n-1].type==="collection"?(i+=B.controller.controllerOnCollection(e[n].text,e[n-1].text),n--):n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"?(i+=B.controller.controllerOnResource(e[n].text,e[n-1].text,e[n-2].text),n-=2):n>=3&&e[n-1].type==="sub-resource"&&e[n-2].type==="resource"&&e[n-3].type==="collection"&&(i+=B.controller.controllerOnSubResource(e[n].text,e[n-1].text,e[n-2].text,e[n-3].text),n-=3);else return"Error: it is possible to use controller only at the end of the URI with the method POST";break}n--,s=!1}return i},B={resource:{GET:(t,e)=>`Retrieve the ${U.singular(e)} with id "${t}"`,POST:(t,e)=>"",PUT:(t,e)=>`Replace with the one in request, the ${U.singular(e)} with id "${t}"`,PATCH:(t,e)=>`Apply the changes listed in request to the ${U.singular(e)} with id "${t}"`,DELETE:(t,e)=>`Delete the ${U.singular(e)} with id "${t}"`},collection:{GET:t=>`Search in the ${t}`,POST:t=>`Create a new ${U.singular(t)}`,PUT:t=>`Replace with the list in request all the ${t}`,PATCH:t=>`Replace with the list in request all the ${t}`,DELETE:t=>`Delete all the ${t}`},subResource:{GET:(t,e,i)=>`Retrieve the ${t} of the ${U.singular(i)} with id "${e}"`,POST:(t,e,i)=>"",PUT:(t,e,i)=>`Replace with the one in request, the ${t} of the ${U.singular(i)} with id "${e}"`,PATCH:(t,e,i)=>`Apply the changes listed in request to the ${t} of the ${U.singular(i)} with id "${e}"`,DELETE:(t,e,i)=>`Delete the ${t} of the ${U.singular(i)} with id "${e}"`},controller:{controllerOnCollection:(t,e)=>`Perform the action of "${t}" on the ${e}`,controllerOnResource:(t,e,i)=>`Perform the action of "${t}" on the ${U.singular(i)} with id "${e}"`,controllerOnSubResource:(t,e,i,n)=>`Perform the action of "${t}" on the ${e}, of the ${U.singular(n)} with id "${i}"`},middle:{resourceAndCollection:(t,e)=>`, of the ${U.singular(e)} with id "${t}"`,subResourceAndResourceAndCollection:(t,e,i)=>`, of the ${t} of the ${U.singular(i)} with id "${e}"`}};function st(t){G(t,"svelte-ksh5de",".box.svelte-ksh5de{background-color:var(--color-background-accent)}")}function Ue(t,e,i){let n=t.slice();return n[11]=e[i],n}function Pe(t){let e,i=t[11]+"",n,s;return{c(){e=m("option"),n=j(i),e.__value=s=t[11],e.value=e.__value},m(o,r){S(o,e,r),f(e,n)},p:M,d(o){o&&L(e)}}}function rt(t){let e,i,n,s,o,r,a,c,_,p,k,y,l,u,$,A,O,R,v,b,w,T,g=t[4],E=[];for(let h=0;h<g.length;h+=1)E[h]=Pe(Ue(t,g,h));return{c(){e=m("section"),i=m("div"),n=m("div"),s=m("div"),o=m("select");for(let h=0;h<E.length;h+=1)E[h].c();r=C(),a=m("div"),c=m("input"),_=C(),p=m("div"),k=m("div"),y=m("div"),l=m("label"),u=m("input"),$=j(`
                    Version`),A=C(),O=m("div"),R=m("label"),v=m("input"),b=j(`
                    Capability`),t[0]===void 0&&be(()=>t[6].call(o)),d(s,"class","select"),d(n,"class","control"),d(c,"type","text"),d(c,"class","input"),d(c,"placeholder","Example: /v1/reservation/chains/AAA/links/1234567890"),d(a,"class","control is-expanded"),d(i,"class","field has-addons"),d(u,"type","checkbox"),d(l,"class","checkbox"),d(y,"class","level-item control"),d(v,"type","checkbox"),d(R,"class","checkbox"),d(O,"class","level-item control"),d(k,"class","level-left"),d(p,"class","level"),d(e,"class","box svelte-ksh5de")},m(h,I){S(h,e,I),f(e,i),f(i,n),f(n,s),f(s,o);for(let P=0;P<E.length;P+=1)E[P].m(o,null);te(o,t[0]),f(i,r),f(i,a),f(a,c),ee(c,t[1]),f(e,_),f(e,p),f(p,k),f(k,y),f(y,l),f(l,u),u.checked=t[2],f(l,$),f(k,A),f(k,O),f(O,R),f(R,v),v.checked=t[3],f(R,b),w||(T=[N(o,"change",t[6]),N(o,"change",t[5]),N(c,"input",t[7]),N(c,"input",t[5]),N(u,"change",t[8]),N(u,"change",t[5]),N(v,"change",t[9]),N(v,"change",t[5])],w=!0)},p(h,[I]){if(I&16){g=h[4];let P;for(P=0;P<g.length;P+=1){let ge=Ue(h,g,P);E[P]?E[P].p(ge,I):(E[P]=Pe(ge),E[P].c(),E[P].m(o,null))}for(;P<E.length;P+=1)E[P].d(1);E.length=g.length}I&17&&te(o,h[0]),I&2&&c.value!==h[1]&&ee(c,h[1]),I&4&&(u.checked=h[2]),I&8&&(v.checked=h[3])},i:M,o:M,d(h){h&&L(e),V(E,h),w=!1,ve(T)}}}function ot(t,e,i){let n=Object.keys(oe),s=n[0],o="/v1/reservation/chains/AAA/links/1234567890",r=!0,a=!0,c=J();function _(){let u=o.replace(/\?.*/,""),$=new URLSearchParams(window.location.search);$.set("method",s),$.set("uri",u),$.set("version",r?"1":"0"),$.set("capability",a?"1":"0"),window.history.pushState(null,null,"?"+$.toString()),c("uriChange",{method:s,uri:u,version:r,capability:a})}ye(()=>{let u=new URLSearchParams(window.location.search);u.has("method")&&n.indexOf(u.get("method"))>=0&&i(0,s=u.get("method")),u.has("uri")&&i(1,o=u.get("uri")),u.has("version")&&i(2,r=!!u.get("version")),u.has("capability")&&i(3,a=!!u.get("capability")),_()});function p(){s=Te(this),i(0,s),i(4,n)}function k(){o=this.value,i(1,o)}function y(){r=this.checked,i(2,r)}function l(){a=this.checked,i(3,a)}return[s,o,r,a,n,_,p,k,y,l]}var ue=class extends D{constructor(e){super(),z(this,e,ot,rt,H,{},st)}},xe=ue;function at(t){G(t,"svelte-1vy5yoq",".box.svelte-1vy5yoq{background-color:var(--color-background-accent)}.icon.is-warning.svelte-1vy5yoq{color:#ffe86e}span.margin-left.svelte-1vy5yoq{margin-left:0.5em}button.tag.svelte-1vy5yoq{border:none;cursor:pointer}.tags.no-margin.svelte-1vy5yoq{margin:0}.tag.is-separator.svelte-1vy5yoq{padding-left:0.25em;padding-right:0.25em;background-color:#eee}.tag.has-warning.svelte-1vy5yoq{text-decoration:wavy;text-decoration-line:underline;text-decoration-color:red}.tag.no-margin.svelte-1vy5yoq{margin:0}.tag.is-version.svelte-1vy5yoq{background-color:#b8fbb5}.tag.is-capability.svelte-1vy5yoq{background-color:#fff2b3}.tag.is-collection.svelte-1vy5yoq{background-color:#81d5ff}.tag.is-resource.svelte-1vy5yoq{background-color:#ff889a}.tag.is-sub-resource.svelte-1vy5yoq{background-color:#ffc2a9}.tag.is-controller.svelte-1vy5yoq{background-color:#e18af1}")}function Ie(t,e,i){let n=t.slice();return n[7]=e[i],n}function Ne(t,e,i){let n=t.slice();return n[10]=e[i],n}function Me(t,e,i){let n=t.slice();return n[13]=e[i],n}function qe(t,e,i){let n=t.slice();return n[10]=e[i],n[17]=i,n}function lt(t){let e,i=t[10].text+"",n,s,o,r;return{c(){e=m("span"),n=j(i),s=C(),d(e,"title",o=t[10].type),d(e,"class",r="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-1vy5yoq")},m(a,c){S(a,e,c),f(e,n),f(e,s)},p(a,c){c&1&&i!==(i=a[10].text+"")&&Y(n,i),c&1&&o!==(o=a[10].type)&&d(e,"title",o),c&1&&r!==(r="tag is-"+a[10].type+" "+(a[10].warnings.length>0?"has-warning":"")+" svelte-1vy5yoq")&&d(e,"class",r)},d(a){a&&L(e)}}}function ct(t){let e,i=t[10].text+"",n,s,o,r,a,c,_,p;function k(){return t[5](t[17])}return{c(){e=m("button"),n=j(i),s=C(),o=m("span"),o.innerHTML='<span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>',r=C(),d(o,"class","margin-left svelte-1vy5yoq"),d(e,"title",a=t[10].type),d(e,"class",c="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-1vy5yoq")},m(y,l){S(y,e,l),f(e,n),f(e,s),f(e,o),f(e,r),_||(p=N(e,"click",k),_=!0)},p(y,l){t=y,l&1&&i!==(i=t[10].text+"")&&Y(n,i),l&1&&a!==(a=t[10].type)&&d(e,"title",a),l&1&&c!==(c="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-1vy5yoq")&&d(e,"class",c)},d(y){y&&L(e),_=!1,p()}}}function je(t){let e,i,n;function s(a,c){return a[10].alternativeTypes.length>0?ct:lt}let o=s(t,-1),r=o(t);return{c(){e=m("span"),e.textContent="/",i=C(),r.c(),n=Z(),d(e,"class","tag is-separator svelte-1vy5yoq")},m(a,c){S(a,e,c),S(a,i,c),r.m(a,c),S(a,n,c)},p(a,c){o===(o=s(a,c))&&r?r.p(a,c):(r.d(1),r=o(a),r&&(r.c(),r.m(n.parentNode,n)))},d(a){a&&L(e),a&&L(i),r.d(a),a&&L(n)}}}function He(t){let e,i,n,s,o,r=t[0],a=[];for(let c=0;c<r.length;c+=1)a[c]=De(Ne(t,r,c));return{c(){e=m("div"),i=m("p"),i.innerHTML="<strong>Warnings:</strong>",n=C();for(let c=0;c<a.length;c+=1)a[c].c();s=C(),o=m("p"),d(e,"class","warnings")},m(c,_){S(c,e,_),f(e,i),f(e,n);for(let p=0;p<a.length;p+=1)a[p].m(e,null);f(e,s),f(e,o)},p(c,_){if(_&1){r=c[0];let p;for(p=0;p<r.length;p+=1){let k=Ne(c,r,p);a[p]?a[p].p(k,_):(a[p]=De(k),a[p].c(),a[p].m(e,s))}for(;p<a.length;p+=1)a[p].d(1);a.length=r.length}},d(c){c&&L(e),V(a,c)}}}function ze(t){let e,i,n,s=t[13]+"",o;return{c(){e=m("p"),i=m("span"),i.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>',n=C(),o=j(s),d(i,"class","icon is-warning svelte-1vy5yoq")},m(r,a){S(r,e,a),f(e,i),f(e,n),f(e,o)},p(r,a){a&1&&s!==(s=r[13]+"")&&Y(o,s)},d(r){r&&L(e)}}}function De(t){let e,i=t[10].warnings,n=[];for(let s=0;s<i.length;s+=1)n[s]=ze(Me(t,i,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=Z()},m(s,o){for(let r=0;r<n.length;r+=1)n[r].m(s,o);S(s,e,o)},p(s,o){if(o&1){i=s[10].warnings;let r;for(r=0;r<i.length;r+=1){let a=Me(s,i,r);n[r]?n[r].p(a,o):(n[r]=ze(a),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=i.length}},d(s){V(n,s),s&&L(e)}}}function Be(t){let e,i=t[7]+"",n,s;return{c(){e=m("span"),n=j(i),d(e,"class",s="tag no-margin is-"+t[7]+" svelte-1vy5yoq")},m(o,r){S(o,e,r),f(e,n)},p:M,d(o){o&&L(e)}}}function ut(t){let e,i,n,s,o,r,a,c,_,p,k,y,l,u,$,A,O,R=t[0],v=[];for(let g=0;g<R.length;g+=1)v[g]=je(qe(t,R,g));let b=t[2]&&He(t),w=t[3],T=[];for(let g=0;g<w.length;g+=1)T[g]=Be(Ie(t,w,g));return{c(){e=m("div"),i=m("p"),i.innerHTML="<strong>Result</strong>",n=C(),s=m("div");for(let g=0;g<v.length;g+=1)v[g].c();o=C(),r=m("div"),a=m("p"),c=j(t[1]),_=C(),b&&b.c(),p=C(),k=m("div"),y=m("div"),l=C(),u=m("div"),$=m("div");for(let g=0;g<T.length;g+=1)T[g].c();A=C(),O=m("div"),d(i,"class","subtitle"),d(s,"class","tags has-addons"),d(r,"class","block"),d(y,"class","level-left"),d($,"class","tags has-addons no-margin svelte-1vy5yoq"),d(O,"class","level-item"),d(u,"class","level-right"),d(k,"class","level"),d(e,"class","box svelte-1vy5yoq")},m(g,E){S(g,e,E),f(e,i),f(e,n),f(e,s);for(let h=0;h<v.length;h+=1)v[h].m(s,null);f(e,o),f(e,r),f(r,a),f(a,c),f(e,_),b&&b.m(e,null),f(e,p),f(e,k),f(k,y),f(k,l),f(k,u),f(u,$);for(let h=0;h<T.length;h+=1)T[h].m($,null);f(u,A),f(u,O)},p(g,[E]){if(E&17){R=g[0];let h;for(h=0;h<R.length;h+=1){let I=qe(g,R,h);v[h]?v[h].p(I,E):(v[h]=je(I),v[h].c(),v[h].m(s,null))}for(;h<v.length;h+=1)v[h].d(1);v.length=R.length}if(E&2&&Y(c,g[1]),g[2]?b?b.p(g,E):(b=He(g),b.c(),b.m(e,p)):b&&(b.d(1),b=null),E&8){w=g[3];let h;for(h=0;h<w.length;h+=1){let I=Ie(g,w,h);T[h]?T[h].p(I,E):(T[h]=Be(I),T[h].c(),T[h].m($,null))}for(;h<T.length;h+=1)T[h].d(1);T.length=w.length}},i:M,o:M,d(g){g&&L(e),V(v,g),b&&b.d(),V(T,g)}}}function pt(t,e,i){let n,s=Object.values(re),{tokens:o=[]}=e,{text:r=""}=e,a=J();function c(p){a("changeTokenType",{index:p})}let _=p=>c(p);return t.$$set=p=>{"tokens"in p&&i(0,o=p.tokens),"text"in p&&i(1,r=p.text)},t.$$.update=()=>{if(t.$$.dirty&1){e:i(2,n=o.filter(p=>p.warnings.length>0).length>0)}},[o,r,n,s,c,_]}var pe=class extends D{constructor(e){super(),z(this,e,pt,ut,H,{tokens:0,text:1},at)}},Ve=pe;function ft(t){let e;return{c(){e=m("div"),e.innerHTML=`<p class="subtitle"><strong>Help</strong></p> 
    <p>Work in progress...</p>`,d(e,"class","box")},m(i,n){S(i,e,n)},p:M,i:M,o:M,d(i){i&&L(e)}}}var fe=class extends D{constructor(e){super(),z(this,e,null,ft,H,{})}},Ge=fe;function ht(t){G(t,"svelte-sbe5kd",".hero.is-small.svelte-sbe5kd .hero-body.svelte-sbe5kd{padding-left:0;padding-right:0}button.box.button.is-active.svelte-sbe5kd.svelte-sbe5kd{background-color:var(--color-accent);color:#fff}")}function Qe(t){let e,i;return e=new _e({props:{messages:t[0].errors}}),{c(){Q(e.$$.fragment)},m(n,s){W(e,n,s),i=!0},p(n,s){let o={};s&1&&(o.messages=n[0].errors),e.$set(o)},i(n){i||(x(e.$$.fragment,n),i=!0)},o(n){q(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function We(t){let e,i;return e=new Ve({props:{tokens:t[0].tokens,text:t[1]}}),e.$on("changeTokenType",t[4]),{c(){Q(e.$$.fragment)},m(n,s){W(e,n,s),i=!0},p(n,s){let o={};s&1&&(o.tokens=n[0].tokens),s&2&&(o.text=n[1]),e.$set(o)},i(n){i||(x(e.$$.fragment,n),i=!0)},o(n){q(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function Fe(t){let e,i;return e=new Ge({}),{c(){Q(e.$$.fragment)},m(n,s){W(e,n,s),i=!0},i(n){i||(x(e.$$.fragment,n),i=!0)},o(n){q(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function gt(t){let e,i,n,s,o,r,a,c,_,p,k,y,l,u,$,A,O,R;e=new ke({props:{activePage:"restApiToText"}}),r=new xe({}),r.$on("uriChange",t[3]);let v=t[0].errors.length>0&&Qe(t),b=t[0].tokens.length>0&&We(t),w=t[2]&&Fe(t);return{c(){Q(e.$$.fragment),i=C(),n=m("div"),s=m("section"),s.innerHTML=`<div class="hero-body svelte-sbe5kd"><h1 class="title">REST Api to Text</h1> 
      <p class="subtitle">Input your api <i>method</i> and <i>URI</i> and check what is the meaning of it according to the REST API guidelines</p></div>`,o=C(),Q(r.$$.fragment),a=C(),v&&v.c(),c=C(),b&&b.c(),_=C(),p=m("button"),k=m("span"),k.innerHTML='<i class="far fa-circle-question"></i>',y=C(),l=m("span"),l.textContent="Help",$=C(),w&&w.c(),d(s,"class","hero is-small svelte-sbe5kd"),d(k,"class","icon is-small"),d(p,"class",u="button box "+(t[2]?"is-active":"")+" svelte-sbe5kd"),d(n,"class","container")},m(T,g){W(e,T,g),S(T,i,g),S(T,n,g),f(n,s),f(n,o),W(r,n,null),f(n,a),v&&v.m(n,null),f(n,c),b&&b.m(n,null),f(n,_),f(n,p),f(p,k),f(p,y),f(p,l),f(n,$),w&&w.m(n,null),A=!0,O||(R=N(p,"click",t[5]),O=!0)},p(T,[g]){T[0].errors.length>0?v?(v.p(T,g),g&1&&x(v,1)):(v=Qe(T),v.c(),x(v,1),v.m(n,c)):v&&(K(),q(v,1,1,()=>{v=null}),X()),T[0].tokens.length>0?b?(b.p(T,g),g&1&&x(b,1)):(b=We(T),b.c(),x(b,1),b.m(n,_)):b&&(K(),q(b,1,1,()=>{b=null}),X()),(!A||g&4&&u!==(u="button box "+(T[2]?"is-active":"")+" svelte-sbe5kd"))&&d(p,"class",u),T[2]?w?g&4&&x(w,1):(w=Fe(T),w.c(),x(w,1),w.m(n,null)):w&&(K(),q(w,1,1,()=>{w=null}),X())},i(T){A||(x(e.$$.fragment,T),x(r.$$.fragment,T),x(v),x(b),x(w),A=!0)},o(T){q(e.$$.fragment,T),q(r.$$.fragment,T),q(v),q(b),q(w),A=!1},d(T){F(e,T),T&&L(i),T&&L(n),F(r),v&&v.d(),b&&b.d(),w&&w.d(),O=!1,R()}}}function dt(t,e,i){let n={errors:[],tokens:[]},s="",o,r=!1;function a(p){return ne(this,void 0,void 0,function*(){o=p.detail.method,i(0,n=yield Re(o,p.detail.uri,{version:p.detail.version,capability:p.detail.capability})),i(1,s=ce(o,n.tokens))})}function c(p){return ne(this,void 0,void 0,function*(){let k=p.detail.index;k<n.tokens.length&&(i(0,n.tokens=Le(n.tokens,k),n),i(0,n.tokens=yield Se(o,n.tokens,k),n),i(1,s=ce(o,n.tokens)))})}return[n,s,r,a,c,()=>i(2,r=!r)]}var he=class extends D{constructor(e){super(),z(this,e,dt,gt,H,{},ht)}},Ye=he;new Ye({target:document.body});me();

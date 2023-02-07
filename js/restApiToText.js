// Project: https://github.com/marc0l92/api-tools
import{a as ke}from"./chunk-JWREETQW.js";import{c as ne}from"./chunk-SVSPBHPD.js";import{A as te,B as Te,C as be,E as J,F as $e,G as K,H as X,I as x,J as M,K as Q,L as W,M as F,N as D,O as B,P as ye,Q as _e,c as de,e as Ke,h as me,i as j,j as ve,k as z,n as h,o as q,p as S,q as L,r as G,s as v,t as H,u as A,v as Z,w as N,x as m,y as Y,z as ee}from"./chunk-M2BNG6DR.js";var Ae=Ke((ie,se)=>{(function(t,e){typeof de=="function"&&typeof ie=="object"&&typeof se=="object"?se.exports=e():typeof define=="function"&&define.amd?define(function(){return e()}):t.pluralize=e()})(ie,function(){var t=[],e=[],i={},n={},s={};function o(l){return typeof l=="string"?new RegExp("^"+l+"$","i"):l}function r(l,p){return l===p?p:l===l.toLowerCase()?p.toLowerCase():l===l.toUpperCase()?p.toUpperCase():l[0]===l[0].toUpperCase()?p.charAt(0).toUpperCase()+p.substr(1).toLowerCase():p.toLowerCase()}function a(l,p){return l.replace(/\$(\d{1,2})/g,function(_,C){return p[C]||""})}function u(l,p){return l.replace(p[0],function(_,C){var k=a(p[1],arguments);return r(_===""?l[C-1]:_,k)})}function y(l,p,_){if(!l.length||i.hasOwnProperty(l))return p;for(var C=_.length;C--;){var k=_[C];if(k[0].test(p))return u(p,k)}return p}function f(l,p,_){return function(C){var k=C.toLowerCase();return p.hasOwnProperty(k)?r(C,k):l.hasOwnProperty(k)?r(C,l[k]):y(k,C,_)}}function $(l,p,_,C){return function(k){var E=k.toLowerCase();return p.hasOwnProperty(E)?!0:l.hasOwnProperty(E)?!1:y(E,E,_)===E}}function T(l,p,_){var C=p===1?T.singular(l):T.plural(l);return(_?p+" ":"")+C}return T.plural=f(s,n,t),T.isPlural=$(s,n,t),T.singular=f(n,s,e),T.isSingular=$(n,s,e),T.addPluralRule=function(l,p){t.push([o(l),p])},T.addSingularRule=function(l,p){e.push([o(l),p])},T.addUncountableRule=function(l){if(typeof l=="string"){i[l.toLowerCase()]=!0;return}T.addPluralRule(l,"$0"),T.addSingularRule(l,"$0")},T.addIrregularRule=function(l,p){p=p.toLowerCase(),l=l.toLowerCase(),s[l]=p,n[p]=l},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(l){return T.addIrregularRule(l[0],l[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(l){return T.addPluralRule(l[0],l[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(l){return T.addSingularRule(l[0],l[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(T.addUncountableRule),T})});var Xe="https://api.dictionaryapi.dev/api/v2/entries/en/";function Ze(t){t.stats.noun>=t.stats.verb&&t.stats.noun>=t.stats.adjective&&(t.type.isNoun=!0),t.stats.verb>=t.stats.noun&&t.stats.verb>=t.stats.adjective&&(t.type.isVerb=!0),t.stats.adjective>=t.stats.noun&&t.stats.adjective>=t.stats.verb&&(t.type.isAdjective=!0)}function et(t){let e=Math.max(1,t.stats.noun+t.stats.verb+t.stats.adjective);t.stats.noun=Math.round(t.stats.noun/e*100),t.stats.verb=Math.round(t.stats.verb/e*100),t.stats.adjective=Math.round(t.stats.adjective/e*100)}var we=async t=>{let e={found:!0,stats:{noun:0,verb:0,adjective:0},type:{isNoun:!1,isVerb:!1,isAdjective:!1}},i=await fetch(Xe+encodeURIComponent(t),{method:"GET"});if(!i.ok)return e.found=!1,e;let n=await i.json();for(let s of n)for(let o of s.meanings)switch(o.partOfSpeech){case"noun":e.stats.noun+=o.definitions.length;break;case"verb":e.stats.verb+=o.definitions.length;break;case"adjective":e.stats.adjective+=o.definitions.length;break}return Ze(e),et(e),e};var U=Ae(),re=(r=>(r.VERSION="version",r.CAPABILITY="capability",r.COLLECTION="collection",r.RESOURCE="resource",r.SUB_RESOURCE="sub-resource",r.CONTROLLER="controller",r))(re||{}),oe=(o=>(o.GET="GET",o.POST="POST",o.PUT="PUT",o.PATCH="PATCH",o.DELETE="DELETE",o))(oe||{}),tt="Uri not completed, continue typing...";function ae(t,e){t.match(/^[a-z0-9\-]*$/)||e.push(`The word "${t}" contains some characters not allowed. Allowed characters are: lowercase letters, numbers, hyphen`)}async function le(t,e){let i=await we(t);i.found?i.type.isNoun||e.push(`The word "${t}" is not usually used as noun (noun: ${i.stats.noun}%, verb: ${i.stats.verb}%, adjective: ${i.stats.adjective}%)`):e.push(`The word "${t}" is not present in the english dictionary`)}function nt(t){let e={type:"version",text:t,alternativeTypes:[],warnings:[]};return t.match(/^[vV]?\d+(\.\d+)?$/)||e.warnings.push(`The version "${t}" has an invalid structure. Expected something like: v1`),t.match(/^v/)||e.warnings.push(`The version "${t}" should start with a lowercase "v"`),e}async function it(t){let e={type:"capability",text:t,alternativeTypes:[],warnings:[]};return U.isSingular(t)||e.warnings.push(`The capability "${t}" should be a singular word`),await le(t,e.warnings),e}async function Ce(t){let e={type:"collection",text:t,alternativeTypes:[],warnings:[]};return U.isPlural(t)||e.warnings.push(`The collection "${t}" should be a plural word`),ae(t,e.warnings),await le(t,e.warnings),e}async function Ee(t){return{type:"resource",text:t,alternativeTypes:[],warnings:[]}}async function st(t){let e={type:"sub-resource",text:t,alternativeTypes:[],warnings:[]};return U.isSingular(t)||e.warnings.push(`The sub-resource "${t}" should be a singular word`),ae(t,e.warnings),await le(t,e.warnings),e}async function Re(t){let e={type:"controller",text:t,alternativeTypes:[],warnings:[]};return U.isPlural(t)||e.warnings.push(`The controller "${t}" should be a plural word`),ae(t,e.warnings),e}async function Oe(t,e){switch(t){case"collection":return await Ce(e);case"resource":return await Ee(e);case"sub-resource":return await st(e);case"controller":return await Re(e)}return null}var Se=async(t,e,i)=>{let n={errors:[],tokens:[]},s=e.split("/").filter(r=>r!==""),o=(i.version?1:0)+(i.capability?1:0)+1;if(s.length>=o){let r=0;i.version&&n.tokens.push(nt(s[r++])),i.capability&&n.tokens.push(await it(s[r++]));let a=!0,u=!0;for(;r<s.length;){let y=r===s.length-1;if(a){let f=await Ce(s[r]);u||((!y||t!=="POST")&&f.alternativeTypes.push("sub-resource"),y&&t==="POST"&&f.alternativeTypes.push("controller")),n.tokens.push(f)}else y&&t==="POST"?n.tokens.push(await Re(s[r])):n.tokens.push(await Ee(s[r]));a=!a,u=!1,r++}}else n.errors.push(tt);return n},Le=async(t,e,i)=>{let n=0;for(;n<e.length&&(e[n].type=="version"||e[n].type=="capability");)n++;let s=["collection"],o=!0;for(;n<e.length;){let r=e[n],a=n===e.length-2;if(s.indexOf(r.type)>=0){switch(n===i&&(e[n]=await Oe(r.type,r.text),e[n].alternativeTypes=r.alternativeTypes),r.type){case"collection":s=["resource"],a&&!o&&t==="POST"&&s.push("controller");break;case"resource":s=["collection"],(!a||t!=="POST")&&s.push("sub-resource"),a&&t==="POST"&&s.push("controller");break;case"sub-resource":s=["collection"],a&&t==="POST"&&s.push("controller");break;case"controller":if(s=[],n!==e.length-1)return null;break;default:return console.error("Invalid token type"),null}o=!1,n++}else e[n]=await Oe(s[0],r.text),e[n].alternativeTypes=s.slice(1)}return e},Ue=(t,e)=>{let i=t[e];return i.alternativeTypes.push(i.type),i.type=i.alternativeTypes.shift(),t},ce=(t,e)=>{let i="",n=e.length-1,s=!0;for(;n>=0;){switch(e[n].type){case"collection":s&&(i+=V.collection[t](e[n].text));break;case"resource":if(n>=1&&e[n-1].type==="collection"){if(s)if(t!=="POST")i+=V.resource[t](e[n].text,e[n-1].text);else return"Error: method POST not supported on resources";else i+=V.middle.resourceAndCollection(e[n].text,e[n-1].text);n--}else return"Error: the URI should start with a collection/resource";break;case"sub-resource":if(n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"){if(s)if(t!=="POST")i+=V.subResource[t](e[n].text,e[n-1].text,e[n-2].text);else return"Error: method POST not supported on sub-resources";else i+=V.middle.subResourceAndResourceAndCollection(e[n].text,e[n-1].text,e[n-2].text);n-=2}else return"Error: the URI should start with a collection/resource/sub-resource";break;case"controller":if(t==="POST"&&s)n>=1&&e[n-1].type==="collection"?(i+=V.controller.controllerOnCollection(e[n].text,e[n-1].text),n--):n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"?(i+=V.controller.controllerOnResource(e[n].text,e[n-1].text,e[n-2].text),n-=2):n>=3&&e[n-1].type==="sub-resource"&&e[n-2].type==="resource"&&e[n-3].type==="collection"&&(i+=V.controller.controllerOnSubResource(e[n].text,e[n-1].text,e[n-2].text,e[n-3].text),n-=3);else return"Error: it is possible to use controller only at the end of the URI with the method POST";break}n--,s=!1}return i},V={resource:{GET:(t,e)=>`Retrieve the ${U.singular(e)} with id "${t}"`,POST:(t,e)=>"",PUT:(t,e)=>`Replace with the one in request, the ${U.singular(e)} with id "${t}"`,PATCH:(t,e)=>`Apply the changes listed in request to the ${U.singular(e)} with id "${t}"`,DELETE:(t,e)=>`Delete the ${U.singular(e)} with id "${t}"`},collection:{GET:t=>`Search in the ${t}`,POST:t=>`Create a new ${U.singular(t)}`,PUT:t=>`Replace with the list in request all the ${t}`,PATCH:t=>`Replace with the list in request all the ${t}`,DELETE:t=>`Delete all the ${t}`},subResource:{GET:(t,e,i)=>`Retrieve the ${t} of the ${U.singular(i)} with id "${e}"`,POST:(t,e,i)=>"",PUT:(t,e,i)=>`Replace with the one in request, the ${t} of the ${U.singular(i)} with id "${e}"`,PATCH:(t,e,i)=>`Apply the changes listed in request to the ${t} of the ${U.singular(i)} with id "${e}"`,DELETE:(t,e,i)=>`Delete the ${t} of the ${U.singular(i)} with id "${e}"`},controller:{controllerOnCollection:(t,e)=>`Perform the action of "${t}" on the ${e}`,controllerOnResource:(t,e,i)=>`Perform the action of "${t}" on the ${U.singular(i)} with id "${e}"`,controllerOnSubResource:(t,e,i,n)=>`Perform the action of "${t}" on the ${e}, of the ${U.singular(n)} with id "${i}"`},middle:{resourceAndCollection:(t,e)=>`, of the ${U.singular(e)} with id "${t}"`,subResourceAndResourceAndCollection:(t,e,i)=>`, of the ${t} of the ${U.singular(i)} with id "${e}"`}};function Pe(t,e,i){let n=t.slice();return n[11]=e[i],n}function xe(t){let e,i=t[11]+"",n,s;return{c(){e=v("option"),n=H(i),e.__value=s=t[11],e.value=e.__value},m(o,r){S(o,e,r),h(e,n)},p:j,d(o){o&&L(e)}}}function rt(t){let e,i,n,s,o,r,a,u,y,f,$,T,l,p,_,C,k,E,O,R,w,b,g=t[4],d=[];for(let c=0;c<g.length;c+=1)d[c]=xe(Pe(t,g,c));return{c(){e=v("section"),i=v("div"),n=v("div"),s=v("div"),o=v("select");for(let c=0;c<d.length;c+=1)d[c].c();r=A(),a=v("div"),u=v("input"),y=A(),f=v("div"),$=v("div"),T=v("div"),l=v("label"),p=v("input"),_=H(`
                    Version`),C=A(),k=v("div"),E=v("label"),O=v("input"),R=H(`
                    Capability`),t[0]===void 0&&$e(()=>t[6].call(o)),m(s,"class","select"),m(n,"class","control"),m(u,"type","text"),m(u,"class","input"),m(u,"placeholder","Example: /v1/reservation/chains/AAA/links/1234567890"),m(a,"class","control is-expanded"),m(i,"class","field has-addons"),m(p,"type","checkbox"),m(l,"class","checkbox"),m(T,"class","level-item control"),m(O,"type","checkbox"),m(E,"class","checkbox"),m(k,"class","level-item control"),m($,"class","level-left"),m(f,"class","level"),m(e,"class","box")},m(c,I){S(c,e,I),h(e,i),h(i,n),h(n,s),h(s,o);for(let P=0;P<d.length;P+=1)d[P].m(o,null);te(o,t[0]),h(i,r),h(i,a),h(a,u),ee(u,t[1]),h(e,y),h(e,f),h(f,$),h($,T),h(T,l),h(l,p),p.checked=t[2],h(l,_),h($,C),h($,k),h(k,E),h(E,O),O.checked=t[3],h(E,R),w||(b=[N(o,"change",t[6]),N(o,"change",t[5]),N(u,"input",t[7]),N(u,"input",t[5]),N(p,"change",t[8]),N(p,"change",t[5]),N(O,"change",t[9]),N(O,"change",t[5])],w=!0)},p(c,[I]){if(I&16){g=c[4];let P;for(P=0;P<g.length;P+=1){let ge=Pe(c,g,P);d[P]?d[P].p(ge,I):(d[P]=xe(ge),d[P].c(),d[P].m(o,null))}for(;P<d.length;P+=1)d[P].d(1);d.length=g.length}I&17&&te(o,c[0]),I&2&&u.value!==c[1]&&ee(u,c[1]),I&4&&(p.checked=c[2]),I&8&&(O.checked=c[3])},i:j,o:j,d(c){c&&L(e),G(d,c),w=!1,ve(b)}}}function ot(t,e,i){let n=Object.keys(oe),s=n[0],o="/v1/reservation/chains/AAA/links/1234567890",r=!0,a=!0,u=J();function y(){let p=o.replace(/\?.*/,""),_=new URLSearchParams(window.location.search);_.set("method",s),_.set("uri",p),_.set("version",r?"1":"0"),_.set("capability",a?"1":"0"),window.history.pushState(null,null,"?"+_.toString()),u("uriChange",{method:s,uri:p,version:r,capability:a})}be(()=>{let p=new URLSearchParams(window.location.search);p.has("method")&&n.indexOf(p.get("method"))>=0&&i(0,s=p.get("method")),p.has("uri")&&i(1,o=p.get("uri")),p.has("version")&&i(2,r=!!p.get("version")),p.has("capability")&&i(3,a=!!p.get("capability")),y()});function f(){s=Te(this),i(0,s),i(4,n)}function $(){o=this.value,i(1,o)}function T(){r=this.checked,i(2,r)}function l(){a=this.checked,i(3,a)}return[s,o,r,a,n,y,f,$,T,l]}var ue=class extends B{constructor(e){super(),D(this,e,ot,rt,z,{})}},Ie=ue;function at(t){q(t,"svelte-v09ncf",".icon.is-warning.svelte-v09ncf{color:#ffe86e}span.margin-left.svelte-v09ncf{margin-left:0.5em}button.tag.svelte-v09ncf{border:none;cursor:pointer}.tags.no-margin.svelte-v09ncf{margin:0}.tag.is-separator.svelte-v09ncf{padding-left:0.25em;padding-right:0.25em;background-color:#eee}.tag.has-warning.svelte-v09ncf{text-decoration:wavy;text-decoration-line:underline;text-decoration-color:red}.tag.no-margin.svelte-v09ncf{margin:0}.tag.is-version.svelte-v09ncf{background-color:#b8fbb5}.tag.is-capability.svelte-v09ncf{background-color:#fff2b3}.tag.is-collection.svelte-v09ncf{background-color:#81d5ff}.tag.is-resource.svelte-v09ncf{background-color:#ff889a}.tag.is-sub-resource.svelte-v09ncf{background-color:#ffc2a9}.tag.is-controller.svelte-v09ncf{background-color:#e18af1}")}function Ne(t,e,i){let n=t.slice();return n[7]=e[i],n}function Me(t,e,i){let n=t.slice();return n[10]=e[i],n}function je(t,e,i){let n=t.slice();return n[13]=e[i],n}function He(t,e,i){let n=t.slice();return n[10]=e[i],n[17]=i,n}function lt(t){let e,i=t[10].text+"",n,s,o,r;return{c(){e=v("span"),n=H(i),s=A(),m(e,"title",o=t[10].type),m(e,"class",r="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(a,u){S(a,e,u),h(e,n),h(e,s)},p(a,u){u&1&&i!==(i=a[10].text+"")&&Y(n,i),u&1&&o!==(o=a[10].type)&&m(e,"title",o),u&1&&r!==(r="tag is-"+a[10].type+" "+(a[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&m(e,"class",r)},d(a){a&&L(e)}}}function ct(t){let e,i=t[10].text+"",n,s,o,r,a,u,y,f;function $(){return t[5](t[17])}return{c(){e=v("button"),n=H(i),s=A(),o=v("span"),o.innerHTML='<span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>',r=A(),m(o,"class","margin-left svelte-v09ncf"),m(e,"title",a=t[10].type),m(e,"class",u="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(T,l){S(T,e,l),h(e,n),h(e,s),h(e,o),h(e,r),y||(f=N(e,"click",$),y=!0)},p(T,l){t=T,l&1&&i!==(i=t[10].text+"")&&Y(n,i),l&1&&a!==(a=t[10].type)&&m(e,"title",a),l&1&&u!==(u="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&m(e,"class",u)},d(T){T&&L(e),y=!1,f()}}}function ze(t){let e,i,n;function s(a,u){return a[10].alternativeTypes.length>0?ct:lt}let o=s(t,-1),r=o(t);return{c(){e=v("span"),e.textContent="/",i=A(),r.c(),n=Z(),m(e,"class","tag is-separator svelte-v09ncf")},m(a,u){S(a,e,u),S(a,i,u),r.m(a,u),S(a,n,u)},p(a,u){o===(o=s(a,u))&&r?r.p(a,u):(r.d(1),r=o(a),r&&(r.c(),r.m(n.parentNode,n)))},d(a){a&&L(e),a&&L(i),r.d(a),a&&L(n)}}}function De(t){let e,i,n,s,o,r=t[0],a=[];for(let u=0;u<r.length;u+=1)a[u]=Ve(Me(t,r,u));return{c(){e=v("div"),i=v("p"),i.innerHTML="<strong>Warnings:</strong>",n=A();for(let u=0;u<a.length;u+=1)a[u].c();s=A(),o=v("p"),m(e,"class","warnings")},m(u,y){S(u,e,y),h(e,i),h(e,n);for(let f=0;f<a.length;f+=1)a[f].m(e,null);h(e,s),h(e,o)},p(u,y){if(y&1){r=u[0];let f;for(f=0;f<r.length;f+=1){let $=Me(u,r,f);a[f]?a[f].p($,y):(a[f]=Ve($),a[f].c(),a[f].m(e,s))}for(;f<a.length;f+=1)a[f].d(1);a.length=r.length}},d(u){u&&L(e),G(a,u)}}}function Be(t){let e,i,n,s=t[13]+"",o;return{c(){e=v("p"),i=v("span"),i.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>',n=A(),o=H(s),m(i,"class","icon is-warning svelte-v09ncf")},m(r,a){S(r,e,a),h(e,i),h(e,n),h(e,o)},p(r,a){a&1&&s!==(s=r[13]+"")&&Y(o,s)},d(r){r&&L(e)}}}function Ve(t){let e,i=t[10].warnings,n=[];for(let s=0;s<i.length;s+=1)n[s]=Be(je(t,i,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=Z()},m(s,o){for(let r=0;r<n.length;r+=1)n[r].m(s,o);S(s,e,o)},p(s,o){if(o&1){i=s[10].warnings;let r;for(r=0;r<i.length;r+=1){let a=je(s,i,r);n[r]?n[r].p(a,o):(n[r]=Be(a),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=i.length}},d(s){G(n,s),s&&L(e)}}}function Ge(t){let e,i=t[7]+"",n,s;return{c(){e=v("span"),n=H(i),m(e,"class",s="tag no-margin is-"+t[7]+" svelte-v09ncf")},m(o,r){S(o,e,r),h(e,n)},p:j,d(o){o&&L(e)}}}function ut(t){let e,i,n,s,o,r,a,u,y,f,$,T,l,p,_,C,k,E=t[0],O=[];for(let g=0;g<E.length;g+=1)O[g]=ze(He(t,E,g));let R=t[2]&&De(t),w=t[3],b=[];for(let g=0;g<w.length;g+=1)b[g]=Ge(Ne(t,w,g));return{c(){e=v("div"),i=v("p"),i.innerHTML="<strong>Result</strong>",n=A(),s=v("div");for(let g=0;g<O.length;g+=1)O[g].c();o=A(),r=v("div"),a=v("p"),u=H(t[1]),y=A(),R&&R.c(),f=A(),$=v("div"),T=v("div"),l=A(),p=v("div"),_=v("div");for(let g=0;g<b.length;g+=1)b[g].c();C=A(),k=v("div"),m(i,"class","subtitle"),m(s,"class","tags has-addons"),m(r,"class","block"),m(T,"class","level-left"),m(_,"class","tags has-addons no-margin svelte-v09ncf"),m(k,"class","level-item"),m(p,"class","level-right"),m($,"class","level"),m(e,"class","box")},m(g,d){S(g,e,d),h(e,i),h(e,n),h(e,s);for(let c=0;c<O.length;c+=1)O[c].m(s,null);h(e,o),h(e,r),h(r,a),h(a,u),h(e,y),R&&R.m(e,null),h(e,f),h(e,$),h($,T),h($,l),h($,p),h(p,_);for(let c=0;c<b.length;c+=1)b[c].m(_,null);h(p,C),h(p,k)},p(g,[d]){if(d&17){E=g[0];let c;for(c=0;c<E.length;c+=1){let I=He(g,E,c);O[c]?O[c].p(I,d):(O[c]=ze(I),O[c].c(),O[c].m(s,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=E.length}if(d&2&&Y(u,g[1]),g[2]?R?R.p(g,d):(R=De(g),R.c(),R.m(e,f)):R&&(R.d(1),R=null),d&8){w=g[3];let c;for(c=0;c<w.length;c+=1){let I=Ne(g,w,c);b[c]?b[c].p(I,d):(b[c]=Ge(I),b[c].c(),b[c].m(_,null))}for(;c<b.length;c+=1)b[c].d(1);b.length=w.length}},i:j,o:j,d(g){g&&L(e),G(O,g),R&&R.d(),G(b,g)}}}function pt(t,e,i){let n,s=Object.values(re),{tokens:o=[]}=e,{text:r=""}=e,a=J();function u(f){a("changeTokenType",{index:f})}let y=f=>u(f);return t.$$set=f=>{"tokens"in f&&i(0,o=f.tokens),"text"in f&&i(1,r=f.text)},t.$$.update=()=>{if(t.$$.dirty&1){e:i(2,n=o.filter(f=>f.warnings.length>0).length>0)}},[o,r,n,s,u,y]}var pe=class extends B{constructor(e){super(),D(this,e,pt,ut,z,{tokens:0,text:1},at)}},Qe=pe;function ft(t){let e;return{c(){e=v("div"),e.innerHTML=`<p class="subtitle"><strong>Help</strong></p> 
    <p>Work in progress...</p>`,m(e,"class","box")},m(i,n){S(i,e,n)},p:j,i:j,o:j,d(i){i&&L(e)}}}var fe=class extends B{constructor(e){super(),D(this,e,null,ft,z,{})}},We=fe;function ht(t){q(t,"svelte-sbe5kd",".hero.is-small.svelte-sbe5kd .hero-body.svelte-sbe5kd{padding-left:0;padding-right:0}button.box.button.is-active.svelte-sbe5kd.svelte-sbe5kd{background-color:var(--color-accent);color:#fff}")}function Fe(t){let e,i;return e=new ke({props:{messages:t[0].errors}}),{c(){Q(e.$$.fragment)},m(n,s){W(e,n,s),i=!0},p(n,s){let o={};s&1&&(o.messages=n[0].errors),e.$set(o)},i(n){i||(x(e.$$.fragment,n),i=!0)},o(n){M(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function Ye(t){let e,i;return e=new Qe({props:{tokens:t[0].tokens,text:t[1]}}),e.$on("changeTokenType",t[4]),{c(){Q(e.$$.fragment)},m(n,s){W(e,n,s),i=!0},p(n,s){let o={};s&1&&(o.tokens=n[0].tokens),s&2&&(o.text=n[1]),e.$set(o)},i(n){i||(x(e.$$.fragment,n),i=!0)},o(n){M(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function qe(t){let e,i;return e=new We({}),{c(){Q(e.$$.fragment)},m(n,s){W(e,n,s),i=!0},i(n){i||(x(e.$$.fragment,n),i=!0)},o(n){M(e.$$.fragment,n),i=!1},d(n){F(e,n)}}}function gt(t){let e,i,n,s,o,r,a,u,y,f,$,T,l,p,_,C,k,E,O,R;e=new _e({props:{activePage:"restApiToText"}}),r=new Ie({}),r.$on("uriChange",t[3]);let w=t[0].errors.length>0&&Fe(t),b=t[0].tokens.length>0&&Ye(t),g=t[2]&&qe(t);return k=new ye({}),{c(){Q(e.$$.fragment),i=A(),n=v("div"),s=v("section"),s.innerHTML=`<div class="hero-body svelte-sbe5kd"><h1 class="title">REST Api to Text</h1> 
      <p class="subtitle">Input your api <i>method</i> and <i>URI</i> and check what is the meaning of it according to the REST API guidelines</p></div>`,o=A(),Q(r.$$.fragment),a=A(),w&&w.c(),u=A(),b&&b.c(),y=A(),f=v("button"),$=v("span"),$.innerHTML='<i class="far fa-circle-question"></i>',T=A(),l=v("span"),l.textContent="Help",_=A(),g&&g.c(),C=A(),Q(k.$$.fragment),m(s,"class","hero is-small svelte-sbe5kd"),m($,"class","icon is-small"),m(f,"class",p="button box "+(t[2]?"is-active":"")+" svelte-sbe5kd"),m(n,"class","container")},m(d,c){W(e,d,c),S(d,i,c),S(d,n,c),h(n,s),h(n,o),W(r,n,null),h(n,a),w&&w.m(n,null),h(n,u),b&&b.m(n,null),h(n,y),h(n,f),h(f,$),h(f,T),h(f,l),h(n,_),g&&g.m(n,null),S(d,C,c),W(k,d,c),E=!0,O||(R=N(f,"click",t[5]),O=!0)},p(d,[c]){d[0].errors.length>0?w?(w.p(d,c),c&1&&x(w,1)):(w=Fe(d),w.c(),x(w,1),w.m(n,u)):w&&(K(),M(w,1,1,()=>{w=null}),X()),d[0].tokens.length>0?b?(b.p(d,c),c&1&&x(b,1)):(b=Ye(d),b.c(),x(b,1),b.m(n,y)):b&&(K(),M(b,1,1,()=>{b=null}),X()),(!E||c&4&&p!==(p="button box "+(d[2]?"is-active":"")+" svelte-sbe5kd"))&&m(f,"class",p),d[2]?g?c&4&&x(g,1):(g=qe(d),g.c(),x(g,1),g.m(n,null)):g&&(K(),M(g,1,1,()=>{g=null}),X())},i(d){E||(x(e.$$.fragment,d),x(r.$$.fragment,d),x(w),x(b),x(g),x(k.$$.fragment,d),E=!0)},o(d){M(e.$$.fragment,d),M(r.$$.fragment,d),M(w),M(b),M(g),M(k.$$.fragment,d),E=!1},d(d){F(e,d),d&&L(i),d&&L(n),F(r),w&&w.d(),b&&b.d(),g&&g.d(),d&&L(C),F(k,d),O=!1,R()}}}function dt(t,e,i){let n={errors:[],tokens:[]},s="",o,r=!1;function a(f){return ne(this,void 0,void 0,function*(){o=f.detail.method,i(0,n=yield Se(o,f.detail.uri,{version:f.detail.version,capability:f.detail.capability})),i(1,s=ce(o,n.tokens))})}function u(f){return ne(this,void 0,void 0,function*(){let $=f.detail.index;$<n.tokens.length&&(i(0,n.tokens=Ue(n.tokens,$),n),i(0,n.tokens=yield Le(o,n.tokens,$),n),i(1,s=ce(o,n.tokens)))})}return[n,s,r,a,u,()=>i(2,r=!r)]}var he=class extends B{constructor(e){super(),D(this,e,dt,gt,z,{},ht)}},Je=he;new Je({target:document.body});me();

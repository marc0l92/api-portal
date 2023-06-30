// Project: https://github.com/marc0l92/api-portal
import{a as Ce}from"./chunk-WXQYOUQ2.js";import{$ as W,A as K,B as L,C as U,D as Q,E as m,F as z,G as A,H as Z,I as N,L as d,M as J,N as ee,O as te,P as $e,Q as _e,T as X,W as ke,X as ne,Y as ie,Z as M,_ as H,aa as F,ba as Y,c as ve,ca as B,da as V,e as et,ea as we,h as x,ha as se,n as Te,o as j,p as be,pa as Ae,qa as Oe,r as D,t as ye,z as f}from"./chunk-VAU64ZRV.js";var Re=et((re,oe)=>{x();(function(t,e){typeof ve=="function"&&typeof re=="object"&&typeof oe=="object"?oe.exports=e():typeof define=="function"&&define.amd?define(function(){return e()}):t.pluralize=e()})(re,function(){var t=[],e=[],i={},n={},s={};function o(u){return typeof u=="string"?new RegExp("^"+u+"$","i"):u}function r(u,p){return u===p?p:u===u.toLowerCase()?p.toLowerCase():u===u.toUpperCase()?p.toUpperCase():u[0]===u[0].toUpperCase()?p.charAt(0).toUpperCase()+p.substr(1).toLowerCase():p.toLowerCase()}function a(u,p){return u.replace(/\$(\d{1,2})/g,function(y,C){return p[C]||""})}function c(u,p){return u.replace(p[0],function(y,C){var k=a(p[1],arguments);return r(y===""?u[C-1]:y,k)})}function $(u,p,y){if(!u.length||i.hasOwnProperty(u))return p;for(var C=y.length;C--;){var k=y[C];if(k[0].test(p))return c(p,k)}return p}function g(u,p,y){return function(C){var k=C.toLowerCase();return p.hasOwnProperty(k)?r(C,k):u.hasOwnProperty(k)?r(C,u[k]):$(k,C,y)}}function b(u,p,y,C){return function(k){var E=k.toLowerCase();return p.hasOwnProperty(E)?!0:u.hasOwnProperty(E)?!1:$(E,E,y)===E}}function v(u,p,y){var C=p===1?v.singular(u):v.plural(u);return(y?p+" ":"")+C}return v.plural=g(s,n,t),v.isPlural=b(s,n,t),v.singular=g(n,s,e),v.isSingular=b(n,s,e),v.addPluralRule=function(u,p){t.push([o(u),p])},v.addSingularRule=function(u,p){e.push([o(u),p])},v.addUncountableRule=function(u){if(typeof u=="string"){i[u.toLowerCase()]=!0;return}v.addPluralRule(u,"$0"),v.addSingularRule(u,"$0")},v.addIrregularRule=function(u,p){p=p.toLowerCase(),u=u.toLowerCase(),s[u]=p,n[p]=u},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(u){return v.addIrregularRule(u[0],u[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(u){return v.addPluralRule(u[0],u[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(u){return v.addSingularRule(u[0],u[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(v.addUncountableRule),v})});x();x();x();x();x();var tt="https://api.dictionaryapi.dev/api/v2/entries/en/";function nt(t){t.stats.noun>=t.stats.verb&&t.stats.noun>=t.stats.adjective&&(t.type.isNoun=!0),t.stats.verb>=t.stats.noun&&t.stats.verb>=t.stats.adjective&&(t.type.isVerb=!0),t.stats.adjective>=t.stats.noun&&t.stats.adjective>=t.stats.verb&&(t.type.isAdjective=!0)}function it(t){let e=Math.max(1,t.stats.noun+t.stats.verb+t.stats.adjective);t.stats.noun=Math.round(t.stats.noun/e*100),t.stats.verb=Math.round(t.stats.verb/e*100),t.stats.adjective=Math.round(t.stats.adjective/e*100)}var Ee=async t=>{let e={found:!0,stats:{noun:0,verb:0,adjective:0},type:{isNoun:!1,isVerb:!1,isAdjective:!1}},i=await fetch(tt+encodeURIComponent(t),{method:"GET"});if(!i.ok)return e.found=!1,e;let n=await i.json();for(let s of n)for(let o of s.meanings)switch(o.partOfSpeech){case"noun":e.stats.noun+=o.definitions.length;break;case"verb":e.stats.verb+=o.definitions.length;break;case"adjective":e.stats.adjective+=o.definitions.length;break}return nt(e),it(e),e};var P=Re(),ae=(r=>(r.VERSION="version",r.CAPABILITY="capability",r.COLLECTION="collection",r.RESOURCE="resource",r.SUB_RESOURCE="sub-resource",r.CONTROLLER="controller",r))(ae||{}),le=(o=>(o.GET="GET",o.POST="POST",o.PUT="PUT",o.PATCH="PATCH",o.DELETE="DELETE",o))(le||{}),st="Uri not completed, continue typing...";function ce(t,e){t.match(/^[a-z0-9\-]*$/)||e.push(`The word "${t}" contains some characters not allowed. Allowed characters are: lowercase letters, numbers, hyphen`)}async function ue(t,e){let i=await Ee(t);i.found?i.type.isNoun||e.push(`The word "${t}" is not usually used as noun (noun: ${i.stats.noun}%, verb: ${i.stats.verb}%, adjective: ${i.stats.adjective}%)`):e.push(`The word "${t}" is not present in the english dictionary`)}function rt(t){let e={type:"version",text:t,alternativeTypes:[],warnings:[]};return t.match(/^[vV]?\d+(\.\d+)?$/)||e.warnings.push(`The version "${t}" has an invalid structure. Expected something like: v1`),t.match(/^v/)||e.warnings.push(`The version "${t}" should start with a lowercase "v"`),e}async function ot(t){let e={type:"capability",text:t,alternativeTypes:[],warnings:[]};return P.isSingular(t)||e.warnings.push(`The capability "${t}" should be a singular word`),await ue(t,e.warnings),e}async function Le(t){let e={type:"collection",text:t,alternativeTypes:[],warnings:[]};return P.isPlural(t)||e.warnings.push(`The collection "${t}" should be a plural word`),ce(t,e.warnings),await ue(t,e.warnings),e}async function Ue(t){return{type:"resource",text:t,alternativeTypes:[],warnings:[]}}async function at(t){let e={type:"sub-resource",text:t,alternativeTypes:[],warnings:[]};return P.isSingular(t)||e.warnings.push(`The sub-resource "${t}" should be a singular word`),ce(t,e.warnings),await ue(t,e.warnings),e}async function Pe(t){let e={type:"controller",text:t,alternativeTypes:[],warnings:[]};return P.isPlural(t)||e.warnings.push(`The controller "${t}" should be a plural word`),ce(t,e.warnings),e}async function Se(t,e){switch(t){case"collection":return await Le(e);case"resource":return await Ue(e);case"sub-resource":return await at(e);case"controller":return await Pe(e)}return null}var xe=async(t,e,i)=>{let n={errors:[],tokens:[]},s=e.split("/").filter(r=>r!==""),o=(i.version?1:0)+(i.capability?1:0)+1;if(s.length>=o){let r=0;i.version&&n.tokens.push(rt(s[r++])),i.capability&&n.tokens.push(await ot(s[r++]));let a=!0,c=!0;for(;r<s.length;){let $=r===s.length-1;if(a){let g=await Le(s[r]);c||((!$||t!=="POST")&&g.alternativeTypes.push("sub-resource"),$&&t==="POST"&&g.alternativeTypes.push("controller")),n.tokens.push(g)}else $&&t==="POST"?n.tokens.push(await Pe(s[r])):n.tokens.push(await Ue(s[r]));a=!a,c=!1,r++}}else n.errors.push(st);return n},Ie=async(t,e,i)=>{let n=0;for(;n<e.length&&(e[n].type=="version"||e[n].type=="capability");)n++;let s=["collection"],o=!0;for(;n<e.length;){let r=e[n],a=n===e.length-2;if(s.indexOf(r.type)>=0){switch(n===i&&(e[n]=await Se(r.type,r.text),e[n].alternativeTypes=r.alternativeTypes),r.type){case"collection":s=["resource"],a&&!o&&t==="POST"&&s.push("controller");break;case"resource":s=["collection"],(!a||t!=="POST")&&s.push("sub-resource"),a&&t==="POST"&&s.push("controller");break;case"sub-resource":s=["collection"],a&&t==="POST"&&s.push("controller");break;case"controller":if(s=[],n!==e.length-1)return null;break;default:return console.error("Invalid token type"),null}o=!1,n++}else e[n]=await Se(s[0],r.text),e[n].alternativeTypes=s.slice(1)}return e},Ne=(t,e)=>{let i=t[e];return i.alternativeTypes.push(i.type),i.type=i.alternativeTypes.shift(),t},pe=(t,e)=>{let i="",n=e.length-1,s=!0;for(;n>=0;){switch(e[n].type){case"collection":s&&(i+=G.collection[t](e[n].text));break;case"resource":if(n>=1&&e[n-1].type==="collection"){if(s)if(t!=="POST")i+=G.resource[t](e[n].text,e[n-1].text);else return"Error: method POST not supported on resources";else i+=G.middle.resourceAndCollection(e[n].text,e[n-1].text);n--}else return"Error: the URI should start with a collection/resource";break;case"sub-resource":if(n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"){if(s)if(t!=="POST")i+=G.subResource[t](e[n].text,e[n-1].text,e[n-2].text);else return"Error: method POST not supported on sub-resources";else i+=G.middle.subResourceAndResourceAndCollection(e[n].text,e[n-1].text,e[n-2].text);n-=2}else return"Error: the URI should start with a collection/resource/sub-resource";break;case"controller":if(t==="POST"&&s)n>=1&&e[n-1].type==="collection"?(i+=G.controller.controllerOnCollection(e[n].text,e[n-1].text),n--):n>=2&&e[n-1].type==="resource"&&e[n-2].type==="collection"?(i+=G.controller.controllerOnResource(e[n].text,e[n-1].text,e[n-2].text),n-=2):n>=3&&e[n-1].type==="sub-resource"&&e[n-2].type==="resource"&&e[n-3].type==="collection"&&(i+=G.controller.controllerOnSubResource(e[n].text,e[n-1].text,e[n-2].text,e[n-3].text),n-=3);else return"Error: it is possible to use controller only at the end of the URI with the method POST";break}n--,s=!1}return i},G={resource:{GET:(t,e)=>`Retrieve the ${P.singular(e)} with id "${t}"`,POST:(t,e)=>"",PUT:(t,e)=>`Replace with the one in request, the ${P.singular(e)} with id "${t}"`,PATCH:(t,e)=>`Apply the changes listed in request to the ${P.singular(e)} with id "${t}"`,DELETE:(t,e)=>`Delete the ${P.singular(e)} with id "${t}"`},collection:{GET:t=>`Search in the ${t}`,POST:t=>`Create a new ${P.singular(t)}`,PUT:t=>`Replace with the list in request all the ${t}`,PATCH:t=>`Replace with the list in request all the ${t}`,DELETE:t=>`Delete all the ${t}`},subResource:{GET:(t,e,i)=>`Retrieve the ${t} of the ${P.singular(i)} with id "${e}"`,POST:(t,e,i)=>"",PUT:(t,e,i)=>`Replace with the one in request, the ${t} of the ${P.singular(i)} with id "${e}"`,PATCH:(t,e,i)=>`Apply the changes listed in request to the ${t} of the ${P.singular(i)} with id "${e}"`,DELETE:(t,e,i)=>`Delete the ${t} of the ${P.singular(i)} with id "${e}"`},controller:{controllerOnCollection:(t,e)=>`Perform the action of "${P.singular(t)}" on the ${e}`,controllerOnResource:(t,e,i)=>`Perform the action of "${P.singular(t)}" on the ${P.singular(i)} with id "${e}"`,controllerOnSubResource:(t,e,i,n)=>`Perform the action of "${P.singular(t)}" on the ${e}, of the ${P.singular(n)} with id "${i}"`},middle:{resourceAndCollection:(t,e)=>`, of the ${P.singular(e)} with id "${t}"`,subResourceAndResourceAndCollection:(t,e,i)=>`, of the ${t} of the ${P.singular(i)} with id "${e}"`}};function Me(t,e,i){let n=t.slice();return n[11]=e[i],n}function je(t){let e,i=t[11]+"",n,s;return{c(){e=m("option"),n=z(i),e.__value=s=t[11],e.value=e.__value},m(o,r){L(o,e,r),f(e,n)},p:j,d(o){o&&U(e)}}}function lt(t){let e,i,n,s,o,r,a,c,$,g,b,v,u,p,y,C,k,E,_,O,I,R,h=t[4],T=[];for(let l=0;l<h.length;l+=1)T[l]=je(Me(t,h,l));return{c(){e=m("section"),i=m("div"),n=m("div"),s=m("div"),o=m("select");for(let l=0;l<T.length;l+=1)T[l].c();r=A(),a=m("div"),c=m("input"),$=A(),g=m("div"),b=m("div"),v=m("div"),u=m("label"),p=m("input"),y=z(`
                    Version`),C=A(),k=m("div"),E=m("label"),_=m("input"),O=z(`
                    Capability`),t[0]===void 0&&ke(()=>t[6].call(o)),d(s,"class","select"),d(n,"class","control"),d(c,"type","text"),d(c,"class","input"),d(c,"placeholder","Example: /v1/reservation/chains/AAA/links/1234567890"),d(a,"class","control is-expanded"),d(i,"class","field has-addons"),d(p,"type","checkbox"),d(u,"class","checkbox"),d(v,"class","level-item control"),d(_,"type","checkbox"),d(E,"class","checkbox"),d(k,"class","level-item control"),d(b,"class","level-left"),d(g,"class","level"),d(e,"class","box")},m(l,w){L(l,e,w),f(e,i),f(i,n),f(n,s),f(s,o);for(let S=0;S<T.length;S+=1)T[S]&&T[S].m(o,null);te(o,t[0],!0),f(i,r),f(i,a),f(a,c),ee(c,t[1]),f(e,$),f(e,g),f(g,b),f(b,v),f(v,u),f(u,p),p.checked=t[2],f(u,y),f(b,C),f(b,k),f(k,E),f(E,_),_.checked=t[3],f(E,O),I||(R=[N(o,"change",t[6]),N(o,"change",t[5]),N(c,"input",t[7]),N(c,"input",t[5]),N(p,"change",t[8]),N(p,"change",t[5]),N(_,"change",t[9]),N(_,"change",t[5])],I=!0)},p(l,[w]){if(w&16){h=l[4];let S;for(S=0;S<h.length;S+=1){let me=Me(l,h,S);T[S]?T[S].p(me,w):(T[S]=je(me),T[S].c(),T[S].m(o,null))}for(;S<T.length;S+=1)T[S].d(1);T.length=h.length}w&17&&te(o,l[0]),w&2&&c.value!==l[1]&&ee(c,l[1]),w&4&&(p.checked=l[2]),w&8&&(_.checked=l[3])},i:j,o:j,d(l){l&&U(e),Q(T,l),I=!1,be(R)}}}function ct(t,e,i){let n=Object.keys(le),s=n[0],o="/v1/reservation/chains/AAA/links/1234567890",r=!0,a=!0,c=X();function $(){let p=o.replace(/\?.*/,""),y=new URLSearchParams(window.location.search);y.set("method",s),y.set("uri",p),y.set("version",r?"1":"0"),y.set("capability",a?"1":"0"),window.history.pushState(null,null,"?"+y.toString()),c("uriChange",{method:s,uri:p,version:r,capability:a})}_e(()=>{let p=new URLSearchParams(window.location.search);p.has("method")&&n.indexOf(p.get("method"))>=0&&i(0,s=p.get("method")),p.has("uri")&&i(1,o=p.get("uri")),p.has("version")&&i(2,r=!!p.get("version")),p.has("capability")&&i(3,a=!!p.get("capability")),$()});function g(){s=$e(this),i(0,s),i(4,n)}function b(){o=this.value,i(1,o)}function v(){r=this.checked,i(2,r)}function u(){a=this.checked,i(3,a)}return[s,o,r,a,n,$,g,b,v,u]}var fe=class extends V{constructor(e){super(),B(this,e,ct,lt,D,{})}},He=fe;x();function ut(t){K(t,"svelte-v09ncf",".icon.is-warning.svelte-v09ncf{color:#ffe86e}span.margin-left.svelte-v09ncf{margin-left:0.5em}button.tag.svelte-v09ncf{border:none;cursor:pointer}.tags.no-margin.svelte-v09ncf{margin:0}.tag.is-separator.svelte-v09ncf{padding-left:0.25em;padding-right:0.25em;background-color:#eee}.tag.has-warning.svelte-v09ncf{text-decoration:wavy;text-decoration-line:underline;text-decoration-color:red}.tag.no-margin.svelte-v09ncf{margin:0}.tag.is-version.svelte-v09ncf{background-color:#b8fbb5}.tag.is-capability.svelte-v09ncf{background-color:#fff2b3}.tag.is-collection.svelte-v09ncf{background-color:#81d5ff}.tag.is-resource.svelte-v09ncf{background-color:#ff889a}.tag.is-sub-resource.svelte-v09ncf{background-color:#ffc2a9}.tag.is-controller.svelte-v09ncf{background-color:#e18af1}")}function ze(t,e,i){let n=t.slice();return n[7]=e[i],n}function De(t,e,i){let n=t.slice();return n[10]=e[i],n}function Be(t,e,i){let n=t.slice();return n[13]=e[i],n}function Ve(t,e,i){let n=t.slice();return n[10]=e[i],n[17]=i,n}function pt(t){let e,i=t[10].text+"",n,s,o,r;return{c(){e=m("span"),n=z(i),s=A(),d(e,"title",o=t[10].type),d(e,"class",r="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(a,c){L(a,e,c),f(e,n),f(e,s)},p(a,c){c&1&&i!==(i=a[10].text+"")&&J(n,i),c&1&&o!==(o=a[10].type)&&d(e,"title",o),c&1&&r!==(r="tag is-"+a[10].type+" "+(a[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&d(e,"class",r)},d(a){a&&U(e)}}}function ft(t){let e,i=t[10].text+"",n,s,o,r,a,c,$,g;function b(){return t[5](t[17])}return{c(){e=m("button"),n=z(i),s=A(),o=m("span"),o.innerHTML='<span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>',r=A(),d(o,"class","margin-left svelte-v09ncf"),d(e,"title",a=t[10].type),d(e,"class",c="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")},m(v,u){L(v,e,u),f(e,n),f(e,s),f(e,o),f(e,r),$||(g=N(e,"click",b),$=!0)},p(v,u){t=v,u&1&&i!==(i=t[10].text+"")&&J(n,i),u&1&&a!==(a=t[10].type)&&d(e,"title",a),u&1&&c!==(c="tag is-"+t[10].type+" "+(t[10].warnings.length>0?"has-warning":"")+" svelte-v09ncf")&&d(e,"class",c)},d(v){v&&U(e),$=!1,g()}}}function Ge(t){let e,i,n;function s(a,c){return a[10].alternativeTypes.length>0?ft:pt}let o=s(t,-1),r=o(t);return{c(){e=m("span"),e.textContent="/",i=A(),r.c(),n=Z(),d(e,"class","tag is-separator svelte-v09ncf")},m(a,c){L(a,e,c),L(a,i,c),r.m(a,c),L(a,n,c)},p(a,c){o===(o=s(a,c))&&r?r.p(a,c):(r.d(1),r=o(a),r&&(r.c(),r.m(n.parentNode,n)))},d(a){a&&U(e),a&&U(i),r.d(a),a&&U(n)}}}function Qe(t){let e,i,n,s,o,r=t[0],a=[];for(let c=0;c<r.length;c+=1)a[c]=Fe(De(t,r,c));return{c(){e=m("div"),i=m("p"),i.innerHTML="<strong>Warnings:</strong>",n=A();for(let c=0;c<a.length;c+=1)a[c].c();s=A(),o=m("p"),d(e,"class","warnings")},m(c,$){L(c,e,$),f(e,i),f(e,n);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(e,null);f(e,s),f(e,o)},p(c,$){if($&1){r=c[0];let g;for(g=0;g<r.length;g+=1){let b=De(c,r,g);a[g]?a[g].p(b,$):(a[g]=Fe(b),a[g].c(),a[g].m(e,s))}for(;g<a.length;g+=1)a[g].d(1);a.length=r.length}},d(c){c&&U(e),Q(a,c)}}}function We(t){let e,i,n,s=t[13]+"",o;return{c(){e=m("p"),i=m("span"),i.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i>',n=A(),o=z(s),d(i,"class","icon is-warning svelte-v09ncf")},m(r,a){L(r,e,a),f(e,i),f(e,n),f(e,o)},p(r,a){a&1&&s!==(s=r[13]+"")&&J(o,s)},d(r){r&&U(e)}}}function Fe(t){let e,i=t[10].warnings,n=[];for(let s=0;s<i.length;s+=1)n[s]=We(Be(t,i,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=Z()},m(s,o){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(s,o);L(s,e,o)},p(s,o){if(o&1){i=s[10].warnings;let r;for(r=0;r<i.length;r+=1){let a=Be(s,i,r);n[r]?n[r].p(a,o):(n[r]=We(a),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=i.length}},d(s){Q(n,s),s&&U(e)}}}function Ye(t){let e,i=t[7]+"",n,s;return{c(){e=m("span"),n=z(i),d(e,"class",s="tag no-margin is-"+t[7]+" svelte-v09ncf")},m(o,r){L(o,e,r),f(e,n)},p:j,d(o){o&&U(e)}}}function ht(t){let e,i,n,s,o,r,a,c,$,g,b,v,u,p,y,C,k,E=t[0],_=[];for(let h=0;h<E.length;h+=1)_[h]=Ge(Ve(t,E,h));let O=t[2]&&Qe(t),I=t[3],R=[];for(let h=0;h<I.length;h+=1)R[h]=Ye(ze(t,I,h));return{c(){e=m("div"),i=m("p"),i.innerHTML="<strong>Result</strong>",n=A(),s=m("div");for(let h=0;h<_.length;h+=1)_[h].c();o=A(),r=m("div"),a=m("p"),c=z(t[1]),$=A(),O&&O.c(),g=A(),b=m("div"),v=m("div"),u=A(),p=m("div"),y=m("div");for(let h=0;h<R.length;h+=1)R[h].c();C=A(),k=m("div"),d(i,"class","subtitle"),d(s,"class","tags has-addons"),d(r,"class","block"),d(v,"class","level-left"),d(y,"class","tags has-addons no-margin svelte-v09ncf"),d(k,"class","level-item"),d(p,"class","level-right"),d(b,"class","level"),d(e,"class","box")},m(h,T){L(h,e,T),f(e,i),f(e,n),f(e,s);for(let l=0;l<_.length;l+=1)_[l]&&_[l].m(s,null);f(e,o),f(e,r),f(r,a),f(a,c),f(e,$),O&&O.m(e,null),f(e,g),f(e,b),f(b,v),f(b,u),f(b,p),f(p,y);for(let l=0;l<R.length;l+=1)R[l]&&R[l].m(y,null);f(p,C),f(p,k)},p(h,[T]){if(T&17){E=h[0];let l;for(l=0;l<E.length;l+=1){let w=Ve(h,E,l);_[l]?_[l].p(w,T):(_[l]=Ge(w),_[l].c(),_[l].m(s,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=E.length}if(T&2&&J(c,h[1]),h[2]?O?O.p(h,T):(O=Qe(h),O.c(),O.m(e,g)):O&&(O.d(1),O=null),T&8){I=h[3];let l;for(l=0;l<I.length;l+=1){let w=ze(h,I,l);R[l]?R[l].p(w,T):(R[l]=Ye(w),R[l].c(),R[l].m(y,null))}for(;l<R.length;l+=1)R[l].d(1);R.length=I.length}},i:j,o:j,d(h){h&&U(e),Q(_,h),O&&O.d(),Q(R,h)}}}function gt(t,e,i){let n,s=Object.values(ae),{tokens:o=[]}=e,{text:r=""}=e,a=X();function c(g){a("changeTokenType",{index:g})}let $=g=>c(g);return t.$$set=g=>{"tokens"in g&&i(0,o=g.tokens),"text"in g&&i(1,r=g.text)},t.$$.update=()=>{if(t.$$.dirty&1)e:i(2,n=o.filter(g=>g.warnings.length>0).length>0)},[o,r,n,s,c,$]}var he=class extends V{constructor(e){super(),B(this,e,gt,ht,D,{tokens:0,text:1},ut)}},qe=he;x();function dt(t){let e;return{c(){e=m("div"),e.innerHTML=`<p class="subtitle"><strong>Help</strong></p> 
    <p>Work in progress...</p>`,d(e,"class","box")},m(i,n){L(i,e,n)},p:j,i:j,o:j,d(i){i&&U(e)}}}var ge=class extends V{constructor(e){super(),B(this,e,null,dt,D,{})}},Je=ge;function mt(t){K(t,"svelte-s05syh","button.box.button.is-active.svelte-s05syh{background-color:var(--color-accent);color:#fff}")}function Ke(t){let e,i;return e=new qe({props:{tokens:t[0].tokens,text:t[1]}}),e.$on("changeTokenType",t[5]),{c(){W(e.$$.fragment)},m(n,s){F(e,n,s),i=!0},p(n,s){let o={};s&1&&(o.tokens=n[0].tokens),s&2&&(o.text=n[1]),e.$set(o)},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){H(e.$$.fragment,n),i=!1},d(n){Y(e,n)}}}function Xe(t){let e,i;return e=new Je({}),{c(){W(e.$$.fragment)},m(n,s){F(e,n,s),i=!0},i(n){i||(M(e.$$.fragment,n),i=!0)},o(n){H(e.$$.fragment,n),i=!1},d(n){Y(e,n)}}}function vt(t){let e,i,n,s,o,r,a,c,$,g,b,v,u,p,y,C,k,E,_,O,I,R;e=new Oe({props:{activePage:"restApiToText"}}),r=new He({}),r.$on("uriChange",t[4]),c=new Ce({props:{messages:t[0].errors}});let h=t[0].tokens.length>0&&Ke(t),T=t[2]&&Xe(t);return _=new we({}),{c(){W(e.$$.fragment),i=A(),n=m("div"),s=m("section"),s.innerHTML=`<div class="hero-body"><h1 class="title">REST Api to Text</h1> 
      <p class="subtitle">Input your api <i>method</i> and <i>URI</i> and check what is the meaning of it according to the REST API guidelines</p></div>`,o=A(),W(r.$$.fragment),a=A(),W(c.$$.fragment),$=A(),h&&h.c(),g=A(),b=m("button"),v=m("span"),v.innerHTML='<i class="far fa-circle-question"></i>',u=A(),p=m("span"),p.textContent="Help",C=A(),T&&T.c(),E=A(),W(_.$$.fragment),d(s,"class","hero is-small"),d(v,"class","icon is-small"),d(b,"class",y="button box "+(t[2]?"is-active":"")+" svelte-s05syh"),d(n,"class",k="container "+(t[3].fluidLayout?"is-fluid":""))},m(l,w){F(e,l,w),L(l,i,w),L(l,n,w),f(n,s),f(n,o),F(r,n,null),f(n,a),F(c,n,null),f(n,$),h&&h.m(n,null),f(n,g),f(n,b),f(b,v),f(b,u),f(b,p),f(n,C),T&&T.m(n,null),L(l,E,w),F(_,l,w),O=!0,I||(R=N(b,"click",t[6]),I=!0)},p(l,[w]){let S={};w&1&&(S.messages=l[0].errors),c.$set(S),l[0].tokens.length>0?h?(h.p(l,w),w&1&&M(h,1)):(h=Ke(l),h.c(),M(h,1),h.m(n,g)):h&&(ne(),H(h,1,1,()=>{h=null}),ie()),(!O||w&4&&y!==(y="button box "+(l[2]?"is-active":"")+" svelte-s05syh"))&&d(b,"class",y),l[2]?T?w&4&&M(T,1):(T=Xe(l),T.c(),M(T,1),T.m(n,null)):T&&(ne(),H(T,1,1,()=>{T=null}),ie()),(!O||w&8&&k!==(k="container "+(l[3].fluidLayout?"is-fluid":"")))&&d(n,"class",k)},i(l){O||(M(e.$$.fragment,l),M(r.$$.fragment,l),M(c.$$.fragment,l),M(h),M(T),M(_.$$.fragment,l),O=!0)},o(l){H(e.$$.fragment,l),H(r.$$.fragment,l),H(c.$$.fragment,l),H(h),H(T),H(_.$$.fragment,l),O=!1},d(l){Y(e,l),l&&U(i),l&&U(n),Y(r),Y(c),h&&h.d(),T&&T.d(),l&&U(E),Y(_,l),I=!1,R()}}}function Tt(t,e,i){let n;ye(t,Ae,b=>i(3,n=b));let s={errors:[],tokens:[]},o="",r,a=!1;function c(b){return se(this,void 0,void 0,function*(){r=b.detail.method,i(0,s=yield xe(r,b.detail.uri,{version:b.detail.version,capability:b.detail.capability})),i(1,o=pe(r,s.tokens))})}function $(b){return se(this,void 0,void 0,function*(){let v=b.detail.index;v<s.tokens.length&&(i(0,s.tokens=Ne(s.tokens,v),s),i(0,s.tokens=yield Ie(r,s.tokens,v),s),i(1,o=pe(r,s.tokens)))})}return[s,o,a,n,c,$,()=>i(2,a=!a)]}var de=class extends V{constructor(e){super(),B(this,e,Tt,vt,D,{},mt)}},Ze=de;new Ze({target:document.body});Te();

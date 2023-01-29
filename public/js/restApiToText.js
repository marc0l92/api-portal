// Project: https://github.com/marc0l92/api-tools
import {
  __commonJS,
  __require
} from "./chunk-ZEVSLVC4.js";

// node_modules/.pnpm/pluralize@8.0.0/node_modules/pluralize/pluralize.js
var require_pluralize = __commonJS({
  "node_modules/.pnpm/pluralize@8.0.0/node_modules/pluralize/pluralize.js"(exports, module) {
    (function(root, pluralize2) {
      if (typeof __require === "function" && typeof exports === "object" && typeof module === "object") {
        module.exports = pluralize2();
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return pluralize2();
        });
      } else {
        root.pluralize = pluralize2();
      }
    })(exports, function() {
      var pluralRules = [];
      var singularRules = [];
      var uncountables = {};
      var irregularPlurals = {};
      var irregularSingles = {};
      function sanitizeRule(rule) {
        if (typeof rule === "string") {
          return new RegExp("^" + rule + "$", "i");
        }
        return rule;
      }
      function restoreCase(word, token) {
        if (word === token)
          return token;
        if (word === word.toLowerCase())
          return token.toLowerCase();
        if (word === word.toUpperCase())
          return token.toUpperCase();
        if (word[0] === word[0].toUpperCase()) {
          return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
        }
        return token.toLowerCase();
      }
      function interpolate(str, args) {
        return str.replace(/\$(\d{1,2})/g, function(match, index) {
          return args[index] || "";
        });
      }
      function replace(word, rule) {
        return word.replace(rule[0], function(match, index) {
          var result = interpolate(rule[1], arguments);
          if (match === "") {
            return restoreCase(word[index - 1], result);
          }
          return restoreCase(match, result);
        });
      }
      function sanitizeWord(token, word, rules) {
        if (!token.length || uncountables.hasOwnProperty(token)) {
          return word;
        }
        var len = rules.length;
        while (len--) {
          var rule = rules[len];
          if (rule[0].test(word))
            return replace(word, rule);
        }
        return word;
      }
      function replaceWord(replaceMap, keepMap, rules) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token)) {
            return restoreCase(word, token);
          }
          if (replaceMap.hasOwnProperty(token)) {
            return restoreCase(word, replaceMap[token]);
          }
          return sanitizeWord(token, word, rules);
        };
      }
      function checkWord(replaceMap, keepMap, rules, bool) {
        return function(word) {
          var token = word.toLowerCase();
          if (keepMap.hasOwnProperty(token))
            return true;
          if (replaceMap.hasOwnProperty(token))
            return false;
          return sanitizeWord(token, token, rules) === token;
        };
      }
      function pluralize2(word, count, inclusive) {
        var pluralized = count === 1 ? pluralize2.singular(word) : pluralize2.plural(word);
        return (inclusive ? count + " " : "") + pluralized;
      }
      pluralize2.plural = replaceWord(
        irregularSingles,
        irregularPlurals,
        pluralRules
      );
      pluralize2.isPlural = checkWord(
        irregularSingles,
        irregularPlurals,
        pluralRules
      );
      pluralize2.singular = replaceWord(
        irregularPlurals,
        irregularSingles,
        singularRules
      );
      pluralize2.isSingular = checkWord(
        irregularPlurals,
        irregularSingles,
        singularRules
      );
      pluralize2.addPluralRule = function(rule, replacement) {
        pluralRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize2.addSingularRule = function(rule, replacement) {
        singularRules.push([sanitizeRule(rule), replacement]);
      };
      pluralize2.addUncountableRule = function(word) {
        if (typeof word === "string") {
          uncountables[word.toLowerCase()] = true;
          return;
        }
        pluralize2.addPluralRule(word, "$0");
        pluralize2.addSingularRule(word, "$0");
      };
      pluralize2.addIrregularRule = function(single, plural) {
        plural = plural.toLowerCase();
        single = single.toLowerCase();
        irregularSingles[single] = plural;
        irregularPlurals[plural] = single;
      };
      [
        // Pronouns.
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        // Words ending in with a consonant and `o`.
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        // Ends with `us`.
        ["genus", "genera"],
        ["viscus", "viscera"],
        // Ends with `ma`.
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        // Other irregular rules.
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"]
      ].forEach(function(rule) {
        return pluralize2.addIrregularRule(rule[0], rule[1]);
      });
      [
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
        [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
        ["thou", "you"]
      ].forEach(function(rule) {
        return pluralize2.addPluralRule(rule[0], rule[1]);
      });
      [
        [/s$/i, ""],
        [/(ss)$/i, "$1"],
        [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
        [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
        [/ies$/i, "y"],
        [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
        [/\b(mon|smil)ies$/i, "$1ey"],
        [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
        [/(seraph|cherub)im$/i, "$1"],
        [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
        [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
        [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
        [/(test)(?:is|es)$/i, "$1is"],
        [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
        [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
        [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
        [/(alumn|alg|vertebr)ae$/i, "$1a"],
        [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
        [/(matr|append)ices$/i, "$1ix"],
        [/(pe)(rson|ople)$/i, "$1rson"],
        [/(child)ren$/i, "$1"],
        [/(eau)x?$/i, "$1"],
        [/men$/i, "man"]
      ].forEach(function(rule) {
        return pluralize2.addSingularRule(rule[0], rule[1]);
      });
      [
        // Singular words with no plurals.
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        // Regexes.
        /[^aeiou]ese$/i,
        // "chinese", "japanese"
        /deer$/i,
        // "deer", "reindeer"
        /fish$/i,
        // "fish", "blowfish", "angelfish"
        /measles$/i,
        /o[iu]s$/i,
        // "carnivorous"
        /pox$/i,
        // "chickpox", "smallpox"
        /sheep$/i
      ].forEach(pluralize2.addUncountableRule);
      return pluralize2;
    });
  }
});

// node_modules/.pnpm/svelte@3.55.1/node_modules/svelte/internal/index.mjs
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node.ownerDocument;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
  return style.sheet;
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function select_option(select, value) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
  select.selectedIndex = -1;
}
function select_value(select) {
  const selected_option = select.querySelector(":checked") || select.options[0];
  return selected_option && selected_option.__value;
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var invalid_attribute_name_character = new RegExp(`[\\s'">/=\\u{FDD0}-\\u{FDEF}\\u{FFFE}\\u{FFFF}\\u{1FFFE}\\u{1FFFF}\\u{2FFFE}\\u{2FFFF}\\u{3FFFE}\\u{3FFFF}\\u{4FFFE}\\u{4FFFF}\\u{5FFFE}\\u{5FFFF}\\u{6FFFE}\\u{6FFFF}\\u{7FFFE}\\u{7FFFF}\\u{8FFFE}\\u{8FFFF}\\u{9FFFE}\\u{9FFFF}\\u{AFFFE}\\u{AFFFF}\\u{BFFFE}\\u{BFFFF}\\u{CFFFE}\\u{CFFFF}\\u{DFFFE}\\u{DFFFF}\\u{EFFFE}\\u{EFFFF}\\u{FFFFE}\\u{FFFFF}\\u{10FFFE}\\u{10FFFF}]`, "u");
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance5, create_fragment6, not_equal, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance5 ? instance5(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment6 ? create_fragment6($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// node_modules/.pnpm/tslib@2.4.1/node_modules/tslib/tslib.es6.js
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

// src/components/navbar.svelte
function add_css(target) {
  append_styles(target, "svelte-628czb", ".navbar.svelte-628czb.svelte-628czb{border-bottom:1px solid var(--color-border)}.navbar.svelte-628czb .navbar-item.is-active.svelte-628czb{color:var(--color-primary)}");
}
function create_fragment(ctx) {
  let nav;
  return {
    c() {
      nav = element("nav");
      nav.innerHTML = `<div class="navbar-brand"><a class="navbar-item" href="https://marc0l92.github.io/api-tools/"><strong>API Tools</strong></a> 

    <button class="navbar-burger" data-target="my-navbar"><span></span> 
      <span></span> 
      <span></span></button></div> 

  <div id="my-navbar" class="navbar-menu"><div class="navbar-start"><a class="navbar-item is-active svelte-628czb" href="/tools/restApiToText">REST Api to Text</a> 
      <a class="navbar-item" href="/tools/apiToSpreadsheet">API to Spreadsheet</a></div> 

    <div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-primary" href="https://github.com/marc0l92/api-tools/issues/new/choose"><strong>Feedbacks</strong></a></div></div></div></div>`;
      attr(nav, "class", "navbar svelte-628czb");
    },
    m(target, anchor) {
      insert(target, nav, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(nav);
    }
  };
}
var Navbar = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {}, add_css);
  }
};
var navbar_default = Navbar;

// src/restApiToText/dictionaryApi.ts
var dictionaryApiUri = "https://api.dictionaryapi.dev/api/v2/entries/en/";
function computeType(queryResponse) {
  if (queryResponse.stats.noun >= queryResponse.stats.verb && queryResponse.stats.noun >= queryResponse.stats.adjective) {
    queryResponse.type.isNoun = true;
  }
  if (queryResponse.stats.verb >= queryResponse.stats.noun && queryResponse.stats.verb >= queryResponse.stats.adjective) {
    queryResponse.type.isVerb = true;
  }
  if (queryResponse.stats.adjective >= queryResponse.stats.noun && queryResponse.stats.adjective >= queryResponse.stats.verb) {
    queryResponse.type.isAdjective = true;
  }
}
function convertStatsToPercentage(queryResponse) {
  const total = Math.max(1, queryResponse.stats.noun + queryResponse.stats.verb + queryResponse.stats.adjective);
  queryResponse.stats.noun = Math.round(queryResponse.stats.noun / total * 100);
  queryResponse.stats.verb = Math.round(queryResponse.stats.verb / total * 100);
  queryResponse.stats.adjective = Math.round(queryResponse.stats.adjective / total * 100);
}
var queryDictionary = async (word) => {
  const queryResponse = {
    found: true,
    stats: { noun: 0, verb: 0, adjective: 0 },
    type: { isNoun: false, isVerb: false, isAdjective: false }
  };
  const response = await fetch(dictionaryApiUri + encodeURIComponent(word), { method: "GET" });
  if (!response.ok) {
    queryResponse.found = false;
    return queryResponse;
  }
  const responseJson = await response.json();
  for (const result of responseJson) {
    for (const meaning of result.meanings) {
      switch (meaning.partOfSpeech) {
        case "noun":
          queryResponse.stats.noun += meaning.definitions.length;
          break;
        case "verb":
          queryResponse.stats.verb += meaning.definitions.length;
          break;
        case "adjective":
          queryResponse.stats.adjective += meaning.definitions.length;
          break;
      }
    }
  }
  computeType(queryResponse);
  convertStatsToPercentage(queryResponse);
  return queryResponse;
};

// src/restApiToText/restApiToText.ts
var pluralize = require_pluralize();
var ApiTokenType = /* @__PURE__ */ ((ApiTokenType2) => {
  ApiTokenType2["VERSION"] = "version";
  ApiTokenType2["CAPABILITY"] = "capability";
  ApiTokenType2["COLLECTION"] = "collection";
  ApiTokenType2["RESOURCE"] = "resource";
  ApiTokenType2["SUB_RESOURCE"] = "sub-resource";
  ApiTokenType2["CONTROLLER"] = "controller";
  return ApiTokenType2;
})(ApiTokenType || {});
var ApiMethods = /* @__PURE__ */ ((ApiMethods2) => {
  ApiMethods2["GET"] = "GET";
  ApiMethods2["POST"] = "POST";
  ApiMethods2["PUT"] = "PUT";
  ApiMethods2["PATCH"] = "PATCH";
  ApiMethods2["DELETE"] = "DELETE";
  return ApiMethods2;
})(ApiMethods || {});
var UriNotCompleted = "Uri not completed, continue typing...";
async function checkIsNoun(word, warnings) {
  const dictionaryResult = await queryDictionary(word);
  if (!dictionaryResult.found) {
    warnings.push(`The word "${word}" is not present in the english dictionary`);
  } else if (!dictionaryResult.type.isNoun) {
    warnings.push(`The word "${word}" is not usually used as noun (noun: ${dictionaryResult.stats.noun}%, verb: ${dictionaryResult.stats.verb}%, adjective: ${dictionaryResult.stats.adjective}%)`);
  }
}
function parseVersion(version) {
  const part = {
    type: "version" /* VERSION */,
    text: version,
    alternativeTypes: [],
    warnings: []
  };
  if (!version.match(/^[vV]?\d+(\.\d+)?$/)) {
    part.warnings.push(`The version "${version}" has an invalid structure. Expected something like: v1`);
  }
  if (!version.match(/^v/)) {
    part.warnings.push(`The version "${version}" should start with a lowercase "v"`);
  }
  return part;
}
async function parseCapability(capability) {
  const part = {
    type: "capability" /* CAPABILITY */,
    text: capability,
    alternativeTypes: [],
    warnings: []
  };
  if (!pluralize.isSingular(capability)) {
    part.warnings.push(`The capability "${capability}" should be a singular word`);
  }
  await checkIsNoun(capability, part.warnings);
  return part;
}
async function parseCollection(collectionName) {
  const part = {
    type: "collection" /* COLLECTION */,
    text: collectionName,
    alternativeTypes: [],
    warnings: []
  };
  if (!pluralize.isPlural(collectionName)) {
    part.warnings.push(`The collection "${collectionName}" should be a plural word`);
  }
  await checkIsNoun(collectionName, part.warnings);
  return part;
}
async function parseResource(resourceId) {
  const part = {
    type: "resource" /* RESOURCE */,
    text: resourceId,
    alternativeTypes: [],
    warnings: []
  };
  return part;
}
async function parseSubResource(subResourceName) {
  const part = {
    type: "sub-resource" /* SUB_RESOURCE */,
    text: subResourceName,
    alternativeTypes: [],
    warnings: []
  };
  if (!pluralize.isSingular(subResourceName)) {
    part.warnings.push(`The sub-resource "${subResourceName}" should be a singular word`);
  }
  await checkIsNoun(subResourceName, part.warnings);
  return part;
}
async function parseController(controllerName) {
  const part = {
    type: "controller" /* CONTROLLER */,
    text: controllerName,
    alternativeTypes: [],
    warnings: []
  };
  if (!pluralize.isSingular(controllerName)) {
    part.warnings.push(`The controller "${controllerName}" should be a singular word`);
  }
  return part;
}
async function parseByType(type, text2) {
  switch (type) {
    case "collection" /* COLLECTION */:
      return await parseCollection(text2);
    case "resource" /* RESOURCE */:
      return await parseResource(text2);
    case "sub-resource" /* SUB_RESOURCE */:
      return await parseSubResource(text2);
    case "controller" /* CONTROLLER */:
      return await parseController(text2);
  }
  return null;
}
var apiToTokens = async (method, uri, options) => {
  const results = { errors: [], tokens: [] };
  let uriTokens = uri.split("/").filter((part) => part !== "");
  const minParts = (options.version ? 1 : 0) + (options.capability ? 1 : 0) + 1;
  if (uriTokens.length >= minParts) {
    let tokensIndex = 0;
    if (options.version) {
      results.tokens.push(parseVersion(uriTokens[tokensIndex++]));
    }
    if (options.capability) {
      results.tokens.push(await parseCapability(uriTokens[tokensIndex++]));
    }
    let oddNotEven = true;
    let isFirstToken = true;
    while (tokensIndex < uriTokens.length) {
      const isLastToken = tokensIndex === uriTokens.length - 1;
      if (oddNotEven) {
        const token = await parseCollection(uriTokens[tokensIndex]);
        if (!isFirstToken) {
          if (!isLastToken || method !== "POST" /* POST */) {
            token.alternativeTypes.push("sub-resource" /* SUB_RESOURCE */);
          }
          if (isLastToken && method === "POST" /* POST */) {
            token.alternativeTypes.push("controller" /* CONTROLLER */);
          }
        }
        results.tokens.push(token);
      } else {
        if (isLastToken && method === "POST" /* POST */) {
          results.tokens.push(await parseController(uriTokens[tokensIndex]));
        } else {
          results.tokens.push(await parseResource(uriTokens[tokensIndex]));
        }
      }
      oddNotEven = !oddNotEven;
      isFirstToken = false;
      tokensIndex++;
    }
  } else {
    results.errors.push(UriNotCompleted);
  }
  return results;
};
var refreshApiTokens = async (method, tokens, updatedIndex) => {
  let tokensIndex = 0;
  while (tokensIndex < tokens.length && (tokens[tokensIndex].type == "version" /* VERSION */ || tokens[tokensIndex].type == "capability" /* CAPABILITY */)) {
    tokensIndex++;
  }
  let nextTypes = ["collection" /* COLLECTION */];
  let isFirstToken = true;
  while (tokensIndex < tokens.length) {
    const token = tokens[tokensIndex];
    const isNextLastToken = tokensIndex === tokens.length - 2;
    console.log({ token, tokensIndex, nextTypes });
    if (nextTypes.indexOf(token.type) >= 0) {
      if (tokensIndex === updatedIndex) {
        tokens[tokensIndex] = await parseByType(token.type, token.text);
        tokens[tokensIndex].alternativeTypes = token.alternativeTypes;
      }
      switch (token.type) {
        case "collection" /* COLLECTION */:
          nextTypes = ["resource" /* RESOURCE */];
          if (isNextLastToken && !isFirstToken && method === "POST" /* POST */) {
            nextTypes.push("controller" /* CONTROLLER */);
          }
          break;
        case "resource" /* RESOURCE */:
          nextTypes = ["collection" /* COLLECTION */];
          if (!isNextLastToken || method !== "POST" /* POST */) {
            nextTypes.push("sub-resource" /* SUB_RESOURCE */);
          }
          if (isNextLastToken && method === "POST" /* POST */) {
            nextTypes.push("controller" /* CONTROLLER */);
          }
          break;
        case "sub-resource" /* SUB_RESOURCE */:
          nextTypes = ["collection" /* COLLECTION */];
          if (isNextLastToken && method === "POST" /* POST */) {
            nextTypes.push("controller" /* CONTROLLER */);
          }
          break;
        case "controller" /* CONTROLLER */:
          nextTypes = [];
          if (tokensIndex !== tokens.length - 1) {
            return null;
          }
          break;
        default:
          console.error("Invalid token type");
          return null;
      }
      isFirstToken = false;
      tokensIndex++;
    } else {
      tokens[tokensIndex] = await parseByType(nextTypes[0], token.text);
      tokens[tokensIndex].alternativeTypes = nextTypes.slice(1);
    }
  }
  return tokens;
};
var rotateTokenType = (tokens, toUpdateIndex) => {
  const itemToChange = tokens[toUpdateIndex];
  itemToChange.alternativeTypes.push(itemToChange.type);
  itemToChange.type = itemToChange.alternativeTypes.shift();
  return tokens;
};
var apiTokensToString = (method, tokens) => {
  let text2 = "";
  let tokensIndex = tokens.length - 1;
  let isFirstToken = true;
  while (tokensIndex >= 0) {
    switch (tokens[tokensIndex].type) {
      case "collection" /* COLLECTION */:
        if (isFirstToken) {
          text2 += methodsVerb.collection[method](tokens[tokensIndex].text);
        }
        break;
      case "resource" /* RESOURCE */:
        if (tokensIndex >= 1 && tokens[tokensIndex - 1].type === "collection" /* COLLECTION */) {
          if (isFirstToken) {
            if (method !== "POST" /* POST */) {
              text2 += methodsVerb.resource[method](tokens[tokensIndex].text, tokens[tokensIndex - 1].text);
            } else {
              return "Error: method POST not supported on resources";
            }
          } else {
            text2 += methodsVerb.middle.resourceAndCollection(tokens[tokensIndex].text, tokens[tokensIndex - 1].text);
          }
          tokensIndex--;
        } else {
          return "Error: the URI should start with a collection/resource";
        }
        break;
      case "sub-resource" /* SUB_RESOURCE */:
        if (tokensIndex >= 2 && tokens[tokensIndex - 1].type === "resource" /* RESOURCE */ && tokens[tokensIndex - 2].type === "collection" /* COLLECTION */) {
          if (isFirstToken) {
            if (method !== "POST" /* POST */) {
              text2 += methodsVerb.subResource[method](tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text);
            } else {
              return "Error: method POST not supported on sub-resources";
            }
          } else {
            text2 += methodsVerb.middle.subResourceAndResourceAndCollection(tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text);
          }
          tokensIndex -= 2;
        } else {
          return "Error: the URI should start with a collection/resource/sub-resource";
        }
        break;
      case "controller" /* CONTROLLER */:
        if (method === "POST" /* POST */ && isFirstToken) {
          if (tokensIndex >= 1 && tokens[tokensIndex - 1].type === "collection" /* COLLECTION */) {
            text2 += methodsVerb.controller.controllerOnCollection(tokens[tokensIndex].text, tokens[tokensIndex - 1].text);
            tokensIndex--;
          } else if (tokensIndex >= 2 && tokens[tokensIndex - 1].type === "resource" /* RESOURCE */ && tokens[tokensIndex - 2].type === "collection" /* COLLECTION */) {
            text2 += methodsVerb.controller.controllerOnResource(tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text);
            tokensIndex -= 2;
          } else if (tokensIndex >= 3 && tokens[tokensIndex - 1].type === "sub-resource" /* SUB_RESOURCE */ && tokens[tokensIndex - 2].type === "resource" /* RESOURCE */ && tokens[tokensIndex - 3].type === "collection" /* COLLECTION */) {
            text2 += methodsVerb.controller.controllerOnSubResource(tokens[tokensIndex].text, tokens[tokensIndex - 1].text, tokens[tokensIndex - 2].text, tokens[tokensIndex - 3].text);
            tokensIndex -= 3;
          }
        } else {
          return "Error: it is possible to use controller only at the end of the URI with the method POST";
        }
        break;
    }
    tokensIndex--;
    isFirstToken = false;
  }
  return text2;
};
var methodsVerb = {
  resource: {
    GET: (resourceId, collectionName) => `Retrieve the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    POST: (resourceId, collectionName) => "",
    PUT: (resourceId, collectionName) => `Replace with the one in request, the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    PATCH: (resourceId, collectionName) => `Apply the changes listed in request to the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    DELETE: (resourceId, collectionName) => `Delete the ${pluralize.singular(collectionName)} with id "${resourceId}"`
  },
  collection: {
    GET: (collectionName) => `Search in the ${collectionName}`,
    POST: (collectionName) => `Create a new ${pluralize.singular(collectionName)}`,
    PUT: (collectionName) => `Replace with the list in request all the ${collectionName}`,
    PATCH: (collectionName) => `Replace with the list in request all the ${collectionName}`,
    DELETE: (collectionName) => `Delete all the ${collectionName}`
  },
  subResource: {
    GET: (subResourceName, resourceId, collectionName) => `Retrieve the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    POST: (subResourceName, resourceId, collectionName) => "",
    PUT: (subResourceName, resourceId, collectionName) => `Replace with the one in request, the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    PATCH: (subResourceName, resourceId, collectionName) => `Apply the changes listed in request to the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    DELETE: (subResourceName, resourceId, collectionName) => `Delete the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`
  },
  controller: {
    controllerOnCollection: (controllerName, collectionName) => `Perform the action of "${controllerName}" on the ${collectionName}`,
    controllerOnResource: (controllerName, resourceId, collectionName) => `Perform the action of "${controllerName}" on the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    controllerOnSubResource: (controllerName, subResourceName, resourceId, collectionName) => `Perform the action of "${controllerName}" on the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`
  },
  middle: {
    resourceAndCollection: (resourceId, collectionName) => `, of the ${pluralize.singular(collectionName)} with id "${resourceId}"`,
    subResourceAndResourceAndCollection: (subResourceName, resourceId, collectionName) => `, of the ${subResourceName} of the ${pluralize.singular(collectionName)} with id "${resourceId}"`
  }
};

// src/restApiToText/inputUri.svelte
function add_css2(target) {
  append_styles(target, "svelte-ksh5de", ".box.svelte-ksh5de{background-color:var(--color-background-accent)}");
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let option;
  let t_value = (
    /*supportedMethod*/
    ctx[11] + ""
  );
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      option.__value = option_value_value = /*supportedMethod*/
      ctx[11];
      option.value = option.__value;
    },
    m(target, anchor) {
      insert(target, option, anchor);
      append(option, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_fragment2(ctx) {
  let section;
  let form;
  let div3;
  let div1;
  let div0;
  let select;
  let t0;
  let div2;
  let input0;
  let t1;
  let div7;
  let div6;
  let div4;
  let label0;
  let input1;
  let t2;
  let t3;
  let div5;
  let label1;
  let input2;
  let t4;
  let mounted;
  let dispose;
  let each_value = (
    /*supportedMethodsStr*/
    ctx[4]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      section = element("section");
      form = element("form");
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      div2 = element("div");
      input0 = element("input");
      t1 = space();
      div7 = element("div");
      div6 = element("div");
      div4 = element("div");
      label0 = element("label");
      input1 = element("input");
      t2 = text("\r\n                        Version");
      t3 = space();
      div5 = element("div");
      label1 = element("label");
      input2 = element("input");
      t4 = text("\r\n                        Capability");
      if (
        /*method*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[6].call(select)
        ));
      attr(div0, "class", "select");
      attr(div1, "class", "control");
      attr(input0, "type", "text");
      attr(input0, "class", "input");
      attr(input0, "placeholder", "Example: /v1/reservation/chains/AAA/links/1234567890");
      attr(div2, "class", "control is-expanded");
      attr(div3, "class", "field has-addons");
      attr(input1, "type", "checkbox");
      attr(label0, "class", "checkbox");
      attr(div4, "class", "level-item control");
      attr(input2, "type", "checkbox");
      attr(label1, "class", "checkbox");
      attr(div5, "class", "level-item control");
      attr(div6, "class", "level-left");
      attr(div7, "class", "level");
      attr(section, "class", "box svelte-ksh5de");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, form);
      append(form, div3);
      append(div3, div1);
      append(div1, div0);
      append(div0, select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      select_option(
        select,
        /*method*/
        ctx[0]
      );
      append(div3, t0);
      append(div3, div2);
      append(div2, input0);
      set_input_value(
        input0,
        /*uri*/
        ctx[1]
      );
      append(form, t1);
      append(form, div7);
      append(div7, div6);
      append(div6, div4);
      append(div4, label0);
      append(label0, input1);
      input1.checked = /*version*/
      ctx[2];
      append(label0, t2);
      append(div6, t3);
      append(div6, div5);
      append(div5, label1);
      append(label1, input2);
      input2.checked = /*capability*/
      ctx[3];
      append(label1, t4);
      if (!mounted) {
        dispose = [
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[6]
          ),
          listen(
            select,
            "change",
            /*onUriChange*/
            ctx[5]
          ),
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[7]
          ),
          listen(
            input0,
            "input",
            /*onUriChange*/
            ctx[5]
          ),
          listen(
            input1,
            "change",
            /*input1_change_handler*/
            ctx[8]
          ),
          listen(
            input1,
            "change",
            /*onUriChange*/
            ctx[5]
          ),
          listen(
            input2,
            "change",
            /*input2_change_handler*/
            ctx[9]
          ),
          listen(
            input2,
            "change",
            /*onUriChange*/
            ctx[5]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*supportedMethodsStr*/
      16) {
        each_value = /*supportedMethodsStr*/
        ctx2[4];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*method, supportedMethodsStr*/
      17) {
        select_option(
          select,
          /*method*/
          ctx2[0]
        );
      }
      if (dirty & /*uri*/
      2 && input0.value !== /*uri*/
      ctx2[1]) {
        set_input_value(
          input0,
          /*uri*/
          ctx2[1]
        );
      }
      if (dirty & /*version*/
      4) {
        input1.checked = /*version*/
        ctx2[2];
      }
      if (dirty & /*capability*/
      8) {
        input2.checked = /*capability*/
        ctx2[3];
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const supportedMethodsStr = Object.keys(ApiMethods);
  let method = supportedMethodsStr[0];
  let uri = "/v1/reservation/chains/AAA/links/1234567890";
  let version = true;
  let capability = true;
  const dispatch = createEventDispatcher();
  function onUriChange() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("method", method);
    urlParams.set("uri", uri);
    urlParams.set("version", version ? "1" : "0");
    urlParams.set("capability", capability ? "1" : "0");
    window.history.pushState(null, null, "?" + urlParams.toString());
    dispatch("uriChange", { method, uri, version, capability });
  }
  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("method") && supportedMethodsStr.indexOf(urlParams.get("method")) >= 0) {
      $$invalidate(0, method = urlParams.get("method"));
    }
    if (urlParams.has("uri")) {
      $$invalidate(1, uri = urlParams.get("uri"));
    }
    if (urlParams.has("version")) {
      $$invalidate(2, version = !!urlParams.get("version"));
    }
    if (urlParams.has("capability")) {
      $$invalidate(3, capability = !!urlParams.get("capability"));
    }
    dispatch("uriChange", { method, uri, version, capability });
  });
  function select_change_handler() {
    method = select_value(this);
    $$invalidate(0, method);
    $$invalidate(4, supportedMethodsStr);
  }
  function input0_input_handler() {
    uri = this.value;
    $$invalidate(1, uri);
  }
  function input1_change_handler() {
    version = this.checked;
    $$invalidate(2, version);
  }
  function input2_change_handler() {
    capability = this.checked;
    $$invalidate(3, capability);
  }
  return [
    method,
    uri,
    version,
    capability,
    supportedMethodsStr,
    onUriChange,
    select_change_handler,
    input0_input_handler,
    input1_change_handler,
    input2_change_handler
  ];
}
var InputUri = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment2, safe_not_equal, {}, add_css2);
  }
};
var inputUri_default = InputUri;

// src/restApiToText/result.svelte
function add_css3(target) {
  append_styles(target, "svelte-1vy5yoq", ".box.svelte-1vy5yoq{background-color:var(--color-background-accent)}.icon.is-warning.svelte-1vy5yoq{color:#ffe86e}span.margin-left.svelte-1vy5yoq{margin-left:0.5em}button.tag.svelte-1vy5yoq{border:none;cursor:pointer}.tags.no-margin.svelte-1vy5yoq{margin:0}.tag.is-separator.svelte-1vy5yoq{padding-left:0.25em;padding-right:0.25em;background-color:#eee}.tag.has-warning.svelte-1vy5yoq{text-decoration:wavy;text-decoration-line:underline;text-decoration-color:red}.tag.no-margin.svelte-1vy5yoq{margin:0}.tag.is-version.svelte-1vy5yoq{background-color:#b8fbb5}.tag.is-capability.svelte-1vy5yoq{background-color:#fff2b3}.tag.is-collection.svelte-1vy5yoq{background-color:#81d5ff}.tag.is-resource.svelte-1vy5yoq{background-color:#ff889a}.tag.is-sub-resource.svelte-1vy5yoq{background-color:#ffc2a9}.tag.is-controller.svelte-1vy5yoq{background-color:#e18af1}");
}
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  child_ctx[17] = i;
  return child_ctx;
}
function create_else_block(ctx) {
  let span;
  let t0_value = (
    /*part*/
    ctx[10].text + ""
  );
  let t0;
  let t1;
  let span_title_value;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t0 = text(t0_value);
      t1 = space();
      attr(span, "title", span_title_value = /*part*/
      ctx[10].type);
      attr(span, "class", span_class_value = "tag is-" + /*part*/
      ctx[10].type + " " + /*part*/
      (ctx[10].warnings.length > 0 ? "has-warning" : "") + " svelte-1vy5yoq");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t0);
      append(span, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*tokens*/
      1 && t0_value !== (t0_value = /*part*/
      ctx2[10].text + ""))
        set_data(t0, t0_value);
      if (dirty & /*tokens*/
      1 && span_title_value !== (span_title_value = /*part*/
      ctx2[10].type)) {
        attr(span, "title", span_title_value);
      }
      if (dirty & /*tokens*/
      1 && span_class_value !== (span_class_value = "tag is-" + /*part*/
      ctx2[10].type + " " + /*part*/
      (ctx2[10].warnings.length > 0 ? "has-warning" : "") + " svelte-1vy5yoq")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_1(ctx) {
  let button;
  let t0_value = (
    /*part*/
    ctx[10].text + ""
  );
  let t0;
  let t1;
  let span1;
  let t2;
  let button_title_value;
  let button_class_value;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[5](
        /*index*/
        ctx[17]
      )
    );
  }
  return {
    c() {
      button = element("button");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      span1.innerHTML = `<span class="icon"><i class="fa-solid fa-arrows-rotate"></i></span>`;
      t2 = space();
      attr(span1, "class", "margin-left svelte-1vy5yoq");
      attr(button, "title", button_title_value = /*part*/
      ctx[10].type);
      attr(button, "class", button_class_value = "tag is-" + /*part*/
      ctx[10].type + " " + /*part*/
      (ctx[10].warnings.length > 0 ? "has-warning" : "") + " svelte-1vy5yoq");
    },
    m(target, anchor) {
      insert(target, button, anchor);
      append(button, t0);
      append(button, t1);
      append(button, span1);
      append(button, t2);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*tokens*/
      1 && t0_value !== (t0_value = /*part*/
      ctx[10].text + ""))
        set_data(t0, t0_value);
      if (dirty & /*tokens*/
      1 && button_title_value !== (button_title_value = /*part*/
      ctx[10].type)) {
        attr(button, "title", button_title_value);
      }
      if (dirty & /*tokens*/
      1 && button_class_value !== (button_class_value = "tag is-" + /*part*/
      ctx[10].type + " " + /*part*/
      (ctx[10].warnings.length > 0 ? "has-warning" : "") + " svelte-1vy5yoq")) {
        attr(button, "class", button_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block_3(ctx) {
  let span;
  let t1;
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*part*/
      ctx2[10].alternativeTypes.length > 0
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  return {
    c() {
      span = element("span");
      span.textContent = "/";
      t1 = space();
      if_block.c();
      if_block_anchor = empty();
      attr(span, "class", "tag is-separator svelte-1vy5yoq");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      insert(target, t1, anchor);
      if_block.m(target, anchor);
      insert(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let p0;
  let t1;
  let t2;
  let p1;
  let each_value_1 = (
    /*tokens*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      div = element("div");
      p0 = element("p");
      p0.innerHTML = `<strong>Warnings:</strong>`;
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      p1 = element("p");
      attr(div, "class", "warnings");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p0);
      append(div, t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      append(div, t2);
      append(div, p1);
    },
    p(ctx2, dirty) {
      if (dirty & /*tokens*/
      1) {
        each_value_1 = /*tokens*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, t2);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block_2(ctx) {
  let p;
  let span;
  let t0;
  let t1_value = (
    /*warning*/
    ctx[13] + ""
  );
  let t1;
  return {
    c() {
      p = element("p");
      span = element("span");
      span.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
      t0 = space();
      t1 = text(t1_value);
      attr(span, "class", "icon is-warning svelte-1vy5yoq");
    },
    m(target, anchor) {
      insert(target, p, anchor);
      append(p, span);
      append(p, t0);
      append(p, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*tokens*/
      1 && t1_value !== (t1_value = /*warning*/
      ctx2[13] + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(p);
    }
  };
}
function create_each_block_1(ctx) {
  let each_1_anchor;
  let each_value_2 = (
    /*part*/
    ctx[10].warnings
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*tokens*/
      1) {
        each_value_2 = /*part*/
        ctx2[10].warnings;
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block2(ctx) {
  let span;
  let t_value = (
    /*partType*/
    ctx[7] + ""
  );
  let t;
  let span_class_value;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "class", span_class_value = "tag no-margin is-" + /*partType*/
      ctx[7] + " svelte-1vy5yoq");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment3(ctx) {
  let div7;
  let p0;
  let t1;
  let div0;
  let t2;
  let div1;
  let p1;
  let t3;
  let t4;
  let t5;
  let div6;
  let div2;
  let t6;
  let div5;
  let div3;
  let t7;
  let div4;
  let each_value_3 = (
    /*tokens*/
    ctx[0]
  );
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_1[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  let if_block = (
    /*hasError*/
    ctx[2] && create_if_block(ctx)
  );
  let each_value = (
    /*restApiPartTypeStrings*/
    ctx[3]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
  }
  return {
    c() {
      div7 = element("div");
      p0 = element("p");
      p0.innerHTML = `<strong>Result:</strong>`;
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t2 = space();
      div1 = element("div");
      p1 = element("p");
      t3 = text(
        /*text*/
        ctx[1]
      );
      t4 = space();
      if (if_block)
        if_block.c();
      t5 = space();
      div6 = element("div");
      div2 = element("div");
      t6 = space();
      div5 = element("div");
      div3 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t7 = space();
      div4 = element("div");
      attr(p0, "class", "subtitle");
      attr(div0, "class", "tags has-addons");
      attr(div1, "class", "block");
      attr(div2, "class", "level-left");
      attr(div3, "class", "tags has-addons no-margin svelte-1vy5yoq");
      attr(div4, "class", "level-item");
      attr(div5, "class", "level-right");
      attr(div6, "class", "level");
      attr(div7, "class", "box svelte-1vy5yoq");
    },
    m(target, anchor) {
      insert(target, div7, anchor);
      append(div7, p0);
      append(div7, t1);
      append(div7, div0);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].m(div0, null);
      }
      append(div7, t2);
      append(div7, div1);
      append(div1, p1);
      append(p1, t3);
      append(div7, t4);
      if (if_block)
        if_block.m(div7, null);
      append(div7, t5);
      append(div7, div6);
      append(div6, div2);
      append(div6, t6);
      append(div6, div5);
      append(div5, div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div3, null);
      }
      append(div5, t7);
      append(div5, div4);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*tokens, changeTokenType*/
      17) {
        each_value_3 = /*tokens*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_3(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div0, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_3.length;
      }
      if (dirty & /*text*/
      2)
        set_data(
          t3,
          /*text*/
          ctx2[1]
        );
      if (
        /*hasError*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(div7, t5);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*restApiPartTypeStrings*/
      8) {
        each_value = /*restApiPartTypeStrings*/
        ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div3, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div7);
      destroy_each(each_blocks_1, detaching);
      if (if_block)
        if_block.d();
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  let hasError;
  const restApiPartTypeStrings = Object.values(ApiTokenType);
  let { tokens = [] } = $$props;
  let { text: text2 = "" } = $$props;
  const dispatch = createEventDispatcher();
  function changeTokenType(index) {
    dispatch("changeTokenType", { index });
  }
  const click_handler = (index) => changeTokenType(index);
  $$self.$$set = ($$props2) => {
    if ("tokens" in $$props2)
      $$invalidate(0, tokens = $$props2.tokens);
    if ("text" in $$props2)
      $$invalidate(1, text2 = $$props2.text);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*tokens*/
    1) {
      $:
        $$invalidate(2, hasError = tokens.filter((p) => p.warnings.length > 0).length > 0);
    }
  };
  return [tokens, text2, hasError, restApiPartTypeStrings, changeTokenType, click_handler];
}
var Result = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment3, safe_not_equal, { tokens: 0, text: 1 }, add_css3);
  }
};
var result_default = Result;

// src/restApiToText/error.svelte
function add_css4(target) {
  append_styles(target, "svelte-ksh5de", ".box.svelte-ksh5de{background-color:var(--color-background-accent)}");
}
function get_each_context3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block3(ctx) {
  let li;
  let t_value = (
    /*message*/
    ctx[1] + ""
  );
  let t;
  return {
    c() {
      li = element("li");
      t = text(t_value);
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*messages*/
      1 && t_value !== (t_value = /*message*/
      ctx2[1] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment4(ctx) {
  let div;
  let p;
  let t1;
  let ul;
  let each_value = (
    /*messages*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      p = element("p");
      p.innerHTML = `<strong>Errors:</strong>`;
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(p, "class", "subtitle");
      attr(div, "class", "box svelte-ksh5de");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, p);
      append(div, t1);
      append(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*messages*/
      1) {
        each_value = /*messages*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block3(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance3($$self, $$props, $$invalidate) {
  let { messages = [] } = $$props;
  $$self.$$set = ($$props2) => {
    if ("messages" in $$props2)
      $$invalidate(0, messages = $$props2.messages);
  };
  return [messages];
}
var Error2 = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance3, create_fragment4, safe_not_equal, { messages: 0 }, add_css4);
  }
};
var error_default = Error2;

// src/restApiToText/index.svelte
function add_css5(target) {
  append_styles(target, "svelte-1gzs1yt", ".hero.is-small.svelte-1gzs1yt .hero-body.svelte-1gzs1yt{padding-left:0;padding-right:0}");
}
function create_if_block_12(ctx) {
  let error;
  let current;
  error = new error_default({
    props: { messages: (
      /*apiTokens*/
      ctx[0].errors
    ) }
  });
  return {
    c() {
      create_component(error.$$.fragment);
    },
    m(target, anchor) {
      mount_component(error, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const error_changes = {};
      if (dirty & /*apiTokens*/
      1)
        error_changes.messages = /*apiTokens*/
        ctx2[0].errors;
      error.$set(error_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(error.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(error.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(error, detaching);
    }
  };
}
function create_if_block2(ctx) {
  let result;
  let current;
  result = new result_default({
    props: {
      tokens: (
        /*apiTokens*/
        ctx[0].tokens
      ),
      text: (
        /*apiText*/
        ctx[1]
      )
    }
  });
  result.$on(
    "changeTokenType",
    /*onChangeTokenType*/
    ctx[3]
  );
  return {
    c() {
      create_component(result.$$.fragment);
    },
    m(target, anchor) {
      mount_component(result, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const result_changes = {};
      if (dirty & /*apiTokens*/
      1)
        result_changes.tokens = /*apiTokens*/
        ctx2[0].tokens;
      if (dirty & /*apiText*/
      2)
        result_changes.text = /*apiText*/
        ctx2[1];
      result.$set(result_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(result.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(result.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(result, detaching);
    }
  };
}
function create_fragment5(ctx) {
  let navbar;
  let t0;
  let div1;
  let section;
  let t8;
  let inputuri;
  let t9;
  let t10;
  let current;
  navbar = new navbar_default({});
  inputuri = new inputUri_default({});
  inputuri.$on(
    "uriChange",
    /*onUriChange*/
    ctx[2]
  );
  let if_block0 = (
    /*apiTokens*/
    ctx[0].errors.length > 0 && create_if_block_12(ctx)
  );
  let if_block1 = (
    /*apiTokens*/
    ctx[0].tokens.length > 0 && create_if_block2(ctx)
  );
  return {
    c() {
      create_component(navbar.$$.fragment);
      t0 = space();
      div1 = element("div");
      section = element("section");
      section.innerHTML = `<div class="hero-body svelte-1gzs1yt"><h1 class="title">REST Api to Text</h1> 
      <p class="subtitle">Input your api <i>method</i> and <i>URI</i> and check what is the meaning of it according to the REST API guidelines</p></div>`;
      t8 = space();
      create_component(inputuri.$$.fragment);
      t9 = space();
      if (if_block0)
        if_block0.c();
      t10 = space();
      if (if_block1)
        if_block1.c();
      attr(section, "class", "hero is-small svelte-1gzs1yt");
      attr(div1, "class", "container");
    },
    m(target, anchor) {
      mount_component(navbar, target, anchor);
      insert(target, t0, anchor);
      insert(target, div1, anchor);
      append(div1, section);
      append(div1, t8);
      mount_component(inputuri, div1, null);
      append(div1, t9);
      if (if_block0)
        if_block0.m(div1, null);
      append(div1, t10);
      if (if_block1)
        if_block1.m(div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*apiTokens*/
        ctx2[0].errors.length > 0
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*apiTokens*/
          1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_12(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t10);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (
        /*apiTokens*/
        ctx2[0].tokens.length > 0
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*apiTokens*/
          1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block2(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      transition_in(inputuri.$$.fragment, local);
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(inputuri.$$.fragment, local);
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      destroy_component(navbar, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div1);
      destroy_component(inputuri);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function instance4($$self, $$props, $$invalidate) {
  let apiTokens = { errors: [], tokens: [] };
  let apiText = "";
  let method;
  function onUriChange(event) {
    return __awaiter(this, void 0, void 0, function* () {
      method = event.detail.method;
      $$invalidate(0, apiTokens = yield apiToTokens(method, event.detail.uri, {
        version: event.detail.version,
        capability: event.detail.capability
      }));
      $$invalidate(1, apiText = apiTokensToString(method, apiTokens.tokens));
    });
  }
  function onChangeTokenType(event) {
    return __awaiter(this, void 0, void 0, function* () {
      const updatedIndex = event.detail.index;
      if (updatedIndex < apiTokens.tokens.length) {
        $$invalidate(0, apiTokens.tokens = rotateTokenType(apiTokens.tokens, updatedIndex), apiTokens);
        $$invalidate(0, apiTokens.tokens = yield refreshApiTokens(method, apiTokens.tokens, updatedIndex), apiTokens);
        $$invalidate(1, apiText = apiTokensToString(method, apiTokens.tokens));
      }
    });
  }
  return [apiTokens, apiText, onUriChange, onChangeTokenType];
}
var RestApiToText = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance4, create_fragment5, safe_not_equal, {}, add_css5);
  }
};
var restApiToText_default = RestApiToText;

// src/restApiToText.ts
new restApiToText_default({ target: document.body });
new EventSource("/esbuild").addEventListener("change", () => location.reload());
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3BsdXJhbGl6ZUA4LjAuMC9ub2RlX21vZHVsZXMvcGx1cmFsaXplL3BsdXJhbGl6ZS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3ZlbHRlQDMuNTUuMS9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdHNsaWJAMi40LjEvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuc3ZlbHRlIiwgIi4uLy4uL3NyYy9yZXN0QXBpVG9UZXh0L2RpY3Rpb25hcnlBcGkudHMiLCAiLi4vLi4vc3JjL3Jlc3RBcGlUb1RleHQvcmVzdEFwaVRvVGV4dC50cyIsICIuLi8uLi9zcmMvcmVzdEFwaVRvVGV4dC9pbnB1dFVyaS5zdmVsdGUiLCAiLi4vLi4vc3JjL3Jlc3RBcGlUb1RleHQvcmVzdWx0LnN2ZWx0ZSIsICIuLi8uLi9zcmMvcmVzdEFwaVRvVGV4dC9lcnJvci5zdmVsdGUiLCAiLi4vLi4vc3JjL3Jlc3RBcGlUb1RleHQvaW5kZXguc3ZlbHRlIiwgIi4uLy4uL3NyYy9yZXN0QXBpVG9UZXh0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAocm9vdCwgcGx1cmFsaXplKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmICh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gcGx1cmFsaXplKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELCByZWdpc3RlcnMgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBsdXJhbGl6ZSgpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsLlxuICAgIHJvb3QucGx1cmFsaXplID0gcGx1cmFsaXplKCk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgLy8gUnVsZSBzdG9yYWdlIC0gcGx1cmFsaXplIGFuZCBzaW5ndWxhcml6ZSBuZWVkIHRvIGJlIHJ1biBzZXF1ZW50aWFsbHksXG4gIC8vIHdoaWxlIG90aGVyIHJ1bGVzIGNhbiBiZSBvcHRpbWl6ZWQgdXNpbmcgYW4gb2JqZWN0IGZvciBpbnN0YW50IGxvb2t1cHMuXG4gIHZhciBwbHVyYWxSdWxlcyA9IFtdO1xuICB2YXIgc2luZ3VsYXJSdWxlcyA9IFtdO1xuICB2YXIgdW5jb3VudGFibGVzID0ge307XG4gIHZhciBpcnJlZ3VsYXJQbHVyYWxzID0ge307XG4gIHZhciBpcnJlZ3VsYXJTaW5nbGVzID0ge307XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIGEgcGx1cmFsaXphdGlvbiBydWxlIHRvIGEgdXNhYmxlIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtICB7KFJlZ0V4cHxzdHJpbmcpfSBydWxlXG4gICAqIEByZXR1cm4ge1JlZ0V4cH1cbiAgICovXG4gIGZ1bmN0aW9uIHNhbml0aXplUnVsZSAocnVsZSkge1xuICAgIGlmICh0eXBlb2YgcnVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHJ1bGUgKyAnJCcsICdpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICAvKipcbiAgICogUGFzcyBpbiBhIHdvcmQgdG9rZW4gdG8gcHJvZHVjZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIHJlcGxpY2F0ZSB0aGUgY2FzZSBvblxuICAgKiBhbm90aGVyIHdvcmQuXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICB3b3JkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICB0b2tlblxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc3RvcmVDYXNlICh3b3JkLCB0b2tlbikge1xuICAgIC8vIFRva2VucyBhcmUgYW4gZXhhY3QgbWF0Y2guXG4gICAgaWYgKHdvcmQgPT09IHRva2VuKSByZXR1cm4gdG9rZW47XG5cbiAgICAvLyBMb3dlciBjYXNlZCB3b3Jkcy4gRS5nLiBcImhlbGxvXCIuXG4gICAgaWYgKHdvcmQgPT09IHdvcmQudG9Mb3dlckNhc2UoKSkgcmV0dXJuIHRva2VuLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBVcHBlciBjYXNlZCB3b3Jkcy4gRS5nLiBcIldISVNLWVwiLlxuICAgIGlmICh3b3JkID09PSB3b3JkLnRvVXBwZXJDYXNlKCkpIHJldHVybiB0b2tlbi50b1VwcGVyQ2FzZSgpO1xuXG4gICAgLy8gVGl0bGUgY2FzZWQgd29yZHMuIEUuZy4gXCJUaXRsZVwiLlxuICAgIGlmICh3b3JkWzBdID09PSB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiB0b2tlbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRva2VuLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIExvd2VyIGNhc2VkIHdvcmRzLiBFLmcuIFwidGVzdFwiLlxuICAgIHJldHVybiB0b2tlbi50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGEgcmVnZXhwIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAgICogQHBhcmFtICB7QXJyYXl9ICBhcmdzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGludGVycG9sYXRlIChzdHIsIGFyZ3MpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJChcXGR7MSwyfSkvZywgZnVuY3Rpb24gKG1hdGNoLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGFyZ3NbaW5kZXhdIHx8ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYSB3b3JkIHVzaW5nIGEgcnVsZS5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSB3b3JkXG4gICAqIEBwYXJhbSAge0FycmF5fSAgcnVsZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlICh3b3JkLCBydWxlKSB7XG4gICAgcmV0dXJuIHdvcmQucmVwbGFjZShydWxlWzBdLCBmdW5jdGlvbiAobWF0Y2gsIGluZGV4KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gaW50ZXJwb2xhdGUocnVsZVsxXSwgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKG1hdGNoID09PSAnJykge1xuICAgICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZFtpbmRleCAtIDFdLCByZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdG9yZUNhc2UobWF0Y2gsIHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2FuaXRpemUgYSB3b3JkIGJ5IHBhc3NpbmcgaW4gdGhlIHdvcmQgYW5kIHNhbml0aXphdGlvbiBydWxlcy5cbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSAgIHRva2VuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gICB3b3JkXG4gICAqIEBwYXJhbSAge0FycmF5fSAgICBydWxlc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBzYW5pdGl6ZVdvcmQgKHRva2VuLCB3b3JkLCBydWxlcykge1xuICAgIC8vIEVtcHR5IHN0cmluZyBvciBkb2Vzbid0IG5lZWQgZml4aW5nLlxuICAgIGlmICghdG9rZW4ubGVuZ3RoIHx8IHVuY291bnRhYmxlcy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICAgIHJldHVybiB3b3JkO1xuICAgIH1cblxuICAgIHZhciBsZW4gPSBydWxlcy5sZW5ndGg7XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHNhbml0aXphdGlvbiBydWxlcyBhbmQgdXNlIHRoZSBmaXJzdCBvbmUgdG8gbWF0Y2guXG4gICAgd2hpbGUgKGxlbi0tKSB7XG4gICAgICB2YXIgcnVsZSA9IHJ1bGVzW2xlbl07XG5cbiAgICAgIGlmIChydWxlWzBdLnRlc3Qod29yZCkpIHJldHVybiByZXBsYWNlKHdvcmQsIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYSB3b3JkIHdpdGggdGhlIHVwZGF0ZWQgd29yZC5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgIHJlcGxhY2VNYXBcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgIGtlZXBNYXBcbiAgICogQHBhcmFtICB7QXJyYXl9ICAgIHJ1bGVzXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVdvcmQgKHJlcGxhY2VNYXAsIGtlZXBNYXAsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAvLyBHZXQgdGhlIGNvcnJlY3QgdG9rZW4gYW5kIGNhc2UgcmVzdG9yYXRpb24gZnVuY3Rpb25zLlxuICAgICAgdmFyIHRva2VuID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBrZWVwIG9iamVjdCBtYXAuXG4gICAgICBpZiAoa2VlcE1hcC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHRva2VuKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgYWdhaW5zdCB0aGUgcmVwbGFjZW1lbnQgbWFwIGZvciBhIGRpcmVjdCB3b3JkIHJlcGxhY2VtZW50LlxuICAgICAgaWYgKHJlcGxhY2VNYXAuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgICAgIHJldHVybiByZXN0b3JlQ2FzZSh3b3JkLCByZXBsYWNlTWFwW3Rva2VuXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJ1biBhbGwgdGhlIHJ1bGVzIGFnYWluc3QgdGhlIHdvcmQuXG4gICAgICByZXR1cm4gc2FuaXRpemVXb3JkKHRva2VuLCB3b3JkLCBydWxlcyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHdvcmQgaXMgcGFydCBvZiB0aGUgbWFwLlxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2tXb3JkIChyZXBsYWNlTWFwLCBrZWVwTWFwLCBydWxlcywgYm9vbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAod29yZCkge1xuICAgICAgdmFyIHRva2VuID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBpZiAoa2VlcE1hcC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHJldHVybiB0cnVlO1xuICAgICAgaWYgKHJlcGxhY2VNYXAuaGFzT3duUHJvcGVydHkodG9rZW4pKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiBzYW5pdGl6ZVdvcmQodG9rZW4sIHRva2VuLCBydWxlcykgPT09IHRva2VuO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUGx1cmFsaXplIG9yIHNpbmd1bGFyaXplIGEgd29yZCBiYXNlZCBvbiB0aGUgcGFzc2VkIGluIGNvdW50LlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICB3b3JkICAgICAgVGhlIHdvcmQgdG8gcGx1cmFsaXplXG4gICAqIEBwYXJhbSAge251bWJlcn0gIGNvdW50ICAgICBIb3cgbWFueSBvZiB0aGUgd29yZCBleGlzdFxuICAgKiBAcGFyYW0gIHtib29sZWFufSBpbmNsdXNpdmUgV2hldGhlciB0byBwcmVmaXggd2l0aCB0aGUgbnVtYmVyIChlLmcuIDMgZHVja3MpXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIHBsdXJhbGl6ZSAod29yZCwgY291bnQsIGluY2x1c2l2ZSkge1xuICAgIHZhciBwbHVyYWxpemVkID0gY291bnQgPT09IDFcbiAgICAgID8gcGx1cmFsaXplLnNpbmd1bGFyKHdvcmQpIDogcGx1cmFsaXplLnBsdXJhbCh3b3JkKTtcblxuICAgIHJldHVybiAoaW5jbHVzaXZlID8gY291bnQgKyAnICcgOiAnJykgKyBwbHVyYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFBsdXJhbGl6ZSBhIHdvcmQuXG4gICAqXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIHBsdXJhbGl6ZS5wbHVyYWwgPSByZXBsYWNlV29yZChcbiAgICBpcnJlZ3VsYXJTaW5nbGVzLCBpcnJlZ3VsYXJQbHVyYWxzLCBwbHVyYWxSdWxlc1xuICApO1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHdvcmQgaXMgcGx1cmFsLlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICBwbHVyYWxpemUuaXNQbHVyYWwgPSBjaGVja1dvcmQoXG4gICAgaXJyZWd1bGFyU2luZ2xlcywgaXJyZWd1bGFyUGx1cmFscywgcGx1cmFsUnVsZXNcbiAgKTtcblxuICAvKipcbiAgICogU2luZ3VsYXJpemUgYSB3b3JkLlxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAqL1xuICBwbHVyYWxpemUuc2luZ3VsYXIgPSByZXBsYWNlV29yZChcbiAgICBpcnJlZ3VsYXJQbHVyYWxzLCBpcnJlZ3VsYXJTaW5nbGVzLCBzaW5ndWxhclJ1bGVzXG4gICk7XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgd29yZCBpcyBzaW5ndWxhci5cbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgcGx1cmFsaXplLmlzU2luZ3VsYXIgPSBjaGVja1dvcmQoXG4gICAgaXJyZWd1bGFyUGx1cmFscywgaXJyZWd1bGFyU2luZ2xlcywgc2luZ3VsYXJSdWxlc1xuICApO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBwbHVyYWxpemF0aW9uIHJ1bGUgdG8gdGhlIGNvbGxlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBydWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICByZXBsYWNlbWVudFxuICAgKi9cbiAgcGx1cmFsaXplLmFkZFBsdXJhbFJ1bGUgPSBmdW5jdGlvbiAocnVsZSwgcmVwbGFjZW1lbnQpIHtcbiAgICBwbHVyYWxSdWxlcy5wdXNoKFtzYW5pdGl6ZVJ1bGUocnVsZSksIHJlcGxhY2VtZW50XSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBhIHNpbmd1bGFyaXphdGlvbiBydWxlIHRvIHRoZSBjb2xsZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcnVsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgcmVwbGFjZW1lbnRcbiAgICovXG4gIHBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUgPSBmdW5jdGlvbiAocnVsZSwgcmVwbGFjZW1lbnQpIHtcbiAgICBzaW5ndWxhclJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGFuIHVuY291bnRhYmxlIHdvcmQgcnVsZS5cbiAgICpcbiAgICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHdvcmRcbiAgICovXG4gIHBsdXJhbGl6ZS5hZGRVbmNvdW50YWJsZVJ1bGUgPSBmdW5jdGlvbiAod29yZCkge1xuICAgIGlmICh0eXBlb2Ygd29yZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuY291bnRhYmxlc1t3b3JkLnRvTG93ZXJDYXNlKCldID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgc2luZ3VsYXIgYW5kIHBsdXJhbCByZWZlcmVuY2VzIGZvciB0aGUgd29yZC5cbiAgICBwbHVyYWxpemUuYWRkUGx1cmFsUnVsZSh3b3JkLCAnJDAnKTtcbiAgICBwbHVyYWxpemUuYWRkU2luZ3VsYXJSdWxlKHdvcmQsICckMCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYW4gaXJyZWd1bGFyIHdvcmQgZGVmaW5pdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNpbmdsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGx1cmFsXG4gICAqL1xuICBwbHVyYWxpemUuYWRkSXJyZWd1bGFyUnVsZSA9IGZ1bmN0aW9uIChzaW5nbGUsIHBsdXJhbCkge1xuICAgIHBsdXJhbCA9IHBsdXJhbC50b0xvd2VyQ2FzZSgpO1xuICAgIHNpbmdsZSA9IHNpbmdsZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaXJyZWd1bGFyU2luZ2xlc1tzaW5nbGVdID0gcGx1cmFsO1xuICAgIGlycmVndWxhclBsdXJhbHNbcGx1cmFsXSA9IHNpbmdsZTtcbiAgfTtcblxuICAvKipcbiAgICogSXJyZWd1bGFyIHJ1bGVzLlxuICAgKi9cbiAgW1xuICAgIC8vIFByb25vdW5zLlxuICAgIFsnSScsICd3ZSddLFxuICAgIFsnbWUnLCAndXMnXSxcbiAgICBbJ2hlJywgJ3RoZXknXSxcbiAgICBbJ3NoZScsICd0aGV5J10sXG4gICAgWyd0aGVtJywgJ3RoZW0nXSxcbiAgICBbJ215c2VsZicsICdvdXJzZWx2ZXMnXSxcbiAgICBbJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnXSxcbiAgICBbJ2l0c2VsZicsICd0aGVtc2VsdmVzJ10sXG4gICAgWydoZXJzZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgICBbJ2hpbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICAgIFsndGhlbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICAgIFsnaXMnLCAnYXJlJ10sXG4gICAgWyd3YXMnLCAnd2VyZSddLFxuICAgIFsnaGFzJywgJ2hhdmUnXSxcbiAgICBbJ3RoaXMnLCAndGhlc2UnXSxcbiAgICBbJ3RoYXQnLCAndGhvc2UnXSxcbiAgICAvLyBXb3JkcyBlbmRpbmcgaW4gd2l0aCBhIGNvbnNvbmFudCBhbmQgYG9gLlxuICAgIFsnZWNobycsICdlY2hvZXMnXSxcbiAgICBbJ2RpbmdvJywgJ2RpbmdvZXMnXSxcbiAgICBbJ3ZvbGNhbm8nLCAndm9sY2Fub2VzJ10sXG4gICAgWyd0b3JuYWRvJywgJ3Rvcm5hZG9lcyddLFxuICAgIFsndG9ycGVkbycsICd0b3JwZWRvZXMnXSxcbiAgICAvLyBFbmRzIHdpdGggYHVzYC5cbiAgICBbJ2dlbnVzJywgJ2dlbmVyYSddLFxuICAgIFsndmlzY3VzJywgJ3Zpc2NlcmEnXSxcbiAgICAvLyBFbmRzIHdpdGggYG1hYC5cbiAgICBbJ3N0aWdtYScsICdzdGlnbWF0YSddLFxuICAgIFsnc3RvbWEnLCAnc3RvbWF0YSddLFxuICAgIFsnZG9nbWEnLCAnZG9nbWF0YSddLFxuICAgIFsnbGVtbWEnLCAnbGVtbWF0YSddLFxuICAgIFsnc2NoZW1hJywgJ3NjaGVtYXRhJ10sXG4gICAgWydhbmF0aGVtYScsICdhbmF0aGVtYXRhJ10sXG4gICAgLy8gT3RoZXIgaXJyZWd1bGFyIHJ1bGVzLlxuICAgIFsnb3gnLCAnb3hlbiddLFxuICAgIFsnYXhlJywgJ2F4ZXMnXSxcbiAgICBbJ2RpZScsICdkaWNlJ10sXG4gICAgWyd5ZXMnLCAneWVzZXMnXSxcbiAgICBbJ2Zvb3QnLCAnZmVldCddLFxuICAgIFsnZWF2ZScsICdlYXZlcyddLFxuICAgIFsnZ29vc2UnLCAnZ2Vlc2UnXSxcbiAgICBbJ3Rvb3RoJywgJ3RlZXRoJ10sXG4gICAgWydxdWl6JywgJ3F1aXp6ZXMnXSxcbiAgICBbJ2h1bWFuJywgJ2h1bWFucyddLFxuICAgIFsncHJvb2YnLCAncHJvb2ZzJ10sXG4gICAgWydjYXJ2ZScsICdjYXJ2ZXMnXSxcbiAgICBbJ3ZhbHZlJywgJ3ZhbHZlcyddLFxuICAgIFsnbG9vZXknLCAnbG9vaWVzJ10sXG4gICAgWyd0aGllZicsICd0aGlldmVzJ10sXG4gICAgWydncm9vdmUnLCAnZ3Jvb3ZlcyddLFxuICAgIFsncGlja2F4ZScsICdwaWNrYXhlcyddLFxuICAgIFsncGFzc2VyYnknLCAncGFzc2Vyc2J5J11cbiAgXS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgcmV0dXJuIHBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xuICB9KTtcblxuICAvKipcbiAgICogUGx1cmFsaXphdGlvbiBydWxlcy5cbiAgICovXG4gIFtcbiAgICBbL3M/JC9pLCAncyddLFxuICAgIFsvW15cXHUwMDAwLVxcdTAwN0ZdJC9pLCAnJDAnXSxcbiAgICBbLyhbXmFlaW91XWVzZSkkL2ksICckMSddLFxuICAgIFsvKGF4fHRlc3QpaXMkL2ksICckMWVzJ10sXG4gICAgWy8oYWxpYXN8W15hb3VddXN8dFtsbV1hc3xnYXN8cmlzKSQvaSwgJyQxZXMnXSxcbiAgICBbLyhlW21uXXUpcz8kL2ksICckMXMnXSxcbiAgICBbLyhbXmxdaWFzfFthZWlvdV1sYXN8W2VqenJdYXN8W2l1XWFtKSQvaSwgJyQxJ10sXG4gICAgWy8oYWx1bW58c3lsbGFifHZpcnxyYWRpfG51Y2xlfGZ1bmd8Y2FjdHxzdGltdWx8dGVybWlufGJhY2lsbHxmb2N8dXRlcnxsb2N8c3RyYXQpKD86dXN8aSkkL2ksICckMWknXSxcbiAgICBbLyhhbHVtbnxhbGd8dmVydGVicikoPzphfGFlKSQvaSwgJyQxYWUnXSxcbiAgICBbLyhzZXJhcGh8Y2hlcnViKSg/OmltKT8kL2ksICckMWltJ10sXG4gICAgWy8oaGVyfGF0fGdyKW8kL2ksICckMW9lcyddLFxuICAgIFsvKGFnZW5kfGFkZGVuZHxtaWxsZW5uaXxkYXR8ZXh0cmVtfGJhY3Rlcml8ZGVzaWRlcmF0fHN0cmF0fGNhbmRlbGFicnxlcnJhdHxvdnxzeW1wb3NpfGN1cnJpY3VsfGF1dG9tYXR8cXVvcikoPzphfHVtKSQvaSwgJyQxYSddLFxuICAgIFsvKGFwaGVsaXxoeXBlcmJhdHxwZXJpaGVsaXxhc3luZGV0fG5vdW1lbnxwaGVub21lbnxjcml0ZXJpfG9yZ2FufHByb2xlZ29tZW58aGVkcnxhdXRvbWF0KSg/OmF8b24pJC9pLCAnJDFhJ10sXG4gICAgWy9zaXMkL2ksICdzZXMnXSxcbiAgICBbLyg/Oihrbml8d2l8bGkpZmV8KGFyfGx8ZWF8ZW98b2F8aG9vKWYpJC9pLCAnJDEkMnZlcyddLFxuICAgIFsvKFteYWVpb3V5XXxxdSl5JC9pLCAnJDFpZXMnXSxcbiAgICBbLyhbXmNoXVtpZW9dW2xuXSlleSQvaSwgJyQxaWVzJ10sXG4gICAgWy8oeHxjaHxzc3xzaHx6eikkL2ksICckMWVzJ10sXG4gICAgWy8obWF0cnxjb2R8bXVyfHNpbHx2ZXJ0fGluZHxhcHBlbmQpKD86aXh8ZXgpJC9pLCAnJDFpY2VzJ10sXG4gICAgWy9cXGIoKD86dGl0KT9tfGwpKD86aWNlfG91c2UpJC9pLCAnJDFpY2UnXSxcbiAgICBbLyhwZSkoPzpyc29ufG9wbGUpJC9pLCAnJDFvcGxlJ10sXG4gICAgWy8oY2hpbGQpKD86cmVuKT8kL2ksICckMXJlbiddLFxuICAgIFsvZWF1eCQvaSwgJyQwJ10sXG4gICAgWy9tW2FlXW4kL2ksICdtZW4nXSxcbiAgICBbJ3Rob3UnLCAneW91J11cbiAgXS5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgcmV0dXJuIHBsdXJhbGl6ZS5hZGRQbHVyYWxSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xuICB9KTtcblxuICAvKipcbiAgICogU2luZ3VsYXJpemF0aW9uIHJ1bGVzLlxuICAgKi9cbiAgW1xuICAgIFsvcyQvaSwgJyddLFxuICAgIFsvKHNzKSQvaSwgJyQxJ10sXG4gICAgWy8od2l8a25pfCg/OmFmdGVyfGhhbGZ8aGlnaHxsb3d8bWlkfG5vbnxuaWdodHxbXlxcd118XilsaSl2ZXMkL2ksICckMWZlJ10sXG4gICAgWy8oYXJ8KD86d298W2FlXSlsfFtlb11bYW9dKXZlcyQvaSwgJyQxZiddLFxuICAgIFsvaWVzJC9pLCAneSddLFxuICAgIFsvXFxiKFtwbF18em9tYnwoPzpuZWNrfGNyb3NzKT90fGNvbGx8ZmFlcnxmb29kfGdlbnxnb29ufGdyb3VwfGxhc3N8dGFsa3xnb2FsfGN1dClpZXMkL2ksICckMWllJ10sXG4gICAgWy9cXGIobW9ufHNtaWwpaWVzJC9pLCAnJDFleSddLFxuICAgIFsvXFxiKCg/OnRpdCk/bXxsKWljZSQvaSwgJyQxb3VzZSddLFxuICAgIFsvKHNlcmFwaHxjaGVydWIpaW0kL2ksICckMSddLFxuICAgIFsvKHh8Y2h8c3N8c2h8enp8dHRvfGdvfGNob3xhbGlhc3xbXmFvdV11c3x0W2xtXWFzfGdhc3woPzpoZXJ8YXR8Z3Ipb3xbYWVpb3VdcmlzKSg/OmVzKT8kL2ksICckMSddLFxuICAgIFsvKGFuYWx5fGRpYWdub3xwYXJlbnRoZXxwcm9nbm98c3lub3B8dGhlfGVtcGhhfGNyaXxuZSkoPzpzaXN8c2VzKSQvaSwgJyQxc2lzJ10sXG4gICAgWy8obW92aWV8dHdlbHZlfGFidXNlfGVbbW5ddSlzJC9pLCAnJDEnXSxcbiAgICBbLyh0ZXN0KSg/OmlzfGVzKSQvaSwgJyQxaXMnXSxcbiAgICBbLyhhbHVtbnxzeWxsYWJ8dmlyfHJhZGl8bnVjbGV8ZnVuZ3xjYWN0fHN0aW11bHx0ZXJtaW58YmFjaWxsfGZvY3x1dGVyfGxvY3xzdHJhdCkoPzp1c3xpKSQvaSwgJyQxdXMnXSxcbiAgICBbLyhhZ2VuZHxhZGRlbmR8bWlsbGVubml8ZGF0fGV4dHJlbXxiYWN0ZXJpfGRlc2lkZXJhdHxzdHJhdHxjYW5kZWxhYnJ8ZXJyYXR8b3Z8c3ltcG9zaXxjdXJyaWN1bHxxdW9yKWEkL2ksICckMXVtJ10sXG4gICAgWy8oYXBoZWxpfGh5cGVyYmF0fHBlcmloZWxpfGFzeW5kZXR8bm91bWVufHBoZW5vbWVufGNyaXRlcml8b3JnYW58cHJvbGVnb21lbnxoZWRyfGF1dG9tYXQpYSQvaSwgJyQxb24nXSxcbiAgICBbLyhhbHVtbnxhbGd8dmVydGVicilhZSQvaSwgJyQxYSddLFxuICAgIFsvKGNvZHxtdXJ8c2lsfHZlcnR8aW5kKWljZXMkL2ksICckMWV4J10sXG4gICAgWy8obWF0cnxhcHBlbmQpaWNlcyQvaSwgJyQxaXgnXSxcbiAgICBbLyhwZSkocnNvbnxvcGxlKSQvaSwgJyQxcnNvbiddLFxuICAgIFsvKGNoaWxkKXJlbiQvaSwgJyQxJ10sXG4gICAgWy8oZWF1KXg/JC9pLCAnJDEnXSxcbiAgICBbL21lbiQvaSwgJ21hbiddXG4gIF0uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIHJldHVybiBwbHVyYWxpemUuYWRkU2luZ3VsYXJSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xuICB9KTtcblxuICAvKipcbiAgICogVW5jb3VudGFibGUgcnVsZXMuXG4gICAqL1xuICBbXG4gICAgLy8gU2luZ3VsYXIgd29yZHMgd2l0aCBubyBwbHVyYWxzLlxuICAgICdhZHVsdGhvb2QnLFxuICAgICdhZHZpY2UnLFxuICAgICdhZ2VuZGEnLFxuICAgICdhaWQnLFxuICAgICdhaXJjcmFmdCcsXG4gICAgJ2FsY29ob2wnLFxuICAgICdhbW1vJyxcbiAgICAnYW5hbHl0aWNzJyxcbiAgICAnYW5pbWUnLFxuICAgICdhdGhsZXRpY3MnLFxuICAgICdhdWRpbycsXG4gICAgJ2Jpc29uJyxcbiAgICAnYmxvb2QnLFxuICAgICdicmVhbScsXG4gICAgJ2J1ZmZhbG8nLFxuICAgICdidXR0ZXInLFxuICAgICdjYXJwJyxcbiAgICAnY2FzaCcsXG4gICAgJ2NoYXNzaXMnLFxuICAgICdjaGVzcycsXG4gICAgJ2Nsb3RoaW5nJyxcbiAgICAnY29kJyxcbiAgICAnY29tbWVyY2UnLFxuICAgICdjb29wZXJhdGlvbicsXG4gICAgJ2NvcnBzJyxcbiAgICAnZGVicmlzJyxcbiAgICAnZGlhYmV0ZXMnLFxuICAgICdkaWdlc3Rpb24nLFxuICAgICdlbGsnLFxuICAgICdlbmVyZ3knLFxuICAgICdlcXVpcG1lbnQnLFxuICAgICdleGNyZXRpb24nLFxuICAgICdleHBlcnRpc2UnLFxuICAgICdmaXJtd2FyZScsXG4gICAgJ2Zsb3VuZGVyJyxcbiAgICAnZnVuJyxcbiAgICAnZ2FsbG93cycsXG4gICAgJ2dhcmJhZ2UnLFxuICAgICdncmFmZml0aScsXG4gICAgJ2hhcmR3YXJlJyxcbiAgICAnaGVhZHF1YXJ0ZXJzJyxcbiAgICAnaGVhbHRoJyxcbiAgICAnaGVycGVzJyxcbiAgICAnaGlnaGppbmtzJyxcbiAgICAnaG9tZXdvcmsnLFxuICAgICdob3VzZXdvcmsnLFxuICAgICdpbmZvcm1hdGlvbicsXG4gICAgJ2plYW5zJyxcbiAgICAnanVzdGljZScsXG4gICAgJ2t1ZG9zJyxcbiAgICAnbGFib3VyJyxcbiAgICAnbGl0ZXJhdHVyZScsXG4gICAgJ21hY2hpbmVyeScsXG4gICAgJ21hY2tlcmVsJyxcbiAgICAnbWFpbCcsXG4gICAgJ21lZGlhJyxcbiAgICAnbWV3cycsXG4gICAgJ21vb3NlJyxcbiAgICAnbXVzaWMnLFxuICAgICdtdWQnLFxuICAgICdtYW5nYScsXG4gICAgJ25ld3MnLFxuICAgICdvbmx5JyxcbiAgICAncGVyc29ubmVsJyxcbiAgICAncGlrZScsXG4gICAgJ3BsYW5rdG9uJyxcbiAgICAncGxpZXJzJyxcbiAgICAncG9saWNlJyxcbiAgICAncG9sbHV0aW9uJyxcbiAgICAncHJlbWlzZXMnLFxuICAgICdyYWluJyxcbiAgICAncmVzZWFyY2gnLFxuICAgICdyaWNlJyxcbiAgICAnc2FsbW9uJyxcbiAgICAnc2Npc3NvcnMnLFxuICAgICdzZXJpZXMnLFxuICAgICdzZXdhZ2UnLFxuICAgICdzaGFtYmxlcycsXG4gICAgJ3NocmltcCcsXG4gICAgJ3NvZnR3YXJlJyxcbiAgICAnc3BlY2llcycsXG4gICAgJ3N0YWZmJyxcbiAgICAnc3dpbmUnLFxuICAgICd0ZW5uaXMnLFxuICAgICd0cmFmZmljJyxcbiAgICAndHJhbnNwb3J0YXRpb24nLFxuICAgICd0cm91dCcsXG4gICAgJ3R1bmEnLFxuICAgICd3ZWFsdGgnLFxuICAgICd3ZWxmYXJlJyxcbiAgICAnd2hpdGluZycsXG4gICAgJ3dpbGRlYmVlc3QnLFxuICAgICd3aWxkbGlmZScsXG4gICAgJ3lvdScsXG4gICAgL3Bva1tlXHUwMEU5XW1vbiQvaSxcbiAgICAvLyBSZWdleGVzLlxuICAgIC9bXmFlaW91XWVzZSQvaSwgLy8gXCJjaGluZXNlXCIsIFwiamFwYW5lc2VcIlxuICAgIC9kZWVyJC9pLCAvLyBcImRlZXJcIiwgXCJyZWluZGVlclwiXG4gICAgL2Zpc2gkL2ksIC8vIFwiZmlzaFwiLCBcImJsb3dmaXNoXCIsIFwiYW5nZWxmaXNoXCJcbiAgICAvbWVhc2xlcyQvaSxcbiAgICAvb1tpdV1zJC9pLCAvLyBcImNhcm5pdm9yb3VzXCJcbiAgICAvcG94JC9pLCAvLyBcImNoaWNrcG94XCIsIFwic21hbGxwb3hcIlxuICAgIC9zaGVlcCQvaVxuICBdLmZvckVhY2gocGx1cmFsaXplLmFkZFVuY291bnRhYmxlUnVsZSk7XG5cbiAgcmV0dXJuIHBsdXJhbGl6ZTtcbn0pO1xuIiwgImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIE1JVCBMaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVuL2lzLXByb21pc2UvYmxvYi9tYXN0ZXIvTElDRU5TRVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAhIXZhbHVlICYmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBhZGRfbG9jYXRpb24oZWxlbWVudCwgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyKSB7XG4gICAgZWxlbWVudC5fX3N2ZWx0ZV9tZXRhID0ge1xuICAgICAgICBsb2M6IHsgZmlsZSwgbGluZSwgY29sdW1uLCBjaGFyIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gICAgcmV0dXJuIGZuKCk7XG59XG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICAgIGZucy5mb3JFYWNoKHJ1bik7XG59XG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGIgfHwgKChhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JykgfHwgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicpO1xufVxubGV0IHNyY191cmxfZXF1YWxfYW5jaG9yO1xuZnVuY3Rpb24gc3JjX3VybF9lcXVhbChlbGVtZW50X3NyYywgdXJsKSB7XG4gICAgaWYgKCFzcmNfdXJsX2VxdWFsX2FuY2hvcikge1xuICAgICAgICBzcmNfdXJsX2VxdWFsX2FuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB9XG4gICAgc3JjX3VybF9lcXVhbF9hbmNob3IuaHJlZiA9IHVybDtcbiAgICByZXR1cm4gZWxlbWVudF9zcmMgPT09IHNyY191cmxfZXF1YWxfYW5jaG9yLmhyZWY7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9iYXNlKHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBzbG90X2NoYW5nZXMsIGdldF9zbG90X2NvbnRleHRfZm4pIHtcbiAgICBpZiAoc2xvdF9jaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY29udGV4dCA9IGdldF9zbG90X2NvbnRleHQoc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGdldF9zbG90X2NvbnRleHRfZm4pO1xuICAgICAgICBzbG90LnAoc2xvdF9jb250ZXh0LCBzbG90X2NoYW5nZXMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgdXBkYXRlX3Nsb3RfYmFzZShzbG90LCBzbG90X2RlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbn1cbmZ1bmN0aW9uIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSgkJHNjb3BlKSB7XG4gICAgaWYgKCQkc2NvcGUuY3R4Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgIGNvbnN0IGRpcnR5ID0gW107XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9ICQkc2NvcGUuY3R4Lmxlbmd0aCAvIDMyO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkaXJ0eVtpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gZXhjbHVkZV9pbnRlcm5hbF9wcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBwcm9wcylcbiAgICAgICAgaWYgKGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3VsdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb21wdXRlX3Jlc3RfcHJvcHMocHJvcHMsIGtleXMpIHtcbiAgICBjb25zdCByZXN0ID0ge307XG4gICAga2V5cyA9IG5ldyBTZXQoa2V5cyk7XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoIWtleXMuaGFzKGspICYmIGtbMF0gIT09ICckJylcbiAgICAgICAgICAgIHJlc3Rba10gPSBwcm9wc1trXTtcbiAgICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfc2xvdHMoc2xvdHMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzbG90cykge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgbGV0IHJhbiA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBpZiAocmFuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByYW4gPSB0cnVlO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuICAgIH07XG59XG5mdW5jdGlvbiBudWxsX3RvX2VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X3N0b3JlX3ZhbHVlKHN0b3JlLCByZXQsIHZhbHVlKSB7XG4gICAgc3RvcmUuc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3QgaGFzX3Byb3AgPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbmZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgIHJldHVybiBhY3Rpb25fcmVzdWx0ICYmIGlzX2Z1bmN0aW9uKGFjdGlvbl9yZXN1bHQuZGVzdHJveSkgPyBhY3Rpb25fcmVzdWx0LmRlc3Ryb3kgOiBub29wO1xufVxuXG5jb25zdCBpc19jbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbmxldCBub3cgPSBpc19jbGllbnRcbiAgICA/ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKVxuICAgIDogKCkgPT4gRGF0ZS5ub3coKTtcbmxldCByYWYgPSBpc19jbGllbnQgPyBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDogbm9vcDtcbi8vIHVzZWQgaW50ZXJuYWxseSBmb3IgdGVzdGluZ1xuZnVuY3Rpb24gc2V0X25vdyhmbikge1xuICAgIG5vdyA9IGZuO1xufVxuZnVuY3Rpb24gc2V0X3JhZihmbikge1xuICAgIHJhZiA9IGZuO1xufVxuXG5jb25zdCB0YXNrcyA9IG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAoIXRhc2suYyhub3cpKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB0YXNrLmYoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0YXNrcy5zaXplICE9PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbn1cbi8qKlxuICogRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSFcbiAqL1xuZnVuY3Rpb24gY2xlYXJfbG9vcHMoKSB7XG4gICAgdGFza3MuY2xlYXIoKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB0YXNrIHRoYXQgcnVucyBvbiBlYWNoIHJhZiBmcmFtZVxuICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAqL1xuZnVuY3Rpb24gbG9vcChjYWxsYmFjaykge1xuICAgIGxldCB0YXNrO1xuICAgIGlmICh0YXNrcy5zaXplID09PSAwKVxuICAgICAgICByYWYocnVuX3Rhc2tzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiBuZXcgUHJvbWlzZShmdWxmaWxsID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmFkZCh0YXNrID0geyBjOiBjYWxsYmFjaywgZjogZnVsZmlsbCB9KTtcbiAgICAgICAgfSksXG4gICAgICAgIGFib3J0KCkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8gVHJhY2sgd2hpY2ggbm9kZXMgYXJlIGNsYWltZWQgZHVyaW5nIGh5ZHJhdGlvbi4gVW5jbGFpbWVkIG5vZGVzIGNhbiB0aGVuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4vLyBhdCB0aGUgZW5kIG9mIGh5ZHJhdGlvbiB3aXRob3V0IHRvdWNoaW5nIHRoZSByZW1haW5pbmcgbm9kZXMuXG5sZXQgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuZF9oeWRyYXRpbmcoKSB7XG4gICAgaXNfaHlkcmF0aW5nID0gZmFsc2U7XG59XG5mdW5jdGlvbiB1cHBlcl9ib3VuZChsb3csIGhpZ2gsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBSZXR1cm4gZmlyc3QgaW5kZXggb2YgdmFsdWUgbGFyZ2VyIHRoYW4gaW5wdXQgdmFsdWUgaW4gdGhlIHJhbmdlIFtsb3csIGhpZ2gpXG4gICAgd2hpbGUgKGxvdyA8IGhpZ2gpIHtcbiAgICAgICAgY29uc3QgbWlkID0gbG93ICsgKChoaWdoIC0gbG93KSA+PiAxKTtcbiAgICAgICAgaWYgKGtleShtaWQpIDw9IHZhbHVlKSB7XG4gICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlnaCA9IG1pZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG93O1xufVxuZnVuY3Rpb24gaW5pdF9oeWRyYXRlKHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQuaHlkcmF0ZV9pbml0KVxuICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0Lmh5ZHJhdGVfaW5pdCA9IHRydWU7XG4gICAgLy8gV2Uga25vdyB0aGF0IGFsbCBjaGlsZHJlbiBoYXZlIGNsYWltX29yZGVyIHZhbHVlcyBzaW5jZSB0aGUgdW5jbGFpbWVkIGhhdmUgYmVlbiBkZXRhY2hlZCBpZiB0YXJnZXQgaXMgbm90IDxoZWFkPlxuICAgIGxldCBjaGlsZHJlbiA9IHRhcmdldC5jaGlsZE5vZGVzO1xuICAgIC8vIElmIHRhcmdldCBpcyA8aGVhZD4sIHRoZXJlIG1heSBiZSBjaGlsZHJlbiB3aXRob3V0IGNsYWltX29yZGVyXG4gICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PT0gJ0hFQUQnKSB7XG4gICAgICAgIGNvbnN0IG15Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG15Q2hpbGRyZW4ucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGlsZHJlbiA9IG15Q2hpbGRyZW47XG4gICAgfVxuICAgIC8qXG4gICAgKiBSZW9yZGVyIGNsYWltZWQgY2hpbGRyZW4gb3B0aW1hbGx5LlxuICAgICogV2UgY2FuIHJlb3JkZXIgY2xhaW1lZCBjaGlsZHJlbiBvcHRpbWFsbHkgYnkgZmluZGluZyB0aGUgbG9uZ2VzdCBzdWJzZXF1ZW5jZSBvZlxuICAgICogbm9kZXMgdGhhdCBhcmUgYWxyZWFkeSBjbGFpbWVkIGluIG9yZGVyIGFuZCBvbmx5IG1vdmluZyB0aGUgcmVzdC4gVGhlIGxvbmdlc3RcbiAgICAqIHN1YnNlcXVlbmNlIG9mIG5vZGVzIHRoYXQgYXJlIGNsYWltZWQgaW4gb3JkZXIgY2FuIGJlIGZvdW5kIGJ5XG4gICAgKiBjb21wdXRpbmcgdGhlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiAuY2xhaW1fb3JkZXIgdmFsdWVzLlxuICAgICpcbiAgICAqIFRoaXMgYWxnb3JpdGhtIGlzIG9wdGltYWwgaW4gZ2VuZXJhdGluZyB0aGUgbGVhc3QgYW1vdW50IG9mIHJlb3JkZXIgb3BlcmF0aW9uc1xuICAgICogcG9zc2libGUuXG4gICAgKlxuICAgICogUHJvb2Y6XG4gICAgKiBXZSBrbm93IHRoYXQsIGdpdmVuIGEgc2V0IG9mIHJlb3JkZXJpbmcgb3BlcmF0aW9ucywgdGhlIG5vZGVzIHRoYXQgZG8gbm90IG1vdmVcbiAgICAqIGFsd2F5cyBmb3JtIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2UsIHNpbmNlIHRoZXkgZG8gbm90IG1vdmUgYW1vbmcgZWFjaCBvdGhlclxuICAgICogbWVhbmluZyB0aGF0IHRoZXkgbXVzdCBiZSBhbHJlYWR5IG9yZGVyZWQgYW1vbmcgZWFjaCBvdGhlci4gVGh1cywgdGhlIG1heGltYWxcbiAgICAqIHNldCBvZiBub2RlcyB0aGF0IGRvIG5vdCBtb3ZlIGZvcm0gYSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2UuXG4gICAgKi9cbiAgICAvLyBDb21wdXRlIGxvbmdlc3QgaW5jcmVhc2luZyBzdWJzZXF1ZW5jZVxuICAgIC8vIG06IHN1YnNlcXVlbmNlIGxlbmd0aCBqID0+IGluZGV4IGsgb2Ygc21hbGxlc3QgdmFsdWUgdGhhdCBlbmRzIGFuIGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2YgbGVuZ3RoIGpcbiAgICBjb25zdCBtID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgLy8gUHJlZGVjZXNzb3IgaW5kaWNlcyArIDFcbiAgICBjb25zdCBwID0gbmV3IEludDMyQXJyYXkoY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICBtWzBdID0gLTE7XG4gICAgbGV0IGxvbmdlc3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGNoaWxkcmVuW2ldLmNsYWltX29yZGVyO1xuICAgICAgICAvLyBGaW5kIHRoZSBsYXJnZXN0IHN1YnNlcXVlbmNlIGxlbmd0aCBzdWNoIHRoYXQgaXQgZW5kcyBpbiBhIHZhbHVlIGxlc3MgdGhhbiBvdXIgY3VycmVudCB2YWx1ZVxuICAgICAgICAvLyB1cHBlcl9ib3VuZCByZXR1cm5zIGZpcnN0IGdyZWF0ZXIgdmFsdWUsIHNvIHdlIHN1YnRyYWN0IG9uZVxuICAgICAgICAvLyB3aXRoIGZhc3QgcGF0aCBmb3Igd2hlbiB3ZSBhcmUgb24gdGhlIGN1cnJlbnQgbG9uZ2VzdCBzdWJzZXF1ZW5jZVxuICAgICAgICBjb25zdCBzZXFMZW4gPSAoKGxvbmdlc3QgPiAwICYmIGNoaWxkcmVuW21bbG9uZ2VzdF1dLmNsYWltX29yZGVyIDw9IGN1cnJlbnQpID8gbG9uZ2VzdCArIDEgOiB1cHBlcl9ib3VuZCgxLCBsb25nZXN0LCBpZHggPT4gY2hpbGRyZW5bbVtpZHhdXS5jbGFpbV9vcmRlciwgY3VycmVudCkpIC0gMTtcbiAgICAgICAgcFtpXSA9IG1bc2VxTGVuXSArIDE7XG4gICAgICAgIGNvbnN0IG5ld0xlbiA9IHNlcUxlbiArIDE7XG4gICAgICAgIC8vIFdlIGNhbiBndWFyYW50ZWUgdGhhdCBjdXJyZW50IGlzIHRoZSBzbWFsbGVzdCB2YWx1ZS4gT3RoZXJ3aXNlLCB3ZSB3b3VsZCBoYXZlIGdlbmVyYXRlZCBhIGxvbmdlciBzZXF1ZW5jZS5cbiAgICAgICAgbVtuZXdMZW5dID0gaTtcbiAgICAgICAgbG9uZ2VzdCA9IE1hdGgubWF4KG5ld0xlbiwgbG9uZ2VzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBsb25nZXN0IGluY3JlYXNpbmcgc3Vic2VxdWVuY2Ugb2Ygbm9kZXMgKGluaXRpYWxseSByZXZlcnNlZClcbiAgICBjb25zdCBsaXMgPSBbXTtcbiAgICAvLyBUaGUgcmVzdCBvZiB0aGUgbm9kZXMsIG5vZGVzIHRoYXQgd2lsbCBiZSBtb3ZlZFxuICAgIGNvbnN0IHRvTW92ZSA9IFtdO1xuICAgIGxldCBsYXN0ID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBmb3IgKGxldCBjdXIgPSBtW2xvbmdlc3RdICsgMTsgY3VyICE9IDA7IGN1ciA9IHBbY3VyIC0gMV0pIHtcbiAgICAgICAgbGlzLnB1c2goY2hpbGRyZW5bY3VyIC0gMV0pO1xuICAgICAgICBmb3IgKDsgbGFzdCA+PSBjdXI7IGxhc3QtLSkge1xuICAgICAgICAgICAgdG9Nb3ZlLnB1c2goY2hpbGRyZW5bbGFzdF0pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3QtLTtcbiAgICB9XG4gICAgZm9yICg7IGxhc3QgPj0gMDsgbGFzdC0tKSB7XG4gICAgICAgIHRvTW92ZS5wdXNoKGNoaWxkcmVuW2xhc3RdKTtcbiAgICB9XG4gICAgbGlzLnJldmVyc2UoKTtcbiAgICAvLyBXZSBzb3J0IHRoZSBub2RlcyBiZWluZyBtb3ZlZCB0byBndWFyYW50ZWUgdGhhdCB0aGVpciBpbnNlcnRpb24gb3JkZXIgbWF0Y2hlcyB0aGUgY2xhaW0gb3JkZXJcbiAgICB0b01vdmUuc29ydCgoYSwgYikgPT4gYS5jbGFpbV9vcmRlciAtIGIuY2xhaW1fb3JkZXIpO1xuICAgIC8vIEZpbmFsbHksIHdlIG1vdmUgdGhlIG5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgdG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChqIDwgbGlzLmxlbmd0aCAmJiB0b01vdmVbaV0uY2xhaW1fb3JkZXIgPj0gbGlzW2pdLmNsYWltX29yZGVyKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gaiA8IGxpcy5sZW5ndGggPyBsaXNbal0gOiBudWxsO1xuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRvTW92ZVtpXSwgYW5jaG9yKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gYXBwZW5kX3N0eWxlcyh0YXJnZXQsIHN0eWxlX3NoZWV0X2lkLCBzdHlsZXMpIHtcbiAgICBjb25zdCBhcHBlbmRfc3R5bGVzX3RvID0gZ2V0X3Jvb3RfZm9yX3N0eWxlKHRhcmdldCk7XG4gICAgaWYgKCFhcHBlbmRfc3R5bGVzX3RvLmdldEVsZW1lbnRCeUlkKHN0eWxlX3NoZWV0X2lkKSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLmlkID0gc3R5bGVfc2hlZXRfaWQ7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gc3R5bGVzO1xuICAgICAgICBhcHBlbmRfc3R5bGVzaGVldChhcHBlbmRfc3R5bGVzX3RvLCBzdHlsZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpXG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICBjb25zdCByb290ID0gbm9kZS5nZXRSb290Tm9kZSA/IG5vZGUuZ2V0Um9vdE5vZGUoKSA6IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBpZiAocm9vdCAmJiByb290Lmhvc3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSB7XG4gICAgY29uc3Qgc3R5bGVfZWxlbWVudCA9IGVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgYXBwZW5kX3N0eWxlc2hlZXQoZ2V0X3Jvb3RfZm9yX3N0eWxlKG5vZGUpLCBzdHlsZV9lbGVtZW50KTtcbiAgICByZXR1cm4gc3R5bGVfZWxlbWVudC5zaGVldDtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9zdHlsZXNoZWV0KG5vZGUsIHN0eWxlKSB7XG4gICAgYXBwZW5kKG5vZGUuaGVhZCB8fCBub2RlLCBzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlLnNoZWV0O1xufVxuZnVuY3Rpb24gYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpIHtcbiAgICBpZiAoaXNfaHlkcmF0aW5nKSB7XG4gICAgICAgIGluaXRfaHlkcmF0ZSh0YXJnZXQpO1xuICAgICAgICBpZiAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID09PSB1bmRlZmluZWQpIHx8ICgodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgIT09IG51bGwpICYmICh0YXJnZXQuYWN0dWFsX2VuZF9jaGlsZC5wYXJlbnROb2RlICE9PSB0YXJnZXQpKSkge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSB0YXJnZXQuZmlyc3RDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIG5vZGVzIG9mIHVuZGVmaW5lZCBvcmRlcmluZ1xuICAgICAgICB3aGlsZSAoKHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkICE9PSBudWxsKSAmJiAodGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQuY2xhaW1fb3JkZXIgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkID0gdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUgIT09IHRhcmdldC5hY3R1YWxfZW5kX2NoaWxkKSB7XG4gICAgICAgICAgICAvLyBXZSBvbmx5IGluc2VydCBpZiB0aGUgb3JkZXJpbmcgb2YgdGhpcyBub2RlIHNob3VsZCBiZSBtb2RpZmllZCBvciB0aGUgcGFyZW50IG5vZGUgaXMgbm90IHRhcmdldFxuICAgICAgICAgICAgaWYgKG5vZGUuY2xhaW1fb3JkZXIgIT09IHVuZGVmaW5lZCB8fCBub2RlLnBhcmVudE5vZGUgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0LmFjdHVhbF9lbmRfY2hpbGQgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGlmIChpc19oeWRyYXRpbmcgJiYgIWFuY2hvcikge1xuICAgICAgICBhcHBlbmRfaHlkcmF0aW9uKHRhcmdldCwgbm9kZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gdGFyZ2V0IHx8IG5vZGUubmV4dFNpYmxpbmcgIT0gYW5jaG9yKSB7XG4gICAgICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc19wcm9wKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRydXN0ZWQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LmlzVHJ1c3RlZClcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcChub2RlLCBkYXRhX21hcCkge1xuICAgIE9iamVjdC5rZXlzKGRhdGFfbWFwKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwga2V5LCBkYXRhX21hcFtrZXldKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cbmZ1bmN0aW9uIGluaXRfY2xhaW1faW5mbyhub2Rlcykge1xuICAgIGlmIChub2Rlcy5jbGFpbV9pbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm9kZXMuY2xhaW1faW5mbyA9IHsgbGFzdF9pbmRleDogMCwgdG90YWxfY2xhaW1lZDogMCB9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsYWltX25vZGUobm9kZXMsIHByZWRpY2F0ZSwgcHJvY2Vzc05vZGUsIGNyZWF0ZU5vZGUsIGRvbnRVcGRhdGVMYXN0SW5kZXggPSBmYWxzZSkge1xuICAgIC8vIFRyeSB0byBmaW5kIG5vZGVzIGluIGFuIG9yZGVyIHN1Y2ggdGhhdCB3ZSBsZW5ndGhlbiB0aGUgbG9uZ2VzdCBpbmNyZWFzaW5nIHN1YnNlcXVlbmNlXG4gICAgaW5pdF9jbGFpbV9pbmZvKG5vZGVzKTtcbiAgICBjb25zdCByZXN1bHROb2RlID0gKCgpID0+IHtcbiAgICAgICAgLy8gV2UgZmlyc3QgdHJ5IHRvIGZpbmQgYW4gZWxlbWVudCBhZnRlciB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgIGZvciAobGV0IGkgPSBub2Rlcy5jbGFpbV9pbmZvLmxhc3RfaW5kZXg7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gcHJvY2Vzc05vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNbaV0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFkb250VXBkYXRlTGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgdHJ5IHRvIGZpbmQgb25lIGJlZm9yZVxuICAgICAgICAvLyBXZSBpdGVyYXRlIGluIHJldmVyc2Ugc28gdGhhdCB3ZSBkb24ndCBnbyB0b28gZmFyIGJhY2tcbiAgICAgICAgZm9yIChsZXQgaSA9IG5vZGVzLmNsYWltX2luZm8ubGFzdF9pbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSBwcm9jZXNzTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBub2Rlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2Rlc1tpXSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRVcGRhdGVMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVwbGFjZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBzcGxpY2VkIGJlZm9yZSB0aGUgbGFzdF9pbmRleCwgd2UgZGVjcmVhc2UgaXRcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMuY2xhaW1faW5mby5sYXN0X2luZGV4LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGNhbid0IGZpbmQgYW55IG1hdGNoaW5nIG5vZGUsIHdlIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vZGUoKTtcbiAgICB9KSgpO1xuICAgIHJlc3VsdE5vZGUuY2xhaW1fb3JkZXIgPSBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQ7XG4gICAgbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkICs9IDE7XG4gICAgcmV0dXJuIHJlc3VsdE5vZGU7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGNyZWF0ZV9lbGVtZW50KSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVOYW1lID09PSBuYW1lLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlLmZvckVhY2godiA9PiBub2RlLnJlbW92ZUF0dHJpYnV0ZSh2KSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgKCkgPT4gY3JlYXRlX2VsZW1lbnQobmFtZSkpO1xufVxuZnVuY3Rpb24gY2xhaW1fZWxlbWVudChub2RlcywgbmFtZSwgYXR0cmlidXRlcykge1xuICAgIHJldHVybiBjbGFpbV9lbGVtZW50X2Jhc2Uobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gY2xhaW1fc3ZnX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fZWxlbWVudF9iYXNlKG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmdfZWxlbWVudCk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgcmV0dXJuIGNsYWltX25vZGUobm9kZXMsIChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSAzLCAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhU3RyID0gJycgKyBkYXRhO1xuICAgICAgICBpZiAobm9kZS5kYXRhLnN0YXJ0c1dpdGgoZGF0YVN0cikpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGEubGVuZ3RoICE9PSBkYXRhU3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNwbGl0VGV4dChkYXRhU3RyLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBkYXRhU3RyO1xuICAgICAgICB9XG4gICAgfSwgKCkgPT4gdGV4dChkYXRhKSwgdHJ1ZSAvLyBUZXh0IG5vZGVzIHNob3VsZCBub3QgdXBkYXRlIGxhc3QgaW5kZXggc2luY2UgaXQgaXMgbGlrZWx5IG5vdCB3b3J0aCBpdCB0byBlbGltaW5hdGUgYW4gaW5jcmVhc2luZyBzdWJzZXF1ZW5jZSBvZiBhY3R1YWwgZWxlbWVudHNcbiAgICApO1xufVxuZnVuY3Rpb24gY2xhaW1fc3BhY2Uobm9kZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cbmZ1bmN0aW9uIGZpbmRfY29tbWVudChub2RlcywgdGV4dCwgc3RhcnQpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIGNvbW1lbnQgbm9kZSAqLyAmJiBub2RlLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIGNsYWltX2h0bWxfdGFnKG5vZGVzLCBpc19zdmcpIHtcbiAgICAvLyBmaW5kIGh0bWwgb3BlbmluZyB0YWdcbiAgICBjb25zdCBzdGFydF9pbmRleCA9IGZpbmRfY29tbWVudChub2RlcywgJ0hUTUxfVEFHX1NUQVJUJywgMCk7XG4gICAgY29uc3QgZW5kX2luZGV4ID0gZmluZF9jb21tZW50KG5vZGVzLCAnSFRNTF9UQUdfRU5EJywgc3RhcnRfaW5kZXgpO1xuICAgIGlmIChzdGFydF9pbmRleCA9PT0gZW5kX2luZGV4KSB7XG4gICAgICAgIHJldHVybiBuZXcgSHRtbFRhZ0h5ZHJhdGlvbih1bmRlZmluZWQsIGlzX3N2Zyk7XG4gICAgfVxuICAgIGluaXRfY2xhaW1faW5mbyhub2Rlcyk7XG4gICAgY29uc3QgaHRtbF90YWdfbm9kZXMgPSBub2Rlcy5zcGxpY2Uoc3RhcnRfaW5kZXgsIGVuZF9pbmRleCAtIHN0YXJ0X2luZGV4ICsgMSk7XG4gICAgZGV0YWNoKGh0bWxfdGFnX25vZGVzWzBdKTtcbiAgICBkZXRhY2goaHRtbF90YWdfbm9kZXNbaHRtbF90YWdfbm9kZXMubGVuZ3RoIC0gMV0pO1xuICAgIGNvbnN0IGNsYWltZWRfbm9kZXMgPSBodG1sX3RhZ19ub2Rlcy5zbGljZSgxLCBodG1sX3RhZ19ub2Rlcy5sZW5ndGggLSAxKTtcbiAgICBmb3IgKGNvbnN0IG4gb2YgY2xhaW1lZF9ub2Rlcykge1xuICAgICAgICBuLmNsYWltX29yZGVyID0gbm9kZXMuY2xhaW1faW5mby50b3RhbF9jbGFpbWVkO1xuICAgICAgICBub2Rlcy5jbGFpbV9pbmZvLnRvdGFsX2NsYWltZWQgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBIdG1sVGFnSHlkcmF0aW9uKGNsYWltZWRfbm9kZXMsIGlzX3N2Zyk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC53aG9sZVRleHQgIT09IGRhdGEpXG4gICAgICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdmFsdWUoaW5wdXQsIHZhbHVlKSB7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF90eXBlKGlucHV0LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IC0xOyAvLyBubyBvcHRpb24gc2hvdWxkIGJlIHNlbGVjdGVkXG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF92YWx1ZShzZWxlY3QpIHtcbiAgICBjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcbiAgICByZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgb3B0aW9uID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxubGV0IGNyb3Nzb3JpZ2luO1xuZnVuY3Rpb24gaXNfY3Jvc3NvcmlnaW4oKSB7XG4gICAgaWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3Jvc3NvcmlnaW4gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdm9pZCB3aW5kb3cucGFyZW50LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc29yaWdpbjtcbn1cbmZ1bmN0aW9uIGFkZF9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcbiAgICBjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyAnICtcbiAgICAgICAgJ292ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6IC0xOycpO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZnJhbWUudGFiSW5kZXggPSAtMTtcbiAgICBjb25zdCBjcm9zc29yaWdpbiA9IGlzX2Nyb3Nzb3JpZ2luKCk7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICBpZnJhbWUuc3JjID0gXCJkYXRhOnRleHQvaHRtbCw8c2NyaXB0Pm9ucmVzaXplPWZ1bmN0aW9uKCl7cGFyZW50LnBvc3RNZXNzYWdlKDAsJyonKX08L3NjcmlwdD5cIjtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIHsgYnViYmxlcyA9IGZhbHNlLCBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuZnVuY3Rpb24gaGVhZF9zZWxlY3Rvcihub2RlSWQsIGhlYWQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgc3RhcnRlZCA9IDA7XG4gICAgZm9yIChjb25zdCBub2RlIG9mIGhlYWQuY2hpbGROb2Rlcykge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBjb21tZW50IG5vZGUgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBub2RlLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChjb21tZW50ID09PSBgSEVBRF8ke25vZGVJZH1fRU5EYCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgLT0gMTtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1lbnQgPT09IGBIRUFEXyR7bm9kZUlkfV9TVEFSVGApIHtcbiAgICAgICAgICAgICAgICBzdGFydGVkICs9IDE7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRlZCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5jbGFzcyBIdG1sVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcihpc19zdmcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzX3N2ZyA9IGlzX3N2ZztcbiAgICAgICAgdGhpcy5lID0gdGhpcy5uID0gbnVsbDtcbiAgICB9XG4gICAgYyhodG1sKSB7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICB9XG4gICAgbShodG1sLCB0YXJnZXQsIGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX3N2ZylcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBzdmdfZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuZSA9IGVsZW1lbnQodGFyZ2V0Lm5vZGVOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuYyhodG1sKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkoYW5jaG9yKTtcbiAgICB9XG4gICAgaChodG1sKSB7XG4gICAgICAgIHRoaXMuZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICB0aGlzLm4gPSBBcnJheS5mcm9tKHRoaXMuZS5jaGlsZE5vZGVzKTtcbiAgICB9XG4gICAgaShhbmNob3IpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGluc2VydCh0aGlzLnQsIHRoaXMubltpXSwgYW5jaG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMuaChodG1sKTtcbiAgICAgICAgdGhpcy5pKHRoaXMuYSk7XG4gICAgfVxuICAgIGQoKSB7XG4gICAgICAgIHRoaXMubi5mb3JFYWNoKGRldGFjaCk7XG4gICAgfVxufVxuY2xhc3MgSHRtbFRhZ0h5ZHJhdGlvbiBleHRlbmRzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGNsYWltZWRfbm9kZXMsIGlzX3N2ZyA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKGlzX3N2Zyk7XG4gICAgICAgIHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG4gICAgICAgIHRoaXMubCA9IGNsYWltZWRfbm9kZXM7XG4gICAgfVxuICAgIGMoaHRtbCkge1xuICAgICAgICBpZiAodGhpcy5sKSB7XG4gICAgICAgICAgICB0aGlzLm4gPSB0aGlzLmw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5jKGh0bWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnRfaHlkcmF0aW9uKHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlX3RvX29iamVjdChhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgICByZXN1bHRbYXR0cmlidXRlLm5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cyhlbGVtZW50KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgcmVzdWx0W25vZGUuc2xvdCB8fCAnZGVmYXVsdCddID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xuICAgIHJldHVybiBuZXcgY29tcG9uZW50KHByb3BzKTtcbn1cblxuLy8gd2UgbmVlZCB0byBzdG9yZSB0aGUgaW5mb3JtYXRpb24gZm9yIG11bHRpcGxlIGRvY3VtZW50cyBiZWNhdXNlIGEgU3ZlbHRlIGFwcGxpY2F0aW9uIGNvdWxkIGFsc28gY29udGFpbiBpZnJhbWVzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL2lzc3Vlcy8zNjI0XG5jb25zdCBtYW5hZ2VkX3N0eWxlcyA9IG5ldyBNYXAoKTtcbmxldCBhY3RpdmUgPSAwO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Rhcmtza3lhcHAvc3RyaW5nLWhhc2gvYmxvYi9tYXN0ZXIvaW5kZXguanNcbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgbGV0IGhhc2ggPSA1MzgxO1xuICAgIGxldCBpID0gc3RyLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgXiBzdHIuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zdHlsZV9pbmZvcm1hdGlvbihkb2MsIG5vZGUpIHtcbiAgICBjb25zdCBpbmZvID0geyBzdHlsZXNoZWV0OiBhcHBlbmRfZW1wdHlfc3R5bGVzaGVldChub2RlKSwgcnVsZXM6IHt9IH07XG4gICAgbWFuYWdlZF9zdHlsZXMuc2V0KGRvYywgaW5mbyk7XG4gICAgcmV0dXJuIGluZm87XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IGdldF9yb290X2Zvcl9zdHlsZShub2RlKTtcbiAgICBjb25zdCB7IHN0eWxlc2hlZXQsIHJ1bGVzIH0gPSBtYW5hZ2VkX3N0eWxlcy5nZXQoZG9jKSB8fCBjcmVhdGVfc3R5bGVfaW5mb3JtYXRpb24oZG9jLCBub2RlKTtcbiAgICBpZiAoIXJ1bGVzW25hbWVdKSB7XG4gICAgICAgIHJ1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgc3R5bGVzaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzICR7bmFtZX0gJHtydWxlfWAsIHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBgJHthbmltYXRpb24gPyBgJHthbmltYXRpb259LCBgIDogJyd9JHtuYW1lfSAke2R1cmF0aW9ufW1zIGxpbmVhciAke2RlbGF5fW1zIDEgYm90aGA7XG4gICAgYWN0aXZlICs9IDE7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5mdW5jdGlvbiBkZWxldGVfcnVsZShub2RlLCBuYW1lKSB7XG4gICAgY29uc3QgcHJldmlvdXMgPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpLnNwbGl0KCcsICcpO1xuICAgIGNvbnN0IG5leHQgPSBwcmV2aW91cy5maWx0ZXIobmFtZVxuICAgICAgICA/IGFuaW0gPT4gYW5pbS5pbmRleE9mKG5hbWUpIDwgMCAvLyByZW1vdmUgc3BlY2lmaWMgYW5pbWF0aW9uXG4gICAgICAgIDogYW5pbSA9PiBhbmltLmluZGV4T2YoJ19fc3ZlbHRlJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICApO1xuICAgIGNvbnN0IGRlbGV0ZWQgPSBwcmV2aW91cy5sZW5ndGggLSBuZXh0Lmxlbmd0aDtcbiAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IG5leHQuam9pbignLCAnKTtcbiAgICAgICAgYWN0aXZlIC09IGRlbGV0ZWQ7XG4gICAgICAgIGlmICghYWN0aXZlKVxuICAgICAgICAgICAgY2xlYXJfcnVsZXMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjbGVhcl9ydWxlcygpIHtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBtYW5hZ2VkX3N0eWxlcy5mb3JFYWNoKGluZm8gPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBvd25lck5vZGUgfSA9IGluZm8uc3R5bGVzaGVldDtcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG93bmVyTm9kZSBpZiBpdCBydW5zIG9uIGpzZG9tLlxuICAgICAgICAgICAgaWYgKG93bmVyTm9kZSlcbiAgICAgICAgICAgICAgICBkZXRhY2gob3duZXJOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1hbmFnZWRfc3R5bGVzLmNsZWFyKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9hbmltYXRpb24obm9kZSwgZnJvbSwgZm4sIHBhcmFtcykge1xuICAgIGlmICghZnJvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChmcm9tLmxlZnQgPT09IHRvLmxlZnQgJiYgZnJvbS5yaWdodCA9PT0gdG8ucmlnaHQgJiYgZnJvbS50b3AgPT09IHRvLnRvcCAmJiBmcm9tLmJvdHRvbSA9PT0gdG8uYm90dG9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86IHNob3VsZCB0aGlzIGJlIHNlcGFyYXRlZCBmcm9tIGRlc3RydWN0dXJpbmc/IE9yIHN0YXJ0L2VuZCBhZGRlZCB0byBwdWJsaWMgYXBpIGFuZCBkb2N1bWVudGF0aW9uP1xuICAgIHN0YXJ0OiBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOlxuICAgIGVuZCA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbiwgdGljayA9IG5vb3AsIGNzcyB9ID0gZm4obm9kZSwgeyBmcm9tLCB0byB9LCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgc3RhcnRlZCA9IGZhbHNlO1xuICAgIGxldCBuYW1lO1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICBuYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMCwgMSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkZWxheSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpO1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgaWYgKCFzdGFydGVkICYmIG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCAmJiBub3cgPj0gZW5kKSB7XG4gICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbm93IC0gc3RhcnRfdGltZTtcbiAgICAgICAgICAgIGNvbnN0IHQgPSAwICsgMSAqIGVhc2luZyhwIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgc3RhcnQoKTtcbiAgICB0aWNrKDAsIDEpO1xuICAgIHJldHVybiBzdG9wO1xufVxuZnVuY3Rpb24gZml4X3Bvc2l0aW9uKG5vZGUpIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSAnYWJzb2x1dGUnICYmIHN0eWxlLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3R5bGU7XG4gICAgICAgIGNvbnN0IGEgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgYWRkX3RyYW5zZm9ybShub2RlLCBhKTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpIHtcbiAgICBjb25zdCBiID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYS5sZWZ0ICE9PSBiLmxlZnQgfHwgYS50b3AgIT09IGIudG9wKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke2EubGVmdCAtIGIubGVmdH1weCwgJHthLnRvcCAtIGIudG9wfXB4KWA7XG4gICAgfVxufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5mdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5mdW5jdGlvbiBnZXRfY3VycmVudF9jb21wb25lbnQoKSB7XG4gICAgaWYgKCFjdXJyZW50X2NvbXBvbmVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24nKTtcbiAgICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG4vKipcbiAqIFNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyB1cGRhdGVkIGFmdGVyIGFueSBzdGF0ZSBjaGFuZ2UuXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIHJ1bnMgd2lsbCBiZSBiZWZvcmUgdGhlIGluaXRpYWwgYG9uTW91bnRgXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWJlZm9yZXVwZGF0ZVxuICovXG5mdW5jdGlvbiBiZWZvcmVVcGRhdGUoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5iZWZvcmVfdXBkYXRlLnB1c2goZm4pO1xufVxuLyoqXG4gKiBUaGUgYG9uTW91bnRgIGZ1bmN0aW9uIHNjaGVkdWxlcyBhIGNhbGxiYWNrIHRvIHJ1biBhcyBzb29uIGFzIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NLlxuICogSXQgbXVzdCBiZSBjYWxsZWQgZHVyaW5nIHRoZSBjb21wb25lbnQncyBpbml0aWFsaXNhdGlvbiAoYnV0IGRvZXNuJ3QgbmVlZCB0byBsaXZlICppbnNpZGUqIHRoZSBjb21wb25lbnQ7XG4gKiBpdCBjYW4gYmUgY2FsbGVkIGZyb20gYW4gZXh0ZXJuYWwgbW9kdWxlKS5cbiAqXG4gKiBgb25Nb3VudGAgZG9lcyBub3QgcnVuIGluc2lkZSBhIFtzZXJ2ZXItc2lkZSBjb21wb25lbnRdKC9kb2NzI3J1bi10aW1lLXNlcnZlci1zaWRlLWNvbXBvbmVudC1hcGkpLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1vbm1vdW50XG4gKi9cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gdXBkYXRlZC5cbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgcnVucyB3aWxsIGJlIGFmdGVyIHRoZSBpbml0aWFsIGBvbk1vdW50YFxuICovXG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbi8qKlxuICogU2NoZWR1bGVzIGEgY2FsbGJhY2sgdG8gcnVuIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cbiAqXG4gKiBPdXQgb2YgYG9uTW91bnRgLCBgYmVmb3JlVXBkYXRlYCwgYGFmdGVyVXBkYXRlYCBhbmQgYG9uRGVzdHJveWAsIHRoaXMgaXMgdGhlXG4gKiBvbmx5IG9uZSB0aGF0IHJ1bnMgaW5zaWRlIGEgc2VydmVyLXNpZGUgY29tcG9uZW50LlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1vbmRlc3Ryb3lcbiAqL1xuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhbiBldmVudCBkaXNwYXRjaGVyIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGlzcGF0Y2ggW2NvbXBvbmVudCBldmVudHNdKC9kb2NzI3RlbXBsYXRlLXN5bnRheC1jb21wb25lbnQtZGlyZWN0aXZlcy1vbi1ldmVudG5hbWUpLlxuICogRXZlbnQgZGlzcGF0Y2hlcnMgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiB0YWtlIHR3byBhcmd1bWVudHM6IGBuYW1lYCBhbmQgYGRldGFpbGAuXG4gKlxuICogQ29tcG9uZW50IGV2ZW50cyBjcmVhdGVkIHdpdGggYGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcmAgY3JlYXRlIGFcbiAqIFtDdXN0b21FdmVudF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0N1c3RvbUV2ZW50KS5cbiAqIFRoZXNlIGV2ZW50cyBkbyBub3QgW2J1YmJsZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9MZWFybi9KYXZhU2NyaXB0L0J1aWxkaW5nX2Jsb2Nrcy9FdmVudHMjRXZlbnRfYnViYmxpbmdfYW5kX2NhcHR1cmUpLlxuICogVGhlIGBkZXRhaWxgIGFyZ3VtZW50IGNvcnJlc3BvbmRzIHRvIHRoZSBbQ3VzdG9tRXZlbnQuZGV0YWlsXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQvZGV0YWlsKVxuICogcHJvcGVydHkgYW5kIGNhbiBjb250YWluIGFueSB0eXBlIG9mIGRhdGEuXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWNyZWF0ZWV2ZW50ZGlzcGF0Y2hlclxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG4gICAgICAgICAgICAvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSB9KTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xufVxuLyoqXG4gKiBBc3NvY2lhdGVzIGFuIGFyYml0cmFyeSBgY29udGV4dGAgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgY29tcG9uZW50IGFuZCB0aGUgc3BlY2lmaWVkIGBrZXlgXG4gKiBhbmQgcmV0dXJucyB0aGF0IG9iamVjdC4gVGhlIGNvbnRleHQgaXMgdGhlbiBhdmFpbGFibGUgdG8gY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudFxuICogKGluY2x1ZGluZyBzbG90dGVkIGNvbnRlbnQpIHdpdGggYGdldENvbnRleHRgLlxuICpcbiAqIExpa2UgbGlmZWN5Y2xlIGZ1bmN0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZCBkdXJpbmcgY29tcG9uZW50IGluaXRpYWxpc2F0aW9uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzI3J1bi10aW1lLXN2ZWx0ZS1zZXRjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcbiAgICByZXR1cm4gY29udGV4dDtcbn1cbi8qKlxuICogUmV0cmlldmVzIHRoZSBjb250ZXh0IHRoYXQgYmVsb25ncyB0byB0aGUgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IHdpdGggdGhlIHNwZWNpZmllZCBga2V5YC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWdldGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gZ2V0Q29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5nZXQoa2V5KTtcbn1cbi8qKlxuICogUmV0cmlldmVzIHRoZSB3aG9sZSBjb250ZXh0IG1hcCB0aGF0IGJlbG9uZ3MgdG8gdGhlIGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uIFVzZWZ1bCwgZm9yIGV4YW1wbGUsIGlmIHlvdVxuICogcHJvZ3JhbW1hdGljYWxseSBjcmVhdGUgYSBjb21wb25lbnQgYW5kIHdhbnQgdG8gcGFzcyB0aGUgZXhpc3RpbmcgY29udGV4dCB0byBpdC5cbiAqXG4gKiBodHRwczovL3N2ZWx0ZS5kZXYvZG9jcyNydW4tdGltZS1zdmVsdGUtZ2V0YWxsY29udGV4dHNcbiAqL1xuZnVuY3Rpb24gZ2V0QWxsQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQ7XG59XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGEgZ2l2ZW4gYGtleWAgaGFzIGJlZW4gc2V0IGluIHRoZSBjb250ZXh0IG9mIGEgcGFyZW50IGNvbXBvbmVudC5cbiAqIE11c3QgYmUgY2FsbGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGlzYXRpb24uXG4gKlxuICogaHR0cHM6Ly9zdmVsdGUuZGV2L2RvY3MjcnVuLXRpbWUtc3ZlbHRlLWhhc2NvbnRleHRcbiAqL1xuZnVuY3Rpb24gaGFzQ29udGV4dChrZXkpIHtcbiAgICByZXR1cm4gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5oYXMoa2V5KTtcbn1cbi8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBzdGlsbCB3YW50IHRvIHN1cHBvcnRcbi8vIHNob3J0aGFuZCBldmVudHMsIG9yIGlmIHdlIHdhbnQgdG8gaW1wbGVtZW50XG4vLyBhIHJlYWwgYnViYmxpbmcgbWVjaGFuaXNtXG5mdW5jdGlvbiBidWJibGUoY29tcG9uZW50LCBldmVudCkge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNvbXBvbmVudC4kJC5jYWxsYmFja3NbZXZlbnQudHlwZV07XG4gICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4uY2FsbCh0aGlzLCBldmVudCkpO1xuICAgIH1cbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgaW50cm9zID0geyBlbmFibGVkOiBmYWxzZSB9O1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlc29sdmVkX3Byb21pc2UudGhlbihmbHVzaCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRfcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICByZW5kZXJfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gYWRkX2ZsdXNoX2NhbGxiYWNrKGZuKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnB1c2goZm4pO1xufVxuLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbi8vIDEuIEFsbCBiZWZvcmVVcGRhdGUgY2FsbGJhY2tzLCBpbiBvcmRlcjogcGFyZW50cyBiZWZvcmUgY2hpbGRyZW5cbi8vIDIuIEFsbCBiaW5kOnRoaXMgY2FsbGJhY2tzLCBpbiByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbi8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4vLyAgICBmb3IgYWZ0ZXJVcGRhdGVzIGNhbGxlZCBkdXJpbmcgdGhlIGluaXRpYWwgb25Nb3VudCwgd2hpY2ggYXJlIGNhbGxlZCBpblxuLy8gICAgcmV2ZXJzZSBvcmRlcjogY2hpbGRyZW4gYmVmb3JlIHBhcmVudHMuXG4vLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuLy8gY2FsbCB0byBmbHVzaCgpLCB0aGUgZm9sbG93aW5nIHN0ZXBzIGd1YXJkIGFnYWluc3QgdGhpczpcbi8vIDEuIER1cmluZyBiZWZvcmVVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBiZSBhZGRlZCB0byB0aGVcbi8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4vLyAgICB0aGUgZmx1c2ggaW5kZXggaXMga2VwdCBvdXRzaWRlIHRoZSBmdW5jdGlvbiwgdGhlIHJlZW50cmFudCBjYWxsIHdpbGwgcGlja1xuLy8gICAgdXAgd2hlcmUgdGhlIGVhcmxpZXIgY2FsbCBsZWZ0IG9mZiBhbmQgZ28gdGhyb3VnaCBhbGwgZGlydHkgY29tcG9uZW50cy4gVGhlXG4vLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuLy8gICAgbm90IGludGVyZmVyZSB3aXRoIHRoZSBcInBhcmVudFwiIGZsdXNoKCkgY2FsbC5cbi8vIDIuIGJpbmQ6dGhpcyBjYWxsYmFja3MgY2Fubm90IHRyaWdnZXIgbmV3IGZsdXNoKCkgY2FsbHMuXG4vLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuLy8gICAgY2FsbGJhY2sgY2FsbGVkIGEgc2Vjb25kIHRpbWU7IHRoZSBzZWVuX2NhbGxiYWNrcyBzZXQsIG91dHNpZGUgdGhlIGZsdXNoKClcbi8vICAgIGZ1bmN0aW9uLCBndWFyYW50ZWVzIHRoaXMgYmVoYXZpb3IuXG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbmxldCBmbHVzaGlkeCA9IDA7IC8vIERvICpub3QqIG1vdmUgdGhpcyBpbnNpZGUgdGhlIGZsdXNoKCkgZnVuY3Rpb25cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vIERvIG5vdCByZWVudGVyIGZsdXNoIHdoaWxlIGRpcnR5IGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGFzIHRoaXMgY2FuXG4gICAgLy8gcmVzdWx0IGluIGFuIGluZmluaXRlIGxvb3AuIEluc3RlYWQsIGxldCB0aGUgaW5uZXIgZmx1c2ggaGFuZGxlIGl0LlxuICAgIC8vIFJlZW50cmFuY3kgaXMgb2sgYWZ0ZXJ3YXJkcyBmb3IgYmluZGluZ3MgZXRjLlxuICAgIGlmIChmbHVzaGlkeCAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIGRvIHtcbiAgICAgICAgLy8gZmlyc3QsIGNhbGwgYmVmb3JlVXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gcmVzZXQgZGlydHkgc3RhdGUgdG8gbm90IGVuZCB1cCBpbiBhIGRlYWRsb2NrZWQgc3RhdGUgYW5kIHRoZW4gcmV0aHJvd1xuICAgICAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgZmx1c2hpZHggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoc2F2ZWRfY29tcG9uZW50KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyBkaXJlY3Rpb246ICdpbicgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnb3V0JyB9O1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMsIG9wdGlvbnMpO1xuICAgIGxldCBydW5uaW5nID0gdHJ1ZTtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgZ3JvdXAuciArPSAxO1xuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAxLCAwLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnc3RhcnQnKSk7XG4gICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIS0tZ3JvdXAucikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gY2xlYW4gdXAgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuX2FsbChncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGljaygxIC0gdCwgdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGlyZWN0aW9uOiAnYm90aCcgfTtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zLCBvcHRpb25zKTtcbiAgICBsZXQgdCA9IGludHJvID8gMCA6IDE7XG4gICAgbGV0IHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBjbGVhcl9hbmltYXRpb24oKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW5pdChwcm9ncmFtLCBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBkID0gKHByb2dyYW0uYiAtIHQpO1xuICAgICAgICBkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHQsXG4gICAgICAgICAgICBiOiBwcm9ncmFtLmIsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBzdGFydDogcHJvZ3JhbS5zdGFydCxcbiAgICAgICAgICAgIGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuICAgICAgICAgICAgZ3JvdXA6IHByb2dyYW0uZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oYikge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBjb25zdCBwcm9ncmFtID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICBwZW5kaW5nX3Byb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhbiBpbnRybywgYW5kIHRoZXJlJ3MgYSBkZWxheSwgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW4gaW5pdGlhbCB0aWNrIGFuZC9vciBhcHBseSBDU1MgYW5pbWF0aW9uIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCB0LCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBpbml0KHByb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgYiwgJ3N0YXJ0JykpO1xuICAgICAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwZW5kaW5nX3Byb2dyYW0gJiYgbm93ID4gcGVuZGluZ19wcm9ncmFtLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocGVuZGluZ19wcm9ncmFtLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnc3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJfYW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIHJ1bm5pbmdfcHJvZ3JhbS5iLCBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24sIDAsIGVhc2luZywgY29uZmlnLmNzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCA9IHJ1bm5pbmdfcHJvZ3JhbS5iLCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCBydW5uaW5nX3Byb2dyYW0uYiwgJ2VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSdyZSBkb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbS5iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludHJvIFx1MjAxNCB3ZSBjYW4gdGlkeSB1cCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG91dHJvIFx1MjAxNCBuZWVkcyB0byBiZSBjb29yZGluYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIS0tcnVubmluZ19wcm9ncmFtLmdyb3VwLnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKHJ1bm5pbmdfcHJvZ3JhbS5ncm91cC5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vdyA+PSBydW5uaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBydW5uaW5nX3Byb2dyYW0uc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gcnVubmluZ19wcm9ncmFtLmEgKyBydW5uaW5nX3Byb2dyYW0uZCAqIGVhc2luZyhwIC8gcnVubmluZ19wcm9ncmFtLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAhIShydW5uaW5nX3Byb2dyYW0gfHwgcGVuZGluZ19wcm9ncmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJ1bihiKSB7XG4gICAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhbmRsZV9wcm9taXNlKHByb21pc2UsIGluZm8pIHtcbiAgICBjb25zdCB0b2tlbiA9IGluZm8udG9rZW4gPSB7fTtcbiAgICBmdW5jdGlvbiB1cGRhdGUodHlwZSwgaW5kZXgsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGluZm8udG9rZW4gIT09IHRva2VuKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpbmZvLnJlc29sdmVkID0gdmFsdWU7XG4gICAgICAgIGxldCBjaGlsZF9jdHggPSBpbmZvLmN0eDtcbiAgICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaGlsZF9jdHggPSBjaGlsZF9jdHguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkX2N0eFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0eXBlICYmIChpbmZvLmN1cnJlbnQgPSB0eXBlKShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgbmVlZHNfZmx1c2ggPSBmYWxzZTtcbiAgICAgICAgaWYgKGluZm8uYmxvY2spIHtcbiAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCAmJiBibG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uX291dChibG9jaywgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLmJsb2Nrc1tpXSA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5ibG9ja3NbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8uYmxvY2suZCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICAgICAgYmxvY2subShpbmZvLm1vdW50KCksIGluZm8uYW5jaG9yKTtcbiAgICAgICAgICAgIG5lZWRzX2ZsdXNoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLmJsb2NrID0gYmxvY2s7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrcylcbiAgICAgICAgICAgIGluZm8uYmxvY2tzW2luZGV4XSA9IGJsb2NrO1xuICAgICAgICBpZiAobmVlZHNfZmx1c2gpIHtcbiAgICAgICAgICAgIGZsdXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzX3Byb21pc2UocHJvbWlzZSkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudF9jb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjdXJyZW50X2NvbXBvbmVudCk7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5jYXRjaCwgMiwgaW5mby5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICAgICAgaWYgKCFpbmZvLmhhc0NhdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBpZiB3ZSBwcmV2aW91c2x5IGhhZCBhIHRoZW4vY2F0Y2ggYmxvY2ssIGRlc3Ryb3kgaXRcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby5wZW5kaW5nKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby5wZW5kaW5nLCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnRoZW4sIDEsIGluZm8udmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHByb21pc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaChpbmZvLCBjdHgsIGRpcnR5KSB7XG4gICAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gICAgY29uc3QgeyByZXNvbHZlZCB9ID0gaW5mbztcbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLnRoZW4pIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8udmFsdWVdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGlmIChpbmZvLmN1cnJlbnQgPT09IGluZm8uY2F0Y2gpIHtcbiAgICAgICAgY2hpbGRfY3R4W2luZm8uZXJyb3JdID0gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGluZm8uYmxvY2sucChjaGlsZF9jdHgsIGRpcnR5KTtcbn1cblxuY29uc3QgZ2xvYmFscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgID8gd2luZG93XG4gICAgOiB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBnbG9iYWxUaGlzXG4gICAgICAgIDogZ2xvYmFsKTtcblxuZnVuY3Rpb24gZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZCgxKTtcbiAgICBsb29rdXAuZGVsZXRlKGJsb2NrLmtleSk7XG59XG5mdW5jdGlvbiBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZml4X2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmYoKTtcbiAgICBvdXRyb19hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9rZXllZF9lYWNoKG9sZF9ibG9ja3MsIGRpcnR5LCBnZXRfa2V5LCBkeW5hbWljLCBjdHgsIGxpc3QsIGxvb2t1cCwgbm9kZSwgZGVzdHJveSwgY3JlYXRlX2VhY2hfYmxvY2ssIG5leHQsIGdldF9jb250ZXh0KSB7XG4gICAgbGV0IG8gPSBvbGRfYmxvY2tzLmxlbmd0aDtcbiAgICBsZXQgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGxldCBpID0gbztcbiAgICBjb25zdCBvbGRfaW5kZXhlcyA9IHt9O1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9sZF9pbmRleGVzW29sZF9ibG9ja3NbaV0ua2V5XSA9IGk7XG4gICAgY29uc3QgbmV3X2Jsb2NrcyA9IFtdO1xuICAgIGNvbnN0IG5ld19sb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgZGVsdGFzID0gbmV3IE1hcCgpO1xuICAgIGkgPSBuO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKTtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShjaGlsZF9jdHgpO1xuICAgICAgICBsZXQgYmxvY2sgPSBsb29rdXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIGJsb2NrID0gY3JlYXRlX2VhY2hfYmxvY2soa2V5LCBjaGlsZF9jdHgpO1xuICAgICAgICAgICAgYmxvY2suYygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR5bmFtaWMpIHtcbiAgICAgICAgICAgIGJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3X2xvb2t1cC5zZXQoa2V5LCBuZXdfYmxvY2tzW2ldID0gYmxvY2spO1xuICAgICAgICBpZiAoa2V5IGluIG9sZF9pbmRleGVzKVxuICAgICAgICAgICAgZGVsdGFzLnNldChrZXksIE1hdGguYWJzKGkgLSBvbGRfaW5kZXhlc1trZXldKSk7XG4gICAgfVxuICAgIGNvbnN0IHdpbGxfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBkaWRfbW92ZSA9IG5ldyBTZXQoKTtcbiAgICBmdW5jdGlvbiBpbnNlcnQoYmxvY2spIHtcbiAgICAgICAgdHJhbnNpdGlvbl9pbihibG9jaywgMSk7XG4gICAgICAgIGJsb2NrLm0obm9kZSwgbmV4dCk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaW5lcnQnLFxuICAgICdpc21hcCcsXG4gICAgJ2l0ZW1zY29wZScsXG4gICAgJ2xvb3AnLFxuICAgICdtdWx0aXBsZScsXG4gICAgJ211dGVkJyxcbiAgICAnbm9tb2R1bGUnLFxuICAgICdub3ZhbGlkYXRlJyxcbiAgICAnb3BlbicsXG4gICAgJ3BsYXlzaW5saW5lJyxcbiAgICAncmVhZG9ubHknLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JldmVyc2VkJyxcbiAgICAnc2VsZWN0ZWQnXG5dKTtcblxuLyoqIHJlZ2V4IG9mIGFsbCBodG1sIHZvaWQgZWxlbWVudCBuYW1lcyAqL1xuY29uc3Qgdm9pZF9lbGVtZW50X25hbWVzID0gL14oPzphcmVhfGJhc2V8YnJ8Y29sfGNvbW1hbmR8ZW1iZWR8aHJ8aW1nfGlucHV0fGtleWdlbnxsaW5rfG1ldGF8cGFyYW18c291cmNlfHRyYWNrfHdicikkLztcbmZ1bmN0aW9uIGlzX3ZvaWQobmFtZSkge1xuICAgIHJldHVybiB2b2lkX2VsZW1lbnRfbmFtZXMudGVzdChuYW1lKSB8fCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICchZG9jdHlwZSc7XG59XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGF0dHJzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoYXR0cnNfdG9fYWRkKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXNfdG9fYWRkID0gYXR0cnNfdG9fYWRkLmNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHN0eWxlc190b19hZGQgPSBhdHRyc190b19hZGQuc3R5bGVzO1xuICAgICAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmNsYXNzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdHlsZXNfdG9fYWRkKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5zdHlsZSA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVzX3RvX2FkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnN0eWxlID0gc3R5bGVfb2JqZWN0X3RvX3N0cmluZyhtZXJnZV9zc3Jfc3R5bGVzKGF0dHJpYnV0ZXMuc3R5bGUsIHN0eWxlc190b19hZGQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdHI7XG59XG5mdW5jdGlvbiBtZXJnZV9zc3Jfc3R5bGVzKHN0eWxlX2F0dHJpYnV0ZSwgc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgY29uc3Qgc3R5bGVfb2JqZWN0ID0ge307XG4gICAgZm9yIChjb25zdCBpbmRpdmlkdWFsX3N0eWxlIG9mIHN0eWxlX2F0dHJpYnV0ZS5zcGxpdCgnOycpKSB7XG4gICAgICAgIGNvbnN0IGNvbG9uX2luZGV4ID0gaW5kaXZpZHVhbF9zdHlsZS5pbmRleE9mKCc6Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbmRpdmlkdWFsX3N0eWxlLnNsaWNlKDAsIGNvbG9uX2luZGV4KS50cmltKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kaXZpZHVhbF9zdHlsZS5zbGljZShjb2xvbl9pbmRleCArIDEpLnRyaW0oKTtcbiAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVfZGlyZWN0aXZlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVfZGlyZWN0aXZlW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlX29iamVjdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlX29iamVjdFtuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVfb2JqZWN0O1xufVxuY29uc3QgQVRUUl9SRUdFWCA9IC9bJlwiXS9nO1xuY29uc3QgQ09OVEVOVF9SRUdFWCA9IC9bJjxdL2c7XG4vKipcbiAqIE5vdGU6IHRoaXMgbWV0aG9kIGlzIHBlcmZvcm1hbmNlIHNlbnNpdGl2ZSBhbmQgaGFzIGJlZW4gb3B0aW1pemVkXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3ZlbHRlanMvc3ZlbHRlL3B1bGwvNTcwMVxuICovXG5mdW5jdGlvbiBlc2NhcGUodmFsdWUsIGlzX2F0dHIgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XG4gICAgY29uc3QgcGF0dGVybiA9IGlzX2F0dHIgPyBBVFRSX1JFR0VYIDogQ09OVEVOVF9SRUdFWDtcbiAgICBwYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG4gICAgbGV0IGVzY2FwZWQgPSAnJztcbiAgICBsZXQgbGFzdCA9IDA7XG4gICAgd2hpbGUgKHBhdHRlcm4udGVzdChzdHIpKSB7XG4gICAgICAgIGNvbnN0IGkgPSBwYXR0ZXJuLmxhc3RJbmRleCAtIDE7XG4gICAgICAgIGNvbnN0IGNoID0gc3RyW2ldO1xuICAgICAgICBlc2NhcGVkICs9IHN0ci5zdWJzdHJpbmcobGFzdCwgaSkgKyAoY2ggPT09ICcmJyA/ICcmYW1wOycgOiAoY2ggPT09ICdcIicgPyAnJnF1b3Q7JyA6ICcmbHQ7JykpO1xuICAgICAgICBsYXN0ID0gaSArIDE7XG4gICAgfVxuICAgIHJldHVybiBlc2NhcGVkICsgc3RyLnN1YnN0cmluZyhsYXN0KTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUodmFsdWUpIHtcbiAgICAvLyBrZWVwIGJvb2xlYW5zLCBudWxsLCBhbmQgdW5kZWZpbmVkIGZvciB0aGUgc2FrZSBvZiBgc3ByZWFkYFxuICAgIGNvbnN0IHNob3VsZF9lc2NhcGUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8ICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKTtcbiAgICByZXR1cm4gc2hvdWxkX2VzY2FwZSA/IGVzY2FwZSh2YWx1ZSwgdHJ1ZSkgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGVzY2FwZV9vYmplY3Qob2JqKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZShvYmpba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBlYWNoKGl0ZW1zLCBmbikge1xuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN0ciArPSBmbihpdGVtc1tpXSwgaSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59XG5jb25zdCBtaXNzaW5nX2NvbXBvbmVudCA9IHtcbiAgICAkJHJlbmRlcjogKCkgPT4gJydcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZV9jb21wb25lbnQoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgaWYgKCFjb21wb25lbnQgfHwgIWNvbXBvbmVudC4kJHJlbmRlcikge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3N2ZWx0ZTpjb21wb25lbnQnKVxuICAgICAgICAgICAgbmFtZSArPSAnIHRoaXM9ey4uLn0nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYDwke25hbWV9PiBpcyBub3QgYSB2YWxpZCBTU1IgY29tcG9uZW50LiBZb3UgbWF5IG5lZWQgdG8gcmV2aWV3IHlvdXIgYnVpbGQgY29uZmlnIHRvIGVuc3VyZSB0aGF0IGRlcGVuZGVuY2llcyBhcmUgY29tcGlsZWQsIHJhdGhlciB0aGFuIGltcG9ydGVkIGFzIHByZS1jb21waWxlZCBtb2R1bGVzLiBPdGhlcndpc2UgeW91IG1heSBuZWVkIHRvIGZpeCBhIDwke25hbWV9Pi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKGNvbnRleHQgfHwgKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSkpLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IChib29sZWFuICYmIHZhbHVlID09PSB0cnVlKSA/ICcnIDogYD1cIiR7ZXNjYXBlKHZhbHVlLCB0cnVlKX1cImA7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7YXNzaWdubWVudH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiAnJztcbn1cbmZ1bmN0aW9uIHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlX29iamVjdClcbiAgICAgICAgLmZpbHRlcihrZXkgPT4gc3R5bGVfb2JqZWN0W2tleV0pXG4gICAgICAgIC5tYXAoa2V5ID0+IGAke2tleX06ICR7ZXNjYXBlX2F0dHJpYnV0ZV92YWx1ZShzdHlsZV9vYmplY3Rba2V5XSl9O2ApXG4gICAgICAgIC5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBhZGRfc3R5bGVzKHN0eWxlX29iamVjdCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlX29iamVjdF90b19zdHJpbmcoc3R5bGVfb2JqZWN0KTtcbiAgICByZXR1cm4gc3R5bGVzID8gYCBzdHlsZT1cIiR7c3R5bGVzfVwiYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcbiAgICBibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIGlmICghY3VzdG9tRWxlbWVudCkge1xuICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBjb21wb25lbnQuJCQub25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgLy8gaXQgd2lsbCB1cGRhdGUgdGhlIGAkJC5vbl9kZXN0cm95YCByZWZlcmVuY2UgdG8gYG51bGxgLlxuICAgICAgICAgICAgLy8gdGhlIGRlc3RydWN0dXJlZCBvbl9kZXN0cm95IG1heSBzdGlsbCByZWZlcmVuY2UgdG8gdGhlIG9sZCBhcnJheVxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kJC5vbl9kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgICAgIC8vIHByZXNlcnZlIGZpbmFsIHN0YXRlPylcbiAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgJCQuY3R4ID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpIHtcbiAgICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICAgIH1cbiAgICBjb21wb25lbnQuJCQuZGlydHlbKGkgLyAzMSkgfCAwXSB8PSAoMSA8PCAoaSAlIDMxKSk7XG59XG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpO1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBbXSxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHVwZGF0ZTogbm9vcCxcbiAgICAgICAgbm90X2VxdWFsLFxuICAgICAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIC8vIGxpZmVjeWNsZVxuICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAob3B0aW9ucy5jb250ZXh0IHx8IChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogW10pKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5LFxuICAgICAgICBza2lwX2JvdW5kOiBmYWxzZSxcbiAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgfTtcbiAgICBhcHBlbmRfc3R5bGVzICYmIGFwcGVuZF9zdHlsZXMoJCQucm9vdCk7XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICBzdGFydF9oeWRyYXRpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICBlbmRfaHlkcmF0aW5nKCk7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9uX21vdW50IH0gPSB0aGlzLiQkO1xuICAgICAgICAgICAgdGhpcy4kJC5vbl9kaXNjb25uZWN0ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLiQkLnNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy4kJC5zbG90dGVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBydW5fYWxsKHRoaXMuJCQub25fZGlzY29ubmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgJGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gVE9ETyBzaG91bGQgdGhpcyBkZWxlZ2F0ZSB0byBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgaWYgKCFpc19mdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFpc19mdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoJCRwcm9wcykge1xuICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiQkc2V0KCQkcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuNTUuMScgfSwgZGV0YWlsKSwgeyBidWJibGVzOiB0cnVlIH0pKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9kZXYodGFyZ2V0LCBub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmQodGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGFwcGVuZF9oeWRyYXRpb25fZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kX2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2Rldih0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gaW5zZXJ0X2h5ZHJhdGlvbl9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTUluc2VydCcsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0X2h5ZHJhdGlvbih0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZScsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFsnY2FwdHVyZSddIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldEF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRQcm9wZXJ0eScsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YXNldCcsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfZHluYW1pY19lbGVtZW50KHRhZykge1xuICAgIGNvbnN0IGlzX3N0cmluZyA9IHR5cGVvZiB0YWcgPT09ICdzdHJpbmcnO1xuICAgIGlmICh0YWcgJiYgIWlzX3N0cmluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzxzdmVsdGU6ZWxlbWVudD4gZXhwZWN0cyBcInRoaXNcIiBhdHRyaWJ1dGUgdG8gYmUgYSBzdHJpbmcuJyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQodGFnKSB7XG4gICAgaWYgKHRhZyAmJiBpc192b2lkKHRhZykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGA8c3ZlbHRlOmVsZW1lbnQgdGhpcz1cIiR7dGFnfVwiPiBpcyBzZWxmLWNsb3NpbmcgYW5kIGNhbm5vdCBoYXZlIGNvbnRlbnQuYCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnRfZGV2KGNvbXBvbmVudCwgcHJvcHMpIHtcbiAgICBjb25zdCBlcnJvcl9tZXNzYWdlID0gJ3RoaXM9ey4uLn0gb2YgPHN2ZWx0ZTpjb21wb25lbnQ+IHNob3VsZCBzcGVjaWZ5IGEgU3ZlbHRlIGNvbXBvbmVudC4nO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XG4gICAgICAgIGlmICghaW5zdGFuY2UuJCQgfHwgIWluc3RhbmNlLiRzZXQgfHwgIWluc3RhbmNlLiRvbiB8fCAhaW5zdGFuY2UuJGRlc3Ryb3kpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBlcnI7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgbWVzc2FnZS5pbmRleE9mKCdpcyBub3QgYSBjb25zdHJ1Y3RvcicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yX21lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cyB3aXRoIHNvbWUgbWlub3IgZGV2LWVuaGFuY2VtZW50cy4gVXNlZCB3aGVuIGRldj10cnVlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgdG8gY3JlYXRlIHN0cm9uZ2x5IHR5cGVkIFN2ZWx0ZSBjb21wb25lbnRzLlxuICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzIGFuZCBzaG91bGQgYmUgdXNlZCBpbiBgLmQudHNgIGZpbGVzLlxuICpcbiAqICMjIyBFeGFtcGxlOlxuICpcbiAqIFlvdSBoYXZlIGNvbXBvbmVudCBsaWJyYXJ5IG9uIG5wbSBjYWxsZWQgYGNvbXBvbmVudC1saWJyYXJ5YCwgZnJvbSB3aGljaFxuICogeW91IGV4cG9ydCBhIGNvbXBvbmVudCBjYWxsZWQgYE15Q29tcG9uZW50YC4gRm9yIFN2ZWx0ZStUeXBlU2NyaXB0IHVzZXJzLFxuICogeW91IHdhbnQgdG8gcHJvdmlkZSB0eXBpbmdzLiBUaGVyZWZvcmUgeW91IGNyZWF0ZSBhIGBpbmRleC5kLnRzYDpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnRUeXBlZCB9IGZyb20gXCJzdmVsdGVcIjtcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkPHtmb286IHN0cmluZ30+IHt9XG4gKiBgYGBcbiAqIFR5cGluZyB0aGlzIG1ha2VzIGl0IHBvc3NpYmxlIGZvciBJREVzIGxpa2UgVlMgQ29kZSB3aXRoIHRoZSBTdmVsdGUgZXh0ZW5zaW9uXG4gKiB0byBwcm92aWRlIGludGVsbGlzZW5zZSBhbmQgdG8gdXNlIHRoZSBjb21wb25lbnQgbGlrZSB0aGlzIGluIGEgU3ZlbHRlIGZpbGVcbiAqIHdpdGggVHlwZVNjcmlwdDpcbiAqIGBgYHN2ZWx0ZVxuICogPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAqIFx0aW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50LWxpYnJhcnlcIjtcbiAqIDwvc2NyaXB0PlxuICogPE15Q29tcG9uZW50IGZvbz17J2Jhcid9IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyMjIFdoeSBub3QgbWFrZSB0aGlzIHBhcnQgb2YgYFN2ZWx0ZUNvbXBvbmVudChEZXYpYD9cbiAqIEJlY2F1c2VcbiAqIGBgYHRzXG4gKiBjbGFzcyBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogY29uc3QgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50ID0gQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQ7XG4gKiBgYGBcbiAqIHdpbGwgdGhyb3cgYSB0eXBlIGVycm9yLCBzbyB3ZSBuZWVkIHRvIHNlcGFyYXRlIHRoZSBtb3JlIHN0cmljdGx5IHR5cGVkIGNsYXNzLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnRUeXBlZCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudERldiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgSHRtbFRhZ0h5ZHJhdGlvbiwgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUNvbXBvbmVudFR5cGVkLCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF9zdHlsZXMsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFwcGVuZF9lbXB0eV9zdHlsZXNoZWV0LCBhcHBlbmRfaHlkcmF0aW9uLCBhcHBlbmRfaHlkcmF0aW9uX2RldiwgYXBwZW5kX3N0eWxlcywgYXNzaWduLCBhdHRyLCBhdHRyX2RldiwgYXR0cmlidXRlX3RvX29iamVjdCwgYmVmb3JlVXBkYXRlLCBiaW5kLCBiaW5kaW5nX2NhbGxiYWNrcywgYmxhbmtfb2JqZWN0LCBidWJibGUsIGNoZWNrX291dHJvcywgY2hpbGRyZW4sIGNsYWltX2NvbXBvbmVudCwgY2xhaW1fZWxlbWVudCwgY2xhaW1faHRtbF90YWcsIGNsYWltX3NwYWNlLCBjbGFpbV9zdmdfZWxlbWVudCwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNvbXB1dGVfcmVzdF9wcm9wcywgY29tcHV0ZV9zbG90cywgY29uc3RydWN0X3N2ZWx0ZV9jb21wb25lbnQsIGNvbnN0cnVjdF9zdmVsdGVfY29tcG9uZW50X2RldiwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfY29tcG9uZW50LCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlbmRfaHlkcmF0aW5nLCBlc2NhcGUsIGVzY2FwZV9hdHRyaWJ1dGVfdmFsdWUsIGVzY2FwZV9vYmplY3QsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZ2V0QWxsQ29udGV4dHMsIGdldENvbnRleHQsIGdldF9hbGxfZGlydHlfZnJvbV9zY29wZSwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X2N1c3RvbV9lbGVtZW50c19zbG90cywgZ2V0X3Jvb3RfZm9yX3N0eWxlLCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzQ29udGV4dCwgaGFzX3Byb3AsIGhlYWRfc2VsZWN0b3IsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGluc2VydF9kZXYsIGluc2VydF9oeWRyYXRpb24sIGluc2VydF9oeWRyYXRpb25fZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Nyb3Nzb3JpZ2luLCBpc19lbXB0eSwgaXNfZnVuY3Rpb24sIGlzX3Byb21pc2UsIGlzX3ZvaWQsIGxpc3RlbiwgbGlzdGVuX2RldiwgbG9vcCwgbG9vcF9ndWFyZCwgbWVyZ2Vfc3NyX3N0eWxlcywgbWlzc2luZ19jb21wb25lbnQsIG1vdW50X2NvbXBvbmVudCwgbm9vcCwgbm90X2VxdWFsLCBub3csIG51bGxfdG9fZW1wdHksIG9iamVjdF93aXRob3V0X3Byb3BlcnRpZXMsIG9uRGVzdHJveSwgb25Nb3VudCwgb25jZSwgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2ssIHByZXZlbnRfZGVmYXVsdCwgcHJvcF9kZXYsIHF1ZXJ5X3NlbGVjdG9yX2FsbCwgcmFmLCBydW4sIHJ1bl9hbGwsIHNhZmVfbm90X2VxdWFsLCBzY2hlZHVsZV91cGRhdGUsIHNlbGVjdF9tdWx0aXBsZV92YWx1ZSwgc2VsZWN0X29wdGlvbiwgc2VsZWN0X29wdGlvbnMsIHNlbGVjdF92YWx1ZSwgc2VsZiwgc2V0Q29udGV4dCwgc2V0X2F0dHJpYnV0ZXMsIHNldF9jdXJyZW50X2NvbXBvbmVudCwgc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhX21hcCwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3JjX3VybF9lcXVhbCwgc3RhcnRfaHlkcmF0aW5nLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB0cnVzdGVkLCB1cGRhdGVfYXdhaXRfYmxvY2tfYnJhbmNoLCB1cGRhdGVfa2V5ZWRfZWFjaCwgdXBkYXRlX3Nsb3QsIHVwZGF0ZV9zbG90X2Jhc2UsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZHluYW1pY19lbGVtZW50LCB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50LCB2YWxpZGF0ZV9lYWNoX2tleXMsIHZhbGlkYXRlX3Nsb3RzLCB2YWxpZGF0ZV9zdG9yZSwgdmFsaWRhdGVfdm9pZF9keW5hbWljX2VsZW1lbnQsIHhsaW5rX2F0dHIgfTtcbiIsICIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCAiPHNjcmlwdCBsYW5nPVwidHNcIj5cbjwvc2NyaXB0PlxuXG48bmF2IGNsYXNzPVwibmF2YmFyXCI+XG4gIDxkaXYgY2xhc3M9XCJuYXZiYXItYnJhbmRcIj5cbiAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCIgaHJlZj1cImh0dHBzOi8vbWFyYzBsOTIuZ2l0aHViLmlvL2FwaS10b29scy9cIj48c3Ryb25nPkFQSSBUb29sczwvc3Ryb25nPjwvYT5cblxuICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItYnVyZ2VyXCIgZGF0YS10YXJnZXQ9XCJteS1uYXZiYXJcIj5cbiAgICAgIDxzcGFuIC8+XG4gICAgICA8c3BhbiAvPlxuICAgICAgPHNwYW4gLz5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cIm15LW5hdmJhclwiIGNsYXNzPVwibmF2YmFyLW1lbnVcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLXN0YXJ0XCI+XG4gICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtIGlzLWFjdGl2ZVwiIGhyZWY9XCIvdG9vbHMvcmVzdEFwaVRvVGV4dFwiPlJFU1QgQXBpIHRvIFRleHQ8L2E+XG4gICAgICA8YSBjbGFzcz1cIm5hdmJhci1pdGVtXCIgaHJlZj1cIi90b29scy9hcGlUb1NwcmVhZHNoZWV0XCI+QVBJIHRvIFNwcmVhZHNoZWV0PC9hPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm5hdmJhci1lbmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hcmMwbDkyL2FwaS10b29scy9pc3N1ZXMvbmV3L2Nob29zZVwiPjxzdHJvbmc+RmVlZGJhY2tzPC9zdHJvbmc+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmF2PlxuXG48c3R5bGU+XG4gIC5uYXZiYXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICB9XG4gIC5uYXZiYXIgLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICB9XG48L3N0eWxlPlxuIiwgImNvbnN0IGRpY3Rpb25hcnlBcGlVcmkgPSAnaHR0cHM6Ly9hcGkuZGljdGlvbmFyeWFwaS5kZXYvYXBpL3YyL2VudHJpZXMvZW4vJ1xyXG5cclxuaW50ZXJmYWNlIERpY3Rpb25hcnlBcGlSZXN1bHQge1xyXG4gICAgd29yZDogc3RyaW5nXHJcbiAgICBtZWFuaW5nczoge1xyXG4gICAgICAgIHBhcnRPZlNwZWVjaDogc3RyaW5nXHJcbiAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgZGVmaW5pdGlvbjogc3RyaW5nXHJcbiAgICAgICAgfVtdXHJcbiAgICB9W11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVJlc3BvbnNlIHtcclxuICAgIGZvdW5kOiBib29sZWFuXHJcbiAgICBzdGF0czoge1xyXG4gICAgICAgIG5vdW46IG51bWJlclxyXG4gICAgICAgIHZlcmI6IG51bWJlclxyXG4gICAgICAgIGFkamVjdGl2ZTogbnVtYmVyXHJcbiAgICB9XHJcbiAgICB0eXBlOiB7XHJcbiAgICAgICAgaXNOb3VuOiBib29sZWFuXHJcbiAgICAgICAgaXNWZXJiOiBib29sZWFuXHJcbiAgICAgICAgaXNBZGplY3RpdmU6IGJvb2xlYW5cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVR5cGUocXVlcnlSZXNwb25zZTogUXVlcnlSZXNwb25zZSk6IHZvaWQge1xyXG4gICAgaWYgKHF1ZXJ5UmVzcG9uc2Uuc3RhdHMubm91biA+PSBxdWVyeVJlc3BvbnNlLnN0YXRzLnZlcmIgJiYgcXVlcnlSZXNwb25zZS5zdGF0cy5ub3VuID49IHF1ZXJ5UmVzcG9uc2Uuc3RhdHMuYWRqZWN0aXZlKSB7XHJcbiAgICAgICAgcXVlcnlSZXNwb25zZS50eXBlLmlzTm91biA9IHRydWVcclxuICAgIH1cclxuICAgIGlmIChxdWVyeVJlc3BvbnNlLnN0YXRzLnZlcmIgPj0gcXVlcnlSZXNwb25zZS5zdGF0cy5ub3VuICYmIHF1ZXJ5UmVzcG9uc2Uuc3RhdHMudmVyYiA+PSBxdWVyeVJlc3BvbnNlLnN0YXRzLmFkamVjdGl2ZSkge1xyXG4gICAgICAgIHF1ZXJ5UmVzcG9uc2UudHlwZS5pc1ZlcmIgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBpZiAocXVlcnlSZXNwb25zZS5zdGF0cy5hZGplY3RpdmUgPj0gcXVlcnlSZXNwb25zZS5zdGF0cy5ub3VuICYmIHF1ZXJ5UmVzcG9uc2Uuc3RhdHMuYWRqZWN0aXZlID49IHF1ZXJ5UmVzcG9uc2Uuc3RhdHMudmVyYikge1xyXG4gICAgICAgIHF1ZXJ5UmVzcG9uc2UudHlwZS5pc0FkamVjdGl2ZSA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFN0YXRzVG9QZXJjZW50YWdlKHF1ZXJ5UmVzcG9uc2U6IFF1ZXJ5UmVzcG9uc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRvdGFsID0gTWF0aC5tYXgoMSwgcXVlcnlSZXNwb25zZS5zdGF0cy5ub3VuICsgcXVlcnlSZXNwb25zZS5zdGF0cy52ZXJiICsgcXVlcnlSZXNwb25zZS5zdGF0cy5hZGplY3RpdmUpXHJcbiAgICBxdWVyeVJlc3BvbnNlLnN0YXRzLm5vdW4gPSBNYXRoLnJvdW5kKHF1ZXJ5UmVzcG9uc2Uuc3RhdHMubm91biAvIHRvdGFsICogMTAwKVxyXG4gICAgcXVlcnlSZXNwb25zZS5zdGF0cy52ZXJiID0gTWF0aC5yb3VuZChxdWVyeVJlc3BvbnNlLnN0YXRzLnZlcmIgLyB0b3RhbCAqIDEwMClcclxuICAgIHF1ZXJ5UmVzcG9uc2Uuc3RhdHMuYWRqZWN0aXZlID0gTWF0aC5yb3VuZChxdWVyeVJlc3BvbnNlLnN0YXRzLmFkamVjdGl2ZSAvIHRvdGFsICogMTAwKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcXVlcnlEaWN0aW9uYXJ5ID0gYXN5bmMgKHdvcmQ6IHN0cmluZyk6IFByb21pc2U8UXVlcnlSZXNwb25zZT4gPT4ge1xyXG4gICAgY29uc3QgcXVlcnlSZXNwb25zZTogUXVlcnlSZXNwb25zZSA9IHtcclxuICAgICAgICBmb3VuZDogdHJ1ZSxcclxuICAgICAgICBzdGF0czogeyBub3VuOiAwLCB2ZXJiOiAwLCBhZGplY3RpdmU6IDAgfSxcclxuICAgICAgICB0eXBlOiB7IGlzTm91bjogZmFsc2UsIGlzVmVyYjogZmFsc2UsIGlzQWRqZWN0aXZlOiBmYWxzZSB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkaWN0aW9uYXJ5QXBpVXJpICsgZW5jb2RlVVJJQ29tcG9uZW50KHdvcmQpLCB7IG1ldGhvZDogJ0dFVCcgfSlcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBxdWVyeVJlc3BvbnNlLmZvdW5kID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gcXVlcnlSZXNwb25zZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSBhcyBEaWN0aW9uYXJ5QXBpUmVzdWx0W11cclxuXHJcbiAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXNwb25zZUpzb24pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IG1lYW5pbmcgb2YgcmVzdWx0Lm1lYW5pbmdzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobWVhbmluZy5wYXJ0T2ZTcGVlY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ25vdW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UmVzcG9uc2Uuc3RhdHMubm91biArPSBtZWFuaW5nLmRlZmluaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlICd2ZXJiJzpcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVJlc3BvbnNlLnN0YXRzLnZlcmIgKz0gbWVhbmluZy5kZWZpbml0aW9ucy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWRqZWN0aXZlJzpcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVJlc3BvbnNlLnN0YXRzLmFkamVjdGl2ZSArPSBtZWFuaW5nLmRlZmluaXRpb25zLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHV0ZVR5cGUocXVlcnlSZXNwb25zZSlcclxuICAgIGNvbnZlcnRTdGF0c1RvUGVyY2VudGFnZShxdWVyeVJlc3BvbnNlKVxyXG4gICAgcmV0dXJuIHF1ZXJ5UmVzcG9uc2VcclxufVxyXG5cclxuIiwgImNvbnN0IHBsdXJhbGl6ZSA9IHJlcXVpcmUoJ3BsdXJhbGl6ZScpXHJcbmltcG9ydCB7IHF1ZXJ5RGljdGlvbmFyeSB9IGZyb20gJy4vZGljdGlvbmFyeUFwaSdcclxuXHJcbmV4cG9ydCBlbnVtIEFwaVRva2VuVHlwZSB7XHJcbiAgICBWRVJTSU9OID0gJ3ZlcnNpb24nLFxyXG4gICAgQ0FQQUJJTElUWSA9ICdjYXBhYmlsaXR5JyxcclxuICAgIENPTExFQ1RJT04gPSAnY29sbGVjdGlvbicsXHJcbiAgICBSRVNPVVJDRSA9ICdyZXNvdXJjZScsXHJcbiAgICBTVUJfUkVTT1VSQ0UgPSAnc3ViLXJlc291cmNlJyxcclxuICAgIENPTlRST0xMRVIgPSAnY29udHJvbGxlcicsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzdEFwaVRvVGV4dFJlc3VsdHMge1xyXG4gICAgZXJyb3JzOiBzdHJpbmdbXVxyXG4gICAgdG9rZW5zOiBBcGlVcmlUb2tlbltdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBpVXJpVG9rZW4ge1xyXG4gICAgdGV4dDogc3RyaW5nXHJcbiAgICB0eXBlOiBBcGlUb2tlblR5cGVcclxuICAgIHdhcm5pbmdzOiBzdHJpbmdbXVxyXG4gICAgYWx0ZXJuYXRpdmVUeXBlczogQXBpVG9rZW5UeXBlW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXN0QXBpVG9UZXh0T3B0aW9ucyB7XHJcbiAgICB2ZXJzaW9uPzogYm9vbGVhblxyXG4gICAgY2FwYWJpbGl0eT86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQXBpTWV0aG9kcyB7XHJcbiAgICBHRVQgPSAnR0VUJyxcclxuICAgIFBPU1QgPSAnUE9TVCcsXHJcbiAgICBQVVQgPSAnUFVUJyxcclxuICAgIFBBVENIID0gJ1BBVENIJyxcclxuICAgIERFTEVURSA9ICdERUxFVEUnLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgTWV0aG9kc1ZlcmJzIHtcclxuICAgIHJlc291cmNlOiB7XHJcbiAgICAgICAgW2sgaW4gQXBpTWV0aG9kc106IChyZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgfVxyXG4gICAgY29sbGVjdGlvbjoge1xyXG4gICAgICAgIFtrIGluIEFwaU1ldGhvZHNdOiAoY29sbGVjdGlvbk5hbWU6IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICB9XHJcbiAgICBzdWJSZXNvdXJjZToge1xyXG4gICAgICAgIFtrIGluIEFwaU1ldGhvZHNdOiAoc3ViUmVzb3VyY2VOYW1lOiBzdHJpbmcsIHJlc291cmNlSWQ6IHN0cmluZywgY29sbGVjdGlvbk5hbWU6IHN0cmluZykgPT4gc3RyaW5nXHJcbiAgICB9XHJcbiAgICBjb250cm9sbGVyOiB7XHJcbiAgICAgICAgY29udHJvbGxlck9uQ29sbGVjdGlvbjogKGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgICAgIGNvbnRyb2xsZXJPblJlc291cmNlOiAoY29udHJvbGxlck5hbWU6IHN0cmluZywgcmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICAgICBjb250cm9sbGVyT25TdWJSZXNvdXJjZTogKGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIHN1YlJlc291cmNlTmFtZTogc3RyaW5nLCByZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgfVxyXG4gICAgbWlkZGxlOiB7XHJcbiAgICAgICAgcmVzb3VyY2VBbmRDb2xsZWN0aW9uOiAocmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSA9PiBzdHJpbmdcclxuICAgICAgICBzdWJSZXNvdXJjZUFuZFJlc291cmNlQW5kQ29sbGVjdGlvbjogKHN1YlJlc291cmNlTmFtZTogc3RyaW5nLCByZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpID0+IHN0cmluZ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBVcmlOb3RDb21wbGV0ZWQgPSAnVXJpIG5vdCBjb21wbGV0ZWQsIGNvbnRpbnVlIHR5cGluZy4uLidcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrSXNOb3VuKHdvcmQ6IHN0cmluZywgd2FybmluZ3M6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBkaWN0aW9uYXJ5UmVzdWx0ID0gYXdhaXQgcXVlcnlEaWN0aW9uYXJ5KHdvcmQpXHJcbiAgICBpZiAoIWRpY3Rpb25hcnlSZXN1bHQuZm91bmQpIHtcclxuICAgICAgICB3YXJuaW5ncy5wdXNoKGBUaGUgd29yZCBcIiR7d29yZH1cIiBpcyBub3QgcHJlc2VudCBpbiB0aGUgZW5nbGlzaCBkaWN0aW9uYXJ5YClcclxuICAgIH0gZWxzZSBpZiAoIWRpY3Rpb25hcnlSZXN1bHQudHlwZS5pc05vdW4pIHtcclxuICAgICAgICB3YXJuaW5ncy5wdXNoKGBUaGUgd29yZCBcIiR7d29yZH1cIiBpcyBub3QgdXN1YWxseSB1c2VkIGFzIG5vdW4gKG5vdW46ICR7ZGljdGlvbmFyeVJlc3VsdC5zdGF0cy5ub3VufSUsIHZlcmI6ICR7ZGljdGlvbmFyeVJlc3VsdC5zdGF0cy52ZXJifSUsIGFkamVjdGl2ZTogJHtkaWN0aW9uYXJ5UmVzdWx0LnN0YXRzLmFkamVjdGl2ZX0lKWApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlVmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcpOiBBcGlVcmlUb2tlbiB7XHJcbiAgICBjb25zdCBwYXJ0OiBBcGlVcmlUb2tlbiA9IHtcclxuICAgICAgICB0eXBlOiBBcGlUb2tlblR5cGUuVkVSU0lPTixcclxuICAgICAgICB0ZXh0OiB2ZXJzaW9uLFxyXG4gICAgICAgIGFsdGVybmF0aXZlVHlwZXM6IFtdLFxyXG4gICAgICAgIHdhcm5pbmdzOiBbXSxcclxuICAgIH1cclxuICAgIGlmICghdmVyc2lvbi5tYXRjaCgvXlt2Vl0/XFxkKyhcXC5cXGQrKT8kLykpIHtcclxuICAgICAgICBwYXJ0Lndhcm5pbmdzLnB1c2goYFRoZSB2ZXJzaW9uIFwiJHt2ZXJzaW9ufVwiIGhhcyBhbiBpbnZhbGlkIHN0cnVjdHVyZS4gRXhwZWN0ZWQgc29tZXRoaW5nIGxpa2U6IHYxYClcclxuICAgIH1cclxuICAgIGlmICghdmVyc2lvbi5tYXRjaCgvXnYvKSkge1xyXG4gICAgICAgIHBhcnQud2FybmluZ3MucHVzaChgVGhlIHZlcnNpb24gXCIke3ZlcnNpb259XCIgc2hvdWxkIHN0YXJ0IHdpdGggYSBsb3dlcmNhc2UgXCJ2XCJgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnRcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VDYXBhYmlsaXR5KGNhcGFiaWxpdHk6IHN0cmluZyk6IFByb21pc2U8QXBpVXJpVG9rZW4+IHtcclxuICAgIGNvbnN0IHBhcnQ6IEFwaVVyaVRva2VuID0ge1xyXG4gICAgICAgIHR5cGU6IEFwaVRva2VuVHlwZS5DQVBBQklMSVRZLFxyXG4gICAgICAgIHRleHQ6IGNhcGFiaWxpdHksXHJcbiAgICAgICAgYWx0ZXJuYXRpdmVUeXBlczogW10sXHJcbiAgICAgICAgd2FybmluZ3M6IFtdLFxyXG4gICAgfVxyXG4gICAgaWYgKCFwbHVyYWxpemUuaXNTaW5ndWxhcihjYXBhYmlsaXR5KSkge1xyXG4gICAgICAgIHBhcnQud2FybmluZ3MucHVzaChgVGhlIGNhcGFiaWxpdHkgXCIke2NhcGFiaWxpdHl9XCIgc2hvdWxkIGJlIGEgc2luZ3VsYXIgd29yZGApXHJcbiAgICB9XHJcbiAgICBhd2FpdCBjaGVja0lzTm91bihjYXBhYmlsaXR5LCBwYXJ0Lndhcm5pbmdzKVxyXG4gICAgcmV0dXJuIHBhcnRcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VDb2xsZWN0aW9uKGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBQcm9taXNlPEFwaVVyaVRva2VuPiB7XHJcbiAgICBjb25zdCBwYXJ0OiBBcGlVcmlUb2tlbiA9IHtcclxuICAgICAgICB0eXBlOiBBcGlUb2tlblR5cGUuQ09MTEVDVElPTixcclxuICAgICAgICB0ZXh0OiBjb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICBhbHRlcm5hdGl2ZVR5cGVzOiBbXSxcclxuICAgICAgICB3YXJuaW5nczogW10sXHJcbiAgICB9XHJcbiAgICBpZiAoIXBsdXJhbGl6ZS5pc1BsdXJhbChjb2xsZWN0aW9uTmFtZSkpIHtcclxuICAgICAgICBwYXJ0Lndhcm5pbmdzLnB1c2goYFRoZSBjb2xsZWN0aW9uIFwiJHtjb2xsZWN0aW9uTmFtZX1cIiBzaG91bGQgYmUgYSBwbHVyYWwgd29yZGApXHJcbiAgICB9XHJcbiAgICBhd2FpdCBjaGVja0lzTm91bihjb2xsZWN0aW9uTmFtZSwgcGFydC53YXJuaW5ncylcclxuICAgIHJldHVybiBwYXJ0XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlUmVzb3VyY2UocmVzb3VyY2VJZDogc3RyaW5nKTogUHJvbWlzZTxBcGlVcmlUb2tlbj4ge1xyXG4gICAgY29uc3QgcGFydDogQXBpVXJpVG9rZW4gPSB7XHJcbiAgICAgICAgdHlwZTogQXBpVG9rZW5UeXBlLlJFU09VUkNFLFxyXG4gICAgICAgIHRleHQ6IHJlc291cmNlSWQsXHJcbiAgICAgICAgYWx0ZXJuYXRpdmVUeXBlczogW10sXHJcbiAgICAgICAgd2FybmluZ3M6IFtdLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnRcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VTdWJSZXNvdXJjZShzdWJSZXNvdXJjZU5hbWU6IHN0cmluZyk6IFByb21pc2U8QXBpVXJpVG9rZW4+IHtcclxuICAgIGNvbnN0IHBhcnQ6IEFwaVVyaVRva2VuID0ge1xyXG4gICAgICAgIHR5cGU6IEFwaVRva2VuVHlwZS5TVUJfUkVTT1VSQ0UsXHJcbiAgICAgICAgdGV4dDogc3ViUmVzb3VyY2VOYW1lLFxyXG4gICAgICAgIGFsdGVybmF0aXZlVHlwZXM6IFtdLFxyXG4gICAgICAgIHdhcm5pbmdzOiBbXSxcclxuICAgIH1cclxuICAgIGlmICghcGx1cmFsaXplLmlzU2luZ3VsYXIoc3ViUmVzb3VyY2VOYW1lKSkge1xyXG4gICAgICAgIHBhcnQud2FybmluZ3MucHVzaChgVGhlIHN1Yi1yZXNvdXJjZSBcIiR7c3ViUmVzb3VyY2VOYW1lfVwiIHNob3VsZCBiZSBhIHNpbmd1bGFyIHdvcmRgKVxyXG4gICAgfVxyXG4gICAgYXdhaXQgY2hlY2tJc05vdW4oc3ViUmVzb3VyY2VOYW1lLCBwYXJ0Lndhcm5pbmdzKVxyXG4gICAgcmV0dXJuIHBhcnRcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlQ29udHJvbGxlcihjb250cm9sbGVyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxBcGlVcmlUb2tlbj4ge1xyXG4gICAgY29uc3QgcGFydDogQXBpVXJpVG9rZW4gPSB7XHJcbiAgICAgICAgdHlwZTogQXBpVG9rZW5UeXBlLkNPTlRST0xMRVIsXHJcbiAgICAgICAgdGV4dDogY29udHJvbGxlck5hbWUsXHJcbiAgICAgICAgYWx0ZXJuYXRpdmVUeXBlczogW10sXHJcbiAgICAgICAgd2FybmluZ3M6IFtdLFxyXG4gICAgfVxyXG4gICAgaWYgKCFwbHVyYWxpemUuaXNTaW5ndWxhcihjb250cm9sbGVyTmFtZSkpIHtcclxuICAgICAgICBwYXJ0Lndhcm5pbmdzLnB1c2goYFRoZSBjb250cm9sbGVyIFwiJHtjb250cm9sbGVyTmFtZX1cIiBzaG91bGQgYmUgYSBzaW5ndWxhciB3b3JkYClcclxuICAgIH1cclxuICAgIC8vIGF3YWl0IGNoZWNrSXNOb3VuKGNvbnRyb2xsZXJOYW1lLCBwYXJ0Lndhcm5pbmdzKVxyXG4gICAgcmV0dXJuIHBhcnRcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VCeVR5cGUodHlwZTogQXBpVG9rZW5UeXBlLCB0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPEFwaVVyaVRva2VuPiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIEFwaVRva2VuVHlwZS5DT0xMRUNUSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcGFyc2VDb2xsZWN0aW9uKHRleHQpXHJcbiAgICAgICAgY2FzZSBBcGlUb2tlblR5cGUuUkVTT1VSQ0U6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBwYXJzZVJlc291cmNlKHRleHQpXHJcbiAgICAgICAgY2FzZSBBcGlUb2tlblR5cGUuU1VCX1JFU09VUkNFOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcGFyc2VTdWJSZXNvdXJjZSh0ZXh0KVxyXG4gICAgICAgIGNhc2UgQXBpVG9rZW5UeXBlLkNPTlRST0xMRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBwYXJzZUNvbnRyb2xsZXIodGV4dClcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcGlUb1Rva2VucyA9IGFzeW5jIChtZXRob2Q6IEFwaU1ldGhvZHMsIHVyaTogc3RyaW5nLCBvcHRpb25zOiBSZXN0QXBpVG9UZXh0T3B0aW9ucyk6IFByb21pc2U8UmVzdEFwaVRvVGV4dFJlc3VsdHM+ID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFJlc3RBcGlUb1RleHRSZXN1bHRzID0geyBlcnJvcnM6IFtdLCB0b2tlbnM6IFtdIH1cclxuICAgIGxldCB1cmlUb2tlbnM6IHN0cmluZ1tdID0gdXJpLnNwbGl0KCcvJykuZmlsdGVyKChwYXJ0KSA9PiBwYXJ0ICE9PSAnJylcclxuICAgIGNvbnN0IG1pblBhcnRzID0gKG9wdGlvbnMudmVyc2lvbiA/IDEgOiAwKSArIChvcHRpb25zLmNhcGFiaWxpdHkgPyAxIDogMCkgKyAxXHJcblxyXG4gICAgaWYgKHVyaVRva2Vucy5sZW5ndGggPj0gbWluUGFydHMpIHtcclxuICAgICAgICBsZXQgdG9rZW5zSW5kZXggPSAwXHJcbiAgICAgICAgaWYgKG9wdGlvbnMudmVyc2lvbikge1xyXG4gICAgICAgICAgICByZXN1bHRzLnRva2Vucy5wdXNoKHBhcnNlVmVyc2lvbih1cmlUb2tlbnNbdG9rZW5zSW5kZXgrK10pKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5jYXBhYmlsaXR5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMudG9rZW5zLnB1c2goYXdhaXQgcGFyc2VDYXBhYmlsaXR5KHVyaVRva2Vuc1t0b2tlbnNJbmRleCsrXSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvZGROb3RFdmVuID0gdHJ1ZVxyXG4gICAgICAgIGxldCBpc0ZpcnN0VG9rZW4gPSB0cnVlXHJcbiAgICAgICAgd2hpbGUgKHRva2Vuc0luZGV4IDwgdXJpVG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc0xhc3RUb2tlbiA9IHRva2Vuc0luZGV4ID09PSB1cmlUb2tlbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICBpZiAob2RkTm90RXZlbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBwYXJzZUNvbGxlY3Rpb24odXJpVG9rZW5zW3Rva2Vuc0luZGV4XSlcclxuICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0xhc3RUb2tlbiB8fCBtZXRob2QgIT09IEFwaU1ldGhvZHMuUE9TVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5hbHRlcm5hdGl2ZVR5cGVzLnB1c2goQXBpVG9rZW5UeXBlLlNVQl9SRVNPVVJDRSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGFzdFRva2VuICYmIG1ldGhvZCA9PT0gQXBpTWV0aG9kcy5QT1NUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmFsdGVybmF0aXZlVHlwZXMucHVzaChBcGlUb2tlblR5cGUuQ09OVFJPTExFUilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnRva2Vucy5wdXNoKHRva2VuKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGFzdFRva2VuICYmIG1ldGhvZCA9PT0gQXBpTWV0aG9kcy5QT1NUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy50b2tlbnMucHVzaChhd2FpdCBwYXJzZUNvbnRyb2xsZXIodXJpVG9rZW5zW3Rva2Vuc0luZGV4XSkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMudG9rZW5zLnB1c2goYXdhaXQgcGFyc2VSZXNvdXJjZSh1cmlUb2tlbnNbdG9rZW5zSW5kZXhdKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvZGROb3RFdmVuID0gIW9kZE5vdEV2ZW5cclxuICAgICAgICAgICAgaXNGaXJzdFRva2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdG9rZW5zSW5kZXgrK1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0cy5lcnJvcnMucHVzaChVcmlOb3RDb21wbGV0ZWQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0c1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVmcmVzaEFwaVRva2VucyA9IGFzeW5jIChtZXRob2Q6IEFwaU1ldGhvZHMsIHRva2VuczogQXBpVXJpVG9rZW5bXSwgdXBkYXRlZEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIGxldCB0b2tlbnNJbmRleCA9IDBcclxuXHJcbiAgICAvLyBTa2lwIHZlcnNpb24gYW5kIGNhcGFiaWxpdHlcclxuICAgIHdoaWxlICh0b2tlbnNJbmRleCA8IHRva2Vucy5sZW5ndGggJiYgKHRva2Vuc1t0b2tlbnNJbmRleF0udHlwZSA9PSBBcGlUb2tlblR5cGUuVkVSU0lPTiB8fCB0b2tlbnNbdG9rZW5zSW5kZXhdLnR5cGUgPT0gQXBpVG9rZW5UeXBlLkNBUEFCSUxJVFkpKSB7XHJcbiAgICAgICAgdG9rZW5zSW5kZXgrK1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXh0VHlwZXMgPSBbQXBpVG9rZW5UeXBlLkNPTExFQ1RJT05dXHJcbiAgICBsZXQgaXNGaXJzdFRva2VuID0gdHJ1ZVxyXG4gICAgd2hpbGUgKHRva2Vuc0luZGV4IDwgdG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW3Rva2Vuc0luZGV4XVxyXG4gICAgICAgIGNvbnN0IGlzTmV4dExhc3RUb2tlbiA9IHRva2Vuc0luZGV4ID09PSB0b2tlbnMubGVuZ3RoIC0gMlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgdG9rZW4sIHRva2Vuc0luZGV4LCBuZXh0VHlwZXMgfSlcclxuICAgICAgICBpZiAobmV4dFR5cGVzLmluZGV4T2YodG9rZW4udHlwZSkgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodG9rZW5zSW5kZXggPT09IHVwZGF0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zW3Rva2Vuc0luZGV4XSA9IGF3YWl0IHBhcnNlQnlUeXBlKHRva2VuLnR5cGUsIHRva2VuLnRleHQpXHJcbiAgICAgICAgICAgICAgICB0b2tlbnNbdG9rZW5zSW5kZXhdLmFsdGVybmF0aXZlVHlwZXMgPSB0b2tlbi5hbHRlcm5hdGl2ZVR5cGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFwaVRva2VuVHlwZS5DT0xMRUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRUeXBlcyA9IFtBcGlUb2tlblR5cGUuUkVTT1VSQ0VdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmV4dExhc3RUb2tlbiAmJiAhaXNGaXJzdFRva2VuICYmIG1ldGhvZCA9PT0gQXBpTWV0aG9kcy5QT1NUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUeXBlcy5wdXNoKEFwaVRva2VuVHlwZS5DT05UUk9MTEVSKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBcGlUb2tlblR5cGUuUkVTT1VSQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFR5cGVzID0gW0FwaVRva2VuVHlwZS5DT0xMRUNUSU9OXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOZXh0TGFzdFRva2VuIHx8IG1ldGhvZCAhPT0gQXBpTWV0aG9kcy5QT1NUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRUeXBlcy5wdXNoKEFwaVRva2VuVHlwZS5TVUJfUkVTT1VSQ0UpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05leHRMYXN0VG9rZW4gJiYgbWV0aG9kID09PSBBcGlNZXRob2RzLlBPU1QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFR5cGVzLnB1c2goQXBpVG9rZW5UeXBlLkNPTlRST0xMRVIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIEFwaVRva2VuVHlwZS5TVUJfUkVTT1VSQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFR5cGVzID0gW0FwaVRva2VuVHlwZS5DT0xMRUNUSU9OXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05leHRMYXN0VG9rZW4gJiYgbWV0aG9kID09PSBBcGlNZXRob2RzLlBPU1QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFR5cGVzLnB1c2goQXBpVG9rZW5UeXBlLkNPTlRST0xMRVIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICBjYXNlIEFwaVRva2VuVHlwZS5DT05UUk9MTEVSOlxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRUeXBlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2Vuc0luZGV4ICE9PSB0b2tlbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRva2VuIHR5cGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGaXJzdFRva2VuID0gZmFsc2VcclxuICAgICAgICAgICAgdG9rZW5zSW5kZXgrK1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRva2Vuc1t0b2tlbnNJbmRleF0gPSBhd2FpdCBwYXJzZUJ5VHlwZShuZXh0VHlwZXNbMF0sIHRva2VuLnRleHQpXHJcbiAgICAgICAgICAgIHRva2Vuc1t0b2tlbnNJbmRleF0uYWx0ZXJuYXRpdmVUeXBlcyA9IG5leHRUeXBlcy5zbGljZSgxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0b2tlbnNcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJvdGF0ZVRva2VuVHlwZSA9ICh0b2tlbnM6IEFwaVVyaVRva2VuW10sIHRvVXBkYXRlSW5kZXg6IG51bWJlcik6IEFwaVVyaVRva2VuW10gPT4ge1xyXG4gICAgY29uc3QgaXRlbVRvQ2hhbmdlID0gdG9rZW5zW3RvVXBkYXRlSW5kZXhdO1xyXG4gICAgaXRlbVRvQ2hhbmdlLmFsdGVybmF0aXZlVHlwZXMucHVzaChpdGVtVG9DaGFuZ2UudHlwZSk7XHJcbiAgICBpdGVtVG9DaGFuZ2UudHlwZSA9IGl0ZW1Ub0NoYW5nZS5hbHRlcm5hdGl2ZVR5cGVzLnNoaWZ0KCk7XHJcbiAgICByZXR1cm4gdG9rZW5zXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcGlUb2tlbnNUb1N0cmluZyA9IChtZXRob2Q6IEFwaU1ldGhvZHMsIHRva2VuczogQXBpVXJpVG9rZW5bXSk6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgdGV4dCA9ICcnXHJcbiAgICBsZXQgdG9rZW5zSW5kZXggPSB0b2tlbnMubGVuZ3RoIC0gMVxyXG4gICAgbGV0IGlzRmlyc3RUb2tlbiA9IHRydWVcclxuXHJcbiAgICB3aGlsZSAodG9rZW5zSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHN3aXRjaCAodG9rZW5zW3Rva2Vuc0luZGV4XS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpVG9rZW5UeXBlLkNPTExFQ1RJT046XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBtZXRob2RzVmVyYi5jb2xsZWN0aW9uW21ldGhvZF0odG9rZW5zW3Rva2Vuc0luZGV4XS50ZXh0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBBcGlUb2tlblR5cGUuUkVTT1VSQ0U6XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5zSW5kZXggPj0gMSAmJiB0b2tlbnNbdG9rZW5zSW5kZXggLSAxXS50eXBlID09PSBBcGlUb2tlblR5cGUuQ09MTEVDVElPTikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0VG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZCAhPT0gQXBpTWV0aG9kcy5QT1NUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IG1ldGhvZHNWZXJiLnJlc291cmNlW21ldGhvZF0odG9rZW5zW3Rva2Vuc0luZGV4XS50ZXh0LCB0b2tlbnNbdG9rZW5zSW5kZXggLSAxXS50ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdFcnJvcjogbWV0aG9kIFBPU1Qgbm90IHN1cHBvcnRlZCBvbiByZXNvdXJjZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IG1ldGhvZHNWZXJiLm1pZGRsZS5yZXNvdXJjZUFuZENvbGxlY3Rpb24odG9rZW5zW3Rva2Vuc0luZGV4XS50ZXh0LCB0b2tlbnNbdG9rZW5zSW5kZXggLSAxXS50ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b2tlbnNJbmRleC0tXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnRXJyb3I6IHRoZSBVUkkgc2hvdWxkIHN0YXJ0IHdpdGggYSBjb2xsZWN0aW9uL3Jlc291cmNlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBBcGlUb2tlblR5cGUuU1VCX1JFU09VUkNFOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRva2Vuc0luZGV4ID49IDIgJiYgdG9rZW5zW3Rva2Vuc0luZGV4IC0gMV0udHlwZSA9PT0gQXBpVG9rZW5UeXBlLlJFU09VUkNFICYmIHRva2Vuc1t0b2tlbnNJbmRleCAtIDJdLnR5cGUgPT09IEFwaVRva2VuVHlwZS5DT0xMRUNUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmlyc3RUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0aG9kICE9PSBBcGlNZXRob2RzLlBPU1QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gbWV0aG9kc1ZlcmIuc3ViUmVzb3VyY2VbbWV0aG9kXSh0b2tlbnNbdG9rZW5zSW5kZXhdLnRleHQsIHRva2Vuc1t0b2tlbnNJbmRleCAtIDFdLnRleHQsIHRva2Vuc1t0b2tlbnNJbmRleCAtIDJdLnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0Vycm9yOiBtZXRob2QgUE9TVCBub3Qgc3VwcG9ydGVkIG9uIHN1Yi1yZXNvdXJjZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IG1ldGhvZHNWZXJiLm1pZGRsZS5zdWJSZXNvdXJjZUFuZFJlc291cmNlQW5kQ29sbGVjdGlvbih0b2tlbnNbdG9rZW5zSW5kZXhdLnRleHQsIHRva2Vuc1t0b2tlbnNJbmRleCAtIDFdLnRleHQsIHRva2Vuc1t0b2tlbnNJbmRleCAtIDJdLnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc0luZGV4IC09IDJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdFcnJvcjogdGhlIFVSSSBzaG91bGQgc3RhcnQgd2l0aCBhIGNvbGxlY3Rpb24vcmVzb3VyY2Uvc3ViLXJlc291cmNlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSBBcGlUb2tlblR5cGUuQ09OVFJPTExFUjpcclxuICAgICAgICAgICAgICAgIGlmIChtZXRob2QgPT09IEFwaU1ldGhvZHMuUE9TVCAmJiBpc0ZpcnN0VG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW5zSW5kZXggPj0gMSAmJiB0b2tlbnNbdG9rZW5zSW5kZXggLSAxXS50eXBlID09PSBBcGlUb2tlblR5cGUuQ09MTEVDVElPTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IG1ldGhvZHNWZXJiLmNvbnRyb2xsZXIuY29udHJvbGxlck9uQ29sbGVjdGlvbih0b2tlbnNbdG9rZW5zSW5kZXhdLnRleHQsIHRva2Vuc1t0b2tlbnNJbmRleCAtIDFdLnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vuc0luZGV4LS1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRva2Vuc0luZGV4ID49IDIgJiYgdG9rZW5zW3Rva2Vuc0luZGV4IC0gMV0udHlwZSA9PT0gQXBpVG9rZW5UeXBlLlJFU09VUkNFICYmIHRva2Vuc1t0b2tlbnNJbmRleCAtIDJdLnR5cGUgPT09IEFwaVRva2VuVHlwZS5DT0xMRUNUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gbWV0aG9kc1ZlcmIuY29udHJvbGxlci5jb250cm9sbGVyT25SZXNvdXJjZSh0b2tlbnNbdG9rZW5zSW5kZXhdLnRleHQsIHRva2Vuc1t0b2tlbnNJbmRleCAtIDFdLnRleHQsIHRva2Vuc1t0b2tlbnNJbmRleCAtIDJdLnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vuc0luZGV4IC09IDJcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRva2Vuc0luZGV4ID49IDMgJiYgdG9rZW5zW3Rva2Vuc0luZGV4IC0gMV0udHlwZSA9PT0gQXBpVG9rZW5UeXBlLlNVQl9SRVNPVVJDRSAmJiB0b2tlbnNbdG9rZW5zSW5kZXggLSAyXS50eXBlID09PSBBcGlUb2tlblR5cGUuUkVTT1VSQ0UgJiYgdG9rZW5zW3Rva2Vuc0luZGV4IC0gM10udHlwZSA9PT0gQXBpVG9rZW5UeXBlLkNPTExFQ1RJT04pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBtZXRob2RzVmVyYi5jb250cm9sbGVyLmNvbnRyb2xsZXJPblN1YlJlc291cmNlKHRva2Vuc1t0b2tlbnNJbmRleF0udGV4dCwgdG9rZW5zW3Rva2Vuc0luZGV4IC0gMV0udGV4dCwgdG9rZW5zW3Rva2Vuc0luZGV4IC0gMl0udGV4dCwgdG9rZW5zW3Rva2Vuc0luZGV4IC0gM10udGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zSW5kZXggLT0gM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdFcnJvcjogaXQgaXMgcG9zc2libGUgdG8gdXNlIGNvbnRyb2xsZXIgb25seSBhdCB0aGUgZW5kIG9mIHRoZSBVUkkgd2l0aCB0aGUgbWV0aG9kIFBPU1QnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2tlbnNJbmRleC0tXHJcbiAgICAgICAgaXNGaXJzdFRva2VuID0gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0XHJcbn1cclxuXHJcblxyXG5jb25zdCBtZXRob2RzVmVyYjogTWV0aG9kc1ZlcmJzID0ge1xyXG4gICAgcmVzb3VyY2U6IHtcclxuICAgICAgICBHRVQ6IChyZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gYFJldHJpZXZlIHRoZSAke3BsdXJhbGl6ZS5zaW5ndWxhcihjb2xsZWN0aW9uTmFtZSl9IHdpdGggaWQgXCIke3Jlc291cmNlSWR9XCJgLFxyXG4gICAgICAgIFBPU1Q6IChyZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gJycsXHJcbiAgICAgICAgUFVUOiAocmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBSZXBsYWNlIHdpdGggdGhlIG9uZSBpbiByZXF1ZXN0LCB0aGUgJHtwbHVyYWxpemUuc2luZ3VsYXIoY29sbGVjdGlvbk5hbWUpfSB3aXRoIGlkIFwiJHtyZXNvdXJjZUlkfVwiYCxcclxuICAgICAgICBQQVRDSDogKHJlc291cmNlSWQ6IHN0cmluZywgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiBgQXBwbHkgdGhlIGNoYW5nZXMgbGlzdGVkIGluIHJlcXVlc3QgdG8gdGhlICR7cGx1cmFsaXplLnNpbmd1bGFyKGNvbGxlY3Rpb25OYW1lKX0gd2l0aCBpZCBcIiR7cmVzb3VyY2VJZH1cImAsXHJcbiAgICAgICAgREVMRVRFOiAocmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBEZWxldGUgdGhlICR7cGx1cmFsaXplLnNpbmd1bGFyKGNvbGxlY3Rpb25OYW1lKX0gd2l0aCBpZCBcIiR7cmVzb3VyY2VJZH1cImAsXHJcbiAgICB9LFxyXG4gICAgY29sbGVjdGlvbjoge1xyXG4gICAgICAgIEdFVDogKGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gYFNlYXJjaCBpbiB0aGUgJHtjb2xsZWN0aW9uTmFtZX1gLFxyXG4gICAgICAgIFBPU1Q6IChjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBDcmVhdGUgYSBuZXcgJHtwbHVyYWxpemUuc2luZ3VsYXIoY29sbGVjdGlvbk5hbWUpfWAsXHJcbiAgICAgICAgUFVUOiAoY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiBgUmVwbGFjZSB3aXRoIHRoZSBsaXN0IGluIHJlcXVlc3QgYWxsIHRoZSAke2NvbGxlY3Rpb25OYW1lfWAsXHJcbiAgICAgICAgUEFUQ0g6IChjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBSZXBsYWNlIHdpdGggdGhlIGxpc3QgaW4gcmVxdWVzdCBhbGwgdGhlICR7Y29sbGVjdGlvbk5hbWV9YCxcclxuICAgICAgICBERUxFVEU6IChjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBEZWxldGUgYWxsIHRoZSAke2NvbGxlY3Rpb25OYW1lfWAsXHJcbiAgICB9LFxyXG4gICAgc3ViUmVzb3VyY2U6IHtcclxuICAgICAgICBHRVQ6IChzdWJSZXNvdXJjZU5hbWU6IHN0cmluZywgcmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBSZXRyaWV2ZSB0aGUgJHtzdWJSZXNvdXJjZU5hbWV9IG9mIHRoZSAke3BsdXJhbGl6ZS5zaW5ndWxhcihjb2xsZWN0aW9uTmFtZSl9IHdpdGggaWQgXCIke3Jlc291cmNlSWR9XCJgLFxyXG4gICAgICAgIFBPU1Q6IChzdWJSZXNvdXJjZU5hbWU6IHN0cmluZywgcmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+ICcnLFxyXG4gICAgICAgIFBVVDogKHN1YlJlc291cmNlTmFtZTogc3RyaW5nLCByZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gYFJlcGxhY2Ugd2l0aCB0aGUgb25lIGluIHJlcXVlc3QsIHRoZSAke3N1YlJlc291cmNlTmFtZX0gb2YgdGhlICR7cGx1cmFsaXplLnNpbmd1bGFyKGNvbGxlY3Rpb25OYW1lKX0gd2l0aCBpZCBcIiR7cmVzb3VyY2VJZH1cImAsXHJcbiAgICAgICAgUEFUQ0g6IChzdWJSZXNvdXJjZU5hbWU6IHN0cmluZywgcmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBBcHBseSB0aGUgY2hhbmdlcyBsaXN0ZWQgaW4gcmVxdWVzdCB0byB0aGUgJHtzdWJSZXNvdXJjZU5hbWV9IG9mIHRoZSAke3BsdXJhbGl6ZS5zaW5ndWxhcihjb2xsZWN0aW9uTmFtZSl9IHdpdGggaWQgXCIke3Jlc291cmNlSWR9XCJgLFxyXG4gICAgICAgIERFTEVURTogKHN1YlJlc291cmNlTmFtZTogc3RyaW5nLCByZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gYERlbGV0ZSB0aGUgJHtzdWJSZXNvdXJjZU5hbWV9IG9mIHRoZSAke3BsdXJhbGl6ZS5zaW5ndWxhcihjb2xsZWN0aW9uTmFtZSl9IHdpdGggaWQgXCIke3Jlc291cmNlSWR9XCJgLFxyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IHtcclxuICAgICAgICBjb250cm9sbGVyT25Db2xsZWN0aW9uOiAoY29udHJvbGxlck5hbWU6IHN0cmluZywgY29sbGVjdGlvbk5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiBgUGVyZm9ybSB0aGUgYWN0aW9uIG9mIFwiJHtjb250cm9sbGVyTmFtZX1cIiBvbiB0aGUgJHtjb2xsZWN0aW9uTmFtZX1gLFxyXG4gICAgICAgIGNvbnRyb2xsZXJPblJlc291cmNlOiAoY29udHJvbGxlck5hbWU6IHN0cmluZywgcmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IGBQZXJmb3JtIHRoZSBhY3Rpb24gb2YgXCIke2NvbnRyb2xsZXJOYW1lfVwiIG9uIHRoZSAke3BsdXJhbGl6ZS5zaW5ndWxhcihjb2xsZWN0aW9uTmFtZSl9IHdpdGggaWQgXCIke3Jlc291cmNlSWR9XCJgLFxyXG4gICAgICAgIGNvbnRyb2xsZXJPblN1YlJlc291cmNlOiAoY29udHJvbGxlck5hbWUsIHN1YlJlc291cmNlTmFtZSwgcmVzb3VyY2VJZCwgY29sbGVjdGlvbk5hbWUpID0+IGBQZXJmb3JtIHRoZSBhY3Rpb24gb2YgXCIke2NvbnRyb2xsZXJOYW1lfVwiIG9uIHRoZSAke3N1YlJlc291cmNlTmFtZX0gb2YgdGhlICR7cGx1cmFsaXplLnNpbmd1bGFyKGNvbGxlY3Rpb25OYW1lKX0gd2l0aCBpZCBcIiR7cmVzb3VyY2VJZH1cImAsXHJcbiAgICB9LFxyXG4gICAgbWlkZGxlOiB7XHJcbiAgICAgICAgcmVzb3VyY2VBbmRDb2xsZWN0aW9uOiAocmVzb3VyY2VJZDogc3RyaW5nLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSA9PiBgLCBvZiB0aGUgJHtwbHVyYWxpemUuc2luZ3VsYXIoY29sbGVjdGlvbk5hbWUpfSB3aXRoIGlkIFwiJHtyZXNvdXJjZUlkfVwiYCxcclxuICAgICAgICBzdWJSZXNvdXJjZUFuZFJlc291cmNlQW5kQ29sbGVjdGlvbjogKHN1YlJlc291cmNlTmFtZTogc3RyaW5nLCByZXNvdXJjZUlkOiBzdHJpbmcsIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmcpID0+IGAsIG9mIHRoZSAke3N1YlJlc291cmNlTmFtZX0gb2YgdGhlICR7cGx1cmFsaXplLnNpbmd1bGFyKGNvbGxlY3Rpb25OYW1lKX0gd2l0aCBpZCBcIiR7cmVzb3VyY2VJZH1cImAsXHJcbiAgICB9LFxyXG59IiwgIjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIsIG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xyXG4gICAgaW1wb3J0IHsgQXBpTWV0aG9kcyB9IGZyb20gJy4vcmVzdEFwaVRvVGV4dCc7XHJcbiAgICBjb25zdCBzdXBwb3J0ZWRNZXRob2RzU3RyID0gT2JqZWN0LmtleXMoQXBpTWV0aG9kcyk7XHJcblxyXG4gICAgbGV0IG1ldGhvZCA9IHN1cHBvcnRlZE1ldGhvZHNTdHJbMF07XHJcbiAgICBsZXQgdXJpID0gJy92MS9yZXNlcnZhdGlvbi9jaGFpbnMvQUFBL2xpbmtzLzEyMzQ1Njc4OTAnO1xyXG4gICAgbGV0IHZlcnNpb24gPSB0cnVlO1xyXG4gICAgbGV0IGNhcGFiaWxpdHkgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XHJcbiAgICBmdW5jdGlvbiBvblVyaUNoYW5nZSgpIHtcclxuICAgICAgICAvLyBSZXdyaXRlIHF1ZXJ5IHBhcmFtZXRlcnNcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIHVybFBhcmFtcy5zZXQoJ21ldGhvZCcsIG1ldGhvZCk7XHJcbiAgICAgICAgdXJsUGFyYW1zLnNldCgndXJpJywgdXJpKTtcclxuICAgICAgICB1cmxQYXJhbXMuc2V0KCd2ZXJzaW9uJywgdmVyc2lvbiA/ICcxJyA6ICcwJyk7XHJcbiAgICAgICAgdXJsUGFyYW1zLnNldCgnY2FwYWJpbGl0eScsIGNhcGFiaWxpdHkgPyAnMScgOiAnMCcpO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCAnPycgKyB1cmxQYXJhbXMudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKCd1cmlDaGFuZ2UnLCB7IG1ldGhvZCwgdXJpLCB2ZXJzaW9uLCBjYXBhYmlsaXR5IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgICAgIC8vIENoZWNrIHF1ZXJ5IHBhcmFtZXRlclxyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ21ldGhvZCcpICYmIHN1cHBvcnRlZE1ldGhvZHNTdHIuaW5kZXhPZih1cmxQYXJhbXMuZ2V0KCdtZXRob2QnKSkgPj0gMCkge1xyXG4gICAgICAgICAgICBtZXRob2QgPSB1cmxQYXJhbXMuZ2V0KCdtZXRob2QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ3VyaScpKSB7XHJcbiAgICAgICAgICAgIHVyaSA9IHVybFBhcmFtcy5nZXQoJ3VyaScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsUGFyYW1zLmhhcygndmVyc2lvbicpKSB7XHJcbiAgICAgICAgICAgIHZlcnNpb24gPSAhIXVybFBhcmFtcy5nZXQoJ3ZlcnNpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ2NhcGFiaWxpdHknKSkge1xyXG4gICAgICAgICAgICBjYXBhYmlsaXR5ID0gISF1cmxQYXJhbXMuZ2V0KCdjYXBhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwYXRjaCgndXJpQ2hhbmdlJywgeyBtZXRob2QsIHVyaSwgdmVyc2lvbiwgY2FwYWJpbGl0eSB9KTtcclxuICAgIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzZWN0aW9uIGNsYXNzPVwiYm94XCI+XHJcbiAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaGFzLWFkZG9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgYmluZDp2YWx1ZT17bWV0aG9kfSBvbjpjaGFuZ2U9e29uVXJpQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIHN1cHBvcnRlZE1ldGhvZHNTdHIgYXMgc3VwcG9ydGVkTWV0aG9kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17c3VwcG9ydGVkTWV0aG9kfT57c3VwcG9ydGVkTWV0aG9kfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGlzLWV4cGFuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0XCIgYmluZDp2YWx1ZT17dXJpfSBvbjppbnB1dD17b25VcmlDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogL3YxL3Jlc2VydmF0aW9uL2NoYWlucy9BQUEvbGlua3MvMTIzNDU2Nzg5MFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWl0ZW0gY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBiaW5kOmNoZWNrZWQ9e3ZlcnNpb259IG9uOmNoYW5nZT17b25VcmlDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlcnNpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtaXRlbSBjb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGJpbmQ6Y2hlY2tlZD17Y2FwYWJpbGl0eX0gb246Y2hhbmdlPXtvblVyaUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FwYWJpbGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbjwvc2VjdGlvbj5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtYWNjZW50KTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwgIjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG4gICAgaW1wb3J0IHR5cGUgeyBBcGlVcmlUb2tlbiB9IGZyb20gJy4vcmVzdEFwaVRvVGV4dCc7XHJcbiAgICBpbXBvcnQgeyBBcGlUb2tlblR5cGUgfSBmcm9tICcuL3Jlc3RBcGlUb1RleHQnO1xyXG4gICAgY29uc3QgcmVzdEFwaVBhcnRUeXBlU3RyaW5ncyA9IE9iamVjdC52YWx1ZXMoQXBpVG9rZW5UeXBlKTtcclxuXHJcbiAgICBleHBvcnQgbGV0IHRva2VuczogQXBpVXJpVG9rZW5bXSA9IFtdO1xyXG4gICAgZXhwb3J0IGxldCB0ZXh0ID0gJyc7XHJcbiAgICAkOiBoYXNFcnJvciA9IHRva2Vucy5maWx0ZXIoKHApID0+IHAud2FybmluZ3MubGVuZ3RoID4gMCkubGVuZ3RoID4gMDtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG4gICAgZnVuY3Rpb24gY2hhbmdlVG9rZW5UeXBlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBkaXNwYXRjaCgnY2hhbmdlVG9rZW5UeXBlJywgeyBpbmRleCB9KTtcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiYm94XCI+XHJcbiAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+PHN0cm9uZz5SZXN1bHQ6PC9zdHJvbmc+PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhZ3MgaGFzLWFkZG9uc1wiPlxyXG4gICAgICAgIHsjZWFjaCB0b2tlbnMgYXMgcGFydCwgaW5kZXh9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLXNlcGFyYXRvclwiPi88L3NwYW4+XHJcbiAgICAgICAgICAgIHsjaWYgcGFydC5hbHRlcm5hdGl2ZVR5cGVzLmxlbmd0aCA+IDB9XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHRpdGxlPXtwYXJ0LnR5cGV9IGNsYXNzPVwidGFnIGlzLXtwYXJ0LnR5cGV9IHtwYXJ0Lndhcm5pbmdzLmxlbmd0aCA+IDAgPyAnaGFzLXdhcm5pbmcnIDogJyd9XCIgb246Y2xpY2s9eygpID0+IGNoYW5nZVRva2VuVHlwZShpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXJ0LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJnaW4tbGVmdFwiPjxzcGFuIGNsYXNzPVwiaWNvblwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYXJyb3dzLXJvdGF0ZVwiIC8+PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7OmVsc2V9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT17cGFydC50eXBlfSBjbGFzcz1cInRhZyBpcy17cGFydC50eXBlfSB7cGFydC53YXJuaW5ncy5sZW5ndGggPiAwID8gJ2hhcy13YXJuaW5nJyA6ICcnfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXJ0LnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIHsvaWZ9XHJcbiAgICAgICAgey9lYWNofVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cclxuICAgICAgICA8cD57dGV4dH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIHsjaWYgaGFzRXJyb3J9XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndhcm5pbmdzXCI+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+V2FybmluZ3M6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICB7I2VhY2ggdG9rZW5zIGFzIHBhcnR9XHJcbiAgICAgICAgICAgICAgICB7I2VhY2ggcGFydC53YXJuaW5ncyBhcyB3YXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtd2FybmluZ1wiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtdHJpYW5nbGUtZXhjbGFtYXRpb25cIiAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dhcm5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgey9lYWNofVxyXG4gICAgICAgICAgICB7L2VhY2h9XHJcbiAgICAgICAgICAgIDxwIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB7L2lmfVxyXG4gICAgPGRpdiBjbGFzcz1cImxldmVsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFncyBoYXMtYWRkb25zIG5vLW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgeyNlYWNoIHJlc3RBcGlQYXJ0VHlwZVN0cmluZ3MgYXMgcGFydFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgbm8tbWFyZ2luIGlzLXtwYXJ0VHlwZX1cIj57cGFydFR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgey9lYWNofVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWl0ZW1cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgICAuYm94IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLWFjY2VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24uaXMtd2FybmluZyB7XHJcbiAgICAgICAgY29sb3I6ICNmZmU4NmU7XHJcbiAgICB9XHJcbiAgICBzcGFuLm1hcmdpbi1sZWZ0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLnRhZyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAudGFncy5uby1tYXJnaW4ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAudGFnIHtcclxuICAgICAgICAmLmlzLXNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4yNWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1ZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaGFzLXdhcm5pbmcge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHdhdnk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLm5vLW1hcmdpbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUGFsZXR0ZTogaHR0cHM6Ly9jb2xvcmtpdC5jby9jb2xvci1wYWxldHRlLWdlbmVyYXRvci9mZjg4OWEtZmZjMmE5LWZmZjJiMy1iOGZiYjUtODFkNWZmLWUxOGFmMS9cclxuICAgICAgICAmLmlzLXZlcnNpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhmYmI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmlzLWNhcGFiaWxpdHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMmIzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmlzLWNvbGxlY3Rpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkNWZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmlzLXJlc291cmNlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODg5YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pcy1zdWItcmVzb3VyY2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMmE5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmlzLWNvbnRyb2xsZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTE4YWYxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwgIjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBleHBvcnQgbGV0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj48c3Ryb25nPkVycm9yczo8L3N0cm9uZz48L3A+XHJcbiAgICA8dWw+XHJcbiAgICAgICAgeyNlYWNoIG1lc3NhZ2VzIGFzIG1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDxsaT57bWVzc2FnZX08L2xpPlxyXG4gICAgICAgIHsvZWFjaH1cclxuICAgIDwvdWw+XHJcbjwvZGl2PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmJveCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZC1hY2NlbnQpO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCAiPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhci5zdmVsdGUnO1xuICBpbXBvcnQgSW5wdXRVcmkgZnJvbSAnLi9pbnB1dFVyaS5zdmVsdGUnO1xuICBpbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0LnN2ZWx0ZSc7XG4gIGltcG9ydCB7IEFwaU1ldGhvZHMsIGFwaVRva2Vuc1RvU3RyaW5nLCBhcGlUb1Rva2VucywgcmVmcmVzaEFwaVRva2Vucywgcm90YXRlVG9rZW5UeXBlLCB0eXBlIFJlc3RBcGlUb1RleHRSZXN1bHRzIH0gZnJvbSAnLi9yZXN0QXBpVG9UZXh0JztcbiAgaW1wb3J0IEVycm9yIGZyb20gJy4vZXJyb3Iuc3ZlbHRlJztcblxuICBsZXQgYXBpVG9rZW5zOiBSZXN0QXBpVG9UZXh0UmVzdWx0cyA9IHsgZXJyb3JzOiBbXSwgdG9rZW5zOiBbXSB9O1xuICBsZXQgYXBpVGV4dDogc3RyaW5nID0gJyc7XG4gIGxldCBtZXRob2Q6IEFwaU1ldGhvZHM7XG5cbiAgLy8gJDogY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYXBpVG9rZW5zLnRva2VucykpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uVXJpQ2hhbmdlKGV2ZW50OiBDdXN0b21FdmVudDx7IG1ldGhvZDogQXBpTWV0aG9kczsgdXJpOiBzdHJpbmc7IHZlcnNpb246IGJvb2xlYW47IGNhcGFiaWxpdHk6IGJvb2xlYW4gfT4pIHtcbiAgICBtZXRob2QgPSBldmVudC5kZXRhaWwubWV0aG9kO1xuICAgIGFwaVRva2VucyA9IGF3YWl0IGFwaVRvVG9rZW5zKG1ldGhvZCwgZXZlbnQuZGV0YWlsLnVyaSwge1xuICAgICAgdmVyc2lvbjogZXZlbnQuZGV0YWlsLnZlcnNpb24sXG4gICAgICBjYXBhYmlsaXR5OiBldmVudC5kZXRhaWwuY2FwYWJpbGl0eSxcbiAgICB9KTtcbiAgICBhcGlUZXh0ID0gYXBpVG9rZW5zVG9TdHJpbmcobWV0aG9kLCBhcGlUb2tlbnMudG9rZW5zKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlVG9rZW5UeXBlKGV2ZW50OiBDdXN0b21FdmVudDx7IGluZGV4OiBudW1iZXIgfT4pIHtcbiAgICBjb25zdCB1cGRhdGVkSW5kZXggPSBldmVudC5kZXRhaWwuaW5kZXg7XG4gICAgaWYgKHVwZGF0ZWRJbmRleCA8IGFwaVRva2Vucy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICBhcGlUb2tlbnMudG9rZW5zID0gcm90YXRlVG9rZW5UeXBlKGFwaVRva2Vucy50b2tlbnMsIHVwZGF0ZWRJbmRleCk7XG4gICAgICBhcGlUb2tlbnMudG9rZW5zID0gYXdhaXQgcmVmcmVzaEFwaVRva2VucyhtZXRob2QsIGFwaVRva2Vucy50b2tlbnMsIHVwZGF0ZWRJbmRleCk7XG4gICAgICBhcGlUZXh0ID0gYXBpVG9rZW5zVG9TdHJpbmcobWV0aG9kLCBhcGlUb2tlbnMudG9rZW5zKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48TmF2YmFyIC8+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxzZWN0aW9uIGNsYXNzPVwiaGVybyBpcy1zbWFsbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZXJvLWJvZHlcIj5cbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+UkVTVCBBcGkgdG8gVGV4dDwvaDE+XG4gICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+XG4gICAgICAgIElucHV0IHlvdXIgYXBpIDxpPm1ldGhvZDwvaT4gYW5kIDxpPlVSSTwvaT4gYW5kIGNoZWNrIHdoYXQgaXMgdGhlIG1lYW5pbmcgb2YgaXQgYWNjb3JkaW5nIHRvIHRoZSBSRVNUIEFQSSBndWlkZWxpbmVzXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPElucHV0VXJpIG9uOnVyaUNoYW5nZT17b25VcmlDaGFuZ2V9IC8+XG4gIHsjaWYgYXBpVG9rZW5zLmVycm9ycy5sZW5ndGggPiAwfVxuICAgIDxFcnJvciBtZXNzYWdlcz17YXBpVG9rZW5zLmVycm9yc30gLz5cbiAgey9pZn1cbiAgeyNpZiBhcGlUb2tlbnMudG9rZW5zLmxlbmd0aCA+IDB9XG4gICAgPFJlc3VsdCB0b2tlbnM9e2FwaVRva2Vucy50b2tlbnN9IHRleHQ9e2FwaVRleHR9IG9uOmNoYW5nZVRva2VuVHlwZT17b25DaGFuZ2VUb2tlblR5cGV9IC8+XG4gIHsvaWZ9XG48L2Rpdj5cblxuPHN0eWxlPlxuICAuaGVyby5pcy1zbWFsbCAuaGVyby1ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgUmVzdEFwaVRvVGV4dCBmcm9tIFwiLi9yZXN0QXBpVG9UZXh0L2luZGV4LnN2ZWx0ZVwiXHJcblxyXG5uZXcgUmVzdEFwaVRvVGV4dCh7IHRhcmdldDogZG9jdW1lbnQuYm9keSB9KVxyXG5cclxubmV3IEV2ZW50U291cmNlKCcvZXNidWlsZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBO0FBRUEsS0FBQyxTQUFVLE1BQU1BLFlBQVc7QUFFMUIsVUFBSSxPQUFPLGNBQVksY0FBYyxPQUFPLFlBQVksWUFBWSxPQUFPLFdBQVcsVUFBVTtBQUU5RixlQUFPLFVBQVVBLFdBQVU7QUFBQSxNQUM3QixXQUFXLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUVyRCxlQUFPLFdBQVk7QUFDakIsaUJBQU9BLFdBQVU7QUFBQSxRQUNuQixDQUFDO0FBQUEsTUFDSCxPQUFPO0FBRUwsYUFBSyxZQUFZQSxXQUFVO0FBQUEsTUFDN0I7QUFBQSxJQUNGLEdBQUcsU0FBTSxX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QUMsQ0FBQztBQUFBLE1BQ25ELENBQUM7QUFLRDtBQUFBO0FBQUEsUUFFRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxR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Ozs7Ozs7O0lBTHpCLElBQVcsQ0FBQTtFQUFBOzs7SUFDOUIsSUFBUyxDQUFBLEVBQUMsT0FBTyxTQUFTLEtBQUNDLG1CQUFBLEdBQUE7Ozs7SUFHM0IsSUFBUyxDQUFBLEVBQUMsT0FBTyxTQUFTLEtBQUNDLGlCQUFBLEdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJsQyxhQWdCSyxRQUFBLE1BQUEsTUFBQTtBQWZILGFBT1MsTUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7OztRQUVKRixLQUFTLENBQUEsRUFBQyxPQUFPLFNBQVM7UUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUczQkEsS0FBUyxDQUFBLEVBQUMsT0FBTyxTQUFTO1FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUF2QzVCLFlBQVMsRUFBMkIsUUFBTSxDQUFBLEdBQU0sUUFBTSxDQUFBLEVBQUE7TUFDdEQsVUFBa0I7TUFDbEI7V0FJVyxZQUFZLE9BQThGOztBQUN2SCxlQUFTLE1BQU0sT0FBTztzQkFDdEIsWUFBUyxNQUFTLFlBQVksUUFBUSxNQUFNLE9BQU8sS0FBRztRQUNwRCxTQUFTLE1BQU0sT0FBTztRQUN0QixZQUFZLE1BQU0sT0FBTzs7c0JBRTNCLFVBQVUsa0JBQWtCLFFBQVEsVUFBVSxNQUFNLENBQUE7OztXQUd2QyxrQkFBa0IsT0FBcUM7O1lBQzlELGVBQWUsTUFBTSxPQUFPO1VBQzlCLGVBQWUsVUFBVSxPQUFPLFFBQU07d0JBQ3hDLFVBQVUsU0FBUyxnQkFBZ0IsVUFBVSxRQUFRLFlBQVksR0FBQSxTQUFBO3dCQUNqRSxVQUFVLFNBQU0sTUFBUyxpQkFBaUIsUUFBUSxVQUFVLFFBQVEsWUFBWSxHQUFBLFNBQUE7d0JBQ2hGLFVBQVUsa0JBQWtCLFFBQVEsVUFBVSxNQUFNLENBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMUQsSUFBSSxzQkFBYyxFQUFFLFFBQVEsU0FBUyxLQUFLLENBQUM7QUFFM0MsSUFBSSxZQUFZLFVBQVUsRUFBRSxpQkFBaUIsVUFBVSxNQUFNLFNBQVMsT0FBTyxDQUFDOyIsCiAgIm5hbWVzIjogWyJwbHVyYWxpemUiLCAiZWxlbWVudCIsICJ0ZXh0IiwgImRldGFjaCIsICJpbnN0YW5jZSIsICJjcmVhdGVfZnJhZ21lbnQiLCAiYXBwZW5kX3N0eWxlcyIsICJhdHRyIiwgIkFwaVRva2VuVHlwZSIsICJBcGlNZXRob2RzIiwgInRleHQiLCAiY3R4IiwgImN0eCIsICJ0ZXh0IiwgImN0eCIsICJjdHgiLCAiY3JlYXRlX2lmX2Jsb2NrXzEiLCAiY3JlYXRlX2lmX2Jsb2NrIl0KfQo=

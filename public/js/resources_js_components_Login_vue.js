(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Login.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Login.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Login",
  components: {
    Form: vee_validate__WEBPACK_IMPORTED_MODULE_1__.Form,
    Field: vee_validate__WEBPACK_IMPORTED_MODULE_1__.Field,
    ErrorMessage: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage
  },
  data: function data() {
    var schema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
      username: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Username is required!"),
      password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("Password is required!")
    });
    return {
      loading: false,
      message: "",
      schema: schema
    };
  },
  computed: {
    loggedIn: function loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created: function created() {
    this.$Progress.start();
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  mounted: function mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  methods: {
    handleLogin: function handleLogin(user) {
      var _this = this;
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(function () {
        _this.$router.push("/profile");
      }, function (error) {
        _this.loading = false;
        _this.message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row justify-content-center pt-5"
};
var _hoisted_3 = {
  "class": "col-md-6"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "card-title"
}, "Login to your account")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = {
  "class": "form-group"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "username"
}, "Username", -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "form-group"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "password"
}, "Password", -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "form-group"
};
var _hoisted_12 = ["disabled"];
var _hoisted_13 = {
  "class": "spinner-border spinner-border-sm"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Login", -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = {
  key: 0,
  "class": "alert alert-danger",
  role: "alert"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Field");
  var _component_ErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ErrorMessage");
  var _component_Form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Form");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img id=\"profile-img\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" class=\"profile-img-card\" /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Form, {
    onSubmit: $options.handleLogin,
    "validation-schema": $data.schema
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        name: "username",
        type: "text",
        "class": "form-control"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
        name: "username",
        "class": "error-feedback"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Field, {
        name: "password",
        type: "password",
        "class": "form-control"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
        name: "password",
        "class": "error-feedback"
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        "class": "btn btn-primary btn-block",
        disabled: $data.loading
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.loading]]), _hoisted_14], 8 /* PROPS */, _hoisted_12)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [$data.message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.message), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onSubmit", "validation-schema"])])])])])]);
}

/***/ }),

/***/ "./node_modules/property-expr/index.js":
/*!*********************************************!*\
  !*** ./node_modules/property-expr/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */


function Cache(maxSize) {
  this._maxSize = maxSize
  this.clear()
}
Cache.prototype.clear = function () {
  this._size = 0
  this._values = Object.create(null)
}
Cache.prototype.get = function (key) {
  return this._values[key]
}
Cache.prototype.set = function (key, value) {
  this._size >= this._maxSize && this.clear()
  if (!(key in this._values)) this._size++

  return (this._values[key] = value)
}

var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  DIGIT_REGEX = /^\d+$/,
  LEAD_DIGIT_REGEX = /^\d/,
  SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
  MAX_CACHE_SIZE = 512

var pathCache = new Cache(MAX_CACHE_SIZE),
  setCache = new Cache(MAX_CACHE_SIZE),
  getCache = new Cache(MAX_CACHE_SIZE)

var config

module.exports = {
  Cache: Cache,

  split: split,

  normalizePath: normalizePath,

  setter: function (path) {
    var parts = normalizePath(path)

    return (
      setCache.get(path) ||
      setCache.set(path, function setter(obj, value) {
        var index = 0
        var len = parts.length
        var data = obj

        while (index < len - 1) {
          var part = parts[index]
          if (
            part === '__proto__' ||
            part === 'constructor' ||
            part === 'prototype'
          ) {
            return obj
          }

          data = data[parts[index++]]
        }
        data[parts[index]] = value
      })
    )
  },

  getter: function (path, safe) {
    var parts = normalizePath(path)
    return (
      getCache.get(path) ||
      getCache.set(path, function getter(data) {
        var index = 0,
          len = parts.length
        while (index < len) {
          if (data != null || !safe) data = data[parts[index++]]
          else return
        }
        return data
      })
    )
  },

  join: function (segments) {
    return segments.reduce(function (path, part) {
      return (
        path +
        (isQuoted(part) || DIGIT_REGEX.test(part)
          ? '[' + part + ']'
          : (path ? '.' : '') + part)
      )
    }, '')
  },

  forEach: function (path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg)
  },
}

function normalizePath(path) {
  return (
    pathCache.get(path) ||
    pathCache.set(
      path,
      split(path).map(function (part) {
        return part.replace(CLEAN_QUOTES_REGEX, '$2')
      })
    )
  )
}

function split(path) {
  return path.match(SPLIT_REGEX) || ['']
}

function forEach(parts, iter, thisArg) {
  var len = parts.length,
    part,
    idx,
    isArray,
    isBracket

  for (idx = 0; idx < len; idx++) {
    part = parts[idx]

    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"'
      }

      isBracket = isQuoted(part)
      isArray = !isBracket && /^\d+$/.test(part)

      iter.call(thisArg, part, isBracket, isArray, idx, parts)
    }
  }
}

function isQuoted(str) {
  return (
    typeof str === 'string' && str && ["'", '"'].indexOf(str.charAt(0)) !== -1
  )
}

function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX)
}

function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part)
}

function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part))
}


/***/ }),

/***/ "./node_modules/tiny-case/index.js":
/*!*****************************************!*\
  !*** ./node_modules/tiny-case/index.js ***!
  \*****************************************/
/***/ ((module) => {

const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g

const words = (str) => str.match(reWords) || []

const upperFirst = (str) => str[0].toUpperCase() + str.slice(1)

const join = (str, d) => words(str).join(d).toLowerCase()

const camelCase = (str) =>
  words(str).reduce(
    (acc, next) =>
      `${acc}${
        !acc
          ? next.toLowerCase()
          : next[0].toUpperCase() + next.slice(1).toLowerCase()
      }`,
    '',
  )

const pascalCase = (str) => upperFirst(camelCase(str))

const snakeCase = (str) => join(str, '_')

const kebabCase = (str) => join(str, '-')

const sentenceCase = (str) => upperFirst(join(str, ' '))

const titleCase = (str) => words(str).map(upperFirst).join(' ')

module.exports = {
  words,
  upperFirst,
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  sentenceCase,
  titleCase,
}


/***/ }),

/***/ "./node_modules/toposort/index.js":
/*!****************************************!*\
  !*** ./node_modules/toposort/index.js ***!
  \****************************************/
/***/ ((module) => {


/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */

module.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges)
}

module.exports.array = toposort

function toposort(nodes, edges) {
  var cursor = nodes.length
    , sorted = new Array(cursor)
    , visited = {}
    , i = cursor
    // Better data structures make algorithm much faster.
    , outgoingEdges = makeOutgoingEdges(edges)
    , nodesHash = makeNodesHash(nodes)

  // check for unknown nodes
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error('Unknown node. There is an unknown node in the supplied edges.')
    }
  })

  while (i--) {
    if (!visited[i]) visit(nodes[i], i, new Set())
  }

  return sorted

  function visit(node, i, predecessors) {
    if(predecessors.has(node)) {
      var nodeRep
      try {
        nodeRep = ", node was:" + JSON.stringify(node)
      } catch(e) {
        nodeRep = ""
      }
      throw new Error('Cyclic dependency' + nodeRep)
    }

    if (!nodesHash.has(node)) {
      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
    }

    if (visited[i]) return;
    visited[i] = true

    var outgoing = outgoingEdges.get(node) || new Set()
    outgoing = Array.from(outgoing)

    if (i = outgoing.length) {
      predecessors.add(node)
      do {
        var child = outgoing[--i]
        visit(child, nodesHash.get(child), predecessors)
      } while (i)
      predecessors.delete(node)
    }

    sorted[--cursor] = node
  }
}

function uniqueNodes(arr){
  var res = new Set()
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i]
    res.add(edge[0])
    res.add(edge[1])
  }
  return Array.from(res)
}

function makeOutgoingEdges(arr){
  var edges = new Map()
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i]
    if (!edges.has(edge[0])) edges.set(edge[0], new Set())
    if (!edges.has(edge[1])) edges.set(edge[1], new Set())
    edges.get(edge[0]).add(edge[1])
  }
  return edges
}

function makeNodesHash(arr){
  var res = new Map()
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i)
  }
  return res
}


/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessage": () => (/* binding */ ErrorMessage),
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "FieldArray": () => (/* binding */ FieldArray),
/* harmony export */   "FieldContextKey": () => (/* binding */ FieldContextKey),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "FormContextKey": () => (/* binding */ FormContextKey),
/* harmony export */   "IS_ABSENT": () => (/* binding */ IS_ABSENT),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "defineRule": () => (/* binding */ defineRule),
/* harmony export */   "useField": () => (/* binding */ useField),
/* harmony export */   "useFieldArray": () => (/* binding */ useFieldArray),
/* harmony export */   "useFieldError": () => (/* binding */ useFieldError),
/* harmony export */   "useFieldValue": () => (/* binding */ useFieldValue),
/* harmony export */   "useForm": () => (/* binding */ useForm),
/* harmony export */   "useFormErrors": () => (/* binding */ useFormErrors),
/* harmony export */   "useFormValues": () => (/* binding */ useFormValues),
/* harmony export */   "useIsFieldDirty": () => (/* binding */ useIsFieldDirty),
/* harmony export */   "useIsFieldTouched": () => (/* binding */ useIsFieldTouched),
/* harmony export */   "useIsFieldValid": () => (/* binding */ useIsFieldValid),
/* harmony export */   "useIsFormDirty": () => (/* binding */ useIsFormDirty),
/* harmony export */   "useIsFormTouched": () => (/* binding */ useIsFormTouched),
/* harmony export */   "useIsFormValid": () => (/* binding */ useIsFormValid),
/* harmony export */   "useIsSubmitting": () => (/* binding */ useIsSubmitting),
/* harmony export */   "useResetForm": () => (/* binding */ useResetForm),
/* harmony export */   "useSubmitCount": () => (/* binding */ useSubmitCount),
/* harmony export */   "useSubmitForm": () => (/* binding */ useSubmitForm),
/* harmony export */   "useValidateField": () => (/* binding */ useValidateField),
/* harmony export */   "useValidateForm": () => (/* binding */ useValidateForm),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");
/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */



function isCallable(fn) {
    return typeof fn === 'function';
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);
function isIndex(value) {
    return Number(value) >= 0;
}
function toNumber(value) {
    const n = parseFloat(value);
    return isNaN(n) ? value : n;
}

const RULES = {};
/**
 * Adds a custom validator to the list of validation rules.
 */
function defineRule(id, validator) {
    // makes sure new rules are properly formatted.
    guardExtend(id, validator);
    RULES[id] = validator;
}
/**
 * Gets an already defined rule
 */
function resolveRule(id) {
    return RULES[id];
}
/**
 * Guards from extension violations.
 */
function guardExtend(id, validator) {
    if (isCallable(validator)) {
        return;
    }
    throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}

const FormContextKey = Symbol('vee-validate-form');
const FieldContextKey = Symbol('vee-validate-field-instance');
const IS_ABSENT = Symbol('Default empty value');

const isClient = typeof window !== 'undefined';
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}
function isYupValidator(value) {
    return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
    return type === 'checkbox' || type === 'radio';
}
function isContainerValue(value) {
    return isObject(value) || Array.isArray(value);
}
/**
 * True if the value is an empty object or array
 */
function isEmptyContainer(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isObject(value) && Object.keys(value).length === 0;
}
/**
 * Checks if the path opted out of nested fields using `[fieldName]` syntax
 */
function isNotNestedPath(path) {
    return /^\[.+\]$/i.test(path);
}
/**
 * Checks if an element is a native HTML5 multi-select input element
 */
function isNativeMultiSelect(el) {
    return isNativeSelect(el) && el.multiple;
}
/**
 * Checks if an element is a native HTML5 select input element
 */
function isNativeSelect(el) {
    return el.tagName === 'SELECT';
}
/**
 * Checks if a tag name with attrs object will render a native multi-select element
 */
function isNativeMultiSelectNode(tag, attrs) {
    // The falsy value array is the values that Vue won't add the `multiple` prop if it has one of these values
    const hasTruthyBindingValue = ![false, null, undefined, 0].includes(attrs.multiple) && !Number.isNaN(attrs.multiple);
    return tag === 'select' && 'multiple' in attrs && hasTruthyBindingValue;
}
/**
 * Checks if a node should have a `:value` binding or not
 *
 * These nodes should not have a value binding
 * For files, because they are not reactive
 * For multi-selects because the value binding will reset the value
 */
function shouldHaveValueBinding(tag, attrs) {
    return !isNativeMultiSelectNode(tag, attrs) && attrs.type !== 'file' && !hasCheckedAttr(attrs.type);
}
function isFormSubmitEvent(evt) {
    return isEvent(evt) && evt.target && 'submit' in evt.target;
}
function isEvent(evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE and Cypress #3161
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
}
function isPropPresent(obj, prop) {
    return prop in obj && obj[prop] !== IS_ABSENT;
}
/**
 * Compares if two values are the same borrowed from:
 * https://github.com/epoberezkin/fast-deep-equal
 * We added a case for file matching since `Object.keys` doesn't work with Files.
 * */
function isEqual(a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor)
            return false;
        // eslint-disable-next-line no-var
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            // eslint-disable-next-line eqeqeq
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!isEqual(a[i], b[i]))
                    return false;
            return true;
        }
        if (a instanceof Map && b instanceof Map) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            for (i of a.entries())
                if (!isEqual(i[1], b.get(i[0])))
                    return false;
            return true;
        }
        // We added this part for file comparison, arguably a little naive but should work for most cases.
        // #3911
        if (isFile(a) && isFile(b)) {
            if (a.size !== b.size)
                return false;
            if (a.name !== b.name)
                return false;
            if (a.lastModified !== b.lastModified)
                return false;
            if (a.type !== b.type)
                return false;
            return true;
        }
        if (a instanceof Set && b instanceof Set) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            // eslint-disable-next-line eqeqeq
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (a[i] !== b[i])
                    return false;
            return true;
        }
        if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
            return false;
        for (i = length; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
                return false;
        for (i = length; i-- !== 0;) {
            // eslint-disable-next-line no-var
            var key = keys[i];
            if (!isEqual(a[key], b[key]))
                return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    // eslint-disable-next-line no-self-compare
    return a !== a && b !== b;
}
function isFile(a) {
    if (!isClient) {
        return false;
    }
    return a instanceof File;
}

function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

function cleanupNonNestedPath(path) {
    if (isNotNestedPath(path)) {
        return path.replace(/\[|\]/gi, '');
    }
    return path;
}
function getFromPath(object, path, fallback) {
    if (!object) {
        return fallback;
    }
    if (isNotNestedPath(path)) {
        return object[cleanupNonNestedPath(path)];
    }
    const resolvedValue = (path || '')
        .split(/\.|\[(\d+)\]/)
        .filter(Boolean)
        .reduce((acc, propKey) => {
        if (isContainerValue(acc) && propKey in acc) {
            return acc[propKey];
        }
        return fallback;
    }, object);
    return resolvedValue;
}
/**
 * Sets a nested property value in a path, creates the path properties if it doesn't exist
 */
function setInPath(object, path, value) {
    if (isNotNestedPath(path)) {
        object[cleanupNonNestedPath(path)] = value;
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, set it
        if (i === keys.length - 1) {
            acc[keys[i]] = value;
            return;
        }
        // Key does not exist, create a container for it
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            // container can be either an object or an array depending on the next key if it exists
            acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
        }
        acc = acc[keys[i]];
    }
}
function unset(object, key) {
    if (Array.isArray(object) && isIndex(key)) {
        object.splice(Number(key), 1);
        return;
    }
    if (isObject(object)) {
        delete object[key];
    }
}
/**
 * Removes a nested property from object
 */
function unsetPath(object, path) {
    if (isNotNestedPath(path)) {
        delete object[cleanupNonNestedPath(path)];
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, unset it
        if (i === keys.length - 1) {
            unset(acc, keys[i]);
            break;
        }
        // Key does not exist, exit
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            break;
        }
        acc = acc[keys[i]];
    }
    const pathValues = keys.map((_, idx) => {
        return getFromPath(object, keys.slice(0, idx).join('.'));
    });
    for (let i = pathValues.length - 1; i >= 0; i--) {
        if (!isEmptyContainer(pathValues[i])) {
            continue;
        }
        if (i === 0) {
            unset(object, keys[0]);
            continue;
        }
        unset(pathValues[i - 1], keys[i - 1]);
    }
}
/**
 * A typed version of Object.keys
 */
function keysOf(record) {
    return Object.keys(record);
}
// Uses same component provide as its own injections
// Due to changes in https://github.com/vuejs/vue-next/pull/2424
function injectWithSelf(symbol, def = undefined) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    return (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(symbol, def);
}
function warn(message) {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.warn)(`[vee-validate]: ${message}`);
}
/**
 * Ensures we deal with a singular field value
 */
function normalizeField(field) {
    if (Array.isArray(field)) {
        return field[0];
    }
    return field;
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
    if (Array.isArray(currentValue)) {
        const newVal = [...currentValue];
        // Use isEqual since checked object values can possibly fail the equality check #3883
        const idx = newVal.findIndex(v => isEqual(v, checkedValue));
        idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue);
        return newVal;
    }
    return isEqual(currentValue, checkedValue) ? uncheckedValue : checkedValue;
}
/**
 * Creates a throttled function that only invokes the provided function (`func`) at most once per within a given number of milliseconds
 * (`limit`)
 */
function throttle(func, limit) {
    let inThrottle;
    let lastResult;
    return function (...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
            lastResult = func.apply(context, args);
        }
        return lastResult;
    };
}
function debounceAsync(inner, ms = 0) {
    let timer = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(() => {
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach(r => r(result));
            resolves = [];
        }, ms);
        return new Promise(resolve => resolves.push(resolve));
    };
}
function applyModelModifiers(value, modifiers) {
    if (!isObject(modifiers)) {
        return value;
    }
    if (modifiers.number) {
        return toNumber(value);
    }
    return value;
}
function withLatest(fn, onDone) {
    let latestRun;
    return async function runLatest(...args) {
        const pending = fn(...args);
        latestRun = pending;
        const result = await pending;
        if (pending !== latestRun) {
            return result;
        }
        latestRun = undefined;
        onDone(result, args);
        return result;
    };
}
function computedDeep({ get, set }) {
    const baseRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(klona(get()));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(get, newValue => {
        if (isEqual(newValue, baseRef.value)) {
            return;
        }
        baseRef.value = klona(newValue);
    }, {
        deep: true,
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(baseRef, newValue => {
        if (isEqual(newValue, get())) {
            return;
        }
        set(klona(newValue));
    }, {
        deep: true,
    });
    return baseRef;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeChildren = (tag, context, slotProps) => {
    if (!context.slots.default) {
        return context.slots.default;
    }
    if (typeof tag === 'string' || !tag) {
        return context.slots.default(slotProps());
    }
    return {
        default: () => { var _a, _b; return (_b = (_a = context.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a, slotProps()); },
    };
};
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function getBoundValue(el) {
    if (hasValueBinding(el)) {
        return el._value;
    }
    return undefined;
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function hasValueBinding(el) {
    return '_value' in el;
}

function normalizeEventValue(value) {
    if (!isEvent(value)) {
        return value;
    }
    const input = value.target;
    // Vue sets the current bound value on `_value` prop
    // for checkboxes it it should fetch the value binding type as is (boolean instead of string)
    if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
        return getBoundValue(input);
    }
    if (input.type === 'file' && input.files) {
        const files = Array.from(input.files);
        return input.multiple ? files : files[0];
    }
    if (isNativeMultiSelect(input)) {
        return Array.from(input.options)
            .filter(opt => opt.selected && !opt.disabled)
            .map(getBoundValue);
    }
    // makes sure we get the actual `option` bound value
    // #3440
    if (isNativeSelect(input)) {
        const selectedOption = Array.from(input.options).find(opt => opt.selected);
        return selectedOption ? getBoundValue(selectedOption) : input.value;
    }
    return input.value;
}

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    const acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false,
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce((prev, curr) => {
            const params = normalizeParams(rules[curr]);
            if (rules[curr] !== false) {
                prev[curr] = buildParams(params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        return acc;
    }
    return rules.split('|').reduce((prev, rule) => {
        const parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.params);
        return prev;
    }, acc);
}
/**
 * Normalizes a rule param.
 */
function normalizeParams(params) {
    if (params === true) {
        return [];
    }
    if (Array.isArray(params)) {
        return params;
    }
    if (isObject(params)) {
        return params;
    }
    return [params];
}
function buildParams(provided) {
    const mapValueToLocator = (value) => {
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            return createLocator(value.slice(1));
        }
        return value;
    };
    if (Array.isArray(provided)) {
        return provided.map(mapValueToLocator);
    }
    // #3073
    if (provided instanceof RegExp) {
        return [provided];
    }
    return Object.keys(provided).reduce((prev, key) => {
        prev[key] = mapValueToLocator(provided[key]);
        return prev;
    }, {});
}
/**
 * Parses a rule string expression.
 */
const parseRule = (rule) => {
    let params = [];
    const name = rule.split(':')[0];
    if (rule.includes(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return { name, params };
};
function createLocator(value) {
    const locator = (crossTable) => {
        const val = getFromPath(crossTable, value) || crossTable[value];
        return val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(isLocator);
    }
    return keysOf(params)
        .filter(key => isLocator(params[key]))
        .map(key => params[key]);
}

const DEFAULT_CONFIG = {
    generateMessage: ({ field }) => `${field} is not valid.`,
    bails: true,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
const setConfig = (newConf) => {
    currentConfig = Object.assign(Object.assign({}, currentConfig), newConf);
};
const configure = setConfig;

/**
 * Validates a value against the rules.
 */
async function validate(value, rules, options = {}) {
    const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
    const field = {
        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
        rules,
        label: options === null || options === void 0 ? void 0 : options.label,
        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
        formData: (options === null || options === void 0 ? void 0 : options.values) || {},
    };
    const result = await _validate(field, value);
    const errors = result.errors;
    return {
        errors,
        valid: !errors.length,
    };
}
/**
 * Starts the validation process.
 */
async function _validate(field, value) {
    if (isYupValidator(field.rules)) {
        return validateFieldWithYup(value, field.rules, { bails: field.bails });
    }
    // if a generic function or chain of generic functions
    if (isCallable(field.rules) || Array.isArray(field.rules)) {
        const ctx = {
            field: field.label || field.name,
            name: field.name,
            label: field.label,
            form: field.formData,
            value: value,
        };
        // Normalize the pipeline
        const pipeline = Array.isArray(field.rules) ? field.rules : [field.rules];
        const length = pipeline.length;
        const errors = [];
        for (let i = 0; i < length; i++) {
            const rule = pipeline[i];
            const result = await rule(value, ctx);
            const isValid = typeof result !== 'string' && result;
            if (isValid) {
                continue;
            }
            const message = typeof result === 'string' ? result : _generateFieldError(ctx);
            errors.push(message);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
        return {
            errors,
        };
    }
    const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(field.rules) });
    const errors = [];
    const rulesKeys = Object.keys(normalizedContext.rules);
    const length = rulesKeys.length;
    for (let i = 0; i < length; i++) {
        const rule = rulesKeys[i];
        const result = await _test(normalizedContext, value, {
            name: rule,
            params: normalizedContext.rules[rule],
        });
        if (result.error) {
            errors.push(result.error);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
    }
    return {
        errors,
    };
}
/**
 * Handles yup validation
 */
async function validateFieldWithYup(value, validator, opts) {
    var _a;
    const errors = await validator
        .validate(value, {
        abortEarly: (_a = opts.bails) !== null && _a !== void 0 ? _a : true,
    })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
            return err.errors;
        }
        // re-throw the error so we don't hide it
        throw err;
    });
    return {
        errors,
    };
}
/**
 * Tests a single input value against a rule.
 */
async function _test(field, value, rule) {
    const validator = resolveRule(rule.name);
    if (!validator) {
        throw new Error(`No such validator '${rule.name}' exists.`);
    }
    const params = fillTargetValues(rule.params, field.formData);
    const ctx = {
        field: field.label || field.name,
        name: field.name,
        label: field.label,
        value,
        form: field.formData,
        rule: Object.assign(Object.assign({}, rule), { params }),
    };
    const result = await validator(value, params, ctx);
    if (typeof result === 'string') {
        return {
            error: result,
        };
    }
    return {
        error: result ? undefined : _generateFieldError(ctx),
    };
}
/**
 * Generates error messages.
 */
function _generateFieldError(fieldCtx) {
    const message = getConfig().generateMessage;
    if (!message) {
        return 'Field is invalid';
    }
    return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
    const normalize = (value) => {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    if (Array.isArray(params)) {
        return params.map(normalize);
    }
    return Object.keys(params).reduce((acc, param) => {
        acc[param] = normalize(params[param]);
        return acc;
    }, {});
}
async function validateYupSchema(schema, values) {
    const errorObjects = await schema
        .validate(values, { abortEarly: false })
        .then(() => [])
        .catch((err) => {
        // Yup errors have a name prop one them.
        // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name !== 'ValidationError') {
            throw err;
        }
        // list of aggregated errors
        return err.inner || [];
    });
    const results = {};
    const errors = {};
    for (const error of errorObjects) {
        const messages = error.errors;
        results[error.path] = { valid: !messages.length, errors: messages };
        if (messages.length) {
            errors[error.path] = messages[0];
        }
    }
    return {
        valid: !errorObjects.length,
        results,
        errors,
    };
}
async function validateObjectSchema(schema, values, opts) {
    const paths = keysOf(schema);
    const validations = paths.map(async (path) => {
        var _a, _b, _c;
        const strings = (_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0 ? void 0 : _a[path];
        const fieldResult = await validate(getFromPath(values, path), schema[path], {
            name: (strings === null || strings === void 0 ? void 0 : strings.name) || path,
            label: strings === null || strings === void 0 ? void 0 : strings.label,
            values: values,
            bails: (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0 ? void 0 : _b[path]) !== null && _c !== void 0 ? _c : true,
        });
        return Object.assign(Object.assign({}, fieldResult), { path });
    });
    let isAllValid = true;
    const validationResults = await Promise.all(validations);
    const results = {};
    const errors = {};
    for (const result of validationResults) {
        results[result.path] = {
            valid: result.valid,
            errors: result.errors,
        };
        if (!result.valid) {
            isAllValid = false;
            errors[result.path] = result.errors[0];
        }
    }
    return {
        valid: isAllValid,
        results,
        errors,
    };
}

let ID_COUNTER = 0;
function useFieldState(path, init) {
    const { value, initialValue, setInitialValue } = _useFieldValue(path, init.modelValue, init.form);
    const { errorMessage, errors, setErrors } = _useFieldErrors(path, init.form);
    const meta = _useFieldMeta(value, initialValue, errors);
    const id = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER;
    function setState(state) {
        var _a;
        if ('value' in state) {
            value.value = state.value;
        }
        if ('errors' in state) {
            setErrors(state.errors);
        }
        if ('touched' in state) {
            meta.touched = (_a = state.touched) !== null && _a !== void 0 ? _a : meta.touched;
        }
        if ('initialValue' in state) {
            setInitialValue(state.initialValue);
        }
    }
    return {
        id,
        path,
        value,
        initialValue,
        meta,
        errors,
        errorMessage,
        setState,
    };
}
/**
 * Creates the field value and resolves the initial value
 */
function _useFieldValue(path, modelValue, form) {
    const modelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelValue));
    function resolveInitialValue() {
        if (!form) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelRef);
        }
        return getFromPath(form.meta.value.initialValues, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelRef));
    }
    function setInitialValue(value) {
        if (!form) {
            modelRef.value = value;
            return;
        }
        form.stageInitialValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), value, true);
    }
    const initialValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(resolveInitialValue);
    // if no form is associated, use a regular ref.
    if (!form) {
        const value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(resolveInitialValue());
        return {
            value,
            initialValue,
            setInitialValue,
        };
    }
    // to set the initial value, first check if there is a current value, if there is then use it.
    // otherwise use the configured initial value if it exists.
    // prioritize model value over form values
    // #3429
    const currentValue = modelValue ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(modelValue) : getFromPath(form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue));
    form.stageInitialValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), currentValue, true);
    // otherwise use a computed setter that triggers the `setFieldValue`
    const value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)({
        get() {
            return getFromPath(form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path));
        },
        set(newVal) {
            form.setFieldValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), newVal);
        },
    });
    return {
        value,
        initialValue,
        setInitialValue,
    };
}
/**
 * Creates meta flags state and some associated effects with them
 */
function _useFieldMeta(currentValue, initialValue, errors) {
    const meta = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        touched: false,
        pending: false,
        valid: true,
        validated: !!(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(errors).length,
        initialValue: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue)),
        dirty: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return !isEqual((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(currentValue), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValue));
        }),
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(errors, value => {
        meta.valid = !value.length;
    }, {
        immediate: true,
        flush: 'sync',
    });
    return meta;
}
/**
 * Creates the error message state for the field state
 */
function _useFieldErrors(path, form) {
    function normalizeErrors(messages) {
        if (!messages) {
            return [];
        }
        return Array.isArray(messages) ? messages : [messages];
    }
    if (!form) {
        const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        return {
            errors,
            errorMessage: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => errors.value[0]),
            setErrors: (messages) => {
                errors.value = normalizeErrors(messages);
            },
        };
    }
    const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => form.errorBag.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)] || []);
    return {
        errors,
        errorMessage: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => errors.value[0]),
        setErrors: (messages) => {
            form.setFieldErrorBag((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path), normalizeErrors(messages));
        },
    };
}

function installDevtoolsPlugin(app) {
    if ((true)) {
        (0,_vue_devtools_api__WEBPACK_IMPORTED_MODULE_1__.setupDevtoolsPlugin)({
            id: 'vee-validate-devtools-plugin',
            label: 'VeeValidate Plugin',
            packageName: 'vee-validate',
            homepage: 'https://vee-validate.logaretm.com/v4',
            app,
            logo: 'https://vee-validate.logaretm.com/v4/logo.png',
        }, setupApiHooks);
    }
}
const DEVTOOLS_FORMS = {};
const DEVTOOLS_FIELDS = {};
let API;
const refreshInspector = throttle(() => {
    setTimeout(async () => {
        await (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
        API === null || API === void 0 ? void 0 : API.sendInspectorState(INSPECTOR_ID);
        API === null || API === void 0 ? void 0 : API.sendInspectorTree(INSPECTOR_ID);
    }, 100);
}, 100);
function registerFormWithDevTools(form) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FORMS[form.formId] = Object.assign({}, form);
    DEVTOOLS_FORMS[form.formId]._vm = vm;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
        delete DEVTOOLS_FORMS[form.formId];
        refreshInspector();
    });
    refreshInspector();
}
function registerSingleFieldWithDevtools(field) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    if (!API) {
        const app = vm === null || vm === void 0 ? void 0 : vm.appContext.app;
        if (!app) {
            return;
        }
        installDevtoolsPlugin(app);
    }
    DEVTOOLS_FIELDS[field.id] = Object.assign({}, field);
    DEVTOOLS_FIELDS[field.id]._vm = vm;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
        delete DEVTOOLS_FIELDS[field.id];
        refreshInspector();
    });
    refreshInspector();
}
const INSPECTOR_ID = 'vee-validate-inspector';
const COLORS = {
    error: 0xbd4b4b,
    success: 0x06d77b,
    unknown: 0x54436b,
    white: 0xffffff,
    black: 0x000000,
    blue: 0x035397,
    purple: 0xb980f0,
    orange: 0xf5a962,
    gray: 0xbbbfca,
};
let SELECTED_NODE = null;
function setupApiHooks(api) {
    API = api;
    api.addInspector({
        id: INSPECTOR_ID,
        icon: 'rule',
        label: 'vee-validate',
        noSelectionText: 'Select a vee-validate node to inspect',
        actions: [
            {
                icon: 'done_outline',
                tooltip: 'Validate selected item',
                action: async () => {
                    if (!SELECTED_NODE) {
                        console.error('There is not a valid selected vee-validate node or component');
                        return;
                    }
                    const result = await SELECTED_NODE.validate();
                    console.log(result);
                },
            },
            {
                icon: 'delete_sweep',
                tooltip: 'Clear validation state of the selected item',
                action: () => {
                    if (!SELECTED_NODE) {
                        console.error('There is not a valid selected vee-validate node or component');
                        return;
                    }
                    if ('id' in SELECTED_NODE) {
                        SELECTED_NODE.resetField();
                        return;
                    }
                    SELECTED_NODE.resetForm();
                },
            },
        ],
    });
    api.on.getInspectorTree(payload => {
        if (payload.inspectorId !== INSPECTOR_ID) {
            return;
        }
        const forms = Object.values(DEVTOOLS_FORMS);
        const fields = Object.values(DEVTOOLS_FIELDS);
        payload.rootNodes = [
            ...forms.map(mapFormForDevtoolsInspector),
            ...fields.map(field => mapFieldForDevtoolsInspector(field)),
        ];
    });
    api.on.getInspectorState((payload, ctx) => {
        if (payload.inspectorId !== INSPECTOR_ID || ctx.currentTab !== `custom-inspector:${INSPECTOR_ID}`) {
            return;
        }
        const { form, field, type } = decodeNodeId(payload.nodeId);
        if (form && type === 'form') {
            payload.state = buildFormState(form);
            SELECTED_NODE = form;
            return;
        }
        if (field && type === 'field') {
            payload.state = buildFieldState(field);
            SELECTED_NODE = field;
            return;
        }
        SELECTED_NODE = null;
    });
}
function mapFormForDevtoolsInspector(form) {
    const { textColor, bgColor } = getTagTheme(form);
    const formTreeNodes = {};
    Object.values(form.fieldsByPath.value).forEach(field => {
        const fieldInstance = Array.isArray(field) ? field[0] : field;
        if (!fieldInstance) {
            return;
        }
        setInPath(formTreeNodes, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(fieldInstance.name), mapFieldForDevtoolsInspector(fieldInstance, form));
    });
    function buildFormTree(tree, path = []) {
        const key = [...path].pop();
        if ('id' in tree) {
            return Object.assign(Object.assign({}, tree), { label: key || tree.label });
        }
        if (isObject(tree)) {
            return {
                id: `${path.join('.')}`,
                label: key || '',
                children: Object.keys(tree).map(key => buildFormTree(tree[key], [...path, key])),
            };
        }
        if (Array.isArray(tree)) {
            return {
                id: `${path.join('.')}`,
                label: `${key}[]`,
                children: tree.map((c, idx) => buildFormTree(c, [...path, String(idx)])),
            };
        }
        return { id: '', label: '', children: [] };
    }
    const { children } = buildFormTree(formTreeNodes);
    return {
        id: encodeNodeId(form),
        label: 'Form',
        children,
        tags: [
            {
                label: 'Form',
                textColor,
                backgroundColor: bgColor,
            },
            {
                label: `${Object.keys(form.fieldsByPath.value).length} fields`,
                textColor: COLORS.white,
                backgroundColor: COLORS.unknown,
            },
        ],
    };
}
function mapFieldForDevtoolsInspector(field, form) {
    const fieldInstance = normalizeField(field);
    const { textColor, bgColor } = getTagTheme(fieldInstance);
    const isGroup = Array.isArray(field) && field.length > 1;
    return {
        id: encodeNodeId(form, fieldInstance, !isGroup),
        label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(fieldInstance.name),
        children: Array.isArray(field) ? field.map(fieldItem => mapFieldForDevtoolsInspector(fieldItem, form)) : undefined,
        tags: [
            isGroup
                ? undefined
                : {
                    label: 'Field',
                    textColor,
                    backgroundColor: bgColor,
                },
            !form
                ? {
                    label: 'Standalone',
                    textColor: COLORS.black,
                    backgroundColor: COLORS.gray,
                }
                : undefined,
            !isGroup && fieldInstance.type === 'checkbox'
                ? {
                    label: 'Checkbox',
                    textColor: COLORS.white,
                    backgroundColor: COLORS.blue,
                }
                : undefined,
            !isGroup && fieldInstance.type === 'radio'
                ? {
                    label: 'Radio',
                    textColor: COLORS.white,
                    backgroundColor: COLORS.purple,
                }
                : undefined,
            isGroup
                ? {
                    label: 'Group',
                    textColor: COLORS.black,
                    backgroundColor: COLORS.orange,
                }
                : undefined,
        ].filter(Boolean),
    };
}
function encodeNodeId(form, field, encodeIndex = true) {
    const fieldPath = form ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field === null || field === void 0 ? void 0 : field.name) : field === null || field === void 0 ? void 0 : field.id;
    const fieldGroup = fieldPath ? form === null || form === void 0 ? void 0 : form.fieldsByPath.value[fieldPath] : undefined;
    let idx;
    if (encodeIndex && field && Array.isArray(fieldGroup)) {
        idx = fieldGroup.indexOf(field);
    }
    const idObject = { f: form === null || form === void 0 ? void 0 : form.formId, ff: fieldPath, idx, type: field ? 'field' : 'form' };
    return btoa(JSON.stringify(idObject));
}
function decodeNodeId(nodeId) {
    try {
        const idObject = JSON.parse(atob(nodeId));
        const form = DEVTOOLS_FORMS[idObject.f];
        if (!form && idObject.ff) {
            const field = DEVTOOLS_FIELDS[idObject.ff];
            if (!field) {
                return {};
            }
            return {
                type: idObject.type,
                field,
            };
        }
        if (!form) {
            return {};
        }
        const fieldGroup = form.fieldsByPath.value[idObject.ff];
        return {
            type: idObject.type,
            form,
            field: Array.isArray(fieldGroup) ? fieldGroup[idObject.idx || 0] : fieldGroup,
        };
    }
    catch (err) {
        // console.error(`Devtools: [vee-validate] Failed to parse node id ${nodeId}`);
    }
    return {};
}
function buildFieldState(field) {
    const { errors, meta, value } = field;
    return {
        'Field state': [
            { key: 'errors', value: errors.value },
            {
                key: 'initialValue',
                value: meta.initialValue,
            },
            {
                key: 'currentValue',
                value: value.value,
            },
            {
                key: 'touched',
                value: meta.touched,
            },
            {
                key: 'dirty',
                value: meta.dirty,
            },
            {
                key: 'valid',
                value: meta.valid,
            },
        ],
    };
}
function buildFormState(form) {
    const { errorBag, meta, values, isSubmitting, submitCount } = form;
    return {
        'Form state': [
            {
                key: 'submitCount',
                value: submitCount.value,
            },
            {
                key: 'isSubmitting',
                value: isSubmitting.value,
            },
            {
                key: 'touched',
                value: meta.value.touched,
            },
            {
                key: 'dirty',
                value: meta.value.dirty,
            },
            {
                key: 'valid',
                value: meta.value.valid,
            },
            {
                key: 'initialValues',
                value: meta.value.initialValues,
            },
            {
                key: 'currentValues',
                value: values,
            },
            {
                key: 'errors',
                value: keysOf(errorBag.value).reduce((acc, key) => {
                    var _a;
                    const message = (_a = errorBag.value[key]) === null || _a === void 0 ? void 0 : _a[0];
                    if (message) {
                        acc[key] = message;
                    }
                    return acc;
                }, {}),
            },
        ],
    };
}
/**
 * Resolves the tag color based on the form state
 */
function getTagTheme(fieldOrForm) {
    // const fallbackColors = {
    //   bgColor: COLORS.unknown,
    //   textColor: COLORS.white,
    // };
    const isValid = 'id' in fieldOrForm ? fieldOrForm.meta.valid : fieldOrForm.meta.value.valid;
    return {
        bgColor: isValid ? COLORS.success : COLORS.error,
        textColor: isValid ? COLORS.black : COLORS.white,
    };
}

/**
 * Creates a field composite.
 */
function useField(name, rules, opts) {
    if (hasCheckedAttr(opts === null || opts === void 0 ? void 0 : opts.type)) {
        return useCheckboxField(name, rules, opts);
    }
    return _useField(name, rules, opts);
}
function _useField(name, rules, opts) {
    const { initialValue: modelValue, validateOnMount, bails, type, checkedValue, label, validateOnValueUpdate, uncheckedValue, controlled, keepValueOnUnmount, modelPropName, syncVModel, form: controlForm, } = normalizeOptions((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name), opts);
    const injectedForm = controlled ? injectWithSelf(FormContextKey) : undefined;
    const form = controlForm || injectedForm;
    // a flag indicating if the field is about to be removed/unmounted.
    let markedForRemoval = false;
    const { id, value, initialValue, meta, setState, errors, errorMessage } = useFieldState(name, {
        modelValue,
        form,
    });
    if (syncVModel) {
        useVModel({ value, prop: modelPropName, handleChange });
    }
    /**
     * Handles common onBlur meta update
     */
    const handleBlur = () => {
        meta.touched = true;
    };
    const normalizedRules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        let rulesValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(rules);
        const schema = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(form === null || form === void 0 ? void 0 : form.schema);
        if (schema && !isYupValidator(schema)) {
            rulesValue = extractRuleFromSchema(schema, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name)) || rulesValue;
        }
        if (isYupValidator(rulesValue) || isCallable(rulesValue) || Array.isArray(rulesValue)) {
            return rulesValue;
        }
        return normalizeRules(rulesValue);
    });
    async function validateCurrentValue(mode) {
        var _a, _b;
        if (form === null || form === void 0 ? void 0 : form.validateSchema) {
            return (_a = (await form.validateSchema(mode)).results[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name)]) !== null && _a !== void 0 ? _a : { valid: true, errors: [] };
        }
        return validate(value.value, normalizedRules.value, {
            name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(name),
            label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(label),
            values: (_b = form === null || form === void 0 ? void 0 : form.values) !== null && _b !== void 0 ? _b : {},
            bails,
        });
    }
    const validateWithStateMutation = withLatest(async () => {
        meta.pending = true;
        meta.validated = true;
        return validateCurrentValue('validated-only');
    }, result => {
        if (markedForRemoval) {
            result.valid = true;
            result.errors = [];
        }
        setState({ errors: result.errors });
        meta.pending = false;
        return result;
    });
    const validateValidStateOnly = withLatest(async () => {
        return validateCurrentValue('silent');
    }, result => {
        if (markedForRemoval) {
            result.valid = true;
        }
        meta.valid = result.valid;
        return result;
    });
    function validate$1(opts) {
        if ((opts === null || opts === void 0 ? void 0 : opts.mode) === 'silent') {
            return validateValidStateOnly();
        }
        return validateWithStateMutation();
    }
    // Common input/change event handler
    function handleChange(e, shouldValidate = true) {
        const newValue = normalizeEventValue(e);
        value.value = newValue;
        if (!validateOnValueUpdate && shouldValidate) {
            validateWithStateMutation();
        }
    }
    // Runs the initial validation
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        if (validateOnMount) {
            return validateWithStateMutation();
        }
        // validate self initially if no form was handling this
        // forms should have their own initial silent validation run to make things more efficient
        if (!form || !form.validateSchema) {
            validateValidStateOnly();
        }
    });
    function setTouched(isTouched) {
        meta.touched = isTouched;
    }
    let unwatchValue;
    let lastWatchedValue = klona(value.value);
    function watchValue() {
        unwatchValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(value, (val, oldVal) => {
            if (isEqual(val, oldVal) && isEqual(val, lastWatchedValue)) {
                return;
            }
            const validateFn = validateOnValueUpdate ? validateWithStateMutation : validateValidStateOnly;
            validateFn();
            lastWatchedValue = klona(val);
        }, {
            deep: true,
        });
    }
    watchValue();
    function resetField(state) {
        var _a;
        unwatchValue === null || unwatchValue === void 0 ? void 0 : unwatchValue();
        const newValue = state && 'value' in state ? state.value : initialValue.value;
        setState({
            value: klona(newValue),
            initialValue: klona(newValue),
            touched: (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : false,
            errors: (state === null || state === void 0 ? void 0 : state.errors) || [],
        });
        meta.pending = false;
        meta.validated = false;
        validateValidStateOnly();
        // need to watch at next tick to avoid triggering the value watcher
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            watchValue();
        });
    }
    function setValue(newValue) {
        value.value = newValue;
    }
    function setErrors(errors) {
        setState({ errors: Array.isArray(errors) ? errors : [errors] });
    }
    const field = {
        id,
        name,
        label,
        value,
        meta,
        errors,
        errorMessage,
        type,
        checkedValue,
        uncheckedValue,
        bails,
        keepValueOnUnmount,
        resetField,
        handleReset: () => resetField(),
        validate: validate$1,
        handleChange,
        handleBlur,
        setState,
        setTouched,
        setErrors,
        setValue,
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FieldContextKey, field);
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(rules) && typeof (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(rules) !== 'function') {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(rules, (value, oldValue) => {
            if (isEqual(value, oldValue)) {
                return;
            }
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }, {
            deep: true,
        });
    }
    if ((true)) {
        field._vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => (Object.assign(Object.assign({ errors: errors.value }, meta), { value: value.value })), refreshInspector, {
            deep: true,
        });
        if (!form) {
            registerSingleFieldWithDevtools(field);
        }
    }
    // if no associated form return the field API immediately
    if (!form) {
        return field;
    }
    // associate the field with the given form
    form.register(field);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        markedForRemoval = true;
        form.unregister(field);
    });
    // extract cross-field dependencies in a computed prop
    const dependencies = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const rulesVal = normalizedRules.value;
        // is falsy, a function schema or a yup schema
        if (!rulesVal || isCallable(rulesVal) || isYupValidator(rulesVal) || Array.isArray(rulesVal)) {
            return {};
        }
        return Object.keys(rulesVal).reduce((acc, rule) => {
            const deps = extractLocators(rulesVal[rule])
                .map((dep) => dep.__locatorRef)
                .reduce((depAcc, depName) => {
                const depValue = getFromPath(form.values, depName) || form.values[depName];
                if (depValue !== undefined) {
                    depAcc[depName] = depValue;
                }
                return depAcc;
            }, {});
            Object.assign(acc, deps);
            return acc;
        }, {});
    });
    // Adds a watcher that runs the validation whenever field dependencies change
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(dependencies, (deps, oldDeps) => {
        // Skip if no dependencies or if the field wasn't manipulated
        if (!Object.keys(deps).length) {
            return;
        }
        const shouldValidate = !isEqual(deps, oldDeps);
        if (shouldValidate) {
            meta.validated ? validateWithStateMutation() : validateValidStateOnly();
        }
    });
    return field;
}
/**
 * Normalizes partial field options to include the full options
 */
function normalizeOptions(name, opts) {
    const defaults = () => ({
        initialValue: undefined,
        validateOnMount: false,
        bails: true,
        label: name,
        validateOnValueUpdate: true,
        keepValueOnUnmount: undefined,
        modelPropName: 'modelValue',
        syncVModel: true,
        controlled: true,
    });
    if (!opts) {
        return defaults();
    }
    // TODO: Deprecate this in next major release
    const checkedValue = 'valueProp' in opts ? opts.valueProp : opts.checkedValue;
    const controlled = 'standalone' in opts ? !opts.standalone : opts.controlled;
    return Object.assign(Object.assign(Object.assign({}, defaults()), (opts || {})), { controlled: controlled !== null && controlled !== void 0 ? controlled : true, checkedValue });
}
/**
 * Extracts the validation rules from a schema
 */
function extractRuleFromSchema(schema, fieldName) {
    // no schema at all
    if (!schema) {
        return undefined;
    }
    // there is a key on the schema object for this field
    return schema[fieldName];
}
function useCheckboxField(name, rules, opts) {
    const form = !(opts === null || opts === void 0 ? void 0 : opts.standalone) ? injectWithSelf(FormContextKey) : undefined;
    const checkedValue = opts === null || opts === void 0 ? void 0 : opts.checkedValue;
    const uncheckedValue = opts === null || opts === void 0 ? void 0 : opts.uncheckedValue;
    function patchCheckboxApi(field) {
        const handleChange = field.handleChange;
        const checked = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const currentValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.value);
            const checkedVal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(checkedValue);
            return Array.isArray(currentValue)
                ? currentValue.findIndex(v => isEqual(v, checkedVal)) >= 0
                : isEqual(checkedVal, currentValue);
        });
        function handleCheckboxChange(e, shouldValidate = true) {
            var _a;
            if (checked.value === ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked)) {
                if (shouldValidate) {
                    field.validate();
                }
                return;
            }
            let newValue = normalizeEventValue(e);
            // Single checkbox field without a form to toggle it's value
            if (!form) {
                newValue = resolveNextCheckboxValue((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.value), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(checkedValue), (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(uncheckedValue));
            }
            handleChange(newValue, shouldValidate);
        }
        return Object.assign(Object.assign({}, field), { checked,
            checkedValue,
            uncheckedValue, handleChange: handleCheckboxChange });
    }
    return patchCheckboxApi(_useField(name, rules, opts));
}
function useVModel({ prop, value, handleChange }) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    /* istanbul ignore next */
    if (!vm) {
        if ((true)) {
            console.warn('Failed to setup model events because `useField` was not called in setup.');
        }
        return;
    }
    const propName = prop || 'modelValue';
    const emitName = `update:${propName}`;
    // Component doesn't have a model prop setup (must be defined on the props)
    if (!(propName in vm.props)) {
        return;
    }
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(value, newValue => {
        if (isEqual(newValue, getCurrentModelValue(vm, propName))) {
            return;
        }
        vm.emit(emitName, newValue);
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => getCurrentModelValue(vm, propName), propValue => {
        if (propValue === IS_ABSENT && value.value === undefined) {
            return;
        }
        const newValue = propValue === IS_ABSENT ? undefined : propValue;
        if (isEqual(newValue, applyModelModifiers(value.value, vm.props.modelModifiers))) {
            return;
        }
        handleChange(newValue);
    });
}
function getCurrentModelValue(vm, propName) {
    return vm.props[propName];
}

const FieldImpl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Field',
    inheritAttrs: false,
    props: {
        as: {
            type: [String, Object],
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
        rules: {
            type: [Object, String, Function],
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        validateOnBlur: {
            type: Boolean,
            default: undefined,
        },
        validateOnChange: {
            type: Boolean,
            default: undefined,
        },
        validateOnInput: {
            type: Boolean,
            default: undefined,
        },
        validateOnModelUpdate: {
            type: Boolean,
            default: undefined,
        },
        bails: {
            type: Boolean,
            default: () => getConfig().bails,
        },
        label: {
            type: String,
            default: undefined,
        },
        uncheckedValue: {
            type: null,
            default: undefined,
        },
        modelValue: {
            type: null,
            default: IS_ABSENT,
        },
        modelModifiers: {
            type: null,
            default: () => ({}),
        },
        'onUpdate:modelValue': {
            type: null,
            default: undefined,
        },
        standalone: {
            type: Boolean,
            default: false,
        },
        keepValue: {
            type: Boolean,
            default: undefined,
        },
    },
    setup(props, ctx) {
        const rules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'rules');
        const name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'name');
        const label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'label');
        const uncheckedValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'uncheckedValue');
        const keepValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'keepValue');
        const { errors, value, errorMessage, validate: validateField, handleChange, handleBlur, setTouched, resetField, handleReset, meta, checked, setErrors, } = useField(name, rules, {
            validateOnMount: props.validateOnMount,
            bails: props.bails,
            standalone: props.standalone,
            type: ctx.attrs.type,
            initialValue: resolveInitialValue(props, ctx),
            // Only for checkboxes and radio buttons
            checkedValue: ctx.attrs.value,
            uncheckedValue,
            label,
            validateOnValueUpdate: false,
            keepValueOnUnmount: keepValue,
        });
        // If there is a v-model applied on the component we need to emit the `update:modelValue` whenever the value binding changes
        const onChangeHandler = function handleChangeWithModel(e, shouldValidate = true) {
            handleChange(e, shouldValidate);
            ctx.emit('update:modelValue', value.value);
        };
        const handleInput = (e) => {
            if (!hasCheckedAttr(ctx.attrs.type)) {
                value.value = normalizeEventValue(e);
            }
        };
        const onInputHandler = function handleInputWithModel(e) {
            handleInput(e);
            ctx.emit('update:modelValue', value.value);
        };
        const fieldProps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = resolveValidationTriggers(props);
            const baseOnBlur = [handleBlur, ctx.attrs.onBlur, validateOnBlur ? validateField : undefined].filter(Boolean);
            const baseOnInput = [(e) => onChangeHandler(e, validateOnInput), ctx.attrs.onInput].filter(Boolean);
            const baseOnChange = [(e) => onChangeHandler(e, validateOnChange), ctx.attrs.onChange].filter(Boolean);
            const attrs = {
                name: props.name,
                onBlur: baseOnBlur,
                onInput: baseOnInput,
                onChange: baseOnChange,
            };
            attrs['onUpdate:modelValue'] = e => onChangeHandler(e, validateOnModelUpdate);
            if (hasCheckedAttr(ctx.attrs.type) && checked) {
                attrs.checked = checked.value;
            }
            const tag = resolveTag(props, ctx);
            if (shouldHaveValueBinding(tag, ctx.attrs)) {
                attrs.value = value.value;
            }
            return attrs;
        });
        function slotProps() {
            return {
                field: fieldProps.value,
                value: value.value,
                meta,
                errors: errors.value,
                errorMessage: errorMessage.value,
                validate: validateField,
                resetField,
                handleChange: onChangeHandler,
                handleInput: onInputHandler,
                handleReset,
                handleBlur,
                setTouched,
                setErrors,
            };
        }
        ctx.expose({
            setErrors,
            setTouched,
            reset: resetField,
            validate: validateField,
            handleChange,
        });
        return () => {
            const tag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(resolveTag(props, ctx));
            const children = normalizeChildren(tag, ctx, slotProps);
            if (tag) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, Object.assign(Object.assign({}, ctx.attrs), fieldProps.value), children);
            }
            return children;
        };
    },
});
function resolveTag(props, ctx) {
    let tag = props.as || '';
    if (!props.as && !ctx.slots.default) {
        tag = 'input';
    }
    return tag;
}
function resolveValidationTriggers(props) {
    var _a, _b, _c, _d;
    const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = getConfig();
    return {
        validateOnInput: (_a = props.validateOnInput) !== null && _a !== void 0 ? _a : validateOnInput,
        validateOnChange: (_b = props.validateOnChange) !== null && _b !== void 0 ? _b : validateOnChange,
        validateOnBlur: (_c = props.validateOnBlur) !== null && _c !== void 0 ? _c : validateOnBlur,
        validateOnModelUpdate: (_d = props.validateOnModelUpdate) !== null && _d !== void 0 ? _d : validateOnModelUpdate,
    };
}
function resolveInitialValue(props, ctx) {
    // Gets the initial value either from `value` prop/attr or `v-model` binding (modelValue)
    // For checkboxes and radio buttons it will always be the model value not the `value` attribute
    if (!hasCheckedAttr(ctx.attrs.type)) {
        return isPropPresent(props, 'modelValue') ? props.modelValue : ctx.attrs.value;
    }
    return isPropPresent(props, 'modelValue') ? props.modelValue : undefined;
}
const Field = FieldImpl;

let FORM_COUNTER = 0;
function useForm(opts) {
    var _a;
    const formId = FORM_COUNTER++;
    const controlledModelPaths = new Set();
    // Prevents fields from double resetting their values, which causes checkboxes to toggle their initial value
    // TODO: This won't be needed if we centralize all the state inside the `form` for form inputs
    let RESET_LOCK = false;
    // A lookup containing fields or field groups
    const fieldsByPath = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    // If the form is currently submitting
    const isSubmitting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    // The number of times the user tried to submit the form
    const submitCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    // field arrays managed by this form
    const fieldArrays = [];
    // a private ref for all form values
    const formValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(klona((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(opts === null || opts === void 0 ? void 0 : opts.initialValues) || {}));
    // the source of errors for the form fields
    const { errorBag, setErrorBag, setFieldErrorBag } = useErrorBag(opts === null || opts === void 0 ? void 0 : opts.initialErrors);
    // Gets the first error of each field
    const errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return keysOf(errorBag.value).reduce((acc, key) => {
            const bag = errorBag.value[key];
            if (bag && bag.length) {
                acc[key] = bag[0];
            }
            return acc;
        }, {});
    });
    function getFirstFieldAtPath(path) {
        const fieldOrGroup = fieldsByPath.value[path];
        return Array.isArray(fieldOrGroup) ? fieldOrGroup[0] : fieldOrGroup;
    }
    function fieldExists(path) {
        return !!fieldsByPath.value[path];
    }
    /**
     * Holds a computed reference to all fields names and labels
     */
    const fieldNames = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return keysOf(fieldsByPath.value).reduce((names, path) => {
            const field = getFirstFieldAtPath(path);
            if (field) {
                names[path] = { name: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name) || '', label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.label) || '' };
            }
            return names;
        }, {});
    });
    const fieldBailsMap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return keysOf(fieldsByPath.value).reduce((map, path) => {
            var _a;
            const field = getFirstFieldAtPath(path);
            if (field) {
                map[path] = (_a = field.bails) !== null && _a !== void 0 ? _a : true;
            }
            return map;
        }, {});
    });
    // mutable non-reactive reference to initial errors
    // we need this to process initial errors then unset them
    const initialErrors = Object.assign({}, ((opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {}));
    const keepValuesOnUnmount = (_a = opts === null || opts === void 0 ? void 0 : opts.keepValuesOnUnmount) !== null && _a !== void 0 ? _a : false;
    // initial form values
    const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(fieldsByPath, formValues, opts === null || opts === void 0 ? void 0 : opts.initialValues);
    // form meta aggregations
    const meta = useFormMeta(fieldsByPath, formValues, originalInitialValues, errors);
    const controlledValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return [...controlledModelPaths, ...keysOf(fieldsByPath.value)].reduce((acc, path) => {
            const value = getFromPath(formValues, path);
            setInPath(acc, path, value);
            return acc;
        }, {});
    });
    const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
    /**
     * Batches validation runs in 5ms batches
     * Must have two distinct batch queues to make sure they don't override each other settings #3783
     */
    const debouncedSilentValidation = debounceAsync(_validateSchema, 5);
    const debouncedValidation = debounceAsync(_validateSchema, 5);
    const validateSchema = withLatest(async (mode) => {
        return (await mode) === 'silent' ? debouncedSilentValidation() : debouncedValidation();
    }, (formResult, [mode]) => {
        // fields by id lookup
        const fieldsById = formCtx.fieldsByPath.value || {};
        // errors fields names, we need it to also check if custom errors are updated
        const currentErrorsPaths = keysOf(formCtx.errorBag.value);
        // collect all the keys from the schema and all fields
        // this ensures we have a complete keymap of all the fields
        const paths = [
            ...new Set([...keysOf(formResult.results), ...keysOf(fieldsById), ...currentErrorsPaths]),
        ];
        // aggregates the paths into a single result object while applying the results on the fields
        return paths.reduce((validation, path) => {
            const field = fieldsById[path];
            const messages = (formResult.results[path] || { errors: [] }).errors;
            const fieldResult = {
                errors: messages,
                valid: !messages.length,
            };
            validation.results[path] = fieldResult;
            if (!fieldResult.valid) {
                validation.errors[path] = fieldResult.errors[0];
            }
            // field not rendered
            if (!field) {
                setFieldError(path, messages);
                return validation;
            }
            // always update the valid flag regardless of the mode
            applyFieldMutation(field, f => (f.meta.valid = fieldResult.valid));
            if (mode === 'silent') {
                return validation;
            }
            const wasValidated = Array.isArray(field) ? field.some(f => f.meta.validated) : field.meta.validated;
            if (mode === 'validated-only' && !wasValidated) {
                return validation;
            }
            applyFieldMutation(field, f => f.setState({ errors: fieldResult.errors }));
            return validation;
        }, { valid: formResult.valid, results: {}, errors: {} });
    });
    function makeSubmissionFactory(onlyControlled) {
        return function submitHandlerFactory(fn, onValidationError) {
            return function submissionHandler(e) {
                if (e instanceof Event) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                // Touch all fields
                setTouched(keysOf(fieldsByPath.value).reduce((acc, field) => {
                    acc[field] = true;
                    return acc;
                }, {}));
                isSubmitting.value = true;
                submitCount.value++;
                return validate()
                    .then(result => {
                    const values = klona(formValues);
                    if (result.valid && typeof fn === 'function') {
                        const controlled = klona(controlledValues.value);
                        return fn(onlyControlled ? controlled : values, {
                            evt: e,
                            controlledValues: controlled,
                            setErrors,
                            setFieldError,
                            setTouched,
                            setFieldTouched,
                            setValues,
                            setFieldValue,
                            resetForm,
                            resetField,
                        });
                    }
                    if (!result.valid && typeof onValidationError === 'function') {
                        onValidationError({
                            values,
                            evt: e,
                            errors: result.errors,
                            results: result.results,
                        });
                    }
                })
                    .then(returnVal => {
                    isSubmitting.value = false;
                    return returnVal;
                }, err => {
                    isSubmitting.value = false;
                    // re-throw the err so it doesn't go silent
                    throw err;
                });
            };
        };
    }
    const handleSubmitImpl = makeSubmissionFactory(false);
    const handleSubmit = handleSubmitImpl;
    handleSubmit.withControlled = makeSubmissionFactory(true);
    const formCtx = {
        formId,
        fieldsByPath,
        values: formValues,
        controlledValues,
        errorBag,
        errors,
        schema,
        submitCount,
        meta,
        isSubmitting,
        fieldArrays,
        keepValuesOnUnmount,
        validateSchema: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(schema) ? validateSchema : undefined,
        validate,
        register: registerField,
        unregister: unregisterField,
        setFieldErrorBag,
        validateField,
        setFieldValue,
        setValues,
        setErrors,
        setFieldError,
        setFieldTouched,
        setTouched,
        resetForm,
        resetField,
        handleSubmit,
        stageInitialValue,
        unsetInitialValue,
        setFieldInitialValue,
        useFieldModel,
    };
    function isFieldGroup(fieldOrGroup) {
        return Array.isArray(fieldOrGroup);
    }
    function applyFieldMutation(fieldOrGroup, mutation) {
        if (Array.isArray(fieldOrGroup)) {
            return fieldOrGroup.forEach(mutation);
        }
        return mutation(fieldOrGroup);
    }
    function mutateAllFields(mutation) {
        Object.values(fieldsByPath.value).forEach(field => {
            if (!field) {
                return;
            }
            // avoid resetting the field values, because they should've been reset already.
            applyFieldMutation(field, mutation);
        });
    }
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldError(field, message) {
        setFieldErrorBag(field, message);
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrors(fields) {
        setErrorBag(fields);
    }
    /**
     * Sets a single field value
     */
    function setFieldValue(field, value, { force } = { force: false }) {
        var _a;
        const fieldInstance = fieldsByPath.value[field];
        const clonedValue = klona(value);
        // field wasn't found, create a virtual field as a placeholder
        if (!fieldInstance) {
            setInPath(formValues, field, clonedValue);
            return;
        }
        if (isFieldGroup(fieldInstance) && ((_a = fieldInstance[0]) === null || _a === void 0 ? void 0 : _a.type) === 'checkbox' && !Array.isArray(value)) {
            // Multiple checkboxes, and only one of them got updated
            const newValue = klona(resolveNextCheckboxValue(getFromPath(formValues, field) || [], value, undefined));
            setInPath(formValues, field, newValue);
            return;
        }
        let newValue = clonedValue;
        // Single Checkbox: toggles the field value unless the field is being reset then force it
        if (!isFieldGroup(fieldInstance) && fieldInstance.type === 'checkbox' && !force && !RESET_LOCK) {
            newValue = klona(resolveNextCheckboxValue(getFromPath(formValues, field), value, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(fieldInstance.uncheckedValue)));
        }
        setInPath(formValues, field, newValue);
    }
    /**
     * Sets multiple fields values
     */
    function setValues(fields) {
        // clean up old values
        keysOf(formValues).forEach(key => {
            delete formValues[key];
        });
        // set up new values
        keysOf(fields).forEach(path => {
            setFieldValue(path, fields[path]);
        });
        // regenerate the arrays when the form values change
        fieldArrays.forEach(f => f && f.reset());
    }
    function createModel(path) {
        const { value } = _useFieldValue(path, undefined, formCtx);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(value, () => {
            if (!fieldExists((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path))) {
                validate({ mode: 'validated-only' });
            }
        }, {
            deep: true,
        });
        controlledModelPaths.add((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path));
        return value;
    }
    function useFieldModel(path) {
        if (!Array.isArray(path)) {
            return createModel(path);
        }
        return path.map(createModel);
    }
    /**
     * Sets the touched meta state on a field
     */
    function setFieldTouched(field, isTouched) {
        const fieldInstance = fieldsByPath.value[field];
        if (fieldInstance) {
            applyFieldMutation(fieldInstance, f => f.setTouched(isTouched));
        }
    }
    /**
     * Sets the touched meta state on multiple fields
     */
    function setTouched(fields) {
        keysOf(fields).forEach(field => {
            setFieldTouched(field, !!fields[field]);
        });
    }
    function resetField(field, state) {
        const fieldInstance = fieldsByPath.value[field];
        if (fieldInstance) {
            applyFieldMutation(fieldInstance, f => f.resetField(state));
        }
    }
    /**
     * Resets all fields
     */
    function resetForm(state) {
        RESET_LOCK = true;
        // Reset all field states first
        mutateAllFields(f => f.resetField());
        // reset values
        const newValues = (state === null || state === void 0 ? void 0 : state.values) ? state.values : originalInitialValues.value;
        setInitialValues(newValues);
        setValues(newValues);
        if (state === null || state === void 0 ? void 0 : state.touched) {
            setTouched(state.touched);
        }
        setErrors((state === null || state === void 0 ? void 0 : state.errors) || {});
        submitCount.value = (state === null || state === void 0 ? void 0 : state.submitCount) || 0;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            RESET_LOCK = false;
        });
    }
    function insertFieldAtPath(field, path) {
        const rawField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.markRaw)(field);
        const fieldPath = path;
        // first field at that path
        if (!fieldsByPath.value[fieldPath]) {
            fieldsByPath.value[fieldPath] = rawField;
            return;
        }
        const fieldAtPath = fieldsByPath.value[fieldPath];
        if (fieldAtPath && !Array.isArray(fieldAtPath)) {
            fieldsByPath.value[fieldPath] = [fieldAtPath];
        }
        // add the new array to that path
        fieldsByPath.value[fieldPath] = [...fieldsByPath.value[fieldPath], rawField];
    }
    function removeFieldFromPath(field, path) {
        const fieldPath = path;
        const fieldAtPath = fieldsByPath.value[fieldPath];
        if (!fieldAtPath) {
            return;
        }
        // same field at path
        if (!isFieldGroup(fieldAtPath) && field.id === fieldAtPath.id) {
            delete fieldsByPath.value[fieldPath];
            return;
        }
        if (isFieldGroup(fieldAtPath)) {
            const idx = fieldAtPath.findIndex(f => f.id === field.id);
            if (idx === -1) {
                return;
            }
            fieldAtPath.splice(idx, 1);
            if (!fieldAtPath.length) {
                delete fieldsByPath.value[fieldPath];
            }
        }
    }
    function registerField(field) {
        const fieldPath = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name);
        insertFieldAtPath(field, fieldPath);
        if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(field.name)) {
            // ensures when a field's name was already taken that it preserves its same value
            // necessary for fields generated by loops
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(field.name, async (newPath, oldPath) => {
                // cache the value
                await (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
                removeFieldFromPath(field, oldPath);
                insertFieldAtPath(field, newPath);
                // re-validate if either path had errors before
                if (errors.value[oldPath] || errors.value[newPath]) {
                    // clear up both paths errors
                    setFieldError(oldPath, undefined);
                    validateField(newPath);
                }
                // clean up the old path if no other field is sharing that name
                // #3325
                await (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)();
                if (!fieldExists(oldPath)) {
                    unsetPath(formValues, oldPath);
                }
            });
        }
        // if field already had errors (initial errors) that's not user-set, validate it again to ensure state is correct
        // the difference being that `initialErrors` will contain the error message while other errors (pre-validated schema) won't have them as initial errors
        // #3342
        const initialErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.errorMessage);
        if (initialErrorMessage && (initialErrors === null || initialErrors === void 0 ? void 0 : initialErrors[fieldPath]) !== initialErrorMessage) {
            validateField(fieldPath);
        }
        // marks the initial error as "consumed" so it won't be matched later with same non-initial error
        delete initialErrors[fieldPath];
    }
    function unregisterField(field) {
        const fieldName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.name);
        const fieldInstance = fieldsByPath.value[fieldName];
        const isGroup = !!fieldInstance && isFieldGroup(fieldInstance);
        removeFieldFromPath(field, fieldName);
        // clears a field error on unmounted
        // we wait till next tick to make sure if the field is completely removed and doesn't have any siblings like checkboxes
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            var _a;
            const shouldKeepValue = (_a = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.keepValueOnUnmount)) !== null && _a !== void 0 ? _a : (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(keepValuesOnUnmount);
            const currentGroupValue = getFromPath(formValues, fieldName);
            // The boolean here is we check if the field still belongs to the same control group with that name
            // if another group claimed the name, we should avoid handling it since it is no longer the same group
            // this happens with `v-for` over some checkboxes and field arrays.
            // also if the group no longer exist we can assume this group was the last one that controlled it
            const isSameGroup = isGroup && (fieldInstance === fieldsByPath.value[fieldName] || !fieldsByPath.value[fieldName]);
            // group field that still has a dangling value, the field may exist or not after it was removed.
            // This used to be handled in the useField composable but the form has better context on when it should/not happen.
            // if it does belong to it that means the group still exists
            // #3844
            if (isSameGroup && !shouldKeepValue) {
                if (Array.isArray(currentGroupValue)) {
                    const valueIdx = currentGroupValue.findIndex(i => isEqual(i, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.checkedValue)));
                    if (valueIdx > -1) {
                        const newVal = [...currentGroupValue];
                        newVal.splice(valueIdx, 1);
                        setFieldValue(fieldName, newVal, { force: true });
                    }
                }
                else if (currentGroupValue === (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field.checkedValue)) {
                    // Remove field if it is a group but does not have an array value, like for radio inputs #3963
                    unsetPath(formValues, fieldName);
                }
            }
            // Field was removed entirely, we should unset its path
            // #3384
            if (!fieldExists(fieldName)) {
                setFieldError(fieldName, undefined);
                // Checks if the field was configured to be unset during unmount or not
                // Checks both the form-level config and field-level one
                // Field has the priority if it is set, otherwise it goes to the form settings
                if (shouldKeepValue) {
                    return;
                }
                // Don't apply emptyContainer check unless the current group value is an array
                if (isGroup && Array.isArray(currentGroupValue) && !isEmptyContainer(currentGroupValue)) {
                    return;
                }
                unsetPath(formValues, fieldName);
            }
        });
    }
    async function validate(opts) {
        const mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || 'force';
        if (mode === 'force') {
            mutateAllFields(f => (f.meta.validated = true));
        }
        if (formCtx.validateSchema) {
            return formCtx.validateSchema(mode);
        }
        // No schema, each field is responsible to validate itself
        const validations = await Promise.all(Object.values(fieldsByPath.value).map(field => {
            const fieldInstance = Array.isArray(field) ? field[0] : field;
            if (!fieldInstance) {
                return Promise.resolve({ key: '', valid: true, errors: [] });
            }
            return fieldInstance.validate(opts).then((result) => {
                return {
                    key: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(fieldInstance.name),
                    valid: result.valid,
                    errors: result.errors,
                };
            });
        }));
        const results = {};
        const errors = {};
        for (const validation of validations) {
            results[validation.key] = {
                valid: validation.valid,
                errors: validation.errors,
            };
            if (validation.errors.length) {
                errors[validation.key] = validation.errors[0];
            }
        }
        return {
            valid: validations.every(r => r.valid),
            results,
            errors,
        };
    }
    async function validateField(field) {
        const fieldInstance = fieldsByPath.value[field];
        if (!fieldInstance) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.warn)(`field with name ${field} was not found`);
            return Promise.resolve({ errors: [], valid: true });
        }
        if (Array.isArray(fieldInstance)) {
            return fieldInstance.map(f => f.validate())[0];
        }
        return fieldInstance.validate();
    }
    function unsetInitialValue(path) {
        unsetPath(initialValues.value, path);
    }
    /**
     * Sneaky function to set initial field values
     */
    function stageInitialValue(path, value, updateOriginal = false) {
        setInPath(formValues, path, value);
        setFieldInitialValue(path, value);
        if (updateOriginal && !(opts === null || opts === void 0 ? void 0 : opts.initialValues)) {
            setInPath(originalInitialValues.value, path, klona(value));
        }
    }
    function setFieldInitialValue(path, value) {
        setInPath(initialValues.value, path, klona(value));
    }
    async function _validateSchema() {
        const schemaValue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(schema);
        if (!schemaValue) {
            return { valid: true, results: {}, errors: {} };
        }
        const formResult = isYupValidator(schemaValue)
            ? await validateYupSchema(schemaValue, formValues)
            : await validateObjectSchema(schemaValue, formValues, {
                names: fieldNames.value,
                bailsMap: fieldBailsMap.value,
            });
        return formResult;
    }
    const submitForm = handleSubmit((_, { evt }) => {
        if (isFormSubmitEvent(evt)) {
            evt.target.submit();
        }
    });
    // Trigger initial validation
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
        if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
            setErrors(opts.initialErrors);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
            setTouched(opts.initialTouched);
        }
        // if validate on mount was enabled
        if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
            validate();
            return;
        }
        // otherwise run initial silent validation through schema if available
        // the useField should skip their own silent validation if a yup schema is present
        if (formCtx.validateSchema) {
            formCtx.validateSchema('silent');
        }
    });
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(schema)) {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(schema, () => {
            var _a;
            (_a = formCtx.validateSchema) === null || _a === void 0 ? void 0 : _a.call(formCtx, 'validated-only');
        });
    }
    // Provide injections
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(FormContextKey, formCtx);
    if ((true)) {
        registerFormWithDevTools(formCtx);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => (Object.assign(Object.assign({ errors: errorBag.value }, meta.value), { values: formValues, isSubmitting: isSubmitting.value, submitCount: submitCount.value })), refreshInspector, {
            deep: true,
        });
    }
    return Object.assign(Object.assign({}, formCtx), { handleReset: () => resetForm(), submitForm });
}
/**
 * Manages form meta aggregation
 */
function useFormMeta(fieldsByPath, currentValues, initialValues, errors) {
    const MERGE_STRATEGIES = {
        touched: 'some',
        pending: 'some',
        valid: 'every',
    };
    const isDirty = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return !isEqual(currentValues, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValues));
    });
    function calculateFlags() {
        const fields = Object.values(fieldsByPath.value).flat(1).filter(Boolean);
        return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
            const mergeMethod = MERGE_STRATEGIES[flag];
            acc[flag] = fields[mergeMethod](field => field.meta[flag]);
            return acc;
        }, {});
    }
    const flags = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(calculateFlags());
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
        const value = calculateFlags();
        flags.touched = value.touched;
        flags.valid = value.valid;
        flags.pending = value.pending;
    });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return Object.assign(Object.assign({ initialValues: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
    });
}
/**
 * Manages the initial values prop
 */
function useFormInitialValues(fields, formValues, providedValues) {
    // these are the mutable initial values as the fields are mounted/unmounted
    const initialValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(klona((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(providedValues)) || {});
    // these are the original initial value as provided by the user initially, they don't keep track of conditional fields
    // this is important because some conditional fields will overwrite the initial values for other fields who had the same name
    // like array fields, any push/insert operation will overwrite the initial values because they "create new fields"
    // so these are the values that the reset function should use
    // these only change when the user explicitly chanegs the initial values or when the user resets them with new values.
    const originalInitialValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(klona((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(providedValues)) || {});
    function setInitialValues(values, updateFields = false) {
        initialValues.value = klona(values);
        originalInitialValues.value = klona(values);
        if (!updateFields) {
            return;
        }
        // update the pristine non-touched fields
        // those are excluded because it's unlikely you want to change the form values using initial values
        // we mostly watch them for API population or newly inserted fields
        // if the user API is taking too much time before user interaction they should consider disabling or hiding their inputs until the values are ready
        keysOf(fields.value).forEach(fieldPath => {
            const field = fields.value[fieldPath];
            const wasTouched = Array.isArray(field) ? field.some(f => f.meta.touched) : field === null || field === void 0 ? void 0 : field.meta.touched;
            if (!field || wasTouched) {
                return;
            }
            const newValue = getFromPath(initialValues.value, fieldPath);
            setInPath(formValues, fieldPath, klona(newValue));
        });
    }
    if ((0,vue__WEBPACK_IMPORTED_MODULE_0__.isRef)(providedValues)) {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(providedValues, value => {
            setInitialValues(value, true);
        }, {
            deep: true,
        });
    }
    return {
        initialValues,
        originalInitialValues,
        setInitialValues,
    };
}
function useErrorBag(initialErrors) {
    const errorBag = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    function normalizeErrorItem(message) {
        return Array.isArray(message) ? message : message ? [message] : [];
    }
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldErrorBag(field, message) {
        if (!message) {
            delete errorBag.value[field];
            return;
        }
        errorBag.value[field] = normalizeErrorItem(message);
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrorBag(fields) {
        errorBag.value = keysOf(fields).reduce((acc, key) => {
            const message = fields[key];
            if (message) {
                acc[key] = normalizeErrorItem(message);
            }
            return acc;
        }, {});
    }
    if (initialErrors) {
        setErrorBag(initialErrors);
    }
    return {
        errorBag,
        setErrorBag,
        setFieldErrorBag,
    };
}

const FormImpl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Form',
    inheritAttrs: false,
    props: {
        as: {
            type: String,
            default: 'form',
        },
        validationSchema: {
            type: Object,
            default: undefined,
        },
        initialValues: {
            type: Object,
            default: undefined,
        },
        initialErrors: {
            type: Object,
            default: undefined,
        },
        initialTouched: {
            type: Object,
            default: undefined,
        },
        validateOnMount: {
            type: Boolean,
            default: false,
        },
        onSubmit: {
            type: Function,
            default: undefined,
        },
        onInvalidSubmit: {
            type: Function,
            default: undefined,
        },
        keepValues: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, ctx) {
        const initialValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'initialValues');
        const validationSchema = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'validationSchema');
        const keepValues = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'keepValues');
        const { errors, values, meta, isSubmitting, submitCount, controlledValues, validate, validateField, handleReset, resetForm, handleSubmit, setErrors, setFieldError, setFieldValue, setValues, setFieldTouched, setTouched, resetField, } = useForm({
            validationSchema: validationSchema.value ? validationSchema : undefined,
            initialValues,
            initialErrors: props.initialErrors,
            initialTouched: props.initialTouched,
            validateOnMount: props.validateOnMount,
            keepValuesOnUnmount: keepValues,
        });
        const submitForm = handleSubmit((_, { evt }) => {
            if (isFormSubmitEvent(evt)) {
                evt.target.submit();
            }
        }, props.onInvalidSubmit);
        const onSubmit = props.onSubmit ? handleSubmit(props.onSubmit, props.onInvalidSubmit) : submitForm;
        function handleFormReset(e) {
            if (isEvent(e)) {
                // Prevent default form reset behavior
                e.preventDefault();
            }
            handleReset();
            if (typeof ctx.attrs.onReset === 'function') {
                ctx.attrs.onReset();
            }
        }
        function handleScopedSlotSubmit(evt, onSubmit) {
            const onSuccess = typeof evt === 'function' && !onSubmit ? evt : onSubmit;
            return handleSubmit(onSuccess, props.onInvalidSubmit)(evt);
        }
        function getValues() {
            return klona(values);
        }
        function getMeta() {
            return klona(meta.value);
        }
        function getErrors() {
            return klona(errors.value);
        }
        function slotProps() {
            return {
                meta: meta.value,
                errors: errors.value,
                values: values,
                isSubmitting: isSubmitting.value,
                submitCount: submitCount.value,
                controlledValues: controlledValues.value,
                validate,
                validateField,
                handleSubmit: handleScopedSlotSubmit,
                handleReset,
                submitForm,
                setErrors,
                setFieldError,
                setFieldValue,
                setValues,
                setFieldTouched,
                setTouched,
                resetForm,
                resetField,
                getValues,
                getMeta,
                getErrors,
            };
        }
        // expose these functions and methods as part of public API
        ctx.expose({
            setFieldError,
            setErrors,
            setFieldValue,
            setValues,
            setFieldTouched,
            setTouched,
            resetForm,
            validate,
            validateField,
            resetField,
            getValues,
            getMeta,
            getErrors,
        });
        return function renderForm() {
            // avoid resolving the form component as itself
            const tag = props.as === 'form' ? props.as : (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            if (!props.as) {
                return children;
            }
            // Attributes to add on a native `form` tag
            const formAttrs = props.as === 'form'
                ? {
                    // Disables native validation as vee-validate will handle it.
                    novalidate: true,
                }
                : {};
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, Object.assign(Object.assign(Object.assign({}, formAttrs), ctx.attrs), { onSubmit, onReset: handleFormReset }), children);
        };
    },
});
const Form = FormImpl;

function useFieldArray(arrayPath) {
    const form = injectWithSelf(FormContextKey, undefined);
    const fields = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const noOp = () => { };
    const noOpApi = {
        fields,
        remove: noOp,
        push: noOp,
        swap: noOp,
        insert: noOp,
        update: noOp,
        replace: noOp,
        prepend: noOp,
        move: noOp,
    };
    if (!form) {
        warn('FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly');
        return noOpApi;
    }
    if (!(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath)) {
        warn('FieldArray requires a field path to be provided, did you forget to pass the `name` prop?');
        return noOpApi;
    }
    const alreadyExists = form.fieldArrays.find(a => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(a.path) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath));
    if (alreadyExists) {
        return alreadyExists;
    }
    let entryCounter = 0;
    function initFields() {
        const currentValues = getFromPath(form === null || form === void 0 ? void 0 : form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath), []) || [];
        fields.value = currentValues.map(createEntry);
        updateEntryFlags();
    }
    initFields();
    function updateEntryFlags() {
        const fieldsLength = fields.value.length;
        for (let i = 0; i < fieldsLength; i++) {
            const entry = fields.value[i];
            entry.isFirst = i === 0;
            entry.isLast = i === fieldsLength - 1;
        }
    }
    function createEntry(value) {
        const key = entryCounter++;
        const entry = {
            key,
            value: computedDeep({
                get() {
                    const currentValues = getFromPath(form === null || form === void 0 ? void 0 : form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath), []) || [];
                    const idx = fields.value.findIndex(e => e.key === key);
                    return idx === -1 ? value : currentValues[idx];
                },
                set(value) {
                    const idx = fields.value.findIndex(e => e.key === key);
                    if (idx === -1) {
                        warn(`Attempting to update a non-existent array item`);
                        return;
                    }
                    update(idx, value);
                },
            }),
            isFirst: false,
            isLast: false,
        };
        return entry;
    }
    function remove(idx) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!pathValue || !Array.isArray(pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        newValue.splice(idx, 1);
        form === null || form === void 0 ? void 0 : form.unsetInitialValue(pathName + `[${idx}]`);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.splice(idx, 1);
        updateEntryFlags();
    }
    function push(value) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [...normalizedPathValue];
        newValue.push(value);
        form === null || form === void 0 ? void 0 : form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.push(createEntry(value));
        updateEntryFlags();
    }
    function swap(indexA, indexB) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || !(indexA in pathValue) || !(indexB in pathValue)) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        // the old switcheroo
        const temp = newValue[indexA];
        newValue[indexA] = newValue[indexB];
        newValue[indexB] = temp;
        const tempEntry = newFields[indexA];
        newFields[indexA] = newFields[indexB];
        newFields[indexB] = tempEntry;
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    function insert(idx, value) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length < idx) {
            return;
        }
        const newValue = [...pathValue];
        const newFields = [...fields.value];
        newValue.splice(idx, 0, value);
        newFields.splice(idx, 0, createEntry(value));
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    function replace(arr) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, arr);
        initFields();
    }
    function update(idx, value) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        if (!Array.isArray(pathValue) || pathValue.length - 1 < idx) {
            return;
        }
        form === null || form === void 0 ? void 0 : form.setFieldValue(`${pathName}[${idx}]`, value);
        form === null || form === void 0 ? void 0 : form.validate({ mode: 'validated-only' });
    }
    function prepend(value) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const normalizedPathValue = isNullOrUndefined(pathValue) ? [] : pathValue;
        if (!Array.isArray(normalizedPathValue)) {
            return;
        }
        const newValue = [value, ...normalizedPathValue];
        form === null || form === void 0 ? void 0 : form.stageInitialValue(pathName + `[${newValue.length - 1}]`, value);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value.unshift(createEntry(value));
        updateEntryFlags();
    }
    function move(oldIdx, newIdx) {
        const pathName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath);
        const pathValue = getFromPath(form === null || form === void 0 ? void 0 : form.values, pathName);
        const newValue = isNullOrUndefined(pathValue) ? [] : [...pathValue];
        if (!Array.isArray(pathValue) || !(oldIdx in pathValue) || !(newIdx in pathValue)) {
            return;
        }
        const newFields = [...fields.value];
        const movedItem = newFields[oldIdx];
        newFields.splice(oldIdx, 1);
        newFields.splice(newIdx, 0, movedItem);
        const movedValue = newValue[oldIdx];
        newValue.splice(oldIdx, 1);
        newValue.splice(newIdx, 0, movedValue);
        form === null || form === void 0 ? void 0 : form.setFieldValue(pathName, newValue);
        fields.value = newFields;
        updateEntryFlags();
    }
    const fieldArrayCtx = {
        fields,
        remove,
        push,
        swap,
        insert,
        update,
        replace,
        prepend,
        move,
    };
    form.fieldArrays.push(Object.assign({ path: arrayPath, reset: initFields }, fieldArrayCtx));
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        const idx = form.fieldArrays.findIndex(i => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(i.path) === (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(arrayPath));
        if (idx >= 0) {
            form.fieldArrays.splice(idx, 1);
        }
    });
    return fieldArrayCtx;
}

const FieldArrayImpl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'FieldArray',
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const { push, remove, swap, insert, replace, update, prepend, move, fields } = useFieldArray((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'name'));
        function slotProps() {
            return {
                fields: fields.value,
                push,
                remove,
                swap,
                insert,
                update,
                replace,
                prepend,
                move,
            };
        }
        ctx.expose({
            push,
            remove,
            swap,
            insert,
            update,
            replace,
            prepend,
            move,
        });
        return () => {
            const children = normalizeChildren(undefined, ctx, slotProps);
            return children;
        };
    },
});
const FieldArray = FieldArrayImpl;

const ErrorMessageImpl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'ErrorMessage',
    props: {
        as: {
            type: String,
            default: undefined,
        },
        name: {
            type: String,
            required: true,
        },
    },
    setup(props, ctx) {
        const form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FormContextKey, undefined);
        const message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return form === null || form === void 0 ? void 0 : form.errors.value[props.name];
        });
        function slotProps() {
            return {
                message: message.value,
            };
        }
        return () => {
            // Renders nothing if there are no messages
            if (!message.value) {
                return undefined;
            }
            const tag = (props.as ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(props.as) : props.as);
            const children = normalizeChildren(tag, ctx, slotProps);
            const attrs = Object.assign({ role: 'alert' }, ctx.attrs);
            // If no tag was specified and there are children
            // render the slot as is without wrapping it
            if (!tag && (Array.isArray(children) || !children) && (children === null || children === void 0 ? void 0 : children.length)) {
                return children;
            }
            // If no children in slot
            // render whatever specified and fallback to a <span> with the message in it's contents
            if ((Array.isArray(children) || !children) && !(children === null || children === void 0 ? void 0 : children.length)) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag || 'span', attrs, message.value);
            }
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(tag, attrs, children);
        };
    },
});
const ErrorMessage = ErrorMessageImpl;

function useResetForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function resetForm(state) {
        if (!form) {
            return;
        }
        return form.resetForm(state);
    };
}

/**
 * If a field is dirty or not
 */
function useIsFieldDirty(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return false;
        }
        return field.meta.dirty;
    });
}

/**
 * If a field is touched or not
 */
function useIsFieldTouched(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return false;
        }
        return field.meta.touched;
    });
}

/**
 * If a field is validated and is valid
 */
function useIsFieldValid(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return false;
        }
        return field.meta.valid;
    });
}

/**
 * If the form is submitting or not
 */
function useIsSubmitting() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.isSubmitting.value) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validates a single field
 */
function useValidateField(path) {
    const form = injectWithSelf(FormContextKey);
    let field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return function validateField() {
        if (path) {
            field = normalizeField(form === null || form === void 0 ? void 0 : form.fieldsByPath.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)]);
        }
        if (!field) {
            warn(`field with name ${(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)} was not found`);
            return Promise.resolve({
                errors: [],
                valid: true,
            });
        }
        return field.validate();
    };
}

/**
 * If the form is dirty or not
 */
function useIsFormDirty() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.dirty) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form is touched or not
 */
function useIsFormTouched() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.touched) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * If the form has been validated and is valid
 */
function useIsFormValid() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.meta.value.valid) !== null && _a !== void 0 ? _a : false;
    });
}

/**
 * Validate multiple fields
 */
function useValidateForm() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return function validateField() {
        if (!form) {
            return Promise.resolve({ results: {}, errors: {}, valid: true });
        }
        return form.validate();
    };
}

/**
 * The number of form's submission count
 */
function useSubmitCount() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = form === null || form === void 0 ? void 0 : form.submitCount.value) !== null && _a !== void 0 ? _a : 0;
    });
}

/**
 * Gives access to a field's current value
 */
function useFieldValue(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            return getFromPath(form === null || form === void 0 ? void 0 : form.values, (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path));
        }
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(field === null || field === void 0 ? void 0 : field.value);
    });
}

/**
 * Gives access to a form's values
 */
function useFormValues() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return (form === null || form === void 0 ? void 0 : form.values) || {};
    });
}

/**
 * Gives access to all form errors
 */
function useFormErrors() {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return ((form === null || form === void 0 ? void 0 : form.errors.value) || {});
    });
}

/**
 * Gives access to a single field error
 */
function useFieldError(path) {
    const form = injectWithSelf(FormContextKey);
    // We don't want to use self injected context as it doesn't make sense
    const field = path ? undefined : (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(FieldContextKey);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (path) {
            return form === null || form === void 0 ? void 0 : form.errors.value[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(path)];
        }
        return field === null || field === void 0 ? void 0 : field.errorMessage.value;
    });
}

function useSubmitForm(cb) {
    const form = injectWithSelf(FormContextKey);
    if (!form) {
        warn('No vee-validate <Form /> or `useForm` was detected in the component tree');
    }
    const onSubmit = form ? form.handleSubmit(cb) : undefined;
    return function submitForm(e) {
        if (!onSubmit) {
            return;
        }
        return onSubmit(e);
    };
}




/***/ }),

/***/ "./resources/js/components/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Login.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_6bdc8b8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=6bdc8b8e */ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/components/Login.vue?vue&type=script&lang=js");
/* harmony import */ var C_MAMP_htdocs_sikm_kemenagpessel_com_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_MAMP_htdocs_sikm_kemenagpessel_com_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Login_vue_vue_type_template_id_6bdc8b8e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_6bdc8b8e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_6bdc8b8e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=6bdc8b8e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Login.vue?vue&type=template&id=6bdc8b8e");


/***/ }),

/***/ "./node_modules/yup/index.esm.js":
/*!***************************************!*\
  !*** ./node_modules/yup/index.esm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArraySchema": () => (/* binding */ ArraySchema),
/* harmony export */   "BooleanSchema": () => (/* binding */ BooleanSchema),
/* harmony export */   "DateSchema": () => (/* binding */ DateSchema),
/* harmony export */   "MixedSchema": () => (/* binding */ MixedSchema),
/* harmony export */   "NumberSchema": () => (/* binding */ NumberSchema),
/* harmony export */   "ObjectSchema": () => (/* binding */ ObjectSchema),
/* harmony export */   "Schema": () => (/* binding */ Schema),
/* harmony export */   "StringSchema": () => (/* binding */ StringSchema),
/* harmony export */   "TupleSchema": () => (/* binding */ TupleSchema),
/* harmony export */   "ValidationError": () => (/* binding */ ValidationError),
/* harmony export */   "addMethod": () => (/* binding */ addMethod),
/* harmony export */   "array": () => (/* binding */ create$2),
/* harmony export */   "bool": () => (/* binding */ create$7),
/* harmony export */   "boolean": () => (/* binding */ create$7),
/* harmony export */   "date": () => (/* binding */ create$4),
/* harmony export */   "defaultLocale": () => (/* binding */ locale),
/* harmony export */   "getIn": () => (/* binding */ getIn),
/* harmony export */   "isSchema": () => (/* binding */ isSchema),
/* harmony export */   "lazy": () => (/* binding */ create),
/* harmony export */   "mixed": () => (/* binding */ create$8),
/* harmony export */   "number": () => (/* binding */ create$5),
/* harmony export */   "object": () => (/* binding */ create$3),
/* harmony export */   "reach": () => (/* binding */ reach),
/* harmony export */   "ref": () => (/* binding */ create$9),
/* harmony export */   "setLocale": () => (/* binding */ setLocale),
/* harmony export */   "string": () => (/* binding */ create$6),
/* harmony export */   "tuple": () => (/* binding */ create$1)
/* harmony export */ });
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-expr */ "./node_modules/property-expr/index.js");
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(property_expr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-case */ "./node_modules/tiny-case/index.js");
/* harmony import */ var tiny_case__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_case__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var toposort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! toposort */ "./node_modules/toposort/index.js");
/* harmony import */ var toposort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toposort__WEBPACK_IMPORTED_MODULE_2__);




const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : () => '';
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val) return 'NaN';
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? '-0' : '' + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false) return '' + val;
  const typeOf = typeof val;
  if (typeOf === 'number') return printNumber(val);
  if (typeOf === 'string') return quoteStrings ? `"${val}"` : val;
  if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
  if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
  const tag = toString.call(val).slice(8, -1);
  if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
  if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
  if (tag === 'RegExp') return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;
  return JSON.stringify(value, function (key, value) {
    let result = printSimpleValue(this[key], quoteStrings);
    if (result !== null) return result;
    return value;
  }, 2);
}

function toArray(value) {
  return value == null ? [] : [].concat(value);
}

let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || 'this';
    if (path !== params.path) params = Object.assign({}, params, {
      path
    });
    if (typeof message === 'string') return message.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message === 'function') return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === 'ValidationError';
  }
  constructor(errorOrErrors, value, field, type) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this.name = 'ValidationError';
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach(err => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
  }
}

let mixed = {
  default: '${path} is invalid',
  required: '${path} is a required field',
  defined: '${path} must be defined',
  notNull: '${path} cannot be null',
  oneOf: '${path} must be one of the following values: ${values}',
  notOneOf: '${path} must not be one of the following values: ${values}',
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : '.';
    return type !== 'mixed' ? `${path} must be a \`${type}\` type, ` + `but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. ` + `The validated value was: \`${printValue(value, true)}\`` + castMsg;
  }
};
let string = {
  length: '${path} must be exactly ${length} characters',
  min: '${path} must be at least ${min} characters',
  max: '${path} must be at most ${max} characters',
  matches: '${path} must match the following: "${regex}"',
  email: '${path} must be a valid email',
  url: '${path} must be a valid URL',
  uuid: '${path} must be a valid UUID',
  trim: '${path} must be a trimmed string',
  lowercase: '${path} must be a lowercase string',
  uppercase: '${path} must be a upper case string'
};
let number = {
  min: '${path} must be greater than or equal to ${min}',
  max: '${path} must be less than or equal to ${max}',
  lessThan: '${path} must be less than ${less}',
  moreThan: '${path} must be greater than ${more}',
  positive: '${path} must be a positive number',
  negative: '${path} must be a negative number',
  integer: '${path} must be an integer'
};
let date = {
  min: '${path} field must be later than ${min}',
  max: '${path} field must be at earlier than ${max}'
};
let boolean = {
  isValue: '${path} field must be ${value}'
};
let object = {
  noUnknown: '${path} field has unspecified keys: ${unknown}'
};
let array = {
  min: '${path} field must have at least ${min} items',
  max: '${path} field must have less than or equal to ${max} items',
  length: '${path} must have ${length} items'
};
let tuple = {
  notType: params => {
    const {
      path,
      value,
      spec
    } = params;
    const typeLen = spec.types.length;
    if (Array.isArray(value)) {
      if (value.length < typeLen) return `${path} tuple value has too few items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
      if (value.length > typeLen) return `${path} tuple value has too many items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
    }
    return ValidationError.formatError(mixed.notType, params);
  }
};
var locale = Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});

const isSchema = obj => obj && obj.__isYupSchema__;

class Condition {
  static fromOptions(refs, config) {
    if (!config.then && !config.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let {
      is,
      then,
      otherwise
    } = config;
    let check = typeof is === 'function' ? is : (...values) => values.every(value => value === is);
    return new Condition(refs, (values, schema) => {
      var _branch;
      let branch = check(...values) ? then : otherwise;
      return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
    });
  }
  constructor(refs, builder) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    this.fn = builder;
  }
  resolve(base, options) {
    let values = this.refs.map(ref =>
    // TODO: ? operator here?
    ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn(values, base, options);
    if (schema === undefined ||
    // @ts-ignore this can be base
    schema === base) {
      return base;
    }
    if (!isSchema(schema)) throw new TypeError('conditions must return a schema object');
    return schema.resolve(options);
  }
}

const prefixes = {
  context: '$',
  value: '.'
};
function create$9(key, options) {
  return new Reference(key, options);
}
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
    this.key = key.trim();
    if (key === '') throw new TypeError('ref must be a non-empty string');
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.getter)(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter) result = this.getter(result || {});
    if (this.map) result = this.map(result);
    return result;
  }

  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: 'ref',
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}

// @ts-ignore
Reference.prototype.__isYupRef = true;

const isAbsent = value => value == null;

function createValidation(config) {
  function validate({
    value,
    path = '',
    options,
    originalValue,
    schema
  }, panic, next) {
    const {
      name,
      test,
      params,
      message,
      skipAbsent
    } = config;
    let {
      parent,
      context,
      abortEarly = schema.spec.abortEarly
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = Object.assign({
        value,
        originalValue,
        label: schema.spec.label,
        path: overrides.path || path,
        spec: schema.spec
      }, params, overrides.params);
      for (const key of Object.keys(nextParams)) nextParams[key] = resolve(nextParams[key]);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }
    const invalid = abortEarly ? panic : next;
    let ctx = {
      path,
      parent,
      type: name,
      from: options.from,
      createError,
      resolve,
      options,
      originalValue,
      schema
    };
    const handleResult = validOrError => {
      if (ValidationError.isError(validOrError)) invalid(validOrError);else if (!validOrError) invalid(createError());else next(null);
    };
    const handleError = err => {
      if (ValidationError.isError(err)) invalid(err);else panic(err);
    };
    const shouldSkip = skipAbsent && isAbsent(value);
    if (!options.sync) {
      try {
        Promise.resolve(!shouldSkip ? test.call(ctx, value, ctx) : true).then(handleResult, handleError);
      } catch (err) {
        handleError(err);
      }
      return;
    }
    let result;
    try {
      var _result;
      result = !shouldSkip ? test.call(ctx, value, ctx) : true;
      if (typeof ((_result = result) == null ? void 0 : _result.then) === 'function') {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` + `This test will finish after the validate call has returned`);
      }
    } catch (err) {
      handleError(err);
      return;
    }
    handleResult(result);
  }
  validate.OPTIONS = config;
  return validate;
}

function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;

  // root path: ''
  if (!path) return {
    parent,
    parentPath: path,
    schema
  };
  (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.forEach)(path, (_part, isBracket, isArray) => {
    let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    let isTuple = schema.type === 'tuple';
    let idx = isArray ? parseInt(part, 10) : 0;
    if (schema.innerType || isTuple) {
      if (isTuple && !isArray) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. ` + `because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = isTuple ? schema.spec.types[idx] : schema.innerType;
    }

    // sometimes the array index part of a path doesn't exist: "nested.arr.child"
    // in these cases the current part is the next schema and should be processed
    // in this iteration. For cases where the index signature is included this
    // check will fail and we'll handle the `child` part on the next iteration like normal
    if (!isArray) {
      if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. ` + `(failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
function reach(obj, path, value, context) {
  return getIn(obj, path, value, context).schema;
}

class ReferenceSet extends Set {
  describe() {
    const description = [];
    for (const item of this.values()) {
      description.push(Reference.isRef(item) ? item.describe() : item);
    }
    return description;
  }
  resolveAll(resolve) {
    let result = [];
    for (const item of this.values()) {
      result.push(resolve(item));
    }
    return result;
  }
  clone() {
    return new ReferenceSet(this.values());
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.forEach(value => next.add(value));
    removeItems.forEach(value => next.delete(value));
    return next;
  }
}

// tweaked from https://github.com/Kelin2025/nanoclone/blob/0abeb7635bda9b68ef2277093f76dbe3bf3948e1/src/index.js
function clone(src, seen = new Map()) {
  if (isSchema(src) || !src || typeof src !== 'object') return src;
  if (seen.has(src)) return seen.get(src);
  let copy;
  if (src instanceof Date) {
    // Date
    copy = new Date(src.getTime());
    seen.set(src, copy);
  } else if (src instanceof RegExp) {
    // RegExp
    copy = new RegExp(src);
    seen.set(src, copy);
  } else if (Array.isArray(src)) {
    // Array
    copy = new Array(src.length);
    seen.set(src, copy);
    for (let i = 0; i < src.length; i++) copy[i] = clone(src[i], seen);
  } else if (src instanceof Map) {
    // Map
    copy = new Map();
    seen.set(src, copy);
    for (const [k, v] of src.entries()) copy.set(k, clone(v, seen));
  } else if (src instanceof Set) {
    // Set
    copy = new Set();
    seen.set(src, copy);
    for (const v of src) copy.add(clone(v, seen));
  } else if (src instanceof Object) {
    // Object
    copy = {};
    seen.set(src, copy);
    for (const [k, v] of Object.entries(src)) copy[k] = clone(v, seen);
  } else {
    throw Error(`Unable to clone ${src}`);
  }
  return copy;
}

class Schema {
  constructor(options) {
    this.type = void 0;
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this.internalTests = {};
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = Object.create(null);
    this._typeCheck = void 0;
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = options.type;
    this._typeCheck = options.check;
    this.spec = Object.assign({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      optional: true,
      coerce: true
    }, options == null ? void 0 : options.spec);
    this.withMutation(s => {
      s.nonNullable();
    });
  }

  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec) Object.assign(this.spec, spec);
      return this;
    }

    // if the nested value is a schema we can skip cloning, since
    // they are already immutable
    const next = Object.create(Object.getPrototypeOf(this));

    // @ts-expect-error this is readonly
    next.type = this.type;
    next._typeCheck = this._typeCheck;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.internalTests = Object.assign({}, this.internalTests);
    next.exclusiveTests = Object.assign({}, this.exclusiveTests);

    // @ts-expect-error this is readonly
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(Object.assign({}, this.spec, spec));
    return next;
  }
  label(label) {
    let next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this) return this;
    if (schema.type !== this.type && this.type !== 'mixed') throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = Object.assign({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);

    // manually merge the blacklist/whitelist (the other `schema` takes
    // precedence in case of conflicts)
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);

    // start with the current tests
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;

    // manually add the new tests to ensure
    // the deduping logic is consistent
    combined.withMutation(next => {
      schema.tests.forEach(fn => {
        next.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v) {
    if (v == null) {
      if (this.spec.nullable && v === null) return true;
      if (this.spec.optional && v === undefined) return true;
      return false;
    }
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  resolveOptions(options) {
    var _options$strict, _options$abortEarly, _options$recursive;
    return Object.assign({}, options, {
      from: options.from || [],
      strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
      abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
      recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive
    });
  }

  /**
   * Run the configured transform pipeline over an input value.
   */

  cast(value, options = {}) {
    let resolvedSchema = this.resolve(Object.assign({
      value
    }, options));
    let allowOptionality = options.assert === 'ignore-optionality';
    let result = resolvedSchema._cast(value, options);
    if (options.assert !== false && !resolvedSchema.isType(result)) {
      if (allowOptionality && isAbsent(result)) {
        return result;
      }
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || 'field'} could not be cast to a value ` + `that satisfies the schema type: "${resolvedSchema.type}". \n\n` + `attempted value: ${formattedValue} \n` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ''));
    }
    return result;
  }
  _cast(rawValue, _options) {
    let value = rawValue === undefined ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
    if (value === undefined) {
      value = this.getDefault();
    }
    return value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      path,
      originalValue = _value,
      strict = this.spec.strict
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, Object.assign({
        assert: false
      }, options));
    }
    let initialTests = [];
    for (let test of Object.values(this.internalTests)) {
      if (test) initialTests.push(test);
    }
    this.runTests({
      path,
      value,
      originalValue,
      options,
      tests: initialTests
    }, panic, initialErrors => {
      // even if we aren't ending early we can't proceed further if the types aren't correct
      if (initialErrors.length) {
        return next(initialErrors, value);
      }
      this.runTests({
        path,
        value,
        originalValue,
        options,
        tests: this.tests
      }, panic, next);
    });
  }

  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(runOptions, panic, next) {
    let fired = false;
    let {
      tests,
      value,
      originalValue,
      path,
      options
    } = runOptions;
    let panicOnce = arg => {
      if (fired) return;
      fired = true;
      panic(arg, value);
    };
    let nextOnce = arg => {
      if (fired) return;
      fired = true;
      next(arg, value);
    };
    let count = tests.length;
    let nestedErrors = [];
    if (!count) return nextOnce([]);
    let args = {
      value,
      originalValue,
      path,
      options,
      schema: this
    };
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      test(args, panicOnce, function finishTestRun(err) {
        if (err) {
          nestedErrors = nestedErrors.concat(err);
        }
        if (--count <= 0) {
          nextOnce(nestedErrors);
        }
      });
    }
  }
  asNestedTest({
    key,
    index,
    parent,
    parentPath,
    originalParent,
    options
  }) {
    const k = key != null ? key : index;
    if (k == null) {
      throw TypeError('Must include `key` or `index` for nested validations');
    }
    const isIndex = typeof k === 'number';
    let value = parent[k];
    const testOptions = Object.assign({}, options, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: true,
      parent,
      value,
      originalValue: originalParent[k],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: undefined,
      // index: undefined,
      [isIndex ? 'index' : 'key']: k,
      path: isIndex || k.includes('.') ? `${parentPath || ''}[${value ? k : `"${k}"`}]` : (parentPath ? `${parentPath}.` : '') + key
    });
    return (_, panic, next) => this.resolve(testOptions)._validate(value, testOptions, panic, next);
  }
  validate(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      reject(error);
    }, (errors, validated) => {
      if (errors.length) reject(new ValidationError(errors, validated));else resolve(validated);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let result;
    schema._validate(value, Object.assign({}, options, {
      sync: true
    }), (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      throw error;
    }, (errors, validated) => {
      if (errors.length) throw new ValidationError(errors, value);
      result = validated;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, err => {
      if (ValidationError.isError(err)) return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err)) return false;
      throw err;
    }
  }
  _getDefault() {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === 'function' ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options
  // If schema is defaulted we know it's at least not undefined
  ) {
    let schema = this.resolve(options || {});
    return schema._getDefault();
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    return this.clone({
      strict: isStrict
    });
  }
  nullability(nullable, message) {
    const next = this.clone({
      nullable
    });
    next.internalTests.nullable = createValidation({
      message,
      name: 'nullable',
      test(value) {
        return value === null ? this.schema.spec.nullable : true;
      }
    });
    return next;
  }
  optionality(optional, message) {
    const next = this.clone({
      optional
    });
    next.internalTests.optionality = createValidation({
      message,
      name: 'optionality',
      test(value) {
        return value === undefined ? this.schema.spec.optional : true;
      }
    });
    return next;
  }
  optional() {
    return this.optionality(true);
  }
  defined(message = mixed.defined) {
    return this.optionality(false, message);
  }
  nullable() {
    return this.nullability(true);
  }
  nonNullable(message = mixed.notNull) {
    return this.nullability(false, message);
  }
  required(message = mixed.required) {
    return this.clone().withMutation(next => next.nonNullable(message).defined(message));
  }
  notRequired() {
    return this.clone().withMutation(next => next.nullable().optional());
  }
  transform(fn) {
    let next = this.clone();
    next.transforms.push(fn);
    return next;
  }

  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */

  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === 'function') {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === undefined) opts.message = mixed.default;
    if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
    let next = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name) throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    }
    if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter(fn => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive) return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
      }
      return true;
    });
    next.tests.push(validate);
    return next;
  }
  when(keys, options) {
    if (!Array.isArray(keys) && typeof keys !== 'string') {
      options = keys;
      keys = '.';
    }
    let next = this.clone();
    let deps = toArray(keys).map(key => new Reference(key));
    deps.forEach(dep => {
      // @ts-ignore readonly array
      if (dep.isSibling) next.deps.push(dep.key);
    });
    next.conditions.push(typeof options === 'function' ? new Condition(deps, options) : Condition.fromOptions(deps, options));
    return next;
  }
  typeError(message) {
    let next = this.clone();
    next.internalTests.typeError = createValidation({
      message,
      name: 'typeError',
      test(value) {
        if (!isAbsent(value) && !this.schema._typeCheck(value)) return this.createError({
          params: {
            type: this.schema.type
          }
        });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next.internalTests.whiteList = createValidation({
      message,
      name: 'oneOf',
      skipAbsent: true,
      test(value) {
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: Array.from(valids).join(', '),
            resolved
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next.internalTests.blacklist = createValidation({
      message,
      name: 'notOneOf',
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value)) return this.createError({
          params: {
            values: Array.from(invalids).join(', '),
            resolved
          }
        });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }

  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(options) {
    const next = (options ? this.resolve(options) : this).clone();
    const {
      label,
      meta,
      optional,
      nullable
    } = next.spec;
    const description = {
      meta,
      label,
      optional,
      nullable,
      default: next.getDefault(options),
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map(fn => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list) => list.findIndex(c => c.name === n.name) === idx)
    };
    return description;
  }
}
// @ts-expect-error
Schema.prototype.__isYupSchema__ = true;
for (const method of ['validate', 'validateSync']) Schema.prototype[`${method}At`] = function (path, value, options = {}) {
  const {
    parent,
    parentPath,
    schema
  } = getIn(this, path, value, options.context);
  return schema[method](parent && parent[parentPath], Object.assign({}, options, {
    parent,
    path
  }));
};
for (const alias of ['equals', 'is']) Schema.prototype[alias] = Schema.prototype.oneOf;
for (const alias of ['not', 'nope']) Schema.prototype[alias] = Schema.prototype.notOneOf;

const returnsTrue = () => true;
function create$8(spec) {
  return new MixedSchema(spec);
}
class MixedSchema extends Schema {
  constructor(spec) {
    super(typeof spec === 'function' ? {
      type: 'mixed',
      check: spec
    } : Object.assign({
      type: 'mixed',
      check: returnsTrue
    }, spec));
  }
}
create$8.prototype = MixedSchema.prototype;

function create$7() {
  return new BooleanSchema();
}
class BooleanSchema extends Schema {
  constructor() {
    super({
      type: 'boolean',
      check(v) {
        if (v instanceof Boolean) v = v.valueOf();
        return typeof v === 'boolean';
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (ctx.spec.coerce && !ctx.isType(value)) {
          if (/^(true|1)$/i.test(String(value))) return true;
          if (/^(false|0)$/i.test(String(value))) return false;
        }
        return value;
      });
    });
  }
  isTrue(message = boolean.isValue) {
    return this.test({
      message,
      name: 'is-value',
      exclusive: true,
      params: {
        value: 'true'
      },
      test(value) {
        return isAbsent(value) || value === true;
      }
    });
  }
  isFalse(message = boolean.isValue) {
    return this.test({
      message,
      name: 'is-value',
      exclusive: true,
      params: {
        value: 'false'
      },
      test(value) {
        return isAbsent(value) || value === false;
      }
    });
  }
  default(def) {
    return super.default(def);
  }
  defined(msg) {
    return super.defined(msg);
  }
  optional() {
    return super.optional();
  }
  required(msg) {
    return super.required(msg);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(msg) {
    return super.nonNullable(msg);
  }
  strip(v) {
    return super.strip(v);
  }
}
create$7.prototype = BooleanSchema.prototype;

// Taken from HTML spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
let rEmail =
// eslint-disable-next-line
/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let rUrl =
// eslint-disable-next-line
/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

// eslint-disable-next-line
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = value => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$6() {
  return new StringSchema();
}
class StringSchema extends Schema {
  constructor() {
    super({
      type: 'string',
      check(value) {
        if (value instanceof String) value = value.valueOf();
        return typeof value === 'string';
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value)) return value;

        // don't ever convert arrays
        if (Array.isArray(value)) return value;
        const strValue = value != null && value.toString ? value.toString() : value;

        // no one wants plain objects converted to [Object object]
        if (strValue === objStringTag) return value;
        return strValue;
      });
    });
  }
  required(message) {
    return super.required(message).withMutation(schema => schema.test({
      message: message || mixed.required,
      name: 'required',
      skipAbsent: true,
      test: value => !!value.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation(schema => {
      schema.tests = schema.tests.filter(t => t.OPTIONS.name !== 'required');
      return schema;
    });
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: 'length',
      exclusive: true,
      params: {
        length
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: 'max',
      exclusive: true,
      message,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;
    if (options) {
      if (typeof options === 'object') {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || 'matches',
      message: message || string.matches,
      params: {
        regex
      },
      skipAbsent: true,
      test: value => value === '' && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: 'email',
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: 'url',
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: 'uuid',
      message,
      excludeEmptyString: false
    });
  }

  //-- transforms --
  ensure() {
    return this.default('').transform(val => val === null ? '' : val);
  }
  trim(message = string.trim) {
    return this.transform(val => val != null ? val.trim() : val).test({
      message,
      name: 'trim',
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform(value => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      skipAbsent: true,
      test: value => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform(value => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      skipAbsent: true,
      test: value => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$6.prototype = StringSchema.prototype;

//
// String Interfaces
//

let isNaN$1 = value => value != +value;
function create$5() {
  return new NumberSchema();
}
class NumberSchema extends Schema {
  constructor() {
    super({
      type: 'number',
      check(value) {
        if (value instanceof Number) value = value.valueOf();
        return typeof value === 'number' && !isNaN$1(value);
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce) return value;
        let parsed = value;
        if (typeof parsed === 'string') {
          parsed = parsed.replace(/\s/g, '');
          if (parsed === '') return NaN;
          // don't use parseFloat to avoid positives on alpha-numeric strings
          parsed = +parsed;
        }
        if (ctx.isType(parsed)) return parsed;
        return parseFloat(parsed);
      });
    });
  }
  min(min, message = number.min) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(min);
      }
    });
  }
  max(max, message = number.max) {
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(max);
      }
    });
  }
  lessThan(less, message = number.lessThan) {
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        less
      },
      skipAbsent: true,
      test(value) {
        return value < this.resolve(less);
      }
    });
  }
  moreThan(more, message = number.moreThan) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        more
      },
      skipAbsent: true,
      test(value) {
        return value > this.resolve(more);
      }
    });
  }
  positive(msg = number.positive) {
    return this.moreThan(0, msg);
  }
  negative(msg = number.negative) {
    return this.lessThan(0, msg);
  }
  integer(message = number.integer) {
    return this.test({
      name: 'integer',
      message,
      skipAbsent: true,
      test: val => Number.isInteger(val)
    });
  }
  truncate() {
    return this.transform(value => !isAbsent(value) ? value | 0 : value);
  }
  round(method) {
    var _method;
    let avail = ['ceil', 'floor', 'round', 'trunc'];
    method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || 'round';

    // this exists for symemtry with the new Math.trunc
    if (method === 'trunc') return this.truncate();
    if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
    return this.transform(value => !isAbsent(value) ? Math[method](value) : value);
  }
}
create$5.prototype = NumberSchema.prototype;

//
// Number Interfaces
//

/* eslint-disable */
/**
 *
 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
 * NON-CONFORMANT EDITION.
 * © 2011 Colin Snover <http://zetafleet.com>
 * Released under MIT license.
 */

//              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11],
    minutesOffset = 0,
    timestamp,
    struct;
  if (struct = isoReg.exec(date)) {
    // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
    for (var i = 0, k; k = numericKeys[i]; ++i) struct[k] = +struct[k] || 0;

    // allow undefined days and months
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;

    // allow arbitrary sub-second precision beyond milliseconds
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;

    // timestamps without timezone identifiers should be considered local time
    if ((struct[8] === undefined || struct[8] === '') && (struct[9] === undefined || struct[9] === '')) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);else {
      if (struct[8] !== 'Z' && struct[9] !== undefined) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else timestamp = Date.parse ? Date.parse(date) : NaN;
  return timestamp;
}

// @ts-ignore
let invalidDate = new Date('');
let isDate = obj => Object.prototype.toString.call(obj) === '[object Date]';
function create$4() {
  return new DateSchema();
}
class DateSchema extends Schema {
  constructor() {
    super({
      type: 'date',
      check(v) {
        return isDate(v) && !isNaN(v.getTime());
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value)) return value;
        value = parseIsoDate(value);

        // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.
        return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
      });
    });
  }
  prepareParam(ref, name) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, 'min');
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    let limit = this.prepareParam(max, 'max');
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
create$4.prototype = DateSchema.prototype;
create$4.INVALID_DATE = invalidDate;

// @ts-expect-error
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = new Set();
  let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
  function addNode(depPath, key) {
    let node = (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.split)(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`)) edges.push([key, node]);
  }
  for (const key of Object.keys(fields)) {
    let value = fields[key];
    nodes.add(key);
    if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);else if (isSchema(value) && 'deps' in value) value.deps.forEach(path => addNode(path, key));
  }
  return toposort__WEBPACK_IMPORTED_MODULE_2___default().array(Array.from(nodes), edges).reverse();
}

function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if ((_err$path = err.path) != null && _err$path.includes(key)) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys) {
  return (a, b) => {
    return findIndex(keys, a) - findIndex(keys, b);
  };
}

const parseJson = (value, _, ctx) => {
  if (typeof value !== 'string') {
    return value;
  }
  let parsed = value;
  try {
    parsed = JSON.parse(value);
  } catch (err) {
    /* */
  }
  return ctx.isType(parsed) ? parsed : value;
};

// @ts-ignore
function deepPartial(schema) {
  if ('fields' in schema) {
    const partial = {};
    for (const [key, fieldSchema] of Object.entries(schema.fields)) {
      partial[key] = deepPartial(fieldSchema);
    }
    return schema.setFields(partial);
  }
  if (schema.type === 'array') {
    const nextArray = schema.optional();
    if (nextArray.innerType) nextArray.innerType = deepPartial(nextArray.innerType);
    return nextArray;
  }
  if (schema.type === 'tuple') {
    return schema.optional().clone({
      types: schema.spec.types.map(deepPartial)
    });
  }
  if ('optional' in schema) {
    return schema.optional();
  }
  return schema;
}
const deepHas = (obj, p) => {
  const path = [...(0,property_expr__WEBPACK_IMPORTED_MODULE_0__.normalizePath)(p)];
  if (path.length === 1) return path[0] in obj;
  let last = path.pop();
  let parent = (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.getter)((0,property_expr__WEBPACK_IMPORTED_MODULE_0__.join)(path), true)(obj);
  return !!(parent && last in parent);
};
let isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter(key => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
function create$3(spec) {
  return new ObjectSchema(spec);
}
class ObjectSchema extends Schema {
  constructor(spec) {
    super({
      type: 'object',
      check(value) {
        return isObject(value) || typeof value === 'function';
      }
    });
    this.fields = Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);

    //should ignore nulls here
    if (value === undefined) return this.getDefault();
    if (!this._typeCheck(value)) return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = [].concat(this._nodes, Object.keys(value).filter(v => !this._nodes.includes(v)));
    let intermediateValue = {}; // is filled during the transform below
    let innerOptions = Object.assign({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = (prop in value);
      if (field) {
        let fieldValue;
        let inputValue = value[prop];

        // safe to mutate since this is fired in sequence
        innerOptions.path = (options.path ? `${options.path}.` : '') + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = field instanceof Schema ? field.spec : undefined;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec != null && fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ?
        // TODO: use _cast, this is double resolving
        field.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== undefined) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      from = [],
      originalValue = _value,
      recursive = this.spec.recursive
    } = options;
    options.from = [{
      schema: this,
      value: originalValue
    }, ...from];
    // this flag is needed for handling `strict` correctly in the context of
    // validation vs just casting. e.g strict() on a field is only used when validating
    options.__validating = true;
    options.originalValue = originalValue;
    super._validate(_value, options, panic, (objectErrors, value) => {
      if (!recursive || !isObject(value)) {
        next(objectErrors, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = [];
      for (let key of this._nodes) {
        let field = this.fields[key];
        if (!field || Reference.isRef(field)) {
          continue;
        }
        tests.push(field.asNestedTest({
          options,
          key,
          parent: value,
          parentPath: options.path,
          originalParent: originalValue
        }));
      }
      this.runTests({
        tests,
        value,
        originalValue,
        options
      }, panic, fieldErrors => {
        next(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
      });
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.fields = Object.assign({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }
  concat(schema) {
    let next = super.concat(schema);
    let nextFields = next.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      nextFields[field] = target === undefined ? schemaOrRef : target;
    }
    return next.withMutation(s => s.setFields(nextFields, this._excludedEdges));
  }
  _getDefault() {
    if ('default' in this.spec) {
      return super._getDefault();
    }

    // if there is no default set invent one
    if (!this._nodes.length) {
      return undefined;
    }
    let dft = {};
    this._nodes.forEach(key => {
      const field = this.fields[key];
      dft[key] = field && 'getDefault' in field ? field.getDefault() : undefined;
    });
    return dft;
  }
  setFields(shape, excludedEdges) {
    let next = this.clone();
    next.fields = shape;
    next._nodes = sortFields(shape, excludedEdges);
    next._sortErrors = sortByKeyOrder(Object.keys(shape));
    // XXX: this carries over edges which may not be what you want
    if (excludedEdges) next._excludedEdges = excludedEdges;
    return next;
  }
  shape(additions, excludes = []) {
    return this.clone().withMutation(next => {
      let edges = next._excludedEdges;
      if (excludes.length) {
        if (!Array.isArray(excludes[0])) excludes = [excludes];
        edges = [...next._excludedEdges, ...excludes];
      }

      // XXX: excludes here is wrong
      return next.setFields(Object.assign(next.fields, additions), edges);
    });
  }
  partial() {
    const partial = {};
    for (const [key, schema] of Object.entries(this.fields)) {
      partial[key] = 'optional' in schema && schema.optional instanceof Function ? schema.optional() : schema;
    }
    return this.setFields(partial);
  }
  deepPartial() {
    const next = deepPartial(this);
    return next;
  }
  pick(keys) {
    const picked = {};
    for (const key of keys) {
      if (this.fields[key]) picked[key] = this.fields[key];
    }
    return this.setFields(picked);
  }
  omit(keys) {
    const fields = Object.assign({}, this.fields);
    for (const key of keys) {
      delete fields[key];
    }
    return this.setFields(fields);
  }
  from(from, to, alias) {
    let fromGetter = (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.getter)(from, true);
    return this.transform(obj => {
      if (!obj) return obj;
      let newObj = obj;
      if (deepHas(obj, from)) {
        newObj = Object.assign({}, obj);
        if (!alias) delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }

  /** Parse an input JSON string to an object */
  json() {
    return this.transform(parseJson);
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow !== 'boolean') {
      message = noAllow;
      noAllow = true;
    }
    let next = this.test({
      name: 'noUnknown',
      exclusive: true,
      message: message,
      test(value) {
        if (value == null) return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(', ')
          }
        });
      }
    });
    next.spec.noUnknown = noAllow;
    return next;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn) {
    return this.transform(obj => {
      if (!obj) return obj;
      const result = {};
      for (const key of Object.keys(obj)) result[fn(key)] = obj[key];
      return result;
    });
  }
  camelCase() {
    return this.transformKeys(tiny_case__WEBPACK_IMPORTED_MODULE_1__.camelCase);
  }
  snakeCase() {
    return this.transformKeys(tiny_case__WEBPACK_IMPORTED_MODULE_1__.snakeCase);
  }
  constantCase() {
    return this.transformKeys(key => (0,tiny_case__WEBPACK_IMPORTED_MODULE_1__.snakeCase)(key).toUpperCase());
  }
  describe(options) {
    let base = super.describe(options);
    base.fields = {};
    for (const [key, value] of Object.entries(this.fields)) {
      var _innerOptions;
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      base.fields[key] = value.describe(innerOptions);
    }
    return base;
  }
}
create$3.prototype = ObjectSchema.prototype;

function create$2(type) {
  return new ArraySchema(type);
}
class ArraySchema extends Schema {
  constructor(type) {
    super({
      type: 'array',
      check(v) {
        return Array.isArray(v);
      }
    });

    // `undefined` specifically means uninitialized, as opposed to "no subtype"
    this.innerType = void 0;
    this.innerType = type;
  }
  _cast(_value, _opts) {
    const value = super._cast(_value, _opts);

    // should ignore nulls here
    if (!this._typeCheck(value) || !this.innerType) {
      return value;
    }
    let isChanged = false;
    const castArray = value.map((v, idx) => {
      const castElement = this.innerType.cast(v, Object.assign({}, _opts, {
        path: `${_opts.path || ''}[${idx}]`
      }));
      if (castElement !== v) {
        isChanged = true;
      }
      return castElement;
    });
    return isChanged ? castArray : value;
  }
  _validate(_value, options = {}, panic, next) {
    var _options$recursive;
    // let sync = options.sync;
    // let path = options.path;
    let innerType = this.innerType;
    // let endEarly = options.abortEarly ?? this.spec.abortEarly;
    let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
    options.originalValue != null ? options.originalValue : _value;
    super._validate(_value, options, panic, (arrayErrors, value) => {
      var _options$originalValu2;
      if (!recursive || !innerType || !this._typeCheck(value)) {
        next(arrayErrors, value);
        return;
      }

      // #950 Ensure that sparse array empty slots are validated
      let tests = new Array(value.length);
      for (let index = 0; index < value.length; index++) {
        var _options$originalValu;
        tests[index] = innerType.asNestedTest({
          options,
          index,
          parent: value,
          parentPath: options.path,
          originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
        });
      }
      this.runTests({
        value,
        tests,
        originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
        options
      }, panic, innerTypeErrors => next(innerTypeErrors.concat(arrayErrors), value));
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    // @ts-expect-error readonly
    next.innerType = this.innerType;
    return next;
  }

  /** Parse an input JSON string to an object */
  json() {
    return this.transform(parseJson);
  }
  concat(schema) {
    let next = super.concat(schema);

    // @ts-expect-error readonly
    next.innerType = this.innerType;
    if (schema.innerType)
      // @ts-expect-error readonly
      next.innerType = next.innerType ?
      // @ts-expect-error Lazy doesn't have concat and will break
      next.innerType.concat(schema.innerType) : schema.innerType;
    return next;
  }
  of(schema) {
    // FIXME: this should return a new instance of array without the default to be
    let next = this.clone();
    if (!isSchema(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + printValue(schema));

    // @ts-expect-error readonly
    next.innerType = schema;
    return next;
  }
  length(length, message = array.length) {
    return this.test({
      message,
      name: 'length',
      exclusive: true,
      params: {
        length
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length);
      }
    });
  }
  min(min, message) {
    message = message || array.min;
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      // FIXME(ts): Array<typeof T>
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message) {
    message = message || array.max;
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((val, original) => {
      // We don't want to return `null` for nullable schema
      if (this._typeCheck(val)) return val;
      return original == null ? [] : [].concat(original);
    });
  }
  compact(rejector) {
    let reject = !rejector ? v => !!v : (v, i, a) => !rejector(v, i, a);
    return this.transform(values => values != null ? values.filter(reject) : values);
  }
  describe(options) {
    let base = super.describe();
    if (this.innerType) {
      var _innerOptions;
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[0]
        });
      }
      base.innerType = this.innerType.describe(options);
    }
    return base;
  }
}
create$2.prototype = ArraySchema.prototype;

// @ts-ignore
function create$1(schemas) {
  return new TupleSchema(schemas);
}
class TupleSchema extends Schema {
  constructor(schemas) {
    super({
      type: 'tuple',
      spec: {
        types: schemas
      },
      check(v) {
        const types = this.spec.types;
        return Array.isArray(v) && v.length === types.length;
      }
    });
    this.withMutation(() => {
      this.typeError(tuple.notType);
    });
  }
  _cast(inputValue, options) {
    const {
      types
    } = this.spec;
    const value = super._cast(inputValue, options);
    if (!this._typeCheck(value)) {
      return value;
    }
    let isChanged = false;
    const castArray = types.map((type, idx) => {
      const castElement = type.cast(value[idx], Object.assign({}, options, {
        path: `${options.path || ''}[${idx}]`
      }));
      if (castElement !== value[idx]) isChanged = true;
      return castElement;
    });
    return isChanged ? castArray : value;
  }
  _validate(_value, options = {}, panic, next) {
    let itemTypes = this.spec.types;
    super._validate(_value, options, panic, (tupleErrors, value) => {
      var _options$originalValu2;
      // intentionally not respecting recursive
      if (!this._typeCheck(value)) {
        next(tupleErrors, value);
        return;
      }
      let tests = [];
      for (let [index, itemSchema] of itemTypes.entries()) {
        var _options$originalValu;
        tests[index] = itemSchema.asNestedTest({
          options,
          index,
          parent: value,
          parentPath: options.path,
          originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
        });
      }
      this.runTests({
        value,
        tests,
        originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
        options
      }, panic, innerTypeErrors => next(innerTypeErrors.concat(tupleErrors), value));
    });
  }
}
create$1.prototype = TupleSchema.prototype;

function create(builder) {
  return new Lazy(builder);
}
class Lazy {
  constructor(builder) {
    this.type = 'lazy';
    this.__isYupSchema__ = true;
    this.spec = void 0;
    this._resolve = (value, options = {}) => {
      let schema = this.builder(value, options);
      if (!isSchema(schema)) throw new TypeError('lazy() functions must return a valid schema');
      if (this.spec.optional) schema = schema.optional();
      return schema.resolve(options);
    };
    this.builder = builder;
    this.spec = {
      meta: undefined,
      optional: false
    };
  }
  clone(spec) {
    const next = new Lazy(this.builder);
    next.spec = Object.assign({}, this.spec, spec);
    return next;
  }
  optionality(optional) {
    const next = this.clone({
      optional
    });
    return next;
  }
  optional() {
    return this.optionality(true);
  }
  resolve(options) {
    return this._resolve(options.value, options);
  }
  cast(value, options) {
    return this._resolve(value, options).cast(value, options);
  }
  asNestedTest(config) {
    let {
      key,
      index,
      parent,
      options
    } = config;
    let value = parent[index != null ? index : key];
    return this._resolve(value, Object.assign({}, options, {
      value,
      parent
    })).asNestedTest(config);
  }
  validate(value, options) {
    return this._resolve(value, options).validate(value, options);
  }
  validateSync(value, options) {
    return this._resolve(value, options).validateSync(value, options);
  }
  validateAt(path, value, options) {
    return this._resolve(value, options).validateAt(path, value, options);
  }
  validateSyncAt(path, value, options) {
    return this._resolve(value, options).validateSyncAt(path, value, options);
  }
  isValid(value, options) {
    return this._resolve(value, options).isValid(value, options);
  }
  isValidSync(value, options) {
    return this._resolve(value, options).isValidSync(value, options);
  }
  describe(options) {
    return options ? this.resolve(options).describe(options) : {
      type: 'lazy',
      meta: this.spec.meta,
      label: undefined
    };
  }
  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
}

function setLocale(custom) {
  Object.keys(custom).forEach(type => {
    // @ts-ignore
    Object.keys(custom[type]).forEach(method => {
      // @ts-ignore
      locale[type][method] = custom[type][method];
    });
  });
}

function addMethod(schemaType, name, fn) {
  if (!schemaType || !isSchema(schemaType.prototype)) throw new TypeError('You must provide a yup schema constructor function');
  if (typeof name !== 'string') throw new TypeError('A Method name must be provided');
  if (typeof fn !== 'function') throw new TypeError('Method function must be provided');
  schemaType.prototype[name] = fn;
}




/***/ })

}]);
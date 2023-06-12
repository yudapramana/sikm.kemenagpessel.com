"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_containers_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/containers/Dashboard.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/containers/Dashboard.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Layout/Navbar.vue */ "./resources/js/components/Layout/Navbar.vue");
/* harmony import */ var _components_Layout_Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Sidebar.vue */ "./resources/js/components/Layout/Sidebar.vue");
/* harmony import */ var _components_Layout_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Footer.vue */ "./resources/js/components/Layout/Footer.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Navbar: _components_Layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Sidebar: _components_Layout_Sidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _components_Layout_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard: function showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard: function showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }
      return false;
    }
  },
  methods: {
    logOut: function logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/containers/Dashboard.vue?vue&type=template&id=5dce82b5":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/containers/Dashboard.vue?vue&type=template&id=5dce82b5 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Navbar");
  var _component_Sidebar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Sidebar");
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");
  var _component_vue_progress_bar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-progress-bar");
  var _component_Footer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Footer");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Sidebar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_progress_bar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Footer)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/containers/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/containers/Dashboard.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_5dce82b5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=5dce82b5 */ "./resources/js/containers/Dashboard.vue?vue&type=template&id=5dce82b5");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js */ "./resources/js/containers/Dashboard.vue?vue&type=script&lang=js");
/* harmony import */ var C_MAMP_htdocs_sikm_kemenagpessel_com_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_MAMP_htdocs_sikm_kemenagpessel_com_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Dashboard_vue_vue_type_template_id_5dce82b5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/containers/Dashboard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/containers/Dashboard.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/Dashboard.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/containers/Dashboard.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/containers/Dashboard.vue?vue&type=template&id=5dce82b5":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/Dashboard.vue?vue&type=template&id=5dce82b5 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_5dce82b5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Dashboard_vue_vue_type_template_id_5dce82b5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Dashboard.vue?vue&type=template&id=5dce82b5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/containers/Dashboard.vue?vue&type=template&id=5dce82b5");


/***/ })

}]);
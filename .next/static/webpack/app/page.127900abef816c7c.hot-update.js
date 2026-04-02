/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/(sections)/ServicesSection.js":
/*!*******************************************!*\
  !*** ./app/(sections)/ServicesSection.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navbar */ \"(app-pages-browser)/./app/components/Navbar.js\");\n/* harmony import */ var _sections_HeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./(sections)/HeroSection */ \"(app-pages-browser)/./app/(sections)/HeroSection.js\");\n/* harmony import */ var _sections_AboutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./(sections)/AboutSection */ \"(app-pages-browser)/./app/(sections)/AboutSection.js\");\n/* harmony import */ var _sections_StatsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./(sections)/StatsSection */ \"(app-pages-browser)/./app/(sections)/StatsSection.js\");\n/* harmony import */ var _sections_VideoTestimonialSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./(sections)/VideoTestimonialSection */ \"(app-pages-browser)/./app/(sections)/VideoTestimonialSection.js\");\n/* harmony import */ var _sections_CaseStudySection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./(sections)/CaseStudySection */ \"(app-pages-browser)/./app/(sections)/CaseStudySection.js\");\n/* harmony import */ var _sections_ServicesSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./(sections)/ServicesSection */ \"(app-pages-browser)/./app/(sections)/ServicesSection.js\");\n/* harmony import */ var _sections_ServicesSection__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sections_ServicesSection__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _sections_PricingSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./(sections)/PricingSection */ \"(app-pages-browser)/./app/(sections)/PricingSection.js\");\n/* harmony import */ var _sections_CTASection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./(sections)/CTASection */ \"(app-pages-browser)/./app/(sections)/CTASection.js\");\n/* harmony import */ var _sections_FooterSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./(sections)/FooterSection */ \"(app-pages-browser)/./app/(sections)/FooterSection.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_HeroSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_AboutSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"howwework\"\n            }, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_StatsSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_VideoTestimonialSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                id: \"reviews\"\n            }, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_CaseStudySection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                id: \"portfolio\"\n            }, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sections_ServicesSection__WEBPACK_IMPORTED_MODULE_7___default()), {\n                id: \"services\"\n            }, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_PricingSection__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                id: \"pricing\"\n            }, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_CTASection__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                id: \"process\"\n            }, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_FooterSection__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\appcraft-agency\\\\appcraft-delivery\\\\nextjs-version\\\\app\\\\page.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ1U7QUFDRTtBQUNBO0FBQ3NCO0FBQ2Q7QUFDRjtBQUNGO0FBQ1I7QUFDTTtBQUV2QyxTQUFTVTtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNaLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNDLDZEQUFXQTs7Ozs7MEJBQ1osOERBQUNDLDhEQUFZQTtnQkFBQ1csSUFBRzs7Ozs7OzBCQUNqQiw4REFBQ1YsOERBQVlBOzs7OzswQkFDYiw4REFBQ0MseUVBQXVCQTtnQkFBQ1MsSUFBRzs7Ozs7OzBCQUM1Qiw4REFBQ1Isa0VBQWdCQTtnQkFBQ1EsSUFBRzs7Ozs7OzBCQUNyQiw4REFBQ1Asa0VBQWVBO2dCQUFDTyxJQUFHOzs7Ozs7MEJBQ3BCLDhEQUFDTixnRUFBY0E7Z0JBQUNNLElBQUc7Ozs7OzswQkFDbkIsOERBQUNMLDREQUFVQTtnQkFBQ0ssSUFBRzs7Ozs7OzBCQUNmLDhEQUFDSixnRUFBYUE7Ozs7Ozs7Ozs7O0FBR3BCO0tBZndCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSAnLi8oc2VjdGlvbnMpL0hlcm9TZWN0aW9uJ1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tICcuLyhzZWN0aW9ucykvQWJvdXRTZWN0aW9uJ1xuaW1wb3J0IFN0YXRzU2VjdGlvbiBmcm9tICcuLyhzZWN0aW9ucykvU3RhdHNTZWN0aW9uJ1xuaW1wb3J0IFZpZGVvVGVzdGltb25pYWxTZWN0aW9uIGZyb20gJy4vKHNlY3Rpb25zKS9WaWRlb1Rlc3RpbW9uaWFsU2VjdGlvbidcbmltcG9ydCBDYXNlU3R1ZHlTZWN0aW9uIGZyb20gJy4vKHNlY3Rpb25zKS9DYXNlU3R1ZHlTZWN0aW9uJ1xuaW1wb3J0IFNlcnZpY2VzU2VjdGlvbiBmcm9tICcuLyhzZWN0aW9ucykvU2VydmljZXNTZWN0aW9uJ1xuaW1wb3J0IFByaWNpbmdTZWN0aW9uIGZyb20gJy4vKHNlY3Rpb25zKS9QcmljaW5nU2VjdGlvbidcbmltcG9ydCBDVEFTZWN0aW9uIGZyb20gJy4vKHNlY3Rpb25zKS9DVEFTZWN0aW9uJ1xuaW1wb3J0IEZvb3RlclNlY3Rpb24gZnJvbSAnLi8oc2VjdGlvbnMpL0Zvb3RlclNlY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxIZXJvU2VjdGlvbiAvPlxuICAgICAgPEFib3V0U2VjdGlvbiBpZD1cImhvd3dld29ya1wiIC8+XG4gICAgICA8U3RhdHNTZWN0aW9uIC8+XG4gICAgICA8VmlkZW9UZXN0aW1vbmlhbFNlY3Rpb24gaWQ9XCJyZXZpZXdzXCIgLz5cbiAgICAgIDxDYXNlU3R1ZHlTZWN0aW9uIGlkPVwicG9ydGZvbGlvXCIgLz5cbiAgICAgIDxTZXJ2aWNlc1NlY3Rpb24gaWQ9XCJzZXJ2aWNlc1wiIC8+XG4gICAgICA8UHJpY2luZ1NlY3Rpb24gaWQ9XCJwcmljaW5nXCIgLz5cbiAgICAgIDxDVEFTZWN0aW9uIGlkPVwicHJvY2Vzc1wiIC8+XG4gICAgICA8Rm9vdGVyU2VjdGlvbiAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiSGVyb1NlY3Rpb24iLCJBYm91dFNlY3Rpb24iLCJTdGF0c1NlY3Rpb24iLCJWaWRlb1Rlc3RpbW9uaWFsU2VjdGlvbiIsIkNhc2VTdHVkeVNlY3Rpb24iLCJTZXJ2aWNlc1NlY3Rpb24iLCJQcmljaW5nU2VjdGlvbiIsIkNUQVNlY3Rpb24iLCJGb290ZXJTZWN0aW9uIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});
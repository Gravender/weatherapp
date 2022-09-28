"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n    --font-color: #d7dadc;\n    --font-title-size: 20px;\n    --font-size: 15px;\n    \n    --background-color: #a2c1e0;\n    --background-header: #5d6f80;\n    --background-weather-search: #7ab8da;\n    --background-footer: #7d95ad;\n}\nbody{\n    background-color: var(--background-color);\n    margin: 0px;\n    padding: 0px;\n}\nimg{\n    height:50px;\n    width:50px;\n}\nbutton{\n    background-color: var(--background-weather-search);\n    border: none;\n    border-radius: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n/* #region content */\n#content {\n    width: 100%;\n}\n/* #endregion */\n/* #region header */\nheader {\n    background-color: var(--background-header);\n    color: var(--font-color);\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 70px;\n    position: absolute;\n    top: 0;\n}\n.headerTitle{\n    font-size: var(--font-title-size * 1.1);\n    text-align: center;\n}\n/* #endregion */\n/* #region weatherSearch*/\n.weatherSearch{\n    display: flex;\n    margin: auto;\n    margin-top: 100px;\n    margin-bottom: 10px;\n    border-radius: 10px;\n    background-color: var(--background-color);\n    justify-content: center;\n}\n#search{\n    background-color: var(--background-color);\n    border: none;\n    margin-right: 10px;\n    border-bottom: 1px solid black;\n}\n#search:focus{\n    border: none;\n}\n/* #endregion */\n/* #region weatherStatus*/\n.weatherStatusDiv{\n    display: flex;\n    flex-wrap: wrap;\n    width: 350px;\n    height: 180px;\n    margin: auto;\n    border-radius: 10px;\n    background-color: var(--background-weather-search);\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    gap: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.unitSwitch{\n    position : relative ;\n    display : inline-block;\n    width : 20px;\n    height : 11px;\n    background-color: red;\n    border-radius: 5px;\n    border: 2px solid gray;\n    align-items: center;\n    justify-content: center;\n}\n.unitSwitch:after {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: gray;\n    top: 1px;\n    left: 1px;\n    transition:  all 0.5s;\n}\n       \n/* Checkbox checked effect */\n.sliderCheck:checked + .unitSwitch::after {\n    left : 9px;\n}\n       \n/* Checkbox checked toggle label color */\n.sliderCheck:checked + .unitSwitch {\n    background-color: green;\n}\n       \n/* Checkbox vanished */\n.sliderCheck {\n    display : none;\n}\n/* #endregion */\n/* #region footer */\nfooter {\n    display: flex;\n    background-color: var(--background-footer);\n    height: 50px;\n    width: 100%;\n    position: fixed;\n    margin-left: 0px;\n    bottom: 0;\n    justify-content: center;\n    align-items: center;\n}\nfooter>p {\n    font-size: var(--font-size);\n}\nfooter>a {\n    font-size: var(--font-size);\n    color: white;\n}\n\n/* #endregion */", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":";AACA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,iBAAiB;;IAEjB,2BAA2B;IAC3B,4BAA4B;IAC5B,oCAAoC;IACpC,4BAA4B;AAChC;AACA;IACI,yCAAyC;IACzC,WAAW;IACX,YAAY;AAChB;AACA;IACI,WAAW;IACX,UAAU;AACd;AACA;IACI,kDAAkD;IAClD,YAAY;IACZ,kBAAkB;IAClB,4EAA4E;AAChF;AACA,oBAAoB;AACpB;IACI,WAAW;AACf;AACA,eAAe;AACf,mBAAmB;AACnB;IACI,0CAA0C;IAC1C,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;AACV;AACA;IACI,uCAAuC;IACvC,kBAAkB;AACtB;AACA,eAAe;AACf,yBAAyB;AACzB;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,yCAAyC;IACzC,uBAAuB;AAC3B;AACA;IACI,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,YAAY;AAChB;AACA,eAAe;AACf,yBAAyB;AACzB;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,kDAAkD;IAClD,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,QAAQ;IACR,4EAA4E;AAChF;AACA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,qBAAqB;AACzB;;AAEA,4BAA4B;AAC5B;IACI,UAAU;AACd;;AAEA,wCAAwC;AACxC;IACI,uBAAuB;AAC3B;;AAEA,sBAAsB;AACtB;IACI,cAAc;AAClB;AACA,eAAe;AACf,mBAAmB;AACnB;IACI,aAAa;IACb,0CAA0C;IAC1C,YAAY;IACZ,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA,eAAe","sourcesContent":["\n:root {\n    --font-color: #d7dadc;\n    --font-title-size: 20px;\n    --font-size: 15px;\n    \n    --background-color: #a2c1e0;\n    --background-header: #5d6f80;\n    --background-weather-search: #7ab8da;\n    --background-footer: #7d95ad;\n}\nbody{\n    background-color: var(--background-color);\n    margin: 0px;\n    padding: 0px;\n}\nimg{\n    height:50px;\n    width:50px;\n}\nbutton{\n    background-color: var(--background-weather-search);\n    border: none;\n    border-radius: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n/* #region content */\n#content {\n    width: 100%;\n}\n/* #endregion */\n/* #region header */\nheader {\n    background-color: var(--background-header);\n    color: var(--font-color);\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 70px;\n    position: absolute;\n    top: 0;\n}\n.headerTitle{\n    font-size: var(--font-title-size * 1.1);\n    text-align: center;\n}\n/* #endregion */\n/* #region weatherSearch*/\n.weatherSearch{\n    display: flex;\n    margin: auto;\n    margin-top: 100px;\n    margin-bottom: 10px;\n    border-radius: 10px;\n    background-color: var(--background-color);\n    justify-content: center;\n}\n#search{\n    background-color: var(--background-color);\n    border: none;\n    margin-right: 10px;\n    border-bottom: 1px solid black;\n}\n#search:focus{\n    border: none;\n}\n/* #endregion */\n/* #region weatherStatus*/\n.weatherStatusDiv{\n    display: flex;\n    flex-wrap: wrap;\n    width: 350px;\n    height: 180px;\n    margin: auto;\n    border-radius: 10px;\n    background-color: var(--background-weather-search);\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    gap: 5px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.unitSwitch{\n    position : relative ;\n    display : inline-block;\n    width : 20px;\n    height : 11px;\n    background-color: red;\n    border-radius: 5px;\n    border: 2px solid gray;\n    align-items: center;\n    justify-content: center;\n}\n.unitSwitch:after {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: gray;\n    top: 1px;\n    left: 1px;\n    transition:  all 0.5s;\n}\n       \n/* Checkbox checked effect */\n.sliderCheck:checked + .unitSwitch::after {\n    left : 9px;\n}\n       \n/* Checkbox checked toggle label color */\n.sliderCheck:checked + .unitSwitch {\n    background-color: green;\n}\n       \n/* Checkbox vanished */\n.sliderCheck {\n    display : none;\n}\n/* #endregion */\n/* #region footer */\nfooter {\n    display: flex;\n    background-color: var(--background-footer);\n    height: 50px;\n    width: 100%;\n    position: fixed;\n    margin-left: 0px;\n    bottom: 0;\n    justify-content: center;\n    align-items: center;\n}\nfooter>p {\n    font-size: var(--font-size);\n}\nfooter>a {\n    font-size: var(--font-size);\n    color: white;\n}\n\n/* #endregion */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/helper-functions/bindButton.js":
/*!********************************************!*\
  !*** ./src/helper-functions/bindButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object_handlers_getWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../object-handlers/getWeatherData */ "./src/object-handlers/getWeatherData.js");


function bindButton() {
  const button = document.querySelector("button");
  button.onclick = _object_handlers_getWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindButton);


/***/ }),

/***/ "./src/helper-functions/changeUnit.js":
/*!********************************************!*\
  !*** ./src/helper-functions/changeUnit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kelvinConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kelvinConverter */ "./src/helper-functions/kelvinConverter.js");


function changeUnit() {
  const checkbox = document.getElementById("switch");
  const temp = document.getElementById("weatherStatusTemp");
  const feelslike = document.getElementById("weatherStatusFeelsLike");
  checkbox.addEventListener("change", () => {
    let unit = "C";
    if (checkbox.checked) {
      unit = "C";
    } else {
      unit = "F";
    }
    temp.innerText = `Temperature ${(0,_kelvinConverter__WEBPACK_IMPORTED_MODULE_0__["default"])(
      Number(temp.dataset.temp),
      unit
    )} ${unit}°`;
    feelslike.innerText = `Feels Like: ${(0,_kelvinConverter__WEBPACK_IMPORTED_MODULE_0__["default"])(
      Number(feelslike.dataset.temp),
      unit
    )} ${unit}°`;
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeUnit);


/***/ }),

/***/ "./src/helper-functions/kelvinConverter.js":
/*!*************************************************!*\
  !*** ./src/helper-functions/kelvinConverter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertKelvin(kelvin, unit) {
  if (unit === "C") {
    return (kelvin - 273.15).toFixed(2);
  }
  return ((9 / 5) * (kelvin - 273) + 32).toFixed(2);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertKelvin);


/***/ }),

/***/ "./src/helper-functions/updateWeatherStatus.js":
/*!*****************************************************!*\
  !*** ./src/helper-functions/updateWeatherStatus.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _kelvinConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kelvinConverter */ "./src/helper-functions/kelvinConverter.js");


function updateWeatherStatus(weatherData) {
  const checkbox = document.getElementById("switch");
  const humidity = document.getElementById("weatherStatusHumidity");
  const temp = document.getElementById("weatherStatusTemp");
  const feelslike = document.getElementById("weatherStatusFeelsLike");
  temp.dataset.temp = weatherData.main.temp;
  feelslike.dataset.temp = weatherData.main.feels_like;
  humidity.dataset.humidity = weatherData.main.humidity;

  let unit = "C";
  if (checkbox.checked) {
    unit = "C";
  } else {
    unit = "F";
  }
  temp.innerText = `Temperature ${(0,_kelvinConverter__WEBPACK_IMPORTED_MODULE_0__["default"])(
    Number(temp.dataset.temp),
    unit
  )} ${unit}°`;
  feelslike.innerText = `Feels Like: ${(0,_kelvinConverter__WEBPACK_IMPORTED_MODULE_0__["default"])(
    Number(feelslike.dataset.temp),
    unit
  )} ${unit}°`;
  humidity.innerText = `Humidity: ${weatherData.main.humidity} %`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateWeatherStatus);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _helper_functions_bindButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/bindButton */ "./src/helper-functions/bindButton.js");
/* harmony import */ var _helper_functions_changeUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-functions/changeUnit */ "./src/helper-functions/changeUnit.js");
/* harmony import */ var _object_handlers_getWeatherData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-handlers/getWeatherData */ "./src/object-handlers/getWeatherData.js");
/* harmony import */ var _page_elements_mainPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-elements/mainPage */ "./src/page-elements/mainPage.js");






(0,_page_elements_mainPage__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_helper_functions_bindButton__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_object_handlers_getWeatherData__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_helper_functions_changeUnit__WEBPACK_IMPORTED_MODULE_2__["default"])();


/***/ }),

/***/ "./src/object-handlers/getWeatherData.js":
/*!***********************************************!*\
  !*** ./src/object-handlers/getWeatherData.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper_functions_updateWeatherStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper-functions/updateWeatherStatus */ "./src/helper-functions/updateWeatherStatus.js");


function getWeatherData() {
  const img = document.querySelector("img");
  let location = document.getElementById("search");
  if (!location.value) {
    location = "sydney";
  } else {
    location = location.value;
  }
  async function getWeather() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fd088960330d5cc0a198013df34f9b31`,
        { mode: "cors" }
      );
      const weatherData = await response.json();
      (0,_helper_functions_updateWeatherStatus__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
      const { icon } = weatherData.weather[0];
      img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    } catch (err) {
      alert("city not found");
    }
  }
  getWeather();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);


/***/ }),

/***/ "./src/page-elements/content.js":
/*!**************************************!*\
  !*** ./src/page-elements/content.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadWeatherSearch() {
  const weatherSearch = document.createElement("div");
  const button = document.createElement("button");
  const input = document.createElement("input");

  button.innerText = "Get Weather";

  weatherSearch.classList.add("weatherSearch");

  input.setAttribute("id", "search");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter city");
  weatherSearch.appendChild(input);
  weatherSearch.appendChild(button);
  return weatherSearch;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWeatherSearch);


/***/ }),

/***/ "./src/page-elements/footer.js":
/*!*************************************!*\
  !*** ./src/page-elements/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadFooter() {
  const footer = document.createElement("footer");
  const para = document.createElement("p");
  const link = document.createElement("a");

  para.textContent = "Made by: ";

  link.setAttribute("href", "https://github.com/Gravender");
  link.textContent = "Gravender";

  footer.appendChild(para);
  footer.appendChild(link);
  return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFooter);


/***/ }),

/***/ "./src/page-elements/header.js":
/*!*************************************!*\
  !*** ./src/page-elements/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHeader() {
  const header = document.createElement("header");
  const title = document.createElement("h1");

  title.textContent = "Weather App";
  title.classList.add("headerTitle");

  header.appendChild(title);
  return header;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);


/***/ }),

/***/ "./src/page-elements/mainPage.js":
/*!***************************************!*\
  !*** ./src/page-elements/mainPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/page-elements/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/page-elements/header.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/page-elements/content.js");
/* harmony import */ var _weatherStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherStatus */ "./src/page-elements/weatherStatus.js");





function renderStaticPages() {
  const content = document.createElement("content");
  content.setAttribute("id", `content`);
  content.appendChild((0,_content__WEBPACK_IMPORTED_MODULE_2__["default"])());
  content.appendChild((0,_weatherStatus__WEBPACK_IMPORTED_MODULE_3__["default"])());
  document.body.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  document.body.appendChild(content);
  document.body.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderStaticPages);


/***/ }),

/***/ "./src/page-elements/weatherStatus.js":
/*!********************************************!*\
  !*** ./src/page-elements/weatherStatus.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function unitSlider() {
  const sliderDiv = document.createElement("div");
  const slider = document.createElement("label");
  const input = document.createElement("input");

  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "switch");
  slider.setAttribute("for", "switch");

  sliderDiv.classList.add("sliderDiv");
  slider.classList.add("unitSwitch");
  input.classList.add("sliderCheck");

  sliderDiv.appendChild(input);
  sliderDiv.appendChild(slider);
  return sliderDiv;
}

function weatherStatus() {
  const weatherStatusDiv = document.createElement("div");
  const temp = document.createElement("h2");
  const feelslike = document.createElement("h3");
  const humidity = document.createElement("h3");
  const img = document.createElement("img");
  img.src = "#";
  const changeUnit = document.createElement("p");
  const slider = unitSlider();

  weatherStatusDiv.classList.add("weatherStatusDiv");
  temp.classList.add("temp");
  feelslike.classList.add("feelslike");
  humidity.classList.add("humidity");
  changeUnit.classList.add("changeUnitLabel");

  temp.innerText = `Temperature `;
  feelslike.innerText = `Feels Like: `;
  humidity.innerText = `Humidity: ${0} %`;
  changeUnit.innerText = "Change unit";

  temp.setAttribute("id", "weatherStatusTemp");
  feelslike.setAttribute("id", "weatherStatusFeelsLike");
  humidity.setAttribute("id", "weatherStatusHumidity");

  temp.setAttribute("data-temp", 0);
  feelslike.setAttribute("data-temp", 0);
  humidity.setAttribute("data-humidity", 0);

  weatherStatusDiv.appendChild(temp);
  weatherStatusDiv.appendChild(img);
  weatherStatusDiv.appendChild(feelslike);
  weatherStatusDiv.appendChild(humidity);
  weatherStatusDiv.appendChild(changeUnit);
  weatherStatusDiv.appendChild(slider);
  return weatherStatusDiv;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherStatus);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaGVscGVyLWZ1bmN0aW9ucy9iaW5kQnV0dG9uLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaGVscGVyLWZ1bmN0aW9ucy9jaGFuZ2VVbml0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaGVscGVyLWZ1bmN0aW9ucy9rZWx2aW5Db252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9oZWxwZXItZnVuY3Rpb25zL3VwZGF0ZVdlYXRoZXJTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL29iamVjdC1oYW5kbGVycy9nZXRXZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3BhZ2UtZWxlbWVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3BhZ2UtZWxlbWVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcGFnZS1lbGVtZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9wYWdlLWVsZW1lbnRzL21haW5QYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvcGFnZS1lbGVtZW50cy93ZWF0aGVyU3RhdHVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtY29sb3I6ICNkN2RhZGM7XFxuICAgIC0tZm9udC10aXRsZS1zaXplOiAyMHB4O1xcbiAgICAtLWZvbnQtc2l6ZTogMTVweDtcXG4gICAgXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2EyYzFlMDtcXG4gICAgLS1iYWNrZ3JvdW5kLWhlYWRlcjogIzVkNmY4MDtcXG4gICAgLS1iYWNrZ3JvdW5kLXdlYXRoZXItc2VhcmNoOiAjN2FiOGRhO1xcbiAgICAtLWJhY2tncm91bmQtZm9vdGVyOiAjN2Q5NWFkO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuaW1ne1xcbiAgICBoZWlnaHQ6NTBweDtcXG4gICAgd2lkdGg6NTBweDtcXG59XFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXdlYXRoZXItc2VhcmNoKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcbi8qICNyZWdpb24gY29udGVudCAqL1xcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG4vKiAjcmVnaW9uIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtaGVhZGVyKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcbi5oZWFkZXJUaXRsZXtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXRpdGxlLXNpemUgKiAxLjEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG4vKiAjcmVnaW9uIHdlYXRoZXJTZWFyY2gqL1xcbi53ZWF0aGVyU2VhcmNoe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNzZWFyY2h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jc2VhcmNoOmZvY3Vze1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG4vKiAjcmVnaW9uIHdlYXRoZXJTdGF0dXMqL1xcbi53ZWF0aGVyU3RhdHVzRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXdlYXRoZXItc2VhcmNoKTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxufVxcbi51bml0U3dpdGNoe1xcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlIDtcXG4gICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGggOiAyMHB4O1xcbiAgICBoZWlnaHQgOiAxMXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi51bml0U3dpdGNoOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICB0b3A6IDFweDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB0cmFuc2l0aW9uOiAgYWxsIDAuNXM7XFxufVxcbiAgICAgICBcXG4vKiBDaGVja2JveCBjaGVja2VkIGVmZmVjdCAqL1xcbi5zbGlkZXJDaGVjazpjaGVja2VkICsgLnVuaXRTd2l0Y2g6OmFmdGVyIHtcXG4gICAgbGVmdCA6IDlweDtcXG59XFxuICAgICAgIFxcbi8qIENoZWNrYm94IGNoZWNrZWQgdG9nZ2xlIGxhYmVsIGNvbG9yICovXFxuLnNsaWRlckNoZWNrOmNoZWNrZWQgKyAudW5pdFN3aXRjaCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4gICAgICAgXFxuLyogQ2hlY2tib3ggdmFuaXNoZWQgKi9cXG4uc2xpZGVyQ2hlY2sge1xcbiAgICBkaXNwbGF5IDogbm9uZTtcXG59XFxuLyogI2VuZHJlZ2lvbiAqL1xcbi8qICNyZWdpb24gZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1mb290ZXIpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmZvb3Rlcj5wIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbn1cXG5mb290ZXI+YSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiAjZW5kcmVnaW9uICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixpQkFBaUI7O0lBRWpCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrREFBa0Q7SUFDbEQsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0RUFBNEU7QUFDaEY7QUFDQSxvQkFBb0I7QUFDcEI7SUFDSSxXQUFXO0FBQ2Y7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CO0lBQ0ksMENBQTBDO0lBQzFDLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07QUFDVjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0QjtBQUNBLGVBQWU7QUFDZix5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6Qyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLGVBQWU7QUFDZix5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osUUFBUTtJQUNSLDRFQUE0RTtBQUNoRjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLFVBQVU7QUFDZDs7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksY0FBYztBQUNsQjtBQUNBLGVBQWU7QUFDZixtQkFBbUI7QUFDbkI7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQSxlQUFlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290IHtcXG4gICAgLS1mb250LWNvbG9yOiAjZDdkYWRjO1xcbiAgICAtLWZvbnQtdGl0bGUtc2l6ZTogMjBweDtcXG4gICAgLS1mb250LXNpemU6IDE1cHg7XFxuICAgIFxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNhMmMxZTA7XFxuICAgIC0tYmFja2dyb3VuZC1oZWFkZXI6ICM1ZDZmODA7XFxuICAgIC0tYmFja2dyb3VuZC13ZWF0aGVyLXNlYXJjaDogIzdhYjhkYTtcXG4gICAgLS1iYWNrZ3JvdW5kLWZvb3RlcjogIzdkOTVhZDtcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcbmltZ3tcXG4gICAgaGVpZ2h0OjUwcHg7XFxuICAgIHdpZHRoOjUwcHg7XFxufVxcbmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC13ZWF0aGVyLXNlYXJjaCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG4vKiAjcmVnaW9uIGNvbnRlbnQgKi9cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuLyogI3JlZ2lvbiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWhlYWRlcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG4uaGVhZGVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC10aXRsZS1zaXplICogMS4xKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuLyogI3JlZ2lvbiB3ZWF0aGVyU2VhcmNoKi9cXG4ud2VhdGhlclNlYXJjaHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jc2VhcmNoe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuI3NlYXJjaDpmb2N1c3tcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4vKiAjZW5kcmVnaW9uICovXFxuLyogI3JlZ2lvbiB3ZWF0aGVyU3RhdHVzKi9cXG4ud2VhdGhlclN0YXR1c0RpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC13ZWF0aGVyLXNlYXJjaCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbn1cXG4udW5pdFN3aXRjaHtcXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZSA7XFxuICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoIDogMjBweDtcXG4gICAgaGVpZ2h0IDogMTFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udW5pdFN3aXRjaDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgdG9wOiAxcHg7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgdHJhbnNpdGlvbjogIGFsbCAwLjVzO1xcbn1cXG4gICAgICAgXFxuLyogQ2hlY2tib3ggY2hlY2tlZCBlZmZlY3QgKi9cXG4uc2xpZGVyQ2hlY2s6Y2hlY2tlZCArIC51bml0U3dpdGNoOjphZnRlciB7XFxuICAgIGxlZnQgOiA5cHg7XFxufVxcbiAgICAgICBcXG4vKiBDaGVja2JveCBjaGVja2VkIHRvZ2dsZSBsYWJlbCBjb2xvciAqL1xcbi5zbGlkZXJDaGVjazpjaGVja2VkICsgLnVuaXRTd2l0Y2gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuICAgICAgIFxcbi8qIENoZWNrYm94IHZhbmlzaGVkICovXFxuLnNsaWRlckNoZWNrIHtcXG4gICAgZGlzcGxheSA6IG5vbmU7XFxufVxcbi8qICNlbmRyZWdpb24gKi9cXG4vKiAjcmVnaW9uIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZm9vdGVyKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb290ZXI+cCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuZm9vdGVyPmEge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogI2VuZHJlZ2lvbiAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuLi9vYmplY3QtaGFuZGxlcnMvZ2V0V2VhdGhlckRhdGFcIjtcblxuZnVuY3Rpb24gYmluZEJ1dHRvbigpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgYnV0dG9uLm9uY2xpY2sgPSBnZXRXZWF0aGVyRGF0YTtcbn1cbmV4cG9ydCBkZWZhdWx0IGJpbmRCdXR0b247XG4iLCJpbXBvcnQgY29udmVydEtlbHZpbiBmcm9tIFwiLi9rZWx2aW5Db252ZXJ0ZXJcIjtcblxuZnVuY3Rpb24gY2hhbmdlVW5pdCgpIHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlclN0YXR1c1RlbXBcIik7XG4gIGNvbnN0IGZlZWxzbGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlclN0YXR1c0ZlZWxzTGlrZVwiKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IHVuaXQgPSBcIkNcIjtcbiAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgdW5pdCA9IFwiQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gXCJGXCI7XG4gICAgfVxuICAgIHRlbXAuaW5uZXJUZXh0ID0gYFRlbXBlcmF0dXJlICR7Y29udmVydEtlbHZpbihcbiAgICAgIE51bWJlcih0ZW1wLmRhdGFzZXQudGVtcCksXG4gICAgICB1bml0XG4gICAgKX0gJHt1bml0fcKwYDtcbiAgICBmZWVsc2xpa2UuaW5uZXJUZXh0ID0gYEZlZWxzIExpa2U6ICR7Y29udmVydEtlbHZpbihcbiAgICAgIE51bWJlcihmZWVsc2xpa2UuZGF0YXNldC50ZW1wKSxcbiAgICAgIHVuaXRcbiAgICApfSAke3VuaXR9wrBgO1xuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZVVuaXQ7XG4iLCJmdW5jdGlvbiBjb252ZXJ0S2VsdmluKGtlbHZpbiwgdW5pdCkge1xuICBpZiAodW5pdCA9PT0gXCJDXCIpIHtcbiAgICByZXR1cm4gKGtlbHZpbiAtIDI3My4xNSkudG9GaXhlZCgyKTtcbiAgfVxuICByZXR1cm4gKCg5IC8gNSkgKiAoa2VsdmluIC0gMjczKSArIDMyKS50b0ZpeGVkKDIpO1xufVxuZXhwb3J0IGRlZmF1bHQgY29udmVydEtlbHZpbjtcbiIsImltcG9ydCBjb252ZXJ0S2VsdmluIGZyb20gXCIuL2tlbHZpbkNvbnZlcnRlclwiO1xuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVyU3RhdHVzKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyU3RhdHVzSHVtaWRpdHlcIik7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJTdGF0dXNUZW1wXCIpO1xuICBjb25zdCBmZWVsc2xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJTdGF0dXNGZWVsc0xpa2VcIik7XG4gIHRlbXAuZGF0YXNldC50ZW1wID0gd2VhdGhlckRhdGEubWFpbi50ZW1wO1xuICBmZWVsc2xpa2UuZGF0YXNldC50ZW1wID0gd2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlO1xuICBodW1pZGl0eS5kYXRhc2V0Lmh1bWlkaXR5ID0gd2VhdGhlckRhdGEubWFpbi5odW1pZGl0eTtcblxuICBsZXQgdW5pdCA9IFwiQ1wiO1xuICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgIHVuaXQgPSBcIkNcIjtcbiAgfSBlbHNlIHtcbiAgICB1bml0ID0gXCJGXCI7XG4gIH1cbiAgdGVtcC5pbm5lclRleHQgPSBgVGVtcGVyYXR1cmUgJHtjb252ZXJ0S2VsdmluKFxuICAgIE51bWJlcih0ZW1wLmRhdGFzZXQudGVtcCksXG4gICAgdW5pdFxuICApfSAke3VuaXR9wrBgO1xuICBmZWVsc2xpa2UuaW5uZXJUZXh0ID0gYEZlZWxzIExpa2U6ICR7Y29udmVydEtlbHZpbihcbiAgICBOdW1iZXIoZmVlbHNsaWtlLmRhdGFzZXQudGVtcCksXG4gICAgdW5pdFxuICApfSAke3VuaXR9wrBgO1xuICBodW1pZGl0eS5pbm5lclRleHQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEubWFpbi5odW1pZGl0eX0gJWA7XG59XG5leHBvcnQgZGVmYXVsdCB1cGRhdGVXZWF0aGVyU3RhdHVzO1xuIiwiaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgYmluZEJ1dHRvbiBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2JpbmRCdXR0b25cIjtcbmltcG9ydCBjaGFuZ2VVbml0IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvY2hhbmdlVW5pdFwiO1xuaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL29iamVjdC1oYW5kbGVycy9nZXRXZWF0aGVyRGF0YVwiO1xuaW1wb3J0IG1haW5QYWdlIGZyb20gXCIuL3BhZ2UtZWxlbWVudHMvbWFpblBhZ2VcIjtcblxubWFpblBhZ2UoKTtcbmJpbmRCdXR0b24oKTtcbmdldFdlYXRoZXJEYXRhKCk7XG5jaGFuZ2VVbml0KCk7XG4iLCJpbXBvcnQgdXBkYXRlV2VhdGhlclN0YXR1cyBmcm9tIFwiLi4vaGVscGVyLWZ1bmN0aW9ucy91cGRhdGVXZWF0aGVyU3RhdHVzXCI7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcbiAgaWYgKCFsb2NhdGlvbi52YWx1ZSkge1xuICAgIGxvY2F0aW9uID0gXCJzeWRuZXlcIjtcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uLnZhbHVlO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9ZmQwODg5NjAzMzBkNWNjMGExOTgwMTNkZjM0ZjliMzFgLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHVwZGF0ZVdlYXRoZXJTdGF0dXMod2VhdGhlckRhdGEpO1xuICAgICAgY29uc3QgeyBpY29uIH0gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdO1xuICAgICAgaW1nLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoXCJjaXR5IG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gIH1cbiAgZ2V0V2VhdGhlcigpO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckRhdGE7XG4iLCJmdW5jdGlvbiBsb2FkV2VhdGhlclNlYXJjaCgpIHtcbiAgY29uc3Qgd2VhdGhlclNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkdldCBXZWF0aGVyXCI7XG5cbiAgd2VhdGhlclNlYXJjaC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlclNlYXJjaFwiKTtcblxuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlYXJjaFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgY2l0eVwiKTtcbiAgd2VhdGhlclNlYXJjaC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHdlYXRoZXJTZWFyY2guYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgcmV0dXJuIHdlYXRoZXJTZWFyY2g7XG59XG5leHBvcnQgZGVmYXVsdCBsb2FkV2VhdGhlclNlYXJjaDtcbiIsImZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIk1hZGUgYnk6IFwiO1xuXG4gIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9HcmF2ZW5kZXJcIik7XG4gIGxpbmsudGV4dENvbnRlbnQgPSBcIkdyYXZlbmRlclwiO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwYXJhKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkRm9vdGVyO1xuIiwiZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlYXRoZXIgQXBwXCI7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJUaXRsZVwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuZXhwb3J0IGRlZmF1bHQgbG9hZEhlYWRlcjtcbiIsImltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGxvYWRIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgbG9hZFdlYXRoZXJTZWFyY2ggZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHdlYXRoZXJTdGF0dXMgZnJvbSBcIi4vd2VhdGhlclN0YXR1c1wiO1xuXG5mdW5jdGlvbiByZW5kZXJTdGF0aWNQYWdlcygpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGBjb250ZW50YCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZFdlYXRoZXJTZWFyY2goKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VhdGhlclN0YXR1cygpKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkSGVhZGVyKCkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRGb290ZXIoKSk7XG59XG5leHBvcnQgZGVmYXVsdCByZW5kZXJTdGF0aWNQYWdlcztcbiIsImZ1bmN0aW9uIHVuaXRTbGlkZXIoKSB7XG4gIGNvbnN0IHNsaWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN3aXRjaFwiKTtcbiAgc2xpZGVyLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInN3aXRjaFwiKTtcblxuICBzbGlkZXJEaXYuY2xhc3NMaXN0LmFkZChcInNsaWRlckRpdlwiKTtcbiAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJ1bml0U3dpdGNoXCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwic2xpZGVyQ2hlY2tcIik7XG5cbiAgc2xpZGVyRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgc2xpZGVyRGl2LmFwcGVuZENoaWxkKHNsaWRlcik7XG4gIHJldHVybiBzbGlkZXJEaXY7XG59XG5cbmZ1bmN0aW9uIHdlYXRoZXJTdGF0dXMoKSB7XG4gIGNvbnN0IHdlYXRoZXJTdGF0dXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBmZWVsc2xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gXCIjXCI7XG4gIGNvbnN0IGNoYW5nZVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc2xpZGVyID0gdW5pdFNsaWRlcigpO1xuXG4gIHdlYXRoZXJTdGF0dXNEaXYuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJTdGF0dXNEaXZcIik7XG4gIHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG4gIGZlZWxzbGlrZS5jbGFzc0xpc3QuYWRkKFwiZmVlbHNsaWtlXCIpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiaHVtaWRpdHlcIik7XG4gIGNoYW5nZVVuaXQuY2xhc3NMaXN0LmFkZChcImNoYW5nZVVuaXRMYWJlbFwiKTtcblxuICB0ZW1wLmlubmVyVGV4dCA9IGBUZW1wZXJhdHVyZSBgO1xuICBmZWVsc2xpa2UuaW5uZXJUZXh0ID0gYEZlZWxzIExpa2U6IGA7XG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9IGBIdW1pZGl0eTogJHswfSAlYDtcbiAgY2hhbmdlVW5pdC5pbm5lclRleHQgPSBcIkNoYW5nZSB1bml0XCI7XG5cbiAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXJTdGF0dXNUZW1wXCIpO1xuICBmZWVsc2xpa2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyU3RhdHVzRmVlbHNMaWtlXCIpO1xuICBodW1pZGl0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXJTdGF0dXNIdW1pZGl0eVwiKTtcblxuICB0ZW1wLnNldEF0dHJpYnV0ZShcImRhdGEtdGVtcFwiLCAwKTtcbiAgZmVlbHNsaWtlLnNldEF0dHJpYnV0ZShcImRhdGEtdGVtcFwiLCAwKTtcbiAgaHVtaWRpdHkuc2V0QXR0cmlidXRlKFwiZGF0YS1odW1pZGl0eVwiLCAwKTtcblxuICB3ZWF0aGVyU3RhdHVzRGl2LmFwcGVuZENoaWxkKHRlbXApO1xuICB3ZWF0aGVyU3RhdHVzRGl2LmFwcGVuZENoaWxkKGltZyk7XG4gIHdlYXRoZXJTdGF0dXNEaXYuYXBwZW5kQ2hpbGQoZmVlbHNsaWtlKTtcbiAgd2VhdGhlclN0YXR1c0Rpdi5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIHdlYXRoZXJTdGF0dXNEaXYuYXBwZW5kQ2hpbGQoY2hhbmdlVW5pdCk7XG4gIHdlYXRoZXJTdGF0dXNEaXYuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcbiAgcmV0dXJuIHdlYXRoZXJTdGF0dXNEaXY7XG59XG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyU3RhdHVzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rules-widget/rules-widget.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rules-widget/rules-widget.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-rules-widget\">\n  <div class=\"header\">\n    <p class=\"header__title\">{{ title }}</p>\n    <span class=\"header__info\">{{ info }}</span>\n  </div>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <div\n      class=\"container\"\n      formArrayName=\"{{ controlName }}\"\n      *ngFor=\"let role of form.get(controlName)['controls']; index as i; last as l;\"\n    >\n      <ng-container [formGroupName]=\"i\">\n        <select class=\"container__inline\" formControlName=\"pages\" (change)=\"onPagesChange($event.target.value, role)\">\n          <option *ngFor=\"let item of pagesData\" [value]=\"item.id\">\n            {{ item.name }}\n          </option>\n        </select>\n\n        <select *ngIf=\"role.controls.pages.value === '999'\" class=\"container__inline\" formControlName=\"segments\">\n          <option *ngFor=\"let item of segmentsData\" [value]=\"item.id\">\n            {{ item.name }}\n          </option>\n        </select>\n\n        <div *ngIf=\"role.controls.pages.value === '999'\" class=\"container__inline url\">\n          <input class=\"url-input\" formControlName=\"url\" type=\"text\" placeholder=\"Type a full or partial URL\" />\n          <span class=\"error-msg\" *ngIf=\"role.controls.url.hasError('urlInValid') && role.controls.url.touched\">\n            URL is Missing\n          </span>\n        </div>\n\n        <div class=\"close container__inline\" (click)=\"removeRule(i)\">\n          <span aria-hidden=\"true\">&times;</span>\n        </div>\n\n        <div *ngIf=\"!l\" class=\"indicator\">OR</div>\n      </ng-container>\n    </div>\n    <div class=\"footer\">\n      <button type=\"button\" (click)=\"addRule(this.form.value[controlName])\">+ {{ addButtonText | uppercase }}</button>\n      <button type=\"submit\">SUBMIT</button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        redirectTo: '/rules',
        pathMatch: 'full',
    },
    {
        path: 'rules',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-rules-rules-module */ "pages-rules-rules-module").then(__webpack_require__.bind(null, /*! ./pages/rules/rules.module */ "./src/app/pages/rules/rules.module.ts")).then(m => m.RulesModule),
    },
    {
        path: '**',
        redirectTo: '/rules',
        pathMatch: 'full',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'case-study';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/components/rules-widget/rules-widget.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/rules-widget/rules-widget.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-rules-widget {\n  padding: 0 0.8rem 1rem 0.8rem;\n  border: 1px solid rgba(134, 134, 134, 0.5);\n  border-radius: 10px;\n  box-shadow: 0px 1px 4px rgba(134, 134, 134, 0.3);\n}\n.app-rules-widget .header {\n  margin: 1rem 0;\n}\n.app-rules-widget .header__title {\n  margin: 1rem 0 0.2rem 0;\n  font-weight: 600;\n}\n.app-rules-widget .header__info {\n  font-size: small;\n  color: gray;\n}\n.app-rules-widget .container {\n  margin: 20px 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.app-rules-widget .container__inline {\n  margin-right: 1em;\n  display: inline-flex;\n}\n.app-rules-widget .container__inline.url {\n  position: relative;\n}\n.app-rules-widget .container__inline.url .error-msg {\n  width: 100%;\n  position: absolute;\n  top: 32px;\n  left: 0;\n  -webkit-animation: fade 1s forwards;\n          animation: fade 1s forwards;\n}\n.app-rules-widget .container .error-msg {\n  background: #ffd6e7;\n  color: #9e1068;\n  padding: 2px 5px;\n  font-size: small;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  box-sizing: border-box;\n}\n.app-rules-widget .container .indicator {\n  font-size: medium;\n  color: gray;\n  margin: 0.5em 0 0.5em 1em;\n  flex-basis: 100%;\n  height: 0;\n}\n.app-rules-widget .footer {\n  margin-top: 1em;\n}\n.app-rules-widget .footer button {\n  margin-right: 1em;\n  display: inline-block;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW4vRGVza3RvcC9jYXNlLXN0dWR5L3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcnVsZXMtd2lkZ2V0L3J1bGVzLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcnVsZXMtd2lkZ2V0L3J1bGVzLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7QUNFSjtBRERJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNHTjtBREFFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0dOO0FEREk7RUFDRSxrQkFBQTtBQ0dOO0FERk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNJUjtBRERJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQ0dOO0FEREk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0dOO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURBSTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUNFTjtBREdBO0VBQ0U7SUFDRSxVQUFBO0VDQUY7RURFQTtJQUNFLFVBQUE7RUNBRjtBQUNGO0FETkE7RUFDRTtJQUNFLFVBQUE7RUNBRjtFREVBO0lBQ0UsVUFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9ydWxlcy13aWRnZXQvcnVsZXMtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1ydWxlcy13aWRnZXQge1xuICBwYWRkaW5nOiAwIDAuOHJlbSAxcmVtIDAuOHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMzQsIDEzNCwgMTM0LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDEzNCwgMTM0LCAxMzQsIDAuMyk7XG4gIC5oZWFkZXIge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICZfX3RpdGxlIHtcbiAgICAgIG1hcmdpbjogMXJlbSAwIDAuMnJlbSAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgJl9faW5mbyB7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICB9XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJl9faW5saW5lIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgfVxuICAgICZfX2lubGluZS51cmwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLmVycm9yLW1zZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzJweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDFzIGZvcndhcmRzO1xuICAgICAgfVxuICAgIH1cbiAgICAuZXJyb3ItbXNnIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmQ2ZTc7XG4gICAgICBjb2xvcjogIzllMTA2ODtcbiAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5pbmRpY2F0b3Ige1xuICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIG1hcmdpbjogLjVlbSAwIC41ZW0gMWVtO1xuICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iLCIuYXBwLXJ1bGVzLXdpZGdldCB7XG4gIHBhZGRpbmc6IDAgMC44cmVtIDFyZW0gMC44cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzNCwgMTM0LCAxMzQsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IHJnYmEoMTM0LCAxMzQsIDEzNCwgMC4zKTtcbn1cbi5hcHAtcnVsZXMtd2lkZ2V0IC5oZWFkZXIge1xuICBtYXJnaW46IDFyZW0gMDtcbn1cbi5hcHAtcnVsZXMtd2lkZ2V0IC5oZWFkZXJfX3RpdGxlIHtcbiAgbWFyZ2luOiAxcmVtIDAgMC4ycmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYXBwLXJ1bGVzLXdpZGdldCAuaGVhZGVyX19pbmZvIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IGdyYXk7XG59XG4uYXBwLXJ1bGVzLXdpZGdldCAuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hcHAtcnVsZXMtd2lkZ2V0IC5jb250YWluZXJfX2lubGluZSB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5hcHAtcnVsZXMtd2lkZ2V0IC5jb250YWluZXJfX2lubGluZS51cmwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXBwLXJ1bGVzLXdpZGdldCAuY29udGFpbmVyX19pbmxpbmUudXJsIC5lcnJvci1tc2cge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMycHg7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogZmFkZSAxcyBmb3J3YXJkcztcbn1cbi5hcHAtcnVsZXMtd2lkZ2V0IC5jb250YWluZXIgLmVycm9yLW1zZyB7XG4gIGJhY2tncm91bmQ6ICNmZmQ2ZTc7XG4gIGNvbG9yOiAjOWUxMDY4O1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYXBwLXJ1bGVzLXdpZGdldCAuY29udGFpbmVyIC5pbmRpY2F0b3Ige1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMC41ZW0gMCAwLjVlbSAxZW07XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGhlaWdodDogMDtcbn1cbi5hcHAtcnVsZXMtd2lkZ2V0IC5mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4uYXBwLXJ1bGVzLXdpZGdldCAuZm9vdGVyIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/rules-widget/rules-widget.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/rules-widget/rules-widget.component.ts ***!
  \**************************************************************************/
/*! exports provided: RulesWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesWidgetComponent", function() { return RulesWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RulesWidgetComponent = class RulesWidgetComponent {
    constructor(fb) {
        this.fb = fb;
        this.addButtonText = 'new rule';
        this.controlName = 'inclusion';
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pagesData = [];
        this.segmentsData = [];
        this.hasCustom = false;
    }
    ngOnInit() {
        if (this.controlName === 'inclusion') {
            this.form = this.fb.group({
                inclusion: this.fb.array([this.createClusion()]),
            });
        }
        else {
            this.form = this.fb.group({
                exclusion: this.fb.array([this.createClusion()]),
            });
        }
        // mock async data that coming from backend
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.getPages(), this.getSegments())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(res => {
            const [pages, segments] = res;
            this.pagesData = pages;
            this.segmentsData = segments;
            this.patchDefaultValue(this.pagesData[0].id, this.segmentsData[0].id, 0);
        });
    }
    createClusion(custom) {
        if (custom + '' === '999') {
            return this.fb.group({
                pages: [''],
                segments: [''],
                url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.urlValidate()]],
            });
        }
        else {
            return this.fb.group({
                pages: [''],
                segments: [''],
                url: [''],
            });
        }
    }
    patchDefaultValue(pageVal, segmentVal, idx) {
        this.form.get(this.controlName).controls[idx].controls.pages.patchValue(pageVal);
        this.form.get(this.controlName).controls[idx].controls.segments.patchValue(segmentVal);
    }
    addRule(form) {
        const length = form.length;
        const currObj = form[length - 1];
        this.form.get(this.controlName).push(this.createClusion(currObj && currObj.pages));
        if (length > 0) {
            this.patchDefaultValue(currObj.pages, currObj.segments, length);
        }
        else {
            this.patchDefaultValue(this.pagesData[0].id, this.segmentsData[0].id, 0);
        }
    }
    removeRule(idx) {
        this.form.get(this.controlName).removeAt(idx);
    }
    getPages() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            { id: 0, name: 'All Pages' },
            { id: 34, name: 'Home Pages' },
            { id: 56, name: 'Product Pages' },
            { id: 78, name: 'Password Page' },
            { id: 999, name: 'Custom' },
        ]);
    }
    getSegments() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([
            { id: 100, name: 'Contains' },
            { id: 200, name: 'Exact match' },
        ]);
    }
    onPagesChange(event, form) {
        if (event + '' === '999') {
            form.controls.url.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.urlValidate()]);
        }
        else {
            form.controls.url.clearValidators();
        }
        form.controls.url.updateValueAndValidity();
    }
    onSubmit() {
        this.form.markAllAsTouched();
        if (this.form.status === 'INVALID') {
            return;
        }
        const value = this.form.controls[this.controlName].value.map(res => {
            if (res.pages + '' !== '999') {
                return { pages: res.pages };
            }
            else {
                return res;
            }
        });
        alert(JSON.stringify(value));
    }
    urlValidate() {
        return (control) => {
            const value = control.value;
            const error = { urlInValid: true };
            if (value.length === 0) {
                return error;
            }
            return null;
        };
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
};
RulesWidgetComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RulesWidgetComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RulesWidgetComponent.prototype, "info", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RulesWidgetComponent.prototype, "addButtonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RulesWidgetComponent.prototype, "controlName", void 0);
RulesWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rules-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rules-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/rules-widget/rules-widget.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rules-widget.component.scss */ "./src/app/shared/components/rules-widget/rules-widget.component.scss")).default]
    })
], RulesWidgetComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_rules_widget_rules_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rules-widget/rules-widget.component */ "./src/app/shared/components/rules-widget/rules-widget.component.ts");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_rules_widget_rules_widget_component__WEBPACK_IMPORTED_MODULE_4__["RulesWidgetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        exports: [_components_rules_widget_rules_widget_component__WEBPACK_IMPORTED_MODULE_4__["RulesWidgetComponent"]],
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lun/Desktop/case-study/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
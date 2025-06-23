(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-addons", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-addons"] = factory(require("babylonjs"));
	else
		root["ADDONS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Maths_math__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/tslib/tslib.es6.mjs":
/*!****************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

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
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
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

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
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

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ }),

/***/ "../../../dev/addons/src/htmlMesh/fitStrategy.ts":
/*!*******************************************************!*\
  !*** ../../../dev/addons/src/htmlMesh/fitStrategy.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FitStrategy: () => (/* binding */ FitStrategy)
/* harmony export */ });
var FitStrategyContain = {
    wrapElement: function (element) {
        var sizingElement = document.createElement("div");
        sizingElement.style.display = "flex";
        sizingElement.style.justifyContent = "center";
        sizingElement.style.alignItems = "center";
        var scalingElement = document.createElement("div");
        scalingElement.style.visibility = "hidden";
        scalingElement.appendChild(element);
        sizingElement.appendChild(scalingElement);
        return sizingElement;
    },
    updateSize: function (sizingElement, width, height) {
        var scalingElement = sizingElement.firstElementChild;
        sizingElement.style.width = "".concat(width, "px");
        sizingElement.style.height = "".concat(height, "px");
        var _a = [scalingElement.offsetWidth, scalingElement.offsetHeight], childWidth = _a[0], childHeight = _a[1];
        var scale = Math.min(width / childWidth, height / childHeight);
        scalingElement.style.transform = "scale(".concat(scale, ")");
        scalingElement.style.visibility = "visible";
    },
};
var FitStrategyCover = {
    wrapElement: function (element) {
        var sizingElement = document.createElement("div");
        sizingElement.style.display = "flex";
        sizingElement.style.justifyContent = "center";
        sizingElement.style.alignItems = "center";
        sizingElement.style.overflow = "hidden";
        var scalingElement = document.createElement("div");
        scalingElement.style.visibility = "hidden";
        scalingElement.appendChild(element);
        sizingElement.appendChild(scalingElement);
        return sizingElement;
    },
    updateSize: function (sizingElement, width, height) {
        var scalingElement = sizingElement.firstElementChild;
        sizingElement.style.width = "".concat(width, "px");
        sizingElement.style.height = "".concat(height, "px");
        var _a = [scalingElement.offsetWidth, scalingElement.offsetHeight], childWidth = _a[0], childHeight = _a[1];
        var scale = Math.max(width / childWidth, height / childHeight);
        scalingElement.style.transform = "scale(".concat(scale, ")");
        scalingElement.style.visibility = "visible";
    },
};
var FitStrategyStretch = {
    wrapElement: function (element) {
        var sizingElement = document.createElement("div");
        sizingElement.style.display = "flex";
        sizingElement.style.justifyContent = "center";
        sizingElement.style.alignItems = "center";
        var scalingElement = document.createElement("div");
        scalingElement.style.visibility = "hidden";
        scalingElement.appendChild(element);
        sizingElement.appendChild(scalingElement);
        return sizingElement;
    },
    updateSize: function (sizingElement, width, height) {
        var scalingElement = sizingElement.firstElementChild;
        sizingElement.style.width = "".concat(width, "px");
        sizingElement.style.height = "".concat(height, "px");
        var _a = [scalingElement.offsetWidth, scalingElement.offsetHeight], childWidth = _a[0], childHeight = _a[1];
        scalingElement.style.transform = "scale(".concat(width / childWidth, ", ").concat(height / childHeight, ")");
        scalingElement.style.visibility = "visible";
    },
};
var FitStrategyNone = {
    wrapElement: function (element) {
        return element;
    },
    updateSize: function (sizingElement, width, height) {
        if (sizingElement) {
            sizingElement.style.width = "".concat(width, "px");
            sizingElement.style.height = "".concat(height, "px");
        }
    },
};
var FitStrategy = {
    CONTAIN: FitStrategyContain,
    COVER: FitStrategyCover,
    STRETCH: FitStrategyStretch,
    NONE: FitStrategyNone,
};


/***/ }),

/***/ "../../../dev/addons/src/htmlMesh/htmlMesh.ts":
/*!****************************************************!*\
  !*** ../../../dev/addons/src/htmlMesh/htmlMesh.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlMesh: () => (/* binding */ HtmlMesh)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pointerEventsCaptureBehavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointerEventsCaptureBehavior */ "../../../dev/addons/src/htmlMesh/pointerEventsCaptureBehavior.ts");
/* harmony import */ var _fitStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fitStrategy */ "../../../dev/addons/src/htmlMesh/fitStrategy.ts");








/**
 * This class represents HTML content that we want to render as though it is part of the scene.  The HTML content is actually
 * rendered below the canvas, but a depth mask is created by this class that writes to the depth buffer but does not
 * write to the color buffer, effectively punching a hole in the canvas.  CSS transforms are used to scale, translate, and rotate
 * the HTML content so that it matches the camera and mesh orientation.  The class supports interactions in editable and non-editable mode.
 * In non-editable mode (the default), events are passed to the HTML content when the pointer is over the mask (and not occluded by other meshes
 * in the scene).
 * @see https://playground.babylonjs.com/#HVHYJC#5
 * @see https://playground.babylonjs.com/#B17TC7#112
 */
var HtmlMesh = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(HtmlMesh, _super);
    /**
     * Contruct an instance of HtmlMesh
     * @param scene
     * @param id The id of the mesh.  Will be used as the id of the HTML element as well.
     * @param options object with optional parameters
     */
    function HtmlMesh(scene, id, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.captureOnPointerEnter, captureOnPointerEnter = _c === void 0 ? true : _c, _d = _b.isCanvasOverlay, isCanvasOverlay = _d === void 0 ? false : _d, _e = _b.fitStrategy, fitStrategy = _e === void 0 ? _fitStrategy__WEBPACK_IMPORTED_MODULE_2__.FitStrategy.NONE : _e;
        var _this = _super.call(this, id, scene) || this;
        // Override the super class's _isEnabled property so we can control when the mesh
        // is enabled.  I.e., we don't want to render the mesh until there is content to show.
        _this._enabled = false;
        // The mesh is ready when content has been set and the content size has been set
        // The former is done by the user, the latter is done by the renderer.
        _this._ready = false;
        /**
         * @internal
         */
        _this._isCanvasOverlay = false;
        _this._requiresUpdate = true;
        _this._inverseScaleMatrix = null;
        _this._captureOnPointerEnter = true;
        _this._pointerEventCaptureBehavior = null;
        _this._sourceWidth = null;
        _this._sourceHeight = null;
        _this._fitStrategy = _fitStrategy__WEBPACK_IMPORTED_MODULE_2__.FitStrategy.NONE;
        // Requires a browser to work.  Bail if we aren't running in a browser
        if (typeof document === "undefined") {
            babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Creating an instance of an HtmlMesh with id ".concat(id, " outside of a browser.  The mesh will not be visible."));
            return _this;
        }
        _this._fitStrategy = fitStrategy;
        _this._isCanvasOverlay = isCanvasOverlay;
        _this._createMask();
        _this._element = _this._createElement();
        // Set enabled by default, so this will show as soon as it's ready
        _this.setEnabled(true);
        _this._captureOnPointerEnter = captureOnPointerEnter;
        // Create a behavior to capture pointer events
        _this._pointerEventCaptureBehavior = new _pointerEventsCaptureBehavior__WEBPACK_IMPORTED_MODULE_1__.PointerEventsCaptureBehavior(_this.capturePointerEvents.bind(_this), _this.releasePointerEvents.bind(_this), {
            captureOnPointerEnter: _this._captureOnPointerEnter,
        });
        _this.addBehavior(_this._pointerEventCaptureBehavior);
        return _this;
    }
    Object.defineProperty(HtmlMesh.prototype, "isHtmlMesh", {
        /**
         * Helps identifying a html mesh from a regular mesh
         */
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HtmlMesh.prototype, "sourceWidth", {
        /**
         * Return the source width of the content in pixels
         */
        get: function () {
            return this._sourceWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HtmlMesh.prototype, "sourceHeight", {
        /**
         * Return the source height of the content in pixels
         */
        get: function () {
            return this._sourceHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HtmlMesh.prototype, "width", {
        /**
         * The width of the content in pixels
         */
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HtmlMesh.prototype, "height", {
        /**
         * The height of the content in pixels
         */
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HtmlMesh.prototype, "element", {
        /**
         * The HTML element that is being rendered as a mesh
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HtmlMesh.prototype, "requiresUpdate", {
        /**
         * True if the mesh has been moved, rotated, or scaled since the last time this
         * property was read.  This property is reset to false after reading.
         */
        get: function () {
            return this._requiresUpdate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HtmlMesh.prototype, "captureOnPointerEnter", {
        /**
         * Enable capture for the pointer when entering the mesh area
         */
        set: function (captureOnPointerEnter) {
            this._captureOnPointerEnter = captureOnPointerEnter;
            if (this._pointerEventCaptureBehavior) {
                this._pointerEventCaptureBehavior.captureOnPointerEnter = captureOnPointerEnter;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Disposes of the mesh and the HTML element
     */
    HtmlMesh.prototype.dispose = function () {
        var _a;
        _super.prototype.dispose.call(this);
        (_a = this._element) === null || _a === void 0 ? void 0 : _a.remove();
        this._element = undefined;
        if (this._pointerEventCaptureBehavior) {
            this._pointerEventCaptureBehavior.dispose();
            this._pointerEventCaptureBehavior = null;
        }
    };
    /**
     * @internal
     */
    HtmlMesh.prototype._markAsUpdated = function () {
        this._requiresUpdate = false;
    };
    /**
     * Sets the content of the element to the specified content adjusting the mesh scale to match and making it visible.
     * If the the specified content is undefined, then it will make the mesh invisible.  In either case it will clear the
     * element content first.
     * @param element The element to render as a mesh
     * @param width The width of the mesh in Babylon units
     * @param height The height of the mesh in Babylon units
     */
    HtmlMesh.prototype.setContent = function (element, width, height) {
        // If content is changed, we are no longer ready
        this._setAsReady(false);
        // Also invalidate the source width and height
        this._sourceWidth = null;
        this._sourceHeight = null;
        if (!this._element) {
            return;
        }
        this._width = width;
        this._height = height;
        this._requiresUpdate = true;
        this.scaling.setAll(1);
        if (element) {
            this._element.appendChild(this._fitStrategy.wrapElement(element));
            this._updateScaleIfNecessary();
        }
        if (this.sourceWidth && this.sourceHeight) {
            this._setAsReady(true);
        }
    };
    // Overides BABYLON.Mesh.setEnabled
    HtmlMesh.prototype.setEnabled = function (enabled) {
        // Capture requested enabled state
        this._enabled = enabled;
        // If disabling or enabling and we are ready
        if (!enabled || this._ready) {
            this._doSetEnabled(enabled);
        }
    };
    /**
     * Sets the content size in pixels
     * @param width width of the source
     * @param height height of the source
     */
    HtmlMesh.prototype.setContentSizePx = function (width, height) {
        this._sourceWidth = width;
        this._sourceHeight = height;
        if (!this._element || !this._element.firstElementChild) {
            return;
        }
        this._fitStrategy.updateSize(this._element.firstElementChild, width, height);
        this._updateScaleIfNecessary();
        if (this.width && this.height) {
            this._setAsReady(true);
        }
    };
    HtmlMesh.prototype._setAsReady = function (ready) {
        this._ready = ready;
        if (ready) {
            this._doSetEnabled(this._enabled);
        }
        else {
            this._doSetEnabled(false);
        }
    };
    HtmlMesh.prototype._doSetEnabled = function (enabled) {
        var _this = this;
        var _a;
        if (!this._element) {
            return;
        }
        //if enabled, then start listening for changes to the
        // scaling, rotation, and position.  otherwise stop listening
        if (enabled && !this._worldMatrixUpdateObserver) {
            this._worldMatrixUpdateObserver = this.onAfterWorldMatrixUpdateObservable.add(function () {
                _this._requiresUpdate = true;
            });
        }
        else if (!enabled) {
            (_a = this._worldMatrixUpdateObserver) === null || _a === void 0 ? void 0 : _a.remove();
            this._worldMatrixUpdateObserver = null;
        }
        // If enabled, then revert the content element display
        // otherwise hide it
        this._element.style.display = enabled ? "" : "none";
        // Capture the content z index
        this._setElementzIndex(this.position.z * -10000);
        _super.prototype.setEnabled.call(this, enabled);
    };
    HtmlMesh.prototype._updateScaleIfNecessary = function () {
        // If we have setContent before, the content scale is baked into the mesh.  If we don't reset the vertices to
        // the original size, then we will multiply the scale when we bake the scale below.  By applying the inverse, we back out
        // the scaling that has been done so we are starting from the same point.
        // First reset the scale to 1
        this.scaling.setAll(1);
        // Then back out the original vertices changes to match the content scale
        if (this._inverseScaleMatrix) {
            this.bakeTransformIntoVertices(this._inverseScaleMatrix);
            // Clear out the matrix so it doesn't get applied again unless we scale
            this._inverseScaleMatrix = null;
        }
        // Set scale to match content.  Note we can't just scale the mesh, because that will scale the content as well
        // What we need to do is compute a scale matrix and then bake that into the mesh vertices.  This will leave the
        // mesh scale at 1, so our content will stay it's original width and height until we scale the mesh.
        var scaleX = this._width || 1;
        var scaleY = this._height || 1;
        var scaleMatrix = babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Matrix.Scaling(scaleX, scaleY, 1);
        this.bakeTransformIntoVertices(scaleMatrix);
        // Get an inverse of the scale matrix that we can use to back out the scale changes we have made so
        // we don't multiply the scale.
        this._inverseScaleMatrix = new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Matrix();
        scaleMatrix.invertToRef(this._inverseScaleMatrix);
    };
    HtmlMesh.prototype._createMask = function () {
        var vertexData = (0,babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.CreatePlaneVertexData)({ width: 1, height: 1 });
        vertexData.applyToMesh(this);
        var scene = this.getScene();
        this.checkCollisions = true;
        var depthMask = new babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial("".concat(this.id, "-mat"), scene);
        if (!this._isCanvasOverlay) {
            depthMask.backFaceCulling = false;
            depthMask.disableColorWrite = true;
            depthMask.disableLighting = true;
        }
        this.material = depthMask;
        // Optimization - Freeze material since it never needs to change
        this.material.freeze();
    };
    HtmlMesh.prototype._setElementzIndex = function (zIndex) {
        if (this._element) {
            this._element.style.zIndex = "".concat(zIndex);
        }
    };
    /**
     * Callback used by the PointerEventsCaptureBehavior to capture pointer events
     */
    HtmlMesh.prototype.capturePointerEvents = function () {
        if (!this._element) {
            return;
        }
        // Enable dom content to capture pointer events
        this._element.style.pointerEvents = "auto";
        // Supress events outside of the dom content
        document.getElementsByTagName("body")[0].style.pointerEvents = "none";
    };
    /**
     * Callback used by the PointerEventsCaptureBehavior to release pointer events
     */
    HtmlMesh.prototype.releasePointerEvents = function () {
        if (!this._element) {
            return;
        }
        // Enable pointer events on canvas
        document.getElementsByTagName("body")[0].style.pointerEvents = "auto";
        // Disable pointer events on dom content
        this._element.style.pointerEvents = "none";
    };
    HtmlMesh.prototype._createElement = function () {
        // Requires a browser to work.  Bail if we aren't running in a browser
        if (typeof document === "undefined") {
            return;
        }
        var div = document.createElement("div");
        div.id = this.id;
        div.style.backgroundColor = this._isCanvasOverlay ? "transparent" : "#000";
        div.style.zIndex = "1";
        div.style.position = "absolute";
        div.style.pointerEvents = "none";
        div.style.backfaceVisibility = "hidden";
        return div;
    };
    return HtmlMesh;
}(babylonjs_Meshes_mesh__WEBPACK_IMPORTED_MODULE_0__.Mesh));



/***/ }),

/***/ "../../../dev/addons/src/htmlMesh/htmlMeshRenderer.ts":
/*!************************************************************!*\
  !*** ../../../dev/addons/src/htmlMesh/htmlMeshRenderer.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlMeshRenderer: () => (/* binding */ HtmlMeshRenderer)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__);




var PositionUpdateFailMessage = "Failed to update html mesh renderer position due to failure to get canvas rect.  HtmlMesh instances may not render correctly";
var BabylonUnitsToPixels = 100;
// Returns a function that ensures that HtmlMeshes are rendered before all other meshes.
// Note this will only be applied to group 0.
// If neither mesh is an HtmlMesh, then the default render order is used
// This prevents HtmlMeshes from appearing in front of other meshes when they are behind them
var RenderOrderFunc = function (defaultRenderOrder) {
    return function (subMeshA, subMeshB) {
        var meshA = subMeshA.getMesh();
        var meshB = subMeshB.getMesh();
        // Use property check instead of instanceof since it is less expensive and
        // this will be called many times per frame
        var meshIsHtmlMeshA = meshA["isHtmlMesh"];
        var meshIsHtmlMeshB = meshB["isHtmlMesh"];
        if (meshIsHtmlMeshA) {
            return meshIsHtmlMeshB ? (meshA.absolutePosition.z <= meshB.absolutePosition.z ? 1 : -1) : -1;
        }
        else {
            return meshIsHtmlMeshB ? 1 : defaultRenderOrder(subMeshA, subMeshB);
        }
    };
};
/**
 * An instance of this is required to render HtmlMeshes in the scene.
 * if using HtmlMeshes, you must not set render order for group 0 using
 * scene.setRenderingOrder.  You must instead pass the compare functions
 * to the HtmlMeshRenderer constructor.  If you do not, then your render
 * order will be overwritten if the HtmlMeshRenderer is created after and
 * the HtmlMeshes will not render correctly (they will appear in front of
 * meshes that are actually in front of them) if the HtmlMeshRenderer is
 * created before.
 */
var HtmlMeshRenderer = /** @class */ (function () {
    /**
     * Contruct an instance of HtmlMeshRenderer
     * @param scene
     * @param options object containing the following optional properties:
     * @returns
     */
    function HtmlMeshRenderer(scene, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.parentContainerId, parentContainerId = _c === void 0 ? null : _c, _d = _b._containerId, _containerId = _d === void 0 ? "css-container" : _d, _e = _b.enableOverlayRender, enableOverlayRender = _e === void 0 ? true : _e, _f = _b.defaultOpaqueRenderOrder, defaultOpaqueRenderOrder = _f === void 0 ? babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.RenderingGroup.PainterSortCompare : _f, _g = _b.defaultAlphaTestRenderOrder, defaultAlphaTestRenderOrder = _g === void 0 ? babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.RenderingGroup.PainterSortCompare : _g, _h = _b.defaultTransparentRenderOrder, defaultTransparentRenderOrder = _h === void 0 ? babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.RenderingGroup.defaultTransparentSortCompare : _h;
        var _this = this;
        this._cache = {
            cameraData: { fov: 0, position: new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3(), style: "" },
            htmlMeshData: new WeakMap(),
        };
        this._width = 0;
        this._height = 0;
        this._heightHalf = 0;
        // Create some refs to avoid creating new objects every frame
        this._temp = {
            scaleTransform: new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3(),
            rotationTransform: new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Quaternion(),
            positionTransform: new babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Vector3(),
            objectMatrix: babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity(),
            cameraWorldMatrix: babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity(),
            cameraRotationMatrix: babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity(),
            cameraWorldMatrixAsArray: new Array(16),
        };
        // Keep track of DPR so we can resize if DPR changes
        // Otherwise the DOM content will scale, but the mesh won't
        this._lastDevicePixelRatio = window.devicePixelRatio;
        // Keep track of camera matrix changes so we only update the
        // DOM element styles when necessary
        this._cameraMatrixUpdated = true;
        // Keep track of position changes so we only update the DOM element
        // styles when necessary
        this._previousCanvasDocumentPosition = {
            top: 0,
            left: 0,
        };
        this._renderObserver = null;
        this._onCameraMatrixChanged = function (camera) {
            _this._cameraWorldMatrix = camera.getWorldMatrix();
            _this._cameraMatrixUpdated = true;
        };
        // Requires a browser to work.  Only init if we are in a browser
        if (typeof document === "undefined") {
            return;
        }
        this._containerId = _containerId;
        this._init(scene, parentContainerId, enableOverlayRender, defaultOpaqueRenderOrder, defaultAlphaTestRenderOrder, defaultTransparentRenderOrder);
    }
    /**
     * Dispose of the HtmlMeshRenderer
     */
    HtmlMeshRenderer.prototype.dispose = function () {
        var _a, _b;
        if (this._renderObserver) {
            this._renderObserver.remove();
            this._renderObserver = null;
        }
        (_a = this._overlayElements) === null || _a === void 0 ? void 0 : _a.container.remove();
        this._overlayElements = null;
        (_b = this._inSceneElements) === null || _b === void 0 ? void 0 : _b.container.remove();
        this._inSceneElements = null;
    };
    HtmlMeshRenderer.prototype._init = function (scene, parentContainerId, enableOverlayRender, defaultOpaqueRenderOrder, defaultAlphaTestRenderOrder, defaultTransparentRenderOrder) {
        var _this = this;
        var _a;
        // Requires a browser to work.  Only init if we are in a browser
        if (typeof document === "undefined") {
            return;
        }
        // Create the DOM containers
        var parentContainer = parentContainerId ? document.getElementById(parentContainerId) : document.body;
        if (!parentContainer) {
            parentContainer = document.body;
        }
        // if the container already exists, then remove it
        var inSceneContainerId = "".concat(this._containerId, "_in_scene");
        this._inSceneElements = this._createRenderLayerElements(inSceneContainerId);
        parentContainer.insertBefore(this._inSceneElements.container, parentContainer.firstChild);
        if (enableOverlayRender) {
            var overlayContainerId = "".concat(this._containerId, "_overlay");
            this._overlayElements = this._createRenderLayerElements(overlayContainerId);
            var zIndex = +((_a = scene.getEngine().getRenderingCanvas().style.zIndex) !== null && _a !== void 0 ? _a : "0") + 1;
            this._overlayElements.container.style.zIndex = "".concat(zIndex);
            this._overlayElements.container.style.pointerEvents = "none";
            parentContainer.insertBefore(this._overlayElements.container, parentContainer.firstChild);
        }
        this._engine = scene.getEngine();
        var clientRect = this._engine.getRenderingCanvasClientRect();
        if (!clientRect) {
            throw new Error("Failed to get client rect for rendering canvas");
        }
        // Set the size and resize behavior
        this._setSize(clientRect.width, clientRect.height);
        this._engine.onResizeObservable.add(function () {
            var clientRect = _this._engine.getRenderingCanvasClientRect();
            if (clientRect) {
                _this._setSize(clientRect.width, clientRect.height);
            }
        });
        var projectionObs;
        var matrixObs;
        var observeCamera = function () {
            var camera = scene.activeCamera;
            if (camera) {
                projectionObs = camera.onProjectionMatrixChangedObservable.add(function () {
                    _this._onCameraMatrixChanged(camera);
                });
                matrixObs = camera.onViewMatrixChangedObservable.add(function () {
                    _this._onCameraMatrixChanged(camera);
                });
            }
        };
        observeCamera();
        scene.onActiveCameraChanged.add(function () {
            var _a, _b;
            if (projectionObs) {
                (_a = scene.activeCamera) === null || _a === void 0 ? void 0 : _a.onProjectionMatrixChangedObservable.remove(projectionObs);
            }
            if (matrixObs) {
                (_b = scene.activeCamera) === null || _b === void 0 ? void 0 : _b.onViewMatrixChangedObservable.remove(matrixObs);
            }
            observeCamera();
        });
        // We need to make sure that HtmlMeshes are rendered before all other meshes
        // so that they don't appear in front of meshes that are actually in front of them
        // Updating the render order isn't ideal, but it is the only way to acheive this
        // The implication is that an app using the HtmlMeshRendered must set the scene render order
        // via the HtmlMeshRendered constructor
        var opaqueRenderOrder = RenderOrderFunc(defaultOpaqueRenderOrder);
        var alphaTestRenderOrder = RenderOrderFunc(defaultAlphaTestRenderOrder);
        var transparentRenderOrder = RenderOrderFunc(defaultTransparentRenderOrder);
        scene.setRenderingOrder(0, opaqueRenderOrder, alphaTestRenderOrder, transparentRenderOrder);
        this._renderObserver = scene.onBeforeRenderObservable.add(function () {
            _this._render(scene, scene.activeCamera);
        });
    };
    HtmlMeshRenderer.prototype._createRenderLayerElements = function (containerId) {
        var existingContainer = document.getElementById(containerId);
        if (existingContainer) {
            existingContainer.remove();
        }
        var container = document.createElement("div");
        container.id = containerId;
        container.style.position = "absolute";
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.zIndex = "-1";
        var domElement = document.createElement("div");
        domElement.style.overflow = "hidden";
        var cameraElement = document.createElement("div");
        cameraElement.style.webkitTransformStyle = "preserve-3d";
        cameraElement.style.transformStyle = "preserve-3d";
        cameraElement.style.pointerEvents = "none";
        domElement.appendChild(cameraElement);
        container.appendChild(domElement);
        return {
            container: container,
            domElement: domElement,
            cameraElement: cameraElement,
        };
    };
    HtmlMeshRenderer.prototype._getSize = function () {
        return {
            width: this._width,
            height: this._height,
        };
    };
    HtmlMeshRenderer.prototype._setSize = function (width, height) {
        this._width = width;
        this._height = height;
        this._heightHalf = this._height / 2;
        if (!this._inSceneElements || !this._overlayElements) {
            return;
        }
        var domElements = [this._inSceneElements.domElement, this._overlayElements.domElement, this._inSceneElements.cameraElement, this._overlayElements.cameraElement];
        for (var _i = 0, domElements_1 = domElements; _i < domElements_1.length; _i++) {
            var dom = domElements_1[_i];
            if (dom) {
                dom.style.width = "".concat(width, "px");
                dom.style.height = "".concat(height, "px");
            }
        }
    };
    // prettier-ignore
    HtmlMeshRenderer.prototype._getCameraCssMatrix = function (matrix) {
        var elements = matrix.m;
        return "matrix3d(".concat(this._epsilon(elements[0]), ",").concat(this._epsilon(-elements[1]), ",").concat(this._epsilon(elements[2]), ",").concat(this._epsilon(elements[3]), ",").concat(this._epsilon(elements[4]), ",").concat(this._epsilon(-elements[5]), ",").concat(this._epsilon(elements[6]), ",").concat(this._epsilon(elements[7]), ",").concat(this._epsilon(elements[8]), ",").concat(this._epsilon(-elements[9]), ",").concat(this._epsilon(elements[10]), ",").concat(this._epsilon(elements[11]), ",").concat(this._epsilon(elements[12]), ",").concat(this._epsilon(-elements[13]), ",").concat(this._epsilon(elements[14]), ",").concat(this._epsilon(elements[15]), ")");
    };
    // Convert a Babylon world matrix to a CSS matrix
    // This also handles conversion from BJS left handed coords
    // to CSS right handed coords
    // prettier-ignore
    HtmlMeshRenderer.prototype._getHtmlContentCssMatrix = function (matrix, useRightHandedSystem) {
        var elements = matrix.m;
        // In a right handed coordinate system, the elements 11 to 14 have to change their direction
        var direction = useRightHandedSystem ? -1 : 1;
        var matrix3d = "matrix3d(".concat(this._epsilon(elements[0]), ",").concat(this._epsilon(elements[1]), ",").concat(this._epsilon(elements[2] * -direction), ",").concat(this._epsilon(elements[3]), ",").concat(this._epsilon(-elements[4]), ",").concat(this._epsilon(-elements[5]), ",").concat(this._epsilon(elements[6] * direction), ",").concat(this._epsilon(-elements[7]), ",").concat(this._epsilon(elements[8] * -direction), ",").concat(this._epsilon(elements[9] * -direction), ",").concat(this._epsilon(elements[10]), ",").concat(this._epsilon(elements[11] * direction), ",").concat(this._epsilon(elements[12] * direction), ",").concat(this._epsilon(elements[13] * direction), ",").concat(this._epsilon(elements[14] * direction), ",").concat(this._epsilon(elements[15]), ")");
        return matrix3d;
    };
    HtmlMeshRenderer.prototype._getTransformationMatrix = function (htmlMesh, useRightHandedSystem) {
        var _a;
        // Get the camera world matrix
        // Make sure the camera world matrix is up to date
        if (!this._cameraWorldMatrix) {
            this._cameraWorldMatrix = (_a = htmlMesh.getScene().activeCamera) === null || _a === void 0 ? void 0 : _a.getWorldMatrix();
        }
        if (!this._cameraWorldMatrix) {
            return babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix.Identity();
        }
        var objectWorldMatrix = htmlMesh.getWorldMatrix();
        // Scale the object matrix by the base scale factor for the mesh
        // which is the ratio of the mesh width/height to the renderer
        // width/height divided by the babylon units to pixels ratio
        var widthScaleFactor = 1;
        var heightScaleFactor = 1;
        if (htmlMesh.sourceWidth && htmlMesh.sourceHeight) {
            widthScaleFactor = htmlMesh.width / (htmlMesh.sourceWidth / BabylonUnitsToPixels);
            heightScaleFactor = htmlMesh.height / (htmlMesh.sourceHeight / BabylonUnitsToPixels);
        }
        // Apply the scale to the object's world matrix.  Note we aren't scaling
        // the object, just getting a matrix as though it were scaled, so we can
        // scale the content
        var scaleTransform = this._temp.scaleTransform;
        var rotationTransform = this._temp.rotationTransform;
        var positionTransform = this._temp.positionTransform;
        var scaledAndTranslatedObjectMatrix = this._temp.objectMatrix;
        objectWorldMatrix.decompose(scaleTransform, rotationTransform, positionTransform);
        scaleTransform.x *= widthScaleFactor;
        scaleTransform.y *= heightScaleFactor;
        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix.ComposeToRef(scaleTransform, rotationTransform, positionTransform, scaledAndTranslatedObjectMatrix);
        // Adjust direction of 12 and 13 of the transformation matrix based on the handedness of the system
        var direction = useRightHandedSystem ? -1 : 1;
        // Adjust translation values to be from camera vs world origin
        // Note that we are also adjusting these values to be pixels vs Babylon units
        var position = htmlMesh.getAbsolutePosition();
        scaledAndTranslatedObjectMatrix.setRowFromFloats(3, (-this._cameraWorldMatrix.m[12] + position.x) * BabylonUnitsToPixels * direction, (-this._cameraWorldMatrix.m[13] + position.y) * BabylonUnitsToPixels * direction, (this._cameraWorldMatrix.m[14] - position.z) * BabylonUnitsToPixels, this._cameraWorldMatrix.m[15] * 0.00001 * BabylonUnitsToPixels);
        // Adjust other values to be pixels vs Babylon units
        scaledAndTranslatedObjectMatrix.multiplyAtIndex(3, BabylonUnitsToPixels);
        scaledAndTranslatedObjectMatrix.multiplyAtIndex(7, BabylonUnitsToPixels);
        scaledAndTranslatedObjectMatrix.multiplyAtIndex(11, BabylonUnitsToPixels);
        return scaledAndTranslatedObjectMatrix;
    };
    HtmlMeshRenderer.prototype._renderHtmlMesh = function (htmlMesh, useRightHandedSystem) {
        var _a, _b;
        if (!htmlMesh.element || !htmlMesh.element.firstElementChild) {
            // nothing to render, so bail
            return;
        }
        // We need to ensure html mesh data is initialized before
        // computing the base scale factor
        var htmlMeshData = this._cache.htmlMeshData.get(htmlMesh);
        if (!htmlMeshData) {
            htmlMeshData = { style: "" };
            this._cache.htmlMeshData.set(htmlMesh, htmlMeshData);
        }
        var cameraElement = htmlMesh._isCanvasOverlay ? (_a = this._overlayElements) === null || _a === void 0 ? void 0 : _a.cameraElement : (_b = this._inSceneElements) === null || _b === void 0 ? void 0 : _b.cameraElement;
        if (htmlMesh.element.parentNode !== cameraElement) {
            cameraElement.appendChild(htmlMesh.element);
        }
        // If the htmlMesh content has changed, update the base scale factor
        if (htmlMesh.requiresUpdate) {
            this._updateBaseScaleFactor(htmlMesh);
        }
        // Get the transformation matrix for the html mesh
        var scaledAndTranslatedObjectMatrix = this._getTransformationMatrix(htmlMesh, useRightHandedSystem);
        var style = "translate(-50%, -50%) ".concat(this._getHtmlContentCssMatrix(scaledAndTranslatedObjectMatrix, useRightHandedSystem));
        // In a right handed system, screens are on the wrong side of the mesh, so we have to rotate by Math.PI which results in the matrix3d seen below
        style += "".concat(useRightHandedSystem ? "matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)" : "");
        if (htmlMeshData.style !== style) {
            htmlMesh.element.style.webkitTransform = style;
            htmlMesh.element.style.transform = style;
        }
        htmlMesh._markAsUpdated();
    };
    HtmlMeshRenderer.prototype._render = function (scene, camera) {
        var _a, _b, _c, _d;
        var needsUpdate = false;
        var useRightHandedSystem = scene.useRightHandedSystem;
        // Update the container position and size if necessary
        this._updateContainerPositionIfNeeded();
        // Check for a camera change
        if (this._cameraMatrixUpdated) {
            this._cameraMatrixUpdated = false;
            needsUpdate = true;
        }
        // If the camera position has changed, then we also need to update
        if (camera.position.x !== this._cache.cameraData.position.x ||
            camera.position.y !== this._cache.cameraData.position.y ||
            camera.position.z !== this._cache.cameraData.position.z) {
            this._cache.cameraData.position.copyFrom(camera.position);
            needsUpdate = true;
        }
        // Check for a dpr change
        if (window.devicePixelRatio !== this._lastDevicePixelRatio) {
            this._lastDevicePixelRatio = window.devicePixelRatio;
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("In render - dpr changed: ", this._lastDevicePixelRatio);
            needsUpdate = true;
        }
        // Check if any meshes need to be updated
        var meshesNeedingUpdate = scene.meshes.filter(function (mesh) { return mesh["isHtmlMesh"] && (needsUpdate || mesh.requiresUpdate); });
        needsUpdate = needsUpdate || meshesNeedingUpdate.length > 0;
        if (!needsUpdate) {
            return;
        }
        // Get a projection matrix for the camera
        var projectionMatrix = camera.getProjectionMatrix();
        var fov = projectionMatrix.m[5] * this._heightHalf;
        if (this._cache.cameraData.fov !== fov) {
            var source = [(_a = this._overlayElements) === null || _a === void 0 ? void 0 : _a.domElement, (_b = this._inSceneElements) === null || _b === void 0 ? void 0 : _b.domElement];
            if (camera.mode == babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Camera.PERSPECTIVE_CAMERA) {
                for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                    var el = source_1[_i];
                    if (el) {
                        el.style.webkitPerspective = fov + "px";
                        el.style.perspective = fov + "px";
                    }
                }
            }
            else {
                for (var _e = 0, source_2 = source; _e < source_2.length; _e++) {
                    var el = source_2[_e];
                    if (el) {
                        el.style.webkitPerspective = "";
                        el.style.perspective = "";
                    }
                }
            }
            this._cache.cameraData.fov = fov;
        }
        // Get the CSS matrix for the camera (which will include any camera rotation)
        if (camera.parent === null) {
            camera.computeWorldMatrix();
        }
        var cameraMatrixWorld = this._temp.cameraWorldMatrix;
        cameraMatrixWorld.copyFrom(camera.getWorldMatrix());
        var cameraRotationMatrix = this._temp.cameraRotationMatrix;
        cameraMatrixWorld.getRotationMatrix().transposeToRef(cameraRotationMatrix);
        var cameraMatrixWorldAsArray = this._temp.cameraWorldMatrixAsArray;
        cameraMatrixWorld.copyToArray(cameraMatrixWorldAsArray);
        // For a few values, we have to adjust the direction based on the handedness of the system
        var direction = useRightHandedSystem ? 1 : -1;
        cameraMatrixWorldAsArray[1] = cameraRotationMatrix.m[1];
        cameraMatrixWorldAsArray[2] = cameraRotationMatrix.m[2] * direction;
        cameraMatrixWorldAsArray[4] = cameraRotationMatrix.m[4] * direction;
        cameraMatrixWorldAsArray[6] = cameraRotationMatrix.m[6] * direction;
        cameraMatrixWorldAsArray[8] = cameraRotationMatrix.m[8] * direction;
        cameraMatrixWorldAsArray[9] = cameraRotationMatrix.m[9] * direction;
        babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Matrix.FromArrayToRef(cameraMatrixWorldAsArray, 0, cameraMatrixWorld);
        var cameraCSSMatrix = this._getCameraCssMatrix(cameraMatrixWorld);
        var style = cameraCSSMatrix;
        if (this._cache.cameraData.style !== style) {
            var source = [(_c = this._inSceneElements) === null || _c === void 0 ? void 0 : _c.cameraElement, (_d = this._overlayElements) === null || _d === void 0 ? void 0 : _d.cameraElement];
            for (var _f = 0, source_3 = source; _f < source_3.length; _f++) {
                var el = source_3[_f];
                if (el) {
                    el.style.webkitTransform = style;
                    el.style.transform = style;
                }
            }
            this._cache.cameraData.style = style;
        }
        // _Render objects if necessary
        for (var _g = 0, meshesNeedingUpdate_1 = meshesNeedingUpdate; _g < meshesNeedingUpdate_1.length; _g++) {
            var mesh = meshesNeedingUpdate_1[_g];
            this._renderHtmlMesh(mesh, useRightHandedSystem);
        }
    };
    HtmlMeshRenderer.prototype._updateBaseScaleFactor = function (htmlMesh) {
        // Get screen width and height
        var screenWidth = this._width;
        var screenHeight = this._height;
        // Calculate aspect ratios
        var htmlMeshAspectRatio = (htmlMesh.width || 1) / (htmlMesh.height || 1);
        var screenAspectRatio = screenWidth / screenHeight;
        // Adjust screen dimensions based on aspect ratios
        if (htmlMeshAspectRatio > screenAspectRatio) {
            // If the HTML mesh is wider relative to its height than the screen, adjust the screen width
            screenWidth = screenHeight * htmlMeshAspectRatio;
        }
        else {
            // If the HTML mesh is taller relative to its width than the screen, adjust the screen height
            screenHeight = screenWidth / htmlMeshAspectRatio;
        }
        // Set content to fill screen so we get max resolution when it is shrunk to fit the mesh
        htmlMesh.setContentSizePx(screenWidth, screenHeight);
    };
    HtmlMeshRenderer.prototype._updateContainerPositionIfNeeded = function () {
        var _a, _b;
        // Determine if the canvas has moved on the screen
        var canvasRect = this._engine.getRenderingCanvasClientRect();
        // canvas rect may be null if layout not complete
        if (!canvasRect) {
            babylonjs_Maths_math__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn(PositionUpdateFailMessage);
            return;
        }
        var scrollTop = window.scrollY;
        var scrollLeft = window.scrollX;
        var canvasDocumentTop = canvasRect.top + scrollTop;
        var canvasDocumentLeft = canvasRect.left + scrollLeft;
        if (this._previousCanvasDocumentPosition.top !== canvasDocumentTop || this._previousCanvasDocumentPosition.left !== canvasDocumentLeft) {
            this._previousCanvasDocumentPosition.top = canvasDocumentTop;
            this._previousCanvasDocumentPosition.left = canvasDocumentLeft;
            var source = [(_a = this._inSceneElements) === null || _a === void 0 ? void 0 : _a.container, (_b = this._overlayElements) === null || _b === void 0 ? void 0 : _b.container];
            for (var _i = 0, source_4 = source; _i < source_4.length; _i++) {
                var container = source_4[_i];
                if (!container) {
                    continue;
                }
                // set the top and left of the css container to match the canvas
                var containerParent = container.offsetParent;
                var parentRect = containerParent.getBoundingClientRect();
                var parentDocumentTop = parentRect.top + scrollTop;
                var parentDocumentLeft = parentRect.left + scrollLeft;
                var ancestorMarginsAndPadding = this._getAncestorMarginsAndPadding(containerParent);
                // Add the body margin
                var bodyStyle = window.getComputedStyle(document.body);
                var bodyMarginTop = parseInt(bodyStyle.marginTop, 10);
                var bodyMarginLeft = parseInt(bodyStyle.marginLeft, 10);
                container.style.top = "".concat(canvasDocumentTop - parentDocumentTop - ancestorMarginsAndPadding.marginTop + ancestorMarginsAndPadding.paddingTop + bodyMarginTop, "px");
                container.style.left = "".concat(canvasDocumentLeft - parentDocumentLeft - ancestorMarginsAndPadding.marginLeft + ancestorMarginsAndPadding.paddingLeft + bodyMarginLeft, "px");
            }
        }
    };
    HtmlMeshRenderer.prototype._epsilon = function (value) {
        return Math.abs(value) < 1e-10 ? 0 : value;
    };
    // Get total margins and padding for an element, excluding the body and document margins
    HtmlMeshRenderer.prototype._getAncestorMarginsAndPadding = function (element) {
        var marginTop = 0;
        var marginLeft = 0;
        var paddingTop = 0;
        var paddingLeft = 0;
        while (element && element !== document.body && element !== document.documentElement) {
            var style = window.getComputedStyle(element);
            marginTop += parseInt(style.marginTop, 10);
            marginLeft += parseInt(style.marginLeft, 10);
            paddingTop += parseInt(style.paddingTop, 10);
            paddingLeft += parseInt(style.paddingLeft, 10);
            element = element.offsetParent;
        }
        return { marginTop: marginTop, marginLeft: marginLeft, paddingTop: paddingTop, paddingLeft: paddingLeft };
    };
    return HtmlMeshRenderer;
}());



/***/ }),

/***/ "../../../dev/addons/src/htmlMesh/index.ts":
/*!*************************************************!*\
  !*** ../../../dev/addons/src/htmlMesh/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FitStrategy: () => (/* reexport safe */ _fitStrategy__WEBPACK_IMPORTED_MODULE_3__.FitStrategy),
/* harmony export */   HtmlMesh: () => (/* reexport safe */ _htmlMesh__WEBPACK_IMPORTED_MODULE_1__.HtmlMesh),
/* harmony export */   HtmlMeshRenderer: () => (/* reexport safe */ _htmlMeshRenderer__WEBPACK_IMPORTED_MODULE_0__.HtmlMeshRenderer),
/* harmony export */   PointerEventsCaptureBehavior: () => (/* reexport safe */ _pointerEventsCaptureBehavior__WEBPACK_IMPORTED_MODULE_2__.PointerEventsCaptureBehavior)
/* harmony export */ });
/* harmony import */ var _htmlMeshRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlMeshRenderer */ "../../../dev/addons/src/htmlMesh/htmlMeshRenderer.ts");
/* harmony import */ var _htmlMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlMesh */ "../../../dev/addons/src/htmlMesh/htmlMesh.ts");
/* harmony import */ var _pointerEventsCaptureBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pointerEventsCaptureBehavior */ "../../../dev/addons/src/htmlMesh/pointerEventsCaptureBehavior.ts");
/* harmony import */ var _fitStrategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fitStrategy */ "../../../dev/addons/src/htmlMesh/fitStrategy.ts");




// Export public classes and functions



/***/ }),

/***/ "../../../dev/addons/src/htmlMesh/pointerEventsCapture.ts":
/*!****************************************************************!*\
  !*** ../../../dev/addons/src/htmlMesh/pointerEventsCapture.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCapturingId: () => (/* binding */ getCapturingId),
/* harmony export */   releaseCurrent: () => (/* binding */ releaseCurrent),
/* harmony export */   requestCapture: () => (/* binding */ requestCapture),
/* harmony export */   requestRelease: () => (/* binding */ requestRelease)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);

var CaptureRequestQueue = [];
// Key is request id, value is object with capture and release callbacks
var PendingRequestCallbacks = new Map();
// Keep track of release requests with no matching capture request
// in case the release request arrived before the capture to avoid
// the capture request never getting released.
var UnmatchedReleaseRequests = [];
var CurrentOwner = null; // Called on first capture or release request
/**
 * Get the id of the object currently capturing pointer events
 * @returns The id of the object currently capturing pointer events
 * or null if no object is capturing pointer events
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var getCapturingId = function () {
    return CurrentOwner;
};
/**
 * Request that the object with the given id capture pointer events.  If there is no current
 * owner, then the request is granted immediately.  If there is a current owner, then the request
 * is queued until the current owner releases pointer events.
 * @param requestId An id to identify the request.  This id will be used to match the capture
 * request with the release request.
 * @param captureCallback The callback to call when the request is granted and the object is capturing
 * @param releaseCallback The callback to call when the object is no longer capturing pointer events
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var requestCapture = function (requestId, captureCallback, releaseCallback) {
    DebugLog("In pointerEventsCapture.requestCapture - Pointer events capture requested for ".concat(requestId));
    // If there is a release for this request, then ignore the request
    if (RemoveUnmatchedRequest(requestId)) {
        DebugLog("In pointerEventsCapture.requestCapture - Capture request matched previous release request ".concat(requestId, ".  Cancelling capture request"));
        return;
    }
    else if (requestId !== CurrentOwner) {
        // if the request is not already in the queue, add it to the queue
        EnqueueCaptureRequest(requestId, captureCallback, releaseCallback);
    }
    if (!CurrentOwner) {
        // If there is no current owner, go ahead and grant the request
        TransferPointerEventsOwnership();
    }
    // If the request id is the current owner, do nothing
};
/**
 * Release pointer events from the object with the given id.  If the object is the current owner
 * then pointer events are released immediately.  If the object is not the current owner, then the
 * associated capture request is removed from the queue.  If there is no matching capture request
 * in the queue, then the release request is added to a list of unmatched release requests and will
 * negate the next capture request with the same id.  This is to guard against the possibility that
 * the release request arrived before the capture request.
 * @param requestId The id which should match the id of the capture request
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var requestRelease = function (requestId) {
    DebugLog("In pointerEventsCapture.requestRelease - Pointer events release requested for ".concat(requestId));
    // if the requestId is the current capture holder release it
    if (!requestId || requestId === CurrentOwner) {
        TransferPointerEventsOwnership();
    }
    else if (CancelRequest(requestId)) {
        // if the request is in the queue, but not the current capture holder, remove it and it's callbacks
        PendingRequestCallbacks.delete(requestId);
    }
    else {
        DebugLog("In pointerEventsCapture.requestRelease - Received release request ".concat(requestId, " but no matching capture request was received"));
        // request was not current and not in queue, likely because we received a release
        // request before the capture.  Add it to the unmatched list to guard against this possibility
        if (!UnmatchedReleaseRequests.includes(requestId)) {
            UnmatchedReleaseRequests.push(requestId);
        }
    }
};
/**
 * Release pointer events from the current owner
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var releaseCurrent = function () {
    requestRelease(CurrentOwner);
};
var EnqueueCaptureRequest = function (requestId, capture, release) {
    DebugLog("In pointerEventsCapture.enqueueCaptureRequest - Enqueueing capture request for  ".concat(requestId));
    if (!CaptureRequestQueue.includes(requestId)) {
        CaptureRequestQueue.push(requestId);
        PendingRequestCallbacks.set(requestId, { capture: capture, release: release });
    }
};
// Removes the request from the queue if it exists.  Returns true
// if the request was found and removed, otherwise false
var CancelRequest = function (requestId) {
    var removed = false;
    CaptureRequestQueue = CaptureRequestQueue.filter(function (id) {
        if (id !== requestId) {
            return true;
        }
        else {
            removed = true;
            DebugLog("In pointerEventsCapture.cancelRequest - Canceling pointer events capture request ".concat(requestId));
            return false;
        }
    });
    return removed;
};
var RemoveUnmatchedRequest = function (requestId) {
    var removed = false;
    UnmatchedReleaseRequests = UnmatchedReleaseRequests.filter(function (id) {
        if (id !== requestId) {
            return true;
        }
        else {
            removed = true;
            return false;
        }
    });
    return removed;
};
var TransferPointerEventsOwnership = function () {
    var newOwnerId = NextCaptureRequest();
    DebugLog("In pointerEventsCapture.transferPointerEventsOwnership - Transferrring pointer events from ".concat(CurrentOwner, " to ").concat(newOwnerId));
    // Release the current owner
    DoRelease();
    if (newOwnerId) {
        DoCapture(newOwnerId);
    }
};
var DoRelease = function () {
    var _a;
    DebugLog("In pointerEventsCapture.doRelease - Releasing pointer events from ".concat(CurrentOwner));
    if (CurrentOwner) {
        // call the release callback
        (_a = PendingRequestCallbacks.get(CurrentOwner)) === null || _a === void 0 ? void 0 : _a.release();
        // And remove the callbacks
        PendingRequestCallbacks.delete(CurrentOwner);
        CurrentOwner = null;
    }
};
var DoCapture = function (newOwnerId) {
    var _a;
    if (newOwnerId) {
        // call the capture callback
        (_a = PendingRequestCallbacks.get(newOwnerId)) === null || _a === void 0 ? void 0 : _a.capture();
    }
    CurrentOwner = newOwnerId;
    DebugLog("In pointerEventsCapture.doCapture - Pointer events now captured by ".concat(newOwnerId));
};
var NextCaptureRequest = function () {
    return CaptureRequestQueue.length > 0 ? CaptureRequestQueue.shift() : null;
};
var DebugLog = function (message) {
    // If we are runnning in a test runner (in node, so window is not defined)
    // or if the debug flag is set, then log the message
    if (typeof window === "undefined" || window["pointer-events-capture-debug"]) {
        babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.Log("".concat(performance.now(), " - game.scene.pointerEvents - ").concat(message, "\ncurrentOwner: ").concat(CurrentOwner, "\nqueue: ").concat(CaptureRequestQueue, "\nunmatched: ").concat(UnmatchedReleaseRequests));
    }
};
// #endregion Debugging support


/***/ }),

/***/ "../../../dev/addons/src/htmlMesh/pointerEventsCaptureBehavior.ts":
/*!************************************************************************!*\
  !*** ../../../dev/addons/src/htmlMesh/pointerEventsCaptureBehavior.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointerEventsCaptureBehavior: () => (/* binding */ PointerEventsCaptureBehavior)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/logger */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pointerEventsCapture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointerEventsCapture */ "../../../dev/addons/src/htmlMesh/pointerEventsCapture.ts");


// Module level variable for holding the current scene
var LocalScene = null;
// Module level variable to hold the count of behavior instances that are currently capturing pointer events
// on entry.  This is used to determine if we need to start or stop observing pointer movement.
var CaptureOnEnterCount = 0;
// Map used to store instance of the PointerEventsCaptureBehavior for a mesh
// We do this because this gets checked on pointer move and we don't want to
// use getBehaviorByName() because that is a linear search
var MeshToBehaviorMap = new WeakMap();
var StartCaptureOnEnter = function (scene) {
    // If we are not in a browser, do nothing
    if (typeof document === "undefined") {
        return;
    }
    if (CaptureOnEnterCount === 0) {
        document.addEventListener("pointermove", OnPointerMove);
        document.addEventListener("touchstart", OnPointerMove);
        LocalScene = LocalScene !== null && LocalScene !== void 0 ? LocalScene : scene;
        babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("PointerEventsCaptureBehavior: Starting observation of pointer move events.");
        LocalScene.onDisposeObservable.add(DoStopCaptureOnEnter);
    }
    CaptureOnEnterCount++;
};
var DoStopCaptureOnEnter = function () {
    document.removeEventListener("pointermove", OnPointerMove);
    document.removeEventListener("touchstart", OnPointerMove);
    LocalScene = null;
    babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("PointerEventsCaptureBehavior: Stopping observation of pointer move events.");
    CaptureOnEnterCount = 0;
};
var StopCaptureOnEnter = function () {
    // If we are not in a browser, do nothing
    if (typeof document === "undefined") {
        return;
    }
    // If we are not observing pointer movement, do nothing
    if (!LocalScene) {
        return;
    }
    CaptureOnEnterCount--;
    if (CaptureOnEnterCount <= 0) {
        DoStopCaptureOnEnter();
    }
};
// Module level function used to determine if an entered mesh should capture pointer events
var OnPointerMove = function (evt) {
    if (!LocalScene) {
        return;
    }
    var canvasRect = LocalScene.getEngine().getRenderingCanvasClientRect();
    if (!canvasRect) {
        return;
    }
    // Get the object that contains the client X and Y from either the pointer event or from the
    // TouchEvent touch
    var _a = "touches" in evt ? evt.touches[0] : evt, clientX = _a.clientX, clientY = _a.clientY;
    // get the picked mesh, if any
    var pointerScreenX = clientX - canvasRect.left;
    var pointerScreenY = clientY - canvasRect.top;
    var pointerCaptureBehavior;
    var pickResult = LocalScene.pick(pointerScreenX, pointerScreenY, function (mesh) {
        // If the mesh has an instance of PointerEventsCaptureBehavior attached to it,
        // and capture on pointer enter is true, then we want to pick it
        var pointerCaptureBehavior = MeshToBehaviorMap.get(mesh);
        return mesh.isEnabled() && typeof pointerCaptureBehavior !== "undefined" && pointerCaptureBehavior._captureOnPointerEnter;
    });
    var pickedMesh;
    if (pickResult.hit) {
        pickedMesh = pickResult.pickedMesh;
    }
    else {
        pickedMesh = null;
    }
    var capturingIdAsInt = parseInt((0,_pointerEventsCapture__WEBPACK_IMPORTED_MODULE_1__.getCapturingId)() || "");
    // if the picked mesh is the current capturing mesh, do nothing
    if (pickedMesh && pickedMesh.uniqueId === capturingIdAsInt) {
        return;
    }
    // If there is a capturing mesh and it is not the current picked mesh, or no
    // mesh is picked, release the capturing mesh
    if (capturingIdAsInt && (!pickedMesh || pickedMesh.uniqueId !== capturingIdAsInt)) {
        (0,_pointerEventsCapture__WEBPACK_IMPORTED_MODULE_1__.releaseCurrent)();
    }
    // If there is a picked mesh and it is not the current capturing mesh, capture
    // the pointer events.  Note that the current capturing mesh has already been
    // released above
    if (pickedMesh) {
        pointerCaptureBehavior = MeshToBehaviorMap.get(pickedMesh);
        pointerCaptureBehavior.capturePointerEvents();
    }
};
/**
 * Behavior for any content that can capture pointer events, i.e. bypass the Babylon pointer event handling
 * and receive pointer events directly.  It will register the capture triggers and negotiate the capture and
 * release of pointer events.  Curerntly this applies only to HtmlMesh
 */
var PointerEventsCaptureBehavior = /** @class */ (function () {
    function PointerEventsCaptureBehavior(_captureCallback, _releaseCallback, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.captureOnPointerEnter, captureOnPointerEnter = _c === void 0 ? true : _c;
        this._captureCallback = _captureCallback;
        this._releaseCallback = _releaseCallback;
        /** gets or sets behavior's name */
        this.name = "PointerEventsCaptureBehavior";
        this._attachedMesh = null;
        this._captureOnPointerEnter = captureOnPointerEnter;
        // Warn if we are not in a browser
        if (typeof document === "undefined") {
            babylonjs_Misc_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Creating an instance of PointerEventsCaptureBehavior outside of a browser.  The behavior will not work.");
        }
    }
    Object.defineProperty(PointerEventsCaptureBehavior.prototype, "attachedMesh", {
        /**
         * Gets or sets the mesh that the behavior is attached to
         */
        get: function () {
            return this._attachedMesh;
        },
        set: function (value) {
            this._attachedMesh = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointerEventsCaptureBehavior.prototype, "captureOnPointerEnter", {
        /**
         * Set if the behavior should capture pointer events when the pointer enters the mesh
         */
        set: function (captureOnPointerEnter) {
            if (this._captureOnPointerEnter === captureOnPointerEnter) {
                return;
            }
            this._captureOnPointerEnter = captureOnPointerEnter;
            if (this._attachedMesh) {
                if (this._captureOnPointerEnter) {
                    StartCaptureOnEnter(this._attachedMesh.getScene());
                }
                else {
                    StopCaptureOnEnter();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Function called when the behavior needs to be initialized (before attaching it to a target)
     */
    PointerEventsCaptureBehavior.prototype.init = function () { };
    /**
     * Called when the behavior is attached to a target
     * @param mesh defines the target where the behavior is attached to
     */
    PointerEventsCaptureBehavior.prototype.attach = function (mesh) {
        // Add a reference to this behavior on the mesh.  We do this so we can get a
        // reference to the behavior in the onPointerMove function without relying on
        // getBehaviorByName(), which does a linear search of the behaviors array.
        this.attachedMesh = mesh;
        MeshToBehaviorMap.set(mesh, this);
        if (this._captureOnPointerEnter) {
            StartCaptureOnEnter(mesh.getScene());
        }
    };
    /**
     * Called when the behavior is detached from its target
     */
    PointerEventsCaptureBehavior.prototype.detach = function () {
        if (!this.attachedMesh) {
            return;
        }
        // Remove the reference to this behavior from the mesh
        MeshToBehaviorMap.delete(this.attachedMesh);
        if (this._captureOnPointerEnter) {
            StopCaptureOnEnter();
        }
        this.attachedMesh = null;
    };
    /**
     * Dispose the behavior
     */
    PointerEventsCaptureBehavior.prototype.dispose = function () {
        this.detach();
    };
    // Release pointer events
    PointerEventsCaptureBehavior.prototype.releasePointerEvents = function () {
        if (!this.attachedMesh) {
            return;
        }
        (0,_pointerEventsCapture__WEBPACK_IMPORTED_MODULE_1__.requestRelease)(this.attachedMesh.uniqueId.toString());
    };
    // Capture pointer events
    PointerEventsCaptureBehavior.prototype.capturePointerEvents = function () {
        if (!this.attachedMesh) {
            return;
        }
        (0,_pointerEventsCapture__WEBPACK_IMPORTED_MODULE_1__.requestCapture)(this.attachedMesh.uniqueId.toString(), this._captureCallback, this._releaseCallback);
    };
    return PointerEventsCaptureBehavior;
}());



/***/ }),

/***/ "../../../dev/addons/src/index.ts":
/*!****************************************!*\
  !*** ../../../dev/addons/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultParagraphOptions: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.DefaultParagraphOptions),
/* harmony export */   FitStrategy: () => (/* reexport safe */ _htmlMesh_index__WEBPACK_IMPORTED_MODULE_0__.FitStrategy),
/* harmony export */   FontAsset: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.FontAsset),
/* harmony export */   HtmlMesh: () => (/* reexport safe */ _htmlMesh_index__WEBPACK_IMPORTED_MODULE_0__.HtmlMesh),
/* harmony export */   HtmlMeshRenderer: () => (/* reexport safe */ _htmlMesh_index__WEBPACK_IMPORTED_MODULE_0__.HtmlMeshRenderer),
/* harmony export */   PointerEventsCaptureBehavior: () => (/* reexport safe */ _htmlMesh_index__WEBPACK_IMPORTED_MODULE_0__.PointerEventsCaptureBehavior),
/* harmony export */   SdfTextParagraph: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.SdfTextParagraph),
/* harmony export */   TextRenderer: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.TextRenderer),
/* harmony export */   msdfPixelShader: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.msdfPixelShader),
/* harmony export */   msdfPixelShaderWGSL: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.msdfPixelShaderWGSL),
/* harmony export */   msdfVertexShader: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.msdfVertexShader),
/* harmony export */   msdfVertexShaderWGSL: () => (/* reexport safe */ _msdfText_index__WEBPACK_IMPORTED_MODULE_1__.msdfVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _htmlMesh_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlMesh/index */ "../../../dev/addons/src/htmlMesh/index.ts");
/* harmony import */ var _msdfText_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msdfText/index */ "../../../dev/addons/src/msdfText/index.ts");
/* eslint-disable import/no-internal-modules */




/***/ }),

/***/ "../../../dev/addons/src/msdfText/fontAsset.ts":
/*!*****************************************************!*\
  !*** ../../../dev/addons/src/msdfText/fontAsset.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontAsset: () => (/* binding */ FontAsset)
/* harmony export */ });
/* harmony import */ var babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/Textures/texture */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__);

var CharCode;
(function (CharCode) {
    CharCode[CharCode["SPACE"] = 32] = "SPACE";
    CharCode[CharCode["TOFU"] = 65532] = "TOFU";
})(CharCode || (CharCode = {}));
/**
 * Class representing a font asset for SDF (Signed Distance Field) rendering.
 */
var FontAsset = /** @class */ (function () {
    /**
     * Creates a new FontAsset instance.
     * @param definitionData defines the font data in JSON format.
     * @param textureUrl defines the url of the texture to use for the font.
     * @param scene defines the hosting scene.
     */
    function FontAsset(definitionData, textureUrl, scene) {
        var _this = this;
        this._chars = new Map();
        this._kernings = new Map();
        this._font = JSON.parse(definitionData);
        // So far we only consider one page
        this._font.pages = [textureUrl];
        this._font.chars.forEach(function (char) { return _this._chars.set(char.id, char); });
        this._font.kernings.forEach(function (kerning) {
            var submap = _this._kernings.get(kerning.first);
            if (!submap) {
                submap = new Map();
                _this._kernings.set(kerning.first, submap);
            }
            submap.set(kerning.second, kerning.amount);
        });
        this._charsRegex = new RegExp("[".concat(this._font.chars.map(function (c) { return c.char.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); }).join(""), "]"), "g");
        this._updateFallbacks();
        this.scale = 1 / this._font.info.size;
        this.textures = this._font.pages.map(function (page) {
            var texture = new babylonjs_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_0__.Texture(page, scene, { noMipmap: false, invertY: false });
            texture.anisotropicFilteringLevel = 16;
            return texture;
        });
    }
    FontAsset.prototype.dispose = function () {
        for (var _i = 0, _a = this.textures; _i < _a.length; _i++) {
            var texture = _a[_i];
            texture.dispose();
        }
        this.textures.length = 0;
    };
    FontAsset.prototype._updateFallbacks = function () {
        if (!this._chars.has(CharCode.SPACE)) {
            this._chars.set(CharCode.SPACE, {
                id: CharCode.SPACE,
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                xoffset: 0,
                yoffset: 0,
                xadvance: this._font.info.size * 0.5,
                page: -1,
                chnl: -1,
                index: -1,
                char: " ",
            });
        }
        if (!this._chars.has(CharCode.TOFU)) {
            this._chars.set(CharCode.TOFU, {
                id: CharCode.TOFU,
                x: 0,
                y: 0,
                width: this._font.info.size,
                height: this._font.info.size,
                xoffset: 0,
                yoffset: 0,
                xadvance: this._font.info.size * 0.5,
                page: -1,
                chnl: -1,
                index: -1,
                char: "￿",
            });
        }
    };
    /** @internal */
    FontAsset.prototype._getChar = function (charCode) {
        return this._chars.get(charCode) || this._chars.get(CharCode.TOFU);
    };
    /** @internal */
    FontAsset.prototype._getKerning = function (first, second) {
        var _a;
        return ((_a = this._kernings.get(first)) === null || _a === void 0 ? void 0 : _a.get(second)) || 0;
    };
    /** @internal */
    FontAsset.prototype._unsupportedChars = function (text) {
        return text.replace(this._charsRegex, "");
    };
    return FontAsset;
}());



/***/ }),

/***/ "../../../dev/addons/src/msdfText/index.ts":
/*!*************************************************!*\
  !*** ../../../dev/addons/src/msdfText/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultParagraphOptions: () => (/* reexport safe */ _paragraphOptions__WEBPACK_IMPORTED_MODULE_1__.DefaultParagraphOptions),
/* harmony export */   FontAsset: () => (/* reexport safe */ _fontAsset__WEBPACK_IMPORTED_MODULE_0__.FontAsset),
/* harmony export */   SdfTextParagraph: () => (/* reexport safe */ _sdf_index__WEBPACK_IMPORTED_MODULE_3__.SdfTextParagraph),
/* harmony export */   TextRenderer: () => (/* reexport safe */ _textRenderer__WEBPACK_IMPORTED_MODULE_2__.TextRenderer),
/* harmony export */   msdfPixelShader: () => (/* reexport safe */ _shaders_msdf_fragment__WEBPACK_IMPORTED_MODULE_5__.msdfPixelShader),
/* harmony export */   msdfPixelShaderWGSL: () => (/* reexport safe */ _shadersWGSL_msdf_fragment__WEBPACK_IMPORTED_MODULE_7__.msdfPixelShaderWGSL),
/* harmony export */   msdfVertexShader: () => (/* reexport safe */ _shaders_msdf_vertex__WEBPACK_IMPORTED_MODULE_4__.msdfVertexShader),
/* harmony export */   msdfVertexShaderWGSL: () => (/* reexport safe */ _shadersWGSL_msdf_vertex__WEBPACK_IMPORTED_MODULE_6__.msdfVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var _fontAsset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fontAsset */ "../../../dev/addons/src/msdfText/fontAsset.ts");
/* harmony import */ var _paragraphOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paragraphOptions */ "../../../dev/addons/src/msdfText/paragraphOptions.ts");
/* harmony import */ var _textRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./textRenderer */ "../../../dev/addons/src/msdfText/textRenderer.ts");
/* harmony import */ var _sdf_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdf/index */ "../../../dev/addons/src/msdfText/sdf/index.ts");
/* harmony import */ var _shaders_msdf_vertex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shaders/msdf.vertex */ "../../../dev/addons/src/msdfText/shaders/msdf.vertex.ts");
/* harmony import */ var _shaders_msdf_fragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shaders/msdf.fragment */ "../../../dev/addons/src/msdfText/shaders/msdf.fragment.ts");
/* harmony import */ var _shadersWGSL_msdf_vertex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shadersWGSL/msdf.vertex */ "../../../dev/addons/src/msdfText/shadersWGSL/msdf.vertex.ts");
/* harmony import */ var _shadersWGSL_msdf_fragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadersWGSL/msdf.fragment */ "../../../dev/addons/src/msdfText/shadersWGSL/msdf.fragment.ts");
/* eslint-disable import/no-internal-modules */










/***/ }),

/***/ "../../../dev/addons/src/msdfText/paragraphOptions.ts":
/*!************************************************************!*\
  !*** ../../../dev/addons/src/msdfText/paragraphOptions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultParagraphOptions: () => (/* binding */ DefaultParagraphOptions)
/* harmony export */ });
/* eslint-disable jsdoc/require-jsdoc */
/** @internal */
var DefaultParagraphOptions = {
    maxWidth: Infinity,
    lineHeight: 1,
    letterSpacing: 1,
    tabSize: 4,
    whiteSpace: "pre-line",
    textAlign: "center",
    translate: { x: -0.5, y: -0.5 },
};


/***/ }),

/***/ "../../../dev/addons/src/msdfText/sdf/bmFont.ts":
/*!******************************************************!*\
  !*** ../../../dev/addons/src/msdfText/sdf/bmFont.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/addons/src/msdfText/sdf/font.ts":
/*!****************************************************!*\
  !*** ../../../dev/addons/src/msdfText/sdf/font.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/addons/src/msdfText/sdf/glyph.ts":
/*!*****************************************************!*\
  !*** ../../../dev/addons/src/msdfText/sdf/glyph.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/addons/src/msdfText/sdf/index.ts":
/*!*****************************************************!*\
  !*** ../../../dev/addons/src/msdfText/sdf/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SdfTextParagraph: () => (/* reexport safe */ _paragraph__WEBPACK_IMPORTED_MODULE_4__.SdfTextParagraph)
/* harmony export */ });
/* harmony import */ var _bmFont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bmFont */ "../../../dev/addons/src/msdfText/sdf/bmFont.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "../../../dev/addons/src/msdfText/sdf/font.ts");
/* harmony import */ var _glyph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glyph */ "../../../dev/addons/src/msdfText/sdf/glyph.ts");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ "../../../dev/addons/src/msdfText/sdf/line.ts");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paragraph */ "../../../dev/addons/src/msdfText/sdf/paragraph.ts");







/***/ }),

/***/ "../../../dev/addons/src/msdfText/sdf/line.ts":
/*!****************************************************!*\
  !*** ../../../dev/addons/src/msdfText/sdf/line.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/addons/src/msdfText/sdf/paragraph.ts":
/*!*********************************************************!*\
  !*** ../../../dev/addons/src/msdfText/sdf/paragraph.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SdfTextParagraph: () => (/* binding */ SdfTextParagraph)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _paragraphOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paragraphOptions */ "../../../dev/addons/src/msdfText/paragraphOptions.ts");


/** @internal */
var SdfTextParagraph = /** @class */ (function () {
    function SdfTextParagraph(text, fontAsset, options) {
        this.text = text;
        this.fontAsset = fontAsset;
        this.options = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _paragraphOptions__WEBPACK_IMPORTED_MODULE_0__.DefaultParagraphOptions), options);
        var _a = this._computeMetrics(text), paragraph = _a.paragraph, lines = _a.lines, glyphs = _a.glyphs, width = _a.width, height = _a.height;
        this.paragraph = paragraph;
        this.lines = lines;
        this.glyphs = glyphs;
        this.width = width;
        this.height = height;
    }
    Object.defineProperty(SdfTextParagraph.prototype, "lineHeight", {
        get: function () {
            return this.fontAsset._font.common.lineHeight * this.options.lineHeight;
        },
        enumerable: false,
        configurable: true
    });
    SdfTextParagraph.prototype._computeMetrics = function (text) {
        var _this = this;
        var collapsed = this._collapse(text);
        var breaked = this._breakLines(collapsed);
        var trimmed = breaked.map(function (line) { return line.trim(); });
        var lines = [];
        for (var _i = 0, trimmed_1 = trimmed; _i < trimmed_1.length; _i++) {
            var line = trimmed_1[_i];
            lines.push.apply(lines, this._wrap(line, lines.length));
        }
        var width = Math.max.apply(Math, lines.map(function (line) { return line.width; }));
        var height = this.lineHeight * lines.length;
        if (this.options.textAlign !== "left" || this.options.translate) {
            lines.forEach(function (line) {
                var anchor = (function () {
                    switch (_this.options.textAlign) {
                        case "right":
                            return width - line.width;
                        case "center":
                            return (width - line.width) / 2;
                        case "left":
                        default:
                            return 0;
                    }
                })();
                var x = _this.options.translate ? _this.options.translate.x * width : 0;
                var y = _this.options.translate ? _this.options.translate.y * height : 0;
                for (var _i = 0, _a = line.glyphs; _i < _a.length; _i++) {
                    var glyph = _a[_i];
                    glyph.x += anchor;
                    glyph.x += x;
                    glyph.y += y;
                }
            });
        }
        var glyphs = lines.flatMap(function (line) { return line.glyphs; });
        return {
            paragraph: trimmed.join("\n"),
            lines: lines,
            glyphs: glyphs,
            width: width,
            height: height,
        };
    };
    SdfTextParagraph.prototype._breakLines = function (text) {
        return text.split("\n");
    };
    SdfTextParagraph.prototype._collapse = function (text) {
        return text.replace(/\t/g, " ".repeat(this.options.tabSize)).replace(/ +/g, " ");
    };
    SdfTextParagraph.prototype._wrap = function (text, lineOffset) {
        if (lineOffset === void 0) { lineOffset = 0; }
        var lines = new Array();
        var currentLine = lineOffset;
        var currentGlyphs = new Array();
        var currentCursor = 0;
        var currentWidth = 0;
        var lastChar;
        var start = 0;
        var end = start;
        var pushCurrentLine = function () {
            lines.push({
                text: text.slice(start, end),
                glyphs: currentGlyphs,
                start: start,
                end: end,
                width: currentWidth,
            });
        };
        while (end < text.length) {
            var i = end;
            var charCode = text.charCodeAt(i);
            var char = this.fontAsset._getChar(charCode);
            var charWidth = char.width;
            var kerning = lastChar ? this.fontAsset._getKerning(lastChar.id, char.id) : 0;
            currentCursor += kerning;
            var newWidth = currentCursor + charWidth;
            var cursorProgress = char.xadvance + this.options.letterSpacing;
            var nextPosition = currentCursor + cursorProgress;
            var shouldBreak = nextPosition > this.options.maxWidth || newWidth > this.options.maxWidth;
            if (shouldBreak) {
                pushCurrentLine();
                currentLine++;
                lastChar = undefined;
                currentCursor = 0;
                currentWidth = 0;
                start = end;
                end = start + 1;
                currentGlyphs = [];
            }
            var x = currentCursor;
            var y = currentLine * this.lineHeight;
            currentGlyphs.push({
                char: char,
                line: currentLine,
                position: currentGlyphs.length,
                x: x,
                y: y,
            });
            if (!shouldBreak) {
                lastChar = char;
                currentCursor = nextPosition;
                currentWidth = newWidth;
                end++;
            }
            else {
                currentCursor = cursorProgress;
            }
        }
        if (currentGlyphs.length > 0) {
            if (lastChar) {
                // currentWidth += lastChar.xadvance;
            }
            pushCurrentLine();
        }
        return lines;
    };
    return SdfTextParagraph;
}());



/***/ }),

/***/ "../../../dev/addons/src/msdfText/shaders/msdf.fragment.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/addons/src/msdfText/shaders/msdf.fragment.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfPixelShader: () => (/* binding */ msdfPixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "msdfPixelShader";
var shader = "#extension GL_OES_standard_derivatives : enable\nprecision highp float;uniform sampler2D fontAtlas;uniform vec4 uColor;uniform vec4 uStrokeColor;uniform float uStrokeInsetWidth;uniform float uStrokeOutsetWidth;uniform float thickness;varying vec2 atlasUV;float median(vec3 msdf) {return max(min(msdf.r,msdf.g),min(max(msdf.r,msdf.g),msdf.b));}\nvoid main(void)\n{vec3 s=texture2D(fontAtlas,atlasUV).rgb;float sigDist=median(s)-0.5+thickness;float alpha=clamp(sigDist/fwidth(sigDist)+0.5,0.0,1.0);float sigDistOutset=sigDist+uStrokeOutsetWidth*0.5;float sigDistInset=sigDist-uStrokeInsetWidth*0.5;float outset=clamp(sigDistOutset/fwidth(sigDistOutset)+0.5,0.0,1.0);float inset=1.0-clamp(sigDistInset/fwidth(sigDistInset)+0.5,0.0,1.0);float border=outset*inset;vec4 filledFragColor=vec4(uColor.rgb,alpha*uColor.a);vec4 strokedFragColor=vec4(uStrokeColor.rgb,border*uStrokeColor.a);gl_FragColor=mix(filledFragColor,strokedFragColor,border);}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var msdfPixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/addons/src/msdfText/shaders/msdf.vertex.ts":
/*!***************************************************************!*\
  !*** ../../../dev/addons/src/msdfText/shaders/msdf.vertex.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfVertexShader: () => (/* binding */ msdfVertexShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "msdfVertexShader";
var shader = "#define BILLBOARD 1\n#define BILLBOARDSCREENPROJECTED 2\nattribute vec2 offsets;attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;attribute vec4 uvs;uniform mat4 transform;uniform mat4 parentWorld;uniform mat4 view;uniform mat4 projection;uniform vec3 center;uniform int mode;varying vec2 atlasUV;void main(void) {mat4 world=mat4(world0,world1,world2,world3);vec4 worldPos=transform*(world*vec4(offsets.xy-vec2(0.5,0.5),0.,1.0));if (mode>=BILLBOARD) {vec3 viewPos=(view*parentWorld*vec4(0.,0.,0.,1.0)).xyz; \nif (mode==BILLBOARDSCREENPROJECTED) {viewPos.x/=viewPos.z;viewPos.y/=viewPos.z;viewPos.z=1.0;}\ngl_Position=projection*vec4(viewPos+worldPos.xyz,1.0); } else {vec3 viewPos=(view*parentWorld*worldPos).xyz; \ngl_Position=projection*vec4(viewPos,1.0); }\natlasUV=vec2(uvs.x+offsets.x*uvs.z,uvs.y+(1.0-offsets.y)*uvs.w);}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var msdfVertexShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/addons/src/msdfText/shadersWGSL/msdf.fragment.ts":
/*!*********************************************************************!*\
  !*** ../../../dev/addons/src/msdfText/shadersWGSL/msdf.fragment.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfPixelShaderWGSL: () => (/* binding */ msdfPixelShaderWGSL)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "msdfPixelShader";
var shader = "var fontAtlas: texture_2d<f32>;var fontAtlasSampler: sampler;uniform uColor: vec4f;uniform thickness: f32;uniform uStrokeColor: vec4f;uniform uStrokeInsetWidth: f32;uniform uStrokeOutsetWidth: f32;varying atlasUV: vec2f;fn median(msdf: vec3<f32>)->f32 {let a=min(msdf.r,msdf.g);let b=max(msdf.r,msdf.g);return max(a,min(b,msdf.b));}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {let s=textureSample(fontAtlas,fontAtlasSampler,input.atlasUV).rgb;let sigDist=median(s)-0.5+uniforms.thickness;let afwidth=length(vec2<f32>(dpdx(sigDist),dpdy(sigDist)));let alpha=clamp(sigDist/afwidth+0.5,0.0,1.0);let sigDistOutset=sigDist+uniforms.uStrokeOutsetWidth*0.5;let sigDistInset=sigDist-uniforms.uStrokeInsetWidth*0.5;let afwidthOutset=length(vec2<f32>(dpdx(sigDistOutset),dpdy(sigDistOutset)));let afwidthInset=length(vec2<f32>(dpdx(sigDistInset),dpdy(sigDistInset)));let outset=clamp(sigDistOutset/afwidthOutset+0.5,0.0,1.0);let inset=1.0-clamp(sigDistInset/afwidthInset+0.5,0.0,1.0);let border=outset*inset;let filledFragColor=vec4<f32>(uniforms.uColor.rgb,alpha*uniforms.uColor.a);let strokedFragColor=vec4<f32>(uniforms.uStrokeColor.rgb,border*uniforms.uStrokeColor.a);fragmentOutputs.color=mix(filledFragColor,strokedFragColor,border);}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
var msdfPixelShaderWGSL = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/addons/src/msdfText/shadersWGSL/msdf.vertex.ts":
/*!*******************************************************************!*\
  !*** ../../../dev/addons/src/msdfText/shadersWGSL/msdf.vertex.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msdfVertexShaderWGSL: () => (/* binding */ msdfVertexShaderWGSL)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "msdfVertexShader";
var shader = "#define BILLBOARD 1\n#define BILLBOARDSCREENPROJECTED 2\nattribute offsets: vec2f;attribute world0: vec4f;attribute world1: vec4f;attribute world2: vec4f;attribute world3: vec4f;attribute uvs: vec4f;uniform transform: mat4x4f;uniform parentWorld: mat4x4f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform mode: u32;varying atlasUV: vec2f;@vertex\nfn main(input: VertexInputs)->FragmentInputs {let world=mat4x4<f32>(input.world0,input.world1,input.world2,input.world3);let localOffset=vec4<f32>(input.offsets-vec2<f32>(0.5,0.5),0.0,1.0);let worldPos=uniforms.transform*world*localOffset;if (uniforms.mode>=BILLBOARD) { \nvar viewPos=(uniforms.view*uniforms.parentWorld*vec4f(0.,0.,0.,1.0)).xyz;if (uniforms.mode==BILLBOARDSCREENPROJECTED) {viewPos=vec3f(viewPos.x/viewPos.z,viewPos.y/viewPos.z,1.0);} \nvertexOutputs.position=uniforms.projection*vec4<f32>(viewPos+worldPos.xyz,1.0);} else { \nlet viewPos=(uniforms.view*uniforms.parentWorld*worldPos).xyz;vertexOutputs.position=uniforms.projection*vec4<f32>(viewPos,1.0);}\nvertexOutputs.atlasUV=vec2<f32>(\ninput.uvs.x+input.offsets.x*input.uvs.z,\ninput.uvs.y+(1.0-input.offsets.y)*input.uvs.w\n);}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStoreWGSL[name] = shader;
}
/** @internal */
var msdfVertexShaderWGSL = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/addons/src/msdfText/textRenderer.ts":
/*!********************************************************!*\
  !*** ../../../dev/addons/src/msdfText/textRenderer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextRenderer: () => (/* binding */ TextRenderer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Maths/ThinMaths/thinMath.matrix.functions */ "babylonjs/Maths/math");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sdf_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdf/paragraph */ "../../../dev/addons/src/msdfText/sdf/paragraph.ts");







/**
 * Class used to render text using MSDF (Multi-channel Signed Distance Field) technique
 * Thanks a lot to the work of Bhushan_Wagh and zb_sj for their amazing work on MSDF for Babylon.js
 * #6RLCWP#16
 * Star wars scroller: #6RLCWP#29
 * With metrics: #6RLCWP#35
 * Thickness: #IABMEZ#3
 * Solar system: #9YCDYC#9
 * Stroke: #6RLCWP#37
 */
var TextRenderer = /** @class */ (function () {
    function TextRenderer(engine, shaderLanguage, font) {
        if (shaderLanguage === void 0) { shaderLanguage = 0 /* ShaderLanguage.GLSL */; }
        this._useVAO = false;
        this._vertexBuffers = {};
        this._charMatrices = new Array();
        this._charUvs = new Array();
        this._isDirty = true;
        this._baseLine = 0;
        // Cache
        this._scalingMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._fontScaleMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._offsetMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._translationMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._baseMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._scaledMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._localMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._finalMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._lineMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        this._parentWorldMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        /**
         * Gets or sets the color of the text
         */
        this.color = { r: 1.0, g: 1.0, b: 1.0, a: 1.0 };
        /**
         * Gets or sets the color of the stroke around the text
         */
        this.strokeColor = { r: 1.0, g: 1.0, b: 1.0, a: 1.0 };
        /**
         * Gets or sets the width of the stroke around the text (inset)
         */
        this.strokeInsetWidth = 0;
        /**
         * Gets or sets the width of the stroke around the text (outset)
         */
        this.strokeOutsetWidth = 0;
        /**
         * Gets or sets the thickness of the text (0 means as defined in the font)
         * Value must be between -0.5 and 0.5
         */
        this.thicknessControl = 0;
        this._parent = null;
        this._transformMatrix = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ThinMatrix();
        /**
         * Gets or sets if the text is billboarded
         */
        this.isBillboard = false;
        /**
         * Gets or sets if the text is screen projected
         * This will work only if the text is billboarded
         */
        this.isBillboardScreenProjected = false;
        /**
         * Gets or sets if the text renderer should ignore the depth buffer
         * Default is false
         */
        this.ignoreDepthBuffer = false;
        this._engine = engine;
        this._shaderLanguage = shaderLanguage;
        this._font = font;
        this._baseLine = font._font.common.lineHeight * font.scale;
        this._useVAO = engine.getCaps().vertexArrayObject && !engine.disableVertexArrayObjects;
        // Main vertex buffer
        var spriteData = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
        this._spriteBuffer = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer(engine, spriteData, false, 2);
        this._vertexBuffers["offsets"] = this._spriteBuffer.createVertexBuffer("offsets", 0, 2);
        // Instances
        this._resizeBuffers(128);
    }
    Object.defineProperty(TextRenderer.prototype, "parent", {
        /**
         * Gets or sets the parent of the text renderer
         */
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this._parent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRenderer.prototype, "transformMatrix", {
        /**
         * Gets or sets the transform matrix of the text renderer
         * It will be applied in that order:
         * parent x transform x paragraph world
         */
        get: function () {
            return this._transformMatrix;
        },
        set: function (value) {
            this._transformMatrix = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextRenderer.prototype, "characterCount", {
        /**
         * Gets the number of characters in the text renderer
         */
        get: function () {
            return this._charMatrices.length / 16;
        },
        enumerable: false,
        configurable: true
    });
    TextRenderer.prototype._resizeBuffers = function (capacity) {
        if (this._worldBuffer) {
            this._worldBuffer.dispose();
            this._worldBuffer = null;
        }
        if (this._uvBuffer) {
            this._uvBuffer.dispose();
            this._uvBuffer = null;
        }
        this._worldBuffer = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer(this._engine, new Float32Array(capacity * 16), true, 16);
        this._vertexBuffers["world0"] = this._worldBuffer.createVertexBuffer("world0", 0, 4, 16, true);
        this._vertexBuffers["world1"] = this._worldBuffer.createVertexBuffer("world1", 4, 4, 16, true);
        this._vertexBuffers["world2"] = this._worldBuffer.createVertexBuffer("world2", 8, 4, 16, true);
        this._vertexBuffers["world3"] = this._worldBuffer.createVertexBuffer("world3", 12, 4, 16, true);
        this._uvBuffer = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer(this._engine, new Float32Array(capacity * 4), true, 4);
        this._vertexBuffers["uvs"] = this._uvBuffer.createVertexBuffer("uvs", 0, 4, 4, true);
    };
    TextRenderer.prototype._setShaders = function (vertex, fragment) {
        var _a;
        (_a = this._drawWrapperBase) === null || _a === void 0 ? void 0 : _a.dispose();
        this._drawWrapperBase = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.DrawWrapper(this._engine);
        if (this._drawWrapperBase.drawContext) {
            this._drawWrapperBase.drawContext.useInstancing = true;
        }
        var defines = "";
        this._drawWrapperBase.effect = this._engine.createEffect({
            vertexSource: vertex,
            fragmentSource: fragment,
        }, ["offsets", "world0", "world1", "world2", "world3", "uvs"], ["parentWorld", "view", "projection", "uColor", "thickness", "uStrokeColor", "uStrokeInsetWidth", "uStrokeOutsetWidth", "mode", "transform"], ["fontAtlas"], defines, undefined, undefined, undefined, undefined, this._shaderLanguage);
        this._drawWrapperBase.effect._refCount++;
    };
    /**
     * Add a paragraph of text to the renderer
     * @param text define the text to add
     * @param options define the options to use for the paragraph (optional)
     * @param worldMatrix define the world matrix to use for the paragraph (optional)
     */
    TextRenderer.prototype.addParagraph = function (text, options, worldMatrix) {
        var _this = this;
        var paragraph = new _sdf_paragraph__WEBPACK_IMPORTED_MODULE_1__.SdfTextParagraph(text, this._font, options);
        var fontScale = this._font.scale;
        var texWidth = this._font._font.common.scaleW;
        var texHeight = this._font._font.common.scaleH;
        var glyphs = paragraph.glyphs.filter(function (g) { return g.char.page >= 0; });
        var worldMatrixToUse = worldMatrix;
        if (!worldMatrixToUse) {
            var lineHeight = paragraph.lineHeight * fontScale;
            var lineOffset = (paragraph.lines.length * lineHeight) / 2;
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.TranslationMatrixToRef)(0, this._baseLine - lineOffset, 0, this._lineMatrix);
            worldMatrixToUse = this._lineMatrix;
        }
        (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ScalingMatrixToRef)(fontScale, fontScale, 1.0, this._fontScaleMatrix);
        (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.TranslationMatrixToRef)(0.5, -0.5, 0, this._offsetMatrix);
        var charsUvsBase = this._charUvs.length;
        var matricesBase = this._charMatrices.length;
        glyphs.forEach(function (g, i) {
            _this._charUvs[charsUvsBase + i * 4 + 0] = g.char.x / texWidth;
            _this._charUvs[charsUvsBase + i * 4 + 1] = g.char.y / texHeight;
            _this._charUvs[charsUvsBase + i * 4 + 2] = g.char.width / texWidth;
            _this._charUvs[charsUvsBase + i * 4 + 3] = g.char.height / texHeight;
            var x = g.x + g.char.xoffset;
            var y = 1.0 - (g.y + g.char.yoffset);
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.ScalingMatrixToRef)(g.char.width, g.char.height, 1.0, _this._scalingMatrix);
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.MultiplyMatricesToRef)(_this._offsetMatrix, _this._scalingMatrix, _this._baseMatrix);
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.TranslationMatrixToRef)(x * fontScale, y * fontScale, 0.0, _this._translationMatrix);
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.MultiplyMatricesToRef)(_this._baseMatrix, _this._fontScaleMatrix, _this._scaledMatrix);
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.MultiplyMatricesToRef)(_this._scaledMatrix, _this._translationMatrix, _this._localMatrix);
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.MultiplyMatricesToRef)(_this._localMatrix, worldMatrixToUse, _this._finalMatrix);
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.CopyMatrixToArray)(_this._finalMatrix, _this._charMatrices, matricesBase + i * 16);
        });
        this._isDirty = true;
        this._baseLine -= paragraph.lineHeight * fontScale * paragraph.lines.length;
    };
    /**
     * Render the text using the provided view and projection matrices
     * @param viewMatrix define the view matrix to use
     * @param projectionMatrix define the projection matrix to use
     */
    TextRenderer.prototype.render = function (viewMatrix, projectionMatrix) {
        var drawWrapper = this._drawWrapperBase;
        var effect = drawWrapper.effect;
        // Check
        if (!effect.isReady()) {
            return;
        }
        var engine = this._engine;
        engine.setState(false);
        engine.enableEffect(drawWrapper);
        if (this.ignoreDepthBuffer) {
            engine.setDepthBuffer(false);
        }
        if (this._parent) {
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.CopyMatrixToRef)(this._parent.getWorldMatrix(), this._parentWorldMatrix);
        }
        else {
            (0,babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.IdentityMatrixToRef)(this._parentWorldMatrix);
        }
        effect.setInt("mode", this.isBillboard ? (this.isBillboardScreenProjected ? 2 : 1) : 0);
        effect.setMatrix("parentWorld", this._parentWorldMatrix);
        effect.setMatrix("view", viewMatrix);
        effect.setMatrix("projection", projectionMatrix);
        effect.setMatrix("transform", this.transformMatrix);
        // Texture
        effect.setTexture("fontAtlas", this._font.textures[0]);
        effect.setDirectColor4("uColor", this.color);
        effect.setDirectColor4("uStrokeColor", this.strokeColor);
        effect.setFloat("thickness", this.thicknessControl * 0.9);
        effect.setFloat("uStrokeInsetWidth", this.strokeInsetWidth);
        effect.setFloat("uStrokeOutsetWidth", this.strokeOutsetWidth);
        var instanceCount = this._charMatrices.length / 16;
        // Need update?
        if (this._isDirty) {
            this._isDirty = false;
            if (this._worldBuffer.getBuffer().capacity / 4 < instanceCount * 16) {
                this._resizeBuffers(instanceCount);
            }
            this._worldBuffer.update(this._charMatrices);
            this._uvBuffer.update(this._charUvs);
        }
        if (this._useVAO) {
            if (!this._vertexArrayObject) {
                this._vertexArrayObject = engine.recordVertexArrayObject(this._vertexBuffers, null, effect);
            }
            engine.bindVertexArrayObject(this._vertexArrayObject, null);
        }
        else {
            // VBOs
            engine.bindBuffers(this._vertexBuffers, null, effect);
        }
        engine.setAlphaMode(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Constants.ALPHA_COMBINE);
        engine.drawArraysType(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Constants.MATERIAL_TriangleStripDrawMode, 0, 4, instanceCount);
        engine.unbindInstanceAttributes();
        engine.setAlphaMode(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Constants.ALPHA_DISABLE);
        if (this.ignoreDepthBuffer) {
            engine.setDepthBuffer(true);
        }
    };
    /**
     * Release associated resources
     */
    TextRenderer.prototype.dispose = function () {
        if (this._worldBuffer) {
            this._worldBuffer.dispose();
            this._worldBuffer = null;
        }
        if (this._uvBuffer) {
            this._uvBuffer.dispose();
            this._uvBuffer = null;
        }
        if (this._spriteBuffer) {
            this._spriteBuffer.dispose();
            this._spriteBuffer = null;
        }
        if (this._vertexArrayObject) {
            this._engine.releaseVertexArrayObject(this._vertexArrayObject);
            this._vertexArrayObject = null;
        }
    };
    /**
     * Creates a new TextRenderer instance asynchronously
     * @param font define the font asset to use
     * @param engine define the engine to use
     * @returns a promise that resolves to the created TextRenderer instance
     */
    TextRenderer.CreateTextRendererAsync = function (font, engine) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var shaderLanguage, vertex, fragment, textRenderer;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!engine.getCaps().instancedArrays || !engine._features.supportSpriteInstancing) {
                            throw new Error("Instanced arrays are required for MSDF text rendering.");
                        }
                        shaderLanguage = 0 /* ShaderLanguage.GLSL */;
                        vertex = "";
                        fragment = "";
                        if (!engine.isWebGPU) return [3 /*break*/, 3];
                        shaderLanguage = 1 /* ShaderLanguage.WGSL */;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./shadersWGSL/msdf.vertex */ "../../../dev/addons/src/msdfText/shadersWGSL/msdf.vertex.ts"))];
                    case 1:
                        vertex = (_a.sent()).msdfVertexShaderWGSL.shader;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./shadersWGSL/msdf.fragment */ "../../../dev/addons/src/msdfText/shadersWGSL/msdf.fragment.ts"))];
                    case 2:
                        fragment = (_a.sent()).msdfPixelShaderWGSL.shader;
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./shaders/msdf.vertex */ "../../../dev/addons/src/msdfText/shaders/msdf.vertex.ts"))];
                    case 4:
                        vertex = (_a.sent()).msdfVertexShader.shader;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./shaders/msdf.fragment */ "../../../dev/addons/src/msdfText/shaders/msdf.fragment.ts"))];
                    case 5:
                        fragment = (_a.sent()).msdfPixelShader.shader;
                        _a.label = 6;
                    case 6:
                        textRenderer = new TextRenderer(engine, shaderLanguage, font);
                        textRenderer._setShaders(vertex, fragment);
                        return [2 /*return*/, textRenderer];
                }
            });
        });
    };
    return TextRenderer;
}());



/***/ }),

/***/ "babylonjs/Maths/math":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Maths_math__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addons: () => (/* reexport module object */ addons_index__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var addons_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! addons/index */ "../../../dev/addons/src/index.ts");
// eslint-disable-next-line import/no-internal-modules


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addons_index__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbmpzLmFkZG9ucy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM1lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUE7QUFxREE7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFwREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQWtCQTtBQVdBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQS9FQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQWdDQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBeUNBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFLQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQU1BO0FBSkE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVdBO0FBR0E7QUFFQTtBQUdBO0FBR0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQTRDQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFGQTtBQTVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF1aUJBO0FBQ0E7QUFDQTtBQUNBO0FBaGhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFpQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0cUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQWVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFtQkE7QUFHQTtBQUZBO0FBQ0E7QUFwQkE7QUFDQTtBQXNCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFKQTtBQXVCQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xPQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQWtCQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUF2QkE7QUFFQTtBQXNCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBSXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVEQTtBQUtBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQXdCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFFQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUVBO0FBRUE7QUFJQTtBQUdBO0FBQ0E7QUFpQkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUEwR0E7QUFBQTtBQXpHQTtBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7QUFhQTtBQWVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQVNBOzs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBOURBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUpBO0FBYUE7QUFMQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFKQTtBQW9CQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFZQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7O0FBRUE7O0FBQUE7QUFDQTs7QUFBQTs7O0FBR0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM5WUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0FERE9OUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL0FERE9OUy8uLi8uLi8uLi9kZXYvYWRkb25zL3NyYy9odG1sTWVzaC9maXRTdHJhdGVneS50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvaHRtbE1lc2gvaHRtbE1lc2gudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL2h0bWxNZXNoL2h0bWxNZXNoUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL2h0bWxNZXNoL2luZGV4LnRzIiwid2VicGFjazovL0FERE9OUy8uLi8uLi8uLi9kZXYvYWRkb25zL3NyYy9odG1sTWVzaC9wb2ludGVyRXZlbnRzQ2FwdHVyZS50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvaHRtbE1lc2gvcG9pbnRlckV2ZW50c0NhcHR1cmVCZWhhdmlvci50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L2ZvbnRBc3NldC50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvbXNkZlRleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L3BhcmFncmFwaE9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L3NkZi9ibUZvbnQudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L3NkZi9mb250LnRzIiwid2VicGFjazovL0FERE9OUy8uLi8uLi8uLi9kZXYvYWRkb25zL3NyYy9tc2RmVGV4dC9zZGYvZ2x5cGgudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L3NkZi9pbmRleC50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvbXNkZlRleHQvc2RmL2xpbmUudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L3NkZi9wYXJhZ3JhcGgudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L3NoYWRlcnMvbXNkZi5mcmFnbWVudC50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvbXNkZlRleHQvc2hhZGVycy9tc2RmLnZlcnRleC50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvbXNkZlRleHQvc2hhZGVyc1dHU0wvbXNkZi5mcmFnbWVudC50cyIsIndlYnBhY2s6Ly9BRERPTlMvLi4vLi4vLi4vZGV2L2FkZG9ucy9zcmMvbXNkZlRleHQvc2hhZGVyc1dHU0wvbXNkZi52ZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vQURET05TLy4uLy4uLy4uL2Rldi9hZGRvbnMvc3JjL21zZGZUZXh0L3RleHRSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9BRERPTlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9BRERPTlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQURET05TL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0FERE9OUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQURET05TL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQURET05TL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQURET05TLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJhYnlsb25qcy1hZGRvbnNcIiwgW1wiYmFieWxvbmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJhYnlsb25qcy1hZGRvbnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFERE9OU1wiXSA9IGZhY3Rvcnkocm9vdFtcIkJBQllMT05cIl0pO1xufSkoKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0aGlzKSwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01hdGhzX21hdGhfXykgPT4ge1xucmV0dXJuICIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCwgSXRlcmF0b3IgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgQXN5bmNJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gQXN5bmNJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiLCBhd2FpdFJldHVybiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gYXdhaXRSZXR1cm4oZikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGYsIHJlamVjdCk7IH07IH1cbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChnW25dKSB7IGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IGlmIChmKSBpW25dID0gZihpW25dKTsgfSB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG52YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgdmFyIGFyID0gW107XG4gICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICByZXR1cm4gYXI7XG4gIH07XG4gIHJldHVybiBvd25LZXlzKG8pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZSwgaW5uZXI7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgICBpZiAoYXN5bmMpIGlubmVyID0gZGlzcG9zZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGlmIChpbm5lcikgZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0cnkgeyBpbm5lci5jYWxsKHRoaXMpOyB9IGNhdGNoIChlKSB7IHJldHVybiBQcm9taXNlLnJlamVjdChlKTsgfSB9O1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICB2YXIgciwgcyA9IDA7XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKHIgPSBlbnYuc3RhY2sucG9wKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghci5hc3luYyAmJiBzID09PSAxKSByZXR1cm4gcyA9IDAsIGVudi5zdGFjay5wdXNoKHIpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKG5leHQpO1xuICAgICAgICBpZiAoci5kaXNwb3NlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHIuZGlzcG9zZS5jYWxsKHIudmFsdWUpO1xuICAgICAgICAgIGlmIChyLmFzeW5jKSByZXR1cm4gcyB8PSAyLCBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBzIHw9IDE7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocyA9PT0gMSkgcmV0dXJuIGVudi5oYXNFcnJvciA/IFByb21pc2UucmVqZWN0KGVudi5lcnJvcikgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uKHBhdGgsIHByZXNlcnZlSnN4KSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiAmJiAvXlxcLlxcLj9cXC8vLnRlc3QocGF0aCkpIHtcbiAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLih0c3gpJHwoKD86XFwuZCk/KSgoPzpcXC5bXi4vXSs/KT8pXFwuKFtjbV0/KXRzJC9pLCBmdW5jdGlvbiAobSwgdHN4LCBkLCBleHQsIGNtKSB7XG4gICAgICAgICAgcmV0dXJuIHRzeCA/IHByZXNlcnZlSnN4ID8gXCIuanN4XCIgOiBcIi5qc1wiIDogZCAmJiAoIWV4dCB8fCAhY20pID8gbSA6IChkICsgZXh0ICsgXCIuXCIgKyBjbS50b0xvd2VyQ2FzZSgpICsgXCJqc1wiKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19lc0RlY29yYXRlLFxuICBfX3J1bkluaXRpYWxpemVycyxcbiAgX19wcm9wS2V5LFxuICBfX3NldEZ1bmN0aW9uTmFtZSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG4gIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uLFxufTtcbiIsImV4cG9ydCB0eXBlIEZpdFN0cmF0ZWd5VHlwZSA9IHtcclxuICAgIHdyYXBFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQ7XHJcbiAgICB1cGRhdGVTaXplKHNpemluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBGaXRTdHJhdGVneUNvbnRhaW46IEZpdFN0cmF0ZWd5VHlwZSA9IHtcclxuICAgIHdyYXBFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHNpemluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNpemluZ0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHNpemluZ0VsZW1lbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHNpemluZ0VsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY29uc3Qgc2NhbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNjYWxpbmdFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHNjYWxpbmdFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIHNpemluZ0VsZW1lbnQuYXBwZW5kQ2hpbGQoc2NhbGluZ0VsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBzaXppbmdFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVNpemUoc2l6aW5nRWxlbWVudDogSFRNTEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2NhbGluZ0VsZW1lbnQgPSBzaXppbmdFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkISBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xyXG4gICAgICAgIHNpemluZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuXHJcbiAgICAgICAgY29uc3QgW2NoaWxkV2lkdGgsIGNoaWxkSGVpZ2h0XSA9IFtzY2FsaW5nRWxlbWVudC5vZmZzZXRXaWR0aCwgc2NhbGluZ0VsZW1lbnQub2Zmc2V0SGVpZ2h0XTtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKHdpZHRoIC8gY2hpbGRXaWR0aCwgaGVpZ2h0IC8gY2hpbGRIZWlnaHQpO1xyXG4gICAgICAgIHNjYWxpbmdFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZSgke3NjYWxlfSlgO1xyXG4gICAgICAgIHNjYWxpbmdFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBGaXRTdHJhdGVneUNvdmVyOiBGaXRTdHJhdGVneVR5cGUgPSB7XHJcbiAgICB3cmFwRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBzaXppbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHNpemluZ0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGNvbnN0IHNjYWxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzY2FsaW5nRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBzY2FsaW5nRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICBzaXppbmdFbGVtZW50LmFwcGVuZENoaWxkKHNjYWxpbmdFbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gc2l6aW5nRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTaXplKHNpemluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHNjYWxpbmdFbGVtZW50ID0gc2l6aW5nRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgc2l6aW5nRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcblxyXG4gICAgICAgIGNvbnN0IFtjaGlsZFdpZHRoLCBjaGlsZEhlaWdodF0gPSBbc2NhbGluZ0VsZW1lbnQub2Zmc2V0V2lkdGgsIHNjYWxpbmdFbGVtZW50Lm9mZnNldEhlaWdodF07XHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNYXRoLm1heCh3aWR0aCAvIGNoaWxkV2lkdGgsIGhlaWdodCAvIGNoaWxkSGVpZ2h0KTtcclxuICAgICAgICBzY2FsaW5nRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHtzY2FsZX0pYDtcclxuICAgICAgICBzY2FsaW5nRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgRml0U3RyYXRlZ3lTdHJldGNoOiBGaXRTdHJhdGVneVR5cGUgPSB7XHJcbiAgICB3cmFwRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBzaXppbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGNvbnN0IHNjYWxpbmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzY2FsaW5nRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBzY2FsaW5nRWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICBzaXppbmdFbGVtZW50LmFwcGVuZENoaWxkKHNjYWxpbmdFbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gc2l6aW5nRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTaXplKHNpemluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHNjYWxpbmdFbGVtZW50ID0gc2l6aW5nRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCEgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgc2l6aW5nRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgICAgICBzaXppbmdFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcblxyXG4gICAgICAgIGNvbnN0IFtjaGlsZFdpZHRoLCBjaGlsZEhlaWdodF0gPSBbc2NhbGluZ0VsZW1lbnQub2Zmc2V0V2lkdGgsIHNjYWxpbmdFbGVtZW50Lm9mZnNldEhlaWdodF07XHJcbiAgICAgICAgc2NhbGluZ0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7d2lkdGggLyBjaGlsZFdpZHRofSwgJHtoZWlnaHQgLyBjaGlsZEhlaWdodH0pYDtcclxuICAgICAgICBzY2FsaW5nRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgRml0U3RyYXRlZ3lOb25lOiBGaXRTdHJhdGVneVR5cGUgPSB7XHJcbiAgICB3cmFwRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTaXplKHNpemluZ0VsZW1lbnQ6IEhUTUxFbGVtZW50LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChzaXppbmdFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHNpemluZ0VsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICAgIHNpemluZ0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpdFN0cmF0ZWd5ID0ge1xyXG4gICAgQ09OVEFJTjogRml0U3RyYXRlZ3lDb250YWluLFxyXG4gICAgQ09WRVI6IEZpdFN0cmF0ZWd5Q292ZXIsXHJcbiAgICBTVFJFVENIOiBGaXRTdHJhdGVneVN0cmV0Y2gsXHJcbiAgICBOT05FOiBGaXRTdHJhdGVneU5vbmUsXHJcbn07XHJcbiIsImltcG9ydCB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5pbXBvcnQgeyBDcmVhdGVQbGFuZVZlcnRleERhdGEgfSBmcm9tIFwiY29yZS9NZXNoZXMvQnVpbGRlcnMvcGxhbmVCdWlsZGVyXCI7XHJcbmltcG9ydCB7IFN0YW5kYXJkTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc3RhbmRhcmRNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoXCI7XHJcbmltcG9ydCB7IFBvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3IgfSBmcm9tIFwiLi9wb2ludGVyRXZlbnRzQ2FwdHVyZUJlaGF2aW9yXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IEZpdFN0cmF0ZWd5VHlwZSB9IGZyb20gXCIuL2ZpdFN0cmF0ZWd5XCI7XHJcbmltcG9ydCB7IEZpdFN0cmF0ZWd5IH0gZnJvbSBcIi4vZml0U3RyYXRlZ3lcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgSFRNTCBjb250ZW50IHRoYXQgd2Ugd2FudCB0byByZW5kZXIgYXMgdGhvdWdoIGl0IGlzIHBhcnQgb2YgdGhlIHNjZW5lLiAgVGhlIEhUTUwgY29udGVudCBpcyBhY3R1YWxseVxyXG4gKiByZW5kZXJlZCBiZWxvdyB0aGUgY2FudmFzLCBidXQgYSBkZXB0aCBtYXNrIGlzIGNyZWF0ZWQgYnkgdGhpcyBjbGFzcyB0aGF0IHdyaXRlcyB0byB0aGUgZGVwdGggYnVmZmVyIGJ1dCBkb2VzIG5vdFxyXG4gKiB3cml0ZSB0byB0aGUgY29sb3IgYnVmZmVyLCBlZmZlY3RpdmVseSBwdW5jaGluZyBhIGhvbGUgaW4gdGhlIGNhbnZhcy4gIENTUyB0cmFuc2Zvcm1zIGFyZSB1c2VkIHRvIHNjYWxlLCB0cmFuc2xhdGUsIGFuZCByb3RhdGVcclxuICogdGhlIEhUTUwgY29udGVudCBzbyB0aGF0IGl0IG1hdGNoZXMgdGhlIGNhbWVyYSBhbmQgbWVzaCBvcmllbnRhdGlvbi4gIFRoZSBjbGFzcyBzdXBwb3J0cyBpbnRlcmFjdGlvbnMgaW4gZWRpdGFibGUgYW5kIG5vbi1lZGl0YWJsZSBtb2RlLlxyXG4gKiBJbiBub24tZWRpdGFibGUgbW9kZSAodGhlIGRlZmF1bHQpLCBldmVudHMgYXJlIHBhc3NlZCB0byB0aGUgSFRNTCBjb250ZW50IHdoZW4gdGhlIHBvaW50ZXIgaXMgb3ZlciB0aGUgbWFzayAoYW5kIG5vdCBvY2NsdWRlZCBieSBvdGhlciBtZXNoZXNcclxuICogaW4gdGhlIHNjZW5lKS5cclxuICogQHNlZSBodHRwczovL3BsYXlncm91bmQuYmFieWxvbmpzLmNvbS8jSFZIWUpDIzVcclxuICogQHNlZSBodHRwczovL3BsYXlncm91bmQuYmFieWxvbmpzLmNvbS8jQjE3VEM3IzExMlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEh0bWxNZXNoIGV4dGVuZHMgTWVzaCB7XHJcbiAgICAvKipcclxuICAgICAqIEhlbHBzIGlkZW50aWZ5aW5nIGEgaHRtbCBtZXNoIGZyb20gYSByZWd1bGFyIG1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc0h0bWxNZXNoKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE92ZXJyaWRlIHRoZSBzdXBlciBjbGFzcydzIF9pc0VuYWJsZWQgcHJvcGVydHkgc28gd2UgY2FuIGNvbnRyb2wgd2hlbiB0aGUgbWVzaFxyXG4gICAgLy8gaXMgZW5hYmxlZC4gIEkuZS4sIHdlIGRvbid0IHdhbnQgdG8gcmVuZGVyIHRoZSBtZXNoIHVudGlsIHRoZXJlIGlzIGNvbnRlbnQgdG8gc2hvdy5cclxuICAgIHByaXZhdGUgX2VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBUaGUgbWVzaCBpcyByZWFkeSB3aGVuIGNvbnRlbnQgaGFzIGJlZW4gc2V0IGFuZCB0aGUgY29udGVudCBzaXplIGhhcyBiZWVuIHNldFxyXG4gICAgLy8gVGhlIGZvcm1lciBpcyBkb25lIGJ5IHRoZSB1c2VyLCB0aGUgbGF0dGVyIGlzIGRvbmUgYnkgdGhlIHJlbmRlcmVyLlxyXG4gICAgcHJpdmF0ZSBfcmVhZHkgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2lzQ2FudmFzT3ZlcmxheSA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3JlcXVpcmVzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF93aWR0aD86IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodD86IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9pbnZlcnNlU2NhbGVNYXRyaXg6IE1hdHJpeCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2NhcHR1cmVPblBvaW50ZXJFbnRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9wb2ludGVyRXZlbnRDYXB0dXJlQmVoYXZpb3I6IFBvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3IgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9zb3VyY2VXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zb3VyY2VIZWlnaHQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzb3VyY2Ugd2lkdGggb2YgdGhlIGNvbnRlbnQgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgc291cmNlV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdXJjZVdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBzb3VyY2UgaGVpZ2h0IG9mIHRoZSBjb250ZW50IGluIHBpeGVsc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHNvdXJjZUhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc291cmNlSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dvcmxkTWF0cml4VXBkYXRlT2JzZXJ2ZXI6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9maXRTdHJhdGVneTogRml0U3RyYXRlZ3lUeXBlID0gRml0U3RyYXRlZ3kuTk9ORTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRydWN0IGFuIGluc3RhbmNlIG9mIEh0bWxNZXNoXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVcclxuICAgICAqIEBwYXJhbSBpZCBUaGUgaWQgb2YgdGhlIG1lc2guICBXaWxsIGJlIHVzZWQgYXMgdGhlIGlkIG9mIHRoZSBIVE1MIGVsZW1lbnQgYXMgd2VsbC5cclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB3aXRoIG9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lLCBpZDogc3RyaW5nLCB7IGNhcHR1cmVPblBvaW50ZXJFbnRlciA9IHRydWUsIGlzQ2FudmFzT3ZlcmxheSA9IGZhbHNlLCBmaXRTdHJhdGVneSA9IEZpdFN0cmF0ZWd5Lk5PTkUgfSA9IHt9KSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgLy8gUmVxdWlyZXMgYSBicm93c2VyIHRvIHdvcmsuICBCYWlsIGlmIHdlIGFyZW4ndCBydW5uaW5nIGluIGEgYnJvd3NlclxyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLldhcm4oYENyZWF0aW5nIGFuIGluc3RhbmNlIG9mIGFuIEh0bWxNZXNoIHdpdGggaWQgJHtpZH0gb3V0c2lkZSBvZiBhIGJyb3dzZXIuICBUaGUgbWVzaCB3aWxsIG5vdCBiZSB2aXNpYmxlLmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maXRTdHJhdGVneSA9IGZpdFN0cmF0ZWd5O1xyXG4gICAgICAgIHRoaXMuX2lzQ2FudmFzT3ZlcmxheSA9IGlzQ2FudmFzT3ZlcmxheTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVNYXNrKCk7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2NyZWF0ZUVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IGVuYWJsZWQgYnkgZGVmYXVsdCwgc28gdGhpcyB3aWxsIHNob3cgYXMgc29vbiBhcyBpdCdzIHJlYWR5XHJcbiAgICAgICAgdGhpcy5zZXRFbmFibGVkKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9jYXB0dXJlT25Qb2ludGVyRW50ZXIgPSBjYXB0dXJlT25Qb2ludGVyRW50ZXI7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIGJlaGF2aW9yIHRvIGNhcHR1cmUgcG9pbnRlciBldmVudHNcclxuICAgICAgICB0aGlzLl9wb2ludGVyRXZlbnRDYXB0dXJlQmVoYXZpb3IgPSBuZXcgUG9pbnRlckV2ZW50c0NhcHR1cmVCZWhhdmlvcih0aGlzLmNhcHR1cmVQb2ludGVyRXZlbnRzLmJpbmQodGhpcyksIHRoaXMucmVsZWFzZVBvaW50ZXJFdmVudHMuYmluZCh0aGlzKSwge1xyXG4gICAgICAgICAgICBjYXB0dXJlT25Qb2ludGVyRW50ZXI6IHRoaXMuX2NhcHR1cmVPblBvaW50ZXJFbnRlcixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFkZEJlaGF2aW9yKHRoaXMuX3BvaW50ZXJFdmVudENhcHR1cmVCZWhhdmlvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIGNvbnRlbnQgaW4gcGl4ZWxzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgY29udGVudCBpbiBwaXhlbHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBoZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBIVE1MIGVsZW1lbnQgdGhhdCBpcyBiZWluZyByZW5kZXJlZCBhcyBhIG1lc2hcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBlbGVtZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ1ZSBpZiB0aGUgbWVzaCBoYXMgYmVlbiBtb3ZlZCwgcm90YXRlZCwgb3Igc2NhbGVkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhpc1xyXG4gICAgICogcHJvcGVydHkgd2FzIHJlYWQuICBUaGlzIHByb3BlcnR5IGlzIHJlc2V0IHRvIGZhbHNlIGFmdGVyIHJlYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcmVxdWlyZXNVcGRhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVzVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW5hYmxlIGNhcHR1cmUgZm9yIHRoZSBwb2ludGVyIHdoZW4gZW50ZXJpbmcgdGhlIG1lc2ggYXJlYVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNhcHR1cmVPblBvaW50ZXJFbnRlcihjYXB0dXJlT25Qb2ludGVyRW50ZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jYXB0dXJlT25Qb2ludGVyRW50ZXIgPSBjYXB0dXJlT25Qb2ludGVyRW50ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudENhcHR1cmVCZWhhdmlvcikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludGVyRXZlbnRDYXB0dXJlQmVoYXZpb3IuY2FwdHVyZU9uUG9pbnRlckVudGVyID0gY2FwdHVyZU9uUG9pbnRlckVudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIG9mIHRoZSBtZXNoIGFuZCB0aGUgSFRNTCBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBkaXNwb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl9lbGVtZW50Py5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnRDYXB0dXJlQmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9pbnRlckV2ZW50Q2FwdHVyZUJlaGF2aW9yLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9pbnRlckV2ZW50Q2FwdHVyZUJlaGF2aW9yID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIF9tYXJrQXNVcGRhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuX3JlcXVpcmVzVXBkYXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBlbGVtZW50IHRvIHRoZSBzcGVjaWZpZWQgY29udGVudCBhZGp1c3RpbmcgdGhlIG1lc2ggc2NhbGUgdG8gbWF0Y2ggYW5kIG1ha2luZyBpdCB2aXNpYmxlLlxyXG4gICAgICogSWYgdGhlIHRoZSBzcGVjaWZpZWQgY29udGVudCBpcyB1bmRlZmluZWQsIHRoZW4gaXQgd2lsbCBtYWtlIHRoZSBtZXNoIGludmlzaWJsZS4gIEluIGVpdGhlciBjYXNlIGl0IHdpbGwgY2xlYXIgdGhlXHJcbiAgICAgKiBlbGVtZW50IGNvbnRlbnQgZmlyc3QuXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byByZW5kZXIgYXMgYSBtZXNoXHJcbiAgICAgKiBAcGFyYW0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSBtZXNoIGluIEJhYnlsb24gdW5pdHNcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgbWVzaCBpbiBCYWJ5bG9uIHVuaXRzXHJcbiAgICAgKi9cclxuICAgIHNldENvbnRlbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gSWYgY29udGVudCBpcyBjaGFuZ2VkLCB3ZSBhcmUgbm8gbG9uZ2VyIHJlYWR5XHJcbiAgICAgICAgdGhpcy5fc2V0QXNSZWFkeShmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIEFsc28gaW52YWxpZGF0ZSB0aGUgc291cmNlIHdpZHRoIGFuZCBoZWlnaHRcclxuICAgICAgICB0aGlzLl9zb3VyY2VXaWR0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fc291cmNlSGVpZ2h0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3JlcXVpcmVzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsaW5nLnNldEFsbCgxKTtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9maXRTdHJhdGVneS53cmFwRWxlbWVudChlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTY2FsZUlmTmVjZXNzYXJ5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zb3VyY2VXaWR0aCAmJiB0aGlzLnNvdXJjZUhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRBc1JlYWR5KHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBPdmVyaWRlcyBCQUJZTE9OLk1lc2guc2V0RW5hYmxlZFxyXG4gICAgcHVibGljIG92ZXJyaWRlIHNldEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIENhcHR1cmUgcmVxdWVzdGVkIGVuYWJsZWQgc3RhdGVcclxuICAgICAgICB0aGlzLl9lbmFibGVkID0gZW5hYmxlZDtcclxuXHJcbiAgICAgICAgLy8gSWYgZGlzYWJsaW5nIG9yIGVuYWJsaW5nIGFuZCB3ZSBhcmUgcmVhZHlcclxuICAgICAgICBpZiAoIWVuYWJsZWQgfHwgdGhpcy5fcmVhZHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZG9TZXRFbmFibGVkKGVuYWJsZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNvbnRlbnQgc2l6ZSBpbiBwaXhlbHNcclxuICAgICAqIEBwYXJhbSB3aWR0aCB3aWR0aCBvZiB0aGUgc291cmNlXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IGhlaWdodCBvZiB0aGUgc291cmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRDb250ZW50U2l6ZVB4KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc291cmNlV2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLl9zb3VyY2VIZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudCB8fCAhdGhpcy5fZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9maXRTdHJhdGVneS51cGRhdGVTaXplKHRoaXMuX2VsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVTY2FsZUlmTmVjZXNzYXJ5KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLndpZHRoICYmIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEFzUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfc2V0QXNSZWFkeShyZWFkeTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3JlYWR5ID0gcmVhZHk7XHJcbiAgICAgICAgaWYgKHJlYWR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RvU2V0RW5hYmxlZCh0aGlzLl9lbmFibGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kb1NldEVuYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2RvU2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vaWYgZW5hYmxlZCwgdGhlbiBzdGFydCBsaXN0ZW5pbmcgZm9yIGNoYW5nZXMgdG8gdGhlXHJcbiAgICAgICAgLy8gc2NhbGluZywgcm90YXRpb24sIGFuZCBwb3NpdGlvbi4gIG90aGVyd2lzZSBzdG9wIGxpc3RlbmluZ1xyXG4gICAgICAgIGlmIChlbmFibGVkICYmICF0aGlzLl93b3JsZE1hdHJpeFVwZGF0ZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkTWF0cml4VXBkYXRlT2JzZXJ2ZXIgPSB0aGlzLm9uQWZ0ZXJXb3JsZE1hdHJpeFVwZGF0ZU9ic2VydmFibGUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl93b3JsZE1hdHJpeFVwZGF0ZU9ic2VydmVyPy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5fd29ybGRNYXRyaXhVcGRhdGVPYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBlbmFibGVkLCB0aGVuIHJldmVydCB0aGUgY29udGVudCBlbGVtZW50IGRpc3BsYXlcclxuICAgICAgICAvLyBvdGhlcndpc2UgaGlkZSBpdFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGVuYWJsZWQgPyBcIlwiIDogXCJub25lXCI7XHJcbiAgICAgICAgLy8gQ2FwdHVyZSB0aGUgY29udGVudCB6IGluZGV4XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudHpJbmRleCh0aGlzLnBvc2l0aW9uLnogKiAtMTAwMDApO1xyXG4gICAgICAgIHN1cGVyLnNldEVuYWJsZWQoZW5hYmxlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF91cGRhdGVTY2FsZUlmTmVjZXNzYXJ5KCkge1xyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgc2V0Q29udGVudCBiZWZvcmUsIHRoZSBjb250ZW50IHNjYWxlIGlzIGJha2VkIGludG8gdGhlIG1lc2guICBJZiB3ZSBkb24ndCByZXNldCB0aGUgdmVydGljZXMgdG9cclxuICAgICAgICAvLyB0aGUgb3JpZ2luYWwgc2l6ZSwgdGhlbiB3ZSB3aWxsIG11bHRpcGx5IHRoZSBzY2FsZSB3aGVuIHdlIGJha2UgdGhlIHNjYWxlIGJlbG93LiAgQnkgYXBwbHlpbmcgdGhlIGludmVyc2UsIHdlIGJhY2sgb3V0XHJcbiAgICAgICAgLy8gdGhlIHNjYWxpbmcgdGhhdCBoYXMgYmVlbiBkb25lIHNvIHdlIGFyZSBzdGFydGluZyBmcm9tIHRoZSBzYW1lIHBvaW50LlxyXG4gICAgICAgIC8vIEZpcnN0IHJlc2V0IHRoZSBzY2FsZSB0byAxXHJcbiAgICAgICAgdGhpcy5zY2FsaW5nLnNldEFsbCgxKTtcclxuICAgICAgICAvLyBUaGVuIGJhY2sgb3V0IHRoZSBvcmlnaW5hbCB2ZXJ0aWNlcyBjaGFuZ2VzIHRvIG1hdGNoIHRoZSBjb250ZW50IHNjYWxlXHJcbiAgICAgICAgaWYgKHRoaXMuX2ludmVyc2VTY2FsZU1hdHJpeCkge1xyXG4gICAgICAgICAgICB0aGlzLmJha2VUcmFuc2Zvcm1JbnRvVmVydGljZXModGhpcy5faW52ZXJzZVNjYWxlTWF0cml4KTtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgb3V0IHRoZSBtYXRyaXggc28gaXQgZG9lc24ndCBnZXQgYXBwbGllZCBhZ2FpbiB1bmxlc3Mgd2Ugc2NhbGVcclxuICAgICAgICAgICAgdGhpcy5faW52ZXJzZVNjYWxlTWF0cml4ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBzY2FsZSB0byBtYXRjaCBjb250ZW50LiAgTm90ZSB3ZSBjYW4ndCBqdXN0IHNjYWxlIHRoZSBtZXNoLCBiZWNhdXNlIHRoYXQgd2lsbCBzY2FsZSB0aGUgY29udGVudCBhcyB3ZWxsXHJcbiAgICAgICAgLy8gV2hhdCB3ZSBuZWVkIHRvIGRvIGlzIGNvbXB1dGUgYSBzY2FsZSBtYXRyaXggYW5kIHRoZW4gYmFrZSB0aGF0IGludG8gdGhlIG1lc2ggdmVydGljZXMuICBUaGlzIHdpbGwgbGVhdmUgdGhlXHJcbiAgICAgICAgLy8gbWVzaCBzY2FsZSBhdCAxLCBzbyBvdXIgY29udGVudCB3aWxsIHN0YXkgaXQncyBvcmlnaW5hbCB3aWR0aCBhbmQgaGVpZ2h0IHVudGlsIHdlIHNjYWxlIHRoZSBtZXNoLlxyXG4gICAgICAgIGNvbnN0IHNjYWxlWCA9IHRoaXMuX3dpZHRoIHx8IDE7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVZID0gdGhpcy5faGVpZ2h0IHx8IDE7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVNYXRyaXggPSBNYXRyaXguU2NhbGluZyhzY2FsZVgsIHNjYWxlWSwgMSk7XHJcbiAgICAgICAgdGhpcy5iYWtlVHJhbnNmb3JtSW50b1ZlcnRpY2VzKHNjYWxlTWF0cml4KTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGFuIGludmVyc2Ugb2YgdGhlIHNjYWxlIG1hdHJpeCB0aGF0IHdlIGNhbiB1c2UgdG8gYmFjayBvdXQgdGhlIHNjYWxlIGNoYW5nZXMgd2UgaGF2ZSBtYWRlIHNvXHJcbiAgICAgICAgLy8gd2UgZG9uJ3QgbXVsdGlwbHkgdGhlIHNjYWxlLlxyXG4gICAgICAgIHRoaXMuX2ludmVyc2VTY2FsZU1hdHJpeCA9IG5ldyBNYXRyaXgoKTtcclxuICAgICAgICBzY2FsZU1hdHJpeC5pbnZlcnRUb1JlZih0aGlzLl9pbnZlcnNlU2NhbGVNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlTWFzaygpIHtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhID0gQ3JlYXRlUGxhbmVWZXJ0ZXhEYXRhKHsgd2lkdGg6IDEsIGhlaWdodDogMSB9KTtcclxuICAgICAgICB2ZXJ0ZXhEYXRhLmFwcGx5VG9NZXNoKHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmUoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlcHRoTWFzayA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKGAke3RoaXMuaWR9LW1hdGAsIHNjZW5lKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ2FudmFzT3ZlcmxheSkge1xyXG4gICAgICAgICAgICBkZXB0aE1hc2suYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRlcHRoTWFzay5kaXNhYmxlQ29sb3JXcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRlcHRoTWFzay5kaXNhYmxlTGlnaHRpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IGRlcHRoTWFzaztcclxuXHJcbiAgICAgICAgLy8gT3B0aW1pemF0aW9uIC0gRnJlZXplIG1hdGVyaWFsIHNpbmNlIGl0IG5ldmVyIG5lZWRzIHRvIGNoYW5nZVxyXG4gICAgICAgIHRoaXMubWF0ZXJpYWwuZnJlZXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9zZXRFbGVtZW50ekluZGV4KHpJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS56SW5kZXggPSBgJHt6SW5kZXh9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayB1c2VkIGJ5IHRoZSBQb2ludGVyRXZlbnRzQ2FwdHVyZUJlaGF2aW9yIHRvIGNhcHR1cmUgcG9pbnRlciBldmVudHNcclxuICAgICAqL1xyXG4gICAgY2FwdHVyZVBvaW50ZXJFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVuYWJsZSBkb20gY29udGVudCB0byBjYXB0dXJlIHBvaW50ZXIgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XHJcblxyXG4gICAgICAgIC8vIFN1cHJlc3MgZXZlbnRzIG91dHNpZGUgb2YgdGhlIGRvbSBjb250ZW50XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHVzZWQgYnkgdGhlIFBvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3IgdG8gcmVsZWFzZSBwb2ludGVyIGV2ZW50c1xyXG4gICAgICovXHJcbiAgICByZWxlYXNlUG9pbnRlckV2ZW50cygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRW5hYmxlIHBvaW50ZXIgZXZlbnRzIG9uIGNhbnZhc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XHJcblxyXG4gICAgICAgIC8vIERpc2FibGUgcG9pbnRlciBldmVudHMgb24gZG9tIGNvbnRlbnRcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICAgICAgLy8gUmVxdWlyZXMgYSBicm93c2VyIHRvIHdvcmsuICBCYWlsIGlmIHdlIGFyZW4ndCBydW5uaW5nIGluIGEgYnJvd3NlclxyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2lzQ2FudmFzT3ZlcmxheSA/IFwidHJhbnNwYXJlbnRcIiA6IFwiIzAwMFwiO1xyXG4gICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSBcIjFcIjtcclxuICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgZGl2LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICBkaXYuc3R5bGUuYmFja2ZhY2VWaXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgTWF0cml4LCBRdWF0ZXJuaW9uLCBWZWN0b3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aFwiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBIdG1sTWVzaCB9IGZyb20gXCIuL2h0bWxNZXNoXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgU3ViTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9zdWJNZXNoXCI7XHJcbmltcG9ydCB7IFJlbmRlcmluZ0dyb3VwIH0gZnJvbSBcImNvcmUvUmVuZGVyaW5nL3JlbmRlcmluZ0dyb3VwXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IE9ic2VydmVyIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJjb3JlL01pc2MvbG9nZ2VyXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RFbmdpbmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzXCI7XHJcblxyXG5jb25zdCBQb3NpdGlvblVwZGF0ZUZhaWxNZXNzYWdlID0gXCJGYWlsZWQgdG8gdXBkYXRlIGh0bWwgbWVzaCByZW5kZXJlciBwb3NpdGlvbiBkdWUgdG8gZmFpbHVyZSB0byBnZXQgY2FudmFzIHJlY3QuICBIdG1sTWVzaCBpbnN0YW5jZXMgbWF5IG5vdCByZW5kZXIgY29ycmVjdGx5XCI7XHJcbmNvbnN0IEJhYnlsb25Vbml0c1RvUGl4ZWxzID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIEEgZnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0d28gc3VibWVzaGVzIGFuZCByZXR1cm5zIGEgbnVtYmVyIGluZGljYXRpbmcgd2hpY2hcclxuICogc2hvdWxkIGJlIHJlbmRlcmVkIGZpcnN0LlxyXG4gKi9cclxudHlwZSBSZW5kZXJPcmRlckZ1bmN0aW9uID0gKHN1Yk1lc2hBOiBTdWJNZXNoLCBzdWJNZXNoQjogU3ViTWVzaCkgPT4gbnVtYmVyO1xyXG5cclxudHlwZSBSZW5kZXJMYXllckVsZW1lbnRzID0ge1xyXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgY2FtZXJhRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbn07XHJcblxyXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBlbnN1cmVzIHRoYXQgSHRtbE1lc2hlcyBhcmUgcmVuZGVyZWQgYmVmb3JlIGFsbCBvdGhlciBtZXNoZXMuXHJcbi8vIE5vdGUgdGhpcyB3aWxsIG9ubHkgYmUgYXBwbGllZCB0byBncm91cCAwLlxyXG4vLyBJZiBuZWl0aGVyIG1lc2ggaXMgYW4gSHRtbE1lc2gsIHRoZW4gdGhlIGRlZmF1bHQgcmVuZGVyIG9yZGVyIGlzIHVzZWRcclxuLy8gVGhpcyBwcmV2ZW50cyBIdG1sTWVzaGVzIGZyb20gYXBwZWFyaW5nIGluIGZyb250IG9mIG90aGVyIG1lc2hlcyB3aGVuIHRoZXkgYXJlIGJlaGluZCB0aGVtXHJcbmNvbnN0IFJlbmRlck9yZGVyRnVuYyA9IChkZWZhdWx0UmVuZGVyT3JkZXI6IFJlbmRlck9yZGVyRnVuY3Rpb24pOiBSZW5kZXJPcmRlckZ1bmN0aW9uID0+IHtcclxuICAgIHJldHVybiAoc3ViTWVzaEE6IFN1Yk1lc2gsIHN1Yk1lc2hCOiBTdWJNZXNoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzaEEgPSBzdWJNZXNoQS5nZXRNZXNoKCk7XHJcbiAgICAgICAgY29uc3QgbWVzaEIgPSBzdWJNZXNoQi5nZXRNZXNoKCk7XHJcblxyXG4gICAgICAgIC8vIFVzZSBwcm9wZXJ0eSBjaGVjayBpbnN0ZWFkIG9mIGluc3RhbmNlb2Ygc2luY2UgaXQgaXMgbGVzcyBleHBlbnNpdmUgYW5kXHJcbiAgICAgICAgLy8gdGhpcyB3aWxsIGJlIGNhbGxlZCBtYW55IHRpbWVzIHBlciBmcmFtZVxyXG4gICAgICAgIGNvbnN0IG1lc2hJc0h0bWxNZXNoQSA9IChtZXNoQSBhcyBhbnkpW1wiaXNIdG1sTWVzaFwiXTtcclxuICAgICAgICBjb25zdCBtZXNoSXNIdG1sTWVzaEIgPSAobWVzaEIgYXMgYW55KVtcImlzSHRtbE1lc2hcIl07XHJcbiAgICAgICAgaWYgKG1lc2hJc0h0bWxNZXNoQSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzaElzSHRtbE1lc2hCID8gKG1lc2hBLmFic29sdXRlUG9zaXRpb24ueiA8PSBtZXNoQi5hYnNvbHV0ZVBvc2l0aW9uLnogPyAxIDogLTEpIDogLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc2hJc0h0bWxNZXNoQiA/IDEgOiBkZWZhdWx0UmVuZGVyT3JkZXIoc3ViTWVzaEEsIHN1Yk1lc2hCKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgaXMgcmVxdWlyZWQgdG8gcmVuZGVyIEh0bWxNZXNoZXMgaW4gdGhlIHNjZW5lLlxyXG4gKiBpZiB1c2luZyBIdG1sTWVzaGVzLCB5b3UgbXVzdCBub3Qgc2V0IHJlbmRlciBvcmRlciBmb3IgZ3JvdXAgMCB1c2luZ1xyXG4gKiBzY2VuZS5zZXRSZW5kZXJpbmdPcmRlci4gIFlvdSBtdXN0IGluc3RlYWQgcGFzcyB0aGUgY29tcGFyZSBmdW5jdGlvbnNcclxuICogdG8gdGhlIEh0bWxNZXNoUmVuZGVyZXIgY29uc3RydWN0b3IuICBJZiB5b3UgZG8gbm90LCB0aGVuIHlvdXIgcmVuZGVyXHJcbiAqIG9yZGVyIHdpbGwgYmUgb3ZlcndyaXR0ZW4gaWYgdGhlIEh0bWxNZXNoUmVuZGVyZXIgaXMgY3JlYXRlZCBhZnRlciBhbmRcclxuICogdGhlIEh0bWxNZXNoZXMgd2lsbCBub3QgcmVuZGVyIGNvcnJlY3RseSAodGhleSB3aWxsIGFwcGVhciBpbiBmcm9udCBvZlxyXG4gKiBtZXNoZXMgdGhhdCBhcmUgYWN0dWFsbHkgaW4gZnJvbnQgb2YgdGhlbSkgaWYgdGhlIEh0bWxNZXNoUmVuZGVyZXIgaXNcclxuICogY3JlYXRlZCBiZWZvcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSHRtbE1lc2hSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIF9jb250YWluZXJJZD86IHN0cmluZztcclxuICAgIHByaXZhdGUgX2luU2NlbmVFbGVtZW50cz86IFJlbmRlckxheWVyRWxlbWVudHMgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBfb3ZlcmxheUVsZW1lbnRzPzogUmVuZGVyTGF5ZXJFbGVtZW50cyB8IG51bGw7XHJcbiAgICBwcml2YXRlIF9lbmdpbmU6IEFic3RyYWN0RW5naW5lO1xyXG5cclxuICAgIHByaXZhdGUgX2NhY2hlID0ge1xyXG4gICAgICAgIGNhbWVyYURhdGE6IHsgZm92OiAwLCBwb3NpdGlvbjogbmV3IFZlY3RvcjMoKSwgc3R5bGU6IFwiXCIgfSxcclxuICAgICAgICBodG1sTWVzaERhdGE6IG5ldyBXZWFrTWFwPG9iamVjdCwgeyBzdHlsZTogc3RyaW5nIH0+KCksXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBfd2lkdGggPSAwO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcclxuICAgIHByaXZhdGUgX2hlaWdodEhhbGYgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2NhbWVyYVdvcmxkTWF0cml4PzogTWF0cml4O1xyXG5cclxuICAgIC8vIENyZWF0ZSBzb21lIHJlZnMgdG8gYXZvaWQgY3JlYXRpbmcgbmV3IG9iamVjdHMgZXZlcnkgZnJhbWVcclxuICAgIHByaXZhdGUgX3RlbXAgPSB7XHJcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm06IG5ldyBWZWN0b3IzKCksXHJcbiAgICAgICAgcm90YXRpb25UcmFuc2Zvcm06IG5ldyBRdWF0ZXJuaW9uKCksXHJcbiAgICAgICAgcG9zaXRpb25UcmFuc2Zvcm06IG5ldyBWZWN0b3IzKCksXHJcbiAgICAgICAgb2JqZWN0TWF0cml4OiBNYXRyaXguSWRlbnRpdHkoKSxcclxuICAgICAgICBjYW1lcmFXb3JsZE1hdHJpeDogTWF0cml4LklkZW50aXR5KCksXHJcbiAgICAgICAgY2FtZXJhUm90YXRpb25NYXRyaXg6IE1hdHJpeC5JZGVudGl0eSgpLFxyXG4gICAgICAgIGNhbWVyYVdvcmxkTWF0cml4QXNBcnJheTogbmV3IEFycmF5KDE2KSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gS2VlcCB0cmFjayBvZiBEUFIgc28gd2UgY2FuIHJlc2l6ZSBpZiBEUFIgY2hhbmdlc1xyXG4gICAgLy8gT3RoZXJ3aXNlIHRoZSBET00gY29udGVudCB3aWxsIHNjYWxlLCBidXQgdGhlIG1lc2ggd29uJ3RcclxuICAgIHByaXZhdGUgX2xhc3REZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcblxyXG4gICAgLy8gS2VlcCB0cmFjayBvZiBjYW1lcmEgbWF0cml4IGNoYW5nZXMgc28gd2Ugb25seSB1cGRhdGUgdGhlXHJcbiAgICAvLyBET00gZWxlbWVudCBzdHlsZXMgd2hlbiBuZWNlc3NhcnlcclxuICAgIHByaXZhdGUgX2NhbWVyYU1hdHJpeFVwZGF0ZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIEtlZXAgdHJhY2sgb2YgcG9zaXRpb24gY2hhbmdlcyBzbyB3ZSBvbmx5IHVwZGF0ZSB0aGUgRE9NIGVsZW1lbnRcclxuICAgIC8vIHN0eWxlcyB3aGVuIG5lY2Vzc2FyeVxyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNDYW52YXNEb2N1bWVudFBvc2l0aW9uID0ge1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIF9yZW5kZXJPYnNlcnZlcjogT2JzZXJ2ZXI8U2NlbmU+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250cnVjdCBhbiBpbnN0YW5jZSBvZiBIdG1sTWVzaFJlbmRlcmVyXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVcclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgb3B0aW9uYWwgcHJvcGVydGllczpcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudENvbnRhaW5lcklkID0gbnVsbCxcclxuICAgICAgICAgICAgX2NvbnRhaW5lcklkID0gXCJjc3MtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIGVuYWJsZU92ZXJsYXlSZW5kZXIgPSB0cnVlLFxyXG4gICAgICAgICAgICBkZWZhdWx0T3BhcXVlUmVuZGVyT3JkZXIgPSBSZW5kZXJpbmdHcm91cC5QYWludGVyU29ydENvbXBhcmUsXHJcbiAgICAgICAgICAgIGRlZmF1bHRBbHBoYVRlc3RSZW5kZXJPcmRlciA9IFJlbmRlcmluZ0dyb3VwLlBhaW50ZXJTb3J0Q29tcGFyZSxcclxuICAgICAgICAgICAgZGVmYXVsdFRyYW5zcGFyZW50UmVuZGVyT3JkZXIgPSBSZW5kZXJpbmdHcm91cC5kZWZhdWx0VHJhbnNwYXJlbnRTb3J0Q29tcGFyZSxcclxuICAgICAgICB9OiB7XHJcbiAgICAgICAgICAgIHBhcmVudENvbnRhaW5lcklkPzogc3RyaW5nIHwgbnVsbDtcclxuICAgICAgICAgICAgX2NvbnRhaW5lcklkPzogc3RyaW5nO1xyXG4gICAgICAgICAgICBkZWZhdWx0T3BhcXVlUmVuZGVyT3JkZXI/OiBSZW5kZXJPcmRlckZ1bmN0aW9uO1xyXG4gICAgICAgICAgICBkZWZhdWx0QWxwaGFUZXN0UmVuZGVyT3JkZXI/OiBSZW5kZXJPcmRlckZ1bmN0aW9uO1xyXG4gICAgICAgICAgICBkZWZhdWx0VHJhbnNwYXJlbnRSZW5kZXJPcmRlcj86IFJlbmRlck9yZGVyRnVuY3Rpb247XHJcbiAgICAgICAgICAgIGVuYWJsZU92ZXJsYXlSZW5kZXI/OiBib29sZWFuO1xyXG4gICAgICAgIH0gPSB7fVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gUmVxdWlyZXMgYSBicm93c2VyIHRvIHdvcmsuICBPbmx5IGluaXQgaWYgd2UgYXJlIGluIGEgYnJvd3NlclxyXG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb250YWluZXJJZCA9IF9jb250YWluZXJJZDtcclxuICAgICAgICB0aGlzLl9pbml0KHNjZW5lLCBwYXJlbnRDb250YWluZXJJZCwgZW5hYmxlT3ZlcmxheVJlbmRlciwgZGVmYXVsdE9wYXF1ZVJlbmRlck9yZGVyLCBkZWZhdWx0QWxwaGFUZXN0UmVuZGVyT3JkZXIsIGRlZmF1bHRUcmFuc3BhcmVudFJlbmRlck9yZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2Ugb2YgdGhlIEh0bWxNZXNoUmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlbmRlck9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlck9ic2VydmVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJPYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9vdmVybGF5RWxlbWVudHM/LmNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9vdmVybGF5RWxlbWVudHMgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLl9pblNjZW5lRWxlbWVudHM/LmNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9pblNjZW5lRWxlbWVudHMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfaW5pdChcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgcGFyZW50Q29udGFpbmVySWQ6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgZW5hYmxlT3ZlcmxheVJlbmRlcjogYm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0T3BhcXVlUmVuZGVyT3JkZXI6IFJlbmRlck9yZGVyRnVuY3Rpb24sXHJcbiAgICAgICAgZGVmYXVsdEFscGhhVGVzdFJlbmRlck9yZGVyOiBSZW5kZXJPcmRlckZ1bmN0aW9uLFxyXG4gICAgICAgIGRlZmF1bHRUcmFuc3BhcmVudFJlbmRlck9yZGVyOiBSZW5kZXJPcmRlckZ1bmN0aW9uXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICAvLyBSZXF1aXJlcyBhIGJyb3dzZXIgdG8gd29yay4gIE9ubHkgaW5pdCBpZiB3ZSBhcmUgaW4gYSBicm93c2VyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIERPTSBjb250YWluZXJzXHJcbiAgICAgICAgbGV0IHBhcmVudENvbnRhaW5lciA9IHBhcmVudENvbnRhaW5lcklkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50Q29udGFpbmVySWQpIDogZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgICAgICAgaWYgKCFwYXJlbnRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBjb250YWluZXIgYWxyZWFkeSBleGlzdHMsIHRoZW4gcmVtb3ZlIGl0XHJcbiAgICAgICAgY29uc3QgaW5TY2VuZUNvbnRhaW5lcklkID0gYCR7dGhpcy5fY29udGFpbmVySWR9X2luX3NjZW5lYDtcclxuICAgICAgICB0aGlzLl9pblNjZW5lRWxlbWVudHMgPSB0aGlzLl9jcmVhdGVSZW5kZXJMYXllckVsZW1lbnRzKGluU2NlbmVDb250YWluZXJJZCk7XHJcblxyXG4gICAgICAgIHBhcmVudENvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5faW5TY2VuZUVsZW1lbnRzLmNvbnRhaW5lciwgcGFyZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgICAgICBpZiAoZW5hYmxlT3ZlcmxheVJlbmRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5Q29udGFpbmVySWQgPSBgJHt0aGlzLl9jb250YWluZXJJZH1fb3ZlcmxheWA7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlFbGVtZW50cyA9IHRoaXMuX2NyZWF0ZVJlbmRlckxheWVyRWxlbWVudHMob3ZlcmxheUNvbnRhaW5lcklkKTtcclxuICAgICAgICAgICAgY29uc3QgekluZGV4ID0gKyhzY2VuZS5nZXRFbmdpbmUoKS5nZXRSZW5kZXJpbmdDYW52YXMoKSEuc3R5bGUuekluZGV4ID8/IFwiMFwiKSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlFbGVtZW50cy5jb250YWluZXIuc3R5bGUuekluZGV4ID0gYCR7ekluZGV4fWA7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlFbGVtZW50cy5jb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBwYXJlbnRDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuX292ZXJsYXlFbGVtZW50cy5jb250YWluZXIsIHBhcmVudENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5naW5lID0gc2NlbmUuZ2V0RW5naW5lKCk7XHJcbiAgICAgICAgY29uc3QgY2xpZW50UmVjdCA9IHRoaXMuX2VuZ2luZS5nZXRSZW5kZXJpbmdDYW52YXNDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgaWYgKCFjbGllbnRSZWN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgY2xpZW50IHJlY3QgZm9yIHJlbmRlcmluZyBjYW52YXNcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIHNpemUgYW5kIHJlc2l6ZSBiZWhhdmlvclxyXG4gICAgICAgIHRoaXMuX3NldFNpemUoY2xpZW50UmVjdC53aWR0aCwgY2xpZW50UmVjdC5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbmdpbmUub25SZXNpemVPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudFJlY3QgPSB0aGlzLl9lbmdpbmUuZ2V0UmVuZGVyaW5nQ2FudmFzQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICBpZiAoY2xpZW50UmVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0U2l6ZShjbGllbnRSZWN0LndpZHRoLCBjbGllbnRSZWN0LmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3Rpb25PYnM6IE9ic2VydmVyPENhbWVyYT47XHJcbiAgICAgICAgbGV0IG1hdHJpeE9iczogT2JzZXJ2ZXI8Q2FtZXJhPjtcclxuXHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZUNhbWVyYSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gc2NlbmUuYWN0aXZlQ2FtZXJhO1xyXG4gICAgICAgICAgICBpZiAoY2FtZXJhKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uT2JzID0gY2FtZXJhLm9uUHJvamVjdGlvbk1hdHJpeENoYW5nZWRPYnNlcnZhYmxlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25DYW1lcmFNYXRyaXhDaGFuZ2VkKGNhbWVyYSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIG1hdHJpeE9icyA9IGNhbWVyYS5vblZpZXdNYXRyaXhDaGFuZ2VkT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQ2FtZXJhTWF0cml4Q2hhbmdlZChjYW1lcmEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBvYnNlcnZlQ2FtZXJhKCk7XHJcblxyXG4gICAgICAgIHNjZW5lLm9uQWN0aXZlQ2FtZXJhQ2hhbmdlZC5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdGlvbk9icykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuYWN0aXZlQ2FtZXJhPy5vblByb2plY3Rpb25NYXRyaXhDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmUocHJvamVjdGlvbk9icyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1hdHJpeE9icykge1xyXG4gICAgICAgICAgICAgICAgc2NlbmUuYWN0aXZlQ2FtZXJhPy5vblZpZXdNYXRyaXhDaGFuZ2VkT2JzZXJ2YWJsZS5yZW1vdmUobWF0cml4T2JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYnNlcnZlQ2FtZXJhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgSHRtbE1lc2hlcyBhcmUgcmVuZGVyZWQgYmVmb3JlIGFsbCBvdGhlciBtZXNoZXNcclxuICAgICAgICAvLyBzbyB0aGF0IHRoZXkgZG9uJ3QgYXBwZWFyIGluIGZyb250IG9mIG1lc2hlcyB0aGF0IGFyZSBhY3R1YWxseSBpbiBmcm9udCBvZiB0aGVtXHJcbiAgICAgICAgLy8gVXBkYXRpbmcgdGhlIHJlbmRlciBvcmRlciBpc24ndCBpZGVhbCwgYnV0IGl0IGlzIHRoZSBvbmx5IHdheSB0byBhY2hlaXZlIHRoaXNcclxuICAgICAgICAvLyBUaGUgaW1wbGljYXRpb24gaXMgdGhhdCBhbiBhcHAgdXNpbmcgdGhlIEh0bWxNZXNoUmVuZGVyZWQgbXVzdCBzZXQgdGhlIHNjZW5lIHJlbmRlciBvcmRlclxyXG4gICAgICAgIC8vIHZpYSB0aGUgSHRtbE1lc2hSZW5kZXJlZCBjb25zdHJ1Y3RvclxyXG4gICAgICAgIGNvbnN0IG9wYXF1ZVJlbmRlck9yZGVyID0gUmVuZGVyT3JkZXJGdW5jKGRlZmF1bHRPcGFxdWVSZW5kZXJPcmRlcik7XHJcbiAgICAgICAgY29uc3QgYWxwaGFUZXN0UmVuZGVyT3JkZXIgPSBSZW5kZXJPcmRlckZ1bmMoZGVmYXVsdEFscGhhVGVzdFJlbmRlck9yZGVyKTtcclxuICAgICAgICBjb25zdCB0cmFuc3BhcmVudFJlbmRlck9yZGVyID0gUmVuZGVyT3JkZXJGdW5jKGRlZmF1bHRUcmFuc3BhcmVudFJlbmRlck9yZGVyKTtcclxuICAgICAgICBzY2VuZS5zZXRSZW5kZXJpbmdPcmRlcigwLCBvcGFxdWVSZW5kZXJPcmRlciwgYWxwaGFUZXN0UmVuZGVyT3JkZXIsIHRyYW5zcGFyZW50UmVuZGVyT3JkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLl9yZW5kZXJPYnNlcnZlciA9IHNjZW5lLm9uQmVmb3JlUmVuZGVyT2JzZXJ2YWJsZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXIoc2NlbmUsIHNjZW5lLmFjdGl2ZUNhbWVyYSBhcyBDYW1lcmEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVJlbmRlckxheWVyRWxlbWVudHMoY29udGFpbmVySWQ6IHN0cmluZyk6IFJlbmRlckxheWVyRWxlbWVudHMge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBleGlzdGluZ0NvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuaWQgPSBjb250YWluZXJJZDtcclxuICAgICAgICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRvbUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG5cclxuICAgICAgICBjb25zdCBjYW1lcmFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgY2FtZXJhRWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm1TdHlsZSA9IFwicHJlc2VydmUtM2RcIjtcclxuICAgICAgICBjYW1lcmFFbGVtZW50LnN0eWxlLnRyYW5zZm9ybVN0eWxlID0gXCJwcmVzZXJ2ZS0zZFwiO1xyXG5cclxuICAgICAgICBjYW1lcmFFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgZG9tRWxlbWVudC5hcHBlbmRDaGlsZChjYW1lcmFFbGVtZW50KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tRWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgICAgICBkb21FbGVtZW50LFxyXG4gICAgICAgICAgICBjYW1lcmFFbGVtZW50LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIF9nZXRTaXplKCk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfc2V0U2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX2hlaWdodEhhbGYgPSB0aGlzLl9oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2luU2NlbmVFbGVtZW50cyB8fCAhdGhpcy5fb3ZlcmxheUVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gW3RoaXMuX2luU2NlbmVFbGVtZW50cy5kb21FbGVtZW50LCB0aGlzLl9vdmVybGF5RWxlbWVudHMuZG9tRWxlbWVudCwgdGhpcy5faW5TY2VuZUVsZW1lbnRzLmNhbWVyYUVsZW1lbnQsIHRoaXMuX292ZXJsYXlFbGVtZW50cy5jYW1lcmFFbGVtZW50XTtcclxuICAgICAgICBmb3IgKGNvbnN0IGRvbSBvZiBkb21FbGVtZW50cykge1xyXG4gICAgICAgICAgICBpZiAoZG9tKSB7XHJcbiAgICAgICAgICAgICAgICBkb20uc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBkb20uc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHByb3RlY3RlZCBfZ2V0Q2FtZXJhQ3NzTWF0cml4KG1hdHJpeDogTWF0cml4KTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IG1hdHJpeC5tO1xyXG4gICAgICAgIHJldHVybiBgbWF0cml4M2QoJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggZWxlbWVudHNbMF0gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggLSBlbGVtZW50c1sxXSApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCBlbGVtZW50c1syXSApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCBlbGVtZW50c1szXSApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCBlbGVtZW50c1s0XSApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCAtIGVsZW1lbnRzWzVdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzZdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzddIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzhdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIC0gZWxlbWVudHNbOV0gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggZWxlbWVudHNbMTBdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzExXSApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCBlbGVtZW50c1sxMl0gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggLSBlbGVtZW50c1sxM10gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggZWxlbWVudHNbMTRdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzE1XSApXHJcbiAgICAgICAgfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnZlcnQgYSBCYWJ5bG9uIHdvcmxkIG1hdHJpeCB0byBhIENTUyBtYXRyaXhcclxuICAgIC8vIFRoaXMgYWxzbyBoYW5kbGVzIGNvbnZlcnNpb24gZnJvbSBCSlMgbGVmdCBoYW5kZWQgY29vcmRzXHJcbiAgICAvLyB0byBDU1MgcmlnaHQgaGFuZGVkIGNvb3Jkc1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBwcm90ZWN0ZWQgX2dldEh0bWxDb250ZW50Q3NzTWF0cml4KG1hdHJpeDogTWF0cml4LCB1c2VSaWdodEhhbmRlZFN5c3RlbTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBtYXRyaXgubTtcclxuICAgICAgICAvLyBJbiBhIHJpZ2h0IGhhbmRlZCBjb29yZGluYXRlIHN5c3RlbSwgdGhlIGVsZW1lbnRzIDExIHRvIDE0IGhhdmUgdG8gY2hhbmdlIHRoZWlyIGRpcmVjdGlvblxyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHVzZVJpZ2h0SGFuZGVkU3lzdGVtID8gLTEgOiAxO1xyXG4gICAgICAgIGNvbnN0IG1hdHJpeDNkID0gYG1hdHJpeDNkKCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzBdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzFdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzJdICogLWRpcmVjdGlvbiApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCBlbGVtZW50c1szXSApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCAtIGVsZW1lbnRzWzRdIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIC0gZWxlbWVudHNbNV0gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggZWxlbWVudHNbNl0gICogZGlyZWN0aW9uIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIC0gZWxlbWVudHNbN10gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggZWxlbWVudHNbOF0gKiAtZGlyZWN0aW9uIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzldICogLWRpcmVjdGlvbiApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCBlbGVtZW50c1sxMF0gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggZWxlbWVudHNbMTFdICogZGlyZWN0aW9uIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzEyXSAqIGRpcmVjdGlvbiApXHJcbiAgICAgICAgfSwke1xyXG4gICAgICAgICAgICB0aGlzLl9lcHNpbG9uKCBlbGVtZW50c1sxM10gKiBkaXJlY3Rpb24gKVxyXG4gICAgICAgIH0sJHtcclxuICAgICAgICAgICAgdGhpcy5fZXBzaWxvbiggZWxlbWVudHNbMTRdICogZGlyZWN0aW9uIClcclxuICAgICAgICB9LCR7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vwc2lsb24oIGVsZW1lbnRzWzE1XSApXHJcbiAgICAgICAgfSlgO1xyXG4gICAgICAgIHJldHVybiBtYXRyaXgzZDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldFRyYW5zZm9ybWF0aW9uTWF0cml4KGh0bWxNZXNoOiBIdG1sTWVzaCwgdXNlUmlnaHRIYW5kZWRTeXN0ZW06IGJvb2xlYW4pOiBNYXRyaXgge1xyXG4gICAgICAgIC8vIEdldCB0aGUgY2FtZXJhIHdvcmxkIG1hdHJpeFxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgY2FtZXJhIHdvcmxkIG1hdHJpeCBpcyB1cCB0byBkYXRlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jYW1lcmFXb3JsZE1hdHJpeCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFXb3JsZE1hdHJpeCA9IGh0bWxNZXNoLmdldFNjZW5lKCkuYWN0aXZlQ2FtZXJhPy5nZXRXb3JsZE1hdHJpeCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX2NhbWVyYVdvcmxkTWF0cml4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXguSWRlbnRpdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9iamVjdFdvcmxkTWF0cml4ID0gaHRtbE1lc2guZ2V0V29ybGRNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgLy8gU2NhbGUgdGhlIG9iamVjdCBtYXRyaXggYnkgdGhlIGJhc2Ugc2NhbGUgZmFjdG9yIGZvciB0aGUgbWVzaFxyXG4gICAgICAgIC8vIHdoaWNoIGlzIHRoZSByYXRpbyBvZiB0aGUgbWVzaCB3aWR0aC9oZWlnaHQgdG8gdGhlIHJlbmRlcmVyXHJcbiAgICAgICAgLy8gd2lkdGgvaGVpZ2h0IGRpdmlkZWQgYnkgdGhlIGJhYnlsb24gdW5pdHMgdG8gcGl4ZWxzIHJhdGlvXHJcbiAgICAgICAgbGV0IHdpZHRoU2NhbGVGYWN0b3IgPSAxO1xyXG4gICAgICAgIGxldCBoZWlnaHRTY2FsZUZhY3RvciA9IDE7XHJcbiAgICAgICAgaWYgKGh0bWxNZXNoLnNvdXJjZVdpZHRoICYmIGh0bWxNZXNoLnNvdXJjZUhlaWdodCkge1xyXG4gICAgICAgICAgICB3aWR0aFNjYWxlRmFjdG9yID0gaHRtbE1lc2gud2lkdGghIC8gKGh0bWxNZXNoLnNvdXJjZVdpZHRoIC8gQmFieWxvblVuaXRzVG9QaXhlbHMpO1xyXG4gICAgICAgICAgICBoZWlnaHRTY2FsZUZhY3RvciA9IGh0bWxNZXNoLmhlaWdodCEgLyAoaHRtbE1lc2guc291cmNlSGVpZ2h0IC8gQmFieWxvblVuaXRzVG9QaXhlbHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXBwbHkgdGhlIHNjYWxlIHRvIHRoZSBvYmplY3QncyB3b3JsZCBtYXRyaXguICBOb3RlIHdlIGFyZW4ndCBzY2FsaW5nXHJcbiAgICAgICAgLy8gdGhlIG9iamVjdCwganVzdCBnZXR0aW5nIGEgbWF0cml4IGFzIHRob3VnaCBpdCB3ZXJlIHNjYWxlZCwgc28gd2UgY2FuXHJcbiAgICAgICAgLy8gc2NhbGUgdGhlIGNvbnRlbnRcclxuICAgICAgICBjb25zdCBzY2FsZVRyYW5zZm9ybSA9IHRoaXMuX3RlbXAuc2NhbGVUcmFuc2Zvcm07XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb25UcmFuc2Zvcm0gPSB0aGlzLl90ZW1wLnJvdGF0aW9uVHJhbnNmb3JtO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uVHJhbnNmb3JtID0gdGhpcy5fdGVtcC5wb3NpdGlvblRyYW5zZm9ybTtcclxuICAgICAgICBjb25zdCBzY2FsZWRBbmRUcmFuc2xhdGVkT2JqZWN0TWF0cml4ID0gdGhpcy5fdGVtcC5vYmplY3RNYXRyaXg7XHJcblxyXG4gICAgICAgIG9iamVjdFdvcmxkTWF0cml4LmRlY29tcG9zZShzY2FsZVRyYW5zZm9ybSwgcm90YXRpb25UcmFuc2Zvcm0sIHBvc2l0aW9uVHJhbnNmb3JtKTtcclxuICAgICAgICBzY2FsZVRyYW5zZm9ybS54ICo9IHdpZHRoU2NhbGVGYWN0b3I7XHJcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm0ueSAqPSBoZWlnaHRTY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgTWF0cml4LkNvbXBvc2VUb1JlZihzY2FsZVRyYW5zZm9ybSwgcm90YXRpb25UcmFuc2Zvcm0sIHBvc2l0aW9uVHJhbnNmb3JtLCBzY2FsZWRBbmRUcmFuc2xhdGVkT2JqZWN0TWF0cml4KTtcclxuXHJcbiAgICAgICAgLy8gQWRqdXN0IGRpcmVjdGlvbiBvZiAxMiBhbmQgMTMgb2YgdGhlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBiYXNlZCBvbiB0aGUgaGFuZGVkbmVzcyBvZiB0aGUgc3lzdGVtXHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdXNlUmlnaHRIYW5kZWRTeXN0ZW0gPyAtMSA6IDE7XHJcbiAgICAgICAgLy8gQWRqdXN0IHRyYW5zbGF0aW9uIHZhbHVlcyB0byBiZSBmcm9tIGNhbWVyYSB2cyB3b3JsZCBvcmlnaW5cclxuICAgICAgICAvLyBOb3RlIHRoYXQgd2UgYXJlIGFsc28gYWRqdXN0aW5nIHRoZXNlIHZhbHVlcyB0byBiZSBwaXhlbHMgdnMgQmFieWxvbiB1bml0c1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gaHRtbE1lc2guZ2V0QWJzb2x1dGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHNjYWxlZEFuZFRyYW5zbGF0ZWRPYmplY3RNYXRyaXguc2V0Um93RnJvbUZsb2F0cyhcclxuICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgKC10aGlzLl9jYW1lcmFXb3JsZE1hdHJpeC5tWzEyXSArIHBvc2l0aW9uLngpICogQmFieWxvblVuaXRzVG9QaXhlbHMgKiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICgtdGhpcy5fY2FtZXJhV29ybGRNYXRyaXgubVsxM10gKyBwb3NpdGlvbi55KSAqIEJhYnlsb25Vbml0c1RvUGl4ZWxzICogZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAodGhpcy5fY2FtZXJhV29ybGRNYXRyaXgubVsxNF0gLSBwb3NpdGlvbi56KSAqIEJhYnlsb25Vbml0c1RvUGl4ZWxzLFxyXG4gICAgICAgICAgICB0aGlzLl9jYW1lcmFXb3JsZE1hdHJpeC5tWzE1XSAqIDAuMDAwMDEgKiBCYWJ5bG9uVW5pdHNUb1BpeGVsc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBvdGhlciB2YWx1ZXMgdG8gYmUgcGl4ZWxzIHZzIEJhYnlsb24gdW5pdHNcclxuICAgICAgICBzY2FsZWRBbmRUcmFuc2xhdGVkT2JqZWN0TWF0cml4Lm11bHRpcGx5QXRJbmRleCgzLCBCYWJ5bG9uVW5pdHNUb1BpeGVscyk7XHJcbiAgICAgICAgc2NhbGVkQW5kVHJhbnNsYXRlZE9iamVjdE1hdHJpeC5tdWx0aXBseUF0SW5kZXgoNywgQmFieWxvblVuaXRzVG9QaXhlbHMpO1xyXG4gICAgICAgIHNjYWxlZEFuZFRyYW5zbGF0ZWRPYmplY3RNYXRyaXgubXVsdGlwbHlBdEluZGV4KDExLCBCYWJ5bG9uVW5pdHNUb1BpeGVscyk7XHJcblxyXG4gICAgICAgIHJldHVybiBzY2FsZWRBbmRUcmFuc2xhdGVkT2JqZWN0TWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfcmVuZGVySHRtbE1lc2goaHRtbE1lc2g6IEh0bWxNZXNoLCB1c2VSaWdodEhhbmRlZFN5c3RlbTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghaHRtbE1lc2guZWxlbWVudCB8fCAhaHRtbE1lc2guZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICAgICAgICAvLyBub3RoaW5nIHRvIHJlbmRlciwgc28gYmFpbFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXZSBuZWVkIHRvIGVuc3VyZSBodG1sIG1lc2ggZGF0YSBpcyBpbml0aWFsaXplZCBiZWZvcmVcclxuICAgICAgICAvLyBjb21wdXRpbmcgdGhlIGJhc2Ugc2NhbGUgZmFjdG9yXHJcbiAgICAgICAgbGV0IGh0bWxNZXNoRGF0YSA9IHRoaXMuX2NhY2hlLmh0bWxNZXNoRGF0YS5nZXQoaHRtbE1lc2gpO1xyXG4gICAgICAgIGlmICghaHRtbE1lc2hEYXRhKSB7XHJcbiAgICAgICAgICAgIGh0bWxNZXNoRGF0YSA9IHsgc3R5bGU6IFwiXCIgfTtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaGUuaHRtbE1lc2hEYXRhLnNldChodG1sTWVzaCwgaHRtbE1lc2hEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbWVyYUVsZW1lbnQgPSBodG1sTWVzaC5faXNDYW52YXNPdmVybGF5ID8gdGhpcy5fb3ZlcmxheUVsZW1lbnRzPy5jYW1lcmFFbGVtZW50IDogdGhpcy5faW5TY2VuZUVsZW1lbnRzPy5jYW1lcmFFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoaHRtbE1lc2guZWxlbWVudC5wYXJlbnROb2RlICE9PSBjYW1lcmFFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNhbWVyYUVsZW1lbnQhLmFwcGVuZENoaWxkKGh0bWxNZXNoLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGh0bWxNZXNoIGNvbnRlbnQgaGFzIGNoYW5nZWQsIHVwZGF0ZSB0aGUgYmFzZSBzY2FsZSBmYWN0b3JcclxuICAgICAgICBpZiAoaHRtbE1lc2gucmVxdWlyZXNVcGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQmFzZVNjYWxlRmFjdG9yKGh0bWxNZXNoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgdHJhbnNmb3JtYXRpb24gbWF0cml4IGZvciB0aGUgaHRtbCBtZXNoXHJcbiAgICAgICAgY29uc3Qgc2NhbGVkQW5kVHJhbnNsYXRlZE9iamVjdE1hdHJpeCA9IHRoaXMuX2dldFRyYW5zZm9ybWF0aW9uTWF0cml4KGh0bWxNZXNoLCB1c2VSaWdodEhhbmRlZFN5c3RlbSk7XHJcblxyXG4gICAgICAgIGxldCBzdHlsZSA9IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgJHt0aGlzLl9nZXRIdG1sQ29udGVudENzc01hdHJpeChzY2FsZWRBbmRUcmFuc2xhdGVkT2JqZWN0TWF0cml4LCB1c2VSaWdodEhhbmRlZFN5c3RlbSl9YDtcclxuICAgICAgICAvLyBJbiBhIHJpZ2h0IGhhbmRlZCBzeXN0ZW0sIHNjcmVlbnMgYXJlIG9uIHRoZSB3cm9uZyBzaWRlIG9mIHRoZSBtZXNoLCBzbyB3ZSBoYXZlIHRvIHJvdGF0ZSBieSBNYXRoLlBJIHdoaWNoIHJlc3VsdHMgaW4gdGhlIG1hdHJpeDNkIHNlZW4gYmVsb3dcclxuICAgICAgICBzdHlsZSArPSBgJHt1c2VSaWdodEhhbmRlZFN5c3RlbSA/IFwibWF0cml4M2QoLTEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIC0xLCAwLCAwLCAwLCAwLCAxKVwiIDogXCJcIn1gO1xyXG5cclxuICAgICAgICBpZiAoaHRtbE1lc2hEYXRhLnN0eWxlICE9PSBzdHlsZSkge1xyXG4gICAgICAgICAgICBodG1sTWVzaC5lbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHN0eWxlO1xyXG4gICAgICAgICAgICBodG1sTWVzaC5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHN0eWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbE1lc2guX21hcmtBc1VwZGF0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3JlbmRlcihzY2VuZTogU2NlbmUsIGNhbWVyYTogQ2FtZXJhKSB7XHJcbiAgICAgICAgbGV0IG5lZWRzVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZVJpZ2h0SGFuZGVkU3lzdGVtID0gc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW07XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgY29udGFpbmVyIHBvc2l0aW9uIGFuZCBzaXplIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRhaW5lclBvc2l0aW9uSWZOZWVkZWQoKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGEgY2FtZXJhIGNoYW5nZVxyXG4gICAgICAgIGlmICh0aGlzLl9jYW1lcmFNYXRyaXhVcGRhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbWVyYU1hdHJpeFVwZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGNhbWVyYSBwb3NpdGlvbiBoYXMgY2hhbmdlZCwgdGhlbiB3ZSBhbHNvIG5lZWQgdG8gdXBkYXRlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCAhPT0gdGhpcy5fY2FjaGUuY2FtZXJhRGF0YS5wb3NpdGlvbi54IHx8XHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICE9PSB0aGlzLl9jYWNoZS5jYW1lcmFEYXRhLnBvc2l0aW9uLnkgfHxcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogIT09IHRoaXMuX2NhY2hlLmNhbWVyYURhdGEucG9zaXRpb24uelxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWNoZS5jYW1lcmFEYXRhLnBvc2l0aW9uLmNvcHlGcm9tKGNhbWVyYS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIG5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBhIGRwciBjaGFuZ2VcclxuICAgICAgICBpZiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gIT09IHRoaXMuX2xhc3REZXZpY2VQaXhlbFJhdGlvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3REZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgICAgIExvZ2dlci5Mb2coXCJJbiByZW5kZXIgLSBkcHIgY2hhbmdlZDogXCIsIHRoaXMuX2xhc3REZXZpY2VQaXhlbFJhdGlvKTtcclxuICAgICAgICAgICAgbmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IG1lc2hlcyBuZWVkIHRvIGJlIHVwZGF0ZWRcclxuICAgICAgICBjb25zdCBtZXNoZXNOZWVkaW5nVXBkYXRlID0gc2NlbmUubWVzaGVzLmZpbHRlcigobWVzaCkgPT4gKG1lc2ggYXMgYW55KVtcImlzSHRtbE1lc2hcIl0gJiYgKG5lZWRzVXBkYXRlIHx8IChtZXNoIGFzIEh0bWxNZXNoKS5yZXF1aXJlc1VwZGF0ZSkpO1xyXG4gICAgICAgIG5lZWRzVXBkYXRlID0gbmVlZHNVcGRhdGUgfHwgbWVzaGVzTmVlZGluZ1VwZGF0ZS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICBpZiAoIW5lZWRzVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBhIHByb2plY3Rpb24gbWF0cml4IGZvciB0aGUgY2FtZXJhXHJcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbk1hdHJpeCA9IGNhbWVyYS5nZXRQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgY29uc3QgZm92ID0gcHJvamVjdGlvbk1hdHJpeC5tWzVdICogdGhpcy5faGVpZ2h0SGFsZjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlLmNhbWVyYURhdGEuZm92ICE9PSBmb3YpIHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gW3RoaXMuX292ZXJsYXlFbGVtZW50cz8uZG9tRWxlbWVudCwgdGhpcy5faW5TY2VuZUVsZW1lbnRzPy5kb21FbGVtZW50XTtcclxuICAgICAgICAgICAgaWYgKGNhbWVyYS5tb2RlID09IENhbWVyYS5QRVJTUEVDVElWRV9DQU1FUkEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWwgb2Ygc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID0gZm92ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5wZXJzcGVjdGl2ZSA9IGZvdiArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBlcnNwZWN0aXZlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY2FjaGUuY2FtZXJhRGF0YS5mb3YgPSBmb3Y7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIENTUyBtYXRyaXggZm9yIHRoZSBjYW1lcmEgKHdoaWNoIHdpbGwgaW5jbHVkZSBhbnkgY2FtZXJhIHJvdGF0aW9uKVxyXG4gICAgICAgIGlmIChjYW1lcmEucGFyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNhbWVyYS5jb21wdXRlV29ybGRNYXRyaXgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbWVyYU1hdHJpeFdvcmxkID0gdGhpcy5fdGVtcC5jYW1lcmFXb3JsZE1hdHJpeDtcclxuICAgICAgICBjYW1lcmFNYXRyaXhXb3JsZC5jb3B5RnJvbShjYW1lcmEuZ2V0V29ybGRNYXRyaXgoKSk7XHJcbiAgICAgICAgY29uc3QgY2FtZXJhUm90YXRpb25NYXRyaXggPSB0aGlzLl90ZW1wLmNhbWVyYVJvdGF0aW9uTWF0cml4O1xyXG4gICAgICAgIGNhbWVyYU1hdHJpeFdvcmxkLmdldFJvdGF0aW9uTWF0cml4KCkudHJhbnNwb3NlVG9SZWYoY2FtZXJhUm90YXRpb25NYXRyaXgpO1xyXG5cclxuICAgICAgICBjb25zdCBjYW1lcmFNYXRyaXhXb3JsZEFzQXJyYXkgPSB0aGlzLl90ZW1wLmNhbWVyYVdvcmxkTWF0cml4QXNBcnJheTtcclxuICAgICAgICBjYW1lcmFNYXRyaXhXb3JsZC5jb3B5VG9BcnJheShjYW1lcmFNYXRyaXhXb3JsZEFzQXJyYXkpO1xyXG5cclxuICAgICAgICAvLyBGb3IgYSBmZXcgdmFsdWVzLCB3ZSBoYXZlIHRvIGFkanVzdCB0aGUgZGlyZWN0aW9uIGJhc2VkIG9uIHRoZSBoYW5kZWRuZXNzIG9mIHRoZSBzeXN0ZW1cclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB1c2VSaWdodEhhbmRlZFN5c3RlbSA/IDEgOiAtMTtcclxuXHJcbiAgICAgICAgY2FtZXJhTWF0cml4V29ybGRBc0FycmF5WzFdID0gY2FtZXJhUm90YXRpb25NYXRyaXgubVsxXTtcclxuICAgICAgICBjYW1lcmFNYXRyaXhXb3JsZEFzQXJyYXlbMl0gPSBjYW1lcmFSb3RhdGlvbk1hdHJpeC5tWzJdICogZGlyZWN0aW9uO1xyXG4gICAgICAgIGNhbWVyYU1hdHJpeFdvcmxkQXNBcnJheVs0XSA9IGNhbWVyYVJvdGF0aW9uTWF0cml4Lm1bNF0gKiBkaXJlY3Rpb247XHJcbiAgICAgICAgY2FtZXJhTWF0cml4V29ybGRBc0FycmF5WzZdID0gY2FtZXJhUm90YXRpb25NYXRyaXgubVs2XSAqIGRpcmVjdGlvbjtcclxuICAgICAgICBjYW1lcmFNYXRyaXhXb3JsZEFzQXJyYXlbOF0gPSBjYW1lcmFSb3RhdGlvbk1hdHJpeC5tWzhdICogZGlyZWN0aW9uO1xyXG4gICAgICAgIGNhbWVyYU1hdHJpeFdvcmxkQXNBcnJheVs5XSA9IGNhbWVyYVJvdGF0aW9uTWF0cml4Lm1bOV0gKiBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIE1hdHJpeC5Gcm9tQXJyYXlUb1JlZihjYW1lcmFNYXRyaXhXb3JsZEFzQXJyYXksIDAsIGNhbWVyYU1hdHJpeFdvcmxkKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FtZXJhQ1NTTWF0cml4ID0gdGhpcy5fZ2V0Q2FtZXJhQ3NzTWF0cml4KGNhbWVyYU1hdHJpeFdvcmxkKTtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IGNhbWVyYUNTU01hdHJpeDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NhY2hlLmNhbWVyYURhdGEuc3R5bGUgIT09IHN0eWxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IFt0aGlzLl9pblNjZW5lRWxlbWVudHM/LmNhbWVyYUVsZW1lbnQsIHRoaXMuX292ZXJsYXlFbGVtZW50cz8uY2FtZXJhRWxlbWVudF07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWwgb2Ygc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBzdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBzdHlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYWNoZS5jYW1lcmFEYXRhLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBfUmVuZGVyIG9iamVjdHMgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXNoIG9mIG1lc2hlc05lZWRpbmdVcGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVySHRtbE1lc2gobWVzaCBhcyBIdG1sTWVzaCwgdXNlUmlnaHRIYW5kZWRTeXN0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX3VwZGF0ZUJhc2VTY2FsZUZhY3RvcihodG1sTWVzaDogSHRtbE1lc2gpIHtcclxuICAgICAgICAvLyBHZXQgc2NyZWVuIHdpZHRoIGFuZCBoZWlnaHRcclxuICAgICAgICBsZXQgc2NyZWVuV2lkdGggPSB0aGlzLl93aWR0aDtcclxuICAgICAgICBsZXQgc2NyZWVuSGVpZ2h0ID0gdGhpcy5faGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgYXNwZWN0IHJhdGlvc1xyXG4gICAgICAgIGNvbnN0IGh0bWxNZXNoQXNwZWN0UmF0aW8gPSAoaHRtbE1lc2gud2lkdGggfHwgMSkgLyAoaHRtbE1lc2guaGVpZ2h0IHx8IDEpO1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbkFzcGVjdFJhdGlvID0gc2NyZWVuV2lkdGggLyBzY3JlZW5IZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBzY3JlZW4gZGltZW5zaW9ucyBiYXNlZCBvbiBhc3BlY3QgcmF0aW9zXHJcbiAgICAgICAgaWYgKGh0bWxNZXNoQXNwZWN0UmF0aW8gPiBzY3JlZW5Bc3BlY3RSYXRpbykge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgSFRNTCBtZXNoIGlzIHdpZGVyIHJlbGF0aXZlIHRvIGl0cyBoZWlnaHQgdGhhbiB0aGUgc2NyZWVuLCBhZGp1c3QgdGhlIHNjcmVlbiB3aWR0aFxyXG4gICAgICAgICAgICBzY3JlZW5XaWR0aCA9IHNjcmVlbkhlaWdodCAqIGh0bWxNZXNoQXNwZWN0UmF0aW87XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIEhUTUwgbWVzaCBpcyB0YWxsZXIgcmVsYXRpdmUgdG8gaXRzIHdpZHRoIHRoYW4gdGhlIHNjcmVlbiwgYWRqdXN0IHRoZSBzY3JlZW4gaGVpZ2h0XHJcbiAgICAgICAgICAgIHNjcmVlbkhlaWdodCA9IHNjcmVlbldpZHRoIC8gaHRtbE1lc2hBc3BlY3RSYXRpbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBjb250ZW50IHRvIGZpbGwgc2NyZWVuIHNvIHdlIGdldCBtYXggcmVzb2x1dGlvbiB3aGVuIGl0IGlzIHNocnVuayB0byBmaXQgdGhlIG1lc2hcclxuICAgICAgICBodG1sTWVzaC5zZXRDb250ZW50U2l6ZVB4KHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfdXBkYXRlQ29udGFpbmVyUG9zaXRpb25JZk5lZWRlZCgpIHtcclxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGNhbnZhcyBoYXMgbW92ZWQgb24gdGhlIHNjcmVlblxyXG4gICAgICAgIGNvbnN0IGNhbnZhc1JlY3QgPSB0aGlzLl9lbmdpbmUuZ2V0UmVuZGVyaW5nQ2FudmFzQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAvLyBjYW52YXMgcmVjdCBtYXkgYmUgbnVsbCBpZiBsYXlvdXQgbm90IGNvbXBsZXRlXHJcbiAgICAgICAgaWYgKCFjYW52YXNSZWN0KSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKFBvc2l0aW9uVXBkYXRlRmFpbE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3aW5kb3cuc2Nyb2xsWDtcclxuICAgICAgICBjb25zdCBjYW52YXNEb2N1bWVudFRvcCA9IGNhbnZhc1JlY3QudG9wICsgc2Nyb2xsVG9wO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0RvY3VtZW50TGVmdCA9IGNhbnZhc1JlY3QubGVmdCArIHNjcm9sbExlZnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c0NhbnZhc0RvY3VtZW50UG9zaXRpb24udG9wICE9PSBjYW52YXNEb2N1bWVudFRvcCB8fCB0aGlzLl9wcmV2aW91c0NhbnZhc0RvY3VtZW50UG9zaXRpb24ubGVmdCAhPT0gY2FudmFzRG9jdW1lbnRMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzQ2FudmFzRG9jdW1lbnRQb3NpdGlvbi50b3AgPSBjYW52YXNEb2N1bWVudFRvcDtcclxuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNDYW52YXNEb2N1bWVudFBvc2l0aW9uLmxlZnQgPSBjYW52YXNEb2N1bWVudExlZnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBbdGhpcy5faW5TY2VuZUVsZW1lbnRzPy5jb250YWluZXIsIHRoaXMuX292ZXJsYXlFbGVtZW50cz8uY29udGFpbmVyXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb250YWluZXIgb2Ygc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSB0b3AgYW5kIGxlZnQgb2YgdGhlIGNzcyBjb250YWluZXIgdG8gbWF0Y2ggdGhlIGNhbnZhc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyUGFyZW50ID0gY29udGFpbmVyLm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBjb250YWluZXJQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnREb2N1bWVudFRvcCA9IHBhcmVudFJlY3QudG9wICsgc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50RG9jdW1lbnRMZWZ0ID0gcGFyZW50UmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3Rvck1hcmdpbnNBbmRQYWRkaW5nID0gdGhpcy5fZ2V0QW5jZXN0b3JNYXJnaW5zQW5kUGFkZGluZyhjb250YWluZXJQYXJlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgYm9keSBtYXJnaW5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9keU1hcmdpblRvcCA9IHBhcnNlSW50KGJvZHlTdHlsZS5tYXJnaW5Ub3AsIDEwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvZHlNYXJnaW5MZWZ0ID0gcGFyc2VJbnQoYm9keVN0eWxlLm1hcmdpbkxlZnQsIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gYCR7Y2FudmFzRG9jdW1lbnRUb3AgLSBwYXJlbnREb2N1bWVudFRvcCAtIGFuY2VzdG9yTWFyZ2luc0FuZFBhZGRpbmcubWFyZ2luVG9wICsgYW5jZXN0b3JNYXJnaW5zQW5kUGFkZGluZy5wYWRkaW5nVG9wICsgYm9keU1hcmdpblRvcH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9IGAke1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc0RvY3VtZW50TGVmdCAtIHBhcmVudERvY3VtZW50TGVmdCAtIGFuY2VzdG9yTWFyZ2luc0FuZFBhZGRpbmcubWFyZ2luTGVmdCArIGFuY2VzdG9yTWFyZ2luc0FuZFBhZGRpbmcucGFkZGluZ0xlZnQgKyBib2R5TWFyZ2luTGVmdFxyXG4gICAgICAgICAgICAgICAgfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uQ2FtZXJhTWF0cml4Q2hhbmdlZCA9IChjYW1lcmE6IENhbWVyYSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NhbWVyYVdvcmxkTWF0cml4ID0gY2FtZXJhLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5fY2FtZXJhTWF0cml4VXBkYXRlZCA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgX2Vwc2lsb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh2YWx1ZSkgPCAxZS0xMCA/IDAgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgdG90YWwgbWFyZ2lucyBhbmQgcGFkZGluZyBmb3IgYW4gZWxlbWVudCwgZXhjbHVkaW5nIHRoZSBib2R5IGFuZCBkb2N1bWVudCBtYXJnaW5zXHJcbiAgICBwcml2YXRlIF9nZXRBbmNlc3Rvck1hcmdpbnNBbmRQYWRkaW5nKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgbGV0IG1hcmdpblRvcCA9IDA7XHJcbiAgICAgICAgbGV0IG1hcmdpbkxlZnQgPSAwO1xyXG4gICAgICAgIGxldCBwYWRkaW5nVG9wID0gMDtcclxuICAgICAgICBsZXQgcGFkZGluZ0xlZnQgPSAwO1xyXG5cclxuICAgICAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIGVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3AgKz0gcGFyc2VJbnQoc3R5bGUubWFyZ2luVG9wLCAxMCk7XHJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQgKz0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCwgMTApO1xyXG4gICAgICAgICAgICBwYWRkaW5nVG9wICs9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdUb3AsIDEwKTtcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQgKz0gcGFyc2VJbnQoc3R5bGUucGFkZGluZ0xlZnQsIDEwKTtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHsgbWFyZ2luVG9wLCBtYXJnaW5MZWZ0LCBwYWRkaW5nVG9wLCBwYWRkaW5nTGVmdCB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEh0bWxNZXNoUmVuZGVyZXIgfSBmcm9tIFwiLi9odG1sTWVzaFJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IEh0bWxNZXNoIH0gZnJvbSBcIi4vaHRtbE1lc2hcIjtcclxuaW1wb3J0IHsgUG9pbnRlckV2ZW50c0NhcHR1cmVCZWhhdmlvciB9IGZyb20gXCIuL3BvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3JcIjtcclxuaW1wb3J0IHsgRml0U3RyYXRlZ3kgfSBmcm9tIFwiLi9maXRTdHJhdGVneVwiO1xyXG5cclxuLy8gRXhwb3J0IHB1YmxpYyBjbGFzc2VzIGFuZCBmdW5jdGlvbnNcclxuZXhwb3J0IHsgSHRtbE1lc2hSZW5kZXJlciwgSHRtbE1lc2gsIFBvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3IsIEZpdFN0cmF0ZWd5IH07XHJcbiIsImltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5cclxuLy8gQSBjYXB0dXJlIG1hbmFnZW1lbnQgc3lzdGVtIHRvIGVuc3VyZSB0aGF0IHRoZSBjb3JyZWN0IG9iamVjdCBoYXMgdGhlIHBvaW50ZXJcclxuLy8gZXZlbnRzIGJ5IGVsaW1pbmF0aW5nIHJhY2UgY29uZGl0aW9ucyB0aGF0IGNhbiBjYXVzZSB0aGUgcG9pbnRlciBldmVudHMgdG8gYmVcclxuLy8gcmVsZWFzZWQgYnkgYSBkaWZmZXJlbnQgb2JqZWN0IGFmdGVyIHRoZXkgYXJlIGNhcHR1cmVkIGxlYXZpbmcgbm8gb2JqZWN0XHJcbi8vIGFzIHRoZSBvd25lci4gIEl0IGRvZXMgdGhpcyBieSBxdWV1ZWluZyByZXF1ZXN0cyBhbmQgb25seSBhbGxvd2luZ1xyXG4vLyBjYXB0dXJlIHdoZW4gdGhlIGN1cnJlbnQgY2FwdHVyZSBvd25lciByZWxlYXNlcyBwb2ludGVyIGV2ZW50cy5cclxuXHJcbnR5cGUgQ2FwdHVyZVJlbGVhc2VDYWxsYmFjayA9ICgpID0+IHZvaWQ7XHJcblxyXG50eXBlIENhcHR1cmVSZWxlYXNlQ2FsbGJhY2tzID0ge1xyXG4gICAgY2FwdHVyZTogQ2FwdHVyZVJlbGVhc2VDYWxsYmFjaztcclxuICAgIHJlbGVhc2U6IENhcHR1cmVSZWxlYXNlQ2FsbGJhY2s7XHJcbn07XHJcblxyXG5sZXQgQ2FwdHVyZVJlcXVlc3RRdWV1ZTogc3RyaW5nW10gPSBbXTtcclxuXHJcbi8vIEtleSBpcyByZXF1ZXN0IGlkLCB2YWx1ZSBpcyBvYmplY3Qgd2l0aCBjYXB0dXJlIGFuZCByZWxlYXNlIGNhbGxiYWNrc1xyXG5jb25zdCBQZW5kaW5nUmVxdWVzdENhbGxiYWNrczogTWFwPHN0cmluZywgQ2FwdHVyZVJlbGVhc2VDYWxsYmFja3M+ID0gbmV3IE1hcCgpO1xyXG5cclxuLy8gS2VlcCB0cmFjayBvZiByZWxlYXNlIHJlcXVlc3RzIHdpdGggbm8gbWF0Y2hpbmcgY2FwdHVyZSByZXF1ZXN0XHJcbi8vIGluIGNhc2UgdGhlIHJlbGVhc2UgcmVxdWVzdCBhcnJpdmVkIGJlZm9yZSB0aGUgY2FwdHVyZSB0byBhdm9pZFxyXG4vLyB0aGUgY2FwdHVyZSByZXF1ZXN0IG5ldmVyIGdldHRpbmcgcmVsZWFzZWQuXHJcbmxldCBVbm1hdGNoZWRSZWxlYXNlUmVxdWVzdHM6IHN0cmluZ1tdID0gW107XHJcblxyXG5sZXQgQ3VycmVudE93bmVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDsgLy8gQ2FsbGVkIG9uIGZpcnN0IGNhcHR1cmUgb3IgcmVsZWFzZSByZXF1ZXN0XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBpZCBvZiB0aGUgb2JqZWN0IGN1cnJlbnRseSBjYXB0dXJpbmcgcG9pbnRlciBldmVudHNcclxuICogQHJldHVybnMgVGhlIGlkIG9mIHRoZSBvYmplY3QgY3VycmVudGx5IGNhcHR1cmluZyBwb2ludGVyIGV2ZW50c1xyXG4gKiBvciBudWxsIGlmIG5vIG9iamVjdCBpcyBjYXB0dXJpbmcgcG9pbnRlciBldmVudHNcclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGNvbnN0IGdldENhcHR1cmluZ0lkID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIEN1cnJlbnRPd25lcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXF1ZXN0IHRoYXQgdGhlIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBpZCBjYXB0dXJlIHBvaW50ZXIgZXZlbnRzLiAgSWYgdGhlcmUgaXMgbm8gY3VycmVudFxyXG4gKiBvd25lciwgdGhlbiB0aGUgcmVxdWVzdCBpcyBncmFudGVkIGltbWVkaWF0ZWx5LiAgSWYgdGhlcmUgaXMgYSBjdXJyZW50IG93bmVyLCB0aGVuIHRoZSByZXF1ZXN0XHJcbiAqIGlzIHF1ZXVlZCB1bnRpbCB0aGUgY3VycmVudCBvd25lciByZWxlYXNlcyBwb2ludGVyIGV2ZW50cy5cclxuICogQHBhcmFtIHJlcXVlc3RJZCBBbiBpZCB0byBpZGVudGlmeSB0aGUgcmVxdWVzdC4gIFRoaXMgaWQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIHRoZSBjYXB0dXJlXHJcbiAqIHJlcXVlc3Qgd2l0aCB0aGUgcmVsZWFzZSByZXF1ZXN0LlxyXG4gKiBAcGFyYW0gY2FwdHVyZUNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIHJlcXVlc3QgaXMgZ3JhbnRlZCBhbmQgdGhlIG9iamVjdCBpcyBjYXB0dXJpbmdcclxuICogQHBhcmFtIHJlbGVhc2VDYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gY2FsbCB3aGVuIHRoZSBvYmplY3QgaXMgbm8gbG9uZ2VyIGNhcHR1cmluZyBwb2ludGVyIGV2ZW50c1xyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdENhcHR1cmUgPSAocmVxdWVzdElkOiBzdHJpbmcsIGNhcHR1cmVDYWxsYmFjazogQ2FwdHVyZVJlbGVhc2VDYWxsYmFjaywgcmVsZWFzZUNhbGxiYWNrOiBDYXB0dXJlUmVsZWFzZUNhbGxiYWNrKSA9PiB7XHJcbiAgICBEZWJ1Z0xvZyhgSW4gcG9pbnRlckV2ZW50c0NhcHR1cmUucmVxdWVzdENhcHR1cmUgLSBQb2ludGVyIGV2ZW50cyBjYXB0dXJlIHJlcXVlc3RlZCBmb3IgJHtyZXF1ZXN0SWR9YCk7XHJcblxyXG4gICAgLy8gSWYgdGhlcmUgaXMgYSByZWxlYXNlIGZvciB0aGlzIHJlcXVlc3QsIHRoZW4gaWdub3JlIHRoZSByZXF1ZXN0XHJcbiAgICBpZiAoUmVtb3ZlVW5tYXRjaGVkUmVxdWVzdChyZXF1ZXN0SWQpKSB7XHJcbiAgICAgICAgRGVidWdMb2coYEluIHBvaW50ZXJFdmVudHNDYXB0dXJlLnJlcXVlc3RDYXB0dXJlIC0gQ2FwdHVyZSByZXF1ZXN0IG1hdGNoZWQgcHJldmlvdXMgcmVsZWFzZSByZXF1ZXN0ICR7cmVxdWVzdElkfS4gIENhbmNlbGxpbmcgY2FwdHVyZSByZXF1ZXN0YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChyZXF1ZXN0SWQgIT09IEN1cnJlbnRPd25lcikge1xyXG4gICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIG5vdCBhbHJlYWR5IGluIHRoZSBxdWV1ZSwgYWRkIGl0IHRvIHRoZSBxdWV1ZVxyXG4gICAgICAgIEVucXVldWVDYXB0dXJlUmVxdWVzdChyZXF1ZXN0SWQsIGNhcHR1cmVDYWxsYmFjaywgcmVsZWFzZUNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIUN1cnJlbnRPd25lcikge1xyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGN1cnJlbnQgb3duZXIsIGdvIGFoZWFkIGFuZCBncmFudCB0aGUgcmVxdWVzdFxyXG4gICAgICAgIFRyYW5zZmVyUG9pbnRlckV2ZW50c093bmVyc2hpcCgpO1xyXG4gICAgfVxyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3QgaWQgaXMgdGhlIGN1cnJlbnQgb3duZXIsIGRvIG5vdGhpbmdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZWxlYXNlIHBvaW50ZXIgZXZlbnRzIGZyb20gdGhlIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBpZC4gIElmIHRoZSBvYmplY3QgaXMgdGhlIGN1cnJlbnQgb3duZXJcclxuICogdGhlbiBwb2ludGVyIGV2ZW50cyBhcmUgcmVsZWFzZWQgaW1tZWRpYXRlbHkuICBJZiB0aGUgb2JqZWN0IGlzIG5vdCB0aGUgY3VycmVudCBvd25lciwgdGhlbiB0aGVcclxuICogYXNzb2NpYXRlZCBjYXB0dXJlIHJlcXVlc3QgaXMgcmVtb3ZlZCBmcm9tIHRoZSBxdWV1ZS4gIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIGNhcHR1cmUgcmVxdWVzdFxyXG4gKiBpbiB0aGUgcXVldWUsIHRoZW4gdGhlIHJlbGVhc2UgcmVxdWVzdCBpcyBhZGRlZCB0byBhIGxpc3Qgb2YgdW5tYXRjaGVkIHJlbGVhc2UgcmVxdWVzdHMgYW5kIHdpbGxcclxuICogbmVnYXRlIHRoZSBuZXh0IGNhcHR1cmUgcmVxdWVzdCB3aXRoIHRoZSBzYW1lIGlkLiAgVGhpcyBpcyB0byBndWFyZCBhZ2FpbnN0IHRoZSBwb3NzaWJpbGl0eSB0aGF0XHJcbiAqIHRoZSByZWxlYXNlIHJlcXVlc3QgYXJyaXZlZCBiZWZvcmUgdGhlIGNhcHR1cmUgcmVxdWVzdC5cclxuICogQHBhcmFtIHJlcXVlc3RJZCBUaGUgaWQgd2hpY2ggc2hvdWxkIG1hdGNoIHRoZSBpZCBvZiB0aGUgY2FwdHVyZSByZXF1ZXN0XHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0UmVsZWFzZSA9IChyZXF1ZXN0SWQ6IHN0cmluZyB8IG51bGwpID0+IHtcclxuICAgIERlYnVnTG9nKGBJbiBwb2ludGVyRXZlbnRzQ2FwdHVyZS5yZXF1ZXN0UmVsZWFzZSAtIFBvaW50ZXIgZXZlbnRzIHJlbGVhc2UgcmVxdWVzdGVkIGZvciAke3JlcXVlc3RJZH1gKTtcclxuXHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdElkIGlzIHRoZSBjdXJyZW50IGNhcHR1cmUgaG9sZGVyIHJlbGVhc2UgaXRcclxuICAgIGlmICghcmVxdWVzdElkIHx8IHJlcXVlc3RJZCA9PT0gQ3VycmVudE93bmVyKSB7XHJcbiAgICAgICAgVHJhbnNmZXJQb2ludGVyRXZlbnRzT3duZXJzaGlwKCk7XHJcbiAgICB9IGVsc2UgaWYgKENhbmNlbFJlcXVlc3QocmVxdWVzdElkKSkge1xyXG4gICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIGluIHRoZSBxdWV1ZSwgYnV0IG5vdCB0aGUgY3VycmVudCBjYXB0dXJlIGhvbGRlciwgcmVtb3ZlIGl0IGFuZCBpdCdzIGNhbGxiYWNrc1xyXG4gICAgICAgIFBlbmRpbmdSZXF1ZXN0Q2FsbGJhY2tzLmRlbGV0ZShyZXF1ZXN0SWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBEZWJ1Z0xvZyhgSW4gcG9pbnRlckV2ZW50c0NhcHR1cmUucmVxdWVzdFJlbGVhc2UgLSBSZWNlaXZlZCByZWxlYXNlIHJlcXVlc3QgJHtyZXF1ZXN0SWR9IGJ1dCBubyBtYXRjaGluZyBjYXB0dXJlIHJlcXVlc3Qgd2FzIHJlY2VpdmVkYCk7XHJcbiAgICAgICAgLy8gcmVxdWVzdCB3YXMgbm90IGN1cnJlbnQgYW5kIG5vdCBpbiBxdWV1ZSwgbGlrZWx5IGJlY2F1c2Ugd2UgcmVjZWl2ZWQgYSByZWxlYXNlXHJcbiAgICAgICAgLy8gcmVxdWVzdCBiZWZvcmUgdGhlIGNhcHR1cmUuICBBZGQgaXQgdG8gdGhlIHVubWF0Y2hlZCBsaXN0IHRvIGd1YXJkIGFnYWluc3QgdGhpcyBwb3NzaWJpbGl0eVxyXG4gICAgICAgIGlmICghVW5tYXRjaGVkUmVsZWFzZVJlcXVlc3RzLmluY2x1ZGVzKHJlcXVlc3RJZCkpIHtcclxuICAgICAgICAgICAgVW5tYXRjaGVkUmVsZWFzZVJlcXVlc3RzLnB1c2gocmVxdWVzdElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmVsZWFzZSBwb2ludGVyIGV2ZW50cyBmcm9tIHRoZSBjdXJyZW50IG93bmVyXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBjb25zdCByZWxlYXNlQ3VycmVudCA9ICgpID0+IHtcclxuICAgIHJlcXVlc3RSZWxlYXNlKEN1cnJlbnRPd25lcik7XHJcbn07XHJcblxyXG5jb25zdCBFbnF1ZXVlQ2FwdHVyZVJlcXVlc3QgPSAocmVxdWVzdElkOiBzdHJpbmcsIGNhcHR1cmU6IENhcHR1cmVSZWxlYXNlQ2FsbGJhY2ssIHJlbGVhc2U6IENhcHR1cmVSZWxlYXNlQ2FsbGJhY2spID0+IHtcclxuICAgIERlYnVnTG9nKGBJbiBwb2ludGVyRXZlbnRzQ2FwdHVyZS5lbnF1ZXVlQ2FwdHVyZVJlcXVlc3QgLSBFbnF1ZXVlaW5nIGNhcHR1cmUgcmVxdWVzdCBmb3IgICR7cmVxdWVzdElkfWApO1xyXG4gICAgaWYgKCFDYXB0dXJlUmVxdWVzdFF1ZXVlLmluY2x1ZGVzKHJlcXVlc3RJZCkpIHtcclxuICAgICAgICBDYXB0dXJlUmVxdWVzdFF1ZXVlLnB1c2gocmVxdWVzdElkKTtcclxuICAgICAgICBQZW5kaW5nUmVxdWVzdENhbGxiYWNrcy5zZXQocmVxdWVzdElkLCB7IGNhcHR1cmUsIHJlbGVhc2UgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBSZW1vdmVzIHRoZSByZXF1ZXN0IGZyb20gdGhlIHF1ZXVlIGlmIGl0IGV4aXN0cy4gIFJldHVybnMgdHJ1ZVxyXG4vLyBpZiB0aGUgcmVxdWVzdCB3YXMgZm91bmQgYW5kIHJlbW92ZWQsIG90aGVyd2lzZSBmYWxzZVxyXG5jb25zdCBDYW5jZWxSZXF1ZXN0ID0gKHJlcXVlc3RJZDogc3RyaW5nIHwgbnVsbCkgPT4ge1xyXG4gICAgbGV0IHJlbW92ZWQgPSBmYWxzZTtcclxuICAgIENhcHR1cmVSZXF1ZXN0UXVldWUgPSBDYXB0dXJlUmVxdWVzdFF1ZXVlLmZpbHRlcigoaWQpID0+IHtcclxuICAgICAgICBpZiAoaWQgIT09IHJlcXVlc3RJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgRGVidWdMb2coYEluIHBvaW50ZXJFdmVudHNDYXB0dXJlLmNhbmNlbFJlcXVlc3QgLSBDYW5jZWxpbmcgcG9pbnRlciBldmVudHMgY2FwdHVyZSByZXF1ZXN0ICR7cmVxdWVzdElkfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVtb3ZlZDtcclxufTtcclxuXHJcbmNvbnN0IFJlbW92ZVVubWF0Y2hlZFJlcXVlc3QgPSAocmVxdWVzdElkOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCByZW1vdmVkID0gZmFsc2U7XHJcbiAgICBVbm1hdGNoZWRSZWxlYXNlUmVxdWVzdHMgPSBVbm1hdGNoZWRSZWxlYXNlUmVxdWVzdHMuZmlsdGVyKChpZCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCAhPT0gcmVxdWVzdElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVtb3ZlZDtcclxufTtcclxuXHJcbmNvbnN0IFRyYW5zZmVyUG9pbnRlckV2ZW50c093bmVyc2hpcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld093bmVySWQgPSBOZXh0Q2FwdHVyZVJlcXVlc3QoKTtcclxuICAgIERlYnVnTG9nKGBJbiBwb2ludGVyRXZlbnRzQ2FwdHVyZS50cmFuc2ZlclBvaW50ZXJFdmVudHNPd25lcnNoaXAgLSBUcmFuc2ZlcnJyaW5nIHBvaW50ZXIgZXZlbnRzIGZyb20gJHtDdXJyZW50T3duZXJ9IHRvICR7bmV3T3duZXJJZH1gKTtcclxuICAgIC8vIFJlbGVhc2UgdGhlIGN1cnJlbnQgb3duZXJcclxuICAgIERvUmVsZWFzZSgpO1xyXG4gICAgaWYgKG5ld093bmVySWQpIHtcclxuICAgICAgICBEb0NhcHR1cmUobmV3T3duZXJJZCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBEb1JlbGVhc2UgPSAoKSA9PiB7XHJcbiAgICBEZWJ1Z0xvZyhgSW4gcG9pbnRlckV2ZW50c0NhcHR1cmUuZG9SZWxlYXNlIC0gUmVsZWFzaW5nIHBvaW50ZXIgZXZlbnRzIGZyb20gJHtDdXJyZW50T3duZXJ9YCk7XHJcbiAgICBpZiAoQ3VycmVudE93bmVyKSB7XHJcbiAgICAgICAgLy8gY2FsbCB0aGUgcmVsZWFzZSBjYWxsYmFja1xyXG4gICAgICAgIFBlbmRpbmdSZXF1ZXN0Q2FsbGJhY2tzLmdldChDdXJyZW50T3duZXIpPy5yZWxlYXNlKCk7XHJcbiAgICAgICAgLy8gQW5kIHJlbW92ZSB0aGUgY2FsbGJhY2tzXHJcbiAgICAgICAgUGVuZGluZ1JlcXVlc3RDYWxsYmFja3MuZGVsZXRlKEN1cnJlbnRPd25lcik7XHJcbiAgICAgICAgQ3VycmVudE93bmVyID0gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IERvQ2FwdHVyZSA9IChuZXdPd25lcklkOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChuZXdPd25lcklkKSB7XHJcbiAgICAgICAgLy8gY2FsbCB0aGUgY2FwdHVyZSBjYWxsYmFja1xyXG4gICAgICAgIFBlbmRpbmdSZXF1ZXN0Q2FsbGJhY2tzLmdldChuZXdPd25lcklkKT8uY2FwdHVyZSgpO1xyXG4gICAgfVxyXG4gICAgQ3VycmVudE93bmVyID0gbmV3T3duZXJJZDtcclxuICAgIERlYnVnTG9nKGBJbiBwb2ludGVyRXZlbnRzQ2FwdHVyZS5kb0NhcHR1cmUgLSBQb2ludGVyIGV2ZW50cyBub3cgY2FwdHVyZWQgYnkgJHtuZXdPd25lcklkfWApO1xyXG59O1xyXG5cclxuY29uc3QgTmV4dENhcHR1cmVSZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIENhcHR1cmVSZXF1ZXN0UXVldWUubGVuZ3RoID4gMCA/IENhcHR1cmVSZXF1ZXN0UXVldWUuc2hpZnQoKSA6IG51bGw7XHJcbn07XHJcblxyXG4vLyAjcmVnaW9uIERlYnVnZ2luZyBzdXBwb3J0XHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuICAgICAgICBcInBvaW50ZXItZXZlbnRzLWNhcHR1cmUtZGVidWdcIjogYm9vbGVhbiB8IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IERlYnVnTG9nID0gKG1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgLy8gSWYgd2UgYXJlIHJ1bm5uaW5nIGluIGEgdGVzdCBydW5uZXIgKGluIG5vZGUsIHNvIHdpbmRvdyBpcyBub3QgZGVmaW5lZClcclxuICAgIC8vIG9yIGlmIHRoZSBkZWJ1ZyBmbGFnIGlzIHNldCwgdGhlbiBsb2cgdGhlIG1lc3NhZ2VcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIHx8IHdpbmRvd1tcInBvaW50ZXItZXZlbnRzLWNhcHR1cmUtZGVidWdcIl0pIHtcclxuICAgICAgICBUb29scy5Mb2coXHJcbiAgICAgICAgICAgIGAke3BlcmZvcm1hbmNlLm5vdygpfSAtIGdhbWUuc2NlbmUucG9pbnRlckV2ZW50cyAtICR7bWVzc2FnZX1cXG5jdXJyZW50T3duZXI6ICR7Q3VycmVudE93bmVyfVxcbnF1ZXVlOiAke0NhcHR1cmVSZXF1ZXN0UXVldWV9XFxudW5tYXRjaGVkOiAke1VubWF0Y2hlZFJlbGVhc2VSZXF1ZXN0c31gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuLy8gI2VuZHJlZ2lvbiBEZWJ1Z2dpbmcgc3VwcG9ydFxyXG4iLCJpbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBCZWhhdmlvciB9IGZyb20gXCJjb3JlL0JlaGF2aW9ycy9iZWhhdmlvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcImNvcmUvTWlzYy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgcmVxdWVzdENhcHR1cmUsIHJlcXVlc3RSZWxlYXNlLCByZWxlYXNlQ3VycmVudCwgZ2V0Q2FwdHVyaW5nSWQgfSBmcm9tIFwiLi9wb2ludGVyRXZlbnRzQ2FwdHVyZVwiO1xyXG5cclxuLy8gTW9kdWxlIGxldmVsIHZhcmlhYmxlIGZvciBob2xkaW5nIHRoZSBjdXJyZW50IHNjZW5lXHJcbmxldCBMb2NhbFNjZW5lOiBTY2VuZSB8IG51bGwgPSBudWxsO1xyXG5cclxuLy8gTW9kdWxlIGxldmVsIHZhcmlhYmxlIHRvIGhvbGQgdGhlIGNvdW50IG9mIGJlaGF2aW9yIGluc3RhbmNlcyB0aGF0IGFyZSBjdXJyZW50bHkgY2FwdHVyaW5nIHBvaW50ZXIgZXZlbnRzXHJcbi8vIG9uIGVudHJ5LiAgVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB3ZSBuZWVkIHRvIHN0YXJ0IG9yIHN0b3Agb2JzZXJ2aW5nIHBvaW50ZXIgbW92ZW1lbnQuXHJcbmxldCBDYXB0dXJlT25FbnRlckNvdW50ID0gMDtcclxuXHJcbi8vIE1hcCB1c2VkIHRvIHN0b3JlIGluc3RhbmNlIG9mIHRoZSBQb2ludGVyRXZlbnRzQ2FwdHVyZUJlaGF2aW9yIGZvciBhIG1lc2hcclxuLy8gV2UgZG8gdGhpcyBiZWNhdXNlIHRoaXMgZ2V0cyBjaGVja2VkIG9uIHBvaW50ZXIgbW92ZSBhbmQgd2UgZG9uJ3Qgd2FudCB0b1xyXG4vLyB1c2UgZ2V0QmVoYXZpb3JCeU5hbWUoKSBiZWNhdXNlIHRoYXQgaXMgYSBsaW5lYXIgc2VhcmNoXHJcbmNvbnN0IE1lc2hUb0JlaGF2aW9yTWFwID0gbmV3IFdlYWtNYXA8QWJzdHJhY3RNZXNoLCBQb2ludGVyRXZlbnRzQ2FwdHVyZUJlaGF2aW9yPigpO1xyXG5cclxuY29uc3QgU3RhcnRDYXB0dXJlT25FbnRlciA9IChzY2VuZTogU2NlbmUpID0+IHtcclxuICAgIC8vIElmIHdlIGFyZSBub3QgaW4gYSBicm93c2VyLCBkbyBub3RoaW5nXHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKENhcHR1cmVPbkVudGVyQ291bnQgPT09IDApIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgT25Qb2ludGVyTW92ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgT25Qb2ludGVyTW92ZSk7XHJcbiAgICAgICAgTG9jYWxTY2VuZSA9IExvY2FsU2NlbmUgPz8gc2NlbmU7XHJcbiAgICAgICAgTG9nZ2VyLkxvZyhcIlBvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3I6IFN0YXJ0aW5nIG9ic2VydmF0aW9uIG9mIHBvaW50ZXIgbW92ZSBldmVudHMuXCIpO1xyXG4gICAgICAgIExvY2FsU2NlbmUub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQoRG9TdG9wQ2FwdHVyZU9uRW50ZXIpO1xyXG4gICAgfVxyXG4gICAgQ2FwdHVyZU9uRW50ZXJDb3VudCsrO1xyXG59O1xyXG5cclxuY29uc3QgRG9TdG9wQ2FwdHVyZU9uRW50ZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgT25Qb2ludGVyTW92ZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBPblBvaW50ZXJNb3ZlKTtcclxuICAgIExvY2FsU2NlbmUgPSBudWxsO1xyXG4gICAgTG9nZ2VyLkxvZyhcIlBvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3I6IFN0b3BwaW5nIG9ic2VydmF0aW9uIG9mIHBvaW50ZXIgbW92ZSBldmVudHMuXCIpO1xyXG4gICAgQ2FwdHVyZU9uRW50ZXJDb3VudCA9IDA7XHJcbn07XHJcblxyXG5jb25zdCBTdG9wQ2FwdHVyZU9uRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBJZiB3ZSBhcmUgbm90IGluIGEgYnJvd3NlciwgZG8gbm90aGluZ1xyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB3ZSBhcmUgbm90IG9ic2VydmluZyBwb2ludGVyIG1vdmVtZW50LCBkbyBub3RoaW5nXHJcbiAgICBpZiAoIUxvY2FsU2NlbmUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgQ2FwdHVyZU9uRW50ZXJDb3VudC0tO1xyXG4gICAgaWYgKENhcHR1cmVPbkVudGVyQ291bnQgPD0gMCkge1xyXG4gICAgICAgIERvU3RvcENhcHR1cmVPbkVudGVyKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBNb2R1bGUgbGV2ZWwgZnVuY3Rpb24gdXNlZCB0byBkZXRlcm1pbmUgaWYgYW4gZW50ZXJlZCBtZXNoIHNob3VsZCBjYXB0dXJlIHBvaW50ZXIgZXZlbnRzXHJcbmNvbnN0IE9uUG9pbnRlck1vdmUgPSAoZXZ0OiBQb2ludGVyRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIUxvY2FsU2NlbmUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FudmFzUmVjdCA9IExvY2FsU2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyaW5nQ2FudmFzQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKCFjYW52YXNSZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCB0aGUgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGNsaWVudCBYIGFuZCBZIGZyb20gZWl0aGVyIHRoZSBwb2ludGVyIGV2ZW50IG9yIGZyb20gdGhlXHJcbiAgICAvLyBUb3VjaEV2ZW50IHRvdWNoXHJcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IFwidG91Y2hlc1wiIGluIGV2dCA/IGV2dC50b3VjaGVzWzBdIDogZXZ0O1xyXG5cclxuICAgIC8vIGdldCB0aGUgcGlja2VkIG1lc2gsIGlmIGFueVxyXG4gICAgY29uc3QgcG9pbnRlclNjcmVlblggPSBjbGllbnRYIC0gY2FudmFzUmVjdC5sZWZ0O1xyXG4gICAgY29uc3QgcG9pbnRlclNjcmVlblkgPSBjbGllbnRZIC0gY2FudmFzUmVjdC50b3A7XHJcblxyXG4gICAgbGV0IHBvaW50ZXJDYXB0dXJlQmVoYXZpb3I6IFBvaW50ZXJFdmVudHNDYXB0dXJlQmVoYXZpb3IgfCB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBwaWNrUmVzdWx0ID0gTG9jYWxTY2VuZS5waWNrKHBvaW50ZXJTY3JlZW5YLCBwb2ludGVyU2NyZWVuWSwgKG1lc2gpID0+IHtcclxuICAgICAgICAvLyBJZiB0aGUgbWVzaCBoYXMgYW4gaW5zdGFuY2Ugb2YgUG9pbnRlckV2ZW50c0NhcHR1cmVCZWhhdmlvciBhdHRhY2hlZCB0byBpdCxcclxuICAgICAgICAvLyBhbmQgY2FwdHVyZSBvbiBwb2ludGVyIGVudGVyIGlzIHRydWUsIHRoZW4gd2Ugd2FudCB0byBwaWNrIGl0XHJcbiAgICAgICAgY29uc3QgcG9pbnRlckNhcHR1cmVCZWhhdmlvciA9IE1lc2hUb0JlaGF2aW9yTWFwLmdldChtZXNoKTtcclxuICAgICAgICByZXR1cm4gbWVzaC5pc0VuYWJsZWQoKSAmJiB0eXBlb2YgcG9pbnRlckNhcHR1cmVCZWhhdmlvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwb2ludGVyQ2FwdHVyZUJlaGF2aW9yLl9jYXB0dXJlT25Qb2ludGVyRW50ZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGlja2VkTWVzaDogQWJzdHJhY3RNZXNoIHwgbnVsbDtcclxuICAgIGlmIChwaWNrUmVzdWx0LmhpdCkge1xyXG4gICAgICAgIHBpY2tlZE1lc2ggPSBwaWNrUmVzdWx0LnBpY2tlZE1lc2g7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBpY2tlZE1lc2ggPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcHR1cmluZ0lkQXNJbnQgPSBwYXJzZUludChnZXRDYXB0dXJpbmdJZCgpIHx8IFwiXCIpO1xyXG5cclxuICAgIC8vIGlmIHRoZSBwaWNrZWQgbWVzaCBpcyB0aGUgY3VycmVudCBjYXB0dXJpbmcgbWVzaCwgZG8gbm90aGluZ1xyXG4gICAgaWYgKHBpY2tlZE1lc2ggJiYgcGlja2VkTWVzaC51bmlxdWVJZCA9PT0gY2FwdHVyaW5nSWRBc0ludCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGVyZSBpcyBhIGNhcHR1cmluZyBtZXNoIGFuZCBpdCBpcyBub3QgdGhlIGN1cnJlbnQgcGlja2VkIG1lc2gsIG9yIG5vXHJcbiAgICAvLyBtZXNoIGlzIHBpY2tlZCwgcmVsZWFzZSB0aGUgY2FwdHVyaW5nIG1lc2hcclxuICAgIGlmIChjYXB0dXJpbmdJZEFzSW50ICYmICghcGlja2VkTWVzaCB8fCBwaWNrZWRNZXNoLnVuaXF1ZUlkICE9PSBjYXB0dXJpbmdJZEFzSW50KSkge1xyXG4gICAgICAgIHJlbGVhc2VDdXJyZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBwaWNrZWQgbWVzaCBhbmQgaXQgaXMgbm90IHRoZSBjdXJyZW50IGNhcHR1cmluZyBtZXNoLCBjYXB0dXJlXHJcbiAgICAvLyB0aGUgcG9pbnRlciBldmVudHMuICBOb3RlIHRoYXQgdGhlIGN1cnJlbnQgY2FwdHVyaW5nIG1lc2ggaGFzIGFscmVhZHkgYmVlblxyXG4gICAgLy8gcmVsZWFzZWQgYWJvdmVcclxuICAgIGlmIChwaWNrZWRNZXNoKSB7XHJcbiAgICAgICAgcG9pbnRlckNhcHR1cmVCZWhhdmlvciA9IE1lc2hUb0JlaGF2aW9yTWFwLmdldChwaWNrZWRNZXNoKTtcclxuICAgICAgICBwb2ludGVyQ2FwdHVyZUJlaGF2aW9yIS5jYXB0dXJlUG9pbnRlckV2ZW50cygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEJlaGF2aW9yIGZvciBhbnkgY29udGVudCB0aGF0IGNhbiBjYXB0dXJlIHBvaW50ZXIgZXZlbnRzLCBpLmUuIGJ5cGFzcyB0aGUgQmFieWxvbiBwb2ludGVyIGV2ZW50IGhhbmRsaW5nXHJcbiAqIGFuZCByZWNlaXZlIHBvaW50ZXIgZXZlbnRzIGRpcmVjdGx5LiAgSXQgd2lsbCByZWdpc3RlciB0aGUgY2FwdHVyZSB0cmlnZ2VycyBhbmQgbmVnb3RpYXRlIHRoZSBjYXB0dXJlIGFuZFxyXG4gKiByZWxlYXNlIG9mIHBvaW50ZXIgZXZlbnRzLiAgQ3VyZXJudGx5IHRoaXMgYXBwbGllcyBvbmx5IHRvIEh0bWxNZXNoXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9pbnRlckV2ZW50c0NhcHR1cmVCZWhhdmlvciBpbXBsZW1lbnRzIEJlaGF2aW9yPEFic3RyYWN0TWVzaD4ge1xyXG4gICAgLyoqIGdldHMgb3Igc2V0cyBiZWhhdmlvcidzIG5hbWUgKi9cclxuICAgIHB1YmxpYyBuYW1lID0gXCJQb2ludGVyRXZlbnRzQ2FwdHVyZUJlaGF2aW9yXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXR0YWNoZWRNZXNoOiBBYnN0cmFjdE1lc2ggfCBudWxsO1xyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9jYXB0dXJlT25Qb2ludGVyRW50ZXI6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIG1lc2ggdGhhdCB0aGUgYmVoYXZpb3IgaXMgYXR0YWNoZWQgdG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhdHRhY2hlZE1lc2goKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaGVkTWVzaDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGF0dGFjaGVkTWVzaCh2YWx1ZTogQWJzdHJhY3RNZXNoIHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX2F0dGFjaGVkTWVzaCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2NhcHR1cmVDYWxsYmFjazogKCkgPT4gdm9pZCxcclxuICAgICAgICBwcml2YXRlIF9yZWxlYXNlQ2FsbGJhY2s6ICgpID0+IHZvaWQsXHJcbiAgICAgICAgeyBjYXB0dXJlT25Qb2ludGVyRW50ZXIgPSB0cnVlIH0gPSB7fVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNoZWRNZXNoID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jYXB0dXJlT25Qb2ludGVyRW50ZXIgPSBjYXB0dXJlT25Qb2ludGVyRW50ZXI7XHJcblxyXG4gICAgICAgIC8vIFdhcm4gaWYgd2UgYXJlIG5vdCBpbiBhIGJyb3dzZXJcclxuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5XYXJuKGBDcmVhdGluZyBhbiBpbnN0YW5jZSBvZiBQb2ludGVyRXZlbnRzQ2FwdHVyZUJlaGF2aW9yIG91dHNpZGUgb2YgYSBicm93c2VyLiAgVGhlIGJlaGF2aW9yIHdpbGwgbm90IHdvcmsuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGlmIHRoZSBiZWhhdmlvciBzaG91bGQgY2FwdHVyZSBwb2ludGVyIGV2ZW50cyB3aGVuIHRoZSBwb2ludGVyIGVudGVycyB0aGUgbWVzaFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGNhcHR1cmVPblBvaW50ZXJFbnRlcihjYXB0dXJlT25Qb2ludGVyRW50ZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FwdHVyZU9uUG9pbnRlckVudGVyID09PSBjYXB0dXJlT25Qb2ludGVyRW50ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYXB0dXJlT25Qb2ludGVyRW50ZXIgPSBjYXB0dXJlT25Qb2ludGVyRW50ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2F0dGFjaGVkTWVzaCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2FwdHVyZU9uUG9pbnRlckVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBTdGFydENhcHR1cmVPbkVudGVyKHRoaXMuX2F0dGFjaGVkTWVzaC5nZXRTY2VuZSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFN0b3BDYXB0dXJlT25FbnRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGJlaGF2aW9yIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIChiZWZvcmUgYXR0YWNoaW5nIGl0IHRvIGEgdGFyZ2V0KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYmVoYXZpb3IgaXMgYXR0YWNoZWQgdG8gYSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSBtZXNoIGRlZmluZXMgdGhlIHRhcmdldCB3aGVyZSB0aGUgYmVoYXZpb3IgaXMgYXR0YWNoZWQgdG9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGF0dGFjaChtZXNoOiBBYnN0cmFjdE1lc2gpIHtcclxuICAgICAgICAvLyBBZGQgYSByZWZlcmVuY2UgdG8gdGhpcyBiZWhhdmlvciBvbiB0aGUgbWVzaC4gIFdlIGRvIHRoaXMgc28gd2UgY2FuIGdldCBhXHJcbiAgICAgICAgLy8gcmVmZXJlbmNlIHRvIHRoZSBiZWhhdmlvciBpbiB0aGUgb25Qb2ludGVyTW92ZSBmdW5jdGlvbiB3aXRob3V0IHJlbHlpbmcgb25cclxuICAgICAgICAvLyBnZXRCZWhhdmlvckJ5TmFtZSgpLCB3aGljaCBkb2VzIGEgbGluZWFyIHNlYXJjaCBvZiB0aGUgYmVoYXZpb3JzIGFycmF5LlxyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRNZXNoID0gbWVzaDtcclxuICAgICAgICBNZXNoVG9CZWhhdmlvck1hcC5zZXQobWVzaCwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVPblBvaW50ZXJFbnRlcikge1xyXG4gICAgICAgICAgICBTdGFydENhcHR1cmVPbkVudGVyKG1lc2guZ2V0U2NlbmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIGJlaGF2aW9yIGlzIGRldGFjaGVkIGZyb20gaXRzIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGV0YWNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hdHRhY2hlZE1lc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHJlZmVyZW5jZSB0byB0aGlzIGJlaGF2aW9yIGZyb20gdGhlIG1lc2hcclxuICAgICAgICBNZXNoVG9CZWhhdmlvck1hcC5kZWxldGUodGhpcy5hdHRhY2hlZE1lc2gpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jYXB0dXJlT25Qb2ludGVyRW50ZXIpIHtcclxuICAgICAgICAgICAgU3RvcENhcHR1cmVPbkVudGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXR0YWNoZWRNZXNoID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2UgdGhlIGJlaGF2aW9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZGV0YWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVsZWFzZSBwb2ludGVyIGV2ZW50c1xyXG4gICAgcHVibGljIHJlbGVhc2VQb2ludGVyRXZlbnRzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hdHRhY2hlZE1lc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0UmVsZWFzZSh0aGlzLmF0dGFjaGVkTWVzaC51bmlxdWVJZC50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYXB0dXJlIHBvaW50ZXIgZXZlbnRzXHJcbiAgICBwdWJsaWMgY2FwdHVyZVBvaW50ZXJFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF0dGFjaGVkTWVzaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RDYXB0dXJlKHRoaXMuYXR0YWNoZWRNZXNoLnVuaXF1ZUlkLnRvU3RyaW5nKCksIHRoaXMuX2NhcHR1cmVDYWxsYmFjaywgdGhpcy5fcmVsZWFzZUNhbGxiYWNrKTtcclxuICAgIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xuZXhwb3J0ICogZnJvbSBcIi4vaHRtbE1lc2gvaW5kZXhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21zZGZUZXh0L2luZGV4XCI7XG4iLCJpbXBvcnQgdHlwZSB7IElEaXNwb3NhYmxlLCBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgQk1Gb250Q2hhciB9IGZyb20gXCIuL3NkZi9ibUZvbnRcIjtcclxuaW1wb3J0IHR5cGUgeyBTZGZGb250IH0gZnJvbSBcIi4vc2RmL2ZvbnRcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcblxyXG5lbnVtIENoYXJDb2RlIHtcclxuICAgIFNQQUNFID0gMzIsXHJcbiAgICBUT0ZVID0gMHhmZmZjLFxyXG59XHJcblxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgZm9udCBhc3NldCBmb3IgU0RGIChTaWduZWQgRGlzdGFuY2UgRmllbGQpIHJlbmRlcmluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb250QXNzZXQgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jaGFycyA9IG5ldyBNYXA8bnVtYmVyLCBCTUZvbnRDaGFyPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2hhcnNSZWdleDogUmVnRXhwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfa2VybmluZ3MgPSBuZXcgTWFwPG51bWJlciwgTWFwPG51bWJlciwgbnVtYmVyPj4oKTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgX2ZvbnQ6IFNkZkZvbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBmb250IHNjYWxlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBzY2FsZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbGlzdCBvZiB1c2VkIHRleHR1cmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSB0ZXh0dXJlczogVGV4dHVyZVtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBGb250QXNzZXQgaW5zdGFuY2UuXHJcbiAgICAgKiBAcGFyYW0gZGVmaW5pdGlvbkRhdGEgZGVmaW5lcyB0aGUgZm9udCBkYXRhIGluIEpTT04gZm9ybWF0LlxyXG4gICAgICogQHBhcmFtIHRleHR1cmVVcmwgZGVmaW5lcyB0aGUgdXJsIG9mIHRoZSB0ZXh0dXJlIHRvIHVzZSBmb3IgdGhlIGZvbnQuXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgaG9zdGluZyBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlZmluaXRpb25EYXRhOiBzdHJpbmcsIHRleHR1cmVVcmw6IHN0cmluZywgc2NlbmU/OiBTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuX2ZvbnQgPSBKU09OLnBhcnNlKGRlZmluaXRpb25EYXRhKSBhcyBTZGZGb250O1xyXG4gICAgICAgIC8vIFNvIGZhciB3ZSBvbmx5IGNvbnNpZGVyIG9uZSBwYWdlXHJcbiAgICAgICAgdGhpcy5fZm9udC5wYWdlcyA9IFt0ZXh0dXJlVXJsXTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9udC5jaGFycy5mb3JFYWNoKChjaGFyKSA9PiB0aGlzLl9jaGFycy5zZXQoY2hhci5pZCwgY2hhcikpO1xyXG4gICAgICAgIHRoaXMuX2ZvbnQua2VybmluZ3MuZm9yRWFjaCgoa2VybmluZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc3VibWFwID0gdGhpcy5fa2VybmluZ3MuZ2V0KGtlcm5pbmcuZmlyc3QpO1xyXG4gICAgICAgICAgICBpZiAoIXN1Ym1hcCkge1xyXG4gICAgICAgICAgICAgICAgc3VibWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2VybmluZ3Muc2V0KGtlcm5pbmcuZmlyc3QsIHN1Ym1hcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VibWFwLnNldChrZXJuaW5nLnNlY29uZCwga2VybmluZy5hbW91bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2NoYXJzUmVnZXggPSBuZXcgUmVnRXhwKGBbJHt0aGlzLl9mb250LmNoYXJzLm1hcCgoYykgPT4gYy5jaGFyLnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCBcIlxcXFwkJlwiKSkuam9pbihcIlwiKX1dYCwgXCJnXCIpO1xyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVGYWxsYmFja3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDEgLyB0aGlzLl9mb250LmluZm8uc2l6ZTtcclxuICAgICAgICB0aGlzLnRleHR1cmVzID0gdGhpcy5fZm9udC5wYWdlcy5tYXAoKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHBhZ2UsIHNjZW5lLCB7IG5vTWlwbWFwOiBmYWxzZSwgaW52ZXJ0WTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIHRleHR1cmUuYW5pc290cm9waWNGaWx0ZXJpbmdMZXZlbCA9IDE2O1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGV4dHVyZSBvZiB0aGlzLnRleHR1cmVzKSB7XHJcbiAgICAgICAgICAgIHRleHR1cmUuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHR1cmVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlRmFsbGJhY2tzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2hhcnMuaGFzKENoYXJDb2RlLlNQQUNFKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFycy5zZXQoQ2hhckNvZGUuU1BBQ0UsIHtcclxuICAgICAgICAgICAgICAgIGlkOiBDaGFyQ29kZS5TUEFDRSxcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICB4b2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgeW9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHhhZHZhbmNlOiB0aGlzLl9mb250LmluZm8uc2l6ZSAqIDAuNSxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IC0xLFxyXG4gICAgICAgICAgICAgICAgY2hubDogLTEsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgICAgICAgICBjaGFyOiBcIiBcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2NoYXJzLmhhcyhDaGFyQ29kZS5UT0ZVKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFycy5zZXQoQ2hhckNvZGUuVE9GVSwge1xyXG4gICAgICAgICAgICAgICAgaWQ6IENoYXJDb2RlLlRPRlUsXHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9mb250LmluZm8uc2l6ZSxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5fZm9udC5pbmZvLnNpemUsXHJcbiAgICAgICAgICAgICAgICB4b2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgeW9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHhhZHZhbmNlOiB0aGlzLl9mb250LmluZm8uc2l6ZSAqIDAuNSxcclxuICAgICAgICAgICAgICAgIHBhZ2U6IC0xLFxyXG4gICAgICAgICAgICAgICAgY2hubDogLTEsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogLTEsXHJcbiAgICAgICAgICAgICAgICBjaGFyOiBcIu+/v1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIF9nZXRDaGFyKGNoYXJDb2RlOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcnMuZ2V0KGNoYXJDb2RlKSB8fCB0aGlzLl9jaGFycy5nZXQoQ2hhckNvZGUuVE9GVSkhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfZ2V0S2VybmluZyhmaXJzdDogbnVtYmVyLCBzZWNvbmQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXJuaW5ncy5nZXQoZmlyc3QpPy5nZXQoc2Vjb25kKSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBfdW5zdXBwb3J0ZWRDaGFycyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHRoaXMuX2NoYXJzUmVnZXgsIFwiXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZvbnRBc3NldFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wYXJhZ3JhcGhPcHRpb25zXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRSZW5kZXJlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zZGYvaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2hhZGVycy9tc2RmLnZlcnRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zaGFkZXJzL21zZGYuZnJhZ21lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2hhZGVyc1dHU0wvbXNkZi52ZXJ0ZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2hhZGVyc1dHU0wvbXNkZi5mcmFnbWVudFwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLWpzZG9jICovXHJcblxyXG5pbXBvcnQgdHlwZSB7IElWZWN0b3IyTGlrZSB9IGZyb20gXCJjb3JlL01hdGhzXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCB0eXBlIFBhcmFncmFwaE9wdGlvbnMgPSB7XHJcbiAgICBtYXhXaWR0aDogbnVtYmVyO1xyXG4gICAgbGluZUhlaWdodDogbnVtYmVyO1xyXG4gICAgbGV0dGVyU3BhY2luZzogbnVtYmVyO1xyXG4gICAgdGFiU2l6ZTogbnVtYmVyO1xyXG4gICAgd2hpdGVTcGFjZTogLyogJ25vcm1hbCcgfCAnbm93cmFwJyB8ICdwcmUnIHwgJ3ByZS13cmFwJyB8ICovIFwicHJlLWxpbmVcIiAvKiB8ICdicmVhay1zcGFjZXMnKi87XHJcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIiAvKiB8ICdqdXN0aWZ5JyovO1xyXG4gICAgdHJhbnNsYXRlOiBJVmVjdG9yMkxpa2UgfCB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0UGFyYWdyYXBoT3B0aW9uczogUGFyYWdyYXBoT3B0aW9ucyA9IHtcclxuICAgIG1heFdpZHRoOiBJbmZpbml0eSxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAxLFxyXG4gICAgdGFiU2l6ZTogNCxcclxuICAgIHdoaXRlU3BhY2U6IFwicHJlLWxpbmVcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHRyYW5zbGF0ZTogeyB4OiAtMC41LCB5OiAtMC41IH0sXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvbiAqL1xyXG4vKipcclxuICogSG9sZHMgaW5mb3JtYXRpb24gb24gaG93IHRoZSBmb250IHdhcyBnZW5lcmF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCTUZvbnRJbmZvID0ge1xyXG4gICAgLyoqIFRoZSBuYW1lIG9mIHRoZSBmb250ICovXHJcbiAgICBmYWNlOiBzdHJpbmc7XHJcbiAgICAvKiogVGhlIHNpemUgb2YgdGhlIGZvbnQgKi9cclxuICAgIHNpemU6IG51bWJlcjtcclxuICAgIC8qKiBUaGUgZm9udCBpcyBib2xkICovXHJcbiAgICBib2xkOiBudW1iZXI7XHJcbiAgICAvKiogVGhlIGZvbnQgaXMgaXRhbGljICovXHJcbiAgICBpdGFsaWM6IG51bWJlcjtcclxuICAgIC8qKiBUaGUgY2hhcnNldCBvZiB0aGUgZm9udCAqL1xyXG4gICAgY2hhcnNldDogc3RyaW5nW107XHJcbiAgICAvKiogVGhlIGNoYXJzZXQgaXMgdW5pY29kZSAgKi9cclxuICAgIHVuaWNvZGU6IG51bWJlcjtcclxuICAgIC8qKiBUaGUgZm9udCBoZWlnaHQgc3RyZXRjaCBpbiBwZXJjZW50YWdlLiAxMDAlIG1lYW5zIG5vIHN0cmV0Y2guICovXHJcbiAgICBzdHJldGNoSDogbnVtYmVyO1xyXG4gICAgLyoqIFNldCB0byAxIGlmIHNtb290aGluZyB3YXMgdHVybmVkIG9uLiAqL1xyXG4gICAgc21vb3RoOiBudW1iZXI7XHJcbiAgICAvKiogVGhlIHN1cGVyc2FtcGxpbmcgbGV2ZWwgdXNlZC4gMSBtZWFucyBubyBzdXBlcnNhbXBsaW5nIHdhcyB1c2VkLiAqL1xyXG4gICAgYWE6IG51bWJlcjtcclxuICAgIC8qKiBUaGUgcGFkZGluZyBmb3IgZWFjaCBjaGFyYWN0ZXIgKHVwLCByaWdodCwgZG93biwgbGVmdCkuICovXHJcbiAgICBwYWRkaW5nOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgIC8qKiBUaGUgc3BhY2luZyBmb3IgZWFjaCBjaGFyYWN0ZXIgKGhvcml6b250YWwsIHZlcnRpY2FsKS4gKi9cclxuICAgIHNwYWNpbmc6IFtudW1iZXIsIG51bWJlcl07XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvdXRsaW5lIHRoaWNrbmVzcyBmb3IgdGhlIGNoYXJhY3RlcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJlbWFyayBtaXNzaW5nIGluIG1zZGYtYm1mb250LXhtbFxyXG4gICAgICovXHJcbiAgICBvdXRsaW5lPzogbnVtYmVyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEhvbGRzIGluZm9ybWF0aW9uIGNvbW1vbiB0byBhbGwgY2hhcmFjdGVycy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJNRm9udENvbW1vbiA9IHtcclxuICAgIC8qKiBEaXN0YW5jZSBpbiBwaXhlbHMgYmV0d2VlbiBlYWNoIGxpbmUgb2YgdGV4dCAqL1xyXG4gICAgbGluZUhlaWdodDogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBudW1iZXIgb2YgcGl4ZWxzIGZyb20gdGhlIGFic29sdXRlIHRvcCBvZiB0aGUgbGluZSB0byB0aGUgYmFzZSBvZiB0aGUgY2hhcmFjdGVycyAqL1xyXG4gICAgYmFzZTogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSB3aWR0aCBvZiB0aGUgdGV4dHVyZSwgbm9ybWFsbHkgdXNlZCB0byBzY2FsZSB0aGUgeCBwb3Mgb2YgdGhlIGNoYXJhY3RlciBpbWFnZSAqL1xyXG4gICAgc2NhbGVXOiBudW1iZXI7XHJcbiAgICAvKiogVGhlIGhlaWdodCBvZiB0aGUgdGV4dHVyZSwgbm9ybWFsbHkgdXNlZCB0byBzY2FsZSB0aGUgeSBwb3Mgb2YgdGhlIGNoYXJhY3RlciBpbWFnZSAqL1xyXG4gICAgc2NhbGVIOiBudW1iZXI7XHJcbiAgICAvKiogVGhlIG51bWJlciBvZiBwYWdlcyBpbiB0aGUgZm9udCAqL1xyXG4gICAgcGFnZXM6IG51bWJlcjtcclxuICAgIC8qKiBTZXQgdG8gMSBpZiB0aGUgbW9ub2Nocm9tZSBjaGFyYWN0ZXJzIGhhdmUgYmVlbiBwYWNrZWQgaW50byBlYWNoIG9mIHRoZSB0ZXh0dXJlIGNoYW5uZWxzLiBJbiB0aGlzIGNhc2UgYWxwaGFDaG5sIGRlc2NyaWJlcyB3aGF0IGlzIHN0b3JlZCBpbiBlYWNoIGNoYW5uZWwuICovXHJcbiAgICBwYWNrZWQ6IG51bWJlcjtcclxuICAgIC8qKiBTZXQgdG8gMCBpZiB0aGUgY2hhbm5lbCBob2xkcyB0aGUgZ2x5cGggZGF0YSwgMSBpZiBpdCBob2xkcyB0aGUgb3V0bGluZSwgMiBpZiBpdCBob2xkcyB0aGUgZ2x5cGggYW5kIHRoZSBvdXRsaW5lLCAzIGlmIGl0cyBzZXQgdG8gemVybywgYW5kIDQgaWYgaXRzIHNldCB0byBvbmUuICovXHJcbiAgICBhbHBoYUNobmw6IG51bWJlcjtcclxuICAgIC8qKiBTZXQgdG8gMCBpZiB0aGUgY2hhbm5lbCBob2xkcyB0aGUgZ2x5cGggZGF0YSwgMSBpZiBpdCBob2xkcyB0aGUgb3V0bGluZSwgMiBpZiBpdCBob2xkcyB0aGUgZ2x5cGggYW5kIHRoZSBvdXRsaW5lLCAzIGlmIGl0cyBzZXQgdG8gemVybywgYW5kIDQgaWYgaXRzIHNldCB0byBvbmUuICovXHJcbiAgICByZWRDaG5sOiBudW1iZXI7XHJcbiAgICAvKiogU2V0IHRvIDAgaWYgdGhlIGNoYW5uZWwgaG9sZHMgdGhlIGdseXBoIGRhdGEsIDEgaWYgaXQgaG9sZHMgdGhlIG91dGxpbmUsIDIgaWYgaXQgaG9sZHMgdGhlIGdseXBoIGFuZCB0aGUgb3V0bGluZSwgMyBpZiBpdHMgc2V0IHRvIHplcm8sIGFuZCA0IGlmIGl0cyBzZXQgdG8gb25lLiAqL1xyXG4gICAgZ3JlZW5DaG5sOiBudW1iZXI7XHJcbiAgICAvKiogU2V0IHRvIDAgaWYgdGhlIGNoYW5uZWwgaG9sZHMgdGhlIGdseXBoIGRhdGEsIDEgaWYgaXQgaG9sZHMgdGhlIG91dGxpbmUsIDIgaWYgaXQgaG9sZHMgdGhlIGdseXBoIGFuZCB0aGUgb3V0bGluZSwgMyBpZiBpdHMgc2V0IHRvIHplcm8sIGFuZCA0IGlmIGl0cyBzZXQgdG8gb25lLiAqL1xyXG4gICAgYmx1ZUNobmw6IG51bWJlcjtcclxufTtcclxuXHJcbi8qKiBOYW1lIG9mIGEgdGV4dHVyZSBmaWxlLiBUaGVyZSBpcyBvbmUgZm9yIGVhY2ggcGFnZSBpbiB0aGUgZm9udC4gKi9cclxuZXhwb3J0IHR5cGUgQk1Gb250UGFnZXMgPSB7XHJcbiAgICBbaWQ6IG51bWJlcl06IHN0cmluZztcclxufSAmIEFycmF5PHN0cmluZz47XHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIGEgc2luZ2xlIGNoYXJhY3RlciBpbiB0aGUgZm9udFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQk1Gb250Q2hhciA9IHtcclxuICAgIC8qKiBDaGFyYWN0ZXIgaWQgKGNoYXJDb2RlKSAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBMZWZ0IHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN0ZXIgaW1hZ2UgaW4gdGhlIHRleHR1cmUuICovXHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICAvKiogUmlnaHQgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3RlciBpbWFnZSBpbiB0aGUgdGV4dHVyZSAqL1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgLyoqIFdpZHRoIG9mIHRoZSBjaHJhY3RlciBpbWFnZSBpbiB0aGUgdGV4dHVyZSAqL1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIC8qKiBIZWlnaHQgb2YgdGhlIGNocmFjdGVyIGltYWdlIGluIHRoZSB0ZXh0dXJlICovXHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIC8qKiBIb3Jpem9udGFsIG9mZnNldCB0byBiZSBhcHBsaWVkIG9uIHNjcmVlbiAqL1xyXG4gICAgeG9mZnNldDogbnVtYmVyO1xyXG4gICAgLyoqIFZlcnRpY2FsIG9mZnNldCB0byBiZSBhcHBsaWVkIG9uIHNjcmVlbiAqL1xyXG4gICAgeW9mZnNldDogbnVtYmVyO1xyXG4gICAgLyoqIEhvcml6b250YWwgYWR2YW5jZSBhZnRlciB0aGUgY2hhcmFjdGVyICovXHJcbiAgICB4YWR2YW5jZTogbnVtYmVyO1xyXG4gICAgLyoqIFBhZ2UgaW5kZXggd2hlcmUgdGhlIGNoYXJhY3RlciBpbWFnZSBpcyBmb3VuZCAqL1xyXG4gICAgcGFnZTogbnVtYmVyO1xyXG4gICAgLyoqIFRleHR1cmUgY2hhbm5lbCB3aGVyZSB0aGUgY2hyYWN0ZXIgaW1hZ2UgaXMgZm91bmRcclxuICAgICAqIC0gMSA9IGJsdWVcclxuICAgICAqIC0gMiA9IGdyZWVuXHJcbiAgICAgKiAtIDMgPSByZWRcclxuICAgICAqIC0gOCA9IGFscGhhXHJcbiAgICAgKiAtIDE1ID0gYWxsIGNoYW5uZWxzXHJcbiAgICAgKi9cclxuICAgIGNobmw6IG51bWJlcjtcclxufSAmIEJNRm9udENoYXJFeHRyYTtcclxuXHJcbi8qKlxyXG4gKiBhZGRpdGlvbmFsIGNvbnRleHQgZnJvbSBtc2RmLWJtZm9udC14bWxcclxuICovXHJcbmV4cG9ydCB0eXBlIEJNRm9udENoYXJFeHRyYSA9IHtcclxuICAgIC8qKiBpbmRleCBvZiBvcGVudHlwZS5qcyBnbHlwaCAqL1xyXG4gICAgaW5kZXg6IG51bWJlcjtcclxuICAgIC8qKiBhY3R1YWwgY2hhcmFjdGVyKi9cclxuICAgIGNoYXI6IHN0cmluZztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUga2VybmluZyBpbmZvcm1hdGlvbiBpcyB1c2VkIHRvIGFkanVzdCB0aGUgZGlzdGFuY2UgYmV0d2VlbiBjZXJ0YWluIGNoYXJhY3RlcnMsIGUuZy4gc29tZSBjaGFyYWN0ZXJzIHNob3VsZCBiZSBwbGFjZWQgY2xvc2VyIHRvIGVhY2ggb3RoZXIgdGhhbiBvdGhlcnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCTUZvbnRLZXJuaW5nID0ge1xyXG4gICAgLyoqIFRoZSBmaXJzdCBjaGFyYWN0ZXIgaWQuICovXHJcbiAgICBmaXJzdDogbnVtYmVyO1xyXG4gICAgLyoqIFRoZSBzZWNvbmQgY2hhcmFjdGVyIGlkLiAqL1xyXG4gICAgc2Vjb25kOiBudW1iZXI7XHJcbiAgICAvKiogSG93IG11Y2ggdGhlIHggcG9zaXRpb24gc2hvdWxkIGJlIGFkanVzdGVkIHdoZW4gZHJhd2luZyB0aGUgc2Vjb25kIGNoYXJhY3RlciBpbW1lZGlhdGVseSBmb2xsb3dpbmcgdGhlIGZpcnN0LiAqL1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29tcGF0aWJsZSB3aXRoIFttc2RmLWJtZm9udC14bWxdKGh0dHBzOi8vZ2l0aHViLmNvbS9zb2lteS9tc2RmLWJtZm9udC14bWwpXHJcbiAqIEBzZWUgaHR0cHM6Ly93d3cuYW5nZWxjb2RlLmNvbS9wcm9kdWN0cy9ibWZvbnQvZG9jL2ZpbGVfZm9ybWF0Lmh0bWxcclxuICovXHJcbmV4cG9ydCB0eXBlIEJNRm9udCA9IHtcclxuICAgIC8qKiB7QGluaGVyaXREb2MgQk1Gb250SW5mb30gKi9cclxuICAgIGluZm86IEJNRm9udEluZm87XHJcbiAgICAvKioge0Bpbmhlcml0RG9jIEJNRm9udENvbW1vbn0gKi9cclxuICAgIGNvbW1vbjogQk1Gb250Q29tbW9uO1xyXG4gICAgLyoqIHtAaW5oZXJpdERvYyBCTUZvbnRQYWdlc30gKi9cclxuICAgIHBhZ2VzOiBCTUZvbnRQYWdlcztcclxuICAgIC8qKiB7QGluaGVyaXREb2MgQk1Gb250Q2hhcn0gKi9cclxuICAgIGNoYXJzOiBCTUZvbnRDaGFyW107XHJcbiAgICAvKioge0Bpbmhlcml0RG9jIEJNRm9udEtlcm5pbmd9ICovXHJcbiAgICBrZXJuaW5nczogQk1Gb250S2VybmluZ1tdO1xyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLWpzZG9jICovXHJcbmltcG9ydCB0eXBlIHsgQk1Gb250IH0gZnJvbSBcIi4vYm1Gb250XCI7XHJcblxyXG5leHBvcnQgdHlwZSBTZGZGb250RGlzdGFuY2VGaWVsZCA9IHtcclxuICAgIGZpZWxkVHlwZTogXCJzZGZcIiB8IFwibXNkZlwiO1xyXG4gICAgZGlzdGFuY2VSYW5nZTogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgU2RmRm9udCA9IEJNRm9udCAmIHtcclxuICAgIGRpc3RhbmNlRmllbGQ6IFNkZkZvbnREaXN0YW5jZUZpZWxkO1xyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc2RvYy9yZXF1aXJlLWpzZG9jICovXHJcbmltcG9ydCB0eXBlIHsgQk1Gb250Q2hhciB9IGZyb20gXCIuL2JtRm9udFwiO1xyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgdHlwZSBTZGZHbHlwaCA9IHtcclxuICAgIGNoYXI6IEJNRm9udENoYXI7XHJcbiAgICAvKiogaW5kZXggb2YgdGhlIGxpbmUgKi9cclxuICAgIGxpbmU6IG51bWJlcjtcclxuICAgIC8qKiBwb3NpdGlvbiB3aXRoaW4gdGhlIGxpbmUgKi9cclxuICAgIHBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2JtRm9udFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZm9udFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZ2x5cGhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2xpbmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuIiwiLyogZXNsaW50LWRpc2FibGUganNkb2MvcmVxdWlyZS1qc2RvYyAqL1xyXG5pbXBvcnQgdHlwZSB7IFNkZkdseXBoIH0gZnJvbSBcIi4vZ2x5cGhcIjtcclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IHR5cGUgU2RmVGV4dExpbmUgPSB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBnbHlwaHM6IFNkZkdseXBoW107XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZW5kOiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBiYWJ5bG9uanMvYXZhaWxhYmxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGpzZG9jL3JlcXVpcmUtanNkb2MgKi9cclxuaW1wb3J0IHR5cGUgeyBGb250QXNzZXQgfSBmcm9tIFwiLi4vZm9udEFzc2V0XCI7XHJcbmltcG9ydCB7IERlZmF1bHRQYXJhZ3JhcGhPcHRpb25zLCB0eXBlIFBhcmFncmFwaE9wdGlvbnMgfSBmcm9tIFwiLi4vcGFyYWdyYXBoT3B0aW9uc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEJNRm9udENoYXIgfSBmcm9tIFwiLi9ibUZvbnRcIjtcclxuaW1wb3J0IHR5cGUgeyBTZGZHbHlwaCB9IGZyb20gXCIuL2dseXBoXCI7XHJcbmltcG9ydCB0eXBlIHsgU2RmVGV4dExpbmUgfSBmcm9tIFwiLi9saW5lXCI7XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBjbGFzcyBTZGZUZXh0UGFyYWdyYXBoIHtcclxuICAgIHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBQYXJhZ3JhcGhPcHRpb25zO1xyXG5cclxuICAgIGdldCBsaW5lSGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvbnRBc3NldC5fZm9udC5jb21tb24ubGluZUhlaWdodCAqIHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRvbmx5IHBhcmFncmFwaDtcclxuICAgIHJlYWRvbmx5IGxpbmVzO1xyXG4gICAgcmVhZG9ubHkgd2lkdGg7XHJcbiAgICByZWFkb25seSBoZWlnaHQ7XHJcbiAgICByZWFkb25seSBnbHlwaHM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IHRleHQ6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZm9udEFzc2V0OiBGb250QXNzZXQsXHJcbiAgICAgICAgb3B0aW9ucz86IFBhcnRpYWw8UGFyYWdyYXBoT3B0aW9ucz5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uRGVmYXVsdFBhcmFncmFwaE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBwYXJhZ3JhcGgsIGxpbmVzLCBnbHlwaHMsIHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuX2NvbXB1dGVNZXRyaWNzKHRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmFncmFwaCA9IHBhcmFncmFwaDtcclxuICAgICAgICB0aGlzLmxpbmVzID0gbGluZXM7XHJcbiAgICAgICAgdGhpcy5nbHlwaHMgPSBnbHlwaHM7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbXB1dGVNZXRyaWNzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuX2NvbGxhcHNlKHRleHQpO1xyXG4gICAgICAgIGNvbnN0IGJyZWFrZWQgPSB0aGlzLl9icmVha0xpbmVzKGNvbGxhcHNlZCk7XHJcbiAgICAgICAgY29uc3QgdHJpbW1lZCA9IGJyZWFrZWQubWFwKChsaW5lKSA9PiBsaW5lLnRyaW0oKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmVzOiBTZGZUZXh0TGluZVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIHRyaW1tZWQpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaCguLi50aGlzLl93cmFwKGxpbmUsIGxpbmVzLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCguLi5saW5lcy5tYXAoKGxpbmUpID0+IGxpbmUud2lkdGgpKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQgKiBsaW5lcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGV4dEFsaWduICE9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMudHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMudGV4dEFsaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpZHRoIC0gbGluZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh3aWR0aCAtIGxpbmUud2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMub3B0aW9ucy50cmFuc2xhdGUgPyB0aGlzLm9wdGlvbnMudHJhbnNsYXRlLnggKiB3aWR0aCA6IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5vcHRpb25zLnRyYW5zbGF0ZSA/IHRoaXMub3B0aW9ucy50cmFuc2xhdGUueSAqIGhlaWdodCA6IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdseXBoIG9mIGxpbmUuZ2x5cGhzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x5cGgueCArPSBhbmNob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x5cGgueCArPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdseXBoLnkgKz0geTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnbHlwaHMgPSBsaW5lcy5mbGF0TWFwKChsaW5lKSA9PiBsaW5lLmdseXBocyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFncmFwaDogdHJpbW1lZC5qb2luKFwiXFxuXCIpLFxyXG4gICAgICAgICAgICBsaW5lcyxcclxuICAgICAgICAgICAgZ2x5cGhzLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYnJlYWtMaW5lcyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdChcIlxcblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb2xsYXBzZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHQvZywgXCIgXCIucmVwZWF0KHRoaXMub3B0aW9ucy50YWJTaXplKSkucmVwbGFjZSgvICsvZywgXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dyYXAodGV4dDogc3RyaW5nLCBsaW5lT2Zmc2V0ID0gMCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gbmV3IEFycmF5PFNkZlRleHRMaW5lPigpO1xyXG5cclxuICAgICAgICBsZXQgY3VycmVudExpbmUgPSBsaW5lT2Zmc2V0O1xyXG4gICAgICAgIGxldCBjdXJyZW50R2x5cGhzID0gbmV3IEFycmF5PFNkZkdseXBoPigpO1xyXG4gICAgICAgIGxldCBjdXJyZW50Q3Vyc29yID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudFdpZHRoID0gMDtcclxuICAgICAgICBsZXQgbGFzdENoYXI6IEJNRm9udENoYXIgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gMDtcclxuICAgICAgICBsZXQgZW5kID0gc3RhcnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHB1c2hDdXJyZW50TGluZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGluZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LnNsaWNlKHN0YXJ0LCBlbmQpLFxyXG4gICAgICAgICAgICAgICAgZ2x5cGhzOiBjdXJyZW50R2x5cGhzLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiBlbmQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY3VycmVudFdpZHRoLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3aGlsZSAoZW5kIDwgdGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgaSA9IGVuZDtcclxuICAgICAgICAgICAgY29uc3QgY2hhckNvZGUgPSB0ZXh0LmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB0aGlzLmZvbnRBc3NldC5fZ2V0Q2hhcihjaGFyQ29kZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoYXJXaWR0aCA9IGNoYXIud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGtlcm5pbmcgPSBsYXN0Q2hhciA/IHRoaXMuZm9udEFzc2V0Ll9nZXRLZXJuaW5nKGxhc3RDaGFyLmlkLCBjaGFyLmlkKSA6IDA7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50Q3Vyc29yICs9IGtlcm5pbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dpZHRoID0gY3VycmVudEN1cnNvciArIGNoYXJXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgY3Vyc29yUHJvZ3Jlc3MgPSBjaGFyLnhhZHZhbmNlICsgdGhpcy5vcHRpb25zLmxldHRlclNwYWNpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3NpdGlvbiA9IGN1cnJlbnRDdXJzb3IgKyBjdXJzb3JQcm9ncmVzcztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEJyZWFrID0gbmV4dFBvc2l0aW9uID4gdGhpcy5vcHRpb25zLm1heFdpZHRoIHx8IG5ld1dpZHRoID4gdGhpcy5vcHRpb25zLm1heFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNob3VsZEJyZWFrKSB7XHJcbiAgICAgICAgICAgICAgICBwdXNoQ3VycmVudExpbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TGluZSsrO1xyXG4gICAgICAgICAgICAgICAgbGFzdENoYXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3Vyc29yID0gMDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IGVuZDtcclxuICAgICAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgMTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRHbHlwaHMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgeCA9IGN1cnJlbnRDdXJzb3I7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjdXJyZW50TGluZSAqIHRoaXMubGluZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRHbHlwaHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjaGFyLFxyXG4gICAgICAgICAgICAgICAgbGluZTogY3VycmVudExpbmUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogY3VycmVudEdseXBocy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICAgICAgeTogeSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNob3VsZEJyZWFrKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0Q2hhciA9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3Vyc29yID0gbmV4dFBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICAgICAgICBlbmQrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDdXJzb3IgPSBjdXJzb3JQcm9ncmVzcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRHbHlwaHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAobGFzdENoYXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRXaWR0aCArPSBsYXN0Q2hhci54YWR2YW5jZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdXNoQ3VycmVudExpbmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5lcztcclxuICAgIH1cclxufVxyXG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJtc2RmUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGAjZXh0ZW5zaW9uIEdMX09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcyA6IGVuYWJsZVxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3VuaWZvcm0gc2FtcGxlcjJEIGZvbnRBdGxhczt1bmlmb3JtIHZlYzQgdUNvbG9yO3VuaWZvcm0gdmVjNCB1U3Ryb2tlQ29sb3I7dW5pZm9ybSBmbG9hdCB1U3Ryb2tlSW5zZXRXaWR0aDt1bmlmb3JtIGZsb2F0IHVTdHJva2VPdXRzZXRXaWR0aDt1bmlmb3JtIGZsb2F0IHRoaWNrbmVzczt2YXJ5aW5nIHZlYzIgYXRsYXNVVjtmbG9hdCBtZWRpYW4odmVjMyBtc2RmKSB7cmV0dXJuIG1heChtaW4obXNkZi5yLG1zZGYuZyksbWluKG1heChtc2RmLnIsbXNkZi5nKSxtc2RmLmIpKTt9XG52b2lkIG1haW4odm9pZClcbnt2ZWMzIHM9dGV4dHVyZTJEKGZvbnRBdGxhcyxhdGxhc1VWKS5yZ2I7ZmxvYXQgc2lnRGlzdD1tZWRpYW4ocyktMC41K3RoaWNrbmVzcztmbG9hdCBhbHBoYT1jbGFtcChzaWdEaXN0L2Z3aWR0aChzaWdEaXN0KSswLjUsMC4wLDEuMCk7ZmxvYXQgc2lnRGlzdE91dHNldD1zaWdEaXN0K3VTdHJva2VPdXRzZXRXaWR0aCowLjU7ZmxvYXQgc2lnRGlzdEluc2V0PXNpZ0Rpc3QtdVN0cm9rZUluc2V0V2lkdGgqMC41O2Zsb2F0IG91dHNldD1jbGFtcChzaWdEaXN0T3V0c2V0L2Z3aWR0aChzaWdEaXN0T3V0c2V0KSswLjUsMC4wLDEuMCk7ZmxvYXQgaW5zZXQ9MS4wLWNsYW1wKHNpZ0Rpc3RJbnNldC9md2lkdGgoc2lnRGlzdEluc2V0KSswLjUsMC4wLDEuMCk7ZmxvYXQgYm9yZGVyPW91dHNldCppbnNldDt2ZWM0IGZpbGxlZEZyYWdDb2xvcj12ZWM0KHVDb2xvci5yZ2IsYWxwaGEqdUNvbG9yLmEpO3ZlYzQgc3Ryb2tlZEZyYWdDb2xvcj12ZWM0KHVTdHJva2VDb2xvci5yZ2IsYm9yZGVyKnVTdHJva2VDb2xvci5hKTtnbF9GcmFnQ29sb3I9bWl4KGZpbGxlZEZyYWdDb2xvcixzdHJva2VkRnJhZ0NvbG9yLGJvcmRlcik7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtc2RmUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwibXNkZlZlcnRleFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYCNkZWZpbmUgQklMTEJPQVJEIDFcbiNkZWZpbmUgQklMTEJPQVJEU0NSRUVOUFJPSkVDVEVEIDJcbmF0dHJpYnV0ZSB2ZWMyIG9mZnNldHM7YXR0cmlidXRlIHZlYzQgd29ybGQwO2F0dHJpYnV0ZSB2ZWM0IHdvcmxkMTthdHRyaWJ1dGUgdmVjNCB3b3JsZDI7YXR0cmlidXRlIHZlYzQgd29ybGQzO2F0dHJpYnV0ZSB2ZWM0IHV2czt1bmlmb3JtIG1hdDQgdHJhbnNmb3JtO3VuaWZvcm0gbWF0NCBwYXJlbnRXb3JsZDt1bmlmb3JtIG1hdDQgdmlldzt1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjt1bmlmb3JtIHZlYzMgY2VudGVyO3VuaWZvcm0gaW50IG1vZGU7dmFyeWluZyB2ZWMyIGF0bGFzVVY7dm9pZCBtYWluKHZvaWQpIHttYXQ0IHdvcmxkPW1hdDQod29ybGQwLHdvcmxkMSx3b3JsZDIsd29ybGQzKTt2ZWM0IHdvcmxkUG9zPXRyYW5zZm9ybSood29ybGQqdmVjNChvZmZzZXRzLnh5LXZlYzIoMC41LDAuNSksMC4sMS4wKSk7aWYgKG1vZGU+PUJJTExCT0FSRCkge3ZlYzMgdmlld1Bvcz0odmlldypwYXJlbnRXb3JsZCp2ZWM0KDAuLDAuLDAuLDEuMCkpLnh5ejsgXG5pZiAobW9kZT09QklMTEJPQVJEU0NSRUVOUFJPSkVDVEVEKSB7dmlld1Bvcy54Lz12aWV3UG9zLno7dmlld1Bvcy55Lz12aWV3UG9zLno7dmlld1Bvcy56PTEuMDt9XG5nbF9Qb3NpdGlvbj1wcm9qZWN0aW9uKnZlYzQodmlld1Bvcyt3b3JsZFBvcy54eXosMS4wKTsgfSBlbHNlIHt2ZWMzIHZpZXdQb3M9KHZpZXcqcGFyZW50V29ybGQqd29ybGRQb3MpLnh5ejsgXG5nbF9Qb3NpdGlvbj1wcm9qZWN0aW9uKnZlYzQodmlld1BvcywxLjApOyB9XG5hdGxhc1VWPXZlYzIodXZzLngrb2Zmc2V0cy54KnV2cy56LHV2cy55KygxLjAtb2Zmc2V0cy55KSp1dnMudyk7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtc2RmVmVydGV4U2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1zZGZQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHZhciBmb250QXRsYXM6IHRleHR1cmVfMmQ8ZjMyPjt2YXIgZm9udEF0bGFzU2FtcGxlcjogc2FtcGxlcjt1bmlmb3JtIHVDb2xvcjogdmVjNGY7dW5pZm9ybSB0aGlja25lc3M6IGYzMjt1bmlmb3JtIHVTdHJva2VDb2xvcjogdmVjNGY7dW5pZm9ybSB1U3Ryb2tlSW5zZXRXaWR0aDogZjMyO3VuaWZvcm0gdVN0cm9rZU91dHNldFdpZHRoOiBmMzI7dmFyeWluZyBhdGxhc1VWOiB2ZWMyZjtmbiBtZWRpYW4obXNkZjogdmVjMzxmMzI+KS0+ZjMyIHtsZXQgYT1taW4obXNkZi5yLG1zZGYuZyk7bGV0IGI9bWF4KG1zZGYucixtc2RmLmcpO3JldHVybiBtYXgoYSxtaW4oYixtc2RmLmIpKTt9XG5AZnJhZ21lbnRcbmZuIG1haW4oaW5wdXQ6IEZyYWdtZW50SW5wdXRzKS0+RnJhZ21lbnRPdXRwdXRzIHtsZXQgcz10ZXh0dXJlU2FtcGxlKGZvbnRBdGxhcyxmb250QXRsYXNTYW1wbGVyLGlucHV0LmF0bGFzVVYpLnJnYjtsZXQgc2lnRGlzdD1tZWRpYW4ocyktMC41K3VuaWZvcm1zLnRoaWNrbmVzcztsZXQgYWZ3aWR0aD1sZW5ndGgodmVjMjxmMzI+KGRwZHgoc2lnRGlzdCksZHBkeShzaWdEaXN0KSkpO2xldCBhbHBoYT1jbGFtcChzaWdEaXN0L2Fmd2lkdGgrMC41LDAuMCwxLjApO2xldCBzaWdEaXN0T3V0c2V0PXNpZ0Rpc3QrdW5pZm9ybXMudVN0cm9rZU91dHNldFdpZHRoKjAuNTtsZXQgc2lnRGlzdEluc2V0PXNpZ0Rpc3QtdW5pZm9ybXMudVN0cm9rZUluc2V0V2lkdGgqMC41O2xldCBhZndpZHRoT3V0c2V0PWxlbmd0aCh2ZWMyPGYzMj4oZHBkeChzaWdEaXN0T3V0c2V0KSxkcGR5KHNpZ0Rpc3RPdXRzZXQpKSk7bGV0IGFmd2lkdGhJbnNldD1sZW5ndGgodmVjMjxmMzI+KGRwZHgoc2lnRGlzdEluc2V0KSxkcGR5KHNpZ0Rpc3RJbnNldCkpKTtsZXQgb3V0c2V0PWNsYW1wKHNpZ0Rpc3RPdXRzZXQvYWZ3aWR0aE91dHNldCswLjUsMC4wLDEuMCk7bGV0IGluc2V0PTEuMC1jbGFtcChzaWdEaXN0SW5zZXQvYWZ3aWR0aEluc2V0KzAuNSwwLjAsMS4wKTtsZXQgYm9yZGVyPW91dHNldCppbnNldDtsZXQgZmlsbGVkRnJhZ0NvbG9yPXZlYzQ8ZjMyPih1bmlmb3Jtcy51Q29sb3IucmdiLGFscGhhKnVuaWZvcm1zLnVDb2xvci5hKTtsZXQgc3Ryb2tlZEZyYWdDb2xvcj12ZWM0PGYzMj4odW5pZm9ybXMudVN0cm9rZUNvbG9yLnJnYixib3JkZXIqdW5pZm9ybXMudVN0cm9rZUNvbG9yLmEpO2ZyYWdtZW50T3V0cHV0cy5jb2xvcj1taXgoZmlsbGVkRnJhZ0NvbG9yLHN0cm9rZWRGcmFnQ29sb3IsYm9yZGVyKTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVdHU0xbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgbXNkZlBpeGVsU2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJtc2RmVmVydGV4U2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgI2RlZmluZSBCSUxMQk9BUkQgMVxuI2RlZmluZSBCSUxMQk9BUkRTQ1JFRU5QUk9KRUNURUQgMlxuYXR0cmlidXRlIG9mZnNldHM6IHZlYzJmO2F0dHJpYnV0ZSB3b3JsZDA6IHZlYzRmO2F0dHJpYnV0ZSB3b3JsZDE6IHZlYzRmO2F0dHJpYnV0ZSB3b3JsZDI6IHZlYzRmO2F0dHJpYnV0ZSB3b3JsZDM6IHZlYzRmO2F0dHJpYnV0ZSB1dnM6IHZlYzRmO3VuaWZvcm0gdHJhbnNmb3JtOiBtYXQ0eDRmO3VuaWZvcm0gcGFyZW50V29ybGQ6IG1hdDR4NGY7dW5pZm9ybSB2aWV3OiBtYXQ0eDRmO3VuaWZvcm0gcHJvamVjdGlvbjogbWF0NHg0Zjt1bmlmb3JtIG1vZGU6IHUzMjt2YXJ5aW5nIGF0bGFzVVY6IHZlYzJmO0B2ZXJ0ZXhcbmZuIG1haW4oaW5wdXQ6IFZlcnRleElucHV0cyktPkZyYWdtZW50SW5wdXRzIHtsZXQgd29ybGQ9bWF0NHg0PGYzMj4oaW5wdXQud29ybGQwLGlucHV0LndvcmxkMSxpbnB1dC53b3JsZDIsaW5wdXQud29ybGQzKTtsZXQgbG9jYWxPZmZzZXQ9dmVjNDxmMzI+KGlucHV0Lm9mZnNldHMtdmVjMjxmMzI+KDAuNSwwLjUpLDAuMCwxLjApO2xldCB3b3JsZFBvcz11bmlmb3Jtcy50cmFuc2Zvcm0qd29ybGQqbG9jYWxPZmZzZXQ7aWYgKHVuaWZvcm1zLm1vZGU+PUJJTExCT0FSRCkgeyBcbnZhciB2aWV3UG9zPSh1bmlmb3Jtcy52aWV3KnVuaWZvcm1zLnBhcmVudFdvcmxkKnZlYzRmKDAuLDAuLDAuLDEuMCkpLnh5ejtpZiAodW5pZm9ybXMubW9kZT09QklMTEJPQVJEU0NSRUVOUFJPSkVDVEVEKSB7dmlld1Bvcz12ZWMzZih2aWV3UG9zLngvdmlld1Bvcy56LHZpZXdQb3MueS92aWV3UG9zLnosMS4wKTt9IFxudmVydGV4T3V0cHV0cy5wb3NpdGlvbj11bmlmb3Jtcy5wcm9qZWN0aW9uKnZlYzQ8ZjMyPih2aWV3UG9zK3dvcmxkUG9zLnh5eiwxLjApO30gZWxzZSB7IFxubGV0IHZpZXdQb3M9KHVuaWZvcm1zLnZpZXcqdW5pZm9ybXMucGFyZW50V29ybGQqd29ybGRQb3MpLnh5ejt2ZXJ0ZXhPdXRwdXRzLnBvc2l0aW9uPXVuaWZvcm1zLnByb2plY3Rpb24qdmVjNDxmMzI+KHZpZXdQb3MsMS4wKTt9XG52ZXJ0ZXhPdXRwdXRzLmF0bGFzVVY9dmVjMjxmMzI+KFxuaW5wdXQudXZzLngraW5wdXQub2Zmc2V0cy54KmlucHV0LnV2cy56LFxuaW5wdXQudXZzLnkrKDEuMC1pbnB1dC5vZmZzZXRzLnkpKmlucHV0LnV2cy53XG4pO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVXR1NMW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlV0dTTFtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBtc2RmVmVydGV4U2hhZGVyV0dTTCA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCJpbXBvcnQgdHlwZSB7IFZlcnRleEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJjb3JlL0J1ZmZlcnMvYnVmZmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgQWJzdHJhY3RFbmdpbmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL2Fic3RyYWN0RW5naW5lXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCJjb3JlL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB0eXBlIHsgVGhpbkVuZ2luZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvdGhpbkVuZ2luZVwiO1xyXG5pbXBvcnQgeyBEcmF3V3JhcHBlciB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9kcmF3V3JhcHBlclwiO1xyXG5pbXBvcnQgeyBTaGFkZXJMYW5ndWFnZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9zaGFkZXJMYW5ndWFnZVwiO1xyXG5pbXBvcnQgdHlwZSB7IElEaXNwb3NhYmxlIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFNkZlRleHRQYXJhZ3JhcGggfSBmcm9tIFwiLi9zZGYvcGFyYWdyYXBoXCI7XHJcbmltcG9ydCB0eXBlIHsgRm9udEFzc2V0IH0gZnJvbSBcIi4vZm9udEFzc2V0XCI7XHJcbmltcG9ydCB0eXBlIHsgUGFyYWdyYXBoT3B0aW9ucyB9IGZyb20gXCIuL3BhcmFncmFwaE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgVGhpbk1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL1RoaW5NYXRocy90aGluTWF0aC5tYXRyaXhcIjtcclxuaW1wb3J0IHtcclxuICAgIENvcHlNYXRyaXhUb0FycmF5LFxyXG4gICAgQ29weU1hdHJpeFRvUmVmLFxyXG4gICAgSWRlbnRpdHlNYXRyaXhUb1JlZixcclxuICAgIE11bHRpcGx5TWF0cmljZXNUb1JlZixcclxuICAgIFNjYWxpbmdNYXRyaXhUb1JlZixcclxuICAgIFRyYW5zbGF0aW9uTWF0cml4VG9SZWYsXHJcbn0gZnJvbSBcImNvcmUvTWF0aHMvVGhpbk1hdGhzL3RoaW5NYXRoLm1hdHJpeC5mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHR5cGUgeyBJQ29sb3I0TGlrZSwgSU1hdHJpeExpa2UgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmxpa2VcIjtcclxuXHJcbi8qKlxyXG4gKiBBYnN0cmFjdCBOb2RlIGNsYXNzIGZyb20gQmFieWxvbi5qc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTm9kZUxpa2Uge1xyXG4gICAgZ2V0V29ybGRNYXRyaXgoKTogSU1hdHJpeExpa2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB1c2VkIHRvIHJlbmRlciB0ZXh0IHVzaW5nIE1TREYgKE11bHRpLWNoYW5uZWwgU2lnbmVkIERpc3RhbmNlIEZpZWxkKSB0ZWNobmlxdWVcclxuICogVGhhbmtzIGEgbG90IHRvIHRoZSB3b3JrIG9mIEJodXNoYW5fV2FnaCBhbmQgemJfc2ogZm9yIHRoZWlyIGFtYXppbmcgd29yayBvbiBNU0RGIGZvciBCYWJ5bG9uLmpzXHJcbiAqICM2UkxDV1AjMTZcclxuICogU3RhciB3YXJzIHNjcm9sbGVyOiAjNlJMQ1dQIzI5XHJcbiAqIFdpdGggbWV0cmljczogIzZSTENXUCMzNVxyXG4gKiBUaGlja25lc3M6ICNJQUJNRVojM1xyXG4gKiBTb2xhciBzeXN0ZW06ICM5WUNEWUMjOVxyXG4gKiBTdHJva2U6ICM2UkxDV1AjMzdcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0UmVuZGVyZXIgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91c2VWQU86IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2VuZ2luZTogQWJzdHJhY3RFbmdpbmU7XHJcbiAgICBwcml2YXRlIF9zaGFkZXJMYW5ndWFnZTogU2hhZGVyTGFuZ3VhZ2U7XHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhCdWZmZXJzOiB7IFtrZXk6IHN0cmluZ106IFZlcnRleEJ1ZmZlciB9ID0ge307XHJcbiAgICBwcml2YXRlIF9zcHJpdGVCdWZmZXI6IE51bGxhYmxlPEJ1ZmZlcj47XHJcbiAgICBwcml2YXRlIF93b3JsZEJ1ZmZlcjogTnVsbGFibGU8QnVmZmVyPjtcclxuICAgIHByaXZhdGUgX3V2QnVmZmVyOiBOdWxsYWJsZTxCdWZmZXI+O1xyXG4gICAgcHJpdmF0ZSBfZHJhd1dyYXBwZXJCYXNlOiBEcmF3V3JhcHBlcjtcclxuICAgIHByaXZhdGUgX3ZlcnRleEFycmF5T2JqZWN0OiBXZWJHTFZlcnRleEFycmF5T2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBfZm9udDogRm9udEFzc2V0O1xyXG4gICAgcHJpdmF0ZSBfY2hhck1hdHJpY2VzID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgIHByaXZhdGUgX2NoYXJVdnMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgcHJpdmF0ZSBfaXNEaXJ0eSA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9iYXNlTGluZSA9IDA7XHJcblxyXG4gICAgLy8gQ2FjaGVcclxuICAgIHByaXZhdGUgX3NjYWxpbmdNYXRyaXggPSBuZXcgVGhpbk1hdHJpeCgpO1xyXG4gICAgcHJpdmF0ZSBfZm9udFNjYWxlTWF0cml4ID0gbmV3IFRoaW5NYXRyaXgoKTtcclxuICAgIHByaXZhdGUgX29mZnNldE1hdHJpeCA9IG5ldyBUaGluTWF0cml4KCk7XHJcbiAgICBwcml2YXRlIF90cmFuc2xhdGlvbk1hdHJpeCA9IG5ldyBUaGluTWF0cml4KCk7XHJcbiAgICBwcml2YXRlIF9iYXNlTWF0cml4ID0gbmV3IFRoaW5NYXRyaXgoKTtcclxuICAgIHByaXZhdGUgX3NjYWxlZE1hdHJpeCA9IG5ldyBUaGluTWF0cml4KCk7XHJcbiAgICBwcml2YXRlIF9sb2NhbE1hdHJpeCA9IG5ldyBUaGluTWF0cml4KCk7XHJcbiAgICBwcml2YXRlIF9maW5hbE1hdHJpeCA9IG5ldyBUaGluTWF0cml4KCk7XHJcbiAgICBwcml2YXRlIF9saW5lTWF0cml4ID0gbmV3IFRoaW5NYXRyaXgoKTtcclxuICAgIHByaXZhdGUgX3BhcmVudFdvcmxkTWF0cml4ID0gbmV3IFRoaW5NYXRyaXgoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgY29sb3Igb2YgdGhlIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbG9yOiBJQ29sb3I0TGlrZSA9IHsgcjogMS4wLCBnOiAxLjAsIGI6IDEuMCwgYTogMS4wIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIGNvbG9yIG9mIHRoZSBzdHJva2UgYXJvdW5kIHRoZSB0ZXh0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcjogSUNvbG9yNExpa2UgPSB7IHI6IDEuMCwgZzogMS4wLCBiOiAxLjAsIGE6IDEuMCB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB3aWR0aCBvZiB0aGUgc3Ryb2tlIGFyb3VuZCB0aGUgdGV4dCAoaW5zZXQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VJbnNldFdpZHRoID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgd2lkdGggb2YgdGhlIHN0cm9rZSBhcm91bmQgdGhlIHRleHQgKG91dHNldClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0cm9rZU91dHNldFdpZHRoID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgdGhpY2tuZXNzIG9mIHRoZSB0ZXh0ICgwIG1lYW5zIGFzIGRlZmluZWQgaW4gdGhlIGZvbnQpXHJcbiAgICAgKiBWYWx1ZSBtdXN0IGJlIGJldHdlZW4gLTAuNSBhbmQgMC41XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0aGlja25lc3NDb250cm9sID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9wYXJlbnQ6IE51bGxhYmxlPElOb2RlTGlrZT4gPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSBwYXJlbnQgb2YgdGhlIHRleHQgcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBwYXJlbnQoKTogTnVsbGFibGU8SU5vZGVMaWtlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHBhcmVudCh2YWx1ZTogTnVsbGFibGU8SU5vZGVMaWtlPikge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RyYW5zZm9ybU1hdHJpeDogSU1hdHJpeExpa2UgPSBuZXcgVGhpbk1hdHJpeCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBvciBzZXRzIHRoZSB0cmFuc2Zvcm0gbWF0cml4IG9mIHRoZSB0ZXh0IHJlbmRlcmVyXHJcbiAgICAgKiBJdCB3aWxsIGJlIGFwcGxpZWQgaW4gdGhhdCBvcmRlcjpcclxuICAgICAqIHBhcmVudCB4IHRyYW5zZm9ybSB4IHBhcmFncmFwaCB3b3JsZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHRyYW5zZm9ybU1hdHJpeCgpOiBJTWF0cml4TGlrZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zZm9ybU1hdHJpeDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRyYW5zZm9ybU1hdHJpeCh2YWx1ZTogSU1hdHJpeExpa2UpIHtcclxuICAgICAgICB0aGlzLl90cmFuc2Zvcm1NYXRyaXggPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBpZiB0aGUgdGV4dCBpcyBiaWxsYm9hcmRlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNCaWxsYm9hcmQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgb3Igc2V0cyBpZiB0aGUgdGV4dCBpcyBzY3JlZW4gcHJvamVjdGVkXHJcbiAgICAgKiBUaGlzIHdpbGwgd29yayBvbmx5IGlmIHRoZSB0ZXh0IGlzIGJpbGxib2FyZGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0JpbGxib2FyZFNjcmVlblByb2plY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgcmVuZGVyZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjaGFyYWN0ZXJDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFyTWF0cmljZXMubGVuZ3RoIC8gMTY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG9yIHNldHMgaWYgdGhlIHRleHQgcmVuZGVyZXIgc2hvdWxkIGlnbm9yZSB0aGUgZGVwdGggYnVmZmVyXHJcbiAgICAgKiBEZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpZ25vcmVEZXB0aEJ1ZmZlciA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoZW5naW5lOiBBYnN0cmFjdEVuZ2luZSwgc2hhZGVyTGFuZ3VhZ2U6IFNoYWRlckxhbmd1YWdlID0gU2hhZGVyTGFuZ3VhZ2UuR0xTTCwgZm9udDogRm9udEFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMuX3NoYWRlckxhbmd1YWdlID0gc2hhZGVyTGFuZ3VhZ2U7XHJcbiAgICAgICAgdGhpcy5fZm9udCA9IGZvbnQ7XHJcbiAgICAgICAgdGhpcy5fYmFzZUxpbmUgPSBmb250Ll9mb250LmNvbW1vbi5saW5lSGVpZ2h0ICogZm9udC5zY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXNlVkFPID0gZW5naW5lLmdldENhcHMoKS52ZXJ0ZXhBcnJheU9iamVjdCAmJiAhZW5naW5lLmRpc2FibGVWZXJ0ZXhBcnJheU9iamVjdHM7XHJcblxyXG4gICAgICAgIC8vIE1haW4gdmVydGV4IGJ1ZmZlclxyXG4gICAgICAgIGNvbnN0IHNwcml0ZURhdGEgPSBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxXSk7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlQnVmZmVyID0gbmV3IEJ1ZmZlcihlbmdpbmUsIHNwcml0ZURhdGEsIGZhbHNlLCAyKTtcclxuICAgICAgICB0aGlzLl92ZXJ0ZXhCdWZmZXJzW1wib2Zmc2V0c1wiXSA9IHRoaXMuX3Nwcml0ZUJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJvZmZzZXRzXCIsIDAsIDIpO1xyXG5cclxuICAgICAgICAvLyBJbnN0YW5jZXNcclxuICAgICAgICB0aGlzLl9yZXNpemVCdWZmZXJzKDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzaXplQnVmZmVycyhjYXBhY2l0eTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dvcmxkQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkQnVmZmVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fd29ybGRCdWZmZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3V2QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3V2QnVmZmVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fdXZCdWZmZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fd29ybGRCdWZmZXIgPSBuZXcgQnVmZmVyKHRoaXMuX2VuZ2luZSwgbmV3IEZsb2F0MzJBcnJheShjYXBhY2l0eSAqIDE2KSwgdHJ1ZSwgMTYpO1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlcnNbXCJ3b3JsZDBcIl0gPSB0aGlzLl93b3JsZEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJ3b3JsZDBcIiwgMCwgNCwgMTYsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlcnNbXCJ3b3JsZDFcIl0gPSB0aGlzLl93b3JsZEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJ3b3JsZDFcIiwgNCwgNCwgMTYsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlcnNbXCJ3b3JsZDJcIl0gPSB0aGlzLl93b3JsZEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJ3b3JsZDJcIiwgOCwgNCwgMTYsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX3ZlcnRleEJ1ZmZlcnNbXCJ3b3JsZDNcIl0gPSB0aGlzLl93b3JsZEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoXCJ3b3JsZDNcIiwgMTIsIDQsIDE2LCB0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXZCdWZmZXIgPSBuZXcgQnVmZmVyKHRoaXMuX2VuZ2luZSwgbmV3IEZsb2F0MzJBcnJheShjYXBhY2l0eSAqIDQpLCB0cnVlLCA0KTtcclxuICAgICAgICB0aGlzLl92ZXJ0ZXhCdWZmZXJzW1widXZzXCJdID0gdGhpcy5fdXZCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKFwidXZzXCIsIDAsIDQsIDQsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldFNoYWRlcnModmVydGV4OiBzdHJpbmcsIGZyYWdtZW50OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9kcmF3V3JhcHBlckJhc2U/LmRpc3Bvc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhd1dyYXBwZXJCYXNlID0gbmV3IERyYXdXcmFwcGVyKHRoaXMuX2VuZ2luZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmF3V3JhcHBlckJhc2UuZHJhd0NvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhd1dyYXBwZXJCYXNlLmRyYXdDb250ZXh0LnVzZUluc3RhbmNpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGVmaW5lcyA9IFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYXdXcmFwcGVyQmFzZS5lZmZlY3QgPSB0aGlzLl9lbmdpbmUuY3JlYXRlRWZmZWN0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTb3VyY2U6IHZlcnRleCxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U291cmNlOiBmcmFnbWVudCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW1wib2Zmc2V0c1wiLCBcIndvcmxkMFwiLCBcIndvcmxkMVwiLCBcIndvcmxkMlwiLCBcIndvcmxkM1wiLCBcInV2c1wiXSxcclxuICAgICAgICAgICAgW1wicGFyZW50V29ybGRcIiwgXCJ2aWV3XCIsIFwicHJvamVjdGlvblwiLCBcInVDb2xvclwiLCBcInRoaWNrbmVzc1wiLCBcInVTdHJva2VDb2xvclwiLCBcInVTdHJva2VJbnNldFdpZHRoXCIsIFwidVN0cm9rZU91dHNldFdpZHRoXCIsIFwibW9kZVwiLCBcInRyYW5zZm9ybVwiXSxcclxuICAgICAgICAgICAgW1wiZm9udEF0bGFzXCJdLFxyXG4gICAgICAgICAgICBkZWZpbmVzLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWRlckxhbmd1YWdlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhd1dyYXBwZXJCYXNlLmVmZmVjdC5fcmVmQ291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHBhcmFncmFwaCBvZiB0ZXh0IHRvIHRoZSByZW5kZXJlclxyXG4gICAgICogQHBhcmFtIHRleHQgZGVmaW5lIHRoZSB0ZXh0IHRvIGFkZFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgZGVmaW5lIHRoZSBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHBhcmFncmFwaCAob3B0aW9uYWwpXHJcbiAgICAgKiBAcGFyYW0gd29ybGRNYXRyaXggZGVmaW5lIHRoZSB3b3JsZCBtYXRyaXggdG8gdXNlIGZvciB0aGUgcGFyYWdyYXBoIChvcHRpb25hbClcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFBhcmFncmFwaCh0ZXh0OiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPFBhcmFncmFwaE9wdGlvbnM+LCB3b3JsZE1hdHJpeD86IElNYXRyaXhMaWtlKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gbmV3IFNkZlRleHRQYXJhZ3JhcGgodGV4dCwgdGhpcy5fZm9udCwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvbnRTY2FsZSA9IHRoaXMuX2ZvbnQuc2NhbGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleFdpZHRoID0gdGhpcy5fZm9udC5fZm9udC5jb21tb24uc2NhbGVXO1xyXG4gICAgICAgIGNvbnN0IHRleEhlaWdodCA9IHRoaXMuX2ZvbnQuX2ZvbnQuY29tbW9uLnNjYWxlSDtcclxuICAgICAgICBjb25zdCBnbHlwaHMgPSBwYXJhZ3JhcGguZ2x5cGhzLmZpbHRlcigoZykgPT4gZy5jaGFyLnBhZ2UgPj0gMCk7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZE1hdHJpeFRvVXNlID0gd29ybGRNYXRyaXg7XHJcblxyXG4gICAgICAgIGlmICghd29ybGRNYXRyaXhUb1VzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyYWdyYXBoLmxpbmVIZWlnaHQgKiBmb250U2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmVPZmZzZXQgPSAocGFyYWdyYXBoLmxpbmVzLmxlbmd0aCAqIGxpbmVIZWlnaHQpIC8gMjtcclxuICAgICAgICAgICAgVHJhbnNsYXRpb25NYXRyaXhUb1JlZigwLCB0aGlzLl9iYXNlTGluZSAtIGxpbmVPZmZzZXQsIDAsIHRoaXMuX2xpbmVNYXRyaXgpO1xyXG4gICAgICAgICAgICB3b3JsZE1hdHJpeFRvVXNlID0gdGhpcy5fbGluZU1hdHJpeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFNjYWxpbmdNYXRyaXhUb1JlZihmb250U2NhbGUsIGZvbnRTY2FsZSwgMS4wLCB0aGlzLl9mb250U2NhbGVNYXRyaXgpO1xyXG4gICAgICAgIFRyYW5zbGF0aW9uTWF0cml4VG9SZWYoMC41LCAtMC41LCAwLCB0aGlzLl9vZmZzZXRNYXRyaXgpO1xyXG5cclxuICAgICAgICBjb25zdCBjaGFyc1V2c0Jhc2UgPSB0aGlzLl9jaGFyVXZzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBtYXRyaWNlc0Jhc2UgPSB0aGlzLl9jaGFyTWF0cmljZXMubGVuZ3RoO1xyXG4gICAgICAgIGdseXBocy5mb3JFYWNoKChnLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYXJVdnNbY2hhcnNVdnNCYXNlICsgaSAqIDQgKyAwXSA9IGcuY2hhci54IC8gdGV4V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYXJVdnNbY2hhcnNVdnNCYXNlICsgaSAqIDQgKyAxXSA9IGcuY2hhci55IC8gdGV4SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFyVXZzW2NoYXJzVXZzQmFzZSArIGkgKiA0ICsgMl0gPSBnLmNoYXIud2lkdGggLyB0ZXhXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5fY2hhclV2c1tjaGFyc1V2c0Jhc2UgKyBpICogNCArIDNdID0gZy5jaGFyLmhlaWdodCAvIHRleEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBnLnggKyBnLmNoYXIueG9mZnNldDtcclxuICAgICAgICAgICAgY29uc3QgeSA9IDEuMCAtIChnLnkgKyBnLmNoYXIueW9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICBTY2FsaW5nTWF0cml4VG9SZWYoZy5jaGFyLndpZHRoLCBnLmNoYXIuaGVpZ2h0LCAxLjAsIHRoaXMuX3NjYWxpbmdNYXRyaXgpO1xyXG4gICAgICAgICAgICBNdWx0aXBseU1hdHJpY2VzVG9SZWYodGhpcy5fb2Zmc2V0TWF0cml4LCB0aGlzLl9zY2FsaW5nTWF0cml4LCB0aGlzLl9iYXNlTWF0cml4KTtcclxuXHJcbiAgICAgICAgICAgIFRyYW5zbGF0aW9uTWF0cml4VG9SZWYoeCAqIGZvbnRTY2FsZSwgeSAqIGZvbnRTY2FsZSwgMC4wLCB0aGlzLl90cmFuc2xhdGlvbk1hdHJpeCk7XHJcbiAgICAgICAgICAgIE11bHRpcGx5TWF0cmljZXNUb1JlZih0aGlzLl9iYXNlTWF0cml4LCB0aGlzLl9mb250U2NhbGVNYXRyaXgsIHRoaXMuX3NjYWxlZE1hdHJpeCk7XHJcbiAgICAgICAgICAgIE11bHRpcGx5TWF0cmljZXNUb1JlZih0aGlzLl9zY2FsZWRNYXRyaXgsIHRoaXMuX3RyYW5zbGF0aW9uTWF0cml4LCB0aGlzLl9sb2NhbE1hdHJpeCk7XHJcblxyXG4gICAgICAgICAgICBNdWx0aXBseU1hdHJpY2VzVG9SZWYodGhpcy5fbG9jYWxNYXRyaXgsIHdvcmxkTWF0cml4VG9Vc2UsIHRoaXMuX2ZpbmFsTWF0cml4KTtcclxuICAgICAgICAgICAgQ29weU1hdHJpeFRvQXJyYXkodGhpcy5fZmluYWxNYXRyaXgsIHRoaXMuX2NoYXJNYXRyaWNlcywgbWF0cmljZXNCYXNlICsgaSAqIDE2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNEaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhc2VMaW5lIC09IHBhcmFncmFwaC5saW5lSGVpZ2h0ICogZm9udFNjYWxlICogcGFyYWdyYXBoLmxpbmVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlciB0aGUgdGV4dCB1c2luZyB0aGUgcHJvdmlkZWQgdmlldyBhbmQgcHJvamVjdGlvbiBtYXRyaWNlc1xyXG4gICAgICogQHBhcmFtIHZpZXdNYXRyaXggZGVmaW5lIHRoZSB2aWV3IG1hdHJpeCB0byB1c2VcclxuICAgICAqIEBwYXJhbSBwcm9qZWN0aW9uTWF0cml4IGRlZmluZSB0aGUgcHJvamVjdGlvbiBtYXRyaXggdG8gdXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW5kZXIodmlld01hdHJpeDogSU1hdHJpeExpa2UsIHByb2plY3Rpb25NYXRyaXg6IElNYXRyaXhMaWtlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZHJhd1dyYXBwZXIgPSB0aGlzLl9kcmF3V3JhcHBlckJhc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IGRyYXdXcmFwcGVyLmVmZmVjdCE7XHJcblxyXG4gICAgICAgIC8vIENoZWNrXHJcbiAgICAgICAgaWYgKCFlZmZlY3QuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZW5naW5lID0gdGhpcy5fZW5naW5lO1xyXG5cclxuICAgICAgICBlbmdpbmUuc2V0U3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGVuZ2luZS5lbmFibGVFZmZlY3QoZHJhd1dyYXBwZXIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZ25vcmVEZXB0aEJ1ZmZlcikge1xyXG4gICAgICAgICAgICBlbmdpbmUuc2V0RGVwdGhCdWZmZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICAgICAgICBDb3B5TWF0cml4VG9SZWYodGhpcy5fcGFyZW50LmdldFdvcmxkTWF0cml4KCksIHRoaXMuX3BhcmVudFdvcmxkTWF0cml4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBJZGVudGl0eU1hdHJpeFRvUmVmKHRoaXMuX3BhcmVudFdvcmxkTWF0cml4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVmZmVjdC5zZXRJbnQoXCJtb2RlXCIsIHRoaXMuaXNCaWxsYm9hcmQgPyAodGhpcy5pc0JpbGxib2FyZFNjcmVlblByb2plY3RlZCA/IDIgOiAxKSA6IDApO1xyXG4gICAgICAgIGVmZmVjdC5zZXRNYXRyaXgoXCJwYXJlbnRXb3JsZFwiLCB0aGlzLl9wYXJlbnRXb3JsZE1hdHJpeCk7XHJcbiAgICAgICAgZWZmZWN0LnNldE1hdHJpeChcInZpZXdcIiwgdmlld01hdHJpeCk7XHJcbiAgICAgICAgZWZmZWN0LnNldE1hdHJpeChcInByb2plY3Rpb25cIiwgcHJvamVjdGlvbk1hdHJpeCk7XHJcbiAgICAgICAgZWZmZWN0LnNldE1hdHJpeChcInRyYW5zZm9ybVwiLCB0aGlzLnRyYW5zZm9ybU1hdHJpeCk7XHJcblxyXG4gICAgICAgIC8vIFRleHR1cmVcclxuICAgICAgICBlZmZlY3Quc2V0VGV4dHVyZShcImZvbnRBdGxhc1wiLCB0aGlzLl9mb250LnRleHR1cmVzWzBdKTtcclxuICAgICAgICBlZmZlY3Quc2V0RGlyZWN0Q29sb3I0KFwidUNvbG9yXCIsIHRoaXMuY29sb3IpO1xyXG4gICAgICAgIGVmZmVjdC5zZXREaXJlY3RDb2xvcjQoXCJ1U3Ryb2tlQ29sb3JcIiwgdGhpcy5zdHJva2VDb2xvcik7XHJcbiAgICAgICAgZWZmZWN0LnNldEZsb2F0KFwidGhpY2tuZXNzXCIsIHRoaXMudGhpY2tuZXNzQ29udHJvbCAqIDAuOSk7XHJcbiAgICAgICAgZWZmZWN0LnNldEZsb2F0KFwidVN0cm9rZUluc2V0V2lkdGhcIiwgdGhpcy5zdHJva2VJbnNldFdpZHRoKTtcclxuICAgICAgICBlZmZlY3Quc2V0RmxvYXQoXCJ1U3Ryb2tlT3V0c2V0V2lkdGhcIiwgdGhpcy5zdHJva2VPdXRzZXRXaWR0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlQ291bnQgPSB0aGlzLl9jaGFyTWF0cmljZXMubGVuZ3RoIC8gMTY7XHJcblxyXG4gICAgICAgIC8vIE5lZWQgdXBkYXRlP1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl93b3JsZEJ1ZmZlciEuZ2V0QnVmZmVyKCkhLmNhcGFjaXR5IC8gNCA8IGluc3RhbmNlQ291bnQgKiAxNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplQnVmZmVycyhpbnN0YW5jZUNvdW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fd29ybGRCdWZmZXIhLnVwZGF0ZSh0aGlzLl9jaGFyTWF0cmljZXMpO1xyXG4gICAgICAgICAgICB0aGlzLl91dkJ1ZmZlciEudXBkYXRlKHRoaXMuX2NoYXJVdnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZVZBTykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3ZlcnRleEFycmF5T2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92ZXJ0ZXhBcnJheU9iamVjdCA9IChlbmdpbmUgYXMgVGhpbkVuZ2luZSkucmVjb3JkVmVydGV4QXJyYXlPYmplY3QodGhpcy5fdmVydGV4QnVmZmVycywgbnVsbCwgZWZmZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAoZW5naW5lIGFzIFRoaW5FbmdpbmUpLmJpbmRWZXJ0ZXhBcnJheU9iamVjdCh0aGlzLl92ZXJ0ZXhBcnJheU9iamVjdCwgbnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVkJPc1xyXG4gICAgICAgICAgICBlbmdpbmUuYmluZEJ1ZmZlcnModGhpcy5fdmVydGV4QnVmZmVycywgbnVsbCwgZWZmZWN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVuZ2luZS5zZXRBbHBoYU1vZGUoQ29uc3RhbnRzLkFMUEhBX0NPTUJJTkUpO1xyXG4gICAgICAgIGVuZ2luZS5kcmF3QXJyYXlzVHlwZShDb25zdGFudHMuTUFURVJJQUxfVHJpYW5nbGVTdHJpcERyYXdNb2RlLCAwLCA0LCBpbnN0YW5jZUNvdW50KTtcclxuICAgICAgICBlbmdpbmUudW5iaW5kSW5zdGFuY2VBdHRyaWJ1dGVzKCk7XHJcbiAgICAgICAgZW5naW5lLnNldEFscGhhTW9kZShDb25zdGFudHMuQUxQSEFfRElTQUJMRSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlnbm9yZURlcHRoQnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGVuZ2luZS5zZXREZXB0aEJ1ZmZlcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWxlYXNlIGFzc29jaWF0ZWQgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93b3JsZEJ1ZmZlcikge1xyXG4gICAgICAgICAgICB0aGlzLl93b3JsZEJ1ZmZlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkQnVmZmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl91dkJ1ZmZlcikge1xyXG4gICAgICAgICAgICB0aGlzLl91dkJ1ZmZlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3V2QnVmZmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zcHJpdGVCdWZmZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlQnVmZmVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlQnVmZmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl92ZXJ0ZXhBcnJheU9iamVjdCkge1xyXG4gICAgICAgICAgICAodGhpcy5fZW5naW5lIGFzIFRoaW5FbmdpbmUpLnJlbGVhc2VWZXJ0ZXhBcnJheU9iamVjdCh0aGlzLl92ZXJ0ZXhBcnJheU9iamVjdCk7XHJcbiAgICAgICAgICAgICg8YW55PnRoaXMuX3ZlcnRleEFycmF5T2JqZWN0KSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBUZXh0UmVuZGVyZXIgaW5zdGFuY2UgYXN5bmNocm9ub3VzbHlcclxuICAgICAqIEBwYXJhbSBmb250IGRlZmluZSB0aGUgZm9udCBhc3NldCB0byB1c2VcclxuICAgICAqIEBwYXJhbSBlbmdpbmUgZGVmaW5lIHRoZSBlbmdpbmUgdG8gdXNlXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgY3JlYXRlZCBUZXh0UmVuZGVyZXIgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBDcmVhdGVUZXh0UmVuZGVyZXJBc3luYyhmb250OiBGb250QXNzZXQsIGVuZ2luZTogQWJzdHJhY3RFbmdpbmUpIHtcclxuICAgICAgICBpZiAoIWVuZ2luZS5nZXRDYXBzKCkuaW5zdGFuY2VkQXJyYXlzIHx8ICFlbmdpbmUuX2ZlYXR1cmVzLnN1cHBvcnRTcHJpdGVJbnN0YW5jaW5nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluc3RhbmNlZCBhcnJheXMgYXJlIHJlcXVpcmVkIGZvciBNU0RGIHRleHQgcmVuZGVyaW5nLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaGFkZXJMYW5ndWFnZSA9IFNoYWRlckxhbmd1YWdlLkdMU0w7XHJcbiAgICAgICAgbGV0IHZlcnRleDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgZnJhZ21lbnQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGVuZ2luZS5pc1dlYkdQVSkge1xyXG4gICAgICAgICAgICBzaGFkZXJMYW5ndWFnZSA9IFNoYWRlckxhbmd1YWdlLldHU0w7XHJcbiAgICAgICAgICAgIHZlcnRleCA9IChhd2FpdCBpbXBvcnQoXCIuL3NoYWRlcnNXR1NML21zZGYudmVydGV4XCIpKS5tc2RmVmVydGV4U2hhZGVyV0dTTC5zaGFkZXI7XHJcbiAgICAgICAgICAgIGZyYWdtZW50ID0gKGF3YWl0IGltcG9ydChcIi4vc2hhZGVyc1dHU0wvbXNkZi5mcmFnbWVudFwiKSkubXNkZlBpeGVsU2hhZGVyV0dTTC5zaGFkZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmVydGV4ID0gKGF3YWl0IGltcG9ydChcIi4vc2hhZGVycy9tc2RmLnZlcnRleFwiKSkubXNkZlZlcnRleFNoYWRlci5zaGFkZXI7XHJcbiAgICAgICAgICAgIGZyYWdtZW50ID0gKGF3YWl0IGltcG9ydChcIi4vc2hhZGVycy9tc2RmLmZyYWdtZW50XCIpKS5tc2RmUGl4ZWxTaGFkZXIuc2hhZGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGV4dFJlbmRlcmVyID0gbmV3IFRleHRSZW5kZXJlcihlbmdpbmUsIHNoYWRlckxhbmd1YWdlLCBmb250KTtcclxuICAgICAgICB0ZXh0UmVuZGVyZXIuX3NldFNoYWRlcnModmVydGV4LCBmcmFnbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0UmVuZGVyZXI7XHJcbiAgICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NYXRoc19tYXRoX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlc1xyXG5pbXBvcnQgKiBhcyBhZGRvbnMgZnJvbSBcImFkZG9ucy9pbmRleFwiO1xyXG5cclxuZXhwb3J0IHsgYWRkb25zIH07XHJcbmV4cG9ydCBkZWZhdWx0IGFkZG9ucztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
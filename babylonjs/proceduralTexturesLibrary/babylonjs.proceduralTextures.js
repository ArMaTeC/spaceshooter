(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-procedural-textures", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-procedural-textures"] = factory(require("babylonjs"));
	else
		root["PROCEDURALTEXTURES"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_decorators__) => {
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

/***/ "../../../dev/proceduralTextures/src/brick/brickProceduralTexture.fragment.ts":
/*!************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/brick/brickProceduralTexture.fragment.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   brickProceduralTexturePixelShader: () => (/* binding */ brickProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "brickProceduralTexturePixelShader";
var shader = "precision highp float;varying vec2 vPosition;varying vec2 vUV;uniform float numberOfBricksHeight;uniform float numberOfBricksWidth;uniform vec3 brickColor;uniform vec3 jointColor;float rand(vec2 n) {return fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);}\nfloat noise(vec2 n) {const vec2 d=vec2(0.0,1.0);vec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));return mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);}\nfloat fbm(vec2 n) {float total=0.0,amplitude=1.0;for (int i=0; i<4; i++) {total+=noise(n)*amplitude;n+=n;amplitude*=0.5;}\nreturn total;}\nfloat roundF(float number){return sign(number)*floor(abs(number)+0.5);}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void)\n{float brickW=1.0/numberOfBricksWidth;float brickH=1.0/numberOfBricksHeight;float jointWPercentage=0.01;float jointHPercentage=0.05;vec3 color=brickColor;float yi=vUV.y/brickH;float nyi=roundF(yi);float xi=vUV.x/brickW;if (mod(floor(yi),2.0)==0.0){xi=xi-0.5;}\nfloat nxi=roundF(xi);vec2 brickvUV=vec2((xi-floor(xi))/brickH,(yi-floor(yi))/ brickW);if (yi<nyi+jointHPercentage && yi>nyi-jointHPercentage){color=mix(jointColor,vec3(0.37,0.25,0.25),(yi-nyi)/jointHPercentage+0.2);}\nelse if (xi<nxi+jointWPercentage && xi>nxi-jointWPercentage){color=mix(jointColor,vec3(0.44,0.44,0.44),(xi-nxi)/jointWPercentage+0.2);}\nelse {float brickColorSwitch=mod(floor(yi)+floor(xi),3.0);if (brickColorSwitch==0.0)\ncolor=mix(color,vec3(0.33,0.33,0.33),0.3);else if (brickColorSwitch==2.0)\ncolor=mix(color,vec3(0.11,0.11,0.11),0.3);}\ngl_FragColor=vec4(color,1.0);}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var brickProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/brick/brickProceduralTexture.ts":
/*!***************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/brick/brickProceduralTexture.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrickProceduralTexture: () => (/* binding */ BrickProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _brickProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brickProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/brick/brickProceduralTexture.fragment.ts");







var BrickProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(BrickProceduralTexture, _super);
    function BrickProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "brickProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._numberOfBricksHeight = 15;
        _this._numberOfBricksWidth = 5;
        _this._jointColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.72, 0.72, 0.72);
        _this._brickColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.77, 0.47, 0.4);
        _this.updateShaderUniforms();
        return _this;
    }
    BrickProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("numberOfBricksHeight", this._numberOfBricksHeight);
        this.setFloat("numberOfBricksWidth", this._numberOfBricksWidth);
        this.setColor3("brickColor", this._brickColor);
        this.setColor3("jointColor", this._jointColor);
    };
    Object.defineProperty(BrickProceduralTexture.prototype, "numberOfBricksHeight", {
        get: function () {
            return this._numberOfBricksHeight;
        },
        set: function (value) {
            this._numberOfBricksHeight = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrickProceduralTexture.prototype, "numberOfBricksWidth", {
        get: function () {
            return this._numberOfBricksWidth;
        },
        set: function (value) {
            this._numberOfBricksWidth = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrickProceduralTexture.prototype, "jointColor", {
        get: function () {
            return this._jointColor;
        },
        set: function (value) {
            this._jointColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrickProceduralTexture.prototype, "brickColor", {
        get: function () {
            return this._brickColor;
        },
        set: function (value) {
            this._brickColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this brick procedural texture
     * @returns a serialized brick procedural texture object
     */
    BrickProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.BrickProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Brick Procedural Texture from parsed brick procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing brick procedural texture information
     * @returns a parsed Brick Procedural Texture
     */
    BrickProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new BrickProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], BrickProceduralTexture.prototype, "numberOfBricksHeight", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], BrickProceduralTexture.prototype, "numberOfBricksWidth", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
    ], BrickProceduralTexture.prototype, "jointColor", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
    ], BrickProceduralTexture.prototype, "brickColor", null);
    return BrickProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.BrickProceduralTexture", BrickProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/brick/index.ts":
/*!**********************************************************!*\
  !*** ../../../dev/proceduralTextures/src/brick/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrickProceduralTexture: () => (/* reexport safe */ _brickProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.BrickProceduralTexture)
/* harmony export */ });
/* harmony import */ var _brickProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brickProceduralTexture */ "../../../dev/proceduralTextures/src/brick/brickProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/cloud/cloudProceduralTexture.fragment.ts":
/*!************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/cloud/cloudProceduralTexture.fragment.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloudProceduralTexturePixelShader: () => (/* binding */ cloudProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "cloudProceduralTexturePixelShader";
var shader = "precision highp float;varying vec2 vUV;uniform vec4 skyColor;uniform vec4 cloudColor;uniform float amplitude;uniform int numOctaves;float rand(vec2 n) {return fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);}\nfloat noise(vec2 n) {const vec2 d=vec2(0.0,1.0);vec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));return mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);}\nfloat fbm(vec2 n) {float total=0.0,ampl=amplitude;\n#ifdef WEBGL2\nfor (int i=0; i<numOctaves; i++) {\n#else\nfor (int i=0; i<4; i++) {\n#endif\ntotal+=noise(n)*ampl;n+=n;ampl*=0.5;}\nreturn total;}\nvoid main() {vec2 p=vUV*12.0;vec4 c=mix(skyColor,cloudColor,fbm(p));gl_FragColor=c;}\n";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var cloudProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/cloud/cloudProceduralTexture.ts":
/*!***************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/cloud/cloudProceduralTexture.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudProceduralTexture: () => (/* binding */ CloudProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cloudProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloudProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/cloud/cloudProceduralTexture.fragment.ts");







var CloudProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CloudProceduralTexture, _super);
    function CloudProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "cloudProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._skyColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color4(0.15, 0.68, 1.0, 1.0);
        _this._cloudColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color4(1, 1, 1, 1.0);
        _this._amplitude = 1;
        _this._numOctaves = 4;
        _this.updateShaderUniforms();
        return _this;
    }
    CloudProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setColor4("skyColor", this._skyColor);
        this.setColor4("cloudColor", this._cloudColor);
        this.setFloat("amplitude", this._amplitude);
        this.setInt("numOctaves", this._numOctaves);
    };
    Object.defineProperty(CloudProceduralTexture.prototype, "skyColor", {
        get: function () {
            return this._skyColor;
        },
        set: function (value) {
            this._skyColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudProceduralTexture.prototype, "cloudColor", {
        get: function () {
            return this._cloudColor;
        },
        set: function (value) {
            this._cloudColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudProceduralTexture.prototype, "amplitude", {
        get: function () {
            return this._amplitude;
        },
        set: function (value) {
            this._amplitude = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudProceduralTexture.prototype, "numOctaves", {
        get: function () {
            return this._numOctaves;
        },
        set: function (value) {
            this._numOctaves = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this cloud procedural texture
     * @returns a serialized cloud procedural texture object
     */
    CloudProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.CloudProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Cloud Procedural Texture from parsed cloud procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing cloud procedural texture information
     * @returns a parsed Cloud Procedural Texture
     */
    CloudProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new CloudProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor4)()
    ], CloudProceduralTexture.prototype, "skyColor", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor4)()
    ], CloudProceduralTexture.prototype, "cloudColor", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], CloudProceduralTexture.prototype, "amplitude", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], CloudProceduralTexture.prototype, "numOctaves", null);
    return CloudProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.CloudProceduralTexture", CloudProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/cloud/index.ts":
/*!**********************************************************!*\
  !*** ../../../dev/proceduralTextures/src/cloud/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudProceduralTexture: () => (/* reexport safe */ _cloudProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.CloudProceduralTexture)
/* harmony export */ });
/* harmony import */ var _cloudProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloudProceduralTexture */ "../../../dev/proceduralTextures/src/cloud/cloudProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/fire/fireProceduralTexture.fragment.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/fire/fireProceduralTexture.fragment.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fireProceduralTexturePixelShader: () => (/* binding */ fireProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "fireProceduralTexturePixelShader";
var shader = "precision highp float;uniform float time;uniform vec3 c1;uniform vec3 c2;uniform vec3 c3;uniform vec3 c4;uniform vec3 c5;uniform vec3 c6;uniform vec2 speed;uniform float shift;uniform float alphaThreshold;varying vec2 vUV;float rand(vec2 n) {return fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);}\nfloat noise(vec2 n) {const vec2 d=vec2(0.0,1.0);vec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));return mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);}\nfloat fbm(vec2 n) {float total=0.0,amplitude=1.0;for (int i=0; i<4; i++) {total+=noise(n)*amplitude;n+=n;amplitude*=0.5;}\nreturn total;}\nvoid main() {vec2 p=vUV*8.0;float q=fbm(p-time*0.1);vec2 r=vec2(fbm(p+q+time*speed.x-p.x-p.y),fbm(p+q-time*speed.y));vec3 c=mix(c1,c2,fbm(p+r))+mix(c3,c4,r.x)-mix(c5,c6,r.y);vec3 color=c*cos(shift*vUV.y);float luminance=dot(color.rgb,vec3(0.3,0.59,0.11));gl_FragColor=vec4(color,luminance*alphaThreshold+(1.0-alphaThreshold));}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var fireProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/fire/fireProceduralTexture.ts":
/*!*************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/fire/fireProceduralTexture.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FireProceduralTexture: () => (/* binding */ FireProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fireProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fireProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/fire/fireProceduralTexture.fragment.ts");








var FireProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(FireProceduralTexture, _super);
    function FireProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "fireProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._time = 0.0;
        _this._speed = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Vector2(0.5, 0.3);
        _this._autoGenerateTime = true;
        _this._alphaThreshold = 0.5;
        _this._fireColors = FireProceduralTexture.RedFireColors;
        _this.updateShaderUniforms();
        return _this;
    }
    FireProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("time", this._time);
        this.setVector2("speed", this._speed);
        this.setColor3("c1", this._fireColors[0]);
        this.setColor3("c2", this._fireColors[1]);
        this.setColor3("c3", this._fireColors[2]);
        this.setColor3("c4", this._fireColors[3]);
        this.setColor3("c5", this._fireColors[4]);
        this.setColor3("c6", this._fireColors[5]);
        this.setFloat("alphaThreshold", this._alphaThreshold);
    };
    FireProceduralTexture.prototype.render = function (useCameraPostProcess) {
        var scene = this.getScene();
        if (this._autoGenerateTime && scene) {
            this._time += scene.getAnimationRatio() * 0.03;
            this.updateShaderUniforms();
        }
        _super.prototype.render.call(this, useCameraPostProcess);
    };
    Object.defineProperty(FireProceduralTexture, "PurpleFireColors", {
        get: function () {
            return [new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.5, 0.0, 1.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.9, 0.0, 1.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.2, 0.0, 1.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1.0, 0.9, 1.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.1, 0.1, 1.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.9, 0.9, 1.0)];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture, "GreenFireColors", {
        get: function () {
            return [new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.5, 1.0, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.5, 1.0, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.3, 0.4, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.5, 1.0, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.2, 0.0, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.5, 1.0, 0.0)];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture, "RedFireColors", {
        get: function () {
            return [new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.5, 0.0, 0.1), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.9, 0.0, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.2, 0.0, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1.0, 0.9, 0.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.1, 0.1, 0.1), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.9, 0.9, 0.9)];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture, "BlueFireColors", {
        get: function () {
            return [new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.1, 0.0, 0.5), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.0, 0.0, 0.5), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.1, 0.0, 0.2), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.0, 0.0, 1.0), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.1, 0.2, 0.3), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.0, 0.2, 0.9)];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "autoGenerateTime", {
        get: function () {
            return this._autoGenerateTime;
        },
        set: function (value) {
            this._autoGenerateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "fireColors", {
        get: function () {
            return this._fireColors;
        },
        set: function (value) {
            this._fireColors = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FireProceduralTexture.prototype, "alphaThreshold", {
        get: function () {
            return this._alphaThreshold;
        },
        set: function (value) {
            this._alphaThreshold = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this fire procedural texture
     * @returns a serialized fire procedural texture object
     */
    FireProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.FireProceduralTexture";
        serializationObject.fireColors = [];
        for (var i = 0; i < this._fireColors.length; i++) {
            serializationObject.fireColors.push(this._fireColors[i].asArray());
        }
        return serializationObject;
    };
    /**
     * Creates a Fire Procedural Texture from parsed fire procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing fire procedural texture information
     * @returns a parsed Fire Procedural Texture
     */
    FireProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new FireProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        var colors = [];
        for (var i = 0; i < parsedTexture.fireColors.length; i++) {
            colors.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(parsedTexture.fireColors[i]));
        }
        texture.fireColors = colors;
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], FireProceduralTexture.prototype, "autoGenerateTime", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], FireProceduralTexture.prototype, "time", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsVector2)()
    ], FireProceduralTexture.prototype, "speed", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], FireProceduralTexture.prototype, "alphaThreshold", null);
    return FireProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.FireProceduralTexture", FireProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/fire/index.ts":
/*!*********************************************************!*\
  !*** ../../../dev/proceduralTextures/src/fire/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FireProceduralTexture: () => (/* reexport safe */ _fireProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.FireProceduralTexture)
/* harmony export */ });
/* harmony import */ var _fireProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fireProceduralTexture */ "../../../dev/proceduralTextures/src/fire/fireProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/grass/grassProceduralTexture.fragment.ts":
/*!************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/grass/grassProceduralTexture.fragment.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   grassProceduralTexturePixelShader: () => (/* binding */ grassProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "grassProceduralTexturePixelShader";
var shader = "precision highp float;varying vec2 vPosition;varying vec2 vUV;uniform vec3 herb1Color;uniform vec3 herb2Color;uniform vec3 herb3Color;uniform vec3 groundColor;float rand(vec2 n) {return fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);}\nfloat noise(vec2 n) {const vec2 d=vec2(0.0,1.0);vec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));return mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);}\nfloat fbm(vec2 n) {float total=0.0,amplitude=1.0;for (int i=0; i<4; i++) {total+=noise(n)*amplitude;n+=n;amplitude*=0.5;}\nreturn total;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvec3 color=mix(groundColor,herb1Color,rand(gl_FragCoord.xy*4.0));color=mix(color,herb2Color,rand(gl_FragCoord.xy*8.0));color=mix(color,herb3Color,rand(gl_FragCoord.xy));color=mix(color,herb1Color,fbm(gl_FragCoord.xy*16.0));gl_FragColor=vec4(color,1.0);\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var grassProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/grass/grassProceduralTexture.ts":
/*!***************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/grass/grassProceduralTexture.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrassProceduralTexture: () => (/* binding */ GrassProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grassProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grassProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/grass/grassProceduralTexture.fragment.ts");







var GrassProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GrassProceduralTexture, _super);
    function GrassProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "grassProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._groundColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(1, 1, 1);
        _this._grassColors = [new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.29, 0.38, 0.02), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.36, 0.49, 0.09), new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.51, 0.6, 0.28)];
        _this.updateShaderUniforms();
        return _this;
    }
    GrassProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setColor3("herb1Color", this._grassColors[0]);
        this.setColor3("herb2Color", this._grassColors[1]);
        this.setColor3("herb3Color", this._grassColors[2]);
        this.setColor3("groundColor", this._groundColor);
    };
    Object.defineProperty(GrassProceduralTexture.prototype, "grassColors", {
        get: function () {
            return this._grassColors;
        },
        set: function (value) {
            this._grassColors = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GrassProceduralTexture.prototype, "groundColor", {
        get: function () {
            return this._groundColor;
        },
        set: function (value) {
            this._groundColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this grass procedural texture
     * @returns a serialized grass procedural texture object
     */
    GrassProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.GrassProceduralTexture";
        serializationObject.grassColors = [];
        for (var i = 0; i < this._grassColors.length; i++) {
            serializationObject.grassColors.push(this._grassColors[i].asArray());
        }
        return serializationObject;
    };
    /**
     * Creates a Grass Procedural Texture from parsed grass procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing grass procedural texture information
     * @returns a parsed Grass Procedural Texture
     */
    GrassProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new GrassProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        var colors = [];
        for (var i = 0; i < parsedTexture.grassColors.length; i++) {
            colors.push(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(parsedTexture.grassColors[i]));
        }
        texture.grassColors = colors;
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
    ], GrassProceduralTexture.prototype, "groundColor", null);
    return GrassProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.GrassProceduralTexture", GrassProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/grass/index.ts":
/*!**********************************************************!*\
  !*** ../../../dev/proceduralTextures/src/grass/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrassProceduralTexture: () => (/* reexport safe */ _grassProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.GrassProceduralTexture)
/* harmony export */ });
/* harmony import */ var _grassProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grassProceduralTexture */ "../../../dev/proceduralTextures/src/grass/grassProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/index.ts":
/*!****************************************************!*\
  !*** ../../../dev/proceduralTextures/src/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrickProceduralTexture: () => (/* reexport safe */ _brick_index__WEBPACK_IMPORTED_MODULE_0__.BrickProceduralTexture),
/* harmony export */   CloudProceduralTexture: () => (/* reexport safe */ _cloud_index__WEBPACK_IMPORTED_MODULE_1__.CloudProceduralTexture),
/* harmony export */   FireProceduralTexture: () => (/* reexport safe */ _fire_index__WEBPACK_IMPORTED_MODULE_2__.FireProceduralTexture),
/* harmony export */   GrassProceduralTexture: () => (/* reexport safe */ _grass_index__WEBPACK_IMPORTED_MODULE_3__.GrassProceduralTexture),
/* harmony export */   MarbleProceduralTexture: () => (/* reexport safe */ _marble_index__WEBPACK_IMPORTED_MODULE_4__.MarbleProceduralTexture),
/* harmony export */   NormalMapProceduralTexture: () => (/* reexport safe */ _normalMap_index__WEBPACK_IMPORTED_MODULE_5__.NormalMapProceduralTexture),
/* harmony export */   PerlinNoiseProceduralTexture: () => (/* reexport safe */ _perlinNoise_index__WEBPACK_IMPORTED_MODULE_6__.PerlinNoiseProceduralTexture),
/* harmony export */   RoadProceduralTexture: () => (/* reexport safe */ _road_index__WEBPACK_IMPORTED_MODULE_7__.RoadProceduralTexture),
/* harmony export */   StarfieldProceduralTexture: () => (/* reexport safe */ _starfield_index__WEBPACK_IMPORTED_MODULE_8__.StarfieldProceduralTexture),
/* harmony export */   WoodProceduralTexture: () => (/* reexport safe */ _wood_index__WEBPACK_IMPORTED_MODULE_9__.WoodProceduralTexture)
/* harmony export */ });
/* harmony import */ var _brick_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick/index */ "../../../dev/proceduralTextures/src/brick/index.ts");
/* harmony import */ var _cloud_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloud/index */ "../../../dev/proceduralTextures/src/cloud/index.ts");
/* harmony import */ var _fire_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire/index */ "../../../dev/proceduralTextures/src/fire/index.ts");
/* harmony import */ var _grass_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grass/index */ "../../../dev/proceduralTextures/src/grass/index.ts");
/* harmony import */ var _marble_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marble/index */ "../../../dev/proceduralTextures/src/marble/index.ts");
/* harmony import */ var _normalMap_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalMap/index */ "../../../dev/proceduralTextures/src/normalMap/index.ts");
/* harmony import */ var _perlinNoise_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perlinNoise/index */ "../../../dev/proceduralTextures/src/perlinNoise/index.ts");
/* harmony import */ var _road_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./road/index */ "../../../dev/proceduralTextures/src/road/index.ts");
/* harmony import */ var _starfield_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./starfield/index */ "../../../dev/proceduralTextures/src/starfield/index.ts");
/* harmony import */ var _wood_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wood/index */ "../../../dev/proceduralTextures/src/wood/index.ts");
/* eslint-disable import/no-internal-modules */












/***/ }),

/***/ "../../../dev/proceduralTextures/src/marble/index.ts":
/*!***********************************************************!*\
  !*** ../../../dev/proceduralTextures/src/marble/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarbleProceduralTexture: () => (/* reexport safe */ _marbleProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.MarbleProceduralTexture)
/* harmony export */ });
/* harmony import */ var _marbleProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marbleProceduralTexture */ "../../../dev/proceduralTextures/src/marble/marbleProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/marble/marbleProceduralTexture.fragment.ts":
/*!**************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/marble/marbleProceduralTexture.fragment.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   marbleProceduralTexturePixelShader: () => (/* binding */ marbleProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "marbleProceduralTexturePixelShader";
var shader = "precision highp float;varying vec2 vPosition;varying vec2 vUV;uniform float numberOfTilesHeight;uniform float numberOfTilesWidth;uniform float amplitude;uniform vec3 marbleColor;uniform vec3 jointColor;const vec3 tileSize=vec3(1.1,1.0,1.1);const vec3 tilePct=vec3(0.98,1.0,0.98);float rand(vec2 n) {return fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);}\nfloat noise(vec2 n) {const vec2 d=vec2(0.0,1.0);vec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));return mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);}\nfloat turbulence(vec2 P)\n{float val=0.0;float freq=1.0;for (int i=0; i<4; i++)\n{val+=abs(noise(P*freq)/freq);freq*=2.07;}\nreturn val;}\nfloat roundF(float number){return sign(number)*floor(abs(number)+0.5);}\nvec3 marble_color(float x)\n{vec3 col;x=0.5*(x+1.);x=sqrt(x); \nx=sqrt(x);x=sqrt(x);col=vec3(.2+.75*x); \ncol.b*=0.95; \nreturn col;}\nvoid main()\n{float brickW=1.0/numberOfTilesWidth;float brickH=1.0/numberOfTilesHeight;float jointWPercentage=0.01;float jointHPercentage=0.01;vec3 color=marbleColor;float yi=vUV.y/brickH;float nyi=roundF(yi);float xi=vUV.x/brickW;if (mod(floor(yi),2.0)==0.0){xi=xi-0.5;}\nfloat nxi=roundF(xi);vec2 brickvUV=vec2((xi-floor(xi))/brickH,(yi-floor(yi))/brickW);if (yi<nyi+jointHPercentage && yi>nyi-jointHPercentage){color=mix(jointColor,vec3(0.37,0.25,0.25),(yi-nyi)/jointHPercentage+0.2);}\nelse if (xi<nxi+jointWPercentage && xi>nxi-jointWPercentage){color=mix(jointColor,vec3(0.44,0.44,0.44),(xi-nxi)/jointWPercentage+0.2);}\nelse {float t=6.28*brickvUV.x/(tileSize.x+noise(vec2(vUV)*6.0));t+=amplitude*turbulence(brickvUV.xy);t=sin(t);color=marble_color(t);}\ngl_FragColor=vec4(color,0.0);}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var marbleProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/marble/marbleProceduralTexture.ts":
/*!*****************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/marble/marbleProceduralTexture.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarbleProceduralTexture: () => (/* binding */ MarbleProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marbleProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marbleProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/marble/marbleProceduralTexture.fragment.ts");







var MarbleProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MarbleProceduralTexture, _super);
    function MarbleProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "marbleProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._numberOfTilesHeight = 3;
        _this._numberOfTilesWidth = 3;
        _this._amplitude = 9.0;
        _this._jointColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.72, 0.72, 0.72);
        _this.updateShaderUniforms();
        return _this;
    }
    MarbleProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("numberOfTilesHeight", this._numberOfTilesHeight);
        this.setFloat("numberOfTilesWidth", this._numberOfTilesWidth);
        this.setFloat("amplitude", this._amplitude);
        this.setColor3("jointColor", this._jointColor);
    };
    Object.defineProperty(MarbleProceduralTexture.prototype, "numberOfTilesHeight", {
        get: function () {
            return this._numberOfTilesHeight;
        },
        set: function (value) {
            this._numberOfTilesHeight = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarbleProceduralTexture.prototype, "amplitude", {
        get: function () {
            return this._amplitude;
        },
        set: function (value) {
            this._amplitude = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarbleProceduralTexture.prototype, "numberOfTilesWidth", {
        get: function () {
            return this._numberOfTilesWidth;
        },
        set: function (value) {
            this._numberOfTilesWidth = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MarbleProceduralTexture.prototype, "jointColor", {
        get: function () {
            return this._jointColor;
        },
        set: function (value) {
            this._jointColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this marble procedural texture
     * @returns a serialized marble procedural texture object
     */
    MarbleProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.MarbleProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Marble Procedural Texture from parsed marble procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing marble procedural texture information
     * @returns a parsed Marble Procedural Texture
     */
    MarbleProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new MarbleProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], MarbleProceduralTexture.prototype, "numberOfTilesHeight", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], MarbleProceduralTexture.prototype, "amplitude", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], MarbleProceduralTexture.prototype, "numberOfTilesWidth", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], MarbleProceduralTexture.prototype, "jointColor", null);
    return MarbleProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.MarbleProceduralTexture", MarbleProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/normalMap/index.ts":
/*!**************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/normalMap/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NormalMapProceduralTexture: () => (/* reexport safe */ _normalMapProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.NormalMapProceduralTexture)
/* harmony export */ });
/* harmony import */ var _normalMapProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalMapProceduralTexture */ "../../../dev/proceduralTextures/src/normalMap/normalMapProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/normalMap/normalMapProceduralTexture.fragment.ts":
/*!********************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/normalMap/normalMapProceduralTexture.fragment.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalMapProceduralTexturePixelShader: () => (/* binding */ normalMapProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "normalMapProceduralTexturePixelShader";
var shader = "precision highp float;uniform sampler2D baseSampler;uniform float size;varying vec2 vUV;const vec3 LUMA_COEFFICIENT=vec3(0.2126,0.7152,0.0722);float lumaAtCoord(vec2 coord)\n{vec3 pixel=texture2D(baseSampler,coord).rgb;float luma=dot(pixel,LUMA_COEFFICIENT);return luma;}\nvoid main()\n{float lumaU0=lumaAtCoord(vUV+vec2(-1.0, 0.0)/size);float lumaU1=lumaAtCoord(vUV+vec2( 1.0, 0.0)/size);float lumaV0=lumaAtCoord(vUV+vec2( 0.0,-1.0)/size);float lumaV1=lumaAtCoord(vUV+vec2( 0.0, 1.0)/size);vec2 slope=(vec2(lumaU0-lumaU1,lumaV0-lumaV1)+1.0)*0.5;gl_FragColor=vec4(slope,1.0,1.0);}\n";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var normalMapProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/normalMap/normalMapProceduralTexture.ts":
/*!***********************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/normalMap/normalMapProceduralTexture.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NormalMapProceduralTexture: () => (/* binding */ NormalMapProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _normalMapProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalMapProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/normalMap/normalMapProceduralTexture.fragment.ts");






var NormalMapProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(NormalMapProceduralTexture, _super);
    function NormalMapProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "normalMapProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this.updateShaderUniforms();
        return _this;
    }
    NormalMapProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setTexture("baseSampler", this._baseTexture);
        this.setFloat("size", this.getRenderSize());
    };
    NormalMapProceduralTexture.prototype.render = function (useCameraPostProcess) {
        _super.prototype.render.call(this, useCameraPostProcess);
    };
    NormalMapProceduralTexture.prototype.resize = function (size, generateMipMaps) {
        _super.prototype.resize.call(this, size, generateMipMaps);
        // We need to update the "size" uniform
        this.updateShaderUniforms();
    };
    NormalMapProceduralTexture.prototype.isReady = function () {
        if (!this._baseTexture || !this._baseTexture.isReady()) {
            return false;
        }
        return _super.prototype.isReady.call(this);
    };
    Object.defineProperty(NormalMapProceduralTexture.prototype, "baseTexture", {
        get: function () {
            return this._baseTexture;
        },
        set: function (texture) {
            this._baseTexture = texture;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this normal map procedural texture
     * @returns a serialized normal map procedural texture object
     */
    NormalMapProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.NormalMapProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Normal Map Procedural Texture from parsed normal map procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing normal map procedural texture information
     * @returns a parsed Normal Map Procedural Texture
     */
    NormalMapProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new NormalMapProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsTexture)()
    ], NormalMapProceduralTexture.prototype, "baseTexture", null);
    return NormalMapProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.NormalMapProceduralTexture", NormalMapProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/perlinNoise/index.ts":
/*!****************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/perlinNoise/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerlinNoiseProceduralTexture: () => (/* reexport safe */ _perlinNoiseProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.PerlinNoiseProceduralTexture)
/* harmony export */ });
/* harmony import */ var _perlinNoiseProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perlinNoiseProceduralTexture */ "../../../dev/proceduralTextures/src/perlinNoise/perlinNoiseProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/perlinNoise/perlinNoiseProceduralTexture.fragment.ts":
/*!************************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/perlinNoise/perlinNoiseProceduralTexture.fragment.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   perlinNoiseProceduralTexturePixelShader: () => (/* binding */ perlinNoiseProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "perlinNoiseProceduralTexturePixelShader";
var shader = "precision highp float;uniform float size;uniform float time;uniform float translationSpeed;varying vec2 vUV;float r(float n)\n{return fract(cos(n*89.42)*343.42);}\nvec2 r(vec2 n)\n{return vec2(r(n.x*23.62-300.0+n.y*34.35),r(n.x*45.13+256.0+n.y*38.89)); }\nfloat worley(vec2 n,float s)\n{float dis=1.0;for(int x=-1; x<=1; x++)\n{for(int y=-1; y<=1; y++)\n{vec2 p=floor(n/s)+vec2(x,y);float d=length(r(p)+vec2(x,y)-fract(n/s));if (dis>d)\ndis=d;}}\nreturn 1.0-dis;}\nvec3 hash33(vec3 p3)\n{p3=fract(p3*vec3(0.1031,0.11369,0.13787));p3+=dot(p3,p3.yxz+19.19);return -1.0+2.0*fract(vec3((p3.x+p3.y)*p3.z,(p3.x+p3.z)*p3.y,(p3.y+p3.z)*p3.x));}\nfloat perlinNoise(vec3 p)\n{vec3 pi=floor(p);vec3 pf=p-pi;vec3 w=pf*pf*(3.0-2.0*pf);return mix(\nmix(\nmix(\ndot(pf-vec3(0,0,0),hash33(pi+vec3(0,0,0))),\ndot(pf-vec3(1,0,0),hash33(pi+vec3(1,0,0))),\nw.x\n),\nmix(\ndot(pf-vec3(0,0,1),hash33(pi+vec3(0,0,1))),\ndot(pf-vec3(1,0,1),hash33(pi+vec3(1,0,1))),\nw.x\n),\nw.z\n),\nmix(\nmix(\ndot(pf-vec3(0,1,0),hash33(pi+vec3(0,1,0))),\ndot(pf-vec3(1,1,0),hash33(pi+vec3(1,1,0))),\nw.x\n),\nmix(\ndot(pf-vec3(0,1,1),hash33(pi+vec3(0,1,1))),\ndot(pf-vec3(1,1,1),hash33(pi+vec3(1,1,1))),\nw.x\n),\nw.z\n),\nw.y\n);}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void)\n{vec2 uv=gl_FragCoord.xy+translationSpeed;float dis=(\n1.0+perlinNoise(vec3(uv/vec2(size,size),time*0.05)*8.0))\n* (1.0+(worley(uv,32.0)+ 0.5*worley(2.0*uv,32.0)+0.25*worley(4.0*uv,32.0))\n);gl_FragColor=vec4(vec3(dis/4.0),1.0);}\n";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var perlinNoiseProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/perlinNoise/perlinNoiseProceduralTexture.ts":
/*!***************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/perlinNoise/perlinNoiseProceduralTexture.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerlinNoiseProceduralTexture: () => (/* binding */ PerlinNoiseProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _perlinNoiseProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perlinNoiseProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/perlinNoise/perlinNoiseProceduralTexture.fragment.ts");






var PerlinNoiseProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(PerlinNoiseProceduralTexture, _super);
    function PerlinNoiseProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "perlinNoiseProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this.time = 0.0;
        _this.timeScale = 1.0;
        _this.translationSpeed = 1.0;
        _this._currentTranslation = 0;
        _this.updateShaderUniforms();
        return _this;
    }
    PerlinNoiseProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("size", this.getRenderSize());
        var scene = this.getScene();
        if (!scene) {
            return;
        }
        var deltaTime = scene.getEngine().getDeltaTime();
        this.time += deltaTime;
        this.setFloat("time", (this.time * this.timeScale) / 1000);
        this._currentTranslation += (deltaTime * this.translationSpeed) / 1000.0;
        this.setFloat("translationSpeed", this._currentTranslation);
    };
    PerlinNoiseProceduralTexture.prototype.render = function (useCameraPostProcess) {
        this.updateShaderUniforms();
        _super.prototype.render.call(this, useCameraPostProcess);
    };
    PerlinNoiseProceduralTexture.prototype.resize = function (size, generateMipMaps) {
        _super.prototype.resize.call(this, size, generateMipMaps);
    };
    /**
     * Serializes this perlin noise procedural texture
     * @returns a serialized perlin noise procedural texture object
     */
    PerlinNoiseProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.PerlinNoiseProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Perlin Noise Procedural Texture from parsed perlin noise procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing perlin noise procedural texture information
     * @returns a parsed Perlin Noise Procedural Texture
     */
    PerlinNoiseProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new PerlinNoiseProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], PerlinNoiseProceduralTexture.prototype, "time", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], PerlinNoiseProceduralTexture.prototype, "timeScale", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], PerlinNoiseProceduralTexture.prototype, "translationSpeed", void 0);
    return PerlinNoiseProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.PerlinNoiseProceduralTexture", PerlinNoiseProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/road/index.ts":
/*!*********************************************************!*\
  !*** ../../../dev/proceduralTextures/src/road/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoadProceduralTexture: () => (/* reexport safe */ _roadProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.RoadProceduralTexture)
/* harmony export */ });
/* harmony import */ var _roadProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roadProceduralTexture */ "../../../dev/proceduralTextures/src/road/roadProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/road/roadProceduralTexture.fragment.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/road/roadProceduralTexture.fragment.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roadProceduralTexturePixelShader: () => (/* binding */ roadProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "roadProceduralTexturePixelShader";
var shader = "precision highp float;varying vec2 vUV; \nuniform vec3 roadColor;float rand(vec2 n) {return fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);}\nfloat noise(vec2 n) {const vec2 d=vec2(0.0,1.0);vec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));return mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);}\nfloat fbm(vec2 n) {float total=0.0,amplitude=1.0;for (int i=0; i<4; i++) {total+=noise(n)*amplitude;n+=n;amplitude*=0.5;}\nreturn total;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nfloat ratioy=mod(gl_FragCoord.y*100.0 ,fbm(vUV*2.0));vec3 color=roadColor*ratioy;gl_FragColor=vec4(color,1.0);\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var roadProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/road/roadProceduralTexture.ts":
/*!*************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/road/roadProceduralTexture.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoadProceduralTexture: () => (/* binding */ RoadProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _roadProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roadProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/road/roadProceduralTexture.fragment.ts");







var RoadProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(RoadProceduralTexture, _super);
    function RoadProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "roadProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._roadColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.53, 0.53, 0.53);
        _this.updateShaderUniforms();
        return _this;
    }
    RoadProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setColor3("roadColor", this._roadColor);
    };
    Object.defineProperty(RoadProceduralTexture.prototype, "roadColor", {
        get: function () {
            return this._roadColor;
        },
        set: function (value) {
            this._roadColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this road procedural texture
     * @returns a serialized road procedural texture object
     */
    RoadProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.RoadProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Road Procedural Texture from parsed road procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing road procedural texture information
     * @returns a parsed Road Procedural Texture
     */
    RoadProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new RoadProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
    ], RoadProceduralTexture.prototype, "roadColor", null);
    return RoadProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.RoadProceduralTexture", RoadProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/starfield/index.ts":
/*!**************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/starfield/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarfieldProceduralTexture: () => (/* reexport safe */ _starfieldProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.StarfieldProceduralTexture)
/* harmony export */ });
/* harmony import */ var _starfieldProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starfieldProceduralTexture */ "../../../dev/proceduralTextures/src/starfield/starfieldProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/starfield/starfieldProceduralTexture.fragment.ts":
/*!********************************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/starfield/starfieldProceduralTexture.fragment.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   starfieldProceduralTexturePixelShader: () => (/* binding */ starfieldProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "starfieldProceduralTexturePixelShader";
var shader = "precision highp float;\n#define volsteps 20\n#define iterations 15\nvarying vec2 vPosition;varying vec2 vUV;uniform float time;uniform float alpha;uniform float beta;uniform float zoom;uniform float formuparam;uniform float stepsize;uniform float tile;uniform float brightness;uniform float darkmatter;uniform float distfading;uniform float saturation;void main()\n{vec3 dir=vec3(vUV*zoom,1.);float localTime=time*0.0001;mat2 rot1=mat2(cos(alpha),sin(alpha),-sin(alpha),cos(alpha));mat2 rot2=mat2(cos(beta),sin(beta),-sin(beta),cos(beta));dir.xz*=rot1;dir.xy*=rot2;vec3 from_=vec3(1.,.5,0.5);from_+=vec3(-2.,localTime*2.,localTime);from_.xz*=rot1;from_.xy*=rot2;float s=0.1,fade=1.;vec3 v=vec3(0.);for (int r=0; r<volsteps; r++) {vec3 p=from_+s*dir*.5;p=abs(vec3(tile)-mod(p,vec3(tile*2.))); \nfloat pa,a=pa=0.;for (int i=0; i<iterations; i++) {p=abs(p)/dot(p,p)-formuparam; \na+=abs(length(p)-pa); \npa=length(p);}\nfloat dm=max(0.,darkmatter-a*a*.001); \na*=a*a; \nif (r>6) fade*=1.-dm; \nv+=fade;v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; \nfade*=distfading; \ns+=stepsize;}\nv=mix(vec3(length(v)),v,saturation); \ngl_FragColor=vec4(v*.01,1.);}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var starfieldProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/starfield/starfieldProceduralTexture.ts":
/*!***********************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/starfield/starfieldProceduralTexture.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarfieldProceduralTexture: () => (/* binding */ StarfieldProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _starfieldProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starfieldProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/starfield/starfieldProceduralTexture.fragment.ts");






var StarfieldProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(StarfieldProceduralTexture, _super);
    function StarfieldProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "starfieldProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._time = 1;
        _this._alpha = 0.5;
        _this._beta = 0.8;
        _this._zoom = 0.8;
        _this._formuparam = 0.53;
        _this._stepsize = 0.1;
        _this._tile = 0.85;
        _this._brightness = 0.0015;
        _this._darkmatter = 0.4;
        _this._distfading = 0.73;
        _this._saturation = 0.85;
        _this.updateShaderUniforms();
        return _this;
    }
    StarfieldProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("time", this._time);
        this.setFloat("alpha", this._alpha);
        this.setFloat("beta", this._beta);
        this.setFloat("zoom", this._zoom);
        this.setFloat("formuparam", this._formuparam);
        this.setFloat("stepsize", this._stepsize);
        this.setFloat("tile", this._tile);
        this.setFloat("brightness", this._brightness);
        this.setFloat("darkmatter", this._darkmatter);
        this.setFloat("distfading", this._distfading);
        this.setFloat("saturation", this._saturation);
    };
    Object.defineProperty(StarfieldProceduralTexture.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (value) {
            this._alpha = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "beta", {
        get: function () {
            return this._beta;
        },
        set: function (value) {
            this._beta = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "formuparam", {
        get: function () {
            return this._formuparam;
        },
        set: function (value) {
            this._formuparam = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "stepsize", {
        get: function () {
            return this._stepsize;
        },
        set: function (value) {
            this._stepsize = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (value) {
            this._zoom = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "tile", {
        get: function () {
            return this._tile;
        },
        set: function (value) {
            this._tile = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (value) {
            this._brightness = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "darkmatter", {
        get: function () {
            return this._darkmatter;
        },
        set: function (value) {
            this._darkmatter = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "distfading", {
        get: function () {
            return this._distfading;
        },
        set: function (value) {
            this._distfading = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StarfieldProceduralTexture.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (value) {
            this._saturation = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this starfield procedural texture
     * @returns a serialized starfield procedural texture object
     */
    StarfieldProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.StarfieldProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Starfield Procedural Texture from parsed startfield procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing startfield procedural texture information
     * @returns a parsed Starfield Procedural Texture
     */
    StarfieldProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new StarfieldProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "time", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "alpha", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "beta", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "formuparam", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "stepsize", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "zoom", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "tile", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "brightness", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "darkmatter", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "distfading", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], StarfieldProceduralTexture.prototype, "saturation", null);
    return StarfieldProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.StarfieldProceduralTexture", StarfieldProceduralTexture);


/***/ }),

/***/ "../../../dev/proceduralTextures/src/wood/index.ts":
/*!*********************************************************!*\
  !*** ../../../dev/proceduralTextures/src/wood/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WoodProceduralTexture: () => (/* reexport safe */ _woodProceduralTexture__WEBPACK_IMPORTED_MODULE_0__.WoodProceduralTexture)
/* harmony export */ });
/* harmony import */ var _woodProceduralTexture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./woodProceduralTexture */ "../../../dev/proceduralTextures/src/wood/woodProceduralTexture.ts");



/***/ }),

/***/ "../../../dev/proceduralTextures/src/wood/woodProceduralTexture.fragment.ts":
/*!**********************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/wood/woodProceduralTexture.fragment.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   woodProceduralTexturePixelShader: () => (/* binding */ woodProceduralTexturePixelShader)
/* harmony export */ });
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Engines/shaderStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.

var name = "woodProceduralTexturePixelShader";
var shader = "precision highp float;varying vec2 vPosition;varying vec2 vUV;uniform float ampScale;uniform vec3 woodColor;float rand(vec2 n) {return fract(cos(dot(n,vec2(12.9898,4.1414)))*43758.5453);}\nfloat noise(vec2 n) {const vec2 d=vec2(0.0,1.0);vec2 b=floor(n),f=smoothstep(vec2(0.0),vec2(1.0),fract(n));return mix(mix(rand(b),rand(b+d.yx),f.x),mix(rand(b+d.xy),rand(b+d.yy),f.x),f.y);}\nfloat fbm(vec2 n) {float total=0.0,amplitude=1.0;for (int i=0; i<4; i++) {total+=noise(n)*amplitude;n+=n;amplitude*=0.5;}\nreturn total;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nfloat ratioy=mod(vUV.x*ampScale,2.0+fbm(vUV*0.8));vec3 wood=woodColor*ratioy;gl_FragColor=vec4(wood,1.0);\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
// Sideeffect
if (!babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name]) {
    babylonjs_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
}
/** @internal */
var woodProceduralTexturePixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../dev/proceduralTextures/src/wood/woodProceduralTexture.ts":
/*!*************************************************************************!*\
  !*** ../../../dev/proceduralTextures/src/wood/woodProceduralTexture.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WoodProceduralTexture: () => (/* binding */ WoodProceduralTexture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/typeStore */ "babylonjs/Misc/decorators");
/* harmony import */ var babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _woodProceduralTexture_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./woodProceduralTexture.fragment */ "../../../dev/proceduralTextures/src/wood/woodProceduralTexture.fragment.ts");







var WoodProceduralTexture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(WoodProceduralTexture, _super);
    function WoodProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        if (scene === void 0) { scene = null; }
        var _this = _super.call(this, name, size, "woodProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this._ampScale = 100.0;
        _this._woodColor = new babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.Color3(0.32, 0.17, 0.09);
        _this.updateShaderUniforms();
        return _this;
    }
    WoodProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setFloat("ampScale", this._ampScale);
        this.setColor3("woodColor", this._woodColor);
    };
    Object.defineProperty(WoodProceduralTexture.prototype, "ampScale", {
        get: function () {
            return this._ampScale;
        },
        set: function (value) {
            this._ampScale = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WoodProceduralTexture.prototype, "woodColor", {
        get: function () {
            return this._woodColor;
        },
        set: function (value) {
            this._woodColor = value;
            this.updateShaderUniforms();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Serializes this wood procedural texture
     * @returns a serialized wood procedural texture object
     */
    WoodProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.WoodProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Wood Procedural Texture from parsed wood procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing wood procedural texture information
     * @returns a parsed Wood Procedural Texture
     */
    WoodProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.SerializationHelper.Parse(function () { return new WoodProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serialize)()
    ], WoodProceduralTexture.prototype, "ampScale", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.serializeAsColor3)()
    ], WoodProceduralTexture.prototype, "woodColor", null);
    return WoodProceduralTexture;
}(babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.ProceduralTexture));

(0,babylonjs_Misc_decorators__WEBPACK_IMPORTED_MODULE_0__.RegisterClass)("BABYLON.WoodProceduralTexture", WoodProceduralTexture);


/***/ }),

/***/ "../../../lts/proceduralTextures/src/legacy/legacy.ts":
/*!************************************************************!*\
  !*** ../../../lts/proceduralTextures/src/legacy/legacy.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrickProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.BrickProceduralTexture),
/* harmony export */   CloudProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.CloudProceduralTexture),
/* harmony export */   FireProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.FireProceduralTexture),
/* harmony export */   GrassProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.GrassProceduralTexture),
/* harmony export */   MarbleProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.MarbleProceduralTexture),
/* harmony export */   NormalMapProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.NormalMapProceduralTexture),
/* harmony export */   PerlinNoiseProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.PerlinNoiseProceduralTexture),
/* harmony export */   RoadProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.RoadProceduralTexture),
/* harmony export */   StarfieldProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.StarfieldProceduralTexture),
/* harmony export */   WoodProceduralTexture: () => (/* reexport safe */ procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__.WoodProceduralTexture)
/* harmony export */ });
/* harmony import */ var procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! procedural-textures/index */ "../../../dev/proceduralTextures/src/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * Legacy support, defining window.BABYLON.GridMaterial... (global variable).
 *
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    for (var mat in procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[mat] = procedural_textures_index__WEBPACK_IMPORTED_MODULE_0__[mat];
    }
}



/***/ }),

/***/ "babylonjs/Misc/decorators":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_decorators__;

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   proceduralTextures: () => (/* reexport module object */ _lts_procedural_textures_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_procedural_textures_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/procedural-textures/legacy/legacy */ "../../../lts/proceduralTextures/src/legacy/legacy.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_procedural_textures_legacy_legacy__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbmpzLnByb2NlZHVyYWxUZXh0dXJlcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoWkE7QUFDQTtBQUVBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFsRUE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBbUNBO0FBQUE7QUF0RkE7QUF3RkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFsRUE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBbUNBO0FBQUE7QUF0RkE7QUF3RkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUFBO0FBT0E7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBSkE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQXRGQTtBQURBO0FBR0E7QUFnQkE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBUUE7QUFEQTtBQUdBO0FBK0NBO0FBQUE7QUExSUE7QUE0SUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBaERBO0FBREE7QUFHQTtBQStDQTtBQUFBO0FBOUVBO0FBZ0ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQWxFQTtBQURBO0FBR0E7QUFRQTtBQURBO0FBR0E7QUFRQTtBQURBO0FBR0E7QUFRQTtBQURBO0FBR0E7QUFtQ0E7QUFBQTtBQXRGQTtBQXdGQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFwQ0E7QUFEQTtBQUdBO0FBbUNBO0FBQUE7QUF0RUE7QUF3RUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQVlBO0FBQUE7QUFDQTtBQVhBO0FBR0E7QUFHQTtBQUVBO0FBSUE7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQXBFQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUErREE7QUFBQTtBQXZFQTtBQXlFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUhBO0FBSUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQXBDQTtBQURBO0FBR0E7QUFtQ0E7QUFBQTtBQWxEQTtBQW9EQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBYUE7QUFBQTtBQUNBO0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBeElBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQW1DQTtBQUFBO0FBMUtBO0FBNEtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckxBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBSkE7QUFDQTtBQUlBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFMQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUxBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBOUNBO0FBREE7QUFHQTtBQVFBO0FBREE7QUFHQTtBQW1DQTtBQUFBO0FBOURBO0FBZ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDakJBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvYnJpY2svYnJpY2tQcm9jZWR1cmFsVGV4dHVyZS5mcmFnbWVudC50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvYnJpY2svYnJpY2tQcm9jZWR1cmFsVGV4dHVyZS50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvYnJpY2svaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL2Nsb3VkL2Nsb3VkUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL2Nsb3VkL2Nsb3VkUHJvY2VkdXJhbFRleHR1cmUudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL2Nsb3VkL2luZGV4LnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi9kZXYvcHJvY2VkdXJhbFRleHR1cmVzL3NyYy9maXJlL2ZpcmVQcm9jZWR1cmFsVGV4dHVyZS5mcmFnbWVudC50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvZmlyZS9maXJlUHJvY2VkdXJhbFRleHR1cmUudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL2ZpcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL2dyYXNzL2dyYXNzUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL2dyYXNzL2dyYXNzUHJvY2VkdXJhbFRleHR1cmUudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL2dyYXNzL2luZGV4LnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi9kZXYvcHJvY2VkdXJhbFRleHR1cmVzL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvbWFyYmxlL2luZGV4LnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi9kZXYvcHJvY2VkdXJhbFRleHR1cmVzL3NyYy9tYXJibGUvbWFyYmxlUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL21hcmJsZS9tYXJibGVQcm9jZWR1cmFsVGV4dHVyZS50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvbm9ybWFsTWFwL2luZGV4LnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi9kZXYvcHJvY2VkdXJhbFRleHR1cmVzL3NyYy9ub3JtYWxNYXAvbm9ybWFsTWFwUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL25vcm1hbE1hcC9ub3JtYWxNYXBQcm9jZWR1cmFsVGV4dHVyZS50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvcGVybGluTm9pc2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL3Blcmxpbk5vaXNlL3Blcmxpbk5vaXNlUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL3Blcmxpbk5vaXNlL3Blcmxpbk5vaXNlUHJvY2VkdXJhbFRleHR1cmUudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL3JvYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL3JvYWQvcm9hZFByb2NlZHVyYWxUZXh0dXJlLmZyYWdtZW50LnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi9kZXYvcHJvY2VkdXJhbFRleHR1cmVzL3NyYy9yb2FkL3JvYWRQcm9jZWR1cmFsVGV4dHVyZS50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvc3RhcmZpZWxkL2luZGV4LnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi9kZXYvcHJvY2VkdXJhbFRleHR1cmVzL3NyYy9zdGFyZmllbGQvc3RhcmZpZWxkUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL3N0YXJmaWVsZC9zdGFyZmllbGRQcm9jZWR1cmFsVGV4dHVyZS50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvd29vZC9pbmRleC50cyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi4vLi4vLi4vZGV2L3Byb2NlZHVyYWxUZXh0dXJlcy9zcmMvd29vZC93b29kUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnQudHMiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTLy4uLy4uLy4uL2Rldi9wcm9jZWR1cmFsVGV4dHVyZXMvc3JjL3dvb2Qvd29vZFByb2NlZHVyYWxUZXh0dXJlLnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy8uLi8uLi8uLi9sdHMvcHJvY2VkdXJhbFRleHR1cmVzL3NyYy9sZWdhY3kvbGVnYWN5LnRzIiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy9leHRlcm5hbCB1bWQge1wicm9vdFwiOlwiQkFCWUxPTlwiLFwiY29tbW9uanNcIjpcImJhYnlsb25qc1wiLFwiY29tbW9uanMyXCI6XCJiYWJ5bG9uanNcIixcImFtZFwiOlwiYmFieWxvbmpzXCJ9Iiwid2VicGFjazovL1BST0NFRFVSQUxURVhUVVJFUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vUFJPQ0VEVVJBTFRFWFRVUkVTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9QUk9DRURVUkFMVEVYVFVSRVMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiYmFieWxvbmpzLXByb2NlZHVyYWwtdGV4dHVyZXNcIiwgW1wiYmFieWxvbmpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJhYnlsb25qcy1wcm9jZWR1cmFsLXRleHR1cmVzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYmFieWxvbmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQUk9DRURVUkFMVEVYVFVSRVNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX2RlY29yYXRvcnNfXykgPT4ge1xucmV0dXJuICIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCwgSXRlcmF0b3IgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgQXN5bmNJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gQXN5bmNJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiLCBhd2FpdFJldHVybiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gYXdhaXRSZXR1cm4oZikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGYsIHJlamVjdCk7IH07IH1cbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlmIChnW25dKSB7IGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IGlmIChmKSBpW25dID0gZihpW25dKTsgfSB9XG4gIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cbiAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XG4gIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcbiAgdmFyIGksIHA7XG4gIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IGZhbHNlIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcbiAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XG4gIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gIHJldHVybiBjb29rZWQ7XG59O1xuXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59O1xuXG52YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcbiAgb3duS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIChvKSB7XG4gICAgdmFyIGFyID0gW107XG4gICAgZm9yICh2YXIgayBpbiBvKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspKSBhclthci5sZW5ndGhdID0gaztcbiAgICByZXR1cm4gYXI7XG4gIH07XG4gIHJldHVybiBvd25LZXlzKG8pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZSwgaW5uZXI7XG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKCFTeW1ib2wuZGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5kaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgICBpZiAoYXN5bmMpIGlubmVyID0gZGlzcG9zZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXNwb3NlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3Qgbm90IGRpc3Bvc2FibGUuXCIpO1xuICAgIGlmIChpbm5lcikgZGlzcG9zZSA9IGZ1bmN0aW9uKCkgeyB0cnkgeyBpbm5lci5jYWxsKHRoaXMpOyB9IGNhdGNoIChlKSB7IHJldHVybiBQcm9taXNlLnJlamVjdChlKTsgfSB9O1xuICAgIGVudi5zdGFjay5wdXNoKHsgdmFsdWU6IHZhbHVlLCBkaXNwb3NlOiBkaXNwb3NlLCBhc3luYzogYXN5bmMgfSk7XG4gIH1cbiAgZWxzZSBpZiAoYXN5bmMpIHtcbiAgICBlbnYuc3RhY2sucHVzaCh7IGFzeW5jOiB0cnVlIH0pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIF9TdXBwcmVzc2VkRXJyb3IgPSB0eXBlb2YgU3VwcHJlc3NlZEVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBTdXBwcmVzc2VkRXJyb3IgOiBmdW5jdGlvbiAoZXJyb3IsIHN1cHByZXNzZWQsIG1lc3NhZ2UpIHtcbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xuICBmdW5jdGlvbiBmYWlsKGUpIHtcbiAgICBlbnYuZXJyb3IgPSBlbnYuaGFzRXJyb3IgPyBuZXcgX1N1cHByZXNzZWRFcnJvcihlLCBlbnYuZXJyb3IsIFwiQW4gZXJyb3Igd2FzIHN1cHByZXNzZWQgZHVyaW5nIGRpc3Bvc2FsLlwiKSA6IGU7XG4gICAgZW52Lmhhc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICB2YXIgciwgcyA9IDA7XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKHIgPSBlbnYuc3RhY2sucG9wKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghci5hc3luYyAmJiBzID09PSAxKSByZXR1cm4gcyA9IDAsIGVudi5zdGFjay5wdXNoKHIpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKG5leHQpO1xuICAgICAgICBpZiAoci5kaXNwb3NlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHIuZGlzcG9zZS5jYWxsKHIudmFsdWUpO1xuICAgICAgICAgIGlmIChyLmFzeW5jKSByZXR1cm4gcyB8PSAyLCBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBzIHw9IDE7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocyA9PT0gMSkgcmV0dXJuIGVudi5oYXNFcnJvciA/IFByb21pc2UucmVqZWN0KGVudi5lcnJvcikgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uKHBhdGgsIHByZXNlcnZlSnN4KSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIiAmJiAvXlxcLlxcLj9cXC8vLnRlc3QocGF0aCkpIHtcbiAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLih0c3gpJHwoKD86XFwuZCk/KSgoPzpcXC5bXi4vXSs/KT8pXFwuKFtjbV0/KXRzJC9pLCBmdW5jdGlvbiAobSwgdHN4LCBkLCBleHQsIGNtKSB7XG4gICAgICAgICAgcmV0dXJuIHRzeCA/IHByZXNlcnZlSnN4ID8gXCIuanN4XCIgOiBcIi5qc1wiIDogZCAmJiAoIWV4dCB8fCAhY20pID8gbSA6IChkICsgZXh0ICsgXCIuXCIgKyBjbS50b0xvd2VyQ2FzZSgpICsgXCJqc1wiKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19lc0RlY29yYXRlLFxuICBfX3J1bkluaXRpYWxpemVycyxcbiAgX19wcm9wS2V5LFxuICBfX3NldEZ1bmN0aW9uTmFtZSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG4gIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uLFxufTtcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImJyaWNrUHJvY2VkdXJhbFRleHR1cmVQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHByZWNpc2lvbiBoaWdocCBmbG9hdDt2YXJ5aW5nIHZlYzIgdlBvc2l0aW9uO3ZhcnlpbmcgdmVjMiB2VVY7dW5pZm9ybSBmbG9hdCBudW1iZXJPZkJyaWNrc0hlaWdodDt1bmlmb3JtIGZsb2F0IG51bWJlck9mQnJpY2tzV2lkdGg7dW5pZm9ybSB2ZWMzIGJyaWNrQ29sb3I7dW5pZm9ybSB2ZWMzIGpvaW50Q29sb3I7ZmxvYXQgcmFuZCh2ZWMyIG4pIHtyZXR1cm4gZnJhY3QoY29zKGRvdChuLHZlYzIoMTIuOTg5OCw0LjE0MTQpKSkqNDM3NTguNTQ1Myk7fVxuZmxvYXQgbm9pc2UodmVjMiBuKSB7Y29uc3QgdmVjMiBkPXZlYzIoMC4wLDEuMCk7dmVjMiBiPWZsb29yKG4pLGY9c21vb3Roc3RlcCh2ZWMyKDAuMCksdmVjMigxLjApLGZyYWN0KG4pKTtyZXR1cm4gbWl4KG1peChyYW5kKGIpLHJhbmQoYitkLnl4KSxmLngpLG1peChyYW5kKGIrZC54eSkscmFuZChiK2QueXkpLGYueCksZi55KTt9XG5mbG9hdCBmYm0odmVjMiBuKSB7ZmxvYXQgdG90YWw9MC4wLGFtcGxpdHVkZT0xLjA7Zm9yIChpbnQgaT0wOyBpPDQ7IGkrKykge3RvdGFsKz1ub2lzZShuKSphbXBsaXR1ZGU7bis9bjthbXBsaXR1ZGUqPTAuNTt9XG5yZXR1cm4gdG90YWw7fVxuZmxvYXQgcm91bmRGKGZsb2F0IG51bWJlcil7cmV0dXJuIHNpZ24obnVtYmVyKSpmbG9vcihhYnMobnVtYmVyKSswLjUpO31cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZClcbntmbG9hdCBicmlja1c9MS4wL251bWJlck9mQnJpY2tzV2lkdGg7ZmxvYXQgYnJpY2tIPTEuMC9udW1iZXJPZkJyaWNrc0hlaWdodDtmbG9hdCBqb2ludFdQZXJjZW50YWdlPTAuMDE7ZmxvYXQgam9pbnRIUGVyY2VudGFnZT0wLjA1O3ZlYzMgY29sb3I9YnJpY2tDb2xvcjtmbG9hdCB5aT12VVYueS9icmlja0g7ZmxvYXQgbnlpPXJvdW5kRih5aSk7ZmxvYXQgeGk9dlVWLngvYnJpY2tXO2lmIChtb2QoZmxvb3IoeWkpLDIuMCk9PTAuMCl7eGk9eGktMC41O31cbmZsb2F0IG54aT1yb3VuZEYoeGkpO3ZlYzIgYnJpY2t2VVY9dmVjMigoeGktZmxvb3IoeGkpKS9icmlja0gsKHlpLWZsb29yKHlpKSkvIGJyaWNrVyk7aWYgKHlpPG55aStqb2ludEhQZXJjZW50YWdlICYmIHlpPm55aS1qb2ludEhQZXJjZW50YWdlKXtjb2xvcj1taXgoam9pbnRDb2xvcix2ZWMzKDAuMzcsMC4yNSwwLjI1KSwoeWktbnlpKS9qb2ludEhQZXJjZW50YWdlKzAuMik7fVxuZWxzZSBpZiAoeGk8bnhpK2pvaW50V1BlcmNlbnRhZ2UgJiYgeGk+bnhpLWpvaW50V1BlcmNlbnRhZ2Upe2NvbG9yPW1peChqb2ludENvbG9yLHZlYzMoMC40NCwwLjQ0LDAuNDQpLCh4aS1ueGkpL2pvaW50V1BlcmNlbnRhZ2UrMC4yKTt9XG5lbHNlIHtmbG9hdCBicmlja0NvbG9yU3dpdGNoPW1vZChmbG9vcih5aSkrZmxvb3IoeGkpLDMuMCk7aWYgKGJyaWNrQ29sb3JTd2l0Y2g9PTAuMClcbmNvbG9yPW1peChjb2xvcix2ZWMzKDAuMzMsMC4zMywwLjMzKSwwLjMpO2Vsc2UgaWYgKGJyaWNrQ29sb3JTd2l0Y2g9PTIuMClcbmNvbG9yPW1peChjb2xvcix2ZWMzKDAuMTEsMC4xMSwwLjExKSwwLjMpO31cbmdsX0ZyYWdDb2xvcj12ZWM0KGNvbG9yLDEuMCk7fWA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBicmlja1Byb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplLCBzZXJpYWxpemVBc0NvbG9yMyB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uSGVscGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzLnNlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBQcm9jZWR1cmFsVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9Qcm9jZWR1cmFscy9wcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuaW1wb3J0IFwiLi9icmlja1Byb2NlZHVyYWxUZXh0dXJlLmZyYWdtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnJpY2tQcm9jZWR1cmFsVGV4dHVyZSBleHRlbmRzIFByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgIHByaXZhdGUgX251bWJlck9mQnJpY2tzSGVpZ2h0OiBudW1iZXIgPSAxNTtcclxuICAgIHByaXZhdGUgX251bWJlck9mQnJpY2tzV2lkdGg6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIF9qb2ludENvbG9yID0gbmV3IENvbG9yMygwLjcyLCAwLjcyLCAwLjcyKTtcclxuICAgIHByaXZhdGUgX2JyaWNrQ29sb3IgPSBuZXcgQ29sb3IzKDAuNzcsIDAuNDcsIDAuNCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIHNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBudWxsLCBmYWxsYmFja1RleHR1cmU/OiBUZXh0dXJlLCBnZW5lcmF0ZU1pcE1hcHM/OiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgc2l6ZSwgXCJicmlja1Byb2NlZHVyYWxUZXh0dXJlXCIsIHNjZW5lLCBmYWxsYmFja1RleHR1cmUsIGdlbmVyYXRlTWlwTWFwcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXJVbmlmb3JtcygpIHtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwibnVtYmVyT2ZCcmlja3NIZWlnaHRcIiwgdGhpcy5fbnVtYmVyT2ZCcmlja3NIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJudW1iZXJPZkJyaWNrc1dpZHRoXCIsIHRoaXMuX251bWJlck9mQnJpY2tzV2lkdGgpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IzKFwiYnJpY2tDb2xvclwiLCB0aGlzLl9icmlja0NvbG9yKTtcclxuICAgICAgICB0aGlzLnNldENvbG9yMyhcImpvaW50Q29sb3JcIiwgdGhpcy5fam9pbnRDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZSgpXHJcbiAgICBwdWJsaWMgZ2V0IG51bWJlck9mQnJpY2tzSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mQnJpY2tzSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbnVtYmVyT2ZCcmlja3NIZWlnaHQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX251bWJlck9mQnJpY2tzSGVpZ2h0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBudW1iZXJPZkJyaWNrc1dpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bWJlck9mQnJpY2tzV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBudW1iZXJPZkJyaWNrc1dpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9udW1iZXJPZkJyaWNrc1dpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemVBc0NvbG9yMygpXHJcbiAgICBwdWJsaWMgZ2V0IGpvaW50Q29sb3IoKTogQ29sb3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fam9pbnRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGpvaW50Q29sb3IodmFsdWU6IENvbG9yMykge1xyXG4gICAgICAgIHRoaXMuX2pvaW50Q29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZUFzQ29sb3IzKClcclxuICAgIHB1YmxpYyBnZXQgYnJpY2tDb2xvcigpOiBDb2xvcjMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9icmlja0NvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYnJpY2tDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgdGhpcy5fYnJpY2tDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBicmljayBwcm9jZWR1cmFsIHRleHR1cmVcclxuICAgICAqIEByZXR1cm5zIGEgc2VyaWFsaXplZCBicmljayBwcm9jZWR1cmFsIHRleHR1cmUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0ID0gU2VyaWFsaXphdGlvbkhlbHBlci5TZXJpYWxpemUodGhpcywgc3VwZXIuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY3VzdG9tVHlwZSA9IFwiQkFCWUxPTi5Ccmlja1Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIEJyaWNrIFByb2NlZHVyYWwgVGV4dHVyZSBmcm9tIHBhcnNlZCBicmljayBwcm9jZWR1cmFsIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHBhcnNlZFRleHR1cmUgZGVmaW5lcyBwYXJzZWQgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgY3VycmVudCBzY2VuZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcm9vdCBVUkwgY29udGFpbmluZyBicmljayBwcm9jZWR1cmFsIHRleHR1cmUgaW5mb3JtYXRpb25cclxuICAgICAqIEByZXR1cm5zIGEgcGFyc2VkIEJyaWNrIFByb2NlZHVyYWwgVGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIFBhcnNlKHBhcnNlZFRleHR1cmU6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcpOiBCcmlja1Byb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gU2VyaWFsaXphdGlvbkhlbHBlci5QYXJzZShcclxuICAgICAgICAgICAgKCkgPT4gbmV3IEJyaWNrUHJvY2VkdXJhbFRleHR1cmUocGFyc2VkVGV4dHVyZS5uYW1lLCBwYXJzZWRUZXh0dXJlLl9zaXplLCBzY2VuZSwgdW5kZWZpbmVkLCBwYXJzZWRUZXh0dXJlLl9nZW5lcmF0ZU1pcE1hcHMpLFxyXG4gICAgICAgICAgICBwYXJzZWRUZXh0dXJlLFxyXG4gICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgcm9vdFVybFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5Ccmlja1Byb2NlZHVyYWxUZXh0dXJlXCIsIEJyaWNrUHJvY2VkdXJhbFRleHR1cmUpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9icmlja1Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcImNsb3VkUHJvY2VkdXJhbFRleHR1cmVQaXhlbFNoYWRlclwiO1xuY29uc3Qgc2hhZGVyID0gYHByZWNpc2lvbiBoaWdocCBmbG9hdDt2YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gdmVjNCBza3lDb2xvcjt1bmlmb3JtIHZlYzQgY2xvdWRDb2xvcjt1bmlmb3JtIGZsb2F0IGFtcGxpdHVkZTt1bmlmb3JtIGludCBudW1PY3RhdmVzO2Zsb2F0IHJhbmQodmVjMiBuKSB7cmV0dXJuIGZyYWN0KGNvcyhkb3Qobix2ZWMyKDEyLjk4OTgsNC4xNDE0KSkpKjQzNzU4LjU0NTMpO31cbmZsb2F0IG5vaXNlKHZlYzIgbikge2NvbnN0IHZlYzIgZD12ZWMyKDAuMCwxLjApO3ZlYzIgYj1mbG9vcihuKSxmPXNtb290aHN0ZXAodmVjMigwLjApLHZlYzIoMS4wKSxmcmFjdChuKSk7cmV0dXJuIG1peChtaXgocmFuZChiKSxyYW5kKGIrZC55eCksZi54KSxtaXgocmFuZChiK2QueHkpLHJhbmQoYitkLnl5KSxmLngpLGYueSk7fVxuZmxvYXQgZmJtKHZlYzIgbikge2Zsb2F0IHRvdGFsPTAuMCxhbXBsPWFtcGxpdHVkZTtcbiNpZmRlZiBXRUJHTDJcbmZvciAoaW50IGk9MDsgaTxudW1PY3RhdmVzOyBpKyspIHtcbiNlbHNlXG5mb3IgKGludCBpPTA7IGk8NDsgaSsrKSB7XG4jZW5kaWZcbnRvdGFsKz1ub2lzZShuKSphbXBsO24rPW47YW1wbCo9MC41O31cbnJldHVybiB0b3RhbDt9XG52b2lkIG1haW4oKSB7dmVjMiBwPXZVVioxMi4wO3ZlYzQgYz1taXgoc2t5Q29sb3IsY2xvdWRDb2xvcixmYm0ocCkpO2dsX0ZyYWdDb2xvcj1jO31cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBjbG91ZFByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplLCBzZXJpYWxpemVBc0NvbG9yNCB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uSGVscGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzLnNlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgQ29sb3I0IH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBQcm9jZWR1cmFsVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9Qcm9jZWR1cmFscy9wcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuaW1wb3J0IFwiLi9jbG91ZFByb2NlZHVyYWxUZXh0dXJlLmZyYWdtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvdWRQcm9jZWR1cmFsVGV4dHVyZSBleHRlbmRzIFByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgIHByaXZhdGUgX3NreUNvbG9yID0gbmV3IENvbG9yNCgwLjE1LCAwLjY4LCAxLjAsIDEuMCk7XHJcbiAgICBwcml2YXRlIF9jbG91ZENvbG9yID0gbmV3IENvbG9yNCgxLCAxLCAxLCAxLjApO1xyXG4gICAgcHJpdmF0ZSBfYW1wbGl0dWRlID0gMTtcclxuICAgIHByaXZhdGUgX251bU9jdGF2ZXMgPSA0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgc2l6ZTogbnVtYmVyLCBzY2VuZTogTnVsbGFibGU8U2NlbmU+ID0gbnVsbCwgZmFsbGJhY2tUZXh0dXJlPzogVGV4dHVyZSwgZ2VuZXJhdGVNaXBNYXBzPzogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHNpemUsIFwiY2xvdWRQcm9jZWR1cmFsVGV4dHVyZVwiLCBzY2VuZSwgZmFsbGJhY2tUZXh0dXJlLCBnZW5lcmF0ZU1pcE1hcHMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2hhZGVyVW5pZm9ybXMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjQoXCJza3lDb2xvclwiLCB0aGlzLl9za3lDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjQoXCJjbG91ZENvbG9yXCIsIHRoaXMuX2Nsb3VkQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJhbXBsaXR1ZGVcIiwgdGhpcy5fYW1wbGl0dWRlKTtcclxuICAgICAgICB0aGlzLnNldEludChcIm51bU9jdGF2ZXNcIiwgdGhpcy5fbnVtT2N0YXZlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZUFzQ29sb3I0KClcclxuICAgIHB1YmxpYyBnZXQgc2t5Q29sb3IoKTogQ29sb3I0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2t5Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBza3lDb2xvcih2YWx1ZTogQ29sb3I0KSB7XHJcbiAgICAgICAgdGhpcy5fc2t5Q29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZUFzQ29sb3I0KClcclxuICAgIHB1YmxpYyBnZXQgY2xvdWRDb2xvcigpOiBDb2xvcjQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbG91ZENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgY2xvdWRDb2xvcih2YWx1ZTogQ29sb3I0KSB7XHJcbiAgICAgICAgdGhpcy5fY2xvdWRDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgYW1wbGl0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FtcGxpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGFtcGxpdHVkZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYW1wbGl0dWRlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBudW1PY3RhdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX251bU9jdGF2ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBudW1PY3RhdmVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9udW1PY3RhdmVzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGlzIGNsb3VkIHByb2NlZHVyYWwgdGV4dHVyZVxyXG4gICAgICogQHJldHVybnMgYSBzZXJpYWxpemVkIGNsb3VkIHByb2NlZHVyYWwgdGV4dHVyZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBTZXJpYWxpemF0aW9uSGVscGVyLlNlcmlhbGl6ZSh0aGlzLCBzdXBlci5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jdXN0b21UeXBlID0gXCJCQUJZTE9OLkNsb3VkUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgQ2xvdWQgUHJvY2VkdXJhbCBUZXh0dXJlIGZyb20gcGFyc2VkIGNsb3VkIHByb2NlZHVyYWwgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gcGFyc2VkVGV4dHVyZSBkZWZpbmVzIHBhcnNlZCB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBjdXJyZW50IHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBkZWZpbmVzIHRoZSByb290IFVSTCBjb250YWluaW5nIGNsb3VkIHByb2NlZHVyYWwgdGV4dHVyZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHJldHVybnMgYSBwYXJzZWQgQ2xvdWQgUHJvY2VkdXJhbCBUZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgUGFyc2UocGFyc2VkVGV4dHVyZTogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZyk6IENsb3VkUHJvY2VkdXJhbFRleHR1cmUge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBTZXJpYWxpemF0aW9uSGVscGVyLlBhcnNlKFxyXG4gICAgICAgICAgICAoKSA9PiBuZXcgQ2xvdWRQcm9jZWR1cmFsVGV4dHVyZShwYXJzZWRUZXh0dXJlLm5hbWUsIHBhcnNlZFRleHR1cmUuX3NpemUsIHNjZW5lLCB1bmRlZmluZWQsIHBhcnNlZFRleHR1cmUuX2dlbmVyYXRlTWlwTWFwcyksXHJcbiAgICAgICAgICAgIHBhcnNlZFRleHR1cmUsXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICByb290VXJsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLkNsb3VkUHJvY2VkdXJhbFRleHR1cmVcIiwgQ2xvdWRQcm9jZWR1cmFsVGV4dHVyZSk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2Nsb3VkUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZmlyZVByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7dW5pZm9ybSBmbG9hdCB0aW1lO3VuaWZvcm0gdmVjMyBjMTt1bmlmb3JtIHZlYzMgYzI7dW5pZm9ybSB2ZWMzIGMzO3VuaWZvcm0gdmVjMyBjNDt1bmlmb3JtIHZlYzMgYzU7dW5pZm9ybSB2ZWMzIGM2O3VuaWZvcm0gdmVjMiBzcGVlZDt1bmlmb3JtIGZsb2F0IHNoaWZ0O3VuaWZvcm0gZmxvYXQgYWxwaGFUaHJlc2hvbGQ7dmFyeWluZyB2ZWMyIHZVVjtmbG9hdCByYW5kKHZlYzIgbikge3JldHVybiBmcmFjdChjb3MoZG90KG4sdmVjMigxMi45ODk4LDQuMTQxNCkpKSo0Mzc1OC41NDUzKTt9XG5mbG9hdCBub2lzZSh2ZWMyIG4pIHtjb25zdCB2ZWMyIGQ9dmVjMigwLjAsMS4wKTt2ZWMyIGI9Zmxvb3IobiksZj1zbW9vdGhzdGVwKHZlYzIoMC4wKSx2ZWMyKDEuMCksZnJhY3QobikpO3JldHVybiBtaXgobWl4KHJhbmQoYikscmFuZChiK2QueXgpLGYueCksbWl4KHJhbmQoYitkLnh5KSxyYW5kKGIrZC55eSksZi54KSxmLnkpO31cbmZsb2F0IGZibSh2ZWMyIG4pIHtmbG9hdCB0b3RhbD0wLjAsYW1wbGl0dWRlPTEuMDtmb3IgKGludCBpPTA7IGk8NDsgaSsrKSB7dG90YWwrPW5vaXNlKG4pKmFtcGxpdHVkZTtuKz1uO2FtcGxpdHVkZSo9MC41O31cbnJldHVybiB0b3RhbDt9XG52b2lkIG1haW4oKSB7dmVjMiBwPXZVVio4LjA7ZmxvYXQgcT1mYm0ocC10aW1lKjAuMSk7dmVjMiByPXZlYzIoZmJtKHArcSt0aW1lKnNwZWVkLngtcC54LXAueSksZmJtKHArcS10aW1lKnNwZWVkLnkpKTt2ZWMzIGM9bWl4KGMxLGMyLGZibShwK3IpKSttaXgoYzMsYzQsci54KS1taXgoYzUsYzYsci55KTt2ZWMzIGNvbG9yPWMqY29zKHNoaWZ0KnZVVi55KTtmbG9hdCBsdW1pbmFuY2U9ZG90KGNvbG9yLnJnYix2ZWMzKDAuMywwLjU5LDAuMTEpKTtnbF9GcmFnQ29sb3I9dmVjNChjb2xvcixsdW1pbmFuY2UqYWxwaGFUaHJlc2hvbGQrKDEuMC1hbHBoYVRocmVzaG9sZCkpO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZmlyZVByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplLCBzZXJpYWxpemVBc1ZlY3RvcjIgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvbkhlbHBlciB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9ycy5zZXJpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFByb2NlZHVyYWxUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL1Byb2NlZHVyYWxzL3Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgXCIuL2ZpcmVQcm9jZWR1cmFsVGV4dHVyZS5mcmFnbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmVQcm9jZWR1cmFsVGV4dHVyZSBleHRlbmRzIFByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgIHByaXZhdGUgX3RpbWU6IG51bWJlciA9IDAuMDtcclxuICAgIHByaXZhdGUgX3NwZWVkID0gbmV3IFZlY3RvcjIoMC41LCAwLjMpO1xyXG4gICAgcHJpdmF0ZSBfYXV0b0dlbmVyYXRlVGltZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9maXJlQ29sb3JzOiBDb2xvcjNbXTtcclxuICAgIHByaXZhdGUgX2FscGhhVGhyZXNob2xkOiBudW1iZXIgPSAwLjU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIHNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBudWxsLCBmYWxsYmFja1RleHR1cmU/OiBUZXh0dXJlLCBnZW5lcmF0ZU1pcE1hcHM/OiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgc2l6ZSwgXCJmaXJlUHJvY2VkdXJhbFRleHR1cmVcIiwgc2NlbmUsIGZhbGxiYWNrVGV4dHVyZSwgZ2VuZXJhdGVNaXBNYXBzKTtcclxuICAgICAgICB0aGlzLl9maXJlQ29sb3JzID0gRmlyZVByb2NlZHVyYWxUZXh0dXJlLlJlZEZpcmVDb2xvcnM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXJVbmlmb3JtcygpIHtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwidGltZVwiLCB0aGlzLl90aW1lKTtcclxuICAgICAgICB0aGlzLnNldFZlY3RvcjIoXCJzcGVlZFwiLCB0aGlzLl9zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjMoXCJjMVwiLCB0aGlzLl9maXJlQ29sb3JzWzBdKTtcclxuICAgICAgICB0aGlzLnNldENvbG9yMyhcImMyXCIsIHRoaXMuX2ZpcmVDb2xvcnNbMV0pO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IzKFwiYzNcIiwgdGhpcy5fZmlyZUNvbG9yc1syXSk7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjMoXCJjNFwiLCB0aGlzLl9maXJlQ29sb3JzWzNdKTtcclxuICAgICAgICB0aGlzLnNldENvbG9yMyhcImM1XCIsIHRoaXMuX2ZpcmVDb2xvcnNbNF0pO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IzKFwiYzZcIiwgdGhpcy5fZmlyZUNvbG9yc1s1XSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImFscGhhVGhyZXNob2xkXCIsIHRoaXMuX2FscGhhVGhyZXNob2xkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVuZGVyKHVzZUNhbWVyYVBvc3RQcm9jZXNzPzogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gdGhpcy5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9hdXRvR2VuZXJhdGVUaW1lICYmIHNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWUgKz0gc2NlbmUuZ2V0QW5pbWF0aW9uUmF0aW8oKSAqIDAuMDM7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHVzZUNhbWVyYVBvc3RQcm9jZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBQdXJwbGVGaXJlQ29sb3JzKCk6IENvbG9yM1tdIHtcclxuICAgICAgICByZXR1cm4gW25ldyBDb2xvcjMoMC41LCAwLjAsIDEuMCksIG5ldyBDb2xvcjMoMC45LCAwLjAsIDEuMCksIG5ldyBDb2xvcjMoMC4yLCAwLjAsIDEuMCksIG5ldyBDb2xvcjMoMS4wLCAwLjksIDEuMCksIG5ldyBDb2xvcjMoMC4xLCAwLjEsIDEuMCksIG5ldyBDb2xvcjMoMC45LCAwLjksIDEuMCldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEdyZWVuRmlyZUNvbG9ycygpOiBDb2xvcjNbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtuZXcgQ29sb3IzKDAuNSwgMS4wLCAwLjApLCBuZXcgQ29sb3IzKDAuNSwgMS4wLCAwLjApLCBuZXcgQ29sb3IzKDAuMywgMC40LCAwLjApLCBuZXcgQ29sb3IzKDAuNSwgMS4wLCAwLjApLCBuZXcgQ29sb3IzKDAuMiwgMC4wLCAwLjApLCBuZXcgQ29sb3IzKDAuNSwgMS4wLCAwLjApXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBSZWRGaXJlQ29sb3JzKCk6IENvbG9yM1tdIHtcclxuICAgICAgICByZXR1cm4gW25ldyBDb2xvcjMoMC41LCAwLjAsIDAuMSksIG5ldyBDb2xvcjMoMC45LCAwLjAsIDAuMCksIG5ldyBDb2xvcjMoMC4yLCAwLjAsIDAuMCksIG5ldyBDb2xvcjMoMS4wLCAwLjksIDAuMCksIG5ldyBDb2xvcjMoMC4xLCAwLjEsIDAuMSksIG5ldyBDb2xvcjMoMC45LCAwLjksIDAuOSldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEJsdWVGaXJlQ29sb3JzKCk6IENvbG9yM1tdIHtcclxuICAgICAgICByZXR1cm4gW25ldyBDb2xvcjMoMC4xLCAwLjAsIDAuNSksIG5ldyBDb2xvcjMoMC4wLCAwLjAsIDAuNSksIG5ldyBDb2xvcjMoMC4xLCAwLjAsIDAuMiksIG5ldyBDb2xvcjMoMC4wLCAwLjAsIDEuMCksIG5ldyBDb2xvcjMoMC4xLCAwLjIsIDAuMyksIG5ldyBDb2xvcjMoMC4wLCAwLjIsIDAuOSldO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBhdXRvR2VuZXJhdGVUaW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvR2VuZXJhdGVUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYXV0b0dlbmVyYXRlVGltZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2F1dG9HZW5lcmF0ZVRpbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZpcmVDb2xvcnMoKTogQ29sb3IzW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maXJlQ29sb3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZmlyZUNvbG9ycyh2YWx1ZTogQ29sb3IzW10pIHtcclxuICAgICAgICB0aGlzLl9maXJlQ29sb3JzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCB0aW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB0aW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl90aW1lID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemVBc1ZlY3RvcjIoKVxyXG4gICAgcHVibGljIGdldCBzcGVlZCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBzcGVlZCh2YWx1ZTogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMuX3NwZWVkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBhbHBoYVRocmVzaG9sZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbHBoYVRocmVzaG9sZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGFscGhhVGhyZXNob2xkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hbHBoYVRocmVzaG9sZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBmaXJlIHByb2NlZHVyYWwgdGV4dHVyZVxyXG4gICAgICogQHJldHVybnMgYSBzZXJpYWxpemVkIGZpcmUgcHJvY2VkdXJhbCB0ZXh0dXJlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IFNlcmlhbGl6YXRpb25IZWxwZXIuU2VyaWFsaXplKHRoaXMsIHN1cGVyLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmN1c3RvbVR5cGUgPSBcIkJBQllMT04uRmlyZVByb2NlZHVyYWxUZXh0dXJlXCI7XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZmlyZUNvbG9ycyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlyZUNvbG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmZpcmVDb2xvcnMucHVzaCh0aGlzLl9maXJlQ29sb3JzW2ldLmFzQXJyYXkoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBGaXJlIFByb2NlZHVyYWwgVGV4dHVyZSBmcm9tIHBhcnNlZCBmaXJlIHByb2NlZHVyYWwgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gcGFyc2VkVGV4dHVyZSBkZWZpbmVzIHBhcnNlZCB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBjdXJyZW50IHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBkZWZpbmVzIHRoZSByb290IFVSTCBjb250YWluaW5nIGZpcmUgcHJvY2VkdXJhbCB0ZXh0dXJlIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyBhIHBhcnNlZCBGaXJlIFByb2NlZHVyYWwgVGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIFBhcnNlKHBhcnNlZFRleHR1cmU6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcpOiBGaXJlUHJvY2VkdXJhbFRleHR1cmUge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBTZXJpYWxpemF0aW9uSGVscGVyLlBhcnNlKFxyXG4gICAgICAgICAgICAoKSA9PiBuZXcgRmlyZVByb2NlZHVyYWxUZXh0dXJlKHBhcnNlZFRleHR1cmUubmFtZSwgcGFyc2VkVGV4dHVyZS5fc2l6ZSwgc2NlbmUsIHVuZGVmaW5lZCwgcGFyc2VkVGV4dHVyZS5fZ2VuZXJhdGVNaXBNYXBzKSxcclxuICAgICAgICAgICAgcGFyc2VkVGV4dHVyZSxcclxuICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgIHJvb3RVcmxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvcnM6IENvbG9yM1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZWRUZXh0dXJlLmZpcmVDb2xvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29sb3JzLnB1c2goQ29sb3IzLkZyb21BcnJheShwYXJzZWRUZXh0dXJlLmZpcmVDb2xvcnNbaV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHR1cmUuZmlyZUNvbG9ycyA9IGNvbG9ycztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLkZpcmVQcm9jZWR1cmFsVGV4dHVyZVwiLCBGaXJlUHJvY2VkdXJhbFRleHR1cmUpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9maXJlUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwiZ3Jhc3NQcm9jZWR1cmFsVGV4dHVyZVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiB2UG9zaXRpb247dmFyeWluZyB2ZWMyIHZVVjt1bmlmb3JtIHZlYzMgaGVyYjFDb2xvcjt1bmlmb3JtIHZlYzMgaGVyYjJDb2xvcjt1bmlmb3JtIHZlYzMgaGVyYjNDb2xvcjt1bmlmb3JtIHZlYzMgZ3JvdW5kQ29sb3I7ZmxvYXQgcmFuZCh2ZWMyIG4pIHtyZXR1cm4gZnJhY3QoY29zKGRvdChuLHZlYzIoMTIuOTg5OCw0LjE0MTQpKSkqNDM3NTguNTQ1Myk7fVxuZmxvYXQgbm9pc2UodmVjMiBuKSB7Y29uc3QgdmVjMiBkPXZlYzIoMC4wLDEuMCk7dmVjMiBiPWZsb29yKG4pLGY9c21vb3Roc3RlcCh2ZWMyKDAuMCksdmVjMigxLjApLGZyYWN0KG4pKTtyZXR1cm4gbWl4KG1peChyYW5kKGIpLHJhbmQoYitkLnl4KSxmLngpLG1peChyYW5kKGIrZC54eSkscmFuZChiK2QueXkpLGYueCksZi55KTt9XG5mbG9hdCBmYm0odmVjMiBuKSB7ZmxvYXQgdG90YWw9MC4wLGFtcGxpdHVkZT0xLjA7Zm9yIChpbnQgaT0wOyBpPDQ7IGkrKykge3RvdGFsKz1ub2lzZShuKSphbXBsaXR1ZGU7bis9bjthbXBsaXR1ZGUqPTAuNTt9XG5yZXR1cm4gdG90YWw7fVxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG52ZWMzIGNvbG9yPW1peChncm91bmRDb2xvcixoZXJiMUNvbG9yLHJhbmQoZ2xfRnJhZ0Nvb3JkLnh5KjQuMCkpO2NvbG9yPW1peChjb2xvcixoZXJiMkNvbG9yLHJhbmQoZ2xfRnJhZ0Nvb3JkLnh5KjguMCkpO2NvbG9yPW1peChjb2xvcixoZXJiM0NvbG9yLHJhbmQoZ2xfRnJhZ0Nvb3JkLnh5KSk7Y29sb3I9bWl4KGNvbG9yLGhlcmIxQ29sb3IsZmJtKGdsX0ZyYWdDb29yZC54eSoxNi4wKSk7Z2xfRnJhZ0NvbG9yPXZlYzQoY29sb3IsMS4wKTtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGdyYXNzUHJvY2VkdXJhbFRleHR1cmVQaXhlbFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCJpbXBvcnQgeyBzZXJpYWxpemVBc0NvbG9yMyB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBTZXJpYWxpemF0aW9uSGVscGVyIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzLnNlcmlhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgQ29sb3IzIH0gZnJvbSBcImNvcmUvTWF0aHMvbWF0aC5jb2xvclwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBQcm9jZWR1cmFsVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9Qcm9jZWR1cmFscy9wcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5cclxuaW1wb3J0IFwiLi9ncmFzc1Byb2NlZHVyYWxUZXh0dXJlLmZyYWdtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NQcm9jZWR1cmFsVGV4dHVyZSBleHRlbmRzIFByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgIHByaXZhdGUgX2dyYXNzQ29sb3JzOiBDb2xvcjNbXTtcclxuICAgIHByaXZhdGUgX2dyb3VuZENvbG9yID0gbmV3IENvbG9yMygxLCAxLCAxKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNpemU6IG51bWJlciwgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IG51bGwsIGZhbGxiYWNrVGV4dHVyZT86IFRleHR1cmUsIGdlbmVyYXRlTWlwTWFwcz86IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzaXplLCBcImdyYXNzUHJvY2VkdXJhbFRleHR1cmVcIiwgc2NlbmUsIGZhbGxiYWNrVGV4dHVyZSwgZ2VuZXJhdGVNaXBNYXBzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ3Jhc3NDb2xvcnMgPSBbbmV3IENvbG9yMygwLjI5LCAwLjM4LCAwLjAyKSwgbmV3IENvbG9yMygwLjM2LCAwLjQ5LCAwLjA5KSwgbmV3IENvbG9yMygwLjUxLCAwLjYsIDAuMjgpXTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXJVbmlmb3JtcygpIHtcclxuICAgICAgICB0aGlzLnNldENvbG9yMyhcImhlcmIxQ29sb3JcIiwgdGhpcy5fZ3Jhc3NDb2xvcnNbMF0pO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IzKFwiaGVyYjJDb2xvclwiLCB0aGlzLl9ncmFzc0NvbG9yc1sxXSk7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjMoXCJoZXJiM0NvbG9yXCIsIHRoaXMuX2dyYXNzQ29sb3JzWzJdKTtcclxuICAgICAgICB0aGlzLnNldENvbG9yMyhcImdyb3VuZENvbG9yXCIsIHRoaXMuX2dyb3VuZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdyYXNzQ29sb3JzKCk6IENvbG9yM1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3Jhc3NDb2xvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBncmFzc0NvbG9ycyh2YWx1ZTogQ29sb3IzW10pIHtcclxuICAgICAgICB0aGlzLl9ncmFzc0NvbG9ycyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplQXNDb2xvcjMoKVxyXG4gICAgcHVibGljIGdldCBncm91bmRDb2xvcigpOiBDb2xvcjMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91bmRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGdyb3VuZENvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9ncm91bmRDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBncmFzcyBwcm9jZWR1cmFsIHRleHR1cmVcclxuICAgICAqIEByZXR1cm5zIGEgc2VyaWFsaXplZCBncmFzcyBwcm9jZWR1cmFsIHRleHR1cmUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0ID0gU2VyaWFsaXphdGlvbkhlbHBlci5TZXJpYWxpemUodGhpcywgc3VwZXIuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY3VzdG9tVHlwZSA9IFwiQkFCWUxPTi5HcmFzc1Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcblxyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ3Jhc3NDb2xvcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2dyYXNzQ29sb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuZ3Jhc3NDb2xvcnMucHVzaCh0aGlzLl9ncmFzc0NvbG9yc1tpXS5hc0FycmF5KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgR3Jhc3MgUHJvY2VkdXJhbCBUZXh0dXJlIGZyb20gcGFyc2VkIGdyYXNzIHByb2NlZHVyYWwgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gcGFyc2VkVGV4dHVyZSBkZWZpbmVzIHBhcnNlZCB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBjdXJyZW50IHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBkZWZpbmVzIHRoZSByb290IFVSTCBjb250YWluaW5nIGdyYXNzIHByb2NlZHVyYWwgdGV4dHVyZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHJldHVybnMgYSBwYXJzZWQgR3Jhc3MgUHJvY2VkdXJhbCBUZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgUGFyc2UocGFyc2VkVGV4dHVyZTogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZyk6IEdyYXNzUHJvY2VkdXJhbFRleHR1cmUge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBTZXJpYWxpemF0aW9uSGVscGVyLlBhcnNlKFxyXG4gICAgICAgICAgICAoKSA9PiBuZXcgR3Jhc3NQcm9jZWR1cmFsVGV4dHVyZShwYXJzZWRUZXh0dXJlLm5hbWUsIHBhcnNlZFRleHR1cmUuX3NpemUsIHNjZW5lLCB1bmRlZmluZWQsIHBhcnNlZFRleHR1cmUuX2dlbmVyYXRlTWlwTWFwcyksXHJcbiAgICAgICAgICAgIHBhcnNlZFRleHR1cmUsXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICByb290VXJsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JzOiBDb2xvcjNbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VkVGV4dHVyZS5ncmFzc0NvbG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xvcnMucHVzaChDb2xvcjMuRnJvbUFycmF5KHBhcnNlZFRleHR1cmUuZ3Jhc3NDb2xvcnNbaV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHR1cmUuZ3Jhc3NDb2xvcnMgPSBjb2xvcnM7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5HcmFzc1Byb2NlZHVyYWxUZXh0dXJlXCIsIEdyYXNzUHJvY2VkdXJhbFRleHR1cmUpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9ncmFzc1Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmV4cG9ydCAqIGZyb20gXCIuL2JyaWNrL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Nsb3VkL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpcmUvaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ3Jhc3MvaW5kZXhcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbWFyYmxlL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL25vcm1hbE1hcC9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9wZXJsaW5Ob2lzZS9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yb2FkL2luZGV4XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0YXJmaWVsZC9pbmRleFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi93b29kL2luZGV4XCI7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL21hcmJsZVByb2NlZHVyYWxUZXh0dXJlXCI7XHJcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIm1hcmJsZVByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7dmFyeWluZyB2ZWMyIHZQb3NpdGlvbjt2YXJ5aW5nIHZlYzIgdlVWO3VuaWZvcm0gZmxvYXQgbnVtYmVyT2ZUaWxlc0hlaWdodDt1bmlmb3JtIGZsb2F0IG51bWJlck9mVGlsZXNXaWR0aDt1bmlmb3JtIGZsb2F0IGFtcGxpdHVkZTt1bmlmb3JtIHZlYzMgbWFyYmxlQ29sb3I7dW5pZm9ybSB2ZWMzIGpvaW50Q29sb3I7Y29uc3QgdmVjMyB0aWxlU2l6ZT12ZWMzKDEuMSwxLjAsMS4xKTtjb25zdCB2ZWMzIHRpbGVQY3Q9dmVjMygwLjk4LDEuMCwwLjk4KTtmbG9hdCByYW5kKHZlYzIgbikge3JldHVybiBmcmFjdChjb3MoZG90KG4sdmVjMigxMi45ODk4LDQuMTQxNCkpKSo0Mzc1OC41NDUzKTt9XG5mbG9hdCBub2lzZSh2ZWMyIG4pIHtjb25zdCB2ZWMyIGQ9dmVjMigwLjAsMS4wKTt2ZWMyIGI9Zmxvb3IobiksZj1zbW9vdGhzdGVwKHZlYzIoMC4wKSx2ZWMyKDEuMCksZnJhY3QobikpO3JldHVybiBtaXgobWl4KHJhbmQoYikscmFuZChiK2QueXgpLGYueCksbWl4KHJhbmQoYitkLnh5KSxyYW5kKGIrZC55eSksZi54KSxmLnkpO31cbmZsb2F0IHR1cmJ1bGVuY2UodmVjMiBQKVxue2Zsb2F0IHZhbD0wLjA7ZmxvYXQgZnJlcT0xLjA7Zm9yIChpbnQgaT0wOyBpPDQ7IGkrKylcbnt2YWwrPWFicyhub2lzZShQKmZyZXEpL2ZyZXEpO2ZyZXEqPTIuMDc7fVxucmV0dXJuIHZhbDt9XG5mbG9hdCByb3VuZEYoZmxvYXQgbnVtYmVyKXtyZXR1cm4gc2lnbihudW1iZXIpKmZsb29yKGFicyhudW1iZXIpKzAuNSk7fVxudmVjMyBtYXJibGVfY29sb3IoZmxvYXQgeClcbnt2ZWMzIGNvbDt4PTAuNSooeCsxLik7eD1zcXJ0KHgpOyBcbng9c3FydCh4KTt4PXNxcnQoeCk7Y29sPXZlYzMoLjIrLjc1KngpOyBcbmNvbC5iKj0wLjk1OyBcbnJldHVybiBjb2w7fVxudm9pZCBtYWluKClcbntmbG9hdCBicmlja1c9MS4wL251bWJlck9mVGlsZXNXaWR0aDtmbG9hdCBicmlja0g9MS4wL251bWJlck9mVGlsZXNIZWlnaHQ7ZmxvYXQgam9pbnRXUGVyY2VudGFnZT0wLjAxO2Zsb2F0IGpvaW50SFBlcmNlbnRhZ2U9MC4wMTt2ZWMzIGNvbG9yPW1hcmJsZUNvbG9yO2Zsb2F0IHlpPXZVVi55L2JyaWNrSDtmbG9hdCBueWk9cm91bmRGKHlpKTtmbG9hdCB4aT12VVYueC9icmlja1c7aWYgKG1vZChmbG9vcih5aSksMi4wKT09MC4wKXt4aT14aS0wLjU7fVxuZmxvYXQgbnhpPXJvdW5kRih4aSk7dmVjMiBicmlja3ZVVj12ZWMyKCh4aS1mbG9vcih4aSkpL2JyaWNrSCwoeWktZmxvb3IoeWkpKS9icmlja1cpO2lmICh5aTxueWkram9pbnRIUGVyY2VudGFnZSAmJiB5aT5ueWktam9pbnRIUGVyY2VudGFnZSl7Y29sb3I9bWl4KGpvaW50Q29sb3IsdmVjMygwLjM3LDAuMjUsMC4yNSksKHlpLW55aSkvam9pbnRIUGVyY2VudGFnZSswLjIpO31cbmVsc2UgaWYgKHhpPG54aStqb2ludFdQZXJjZW50YWdlICYmIHhpPm54aS1qb2ludFdQZXJjZW50YWdlKXtjb2xvcj1taXgoam9pbnRDb2xvcix2ZWMzKDAuNDQsMC40NCwwLjQ0KSwoeGktbnhpKS9qb2ludFdQZXJjZW50YWdlKzAuMik7fVxuZWxzZSB7ZmxvYXQgdD02LjI4KmJyaWNrdlVWLngvKHRpbGVTaXplLngrbm9pc2UodmVjMih2VVYpKjYuMCkpO3QrPWFtcGxpdHVkZSp0dXJidWxlbmNlKGJyaWNrdlVWLnh5KTt0PXNpbih0KTtjb2xvcj1tYXJibGVfY29sb3IodCk7fVxuZ2xfRnJhZ0NvbG9yPXZlYzQoY29sb3IsMC4wKTt9YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG1hcmJsZVByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFNlcmlhbGl6YXRpb25IZWxwZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnMuc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFByb2NlZHVyYWxUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL1Byb2NlZHVyYWxzL3Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcblxyXG5pbXBvcnQgXCIuL21hcmJsZVByb2NlZHVyYWxUZXh0dXJlLmZyYWdtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFyYmxlUHJvY2VkdXJhbFRleHR1cmUgZXh0ZW5kcyBQcm9jZWR1cmFsVGV4dHVyZSB7XHJcbiAgICBwcml2YXRlIF9udW1iZXJPZlRpbGVzSGVpZ2h0OiBudW1iZXIgPSAzO1xyXG4gICAgcHJpdmF0ZSBfbnVtYmVyT2ZUaWxlc1dpZHRoOiBudW1iZXIgPSAzO1xyXG4gICAgcHJpdmF0ZSBfYW1wbGl0dWRlOiBudW1iZXIgPSA5LjA7XHJcbiAgICBwcml2YXRlIF9qb2ludENvbG9yID0gbmV3IENvbG9yMygwLjcyLCAwLjcyLCAwLjcyKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNpemU6IG51bWJlciwgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IG51bGwsIGZhbGxiYWNrVGV4dHVyZT86IFRleHR1cmUsIGdlbmVyYXRlTWlwTWFwcz86IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzaXplLCBcIm1hcmJsZVByb2NlZHVyYWxUZXh0dXJlXCIsIHNjZW5lLCBmYWxsYmFja1RleHR1cmUsIGdlbmVyYXRlTWlwTWFwcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXJVbmlmb3JtcygpIHtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwibnVtYmVyT2ZUaWxlc0hlaWdodFwiLCB0aGlzLl9udW1iZXJPZlRpbGVzSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwibnVtYmVyT2ZUaWxlc1dpZHRoXCIsIHRoaXMuX251bWJlck9mVGlsZXNXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImFtcGxpdHVkZVwiLCB0aGlzLl9hbXBsaXR1ZGUpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29sb3IzKFwiam9pbnRDb2xvclwiLCB0aGlzLl9qb2ludENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgbnVtYmVyT2ZUaWxlc0hlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9udW1iZXJPZlRpbGVzSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbnVtYmVyT2ZUaWxlc0hlaWdodCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtYmVyT2ZUaWxlc0hlaWdodCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgYW1wbGl0dWRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FtcGxpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGFtcGxpdHVkZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYW1wbGl0dWRlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBudW1iZXJPZlRpbGVzV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZUaWxlc1dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbnVtYmVyT2ZUaWxlc1dpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9udW1iZXJPZlRpbGVzV2lkdGggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZSgpXHJcbiAgICBwdWJsaWMgZ2V0IGpvaW50Q29sb3IoKTogQ29sb3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fam9pbnRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGpvaW50Q29sb3IodmFsdWU6IENvbG9yMykge1xyXG4gICAgICAgIHRoaXMuX2pvaW50Q29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgbWFyYmxlIHByb2NlZHVyYWwgdGV4dHVyZVxyXG4gICAgICogQHJldHVybnMgYSBzZXJpYWxpemVkIG1hcmJsZSBwcm9jZWR1cmFsIHRleHR1cmUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0ID0gU2VyaWFsaXphdGlvbkhlbHBlci5TZXJpYWxpemUodGhpcywgc3VwZXIuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY3VzdG9tVHlwZSA9IFwiQkFCWUxPTi5NYXJibGVQcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBNYXJibGUgUHJvY2VkdXJhbCBUZXh0dXJlIGZyb20gcGFyc2VkIG1hcmJsZSBwcm9jZWR1cmFsIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHBhcnNlZFRleHR1cmUgZGVmaW5lcyBwYXJzZWQgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgY3VycmVudCBzY2VuZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcm9vdCBVUkwgY29udGFpbmluZyBtYXJibGUgcHJvY2VkdXJhbCB0ZXh0dXJlIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyBhIHBhcnNlZCBNYXJibGUgUHJvY2VkdXJhbCBUZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgb3ZlcnJpZGUgUGFyc2UocGFyc2VkVGV4dHVyZTogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZyk6IE1hcmJsZVByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gU2VyaWFsaXphdGlvbkhlbHBlci5QYXJzZShcclxuICAgICAgICAgICAgKCkgPT4gbmV3IE1hcmJsZVByb2NlZHVyYWxUZXh0dXJlKHBhcnNlZFRleHR1cmUubmFtZSwgcGFyc2VkVGV4dHVyZS5fc2l6ZSwgc2NlbmUsIHVuZGVmaW5lZCwgcGFyc2VkVGV4dHVyZS5fZ2VuZXJhdGVNaXBNYXBzKSxcclxuICAgICAgICAgICAgcGFyc2VkVGV4dHVyZSxcclxuICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgIHJvb3RVcmxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhcIkJBQllMT04uTWFyYmxlUHJvY2VkdXJhbFRleHR1cmVcIiwgTWFyYmxlUHJvY2VkdXJhbFRleHR1cmUpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9ub3JtYWxNYXBQcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG4iLCIvLyBEbyBub3QgZWRpdC5cbmltcG9ydCB7IFNoYWRlclN0b3JlIH0gZnJvbSBcImNvcmUvRW5naW5lcy9zaGFkZXJTdG9yZVwiO1xuXG5jb25zdCBuYW1lID0gXCJub3JtYWxNYXBQcm9jZWR1cmFsVGV4dHVyZVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3VuaWZvcm0gc2FtcGxlcjJEIGJhc2VTYW1wbGVyO3VuaWZvcm0gZmxvYXQgc2l6ZTt2YXJ5aW5nIHZlYzIgdlVWO2NvbnN0IHZlYzMgTFVNQV9DT0VGRklDSUVOVD12ZWMzKDAuMjEyNiwwLjcxNTIsMC4wNzIyKTtmbG9hdCBsdW1hQXRDb29yZCh2ZWMyIGNvb3JkKVxue3ZlYzMgcGl4ZWw9dGV4dHVyZTJEKGJhc2VTYW1wbGVyLGNvb3JkKS5yZ2I7ZmxvYXQgbHVtYT1kb3QocGl4ZWwsTFVNQV9DT0VGRklDSUVOVCk7cmV0dXJuIGx1bWE7fVxudm9pZCBtYWluKClcbntmbG9hdCBsdW1hVTA9bHVtYUF0Q29vcmQodlVWK3ZlYzIoLTEuMCwgMC4wKS9zaXplKTtmbG9hdCBsdW1hVTE9bHVtYUF0Q29vcmQodlVWK3ZlYzIoIDEuMCwgMC4wKS9zaXplKTtmbG9hdCBsdW1hVjA9bHVtYUF0Q29vcmQodlVWK3ZlYzIoIDAuMCwtMS4wKS9zaXplKTtmbG9hdCBsdW1hVjE9bHVtYUF0Q29vcmQodlVWK3ZlYzIoIDAuMCwgMS4wKS9zaXplKTt2ZWMyIHNsb3BlPSh2ZWMyKGx1bWFVMC1sdW1hVTEsbHVtYVYwLWx1bWFWMSkrMS4wKSowLjU7Z2xfRnJhZ0NvbG9yPXZlYzQoc2xvcGUsMS4wLDEuMCk7fVxuYDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbE1hcFByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplQXNUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFNlcmlhbGl6YXRpb25IZWxwZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnMuc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBQcm9jZWR1cmFsVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9Qcm9jZWR1cmFscy9wcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgXCIuL25vcm1hbE1hcFByb2NlZHVyYWxUZXh0dXJlLmZyYWdtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTm9ybWFsTWFwUHJvY2VkdXJhbFRleHR1cmUgZXh0ZW5kcyBQcm9jZWR1cmFsVGV4dHVyZSB7XHJcbiAgICBwcml2YXRlIF9iYXNlVGV4dHVyZTogVGV4dHVyZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNpemU6IG51bWJlciwgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IG51bGwsIGZhbGxiYWNrVGV4dHVyZT86IFRleHR1cmUsIGdlbmVyYXRlTWlwTWFwcz86IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzaXplLCBcIm5vcm1hbE1hcFByb2NlZHVyYWxUZXh0dXJlXCIsIHNjZW5lLCBmYWxsYmFja1RleHR1cmUsIGdlbmVyYXRlTWlwTWFwcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXJVbmlmb3JtcygpIHtcclxuICAgICAgICB0aGlzLnNldFRleHR1cmUoXCJiYXNlU2FtcGxlclwiLCB0aGlzLl9iYXNlVGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcInNpemVcIiwgdGhpcy5nZXRSZW5kZXJTaXplKCkgYXMgbnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVuZGVyKHVzZUNhbWVyYVBvc3RQcm9jZXNzPzogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih1c2VDYW1lcmFQb3N0UHJvY2Vzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHJlc2l6ZShzaXplOiBhbnksIGdlbmVyYXRlTWlwTWFwczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVzaXplKHNpemUsIGdlbmVyYXRlTWlwTWFwcyk7XHJcblxyXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIHRoZSBcInNpemVcIiB1bmlmb3JtXHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBpc1JlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fYmFzZVRleHR1cmUgfHwgIXRoaXMuX2Jhc2VUZXh0dXJlLmlzUmVhZHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIuaXNSZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemVBc1RleHR1cmUoKVxyXG4gICAgcHVibGljIGdldCBiYXNlVGV4dHVyZSgpOiBUZXh0dXJlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzZVRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBiYXNlVGV4dHVyZSh0ZXh0dXJlOiBUZXh0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBub3JtYWwgbWFwIHByb2NlZHVyYWwgdGV4dHVyZVxyXG4gICAgICogQHJldHVybnMgYSBzZXJpYWxpemVkIG5vcm1hbCBtYXAgcHJvY2VkdXJhbCB0ZXh0dXJlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc2VyaWFsaXplKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3Qgc2VyaWFsaXphdGlvbk9iamVjdCA9IFNlcmlhbGl6YXRpb25IZWxwZXIuU2VyaWFsaXplKHRoaXMsIHN1cGVyLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICBzZXJpYWxpemF0aW9uT2JqZWN0LmN1c3RvbVR5cGUgPSBcIkJBQllMT04uTm9ybWFsTWFwUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTm9ybWFsIE1hcCBQcm9jZWR1cmFsIFRleHR1cmUgZnJvbSBwYXJzZWQgbm9ybWFsIG1hcCBwcm9jZWR1cmFsIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHBhcnNlZFRleHR1cmUgZGVmaW5lcyBwYXJzZWQgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgY3VycmVudCBzY2VuZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcm9vdCBVUkwgY29udGFpbmluZyBub3JtYWwgbWFwIHByb2NlZHVyYWwgdGV4dHVyZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHJldHVybnMgYSBwYXJzZWQgTm9ybWFsIE1hcCBQcm9jZWR1cmFsIFRleHR1cmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBvdmVycmlkZSBQYXJzZShwYXJzZWRUZXh0dXJlOiBhbnksIHNjZW5lOiBTY2VuZSwgcm9vdFVybDogc3RyaW5nKTogTm9ybWFsTWFwUHJvY2VkdXJhbFRleHR1cmUge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBTZXJpYWxpemF0aW9uSGVscGVyLlBhcnNlKFxyXG4gICAgICAgICAgICAoKSA9PiBuZXcgTm9ybWFsTWFwUHJvY2VkdXJhbFRleHR1cmUocGFyc2VkVGV4dHVyZS5uYW1lLCBwYXJzZWRUZXh0dXJlLl9zaXplLCBzY2VuZSwgdW5kZWZpbmVkLCBwYXJzZWRUZXh0dXJlLl9nZW5lcmF0ZU1pcE1hcHMpLFxyXG4gICAgICAgICAgICBwYXJzZWRUZXh0dXJlLFxyXG4gICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgcm9vdFVybFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5Ob3JtYWxNYXBQcm9jZWR1cmFsVGV4dHVyZVwiLCBOb3JtYWxNYXBQcm9jZWR1cmFsVGV4dHVyZSk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3Blcmxpbk5vaXNlUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicGVybGluTm9pc2VQcm9jZWR1cmFsVGV4dHVyZVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3VuaWZvcm0gZmxvYXQgc2l6ZTt1bmlmb3JtIGZsb2F0IHRpbWU7dW5pZm9ybSBmbG9hdCB0cmFuc2xhdGlvblNwZWVkO3ZhcnlpbmcgdmVjMiB2VVY7ZmxvYXQgcihmbG9hdCBuKVxue3JldHVybiBmcmFjdChjb3Mobio4OS40MikqMzQzLjQyKTt9XG52ZWMyIHIodmVjMiBuKVxue3JldHVybiB2ZWMyKHIobi54KjIzLjYyLTMwMC4wK24ueSozNC4zNSkscihuLngqNDUuMTMrMjU2LjArbi55KjM4Ljg5KSk7IH1cbmZsb2F0IHdvcmxleSh2ZWMyIG4sZmxvYXQgcylcbntmbG9hdCBkaXM9MS4wO2ZvcihpbnQgeD0tMTsgeDw9MTsgeCsrKVxue2ZvcihpbnQgeT0tMTsgeTw9MTsgeSsrKVxue3ZlYzIgcD1mbG9vcihuL3MpK3ZlYzIoeCx5KTtmbG9hdCBkPWxlbmd0aChyKHApK3ZlYzIoeCx5KS1mcmFjdChuL3MpKTtpZiAoZGlzPmQpXG5kaXM9ZDt9fVxucmV0dXJuIDEuMC1kaXM7fVxudmVjMyBoYXNoMzModmVjMyBwMylcbntwMz1mcmFjdChwMyp2ZWMzKDAuMTAzMSwwLjExMzY5LDAuMTM3ODcpKTtwMys9ZG90KHAzLHAzLnl4eisxOS4xOSk7cmV0dXJuIC0xLjArMi4wKmZyYWN0KHZlYzMoKHAzLngrcDMueSkqcDMueiwocDMueCtwMy56KSpwMy55LChwMy55K3AzLnopKnAzLngpKTt9XG5mbG9hdCBwZXJsaW5Ob2lzZSh2ZWMzIHApXG57dmVjMyBwaT1mbG9vcihwKTt2ZWMzIHBmPXAtcGk7dmVjMyB3PXBmKnBmKigzLjAtMi4wKnBmKTtyZXR1cm4gbWl4KFxubWl4KFxubWl4KFxuZG90KHBmLXZlYzMoMCwwLDApLGhhc2gzMyhwaSt2ZWMzKDAsMCwwKSkpLFxuZG90KHBmLXZlYzMoMSwwLDApLGhhc2gzMyhwaSt2ZWMzKDEsMCwwKSkpLFxudy54XG4pLFxubWl4KFxuZG90KHBmLXZlYzMoMCwwLDEpLGhhc2gzMyhwaSt2ZWMzKDAsMCwxKSkpLFxuZG90KHBmLXZlYzMoMSwwLDEpLGhhc2gzMyhwaSt2ZWMzKDEsMCwxKSkpLFxudy54XG4pLFxudy56XG4pLFxubWl4KFxubWl4KFxuZG90KHBmLXZlYzMoMCwxLDApLGhhc2gzMyhwaSt2ZWMzKDAsMSwwKSkpLFxuZG90KHBmLXZlYzMoMSwxLDApLGhhc2gzMyhwaSt2ZWMzKDEsMSwwKSkpLFxudy54XG4pLFxubWl4KFxuZG90KHBmLXZlYzMoMCwxLDEpLGhhc2gzMyhwaSt2ZWMzKDAsMSwxKSkpLFxuZG90KHBmLXZlYzMoMSwxLDEpLGhhc2gzMyhwaSt2ZWMzKDEsMSwxKSkpLFxudy54XG4pLFxudy56XG4pLFxudy55XG4pO31cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZClcbnt2ZWMyIHV2PWdsX0ZyYWdDb29yZC54eSt0cmFuc2xhdGlvblNwZWVkO2Zsb2F0IGRpcz0oXG4xLjArcGVybGluTm9pc2UodmVjMyh1di92ZWMyKHNpemUsc2l6ZSksdGltZSowLjA1KSo4LjApKVxuKiAoMS4wKyh3b3JsZXkodXYsMzIuMCkrIDAuNSp3b3JsZXkoMi4wKnV2LDMyLjApKzAuMjUqd29ybGV5KDQuMCp1diwzMi4wKSlcbik7Z2xfRnJhZ0NvbG9yPXZlYzQodmVjMyhkaXMvNC4wKSwxLjApO31cbmA7XG4vLyBTaWRlZWZmZWN0XG5pZiAoIVNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSkge1xuICAgIFNoYWRlclN0b3JlLlNoYWRlcnNTdG9yZVtuYW1lXSA9IHNoYWRlcjtcbn1cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBwZXJsaW5Ob2lzZVByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXIgPSB7IG5hbWUsIHNoYWRlciB9O1xuIiwiaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFNlcmlhbGl6YXRpb25IZWxwZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnMuc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBQcm9jZWR1cmFsVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy9Qcm9jZWR1cmFscy9wcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IFNjZW5lIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJDbGFzcyB9IGZyb20gXCJjb3JlL01pc2MvdHlwZVN0b3JlXCI7XHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgXCIuL3Blcmxpbk5vaXNlUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJsaW5Ob2lzZVByb2NlZHVyYWxUZXh0dXJlIGV4dGVuZHMgUHJvY2VkdXJhbFRleHR1cmUge1xyXG4gICAgQHNlcmlhbGl6ZSgpXHJcbiAgICBwdWJsaWMgdGltZTogbnVtYmVyID0gMC4wO1xyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIHRpbWVTY2FsZTogbnVtYmVyID0gMS4wO1xyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIHRyYW5zbGF0aW9uU3BlZWQ6IG51bWJlciA9IDEuMDtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50VHJhbnNsYXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIHNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBudWxsLCBmYWxsYmFja1RleHR1cmU/OiBUZXh0dXJlLCBnZW5lcmF0ZU1pcE1hcHM/OiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgc2l6ZSwgXCJwZXJsaW5Ob2lzZVByb2NlZHVyYWxUZXh0dXJlXCIsIHNjZW5lLCBmYWxsYmFja1RleHR1cmUsIGdlbmVyYXRlTWlwTWFwcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXJVbmlmb3JtcygpIHtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwic2l6ZVwiLCB0aGlzLmdldFJlbmRlclNpemUoKSBhcyBudW1iZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHNjZW5lLmdldEVuZ2luZSgpLmdldERlbHRhVGltZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJ0aW1lXCIsICh0aGlzLnRpbWUgKiB0aGlzLnRpbWVTY2FsZSkgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3VycmVudFRyYW5zbGF0aW9uICs9IChkZWx0YVRpbWUgKiB0aGlzLnRyYW5zbGF0aW9uU3BlZWQpIC8gMTAwMC4wO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJ0cmFuc2xhdGlvblNwZWVkXCIsIHRoaXMuX2N1cnJlbnRUcmFuc2xhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHJlbmRlcih1c2VDYW1lcmFQb3N0UHJvY2Vzcz86IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHVzZUNhbWVyYVBvc3RQcm9jZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVzaXplKHNpemU6IGFueSwgZ2VuZXJhdGVNaXBNYXBzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZXNpemUoc2l6ZSwgZ2VuZXJhdGVNaXBNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBwZXJsaW4gbm9pc2UgcHJvY2VkdXJhbCB0ZXh0dXJlXHJcbiAgICAgKiBAcmV0dXJucyBhIHNlcmlhbGl6ZWQgcGVybGluIG5vaXNlIHByb2NlZHVyYWwgdGV4dHVyZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBTZXJpYWxpemF0aW9uSGVscGVyLlNlcmlhbGl6ZSh0aGlzLCBzdXBlci5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jdXN0b21UeXBlID0gXCJCQUJZTE9OLlBlcmxpbk5vaXNlUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgUGVybGluIE5vaXNlIFByb2NlZHVyYWwgVGV4dHVyZSBmcm9tIHBhcnNlZCBwZXJsaW4gbm9pc2UgcHJvY2VkdXJhbCB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSBwYXJzZWRUZXh0dXJlIGRlZmluZXMgcGFyc2VkIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHNjZW5lIGRlZmluZXMgdGhlIGN1cnJlbnQgc2NlbmVcclxuICAgICAqIEBwYXJhbSByb290VXJsIGRlZmluZXMgdGhlIHJvb3QgVVJMIGNvbnRhaW5pbmcgcGVybGluIG5vaXNlIHByb2NlZHVyYWwgdGV4dHVyZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHJldHVybnMgYSBwYXJzZWQgUGVybGluIE5vaXNlIFByb2NlZHVyYWwgVGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIFBhcnNlKHBhcnNlZFRleHR1cmU6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcpOiBQZXJsaW5Ob2lzZVByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gU2VyaWFsaXphdGlvbkhlbHBlci5QYXJzZShcclxuICAgICAgICAgICAgKCkgPT4gbmV3IFBlcmxpbk5vaXNlUHJvY2VkdXJhbFRleHR1cmUocGFyc2VkVGV4dHVyZS5uYW1lLCBwYXJzZWRUZXh0dXJlLl9zaXplLCBzY2VuZSwgdW5kZWZpbmVkLCBwYXJzZWRUZXh0dXJlLl9nZW5lcmF0ZU1pcE1hcHMpLFxyXG4gICAgICAgICAgICBwYXJzZWRUZXh0dXJlLFxyXG4gICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgcm9vdFVybFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgfVxyXG59XHJcblxyXG5SZWdpc3RlckNsYXNzKFwiQkFCWUxPTi5QZXJsaW5Ob2lzZVByb2NlZHVyYWxUZXh0dXJlXCIsIFBlcmxpbk5vaXNlUHJvY2VkdXJhbFRleHR1cmUpO1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9yb2FkUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuIiwiLy8gRG8gbm90IGVkaXQuXG5pbXBvcnQgeyBTaGFkZXJTdG9yZSB9IGZyb20gXCJjb3JlL0VuZ2luZXMvc2hhZGVyU3RvcmVcIjtcblxuY29uc3QgbmFtZSA9IFwicm9hZFByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7dmFyeWluZyB2ZWMyIHZVVjsgXG51bmlmb3JtIHZlYzMgcm9hZENvbG9yO2Zsb2F0IHJhbmQodmVjMiBuKSB7cmV0dXJuIGZyYWN0KGNvcyhkb3Qobix2ZWMyKDEyLjk4OTgsNC4xNDE0KSkpKjQzNzU4LjU0NTMpO31cbmZsb2F0IG5vaXNlKHZlYzIgbikge2NvbnN0IHZlYzIgZD12ZWMyKDAuMCwxLjApO3ZlYzIgYj1mbG9vcihuKSxmPXNtb290aHN0ZXAodmVjMigwLjApLHZlYzIoMS4wKSxmcmFjdChuKSk7cmV0dXJuIG1peChtaXgocmFuZChiKSxyYW5kKGIrZC55eCksZi54KSxtaXgocmFuZChiK2QueHkpLHJhbmQoYitkLnl5KSxmLngpLGYueSk7fVxuZmxvYXQgZmJtKHZlYzIgbikge2Zsb2F0IHRvdGFsPTAuMCxhbXBsaXR1ZGU9MS4wO2ZvciAoaW50IGk9MDsgaTw0OyBpKyspIHt0b3RhbCs9bm9pc2UobikqYW1wbGl0dWRlO24rPW47YW1wbGl0dWRlKj0wLjU7fVxucmV0dXJuIHRvdGFsO31cbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX0RFRklOSVRJT05TXG52b2lkIG1haW4odm9pZCkge1xuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfTUFJTl9CRUdJTlxuZmxvYXQgcmF0aW95PW1vZChnbF9GcmFnQ29vcmQueSoxMDAuMCAsZmJtKHZVVioyLjApKTt2ZWMzIGNvbG9yPXJvYWRDb2xvcipyYXRpb3k7Z2xfRnJhZ0NvbG9yPXZlYzQoY29sb3IsMS4wKTtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHJvYWRQcm9jZWR1cmFsVGV4dHVyZVBpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsImltcG9ydCB7IHNlcmlhbGl6ZUFzQ29sb3IzIH0gZnJvbSBcImNvcmUvTWlzYy9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFNlcmlhbGl6YXRpb25IZWxwZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnMuc2VyaWFsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFByb2NlZHVyYWxUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL1Byb2NlZHVyYWxzL3Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCBcIi4vcm9hZFByb2NlZHVyYWxUZXh0dXJlLmZyYWdtZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9hZFByb2NlZHVyYWxUZXh0dXJlIGV4dGVuZHMgUHJvY2VkdXJhbFRleHR1cmUge1xyXG4gICAgcHJpdmF0ZSBfcm9hZENvbG9yID0gbmV3IENvbG9yMygwLjUzLCAwLjUzLCAwLjUzKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNpemU6IG51bWJlciwgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IG51bGwsIGZhbGxiYWNrVGV4dHVyZT86IFRleHR1cmUsIGdlbmVyYXRlTWlwTWFwcz86IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzaXplLCBcInJvYWRQcm9jZWR1cmFsVGV4dHVyZVwiLCBzY2VuZSwgZmFsbGJhY2tUZXh0dXJlLCBnZW5lcmF0ZU1pcE1hcHMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlU2hhZGVyVW5pZm9ybXMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjMoXCJyb2FkQ29sb3JcIiwgdGhpcy5fcm9hZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplQXNDb2xvcjMoKVxyXG4gICAgcHVibGljIGdldCByb2FkQ29sb3IoKTogQ29sb3IzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9hZENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgcm9hZENvbG9yKHZhbHVlOiBDb2xvcjMpIHtcclxuICAgICAgICB0aGlzLl9yb2FkQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXJpYWxpemVzIHRoaXMgcm9hZCBwcm9jZWR1cmFsIHRleHR1cmVcclxuICAgICAqIEByZXR1cm5zIGEgc2VyaWFsaXplZCByb2FkIHByb2NlZHVyYWwgdGV4dHVyZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBTZXJpYWxpemF0aW9uSGVscGVyLlNlcmlhbGl6ZSh0aGlzLCBzdXBlci5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jdXN0b21UeXBlID0gXCJCQUJZTE9OLlJvYWRQcm9jZWR1cmFsVGV4dHVyZVwiO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VyaWFsaXphdGlvbk9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBSb2FkIFByb2NlZHVyYWwgVGV4dHVyZSBmcm9tIHBhcnNlZCByb2FkIHByb2NlZHVyYWwgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gcGFyc2VkVGV4dHVyZSBkZWZpbmVzIHBhcnNlZCB0ZXh0dXJlIGRhdGFcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBjdXJyZW50IHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBkZWZpbmVzIHRoZSByb290IFVSTCBjb250YWluaW5nIHJvYWQgcHJvY2VkdXJhbCB0ZXh0dXJlIGluZm9ybWF0aW9uXHJcbiAgICAgKiBAcmV0dXJucyBhIHBhcnNlZCBSb2FkIFByb2NlZHVyYWwgVGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIFBhcnNlKHBhcnNlZFRleHR1cmU6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcpOiBSb2FkUHJvY2VkdXJhbFRleHR1cmUge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBTZXJpYWxpemF0aW9uSGVscGVyLlBhcnNlKFxyXG4gICAgICAgICAgICAoKSA9PiBuZXcgUm9hZFByb2NlZHVyYWxUZXh0dXJlKHBhcnNlZFRleHR1cmUubmFtZSwgcGFyc2VkVGV4dHVyZS5fc2l6ZSwgc2NlbmUsIHVuZGVmaW5lZCwgcGFyc2VkVGV4dHVyZS5fZ2VuZXJhdGVNaXBNYXBzKSxcclxuICAgICAgICAgICAgcGFyc2VkVGV4dHVyZSxcclxuICAgICAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgICAgIHJvb3RVcmxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgIH1cclxufVxyXG5cclxuUmVnaXN0ZXJDbGFzcyhcIkJBQllMT04uUm9hZFByb2NlZHVyYWxUZXh0dXJlXCIsIFJvYWRQcm9jZWR1cmFsVGV4dHVyZSk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3N0YXJmaWVsZFByb2NlZHVyYWxUZXh0dXJlXCI7XHJcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcInN0YXJmaWVsZFByb2NlZHVyYWxUZXh0dXJlUGl4ZWxTaGFkZXJcIjtcbmNvbnN0IHNoYWRlciA9IGBwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG4jZGVmaW5lIHZvbHN0ZXBzIDIwXG4jZGVmaW5lIGl0ZXJhdGlvbnMgMTVcbnZhcnlpbmcgdmVjMiB2UG9zaXRpb247dmFyeWluZyB2ZWMyIHZVVjt1bmlmb3JtIGZsb2F0IHRpbWU7dW5pZm9ybSBmbG9hdCBhbHBoYTt1bmlmb3JtIGZsb2F0IGJldGE7dW5pZm9ybSBmbG9hdCB6b29tO3VuaWZvcm0gZmxvYXQgZm9ybXVwYXJhbTt1bmlmb3JtIGZsb2F0IHN0ZXBzaXplO3VuaWZvcm0gZmxvYXQgdGlsZTt1bmlmb3JtIGZsb2F0IGJyaWdodG5lc3M7dW5pZm9ybSBmbG9hdCBkYXJrbWF0dGVyO3VuaWZvcm0gZmxvYXQgZGlzdGZhZGluZzt1bmlmb3JtIGZsb2F0IHNhdHVyYXRpb247dm9pZCBtYWluKClcbnt2ZWMzIGRpcj12ZWMzKHZVVip6b29tLDEuKTtmbG9hdCBsb2NhbFRpbWU9dGltZSowLjAwMDE7bWF0MiByb3QxPW1hdDIoY29zKGFscGhhKSxzaW4oYWxwaGEpLC1zaW4oYWxwaGEpLGNvcyhhbHBoYSkpO21hdDIgcm90Mj1tYXQyKGNvcyhiZXRhKSxzaW4oYmV0YSksLXNpbihiZXRhKSxjb3MoYmV0YSkpO2Rpci54eio9cm90MTtkaXIueHkqPXJvdDI7dmVjMyBmcm9tXz12ZWMzKDEuLC41LDAuNSk7ZnJvbV8rPXZlYzMoLTIuLGxvY2FsVGltZSoyLixsb2NhbFRpbWUpO2Zyb21fLnh6Kj1yb3QxO2Zyb21fLnh5Kj1yb3QyO2Zsb2F0IHM9MC4xLGZhZGU9MS47dmVjMyB2PXZlYzMoMC4pO2ZvciAoaW50IHI9MDsgcjx2b2xzdGVwczsgcisrKSB7dmVjMyBwPWZyb21fK3MqZGlyKi41O3A9YWJzKHZlYzModGlsZSktbW9kKHAsdmVjMyh0aWxlKjIuKSkpOyBcbmZsb2F0IHBhLGE9cGE9MC47Zm9yIChpbnQgaT0wOyBpPGl0ZXJhdGlvbnM7IGkrKykge3A9YWJzKHApL2RvdChwLHApLWZvcm11cGFyYW07IFxuYSs9YWJzKGxlbmd0aChwKS1wYSk7IFxucGE9bGVuZ3RoKHApO31cbmZsb2F0IGRtPW1heCgwLixkYXJrbWF0dGVyLWEqYSouMDAxKTsgXG5hKj1hKmE7IFxuaWYgKHI+NikgZmFkZSo9MS4tZG07IFxudis9ZmFkZTt2Kz12ZWMzKHMscypzLHMqcypzKnMpKmEqYnJpZ2h0bmVzcypmYWRlOyBcbmZhZGUqPWRpc3RmYWRpbmc7IFxucys9c3RlcHNpemU7fVxudj1taXgodmVjMyhsZW5ndGgodikpLHYsc2F0dXJhdGlvbik7IFxuZ2xfRnJhZ0NvbG9yPXZlYzQodiouMDEsMS4pO31gO1xuLy8gU2lkZWVmZmVjdFxuaWYgKCFTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0pIHtcbiAgICBTaGFkZXJTdG9yZS5TaGFkZXJzU3RvcmVbbmFtZV0gPSBzaGFkZXI7XG59XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc3RhcmZpZWxkUHJvY2VkdXJhbFRleHR1cmVQaXhlbFNoYWRlciA9IHsgbmFtZSwgc2hhZGVyIH07XG4iLCJpbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvbkhlbHBlciB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9ycy5zZXJpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB0eXBlIHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB7IFByb2NlZHVyYWxUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL1Byb2NlZHVyYWxzL3Byb2NlZHVyYWxUZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNsYXNzIH0gZnJvbSBcImNvcmUvTWlzYy90eXBlU3RvcmVcIjtcclxuaW1wb3J0IHR5cGUgeyBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCBcIi4vc3RhcmZpZWxkUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFyZmllbGRQcm9jZWR1cmFsVGV4dHVyZSBleHRlbmRzIFByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgIHByaXZhdGUgX3RpbWUgPSAxO1xyXG4gICAgcHJpdmF0ZSBfYWxwaGEgPSAwLjU7XHJcbiAgICBwcml2YXRlIF9iZXRhID0gMC44O1xyXG4gICAgcHJpdmF0ZSBfem9vbSA9IDAuODtcclxuICAgIHByaXZhdGUgX2Zvcm11cGFyYW0gPSAwLjUzO1xyXG4gICAgcHJpdmF0ZSBfc3RlcHNpemUgPSAwLjE7XHJcbiAgICBwcml2YXRlIF90aWxlID0gMC44NTtcclxuICAgIHByaXZhdGUgX2JyaWdodG5lc3MgPSAwLjAwMTU7XHJcbiAgICBwcml2YXRlIF9kYXJrbWF0dGVyID0gMC40O1xyXG4gICAgcHJpdmF0ZSBfZGlzdGZhZGluZyA9IDAuNzM7XHJcbiAgICBwcml2YXRlIF9zYXR1cmF0aW9uID0gMC44NTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNpemU6IG51bWJlciwgc2NlbmU6IE51bGxhYmxlPFNjZW5lPiA9IG51bGwsIGZhbGxiYWNrVGV4dHVyZT86IFRleHR1cmUsIGdlbmVyYXRlTWlwTWFwcz86IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBzaXplLCBcInN0YXJmaWVsZFByb2NlZHVyYWxUZXh0dXJlXCIsIHNjZW5lLCBmYWxsYmFja1RleHR1cmUsIGdlbmVyYXRlTWlwTWFwcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVTaGFkZXJVbmlmb3JtcygpIHtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwidGltZVwiLCB0aGlzLl90aW1lKTtcclxuICAgICAgICB0aGlzLnNldEZsb2F0KFwiYWxwaGFcIiwgdGhpcy5fYWxwaGEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJiZXRhXCIsIHRoaXMuX2JldGEpO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJ6b29tXCIsIHRoaXMuX3pvb20pO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJmb3JtdXBhcmFtXCIsIHRoaXMuX2Zvcm11cGFyYW0pO1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJzdGVwc2l6ZVwiLCB0aGlzLl9zdGVwc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcInRpbGVcIiwgdGhpcy5fdGlsZSk7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImJyaWdodG5lc3NcIiwgdGhpcy5fYnJpZ2h0bmVzcyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImRhcmttYXR0ZXJcIiwgdGhpcy5fZGFya21hdHRlcik7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcImRpc3RmYWRpbmdcIiwgdGhpcy5fZGlzdGZhZGluZyk7XHJcbiAgICAgICAgdGhpcy5zZXRGbG9hdChcInNhdHVyYXRpb25cIiwgdGhpcy5fc2F0dXJhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZSgpXHJcbiAgICBwdWJsaWMgZ2V0IHRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRpbWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZSgpXHJcbiAgICBwdWJsaWMgZ2V0IGFscGhhKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FscGhhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYWxwaGEodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2FscGhhID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBiZXRhKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JldGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBiZXRhKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9iZXRhID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBmb3JtdXBhcmFtKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm11cGFyYW07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBmb3JtdXBhcmFtKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9mb3JtdXBhcmFtID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBzZXJpYWxpemUoKVxyXG4gICAgcHVibGljIGdldCBzdGVwc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHN0ZXBzaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zdGVwc2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgem9vbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96b29tO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgem9vbSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fem9vbSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgdGlsZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdGlsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdGlsZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgYnJpZ2h0bmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9icmlnaHRuZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgYnJpZ2h0bmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYnJpZ2h0bmVzcyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgZGFya21hdHRlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXJrbWF0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZGFya21hdHRlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGFya21hdHRlciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgZGlzdGZhZGluZygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXN0ZmFkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZGlzdGZhZGluZyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzdGZhZGluZyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgc2F0dXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYXR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2F0dXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2F0dXJhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2hhZGVyVW5pZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlcmlhbGl6ZXMgdGhpcyBzdGFyZmllbGQgcHJvY2VkdXJhbCB0ZXh0dXJlXHJcbiAgICAgKiBAcmV0dXJucyBhIHNlcmlhbGl6ZWQgc3RhcmZpZWxkIHByb2NlZHVyYWwgdGV4dHVyZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHNlcmlhbGl6ZSgpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHNlcmlhbGl6YXRpb25PYmplY3QgPSBTZXJpYWxpemF0aW9uSGVscGVyLlNlcmlhbGl6ZSh0aGlzLCBzdXBlci5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgc2VyaWFsaXphdGlvbk9iamVjdC5jdXN0b21UeXBlID0gXCJCQUJZTE9OLlN0YXJmaWVsZFByb2NlZHVyYWxUZXh0dXJlXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemF0aW9uT2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFN0YXJmaWVsZCBQcm9jZWR1cmFsIFRleHR1cmUgZnJvbSBwYXJzZWQgc3RhcnRmaWVsZCBwcm9jZWR1cmFsIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHBhcnNlZFRleHR1cmUgZGVmaW5lcyBwYXJzZWQgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgY3VycmVudCBzY2VuZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcm9vdCBVUkwgY29udGFpbmluZyBzdGFydGZpZWxkIHByb2NlZHVyYWwgdGV4dHVyZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHJldHVybnMgYSBwYXJzZWQgU3RhcmZpZWxkIFByb2NlZHVyYWwgVGV4dHVyZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG92ZXJyaWRlIFBhcnNlKHBhcnNlZFRleHR1cmU6IGFueSwgc2NlbmU6IFNjZW5lLCByb290VXJsOiBzdHJpbmcpOiBTdGFyZmllbGRQcm9jZWR1cmFsVGV4dHVyZSB7XHJcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IFNlcmlhbGl6YXRpb25IZWxwZXIuUGFyc2UoXHJcbiAgICAgICAgICAgICgpID0+IG5ldyBTdGFyZmllbGRQcm9jZWR1cmFsVGV4dHVyZShwYXJzZWRUZXh0dXJlLm5hbWUsIHBhcnNlZFRleHR1cmUuX3NpemUsIHNjZW5lLCB1bmRlZmluZWQsIHBhcnNlZFRleHR1cmUuX2dlbmVyYXRlTWlwTWFwcyksXHJcbiAgICAgICAgICAgIHBhcnNlZFRleHR1cmUsXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICByb290VXJsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLlN0YXJmaWVsZFByb2NlZHVyYWxUZXh0dXJlXCIsIFN0YXJmaWVsZFByb2NlZHVyYWxUZXh0dXJlKTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vd29vZFByb2NlZHVyYWxUZXh0dXJlXCI7XHJcbiIsIi8vIERvIG5vdCBlZGl0LlxuaW1wb3J0IHsgU2hhZGVyU3RvcmUgfSBmcm9tIFwiY29yZS9FbmdpbmVzL3NoYWRlclN0b3JlXCI7XG5cbmNvbnN0IG5hbWUgPSBcIndvb2RQcm9jZWR1cmFsVGV4dHVyZVBpeGVsU2hhZGVyXCI7XG5jb25zdCBzaGFkZXIgPSBgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiB2UG9zaXRpb247dmFyeWluZyB2ZWMyIHZVVjt1bmlmb3JtIGZsb2F0IGFtcFNjYWxlO3VuaWZvcm0gdmVjMyB3b29kQ29sb3I7ZmxvYXQgcmFuZCh2ZWMyIG4pIHtyZXR1cm4gZnJhY3QoY29zKGRvdChuLHZlYzIoMTIuOTg5OCw0LjE0MTQpKSkqNDM3NTguNTQ1Myk7fVxuZmxvYXQgbm9pc2UodmVjMiBuKSB7Y29uc3QgdmVjMiBkPXZlYzIoMC4wLDEuMCk7dmVjMiBiPWZsb29yKG4pLGY9c21vb3Roc3RlcCh2ZWMyKDAuMCksdmVjMigxLjApLGZyYWN0KG4pKTtyZXR1cm4gbWl4KG1peChyYW5kKGIpLHJhbmQoYitkLnl4KSxmLngpLG1peChyYW5kKGIrZC54eSkscmFuZChiK2QueXkpLGYueCksZi55KTt9XG5mbG9hdCBmYm0odmVjMiBuKSB7ZmxvYXQgdG90YWw9MC4wLGFtcGxpdHVkZT0xLjA7Zm9yIChpbnQgaT0wOyBpPDQ7IGkrKykge3RvdGFsKz1ub2lzZShuKSphbXBsaXR1ZGU7bis9bjthbXBsaXR1ZGUqPTAuNTt9XG5yZXR1cm4gdG90YWw7fVxuI2RlZmluZSBDVVNUT01fRlJBR01FTlRfREVGSU5JVElPTlNcbnZvaWQgbWFpbih2b2lkKSB7XG4jZGVmaW5lIENVU1RPTV9GUkFHTUVOVF9NQUlOX0JFR0lOXG5mbG9hdCByYXRpb3k9bW9kKHZVVi54KmFtcFNjYWxlLDIuMCtmYm0odlVWKjAuOCkpO3ZlYzMgd29vZD13b29kQ29sb3IqcmF0aW95O2dsX0ZyYWdDb2xvcj12ZWM0KHdvb2QsMS4wKTtcbiNkZWZpbmUgQ1VTVE9NX0ZSQUdNRU5UX01BSU5fRU5EXG59YDtcbi8vIFNpZGVlZmZlY3RcbmlmICghU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdKSB7XG4gICAgU2hhZGVyU3RvcmUuU2hhZGVyc1N0b3JlW25hbWVdID0gc2hhZGVyO1xufVxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHdvb2RQcm9jZWR1cmFsVGV4dHVyZVBpeGVsU2hhZGVyID0geyBuYW1lLCBzaGFkZXIgfTtcbiIsImltcG9ydCB7IHNlcmlhbGl6ZSwgc2VyaWFsaXplQXNDb2xvcjMgfSBmcm9tIFwiY29yZS9NaXNjL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgU2VyaWFsaXphdGlvbkhlbHBlciB9IGZyb20gXCJjb3JlL01pc2MvZGVjb3JhdG9ycy5zZXJpYWxpemF0aW9uXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHR5cGUgeyBUZXh0dXJlIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL1RleHR1cmVzL3RleHR1cmVcIjtcclxuaW1wb3J0IHsgUHJvY2VkdXJhbFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvUHJvY2VkdXJhbHMvcHJvY2VkdXJhbFRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ2xhc3MgfSBmcm9tIFwiY29yZS9NaXNjL3R5cGVTdG9yZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IFwiLi93b29kUHJvY2VkdXJhbFRleHR1cmUuZnJhZ21lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb29kUHJvY2VkdXJhbFRleHR1cmUgZXh0ZW5kcyBQcm9jZWR1cmFsVGV4dHVyZSB7XHJcbiAgICBwcml2YXRlIF9hbXBTY2FsZTogbnVtYmVyID0gMTAwLjA7XHJcbiAgICBwcml2YXRlIF93b29kQ29sb3I6IENvbG9yMyA9IG5ldyBDb2xvcjMoMC4zMiwgMC4xNywgMC4wOSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzaXplOiBudW1iZXIsIHNjZW5lOiBOdWxsYWJsZTxTY2VuZT4gPSBudWxsLCBmYWxsYmFja1RleHR1cmU/OiBUZXh0dXJlLCBnZW5lcmF0ZU1pcE1hcHM/OiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgc2l6ZSwgXCJ3b29kUHJvY2VkdXJhbFRleHR1cmVcIiwgc2NlbmUsIGZhbGxiYWNrVGV4dHVyZSwgZ2VuZXJhdGVNaXBNYXBzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVNoYWRlclVuaWZvcm1zKCkge1xyXG4gICAgICAgIHRoaXMuc2V0RmxvYXQoXCJhbXBTY2FsZVwiLCB0aGlzLl9hbXBTY2FsZSk7XHJcbiAgICAgICAgdGhpcy5zZXRDb2xvcjMoXCJ3b29kQ29sb3JcIiwgdGhpcy5fd29vZENvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBAc2VyaWFsaXplKClcclxuICAgIHB1YmxpYyBnZXQgYW1wU2NhbGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW1wU2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBhbXBTY2FsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fYW1wU2NhbGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNoYWRlclVuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHNlcmlhbGl6ZUFzQ29sb3IzKClcclxuICAgIHB1YmxpYyBnZXQgd29vZENvbG9yKCk6IENvbG9yMyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvb2RDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHdvb2RDb2xvcih2YWx1ZTogQ29sb3IzKSB7XHJcbiAgICAgICAgdGhpcy5fd29vZENvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGFkZXJVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VyaWFsaXplcyB0aGlzIHdvb2QgcHJvY2VkdXJhbCB0ZXh0dXJlXHJcbiAgICAgKiBAcmV0dXJucyBhIHNlcmlhbGl6ZWQgd29vZCBwcm9jZWR1cmFsIHRleHR1cmUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzZXJpYWxpemUoKTogYW55IHtcclxuICAgICAgICBjb25zdCBzZXJpYWxpemF0aW9uT2JqZWN0ID0gU2VyaWFsaXphdGlvbkhlbHBlci5TZXJpYWxpemUodGhpcywgc3VwZXIuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgIHNlcmlhbGl6YXRpb25PYmplY3QuY3VzdG9tVHlwZSA9IFwiQkFCWUxPTi5Xb29kUHJvY2VkdXJhbFRleHR1cmVcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6YXRpb25PYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgV29vZCBQcm9jZWR1cmFsIFRleHR1cmUgZnJvbSBwYXJzZWQgd29vZCBwcm9jZWR1cmFsIHRleHR1cmUgZGF0YVxyXG4gICAgICogQHBhcmFtIHBhcnNlZFRleHR1cmUgZGVmaW5lcyBwYXJzZWQgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgZGVmaW5lcyB0aGUgY3VycmVudCBzY2VuZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcm9vdCBVUkwgY29udGFpbmluZyB3b29kIHByb2NlZHVyYWwgdGV4dHVyZSBpbmZvcm1hdGlvblxyXG4gICAgICogQHJldHVybnMgYSBwYXJzZWQgV29vZCBQcm9jZWR1cmFsIFRleHR1cmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBvdmVycmlkZSBQYXJzZShwYXJzZWRUZXh0dXJlOiBhbnksIHNjZW5lOiBTY2VuZSwgcm9vdFVybDogc3RyaW5nKTogV29vZFByb2NlZHVyYWxUZXh0dXJlIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gU2VyaWFsaXphdGlvbkhlbHBlci5QYXJzZShcclxuICAgICAgICAgICAgKCkgPT4gbmV3IFdvb2RQcm9jZWR1cmFsVGV4dHVyZShwYXJzZWRUZXh0dXJlLm5hbWUsIHBhcnNlZFRleHR1cmUuX3NpemUsIHNjZW5lLCB1bmRlZmluZWQsIHBhcnNlZFRleHR1cmUuX2dlbmVyYXRlTWlwTWFwcyksXHJcbiAgICAgICAgICAgIHBhcnNlZFRleHR1cmUsXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICByb290VXJsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblJlZ2lzdGVyQ2xhc3MoXCJCQUJZTE9OLldvb2RQcm9jZWR1cmFsVGV4dHVyZVwiLCBXb29kUHJvY2VkdXJhbFRleHR1cmUpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8taW50ZXJuYWwtbW9kdWxlcyAqL1xyXG5pbXBvcnQgKiBhcyBQcm9jZWR1cmFsVGV4dHVyZXNMaWIgZnJvbSBcInByb2NlZHVyYWwtdGV4dHVyZXMvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4gKiBMZWdhY3kgc3VwcG9ydCwgZGVmaW5pbmcgd2luZG93LkJBQllMT04uR3JpZE1hdGVyaWFsLi4uIChnbG9iYWwgdmFyaWFibGUpLlxyXG4gKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiB8fCB7fTtcclxuICAgIGZvciAoY29uc3QgbWF0IGluIFByb2NlZHVyYWxUZXh0dXJlc0xpYikge1xyXG4gICAgICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTlttYXRdID0gKDxhbnk+UHJvY2VkdXJhbFRleHR1cmVzTGliKVttYXRdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwicHJvY2VkdXJhbC10ZXh0dXJlcy9pbmRleFwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01pc2NfZGVjb3JhdG9yc19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHByb2NlZHVyYWxUZXh0dXJlcyBmcm9tIFwiQGx0cy9wcm9jZWR1cmFsLXRleHR1cmVzL2xlZ2FjeS9sZWdhY3lcIjtcclxuZXhwb3J0IHsgcHJvY2VkdXJhbFRleHR1cmVzIH07XHJcbmV4cG9ydCBkZWZhdWx0IHByb2NlZHVyYWxUZXh0dXJlcztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
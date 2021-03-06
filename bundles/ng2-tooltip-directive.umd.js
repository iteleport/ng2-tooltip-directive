(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng2-tooltip-directive', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng2-tooltip-directive'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

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
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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

    var TooltipComponent = /** @class */ (function () {
        function TooltipComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this._show = false;
            this.events = new core.EventEmitter();
        }
        TooltipComponent.prototype.transitionEnd = function (event) {
            if (this.show) {
                this.events.emit({
                    type: 'shown'
                });
            }
        };
        Object.defineProperty(TooltipComponent.prototype, "show", {
            get: function () {
                return this._show;
            },
            set: function (value) {
                if (value) {
                    this.setPosition();
                }
                this._show = this.hostClassShow = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "placement", {
            get: function () {
                return this.data.options.placement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "autoPlacement", {
            get: function () {
                return this.data.options.autoPlacement;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "element", {
            get: function () {
                return this.data.element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "elementPosition", {
            get: function () {
                return this.data.elementPosition;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "options", {
            get: function () {
                return this.data.options;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "value", {
            get: function () {
                return this.data.value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "tooltipOffset", {
            get: function () {
                return Number(this.data.options.offset);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipComponent.prototype, "isThemeLight", {
            get: function () {
                return this.options['theme'] === 'light';
            },
            enumerable: false,
            configurable: true
        });
        TooltipComponent.prototype.ngOnInit = function () {
            this.setCustomClass();
            this.setStyles();
        };
        TooltipComponent.prototype.setPosition = function () {
            var e_1, _a;
            if (this.setHostStyle(this.placement)) {
                this.setPlacementClass(this.placement);
                return;
            }
            else {
                /* Is tooltip outside the visible area */
                var placements = ['top', 'right', 'bottom', 'left'];
                var isPlacementSet = void 0;
                try {
                    for (var placements_1 = __values(placements), placements_1_1 = placements_1.next(); !placements_1_1.done; placements_1_1 = placements_1.next()) {
                        var placement = placements_1_1.value;
                        if (this.setHostStyle(placement)) {
                            this.setPlacementClass(placement);
                            isPlacementSet = true;
                            return;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (placements_1_1 && !placements_1_1.done && (_a = placements_1.return)) _a.call(placements_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                /* Set original placement */
                if (!isPlacementSet) {
                    this.setHostStyle(this.placement, true);
                    this.setPlacementClass(this.placement);
                }
            }
        };
        TooltipComponent.prototype.setPlacementClass = function (placement) {
            this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + placement);
        };
        TooltipComponent.prototype.setHostStyle = function (placement, disableAutoPlacement) {
            if (disableAutoPlacement === void 0) { disableAutoPlacement = false; }
            var isSvg = this.element instanceof SVGElement;
            var tooltip = this.elementRef.nativeElement;
            var isCustomPosition = !this.elementPosition.right;
            var elementHeight = isSvg ? this.element.getBoundingClientRect().height : this.element.offsetHeight;
            var elementWidth = isSvg ? this.element.getBoundingClientRect().width : this.element.offsetWidth;
            var tooltipHeight = tooltip.clientHeight;
            var tooltipWidth = tooltip.clientWidth;
            var scrollY = window.pageYOffset;
            if (isCustomPosition) {
                elementHeight = 0;
                elementWidth = 0;
            }
            var topStyle;
            var leftStyle;
            if (placement === 'top') {
                topStyle = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset);
            }
            if (placement === 'bottom') {
                topStyle = (this.elementPosition.top + scrollY) + elementHeight + this.tooltipOffset;
            }
            if (placement === 'top' || placement === 'bottom') {
                leftStyle = (this.elementPosition.left + elementWidth / 2) - tooltipWidth / 2;
            }
            if (placement === 'left') {
                leftStyle = this.elementPosition.left - tooltipWidth - this.tooltipOffset;
            }
            if (placement === 'right') {
                leftStyle = this.elementPosition.left + elementWidth + this.tooltipOffset;
            }
            if (placement === 'left' || placement === 'right') {
                topStyle = (this.elementPosition.top + scrollY) + elementHeight / 2 - tooltip.clientHeight / 2;
            }
            /* Is tooltip outside the visible area */
            if (this.autoPlacement && !disableAutoPlacement) {
                var topEdge = topStyle;
                var bottomEdge = topStyle + tooltipHeight;
                var leftEdge = leftStyle;
                var rightEdge = leftStyle + tooltipWidth;
                var bodyHeight = window.innerHeight + scrollY;
                var bodyWidth = document.body.clientWidth;
                if (topEdge < 0 || bottomEdge > bodyHeight || leftEdge < 0 || rightEdge > bodyWidth) {
                    return false;
                }
            }
            this.hostStyleTop = topStyle + 'px';
            this.hostStyleLeft = leftStyle + 'px';
            return true;
        };
        TooltipComponent.prototype.setZIndex = function () {
            if (this.options['zIndex'] !== 0) {
                this.hostStyleZIndex = this.options['zIndex'];
            }
        };
        TooltipComponent.prototype.setPointerEvents = function () {
            if (this.options['pointerEvents']) {
                this.hostStylePointerEvents = this.options['pointerEvents'];
            }
        };
        TooltipComponent.prototype.setCustomClass = function () {
            var _this = this;
            if (this.options['tooltipClass']) {
                this.options['tooltipClass'].split(' ').forEach(function (className) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, className);
                });
            }
        };
        TooltipComponent.prototype.setAnimationDuration = function () {
            if (Number(this.options['animationDuration']) != this.options['animationDurationDefault']) {
                this.hostStyleTransition = 'opacity ' + this.options['animationDuration'] + 'ms';
            }
        };
        TooltipComponent.prototype.setStyles = function () {
            this.setZIndex();
            this.setPointerEvents();
            this.setAnimationDuration();
            this.hostClassShadow = this.options['shadow'];
            this.hostClassLight = this.isThemeLight;
            this.hostStyleMaxWidth = this.options['maxWidth'] + "px";
            this.hostStyleWidth = this.options['width'] ? this.options['width'] + "px" : '';
        };
        return TooltipComponent;
    }());
    TooltipComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tooltip',
                    template: "<div *ngIf=\"isThemeLight\" class=\"tooltip-arrow\"></div>\r\n\r\n<div *ngIf=\"options['contentType'] === 'template' else htmlOrStringTemplate\">\r\n\r\n\t<ng-container *ngTemplateOutlet=\"value\"></ng-container>\r\n</div>\r\n\r\n<ng-template #htmlOrStringTemplate>\r\n\t<div [innerHTML]=\"value\"></div>\r\n</ng-template>\r\n",
                    host: {
                        'class': 'tooltip'
                    },
                    styles: [":host{background-color:#000;border-radius:6px;color:#fff;display:block;left:0;max-width:200px;opacity:0;padding:5px 8px;pointer-events:none;position:absolute;text-align:center;top:0;transition:opacity .3s;z-index:1000}:host.tooltip-show{opacity:1}:host.tooltip-shadow{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}:host.tooltip-light.tooltip-shadow{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}:host.tooltip:after{border-style:solid;content:\"\";position:absolute}:host.tooltip-top:after{border-color:#000 transparent transparent;border-width:5px;left:50%;margin-left:-5px;top:100%}:host.tooltip-bottom:after{border-color:transparent transparent #000;border-width:5px;bottom:100%;left:50%;margin-left:-5px}:host.tooltip-left:after{border-color:transparent transparent transparent #000;border-width:5px;left:100%;margin-top:-5px;top:50%}:host.tooltip-right:after{border-color:transparent #000 transparent transparent;border-width:5px;margin-top:-5px;right:100%;top:50%}:host.tooltip-light:after{display:none}:host.tooltip-light{background-color:#fff;border:1px solid rgba(0,0,0,.06);color:#000}:host.tooltip-light .tooltip-arrow{background-color:rgba(0,0,0,.07);height:10px;position:absolute;transform:rotate(135deg);width:10px}:host.tooltip-light .tooltip-arrow:after{background-color:#fff;content:\"\";display:block;height:10px;position:absolute;width:10px}:host.tooltip-top.tooltip-light{margin-top:-2px}:host.tooltip-top.tooltip-light .tooltip-arrow{background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 0);left:50%;margin-left:-5px;margin-top:-4px;top:100%}:host.tooltip-top.tooltip-light .tooltip-arrow:after{right:1px;top:1px}:host.tooltip-bottom.tooltip-light .tooltip-arrow{background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 0);bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px}:host.tooltip-bottom.tooltip-light .tooltip-arrow:after{right:-1px;top:-1px}:host.tooltip-left.tooltip-light .tooltip-arrow{background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 0);left:100%;margin-left:-4px;margin-top:-5px;top:50%}:host.tooltip-left.tooltip-light .tooltip-arrow:after{right:-1px;top:1px}:host.tooltip-right.tooltip-light .tooltip-arrow{background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 0);margin-right:-4px;margin-top:-5px;right:100%;top:50%}:host.tooltip-right.tooltip-light .tooltip-arrow:after{right:1px;top:-1px}"]
                },] }
    ];
    TooltipComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };
    TooltipComponent.propDecorators = {
        data: [{ type: core.Input }],
        hostStyleTop: [{ type: core.HostBinding, args: ['style.top',] }],
        hostStyleLeft: [{ type: core.HostBinding, args: ['style.left',] }],
        hostStyleZIndex: [{ type: core.HostBinding, args: ['style.z-index',] }],
        hostStyleTransition: [{ type: core.HostBinding, args: ['style.transition',] }],
        hostStyleWidth: [{ type: core.HostBinding, args: ['style.width',] }],
        hostStyleMaxWidth: [{ type: core.HostBinding, args: ['style.max-width',] }],
        hostStylePointerEvents: [{ type: core.HostBinding, args: ['style.pointer-events',] }],
        hostClassShow: [{ type: core.HostBinding, args: ['class.tooltip-show',] }],
        hostClassShadow: [{ type: core.HostBinding, args: ['class.tooltip-shadow',] }],
        hostClassLight: [{ type: core.HostBinding, args: ['class.tooltip-light',] }],
        transitionEnd: [{ type: core.HostListener, args: ['transitionend', ['$event'],] }],
        show: [{ type: core.Input }]
    };

    /**
     * This is not a real service, but it looks like it from the outside.
     * It's just an InjectionToken used to import the config (initOptions) object, provided from the outside
     */
    var TooltipOptionsService = new core.InjectionToken('TooltipOptions');

    var defaultOptions = {
        'placement': 'top',
        'autoPlacement': true,
        'contentType': 'string',
        'showDelay': 0,
        'hideDelay': 300,
        'hideDelayMobile': 0,
        'hideDelayTouchscreen': 0,
        'zIndex': 0,
        'animationDuration': 300,
        'animationDurationDefault': 300,
        'trigger': 'hover',
        'tooltipClass': '',
        'display': true,
        'displayMobile': true,
        'displayTouchscreen': true,
        'shadow': true,
        'theme': 'dark',
        'offset': 8,
        'maxWidth': '',
        'id': false,
        'hideDelayAfterClick': 2000
    };
    var backwardCompatibilityOptions = {
        'delay': 'showDelay',
        'show-delay': 'showDelay',
        'hide-delay': 'hideDelay',
        'hide-delay-mobile': 'hideDelayTouchscreen',
        'hideDelayMobile': 'hideDelayTouchscreen',
        'z-index': 'zIndex',
        'animation-duration': 'animationDuration',
        'animation-duration-default': 'animationDurationDefault',
        'tooltip-class': 'tooltipClass',
        'display-mobile': 'displayTouchscreen',
        'displayMobile': 'displayTouchscreen',
        'max-width': 'maxWidth'
    };

    var TooltipDirective = /** @class */ (function () {
        function TooltipDirective(initOptions, elementRef, componentFactoryResolver, appRef, injector) {
            this.initOptions = initOptions;
            this.elementRef = elementRef;
            this.componentFactoryResolver = componentFactoryResolver;
            this.appRef = appRef;
            this.injector = injector;
            this._showDelay = 0;
            this._hideDelay = 300;
            this._options = {};
            this.events = new core.EventEmitter();
        }
        Object.defineProperty(TooltipDirective.prototype, "options", {
            get: function () {
                return this._options;
            },
            set: function (value) {
                if (value && defaultOptions) {
                    this._options = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "isTooltipDestroyed", {
            get: function () {
                return this.componentRef && this.componentRef.hostView.destroyed;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "destroyDelay", {
            get: function () {
                if (this._destroyDelay) {
                    return this._destroyDelay;
                }
                else {
                    return Number(this.getHideDelay()) + Number(this.options['animationDuration']);
                }
            },
            set: function (value) {
                this._destroyDelay = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "tooltipPosition", {
            get: function () {
                if (this.options['position']) {
                    return this.options['position'];
                }
                else {
                    return this.elementPosition;
                }
            },
            enumerable: false,
            configurable: true
        });
        TooltipDirective.prototype.onMouseEnter = function () {
            if (this.isDisplayOnHover == false) {
                return;
            }
            this.show();
        };
        TooltipDirective.prototype.onMouseLeave = function () {
            if (this.options['trigger'] === 'hover') {
                this.destroyTooltip();
            }
        };
        TooltipDirective.prototype.onClick = function () {
            var _this = this;
            if (this.isDisplayOnClick == false) {
                return;
            }
            this.show();
            this.hideAfterClickTimeoutId = window.setTimeout(function () {
                _this.destroyTooltip();
            }, this.options['hideDelayAfterClick']);
        };
        TooltipDirective.prototype.ngOnInit = function () {
        };
        TooltipDirective.prototype.ngOnChanges = function (changes) {
            this.initOptions = this.renameProperties(this.initOptions);
            var changedOptions = this.getProperties(changes);
            changedOptions = this.renameProperties(changedOptions);
            this.applyOptionsDefault(defaultOptions, changedOptions);
        };
        TooltipDirective.prototype.ngOnDestroy = function () {
            this.destroyTooltip({
                fast: true
            });
            if (this.componentSubscribe) {
                this.componentSubscribe.unsubscribe();
            }
        };
        TooltipDirective.prototype.getShowDelay = function () {
            return this.options['showDelay'];
        };
        TooltipDirective.prototype.getHideDelay = function () {
            var hideDelay = this.options['hideDelay'];
            var hideDelayTouchscreen = this.options['hideDelayTouchscreen'];
            return this.isTouchScreen ? hideDelayTouchscreen : hideDelay;
        };
        TooltipDirective.prototype.getProperties = function (changes) {
            var directiveProperties = {};
            var customProperties = {};
            var allProperties = {};
            for (var prop in changes) {
                if (prop !== 'options' && prop !== 'tooltipValue') {
                    directiveProperties[prop] = changes[prop].currentValue;
                }
                if (prop === 'options') {
                    customProperties = changes[prop].currentValue;
                }
            }
            allProperties = Object.assign({}, customProperties, directiveProperties);
            return allProperties;
        };
        TooltipDirective.prototype.renameProperties = function (options) {
            for (var prop in options) {
                if (backwardCompatibilityOptions[prop]) {
                    options[backwardCompatibilityOptions[prop]] = options[prop];
                    delete options[prop];
                }
            }
            return options;
        };
        TooltipDirective.prototype.getElementPosition = function () {
            this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
        };
        TooltipDirective.prototype.createTooltip = function () {
            var _this = this;
            this.clearTimeouts();
            this.getElementPosition();
            this.createTimeoutId = window.setTimeout(function () {
                _this.appendComponentToBody(TooltipComponent);
            }, this.getShowDelay());
            this.showTimeoutId = window.setTimeout(function () {
                _this.showTooltipElem();
            }, this.getShowDelay());
        };
        TooltipDirective.prototype.destroyTooltip = function (options) {
            var _this = this;
            if (options === void 0) { options = {
                fast: false
            }; }
            this.clearTimeouts();
            if (this.isTooltipDestroyed == false) {
                this.hideTimeoutId = window.setTimeout(function () {
                    _this.hideTooltip();
                }, options.fast ? 0 : this.getHideDelay());
                this.destroyTimeoutId = window.setTimeout(function () {
                    if (!_this.componentRef || _this.isTooltipDestroyed) {
                        return;
                    }
                    _this.appRef.detachView(_this.componentRef.hostView);
                    _this.componentRef.destroy();
                    _this.events.emit({
                        type: 'hidden',
                        position: _this.tooltipPosition
                    });
                }, options.fast ? 0 : this.destroyDelay);
            }
        };
        TooltipDirective.prototype.showTooltipElem = function () {
            this.clearTimeouts();
            this.componentRef.instance.show = true;
            this.events.emit({
                type: 'show',
                position: this.tooltipPosition
            });
        };
        TooltipDirective.prototype.hideTooltip = function () {
            if (!this.componentRef || this.isTooltipDestroyed) {
                return;
            }
            this.componentRef.instance.show = false;
            this.events.emit({
                type: 'hide',
                position: this.tooltipPosition
            });
        };
        TooltipDirective.prototype.appendComponentToBody = function (component, data) {
            var _this = this;
            if (data === void 0) { data = {}; }
            this.componentRef = this.componentFactoryResolver
                .resolveComponentFactory(component)
                .create(this.injector);
            this.componentRef.instance.data = {
                value: this.tooltipValue,
                element: this.elementRef.nativeElement,
                elementPosition: this.tooltipPosition,
                options: this.options
            };
            this.appRef.attachView(this.componentRef.hostView);
            var domElem = this.componentRef.hostView.rootNodes[0];
            document.body.appendChild(domElem);
            this.componentSubscribe = this.componentRef.instance.events.subscribe(function (event) {
                _this.handleEvents(event);
            });
        };
        TooltipDirective.prototype.clearTimeouts = function () {
            if (this.createTimeoutId) {
                clearTimeout(this.createTimeoutId);
            }
            if (this.showTimeoutId) {
                clearTimeout(this.showTimeoutId);
            }
            if (this.hideTimeoutId) {
                clearTimeout(this.hideTimeoutId);
            }
            if (this.destroyTimeoutId) {
                clearTimeout(this.destroyTimeoutId);
            }
        };
        Object.defineProperty(TooltipDirective.prototype, "isDisplayOnHover", {
            get: function () {
                if (this.options['display'] == false) {
                    return false;
                }
                if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
                    return false;
                }
                if (this.options['trigger'] !== 'hover') {
                    return false;
                }
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "isDisplayOnClick", {
            get: function () {
                if (this.options['display'] == false) {
                    return false;
                }
                if (this.options['displayTouchscreen'] == false && this.isTouchScreen) {
                    return false;
                }
                if (this.options['trigger'] != 'click') {
                    return false;
                }
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "isTouchScreen", {
            get: function () {
                var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
                var mq = function (query) {
                    return window.matchMedia(query).matches;
                };
                if (('ontouchstart' in window)) {
                    return true;
                }
                // include the 'heartz' as a way to have a non matching MQ to help terminate the join
                // https://git.io/vznFH
                var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
                return mq(query);
            },
            enumerable: false,
            configurable: true
        });
        TooltipDirective.prototype.applyOptionsDefault = function (defaultOptions, options) {
            this.options = Object.assign({}, defaultOptions, this.initOptions || {}, options);
        };
        TooltipDirective.prototype.handleEvents = function (event) {
            if (event.type === 'shown') {
                this.events.emit({
                    type: 'shown',
                    position: this.tooltipPosition
                });
            }
        };
        TooltipDirective.prototype.show = function () {
            if (!this.componentRef || this.isTooltipDestroyed) {
                this.createTooltip();
            }
            else if (!this.isTooltipDestroyed) {
                this.showTooltipElem();
            }
        };
        TooltipDirective.prototype.hide = function () {
            this.destroyTooltip();
        };
        return TooltipDirective;
    }());
    TooltipDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[tooltip]',
                    exportAs: 'tooltip',
                },] }
    ];
    TooltipDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [TooltipOptionsService,] }] },
        { type: core.ElementRef },
        { type: core.ComponentFactoryResolver },
        { type: core.ApplicationRef },
        { type: core.Injector }
    ]; };
    TooltipDirective.propDecorators = {
        options: [{ type: core.Input, args: ['options',] }],
        tooltipValue: [{ type: core.Input, args: ['tooltip',] }],
        placement: [{ type: core.Input, args: ['placement',] }],
        autoPlacement: [{ type: core.Input, args: ['autoPlacement',] }],
        contentType: [{ type: core.Input, args: ['content-type',] }],
        hideDelayMobile: [{ type: core.Input, args: ['hide-delay-mobile',] }],
        hideDelayTouchscreen: [{ type: core.Input, args: ['hideDelayTouchscreen',] }],
        zIndex: [{ type: core.Input, args: ['z-index',] }],
        animationDuration: [{ type: core.Input, args: ['animation-duration',] }],
        trigger: [{ type: core.Input, args: ['trigger',] }],
        tooltipClass: [{ type: core.Input, args: ['tooltip-class',] }],
        display: [{ type: core.Input, args: ['display',] }],
        displayMobile: [{ type: core.Input, args: ['display-mobile',] }],
        displayTouchscreen: [{ type: core.Input, args: ['displayTouchscreen',] }],
        shadow: [{ type: core.Input, args: ['shadow',] }],
        theme: [{ type: core.Input, args: ['theme',] }],
        offset: [{ type: core.Input, args: ['offset',] }],
        width: [{ type: core.Input, args: ['width',] }],
        maxWidth: [{ type: core.Input, args: ['max-width',] }],
        id: [{ type: core.Input, args: ['id',] }],
        showDelay: [{ type: core.Input, args: ['show-delay',] }],
        hideDelay: [{ type: core.Input, args: ['hide-delay',] }],
        hideDelayAfterClick: [{ type: core.Input, args: ['hideDelayAfterClick',] }],
        pointerEvents: [{ type: core.Input, args: ['pointerEvents',] }],
        position: [{ type: core.Input, args: ['position',] }],
        events: [{ type: core.Output }],
        onMouseEnter: [{ type: core.HostListener, args: ['focusin',] }, { type: core.HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: core.HostListener, args: ['focusout',] }, { type: core.HostListener, args: ['mouseleave',] }],
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };

    var TooltipModule = /** @class */ (function () {
        function TooltipModule() {
        }
        TooltipModule.forRoot = function (initOptions) {
            return {
                ngModule: TooltipModule,
                providers: [
                    {
                        provide: TooltipOptionsService,
                        useValue: initOptions
                    }
                ]
            };
        };
        return TooltipModule;
    }());
    TooltipModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        TooltipDirective,
                        TooltipComponent
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        TooltipDirective
                    ],
                    entryComponents: [
                        TooltipComponent
                    ]
                },] }
    ];

    /*
     * Public API Surface of ng2-tooltip-directive
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TooltipComponent = TooltipComponent;
    exports.TooltipDirective = TooltipDirective;
    exports.TooltipModule = TooltipModule;
    exports.ɵa = TooltipOptionsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-tooltip-directive.umd.js.map

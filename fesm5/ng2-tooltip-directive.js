import { Component, ElementRef, HostListener, HostBinding, Input, EventEmitter, Renderer2, Directive, ComponentFactoryResolver, ApplicationRef, Injector, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._show = false;
        /* tslint:enable */
        this.events = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipComponent.prototype.transitionEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show) {
            this.events.emit('shown');
        }
    };
    Object.defineProperty(TooltipComponent.prototype, "show", {
        get: /**
         * @return {?}
         */
        function () {
            return this._show;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.setPosition();
            }
            this._show = this.hostClassShow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "placement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.options.placement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "elementPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.elementPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.data.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "tooltipOffset", {
        get: /**
         * @return {?}
         */
        function () {
            return Number(this.data.options.offset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "isThemeLight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options['theme'] === 'light';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPlacementClass();
        this.setZIndex();
        this.setCustomClass();
        this.setAnimationDuration();
        this.setStyles();
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isSvg = this.element instanceof SVGElement;
        /** @type {?} */
        var tooltip = this.elementRef.nativeElement;
        /** @type {?} */
        var elementHeight = isSvg ? this.element.getBBox().height : this.element.offsetHeight;
        /** @type {?} */
        var elementWidth = isSvg ? this.element.getBBox().width : this.element.offsetWidth;
        /** @type {?} */
        var tooltipHeight = tooltip.clientHeight;
        /** @type {?} */
        var tooltipWidth = tooltip.clientWidth;
        /** @type {?} */
        var scrollY = window.pageYOffset;
        if (this.placement === 'top') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) - (tooltipHeight + this.tooltipOffset) + 'px';
        }
        if (this.placement === 'bottom') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) + elementHeight + this.tooltipOffset + 'px';
        }
        if (this.placement === 'top' || this.placement === 'bottom') {
            this.hostStyleLeft = (this.elementPosition.left + elementWidth / 2) - tooltipWidth / 2 + 'px';
        }
        if (this.placement === 'left') {
            this.hostStyleLeft = this.elementPosition.left - tooltipWidth - this.tooltipOffset + 'px';
        }
        if (this.placement === 'right') {
            this.hostStyleLeft = this.elementPosition.left + elementWidth + this.tooltipOffset + 'px';
        }
        if (this.placement === 'left' || this.placement === 'right') {
            this.hostStyleTop = (this.elementPosition.top + scrollY) + elementHeight / 2 - tooltip.clientHeight / 2 + 'px';
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setPlacementClass = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + this.placement);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setZIndex = /**
     * @return {?}
     */
    function () {
        if (this.options['z-index'] !== 0) {
            this.hostStyleZIndex = this.options['z-index'];
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setCustomClass = /**
     * @return {?}
     */
    function () {
        if (this.options['tooltip-class']) {
            this.renderer.addClass(this.elementRef.nativeElement, this.options['tooltip-class']);
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setAnimationDuration = /**
     * @return {?}
     */
    function () {
        if (Number(this.options['animation-duration']) != this.options['animation-duration-default']) {
            this.hostStyleTransition = 'opacity ' + this.options['animation-duration'] + 'ms';
        }
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.setStyles = /**
     * @return {?}
     */
    function () {
        this.hostClassShadow = this.options['shadow'];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options['max-width'];
    };
    TooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip',
                    template: "<div *ngIf=\"isThemeLight\" class=\"tooltip-arrow\"></div>\r\n\r\n<div *ngIf=\"options['content-type'] === 'template' else htmlOrStringTemplate\" \r\n    [ngClass]=\"{'tooltip-arrow': isThemeLight }\">\r\n\r\n\t<ng-container *ngTemplateOutlet=\"value\"></ng-container>\r\n</div>\r\n\r\n<ng-template #htmlOrStringTemplate>\r\n\t<div [innerHTML]=\"value\"></div>\r\n</ng-template>\r\n",
                    host: { 'class': 'tooltip' },
                    styles: [":host{max-width:200px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 8px;position:absolute;pointer-events:none;z-index:1000;display:block;opacity:0;transition:opacity .3s}:host.tooltip-show{opacity:1}:host.tooltip-shadow{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}:host.tooltip-light.tooltip-shadow{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}:host.tooltip::after{content:\"\";position:absolute;border-style:solid}:host.tooltip-top::after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-color:#000 transparent transparent}:host.tooltip-bottom::after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-color:transparent transparent #000}:host.tooltip-left::after{top:50%;left:100%;margin-top:-5px;border-width:5px;border-color:transparent transparent transparent #000}:host.tooltip-right::after{top:50%;right:100%;margin-top:-5px;border-width:5px;border-color:transparent #000 transparent transparent}:host.tooltip-light::after{display:none}:host.tooltip-light{border:1px solid rgba(0,0,0,.06);background-color:#fff;color:#000}:host.tooltip-light .tooltip-arrow{position:absolute;width:10px;height:10px;-webkit-transform:rotate(135deg);transform:rotate(135deg);background-color:rgba(0,0,0,.07)}:host.tooltip-light .tooltip-arrow::after{background-color:#fff;content:'';display:block;position:absolute;width:10px;height:10px}:host.tooltip-top.tooltip-light{margin-top:-2px}:host.tooltip-top.tooltip-light .tooltip-arrow{top:100%;left:50%;margin-top:-4px;margin-left:-5px;background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-top.tooltip-light .tooltip-arrow::after{top:1px;right:1px}:host.tooltip-bottom.tooltip-light .tooltip-arrow{bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px;background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 50%)}:host.tooltip-bottom.tooltip-light .tooltip-arrow::after{top:-1px;right:-1px}:host.tooltip-left.tooltip-light .tooltip-arrow{top:50%;left:100%;margin-top:-5px;margin-left:-4px;background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-left.tooltip-light .tooltip-arrow::after{top:1px;right:-1px}:host.tooltip-right.tooltip-light .tooltip-arrow{top:50%;right:100%;margin-top:-5px;margin-right:-4px;background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 50%)}:host.tooltip-right.tooltip-light .tooltip-arrow::after{top:-1px;right:1px}"]
                }] }
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TooltipComponent.propDecorators = {
        data: [{ type: Input }],
        hostStyleTop: [{ type: HostBinding, args: ['style.top',] }],
        hostStyleLeft: [{ type: HostBinding, args: ['style.left',] }],
        hostStyleZIndex: [{ type: HostBinding, args: ['style.z-index',] }],
        hostStyleTransition: [{ type: HostBinding, args: ['style.transition',] }],
        hostStyleMaxWidth: [{ type: HostBinding, args: ['style.max-width',] }],
        hostClassShow: [{ type: HostBinding, args: ['class.tooltip-show',] }],
        hostClassShadow: [{ type: HostBinding, args: ['class.tooltip-shadow',] }],
        hostClassLight: [{ type: HostBinding, args: ['class.tooltip-light',] }],
        transitionEnd: [{ type: HostListener, args: ['transitionend', ['$event'],] }],
        show: [{ type: Input }]
    };
    return TooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultOptions = {
    'placement': 'top',
    'content-type': 'string',
    'delay': 0,
    'show-delay': 0,
    'hide-delay': 300,
    'hide-delay-mobile': 1500,
    'z-index': 0,
    'animation-duration': 300,
    'animation-duration-default': 300,
    'trigger': 'hover',
    'tooltip-class': '',
    'display': true,
    'display-mobile': true,
    'shadow': true,
    'theme': 'dark',
    'offset': 8,
    'max-width': '',
    'id': false
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(elementRef, componentFactoryResolver, appRef, injector) {
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new EventEmitter();
    }
    Object.defineProperty(TooltipDirective.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        /* tslint:enable */
        set: /* tslint:enable */
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && defaultOptions) {
                this._options = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "placement", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['placement'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "contentType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['content-type'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "delay", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['delay'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "hideDelayMobile", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['hide-delay-mobile'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "zIndex", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['z-index'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "animationDuration", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['animation-duration'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "trigger", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['trigger'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "tooltipClass", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['tooltip-class'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "display", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof (value) === 'boolean') {
                this._options['display'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "displayMobile", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options['display-mobile'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "shadow", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options['shadow'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "theme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['theme'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "offset", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['offset'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "maxWidth", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._options['max-width'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "showDelay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var result = this.options['delay'] || this._showDelay;
            if (this.isMobile) {
                return 0;
            }
            else {
                return result;
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._showDelay = this._options['show-delay'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "hideDelay", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isMobile) {
                return (this._hideDelay >= this.options['hide-delay-mobile']) ? this._hideDelay : this.options['hide-delay-mobile'];
            }
            else {
                return this._hideDelay;
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._hideDelay = this._options['hide-delay'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isTooltipDestroyed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentRef && this.componentRef.hostView.destroyed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "destroyDelay", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._destroyDelay) {
                return this._destroyDelay;
            }
            else {
                return Number(this.hideDelay) + Number(this.options['animation-duration']);
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._destroyDelay = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.destroyTooltip();
        }), 0);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.applyOptionsDefault(defaultOptions, this.options);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyTooltip({ fast: true });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getElementPosition = /**
     * @return {?}
     */
    function () {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.createTooltip = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.appendComponentToBody(TooltipComponent);
        }), this.showDelay);
        this.showTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        function () {
            _this.showTooltipElem();
        }), this.showDelay);
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    TooltipDirective.prototype.destroyTooltip = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (options === void 0) { options = { fast: false }; }
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            function () {
                _this.hideTooltip();
            }), options.fast ? 0 : this.hideDelay);
            this.destroyTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.componentRef || _this.isTooltipDestroyed) {
                    return;
                }
                _this.appRef.detachView(_this.componentRef.hostView);
                _this.componentRef.destroy();
                _this.events.emit('hidden');
            }), options.fast ? 0 : this.destroyDelay);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.showTooltipElem = /**
     * @return {?}
     */
    function () {
        this.clearTimeouts();
        ((/** @type {?} */ (this.componentRef.instance))).show = true;
        this.events.emit('show');
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hideTooltip = /**
     * @return {?}
     */
    function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        ((/** @type {?} */ (this.componentRef.instance))).show = false;
        this.events.emit('hide');
    };
    /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    TooltipDirective.prototype.appendComponentToBody = /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    function (component, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        ((/** @type {?} */ (this.componentRef.instance))).data = {
            value: this.tooltipValue,
            element: this.elementRef.nativeElement,
            elementPosition: this.elementPosition,
            options: this.options
        };
        this.appRef.attachView(this.componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.componentSubscribe = ((/** @type {?} */ (this.componentRef.instance))).events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.handleEvents(event);
        }));
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.clearTimeouts = /**
     * @return {?}
     */
    function () {
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
        get: /**
         * @return {?}
         */
        function () {
            if (this.options['display'] == false) {
                return false;
            }
            if (this.options['display-mobile'] == false && this.isMobile) {
                return false;
            }
            if (this.options['trigger'] !== 'hover') {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isDisplayOnClick", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.options['display'] == false) {
                return false;
            }
            if (this.options['display-mobile'] == false && this.isMobile) {
                return false;
            }
            if (this.options['trigger'] != 'click') {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "isMobile", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var check = false;
            navigator.maxTouchPoints ? check = true : check = false;
            return check;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    TooltipDirective.prototype.applyOptionsDefault = /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    function (defaultOptions$$1, options) {
        this._defaultOptions = Object.assign({}, defaultOptions$$1);
        this.options = Object.assign(this._defaultOptions, options);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.handleEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event === 'shown') {
            this.events.emit('shown');
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.destroyTooltip();
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tooltip]'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    TooltipDirective.propDecorators = {
        tooltipValue: [{ type: Input, args: ['tooltip',] }],
        options: [{ type: Input, args: ['options',] }],
        placement: [{ type: Input, args: ['placement',] }],
        contentType: [{ type: Input, args: ['content-type',] }],
        delay: [{ type: Input, args: ['delay',] }],
        hideDelayMobile: [{ type: Input, args: ['hide-delay-mobile',] }],
        zIndex: [{ type: Input, args: ['z-index',] }],
        animationDuration: [{ type: Input, args: ['animation-duration',] }],
        trigger: [{ type: Input, args: ['trigger',] }],
        tooltipClass: [{ type: Input, args: ['tooltip-class',] }],
        display: [{ type: Input, args: ['display',] }],
        displayMobile: [{ type: Input, args: ['display-mobile',] }],
        shadow: [{ type: Input, args: ['shadow',] }],
        theme: [{ type: Input, args: ['theme',] }],
        offset: [{ type: Input, args: ['offset',] }],
        maxWidth: [{ type: Input, args: ['max-width',] }],
        id: [{ type: Input, args: ['id',] }],
        showDelay: [{ type: Input, args: ['show-delay',] }],
        hideDelay: [{ type: Input, args: ['hide-delay',] }],
        events: [{ type: Output }],
        onMouseEnter: [{ type: HostListener, args: ['focusin',] }, { type: HostListener, args: ['mouseenter',] }],
        onMouseLeave: [{ type: HostListener, args: ['focusout',] }, { type: HostListener, args: ['mouseleave',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TooltipDirective,
                        TooltipComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TooltipDirective
                    ],
                    entryComponents: [
                        TooltipComponent
                    ]
                },] }
    ];
    return TooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TooltipComponent, TooltipDirective, TooltipModule };

//# sourceMappingURL=ng2-tooltip-directive.js.map
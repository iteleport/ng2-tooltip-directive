/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, ComponentFactoryResolver, ApplicationRef, Injector, Output, EventEmitter } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { defaultOptions } from './options';
/**
 * @record
 */
export function AdComponent() { }
if (false) {
    /** @type {?} */
    AdComponent.prototype.data;
    /** @type {?} */
    AdComponent.prototype.show;
    /** @type {?} */
    AdComponent.prototype.close;
    /** @type {?} */
    AdComponent.prototype.events;
}
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
    function (defaultOptions, options) {
        this._defaultOptions = Object.assign({}, defaultOptions);
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
export { TooltipDirective };
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.hideTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.destroyTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.hideAfterClickTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.createTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.showTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.componentRef;
    /** @type {?} */
    TooltipDirective.prototype.elementPosition;
    /** @type {?} */
    TooltipDirective.prototype._showDelay;
    /** @type {?} */
    TooltipDirective.prototype._hideDelay;
    /** @type {?} */
    TooltipDirective.prototype._id;
    /** @type {?} */
    TooltipDirective.prototype._options;
    /** @type {?} */
    TooltipDirective.prototype._defaultOptions;
    /** @type {?} */
    TooltipDirective.prototype._destroyDelay;
    /** @type {?} */
    TooltipDirective.prototype.componentSubscribe;
    /** @type {?} */
    TooltipDirective.prototype.tooltipValue;
    /** @type {?} */
    TooltipDirective.prototype.events;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdG9vbHRpcC1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsd0JBQXdCLEVBRXhCLGNBQWMsRUFDZCxRQUFRLEVBR1IsTUFBTSxFQUNOLFlBQVksRUFDRCxNQUFNLGVBQWUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBRTNDLGlDQUtDOzs7SUFKQywyQkFBVTs7SUFDViwyQkFBYzs7SUFDZCw0QkFBZTs7SUFDZiw2QkFBWTs7QUFHZDtJQXdLRSwwQkFBb0IsVUFBc0IsRUFDaEMsd0JBQWtELEVBQ2xELE1BQXNCLEVBQ3RCLFFBQWtCO1FBSFIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNoQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUE5SjVCLGVBQVUsR0FBUSxDQUFDLENBQUM7UUFDcEIsZUFBVSxHQUFXLEdBQUcsQ0FBQztRQUV6QixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBc0pULFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU05RCxDQUFDO0lBbkpELHNCQUFzQixxQ0FBTzs7OztRQUs3QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO1FBVEQsbUJBQW1COzs7Ozs7UUFFbkIsVUFBOEIsS0FBVTtZQUN0QyxJQUFJLEtBQUssSUFBSSxjQUFjLEVBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZC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Qix3Q0FBdUM7O0lBZ0p2QyxrQ0FBOEQ7Ozs7O0lBRWxELHNDQUE4Qjs7Ozs7SUFDeEMsb0RBQTBEOzs7OztJQUMxRCxrQ0FBOEI7Ozs7O0lBQzlCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgSW5qZWN0b3IsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRDb21wb25lbnQge1xyXG4gIGRhdGE6IGFueTtcclxuICBzaG93OiBib29sZWFuO1xyXG4gIGNsb3NlOiBib29sZWFuO1xyXG4gIGV2ZW50czogYW55O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0b29sdGlwXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIHtcclxuXHJcbiAgaGlkZVRpbWVvdXRJZDogbnVtYmVyO1xyXG4gIGRlc3Ryb3lUaW1lb3V0SWQ6IG51bWJlcjtcclxuICBoaWRlQWZ0ZXJDbGlja1RpbWVvdXRJZDogbnVtYmVyO1xyXG4gIGNyZWF0ZVRpbWVvdXRJZDogbnVtYmVyO1xyXG4gIHNob3dUaW1lb3V0SWQ6IG51bWJlcjtcclxuICBjb21wb25lbnRSZWY6IGFueTtcclxuICBlbGVtZW50UG9zaXRpb246IGFueTtcclxuICBfc2hvd0RlbGF5OiBhbnkgPSAwO1xyXG4gIF9oaWRlRGVsYXk6IG51bWJlciA9IDMwMDtcclxuICBfaWQ6IGFueTtcclxuICBfb3B0aW9uczogYW55ID0ge307XHJcbiAgX2RlZmF1bHRPcHRpb25zOiBhbnk7XHJcbiAgX2Rlc3Ryb3lEZWxheTogbnVtYmVyO1xyXG4gIGNvbXBvbmVudFN1YnNjcmliZTogYW55O1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1pbnB1dC1yZW5hbWUgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwVmFsdWU6IHN0cmluZztcclxuICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcblxyXG4gIEBJbnB1dCgnb3B0aW9ucycpIHNldCBvcHRpb25zKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZSAmJiBkZWZhdWx0T3B0aW9ucyl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IG9wdGlvbnMoKXtcclxuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwbGFjZW1lbnQnKSBzZXQgcGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ3BsYWNlbWVudCddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2NvbnRlbnQtdHlwZScpIHNldCBjb250ZW50VHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUpe1xyXG4gICAgICB0aGlzLl9vcHRpb25zWydjb250ZW50LXR5cGUnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkZWxheScpIHNldCBkZWxheSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUpe1xyXG4gICAgICB0aGlzLl9vcHRpb25zWydkZWxheSddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2hpZGUtZGVsYXktbW9iaWxlJykgc2V0IGhpZGVEZWxheU1vYmlsZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUpe1xyXG4gICAgICB0aGlzLl9vcHRpb25zWydoaWRlLWRlbGF5LW1vYmlsZSddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3otaW5kZXgnKSBzZXQgekluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ3otaW5kZXgnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCdhbmltYXRpb24tZHVyYXRpb24nKSBzZXQgYW5pbWF0aW9uRHVyYXRpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlKXtcclxuICAgICAgdGhpcy5fb3B0aW9uc1snYW5pbWF0aW9uLWR1cmF0aW9uJ10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgndHJpZ2dlcicpIHNldCB0cmlnZ2VyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9vcHRpb25zWyd0cmlnZ2VyJ10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgndG9vbHRpcC1jbGFzcycpIHNldCB0b29sdGlwQ2xhc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ3Rvb2x0aXAtY2xhc3MnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCdkaXNwbGF5Jykgc2V0IGRpc3BsYXkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0eXBlb2YodmFsdWUpID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgdGhpcy5fb3B0aW9uc1snZGlzcGxheSddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Rpc3BsYXktbW9iaWxlJykgc2V0IGRpc3BsYXlNb2JpbGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29wdGlvbnNbJ2Rpc3BsYXktbW9iaWxlJ10gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnc2hhZG93Jykgc2V0IHNoYWRvdyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb3B0aW9uc1snc2hhZG93J10gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgndGhlbWUnKSBzZXQgdGhlbWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ3RoZW1lJ10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnb2Zmc2V0Jykgc2V0IG9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUpe1xyXG4gICAgICB0aGlzLl9vcHRpb25zWydvZmZzZXQnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCdtYXgtd2lkdGgnKSBzZXQgbWF4V2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlKXtcclxuICAgICAgdGhpcy5fb3B0aW9uc1snbWF4LXdpZHRoJ10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnaWQnKSBzZXQgaWQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGlkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3Nob3ctZGVsYXknKSBzZXQgc2hvd0RlbGF5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX3Nob3dEZWxheSA9IHRoaXMuX29wdGlvbnNbJ3Nob3ctZGVsYXknXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dEZWxheSgpe1xyXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMub3B0aW9uc1snZGVsYXknXSB8fCB0aGlzLl9zaG93RGVsYXk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpe1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2hpZGUtZGVsYXknKSBzZXQgaGlkZURlbGF5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX2hpZGVEZWxheSA9IHRoaXMuX29wdGlvbnNbJ2hpZGUtZGVsYXknXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGVEZWxheSgpe1xyXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpe1xyXG4gICAgICByZXR1cm4gKHRoaXMuX2hpZGVEZWxheSA+PSB0aGlzLm9wdGlvbnNbJ2hpZGUtZGVsYXktbW9iaWxlJ10pID8gdGhpcy5faGlkZURlbGF5IDogdGhpcy5vcHRpb25zWydoaWRlLWRlbGF5LW1vYmlsZSddO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2hpZGVEZWxheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBpc1Rvb2x0aXBEZXN0cm95ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRSZWYgJiYgdGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcuZGVzdHJveWVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlc3Ryb3lEZWxheSgpIHtcclxuICAgIGlmICh0aGlzLl9kZXN0cm95RGVsYXkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVzdHJveURlbGF5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmhpZGVEZWxheSkgKyBOdW1iZXIodGhpcy5vcHRpb25zWydhbmltYXRpb24tZHVyYXRpb24nXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldCBkZXN0cm95RGVsYXkodmFsdWU6bnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95RGVsYXkgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSBldmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpXHJcbiAgb25Nb3VzZUVudGVyKCkge1xyXG4gICAgaWYgKHRoaXMuaXNEaXNwbGF5T25Ib3ZlciA9PSBmYWxzZSl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zWyd0cmlnZ2VyJ10gPT09ICdob3Zlcicpe1xyXG4gICAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpe1xyXG5cclxuXHJcbiAgICBpZiAodGhpcy5pc0Rpc3BsYXlPbkNsaWNrID09IGZhbHNlKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG5cclxuICAgIHRoaXMuaGlkZUFmdGVyQ2xpY2tUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcclxuICAgIH0sIDApXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOnZvaWQge1xyXG4gICAgdGhpcy5hcHBseU9wdGlvbnNEZWZhdWx0KGRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTp2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoe2Zhc3Q6IHRydWV9KTtcclxuXHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRTdWJzY3JpYmUpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFN1YnNjcmliZS51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudFBvc2l0aW9uKCk6dm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRQb3NpdGlvbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVG9vbHRpcCgpOnZvaWQge1xyXG4gICAgdGhpcy5jbGVhclRpbWVvdXRzKCk7XHJcbiAgICB0aGlzLmdldEVsZW1lbnRQb3NpdGlvbigpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFwcGVuZENvbXBvbmVudFRvQm9keShUb29sdGlwQ29tcG9uZW50KTtcclxuICAgIH0sIHRoaXMuc2hvd0RlbGF5KTtcclxuXHJcbiAgICB0aGlzLnNob3dUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd1Rvb2x0aXBFbGVtKCk7XHJcbiAgICB9LCB0aGlzLnNob3dEZWxheSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95VG9vbHRpcChvcHRpb25zID0ge2Zhc3Q6IGZhbHNlfSk6dm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyVGltZW91dHMoKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc1Rvb2x0aXBEZXN0cm95ZWQgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgIHRoaXMuaGlkZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmhpZGVUb29sdGlwKCk7XHJcbiAgICAgIH0sIG9wdGlvbnMuZmFzdCA/IDAgOiB0aGlzLmhpZGVEZWxheSk7XHJcblxyXG4gICAgICB0aGlzLmRlc3Ryb3lUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZiB8fCB0aGlzLmlzVG9vbHRpcERlc3Ryb3llZCl7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFwcFJlZi5kZXRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdCgnaGlkZGVuJyk7XHJcbiAgICAgIH0sIG9wdGlvbnMuZmFzdCA/IDAgOiB0aGlzLmRlc3Ryb3lEZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG93VG9vbHRpcEVsZW0oKTp2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgKDxBZENvbXBvbmVudD50aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuc2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLmV2ZW50cy5lbWl0KCdzaG93Jyk7XHJcbiAgfVxyXG5cclxuICBoaWRlVG9vbHRpcCgpOnZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZiB8fCB0aGlzLmlzVG9vbHRpcERlc3Ryb3llZCl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgICg8QWRDb21wb25lbnQ+dGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpLnNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuZXZlbnRzLmVtaXQoJ2hpZGUnKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZENvbXBvbmVudFRvQm9keShjb21wb25lbnQ6IGFueSwgZGF0YTogYW55ID0ge30pOnZvaWQge1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KVxyXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xyXG5cclxuICAgICg8QWRDb21wb25lbnQ+dGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmRhdGEgPSB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnRvb2x0aXBWYWx1ZSxcclxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIGVsZW1lbnRQb3NpdGlvbjogdGhpcy5lbGVtZW50UG9zaXRpb24sXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gICAgfVxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyh0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICBjb25zdCBkb21FbGVtID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbUVsZW0pO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaWJlID0gKDxBZENvbXBvbmVudD50aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmhhbmRsZUV2ZW50cyhldmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyVGltZW91dHMoKTp2b2lkIHtcclxuICAgIGlmICh0aGlzLmNyZWF0ZVRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jcmVhdGVUaW1lb3V0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNob3dUaW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2hvd1RpbWVvdXRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaGlkZVRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWRlVGltZW91dElkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kZXN0cm95VGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlc3Ryb3lUaW1lb3V0SWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGlzcGxheU9uSG92ZXIoKTpib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnNbJ2Rpc3BsYXknXSA9PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9uc1snZGlzcGxheS1tb2JpbGUnXSA9PSBmYWxzZSAmJiB0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zWyd0cmlnZ2VyJ10gIT09ICdob3ZlcicpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGlzcGxheU9uQ2xpY2soKTpib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnNbJ2Rpc3BsYXknXSA9PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9uc1snZGlzcGxheS1tb2JpbGUnXSA9PSBmYWxzZSAmJiB0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zWyd0cmlnZ2VyJ10gIT0gJ2NsaWNrJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNb2JpbGUoKSB7XHJcbiAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPyBjaGVjayA9IHRydWUgOiBjaGVjayA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gY2hlY2s7XHJcbiAgfVxyXG5cclxuICBhcHBseU9wdGlvbnNEZWZhdWx0KGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTp2b2lkIHtcclxuICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFdmVudHMoZXZlbnQ6IGFueSl7XHJcbiAgICBpZiAoZXZlbnQgPT09ICdzaG93bicpe1xyXG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KCdzaG93bicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3coKXtcclxuICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYgfHwgdGhpcy5pc1Rvb2x0aXBEZXN0cm95ZWQpIHtcclxuICAgICAgdGhpcy5jcmVhdGVUb29sdGlwKCk7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmlzVG9vbHRpcERlc3Ryb3llZCkge1xyXG4gICAgICB0aGlzLnNob3dUb29sdGlwRWxlbSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGUoKXtcclxuICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcclxuICB9XHJcbn1cclxuIl19
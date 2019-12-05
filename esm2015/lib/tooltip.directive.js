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
export class TooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(elementRef, componentFactoryResolver, appRef, injector) {
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new EventEmitter();
    }
    /* tslint:enable */
    /**
     * @param {?} value
     * @return {?}
     */
    set options(value) {
        if (value && defaultOptions) {
            this._options = value;
        }
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placement(value) {
        if (value) {
            this._options['placement'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set contentType(value) {
        if (value) {
            this._options['content-type'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set delay(value) {
        if (value) {
            this._options['delay'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideDelayMobile(value) {
        if (value) {
            this._options['hide-delay-mobile'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set zIndex(value) {
        if (value) {
            this._options['z-index'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set animationDuration(value) {
        if (value) {
            this._options['animation-duration'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set trigger(value) {
        if (value) {
            this._options['trigger'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set tooltipClass(value) {
        if (value) {
            this._options['tooltip-class'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set display(value) {
        if (typeof (value) === 'boolean') {
            this._options['display'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set displayMobile(value) {
        this._options['display-mobile'] = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set shadow(value) {
        this._options['shadow'] = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set theme(value) {
        if (value) {
            this._options['theme'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set offset(value) {
        if (value) {
            this._options['offset'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxWidth(value) {
        if (value) {
            this._options['max-width'] = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showDelay(value) {
        if (value) {
            this._showDelay = this._options['show-delay'] = value;
        }
    }
    /**
     * @return {?}
     */
    get showDelay() {
        /** @type {?} */
        let result = this.options['delay'] || this._showDelay;
        if (this.isMobile) {
            return 0;
        }
        else {
            return result;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideDelay(value) {
        if (value) {
            this._hideDelay = this._options['hide-delay'] = value;
        }
    }
    /**
     * @return {?}
     */
    get hideDelay() {
        if (this.isMobile) {
            return (this._hideDelay >= this.options['hide-delay-mobile']) ? this._hideDelay : this.options['hide-delay-mobile'];
        }
        else {
            return this._hideDelay;
        }
    }
    /**
     * @return {?}
     */
    get isTooltipDestroyed() {
        return this.componentRef && this.componentRef.hostView.destroyed;
    }
    /**
     * @return {?}
     */
    get destroyDelay() {
        if (this._destroyDelay) {
            return this._destroyDelay;
        }
        else {
            return Number(this.hideDelay) + Number(this.options['animation-duration']);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set destroyDelay(value) {
        this._destroyDelay = value;
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.destroyTooltip();
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.applyOptionsDefault(defaultOptions, this.options);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyTooltip({ fast: true });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    getElementPosition() {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @return {?}
     */
    createTooltip() {
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.appendComponentToBody(TooltipComponent);
        }), this.showDelay);
        this.showTimeoutId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.showTooltipElem();
        }), this.showDelay);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    destroyTooltip(options = { fast: false }) {
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            () => {
                this.hideTooltip();
            }), options.fast ? 0 : this.hideDelay);
            this.destroyTimeoutId = window.setTimeout((/**
             * @return {?}
             */
            () => {
                if (!this.componentRef || this.isTooltipDestroyed) {
                    return;
                }
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.events.emit('hidden');
            }), options.fast ? 0 : this.destroyDelay);
        }
    }
    /**
     * @return {?}
     */
    showTooltipElem() {
        this.clearTimeouts();
        ((/** @type {?} */ (this.componentRef.instance))).show = true;
        this.events.emit('show');
    }
    /**
     * @return {?}
     */
    hideTooltip() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        ((/** @type {?} */ (this.componentRef.instance))).show = false;
        this.events.emit('hide');
    }
    /**
     * @param {?} component
     * @param {?=} data
     * @return {?}
     */
    appendComponentToBody(component, data = {}) {
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
        const domElem = (/** @type {?} */ (((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]));
        document.body.appendChild(domElem);
        this.componentSubscribe = ((/** @type {?} */ (this.componentRef.instance))).events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.handleEvents(event);
        }));
    }
    /**
     * @return {?}
     */
    clearTimeouts() {
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
    }
    /**
     * @return {?}
     */
    get isDisplayOnHover() {
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
    }
    /**
     * @return {?}
     */
    get isDisplayOnClick() {
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
    }
    /**
     * @return {?}
     */
    get isMobile() {
        /** @type {?} */
        let check = false;
        navigator.maxTouchPoints ? check = true : check = false;
        return check;
    }
    /**
     * @param {?} defaultOptions
     * @param {?} options
     * @return {?}
     */
    applyOptionsDefault(defaultOptions, options) {
        this._defaultOptions = Object.assign({}, defaultOptions);
        this.options = Object.assign(this._defaultOptions, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleEvents(event) {
        if (event === 'shown') {
            this.events.emit('shown');
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.destroyTooltip();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip]'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdG9vbHRpcC1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsd0JBQXdCLEVBRXhCLGNBQWMsRUFDZCxRQUFRLEVBR1IsTUFBTSxFQUNOLFlBQVksRUFDRCxNQUFNLGVBQWUsQ0FBQztBQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBRTNDLGlDQUtDOzs7SUFKQywyQkFBVTs7SUFDViwyQkFBYzs7SUFDZCw0QkFBZTs7SUFDZiw2QkFBWTs7QUFPZCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBb0szQixZQUFvQixVQUFzQixFQUNoQyx3QkFBa0QsRUFDbEQsTUFBc0IsRUFDdEIsUUFBa0I7UUFIUixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ2hDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTlKNUIsZUFBVSxHQUFRLENBQUMsQ0FBQztRQUNwQixlQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFzSlQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBTTlELENBQUM7Ozs7OztJQW5KRCxJQUFzQixPQUFPLENBQUMsS0FBVTtRQUN0QyxJQUFJLEtBQUssSUFBSSxjQUFjLEVBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMs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SUFBSTt3QkFPVixLQUFLLFNBQUMsWUFBWTt3QkFnQmxCLEtBQUssU0FBQyxZQUFZO3FCQTZCbEIsTUFBTTsyQkFRTixZQUFZLFNBQUMsU0FBUyxjQUN0QixZQUFZLFNBQUMsWUFBWTsyQkFTekIsWUFBWSxTQUFDLFVBQVUsY0FDdkIsWUFBWSxTQUFDLFlBQVk7c0JBT3pCLFlBQVksU0FBQyxPQUFPOzs7O0lBMUxyQix5Q0FBc0I7O0lBQ3RCLDRDQUF5Qjs7SUFDekIsbURBQWdDOztJQUNoQywyQ0FBd0I7O0lBQ3hCLHlDQUFzQjs7SUFDdEIsd0NBQWtCOztJQUNsQiwyQ0FBcUI7O0lBQ3JCLHNDQUFvQjs7SUFDcEIsc0NBQXlCOztJQUN6QiwrQkFBUzs7SUFDVCxvQ0FBbUI7O0lBQ25CLDJDQUFxQjs7SUFDckIseUNBQXNCOztJQUN0Qiw4Q0FBd0I7O0lBR3hCLHdDQUF1Qzs7SUFnSnZDLGtDQUE4RDs7Ozs7SUFFbEQsc0NBQThCOzs7OztJQUN4QyxvREFBMEQ7Ozs7O0lBQzFELGtDQUE4Qjs7Ozs7SUFDOUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBJbmplY3RvcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZENvbXBvbmVudCB7XHJcbiAgZGF0YTogYW55O1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbiAgY2xvc2U6IGJvb2xlYW47XHJcbiAgZXZlbnRzOiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXJlY3RpdmUge1xyXG5cclxuICBoaWRlVGltZW91dElkOiBudW1iZXI7XHJcbiAgZGVzdHJveVRpbWVvdXRJZDogbnVtYmVyO1xyXG4gIGhpZGVBZnRlckNsaWNrVGltZW91dElkOiBudW1iZXI7XHJcbiAgY3JlYXRlVGltZW91dElkOiBudW1iZXI7XHJcbiAgc2hvd1RpbWVvdXRJZDogbnVtYmVyO1xyXG4gIGNvbXBvbmVudFJlZjogYW55O1xyXG4gIGVsZW1lbnRQb3NpdGlvbjogYW55O1xyXG4gIF9zaG93RGVsYXk6IGFueSA9IDA7XHJcbiAgX2hpZGVEZWxheTogbnVtYmVyID0gMzAwO1xyXG4gIF9pZDogYW55O1xyXG4gIF9vcHRpb25zOiBhbnkgPSB7fTtcclxuICBfZGVmYXVsdE9wdGlvbnM6IGFueTtcclxuICBfZGVzdHJveURlbGF5OiBudW1iZXI7XHJcbiAgY29tcG9uZW50U3Vic2NyaWJlOiBhbnk7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlOm5vLWlucHV0LXJlbmFtZSAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcCcpIHRvb2x0aXBWYWx1ZTogc3RyaW5nO1xyXG4gIC8qIHRzbGludDplbmFibGUgKi9cclxuXHJcbiAgQElucHV0KCdvcHRpb25zJykgc2V0IG9wdGlvbnModmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlICYmIGRlZmF1bHRPcHRpb25zKXtcclxuICAgICAgdGhpcy5fb3B0aW9ucyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXQgb3B0aW9ucygpe1xyXG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ3BsYWNlbWVudCcpIHNldCBwbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKXtcclxuICAgICAgdGhpcy5fb3B0aW9uc1sncGxhY2VtZW50J10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnY29udGVudC10eXBlJykgc2V0IGNvbnRlbnRUeXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ2NvbnRlbnQtdHlwZSddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2RlbGF5Jykgc2V0IGRlbGF5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ2RlbGF5J10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnaGlkZS1kZWxheS1tb2JpbGUnKSBzZXQgaGlkZURlbGF5TW9iaWxlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ2hpZGUtZGVsYXktbW9iaWxlJ10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnei1pbmRleCcpIHNldCB6SW5kZXgodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlKXtcclxuICAgICAgdGhpcy5fb3B0aW9uc1snei1pbmRleCddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHNldCBhbmltYXRpb25EdXJhdGlvbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUpe1xyXG4gICAgICB0aGlzLl9vcHRpb25zWydhbmltYXRpb24tZHVyYXRpb24nXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCd0cmlnZ2VyJykgc2V0IHRyaWdnZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ3RyaWdnZXInXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCd0b29sdGlwLWNsYXNzJykgc2V0IHRvb2x0aXBDbGFzcyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5fb3B0aW9uc1sndG9vbHRpcC1jbGFzcyddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Rpc3BsYXknKSBzZXQgZGlzcGxheSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdib29sZWFuJykge1xyXG4gICAgICB0aGlzLl9vcHRpb25zWydkaXNwbGF5J10gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZGlzcGxheS1tb2JpbGUnKSBzZXQgZGlzcGxheU1vYmlsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fb3B0aW9uc1snZGlzcGxheS1tb2JpbGUnXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdzaGFkb3cnKSBzZXQgc2hhZG93KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcHRpb25zWydzaGFkb3cnXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCd0aGVtZScpIHNldCB0aGVtZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKXtcclxuICAgICAgdGhpcy5fb3B0aW9uc1sndGhlbWUnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCdvZmZzZXQnKSBzZXQgb2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuX29wdGlvbnNbJ29mZnNldCddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ21heC13aWR0aCcpIHNldCBtYXhXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUpe1xyXG4gICAgICB0aGlzLl9vcHRpb25zWydtYXgtd2lkdGgnXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCdpZCcpIHNldCBpZCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgaWQoKXtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnc2hvdy1kZWxheScpIHNldCBzaG93RGVsYXkodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlKXtcclxuICAgICAgdGhpcy5fc2hvd0RlbGF5ID0gdGhpcy5fb3B0aW9uc1snc2hvdy1kZWxheSddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0RlbGF5KCl7XHJcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5vcHRpb25zWydkZWxheSddIHx8IHRoaXMuX3Nob3dEZWxheTtcclxuXHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSl7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgnaGlkZS1kZWxheScpIHNldCBoaWRlRGVsYXkodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlKXtcclxuICAgICAgdGhpcy5faGlkZURlbGF5ID0gdGhpcy5fb3B0aW9uc1snaGlkZS1kZWxheSddID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZURlbGF5KCl7XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSl7XHJcbiAgICAgIHJldHVybiAodGhpcy5faGlkZURlbGF5ID49IHRoaXMub3B0aW9uc1snaGlkZS1kZWxheS1tb2JpbGUnXSkgPyB0aGlzLl9oaWRlRGVsYXkgOiB0aGlzLm9wdGlvbnNbJ2hpZGUtZGVsYXktbW9iaWxlJ107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5faGlkZURlbGF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVG9vbHRpcERlc3Ryb3llZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFJlZiAmJiB0aGlzLmNvbXBvbmVudFJlZi5ob3N0Vmlldy5kZXN0cm95ZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVzdHJveURlbGF5KCkge1xyXG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3lEZWxheSl7XHJcbiAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95RGVsYXk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMuaGlkZURlbGF5KSArIE51bWJlcih0aGlzLm9wdGlvbnNbJ2FuaW1hdGlvbi1kdXJhdGlvbiddKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0IGRlc3Ryb3lEZWxheSh2YWx1ZTpudW1iZXIpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3lEZWxheSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIGV2ZW50czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICBpZiAodGhpcy5pc0Rpc3BsYXlPbkhvdmVyID09IGZhbHNlKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnNbJ3RyaWdnZXInXSA9PT0gJ2hvdmVyJyl7XHJcbiAgICAgIHRoaXMuZGVzdHJveVRvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCl7XHJcblxyXG5cclxuICAgIGlmICh0aGlzLmlzRGlzcGxheU9uQ2xpY2sgPT0gZmFsc2Upe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93KCk7XHJcblxyXG4gICAgdGhpcy5oaWRlQWZ0ZXJDbGlja1RpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xyXG4gICAgfSwgMClcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6dm9pZCB7XHJcbiAgICB0aGlzLmFwcGx5T3B0aW9uc0RlZmF1bHQoZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOnZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95VG9vbHRpcCh7ZmFzdDogdHJ1ZX0pO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbXBvbmVudFN1YnNjcmliZSl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaWJlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50UG9zaXRpb24oKTp2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFBvc2l0aW9uID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUb29sdGlwKCk6dm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyVGltZW91dHMoKTtcclxuICAgIHRoaXMuZ2V0RWxlbWVudFBvc2l0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Cb2R5KFRvb2x0aXBDb21wb25lbnQpO1xyXG4gICAgfSwgdGhpcy5zaG93RGVsYXkpO1xyXG5cclxuICAgIHRoaXMuc2hvd1RpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93VG9vbHRpcEVsZW0oKTtcclxuICAgIH0sIHRoaXMuc2hvd0RlbGF5KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3lUb29sdGlwKG9wdGlvbnMgPSB7ZmFzdDogZmFsc2V9KTp2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJUaW1lb3V0cygpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzVG9vbHRpcERlc3Ryb3llZCA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgdGhpcy5oaWRlVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGlkZVRvb2x0aXAoKTtcclxuICAgICAgfSwgb3B0aW9ucy5mYXN0ID8gMCA6IHRoaXMuaGlkZURlbGF5KTtcclxuXHJcbiAgICAgIHRoaXMuZGVzdHJveVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmIHx8IHRoaXMuaXNUb29sdGlwRGVzdHJveWVkKXtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KCdoaWRkZW4nKTtcclxuICAgICAgfSwgb3B0aW9ucy5mYXN0ID8gMCA6IHRoaXMuZGVzdHJveURlbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dUb29sdGlwRWxlbSgpOnZvaWQge1xyXG4gICAgdGhpcy5jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAoPEFkQ29tcG9uZW50PnRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKS5zaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuZXZlbnRzLmVtaXQoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIGhpZGVUb29sdGlwKCk6dm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmIHx8IHRoaXMuaXNUb29sdGlwRGVzdHJveWVkKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgKDxBZENvbXBvbmVudD50aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuc2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5ldmVudHMuZW1pdCgnaGlkZScpO1xyXG4gIH1cclxuXHJcbiAgYXBwZW5kQ29tcG9uZW50VG9Cb2R5KGNvbXBvbmVudDogYW55LCBkYXRhOiBhbnkgPSB7fSk6dm9pZCB7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpXHJcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3Rvcik7XHJcblxyXG4gICAgKDxBZENvbXBvbmVudD50aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGF0YSA9IHtcclxuICAgICAgdmFsdWU6IHRoaXMudG9vbHRpcFZhbHVlLFxyXG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgZWxlbWVudFBvc2l0aW9uOiB0aGlzLmVsZW1lbnRQb3NpdGlvbixcclxuICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zXHJcbiAgICB9XHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIGNvbnN0IGRvbUVsZW0gPSAodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnRTdWJzY3JpYmUgPSAoPEFkQ29tcG9uZW50PnRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKS5ldmVudHMuc3Vic2NyaWJlKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXZlbnRzKGV2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJUaW1lb3V0cygpOnZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3JlYXRlVGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNyZWF0ZVRpbWVvdXRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd1RpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dElkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5oaWRlVGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVUaW1lb3V0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRlc3Ryb3lUaW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVzdHJveVRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNwbGF5T25Ib3ZlcigpOmJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMub3B0aW9uc1snZGlzcGxheSddID09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zWydkaXNwbGF5LW1vYmlsZSddID09IGZhbHNlICYmIHRoaXMuaXNNb2JpbGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnNbJ3RyaWdnZXInXSAhPT0gJ2hvdmVyJykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNwbGF5T25DbGljaygpOmJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMub3B0aW9uc1snZGlzcGxheSddID09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zWydkaXNwbGF5LW1vYmlsZSddID09IGZhbHNlICYmIHRoaXMuaXNNb2JpbGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnNbJ3RyaWdnZXInXSAhPSAnY2xpY2snKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBpc01vYmlsZSgpIHtcclxuICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA/IGNoZWNrID0gdHJ1ZSA6IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBjaGVjaztcclxuICB9XHJcblxyXG4gIGFwcGx5T3B0aW9uc0RlZmF1bHQoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOnZvaWQge1xyXG4gICAgdGhpcy5fZGVmYXVsdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUV2ZW50cyhldmVudDogYW55KXtcclxuICAgIGlmIChldmVudCA9PT0gJ3Nob3duJyl7XHJcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoJ3Nob3duJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdygpe1xyXG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZiB8fCB0aGlzLmlzVG9vbHRpcERlc3Ryb3llZCkge1xyXG4gICAgICB0aGlzLmNyZWF0ZVRvb2x0aXAoKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNUb29sdGlwRGVzdHJveWVkKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Rvb2x0aXBFbGVtKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZSgpe1xyXG4gICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xyXG4gIH1cclxufVxyXG4iXX0=
import { Directive, ElementRef, HostListener, Input, ComponentFactoryResolver, ApplicationRef, Injector, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { TooltipOptionsService } from './tooltip-options.service';
import { defaultOptions, backwardCompatibilityOptions } from './options';
export class TooltipDirective {
    constructor(initOptions, elementRef, componentFactoryResolver, appRef, injector) {
        this.initOptions = initOptions;
        this.elementRef = elementRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
        this._showDelay = 0;
        this._hideDelay = 300;
        this._options = {};
        this.events = new EventEmitter();
    }
    set options(value) {
        if (value && defaultOptions) {
            this._options = value;
        }
    }
    get options() {
        return this._options;
    }
    get isTooltipDestroyed() {
        return this.componentRef && this.componentRef.hostView.destroyed;
    }
    get destroyDelay() {
        if (this._destroyDelay) {
            return this._destroyDelay;
        }
        else {
            return Number(this.getHideDelay()) + Number(this.options['animationDuration']);
        }
    }
    set destroyDelay(value) {
        this._destroyDelay = value;
    }
    get tooltipPosition() {
        if (this.options['position']) {
            return this.options['position'];
        }
        else {
            return this.elementPosition;
        }
    }
    onMouseEnter() {
        if (this.isDisplayOnHover == false) {
            return;
        }
        this.show();
    }
    onMouseLeave() {
        if (this.options['trigger'] === 'hover') {
            this.destroyTooltip();
        }
    }
    onClick() {
        if (this.isDisplayOnClick == false) {
            return;
        }
        this.show();
        this.hideAfterClickTimeoutId = window.setTimeout(() => {
            this.destroyTooltip();
        }, this.options['hideDelayAfterClick']);
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.initOptions = this.renameProperties(this.initOptions);
        let changedOptions = this.getProperties(changes);
        changedOptions = this.renameProperties(changedOptions);
        this.applyOptionsDefault(defaultOptions, changedOptions);
    }
    ngOnDestroy() {
        this.destroyTooltip({
            fast: true
        });
        if (this.componentSubscribe) {
            this.componentSubscribe.unsubscribe();
        }
    }
    getShowDelay() {
        return this.options['showDelay'];
    }
    getHideDelay() {
        const hideDelay = this.options['hideDelay'];
        const hideDelayTouchscreen = this.options['hideDelayTouchscreen'];
        return this.isTouchScreen ? hideDelayTouchscreen : hideDelay;
    }
    getProperties(changes) {
        let directiveProperties = {};
        let customProperties = {};
        let allProperties = {};
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
    }
    renameProperties(options) {
        for (var prop in options) {
            if (backwardCompatibilityOptions[prop]) {
                options[backwardCompatibilityOptions[prop]] = options[prop];
                delete options[prop];
            }
        }
        return options;
    }
    getElementPosition() {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    }
    createTooltip() {
        this.clearTimeouts();
        this.getElementPosition();
        this.createTimeoutId = window.setTimeout(() => {
            this.appendComponentToBody(TooltipComponent);
        }, this.getShowDelay());
        this.showTimeoutId = window.setTimeout(() => {
            this.showTooltipElem();
        }, this.getShowDelay());
    }
    destroyTooltip(options = {
        fast: false
    }) {
        this.clearTimeouts();
        if (this.isTooltipDestroyed == false) {
            this.hideTimeoutId = window.setTimeout(() => {
                this.hideTooltip();
            }, options.fast ? 0 : this.getHideDelay());
            this.destroyTimeoutId = window.setTimeout(() => {
                if (!this.componentRef || this.isTooltipDestroyed) {
                    return;
                }
                this.appRef.detachView(this.componentRef.hostView);
                this.componentRef.destroy();
                this.events.emit({
                    type: 'hidden',
                    position: this.tooltipPosition
                });
            }, options.fast ? 0 : this.destroyDelay);
        }
    }
    showTooltipElem() {
        this.clearTimeouts();
        this.componentRef.instance.show = true;
        this.events.emit({
            type: 'show',
            position: this.tooltipPosition
        });
    }
    hideTooltip() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            return;
        }
        this.componentRef.instance.show = false;
        this.events.emit({
            type: 'hide',
            position: this.tooltipPosition
        });
    }
    appendComponentToBody(component, data = {}) {
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
        const domElem = this.componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        this.componentSubscribe = this.componentRef.instance.events.subscribe((event) => {
            this.handleEvents(event);
        });
    }
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
    get isDisplayOnHover() {
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
    }
    get isDisplayOnClick() {
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
    }
    get isTouchScreen() {
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
    }
    applyOptionsDefault(defaultOptions, options) {
        this.options = Object.assign({}, defaultOptions, this.initOptions || {}, options);
    }
    handleEvents(event) {
        if (event.type === 'shown') {
            this.events.emit({
                type: 'shown',
                position: this.tooltipPosition
            });
        }
    }
    show() {
        if (!this.componentRef || this.isTooltipDestroyed) {
            this.createTooltip();
        }
        else if (!this.isTooltipDestroyed) {
            this.showTooltipElem();
        }
    }
    hide() {
        this.destroyTooltip();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip]',
                exportAs: 'tooltip',
            },] }
];
TooltipDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [TooltipOptionsService,] }] },
    { type: ElementRef },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
TooltipDirective.propDecorators = {
    options: [{ type: Input, args: ['options',] }],
    tooltipValue: [{ type: Input, args: ['tooltip',] }],
    placement: [{ type: Input, args: ['placement',] }],
    autoPlacement: [{ type: Input, args: ['autoPlacement',] }],
    contentType: [{ type: Input, args: ['content-type',] }],
    hideDelayMobile: [{ type: Input, args: ['hide-delay-mobile',] }],
    hideDelayTouchscreen: [{ type: Input, args: ['hideDelayTouchscreen',] }],
    zIndex: [{ type: Input, args: ['z-index',] }],
    animationDuration: [{ type: Input, args: ['animation-duration',] }],
    trigger: [{ type: Input, args: ['trigger',] }],
    tooltipClass: [{ type: Input, args: ['tooltip-class',] }],
    display: [{ type: Input, args: ['display',] }],
    displayMobile: [{ type: Input, args: ['display-mobile',] }],
    displayTouchscreen: [{ type: Input, args: ['displayTouchscreen',] }],
    shadow: [{ type: Input, args: ['shadow',] }],
    theme: [{ type: Input, args: ['theme',] }],
    offset: [{ type: Input, args: ['offset',] }],
    width: [{ type: Input, args: ['width',] }],
    maxWidth: [{ type: Input, args: ['max-width',] }],
    id: [{ type: Input, args: ['id',] }],
    showDelay: [{ type: Input, args: ['show-delay',] }],
    hideDelay: [{ type: Input, args: ['hide-delay',] }],
    hideDelayAfterClick: [{ type: Input, args: ['hideDelayAfterClick',] }],
    pointerEvents: [{ type: Input, args: ['pointerEvents',] }],
    position: [{ type: Input, args: ['position',] }],
    events: [{ type: Output }],
    onMouseEnter: [{ type: HostListener, args: ['focusin',] }, { type: HostListener, args: ['mouseenter',] }],
    onMouseLeave: [{ type: HostListener, args: ['focusout',] }, { type: HostListener, args: ['mouseleave',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItdG9vbHRpcC1kaXJlY3RpdmUvc3JjL2xpYi90b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFtQixjQUFjLEVBQUUsUUFBUSxFQUF3QixNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDek4sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQWV6RSxNQUFNLE9BQU8sZ0JBQWdCO0lBNEV6QixZQUN1RCxXQUFXLEVBQ3RELFVBQXNCLEVBQ3RCLHdCQUFrRCxFQUNsRCxNQUFzQixFQUN0QixRQUFrQjtRQUp5QixnQkFBVyxHQUFYLFdBQVcsQ0FBQTtRQUN0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQXhFOUIsZUFBVSxHQUFRLENBQUMsQ0FBQztRQUNwQixlQUFVLEdBQVcsR0FBRyxDQUFDO1FBRXpCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUE4RFQsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVyxDQUFDO0lBT3BDLENBQUM7SUFoRWxDLElBQXNCLE9BQU8sQ0FBQyxLQUFxQjtRQUMvQyxJQUFJLEtBQUssSUFBSSxjQUFjLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFL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Q0FDekIsS0FBSyxTQUFDLHNCQUFzQjtxQkFDNUIsS0FBSyxTQUFDLFNBQVM7Z0NBQ2YsS0FBSyxTQUFDLG9CQUFvQjtzQkFDMUIsS0FBSyxTQUFDLFNBQVM7MkJBQ2YsS0FBSyxTQUFDLGVBQWU7c0JBQ3JCLEtBQUssU0FBQyxTQUFTOzRCQUNmLEtBQUssU0FBQyxnQkFBZ0I7aUNBQ3RCLEtBQUssU0FBQyxvQkFBb0I7cUJBQzFCLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxPQUFPO3VCQUNiLEtBQUssU0FBQyxXQUFXO2lCQUNqQixLQUFLLFNBQUMsSUFBSTt3QkFDVixLQUFLLFNBQUMsWUFBWTt3QkFDbEIsS0FBSyxTQUFDLFlBQVk7a0NBQ2xCLEtBQUssU0FBQyxxQkFBcUI7NEJBQzNCLEtBQUssU0FBQyxlQUFlO3VCQUNyQixLQUFLLFNBQUMsVUFBVTtxQkF5QmhCLE1BQU07MkJBU04sWUFBWSxTQUFDLFNBQVMsY0FDdEIsWUFBWSxTQUFDLFlBQVk7MkJBU3pCLFlBQVksU0FBQyxVQUFVLGNBQ3ZCLFlBQVksU0FBQyxZQUFZO3NCQU96QixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBFbWJlZGRlZFZpZXdSZWYsIEFwcGxpY2F0aW9uUmVmLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwT3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3Rvb2x0aXAtb3B0aW9ucy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMsIGJhY2t3YXJkQ29tcGF0aWJpbGl0eU9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xyXG5pbXBvcnQgeyBUb29sdGlwT3B0aW9ucyB9IGZyb20gJy4vdG9vbHRpcC1vcHRpb25zLmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkQ29tcG9uZW50IHtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbiAgICBjbG9zZTogYm9vbGVhbjtcclxuICAgIGV2ZW50czogYW55O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3Rvb2x0aXBdJyxcclxuICAgIGV4cG9ydEFzOiAndG9vbHRpcCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSB7XHJcblxyXG4gICAgaGlkZVRpbWVvdXRJZDogbnVtYmVyO1xyXG4gICAgZGVzdHJveVRpbWVvdXRJZDogbnVtYmVyO1xyXG4gICAgaGlkZUFmdGVyQ2xpY2tUaW1lb3V0SWQ6IG51bWJlcjtcclxuICAgIGNyZWF0ZVRpbWVvdXRJZDogbnVtYmVyO1xyXG4gICAgc2hvd1RpbWVvdXRJZDogbnVtYmVyO1xyXG4gICAgY29tcG9uZW50UmVmOiBhbnk7XHJcbiAgICBlbGVtZW50UG9zaXRpb246IGFueTtcclxuICAgIF9zaG93RGVsYXk6IGFueSA9IDA7XHJcbiAgICBfaGlkZURlbGF5OiBudW1iZXIgPSAzMDA7XHJcbiAgICBfaWQ6IGFueTtcclxuICAgIF9vcHRpb25zOiBhbnkgPSB7fTtcclxuICAgIF9kZWZhdWx0T3B0aW9uczogYW55O1xyXG4gICAgX2Rlc3Ryb3lEZWxheTogbnVtYmVyO1xyXG4gICAgY29tcG9uZW50U3Vic2NyaWJlOiBhbnk7XHJcblxyXG4gICAgQElucHV0KCdvcHRpb25zJykgc2V0IG9wdGlvbnModmFsdWU6IFRvb2x0aXBPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmIGRlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgb3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwVmFsdWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgncGxhY2VtZW50JykgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoJ2F1dG9QbGFjZW1lbnQnKSBhdXRvUGxhY2VtZW50OiBib29sZWFuO1xyXG4gICAgQElucHV0KCdjb250ZW50LXR5cGUnKSBjb250ZW50VHlwZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCdoaWRlLWRlbGF5LW1vYmlsZScpIGhpZGVEZWxheU1vYmlsZTogbnVtYmVyO1xyXG4gICAgQElucHV0KCdoaWRlRGVsYXlUb3VjaHNjcmVlbicpIGhpZGVEZWxheVRvdWNoc2NyZWVuOiBudW1iZXI7XHJcbiAgICBASW5wdXQoJ3otaW5kZXgnKSB6SW5kZXg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgnYW5pbWF0aW9uLWR1cmF0aW9uJykgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcclxuICAgIEBJbnB1dCgndHJpZ2dlcicpIHRyaWdnZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgndG9vbHRpcC1jbGFzcycpIHRvb2x0aXBDbGFzczogc3RyaW5nO1xyXG4gICAgQElucHV0KCdkaXNwbGF5JykgZGlzcGxheTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgnZGlzcGxheS1tb2JpbGUnKSBkaXNwbGF5TW9iaWxlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCdkaXNwbGF5VG91Y2hzY3JlZW4nKSBkaXNwbGF5VG91Y2hzY3JlZW46IGJvb2xlYW47XHJcbiAgICBASW5wdXQoJ3NoYWRvdycpIHNoYWRvdzogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgndGhlbWUnKSB0aGVtZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgnb2Zmc2V0Jykgb2Zmc2V0OiBudW1iZXI7XHJcbiAgICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgnbWF4LXdpZHRoJykgbWF4V2lkdGg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgnaWQnKSBpZDogYW55O1xyXG4gICAgQElucHV0KCdzaG93LWRlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXI7XHJcbiAgICBASW5wdXQoJ2hpZGUtZGVsYXknKSBoaWRlRGVsYXk6IG51bWJlcjtcclxuICAgIEBJbnB1dCgnaGlkZURlbGF5QWZ0ZXJDbGljaycpIGhpZGVEZWxheUFmdGVyQ2xpY2s6IG51bWJlcjtcclxuICAgIEBJbnB1dCgncG9pbnRlckV2ZW50cycpIHBvaW50ZXJFdmVudHM6ICdhdXRvJyB8ICdub25lJztcclxuICAgIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjoge3RvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXJ9O1xyXG5cclxuICAgIGdldCBpc1Rvb2x0aXBEZXN0cm95ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50UmVmICYmIHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3LmRlc3Ryb3llZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzdHJveURlbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95RGVsYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3lEZWxheTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0SGlkZURlbGF5KCkpICsgTnVtYmVyKHRoaXMub3B0aW9uc1snYW5pbWF0aW9uRHVyYXRpb24nXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0IGRlc3Ryb3lEZWxheSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveURlbGF5ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvb2x0aXBQb3NpdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWydwb3NpdGlvbiddKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbJ3Bvc2l0aW9uJ107XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgZXZlbnRzOiBFdmVudEVtaXR0ZXIgPCBhbnkgPiA9IG5ldyBFdmVudEVtaXR0ZXIgPCBhbnkgPiAoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRvb2x0aXBPcHRpb25zU2VydmljZSkgcHJpdmF0ZSBpbml0T3B0aW9ucyxcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcclxuICAgIG9uTW91c2VFbnRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Rpc3BsYXlPbkhvdmVyID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxyXG4gICAgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3RyaWdnZXInXSA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwbGF5T25DbGljayA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB0aGlzLmhpZGVBZnRlckNsaWNrVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lUb29sdGlwKCk7XHJcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zWydoaWRlRGVsYXlBZnRlckNsaWNrJ10pXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMgPSB0aGlzLnJlbmFtZVByb3BlcnRpZXModGhpcy5pbml0T3B0aW9ucyk7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRPcHRpb25zID0gdGhpcy5nZXRQcm9wZXJ0aWVzKGNoYW5nZXMpO1xyXG4gICAgICAgIGNoYW5nZWRPcHRpb25zID0gdGhpcy5yZW5hbWVQcm9wZXJ0aWVzKGNoYW5nZWRPcHRpb25zKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBseU9wdGlvbnNEZWZhdWx0KGRlZmF1bHRPcHRpb25zLCBjaGFuZ2VkT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95VG9vbHRpcCh7XHJcbiAgICAgICAgICAgIGZhc3Q6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50U3Vic2NyaWJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaWJlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNob3dEZWxheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zWydzaG93RGVsYXknXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIaWRlRGVsYXkoKSB7XHJcbiAgICAgICAgY29uc3QgaGlkZURlbGF5ID0gdGhpcy5vcHRpb25zWydoaWRlRGVsYXknXTtcclxuICAgICAgICBjb25zdCBoaWRlRGVsYXlUb3VjaHNjcmVlbiA9IHRoaXMub3B0aW9uc1snaGlkZURlbGF5VG91Y2hzY3JlZW4nXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNUb3VjaFNjcmVlbiA/IGhpZGVEZWxheVRvdWNoc2NyZWVuIDogaGlkZURlbGF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb3BlcnRpZXMoY2hhbmdlcyl7XHJcbiAgICAgICAgbGV0IGRpcmVjdGl2ZVByb3BlcnRpZXM6YW55ID0ge307XHJcbiAgICAgICAgbGV0IGN1c3RvbVByb3BlcnRpZXM6YW55ID0ge307XHJcbiAgICAgICAgbGV0IGFsbFByb3BlcnRpZXM6YW55ID0ge307XHJcblxyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gY2hhbmdlcykge1xyXG4gICAgICAgICAgICBpZiAocHJvcCAhPT0gJ29wdGlvbnMnICYmIHByb3AgIT09ICd0b29sdGlwVmFsdWUnKXtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZVByb3BlcnRpZXNbcHJvcF0gPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ29wdGlvbnMnKXtcclxuICAgICAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWxsUHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbVByb3BlcnRpZXMsIGRpcmVjdGl2ZVByb3BlcnRpZXMpO1xyXG4gICAgICAgIHJldHVybiBhbGxQcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmFtZVByb3BlcnRpZXMob3B0aW9uczogVG9vbHRpcE9wdGlvbnMpIHtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKGJhY2t3YXJkQ29tcGF0aWJpbGl0eU9wdGlvbnNbcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbYmFja3dhcmRDb21wYXRpYmlsaXR5T3B0aW9uc1twcm9wXV0gPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnNbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW1lbnRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRQb3NpdGlvbiA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRvb2x0aXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ29tcG9uZW50VG9Cb2R5KFRvb2x0aXBDb21wb25lbnQpO1xyXG4gICAgICAgIH0sIHRoaXMuZ2V0U2hvd0RlbGF5KCkpO1xyXG5cclxuICAgICAgICB0aGlzLnNob3dUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2x0aXBFbGVtKCk7XHJcbiAgICAgICAgfSwgdGhpcy5nZXRTaG93RGVsYXkoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveVRvb2x0aXAob3B0aW9ucyA9IHtcclxuICAgICAgICBmYXN0OiBmYWxzZVxyXG4gICAgfSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXJUaW1lb3V0cygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1Rvb2x0aXBEZXN0cm95ZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlVG9vbHRpcCgpO1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLmZhc3QgPyAwIDogdGhpcy5nZXRIaWRlRGVsYXkoKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50UmVmIHx8IHRoaXMuaXNUb29sdGlwRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwUmVmLmRldGFjaFZpZXcodGhpcy5jb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnRvb2x0aXBQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIG9wdGlvbnMuZmFzdCA/IDAgOiB0aGlzLmRlc3Ryb3lEZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb29sdGlwRWxlbSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsZWFyVGltZW91dHMoKTtcclxuICAgICAgICAoIDwgQWRDb21wb25lbnQgPiB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzaG93JyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMudG9vbHRpcFBvc2l0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRvb2x0aXAoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZiB8fCB0aGlzLmlzVG9vbHRpcERlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICggPCBBZENvbXBvbmVudCA+IHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlKS5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdoaWRlJyxcclxuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMudG9vbHRpcFBvc2l0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ29tcG9uZW50VG9Cb2R5KGNvbXBvbmVudDogYW55LCBkYXRhOiBhbnkgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICAgICAgICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudClcclxuICAgICAgICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuXHJcbiAgICAgICAgKCA8IEFkQ29tcG9uZW50ID4gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmRhdGEgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnRvb2x0aXBWYWx1ZSxcclxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIGVsZW1lbnRQb3NpdGlvbjogdGhpcy50b29sdGlwUG9zaXRpb24sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgICBjb25zdCBkb21FbGVtID0gKHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZiA8IGFueSA+ICkucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tRWxlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50U3Vic2NyaWJlID0gKCA8IEFkQ29tcG9uZW50ID4gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFdmVudHMoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVGltZW91dHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlVGltZW91dElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNyZWF0ZVRpbWVvdXRJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZW91dElkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNob3dUaW1lb3V0SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGlkZVRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5oaWRlVGltZW91dElkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3lUaW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVzdHJveVRpbWVvdXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0Rpc3BsYXlPbkhvdmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2Rpc3BsYXknXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWydkaXNwbGF5VG91Y2hzY3JlZW4nXSA9PSBmYWxzZSAmJiB0aGlzLmlzVG91Y2hTY3JlZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sndHJpZ2dlciddICE9PSAnaG92ZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0Rpc3BsYXlPbkNsaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ2Rpc3BsYXknXSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWydkaXNwbGF5VG91Y2hzY3JlZW4nXSA9PSBmYWxzZSAmJiB0aGlzLmlzVG91Y2hTY3JlZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sndHJpZ2dlciddICE9ICdjbGljaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzVG91Y2hTY3JlZW4oKSB7XHJcbiAgICAgICAgdmFyIHByZWZpeGVzID0gJyAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAnLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgdmFyIG1xID0gZnVuY3Rpb24ocXVlcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaW5jbHVkZSB0aGUgJ2hlYXJ0eicgYXMgYSB3YXkgdG8gaGF2ZSBhIG5vbiBtYXRjaGluZyBNUSB0byBoZWxwIHRlcm1pbmF0ZSB0aGUgam9pblxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0LmlvL3Z6bkZIXHJcbiAgICAgICAgdmFyIHF1ZXJ5ID0gWycoJywgcHJlZml4ZXMuam9pbigndG91Y2gtZW5hYmxlZCksKCcpLCAnaGVhcnR6JywgJyknXS5qb2luKCcnKTtcclxuICAgICAgICByZXR1cm4gbXEocXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5T3B0aW9uc0RlZmF1bHQoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgdGhpcy5pbml0T3B0aW9ucyB8fCB7fSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXZlbnRzKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ3Nob3duJykge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG93bicsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy50b29sdGlwUG9zaXRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYgfHwgdGhpcy5pc1Rvb2x0aXBEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUb29sdGlwKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1Rvb2x0aXBEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9vbHRpcEVsZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95VG9vbHRpcCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
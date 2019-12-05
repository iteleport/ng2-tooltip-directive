/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostListener, HostBinding, Input, EventEmitter, Renderer2 } from '@angular/core';
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
export { TooltipComponent };
if (false) {
    /** @type {?} */
    TooltipComponent.prototype._show;
    /** @type {?} */
    TooltipComponent.prototype.data;
    /** @type {?} */
    TooltipComponent.prototype.events;
    /** @type {?} */
    TooltipComponent.prototype.hostStyleTop;
    /** @type {?} */
    TooltipComponent.prototype.hostStyleLeft;
    /** @type {?} */
    TooltipComponent.prototype.hostStyleZIndex;
    /** @type {?} */
    TooltipComponent.prototype.hostStyleTransition;
    /** @type {?} */
    TooltipComponent.prototype.hostStyleMaxWidth;
    /** @type {?} */
    TooltipComponent.prototype.hostClassShow;
    /** @type {?} */
    TooltipComponent.prototype.hostClassShadow;
    /** @type {?} */
    TooltipComponent.prototype.hostClassLight;
    /**
     * @type {?}
     * @private
     */
    TooltipComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItdG9vbHRpcC1kaXJlY3RpdmUvIiwic291cmNlcyI6WyJsaWIvdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdkg7SUF5RUUsMEJBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFoRXZFLFVBQUssR0FBVyxLQUFLLENBQUM7O1FBUXRCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBeUQ1QixDQUFDOzs7OztJQTdDRCx3Q0FBYTs7OztJQURiLFVBQ2MsS0FBSztRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUM7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxzQkFBYSxrQ0FBSTs7OztRQU1qQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQVJELFVBQW1CLEtBQWE7WUFDOUIsSUFBSSxLQUFLLEVBQUM7Z0JBQ1IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLHVDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxPQUFPLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7Ozs7SUFLRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLFVBQVU7O1lBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7O1lBRXZDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7O1lBQ2pGLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVc7O1lBQzlFLGFBQWEsR0FBRyxPQUFPLENBQUMsWUFBWTs7WUFDcEMsWUFBWSxHQUFJLE9BQU8sQ0FBQyxXQUFXOztZQUNuQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVc7UUFFbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN4RztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUN0RztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMvRjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNGO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDaEg7SUFDSCxDQUFDOzs7O0lBRUQsNENBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ3JGO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFvQjs7O0lBQXBCO1FBQ0UsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxFQUFDO1lBQzNGLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxVQUFVLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFDLElBQUksQ0FBQztTQUMvRTtJQUNILENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQWpKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDBZQUF1QztvQkFDdkMsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQzs7aUJBRTNCOzs7O2dCQVBrQixVQUFVO2dCQUEwRCxTQUFTOzs7dUJBZTdGLEtBQUs7K0JBTUwsV0FBVyxTQUFDLFdBQVc7Z0NBQ3ZCLFdBQVcsU0FBQyxZQUFZO2tDQUN4QixXQUFXLFNBQUMsZUFBZTtzQ0FDM0IsV0FBVyxTQUFDLGtCQUFrQjtvQ0FDOUIsV0FBVyxTQUFDLGlCQUFpQjtnQ0FDN0IsV0FBVyxTQUFDLG9CQUFvQjtrQ0FDaEMsV0FBVyxTQUFDLHNCQUFzQjtpQ0FDbEMsV0FBVyxTQUFDLHFCQUFxQjtnQ0FFakMsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzt1QkFPeEMsS0FBSzs7SUErR1IsdUJBQUM7Q0FBQSxBQWxKRCxJQWtKQztTQTNJWSxnQkFBZ0I7OztJQUUzQixpQ0FBc0I7O0lBSXRCLGdDQUFtQjs7SUFJbkIsa0NBQTRCOztJQUU1Qix3Q0FBK0M7O0lBQy9DLHlDQUFpRDs7SUFDakQsMkNBQXNEOztJQUN0RCwrQ0FBNkQ7O0lBQzdELDZDQUEwRDs7SUFDMUQseUNBQTBEOztJQUMxRCwyQ0FBOEQ7O0lBQzlELDBDQUE0RDs7Ozs7SUErQ2hELHNDQUE4Qjs7Ozs7SUFBRSxvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDogeydjbGFzcyc6ICd0b29sdGlwJ30sXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbHRpcC5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCB7XHJcblxyXG4gIF9zaG93OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGU6bm8taW5wdXQtcmVuYW1lICovXHJcblxyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuXHJcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG5cclxuICBldmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudG9wJykgaG9zdFN0eWxlVG9wOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0JykgaG9zdFN0eWxlTGVmdDogc3RyaW5nO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuei1pbmRleCcpIGhvc3RTdHlsZVpJbmRleDogbnVtYmVyO1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNpdGlvbicpIGhvc3RTdHlsZVRyYW5zaXRpb246IHN0cmluZztcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpIGhvc3RTdHlsZU1heFdpZHRoOiBzdHJpbmc7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b29sdGlwLXNob3cnKSBob3N0Q2xhc3NTaG93OiBib29sZWFuO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG9vbHRpcC1zaGFkb3cnKSBob3N0Q2xhc3NTaGFkb3c6IGJvb2xlYW47XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b29sdGlwLWxpZ2h0JykgaG9zdENsYXNzTGlnaHQ6IGJvb2xlYW47XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBbJyRldmVudCddKVxyXG4gIHRyYW5zaXRpb25FbmQoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLnNob3cpe1xyXG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KCdzaG93bicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHNob3cgKHZhbHVlOmJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSl7XHJcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3Nob3cgPSB0aGlzLmhvc3RDbGFzc1Nob3cgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IHNob3cgKCk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvdztcclxuICB9XHJcblxyXG4gIGdldCBwbGFjZW1lbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmRhdGEub3B0aW9ucy5wbGFjZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbWVudCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVsZW1lbnRQb3NpdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5lbGVtZW50UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9ucygpe1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5vcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCl7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvb2x0aXBPZmZzZXQoKTpudW1iZXIge1xyXG4gICAgcmV0dXJuIE51bWJlcih0aGlzLmRhdGEub3B0aW9ucy5vZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVGhlbWVMaWdodCgpe1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc1sndGhlbWUnXSA9PT0gJ2xpZ2h0JztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0UGxhY2VtZW50Q2xhc3MoKTtcclxuICAgIHRoaXMuc2V0WkluZGV4KCk7XHJcbiAgICB0aGlzLnNldEN1c3RvbUNsYXNzKCk7XHJcbiAgICB0aGlzLnNldEFuaW1hdGlvbkR1cmF0aW9uKCk7XHJcbiAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24oKTp2b2lkIHtcclxuICAgIGNvbnN0IGlzU3ZnID0gdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcclxuICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gaXNTdmcgPyB0aGlzLmVsZW1lbnQuZ2V0QkJveCgpLmhlaWdodCA6IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICBjb25zdCBlbGVtZW50V2lkdGggPSBpc1N2ZyA/IHRoaXMuZWxlbWVudC5nZXRCQm94KCkud2lkdGggOiB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBjb25zdCB0b29sdGlwSGVpZ2h0ID0gdG9vbHRpcC5jbGllbnRIZWlnaHQ7XHJcbiAgICBjb25zdCB0b29sdGlwV2lkdGggPSAgdG9vbHRpcC5jbGllbnRXaWR0aDtcclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSAndG9wJykge1xyXG4gICAgICB0aGlzLmhvc3RTdHlsZVRvcCA9ICh0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3AgKyBzY3JvbGxZKSAtICh0b29sdGlwSGVpZ2h0ICsgdGhpcy50b29sdGlwT2Zmc2V0KSArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSAnYm90dG9tJykge1xyXG4gICAgICB0aGlzLmhvc3RTdHlsZVRvcCA9ICh0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3AgKyBzY3JvbGxZKSArIGVsZW1lbnRIZWlnaHQgKyB0aGlzLnRvb2x0aXBPZmZzZXQgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgdGhpcy5wbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XHJcbiAgICAgIHRoaXMuaG9zdFN0eWxlTGVmdCA9ICh0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0ICsgZWxlbWVudFdpZHRoIC8gMikgLSB0b29sdGlwV2lkdGggLyAyICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09ICdsZWZ0Jykge1xyXG4gICAgICB0aGlzLmhvc3RTdHlsZUxlZnQgPSB0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0IC0gdG9vbHRpcFdpZHRoIC0gdGhpcy50b29sdGlwT2Zmc2V0ICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcclxuICAgICAgdGhpcy5ob3N0U3R5bGVMZWZ0ID0gdGhpcy5lbGVtZW50UG9zaXRpb24ubGVmdCArIGVsZW1lbnRXaWR0aCArIHRoaXMudG9vbHRpcE9mZnNldCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSAnbGVmdCcgfHwgdGhpcy5wbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcclxuICAgICAgdGhpcy5ob3N0U3R5bGVUb3AgPSAodGhpcy5lbGVtZW50UG9zaXRpb24udG9wICsgc2Nyb2xsWSkgKyBlbGVtZW50SGVpZ2h0IC8gMiAtIHRvb2x0aXAuY2xpZW50SGVpZ2h0IC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRQbGFjZW1lbnRDbGFzcygpOnZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwndG9vbHRpcC0nK3RoaXMucGxhY2VtZW50KTtcclxuICB9XHJcblxyXG4gIHNldFpJbmRleCgpOnZvaWQge1xyXG4gICAgaWYgKHRoaXMub3B0aW9uc1snei1pbmRleCddICE9PSAwKXtcclxuICAgICAgdGhpcy5ob3N0U3R5bGVaSW5kZXggPSB0aGlzLm9wdGlvbnNbJ3otaW5kZXgnXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEN1c3RvbUNsYXNzKCl7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zWyd0b29sdGlwLWNsYXNzJ10pe1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LHRoaXMub3B0aW9uc1sndG9vbHRpcC1jbGFzcyddKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEFuaW1hdGlvbkR1cmF0aW9uKCl7XHJcbiAgICBpZiAoTnVtYmVyKHRoaXMub3B0aW9uc1snYW5pbWF0aW9uLWR1cmF0aW9uJ10pICE9IHRoaXMub3B0aW9uc1snYW5pbWF0aW9uLWR1cmF0aW9uLWRlZmF1bHQnXSl7XHJcbiAgICAgIHRoaXMuaG9zdFN0eWxlVHJhbnNpdGlvbiA9ICdvcGFjaXR5ICcrdGhpcy5vcHRpb25zWydhbmltYXRpb24tZHVyYXRpb24nXSsnbXMnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U3R5bGVzKCl7XHJcbiAgICB0aGlzLmhvc3RDbGFzc1NoYWRvdyA9IHRoaXMub3B0aW9uc1snc2hhZG93J107XHJcbiAgICB0aGlzLmhvc3RDbGFzc0xpZ2h0ID0gdGhpcy5pc1RoZW1lTGlnaHQ7XHJcbiAgICB0aGlzLmhvc3RTdHlsZU1heFdpZHRoID0gdGhpcy5vcHRpb25zWydtYXgtd2lkdGgnXTtcclxuICB9XHJcbn1cclxuIl19
import { Component, ElementRef, HostListener, HostBinding, Input, EventEmitter, Renderer2 } from '@angular/core';
export class TooltipComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._show = false;
        this.events = new EventEmitter();
    }
    transitionEnd(event) {
        if (this.show) {
            this.events.emit({
                type: 'shown'
            });
        }
    }
    set show(value) {
        if (value) {
            this.setPosition();
        }
        this._show = this.hostClassShow = value;
    }
    get show() {
        return this._show;
    }
    get placement() {
        return this.data.options.placement;
    }
    get autoPlacement() {
        return this.data.options.autoPlacement;
    }
    get element() {
        return this.data.element;
    }
    get elementPosition() {
        return this.data.elementPosition;
    }
    get options() {
        return this.data.options;
    }
    get value() {
        return this.data.value;
    }
    get tooltipOffset() {
        return Number(this.data.options.offset);
    }
    get isThemeLight() {
        return this.options['theme'] === 'light';
    }
    ngOnInit() {
        this.setCustomClass();
        this.setStyles();
    }
    setPosition() {
        if (this.setHostStyle(this.placement)) {
            this.setPlacementClass(this.placement);
            return;
        }
        else {
            /* Is tooltip outside the visible area */
            const placements = ['top', 'right', 'bottom', 'left'];
            let isPlacementSet;
            for (const placement of placements) {
                if (this.setHostStyle(placement)) {
                    this.setPlacementClass(placement);
                    isPlacementSet = true;
                    return;
                }
            }
            /* Set original placement */
            if (!isPlacementSet) {
                this.setHostStyle(this.placement, true);
                this.setPlacementClass(this.placement);
            }
        }
    }
    setPlacementClass(placement) {
        this.renderer.addClass(this.elementRef.nativeElement, 'tooltip-' + placement);
    }
    setHostStyle(placement, disableAutoPlacement = false) {
        const isSvg = this.element instanceof SVGElement;
        const tooltip = this.elementRef.nativeElement;
        const isCustomPosition = !this.elementPosition.right;
        let elementHeight = isSvg ? this.element.getBoundingClientRect().height : this.element.offsetHeight;
        let elementWidth = isSvg ? this.element.getBoundingClientRect().width : this.element.offsetWidth;
        const tooltipHeight = tooltip.clientHeight;
        const tooltipWidth = tooltip.clientWidth;
        const scrollY = window.pageYOffset;
        if (isCustomPosition) {
            elementHeight = 0;
            elementWidth = 0;
        }
        let topStyle;
        let leftStyle;
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
            const topEdge = topStyle;
            const bottomEdge = topStyle + tooltipHeight;
            const leftEdge = leftStyle;
            const rightEdge = leftStyle + tooltipWidth;
            const bodyHeight = window.innerHeight + scrollY;
            const bodyWidth = document.body.clientWidth;
            if (topEdge < 0 || bottomEdge > bodyHeight || leftEdge < 0 || rightEdge > bodyWidth) {
                return false;
            }
        }
        this.hostStyleTop = topStyle + 'px';
        this.hostStyleLeft = leftStyle + 'px';
        return true;
    }
    setZIndex() {
        if (this.options['zIndex'] !== 0) {
            this.hostStyleZIndex = this.options['zIndex'];
        }
    }
    setPointerEvents() {
        if (this.options['pointerEvents']) {
            this.hostStylePointerEvents = this.options['pointerEvents'];
        }
    }
    setCustomClass() {
        if (this.options['tooltipClass']) {
            this.options['tooltipClass'].split(' ').forEach(className => {
                this.renderer.addClass(this.elementRef.nativeElement, className);
            });
        }
    }
    setAnimationDuration() {
        if (Number(this.options['animationDuration']) != this.options['animationDurationDefault']) {
            this.hostStyleTransition = 'opacity ' + this.options['animationDuration'] + 'ms';
        }
    }
    setStyles() {
        this.setZIndex();
        this.setPointerEvents();
        this.setAnimationDuration();
        this.hostClassShadow = this.options['shadow'];
        this.hostClassLight = this.isThemeLight;
        this.hostStyleMaxWidth = this.options['maxWidth'] + "px";
        this.hostStyleWidth = this.options['width'] ? this.options['width'] + "px" : '';
    }
}
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'tooltip',
                template: "<div *ngIf=\"isThemeLight\" class=\"tooltip-arrow\"></div>\r\n\r\n<div *ngIf=\"options['contentType'] === 'template' else htmlOrStringTemplate\">\r\n\r\n\t<ng-container *ngTemplateOutlet=\"value\"></ng-container>\r\n</div>\r\n\r\n<ng-template #htmlOrStringTemplate>\r\n\t<div [innerHTML]=\"value\"></div>\r\n</ng-template>\r\n",
                host: {
                    'class': 'tooltip'
                },
                styles: [":host{background-color:#000;border-radius:6px;color:#fff;display:block;left:0;max-width:200px;opacity:0;padding:5px 8px;pointer-events:none;position:absolute;text-align:center;top:0;transition:opacity .3s;z-index:1000}:host.tooltip-show{opacity:1}:host.tooltip-shadow{box-shadow:0 7px 15px -5px rgba(0,0,0,.4)}:host.tooltip-light.tooltip-shadow{box-shadow:0 5px 15px -5px rgba(0,0,0,.4)}:host.tooltip:after{border-style:solid;content:\"\";position:absolute}:host.tooltip-top:after{border-color:#000 transparent transparent;border-width:5px;left:50%;margin-left:-5px;top:100%}:host.tooltip-bottom:after{border-color:transparent transparent #000;border-width:5px;bottom:100%;left:50%;margin-left:-5px}:host.tooltip-left:after{border-color:transparent transparent transparent #000;border-width:5px;left:100%;margin-top:-5px;top:50%}:host.tooltip-right:after{border-color:transparent #000 transparent transparent;border-width:5px;margin-top:-5px;right:100%;top:50%}:host.tooltip-light:after{display:none}:host.tooltip-light{background-color:#fff;border:1px solid rgba(0,0,0,.06);color:#000}:host.tooltip-light .tooltip-arrow{background-color:rgba(0,0,0,.07);height:10px;position:absolute;transform:rotate(135deg);width:10px}:host.tooltip-light .tooltip-arrow:after{background-color:#fff;content:\"\";display:block;height:10px;position:absolute;width:10px}:host.tooltip-top.tooltip-light{margin-top:-2px}:host.tooltip-top.tooltip-light .tooltip-arrow{background:linear-gradient(to bottom left,rgba(0,0,0,.07) 50%,transparent 0);left:50%;margin-left:-5px;margin-top:-4px;top:100%}:host.tooltip-top.tooltip-light .tooltip-arrow:after{right:1px;top:1px}:host.tooltip-bottom.tooltip-light .tooltip-arrow{background:linear-gradient(to top right,rgba(0,0,0,.1) 50%,transparent 0);bottom:100%;left:50%;margin-bottom:-4px;margin-left:-5px}:host.tooltip-bottom.tooltip-light .tooltip-arrow:after{right:-1px;top:-1px}:host.tooltip-left.tooltip-light .tooltip-arrow{background:linear-gradient(to bottom right,rgba(0,0,0,.07) 50%,transparent 0);left:100%;margin-left:-4px;margin-top:-5px;top:50%}:host.tooltip-left.tooltip-light .tooltip-arrow:after{right:-1px;top:1px}:host.tooltip-right.tooltip-light .tooltip-arrow{background:linear-gradient(to top left,rgba(0,0,0,.07) 50%,transparent 0);margin-right:-4px;margin-top:-5px;right:100%;top:50%}:host.tooltip-right.tooltip-light .tooltip-arrow:after{right:1px;top:-1px}"]
            },] }
];
TooltipComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TooltipComponent.propDecorators = {
    data: [{ type: Input }],
    hostStyleTop: [{ type: HostBinding, args: ['style.top',] }],
    hostStyleLeft: [{ type: HostBinding, args: ['style.left',] }],
    hostStyleZIndex: [{ type: HostBinding, args: ['style.z-index',] }],
    hostStyleTransition: [{ type: HostBinding, args: ['style.transition',] }],
    hostStyleWidth: [{ type: HostBinding, args: ['style.width',] }],
    hostStyleMaxWidth: [{ type: HostBinding, args: ['style.max-width',] }],
    hostStylePointerEvents: [{ type: HostBinding, args: ['style.pointer-events',] }],
    hostClassShow: [{ type: HostBinding, args: ['class.tooltip-show',] }],
    hostClassShadow: [{ type: HostBinding, args: ['class.tooltip-shadow',] }],
    hostClassLight: [{ type: HostBinding, args: ['class.tooltip-light',] }],
    transitionEnd: [{ type: HostListener, args: ['transitionend', ['$event'],] }],
    show: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItdG9vbHRpcC1kaXJlY3RpdmUvc3JjL2xpYi90b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBV3ZILE1BQU0sT0FBTyxnQkFBZ0I7SUFvRXpCLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFuRXZFLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFrRThDLENBQUM7SUFsRDNFLGFBQWEsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsSUFBSSxFQUFFLE9BQU87YUFDaEIsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsSUFBYSxJQUFJLENBQUMsS0FBYztRQUM1QixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQUksYUFBYTtRQUNiLE9BQU8sSUFBSSxDQUFD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SUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDcEYsQ0FBQzs7O1lBbk5KLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsa1ZBQXVDO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0YsT0FBTyxFQUFFLFNBQVM7aUJBQ3JCOzthQUVKOzs7WUFUa0IsVUFBVTtZQUEwRCxTQUFTOzs7bUJBZTNGLEtBQUs7MkJBRUwsV0FBVyxTQUFDLFdBQVc7NEJBQ3ZCLFdBQVcsU0FBQyxZQUFZOzhCQUN4QixXQUFXLFNBQUMsZUFBZTtrQ0FDM0IsV0FBVyxTQUFDLGtCQUFrQjs2QkFDOUIsV0FBVyxTQUFDLGFBQWE7Z0NBQ3pCLFdBQVcsU0FBQyxpQkFBaUI7cUNBQzdCLFdBQVcsU0FBQyxzQkFBc0I7NEJBQ2xDLFdBQVcsU0FBQyxvQkFBb0I7OEJBQ2hDLFdBQVcsU0FBQyxzQkFBc0I7NkJBQ2xDLFdBQVcsU0FBQyxxQkFBcUI7NEJBRWpDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7bUJBU3hDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Rvb2x0aXAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdjbGFzcyc6ICd0b29sdGlwJ1xyXG4gICAgfSxcclxuICAgIHN0eWxlVXJsczogWycuL3Rvb2x0aXAuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQge1xyXG4gICAgX3Nob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS50b3AnKSBob3N0U3R5bGVUb3A6IHN0cmluZztcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUubGVmdCcpIGhvc3RTdHlsZUxlZnQ6IHN0cmluZztcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuei1pbmRleCcpIGhvc3RTdHlsZVpJbmRleDogbnVtYmVyO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2l0aW9uJykgaG9zdFN0eWxlVHJhbnNpdGlvbjogc3RyaW5nO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIGhvc3RTdHlsZVdpZHRoOiBzdHJpbmc7XHJcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aCcpIGhvc3RTdHlsZU1heFdpZHRoOiBzdHJpbmc7XHJcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvaW50ZXItZXZlbnRzJykgaG9zdFN0eWxlUG9pbnRlckV2ZW50czogc3RyaW5nO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b29sdGlwLXNob3cnKSBob3N0Q2xhc3NTaG93OiBib29sZWFuO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b29sdGlwLXNoYWRvdycpIGhvc3RDbGFzc1NoYWRvdzogYm9vbGVhbjtcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MudG9vbHRpcC1saWdodCcpIGhvc3RDbGFzc0xpZ2h0OiBib29sZWFuO1xyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBbJyRldmVudCddKVxyXG4gICAgdHJhbnNpdGlvbkVuZChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvd24nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc2hvdyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Nob3cgPSB0aGlzLmhvc3RDbGFzc1Nob3cgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBzaG93KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGFjZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5vcHRpb25zLnBsYWNlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYXV0b1BsYWNlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm9wdGlvbnMuYXV0b1BsYWNlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnRQb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmVsZW1lbnRQb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb3B0aW9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvb2x0aXBPZmZzZXQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZGF0YS5vcHRpb25zLm9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzVGhlbWVMaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zWyd0aGVtZSddID09PSAnbGlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q3VzdG9tQ2xhc3MoKTtcclxuICAgICAgICB0aGlzLnNldFN0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNldEhvc3RTdHlsZSh0aGlzLnBsYWNlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQbGFjZW1lbnRDbGFzcyh0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKiBJcyB0b29sdGlwIG91dHNpZGUgdGhlIHZpc2libGUgYXJlYSAqL1xyXG4gICAgICAgICAgICBjb25zdCBwbGFjZW1lbnRzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcclxuICAgICAgICAgICAgbGV0IGlzUGxhY2VtZW50U2V0O1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBwbGFjZW1lbnQgb2YgcGxhY2VtZW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0SG9zdFN0eWxlKHBsYWNlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBsYWNlbWVudENsYXNzKHBsYWNlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNQbGFjZW1lbnRTZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogU2V0IG9yaWdpbmFsIHBsYWNlbWVudCAqL1xyXG4gICAgICAgICAgICBpZiAoIWlzUGxhY2VtZW50U2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhvc3RTdHlsZSh0aGlzLnBsYWNlbWVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBsYWNlbWVudENsYXNzKHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0UGxhY2VtZW50Q2xhc3MocGxhY2VtZW50OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndG9vbHRpcC0nICsgcGxhY2VtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRIb3N0U3R5bGUocGxhY2VtZW50OiBzdHJpbmcsIGRpc2FibGVBdXRvUGxhY2VtZW50OiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBpc1N2ZyA9IHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGlzQ3VzdG9tUG9zaXRpb24gPSAhdGhpcy5lbGVtZW50UG9zaXRpb24ucmlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50SGVpZ2h0ID0gaXNTdmcgPyB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IDogdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICBsZXQgZWxlbWVudFdpZHRoID0gaXNTdmcgPyB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcEhlaWdodCA9IHRvb2x0aXAuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHRvb2x0aXBXaWR0aCA9IHRvb2x0aXAuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgZWxlbWVudEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIGVsZW1lbnRXaWR0aCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9wU3R5bGU7XHJcbiAgICAgICAgbGV0IGxlZnRTdHlsZTtcclxuXHJcbiAgICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgdG9wU3R5bGUgPSAodGhpcy5lbGVtZW50UG9zaXRpb24udG9wICsgc2Nyb2xsWSkgLSAodG9vbHRpcEhlaWdodCArIHRoaXMudG9vbHRpcE9mZnNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxhY2VtZW50ID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICB0b3BTdHlsZSA9ICh0aGlzLmVsZW1lbnRQb3NpdGlvbi50b3AgKyBzY3JvbGxZKSArIGVsZW1lbnRIZWlnaHQgKyB0aGlzLnRvb2x0aXBPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxhY2VtZW50ID09PSAndG9wJyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgIGxlZnRTdHlsZSA9ICh0aGlzLmVsZW1lbnRQb3NpdGlvbi5sZWZ0ICsgZWxlbWVudFdpZHRoIC8gMikgLSB0b29sdGlwV2lkdGggLyAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIGxlZnRTdHlsZSA9IHRoaXMuZWxlbWVudFBvc2l0aW9uLmxlZnQgLSB0b29sdGlwV2lkdGggLSB0aGlzLnRvb2x0aXBPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxhY2VtZW50ID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIGxlZnRTdHlsZSA9IHRoaXMuZWxlbWVudFBvc2l0aW9uLmxlZnQgKyBlbGVtZW50V2lkdGggKyB0aGlzLnRvb2x0aXBPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIHRvcFN0eWxlID0gKHRoaXMuZWxlbWVudFBvc2l0aW9uLnRvcCArIHNjcm9sbFkpICsgZWxlbWVudEhlaWdodCAvIDIgLSB0b29sdGlwLmNsaWVudEhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBJcyB0b29sdGlwIG91dHNpZGUgdGhlIHZpc2libGUgYXJlYSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9QbGFjZW1lbnQgJiYgIWRpc2FibGVBdXRvUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvcEVkZ2UgPSB0b3BTdHlsZTtcclxuICAgICAgICAgICAgY29uc3QgYm90dG9tRWRnZSA9IHRvcFN0eWxlICsgdG9vbHRpcEhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgbGVmdEVkZ2UgPSBsZWZ0U3R5bGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0RWRnZSA9IGxlZnRTdHlsZSArIHRvb2x0aXBXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgYm9keUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIHNjcm9sbFk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHlXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9wRWRnZSA8IDAgfHwgYm90dG9tRWRnZSA+IGJvZHlIZWlnaHQgfHwgbGVmdEVkZ2UgPCAwIHx8IHJpZ2h0RWRnZSA+IGJvZHlXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhvc3RTdHlsZVRvcCA9IHRvcFN0eWxlICsgJ3B4JztcclxuICAgICAgICB0aGlzLmhvc3RTdHlsZUxlZnQgPSBsZWZ0U3R5bGUgKyAncHgnO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFpJbmRleCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zWyd6SW5kZXgnXSAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvc3RTdHlsZVpJbmRleCA9IHRoaXMub3B0aW9uc1snekluZGV4J107XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFBvaW50ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc1sncG9pbnRlckV2ZW50cyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdFN0eWxlUG9pbnRlckV2ZW50cyA9IHRoaXMub3B0aW9uc1sncG9pbnRlckV2ZW50cyddO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXN0b21DbGFzcygpe1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNbJ3Rvb2x0aXBDbGFzcyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1sndG9vbHRpcENsYXNzJ10uc3BsaXQoJyAnKS5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5pbWF0aW9uRHVyYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKE51bWJlcih0aGlzLm9wdGlvbnNbJ2FuaW1hdGlvbkR1cmF0aW9uJ10pICE9IHRoaXMub3B0aW9uc1snYW5pbWF0aW9uRHVyYXRpb25EZWZhdWx0J10pIHtcclxuICAgICAgICAgICAgdGhpcy5ob3N0U3R5bGVUcmFuc2l0aW9uID0gJ29wYWNpdHkgJyArIHRoaXMub3B0aW9uc1snYW5pbWF0aW9uRHVyYXRpb24nXSArICdtcyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFN0eWxlcygpIHtcclxuICAgICAgICB0aGlzLnNldFpJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuc2V0UG9pbnRlckV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbWF0aW9uRHVyYXRpb24oKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0Q2xhc3NTaGFkb3cgPSB0aGlzLm9wdGlvbnNbJ3NoYWRvdyddO1xyXG4gICAgICAgIHRoaXMuaG9zdENsYXNzTGlnaHQgPSB0aGlzLmlzVGhlbWVMaWdodDtcclxuICAgICAgICB0aGlzLmhvc3RTdHlsZU1heFdpZHRoID0gdGhpcy5vcHRpb25zWydtYXhXaWR0aCddICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMuaG9zdFN0eWxlV2lkdGggPSB0aGlzLm9wdGlvbnNbJ3dpZHRoJ10gPyB0aGlzLm9wdGlvbnNbJ3dpZHRoJ10gKyBcInB4XCIgOiAnJztcclxuICAgIH1cclxufVxyXG4iXX0=
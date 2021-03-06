import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class TooltipComponent {
    private elementRef;
    private renderer;
    _show: boolean;
    events: EventEmitter<any>;
    data: any;
    hostStyleTop: string;
    hostStyleLeft: string;
    hostStyleZIndex: number;
    hostStyleTransition: string;
    hostStyleWidth: string;
    hostStyleMaxWidth: string;
    hostStylePointerEvents: string;
    hostClassShow: boolean;
    hostClassShadow: boolean;
    hostClassLight: boolean;
    transitionEnd(event: any): void;
    set show(value: boolean);
    get show(): boolean;
    get placement(): any;
    get autoPlacement(): any;
    get element(): any;
    get elementPosition(): any;
    get options(): any;
    get value(): any;
    get tooltipOffset(): number;
    get isThemeLight(): boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    setPosition(): void;
    setPlacementClass(placement: string): void;
    setHostStyle(placement: string, disableAutoPlacement?: boolean): boolean;
    setZIndex(): void;
    setPointerEvents(): void;
    setCustomClass(): void;
    setAnimationDuration(): void;
    setStyles(): void;
}

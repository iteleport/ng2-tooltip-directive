import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';
import { TooltipOptionsService } from './tooltip-options.service';
export class TooltipModule {
    static forRoot(initOptions) {
        return {
            ngModule: TooltipModule,
            providers: [
                {
                    provide: TooltipOptionsService,
                    useValue: initOptions
                }
            ]
        };
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZzItdG9vbHRpcC1kaXJlY3RpdmUvc3JjL2xpYi90b29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFpQmxFLE1BQU0sT0FBTyxhQUFhO0lBRXRCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBMkI7UUFDdEMsT0FBTztZQUNILFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDUDtvQkFDSSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsV0FBVztpQkFDeEI7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDOzs7WUEzQkosUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNiLGdCQUFnQjtpQkFDbkI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwT3B0aW9ucyB9IGZyb20gJy4vdG9vbHRpcC1vcHRpb25zLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBPcHRpb25zU2VydmljZSB9IGZyb20gJy4vdG9vbHRpcC1vcHRpb25zLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICAgICAgVG9vbHRpcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgVG9vbHRpcERpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIFRvb2x0aXBDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNb2R1bGUge1xyXG5cclxuICAgIHN0YXRpYyBmb3JSb290KGluaXRPcHRpb25zOiBUb29sdGlwT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VG9vbHRpcE1vZHVsZT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBUb29sdGlwTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlOiBUb29sdGlwT3B0aW9uc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlVmFsdWU6IGluaXRPcHRpb25zXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
import {Injectable, ComponentRef, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";

@Injectable()
export class DynamicComponentFactory {

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    create(viewContainerRef: ViewContainerRef, component: any): ComponentRef<any> {
        return viewContainerRef.createComponent(
            this.componentFactoryResolver.resolveComponentFactory(component)
        );
    }
}
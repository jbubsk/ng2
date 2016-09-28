import {Injectable, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Type} from "@angular/core";

@Injectable()
export class DynamicComponentFactory {

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    create<T>(viewContainerRef: ViewContainerRef, component: Type<T>): ComponentRef<T> {
        return viewContainerRef.createComponent<T>(
            this.componentFactoryResolver.resolveComponentFactory<T>(component)
        );
    }
}
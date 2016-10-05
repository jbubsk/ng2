import {Injectable, ViewContainerRef, ComponentFactoryResolver, Injector} from "@angular/core";
import {DynamicComponent} from "../core/dynamicComponent";
import {Subject} from "rxjs";

@Injectable()
export class DynamicComponentFactory {

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    create<T extends DynamicComponent<M>, M>(viewContainerRef: ViewContainerRef, component: any, dependency: M) {
        const componentRef = viewContainerRef.createComponent<T>(
            this.componentFactoryResolver.resolveComponentFactory<T>(component)
        );
        componentRef.instance.dependencySource.next(dependency);
    }
}
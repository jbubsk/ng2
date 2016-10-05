import {Subject} from "rxjs";

export abstract class DynamicComponent<T> {
    dependencySource: Subject<T> = new Subject<T>();

    constructor() {
        this.dependencySource.subscribe(item => {
            this.onDependencyInit(item);
        });
    }

    abstract onDependencyInit(item: T): void
}
import {Component} from '@angular/core';
import {Operation} from "../operation/operation.component";
import {DynamicComponent} from "../core/dynamicComponent";

@Component({
    selector: 'operation-details',
    templateUrl: 'operation-details.template.html',
    styleUrls: ['operation-details.component.css']
})
export class OperationDetails extends DynamicComponent<Operation> {
    operation: Operation;

    onDependencyInit(item: Operation): void {
        this.operation = item;
        console.log(`operation details got operation ${this.operation}`);
    }
}
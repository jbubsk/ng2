import {Component, forwardRef, Inject} from '@angular/core';
import {Operation} from "../operation/operation.component";

@Component({
    selector: 'operation-details',
    templateUrl: 'operation-details.template.html',
    styleUrls: ['operation-details.component.css']
})
export class OperationDetails {

    constructor(@Inject(forwardRef(() => Operation)) private operation: Operation) {
    }
}
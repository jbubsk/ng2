import {Component, EventEmitter, Output, Input} from '@angular/core';
import {IOperation} from "../mocks/mocks.service";

@Component({
    selector: 'operation',
    templateUrl: 'operation.template.html',
    styleUrls: ['operation.component.css']
})
export class OperationComponent {
    @Output() clickEmitter = new EventEmitter();
    @Input() data: IOperation;

    constructor() {
        console.log(this.data);
    }

    showDetails() {
        this.clickEmitter.next(`clicked show details of ${(<any>this.constructor).name}`);
    }
}
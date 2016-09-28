import {Component} from '@angular/core';
import {MocksService, IOperation} from "./mocks/mocks.service";
import {Operation} from "./operation/operation.component";

@Component({
    selector: 'application-entrypoint',
    templateUrl: './app.template.html',
    styleUrls: ['./app.component.css']
})
export class EntryPoint {
    operations: IOperation[];
    currentOperation: Operation;

    constructor(mocksService: MocksService) {
        this.operations = mocksService.getOperations();
    }

    setOpenedOperation(operation: Operation) {
        if (this.currentOperation) {
            this.currentOperation.hideDetails();
        }
        this.currentOperation = operation;
    }
}

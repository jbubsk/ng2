import {Component, Inject} from '@angular/core';
import {MocksService, IOperation} from "./mocks/mocks.service";

@Component({
    selector: 'application-entrypoint',
    templateUrl: './app.template.html',
    styleUrls: ['./app.component.css']
})
export class EntryPoint {
    operations: IOperation[];

    constructor(mocksService: MocksService) {
        this.operations = mocksService.getOperations();
    }

    showDetails(event) {
        console.log(event);
    }
}

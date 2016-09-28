import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'operation-details',
    templateUrl: 'operation-details.template.html',
    styleUrls: ['operation-details.component.css']
})
export class OperationDetailsComponent {
    @Output() clickEmitter = new EventEmitter();

    showDetails() {
        this.clickEmitter.next(`clicked show details of ${this.constructor}`);
    }
}
import {
    Component, EventEmitter, Output, Input, ViewChild, ViewContainerRef, style, state, animate, transition, trigger
} from '@angular/core';
import {IOperation} from "../mocks/mocks.service";
import {OperationDetails} from "../operation-details/operation-details.component";
import {DynamicComponentFactory} from "../service/dynamicComponentFactory.service";

@Component({
    selector: 'operation',
    templateUrl: 'operation.template.html',
    styleUrls: ['operation.component.css'],
    animations: [trigger(
        'detailsAnimation',
        [transition(
            'collapsed <=> expanded', [animate(500, style({height: '250px'})), animate(500)])
        ])],
})
export class Operation {
    @ViewChild('detailsSlot', {read: ViewContainerRef}) detailsSlot: ViewContainerRef;
    @Output() showDetailsEmitter = new EventEmitter();
    @Input() data: IOperation;
    details: string = 'collapsed';
    amount: number;

    constructor(private dynamicComponentFactory: DynamicComponentFactory) {
    }

    showDetails() {
        if (this.detailsSlot.length === 0) {
            this.dynamicComponentFactory.create(this.detailsSlot, OperationDetails);
            this.showDetailsEmitter.next(this);
        }
        this.details = 'expanded';
    }

    hideDetails() {
        this.details = 'collapsed';
        this.detailsSlot.remove();
    }

    ngOnInit() {
        this.amount = this.data.amount;
    }
}
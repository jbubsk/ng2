import {
    Component, EventEmitter, Output, Input, ViewChild, ViewContainerRef,
    ComponentFactoryResolver
} from '@angular/core';
import {IOperation} from "../mocks/mocks.service";
import {OperationDetails} from "../operation-details/operation-details.component";

@Component({
    selector: 'operation',
    templateUrl: 'operation.template.html',
    styleUrls: ['operation.component.css']
})
export class Operation {
    @ViewChild('detailsSlot', {read: ViewContainerRef}) detailsSlot: ViewContainerRef;
    @Output() showDetailsEmitter = new EventEmitter();
    @Input() data: IOperation;
    amount: number;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    showDetails() {
        if (this.detailsSlot.length === 0) {
            const component = this.detailsSlot.createComponent(
                this.componentFactoryResolver.resolveComponentFactory(OperationDetails)
            );
            this.showDetailsEmitter.next(this);
        }
    }

    hideDetails() {
        this.detailsSlot.remove();
    }

    ngOnInit() {
        this.amount = this.data.amount;
    }
}
import {
    Component, EventEmitter, Output, Input, ViewChild, ViewContainerRef, style, state, animate, transition, trigger,
    AnimationTransitionEvent
} from '@angular/core';
import {IOperation} from "../mocks/mocks.service";
import {OperationDetails} from "../operation-details/operation-details.component";
import {DynamicComponentFactory} from "../service/dynamicComponentFactory.service";

@Component({
    selector: 'operation',
    templateUrl: 'operation.template.html',
    styleUrls: ['operation.component.css'],
    animations: [trigger(
        'detailsAnimation', [
            state('collapsed', style({height: 0, overflow: 'hidden'})),
            state('expanded', style({height: '*', overflow: 'hidden'})),
            transition('collapsed <=> expanded', animate(300)),
        ])
    ]
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
        this.details = 'expanded';
        if (this.isntDetailsOpen()) {
            this.dynamicComponentFactory.create(this.detailsSlot, OperationDetails);
            this.showDetailsEmitter.next(this);
        }
    }

    onAnimated(event: AnimationTransitionEvent) {
        // if (event.toState = 'collapsed') {
        //     this.detailsSlot.remove();
        // }
    }

    hideDetails() {
        this.details = 'collapsed';
    }

    ngOnInit() {
        this.amount = this.data.amount;
    }

    private isntDetailsOpen() {
        return this.detailsSlot.length === 0;
    }
}
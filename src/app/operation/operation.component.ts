import {
    Component, EventEmitter, Output, Input, ViewChild, ViewContainerRef, style, state, animate, transition, trigger,
    AnimationTransitionEvent
} from '@angular/core';
import {IOperation} from "../mocks/mocks.service";
import {OperationDetails} from "../operation-details/operation-details.component";
import {DynamicComponentFactory} from "../service/dynamicComponentFactory.service";

const EXPANDED = 'expanded';
const COLLAPSED = 'collapsed';
const VOID = 'void';

@Component({
    selector: 'operation',
    templateUrl: 'operation.template.html',
    styleUrls: ['operation.component.css'],
    animations: [trigger(
        'detailsAnimation', [
            state(COLLAPSED, style({height: 0, overflow: 'hidden'})),
            state(EXPANDED, style({height: '*', overflow: 'hidden'})),
            transition('collapsed <=> expanded', animate(200)),
        ])
    ]
})
export class Operation {
    @ViewChild('detailsSlot', {read: ViewContainerRef}) detailsSlot: ViewContainerRef;
    @Output() showDetailsEmitter = new EventEmitter();
    @Input() data: IOperation;
    detailsState: string = COLLAPSED;
    amount: number;

    constructor(private dynamicComponentFactory: DynamicComponentFactory) {
    }

    triggerDetails() {
        if (this.detailsState === COLLAPSED) {
            this.openDetails();
            this.dynamicComponentFactory.create<OperationDetails, Operation>(this.detailsSlot, OperationDetails, this);
        } else {
            this.hideDetails();
        }
        this.showDetailsEmitter.next(this);
    }

    onAnimated(event: AnimationTransitionEvent) {
        if (this.detailsState === COLLAPSED && event.fromState === EXPANDED) {
            this.detailsSlot.remove();
        }
    }

    ngOnInit() {
        this.amount = this.data.amount;
    }

    hideDetails() {
        this.detailsState = COLLAPSED;
    }

    private openDetails() {
        return this.detailsState = EXPANDED;
    }
}
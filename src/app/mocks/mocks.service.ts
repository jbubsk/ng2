import {Injectable} from "@angular/core";

export interface IOperation {
    title: string;
    amount: number;
}

@Injectable()
export class MocksService {
    getOperations(): IOperation[] {
        const operations: IOperation[] = [];
        for (let i = 0; i < 500; i++) {
            operations.push({
                title: `operation${i}`,
                amount: i,
            });
        }
        return operations;
    }
}
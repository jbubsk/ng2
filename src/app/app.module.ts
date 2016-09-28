import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {EntryPoint} from './app.component';
import {Operation} from "./operation/operation.component";
import {OperationDetails} from "./operation-details/operation-details.component";
import {MocksService} from "./mocks/mocks.service";
import {DynamicComponentFactory} from "./service/dynamicComponentFactory.service";

@NgModule({
    declarations: [
        Operation,
        OperationDetails,
        EntryPoint
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    entryComponents: [OperationDetails],
    providers: [MocksService, DynamicComponentFactory],
    bootstrap: [EntryPoint]
})
export class AppModule {
}

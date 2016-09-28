import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {EntryPoint} from './app.component';
import {OperationComponent} from "./operation/operation.component";
import {OperationDetailsComponent} from "./operation-details/operation-details.component";
import {MocksService} from "./mocks/mocks.service";

@NgModule({
    declarations: [
        OperationComponent,
        OperationDetailsComponent,
        EntryPoint
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [MocksService],
    bootstrap: [EntryPoint]
})
export class AppModule {
}

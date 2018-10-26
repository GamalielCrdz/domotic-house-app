import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { ItemService } from "./services/item.service";
import { ItemsComponent } from "./components/item/items.component";
import { ItemDetailComponent } from "./components/item/item-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { ActionsComponent } from "./components/actions/actions.component";
import { ActionService } from "./services/actions.services";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        LoginComponent,
        ActionsComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService,
        ActionService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

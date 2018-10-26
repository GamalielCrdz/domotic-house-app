import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

//Components
import { ItemsComponent } from "./components/item/items.component";
import { ItemDetailComponent } from "./components/item/item-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { ActionsComponent } from "./components/actions/actions.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "actions", component: ActionsComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
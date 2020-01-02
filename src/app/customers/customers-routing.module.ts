import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/**
 * Own
 */
import { CustomersPage } from "./customers.page";

const routes: Routes = [{
    path: "",
    component: CustomersPage
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CustomersPageRoutingModule {
    constructor() {
        // to do
    }
}

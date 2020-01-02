import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

/**
 * Own
 */
// modules
import { CustomersPageRoutingModule } from "./customers-routing.module";
import { SharedModule } from "@app/components";

// components
import { CustomersPage } from "./customers.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CustomersPageRoutingModule,
        SharedModule
    ],
    declarations: [CustomersPage]
})
export class CustomersPageModule {
    constructor() {
        // to do
    }
}

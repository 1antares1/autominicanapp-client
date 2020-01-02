import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

/**
 * Own
 */
// modules
import { SharedModule } from "@app/components";

// componentes
import { HomePage } from "./home.page";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([{
            path: "",
            component: HomePage
        }]),
        SharedModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
    constructor() {
        // to do
    }
}

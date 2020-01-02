import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/**
 * Own
 */
import { AboutPage } from "./about.page";
const routes: Routes = [{
    path: "",
    component: AboutPage
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AboutPageRoutingModule {
    constructor() {
        // to do
    }
}

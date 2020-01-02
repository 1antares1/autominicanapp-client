import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

/**
 * Own
 */
// modules
import { AboutPageRoutingModule } from "./about-routing.module";
import { SharedModule } from "@app/components";

// components
import { AboutPage } from "./about.page";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutPageRoutingModule,
        SharedModule
    ],
    declarations: [AboutPage]
})
export class AboutPageModule {
  consructor() {
    // to do
  }
}

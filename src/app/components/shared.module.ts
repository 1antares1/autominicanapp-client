import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

/**
 * Own
 */
// components
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { FloatMenuComponent } from "./float-menu/float-menu.component";

@NgModule({
    declarations: [FooterComponent, HeaderComponent, FloatMenuComponent],
    imports: [
        CommonModule
        , RouterModule
        , IonicModule.forRoot()
    ],
    exports: [FooterComponent, HeaderComponent, FloatMenuComponent]
})
export class SharedModule {
    constructor() {
        // to do
    }
}

import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
    selector: "app-float-menu",
    templateUrl: "./float-menu.component.html",
    styleUrls: ["./float-menu.component.scss"]
})
export class FloatMenuComponent {

    // properties
    public openMenu = false;

    constructor(public navCtrl: NavController) {
        // to do
    }

    togglePopupMenu() {
        return this.openMenu = !this.openMenu;
    }
}

import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";

/**
 * Own
 */
import { IComponentSettings } from "../base/component-settings.model";

@Component({
    selector: "app-page-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {

    // properties
    public headerSettings: IComponentSettings;

    constructor(private loadingCtrl: LoadingController) {
        this.headerSettings = {
            entityName: "Página Principal",
            viewName: "Home"
        };
    }

    public ngOnInit() {
        // to do
    }
}

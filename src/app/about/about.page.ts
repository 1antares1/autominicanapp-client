import { Component, OnInit } from "@angular/core";

/**
 * Own
 */
import { IComponentSettings } from "@app/main/base/component-settings.model";

@Component({
    selector: "app-about",
    templateUrl: "./about.page.html",
    styleUrls: ["./about.page.scss"],
})
export class AboutPage implements OnInit {

    public headerSettings: IComponentSettings;

    constructor() {
        this.headerSettings = {
            entityName: "Lista de Clientes",
            viewName: "Customers"
        };
    }

    ngOnInit() {
        // to do
    }
}

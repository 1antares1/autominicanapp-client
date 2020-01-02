import { Component, OnInit, Input } from "@angular/core";
/**
 * Own
 */
import { IComponentSettings } from "@app/main/base/component-settings.model";

@Component({
    selector: "app-customers",
    templateUrl: "./customers.page.html",
    styleUrls: ["./customers.page.scss"],
})
export class CustomersPage implements OnInit {

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

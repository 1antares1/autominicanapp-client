import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

/**
 * Own
 */
import { IComponentSettings } from "@app/main/base/component-settings.model";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    @Input() public parentSettings: IComponentSettings;

    constructor() {
        // to do
    }

    ngOnInit() {
        // to do
    }
}

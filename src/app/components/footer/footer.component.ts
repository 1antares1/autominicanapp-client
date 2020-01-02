import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
    // @ViewChild("IonContent", null) public content: IonContent;
    public segment: string;
    public page: number;

    constructor() {
        // to do
    }

    public ngOnInit() {
        this.onTabSelected("home");
    }

    public onTabSelected(segmentValue: string) {
        this.segment = segmentValue;
        this.page = 1;
        // this.content.scrollToTop();
    }
}

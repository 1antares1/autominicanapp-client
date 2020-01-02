import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html"
})
export class AppComponent {

    // properties
    public componentSettings: Array<any>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.init();
    }

    public init() {
        this.componentSettings = [{
                title: "Ir a Home",
                url: "",
                direct: "root",
                icon: "home"
            },
            {
                title: "Crear cliente",
                url: "/main/customers/create",
                direct: "forward",
                icon: "create"
            },
            {
                title: "Reportes",
                url: "/main/reports",
                direct: "forward",
                icon: "print"
            },
            {
                title: "Acerca de",
                url: "/about",
                direct: "forward",
                icon: "information-circle-outline"
            }
        ];
        if (this.platform.is("cordova")) {
            this.platform.ready().then(() => {
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            });
        }
    }
}

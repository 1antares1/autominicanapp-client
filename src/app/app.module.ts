import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

/**
 * Own
 */
import { environment } from "src/environments/environment";

// modules
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { FloatMenuComponent, NotificationsComponent } from "./components";

import { FeatureModule } from "./common/feature.module";

// providers
import { APP_RESOLVER_PROVIDERS } from "./app.resolver";
import { BootstrapService } from "./bootstrap.service";
import { InternalStateType, AppState } from "./app.service";

interface StoreType {
    state: InternalStateType;
    restoreInputValues: () => void;
    disposeOldHosts: () => void;
}

// application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    StatusBar,
    SplashScreen,
    {
        provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy
    },
    AppState,
    BootstrapService
];

@NgModule({
    declarations: [AppComponent, NotificationsComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        FeatureModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
    entryComponents: [NotificationsComponent],
    providers: [
        environment.ENV_PROVIDERS,
        APP_PROVIDERS
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() {
        // to do
    }
}

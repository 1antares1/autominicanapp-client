import { BehaviorSubject, Observable } from "rxjs/";
import { Router } from "@angular/router";

/**
 * Own
 */
import { IAppBranding } from "../app.branding.model";
import { ILifecycleApp } from "./lifecycle";

export interface ILifecycle {
    app: ILifecycleApp;
    appSubject: BehaviorSubject<ILifecycleApp>;
    branding: IAppBranding;
    brandingSubject: BehaviorSubject<IAppBranding>;
    appIsLoading: boolean;
    taskInProgress: boolean;
    getLifecycleAppSubject(): Observable<ILifecycleApp>;
    getLifecycleBrandSubject(): Observable<IAppBranding>;
    resetAppValues(): ILifecycleApp;
    resetBranding(holding?: boolean): IAppBranding;
    redirectToMain(routerService: Router): void;
}

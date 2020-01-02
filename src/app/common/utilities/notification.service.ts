import { Injectable } from "@angular/core";

/**
 * Own
 */
import { UTIL_SERVICE_TOKEN } from "../tokens";
import { INotificationService } from "./notification.service.model";
import { Progress, Identifier } from "../../shared";

@Injectable({
    providedIn: "root"
})
@Identifier({
    token: UTIL_SERVICE_TOKEN
})
export class NotificationService implements INotificationService {

    constructor() {
        this.onInit();
    }

    public onInit() {
        // to do
    }

    public success(toastSnackProvider: any, message: string, closeTitle?: string) {
        this.toggleSnackBar(Progress.Start, message, closeTitle);
    }

    public error(toastSnackProvider: any, message: string, closeTitle?: string) {
        this.toggleSnackBar(Progress.Start, message, closeTitle);
    }

    public warning(toastSnackProvider: any, message: string, closeTitle?: string) {
        this.toggleSnackBar(Progress.Start, message, closeTitle);
    }

    public info(toastSnackProvider: any, message: string, closeTitle?: string) {
        this.toggleSnackBar(Progress.Start, message, closeTitle);
    }

    public custom(html: string) {
        this.toggleSnackBar(Progress.Start, html);
    }

    public toggleProgressBar(status: Progress): void {
        // to do
    }

    public toggleSnackBar(status: Progress, message: string, action?: string): void {
        // to do
    }
}

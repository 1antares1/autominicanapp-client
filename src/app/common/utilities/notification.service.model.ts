/**
 * Own
 */
import { Progress } from "../../shared/toogles/progress.enum";

export interface INotificationService {
    success(toastSnackProvider: any, message: string, closeTitle?: string): void;
    error(toastSnackProvider: any, message: string, closeTitle?: string): void;
    warning(toastSnackProvider: any, message: string, closeTitle?: string): void;
    info(toastSnackProvider: any, message: string, closeTitle?: string): void;
    custom(html: string): void;
    toggleProgressBar(status: Progress): void;
    toggleSnackBar(status: Progress, message: string, action?: string): void;
}

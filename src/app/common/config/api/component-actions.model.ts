import { Observable } from "rxjs";

export interface IBaseComponentActions {
    do<T, Z>(model: T, handler?: (success: boolean, reason: Z) => void): void;
    cancelOperation<T>(processName: string): Observable<T>;
}

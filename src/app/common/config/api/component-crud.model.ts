import { Observable } from "rxjs";

export interface IBaseComponentCRUD<T> {
    openEntityCreator(additionalData?: T): void;
    removeEntity(model: T): Observable<T>;
    addOrReplaceEntity(model: T): Observable<T>;
}

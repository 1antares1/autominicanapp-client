import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

/**
 * Owns
 */
import { APP_ROUTES } from "./app.routes";

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor() {
        // to do
    }
}

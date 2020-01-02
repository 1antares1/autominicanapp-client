import { Injectable } from "@angular/core";

/**
 * Own
 */
// models
import { IConfigService } from "./config.service.model";
import { Tuple } from "@app/shared";
import { UrlFragment } from "./url";

@Injectable({
    providedIn: "root"
})
export class ConfigService implements IConfigService {

    // base pathnames
    public urlFragments: Tuple<number>[] = [];

    constructor() {
        this.init();
    }

    public getUrlFragment(urlFragmentKey: UrlFragment): Tuple<number> {
        return this.urlFragments.filter((val: Tuple<number>, idx: number, arr: Tuple<number>[]) => {
            if (val.value === urlFragmentKey) {
                return val;
            }
        })[0];
    }

    private init(): void {
        // todo
    }
}

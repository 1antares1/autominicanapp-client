import { Injectable, Injector } from "@angular/core";

/**
 * Own
 */
import * as ProviderTokens from "../tokens";

import { Identifier } from "../../shared/decorators";
import { IFacadeService } from "./facade.service.model";
import { ILifecycle, LifecycleFactory } from "../../lifecycle";
import { IConfigService } from "../config/config.service.model";
import { IDataService } from "../data/data.service.model";
import { IProfileDataService } from "../profile/profile-data.service.model";
import { INotificationService, IUtilService } from "../utilities";

@Injectable()
@Identifier({
    token: ProviderTokens.FACADE_SERVICE_TOKEN
})
export class FacadeService implements IFacadeService {

    private _lifecycle: ILifecycle;
    private _config: IConfigService;
    private _data: IDataService;
    private _profileData: IProfileDataService;
    private _notification: INotificationService;
    private _util: IUtilService;

    public get config(): IConfigService {
        if (!this._config) {
            this._config = this.injector.get(ProviderTokens.CONFIG_SERVICE_TOKEN);
        }
        return this._config;
    }

    public get data(): IDataService {
        if (!this._data) {
            this._data = this.injector.get(ProviderTokens.DATA_SERVICE_TOKEN);
        }
        return this._data;
    }

    public get profileData(): IProfileDataService {
        if (!this._profileData) {
            this._profileData = this.injector.get(ProviderTokens.PROFILE_DATA_SERVICE_TOKEN);
        }
        return this._profileData;
    }

    public get notification(): INotificationService {
        if (!this._notification) {
            this._notification = this.injector.get(ProviderTokens.NOTIFICATION_SERVICE_TOKEN);
        }
        return this._notification;
    }

    public get util(): IUtilService {
        if (!this._util) {
            this._util = this.injector.get(ProviderTokens.UTIL_SERVICE_TOKEN);
        }
        return this._util;
    }

    public get lifecycle(): ILifecycle {
        if (!this._lifecycle) {
            this._lifecycle = (LifecycleFactory) ? this.injector.get(LifecycleFactory) : null;
        }
        return this._lifecycle;
    }

    constructor(private injector: Injector) {
        // to do
    }
}

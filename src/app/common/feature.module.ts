import { ClassProvider, NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * Own
 */
// helpers
import "../shared/helpers/extensions/storage.extension";

// tokens
import * as ProviderTokens from "./tokens";

// providers
import { FacadeService } from "./facade/facade.service";
import { ConfigService } from "./config/config.service";
import { DataService } from "./data/data.service";
import { UtilService } from "./utilities/util.service";
import { NotificationService } from "./utilities/notification.service";
import { ProfileDataService } from "./profile/profile-data.service";

export const COMMON_PROVIDERS: ClassProvider[] = [
    { provide: ProviderTokens.FACADE_SERVICE_TOKEN,                   useClass: FacadeService }
    , { provide: ProviderTokens.CONFIG_SERVICE_TOKEN,                   useClass: ConfigService }
    , { provide: ProviderTokens.DATA_SERVICE_TOKEN,                     useClass: DataService }
    , { provide: ProviderTokens.UTIL_SERVICE_TOKEN,                     useClass: UtilService }
    , { provide: ProviderTokens.NOTIFICATION_SERVICE_TOKEN,             useClass: NotificationService }
    , { provide: ProviderTokens.PROFILE_DATA_SERVICE_TOKEN,             useClass: ProfileDataService }
];

@NgModule({
    imports: [
        CommonModule
    ],
    exports: []
})
export class FeatureModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FeatureModule,
            providers: [...COMMON_PROVIDERS]
        };
    }
}

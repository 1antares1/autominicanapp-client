import { InjectionToken } from "@angular/core";

/**
 * Models
 */
import { IFacadeService, IDataService, IProfileDataService, IConfigService } from "../common";
import { IUtilService, INotificationService } from "./utilities";

/**
 * Tokens
 */
export const CONFIG_SERVICE_TOKEN: InjectionToken<IConfigService> = new InjectionToken<IConfigService>("configService");
export const FACADE_SERVICE_TOKEN: InjectionToken<IFacadeService> = new InjectionToken<IFacadeService>("facadeService");
export const DATA_SERVICE_TOKEN: InjectionToken<IDataService> = new InjectionToken<IDataService>("dataService");
export const PROFILE_DATA_SERVICE_TOKEN: InjectionToken<IProfileDataService> = new InjectionToken<IProfileDataService>("profileDataService");
export const NOTIFICATION_SERVICE_TOKEN: InjectionToken<INotificationService> = new InjectionToken<INotificationService>("notificationService");
export const UTIL_SERVICE_TOKEN: InjectionToken<IUtilService> = new InjectionToken<IUtilService>("utilService");

/**
 * Own
 */
// services
import { IConfigService } from "../config";
import { IDataService } from "../data";
import { ILifecycle } from "src/app/lifecycle";
import { IProfileDataService } from "../profile/profile-data.service.model";
import { INotificationService, IUtilService } from "../utilities";

export interface IFacadeService {
    config: IConfigService;
    data: IDataService;
    profileData: IProfileDataService;
    notification: INotificationService;
    util: IUtilService;
    lifecycle?: ILifecycle;
}

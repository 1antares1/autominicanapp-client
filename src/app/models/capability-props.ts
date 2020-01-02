/**
 * Own
 */
import { ICapabilityAction } from "./enums/capability-action.enum";

export interface ICapabilityProperties {
    id: any;
    displayName: string;
    action: ICapabilityAction;
    title?: string;
    iconId?: string;
    css?: string;
    disabled?: boolean;
    route?: string;
    isModal?: boolean;
}

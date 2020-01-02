/**
 * Own
 */
import { AppScheme } from "./enums";
import { ICapabilityProperties } from "./capability-props";

export interface IAppCapabilities {
    scheme: AppScheme;
    elements: ICapabilityProperties[];
}

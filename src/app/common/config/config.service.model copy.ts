/**
 * Own
 */
import { UrlFragment } from "./url";
import { Tuple } from "@app/shared";

export interface IConfigService {
    getUrlFragment(urlFragmentKey: UrlFragment): Tuple<number>;
}

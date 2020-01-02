/**
 * Own
 */
import { FirebaseConfig } from "firebase.model";

export interface Environment {
    production: boolean;
    ENV_PROVIDERS: any;
    hmr?: boolean;
    showDevModule: boolean;
    firebase?: FirebaseConfig;
}

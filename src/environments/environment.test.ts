// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import "zone.js/dist/long-stack-trace-zone";

/**
 * Own
 */
import { Environment } from "./environment.model";

// test-mode
export const environment: Environment = {
    production: false,
    showDevModule: true,
    hmr: false,
    ENV_PROVIDERS: []
};

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accuracyModeSchema, type AccuracyMode } from "./accuracy-mode.js";
import { cacheModeSchema, type CacheMode } from "./cache-mode.js";
import { deviceInfoSchema, type DeviceInfo } from "./device-info.js";

/**
 * The body contains the the account name and list of devices that you want to locate, plus other
 * options.
 */
export type LocationRequest = {
  /** Account identifier in "##########-#####". */
  accountName: string;
  /** Device list. */
  deviceList: DeviceInfo[];
  /** Accurary, currently only 0-coarse supported. */
  accuracyMode?: AccuracyMode;
  /** Location cache mode. */
  cacheMode?: CacheMode;
};

export const locationRequestSchema: Schema<LocationRequest> = s.object<LocationRequest>({
  accountName: s.string(),
  deviceList: s.array(s.lazy(() => deviceInfoSchema)),
  accuracyMode: s.optional(s.lazy(() => accuracyModeSchema)),
  cacheMode: s.optional(s.lazy(() => cacheModeSchema)),
});

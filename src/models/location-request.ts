import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accuracyModeSchema, type AccuracyMode } from "./accuracy-mode.js";
import { cacheModeSchema, type CacheMode } from "./cache-mode.js";
import { deviceInfoSchema, type DeviceInfo } from "./device-info.js";

export type LocationRequest = {
  accountName: string;
  deviceList: DeviceInfo[];
  accuracyMode?: AccuracyMode;
  cacheMode?: CacheMode;
};

export const locationRequestSchema: Schema<LocationRequest> = s.object<LocationRequest>({
  accountName: s.string(),
  deviceList: s.array(s.lazy(() => deviceInfoSchema)),
  accuracyMode: s.optional(s.lazy(() => accuracyModeSchema)),
  cacheMode: s.optional(s.lazy(() => cacheModeSchema)),
});

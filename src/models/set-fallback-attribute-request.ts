import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type SetFallbackAttributeRequest = {
  devices: DeviceList[];
  accountName: string;
  carrierName?: string;
};

export const setFallbackAttributeRequestSchema: Schema<SetFallbackAttributeRequest> =
  s.object<SetFallbackAttributeRequest>({
    devices: s.array(s.lazy(() => deviceListSchema)),
    accountName: s.string(),
    carrierName: s.optional(s.string()),
  });

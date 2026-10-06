import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Devices to add or remove from existing software upgrade information. */
export type V3AddOrRemoveDeviceRequest = {
  /** Operation either 'append' or 'remove' */
  type: string;
  /** Device IMEI list. */
  deviceList: string[];
};

export const v3AddOrRemoveDeviceRequestSchema: Schema<V3AddOrRemoveDeviceRequest> =
  s.object<V3AddOrRemoveDeviceRequest>({
    type: s.string(),
    deviceList: s.array(s.string()),
    _keysMap: {
      type: "Type",
    },
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Add or remove device to existing software upgrade information. */
export type V2AddOrRemoveDeviceRequest = {
  /** Operation either 'append' or 'remove'. */
  type: string;
  /** Device IMEI list. */
  deviceList: string[];
};

export const v2AddOrRemoveDeviceRequestSchema: Schema<V2AddOrRemoveDeviceRequest> =
  s.object<V2AddOrRemoveDeviceRequest>({
    type: s.string(),
    deviceList: s.array(s.string()),
    _keysMap: {
      type: "Type",
    },
  });

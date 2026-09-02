import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2AddOrRemoveDeviceRequest = {
  type: string;
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

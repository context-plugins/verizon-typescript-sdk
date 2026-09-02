import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3AddOrRemoveDeviceRequest = {
  type: string;
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

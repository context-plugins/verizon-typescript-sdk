import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type ChangeDeviceIdRequest = {
  assignNonGeoMdn?: boolean;
  change4GOption?: string;
  deviceIds: DeviceId[];
  deviceIdsTo?: DeviceId[];
  npaNxx?: string;
  servicePlan?: string;
  zipCode?: string;
  smsrOid?: string;
};

export const changeDeviceIdRequestSchema: Schema<ChangeDeviceIdRequest> = s.object<ChangeDeviceIdRequest>({
  assignNonGeoMdn: s.optional(s.boolean()),
  change4GOption: s.optional(s.string()),
  deviceIds: s.array(s.lazy(() => deviceIdSchema)),
  deviceIdsTo: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  npaNxx: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  zipCode: s.optional(s.string()),
  smsrOid: s.optional(s.string()),
  _keysMap: {
    change4GOption: "change4gOption",
  },
});

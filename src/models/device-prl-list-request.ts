import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type DevicePrlListRequest = {
  deviceIds?: DeviceId[];
  accountName?: string;
  customFields?: CustomFields[];
  groupName?: string;
  servicePlan?: string;
};

export const devicePrlListRequestSchema: Schema<DevicePrlListRequest> = s.object<DevicePrlListRequest>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  accountName: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});

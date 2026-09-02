import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceFilterSchema, type DeviceFilter } from "./device-filter.js";

export type MoveDeviceRequest = {
  accountName: string;
  filter?: DeviceFilter;
  customFields?: CustomFields[];
  devices?: AccountDeviceList[];
  groupName?: string;
  carrierIpPoolName?: string;
  servicePlan?: string;
};

export const moveDeviceRequestSchema: Schema<MoveDeviceRequest> = s.object<MoveDeviceRequest>({
  accountName: s.string(),
  filter: s.optional(s.lazy(() => deviceFilterSchema)),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  groupName: s.optional(s.string()),
  carrierIpPoolName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceFilterSchema, type DeviceFilter } from "./device-filter.js";
import { placeOfUseSchema, type PlaceOfUse } from "./place-of-use.js";

export type GoToStateRequest = {
  serviceName: string;
  stateName: string;
  servicePlan: string;
  mdnZipCode: string;
  devices?: AccountDeviceList[];
  filter?: DeviceFilter;
  carrierIpPoolName?: string;
  publicIpRestriction?: string;
  skuNumber?: string;
  customFields?: CustomFields[];
  devicesWithServiceAddress?: Record<string, unknown>[];
  ipAddress?: string;
  groupName?: string;
  primaryPlaceOfUse?: PlaceOfUse;
};

export const goToStateRequestSchema: Schema<GoToStateRequest> = s.object<GoToStateRequest>({
  serviceName: s.string(),
  stateName: s.string(),
  servicePlan: s.string(),
  mdnZipCode: s.string(),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  filter: s.optional(s.lazy(() => deviceFilterSchema)),
  carrierIpPoolName: s.optional(s.string()),
  publicIpRestriction: s.optional(s.string()),
  skuNumber: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  devicesWithServiceAddress: s.optional(s.array(s.record(s.string(), s.unknown()))),
  ipAddress: s.optional(s.string()),
  groupName: s.optional(s.string()),
  primaryPlaceOfUse: s.optional(s.lazy(() => placeOfUseSchema)),
});

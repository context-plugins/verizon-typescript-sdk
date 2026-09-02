import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListFilterSchema, type AccountDeviceListFilter } from "./account-device-list-filter.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type AccountDeviceListRequest = {
  accountName?: string;
  deviceId?: DeviceId;
  filter?: AccountDeviceListFilter;
  currentState?: string;
  customFields?: CustomFields[];
  earliest?: string;
  groupName?: string;
  latest?: string;
  servicePlan?: string;
  maxNumberOfDevices?: number;
  largestDeviceIdSeen?: number;
};

export const accountDeviceListRequestSchema: Schema<AccountDeviceListRequest> =
  s.object<AccountDeviceListRequest>({
    accountName: s.optional(s.string()),
    deviceId: s.optional(s.lazy(() => deviceIdSchema)),
    filter: s.optional(s.lazy(() => accountDeviceListFilterSchema)),
    currentState: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    earliest: s.optional(s.string()),
    groupName: s.optional(s.string()),
    latest: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
    maxNumberOfDevices: s.optional(s.number()),
    largestDeviceIdSeen: s.optional(s.number()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type DeviceCostCenterRequest = {
  accountName?: string;
  costCenter?: string;
  customFields?: CustomFields[];
  devices?: AccountDeviceList[];
  groupName?: string;
  primaryPlaceOfUse?: Record<string, unknown>;
  removeCostCenter?: boolean;
  servicePlan?: string;
};

export const deviceCostCenterRequestSchema: Schema<DeviceCostCenterRequest> =
  s.object<DeviceCostCenterRequest>({
    accountName: s.optional(s.string()),
    costCenter: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
    groupName: s.optional(s.string()),
    primaryPlaceOfUse: s.optional(s.record(s.string(), s.unknown())),
    removeCostCenter: s.optional(s.boolean()),
    servicePlan: s.optional(s.string()),
  });

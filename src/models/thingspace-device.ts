import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierInformationSchema, type CarrierInformation } from "./carrier-information.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type ThingspaceDevice = {
  accountName?: string;
  billingCycleEndDate?: string;
  carrierInformations?: CarrierInformation[];
  connected?: boolean;
  createdAt?: string;
  customFields?: CustomFields[];
  deviceIds?: DeviceId[];
  extendedAttributes?: CustomFields[];
  groupNames?: (string | null)[];
  ipAddress?: string;
  lastActivationBy?: string;
  lastActivationDate?: string;
  lastConnectionDate?: string;
};

export const thingspaceDeviceSchema: Schema<ThingspaceDevice> = s.object<ThingspaceDevice>({
  accountName: s.optional(s.string()),
  billingCycleEndDate: s.optional(s.string()),
  carrierInformations: s.optional(s.array(s.lazy(() => carrierInformationSchema))),
  connected: s.optional(s.boolean()),
  createdAt: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  groupNames: s.optional(s.array(s.nullable(s.string()))),
  ipAddress: s.optional(s.string()),
  lastActivationBy: s.optional(s.string()),
  lastActivationDate: s.optional(s.string()),
  lastConnectionDate: s.optional(s.string()),
});

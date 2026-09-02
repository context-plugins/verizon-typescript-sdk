import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gbiCarrierInformation5Schema, type GbiCarrierInformation5 } from "./gbi-carrier-information5.js";
import { groupNameSchema, type GroupName } from "./group-name.js";
import { customFieldSchema, type CustomField } from "./unions/custom-field.js";
import { deviceId11Schema, type DeviceId11 } from "./unions/device-id11.js";
import { extendedAttribute1Schema, type ExtendedAttribute1 } from "./unions/extended-attribute1.js";

export type GbiaccountNameobject5 = {
  accountName?: string;
  billingCycleEndDate?: string;
  carrierInformation?: GbiCarrierInformation5[];
  connected?: boolean;
  createdAt?: string;
  customFields?: CustomField[];
  deviceIds?: DeviceId11[];
  extendedAttributes?: ExtendedAttribute1[];
  groupNames?: GroupName[];
  ipAddress?: string;
  lastActivationBy?: string;
  lastActivationDate?: string;
};

export const gbiaccountNameobject5Schema: Schema<GbiaccountNameobject5> = s.object<GbiaccountNameobject5>({
  accountName: s.optional(s.string()),
  billingCycleEndDate: s.optional(s.string()),
  carrierInformation: s.optional(s.array(s.lazy(() => gbiCarrierInformation5Schema))),
  connected: s.optional(s.boolean()),
  createdAt: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldSchema))),
  deviceIds: s.optional(s.array(s.lazy(() => deviceId11Schema))),
  extendedAttributes: s.optional(s.array(s.lazy(() => extendedAttribute1Schema))),
  groupNames: s.optional(s.array(s.lazy(() => groupNameSchema))),
  ipAddress: s.optional(s.string()),
  lastActivationBy: s.optional(s.string()),
  lastActivationDate: s.optional(s.string()),
});

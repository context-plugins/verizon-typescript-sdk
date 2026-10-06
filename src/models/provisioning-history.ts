import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** The provisioning history of a specified device during a specified time period. */
export type ProvisioningHistory = {
  /** The date and time when the provisioning event occured. */
  occurredAt?: string;
  /** The success or failure of the provisioning event. */
  status?: string;
  /** The user who performed the provisioning event. */
  eventBy?: string;
  /** The provisioning action:Activate,Suspend,Restore,Deactivate,Device Move. */
  eventType?: string;
  /** The MDN assigned to the device after the provisioning event. */
  mdn?: string;
  /** The MSISDN assigned to the device after the provisioning event. */
  msisdn?: string;
  /** The service plan of the device after the provisioning event occurred. */
  servicePlan?: string;
  /** Any extended attributes for the event, as Key and Value pairs. */
  extendedAttributes?: CustomFields[];
};

export const provisioningHistorySchema: Schema<ProvisioningHistory> = s.object<ProvisioningHistory>({
  occurredAt: s.optional(s.string()),
  status: s.optional(s.string()),
  eventBy: s.optional(s.string()),
  eventType: s.optional(s.string()),
  mdn: s.optional(s.string()),
  msisdn: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
});

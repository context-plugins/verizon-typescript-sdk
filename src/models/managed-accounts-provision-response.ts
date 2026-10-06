import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ServiceName, serviceNameSchema } from "./service-name.js";

export type ManagedAccountsProvisionResponse = {
  /** Transaction identifier */
  txid?: string;
  /** Account identifier */
  accountName?: string;
  /** Primary Account identifier */
  paccountName?: string;
  /** Service name @default ServiceName.Location */
  serviceName?: ServiceName;
  /** Provision status. Success or Fail */
  status?: string;
  /** Detailed reason */
  reason?: string;
};

export const managedAccountsProvisionResponseSchema: Schema<ManagedAccountsProvisionResponse> =
  s.object<ManagedAccountsProvisionResponse>({
    txid: s.optional(s.string()),
    accountName: s.optional(s.string()),
    paccountName: s.optional(s.string()),
    serviceName: s.defaulted(serviceNameSchema, ServiceName.Location),
    status: s.optional(s.string()),
    reason: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ServiceName, serviceNameSchema } from "./service-name.js";

export type ManagedAccountCancelResponse = {
  /** Transaction identifier */
  txid: string;
  /** Managed account identifier */
  accountName: string;
  /** Primary account identifier */
  paccountName: string;
  /** Service name @default ServiceName.Location */
  serviceName?: ServiceName;
  /** Deactivate/cancel status, Success or Fail */
  status: string;
  /** Detailed reason */
  reason: string;
};

export const managedAccountCancelResponseSchema: Schema<ManagedAccountCancelResponse> =
  s.object<ManagedAccountCancelResponse>({
    txid: s.string(),
    accountName: s.string(),
    paccountName: s.string(),
    serviceName: s.defaulted(serviceNameSchema, ServiceName.Location),
    status: s.string(),
    reason: s.string(),
  });

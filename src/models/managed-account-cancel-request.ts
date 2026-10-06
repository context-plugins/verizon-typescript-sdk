import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ServiceName, serviceNameSchema } from "./service-name.js";

export type ManagedAccountCancelRequest = {
  /** Managed account identifier */
  accountName: string;
  /** Primary Account identifier */
  paccountName: string;
  /** Service name @default ServiceName.Location */
  serviceName?: ServiceName;
  /** SKU name */
  type: string;
  /** Transaction identifier returned by provision request */
  txid: string;
};

export const managedAccountCancelRequestSchema: Schema<ManagedAccountCancelRequest> =
  s.object<ManagedAccountCancelRequest>({
    accountName: s.string(),
    paccountName: s.string(),
    serviceName: s.defaulted(serviceNameSchema, ServiceName.Location),
    type: s.string(),
    txid: s.string(),
  });

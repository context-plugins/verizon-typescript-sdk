import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type ManagedAccountCancelRequest = {
  accountName: string;
  paccountName: string;
  serviceName: ServiceName;
  type: string;
  txid: string;
};

export const managedAccountCancelRequestSchema: Schema<ManagedAccountCancelRequest> =
  s.object<ManagedAccountCancelRequest>({
    accountName: s.string(),
    paccountName: s.string(),
    serviceName: serviceNameSchema,
    type: s.string(),
    txid: s.string(),
  });

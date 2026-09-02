import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type ManagedAccountCancelResponse = {
  txid: string;
  accountName: string;
  paccountName: string;
  serviceName: ServiceName;
  status: string;
  reason: string;
};

export const managedAccountCancelResponseSchema: Schema<ManagedAccountCancelResponse> =
  s.object<ManagedAccountCancelResponse>({
    txid: s.string(),
    accountName: s.string(),
    paccountName: s.string(),
    serviceName: serviceNameSchema,
    status: s.string(),
    reason: s.string(),
  });

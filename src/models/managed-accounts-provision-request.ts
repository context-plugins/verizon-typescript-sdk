import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type ManagedAccountsProvisionRequest = {
  accountName: string;
  paccountName: string;
  serviceName: ServiceName;
  type: string;
  txid: string;
};

export const managedAccountsProvisionRequestSchema: Schema<ManagedAccountsProvisionRequest> =
  s.object<ManagedAccountsProvisionRequest>({
    accountName: s.string(),
    paccountName: s.string(),
    serviceName: serviceNameSchema,
    type: s.string(),
    txid: s.string(),
  });

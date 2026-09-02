import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type ManagedAccountsProvisionResponse = {
  txid?: string;
  accountName?: string;
  paccountName?: string;
  serviceName?: ServiceName;
  status?: string;
  reason?: string;
};

export const managedAccountsProvisionResponseSchema: Schema<ManagedAccountsProvisionResponse> =
  s.object<ManagedAccountsProvisionResponse>({
    txid: s.optional(s.string()),
    accountName: s.optional(s.string()),
    paccountName: s.optional(s.string()),
    serviceName: s.optional(s.lazy(() => serviceNameSchema)),
    status: s.optional(s.string()),
    reason: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type ManagedAccountsAddRequest = {
  accountName: string;
  serviceName: ServiceName;
  type: string;
  managedAccList: string[];
};

export const managedAccountsAddRequestSchema: Schema<ManagedAccountsAddRequest> =
  s.object<ManagedAccountsAddRequest>({
    accountName: s.string(),
    serviceName: serviceNameSchema,
    type: s.string(),
    managedAccList: s.array(s.string()),
  });

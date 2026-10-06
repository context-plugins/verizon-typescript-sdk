import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ServiceName, serviceNameSchema } from "./service-name.js";

export type ManagedAccountsAddRequest = {
  /** Account identifier */
  accountName: string;
  /** Service name @default ServiceName.Location */
  serviceName?: ServiceName;
  /** SKU name */
  type: string;
  /** managed account list */
  managedAccList: string[];
};

export const managedAccountsAddRequestSchema: Schema<ManagedAccountsAddRequest> =
  s.object<ManagedAccountsAddRequest>({
    accountName: s.string(),
    serviceName: s.defaulted(serviceNameSchema, ServiceName.Location),
    type: s.string(),
    managedAccList: s.array(s.string()),
  });

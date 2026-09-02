import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateIoTApplicationRequest = {
  appName?: string;
  billingAccountId?: string;
  clientId?: string;
  clientSecret?: string;
  emailIDs?: string;
  resourcegroup?: string;
  sampleIoTcApp?: string;
  subscriptionId?: string;
  tenantId?: string;
};

export const createIoTApplicationRequestSchema: Schema<CreateIoTApplicationRequest> =
  s.object<CreateIoTApplicationRequest>({
    appName: s.optional(s.string()),
    billingAccountId: s.optional(s.string()),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    emailIDs: s.optional(s.string()),
    resourcegroup: s.optional(s.string()),
    sampleIoTcApp: s.optional(s.string()),
    subscriptionId: s.optional(s.string()),
    tenantId: s.optional(s.string()),
    _keysMap: {
      billingAccountId: "billingAccountID",
      clientId: "clientID",
      sampleIoTcApp: "sampleIOTcApp",
      subscriptionId: "subscriptionID",
      tenantId: "tenantID",
    },
  });

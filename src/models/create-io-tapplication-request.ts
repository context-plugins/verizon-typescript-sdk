import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The request body must include the UUID of the subscription that you want to update plus any
 * properties that you want to change.
 */
export type CreateIoTApplicationRequest = {
  /** A user defined name for the application being deployed in Azure IoT Central. */
  appName?: string;
  /** The ThingSpace ID of the authenticating billing account */
  billingAccountId?: string;
  /** The Azure ClientID of the associated Azure target account */
  clientId?: string;
  /** The Azure Client Secret of the associated Azure target account */
  clientSecret?: string;
  /** The “email IDs” to be added to/sent to with this API. */
  emailIDs?: string;
  /** The Azure Resource group of the associated Azure target account */
  resourcegroup?: string;
  /** This is the reference Azure IoT Central application developed by Verizon. */
  sampleIoTcApp?: string;
  /** The Azure Subscription ID of the associated Azure target account */
  subscriptionId?: string;
  /** The Azure Tenant ID of the associated Azure target account */
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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

export type RemoveDeviceRequest = {
  accountidentifier: AccountIdentifier;
  resourceidentifier: ResourceIdentifier;
};

export const removeDeviceRequestSchema: Schema<RemoveDeviceRequest> = s.object<RemoveDeviceRequest>({
  accountidentifier: accountIdentifierSchema,
  resourceidentifier: resourceIdentifierSchema,
});

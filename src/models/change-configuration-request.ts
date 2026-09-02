import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { configurationSchema, type Configuration } from "./configuration.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

export type ChangeConfigurationRequest = {
  accountidentifier?: AccountIdentifier;
  resourceidentifier?: ResourceIdentifier;
  configuration?: Configuration;
};

export const changeConfigurationRequestSchema: Schema<ChangeConfigurationRequest> =
  s.object<ChangeConfigurationRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
    resourceidentifier: s.optional(s.lazy(() => resourceIdentifierSchema)),
    configuration: s.optional(s.lazy(() => configurationSchema)),
  });

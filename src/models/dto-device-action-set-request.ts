import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceActionSetConfigurationSchema,
  type DtoDeviceActionSetConfiguration,
} from "./dto-device-action-set-configuration.js";
import {
  dtoDeviceResourceIdentifierSchema,
  type DtoDeviceResourceIdentifier,
} from "./dto-device-resource-identifier.js";

export type DtoDeviceActionSetRequest = {
  accountname?: string;
  configuration?: DtoDeviceActionSetConfiguration;
  resourceidentifier?: DtoDeviceResourceIdentifier;
};

export const dtoDeviceActionSetRequestSchema: Schema<DtoDeviceActionSetRequest> =
  s.object<DtoDeviceActionSetRequest>({
    accountname: s.optional(s.string()),
    configuration: s.optional(s.lazy(() => dtoDeviceActionSetConfigurationSchema)),
    resourceidentifier: s.optional(s.lazy(() => dtoDeviceResourceIdentifierSchema)),
  });

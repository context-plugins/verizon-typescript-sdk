import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoDeviceConfigSchema, type DtoDeviceConfig } from "./dto-device-config.js";

export type DtoDeviceActionSetConfiguration = {
  deviceConfig?: DtoDeviceConfig;
};

export const dtoDeviceActionSetConfigurationSchema: Schema<DtoDeviceActionSetConfiguration> =
  s.object<DtoDeviceActionSetConfiguration>({
    deviceConfig: s.optional(s.lazy(() => dtoDeviceConfigSchema)),
  });

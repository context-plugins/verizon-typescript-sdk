import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceActionSetConfigurationSchema,
  type DtoDeviceActionSetConfiguration,
} from "./dto-device-action-set-configuration.js";

export type ActionResultwithDeviceConfig = {
  createdon?: Date;
  description?: string;
  deviceid?: string;
  errmsg?: string;
  fields?: DtoDeviceActionSetConfiguration;
  foreignid?: string;
  id?: string;
  lastupdated?: Date;
  state?: string;
  transactionid?: string;
  version?: string;
  versionid?: string;
};

export const actionResultwithDeviceConfigSchema: Schema<ActionResultwithDeviceConfig> =
  s.object<ActionResultwithDeviceConfig>({
    createdon: s.optional(s.dateTime()),
    description: s.optional(s.string()),
    deviceid: s.optional(s.string()),
    errmsg: s.optional(s.string()),
    fields: s.optional(s.lazy(() => dtoDeviceActionSetConfigurationSchema)),
    foreignid: s.optional(s.string()),
    id: s.optional(s.string()),
    lastupdated: s.optional(s.dateTime()),
    state: s.optional(s.string()),
    transactionid: s.optional(s.string()),
    version: s.optional(s.string()),
    versionid: s.optional(s.string()),
  });

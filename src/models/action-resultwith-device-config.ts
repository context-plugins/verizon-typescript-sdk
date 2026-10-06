import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  dtoDeviceActionSetConfigurationSchema,
  type DtoDeviceActionSetConfiguration,
} from "./dto-device-action-set-configuration.js";

export type ActionResultwithDeviceConfig = {
  /** Timestamp of the record */
  createdon?: Date;
  description?: string;
  /** This is a UUID value of the device created when the device is onboarded */
  deviceid?: string;
  /** Error message */
  errmsg?: string;
  fields?: DtoDeviceActionSetConfiguration;
  /** UUID of the ECPD account the user belongs to */
  foreignid?: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** Timestamp of the record */
  lastupdated?: Date;
  /** The current status of the device or transaction and will be `success` or `failed` */
  state?: string;
  /** The system-generated UUID of the transaction */
  transactionid?: string;
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
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

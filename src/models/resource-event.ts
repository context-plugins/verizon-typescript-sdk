import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFieldsSchema, type DtoFields } from "./dto-fields.js";

export type ResourceEvent = {
  /** Not used in this release, future functionality */
  accountclientid?: string;
  /** The URL of the callback listener */
  callbackurl?: string;
  /** Timestamp of the record */
  createdon: Date;
  /** a short description */
  description?: string;
  /** This is a UUID value of the device created when the device is onboarded */
  deviceid?: string;
  /** Error message */
  errmsg?: string;
  fieldid: string;
  /** Fields to return needed by search */
  fields?: DtoFields;
  fieldvalue?: number[];
  /** UUID of the ECPD account the user belongs to */
  foreignid: string;
  /** UUID of the user record, assigned at creation */
  id?: string;
  /** Timestamp of the record */
  lastupdated: Date;
  /** The model ID of the device */
  modelid?: string;
  /** User defined name of the record */
  name?: string;
  /** A flag to indicate if sensor data is to be aggregated (true) or not */
  sensordataaggregation?: boolean;
  /** The current status of the device or transaction and will be `success` or `failed` */
  state: string;
  /** The system-generated UUID of the transaction */
  transactionid?: string;
  /** The resource version */
  version?: string;
  /** The UUID of the resource version */
  versionid: string;
};

export const resourceEventSchema: Schema<ResourceEvent> = s.object<ResourceEvent>({
  accountclientid: s.optional(s.string()),
  callbackurl: s.optional(s.string()),
  createdon: s.dateTime(),
  description: s.optional(s.string()),
  deviceid: s.optional(s.string()),
  errmsg: s.optional(s.string()),
  fieldid: s.string(),
  fields: s.optional(s.lazy(() => dtoFieldsSchema)),
  fieldvalue: s.optional(s.array(s.int())),
  foreignid: s.string(),
  id: s.optional(s.string()),
  lastupdated: s.dateTime(),
  modelid: s.optional(s.string()),
  name: s.optional(s.string()),
  sensordataaggregation: s.optional(s.boolean()),
  state: s.string(),
  transactionid: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.string(),
});

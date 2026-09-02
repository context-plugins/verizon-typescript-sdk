import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFieldsSchema, type DtoFields } from "./dto-fields.js";

export type ResourceEvent = {
  accountclientid?: string;
  callbackurl?: string;
  createdon: Date;
  description?: string;
  deviceid?: string;
  errmsg?: string;
  fieldid: string;
  fields?: DtoFields;
  fieldvalue?: number[];
  foreignid: string;
  id?: string;
  lastupdated: Date;
  modelid?: string;
  name?: string;
  sensordataaggregation?: boolean;
  state: string;
  transactionid?: string;
  version?: string;
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
  fieldvalue: s.optional(s.array(s.number())),
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

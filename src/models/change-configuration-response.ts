import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldsSchema, type Fields } from "./fields.js";

export type ChangeConfigurationResponse = {
  action?: string;
  createdon?: string;
  deviceid?: string;
  fields?: Fields;
  foreignid?: string;
  id?: string;
  kind?: string;
  lastupdated?: string;
  name?: string;
  state?: string;
  transactionid?: string;
  version?: string;
};

export const changeConfigurationResponseSchema: Schema<ChangeConfigurationResponse> =
  s.object<ChangeConfigurationResponse>({
    action: s.optional(s.string()),
    createdon: s.optional(s.string()),
    deviceid: s.optional(s.string()),
    fields: s.optional(s.lazy(() => fieldsSchema)),
    foreignid: s.optional(s.string()),
    id: s.optional(s.string()),
    kind: s.optional(s.string()),
    lastupdated: s.optional(s.string()),
    name: s.optional(s.string()),
    state: s.optional(s.string()),
    transactionid: s.optional(s.string()),
    version: s.optional(s.string()),
  });

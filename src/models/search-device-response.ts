import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fields2Schema, type Fields2 } from "./fields2.js";

export type SearchDeviceResponse = {
  action?: string;
  createdon?: string;
  deviceid?: string;
  fields?: Fields2;
  id?: string;
  kind?: string;
  lastupdated?: string;
  name?: string;
  state?: string;
  tagids?: string[];
  transactionid?: string;
  version?: string;
  versionid?: string;
};

export const searchDeviceResponseSchema: Schema<SearchDeviceResponse> = s.object<SearchDeviceResponse>({
  action: s.optional(s.string()),
  createdon: s.optional(s.string()),
  deviceid: s.optional(s.string()),
  fields: s.optional(s.lazy(() => fields2Schema)),
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
  lastupdated: s.optional(s.string()),
  name: s.optional(s.string()),
  state: s.optional(s.string()),
  tagids: s.optional(s.array(s.string())),
  transactionid: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.optional(s.string()),
});

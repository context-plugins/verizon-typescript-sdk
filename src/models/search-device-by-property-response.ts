import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fields1Schema, type Fields1 } from "./fields1.js";

export type SearchDeviceByPropertyResponse = {
  billingaccountid?: string;
  createdon?: string;
  eventretention?: string;
  fields?: Fields1;
  iccid?: string;
  id?: string;
  imei?: string;
  kind?: string;
  lastupdated?: string;
  providerid?: string;
  refid?: string;
  refidtype?: string;
  state?: string;
  version?: string;
  versionid?: string;
};

export const searchDeviceByPropertyResponseSchema: Schema<SearchDeviceByPropertyResponse> =
  s.object<SearchDeviceByPropertyResponse>({
    billingaccountid: s.optional(s.string()),
    createdon: s.optional(s.string()),
    eventretention: s.optional(s.string()),
    fields: s.optional(s.lazy(() => fields1Schema)),
    iccid: s.optional(s.string()),
    id: s.optional(s.string()),
    imei: s.optional(s.string()),
    kind: s.optional(s.string()),
    lastupdated: s.optional(s.string()),
    providerid: s.optional(s.string()),
    refid: s.optional(s.string()),
    refidtype: s.optional(s.string()),
    state: s.optional(s.string()),
    version: s.optional(s.string()),
    versionid: s.optional(s.string()),
  });

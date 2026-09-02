import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FindDeviceByPropertyResponse = {
  billingaccountid?: string;
  createdon?: string;
  eventretention?: string;
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

export const findDeviceByPropertyResponseSchema: Schema<FindDeviceByPropertyResponse> =
  s.object<FindDeviceByPropertyResponse>({
    billingaccountid: s.optional(s.string()),
    createdon: s.optional(s.string()),
    eventretention: s.optional(s.string()),
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

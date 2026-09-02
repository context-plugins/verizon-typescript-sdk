import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoProfileResponse = {
  id?: string;
  kind?: string;
  version?: string;
  versionid?: string;
  createdon?: Date;
  lastupdated?: Date;
  name?: string;
  foreignid?: string;
  billingaccountid?: string;
  modelid?: string;
  configuration?: Record<string, unknown>;
};

export const dtoProfileResponseSchema: Schema<DtoProfileResponse> = s.object<DtoProfileResponse>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.optional(s.string()),
  createdon: s.optional(s.dateTime()),
  lastupdated: s.optional(s.dateTime()),
  name: s.optional(s.string()),
  foreignid: s.optional(s.string()),
  billingaccountid: s.optional(s.string()),
  modelid: s.optional(s.string()),
  configuration: s.optional(s.record(s.string(), s.unknown())),
});

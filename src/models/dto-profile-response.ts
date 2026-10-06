import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoProfileResponse = {
  id?: string;
  /** the user defined profile kind */
  kind?: string;
  /** The resource version */
  version?: string;
  versionid?: string;
  /** Timestamp of the record */
  createdon?: Date;
  /** Timestamp of the record */
  lastupdated?: Date;
  /** user defined profile name */
  name?: string;
  /** UUID of the ECPD account the user belongs to */
  foreignid?: string;
  /** The billing account ID. This is the same value as the Account ID */
  billingaccountid?: string;
  /** device model id */
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

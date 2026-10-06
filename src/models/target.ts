import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Target resource definition. */
export type Target = {
  /** The endpoint for data streams. */
  address?: string;
  /** The transport format. */
  addressscheme?: string;
  /** The billing account ID. */
  billingaccountid?: string;
  /** The date the resource was created. */
  createdon?: string;
  /** Security identification string. */
  externalid?: string;
  /** ThingSpace unique ID for the target that was created. */
  id?: string;
  /** Identifies the resource kind. Targets are ts.target. */
  kind?: string;
  /** The date the resource was last updated. */
  lastupdated?: string;
  /** Name of the target. */
  name?: string;
  /** AWS region value. */
  region?: string;
  /** Version of the underlying schema resource. */
  version?: string;
  /** The version of the resource. */
  versionid?: string;
  /** Description of the target. */
  description?: string;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  address: s.optional(s.string()),
  addressscheme: s.optional(s.string()),
  billingaccountid: s.optional(s.string()),
  createdon: s.optional(s.string()),
  externalid: s.optional(s.string()),
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
  lastupdated: s.optional(s.string()),
  name: s.optional(s.string()),
  region: s.optional(s.string()),
  version: s.optional(s.string()),
  versionid: s.optional(s.string()),
  description: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoProfile = {
  kind?: string;
  version?: string;
  modelid?: string;
  name?: string;
  configuration?: Record<string, unknown>;
};

export const dtoProfileSchema: Schema<DtoProfile> = s.object<DtoProfile>({
  kind: s.optional(s.string()),
  version: s.optional(s.string()),
  modelid: s.optional(s.string()),
  name: s.optional(s.string()),
  configuration: s.optional(s.record(s.string(), s.unknown())),
});

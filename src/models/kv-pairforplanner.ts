import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KvPairforplanner = {
  key?: string;
  value?: string;
};

export const kvPairforplannerSchema: Schema<KvPairforplanner> = s.object<KvPairforplanner>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});

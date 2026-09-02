import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KvPair = {
  key?: string;
  value?: string;
};

export const kvPairSchema: Schema<KvPair> = s.object<KvPair>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});

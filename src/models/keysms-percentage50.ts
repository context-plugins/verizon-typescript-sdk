import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeysmsPercentage50 = {
  key?: string;
  value?: boolean;
};

export const keysmsPercentage50Schema: Schema<KeysmsPercentage50> = s.object<KeysmsPercentage50>({
  key: s.optional(s.string()),
  value: s.optional(s.boolean()),
});

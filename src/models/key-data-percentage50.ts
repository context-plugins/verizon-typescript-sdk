import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeyDataPercentage50 = {
  key?: string;
  value?: boolean;
};

export const keyDataPercentage50Schema: Schema<KeyDataPercentage50> = s.object<KeyDataPercentage50>({
  key: s.optional(s.string()),
  value: s.optional(s.boolean()),
});

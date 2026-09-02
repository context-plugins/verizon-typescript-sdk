import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbikeyValue15 = {
  key?: string;
  value?: string;
};

export const gbikeyValue15Schema: Schema<GbikeyValue15> = s.object<GbikeyValue15>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});

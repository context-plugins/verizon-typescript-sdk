import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EnablePromoExp = {
  key?: string;
  value?: boolean;
};

export const enablePromoExpSchema: Schema<EnablePromoExp> = s.object<EnablePromoExp>({
  key: s.optional(s.string()),
  value: s.optional(s.boolean()),
});

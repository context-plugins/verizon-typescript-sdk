import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EnablePromoExp1 = {
  enablePromoExp?: boolean;
};

export const enablePromoExp1Schema: Schema<EnablePromoExp1> = s.object<EnablePromoExp1>({
  enablePromoExp: s.optional(s.boolean()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NoOfDaysB4PromoExp = {
  key?: string;
  value?: number;
};

export const noOfDaysB4PromoExpSchema: Schema<NoOfDaysB4PromoExp> = s.object<NoOfDaysB4PromoExp>({
  key: s.optional(s.string()),
  value: s.optional(s.number()),
});

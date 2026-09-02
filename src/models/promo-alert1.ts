import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keyschunk2Schema, type Keyschunk2 } from "./keyschunk2.js";

export type PromoAlert1 = {
  filterCriteria?: Record<string, unknown>[];
  condition?: Keyschunk2[];
  enablePromoExp?: boolean;
};

export const promoAlert1Schema: Schema<PromoAlert1> = s.object<PromoAlert1>({
  filterCriteria: s.optional(s.array(s.record(s.string(), s.unknown()))),
  condition: s.optional(s.array(s.lazy(() => keyschunk2Schema))),
  enablePromoExp: s.optional(s.boolean()),
});

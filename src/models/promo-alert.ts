import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keyschunk2Schema, type Keyschunk2 } from "./keyschunk2.js";
import { readySimServicePlanSchema, type ReadySimServicePlan } from "./ready-sim-service-plan.js";

export type PromoAlert = {
  filterCriteria?: ReadySimServicePlan[];
  condition?: Keyschunk2[];
  enablePromoExp?: boolean;
};

export const promoAlertSchema: Schema<PromoAlert> = s.object<PromoAlert>({
  filterCriteria: s.optional(s.array(s.lazy(() => readySimServicePlanSchema))),
  condition: s.optional(s.array(s.lazy(() => keyschunk2Schema))),
  enablePromoExp: s.optional(s.boolean()),
});

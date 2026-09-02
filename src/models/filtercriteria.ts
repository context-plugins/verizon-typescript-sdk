import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { readySimServicePlanSchema, type ReadySimServicePlan } from "./ready-sim-service-plan.js";

export type Filtercriteria = {
  filterCriteria?: ReadySimServicePlan[];
};

export const filtercriteriaSchema: Schema<Filtercriteria> = s.object<Filtercriteria>({
  filterCriteria: s.optional(s.array(s.lazy(() => readySimServicePlanSchema))),
});

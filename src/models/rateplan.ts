import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ratePlanGroupSchema, type RatePlanGroup } from "./unions/rate-plan-group.js";

export type Rateplan = {
  ratePlanGroup?: RatePlanGroup[];
};

export const rateplanSchema: Schema<Rateplan> = s.object<Rateplan>({
  ratePlanGroup: s.optional(s.array(s.lazy(() => ratePlanGroupSchema))),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rateplantype2Schema, type Rateplantype2 } from "./rateplantype2.js";

export type RateplantypeObject = {
  ratePlanGroupDescription?: string;
  ratePlanType?: string;
  ratePlan?: Rateplantype2[];
};

export const rateplantypeObjectSchema: Schema<RateplantypeObject> = s.object<RateplantypeObject>({
  ratePlanGroupDescription: s.optional(s.string()),
  ratePlanType: s.optional(s.string()),
  ratePlan: s.optional(s.array(s.lazy(() => rateplantype2Schema))),
});

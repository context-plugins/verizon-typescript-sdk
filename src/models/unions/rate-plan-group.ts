import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { rateplantypeObjectSchema, type RateplantypeObject } from "../rateplantype-object.js";
import { rateplantype2Schema, type Rateplantype2 } from "../rateplantype2.js";

export type RatePlanGroup = RateplantypeObject | Rateplantype2;

export const ratePlanGroupSchema: Schema<RatePlanGroup> = s.of<RatePlanGroup>(
  s.union([s.lazy(() => rateplantypeObjectSchema), s.lazy(() => rateplantype2Schema)]),
);

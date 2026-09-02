import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { conditionObjectCallSchema, type ConditionObjectCall } from "../condition-object-call.js";
import { conditionTypeSchema, type ConditionType } from "../condition-type.js";

export type Rateplantype2Condition1 = ConditionType | ConditionObjectCall;

export const rateplantype2Condition1Schema: Schema<Rateplantype2Condition1> = s.of<Rateplantype2Condition1>(
  s.union([s.lazy(() => conditionTypeSchema), s.lazy(() => conditionObjectCallSchema)]),
);

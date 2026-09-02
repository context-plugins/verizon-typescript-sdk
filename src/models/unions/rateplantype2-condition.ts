import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { conditionObjectCallSchema, type ConditionObjectCall } from "../condition-object-call.js";
import { conditionTypeSchema, type ConditionType } from "../condition-type.js";

export type Rateplantype2Condition = ConditionType | ConditionObjectCall;

export const rateplantype2ConditionSchema: Schema<Rateplantype2Condition> = s.of<Rateplantype2Condition>(
  s.union([s.lazy(() => conditionTypeSchema), s.lazy(() => conditionObjectCallSchema)]),
);

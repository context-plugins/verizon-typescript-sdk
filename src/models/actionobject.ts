import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { changePlanDetailsSchema, type ChangePlanDetails } from "./change-plan-details.js";
import { suspenddetailsobjectSchema, type Suspenddetailsobject } from "./suspenddetailsobject.js";

export type Actionobject = {
  suspend?: boolean;
  suspendDetails?: Suspenddetailsobject;
  changePlan?: boolean;
  changePlanDetails?: ChangePlanDetails;
};

export const actionobjectSchema: Schema<Actionobject> = s.object<Actionobject>({
  suspend: s.optional(s.boolean()),
  suspendDetails: s.optional(s.lazy(() => suspenddetailsobjectSchema)),
  changePlan: s.optional(s.boolean()),
  changePlanDetails: s.optional(s.lazy(() => changePlanDetailsSchema)),
});

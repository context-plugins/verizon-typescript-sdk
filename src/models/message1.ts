import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distributionScheduleSchema, type DistributionSchedule } from "./distribution-schedule.js";
import { distributionTypesSchema, type DistributionTypes } from "./distribution-types.js";
import { roadUserTypesSchema, type RoadUserTypes } from "./road-user-types.js";
import { saeAlertPayloadSchema, type SaeAlertPayload } from "./sae-alert-payload.js";
import { triggerConditionSchema, type TriggerCondition } from "./trigger-condition.js";
import { limitSchema, type Limit } from "./unions/limit.js";

export type Message1 = {
  isPrivate: boolean;
  roadUserType: RoadUserTypes[];
  triggerConditions: TriggerCondition[];
  limits?: Limit[];
  distributionType?: DistributionTypes[];
  distributionSchedule?: DistributionSchedule;
  saeAlert: SaeAlertPayload;
};

export const message1Schema: Schema<Message1> = s.object<Message1>({
  isPrivate: s.boolean(),
  roadUserType: s.array(s.lazy(() => roadUserTypesSchema)),
  triggerConditions: s.array(s.lazy(() => triggerConditionSchema)),
  limits: s.optional(s.array(s.lazy(() => limitSchema))),
  distributionType: s.optional(s.array(s.lazy(() => distributionTypesSchema))),
  distributionSchedule: s.optional(s.lazy(() => distributionScheduleSchema)),
  saeAlert: saeAlertPayloadSchema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distributionScheduleSchema, type DistributionSchedule } from "./distribution-schedule.js";
import { distributionTypesSchema, type DistributionTypes } from "./distribution-types.js";
import { etsiAlertPayloadSchema, type EtsiAlertPayload } from "./etsi-alert-payload.js";
import { roadUserTypesSchema, type RoadUserTypes } from "./road-user-types.js";
import { triggerConditionSchema, type TriggerCondition } from "./trigger-condition.js";
import { limitSchema, type Limit } from "./unions/limit.js";

export type Message3 = {
  isPrivate: boolean;
  roadUserType: RoadUserTypes[];
  triggerConditions: TriggerCondition[];
  limits?: Limit[];
  distributionType?: DistributionTypes[];
  distributionSchedule?: DistributionSchedule;
  etsiAlert: EtsiAlertPayload;
};

export const message3Schema: Schema<Message3> = s.object<Message3>({
  isPrivate: s.boolean(),
  roadUserType: s.array(s.lazy(() => roadUserTypesSchema)),
  triggerConditions: s.array(s.lazy(() => triggerConditionSchema)),
  limits: s.optional(s.array(s.lazy(() => limitSchema))),
  distributionType: s.optional(s.array(s.lazy(() => distributionTypesSchema))),
  distributionSchedule: s.optional(s.lazy(() => distributionScheduleSchema)),
  etsiAlert: etsiAlertPayloadSchema,
});

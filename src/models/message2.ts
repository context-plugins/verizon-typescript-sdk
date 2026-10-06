import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distributionScheduleSchema, type DistributionSchedule } from "./distribution-schedule.js";
import { distributionTypesSchema, type DistributionTypes } from "./distribution-types.js";
import { roadUserTypesSchema, type RoadUserTypes } from "./road-user-types.js";
import { saeInfoPayloadSchema, type SaeInfoPayload } from "./sae-info-payload.js";
import { triggerConditionSchema, type TriggerCondition } from "./trigger-condition.js";
import { limitSchema, type Limit } from "./unions/limit.js";

export type Message2 = {
  /**
   * Defines whether the message is private or public. Private messages are published under the
   * Vendor ID defined in the configuration and only visible to devices of selected vendors. Public
   * messages are published under the Public vendor and are visible to all the users.
   */
  isPrivate: boolean;
  /** Type of the Road User. */
  roadUserType: RoadUserTypes[];
  /**
   * Trigger conditions that define on which road user action the message will be sent. If multiple
   * Trigger Conditions are defined any of them will trigger the message.
   */
  triggerConditions: TriggerCondition[];
  /**
   * List of limitations. These limitations can be used for making the trigger condition more
   * precise by defining speed and motion direction requirements to be met before the messages are
   * sent out.
   */
  limits?: Limit[];
  /** Type of the distribution. */
  distributionType?: DistributionTypes[];
  /** The distribution schedule parameters for broadcast messages. */
  distributionSchedule?: DistributionSchedule;
  /** Traveler Information Message (TIM) payload as defined in SAE J2735. */
  saeInfo: SaeInfoPayload;
};

export const message2Schema: Schema<Message2> = s.object<Message2>({
  isPrivate: s.boolean(),
  roadUserType: s.array(s.lazy(() => roadUserTypesSchema)),
  triggerConditions: s.array(s.lazy(() => triggerConditionSchema)),
  limits: s.optional(s.array(s.lazy(() => limitSchema))),
  distributionType: s.optional(s.array(s.lazy(() => distributionTypesSchema))),
  distributionSchedule: s.optional(s.lazy(() => distributionScheduleSchema)),
  saeInfo: saeInfoPayloadSchema,
});

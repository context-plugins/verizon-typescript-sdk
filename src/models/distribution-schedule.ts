import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The distribution schedule parameters for broadcast messages. */
export type DistributionSchedule = {
  /** The period (in seconds) that the message needs to be repeatedly send out. */
  repeatPeriod: number;
  /** The amount of time (in minutes) while the messages needs to be sent out. */
  duration: number;
  /** The time (in UTC) when the message transmission should be started. */
  startTime?: Date;
};

export const distributionScheduleSchema: Schema<DistributionSchedule> = s.object<DistributionSchedule>({
  repeatPeriod: s.int(),
  duration: s.int(),
  startTime: s.optional(s.dateTime()),
});

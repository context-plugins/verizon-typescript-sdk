import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DistributionSchedule = {
  repeatPeriod: number;
  duration: number;
  startTime?: Date;
};

export const distributionScheduleSchema: Schema<DistributionSchedule> = s.object<DistributionSchedule>({
  repeatPeriod: s.number(),
  duration: s.number(),
  startTime: s.optional(s.dateTime()),
});

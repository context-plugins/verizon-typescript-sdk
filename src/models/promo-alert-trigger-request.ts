import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PromoAlertTriggerRequest = {
  dataPercentage50?: boolean;
  dataPercentage75?: boolean;
  dataPercentage90?: boolean;
  noOfDaysB4PromoExp?: number;
  smsPercentage50?: boolean;
  smsPercentage75?: boolean;
  smsPercentage90?: boolean;
};

export const promoAlertTriggerRequestSchema: Schema<PromoAlertTriggerRequest> =
  s.object<PromoAlertTriggerRequest>({
    dataPercentage50: s.optional(s.boolean()),
    dataPercentage75: s.optional(s.boolean()),
    dataPercentage90: s.optional(s.boolean()),
    noOfDaysB4PromoExp: s.optional(s.number()),
    smsPercentage50: s.optional(s.boolean()),
    smsPercentage75: s.optional(s.boolean()),
    smsPercentage90: s.optional(s.boolean()),
  });

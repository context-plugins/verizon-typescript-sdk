import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Keyschunk2 = {
  dataPercentage50?: boolean;
  dataPercentage75?: boolean;
  dataPercentage90?: boolean;
  dataPercentage100?: boolean;
  smsPercentage50?: boolean;
  smsPercentage75?: boolean;
  smsPercentage90?: boolean;
  smsPercentage100?: boolean;
  noOfDaysB4PromoExp?: number;
};

export const keyschunk2Schema: Schema<Keyschunk2> = s.object<Keyschunk2>({
  dataPercentage50: s.optional(s.boolean()),
  dataPercentage75: s.optional(s.boolean()),
  dataPercentage90: s.optional(s.boolean()),
  dataPercentage100: s.optional(s.boolean()),
  smsPercentage50: s.optional(s.boolean()),
  smsPercentage75: s.optional(s.boolean()),
  smsPercentage90: s.optional(s.boolean()),
  smsPercentage100: s.optional(s.boolean()),
  noOfDaysB4PromoExp: s.optional(s.number()),
  _keysMap: {
    noOfDaysB4PromoExp: "NoOfDaysB4PromoExp",
  },
});

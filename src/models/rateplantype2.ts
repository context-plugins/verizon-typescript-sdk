import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountidSchema, type Accountid } from "./accountid.js";

export type Rateplantype2 = {
  description?: string;
  sizeKb?: string;
  carrierRatePlanCode?: string;
  zeroDollarBilling?: boolean;
  promotionOffered?: boolean;
  promotionDays?: number;
  ratePlanType?: string;
  account?: Accountid[];
};

export const rateplantype2Schema: Schema<Rateplantype2> = s.object<Rateplantype2>({
  description: s.optional(s.string()),
  sizeKb: s.optional(s.string()),
  carrierRatePlanCode: s.optional(s.string()),
  zeroDollarBilling: s.optional(s.boolean()),
  promotionOffered: s.optional(s.boolean()),
  promotionDays: s.optional(s.number()),
  ratePlanType: s.optional(s.string()),
  account: s.optional(s.array(s.lazy(() => accountidSchema))),
});

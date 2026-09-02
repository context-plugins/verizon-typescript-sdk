import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promoAlert1Schema, type PromoAlert1 } from "./promo-alert1.js";

export type RequestTrigger = {
  triggerId?: string;
  triggerName?: string;
  accountName?: string;
  organizationName?: string;
  triggerCategory?: string;
  promoAlerts?: PromoAlert1[];
};

export const requestTriggerSchema: Schema<RequestTrigger> = s.object<RequestTrigger>({
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
  accountName: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  triggerCategory: s.optional(s.string()),
  promoAlerts: s.optional(s.array(s.lazy(() => promoAlert1Schema))),
});

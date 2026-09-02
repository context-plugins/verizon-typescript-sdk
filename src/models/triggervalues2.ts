import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promoAlertSchema, type PromoAlert } from "./promo-alert.js";

export type Triggervalues2 = {
  triggerId?: string;
  triggerName?: string;
  accountName?: string;
  organizationName?: string;
  triggerCategory?: string;
  promoAlerts?: PromoAlert[];
  active?: boolean;
  createdAt?: Date;
  modifiedAt?: Date;
};

export const triggervalues2Schema: Schema<Triggervalues2> = s.object<Triggervalues2>({
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
  accountName: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  triggerCategory: s.optional(s.string()),
  promoAlerts: s.optional(s.array(s.lazy(() => promoAlertSchema))),
  active: s.optional(s.boolean()),
  createdAt: s.optional(s.dateTime()),
  modifiedAt: s.optional(s.dateTime()),
});

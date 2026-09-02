import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { anomalyTriggerRequestSchema, type AnomalyTriggerRequest } from "./anomaly-trigger-request.js";
import { cycleTypeSchema, type CycleType } from "./cycle-type.js";
import { dataTriggerRequestSchema, type DataTriggerRequest } from "./data-trigger-request.js";
import {
  promoAlertTriggerRequestSchema,
  type PromoAlertTriggerRequest,
} from "./promo-alert-trigger-request.js";
import { sessionTriggerRequestSchema, type SessionTriggerRequest } from "./session-trigger-request.js";
import { smsTriggerRequestSchema, type SmsTriggerRequest } from "./sms-trigger-request.js";

export type UpdateTriggerRequest = {
  accountName?: string;
  active?: boolean;
  anomalyTriggerRequest?: AnomalyTriggerRequest;
  cycleType?: CycleType;
  dataTriggerRequest?: DataTriggerRequest;
  groupName?: string;
  promoAlertTriggerRequest?: PromoAlertTriggerRequest;
  sessionTriggerRequest?: SessionTriggerRequest;
  smsTriggerRequest?: SmsTriggerRequest;
  triggerCategory?: string;
  triggerId?: string;
  triggerName?: string;
};

export const updateTriggerRequestSchema: Schema<UpdateTriggerRequest> = s.object<UpdateTriggerRequest>({
  accountName: s.optional(s.string()),
  active: s.optional(s.boolean()),
  anomalyTriggerRequest: s.optional(s.lazy(() => anomalyTriggerRequestSchema)),
  cycleType: s.optional(s.lazy(() => cycleTypeSchema)),
  dataTriggerRequest: s.optional(s.lazy(() => dataTriggerRequestSchema)),
  groupName: s.optional(s.string()),
  promoAlertTriggerRequest: s.optional(s.lazy(() => promoAlertTriggerRequestSchema)),
  sessionTriggerRequest: s.optional(s.lazy(() => sessionTriggerRequestSchema)),
  smsTriggerRequest: s.optional(s.lazy(() => smsTriggerRequestSchema)),
  triggerCategory: s.optional(s.string()),
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
});

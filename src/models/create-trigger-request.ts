import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { anomalyTriggerRequestSchema, type AnomalyTriggerRequest } from "./anomaly-trigger-request.js";
import { dataTriggerRequestSchema, type DataTriggerRequest } from "./data-trigger-request.js";
import { sessionTriggerRequestSchema, type SessionTriggerRequest } from "./session-trigger-request.js";
import { smsTriggerRequestSchema, type SmsTriggerRequest } from "./sms-trigger-request.js";

export type CreateTriggerRequest = {
  accountName?: string;
  anomalyTriggerRequest?: AnomalyTriggerRequest;
  dataTriggerRequest?: DataTriggerRequest;
  groupName?: string;
  name?: string;
  sessionTriggerRequest?: SessionTriggerRequest;
  smsTriggerRequest?: SmsTriggerRequest;
  triggerCategory?: string;
  triggerCycle?: string;
};

export const createTriggerRequestSchema: Schema<CreateTriggerRequest> = s.object<CreateTriggerRequest>({
  accountName: s.optional(s.string()),
  anomalyTriggerRequest: s.optional(s.lazy(() => anomalyTriggerRequestSchema)),
  dataTriggerRequest: s.optional(s.lazy(() => dataTriggerRequestSchema)),
  groupName: s.optional(s.string()),
  name: s.optional(s.string()),
  sessionTriggerRequest: s.optional(s.lazy(() => sessionTriggerRequestSchema)),
  smsTriggerRequest: s.optional(s.lazy(() => smsTriggerRequestSchema)),
  triggerCategory: s.optional(s.string()),
  triggerCycle: s.optional(s.string()),
});

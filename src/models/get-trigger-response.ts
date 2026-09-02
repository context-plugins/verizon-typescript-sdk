import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetTriggerResponse = {
  accountName?: string;
  comparator?: string;
  createdAt?: Date;
  groupName?: string;
  modifiedAt?: Date;
  notificationGroupName?: string;
  organizationName?: string;
  smsType?: string;
  threshold?: string;
  thresholdUnit?: string;
  triggerCategory?: string;
  triggerCycle?: string;
  triggerId?: string;
  triggerName?: string;
};

export const getTriggerResponseSchema: Schema<GetTriggerResponse> = s.object<GetTriggerResponse>({
  accountName: s.optional(s.string()),
  comparator: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  groupName: s.optional(s.string()),
  modifiedAt: s.optional(s.dateTime()),
  notificationGroupName: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  smsType: s.optional(s.string()),
  threshold: s.optional(s.string()),
  thresholdUnit: s.optional(s.string()),
  triggerCategory: s.optional(s.string()),
  triggerCycle: s.optional(s.string()),
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
});

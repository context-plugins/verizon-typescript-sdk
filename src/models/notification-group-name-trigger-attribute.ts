import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotificationGroupNameTriggerAttribute = {
  key?: string;
};

export const notificationGroupNameTriggerAttributeSchema: Schema<NotificationGroupNameTriggerAttribute> =
  s.object<NotificationGroupNameTriggerAttribute>({
    key: s.optional(s.string()),
  });

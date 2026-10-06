import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Notification group name trigger attribute. */
export type NotificationGroupNameTriggerAttribute = {
  /** If present, the NotificationGroupName will be listed here. */
  key?: string;
};

export const notificationGroupNameTriggerAttributeSchema: Schema<NotificationGroupNameTriggerAttribute> =
  s.object<NotificationGroupNameTriggerAttribute>({
    key: s.optional(s.string()),
  });

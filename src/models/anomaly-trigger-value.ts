import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  triggerAttributesOptionsSchema,
  type TriggerAttributesOptions,
} from "./unions/trigger-attributes-options.js";

export type AnomalyTriggerValue = {
  triggerId?: string;
  triggerName?: string;
  organizationName?: string;
  triggerCategory?: string;
  triggerAttributes?: TriggerAttributesOptions[];
  createdAt?: string;
  modifiedAt?: string;
};

export const anomalyTriggerValueSchema: Schema<AnomalyTriggerValue> = s.object<AnomalyTriggerValue>({
  triggerId: s.optional(s.string()),
  triggerName: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  triggerCategory: s.optional(s.string()),
  triggerAttributes: s.optional(s.array(s.lazy(() => triggerAttributesOptionsSchema))),
  createdAt: s.optional(s.string()),
  modifiedAt: s.optional(s.string()),
});

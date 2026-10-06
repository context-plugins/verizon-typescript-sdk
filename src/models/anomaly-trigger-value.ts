import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  triggerAttributesOptionsSchema,
  type TriggerAttributesOptions,
} from "./unions/trigger-attributes-options.js";

/** Trigger details. */
export type AnomalyTriggerValue = {
  /** The system assigned name of the trigger being updated. */
  triggerId?: string;
  /** The user defined name of the trigger. */
  triggerName?: string;
  /** The user assigned name of the organization associated with the trigger. */
  organizationName?: string;
  /**
   * This is the value to use in the request body to detect anomalous behaivior. The values in this
   * table will only be relevant when this parameter is set to this value.
   */
  triggerCategory?: string;
  /** Additional details and keys for the trigger. */
  triggerAttributes?: TriggerAttributesOptions[];
  /** Timestamp for whe the trigger was created. */
  createdAt?: string;
  /** Timestamp for the most recent time the trigger was modified. */
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

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Trigger attribute for when data percentage is over 50% used. */
export type DataPercentage50TriggerAttribute = {
  /** Key data percentage 50. */
  key?: string;
  /**
   * DataPercentage50<br />True - Trigger on Data percentage is over 50% used<br />False - Do not
   * trigger when over 50% used.
   */
  value?: boolean;
};

export const dataPercentage50TriggerAttributeSchema: Schema<DataPercentage50TriggerAttribute> =
  s.object<DataPercentage50TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

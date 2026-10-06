import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Trigger attribute for when data percentage is over 90% used. */
export type DataPercentage90TriggerAttribute = {
  /** Key data percentage 90. */
  key?: string;
  /**
   * DataPercentage90<br />True - Trigger on Data percentage is over 90% used<br />False - Do not
   * trigger when over 90% used.
   */
  value?: boolean;
};

export const dataPercentage90TriggerAttributeSchema: Schema<DataPercentage90TriggerAttribute> =
  s.object<DataPercentage90TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Trigger attribute for when data percentage is over 100% used. */
export type DataPercentage100TriggerAttribute = {
  /** Key data percentage 100. */
  key?: string;
  /**
   * DataPercentage100<br />True - Trigger on Data percentage is over 100% used<br />False - Do not
   * trigger when over 100% used.
   */
  value?: boolean;
};

export const dataPercentage100TriggerAttributeSchema: Schema<DataPercentage100TriggerAttribute> =
  s.object<DataPercentage100TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

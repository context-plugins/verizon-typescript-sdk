import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Trigger attribute for when data percentage is over 75% used. */
export type DataPercentage75TriggerAttribute = {
  /** Key data percentage 75. */
  key?: string;
  /**
   * DataPercentage75<br />True - Trigger on Data percentage is over 75% used<br />False - Do not
   * trigger when over 75% used.
   */
  value?: boolean;
};

export const dataPercentage75TriggerAttributeSchema: Schema<DataPercentage75TriggerAttribute> =
  s.object<DataPercentage75TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DataPercentage100TriggerAttribute = {
  key?: string;
  value?: boolean;
};

export const dataPercentage100TriggerAttributeSchema: Schema<DataPercentage100TriggerAttribute> =
  s.object<DataPercentage100TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

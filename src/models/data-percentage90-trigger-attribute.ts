import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DataPercentage90TriggerAttribute = {
  key?: string;
  value?: boolean;
};

export const dataPercentage90TriggerAttributeSchema: Schema<DataPercentage90TriggerAttribute> =
  s.object<DataPercentage90TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

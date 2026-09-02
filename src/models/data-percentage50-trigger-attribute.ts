import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DataPercentage50TriggerAttribute = {
  key?: string;
  value?: boolean;
};

export const dataPercentage50TriggerAttributeSchema: Schema<DataPercentage50TriggerAttribute> =
  s.object<DataPercentage50TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

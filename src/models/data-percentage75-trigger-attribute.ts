import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DataPercentage75TriggerAttribute = {
  key?: string;
  value?: boolean;
};

export const dataPercentage75TriggerAttributeSchema: Schema<DataPercentage75TriggerAttribute> =
  s.object<DataPercentage75TriggerAttribute>({
    key: s.optional(s.string()),
    value: s.optional(s.boolean()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtendedAttribute = {
  key?: string;
  value?: string;
};

export const extendedAttributeSchema: Schema<ExtendedAttribute> = s.object<ExtendedAttribute>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});

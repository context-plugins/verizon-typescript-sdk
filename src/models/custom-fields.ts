import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomFields = {
  key: string;
  value?: string;
};

export const customFieldsSchema: Schema<CustomFields> = s.object<CustomFields>({
  key: s.string(),
  value: s.optional(s.string()),
});

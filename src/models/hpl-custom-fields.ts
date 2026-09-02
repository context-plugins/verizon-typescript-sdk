import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HplCustomFields = {
  key?: string;
  value?: string;
};

export const hplCustomFieldsSchema: Schema<HplCustomFields> = s.object<HplCustomFields>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});

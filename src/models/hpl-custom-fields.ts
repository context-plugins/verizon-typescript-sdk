import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** User assigned custom fields to use for fitering */
export type HplCustomFields = {
  /** key property */
  key?: string;
  /** value of the key property */
  value?: string;
};

export const hplCustomFieldsSchema: Schema<HplCustomFields> = s.object<HplCustomFields>({
  key: s.optional(s.string()),
  value: s.optional(s.string()),
});

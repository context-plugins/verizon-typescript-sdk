import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Custom data that can be included using key-value pairs. */
export type CustomFields = {
  /** The key for an extended attribute. */
  key: string;
  /** The value of an extended attribute. */
  value: string;
};

export const customFieldsSchema: Schema<CustomFields> = s.object<CustomFields>({
  key: s.string(),
  value: s.string(),
});

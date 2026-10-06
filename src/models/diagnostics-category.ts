import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/**
 * Various types of information about the device, grouped into categories. Each category object
 * contains the category name and a list of Extended Attribute objects as key-value pairs.
 */
export type DiagnosticsCategory = {
  /** The name of the category. */
  categoryName?: string;
  /** A list of Extended Attribute objects as key-value pairs. */
  extendedAttributes?: CustomFields[];
};

export const diagnosticsCategorySchema: Schema<DiagnosticsCategory> = s.object<DiagnosticsCategory>({
  categoryName: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
});

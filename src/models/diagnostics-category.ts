import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type DiagnosticsCategory = {
  categoryName?: string;
  extendedAttributes?: CustomFields[];
};

export const diagnosticsCategorySchema: Schema<DiagnosticsCategory> = s.object<DiagnosticsCategory>({
  categoryName: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
});

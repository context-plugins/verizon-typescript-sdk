import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { diagnosticsCategorySchema, type DiagnosticsCategory } from "./diagnostics-category.js";

/** Result for a request to obtain device extended diagnostics. */
export type DeviceExtendedDiagnosticsResult = {
  /**
   * The response includes various types of information about the device, grouped into categories.
   * Each category object contains the category name and a list of Extended Attribute objects as
   * key-value pairs.
   */
  categories?: DiagnosticsCategory[];
};

export const deviceExtendedDiagnosticsResultSchema: Schema<DeviceExtendedDiagnosticsResult> =
  s.object<DeviceExtendedDiagnosticsResult>({
    categories: s.optional(s.array(s.lazy(() => diagnosticsCategorySchema))),
  });

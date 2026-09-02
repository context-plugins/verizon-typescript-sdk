import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { diagnosticsCategorySchema, type DiagnosticsCategory } from "./diagnostics-category.js";

export type DeviceExtendedDiagnosticsResult = {
  categories?: DiagnosticsCategory[];
};

export const deviceExtendedDiagnosticsResultSchema: Schema<DeviceExtendedDiagnosticsResult> =
  s.object<DeviceExtendedDiagnosticsResult>({
    categories: s.optional(s.array(s.lazy(() => diagnosticsCategorySchema))),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KpiInfo = {
  name?: string;
  value?: string;
  nodeName?: string;
  nodeType?: string;
  description?: string;
  unit?: string;
  category?: string;
  timeOfLastUpdate?: string;
};

export const kpiInfoSchema: Schema<KpiInfo> = s.object<KpiInfo>({
  name: s.optional(s.string()),
  value: s.optional(s.string()),
  nodeName: s.optional(s.string()),
  nodeType: s.optional(s.string()),
  description: s.optional(s.string()),
  unit: s.optional(s.string()),
  category: s.optional(s.string()),
  timeOfLastUpdate: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SensitivityParameters = {
  abnormalMaxValue?: number;
  enableAbnormal?: boolean;
  enableVeryAbnormal?: boolean;
  veryAbnormalMaxValue?: number;
};

export const sensitivityParametersSchema: Schema<SensitivityParameters> = s.object<SensitivityParameters>({
  abnormalMaxValue: s.optional(s.number()),
  enableAbnormal: s.optional(s.boolean()),
  enableVeryAbnormal: s.optional(s.boolean()),
  veryAbnormalMaxValue: s.optional(s.number()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details for sensitivity parameters. */
export type SensitivityParameters = {
  /** The maximum value of the threshold in the units being measured. */
  abnormalMaxValue?: number;
  /**
   * If abnormal values are being monitored.<br />true - Monitor for abnormal values<br />false - Do
   * not monitor for abnormal values.
   */
  enableAbnormal?: boolean;
  /**
   * If very abnormal values are being monitored.<br />true - Monitor for very abnormal values<br
   * />false - Do not monitor for very abnormal values.
   */
  enableVeryAbnormal?: boolean;
  /** The maximum value of the threshold in the units being measured. */
  veryAbnormalMaxValue?: number;
};

export const sensitivityParametersSchema: Schema<SensitivityParameters> = s.object<SensitivityParameters>({
  abnormalMaxValue: s.optional(s.float64()),
  enableAbnormal: s.optional(s.boolean()),
  enableVeryAbnormal: s.optional(s.boolean()),
  veryAbnormalMaxValue: s.optional(s.float64()),
});

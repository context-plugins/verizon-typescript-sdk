import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sensitivityParametersSchema, type SensitivityParameters } from "./sensitivity-parameters.js";

export type AnomalyDetectionSettings = {
  accountName?: string;
  sensitivityParameter?: SensitivityParameters;
  status?: string;
};

export const anomalyDetectionSettingsSchema: Schema<AnomalyDetectionSettings> =
  s.object<AnomalyDetectionSettings>({
    accountName: s.optional(s.string()),
    sensitivityParameter: s.optional(s.lazy(() => sensitivityParametersSchema)),
    status: s.optional(s.string()),
  });

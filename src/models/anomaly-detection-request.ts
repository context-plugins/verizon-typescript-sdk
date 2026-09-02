import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sensitivityParametersSchema, type SensitivityParameters } from "./sensitivity-parameters.js";

export type AnomalyDetectionRequest = {
  accountName?: string;
  requestType?: string;
  sensitivityParameter?: SensitivityParameters;
};

export const anomalyDetectionRequestSchema: Schema<AnomalyDetectionRequest> =
  s.object<AnomalyDetectionRequest>({
    accountName: s.optional(s.string()),
    requestType: s.optional(s.string()),
    sensitivityParameter: s.optional(s.lazy(() => sensitivityParametersSchema)),
  });

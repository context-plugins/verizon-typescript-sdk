import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sensitivityParametersSchema, type SensitivityParameters } from "./sensitivity-parameters.js";

/** Anomaly detection request. */
export type AnomalyDetectionRequest = {
  /**
   * The name of a billing account. An account name is usually numeric, and must include any leading
   * zeros.
   */
  accountName?: string;
  /** The type of request being made. anomaly is the request to activate anomaly detection. */
  requestType?: string;
  /** Details for sensitivity parameters. */
  sensitivityParameter?: SensitivityParameters;
};

export const anomalyDetectionRequestSchema: Schema<AnomalyDetectionRequest> =
  s.object<AnomalyDetectionRequest>({
    accountName: s.optional(s.string()),
    requestType: s.optional(s.string()),
    sensitivityParameter: s.optional(s.lazy(() => sensitivityParametersSchema)),
  });

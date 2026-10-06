import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sensitivityParametersSchema, type SensitivityParameters } from "./sensitivity-parameters.js";

/** Settings for anomaly detection. */
export type AnomalyDetectionSettings = {
  /**
   * Indicates if the account name used has anomaly detection.<br />Success - The account has
   * anomaly detection.<br />Failure - The account does not have anomaly detection.
   */
  accountName?: string;
  /** Details for sensitivity parameters. */
  sensitivityParameter?: SensitivityParameters;
  /**
   * Indicates if anomaly detection is active on the account<br />Active - Anomaly detection is
   * active<br />Disabled- Anomaly detection is not active.
   */
  status?: string;
};

export const anomalyDetectionSettingsSchema: Schema<AnomalyDetectionSettings> =
  s.object<AnomalyDetectionSettings>({
    accountName: s.optional(s.string()),
    sensitivityParameter: s.optional(s.lazy(() => sensitivityParametersSchema)),
    status: s.optional(s.string()),
  });

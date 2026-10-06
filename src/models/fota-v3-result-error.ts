import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response. */
export type FotaV3ResultError = {
  /** Error code string. */
  errorCode: string;
  /** Error message string. */
  errorMessage: string;
};

export const fotaV3ResultErrorSchema: Schema<FotaV3ResultError> = s.object<FotaV3ResultError>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

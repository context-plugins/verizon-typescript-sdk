import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error response. */
export type FotaV3Result = {
  /** Error code string. */
  errorCode: string;
  /** Error message string. */
  errorMessage: string;
};

export const fotaV3ResultSchema: Schema<FotaV3Result> = s.object<FotaV3Result>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

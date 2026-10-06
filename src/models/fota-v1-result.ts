import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response in case of any errors. */
export type FotaV1Result = {
  /** Error response code. */
  errorCode: string;
  /** Description of the error. */
  errorMessage: string;
};

export const fotaV1ResultSchema: Schema<FotaV1Result> = s.object<FotaV1Result>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

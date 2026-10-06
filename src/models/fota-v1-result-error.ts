import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response in case of any errors. */
export type FotaV1ResultError = {
  /** Error response code. */
  errorCode: string;
  /** Description of the error. */
  errorMessage: string;
};

export const fotaV1ResultErrorSchema: Schema<FotaV1ResultError> = s.object<FotaV1ResultError>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

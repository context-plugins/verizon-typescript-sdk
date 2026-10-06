import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response for error cases. */
export type FotaV2ResultError = {
  /** Code of the error. */
  errorCode: string;
  /** Details of the error. */
  errorMessage: string;
};

export const fotaV2ResultErrorSchema: Schema<FotaV2ResultError> = s.object<FotaV2ResultError>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

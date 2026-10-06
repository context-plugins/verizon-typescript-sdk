import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response for error cases. */
export type FotaV2Result = {
  /** Code of the error. */
  errorCode: string;
  /** Details of the error. */
  errorMessage: string;
};

export const fotaV2ResultSchema: Schema<FotaV2Result> = s.object<FotaV2Result>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

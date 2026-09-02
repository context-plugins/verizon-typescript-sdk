import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV2ResultError = {
  errorCode: string;
  errorMessage: string;
};

export const fotaV2ResultErrorSchema: Schema<FotaV2ResultError> = s.object<FotaV2ResultError>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

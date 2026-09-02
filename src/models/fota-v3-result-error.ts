import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV3ResultError = {
  errorCode: string;
  errorMessage: string;
};

export const fotaV3ResultErrorSchema: Schema<FotaV3ResultError> = s.object<FotaV3ResultError>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

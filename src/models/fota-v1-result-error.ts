import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV1ResultError = {
  errorCode: string;
  errorMessage: string;
};

export const fotaV1ResultErrorSchema: Schema<FotaV1ResultError> = s.object<FotaV1ResultError>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

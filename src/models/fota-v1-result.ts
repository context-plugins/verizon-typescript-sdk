import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV1Result = {
  errorCode: string;
  errorMessage: string;
};

export const fotaV1ResultSchema: Schema<FotaV1Result> = s.object<FotaV1Result>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV3Result = {
  errorCode: string;
  errorMessage: string;
};

export const fotaV3ResultSchema: Schema<FotaV3Result> = s.object<FotaV3Result>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

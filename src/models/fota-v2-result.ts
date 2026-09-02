import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV2Result = {
  errorCode: string;
  errorMessage: string;
};

export const fotaV2ResultSchema: Schema<FotaV2Result> = s.object<FotaV2Result>({
  errorCode: s.string(),
  errorMessage: s.string(),
});

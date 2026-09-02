import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV3SuccessResult = {
  success: boolean;
};

export const fotaV3SuccessResultSchema: Schema<FotaV3SuccessResult> = s.object<FotaV3SuccessResult>({
  success: s.boolean(),
});

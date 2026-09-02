import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV2SuccessResult = {
  success: boolean;
};

export const fotaV2SuccessResultSchema: Schema<FotaV2SuccessResult> = s.object<FotaV2SuccessResult>({
  success: s.boolean(),
});

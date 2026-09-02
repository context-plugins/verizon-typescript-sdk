import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV1SuccessResult = {
  success?: boolean;
};

export const fotaV1SuccessResultSchema: Schema<FotaV1SuccessResult> = s.object<FotaV1SuccessResult>({
  success: s.optional(s.boolean()),
});

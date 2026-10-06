import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A response to a successful request contains a single Boolean value. */
export type FotaV1SuccessResult = {
  /** True is returned in case of success. */
  success?: boolean;
};

export const fotaV1SuccessResultSchema: Schema<FotaV1SuccessResult> = s.object<FotaV1SuccessResult>({
  success: s.optional(s.boolean()),
});

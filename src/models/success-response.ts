import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SuccessResponse = {
  success?: boolean;
};

export const successResponseSchema: Schema<SuccessResponse> = s.object<SuccessResponse>({
  success: s.optional(s.boolean()),
});

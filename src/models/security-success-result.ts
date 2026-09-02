import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SecuritySuccessResult = {
  requestId?: string;
};

export const securitySuccessResultSchema: Schema<SecuritySuccessResult> = s.object<SecuritySuccessResult>({
  requestId: s.optional(s.string()),
});

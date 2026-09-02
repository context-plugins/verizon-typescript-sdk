import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallbackActionResult = {
  accountName?: string;
  serviceName?: string;
};

export const callbackActionResultSchema: Schema<CallbackActionResult> = s.object<CallbackActionResult>({
  accountName: s.optional(s.string()),
  serviceName: s.optional(s.string()),
});

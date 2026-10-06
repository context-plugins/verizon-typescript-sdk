import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to a callback action. */
export type CallbackActionResult = {
  /** The name of the billing account. */
  accountName?: string;
  /** The name of the callback service that was registered/deregistered. */
  serviceName?: string;
};

export const callbackActionResultSchema: Schema<CallbackActionResult> = s.object<CallbackActionResult>({
  accountName: s.optional(s.string()),
  serviceName: s.optional(s.string()),
});

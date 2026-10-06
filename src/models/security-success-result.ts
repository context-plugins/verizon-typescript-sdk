import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Success response. */
export type SecuritySuccessResult = {
  /**
   * A unique string that associates the request with the results that are sent via a callback
   * message.The ThingSpace Platform sends a separate callback message for each device that matches
   * the request criteria, indicating whether the operation succeeded for that device and containing
   * any requested information. All callback messages will have the same requestId.
   */
  requestId?: string;
};

export const securitySuccessResultSchema: Schema<SecuritySuccessResult> = s.object<SecuritySuccessResult>({
  requestId: s.optional(s.string()),
});

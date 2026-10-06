import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Response to initiate a Connectivity Management session and returns a VZ-M2M session token that is
 * required in subsequent API requests.
 */
export type LogInResult = {
  /**
   * The identifier for the session that was created by the request. Store the sessionToken for use
   * in the header of all other API requests.
   */
  sessionToken?: string;
};

export const logInResultSchema: Schema<LogInResult> = s.object<LogInResult>({
  sessionToken: s.optional(s.string()),
});

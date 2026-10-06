import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Request to initiate a Connectivity Management session and returns a VZ-M2M session token that is
 * required in subsequent API requests.
 */
export type LogInRequest = {
  /** The username for authentication. */
  username: string;
  /** The password for authentication. */
  password: string;
};

export const logInRequestSchema: Schema<LogInRequest> = s.object<LogInRequest>({
  username: s.string(),
  password: s.string(),
});

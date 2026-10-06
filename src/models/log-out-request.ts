import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to end a Connectivity Management session. */
export type LogOutRequest = {
  /** The session token is returned to confirm that it was invalidated. */
  sessionToken?: string;
};

export const logOutRequestSchema: Schema<LogOutRequest> = s.object<LogOutRequest>({
  sessionToken: s.optional(s.string()),
});

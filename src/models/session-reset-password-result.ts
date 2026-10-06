import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response to a new, randomly generated password for the current username. */
export type SessionResetPasswordResult = {
  /** The new password for the username. */
  newPassword?: string;
};

export const sessionResetPasswordResultSchema: Schema<SessionResetPasswordResult> =
  s.object<SessionResetPasswordResult>({
    newPassword: s.optional(s.string()),
  });

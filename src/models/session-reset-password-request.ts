import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to a new, randomly generated password for the current username. */
export type SessionResetPasswordRequest = {
  /** The current password for the username. */
  oldPassword: string;
};

export const sessionResetPasswordRequestSchema: Schema<SessionResetPasswordRequest> =
  s.object<SessionResetPasswordRequest>({
    oldPassword: s.string(),
  });

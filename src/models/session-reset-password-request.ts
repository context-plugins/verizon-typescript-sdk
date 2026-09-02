import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionResetPasswordRequest = {
  oldPassword: string;
};

export const sessionResetPasswordRequestSchema: Schema<SessionResetPasswordRequest> =
  s.object<SessionResetPasswordRequest>({
    oldPassword: s.string(),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionResetPasswordResult = {
  newPassword?: string;
};

export const sessionResetPasswordResultSchema: Schema<SessionResetPasswordResult> =
  s.object<SessionResetPasswordResult>({
    newPassword: s.optional(s.string()),
  });

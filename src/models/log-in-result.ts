import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LogInResult = {
  sessionToken?: string;
};

export const logInResultSchema: Schema<LogInResult> = s.object<LogInResult>({
  sessionToken: s.optional(s.string()),
});

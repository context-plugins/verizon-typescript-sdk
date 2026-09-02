import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LogInRequest = {
  username: string;
  password: string;
};

export const logInRequestSchema: Schema<LogInRequest> = s.object<LogInRequest>({
  username: s.string(),
  password: s.string(),
});

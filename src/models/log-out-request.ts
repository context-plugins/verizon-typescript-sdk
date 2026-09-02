import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LogOutRequest = {
  sessionToken?: string;
};

export const logOutRequestSchema: Schema<LogOutRequest> = s.object<LogOutRequest>({
  sessionToken: s.optional(s.string()),
});

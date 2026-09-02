import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisterCallbackRequest = {
  name: string;
  url: string;
  username?: string;
  password?: string;
};

export const registerCallbackRequestSchema: Schema<RegisterCallbackRequest> =
  s.object<RegisterCallbackRequest>({
    name: s.string(),
    url: s.string(),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
  });

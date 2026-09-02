import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthSubRestErrorResponseforplanner = {
  code?: string;
  message?: string;
  description?: string;
};

export const authSubRestErrorResponseforplannerSchema: Schema<AuthSubRestErrorResponseforplanner> =
  s.object<AuthSubRestErrorResponseforplanner>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    description: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenerateResponseItemCredential = {
  username?: string;
  password?: string;
};

export const generateResponseItemCredentialSchema: Schema<GenerateResponseItemCredential> =
  s.object<GenerateResponseItemCredential>({
    username: s.optional(s.string()),
    password: s.optional(s.string()),
  });

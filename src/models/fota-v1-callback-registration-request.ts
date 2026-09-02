import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV1CallbackRegistrationRequest = {
  name: string;
  url: string;
  username?: string;
  password?: string;
};

export const fotaV1CallbackRegistrationRequestSchema: Schema<FotaV1CallbackRegistrationRequest> =
  s.object<FotaV1CallbackRegistrationRequest>({
    name: s.string(),
    url: s.string(),
    username: s.optional(s.string()),
    password: s.optional(s.string()),
  });

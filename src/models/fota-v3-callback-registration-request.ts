import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV3CallbackRegistrationRequest = {
  url?: string;
};

export const fotaV3CallbackRegistrationRequestSchema: Schema<FotaV3CallbackRegistrationRequest> =
  s.object<FotaV3CallbackRegistrationRequest>({
    url: s.optional(s.string()),
  });

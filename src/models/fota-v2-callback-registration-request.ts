import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FotaV2CallbackRegistrationRequest = {
  url?: string;
};

export const fotaV2CallbackRegistrationRequestSchema: Schema<FotaV2CallbackRegistrationRequest> =
  s.object<FotaV2CallbackRegistrationRequest>({
    url: s.optional(s.string()),
  });

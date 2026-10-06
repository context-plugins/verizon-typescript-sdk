import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback URL registration. */
export type FotaV2CallbackRegistrationRequest = {
  /** Callback URL for an subscribed service. */
  url?: string;
};

export const fotaV2CallbackRegistrationRequestSchema: Schema<FotaV2CallbackRegistrationRequest> =
  s.object<FotaV2CallbackRegistrationRequest>({
    url: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback URL where the listening service is running. */
export type FotaV3CallbackRegistrationRequest = {
  /** Callback URL for an subscribed service. */
  url?: string;
};

export const fotaV3CallbackRegistrationRequestSchema: Schema<FotaV3CallbackRegistrationRequest> =
  s.object<FotaV3CallbackRegistrationRequest>({
    url: s.optional(s.string()),
  });

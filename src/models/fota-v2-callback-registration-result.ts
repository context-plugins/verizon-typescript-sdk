import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback listener URL. */
export type FotaV2CallbackRegistrationResult = {
  /** Callback URL. */
  url?: string;
};

export const fotaV2CallbackRegistrationResultSchema: Schema<FotaV2CallbackRegistrationResult> =
  s.object<FotaV2CallbackRegistrationResult>({
    url: s.optional(s.string()),
  });

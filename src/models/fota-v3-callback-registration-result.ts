import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback registration information. */
export type FotaV3CallbackRegistrationResult = {
  /** Callback URL. */
  url?: string;
};

export const fotaV3CallbackRegistrationResultSchema: Schema<FotaV3CallbackRegistrationResult> =
  s.object<FotaV3CallbackRegistrationResult>({
    url: s.optional(s.string()),
  });

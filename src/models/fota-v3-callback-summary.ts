import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Callback registration information. */
export type FotaV3CallbackSummary = {
  /** Callback URL for an subscribed service. */
  url?: string;
};

export const fotaV3CallbackSummarySchema: Schema<FotaV3CallbackSummary> = s.object<FotaV3CallbackSummary>({
  url: s.optional(s.string()),
});

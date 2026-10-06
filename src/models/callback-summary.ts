import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Registered callback information. */
export type CallbackSummary = {
  /** Callback URL for an subscribed service. */
  url?: string;
};

export const callbackSummarySchema: Schema<CallbackSummary> = s.object<CallbackSummary>({
  url: s.optional(s.string()),
});

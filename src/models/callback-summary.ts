import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallbackSummary = {
  url?: string;
};

export const callbackSummarySchema: Schema<CallbackSummary> = s.object<CallbackSummary>({
  url: s.optional(s.string()),
});

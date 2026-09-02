import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TriggerResponse = {
  triggerId?: string;
};

export const triggerResponseSchema: Schema<TriggerResponse> = s.object<TriggerResponse>({
  triggerId: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageRequestResponse = {
  requestId?: string;
};

export const usageRequestResponseSchema: Schema<UsageRequestResponse> = s.object<UsageRequestResponse>({
  requestId: s.optional(s.string()),
});

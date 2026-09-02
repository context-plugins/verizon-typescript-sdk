import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ESimRequestResponse = {
  requestId?: string;
};

export const eSimRequestResponseSchema: Schema<ESimRequestResponse> = s.object<ESimRequestResponse>({
  requestId: s.optional(s.string()),
});

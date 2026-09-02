import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RequestResponse = {
  requestId?: string;
};

export const requestResponseSchema: Schema<RequestResponse> = s.object<RequestResponse>({
  requestId: s.optional(s.string()),
});

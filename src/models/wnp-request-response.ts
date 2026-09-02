import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WnpRequestResponse = {
  requestId?: string;
};

export const wnpRequestResponseSchema: Schema<WnpRequestResponse> = s.object<WnpRequestResponse>({
  requestId: s.optional(s.string()),
});

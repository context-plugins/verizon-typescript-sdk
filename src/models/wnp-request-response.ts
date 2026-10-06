import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UUID of the Wireless network performance request response. */
export type WnpRequestResponse = {
  /** Request id. */
  requestId?: string;
};

export const wnpRequestResponseSchema: Schema<WnpRequestResponse> = s.object<WnpRequestResponse>({
  requestId: s.optional(s.string()),
});

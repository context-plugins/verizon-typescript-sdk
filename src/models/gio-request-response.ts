import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GioRequestResponse = {
  requestId?: string;
};

export const gioRequestResponseSchema: Schema<GioRequestResponse> = s.object<GioRequestResponse>({
  requestId: s.optional(s.string()),
});

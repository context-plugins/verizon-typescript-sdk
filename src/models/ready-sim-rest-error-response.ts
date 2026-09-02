import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadySimRestErrorResponse = {
  errorCode?: string;
  errorMessage?: string;
};

export const readySimRestErrorResponseSchema: Schema<ReadySimRestErrorResponse> =
  s.object<ReadySimRestErrorResponse>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });

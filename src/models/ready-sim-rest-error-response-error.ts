import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadySimRestErrorResponseError = {
  errorCode?: string;
  errorMessage?: string;
};

export const readySimRestErrorResponseErrorSchema: Schema<ReadySimRestErrorResponseError> =
  s.object<ReadySimRestErrorResponseError>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });

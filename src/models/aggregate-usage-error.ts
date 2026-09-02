import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iErrorMessageSchema, type IErrorMessage } from "./ierror-message.js";

export type AggregateUsageError = {
  imei?: string;
  errorMessage?: string;
  errorResponse?: IErrorMessage;
};

export const aggregateUsageErrorSchema: Schema<AggregateUsageError> = s.object<AggregateUsageError>({
  imei: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
  errorResponse: s.optional(s.lazy(() => iErrorMessageSchema)),
});

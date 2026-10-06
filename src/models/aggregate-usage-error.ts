import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iErrorMessageSchema, type IErrorMessage } from "./ierror-message.js";

/** Error reported by a device. */
export type AggregateUsageError = {
  /** The International Mobile Equipment Identifier of the device. */
  imei?: string;
  /** A general error message. */
  errorMessage?: string;
  /** Error message. */
  errorResponse?: IErrorMessage;
};

export const aggregateUsageErrorSchema: Schema<AggregateUsageError> = s.object<AggregateUsageError>({
  imei: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
  errorResponse: s.optional(s.lazy(() => iErrorMessageSchema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseCodeSchema, type ErrorResponseCode } from "./error-response-code.js";
import { httpStatusCodeSchema, type HttpStatusCode } from "./http-status-code.js";

/** Error message. */
export type IErrorMessage = {
  /** Error Code. */
  errorCode?: ErrorResponseCode;
  /** Details and additional information about the error code. */
  errorMessage?: string;
  /** HTML error code and description. */
  httpStatusCode?: HttpStatusCode;
  /** More detail and information about the HTML error code. */
  detailErrorMessage?: string;
};

export const iErrorMessageSchema: Schema<IErrorMessage> = s.object<IErrorMessage>({
  errorCode: s.optional(s.lazy(() => errorResponseCodeSchema)),
  errorMessage: s.optional(s.string()),
  httpStatusCode: s.optional(s.lazy(() => httpStatusCodeSchema)),
  detailErrorMessage: s.optional(s.string()),
});

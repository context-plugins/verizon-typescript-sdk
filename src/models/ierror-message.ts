import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseCodeSchema, type ErrorResponseCode } from "./error-response-code.js";
import { httpStatusCodeSchema, type HttpStatusCode } from "./http-status-code.js";

export type IErrorMessage = {
  errorCode?: ErrorResponseCode;
  errorMessage?: string;
  httpStatusCode?: HttpStatusCode;
  detailErrorMessage?: string;
};

export const iErrorMessageSchema: Schema<IErrorMessage> = s.object<IErrorMessage>({
  errorCode: s.optional(s.lazy(() => errorResponseCodeSchema)),
  errorMessage: s.optional(s.string()),
  httpStatusCode: s.optional(s.lazy(() => httpStatusCodeSchema)),
  detailErrorMessage: s.optional(s.string()),
});

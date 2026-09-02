import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorResponseCode = {
  Unauthorized: "UNAUTHORIZED",
  InvalidAccess: "INVALID_ACCESS",
  InvalidParameter: "INVALID_PARAMETER",
  InternalError: "INTERNAL_ERROR",
  Success: "SUCCESS",
} as const;
export type ErrorResponseCode = (typeof ErrorResponseCode)[keyof typeof ErrorResponseCode] | (string & {});

export const errorResponseCodeSchema: EnumSchema<ErrorResponseCode> =
  s.enumOf<ErrorResponseCode>(ErrorResponseCode);

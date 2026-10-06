import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseCodeSchema, type ResponseCode } from "./response-code.js";

/** ResponseCode and/or a message indicating success or failure of the request. */
export type ApiResponseCode = {
  /** Possible response codes. */
  responseCode: ResponseCode;
  /** More details about the responseCode received. */
  message: string;
};

export const apiResponseCodeSchema: Schema<ApiResponseCode> = s.object<ApiResponseCode>({
  responseCode: responseCodeSchema,
  message: s.string(),
});

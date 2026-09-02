import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseCodeSchema, type ResponseCode } from "./response-code.js";

export type ApiResponseCode = {
  responseCode: ResponseCode;
  message: string;
};

export const apiResponseCodeSchema: Schema<ApiResponseCode> = s.object<ApiResponseCode>({
  responseCode: responseCodeSchema,
  message: s.string(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseErrorError = {
  error: string;
  description: string;
};

export const responseErrorErrorSchema: Schema<ResponseErrorError> = s.object<ResponseErrorError>({
  error: s.string(),
  description: s.string(),
});

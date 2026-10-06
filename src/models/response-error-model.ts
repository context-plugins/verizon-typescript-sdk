import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** error response structure */
export type ResponseErrorModel = {
  /** The short summary of the error */
  error: string;
  /** The detailed description of the error */
  description: string;
};

export const responseErrorModelSchema: Schema<ResponseErrorModel> = s.object<ResponseErrorModel>({
  error: s.string(),
  description: s.string(),
});

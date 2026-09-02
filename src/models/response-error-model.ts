import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseErrorModel = {
  error: string;
  description: string;
};

export const responseErrorModelSchema: Schema<ResponseErrorModel> = s.object<ResponseErrorModel>({
  error: s.string(),
  description: s.string(),
});

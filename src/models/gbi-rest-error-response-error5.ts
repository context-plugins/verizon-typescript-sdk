import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbiRestErrorResponseError5 = {
  errorCode?: string;
  errorMessage?: string;
};

export const gbiRestErrorResponseError5Schema: Schema<GbiRestErrorResponseError5> =
  s.object<GbiRestErrorResponseError5>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
  });

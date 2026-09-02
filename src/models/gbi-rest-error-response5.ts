import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GbiRestErrorResponse5 = {
  errorCode?: string;
  errorMessage?: string;
};

export const gbiRestErrorResponse5Schema: Schema<GbiRestErrorResponse5> = s.object<GbiRestErrorResponse5>({
  errorCode: s.optional(s.string()),
  errorMessage: s.optional(s.string()),
});

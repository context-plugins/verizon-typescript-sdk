import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestErrorResponseforplanner = {
  errorCode?: string;
  errorMessage?: string;
  errorUrl?: string;
};

export const restErrorResponseforplannerSchema: Schema<RestErrorResponseforplanner> =
  s.object<RestErrorResponseforplanner>({
    errorCode: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
    errorUrl: s.optional(s.string()),
  });

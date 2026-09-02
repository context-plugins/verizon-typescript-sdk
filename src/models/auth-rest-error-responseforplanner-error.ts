import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authSubRestErrorResponseforplannerSchema,
  type AuthSubRestErrorResponseforplanner,
} from "./auth-sub-rest-error-responseforplanner.js";

export type AuthRestErrorResponseforplannerError = {
  fault?: AuthSubRestErrorResponseforplanner;
};

export const authRestErrorResponseforplannerErrorSchema: Schema<AuthRestErrorResponseforplannerError> =
  s.object<AuthRestErrorResponseforplannerError>({
    fault: s.optional(s.lazy(() => authSubRestErrorResponseforplannerSchema)),
  });

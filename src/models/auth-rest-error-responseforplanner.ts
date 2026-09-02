import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authSubRestErrorResponseforplannerSchema,
  type AuthSubRestErrorResponseforplanner,
} from "./auth-sub-rest-error-responseforplanner.js";

export type AuthRestErrorResponseforplanner = {
  fault?: AuthSubRestErrorResponseforplanner;
};

export const authRestErrorResponseforplannerSchema: Schema<AuthRestErrorResponseforplanner> =
  s.object<AuthRestErrorResponseforplanner>({
    fault: s.optional(s.lazy(() => authSubRestErrorResponseforplannerSchema)),
  });

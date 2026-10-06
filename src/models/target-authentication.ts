import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  targetAuthenticationBodySchema,
  type TargetAuthenticationBody,
} from "./target-authentication-body.js";

/** OAuth 2 token and refresh token for TS to stream events to Target. */
export type TargetAuthentication = {
  body?: TargetAuthenticationBody;
  version?: string;
};

export const targetAuthenticationSchema: Schema<TargetAuthentication> = s.object<TargetAuthentication>({
  body: s.optional(s.lazy(() => targetAuthenticationBodySchema)),
  version: s.optional(s.string()),
});

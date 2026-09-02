import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  targetAuthenticationBodySchema,
  type TargetAuthenticationBody,
} from "./target-authentication-body.js";

export type TargetAuthentication = {
  body?: TargetAuthenticationBody;
  version?: string;
};

export const targetAuthenticationSchema: Schema<TargetAuthentication> = s.object<TargetAuthentication>({
  body: s.optional(s.lazy(() => targetAuthenticationBodySchema)),
  version: s.optional(s.string()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  targetAuthenticationBodyHeadersSchema,
  type TargetAuthenticationBodyHeaders,
} from "./target-authentication-body-headers.js";
import {
  targetAuthenticationBodyHostSchema,
  type TargetAuthenticationBodyHost,
} from "./target-authentication-body-host.js";

export type TargetAuthenticationBody = {
  /** Authentication grant type. */
  grantType?: string;
  /** Refresh token. */
  refreshToken?: string;
  /** Authentication scopes. */
  scope?: string;
  /** Authentication headers. */
  headers?: TargetAuthenticationBodyHeaders;
  /** Host information. */
  host?: TargetAuthenticationBodyHost;
};

export const targetAuthenticationBodySchema: Schema<TargetAuthenticationBody> =
  s.object<TargetAuthenticationBody>({
    grantType: s.optional(s.string()),
    refreshToken: s.optional(s.string()),
    scope: s.optional(s.string()),
    headers: s.optional(s.lazy(() => targetAuthenticationBodyHeadersSchema)),
    host: s.optional(s.lazy(() => targetAuthenticationBodyHostSchema)),
    _keysMap: {
      grantType: "grant_type",
      refreshToken: "refresh_token",
    },
  });

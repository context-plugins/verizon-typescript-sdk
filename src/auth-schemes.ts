import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import { oauth2ClientCredentialsStrategy } from "./core/auth/oauth2-strategies.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly thingspaceOauth: AuthScheme;
  readonly vzM2MToken: AuthScheme;
  readonly sessionToken: AuthScheme;
  readonly thingspaceOauth1: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    thingspaceOauth: oauth2Scheme(
      options.thingspaceOauth,
      options.thingspaceOauthStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.oAuthServer("/oauth2/token"),
          rawClient,
          placement: "header",
        }),
    ),
    vzM2MToken: apiKeyHeaderAuth({ name: "VZ-M2M-Token", token: options.vzM2MToken }),
    sessionToken: apiKeyHeaderAuth({ name: "SessionToken", token: options.sessionToken }),
    thingspaceOauth1: oauth2Scheme(
      options.thingspaceOauth1,
      options.thingspaceOauth1Strategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.oAuthServer("/"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}

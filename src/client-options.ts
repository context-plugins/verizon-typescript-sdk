import type { FetchLike } from "./core/api-request.js";
import type { OAuth2ClientCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import { ServerEnvironment, type ServerOptions } from "./servers.js";

export type ClientOptions = {
  readonly serverEnvironment: ServerEnvironment;
  readonly serverOptions: ServerOptions;
  readonly timeout: number;
  readonly fetch?: FetchLike | undefined;
  readonly thingspaceOauth?: OAuth2ClientCredentials | undefined;
  readonly thingspaceOauthStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
  readonly vzM2MToken?: TokenProvider | undefined;
  readonly sessionToken?: TokenProvider | undefined;
  readonly thingspaceOauth1?: OAuth2ClientCredentials | undefined;
  readonly thingspaceOauth1Strategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

export const DEFAULT_CLIENT_OPTIONS: ClientOptions = {
  serverEnvironment: ServerEnvironment.Production,
  serverOptions: {},
  timeout: 60_000,
};

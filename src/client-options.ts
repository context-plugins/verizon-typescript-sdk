import type { OAuth2ClientCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  /**
   * This is the ThingSpace token, from [Credentials and
   * Tokens](https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens)
   * is used
   */
  readonly thingspaceOauth?: OAuth2ClientCredentials | undefined;
  readonly thingspaceOauthStrategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
  /**
   * M2M Session Token ([How to generate an M2M session
   * token?]($e/Session%20Management/StartConnectivityManagementSession))
   */
  readonly vzM2MToken?: TokenProvider | undefined;
  /**
   * This is the Session/M2M token needed to authenticate the user. It should be acquired by using
   * the ThingSpace APIs. For detail on how to obtain a Session/M2M token please refer to the
   * - [ThingSpace Quick Start Guide - Obtaining a VZ-M2M Session Token
   *   Programmatically](https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens/obtaining-a-vz-m2m-sessiontoken-programmatically)
   * - or the [ThingSpace API Video Guide 1](https://www.youtube.com/watch?v=QPJQFT3637w) and
   *   [ThingSpace API Video Guide 2](https://www.youtube.com/watch?v=hc9udGp4P_s)
   */
  readonly sessionToken?: TokenProvider | undefined;
  /**
   * This is where the ThingSpace access token, from [Credentials and
   * Tokens](https://thingspace.verizon.com/documentation/api-documentation.html#/http/quick-start/credentials-and-tokens)
   * is used
   */
  readonly thingspaceOauth1?: OAuth2ClientCredentials | undefined;
  readonly thingspaceOauth1Strategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        hyperPreciseCredentials?: {
          baseUrl?: string;
        };
        impServer?: {
          baseUrl?: string;
        };
        thingspace?: {
          baseUrl?: string;
        };
        oAuthServer?: {
          baseUrl?: string;
        };
        m2M?: {
          baseUrl?: string;
        };
        deviceLocation?: {
          baseUrl?: string;
        };
        subscriptionServer?: {
          baseUrl?: string;
        };
        softwareManagementV1?: {
          baseUrl?: string;
        };
        softwareManagementV2?: {
          baseUrl?: string;
        };
        softwareManagementV3?: {
          baseUrl?: string;
        };
        deviceDiagnostics?: {
          baseUrl?: string;
        };
        cloudConnector?: {
          baseUrl?: string;
        };
        hyperPreciseLocation?: {
          baseUrl?: string;
        };
        services?: {
          baseUrl?: string;
        };
        qualityOfService?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Staging;
      readonly serverOptions?: {
        hyperPreciseCredentials?: {
          baseUrl?: string;
        };
        impServer?: {
          baseUrl?: string;
        };
        thingspace?: {
          baseUrl?: string;
        };
        oAuthServer?: {
          baseUrl?: string;
        };
        m2M?: {
          baseUrl?: string;
        };
        deviceLocation?: {
          baseUrl?: string;
        };
        subscriptionServer?: {
          baseUrl?: string;
        };
        softwareManagementV1?: {
          baseUrl?: string;
        };
        softwareManagementV2?: {
          baseUrl?: string;
        };
        softwareManagementV3?: {
          baseUrl?: string;
        };
        deviceDiagnostics?: {
          baseUrl?: string;
        };
        cloudConnector?: {
          baseUrl?: string;
        };
        hyperPreciseLocation?: {
          baseUrl?: string;
        };
        services?: {
          baseUrl?: string;
        };
        qualityOfService?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Dev;
      readonly serverOptions?: {
        hyperPreciseCredentials?: {
          baseUrl?: string;
        };
        impServer?: {
          baseUrl?: string;
        };
        thingspace?: {
          baseUrl?: string;
        };
        oAuthServer?: {
          baseUrl?: string;
        };
        m2M?: {
          baseUrl?: string;
        };
        deviceLocation?: {
          baseUrl?: string;
        };
        subscriptionServer?: {
          baseUrl?: string;
        };
        softwareManagementV1?: {
          baseUrl?: string;
        };
        softwareManagementV2?: {
          baseUrl?: string;
        };
        softwareManagementV3?: {
          baseUrl?: string;
        };
        deviceDiagnostics?: {
          baseUrl?: string;
        };
        cloudConnector?: {
          baseUrl?: string;
        };
        hyperPreciseLocation?: {
          baseUrl?: string;
        };
        services?: {
          baseUrl?: string;
        };
        qualityOfService?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Qa;
      readonly serverOptions?: {
        hyperPreciseCredentials?: {
          baseUrl?: string;
        };
        impServer?: {
          baseUrl?: string;
        };
        thingspace?: {
          baseUrl?: string;
        };
        oAuthServer?: {
          baseUrl?: string;
        };
        m2M?: {
          baseUrl?: string;
        };
        deviceLocation?: {
          baseUrl?: string;
        };
        subscriptionServer?: {
          baseUrl?: string;
        };
        softwareManagementV1?: {
          baseUrl?: string;
        };
        softwareManagementV2?: {
          baseUrl?: string;
        };
        softwareManagementV3?: {
          baseUrl?: string;
        };
        deviceDiagnostics?: {
          baseUrl?: string;
        };
        cloudConnector?: {
          baseUrl?: string;
        };
        hyperPreciseLocation?: {
          baseUrl?: string;
        };
        services?: {
          baseUrl?: string;
        };
        qualityOfService?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.MockServerForLimitedAvailabilitySeeQuickStart;
      readonly serverOptions?: {
        hyperPreciseCredentials?: {
          baseUrl?: string;
        };
        impServer?: {
          baseUrl?: string;
        };
        thingspace?: {
          baseUrl?: string;
        };
        oAuthServer?: {
          baseUrl?: string;
        };
        m2M?: {
          baseUrl?: string;
        };
        deviceLocation?: {
          baseUrl?: string;
        };
        subscriptionServer?: {
          baseUrl?: string;
        };
        softwareManagementV1?: {
          baseUrl?: string;
        };
        softwareManagementV2?: {
          baseUrl?: string;
        };
        softwareManagementV3?: {
          baseUrl?: string;
        };
        deviceDiagnostics?: {
          baseUrl?: string;
        };
        cloudConnector?: {
          baseUrl?: string;
        };
        hyperPreciseLocation?: {
          baseUrl?: string;
        };
        services?: {
          baseUrl?: string;
        };
        qualityOfService?: {
          baseUrl?: string;
        };
      };
    };

import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import { logInRequestSchema, type LogInRequest } from "../models/log-in-request.js";
import { logInResultSchema, type LogInResult } from "../models/log-in-result.js";
import { logOutRequestSchema, type LogOutRequest } from "../models/log-out-request.js";
import {
  sessionResetPasswordRequestSchema,
  type SessionResetPasswordRequest,
} from "../models/session-reset-password-request.js";
import {
  sessionResetPasswordResultSchema,
  type SessionResetPasswordResult,
} from "../models/session-reset-password-result.js";
import type { Servers } from "../servers.js";

export class SessionManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  endConnectivityManagementSession(
    options?: RequestOptions,
  ): ApiPromise<LogOutRequest, SessionManagement.EndConnectivityManagementSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/session/logout"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logOutRequestSchema },
        errorFactory: SessionManagement.EndConnectivityManagementSessionError,
      },
      options,
    );
  }

  resetConnectivityManagementPassword(
    request: SessionManagement.ResetConnectivityManagementPasswordRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionResetPasswordResult, SessionManagement.ResetConnectivityManagementPasswordError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/session/password/actions/reset"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: sessionResetPasswordRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionResetPasswordResultSchema },
        errorFactory: SessionManagement.ResetConnectivityManagementPasswordError,
      },
      options,
    );
  }

  startConnectivityManagementSession(
    request: SessionManagement.StartConnectivityManagementSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<LogInResult, SessionManagement.StartConnectivityManagementSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/session/login"),
        auth: this.#auth.thingspaceOauth,
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => logInRequestSchema)) },
      },
      {
        success: { kind: "json", schema: logInResultSchema },
        errorFactory: SessionManagement.StartConnectivityManagementSessionError,
      },
      options,
    );
  }
}

export namespace SessionManagement {
  export class EndConnectivityManagementSessionError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<EndConnectivityManagementSessionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ResetConnectivityManagementPasswordRequest = {
    body: SessionResetPasswordRequest;
  };

  export class ResetConnectivityManagementPasswordError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ResetConnectivityManagementPasswordError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type StartConnectivityManagementSessionRequest = {
    body?: LogInRequest;
  };

  export class StartConnectivityManagementSessionError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<StartConnectivityManagementSessionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}

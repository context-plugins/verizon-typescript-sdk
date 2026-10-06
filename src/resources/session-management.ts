import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Start and end Connectivity Management sessions.
 */
export class SessionManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Ends a Connectivity Management session.
   *
   * @remarks
   * Ends a Connectivity Management session.
   *
   * @returns VZ-M2M session token.
   *
   * @throws {@link SessionManagement.EndConnectivityManagementSessionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  endConnectivityManagementSession(
    options?: RequestOptions,
  ): ApiPromise<LogOutRequest, SessionManagement.EndConnectivityManagementSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/session/logout"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: logOutRequestSchema },
        errorFactory: SessionManagement.EndConnectivityManagementSessionError,
      },
      options,
    );
  }

  /**
   * Returns a new, randomly generated password for the current username
   *
   * @remarks
   * The new password is effective immediately. Passwords do not expire, but Verizon recommends
   * changing your password every 90 days.
   *
   * @returns Returns a new, randomly generated password for the current username.
   *
   * @throws {@link SessionManagement.ResetConnectivityManagementPasswordError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resetConnectivityManagementPassword(
    request: SessionManagement.ResetConnectivityManagementPasswordRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionResetPasswordResult, SessionManagement.ResetConnectivityManagementPasswordError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/session/password/actions/reset"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionResetPasswordRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionResetPasswordResultSchema },
        errorFactory: SessionManagement.ResetConnectivityManagementPasswordError,
      },
      options,
    );
  }

  /**
   * Initiates a Connectivity Management session and returns a session token required in subsequent
   * API requests.
   *
   * @remarks
   * Initiates a Connectivity Management session and returns a VZ-M2M session token that is required
   * in subsequent API requests.
   *
   * @returns VZ-M2M session token.
   *
   * @throws {@link SessionManagement.StartConnectivityManagementSessionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startConnectivityManagementSession(
    request: SessionManagement.StartConnectivityManagementSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<LogInResult, SessionManagement.StartConnectivityManagementSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/session/login"),
        auth: this.#auth.thingspaceOauth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
  export class EndConnectivityManagementSessionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<EndConnectivityManagementSessionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ResetConnectivityManagementPasswordRequest = {
    /** Request with current password that needs to be reset. */
    body: SessionResetPasswordRequest;
  };

  export class ResetConnectivityManagementPasswordError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ResetConnectivityManagementPasswordError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type StartConnectivityManagementSessionRequest = {
    /** Request to initiate a session. */
    body?: LogInRequest;
  };

  export class StartConnectivityManagementSessionError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<StartConnectivityManagementSessionError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}

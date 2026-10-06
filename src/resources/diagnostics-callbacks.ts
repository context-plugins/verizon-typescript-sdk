import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  deviceDiagnosticsCallbackSchema,
  type DeviceDiagnosticsCallback,
} from "../models/device-diagnostics-callback.js";
import {
  deviceDiagnosticsResultSchema,
  type DeviceDiagnosticsResult,
} from "../models/device-diagnostics-result.js";
import type { Servers } from "../servers.js";

export class DiagnosticsCallbacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the registered callback information of diagnostics subscription
   *
   * @remarks
   * This endpoint allows user to get the registered callback information of an existing diagnostics
   * subscription.
   *
   * @returns Returns callback registration.
   *
   * @throws {@link DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDiagnosticsSubscriptionCallbackInfo(
    request: DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DeviceDiagnosticsCallback[],
    DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceDiagnostics("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceDiagnosticsCallbackSchema)) },
        errorFactory: DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError,
      },
      options,
    );
  }

  /**
   * Register callbacks (custom headers)
   *
   * @remarks
   * This endpoint allows user update the callback HTTPS address of an existing diagnostics
   * subscription.
   *
   * @returns Returns callback registration.
   *
   * @throws {@link DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerDiagnosticsCallbackUrl(
    options?: RequestOptions,
  ): ApiPromise<DeviceDiagnosticsCallback, DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceDiagnostics("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceDiagnosticsCallbackSchema },
        errorFactory: DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError,
      },
      options,
    );
  }

  /**
   * Delete a previously registered Callback
   *
   * @remarks
   * This endpoint allows user to delete a registered callback URL and credential.
   *
   * @returns Device diagnostics callback registration.
   *
   * @throws {@link DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unregisterDiagnosticsCallback(
    request: DiagnosticsCallbacks.UnregisterDiagnosticsCallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceDiagnosticsCallback, DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.deviceDiagnostics("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "serviceName", value: request.serviceName, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceDiagnosticsCallbackSchema },
        errorFactory: DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError,
      },
      options,
    );
  }
}

export namespace DiagnosticsCallbacks {
  export type GetDiagnosticsSubscriptionCallbackInfoRequest = {
    /** Account identifier. */
    accountName: string;
  };

  export class GetDiagnosticsSubscriptionCallbackInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<GetDiagnosticsSubscriptionCallbackInfoError> = [
      {
        on: 400,
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }

  export class RegisterDiagnosticsCallbackUrlError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<RegisterDiagnosticsCallbackUrlError> = [
      {
        on: 400,
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }

  export type UnregisterDiagnosticsCallbackRequest = {
    /** Account identifier. */
    accountName: string;
    /** Service name for callback notification. */
    serviceName: string;
  };

  export class UnregisterDiagnosticsCallbackError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<UnregisterDiagnosticsCallbackError> = [
      {
        on: 400,
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

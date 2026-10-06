import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { callbackActionResultSchema, type CallbackActionResult } from "../models/callback-action-result.js";
import {
  connectivityManagementCallbackSchema,
  type ConnectivityManagementCallback,
} from "../models/connectivity-management-callback.js";
import {
  connectivityManagementResultSchema,
  type ConnectivityManagementResult,
} from "../models/connectivity-management-result.js";
import {
  registerCallbackRequestSchema,
  type RegisterCallbackRequest,
} from "../models/register-callback-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage subscriptions to asynchronous webhook messages.
 */
export class ConnectivityCallbacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Stops the platform from sending callback messages for the specified account and service.
   *
   * @remarks
   * Stops ThingSpace from sending callback messages for the specified account and service.
   *
   * @returns Response for a request to deregister a callback.
   *
   * @throws {@link ConnectivityCallbacks.DeregisterCallbackError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deregisterCallback(
    request: ConnectivityCallbacks.DeregisterCallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<CallbackActionResult, ConnectivityCallbacks.DeregisterCallbackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/m2m/v1/callbacks/{aname}/name/{sname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "sname", value: request.sname, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: callbackActionResultSchema },
        errorFactory: ConnectivityCallbacks.DeregisterCallbackError,
      },
      options,
    );
  }

  /**
   * Returns the name and endpoint URL of all callback listening services registered for a given
   * account.
   *
   * @remarks
   * Returns the name and endpoint URL of the callback listening services registered for a given
   * account.
   *
   * @returns A list of callback listeners.
   *
   * @throws {@link ConnectivityCallbacks.ListRegisteredCallbacksError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRegisteredCallbacks(
    request: ConnectivityCallbacks.ListRegisteredCallbacksRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementCallback[], ConnectivityCallbacks.ListRegisteredCallbacksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/callbacks/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => connectivityManagementCallbackSchema)) },
        errorFactory: ConnectivityCallbacks.ListRegisteredCallbacksError,
      },
      options,
    );
  }

  /**
   * Registers a URL where an account will receive RESTFul messages from a platform callback
   * service.
   *
   * @remarks
   * You are responsible for creating and running a listening process on your server at that URL.
   *
   * @returns A success response for registering a callback.
   *
   * @throws {@link ConnectivityCallbacks.RegisterCallbackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerCallback(
    request: ConnectivityCallbacks.RegisterCallbackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CallbackActionResult, ConnectivityCallbacks.RegisterCallbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/callbacks/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: registerCallbackRequestSchema },
      },
      {
        success: { kind: "json", schema: callbackActionResultSchema },
        errorFactory: ConnectivityCallbacks.RegisterCallbackError,
      },
      options,
    );
  }
}

export namespace ConnectivityCallbacks {
  export type DeregisterCallbackRequest = {
    /** Account name. */
    aname: string;
    /** Service name. */
    sname: string;
  };

  export class DeregisterCallbackError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<DeregisterCallbackError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListRegisteredCallbacksRequest = {
    /** Account name. */
    aname: string;
  };

  export class ListRegisteredCallbacksError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<ListRegisteredCallbacksError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RegisterCallbackRequestParams = {
    /** Account name. */
    aname: string;
    /** Request to register a callback. */
    body: RegisterCallbackRequest;
  };

  export class RegisterCallbackError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"connectivityManagementResult", ConnectivityManagementResult>
    >;

    static readonly errors: ErrorDecoders<RegisterCallbackError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}

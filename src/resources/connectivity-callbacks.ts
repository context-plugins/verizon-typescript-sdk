import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class ConnectivityCallbacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deregisterCallback(
    request: ConnectivityCallbacks.DeregisterCallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<CallbackActionResult, ConnectivityCallbacks.DeregisterCallbackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/callbacks/{aname}/name/{sname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "aname", value: request.aname, schema: s.string() },
          { name: "sname", value: request.sname, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: callbackActionResultSchema },
        errorFactory: ConnectivityCallbacks.DeregisterCallbackError,
      },
      options,
    );
  }

  listRegisteredCallbacks(
    request: ConnectivityCallbacks.ListRegisteredCallbacksRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectivityManagementCallback[], ConnectivityCallbacks.ListRegisteredCallbacksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/callbacks/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => connectivityManagementCallbackSchema)) },
        errorFactory: ConnectivityCallbacks.ListRegisteredCallbacksError,
      },
      options,
    );
  }

  registerCallback(
    request: ConnectivityCallbacks.RegisterCallbackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CallbackActionResult, ConnectivityCallbacks.RegisterCallbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/callbacks/{aname}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "aname", value: request.aname, schema: s.string() }],
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
    aname: string;
    sname: string;
  };

  export class DeregisterCallbackError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<DeregisterCallbackError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type ListRegisteredCallbacksRequest = {
    aname: string;
  };

  export class ListRegisteredCallbacksError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<ListRegisteredCallbacksError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }

  export type RegisterCallbackRequestParams = {
    aname: string;
    body: RegisterCallbackRequest;
  };

  export class RegisterCallbackError extends ResponseError<
    Declared<"connectivityManagementResult", ConnectivityManagementResult>
  > {
    static readonly errors: ErrorDecoders<RegisterCallbackError> = [
      {
        on: 400,
        kind: "connectivityManagementResult",
        decode: { kind: "json", schema: connectivityManagementResultSchema },
      },
    ];
  }
}

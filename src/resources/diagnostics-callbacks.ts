import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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
        url: this.#servers.deviceDiagnostics("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceDiagnosticsCallbackSchema)) },
        errorFactory: DiagnosticsCallbacks.GetDiagnosticsSubscriptionCallbackInfoError,
      },
      options,
    );
  }

  registerDiagnosticsCallbackUrl(
    options?: RequestOptions,
  ): ApiPromise<DeviceDiagnosticsCallback, DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceDiagnostics("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceDiagnosticsCallbackSchema },
        errorFactory: DiagnosticsCallbacks.RegisterDiagnosticsCallbackUrlError,
      },
      options,
    );
  }

  unregisterDiagnosticsCallback(
    request: DiagnosticsCallbacks.UnregisterDiagnosticsCallbackRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceDiagnosticsCallback, DiagnosticsCallbacks.UnregisterDiagnosticsCallbackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.deviceDiagnostics("/callbacks"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "serviceName", value: request.serviceName, schema: s.string() },
        ],
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
    accountName: string;
  };

  export class GetDiagnosticsSubscriptionCallbackInfoError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<GetDiagnosticsSubscriptionCallbackInfoError> = [
      {
        on: 400,
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }

  export class RegisterDiagnosticsCallbackUrlError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<RegisterDiagnosticsCallbackUrlError> = [
      {
        on: 400,
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }

  export type UnregisterDiagnosticsCallbackRequest = {
    accountName: string;
    serviceName: string;
  };

  export class UnregisterDiagnosticsCallbackError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<UnregisterDiagnosticsCallbackError> = [
      {
        on: 400,
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

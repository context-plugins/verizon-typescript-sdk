import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  deviceDiagnosticsResultSchema,
  type DeviceDiagnosticsResult,
} from "../models/device-diagnostics-result.js";
import {
  diagnosticsObservationResultSchema,
  type DiagnosticsObservationResult,
} from "../models/diagnostics-observation-result.js";
import type { Servers } from "../servers.js";

export class DiagnosticsObservations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  startDiagnosticsObservation(
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsObservationResult, DiagnosticsObservations.StartDiagnosticsObservationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceDiagnostics("/devices/attributes/actions/observe"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: diagnosticsObservationResultSchema },
        errorFactory: DiagnosticsObservations.StartDiagnosticsObservationError,
      },
      options,
    );
  }

  stopDiagnosticsObservation(
    request: DiagnosticsObservations.StopDiagnosticsObservationRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsObservationResult, DiagnosticsObservations.StopDiagnosticsObservationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.deviceDiagnostics("/devices/attributes/actions/observe"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "transactionId", value: request.transactionId, schema: s.string() },
          { name: "accountName", value: request.accountName, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: diagnosticsObservationResultSchema },
        errorFactory: DiagnosticsObservations.StopDiagnosticsObservationError,
      },
      options,
    );
  }
}

export namespace DiagnosticsObservations {
  export class StartDiagnosticsObservationError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<StartDiagnosticsObservationError> = [
      {
        on: [400, 599],
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }

  export type StopDiagnosticsObservationRequest = {
    transactionId: string;
    accountName: string;
  };

  export class StopDiagnosticsObservationError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<StopDiagnosticsObservationError> = [
      {
        on: [400, 599],
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

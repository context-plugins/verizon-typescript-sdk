import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Start and Change (observe diagnostics)
   *
   * @remarks
   * This endpoint allows the user to start or change observe diagnostics.
   *
   * @returns Diagnostics observation result.
   *
   * @throws {@link DiagnosticsObservations.StartDiagnosticsObservationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startDiagnosticsObservation(
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsObservationResult, DiagnosticsObservations.StartDiagnosticsObservationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceDiagnostics("/devices/attributes/actions/observe"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: diagnosticsObservationResultSchema },
        errorFactory: DiagnosticsObservations.StartDiagnosticsObservationError,
      },
      options,
    );
  }

  /**
   * Stop and Reset (cancel observation for diagnostics)
   *
   * @remarks
   * This endpoint allows the user to stop or reset observe diagnostics.
   *
   * @returns Diagnostics observation result.
   *
   * @throws {@link DiagnosticsObservations.StopDiagnosticsObservationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopDiagnosticsObservation(
    request: DiagnosticsObservations.StopDiagnosticsObservationRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsObservationResult, DiagnosticsObservations.StopDiagnosticsObservationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.deviceDiagnostics("/devices/attributes/actions/observe"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "transactionId", value: request.transactionId, schema: s.string() },
          { name: "accountName", value: request.accountName, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
  export class StartDiagnosticsObservationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<StartDiagnosticsObservationError> = [
      {
        on: "default",
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }

  export type StopDiagnosticsObservationRequest = {
    /** The ID value associated with the transaction. */
    transactionId: string;
    /** The numeric account name. */
    accountName: string;
  };

  export class StopDiagnosticsObservationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<StopDiagnosticsObservationError> = [
      {
        on: "default",
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

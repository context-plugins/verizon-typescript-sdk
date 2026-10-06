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
import { deviceResetRequestSchema, type DeviceResetRequest } from "../models/device-reset-request.js";
import {
  diagnosticsObservationResultSchema,
  type DiagnosticsObservationResult,
} from "../models/diagnostics-observation-result.js";
import type { Servers } from "../servers.js";

export class DiagnosticsFactoryReset {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Performs a device reboot or a factory reset on the modem portion of the device.
   *
   * @remarks
   * Performs a device reboot or a factory reset on the modem portion of the device.
   *
   * @returns Diagnostics observation result.
   *
   * @throws {@link DiagnosticsFactoryReset.DecivesRestartError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  decivesRestart(
    request: DiagnosticsFactoryReset.DecivesRestartRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsObservationResult, DiagnosticsFactoryReset.DecivesRestartError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceDiagnostics("/devices/actions/restart"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceResetRequestSchema },
      },
      {
        success: { kind: "json", schema: diagnosticsObservationResultSchema },
        errorFactory: DiagnosticsFactoryReset.DecivesRestartError,
      },
      options,
    );
  }
}

export namespace DiagnosticsFactoryReset {
  export type DecivesRestartRequest = {
    /** A request to perform a device reboot. */
    body: DeviceResetRequest;
  };

  export class DecivesRestartError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<DecivesRestartError> = [
      {
        on: "default",
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  decivesRestart(
    request: DiagnosticsFactoryReset.DecivesRestartRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticsObservationResult, DiagnosticsFactoryReset.DecivesRestartError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceDiagnostics("/devices/actions/restart"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: DeviceResetRequest;
  };

  export class DecivesRestartError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<DecivesRestartError> = [
      {
        on: [400, 599],
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

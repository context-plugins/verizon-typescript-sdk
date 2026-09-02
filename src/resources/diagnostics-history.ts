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
import { historySchema, type History } from "../models/history.js";
import type { Servers } from "../servers.js";

export class DiagnosticsHistory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getDiagnosticsHistory(
    options?: RequestOptions,
  ): ApiPromise<History[], DiagnosticsHistory.GetDiagnosticsHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceDiagnostics("/history/actions/$search"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => historySchema)) },
        errorFactory: DiagnosticsHistory.GetDiagnosticsHistoryError,
      },
      options,
    );
  }
}

export namespace DiagnosticsHistory {
  export class GetDiagnosticsHistoryError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<GetDiagnosticsHistoryError> = [
      {
        on: [400, 599],
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

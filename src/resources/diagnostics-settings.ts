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
  diagnosticObservationSettingSchema,
  type DiagnosticObservationSetting,
} from "../models/diagnostic-observation-setting.js";
import type { Servers } from "../servers.js";

export class DiagnosticsSettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listDiagnosticsSettings(
    request: DiagnosticsSettings.ListDiagnosticsSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticObservationSetting[], DiagnosticsSettings.ListDiagnosticsSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceDiagnostics("/devices/settings"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "devices", value: request.devices, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => diagnosticObservationSettingSchema)) },
        errorFactory: DiagnosticsSettings.ListDiagnosticsSettingsError,
      },
      options,
    );
  }
}

export namespace DiagnosticsSettings {
  export type ListDiagnosticsSettingsRequest = {
    accountName: string;
    devices: string;
  };

  export class ListDiagnosticsSettingsError extends ResponseError<
    Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>
  > {
    static readonly errors: ErrorDecoders<ListDiagnosticsSettingsError> = [
      {
        on: [400, 599],
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

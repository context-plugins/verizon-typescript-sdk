import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Retrieve diagnostics settings synchronously.
   *
   * @remarks
   * This endpoint retrieves diagnostics settings synchronously.
   *
   * @returns Diagnostic settings.
   *
   * @throws {@link DiagnosticsSettings.ListDiagnosticsSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDiagnosticsSettings(
    request: DiagnosticsSettings.ListDiagnosticsSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<DiagnosticObservationSetting[], DiagnosticsSettings.ListDiagnosticsSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceDiagnostics("/devices/settings"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "devices", value: request.devices, schema: s.string() },
        ],
        headers: [],
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
    /** Account identifier. */
    accountName: string;
    /** Devices list formatted as "id, kind" */
    devices: string;
  };

  export class ListDiagnosticsSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceDiagnosticsResult", DeviceDiagnosticsResult>>;

    static readonly errors: ErrorDecoders<ListDiagnosticsSettingsError> = [
      {
        on: "default",
        kind: "deviceDiagnosticsResult",
        decode: { kind: "json", schema: deviceDiagnosticsResultSchema },
      },
    ];
  }
}

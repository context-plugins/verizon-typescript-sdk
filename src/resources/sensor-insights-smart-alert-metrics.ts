import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dtoQueryMetricsResponseSchema,
  type DtoQueryMetricsResponse,
} from "../models/dto-query-metrics-response.js";
import { dtoQueryMetricsSchema, type DtoQueryMetrics } from "../models/dto-query-metrics.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve tallies of alerts from a recent daily period
 */
export class SensorInsightsSmartAlertMetrics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Device Alerts
   *
   * @remarks
   * Get Device Alerts for the most recent daily period, up to 30 days.
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorinsightsmetricsquery(
    request: SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoQueryMetricsResponse, SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/smartAlerts/actions/metrics"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoQueryMetricsSchema },
      },
      {
        success: { kind: "json", schema: dtoQueryMetricsResponseSchema },
        errorFactory: SensorInsightsSmartAlertMetrics.SensorinsightsmetricsqueryError,
      },
      options,
    );
  }
}

export namespace SensorInsightsSmartAlertMetrics {
  export type SensorinsightsmetricsqueryRequest = {
    /** Daily period requested, up to 30 days. */
    body: DtoQueryMetrics;
  };

  export class SensorinsightsmetricsqueryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError500", ManagementError500>
    >;

    static readonly errors: ErrorDecoders<SensorinsightsmetricsqueryError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dtoGetNetworkHealthScoreResponseSchema,
  type DtoGetNetworkHealthScoreResponse,
} from "../models/dto-get-network-health-score-response.js";
import {
  dtoHealthScoreSummarySchema,
  type DtoHealthScoreSummary,
} from "../models/dto-health-score-summary.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import type { Servers } from "../servers.js";

/**
 * Monitor the health of devices and the network
 */
export class SensorInsightsHealthScore {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a network health score
   *
   * @returns Get a network health score
   *
   * @throws {@link SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsGetNetworkHealthScoreResponse(
    options?: RequestOptions,
  ): ApiPromise<
    DtoGetNetworkHealthScoreResponse,
    SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/healthscore/network"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dtoGetNetworkHealthScoreResponseSchema },
        errorFactory: SensorInsightsHealthScore.SensorInsightsGetNetworkHealthScoreResponseError,
      },
      options,
    );
  }

  /**
   * Get health score summary
   *
   * @returns Get health score summary
   *
   * @throws {@link SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsHealthScoreSummary(
    options?: RequestOptions,
  ): ApiPromise<DtoHealthScoreSummary, SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/healthscore/summary"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dtoHealthScoreSummarySchema },
        errorFactory: SensorInsightsHealthScore.SensorInsightsHealthScoreSummaryError,
      },
      options,
    );
  }
}

export namespace SensorInsightsHealthScore {
  export class SensorInsightsGetNetworkHealthScoreResponseError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsGetNetworkHealthScoreResponseError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export class SensorInsightsHealthScoreSummaryError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsHealthScoreSummaryError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }
}

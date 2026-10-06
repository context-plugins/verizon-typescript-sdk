import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  anomalyDetectionRequestSchema,
  type AnomalyDetectionRequest,
} from "../models/anomaly-detection-request.js";
import {
  anomalyDetectionSettingsSchema,
  type AnomalyDetectionSettings,
} from "../models/anomaly-detection-settings.js";
import { intelligenceResultSchema, type IntelligenceResult } from "../models/intelligence-result.js";
import {
  intelligenceSuccessResultSchema,
  type IntelligenceSuccessResult,
} from "../models/intelligence-success-result.js";
import type { Servers } from "../servers.js";

/**
 * Choose what level and interval of alerting for anomalies detected.
 */
export class AnomalySettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Uses the subscribed account ID to activate anomaly detection and set threshold values.
   *
   * @returns Success response.
   *
   * @throws {@link AnomalySettings.ActivateAnomalyDetectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateAnomalyDetection(
    request: AnomalySettings.ActivateAnomalyDetectionRequest,
    options?: RequestOptions,
  ): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ActivateAnomalyDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/anomaly/settings"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: anomalyDetectionRequestSchema },
      },
      {
        success: { kind: "json", schema: intelligenceSuccessResultSchema },
        errorFactory: AnomalySettings.ActivateAnomalyDetectionError,
      },
      options,
    );
  }

  /**
   * Retrieves the current anomaly detection settings for an account.
   *
   * @returns Retrieve the settings for anomaly detection.
   *
   * @throws {@link AnomalySettings.ListAnomalyDetectionSettingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAnomalyDetectionSettings(
    request: AnomalySettings.ListAnomalyDetectionSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionSettings, AnomalySettings.ListAnomalyDetectionSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/{accountName}/anomaly/settings"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomalyDetectionSettingsSchema },
        errorFactory: AnomalySettings.ListAnomalyDetectionSettingsError,
      },
      options,
    );
  }

  /**
   * Resets the thresholds to zero.
   *
   * @returns Success response.
   *
   * @throws {@link AnomalySettings.ResetAnomalyDetectionParametersError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resetAnomalyDetectionParameters(
    request: AnomalySettings.ResetAnomalyDetectionParametersRequest,
    options?: RequestOptions,
  ): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ResetAnomalyDetectionParametersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/intelligence/{accountName}/anomaly/settings/reset"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: intelligenceSuccessResultSchema },
        errorFactory: AnomalySettings.ResetAnomalyDetectionParametersError,
      },
      options,
    );
  }
}

export namespace AnomalySettings {
  export type ActivateAnomalyDetectionRequest = {
    /** Request to activate anomaly detection. */
    body: AnomalyDetectionRequest;
  };

  export class ActivateAnomalyDetectionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"intelligenceResult", IntelligenceResult>>;

    static readonly errors: ErrorDecoders<ActivateAnomalyDetectionError> = [
      {
        on: "default",
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ListAnomalyDetectionSettingsRequest = {
    /** The name of the subscribed account. */
    accountName: string;
  };

  export class ListAnomalyDetectionSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"intelligenceResult", IntelligenceResult>>;

    static readonly errors: ErrorDecoders<ListAnomalyDetectionSettingsError> = [
      {
        on: "default",
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ResetAnomalyDetectionParametersRequest = {
    /** The name of the subscribed account. */
    accountName: string;
  };

  export class ResetAnomalyDetectionParametersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"intelligenceResult", IntelligenceResult>>;

    static readonly errors: ErrorDecoders<ResetAnomalyDetectionParametersError> = [
      {
        on: "default",
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }
}

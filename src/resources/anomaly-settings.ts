import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class AnomalySettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  activateAnomalyDetection(
    request: AnomalySettings.ActivateAnomalyDetectionRequest,
    options?: RequestOptions,
  ): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ActivateAnomalyDetectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/intelligence/anomaly/settings"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: anomalyDetectionRequestSchema },
      },
      {
        success: { kind: "json", schema: intelligenceSuccessResultSchema },
        errorFactory: AnomalySettings.ActivateAnomalyDetectionError,
      },
      options,
    );
  }

  listAnomalyDetectionSettings(
    request: AnomalySettings.ListAnomalyDetectionSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionSettings, AnomalySettings.ListAnomalyDetectionSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/intelligence/{accountName}/anomaly/settings"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomalyDetectionSettingsSchema },
        errorFactory: AnomalySettings.ListAnomalyDetectionSettingsError,
      },
      options,
    );
  }

  resetAnomalyDetectionParameters(
    request: AnomalySettings.ResetAnomalyDetectionParametersRequest,
    options?: RequestOptions,
  ): ApiPromise<IntelligenceSuccessResult, AnomalySettings.ResetAnomalyDetectionParametersError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials(
          "/m2m/v1/intelligence/{accountName}/anomaly/settings/reset",
        ),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
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
    body: AnomalyDetectionRequest;
  };

  export class ActivateAnomalyDetectionError extends ResponseError<
    Declared<"intelligenceResult", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<ActivateAnomalyDetectionError> = [
      {
        on: [400, 599],
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ListAnomalyDetectionSettingsRequest = {
    accountName: string;
  };

  export class ListAnomalyDetectionSettingsError extends ResponseError<
    Declared<"intelligenceResult", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<ListAnomalyDetectionSettingsError> = [
      {
        on: [400, 599],
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ResetAnomalyDetectionParametersRequest = {
    accountName: string;
  };

  export class ResetAnomalyDetectionParametersError extends ResponseError<
    Declared<"intelligenceResult", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<ResetAnomalyDetectionParametersError> = [
      {
        on: [400, 599],
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }
}

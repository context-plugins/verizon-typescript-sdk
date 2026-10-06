import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  anomalyDetectionTriggerSchema,
  type AnomalyDetectionTrigger,
} from "../models/anomaly-detection-trigger.js";
import { anomalyTriggerResultSchema, type AnomalyTriggerResult } from "../models/anomaly-trigger-result.js";
import { intelligenceResultSchema, type IntelligenceResult } from "../models/intelligence-result.js";
import {
  intelligenceSuccessResultSchema,
  type IntelligenceSuccessResult,
} from "../models/intelligence-success-result.js";
import {
  createTriggerRequestOptionsSchema,
  type CreateTriggerRequestOptions,
} from "../models/unions/create-trigger-request-options.js";
import {
  updateTriggerRequestOptionsSchema,
  type UpdateTriggerRequestOptions,
} from "../models/unions/update-trigger-request-options.js";
import type { Servers } from "../servers.js";

export class AnomalyTriggersV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Creates the trigger to identify an anomaly.
   *
   * @returns Result of request to create a trigger for anomaly detection.
   *
   * @throws {@link AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAnomalyDetectionTriggerV2(
    request: AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Request,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => createTriggerRequestOptionsSchema)),
        },
      },
      {
        success: { kind: "json", schema: anomalyDetectionTriggerSchema },
        errorFactory: AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error,
      },
      options,
    );
  }

  /**
   * Retrieves the values for a specific trigger ID.
   *
   * @returns Anomaly detection trigger details.
   *
   * @throws {@link AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAnomalyDetectionTriggerSettingsV2(
    request: AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Request,
    options?: RequestOptions,
  ): ApiPromise<AnomalyTriggerResult, AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v2/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomalyTriggerResultSchema },
        errorFactory: AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error,
      },
      options,
    );
  }

  /**
   * Updates an existing trigger using the account name.
   *
   * @returns Success response.
   *
   * @throws {@link AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAnomalyDetectionTriggerV2(
    request: AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Request,
    options?: RequestOptions,
  ): ApiPromise<IntelligenceSuccessResult, AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => updateTriggerRequestOptionsSchema)),
        },
      },
      {
        success: { kind: "json", schema: intelligenceSuccessResultSchema },
        errorFactory: AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error,
      },
      options,
    );
  }
}

export namespace AnomalyTriggersV2 {
  export type CreateAnomalyDetectionTriggerV2Request = {
    /** Request to create an anomaly trigger. */
    body: CreateTriggerRequestOptions[];
  };

  export class CreateAnomalyDetectionTriggerV2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"intelligenceResult", IntelligenceResult>>;

    static readonly errors: ErrorDecoders<CreateAnomalyDetectionTriggerV2Error> = [
      {
        on: "default",
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ListAnomalyDetectionTriggerSettingsV2Request = {
    /** The trigger ID of a specific trigger. */
    triggerId: string;
  };

  export class ListAnomalyDetectionTriggerSettingsV2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"intelligenceResult", IntelligenceResult>>;

    static readonly errors: ErrorDecoders<ListAnomalyDetectionTriggerSettingsV2Error> = [
      {
        on: "default",
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type UpdateAnomalyDetectionTriggerV2Request = {
    /** Request to update existing trigger. */
    body: UpdateTriggerRequestOptions[];
  };

  export class UpdateAnomalyDetectionTriggerV2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"intelligenceResult", IntelligenceResult>>;

    static readonly errors: ErrorDecoders<UpdateAnomalyDetectionTriggerV2Error> = [
      {
        on: "default",
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }
}

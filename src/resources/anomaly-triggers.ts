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
import { createTriggerRequestSchema, type CreateTriggerRequest } from "../models/create-trigger-request.js";
import {
  getTriggerResponseListSchema,
  type GetTriggerResponseList,
} from "../models/get-trigger-response-list.js";
import { intelligenceResultSchema, type IntelligenceResult } from "../models/intelligence-result.js";
import { updateTriggerRequestSchema, type UpdateTriggerRequest } from "../models/update-trigger-request.js";
import type { Servers } from "../servers.js";

/**
 * Set the threshold of notification for anomalies detected.
 */
export class AnomalyTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create trigger based on the category.
   *
   * @remarks
   * This corresponds to the M2M-MC SOAP interface, ```CreateTrigger```.
   *
   * @returns Trigger ID
   *
   * @throws {@link AnomalyTriggers.CreateAnomalyDetectionTriggerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAnomalyDetectionTrigger(
    request: AnomalyTriggers.CreateAnomalyDetectionTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.CreateAnomalyDetectionTriggerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTriggerRequestSchema },
      },
      {
        success: { kind: "json", schema: anomalyDetectionTriggerSchema },
        errorFactory: AnomalyTriggers.CreateAnomalyDetectionTriggerError,
      },
      options,
    );
  }

  /**
   * Delete a specific trigger value
   *
   * @remarks
   * Deletes a specific trigger ID
   *
   * @returns The ID of the deleted trigger is returned
   *
   * @throws {@link AnomalyTriggers.DeleteAnomalyDetectionTriggerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAnomalyDetectionTrigger(
    request: AnomalyTriggers.DeleteAnomalyDetectionTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.DeleteAnomalyDetectionTriggerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/m2m/v1/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomalyDetectionTriggerSchema },
        errorFactory: AnomalyTriggers.DeleteAnomalyDetectionTriggerError,
      },
      options,
    );
  }

  /**
   * Gets the trigger information related to a triggerId
   *
   * @remarks
   * This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.
   *
   * @returns Trigger information associated to a Trigger Id
   *
   * @throws {@link AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAnomalyDetectionTriggerSettings(
    request: AnomalyTriggers.ListAnomalyDetectionTriggerSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => getTriggerResponseListSchema)) },
        errorFactory: AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError,
      },
      options,
    );
  }

  /**
   * Get all the triggers related to a Contact
   *
   * @remarks
   * This corresponds to the M2M-MC SOAP interface, ```GetTriggers```.
   *
   * @returns List of triggers associated to a Contact
   *
   * @throws {@link AnomalyTriggers.ListAnomalyDetectionTriggersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAnomalyDetectionTriggers(
    options?: RequestOptions,
  ): ApiPromise<GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v1/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => getTriggerResponseListSchema)) },
        errorFactory: AnomalyTriggers.ListAnomalyDetectionTriggersError,
      },
      options,
    );
  }

  /**
   * Update trigger Operation.
   *
   * @remarks
   * This corresponds to the M2M-MC SOAP interface, ```UpdateTriggerRequest```.
   *
   * @returns Trigger ID
   *
   * @throws {@link AnomalyTriggers.UpdateAnomalyDetectionTriggerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAnomalyDetectionTrigger(
    request: AnomalyTriggers.UpdateAnomalyDetectionTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.UpdateAnomalyDetectionTriggerError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/m2m/v1/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTriggerRequestSchema },
      },
      {
        success: { kind: "json", schema: anomalyDetectionTriggerSchema },
        errorFactory: AnomalyTriggers.UpdateAnomalyDetectionTriggerError,
      },
      options,
    );
  }
}

export namespace AnomalyTriggers {
  export type CreateAnomalyDetectionTriggerRequest = {
    /** Create Trigger Request */
    body: CreateTriggerRequest;
  };

  export class CreateAnomalyDetectionTriggerError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"intelligenceResult", IntelligenceResult>
      | Declared<"intelligenceResult2", IntelligenceResult>
      | Declared<"intelligenceResult3", IntelligenceResult>
      | Declared<"intelligenceResult4", IntelligenceResult>
      | Declared<"intelligenceResult5", IntelligenceResult>
      | Declared<"intelligenceResult6", IntelligenceResult>
      | Declared<"intelligenceResult7", IntelligenceResult>
    >;

    static readonly errors: ErrorDecoders<CreateAnomalyDetectionTriggerError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: "default",
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type DeleteAnomalyDetectionTriggerRequest = {
    /** The trigger ID to be deleted */
    triggerId: string;
  };

  export class DeleteAnomalyDetectionTriggerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"intelligenceResult", IntelligenceResult>>;

    static readonly errors: ErrorDecoders<DeleteAnomalyDetectionTriggerError> = [
      {
        on: "default",
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ListAnomalyDetectionTriggerSettingsRequest = {
    /** trigger ID */
    triggerId: string;
  };

  export class ListAnomalyDetectionTriggerSettingsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"intelligenceResult", IntelligenceResult>
      | Declared<"intelligenceResult2", IntelligenceResult>
      | Declared<"intelligenceResult3", IntelligenceResult>
      | Declared<"intelligenceResult4", IntelligenceResult>
      | Declared<"intelligenceResult5", IntelligenceResult>
      | Declared<"intelligenceResult6", IntelligenceResult>
      | Declared<"intelligenceResult7", IntelligenceResult>
    >;

    static readonly errors: ErrorDecoders<ListAnomalyDetectionTriggerSettingsError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: "default",
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export class ListAnomalyDetectionTriggersError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"intelligenceResult", IntelligenceResult>
      | Declared<"intelligenceResult2", IntelligenceResult>
      | Declared<"intelligenceResult3", IntelligenceResult>
      | Declared<"intelligenceResult4", IntelligenceResult>
      | Declared<"intelligenceResult5", IntelligenceResult>
      | Declared<"intelligenceResult6", IntelligenceResult>
      | Declared<"intelligenceResult7", IntelligenceResult>
    >;

    static readonly errors: ErrorDecoders<ListAnomalyDetectionTriggersError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: "default",
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type UpdateAnomalyDetectionTriggerRequest = {
    /** Update Trigger Request */
    body: UpdateTriggerRequest;
  };

  export class UpdateAnomalyDetectionTriggerError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"intelligenceResult", IntelligenceResult>
      | Declared<"intelligenceResult2", IntelligenceResult>
      | Declared<"intelligenceResult3", IntelligenceResult>
      | Declared<"intelligenceResult4", IntelligenceResult>
      | Declared<"intelligenceResult5", IntelligenceResult>
      | Declared<"intelligenceResult6", IntelligenceResult>
      | Declared<"intelligenceResult7", IntelligenceResult>
    >;

    static readonly errors: ErrorDecoders<UpdateAnomalyDetectionTriggerError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: "default",
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }
}

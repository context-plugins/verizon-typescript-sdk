import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class AnomalyTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAnomalyDetectionTrigger(
    request: AnomalyTriggers.CreateAnomalyDetectionTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.CreateAnomalyDetectionTriggerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: createTriggerRequestSchema },
      },
      {
        success: { kind: "json", schema: anomalyDetectionTriggerSchema },
        errorFactory: AnomalyTriggers.CreateAnomalyDetectionTriggerError,
      },
      options,
    );
  }

  deleteAnomalyDetectionTrigger(
    request: AnomalyTriggers.DeleteAnomalyDetectionTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.DeleteAnomalyDetectionTriggerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomalyDetectionTriggerSchema },
        errorFactory: AnomalyTriggers.DeleteAnomalyDetectionTriggerError,
      },
      options,
    );
  }

  listAnomalyDetectionTriggerSettings(
    request: AnomalyTriggers.ListAnomalyDetectionTriggerSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => getTriggerResponseListSchema)) },
        errorFactory: AnomalyTriggers.ListAnomalyDetectionTriggerSettingsError,
      },
      options,
    );
  }

  listAnomalyDetectionTriggers(
    options?: RequestOptions,
  ): ApiPromise<GetTriggerResponseList[], AnomalyTriggers.ListAnomalyDetectionTriggersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => getTriggerResponseListSchema)) },
        errorFactory: AnomalyTriggers.ListAnomalyDetectionTriggersError,
      },
      options,
    );
  }

  updateAnomalyDetectionTrigger(
    request: AnomalyTriggers.UpdateAnomalyDetectionTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggers.UpdateAnomalyDetectionTriggerError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: CreateTriggerRequest;
  };

  export class CreateAnomalyDetectionTriggerError extends ResponseError<
    | Declared<"intelligenceResult", IntelligenceResult>
    | Declared<"intelligenceResult2", IntelligenceResult>
    | Declared<"intelligenceResult3", IntelligenceResult>
    | Declared<"intelligenceResult4", IntelligenceResult>
    | Declared<"intelligenceResult5", IntelligenceResult>
    | Declared<"intelligenceResult6", IntelligenceResult>
    | Declared<"intelligenceResult7", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<CreateAnomalyDetectionTriggerError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: [400, 599],
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type DeleteAnomalyDetectionTriggerRequest = {
    triggerId: string;
  };

  export class DeleteAnomalyDetectionTriggerError extends ResponseError<
    Declared<"intelligenceResult", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<DeleteAnomalyDetectionTriggerError> = [
      {
        on: [400, 599],
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ListAnomalyDetectionTriggerSettingsRequest = {
    triggerId: string;
  };

  export class ListAnomalyDetectionTriggerSettingsError extends ResponseError<
    | Declared<"intelligenceResult", IntelligenceResult>
    | Declared<"intelligenceResult2", IntelligenceResult>
    | Declared<"intelligenceResult3", IntelligenceResult>
    | Declared<"intelligenceResult4", IntelligenceResult>
    | Declared<"intelligenceResult5", IntelligenceResult>
    | Declared<"intelligenceResult6", IntelligenceResult>
    | Declared<"intelligenceResult7", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<ListAnomalyDetectionTriggerSettingsError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: [400, 599],
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export class ListAnomalyDetectionTriggersError extends ResponseError<
    | Declared<"intelligenceResult", IntelligenceResult>
    | Declared<"intelligenceResult2", IntelligenceResult>
    | Declared<"intelligenceResult3", IntelligenceResult>
    | Declared<"intelligenceResult4", IntelligenceResult>
    | Declared<"intelligenceResult5", IntelligenceResult>
    | Declared<"intelligenceResult6", IntelligenceResult>
    | Declared<"intelligenceResult7", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<ListAnomalyDetectionTriggersError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: [400, 599],
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type UpdateAnomalyDetectionTriggerRequest = {
    body: UpdateTriggerRequest;
  };

  export class UpdateAnomalyDetectionTriggerError extends ResponseError<
    | Declared<"intelligenceResult", IntelligenceResult>
    | Declared<"intelligenceResult2", IntelligenceResult>
    | Declared<"intelligenceResult3", IntelligenceResult>
    | Declared<"intelligenceResult4", IntelligenceResult>
    | Declared<"intelligenceResult5", IntelligenceResult>
    | Declared<"intelligenceResult6", IntelligenceResult>
    | Declared<"intelligenceResult7", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<UpdateAnomalyDetectionTriggerError> = [
      { on: 400, kind: "intelligenceResult", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 401, kind: "intelligenceResult2", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 403, kind: "intelligenceResult3", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 404, kind: "intelligenceResult4", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 406, kind: "intelligenceResult5", decode: { kind: "json", schema: intelligenceResultSchema } },
      { on: 429, kind: "intelligenceResult6", decode: { kind: "json", schema: intelligenceResultSchema } },
      {
        on: [400, 599],
        kind: "intelligenceResult7",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }
}

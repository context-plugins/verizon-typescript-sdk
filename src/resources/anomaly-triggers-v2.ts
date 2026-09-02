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

  createAnomalyDetectionTriggerV2(
    request: AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Request,
    options?: RequestOptions,
  ): ApiPromise<AnomalyDetectionTrigger, AnomalyTriggersV2.CreateAnomalyDetectionTriggerV2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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

  listAnomalyDetectionTriggerSettingsV2(
    request: AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Request,
    options?: RequestOptions,
  ): ApiPromise<AnomalyTriggerResult, AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: anomalyTriggerResultSchema },
        errorFactory: AnomalyTriggersV2.ListAnomalyDetectionTriggerSettingsV2Error,
      },
      options,
    );
  }

  updateAnomalyDetectionTriggerV2(
    request: AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Request,
    options?: RequestOptions,
  ): ApiPromise<IntelligenceSuccessResult, AnomalyTriggersV2.UpdateAnomalyDetectionTriggerV2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: CreateTriggerRequestOptions[];
  };

  export class CreateAnomalyDetectionTriggerV2Error extends ResponseError<
    Declared<"intelligenceResult", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<CreateAnomalyDetectionTriggerV2Error> = [
      {
        on: [400, 599],
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type ListAnomalyDetectionTriggerSettingsV2Request = {
    triggerId: string;
  };

  export class ListAnomalyDetectionTriggerSettingsV2Error extends ResponseError<
    Declared<"intelligenceResult", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<ListAnomalyDetectionTriggerSettingsV2Error> = [
      {
        on: [400, 599],
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }

  export type UpdateAnomalyDetectionTriggerV2Request = {
    body: UpdateTriggerRequestOptions[];
  };

  export class UpdateAnomalyDetectionTriggerV2Error extends ResponseError<
    Declared<"intelligenceResult", IntelligenceResult>
  > {
    static readonly errors: ErrorDecoders<UpdateAnomalyDetectionTriggerV2Error> = [
      {
        on: [400, 599],
        kind: "intelligenceResult",
        decode: { kind: "json", schema: intelligenceResultSchema },
      },
    ];
  }
}

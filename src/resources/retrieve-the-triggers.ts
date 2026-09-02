import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  readySimRestErrorResponseSchema,
  type ReadySimRestErrorResponse,
} from "../models/ready-sim-rest-error-response.js";
import { triggerValueResponseSchema, type TriggerValueResponse } from "../models/trigger-value-response.js";
import {
  triggerValueResponse2Schema,
  type TriggerValueResponse2,
} from "../models/trigger-value-response2.js";
import type { Servers } from "../servers.js";

export class RetrieveTheTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAllAvailableTriggers(
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllAvailableTriggersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerValueResponseSchema },
        errorFactory: RetrieveTheTriggers.GetAllAvailableTriggersError,
      },
      options,
    );
  }

  getAllTriggersByAccountName(
    request: RetrieveTheTriggers.GetAllTriggersByAccountNameRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllTriggersByAccountNameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers/accounts/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerValueResponseSchema },
        errorFactory: RetrieveTheTriggers.GetAllTriggersByAccountNameError,
      },
      options,
    );
  }

  getAllTriggersByTriggerCategory(
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers/categories/PromoAlerts"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerValueResponse2Schema },
        errorFactory: RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError,
      },
      options,
    );
  }

  getTriggersById(
    request: RetrieveTheTriggers.GetTriggersByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetTriggersByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerValueResponse2Schema },
        errorFactory: RetrieveTheTriggers.GetTriggersByIdError,
      },
      options,
    );
  }
}

export namespace RetrieveTheTriggers {
  export class GetAllAvailableTriggersError extends ResponseError<
    Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetAllAvailableTriggersError> = [
      {
        on: [400, 599],
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export type GetAllTriggersByAccountNameRequest = {
    accountName: string;
  };

  export class GetAllTriggersByAccountNameError extends ResponseError<
    Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetAllTriggersByAccountNameError> = [
      {
        on: [400, 599],
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export class GetAllTriggersByTriggerCategoryError extends ResponseError<
    Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetAllTriggersByTriggerCategoryError> = [
      {
        on: [400, 599],
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export type GetTriggersByIdRequest = {
    triggerId: string;
  };

  export class GetTriggersByIdError extends ResponseError<
    Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetTriggersByIdError> = [
      {
        on: [400, 599],
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }
}

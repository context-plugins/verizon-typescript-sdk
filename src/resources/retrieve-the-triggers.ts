import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

/**
 * Retrieve the triggers associated with the feature and the account.
 */
export class RetrieveTheTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve all triggers.
   *
   * @remarks
   * Retrieves all of the available triggers for pseudo-MDN.
   *
   * @returns Status of Request
   *
   * @throws {@link RetrieveTheTriggers.GetAllAvailableTriggersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAvailableTriggers(
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllAvailableTriggersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v2/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerValueResponseSchema },
        errorFactory: RetrieveTheTriggers.GetAllAvailableTriggersError,
      },
      options,
    );
  }

  /**
   * Retrieve Triggers by Account Name.
   *
   * @remarks
   * Retrieve the triggers associated with an account name.
   *
   * @returns Status of Request
   *
   * @throws {@link RetrieveTheTriggers.GetAllTriggersByAccountNameError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllTriggersByAccountName(
    request: RetrieveTheTriggers.GetAllTriggersByAccountNameRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse, RetrieveTheTriggers.GetAllTriggersByAccountNameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v2/triggers/accounts/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerValueResponseSchema },
        errorFactory: RetrieveTheTriggers.GetAllTriggersByAccountNameError,
      },
      options,
    );
  }

  /**
   * Retrieve Triggers by the PromoAlerts category.
   *
   * @remarks
   * Retrieves all of the triggers for the specified account associated with the PromoAlert category
   *
   * @returns Request response
   *
   * @throws {@link RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllTriggersByTriggerCategory(
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v2/triggers/categories/PromoAlerts"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: triggerValueResponse2Schema },
        errorFactory: RetrieveTheTriggers.GetAllTriggersByTriggerCategoryError,
      },
      options,
    );
  }

  /**
   * Retrieve Triggers by triggerId.
   *
   * @remarks
   * Retrives a specific trigger by its ID.
   *
   * @returns Request response
   *
   * @throws {@link RetrieveTheTriggers.GetTriggersByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTriggersById(
    request: RetrieveTheTriggers.GetTriggersByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerValueResponse2, RetrieveTheTriggers.GetTriggersByIdError> {
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
        success: { kind: "json", schema: triggerValueResponse2Schema },
        errorFactory: RetrieveTheTriggers.GetTriggersByIdError,
      },
      options,
    );
  }
}

export namespace RetrieveTheTriggers {
  export class GetAllAvailableTriggersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetAllAvailableTriggersError> = [
      {
        on: "default",
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export type GetAllTriggersByAccountNameRequest = {
    /** The account name */
    accountName: string;
  };

  export class GetAllTriggersByAccountNameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetAllTriggersByAccountNameError> = [
      {
        on: "default",
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export class GetAllTriggersByTriggerCategoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetAllTriggersByTriggerCategoryError> = [
      {
        on: "default",
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export type GetTriggersByIdRequest = {
    /** The ID of a specific trigger */
    triggerId: string;
  };

  export class GetTriggersByIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetTriggersByIdError> = [
      {
        on: "default",
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }
}

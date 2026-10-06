import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deviceLocationResultSchema, type DeviceLocationResult } from "../models/device-location-result.js";
import {
  deviceLocationSuccessResultSchema,
  type DeviceLocationSuccessResult,
} from "../models/device-location-success-result.js";
import {
  usageTriggerAddRequestSchema,
  type UsageTriggerAddRequest,
} from "../models/usage-trigger-add-request.js";
import { usageTriggerResponseSchema, type UsageTriggerResponse } from "../models/usage-trigger-response.js";
import {
  usageTriggerUpdateRequestSchema,
  type UsageTriggerUpdateRequest,
} from "../models/usage-trigger-update-request.js";
import type { Servers } from "../servers.js";

export class UsageTriggerManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new usage trigger
   *
   * @remarks
   * Create a new usage trigger, which will send an alert when the number of device location service
   * transactions reaches a specified percentage of the monthly subscription amount.
   *
   * @returns Usage trigger Add result
   *
   * @throws {@link UsageTriggerManagement.CreateNewTriggerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNewTrigger(
    request: UsageTriggerManagement.CreateNewTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageTriggerResponse, UsageTriggerManagement.CreateNewTriggerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.subscriptionServer("/usage/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usageTriggerAddRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: usageTriggerResponseSchema },
        errorFactory: UsageTriggerManagement.CreateNewTriggerError,
      },
      options,
    );
  }

  /**
   * Deletes a usage trigger
   *
   * @remarks
   * eletes the specified usage trigger from the given account
   *
   * @returns Delete result
   *
   * @throws {@link UsageTriggerManagement.DeleteTriggerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTrigger(
    request: UsageTriggerManagement.DeleteTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, UsageTriggerManagement.DeleteTriggerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.subscriptionServer("/usage/accounts/{accountName}/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "triggerId", value: request.triggerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSuccessResultSchema },
        errorFactory: UsageTriggerManagement.DeleteTriggerError,
      },
      options,
    );
  }

  /**
   * Change the settings of an existing usage trigger
   *
   * @remarks
   * Update an existing usage trigger
   *
   * @returns Usage trigger Modify result
   *
   * @throws {@link UsageTriggerManagement.UpdateTriggerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTrigger(
    request: UsageTriggerManagement.UpdateTriggerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UsageTriggerResponse, UsageTriggerManagement.UpdateTriggerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.subscriptionServer("/usage/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => usageTriggerUpdateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: usageTriggerResponseSchema },
        errorFactory: UsageTriggerManagement.UpdateTriggerError,
      },
      options,
    );
  }
}

export namespace UsageTriggerManagement {
  export type CreateNewTriggerRequest = {
    /** License assignment. */
    body?: UsageTriggerAddRequest;
  };

  export class CreateNewTriggerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<CreateNewTriggerError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type DeleteTriggerRequest = {
    /** Account name */
    accountName: string;
    /** Usage trigger ID */
    triggerId: string;
  };

  export class DeleteTriggerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<DeleteTriggerError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type UpdateTriggerRequestParams = {
    /** Usage trigger ID */
    triggerId: string;
    /** New trigger values */
    body?: UsageTriggerUpdateRequest;
  };

  export class UpdateTriggerError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<UpdateTriggerError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  createNewTrigger(
    request: UsageTriggerManagement.CreateNewTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageTriggerResponse, UsageTriggerManagement.CreateNewTriggerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.subscriptionServer("/usage/triggers"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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

  deleteTrigger(
    request: UsageTriggerManagement.DeleteTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, UsageTriggerManagement.DeleteTriggerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.subscriptionServer("/usage/accounts/{accountName}/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "triggerId", value: request.triggerId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSuccessResultSchema },
        errorFactory: UsageTriggerManagement.DeleteTriggerError,
      },
      options,
    );
  }

  updateTrigger(
    request: UsageTriggerManagement.UpdateTriggerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UsageTriggerResponse, UsageTriggerManagement.UpdateTriggerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.subscriptionServer("/usage/triggers/{triggerId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "triggerId", value: request.triggerId, schema: s.string() }],
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
    body?: UsageTriggerAddRequest;
  };

  export class CreateNewTriggerError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<CreateNewTriggerError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type DeleteTriggerRequest = {
    accountName: string;
    triggerId: string;
  };

  export class DeleteTriggerError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<DeleteTriggerError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type UpdateTriggerRequestParams = {
    triggerId: string;
    body?: UsageTriggerUpdateRequest;
  };

  export class UpdateTriggerError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<UpdateTriggerError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}

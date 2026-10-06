import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dtoAddUsersToNotificationGroupRequestSchema,
  type DtoAddUsersToNotificationGroupRequest,
} from "../models/dto-add-users-to-notification-group-request.js";
import {
  dtoCreateNotificationGroupRequestSchema,
  type DtoCreateNotificationGroupRequest,
} from "../models/dto-create-notification-group-request.js";
import {
  dtoDeleteNotificationGroupRequestSchema,
  type DtoDeleteNotificationGroupRequest,
} from "../models/dto-delete-notification-group-request.js";
import {
  dtoListNotificationGroupRequestSchema,
  type DtoListNotificationGroupRequest,
} from "../models/dto-list-notification-group-request.js";
import {
  dtoNotificationGroupResponseEntitySchema,
  type DtoNotificationGroupResponseEntity,
} from "../models/dto-notification-group-response-entity.js";
import {
  dtoRemoveUsersFromNotificationGroupRequestSchema,
  type DtoRemoveUsersFromNotificationGroupRequest,
} from "../models/dto-remove-users-from-notification-group-request.js";
import {
  dtoUpdateNotificationGroupRequestSchema,
  type DtoUpdateNotificationGroupRequest,
} from "../models/dto-update-notification-group-request.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError404Schema, type ManagementError404 } from "../models/management-error404.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import type { Servers } from "../servers.js";

/**
 * Create and manage groups to recieve notifications and alerts
 */
export class SensorInsightsNotificationGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add users to a notification group
   *
   * @returns OK
   *
   * @throws {@link
   * SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsAddUsersToNotificationGroupRequest(
    request: SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/notificationGroups/actions/add-users"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoAddUsersToNotificationGroupRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError,
      },
      options,
    );
  }

  /**
   * Create a notification group
   *
   * @returns OK
   *
   * @throws {@link
   * SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsCreateNotificationGroupRequest(
    request: SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DtoNotificationGroupResponseEntity,
    SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/notificationGroups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoCreateNotificationGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: dtoNotificationGroupResponseEntitySchema },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError,
      },
      options,
    );
  }

  /**
   * Delete a notification group
   *
   * @returns No Content
   *
   * @throws {@link SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsDeleteNotificationGroup(
    request: SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/dm/v1/notificationGroups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [{ name: "payload", value: request.payload, schema: dtoDeleteNotificationGroupRequestSchema }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError,
      },
      options,
    );
  }

  /**
   * Retrieve a notification group
   *
   * @returns OK
   *
   * @throws {@link
   * SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsListNotificationGroupRequest(
    request: SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DtoNotificationGroupResponseEntity[],
    SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/notificationGroups/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoListNotificationGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoNotificationGroupResponseEntitySchema)) },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError,
      },
      options,
    );
  }

  /**
   * Remove users from a notification group
   *
   * @returns OK
   *
   * @throws {@link
   * SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsRemoveUsersFromNotificationGroupRequest(
    request: SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    undefined,
    SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/notificationGroups/actions/remove-users"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoRemoveUsersFromNotificationGroupRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory:
          SensorInsightsNotificationGroups.SensorInsightsRemoveUsersFromNotificationGroupRequestError,
      },
      options,
    );
  }

  /**
   * Partially update a notification group
   *
   * @returns OK
   *
   * @throws {@link
   * SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sensorInsightsUpdateNotificationGroupRequest(
    request: SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DtoNotificationGroupResponseEntity,
    SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.thingspace("/dm/v1/notificationGroups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoUpdateNotificationGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: dtoNotificationGroupResponseEntitySchema },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsUpdateNotificationGroupRequestError,
      },
      options,
    );
  }
}

export namespace SensorInsightsNotificationGroups {
  export type SensorInsightsAddUsersToNotificationGroupRequestRequest = {
    /** Add users to a notification group */
    body: DtoAddUsersToNotificationGroupRequest;
  };

  export class SensorInsightsAddUsersToNotificationGroupRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsAddUsersToNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsCreateNotificationGroupRequestRequest = {
    /** Create a notification group */
    body: DtoCreateNotificationGroupRequest;
  };

  export class SensorInsightsCreateNotificationGroupRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsCreateNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsDeleteNotificationGroupRequest = {
    /** Payload for the delete request. */
    payload: DtoDeleteNotificationGroupRequest;
  };

  export class SensorInsightsDeleteNotificationGroupError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsDeleteNotificationGroupError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
    ];
  }

  export type SensorInsightsListNotificationGroupRequestRequest = {
    /** Retrieve a notification group */
    body: DtoListNotificationGroupRequest;
  };

  export class SensorInsightsListNotificationGroupRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsListNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsRemoveUsersFromNotificationGroupRequestRequest = {
    /** Remove users from a notification group */
    body: DtoRemoveUsersFromNotificationGroupRequest;
  };

  export class SensorInsightsRemoveUsersFromNotificationGroupRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsRemoveUsersFromNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsUpdateNotificationGroupRequestRequest = {
    /** Partially update a notification group */
    body: DtoUpdateNotificationGroupRequest;
  };

  export class SensorInsightsUpdateNotificationGroupRequestError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError404", ManagementError404>
      | Declared<"managementError2", ManagementError>
      | Declared<"managementError3", ManagementError>
      | Declared<"managementError4", ManagementError>
      | Declared<"managementError500", ManagementError500>
      | Declared<"managementError5", ManagementError>
    >;

    static readonly errors: ErrorDecoders<SensorInsightsUpdateNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: "default", kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }
}

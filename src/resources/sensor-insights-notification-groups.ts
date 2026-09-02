import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class SensorInsightsNotificationGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

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
        url: this.#servers.hyperPreciseCredentials("/dm/v1/notificationGroups/actions/add-users"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoAddUsersToNotificationGroupRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsAddUsersToNotificationGroupRequestError,
      },
      options,
    );
  }

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
        url: this.#servers.hyperPreciseCredentials("/dm/v1/notificationGroups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoCreateNotificationGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: dtoNotificationGroupResponseEntitySchema },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsCreateNotificationGroupRequestError,
      },
      options,
    );
  }

  sensorInsightsDeleteNotificationGroup(
    request: SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/notificationGroups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [{ name: "payload", value: request.payload, schema: dtoDeleteNotificationGroupRequestSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsDeleteNotificationGroupError,
      },
      options,
    );
  }

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
        url: this.#servers.hyperPreciseCredentials("/dm/v1/notificationGroups/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoListNotificationGroupRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoNotificationGroupResponseEntitySchema)) },
        errorFactory: SensorInsightsNotificationGroups.SensorInsightsListNotificationGroupRequestError,
      },
      options,
    );
  }

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
        url: this.#servers.hyperPreciseCredentials("/dm/v1/notificationGroups/actions/remove-users"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
        url: this.#servers.hyperPreciseCredentials("/dm/v1/notificationGroups"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: DtoAddUsersToNotificationGroupRequest;
  };

  export class SensorInsightsAddUsersToNotificationGroupRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsAddUsersToNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsCreateNotificationGroupRequestRequest = {
    body: DtoCreateNotificationGroupRequest;
  };

  export class SensorInsightsCreateNotificationGroupRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsCreateNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsDeleteNotificationGroupRequest = {
    payload: DtoDeleteNotificationGroupRequest;
  };

  export class SensorInsightsDeleteNotificationGroupError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsDeleteNotificationGroupError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
    ];
  }

  export type SensorInsightsListNotificationGroupRequestRequest = {
    body: DtoListNotificationGroupRequest;
  };

  export class SensorInsightsListNotificationGroupRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsListNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsRemoveUsersFromNotificationGroupRequestRequest = {
    body: DtoRemoveUsersFromNotificationGroupRequest;
  };

  export class SensorInsightsRemoveUsersFromNotificationGroupRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsRemoveUsersFromNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }

  export type SensorInsightsUpdateNotificationGroupRequestRequest = {
    body: DtoUpdateNotificationGroupRequest;
  };

  export class SensorInsightsUpdateNotificationGroupRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsUpdateNotificationGroupRequestError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
      { on: 406, kind: "managementError2", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 415, kind: "managementError3", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 429, kind: "managementError4", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
      { on: [400, 599], kind: "managementError5", decode: { kind: "json", schema: managementErrorSchema } },
    ];
  }
}

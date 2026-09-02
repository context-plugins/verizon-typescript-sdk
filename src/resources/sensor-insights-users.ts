import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { dtoCreateUserRequestSchema, type DtoCreateUserRequest } from "../models/dto-create-user-request.js";
import { dtoDeleteUserRequestSchema, type DtoDeleteUserRequest } from "../models/dto-delete-user-request.js";
import { dtoListUserRequestSchema, type DtoListUserRequest } from "../models/dto-list-user-request.js";
import { dtoUpdateUserRequestSchema, type DtoUpdateUserRequest } from "../models/dto-update-user-request.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError404Schema, type ManagementError404 } from "../models/management-error404.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import { resourceUserSchema, type ResourceUser } from "../models/resource-user.js";
import type { Servers } from "../servers.js";

export class SensorInsightsUsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  sensorInsightsCreateUserRequest(
    request: SensorInsightsUsers.SensorInsightsCreateUserRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceUser, SensorInsightsUsers.SensorInsightsCreateUserRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/users"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoCreateUserRequestSchema },
      },
      {
        success: { kind: "json", schema: resourceUserSchema },
        errorFactory: SensorInsightsUsers.SensorInsightsCreateUserRequestError,
      },
      options,
    );
  }

  sensorInsightsDeleteUser(
    request: SensorInsightsUsers.SensorInsightsDeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SensorInsightsUsers.SensorInsightsDeleteUserError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/users"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          {
            name: "deleterequestpayload",
            value: request.deleterequestpayload,
            schema: dtoDeleteUserRequestSchema,
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SensorInsightsUsers.SensorInsightsDeleteUserError,
      },
      options,
    );
  }

  sensorInsightsListUserRequest(
    request: SensorInsightsUsers.SensorInsightsListUserRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceUser[], SensorInsightsUsers.SensorInsightsListUserRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/users/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoListUserRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => resourceUserSchema)) },
        errorFactory: SensorInsightsUsers.SensorInsightsListUserRequestError,
      },
      options,
    );
  }

  sensorInsightsUpdateUserRequest(
    request: SensorInsightsUsers.SensorInsightsUpdateUserRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ResourceUser, SensorInsightsUsers.SensorInsightsUpdateUserRequestError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/users"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoUpdateUserRequestSchema },
      },
      {
        success: { kind: "json", schema: resourceUserSchema },
        errorFactory: SensorInsightsUsers.SensorInsightsUpdateUserRequestError,
      },
      options,
    );
  }
}

export namespace SensorInsightsUsers {
  export type SensorInsightsCreateUserRequestRequest = {
    body: DtoCreateUserRequest;
  };

  export class SensorInsightsCreateUserRequestError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError2", ManagementError>
    | Declared<"managementError3", ManagementError>
    | Declared<"managementError4", ManagementError>
    | Declared<"managementError500", ManagementError500>
    | Declared<"managementError5", ManagementError>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsCreateUserRequestError> = [
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

  export type SensorInsightsDeleteUserRequest = {
    deleterequestpayload: DtoDeleteUserRequest;
  };

  export class SensorInsightsDeleteUserError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError404", ManagementError404>
  > {
    static readonly errors: ErrorDecoders<SensorInsightsDeleteUserError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 404, kind: "managementError404", decode: { kind: "json", schema: managementError404Schema } },
    ];
  }

  export type SensorInsightsListUserRequestRequest = {
    body: DtoListUserRequest;
  };

  export class SensorInsightsListUserRequestError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsListUserRequestError> = [
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

  export type SensorInsightsUpdateUserRequestRequest = {
    body: DtoUpdateUserRequest;
  };

  export class SensorInsightsUpdateUserRequestError extends ResponseError<
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
    static readonly errors: ErrorDecoders<SensorInsightsUpdateUserRequestError> = [
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

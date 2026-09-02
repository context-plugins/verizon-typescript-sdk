import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  dtoConfigurationProfileDeleteSchema,
  type DtoConfigurationProfileDelete,
} from "../models/dto-configuration-profile-delete.js";
import {
  dtoConfigurationProfilePathSchema,
  type DtoConfigurationProfilePath,
} from "../models/dto-configuration-profile-path.js";
import {
  dtoConfigurationProfileSchema,
  type DtoConfigurationProfile,
} from "../models/dto-configuration-profile.js";
import { dtoProfileResponseSchema, type DtoProfileResponse } from "../models/dto-profile-response.js";
import { managementErrorSchema, type ManagementError } from "../models/management-error.js";
import { managementError400Schema, type ManagementError400 } from "../models/management-error400.js";
import { managementError403Schema, type ManagementError403 } from "../models/management-error403.js";
import { managementError500Schema, type ManagementError500 } from "../models/management-error500.js";
import {
  resourceResourceQuerySchema,
  type ResourceResourceQuery,
} from "../models/resource-resource-query.js";
import type { Servers } from "../servers.js";

export class SensorInsightsDeviceProfile {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAProfile(
    request: SensorInsightsDeviceProfile.CreateAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.CreateAProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/deviceConfigurationProfiles"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoConfigurationProfileSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoProfileResponseSchema)) },
        errorFactory: SensorInsightsDeviceProfile.CreateAProfileError,
      },
      options,
    );
  }

  deleteAProfile(
    request: SensorInsightsDeviceProfile.DeleteAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.DeleteAProfileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/deviceConfigurationProfiles"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        headers: [
          {
            name: "deleterequest",
            value: request.deleterequest,
            schema: dtoConfigurationProfileDeleteSchema,
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoProfileResponseSchema)) },
        errorFactory: SensorInsightsDeviceProfile.DeleteAProfileError,
      },
      options,
    );
  }

  queryAProfile(
    request: SensorInsightsDeviceProfile.QueryAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.QueryAProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/deviceConfigurationProfiles/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: resourceResourceQuerySchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoProfileResponseSchema)) },
        errorFactory: SensorInsightsDeviceProfile.QueryAProfileError,
      },
      options,
    );
  }

  updateAProfile(
    request: SensorInsightsDeviceProfile.UpdateAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.UpdateAProfileError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        url: this.#servers.hyperPreciseCredentials("/dm/v1/deviceConfigurationProfiles"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dtoConfigurationProfilePathSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoProfileResponseSchema)) },
        errorFactory: SensorInsightsDeviceProfile.UpdateAProfileError,
      },
      options,
    );
  }
}

export namespace SensorInsightsDeviceProfile {
  export type CreateAProfileRequest = {
    body: DtoConfigurationProfile;
  };

  export class CreateAProfileError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError500", ManagementError500>
  > {
    static readonly errors: ErrorDecoders<CreateAProfileError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }

  export type DeleteAProfileRequest = {
    deleterequest: DtoConfigurationProfileDelete;
  };

  export class DeleteAProfileError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError500", ManagementError500>
  > {
    static readonly errors: ErrorDecoders<DeleteAProfileError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }

  export type QueryAProfileRequest = {
    body: ResourceResourceQuery;
  };

  export class QueryAProfileError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError500", ManagementError500>
  > {
    static readonly errors: ErrorDecoders<QueryAProfileError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }

  export type UpdateAProfileRequest = {
    body: DtoConfigurationProfilePath;
  };

  export class UpdateAProfileError extends ResponseError<
    | Declared<"managementError400", ManagementError400>
    | Declared<"managementError", ManagementError>
    | Declared<"managementError403", ManagementError403>
    | Declared<"managementError500", ManagementError500>
  > {
    static readonly errors: ErrorDecoders<UpdateAProfileError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }
}

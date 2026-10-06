import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Create and manage device profile information
 */
export class SensorInsightsDeviceProfile {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create device profile
   *
   * @remarks
   * Create a device profile
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsDeviceProfile.CreateAProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAProfile(
    request: SensorInsightsDeviceProfile.CreateAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.CreateAProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/deviceConfigurationProfiles"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dtoConfigurationProfileSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoProfileResponseSchema)) },
        errorFactory: SensorInsightsDeviceProfile.CreateAProfileError,
      },
      options,
    );
  }

  /**
   * Delete device profile
   *
   * @remarks
   * Delete a device profile
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsDeviceProfile.DeleteAProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAProfile(
    request: SensorInsightsDeviceProfile.DeleteAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.DeleteAProfileError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/dm/v1/deviceConfigurationProfiles"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [
          {
            name: "deleterequest",
            value: request.deleterequest,
            schema: dtoConfigurationProfileDeleteSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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

  /**
   * Query device profile
   *
   * @remarks
   * Query a device profile for an individual device
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsDeviceProfile.QueryAProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryAProfile(
    request: SensorInsightsDeviceProfile.QueryAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.QueryAProfileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/dm/v1/deviceConfigurationProfiles/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resourceResourceQuerySchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => dtoProfileResponseSchema)) },
        errorFactory: SensorInsightsDeviceProfile.QueryAProfileError,
      },
      options,
    );
  }

  /**
   * Partially update device profile
   *
   * @remarks
   * Partially update a device profile
   *
   * @returns OK
   *
   * @throws {@link SensorInsightsDeviceProfile.UpdateAProfileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAProfile(
    request: SensorInsightsDeviceProfile.UpdateAProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<DtoProfileResponse[], SensorInsightsDeviceProfile.UpdateAProfileError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.thingspace("/dm/v1/deviceConfigurationProfiles"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  export class CreateAProfileError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError500", ManagementError500>
    >;

    static readonly errors: ErrorDecoders<CreateAProfileError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }

  export type DeleteAProfileRequest = {
    /** payload for the delete request */
    deleterequest: DtoConfigurationProfileDelete;
  };

  export class DeleteAProfileError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError500", ManagementError500>
    >;

    static readonly errors: ErrorDecoders<DeleteAProfileError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }

  export type QueryAProfileRequest = {
    /** body */
    body: ResourceResourceQuery;
  };

  export class QueryAProfileError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError500", ManagementError500>
    >;

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

  export class UpdateAProfileError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"managementError400", ManagementError400>
      | Declared<"managementError", ManagementError>
      | Declared<"managementError403", ManagementError403>
      | Declared<"managementError500", ManagementError500>
    >;

    static readonly errors: ErrorDecoders<UpdateAProfileError> = [
      { on: 400, kind: "managementError400", decode: { kind: "json", schema: managementError400Schema } },
      { on: 401, kind: "managementError", decode: { kind: "json", schema: managementErrorSchema } },
      { on: 403, kind: "managementError403", decode: { kind: "json", schema: managementError403Schema } },
      { on: 500, kind: "managementError500", decode: { kind: "json", schema: managementError500Schema } },
    ];
  }
}

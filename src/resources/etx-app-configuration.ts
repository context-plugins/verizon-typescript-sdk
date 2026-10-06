import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  configurationListItemSchema,
  type ConfigurationListItem,
} from "../models/configuration-list-item.js";
import {
  geoFenceConfigurationRequestSchema,
  type GeoFenceConfigurationRequest,
} from "../models/geo-fence-configuration-request.js";
import {
  geoFenceConfigurationResponseSchema,
  type GeoFenceConfigurationResponse,
} from "../models/geo-fence-configuration-response.js";
import {
  geoFenceConfigurationUpdateRequestSchema,
  type GeoFenceConfigurationUpdateRequest,
} from "../models/geo-fence-configuration-update-request.js";
import { responseErrorModelSchema, type ResponseErrorModel } from "../models/response-error-model.js";
import type { Servers } from "../servers.js";

/**
 * Manage geofence-based application configurations.
 */
export class EtxAppConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a configuration
   *
   * @remarks
   * This endpoint creates a new configuration in the system. The data for the new configuration
   * should be provided as JSON in the body of the POST request. The system will return with a
   * unique ID for the configuration, which is needed for any further manipulation (update or
   * delete) of the configuration.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Configuration created
   *
   * @throws {@link EtxAppConfiguration.CreateConfigurationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConfiguration(
    request: EtxAppConfiguration.CreateConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GeoFenceConfigurationResponse, EtxAppConfiguration.CreateConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: geoFenceConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: geoFenceConfigurationResponseSchema },
        errorFactory: EtxAppConfiguration.CreateConfigurationError,
      },
      options,
    );
  }

  /**
   * Delete a configuration
   *
   * @remarks
   * This endpoint deletes a specific configuration from the system. It requires the configuration
   * ID parameter, which was provided by the POST (create) operation.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Configuration deleted
   *
   * @throws {@link EtxAppConfiguration.DeleteConfigurationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConfiguration(
    request: EtxAppConfiguration.DeleteConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EtxAppConfiguration.DeleteConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EtxAppConfiguration.DeleteConfigurationError,
      },
      options,
    );
  }

  /**
   * Get a configuration by its identifier
   *
   * @remarks
   * This endpoint fetches and returns a specific configuration's details. The configuration ID
   * parameter, which was provided when the configuration was created through the POST request, is
   * need to retrieve the configuration details.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Configuration found
   *
   * @throws {@link EtxAppConfiguration.GetConfigurationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConfiguration(
    request: EtxAppConfiguration.GetConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GeoFenceConfigurationResponse, EtxAppConfiguration.GetConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geoFenceConfigurationResponseSchema },
        errorFactory: EtxAppConfiguration.GetConfigurationError,
      },
      options,
    );
  }

  /**
   * Get all configurations by VendorID
   *
   * @remarks
   * This endpoint fetches and returns the list of configurations defined by the Vendor. The list
   * contains the configurations' identifier, name, description, and active flag. The vendor ID is
   * provided when the configuration is created through the POST request.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Configuration list was queried successfully
   *
   * @throws {@link EtxAppConfiguration.GetConfigurationListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConfigurationList(
    request: EtxAppConfiguration.GetConfigurationListRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfigurationListItem[], EtxAppConfiguration.GetConfigurationListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.impServer("/api/v1/application/configurations/geofence/ids"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [],
        headers: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => configurationListItemSchema)) },
        errorFactory: EtxAppConfiguration.GetConfigurationListError,
      },
      options,
    );
  }

  /**
   * Update a configuration
   *
   * @remarks
   * This endpoint updates an existing configuration. Similar to POST, the updated data for the
   * configuration should be provided as JSON in the body of the PUT request. The configuration ID
   * parameter, which was provided by the POST (create) operation, is required to do any updates on
   * the configuration.
   *
   * Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer
   * and Session/M2M tokens in order to call this API.
   *
   * @returns Configuration applied
   *
   * @throws {@link EtxAppConfiguration.UpdateConfigurationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConfiguration(
    request: EtxAppConfiguration.UpdateConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EtxAppConfiguration.UpdateConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        pathParams: [],
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "VendorID", value: request.vendorId, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: geoFenceConfigurationUpdateRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: EtxAppConfiguration.UpdateConfigurationError,
      },
      options,
    );
  }
}

export namespace EtxAppConfiguration {
  export type CreateConfigurationRequest = {
    /** The vendor's identifier */
    vendorId: string;
    body: GeoFenceConfigurationRequest;
  };

  export class CreateConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"responseErrorModel", ResponseErrorModel>
      | Declared<"responseErrorModel2", ResponseErrorModel>
      | Declared<"responseErrorModel3", ResponseErrorModel>
      | Declared<"responseErrorModel4", ResponseErrorModel>
    >;

    static readonly errors: ErrorDecoders<CreateConfigurationError> = [
      { on: 400, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 403, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: "default",
        kind: "responseErrorModel4",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type DeleteConfigurationRequest = {
    /** The configuration identifier */
    id: string;
    /** The vendor's identifier */
    vendorId: string;
  };

  export class DeleteConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"responseErrorModel", ResponseErrorModel>
      | Declared<"responseErrorModel2", ResponseErrorModel>
      | Declared<"responseErrorModel3", ResponseErrorModel>
    >;

    static readonly errors: ErrorDecoders<DeleteConfigurationError> = [
      { on: 403, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: "default",
        kind: "responseErrorModel3",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type GetConfigurationRequest = {
    /** The configuration identifier */
    id: string;
    /** The vendor's identifier */
    vendorId: string;
  };

  export class GetConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"responseErrorModel", ResponseErrorModel>
      | Declared<"responseErrorModel2", ResponseErrorModel>
      | Declared<"responseErrorModel3", ResponseErrorModel>
      | Declared<"responseErrorModel4", ResponseErrorModel>
    >;

    static readonly errors: ErrorDecoders<GetConfigurationError> = [
      { on: 403, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 404, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: "default",
        kind: "responseErrorModel4",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type GetConfigurationListRequest = {
    /** The vendor's identifier */
    vendorId: string;
  };

  export class GetConfigurationListError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"responseErrorModel", ResponseErrorModel>
      | Declared<"responseErrorModel2", ResponseErrorModel>
      | Declared<"responseErrorModel3", ResponseErrorModel>
      | Declared<"responseErrorModel4", ResponseErrorModel>
    >;

    static readonly errors: ErrorDecoders<GetConfigurationListError> = [
      { on: 403, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 404, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: "default",
        kind: "responseErrorModel4",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type UpdateConfigurationRequest = {
    /** The configuration identifier */
    id: string;
    /** The vendor's identifier */
    vendorId: string;
    body: GeoFenceConfigurationUpdateRequest;
  };

  export class UpdateConfigurationError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"responseErrorModel", ResponseErrorModel>
      | Declared<"responseErrorModel2", ResponseErrorModel>
      | Declared<"responseErrorModel3", ResponseErrorModel>
      | Declared<"responseErrorModel4", ResponseErrorModel>
      | Declared<"responseErrorModel5", ResponseErrorModel>
    >;

    static readonly errors: ErrorDecoders<UpdateConfigurationError> = [
      { on: 400, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 403, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 404, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel4", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: "default",
        kind: "responseErrorModel5",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }
}

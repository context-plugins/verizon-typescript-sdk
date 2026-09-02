import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class EtxAppConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createConfiguration(
    request: EtxAppConfiguration.CreateConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GeoFenceConfigurationResponse, EtxAppConfiguration.CreateConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        headers: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: geoFenceConfigurationRequestSchema },
      },
      {
        success: { kind: "json", schema: geoFenceConfigurationResponseSchema },
        errorFactory: EtxAppConfiguration.CreateConfigurationError,
      },
      options,
    );
  }

  deleteConfiguration(
    request: EtxAppConfiguration.DeleteConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EtxAppConfiguration.DeleteConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EtxAppConfiguration.DeleteConfigurationError,
      },
      options,
    );
  }

  getConfiguration(
    request: EtxAppConfiguration.GetConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<GeoFenceConfigurationResponse, EtxAppConfiguration.GetConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
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

  getConfigurationList(
    request: EtxAppConfiguration.GetConfigurationListRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfigurationListItem[], EtxAppConfiguration.GetConfigurationListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.impServer("/api/v1/application/configurations/geofence/ids"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
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

  updateConfiguration(
    request: EtxAppConfiguration.UpdateConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EtxAppConfiguration.UpdateConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.impServer("/api/v1/application/configurations/geofence"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.sessionToken),
        query: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [{ name: "VendorID", value: request.vendorId, schema: s.string() }],
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
    vendorId: string;
    body: GeoFenceConfigurationRequest;
  };

  export class CreateConfigurationError extends ResponseError<
    | Declared<"responseErrorModel", ResponseErrorModel>
    | Declared<"responseErrorModel2", ResponseErrorModel>
    | Declared<"responseErrorModel3", ResponseErrorModel>
    | Declared<"responseErrorModel4", ResponseErrorModel>
  > {
    static readonly errors: ErrorDecoders<CreateConfigurationError> = [
      { on: 400, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 403, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: [400, 599],
        kind: "responseErrorModel4",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type DeleteConfigurationRequest = {
    id: string;
    vendorId: string;
  };

  export class DeleteConfigurationError extends ResponseError<
    | Declared<"responseErrorModel", ResponseErrorModel>
    | Declared<"responseErrorModel2", ResponseErrorModel>
    | Declared<"responseErrorModel3", ResponseErrorModel>
  > {
    static readonly errors: ErrorDecoders<DeleteConfigurationError> = [
      { on: 403, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: [400, 599],
        kind: "responseErrorModel3",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type GetConfigurationRequest = {
    id: string;
    vendorId: string;
  };

  export class GetConfigurationError extends ResponseError<
    | Declared<"responseErrorModel", ResponseErrorModel>
    | Declared<"responseErrorModel2", ResponseErrorModel>
    | Declared<"responseErrorModel3", ResponseErrorModel>
    | Declared<"responseErrorModel4", ResponseErrorModel>
  > {
    static readonly errors: ErrorDecoders<GetConfigurationError> = [
      { on: 403, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 404, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: [400, 599],
        kind: "responseErrorModel4",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type GetConfigurationListRequest = {
    vendorId: string;
  };

  export class GetConfigurationListError extends ResponseError<
    | Declared<"responseErrorModel", ResponseErrorModel>
    | Declared<"responseErrorModel2", ResponseErrorModel>
    | Declared<"responseErrorModel3", ResponseErrorModel>
    | Declared<"responseErrorModel4", ResponseErrorModel>
  > {
    static readonly errors: ErrorDecoders<GetConfigurationListError> = [
      { on: 403, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 404, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: [400, 599],
        kind: "responseErrorModel4",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }

  export type UpdateConfigurationRequest = {
    id: string;
    vendorId: string;
    body: GeoFenceConfigurationUpdateRequest;
  };

  export class UpdateConfigurationError extends ResponseError<
    | Declared<"responseErrorModel", ResponseErrorModel>
    | Declared<"responseErrorModel2", ResponseErrorModel>
    | Declared<"responseErrorModel3", ResponseErrorModel>
    | Declared<"responseErrorModel4", ResponseErrorModel>
    | Declared<"responseErrorModel5", ResponseErrorModel>
  > {
    static readonly errors: ErrorDecoders<UpdateConfigurationError> = [
      { on: 400, kind: "responseErrorModel", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 403, kind: "responseErrorModel2", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 404, kind: "responseErrorModel3", decode: { kind: "json", schema: responseErrorModelSchema } },
      { on: 429, kind: "responseErrorModel4", decode: { kind: "json", schema: responseErrorModelSchema } },
      {
        on: [400, 599],
        kind: "responseErrorModel5",
        decode: { kind: "json", schema: responseErrorModelSchema },
      },
    ];
  }
}

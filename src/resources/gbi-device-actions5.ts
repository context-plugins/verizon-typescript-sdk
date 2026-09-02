import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { gbiRequestResponse5Schema, type GbiRequestResponse5 } from "../models/gbi-request-response5.js";
import {
  gbiRestErrorResponse5Schema,
  type GbiRestErrorResponse5,
} from "../models/gbi-rest-error-response5.js";
import { gbiactivateRequest5Schema, type GbiactivateRequest5 } from "../models/gbiactivate-request5.js";
import { gbichangeRequest5Schema, type GbichangeRequest5 } from "../models/gbichange-request5.js";
import {
  gbideviceDetailsresponse5Schema,
  type GbideviceDetailsresponse5,
} from "../models/gbidevice-detailsresponse5.js";
import { gbideviceId5Schema, type GbideviceId5 } from "../models/gbidevice-id5.js";
import type { Servers } from "../servers.js";

export class GbiDeviceActions5 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  businessInternetServiceplanchange(
    request: GbiDeviceActions5.BusinessInternetServiceplanchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<GbiRequestResponse5, GbiDeviceActions5.BusinessInternetServiceplanchangeError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/actions/plan"),
        auth: anyAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gbichangeRequest5Schema },
      },
      {
        success: { kind: "json", schema: gbiRequestResponse5Schema },
        errorFactory: GbiDeviceActions5.BusinessInternetServiceplanchangeError,
      },
      options,
    );
  }

  businessInternetactivateUsingPost(
    request: GbiDeviceActions5.BusinessInternetactivateUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<GbiRequestResponse5, GbiDeviceActions5.BusinessInternetactivateUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/actions/activate"),
        auth: anyAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gbiactivateRequest5Schema },
      },
      {
        success: { kind: "json", schema: gbiRequestResponse5Schema },
        errorFactory: GbiDeviceActions5.BusinessInternetactivateUsingPostError,
      },
      options,
    );
  }

  businessInternetlistDeviceInformation(
    request: GbiDeviceActions5.BusinessInternetlistDeviceInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<GbideviceDetailsresponse5, GbiDeviceActions5.BusinessInternetlistDeviceInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/actions/list"),
        auth: anyAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: gbideviceId5Schema },
      },
      {
        success: { kind: "json", schema: gbideviceDetailsresponse5Schema },
        errorFactory: GbiDeviceActions5.BusinessInternetlistDeviceInformationError,
      },
      options,
    );
  }
}

export namespace GbiDeviceActions5 {
  export type BusinessInternetServiceplanchangeRequest = {
    body: GbichangeRequest5;
  };

  export class BusinessInternetServiceplanchangeError extends ResponseError<
    Declared<"gbiRestErrorResponse5", GbiRestErrorResponse5>
  > {
    static readonly errors: ErrorDecoders<BusinessInternetServiceplanchangeError> = [
      {
        on: [400, 599],
        kind: "gbiRestErrorResponse5",
        decode: { kind: "json", schema: gbiRestErrorResponse5Schema },
      },
    ];
  }

  export type BusinessInternetactivateUsingPostRequest = {
    body: GbiactivateRequest5;
  };

  export class BusinessInternetactivateUsingPostError extends ResponseError<
    Declared<"gbiRestErrorResponse5", GbiRestErrorResponse5>
  > {
    static readonly errors: ErrorDecoders<BusinessInternetactivateUsingPostError> = [
      {
        on: [400, 599],
        kind: "gbiRestErrorResponse5",
        decode: { kind: "json", schema: gbiRestErrorResponse5Schema },
      },
    ];
  }

  export type BusinessInternetlistDeviceInformationRequest = {
    body: GbideviceId5;
  };

  export class BusinessInternetlistDeviceInformationError extends ResponseError<
    Declared<"gbiRestErrorResponse5", GbiRestErrorResponse5>
  > {
    static readonly errors: ErrorDecoders<BusinessInternetlistDeviceInformationError> = [
      {
        on: [400, 599],
        kind: "gbiRestErrorResponse5",
        decode: { kind: "json", schema: gbiRestErrorResponse5Schema },
      },
    ];
  }
}

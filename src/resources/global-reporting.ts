import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { eSimGlobalDeviceListSchema, type ESimGlobalDeviceList } from "../models/esim-global-device-list.js";
import {
  eSimProvhistoryRequestSchema,
  type ESimProvhistoryRequest,
} from "../models/esim-provhistory-request.js";
import { eSimRequestResponseSchema, type ESimRequestResponse } from "../models/esim-request-response.js";
import {
  eSimRestErrorResponseSchema,
  type ESimRestErrorResponse,
} from "../models/esim-rest-error-response.js";
import type { Servers } from "../servers.js";

export class GlobalReporting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  retrieveGlobalList(
    request: GlobalReporting.RetrieveGlobalListRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, GlobalReporting.RetrieveGlobalListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/devices/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: eSimGlobalDeviceListSchema },
      },
      {
        success: { kind: "json", schema: eSimRequestResponseSchema },
        errorFactory: GlobalReporting.RetrieveGlobalListError,
      },
      options,
    );
  }

  deviceprovhistoryUsingPost(
    request: GlobalReporting.DeviceprovhistoryUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, GlobalReporting.DeviceprovhistoryUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/devices/history/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: eSimProvhistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: eSimRequestResponseSchema },
        errorFactory: GlobalReporting.DeviceprovhistoryUsingPostError,
      },
      options,
    );
  }
}

export namespace GlobalReporting {
  export type RetrieveGlobalListRequest = {
    body: ESimGlobalDeviceList;
  };

  export class RetrieveGlobalListError extends ResponseError<
    | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<RetrieveGlobalListError> = [
      {
        on: 400,
        kind: "eSimRestErrorResponse",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 401,
        kind: "eSimRestErrorResponse2",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 403,
        kind: "eSimRestErrorResponse3",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 404,
        kind: "eSimRestErrorResponse4",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 406,
        kind: "eSimRestErrorResponse5",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 429,
        kind: "eSimRestErrorResponse6",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: [400, 599],
        kind: "eSimRestErrorResponse7",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
    ];
  }

  export type DeviceprovhistoryUsingPostRequest = {
    body: ESimProvhistoryRequest;
  };

  export class DeviceprovhistoryUsingPostError extends ResponseError<
    | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<DeviceprovhistoryUsingPostError> = [
      {
        on: 400,
        kind: "eSimRestErrorResponse",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 401,
        kind: "eSimRestErrorResponse2",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 403,
        kind: "eSimRestErrorResponse3",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 404,
        kind: "eSimRestErrorResponse4",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 406,
        kind: "eSimRestErrorResponse5",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: 429,
        kind: "eSimRestErrorResponse6",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
      {
        on: [400, 599],
        kind: "eSimRestErrorResponse7",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
    ];
  }
}

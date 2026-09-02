import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { eSimProfileRequestSchema, type ESimProfileRequest } from "../models/esim-profile-request.js";
import { eSimProfileRequest2Schema, type ESimProfileRequest2 } from "../models/esim-profile-request2.js";
import { eSimRequestResponseSchema, type ESimRequestResponse } from "../models/esim-request-response.js";
import {
  eSimRestErrorResponseSchema,
  type ESimRestErrorResponse,
} from "../models/esim-rest-error-response.js";
import { profileRequest2Schema, type ProfileRequest2 } from "../models/profile-request2.js";
import type { Servers } from "../servers.js";

export class SimActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  newactivatecode(
    request: SimActions.NewactivatecodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, SimActions.NewactivatecodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/renew_activation_code"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: eSimProfileRequest2Schema },
      },
      {
        success: { kind: "json", schema: eSimRequestResponseSchema },
        errorFactory: SimActions.NewactivatecodeError,
      },
      options,
    );
  }

  setactivateUsingPost(
    request: SimActions.SetactivateUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, SimActions.SetactivateUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: eSimProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: eSimRequestResponseSchema },
        errorFactory: SimActions.SetactivateUsingPostError,
      },
      options,
    );
  }

  setdeactivateUsingPost(
    request: SimActions.SetdeactivateUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, SimActions.SetdeactivateUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/profile/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: profileRequest2Schema },
      },
      {
        success: { kind: "json", schema: eSimRequestResponseSchema },
        errorFactory: SimActions.SetdeactivateUsingPostError,
      },
      options,
    );
  }
}

export namespace SimActions {
  export type NewactivatecodeRequest = {
    body: ESimProfileRequest2;
  };

  export class NewactivatecodeError extends ResponseError<
    | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<NewactivatecodeError> = [
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

  export type SetactivateUsingPostRequest = {
    body: ESimProfileRequest;
  };

  export class SetactivateUsingPostError extends ResponseError<
    | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<SetactivateUsingPostError> = [
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

  export type SetdeactivateUsingPostRequest = {
    body: ProfileRequest2;
  };

  export class SetdeactivateUsingPostError extends ResponseError<
    | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
    | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<SetdeactivateUsingPostError> = [
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

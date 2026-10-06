import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { eSimProfileRequestSchema, type ESimProfileRequest } from "../models/esim-profile-request.js";
import { eSimProfileRequest2Schema, type ESimProfileRequest2 } from "../models/esim-profile-request2.js";
import { eSimRequestResponseSchema, type ESimRequestResponse } from "../models/esim-request-response.js";
import {
  eSimRestErrorResponseSchema,
  type ESimRestErrorResponse,
} from "../models/esim-rest-error-response.js";
import { profileRequest2Schema, type ProfileRequest2 } from "../models/profile-request2.js";
import type { Servers } from "../servers.js";

/**
 * Activate and Deactivate the SIM.
 */
export class SimActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a new activation code.
   *
   * @remarks
   * System assign a new activation code to reactivate a deactivated device. **Note:** the
   * previously assigned ICCID must be used to request a new activation code.
   *
   * @returns Request ID
   *
   * @throws {@link SimActions.NewactivatecodeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  newactivatecode(
    request: SimActions.NewactivatecodeRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, SimActions.NewactivatecodeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/renew_activation_code"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: eSimProfileRequest2Schema },
      },
      {
        success: { kind: "json", schema: eSimRequestResponseSchema },
        errorFactory: SimActions.NewactivatecodeError,
      },
      options,
    );
  }

  /**
   * Activate a SIM.
   *
   * @remarks
   * Uses the profile to activate the SIM.
   *
   * @returns Request ID
   *
   * @throws {@link SimActions.SetactivateUsingPostError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setactivateUsingPost(
    request: SimActions.SetactivateUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, SimActions.SetactivateUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/activate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: eSimProfileRequestSchema },
      },
      {
        success: { kind: "json", schema: eSimRequestResponseSchema },
        errorFactory: SimActions.SetactivateUsingPostError,
      },
      options,
    );
  }

  /**
   * Deactivate a SIM.
   *
   * @remarks
   * Uses the profile to deactivate the SIM.
   *
   * @returns Request ID
   *
   * @throws {@link SimActions.SetdeactivateUsingPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setdeactivateUsingPost(
    request: SimActions.SetdeactivateUsingPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ESimRequestResponse, SimActions.SetdeactivateUsingPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/profile/actions/deactivate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Device Profile Query */
    body: ESimProfileRequest2;
  };

  export class NewactivatecodeError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
    >;

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
        on: "default",
        kind: "eSimRestErrorResponse7",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
    ];
  }

  export type SetactivateUsingPostRequest = {
    /** Device Profile Query */
    body: ESimProfileRequest;
  };

  export class SetactivateUsingPostError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
    >;

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
        on: "default",
        kind: "eSimRestErrorResponse7",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
    ];
  }

  export type SetdeactivateUsingPostRequest = {
    /** Device Profile Query */
    body: ProfileRequest2;
  };

  export class SetdeactivateUsingPostError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"eSimRestErrorResponse", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse2", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse3", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse4", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse5", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse6", ESimRestErrorResponse>
      | Declared<"eSimRestErrorResponse7", ESimRestErrorResponse>
    >;

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
        on: "default",
        kind: "eSimRestErrorResponse7",
        decode: { kind: "json", schema: eSimRestErrorResponseSchema },
      },
    ];
  }
}

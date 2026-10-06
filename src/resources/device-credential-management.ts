import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { credentialsRequestSchema, type CredentialsRequest } from "../models/credentials-request.js";
import { dropResponseSchema, type DropResponse } from "../models/drop-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { generateResponseSchema, type GenerateResponse } from "../models/generate-response.js";
import { retrieveResponseSchema, type RetrieveResponse } from "../models/retrieve-response.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for managing HPL device credentials
 */
export class DeviceCredentialManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Drop Credentials
   *
   * @returns Credentials dropped successfully
   *
   * @throws {@link DeviceCredentialManagement.DropCredentialsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dropCredentials(
    request: DeviceCredentialManagement.DropCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<DropResponse, DeviceCredentialManagement.DropCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseCredentials("/credentials/drop"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: credentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: dropResponseSchema },
        errorFactory: DeviceCredentialManagement.DropCredentialsError,
      },
      options,
    );
  }

  /**
   * Generate Credentials
   *
   * @returns Credentials generated successfully
   *
   * @throws {@link DeviceCredentialManagement.GenerateCredentialsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateCredentials(
    request: DeviceCredentialManagement.GenerateCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateResponse, DeviceCredentialManagement.GenerateCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseCredentials("/credentials/generate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: credentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: generateResponseSchema },
        errorFactory: DeviceCredentialManagement.GenerateCredentialsError,
      },
      options,
    );
  }

  /**
   * Reset Credentials
   *
   * @returns Credentials reset successfully
   *
   * @throws {@link DeviceCredentialManagement.ResetCredentialsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resetCredentials(
    request: DeviceCredentialManagement.ResetCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateResponse, DeviceCredentialManagement.ResetCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseCredentials("/credentials/reset"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: credentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: generateResponseSchema },
        errorFactory: DeviceCredentialManagement.ResetCredentialsError,
      },
      options,
    );
  }

  /**
   * Retrieve Credentials
   *
   * @returns Successful retrieval
   *
   * @throws {@link DeviceCredentialManagement.RetrieveCredentialsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCredentials(
    request: DeviceCredentialManagement.RetrieveCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveResponse, DeviceCredentialManagement.RetrieveCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.hyperPreciseCredentials("/credentials/retrieve"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: credentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: retrieveResponseSchema },
        errorFactory: DeviceCredentialManagement.RetrieveCredentialsError,
      },
      options,
    );
  }
}

export namespace DeviceCredentialManagement {
  export type DropCredentialsRequest = {
    body: CredentialsRequest;
  };

  export class DropCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<DropCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GenerateCredentialsRequest = {
    body: CredentialsRequest;
  };

  export class GenerateCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<GenerateCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResetCredentialsRequest = {
    body: CredentialsRequest;
  };

  export class ResetCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorResponse", ErrorResponse>>;

    static readonly errors: ErrorDecoders<ResetCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RetrieveCredentialsRequest = {
    body: CredentialsRequest;
  };

  export class RetrieveCredentialsError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"errorResponse", ErrorResponse> | Declared<"error401", undefined>
    >;

    static readonly errors: ErrorDecoders<RetrieveCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}

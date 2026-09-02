import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { credentialsRequestSchema, type CredentialsRequest } from "../models/credentials-request.js";
import { dropResponseSchema, type DropResponse } from "../models/drop-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { generateResponseSchema, type GenerateResponse } from "../models/generate-response.js";
import { retrieveResponseSchema, type RetrieveResponse } from "../models/retrieve-response.js";
import type { Servers } from "../servers.js";

export class DeviceCredentialManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  dropCredentials(
    request: DeviceCredentialManagement.DropCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<DropResponse, DeviceCredentialManagement.DropCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/credentials/drop"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: credentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: dropResponseSchema },
        errorFactory: DeviceCredentialManagement.DropCredentialsError,
      },
      options,
    );
  }

  generateCredentials(
    request: DeviceCredentialManagement.GenerateCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateResponse, DeviceCredentialManagement.GenerateCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/credentials/generate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: credentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: generateResponseSchema },
        errorFactory: DeviceCredentialManagement.GenerateCredentialsError,
      },
      options,
    );
  }

  resetCredentials(
    request: DeviceCredentialManagement.ResetCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateResponse, DeviceCredentialManagement.ResetCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/credentials/reset"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: credentialsRequestSchema },
      },
      {
        success: { kind: "json", schema: generateResponseSchema },
        errorFactory: DeviceCredentialManagement.ResetCredentialsError,
      },
      options,
    );
  }

  retrieveCredentials(
    request: DeviceCredentialManagement.RetrieveCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveResponse, DeviceCredentialManagement.RetrieveCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/credentials/retrieve"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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

  export class DropCredentialsError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<DropCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GenerateCredentialsRequest = {
    body: CredentialsRequest;
  };

  export class GenerateCredentialsError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<GenerateCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResetCredentialsRequest = {
    body: CredentialsRequest;
  };

  export class ResetCredentialsError extends ResponseError<Declared<"errorResponse", ErrorResponse>> {
    static readonly errors: ErrorDecoders<ResetCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RetrieveCredentialsRequest = {
    body: CredentialsRequest;
  };

  export class RetrieveCredentialsError extends ResponseError<
    Declared<"errorResponse", ErrorResponse> | Declared<"error401", undefined>
  > {
    static readonly errors: ErrorDecoders<RetrieveCredentialsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}

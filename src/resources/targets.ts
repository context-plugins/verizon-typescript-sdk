import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createIoTApplicationRequestSchema,
  type CreateIoTApplicationRequest,
} from "../models/create-io-tapplication-request.js";
import {
  createIoTApplicationResponseSchema,
  type CreateIoTApplicationResponse,
} from "../models/create-io-tapplication-response.js";
import { createTargetRequestSchema, type CreateTargetRequest } from "../models/create-target-request.js";
import { deleteTargetRequestSchema, type DeleteTargetRequest } from "../models/delete-target-request.js";
import {
  generateExternalIdRequestSchema,
  type GenerateExternalIdRequest,
} from "../models/generate-external-id-request.js";
import {
  generateExternalIdResultSchema,
  type GenerateExternalIdResult,
} from "../models/generate-external-id-result.js";
import { queryTargetRequestSchema, type QueryTargetRequest } from "../models/query-target-request.js";
import { targetSchema, type Target } from "../models/target.js";
import type { Servers } from "../servers.js";

export class Targets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAzureCentralIoTApplication(
    request: Targets.CreateAzureCentralIoTApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateIoTApplicationResponse, ResponseError> {
    return this.#rawClient.execute<CreateIoTApplicationResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/targets/actions/newaic"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        headers: [{ name: "BillingaccountID", value: request.billingaccountId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createIoTApplicationRequestSchema },
      },
      {
        success: { kind: "json", schema: createIoTApplicationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTarget(
    request: Targets.CreateTargetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Target, ResponseError> {
    return this.#rawClient.execute<Target, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/targets"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: createTargetRequestSchema },
      },
      {
        success: { kind: "json", schema: targetSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTarget(
    request: Targets.DeleteTargetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/targets/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deleteTargetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  generateTargetExternalId(
    request: Targets.GenerateTargetExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateExternalIdResult, ResponseError> {
    return this.#rawClient.execute<GenerateExternalIdResult, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/targets/actions/newextid"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: generateExternalIdRequestSchema },
      },
      {
        success: { kind: "json", schema: generateExternalIdResultSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  queryTarget(
    request: Targets.QueryTargetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Target[], ResponseError> {
    return this.#rawClient.execute<Target[], ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/targets/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: queryTargetRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => targetSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Targets {
  export type CreateAzureCentralIoTApplicationRequest = {
    billingaccountId: string;
    body: CreateIoTApplicationRequest;
  };

  export type CreateTargetRequestParams = {
    body: CreateTargetRequest;
  };

  export type DeleteTargetRequestParams = {
    body: DeleteTargetRequest;
  };

  export type GenerateTargetExternalIdRequest = {
    body: GenerateExternalIdRequest;
  };

  export type QueryTargetRequestParams = {
    body: QueryTargetRequest;
  };
}

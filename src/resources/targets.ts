import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Deploy a new Azure IoT Central application based on the Verizon ARM template within the
   * specified Azure Active Directory account.
   *
   * @returns A success response includes the full subscription resource definition.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAzureCentralIoTApplication(
    request: Targets.CreateAzureCentralIoTApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateIoTApplicationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/targets/actions/newaic"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "BillingaccountID", value: request.billingaccountId, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createIoTApplicationRequestSchema },
      },
      {
        success: { kind: "json", schema: createIoTApplicationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Define a target to receive data streams, alerts, or callbacks. After creating the target
   * resource, use its ID in a subscription to set up a data stream.
   *
   * @returns A success response includes the full target resource definition.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTarget(
    request: Targets.CreateTargetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Target, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/targets"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTargetRequestSchema },
      },
      {
        success: { kind: "json", schema: targetSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a target from a ThingSpace account.
   *
   * @returns Target deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTarget(
    request: Targets.DeleteTargetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/targets/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteTargetRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a unique string that ThingSpace will pass to AWS for increased security.
   *
   * @returns Returns a new external ID.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateTargetExternalId(
    request: Targets.GenerateTargetExternalIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateExternalIdResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/targets/actions/newextid"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: generateExternalIdRequestSchema },
      },
      {
        success: { kind: "json", schema: generateExternalIdResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search for targets by property values. Returns an array of all matching target resources.
   *
   * @returns A success response includes an array of all matching targets. Each target includes the
   * full target resource definition.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queryTarget(
    request: Targets.QueryTargetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Target[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/targets/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: queryTargetRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => targetSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Targets {
  export type CreateAzureCentralIoTApplicationRequest = {
    /** TThe ThingSpace ID of the authenticating billing account. */
    billingaccountId: string;
    /**
     * The request body must include the UUID of the subscription that you want to update plus any
     * properties that you want to change.
     */
    body: CreateIoTApplicationRequest;
  };

  export type CreateTargetRequestParams = {
    /** The request body provides the details of the target that you want to create. */
    body: CreateTargetRequest;
  };

  export type DeleteTargetRequestParams = {
    /** The request body identifies the target to delete. */
    body: DeleteTargetRequest;
  };

  export type GenerateTargetExternalIdRequest = {
    /** The request body only contains the authenticating account. */
    body: GenerateExternalIdRequest;
  };

  export type QueryTargetRequestParams = {
    /** Search for targets by property values. */
    body: QueryTargetRequest;
  };
}

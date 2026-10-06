import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createSubscriptionRequestSchema,
  type CreateSubscriptionRequest,
} from "../models/create-subscription-request.js";
import {
  deleteSubscriptionRequestSchema,
  type DeleteSubscriptionRequest,
} from "../models/delete-subscription-request.js";
import {
  querySubscriptionRequestSchema,
  type QuerySubscriptionRequest,
} from "../models/query-subscription-request.js";
import { subscriptionSchema, type Subscription } from "../models/subscription.js";
import type { Servers } from "../servers.js";

export class CloudConnectorSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a subscription to define a streaming channel that sends data from devices in the account
   * to an endpoint defined in a target resource.
   *
   * @returns Returns full subscription resource definition.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubscription(
    request: CloudConnectorSubscriptions.CreateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Subscription, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/subscriptions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: subscriptionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a subscription from a ThingSpace account.
   *
   * @returns Subscription deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubscription(
    request: CloudConnectorSubscriptions.DeleteSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/subscriptions/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteSubscriptionRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search for subscriptions by property values. Returns an array of all matching subscription
   * resources.
   *
   * @returns Returns an array of all matching subscriptions. Each subscription includes the full
   * subscription resource definition.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  querySubscription(
    request: CloudConnectorSubscriptions.QuerySubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Subscription[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.cloudConnector("/subscriptions/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: querySubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => subscriptionSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace CloudConnectorSubscriptions {
  export type CreateSubscriptionRequestParams = {
    /** The request body provides the details of the subscription that you want to create. */
    body: CreateSubscriptionRequest;
  };

  export type DeleteSubscriptionRequestParams = {
    /** The request body identifies the subscription to delete. */
    body: DeleteSubscriptionRequest;
  };

  export type QuerySubscriptionRequestParams = {
    /** The request body specifies fields and values to match. */
    body: QuerySubscriptionRequest;
  };
}

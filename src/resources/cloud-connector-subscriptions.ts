import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createSubscription(
    request: CloudConnectorSubscriptions.CreateSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Subscription, ResponseError> {
    return this.#rawClient.execute<Subscription, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/subscriptions"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: createSubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: subscriptionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSubscription(
    request: CloudConnectorSubscriptions.DeleteSubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/subscriptions/actions/delete"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: deleteSubscriptionRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  querySubscription(
    request: CloudConnectorSubscriptions.QuerySubscriptionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Subscription[], ResponseError> {
    return this.#rawClient.execute<Subscription[], ResponseError>(
      {
        method: "POST",
        url: this.#servers.cloudConnector("/subscriptions/actions/query"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: querySubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => subscriptionSchema)) },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace CloudConnectorSubscriptions {
  export type CreateSubscriptionRequestParams = {
    body: CreateSubscriptionRequest;
  };

  export type DeleteSubscriptionRequestParams = {
    body: DeleteSubscriptionRequest;
  };

  export type QuerySubscriptionRequestParams = {
    body: QuerySubscriptionRequest;
  };
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { defaultResponseSchema, type DefaultResponse } from "../models/default-response.js";
import { subscribeRequestSchema, type SubscribeRequest } from "../models/subscribe-request.js";
import { success201Schema, type Success201 } from "../models/success201.js";
import type { Servers } from "../servers.js";

/**
 * Subscribe or Unsubscribe to the ThingSpace Quality of Service API.
 */
export class ThingSpaceQualityOfServiceApiActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a ThingSpace QoS API subscription.
   *
   * @remarks
   * Creates a QoS elevation subscription ID and activates the subscription.
   *
   * @returns Success Response
   *
   * @throws {@link
   * ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAThingSpaceQualityOfServiceApiSubscription(
    request: ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Success201,
    ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/enhanceQoS"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscribeRequestSchema },
      },
      {
        success: { kind: "json", schema: success201Schema },
        errorFactory:
          ThingSpaceQualityOfServiceApiActions.CreateAThingSpaceQualityOfServiceApiSubscriptionError,
      },
      options,
    );
  }

  /**
   * Stop a ThingSpace QoS API Subscription.
   *
   * @remarks
   * Stops an active ThingSpace Quality of Service API subscription using the account name and the
   * subscription ID.
   *
   * @returns Success Response
   *
   * @throws {@link
   * ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopAThingSpaceQualityOfServiceApiSubscription(
    request: ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Success201,
    ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/actions/enhanceQoS"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "qosSubscriptionId", value: request.qosSubscriptionId, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: success201Schema },
        errorFactory:
          ThingSpaceQualityOfServiceApiActions.StopAThingSpaceQualityOfServiceApiSubscriptionError,
      },
      options,
    );
  }
}

export namespace ThingSpaceQualityOfServiceApiActions {
  export type CreateAThingSpaceQualityOfServiceApiSubscriptionRequest = {
    /** The request details to create a ThingSpace Quality of Service API subscription. */
    body: SubscribeRequest;
  };

  export class CreateAThingSpaceQualityOfServiceApiSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaultResponse", DefaultResponse>>;

    static readonly errors: ErrorDecoders<CreateAThingSpaceQualityOfServiceApiSubscriptionError> = [
      { on: "default", kind: "defaultResponse", decode: { kind: "json", schema: defaultResponseSchema } },
    ];
  }

  export type StopAThingSpaceQualityOfServiceApiSubscriptionRequest = {
    accountName: string;
    qosSubscriptionId: string;
  };

  export class StopAThingSpaceQualityOfServiceApiSubscriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaultResponse", DefaultResponse>>;

    static readonly errors: ErrorDecoders<StopAThingSpaceQualityOfServiceApiSubscriptionError> = [
      { on: "default", kind: "defaultResponse", decode: { kind: "json", schema: defaultResponseSchema } },
    ];
  }
}

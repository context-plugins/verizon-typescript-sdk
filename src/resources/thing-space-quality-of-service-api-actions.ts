import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { defaultResponseSchema, type DefaultResponse } from "../models/default-response.js";
import { subscribeRequestSchema, type SubscribeRequest } from "../models/subscribe-request.js";
import { success201Schema, type Success201 } from "../models/success201.js";
import type { Servers } from "../servers.js";

export class ThingSpaceQualityOfServiceApiActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

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
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/enhanceQoS"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/actions/enhanceQoS"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "qosSubscriptionId", value: request.qosSubscriptionId, schema: s.string() },
        ],
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
    body: SubscribeRequest;
  };

  export class CreateAThingSpaceQualityOfServiceApiSubscriptionError extends ResponseError<
    Declared<"defaultResponse", DefaultResponse>
  > {
    static readonly errors: ErrorDecoders<CreateAThingSpaceQualityOfServiceApiSubscriptionError> = [
      { on: [400, 599], kind: "defaultResponse", decode: { kind: "json", schema: defaultResponseSchema } },
    ];
  }

  export type StopAThingSpaceQualityOfServiceApiSubscriptionRequest = {
    accountName: string;
    qosSubscriptionId: string;
  };

  export class StopAThingSpaceQualityOfServiceApiSubscriptionError extends ResponseError<
    Declared<"defaultResponse", DefaultResponse>
  > {
    static readonly errors: ErrorDecoders<StopAThingSpaceQualityOfServiceApiSubscriptionError> = [
      { on: [400, 599], kind: "defaultResponse", decode: { kind: "json", schema: defaultResponseSchema } },
    ];
  }
}

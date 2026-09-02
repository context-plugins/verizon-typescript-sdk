import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { deviceLocationResultSchema, type DeviceLocationResult } from "../models/device-location-result.js";
import {
  deviceLocationSubscriptionSchema,
  type DeviceLocationSubscription,
} from "../models/device-location-subscription.js";
import type { Servers } from "../servers.js";

export class DevicesLocationSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getLocationServiceSubscriptionStatus(
    request: DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<
    DeviceLocationSubscription,
    DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceLocation("/subscriptions/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSubscriptionSchema },
        errorFactory: DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError,
      },
      options,
    );
  }

  getLocationServiceUsage(
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, DevicesLocationSubscriptions.GetLocationServiceUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceLocation("/usage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: DevicesLocationSubscriptions.GetLocationServiceUsageError,
      },
      options,
    );
  }
}

export namespace DevicesLocationSubscriptions {
  export type GetLocationServiceSubscriptionStatusRequest = {
    accountName: string;
  };

  export class GetLocationServiceSubscriptionStatusError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<GetLocationServiceSubscriptionStatusError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export class GetLocationServiceUsageError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<GetLocationServiceUsageError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}

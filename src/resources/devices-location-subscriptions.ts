import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deviceLocationResultSchema, type DeviceLocationResult } from "../models/device-location-result.js";
import {
  deviceLocationSubscriptionSchema,
  type DeviceLocationSubscription,
} from "../models/device-location-subscription.js";
import type { Servers } from "../servers.js";

/**
 * Get an account's location service subscription status and usage.
 */
export class DevicesLocationSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a location subscription status
   *
   * @remarks
   * This subscriptions endpoint retrieves an account's current location subscription status.
   *
   * @returns Device location subscription information.
   *
   * @throws {@link DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.deviceLocation("/subscriptions/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSubscriptionSchema },
        errorFactory: DevicesLocationSubscriptions.GetLocationServiceSubscriptionStatusError,
      },
      options,
    );
  }

  /**
   * Obtain billable usage for accounts during a specified date range
   *
   * @remarks
   * This endpoint allows user to search for billable usage for accounts based on the provided date
   * range.
   *
   * @returns Billable usage report.
   *
   * @throws {@link DevicesLocationSubscriptions.GetLocationServiceUsageError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLocationServiceUsage(
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, DevicesLocationSubscriptions.GetLocationServiceUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceLocation("/usage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** Account identifier in "##########-#####". */
    accountName: string;
  };

  export class GetLocationServiceSubscriptionStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<GetLocationServiceSubscriptionStatusError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export class GetLocationServiceUsageError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<GetLocationServiceUsageError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import { fotaV3SubscriptionSchema, type FotaV3Subscription } from "../models/fota-v3-subscription.js";
import type { Servers } from "../servers.js";

/**
 * Information about current FOTA subscriptions.
 */
export class SoftwareManagementSubscriptionsV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a FOTA subscription
   *
   * @remarks
   * This endpoint retrieves a FOTA subscription by account.
   *
   * @returns FOTA Subscription.
   *
   * @throws {@link SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountSubscriptionStatus3(
    request: SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV3Subscription, SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/subscriptions/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV3SubscriptionSchema },
        errorFactory: SoftwareManagementSubscriptionsV3.GetAccountSubscriptionStatus3Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementSubscriptionsV3 {
  export type GetAccountSubscriptionStatus3Request = {
    /** Account identifier. */
    acc: string;
  };

  export class GetAccountSubscriptionStatus3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<GetAccountSubscriptionStatus3Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import { fotaV2SubscriptionSchema, type FotaV2Subscription } from "../models/fota-v2-subscription.js";
import type { Servers } from "../servers.js";

/**
 * Information about current FOTA subscriptions.
 */
export class SoftwareManagementSubscriptionsV2 {
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
   * @throws {@link SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountSubscriptionStatus2(
    request: SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2Subscription, SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/subscriptions/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fotaV2SubscriptionSchema },
        errorFactory: SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementSubscriptionsV2 {
  export type GetAccountSubscriptionStatus2Request = {
    /** Account identifier. */
    account: string;
  };

  export class GetAccountSubscriptionStatus2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetAccountSubscriptionStatus2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import { fotaV2SubscriptionSchema, type FotaV2Subscription } from "../models/fota-v2-subscription.js";
import type { Servers } from "../servers.js";

export class SoftwareManagementSubscriptionsV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAccountSubscriptionStatus2(
    request: SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<FotaV2Subscription, SoftwareManagementSubscriptionsV2.GetAccountSubscriptionStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/subscriptions/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
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
    account: string;
  };

  export class GetAccountSubscriptionStatus2Error extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<GetAccountSubscriptionStatus2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}

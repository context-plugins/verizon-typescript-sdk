import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { accountLicenseInfoSchema, type AccountLicenseInfo } from "../models/account-license-info.js";
import { fotaV1ResultSchema, type FotaV1Result } from "../models/fota-v1-result.js";
import {
  v1AccountSubscriptionSchema,
  type V1AccountSubscription,
} from "../models/v1-account-subscription.js";
import type { Servers } from "../servers.js";

export class SoftwareManagementSubscriptionsV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAccountLicenseStatus(
    request: SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountLicenseInfo, SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/licenses/{account}/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountLicenseInfoSchema },
        errorFactory: SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError,
      },
      options,
    );
  }

  getAccountSubscriptionStatus(
    request: SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AccountSubscription, SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/subscriptions/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1AccountSubscriptionSchema },
        errorFactory: SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError,
      },
      options,
    );
  }
}

export namespace SoftwareManagementSubscriptionsV1 {
  export type GetAccountLicenseStatusRequest = {
    account: string;
    startIndex: string;
  };

  export class GetAccountLicenseStatusError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<GetAccountLicenseStatusError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type GetAccountSubscriptionStatusRequest = {
    account: string;
  };

  export class GetAccountSubscriptionStatusError extends ResponseError<
    Declared<"fotaV1Result", FotaV1Result>
  > {
    static readonly errors: ErrorDecoders<GetAccountSubscriptionStatusError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}

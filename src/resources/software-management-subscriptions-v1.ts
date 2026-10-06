import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { accountLicenseInfoSchema, type AccountLicenseInfo } from "../models/account-license-info.js";
import { fotaV1ResultSchema, type FotaV1Result } from "../models/fota-v1-result.js";
import {
  v1AccountSubscriptionSchema,
  type V1AccountSubscription,
} from "../models/v1-account-subscription.js";
import type { Servers } from "../servers.js";

/**
 * View Software Management Services subscription status.
 */
export class SoftwareManagementSubscriptionsV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get account license information
   *
   * @remarks
   * Returns information about an account's Software Management Services licenses and a list of
   * licensed devices.
   *
   * @returns Account license information.
   *
   * @throws {@link SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountLicenseStatus(
    request: SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountLicenseInfo, SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/licenses/{account}/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountLicenseInfoSchema },
        errorFactory: SoftwareManagementSubscriptionsV1.GetAccountLicenseStatusError,
      },
      options,
    );
  }

  /**
   * Get account subscription status
   *
   * @remarks
   * This subscriptions endpoint retrieves an account's current Software Management Service
   * subscription status.
   *
   * @returns Account subscription information.
   *
   * @throws {@link SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountSubscriptionStatus(
    request: SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AccountSubscription, SoftwareManagementSubscriptionsV1.GetAccountSubscriptionStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/subscriptions/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [],
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
    /** Account identifier in "##########-#####". */
    account: string;
    /**
     * The zero-based number of the first record to return. Set startIndex=0 for the first request.
     * If there are more than 1,000 devices in the response, set startIndex=1000 for the second
     * request, 2000 for the third request, etc.
     */
    startIndex: string;
  };

  export class GetAccountLicenseStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<GetAccountLicenseStatusError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type GetAccountSubscriptionStatusRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
  };

  export class GetAccountSubscriptionStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<GetAccountSubscriptionStatusError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}

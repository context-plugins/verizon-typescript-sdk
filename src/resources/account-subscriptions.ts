import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { securityResultSchema, type SecurityResult } from "../models/security-result.js";
import {
  securitySubscriptionRequestSchema,
  type SecuritySubscriptionRequest,
} from "../models/security-subscription-request.js";
import {
  securitySubscriptionResultSchema,
  type SecuritySubscriptionResult,
} from "../models/security-subscription-result.js";
import type { Servers } from "../servers.js";

export class AccountSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns information about all the subscriptions for an account.
   *
   * @remarks
   * Retrieves the total number of SIM-Secure for IoT subscription licenses purchased for your
   * account by license type, and lists the number of licenses assigned and available for each
   * license type.
   *
   * @returns Security subscription result.
   *
   * @throws {@link AccountSubscriptions.ListAccountSubscriptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountSubscriptions(
    request: AccountSubscriptions.ListAccountSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SecuritySubscriptionResult, AccountSubscriptions.ListAccountSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.m2M("/v1/accounts/subscriptions/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Request-ID", value: request.xRequestId, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: securitySubscriptionRequestSchema },
      },
      {
        success: { kind: "json", schema: securitySubscriptionResultSchema },
        errorFactory: AccountSubscriptions.ListAccountSubscriptionsError,
      },
      options,
    );
  }
}

export namespace AccountSubscriptions {
  export type ListAccountSubscriptionsRequest = {
    /** Transaction Id. */
    xRequestId?: string;
    /** Request for account subscription. */
    body: SecuritySubscriptionRequest;
  };

  export class ListAccountSubscriptionsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"securityResult", SecurityResult>
      | Declared<"securityResult2", SecurityResult>
      | Declared<"securityResult3", SecurityResult>
      | Declared<"securityResult4", SecurityResult>
      | Declared<"securityResult5", SecurityResult>
      | Declared<"securityResult6", SecurityResult>
      | Declared<"securityResult7", SecurityResult>
    >;

    static readonly errors: ErrorDecoders<ListAccountSubscriptionsError> = [
      { on: 400, kind: "securityResult", decode: { kind: "json", schema: securityResultSchema } },
      { on: 401, kind: "securityResult2", decode: { kind: "json", schema: securityResultSchema } },
      { on: 403, kind: "securityResult3", decode: { kind: "json", schema: securityResultSchema } },
      { on: 404, kind: "securityResult4", decode: { kind: "json", schema: securityResultSchema } },
      { on: 406, kind: "securityResult5", decode: { kind: "json", schema: securityResultSchema } },
      { on: 429, kind: "securityResult6", decode: { kind: "json", schema: securityResultSchema } },
      { on: "default", kind: "securityResult7", decode: { kind: "json", schema: securityResultSchema } },
    ];
  }
}

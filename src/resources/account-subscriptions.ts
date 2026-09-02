import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  listAccountSubscriptions(
    request: AccountSubscriptions.ListAccountSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SecuritySubscriptionResult, AccountSubscriptions.ListAccountSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.m2M("/v1/accounts/subscriptions/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        headers: [{ name: "X-Request-ID", value: request.xRequestId, schema: s.optional(s.string()) }],
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
    xRequestId?: string;
    body: SecuritySubscriptionRequest;
  };

  export class ListAccountSubscriptionsError extends ResponseError<
    | Declared<"securityResult", SecurityResult>
    | Declared<"securityResult2", SecurityResult>
    | Declared<"securityResult3", SecurityResult>
    | Declared<"securityResult4", SecurityResult>
    | Declared<"securityResult5", SecurityResult>
    | Declared<"securityResult6", SecurityResult>
    | Declared<"securityResult7", SecurityResult>
  > {
    static readonly errors: ErrorDecoders<ListAccountSubscriptionsError> = [
      { on: 400, kind: "securityResult", decode: { kind: "json", schema: securityResultSchema } },
      { on: 401, kind: "securityResult2", decode: { kind: "json", schema: securityResultSchema } },
      { on: 403, kind: "securityResult3", decode: { kind: "json", schema: securityResultSchema } },
      { on: 404, kind: "securityResult4", decode: { kind: "json", schema: securityResultSchema } },
      { on: 406, kind: "securityResult5", decode: { kind: "json", schema: securityResultSchema } },
      { on: 429, kind: "securityResult6", decode: { kind: "json", schema: securityResultSchema } },
      { on: [400, 599], kind: "securityResult7", decode: { kind: "json", schema: securityResultSchema } },
    ];
  }
}

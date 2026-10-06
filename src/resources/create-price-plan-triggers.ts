import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  ruleRestErrorResponseSchema,
  type RuleRestErrorResponse,
} from "../models/rule-rest-error-response.js";
import { triggerResponseSchema, type TriggerResponse } from "../models/trigger-response.js";
import { v2TriggersRequestSchema, type V2TriggersRequest } from "../models/unions/v2-triggers-request.js";
import type { Servers } from "../servers.js";

/**
 * Create rules to trigger changes for price plans based on usage
 */
export class CreatePricePlanTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a usage trigger at the account level, device level or a price plan trigger for all
   * devices on the account
   *
   * @returns Successful request
   *
   * @throws {@link CreatePricePlanTriggers.CreateTriggerRulesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTriggerRules(
    request: CreatePricePlanTriggers.CreateTriggerRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerResponse, CreatePricePlanTriggers.CreateTriggerRulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/v2/triggers"),
        auth: anyAuth(this.#auth.thingspaceOauth1, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2TriggersRequestSchema },
      },
      {
        success: { kind: "json", schema: triggerResponseSchema },
        errorFactory: CreatePricePlanTriggers.CreateTriggerRulesError,
      },
      options,
    );
  }
}

export namespace CreatePricePlanTriggers {
  export type CreateTriggerRulesRequest = {
    /** Create a trigger */
    body: V2TriggersRequest;
  };

  export class CreateTriggerRulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"ruleRestErrorResponse", RuleRestErrorResponse>>;

    static readonly errors: ErrorDecoders<CreateTriggerRulesError> = [
      {
        on: "default",
        kind: "ruleRestErrorResponse",
        decode: { kind: "json", schema: ruleRestErrorResponseSchema },
      },
    ];
  }
}

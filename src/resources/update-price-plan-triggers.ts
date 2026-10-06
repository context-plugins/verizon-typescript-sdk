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
import { v2TriggersRequest1Schema, type V2TriggersRequest1 } from "../models/unions/v2-triggers-request1.js";
import type { Servers } from "../servers.js";

/**
 * Update rules to trigger changes for price plans based on usage
 */
export class UpdatePricePlanTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Updates a usage trigger at the account level, device level or a price plan trigger for all
   * devices on the account
   *
   * @returns Successful request
   *
   * @throws {@link UpdatePricePlanTriggers.UpdateTriggerRulesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTriggerRules(
    request: UpdatePricePlanTriggers.UpdateTriggerRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerResponse, UpdatePricePlanTriggers.UpdateTriggerRulesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.thingspace("/v2/triggers"),
        auth: anyAuth(this.#auth.thingspaceOauth1, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2TriggersRequest1Schema },
      },
      {
        success: { kind: "json", schema: triggerResponseSchema },
        errorFactory: UpdatePricePlanTriggers.UpdateTriggerRulesError,
      },
      options,
    );
  }
}

export namespace UpdatePricePlanTriggers {
  export type UpdateTriggerRulesRequest = {
    /** Update a trigger */
    body: V2TriggersRequest1;
  };

  export class UpdateTriggerRulesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"ruleRestErrorResponse", RuleRestErrorResponse>>;

    static readonly errors: ErrorDecoders<UpdateTriggerRulesError> = [
      {
        on: "default",
        kind: "ruleRestErrorResponse",
        decode: { kind: "json", schema: ruleRestErrorResponseSchema },
      },
    ];
  }
}

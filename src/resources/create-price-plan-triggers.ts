import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import {
  ruleRestErrorResponseSchema,
  type RuleRestErrorResponse,
} from "../models/rule-rest-error-response.js";
import { triggerResponseSchema, type TriggerResponse } from "../models/trigger-response.js";
import { v2TriggersRequestSchema, type V2TriggersRequest } from "../models/unions/v2-triggers-request.js";
import type { Servers } from "../servers.js";

export class CreatePricePlanTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTriggerRules(
    request: CreatePricePlanTriggers.CreateTriggerRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerResponse, CreatePricePlanTriggers.CreateTriggerRulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/v2/triggers"),
        auth: anyAuth(this.#auth.thingspaceOauth1, this.#auth.vzM2MToken),
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
    body: V2TriggersRequest;
  };

  export class CreateTriggerRulesError extends ResponseError<
    Declared<"ruleRestErrorResponse", RuleRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<CreateTriggerRulesError> = [
      {
        on: [400, 599],
        kind: "ruleRestErrorResponse",
        decode: { kind: "json", schema: ruleRestErrorResponseSchema },
      },
    ];
  }
}

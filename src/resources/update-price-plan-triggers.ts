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
import { v2TriggersRequest1Schema, type V2TriggersRequest1 } from "../models/unions/v2-triggers-request1.js";
import type { Servers } from "../servers.js";

export class UpdatePricePlanTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  updateTriggerRules(
    request: UpdatePricePlanTriggers.UpdateTriggerRulesRequest,
    options?: RequestOptions,
  ): ApiPromise<TriggerResponse, UpdatePricePlanTriggers.UpdateTriggerRulesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.hyperPreciseCredentials("/v2/triggers"),
        auth: anyAuth(this.#auth.thingspaceOauth1, this.#auth.vzM2MToken),
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
    body: V2TriggersRequest1;
  };

  export class UpdateTriggerRulesError extends ResponseError<
    Declared<"ruleRestErrorResponse", RuleRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<UpdateTriggerRulesError> = [
      {
        on: [400, 599],
        kind: "ruleRestErrorResponse",
        decode: { kind: "json", schema: ruleRestErrorResponseSchema },
      },
    ];
  }
}

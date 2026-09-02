import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { rateplanSchema, type Rateplan } from "../models/rateplan.js";
import {
  ruleRestErrorResponseSchema,
  type RuleRestErrorResponse,
} from "../models/rule-rest-error-response.js";
import type { Servers } from "../servers.js";

export class RetrieveRatePlanList {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getRatePlanList(
    request: RetrieveRatePlanList.GetRatePlanListRequest,
    options?: RequestOptions,
  ): ApiPromise<Rateplan, RetrieveRatePlanList.GetRatePlanListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/v2/triggers/rateplanlist/{ecpdId}"),
        auth: anyAuth(this.#auth.thingspaceOauth1, this.#auth.vzM2MToken),
        pathParams: [{ name: "ecpdId", value: request.ecpdId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: rateplanSchema },
        errorFactory: RetrieveRatePlanList.GetRatePlanListError,
      },
      options,
    );
  }
}

export namespace RetrieveRatePlanList {
  export type GetRatePlanListRequest = {
    ecpdId: string;
  };

  export class GetRatePlanListError extends ResponseError<
    Declared<"ruleRestErrorResponse", RuleRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetRatePlanListError> = [
      {
        on: [400, 599],
        kind: "ruleRestErrorResponse",
        decode: { kind: "json", schema: ruleRestErrorResponseSchema },
      },
    ];
  }
}

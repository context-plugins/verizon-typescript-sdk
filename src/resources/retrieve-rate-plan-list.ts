import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { rateplanSchema, type Rateplan } from "../models/rateplan.js";
import {
  ruleRestErrorResponseSchema,
  type RuleRestErrorResponse,
} from "../models/rule-rest-error-response.js";
import type { Servers } from "../servers.js";

/**
 * Retrive a list of the rate plans associated with the account
 */
export class RetrieveRatePlanList {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get rate plan list
   *
   * @remarks
   * Retrieves the rate plans and rate plan details for a profile ID.
   *
   * @returns This is a syncronous response showing the rate plans associated.
   *
   * @throws {@link RetrieveRatePlanList.GetRatePlanListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRatePlanList(
    request: RetrieveRatePlanList.GetRatePlanListRequest,
    options?: RequestOptions,
  ): ApiPromise<Rateplan, RetrieveRatePlanList.GetRatePlanListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/v2/triggers/rateplanlist/{ecpdId}"),
        auth: anyAuth(this.#auth.thingspaceOauth1, this.#auth.vzM2MToken),
        pathParams: [{ name: "ecpdId", value: request.ecpdId, schema: s.string() }],
        query: [],
        headers: [],
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
    /** The Enterprise Customer Profile Database ID. This is the same as the accountName value */
    ecpdId: string;
  };

  export class GetRatePlanListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"ruleRestErrorResponse", RuleRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetRatePlanListError> = [
      {
        on: "default",
        kind: "ruleRestErrorResponse",
        decode: { kind: "json", schema: ruleRestErrorResponseSchema },
      },
    ];
  }
}

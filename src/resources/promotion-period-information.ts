import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { aRequestBodyForUsageSchema, type ARequestBodyForUsage } from "../models/arequest-body-for-usage.js";
import {
  readySimRestErrorResponseSchema,
  type ReadySimRestErrorResponse,
} from "../models/ready-sim-rest-error-response.js";
import { requestBodyForUsageSchema, type RequestBodyForUsage } from "../models/request-body-for-usage.js";
import { responseToUsageQuerySchema, type ResponseToUsageQuery } from "../models/response-to-usage-query.js";
import { usageRequestResponseSchema, type UsageRequestResponse } from "../models/usage-request-response.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve status and information about the promotion period for using a pseudo-MDN (Mobile Device
 * Number))
 */
export class PromotionPeriodInformation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve Aggregate Usage.
   *
   * @remarks
   * Retrieves the aggregate usage for an account using pseudo-MDN during the promotional period
   * using a callback.
   *
   * @returns Request response
   *
   * @throws {@link PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPromoDeviceAggregateUsageHistory(
    request: PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageRequestResponse, PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/usage/actions/promoaggregateusage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: requestBodyForUsageSchema },
      },
      {
        success: { kind: "json", schema: usageRequestResponseSchema },
        errorFactory: PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError,
      },
      options,
    );
  }

  /**
   * Retrieve the usage history.
   *
   * @remarks
   * Retrieves the usage history of a device during the promotion period.
   *
   * @returns Usage History
   *
   * @throws {@link PromotionPeriodInformation.GetPromoDeviceUsageHistoryError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPromoDeviceUsageHistory(
    request: PromotionPeriodInformation.GetPromoDeviceUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseToUsageQuery, PromotionPeriodInformation.GetPromoDeviceUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v1/devices/usage/actions/promodeviceusage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aRequestBodyForUsageSchema },
      },
      {
        success: { kind: "json", schema: responseToUsageQuerySchema },
        errorFactory: PromotionPeriodInformation.GetPromoDeviceUsageHistoryError,
      },
      options,
    );
  }
}

export namespace PromotionPeriodInformation {
  export type GetPromoDeviceAggregateUsageHistoryRequest = {
    /** Retrieve Aggregate Usage */
    body: RequestBodyForUsage;
  };

  export class GetPromoDeviceAggregateUsageHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetPromoDeviceAggregateUsageHistoryError> = [
      {
        on: "default",
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export type GetPromoDeviceUsageHistoryRequest = {
    /** Retrieve Aggregate Usage */
    body: ARequestBodyForUsage;
  };

  export class GetPromoDeviceUsageHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetPromoDeviceUsageHistoryError> = [
      {
        on: "default",
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import { aRequestBodyForUsageSchema, type ARequestBodyForUsage } from "../models/arequest-body-for-usage.js";
import {
  readySimRestErrorResponseSchema,
  type ReadySimRestErrorResponse,
} from "../models/ready-sim-rest-error-response.js";
import { requestBodyForUsageSchema, type RequestBodyForUsage } from "../models/request-body-for-usage.js";
import { responseToUsageQuerySchema, type ResponseToUsageQuery } from "../models/response-to-usage-query.js";
import { usageRequestResponseSchema, type UsageRequestResponse } from "../models/usage-request-response.js";
import type { Servers } from "../servers.js";

export class PromotionPeriodInformation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getPromoDeviceAggregateUsageHistory(
    request: PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<UsageRequestResponse, PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/usage/actions/promoaggregateusage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: requestBodyForUsageSchema },
      },
      {
        success: { kind: "json", schema: usageRequestResponseSchema },
        errorFactory: PromotionPeriodInformation.GetPromoDeviceAggregateUsageHistoryError,
      },
      options,
    );
  }

  getPromoDeviceUsageHistory(
    request: PromotionPeriodInformation.GetPromoDeviceUsageHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseToUsageQuery, PromotionPeriodInformation.GetPromoDeviceUsageHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v1/devices/usage/actions/promodeviceusage"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
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
    body: RequestBodyForUsage;
  };

  export class GetPromoDeviceAggregateUsageHistoryError extends ResponseError<
    Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetPromoDeviceAggregateUsageHistoryError> = [
      {
        on: [400, 599],
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }

  export type GetPromoDeviceUsageHistoryRequest = {
    body: ARequestBodyForUsage;
  };

  export class GetPromoDeviceUsageHistoryError extends ResponseError<
    Declared<"readySimRestErrorResponse", ReadySimRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetPromoDeviceUsageHistoryError> = [
      {
        on: [400, 599],
        kind: "readySimRestErrorResponse",
        decode: { kind: "json", schema: readySimRestErrorResponseSchema },
      },
    ];
  }
}

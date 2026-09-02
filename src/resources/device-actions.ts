import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { accountDetailsSchema, type AccountDetails } from "../models/account-details.js";
import { aggregateUsageSchema, type AggregateUsage } from "../models/aggregate-usage.js";
import { dailyUsageResponseSchema, type DailyUsageResponse } from "../models/daily-usage-response.js";
import { dailyUsageSchema, type DailyUsage } from "../models/daily-usage.js";
import {
  getDeviceListWithProfilesRequestSchema,
  type GetDeviceListWithProfilesRequest,
} from "../models/get-device-list-with-profiles-request.js";
import { gioRequestResponseSchema, type GioRequestResponse } from "../models/gio-request-response.js";
import { gioRestErrorResponseSchema, type GioRestErrorResponse } from "../models/gio-rest-error-response.js";
import { provhistoryRequestSchema, type ProvhistoryRequest } from "../models/provhistory-request.js";
import { statusResponseSchema, type StatusResponse } from "../models/status-response.js";
import type { Servers } from "../servers.js";

export class DeviceActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  accountInformation(
    request: DeviceActions.AccountInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDetails, DeviceActions.AccountInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/v1/accounts/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountDetailsSchema },
        errorFactory: DeviceActions.AccountInformationError,
      },
      options,
    );
  }

  aggregateUsage(
    request: DeviceActions.AggregateUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceActions.AggregateUsageApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/v1/devices/usage/actions/list/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: aggregateUsageSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceActions.AggregateUsageApiError,
      },
      options,
    );
  }

  dailyUsage(
    request: DeviceActions.DailyUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<DailyUsageResponse, DeviceActions.DailyUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/v1/devices/usage/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: dailyUsageSchema },
      },
      {
        success: { kind: "json", schema: dailyUsageResponseSchema },
        errorFactory: DeviceActions.DailyUsageError,
      },
      options,
    );
  }

  getAsynchronousRequestStatus(
    request: DeviceActions.GetAsynchronousRequestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusResponse, DeviceActions.GetAsynchronousRequestStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials(
          "/m2m/v2/accounts/{accountName}/requests/{requestID}/status",
        ),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "requestID", value: request.requestId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusResponseSchema },
        errorFactory: DeviceActions.GetAsynchronousRequestStatusError,
      },
      options,
    );
  }

  retrieveDeviceProvisioningHistory(
    request: DeviceActions.RetrieveDeviceProvisioningHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceActions.RetrieveDeviceProvisioningHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/devices/history/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: provhistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceActions.RetrieveDeviceProvisioningHistoryError,
      },
      options,
    );
  }

  retrieveTheGlobalDeviceList(
    request: DeviceActions.RetrieveTheGlobalDeviceListRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceActions.RetrieveTheGlobalDeviceListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.hyperPreciseCredentials("/m2m/v2/devices/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "json", value: request.body, schema: getDeviceListWithProfilesRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceActions.RetrieveTheGlobalDeviceListError,
      },
      options,
    );
  }

  servicePlanList(
    request: DeviceActions.ServicePlanListRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDetails, DeviceActions.ServicePlanListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.hyperPreciseCredentials("/v1/plans/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountDetailsSchema },
        errorFactory: DeviceActions.ServicePlanListError,
      },
      options,
    );
  }
}

export namespace DeviceActions {
  export type AccountInformationRequest = {
    accountName: string;
  };

  export class AccountInformationError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<AccountInformationError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type AggregateUsageRequest = {
    body: AggregateUsage;
  };

  export class AggregateUsageApiError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<AggregateUsageApiError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DailyUsageRequest = {
    body: DailyUsage;
  };

  export class DailyUsageError extends ResponseError<Declared<"gioRestErrorResponse", GioRestErrorResponse>> {
    static readonly errors: ErrorDecoders<DailyUsageError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type GetAsynchronousRequestStatusRequest = {
    accountName: string;
    requestId: string;
  };

  export class GetAsynchronousRequestStatusError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<GetAsynchronousRequestStatusError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type RetrieveDeviceProvisioningHistoryRequest = {
    body: ProvhistoryRequest;
  };

  export class RetrieveDeviceProvisioningHistoryError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<RetrieveDeviceProvisioningHistoryError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type RetrieveTheGlobalDeviceListRequest = {
    body: GetDeviceListWithProfilesRequest;
  };

  export class RetrieveTheGlobalDeviceListError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<RetrieveTheGlobalDeviceListError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ServicePlanListRequest = {
    accountName: string;
  };

  export class ServicePlanListError extends ResponseError<
    Declared<"gioRestErrorResponse", GioRestErrorResponse>
  > {
    static readonly errors: ErrorDecoders<ServicePlanListError> = [
      {
        on: [400, 599],
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }
}

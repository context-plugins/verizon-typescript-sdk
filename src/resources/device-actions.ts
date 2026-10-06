import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Device management for either Verizon (lead) or Global (local) profiles.
 */
export class DeviceActions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve the Account Information
   *
   * @remarks
   * Retrieve all of the service plans, features and carriers associated with the account specified.
   *
   * @returns Account details **Note:** The response will have placeholders. You can identify the
   * placeholders by `"sizeKb":0` and that the record will only have `name` and `sizeKb` values.
   *
   * @throws {@link DeviceActions.AccountInformationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountInformation(
    request: DeviceActions.AccountInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDetails, DeviceActions.AccountInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/v1/accounts/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountDetailsSchema },
        errorFactory: DeviceActions.AccountInformationError,
      },
      options,
    );
  }

  /**
   * Retrieve aggregate usage
   *
   * @remarks
   * Retrieve the aggregate usage for a device or a number of devices.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceActions.AggregateUsageApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  aggregateUsage(
    request: DeviceActions.AggregateUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceActions.AggregateUsageApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/v1/devices/usage/actions/list/aggregate"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aggregateUsageSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceActions.AggregateUsageApiError,
      },
      options,
    );
  }

  /**
   * Retrieve daily usage
   *
   * @remarks
   * Retrieve the daily usage for a device, for a specified period of time, segmented by day
   *
   * @returns Syncronous response of device usage
   *
   * @throws {@link DeviceActions.DailyUsageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dailyUsage(
    request: DeviceActions.DailyUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<DailyUsageResponse, DeviceActions.DailyUsageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/v1/devices/usage/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dailyUsageSchema },
      },
      {
        success: { kind: "json", schema: dailyUsageResponseSchema },
        errorFactory: DeviceActions.DailyUsageError,
      },
      options,
    );
  }

  /**
   * Get asynchronous request status.
   *
   * @remarks
   * Get the status of an asynchronous request made with the Device Actions.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceActions.GetAsynchronousRequestStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAsynchronousRequestStatus(
    request: DeviceActions.GetAsynchronousRequestStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusResponse, DeviceActions.GetAsynchronousRequestStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/m2m/v2/accounts/{accountName}/requests/{requestID}/status"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "requestID", value: request.requestId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusResponseSchema },
        errorFactory: DeviceActions.GetAsynchronousRequestStatusError,
      },
      options,
    );
  }

  /**
   * Retrieve Device Provisioning History.
   *
   * @remarks
   * Retrieve the provisioning history of a specific device or devices.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceActions.RetrieveDeviceProvisioningHistoryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveDeviceProvisioningHistory(
    request: DeviceActions.RetrieveDeviceProvisioningHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceActions.RetrieveDeviceProvisioningHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v2/devices/history/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: provhistoryRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceActions.RetrieveDeviceProvisioningHistoryError,
      },
      options,
    );
  }

  /**
   * Retrieve the global device list.
   *
   * @remarks
   * Allows the profile to fetch the complete device list. This works with Verizon US and Global
   * profiles.
   *
   * @returns Request ID
   *
   * @throws {@link DeviceActions.RetrieveTheGlobalDeviceListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveTheGlobalDeviceList(
    request: DeviceActions.RetrieveTheGlobalDeviceListRequest,
    options?: RequestOptions,
  ): ApiPromise<GioRequestResponse, DeviceActions.RetrieveTheGlobalDeviceListError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.thingspace("/m2m/v2/devices/actions/list"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getDeviceListWithProfilesRequestSchema },
      },
      {
        success: { kind: "json", schema: gioRequestResponseSchema },
        errorFactory: DeviceActions.RetrieveTheGlobalDeviceListError,
      },
      options,
    );
  }

  /**
   * Retrieve the List of Service Plans
   *
   * @remarks
   * Retrieve all of the service plans, features and carriers associated with the account specified.
   *
   * @returns Account details **Note:** The response will have placeholders. You can identify the
   * placeholders by `"sizeKb":0` and that the record will only have `name` and `sizeKb` values.
   *
   * @throws {@link DeviceActions.ServicePlanListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  servicePlanList(
    request: DeviceActions.ServicePlanListRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountDetails, DeviceActions.ServicePlanListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.thingspace("/v1/plans/{accountName}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "accountName", value: request.accountName, schema: s.string() }],
        query: [],
        headers: [],
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

  export class AccountInformationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<AccountInformationError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type AggregateUsageRequest = {
    body: AggregateUsage;
  };

  export class AggregateUsageApiError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<AggregateUsageApiError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type DailyUsageRequest = {
    body: DailyUsage;
  };

  export class DailyUsageError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<DailyUsageError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type GetAsynchronousRequestStatusRequest = {
    accountName: string;
    requestId: string;
  };

  export class GetAsynchronousRequestStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<GetAsynchronousRequestStatusError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type RetrieveDeviceProvisioningHistoryRequest = {
    /** Device Provisioning History */
    body: ProvhistoryRequest;
  };

  export class RetrieveDeviceProvisioningHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<RetrieveDeviceProvisioningHistoryError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type RetrieveTheGlobalDeviceListRequest = {
    /** Device Profile Query */
    body: GetDeviceListWithProfilesRequest;
  };

  export class RetrieveTheGlobalDeviceListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<RetrieveTheGlobalDeviceListError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }

  export type ServicePlanListRequest = {
    accountName: string;
  };

  export class ServicePlanListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"gioRestErrorResponse", GioRestErrorResponse>>;

    static readonly errors: ErrorDecoders<ServicePlanListError> = [
      {
        on: "default",
        kind: "gioRestErrorResponse",
        decode: { kind: "json", schema: gioRestErrorResponseSchema },
      },
    ];
  }
}

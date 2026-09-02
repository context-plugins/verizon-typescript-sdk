import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { accountConsentCreateSchema, type AccountConsentCreate } from "../models/account-consent-create.js";
import { accountConsentUpdateSchema, type AccountConsentUpdate } from "../models/account-consent-update.js";
import { consentTransactionIdSchema, type ConsentTransactionId } from "../models/consent-transaction-id.js";
import { deviceLocationResultSchema, type DeviceLocationResult } from "../models/device-location-result.js";
import {
  deviceLocationSuccessResultSchema,
  type DeviceLocationSuccessResult,
} from "../models/device-location-success-result.js";
import { devicesConsentResultSchema, type DevicesConsentResult } from "../models/devices-consent-result.js";
import {
  getAccountDeviceConsentSchema,
  type GetAccountDeviceConsent,
} from "../models/get-account-device-consent.js";
import type { Servers } from "../servers.js";

export class Exclusions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  devicesLocationGetConsentAsync(
    request: Exclusions.DevicesLocationGetConsentAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAccountDeviceConsent, Exclusions.DevicesLocationGetConsentAsyncError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceLocation("/devicelocations/action/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAccountDeviceConsentSchema },
        errorFactory: Exclusions.DevicesLocationGetConsentAsyncError,
      },
      options,
    );
  }

  devicesLocationGiveConsentAsync(
    request: Exclusions.DevicesLocationGiveConsentAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<ConsentTransactionId, Exclusions.DevicesLocationGiveConsentAsyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceLocation("/devicelocations/action/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => accountConsentCreateSchema)),
        },
      },
      {
        success: { kind: "json", schema: consentTransactionIdSchema },
        errorFactory: Exclusions.DevicesLocationGiveConsentAsyncError,
      },
      options,
    );
  }

  devicesLocationUpdateConsent(
    request: Exclusions.DevicesLocationUpdateConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<ConsentTransactionId, Exclusions.DevicesLocationUpdateConsentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.deviceLocation("/devicelocations/action/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => accountConsentUpdateSchema)),
        },
      },
      {
        success: { kind: "json", schema: consentTransactionIdSchema },
        errorFactory: Exclusions.DevicesLocationUpdateConsentError,
      },
      options,
    );
  }

  excludeDevices(
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, Exclusions.ExcludeDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.deviceLocation("/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSuccessResultSchema },
        errorFactory: Exclusions.ExcludeDevicesError,
      },
      options,
    );
  }

  listExcludedDevices(
    request: Exclusions.ListExcludedDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DevicesConsentResult, Exclusions.ListExcludedDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.deviceLocation("/consents/{accountName}/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: devicesConsentResultSchema },
        errorFactory: Exclusions.ListExcludedDevicesError,
      },
      options,
    );
  }

  removeDevicesFromExclusionList(
    request: Exclusions.RemoveDevicesFromExclusionListRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, Exclusions.RemoveDevicesFromExclusionListError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.deviceLocation("/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "deviceList", value: request.deviceList, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSuccessResultSchema },
        errorFactory: Exclusions.RemoveDevicesFromExclusionListError,
      },
      options,
    );
  }
}

export namespace Exclusions {
  export type DevicesLocationGetConsentAsyncRequest = {
    accountName: string;
    deviceId?: string;
  };

  export class DevicesLocationGetConsentAsyncError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<DevicesLocationGetConsentAsyncError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type DevicesLocationGiveConsentAsyncRequest = {
    body?: AccountConsentCreate;
  };

  export class DevicesLocationGiveConsentAsyncError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<DevicesLocationGiveConsentAsyncError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type DevicesLocationUpdateConsentRequest = {
    body?: AccountConsentUpdate;
  };

  export class DevicesLocationUpdateConsentError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<DevicesLocationUpdateConsentError> = [
      {
        on: [400, 599],
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export class ExcludeDevicesError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<ExcludeDevicesError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ListExcludedDevicesRequest = {
    accountName: string;
    startIndex: string;
  };

  export class ListExcludedDevicesError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<ListExcludedDevicesError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type RemoveDevicesFromExclusionListRequest = {
    accountName: string;
    deviceList: string;
  };

  export class RemoveDevicesFromExclusionListError extends ResponseError<
    Declared<"deviceLocationResult", DeviceLocationResult>
  > {
    static readonly errors: ErrorDecoders<RemoveDevicesFromExclusionListError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

/**
 * Exclude devices from location services.
 */
export class Exclusions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve the consent record for devices on an account
   *
   * @remarks
   * Get the consent settings for the entire account or device list in an account.
   *
   * @returns List of JSON objects, each containing the position data or an error for a device in
   * the request.
   *
   * @throws {@link Exclusions.DevicesLocationGetConsentAsyncError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  devicesLocationGetConsentAsync(
    request: Exclusions.DevicesLocationGetConsentAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAccountDeviceConsent, Exclusions.DevicesLocationGetConsentAsyncError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceLocation("/devicelocations/action/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAccountDeviceConsentSchema },
        errorFactory: Exclusions.DevicesLocationGetConsentAsyncError,
      },
      options,
    );
  }

  /**
   * Create the consent record for an account
   *
   * @remarks
   * Create a consent record to use location services as an asynchronous request.
   *
   * @returns List of JSON objects, each containing the position data or an error for a device in
   * the request.
   *
   * @throws {@link Exclusions.DevicesLocationGiveConsentAsyncError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  devicesLocationGiveConsentAsync(
    request: Exclusions.DevicesLocationGiveConsentAsyncRequest,
    options?: RequestOptions,
  ): ApiPromise<ConsentTransactionId, Exclusions.DevicesLocationGiveConsentAsyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceLocation("/devicelocations/action/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Updates a consent record for an account
   *
   * @remarks
   * Update the location services consent record for an entire account.
   *
   * @returns List of JSON objects, each containing the position data or an error for a device in
   * the request.
   *
   * @throws {@link Exclusions.DevicesLocationUpdateConsentError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  devicesLocationUpdateConsent(
    request: Exclusions.DevicesLocationUpdateConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<ConsentTransactionId, Exclusions.DevicesLocationUpdateConsentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.deviceLocation("/devicelocations/action/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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

  /**
   * Update account consent exclusion
   *
   * @remarks
   * This consents endpoint sets a new exclusion list.
   *
   * @returns Success response.
   *
   * @throws {@link Exclusions.ExcludeDevicesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  excludeDevices(
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, Exclusions.ExcludeDevicesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.deviceLocation("/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLocationSuccessResultSchema },
        errorFactory: Exclusions.ExcludeDevicesError,
      },
      options,
    );
  }

  /**
   * Get a consent exclusion
   *
   * @remarks
   * This consents endpoint retrieves a list of excluded devices in an account.
   *
   * @returns Excluded devices result.
   *
   * @throws {@link Exclusions.ListExcludedDevicesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExcludedDevices(
    request: Exclusions.ListExcludedDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DevicesConsentResult, Exclusions.ListExcludedDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.deviceLocation("/consents/{accountName}/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: devicesConsentResultSchema },
        errorFactory: Exclusions.ListExcludedDevicesError,
      },
      options,
    );
  }

  /**
   * Remove devices from exclusion list
   *
   * @remarks
   * Removes devices from the exclusion list so that they can be located with Device Location
   * Services requests.
   *
   * @returns Devices successfully removed from list.
   *
   * @throws {@link Exclusions.RemoveDevicesFromExclusionListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeDevicesFromExclusionList(
    request: Exclusions.RemoveDevicesFromExclusionListRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLocationSuccessResult, Exclusions.RemoveDevicesFromExclusionListError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.deviceLocation("/consents"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [],
        query: [
          { name: "accountName", value: request.accountName, schema: s.string() },
          { name: "deviceList", value: request.deviceList, schema: s.string() },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
    /** The numeric name of the account. */
    accountName: string;
    /** The IMEI of the device being queried */
    deviceId?: string;
  };

  export class DevicesLocationGetConsentAsyncError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<DevicesLocationGetConsentAsyncError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type DevicesLocationGiveConsentAsyncRequest = {
    /** Account details to create a consent record. */
    body?: AccountConsentCreate;
  };

  export class DevicesLocationGiveConsentAsyncError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<DevicesLocationGiveConsentAsyncError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export type DevicesLocationUpdateConsentRequest = {
    /** Account details to update a consent record. */
    body?: AccountConsentUpdate;
  };

  export class DevicesLocationUpdateConsentError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<DevicesLocationUpdateConsentError> = [
      {
        on: "default",
        kind: "deviceLocationResult",
        decode: { kind: "json", schema: deviceLocationResultSchema },
      },
    ];
  }

  export class ExcludeDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<ExcludeDevicesError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type ListExcludedDevicesRequest = {
    /** Account identifier in "##########-#####". */
    accountName: string;
    /** Zero-based number of the first record to return. */
    startIndex: string;
  };

  export class ListExcludedDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<ListExcludedDevicesError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }

  export type RemoveDevicesFromExclusionListRequest = {
    /** The numeric name of the account. */
    accountName: string;
    /** A list of the device IDs to remove from the exclusion list. */
    deviceList: string;
  };

  export class RemoveDevicesFromExclusionListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"deviceLocationResult", DeviceLocationResult>>;

    static readonly errors: ErrorDecoders<RemoveDevicesFromExclusionListError> = [
      { on: 400, kind: "deviceLocationResult", decode: { kind: "json", schema: deviceLocationResultSchema } },
    ];
  }
}

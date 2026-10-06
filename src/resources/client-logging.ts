import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deviceLogSchema, type DeviceLog } from "../models/device-log.js";
import { deviceLoggingStatusSchema, type DeviceLoggingStatus } from "../models/device-logging-status.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import type { Servers } from "../servers.js";

/**
 * Device logs stored on the device itself.
 */
export class ClientLogging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Turn logging off for the device specified
   *
   * @remarks
   * Disables logging for a specific device.
   *
   * @returns Success.
   *
   * @throws {@link ClientLogging.DisableDeviceLoggingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableDeviceLogging(
    request: ClientLogging.DisableDeviceLoggingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientLogging.DisableDeviceLoggingError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV2("/logging/{account}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientLogging.DisableDeviceLoggingError,
      },
      options,
    );
  }

  /**
   * Turn logging off for a list of devices.
   *
   * @returns Success.
   *
   * @throws {@link ClientLogging.DisableLoggingForDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableLoggingForDevices(
    request: ClientLogging.DisableLoggingForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientLogging.DisableLoggingForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.softwareManagementV2("/logging/{account}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [{ name: "deviceIds", value: request.deviceIds, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientLogging.DisableLoggingForDevicesError,
      },
      options,
    );
  }

  /**
   * Turn logging on for the device specified
   *
   * @remarks
   * Enables logging for a specific device.
   *
   * @returns Device logging status information.
   *
   * @throws {@link ClientLogging.EnableDeviceLoggingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableDeviceLogging(
    request: ClientLogging.EnableDeviceLoggingRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLoggingStatus, ClientLogging.EnableDeviceLoggingError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV2("/logging/{account}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLoggingStatusSchema },
        errorFactory: ClientLogging.EnableDeviceLoggingError,
      },
      options,
    );
  }

  /**
   * Turn logging on for the list of devices
   *
   * @remarks
   * Each customer may have a maximum of 20 devices enabled for logging.
   *
   * @returns List containing device logging status information.
   *
   * @throws {@link ClientLogging.EnableLoggingForDevicesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableLoggingForDevices(
    request: ClientLogging.EnableLoggingForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLoggingStatus[], ClientLogging.EnableLoggingForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV2("/logging/{account}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceLoggingStatusSchema)) },
        errorFactory: ClientLogging.EnableLoggingForDevicesError,
      },
      options,
    );
  }

  /**
   * Get logs for the device specified
   *
   * @remarks
   * Gets logs for a specific device.
   *
   * @returns List of device logs.
   *
   * @throws {@link ClientLogging.ListDeviceLogsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDeviceLogs(
    request: ClientLogging.ListDeviceLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLog[], ClientLogging.ListDeviceLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/logging/{account}/devices/{deviceId}/logs"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceLogSchema)) },
        errorFactory: ClientLogging.ListDeviceLogsError,
      },
      options,
    );
  }

  /**
   * Returns an array of all devices in the specified account for which logging is enabled.
   *
   * @returns List containing device logging status information.
   *
   * @throws {@link ClientLogging.ListDevicesWithLoggingEnabledError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDevicesWithLoggingEnabled(
    request: ClientLogging.ListDevicesWithLoggingEnabledRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLoggingStatus[], ClientLogging.ListDevicesWithLoggingEnabledError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/logging/{account}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceLoggingStatusSchema)) },
        errorFactory: ClientLogging.ListDevicesWithLoggingEnabledError,
      },
      options,
    );
  }
}

export namespace ClientLogging {
  export type DisableDeviceLoggingRequest = {
    /** Account identifier. */
    account: string;
    /** Device IMEI identifier. */
    deviceId: string;
  };

  export class DisableDeviceLoggingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<DisableDeviceLoggingError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type DisableLoggingForDevicesRequest = {
    /** Account identifier. */
    account: string;
    /** The list of device IDs. */
    deviceIds: string;
  };

  export class DisableLoggingForDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<DisableLoggingForDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type EnableDeviceLoggingRequest = {
    /** Account identifier. */
    account: string;
    /** Device IMEI identifier. */
    deviceId: string;
  };

  export class EnableDeviceLoggingError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<EnableDeviceLoggingError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type EnableLoggingForDevicesRequest = {
    /** Account identifier. */
    account: string;
  };

  export class EnableLoggingForDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<EnableLoggingForDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListDeviceLogsRequest = {
    /** Account identifier. */
    account: string;
    /** Device IMEI identifier. */
    deviceId: string;
  };

  export class ListDeviceLogsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ListDeviceLogsError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListDevicesWithLoggingEnabledRequest = {
    /** Account identifier. */
    account: string;
  };

  export class ListDevicesWithLoggingEnabledError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ListDevicesWithLoggingEnabledError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}

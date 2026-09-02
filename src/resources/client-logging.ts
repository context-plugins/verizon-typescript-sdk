import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { deviceLogSchema, type DeviceLog } from "../models/device-log.js";
import { deviceLoggingStatusSchema, type DeviceLoggingStatus } from "../models/device-logging-status.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import type { Servers } from "../servers.js";

export class ClientLogging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  disableDeviceLogging(
    request: ClientLogging.DisableDeviceLoggingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientLogging.DisableDeviceLoggingError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV2("/logging/{account}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientLogging.DisableDeviceLoggingError,
      },
      options,
    );
  }

  disableLoggingForDevices(
    request: ClientLogging.DisableLoggingForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientLogging.DisableLoggingForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.softwareManagementV2("/logging/{account}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [{ name: "deviceIds", value: request.deviceIds, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientLogging.DisableLoggingForDevicesError,
      },
      options,
    );
  }

  enableDeviceLogging(
    request: ClientLogging.EnableDeviceLoggingRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLoggingStatus, ClientLogging.EnableDeviceLoggingError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV2("/logging/{account}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceLoggingStatusSchema },
        errorFactory: ClientLogging.EnableDeviceLoggingError,
      },
      options,
    );
  }

  enableLoggingForDevices(
    request: ClientLogging.EnableLoggingForDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLoggingStatus[], ClientLogging.EnableLoggingForDevicesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV2("/logging/{account}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceLoggingStatusSchema)) },
        errorFactory: ClientLogging.EnableLoggingForDevicesError,
      },
      options,
    );
  }

  listDeviceLogs(
    request: ClientLogging.ListDeviceLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLog[], ClientLogging.ListDeviceLogsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/logging/{account}/devices/{deviceId}/logs"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceLogSchema)) },
        errorFactory: ClientLogging.ListDeviceLogsError,
      },
      options,
    );
  }

  listDevicesWithLoggingEnabled(
    request: ClientLogging.ListDevicesWithLoggingEnabledRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceLoggingStatus[], ClientLogging.ListDevicesWithLoggingEnabledError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/logging/{account}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
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
    account: string;
    deviceId: string;
  };

  export class DisableDeviceLoggingError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<DisableDeviceLoggingError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type DisableLoggingForDevicesRequest = {
    account: string;
    deviceIds: string;
  };

  export class DisableLoggingForDevicesError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<DisableLoggingForDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type EnableDeviceLoggingRequest = {
    account: string;
    deviceId: string;
  };

  export class EnableDeviceLoggingError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<EnableDeviceLoggingError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type EnableLoggingForDevicesRequest = {
    account: string;
  };

  export class EnableLoggingForDevicesError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<EnableLoggingForDevicesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListDeviceLogsRequest = {
    account: string;
    deviceId: string;
  };

  export class ListDeviceLogsError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<ListDeviceLogsError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListDevicesWithLoggingEnabledRequest = {
    account: string;
  };

  export class ListDevicesWithLoggingEnabledError extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<ListDevicesWithLoggingEnabledError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}

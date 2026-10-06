import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deviceImeiSchema, type DeviceImei } from "../models/device-imei.js";
import { deviceListResultSchema, type DeviceListResult } from "../models/device-list-result.js";
import { DevicesProtocol, devicesProtocolSchema } from "../models/devices-protocol.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import { v3AccountDeviceListSchema, type V3AccountDeviceList } from "../models/v3-account-device-list.js";
import type { Servers } from "../servers.js";

/**
 * Device information for an account.
 */
export class AccountDevices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve account device information such as reported firmware on the devices.
   *
   * @returns Returns an array of devices.
   *
   * @throws {@link AccountDevices.GetAccountDeviceInformationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAccountDeviceInformation(
    request: AccountDevices.GetAccountDeviceInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<V3AccountDeviceList, AccountDevices.GetAccountDeviceInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/devices/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
          {
            name: "protocol",
            value: request.protocol,
            schema: s.defaulted(devicesProtocolSchema, DevicesProtocol.Lwm2M),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3AccountDeviceListSchema },
        errorFactory: AccountDevices.GetAccountDeviceInformationError,
      },
      options,
    );
  }

  /**
   * Get account device information for a list of devices
   *
   * @remarks
   * Retrieve device information for a list of devices on an account.
   *
   * @returns Get device list information.
   *
   * @throws {@link AccountDevices.ListAccountDevicesInformationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountDevicesInformation(
    request: AccountDevices.ListAccountDevicesInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceListResult, AccountDevices.ListAccountDevicesInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV3("/devices/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deviceImeiSchema },
      },
      {
        success: { kind: "json", schema: deviceListResultSchema },
        errorFactory: AccountDevices.ListAccountDevicesInformationError,
      },
      options,
    );
  }
}

export namespace AccountDevices {
  export type GetAccountDeviceInformationRequest = {
    /** Account identifier. */
    acc: string;
    /** Last seen device identifier. */
    lastSeenDeviceId?: string;
    /** Filter to retrieve a specific protocol type used. @default DevicesProtocol.Lwm2M */
    protocol?: DevicesProtocol;
  };

  export class GetAccountDeviceInformationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<GetAccountDeviceInformationError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ListAccountDevicesInformationRequest = {
    /** Account identifier. */
    acc: string;
    /** Request device list information. */
    body: DeviceImei;
  };

  export class ListAccountDevicesInformationError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<ListAccountDevicesInformationError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}

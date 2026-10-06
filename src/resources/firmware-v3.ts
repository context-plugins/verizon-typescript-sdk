import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { deviceFirmwareListSchema, type DeviceFirmwareList } from "../models/device-firmware-list.js";
import {
  deviceFirmwareVersionUpdateResultSchema,
  type DeviceFirmwareVersionUpdateResult,
} from "../models/device-firmware-version-update-result.js";
import { firmwareImeiSchema, type FirmwareImei } from "../models/firmware-imei.js";
import { firmwarePackageSchema, type FirmwarePackage } from "../models/firmware-package.js";
import { FirmwareProtocol, firmwareProtocolSchema } from "../models/firmware-protocol.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import type { Servers } from "../servers.js";

/**
 * State of Firmware across devices in the account.
 */
export class FirmwareV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of available firmware
   *
   * @remarks
   * This endpoint allows user to list the firmware of an account.
   *
   * @returns Returns an array of firmware objects.
   *
   * @throws {@link FirmwareV3.ListAvailableFirmware2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAvailableFirmware2(
    request: FirmwareV3.ListAvailableFirmware2Request,
    options?: RequestOptions,
  ): ApiPromise<FirmwarePackage[], FirmwareV3.ListAvailableFirmware2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/firmware/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [
          {
            name: "protocol",
            value: request.protocol,
            schema: s.defaulted(firmwareProtocolSchema, FirmwareProtocol.Lwm2M),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => firmwarePackageSchema)) },
        errorFactory: FirmwareV3.ListAvailableFirmware2Error,
      },
      options,
    );
  }

  /**
   * Report device firmware (asynchronous)
   *
   * @remarks
   * Ask a device to report its firmware version asynchronously.
   *
   * @returns Device firmware version update request.
   *
   * @throws {@link FirmwareV3.ReportDeviceFirmwareError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reportDeviceFirmware(
    request: FirmwareV3.ReportDeviceFirmwareRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceFirmwareVersionUpdateResult, FirmwareV3.ReportDeviceFirmwareError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV3("/firmware/{acc}/async/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceFirmwareVersionUpdateResultSchema },
        errorFactory: FirmwareV3.ReportDeviceFirmwareError,
      },
      options,
    );
  }

  /**
   * synchronize device firmware
   *
   * @remarks
   * Synchronize ThingSpace with the FOTA server for up to 100 devices.
   *
   * @returns Returns device firmware information.
   *
   * @throws {@link FirmwareV3.SynchronizeDeviceFirmwareError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  synchronizeDeviceFirmware(
    request: FirmwareV3.SynchronizeDeviceFirmwareRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceFirmwareList, FirmwareV3.SynchronizeDeviceFirmwareError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.softwareManagementV3("/firmware/{acc}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: firmwareImeiSchema },
      },
      {
        success: { kind: "json", schema: deviceFirmwareListSchema },
        errorFactory: FirmwareV3.SynchronizeDeviceFirmwareError,
      },
      options,
    );
  }
}

export namespace FirmwareV3 {
  export type ListAvailableFirmware2Request = {
    /** Account identifier. */
    acc: string;
    /** Filter to retrieve a specific protocol type used. @default FirmwareProtocol.Lwm2M */
    protocol?: FirmwareProtocol;
  };

  export class ListAvailableFirmware2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<ListAvailableFirmware2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ReportDeviceFirmwareRequest = {
    /** Account identifier. */
    acc: string;
    /** Device identifier. */
    deviceId: string;
  };

  export class ReportDeviceFirmwareError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<ReportDeviceFirmwareError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type SynchronizeDeviceFirmwareRequest = {
    /** Account identifier. */
    acc: string;
    /** DeviceIds to get firmware info synchronously. */
    body: FirmwareImei;
  };

  export class SynchronizeDeviceFirmwareError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<SynchronizeDeviceFirmwareError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class FirmwareV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listAvailableFirmware2(
    request: FirmwareV3.ListAvailableFirmware2Request,
    options?: RequestOptions,
  ): ApiPromise<FirmwarePackage[], FirmwareV3.ListAvailableFirmware2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV3("/firmware/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [
          {
            name: "protocol",
            value: request.protocol,
            schema: s.defaulted(firmwareProtocolSchema, FirmwareProtocol.Lwm2M),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => firmwarePackageSchema)) },
        errorFactory: FirmwareV3.ListAvailableFirmware2Error,
      },
      options,
    );
  }

  reportDeviceFirmware(
    request: FirmwareV3.ReportDeviceFirmwareRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceFirmwareVersionUpdateResult, FirmwareV3.ReportDeviceFirmwareError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV3("/firmware/{acc}/async/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceFirmwareVersionUpdateResultSchema },
        errorFactory: FirmwareV3.ReportDeviceFirmwareError,
      },
      options,
    );
  }

  synchronizeDeviceFirmware(
    request: FirmwareV3.SynchronizeDeviceFirmwareRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceFirmwareList, FirmwareV3.SynchronizeDeviceFirmwareError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.softwareManagementV3("/firmware/{acc}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
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
    acc: string;
    protocol?: FirmwareProtocol;
  };

  export class ListAvailableFirmware2Error extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<ListAvailableFirmware2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ReportDeviceFirmwareRequest = {
    acc: string;
    deviceId: string;
  };

  export class ReportDeviceFirmwareError extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<ReportDeviceFirmwareError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type SynchronizeDeviceFirmwareRequest = {
    acc: string;
    body: FirmwareImei;
  };

  export class SynchronizeDeviceFirmwareError extends ResponseError<Declared<"fotaV3Result", FotaV3Result>> {
    static readonly errors: ErrorDecoders<SynchronizeDeviceFirmwareError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}

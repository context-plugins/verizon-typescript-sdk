import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { deviceImeiSchema, type DeviceImei } from "../models/device-imei.js";
import { deviceListResultSchema, type DeviceListResult } from "../models/device-list-result.js";
import { DevicesProtocol, devicesProtocolSchema } from "../models/devices-protocol.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import { v3AccountDeviceListSchema, type V3AccountDeviceList } from "../models/v3-account-device-list.js";
import type { Servers } from "../servers.js";

export class AccountDevices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getAccountDeviceInformation(
    request: AccountDevices.GetAccountDeviceInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<V3AccountDeviceList, AccountDevices.GetAccountDeviceInformationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV3("/devices/{acc}"),
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3AccountDeviceListSchema },
        errorFactory: AccountDevices.GetAccountDeviceInformationError,
      },
      options,
    );
  }

  listAccountDevicesInformation(
    request: AccountDevices.ListAccountDevicesInformationRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceListResult, AccountDevices.ListAccountDevicesInformationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV3("/devices/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
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
    acc: string;
    lastSeenDeviceId?: string;
    protocol?: DevicesProtocol;
  };

  export class GetAccountDeviceInformationError extends ResponseError<
    Declared<"fotaV3Result", FotaV3Result>
  > {
    static readonly errors: ErrorDecoders<GetAccountDeviceInformationError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type ListAccountDevicesInformationRequest = {
    acc: string;
    body: DeviceImei;
  };

  export class ListAccountDevicesInformationError extends ResponseError<
    Declared<"fotaV3Result", FotaV3Result>
  > {
    static readonly errors: ErrorDecoders<ListAccountDevicesInformationError> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}

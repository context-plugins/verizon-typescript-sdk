import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  deviceListQueryResultSchema,
  type DeviceListQueryResult,
} from "../models/device-list-query-result.js";
import { deviceUpgradeHistorySchema, type DeviceUpgradeHistory } from "../models/device-upgrade-history.js";
import { fotaV1ResultSchema, type FotaV1Result } from "../models/fota-v1-result.js";
import {
  upgradeListQueryResultSchema,
  type UpgradeListQueryResult,
} from "../models/upgrade-list-query-result.js";
import { upgradeStatusSchema, type UpgradeStatus } from "../models/upgrade-status.js";
import type { Servers } from "../servers.js";

export class SoftwareManagementReportsV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getDeviceFirmwareUpgradeHistory(
    request: SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceUpgradeHistory[], SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/reports/{account}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceUpgradeHistorySchema)) },
        errorFactory: SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError,
      },
      options,
    );
  }

  listAccountDevices(
    request: SoftwareManagementReportsV1.ListAccountDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceListQueryResult, SoftwareManagementReportsV1.ListAccountDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1("/devices/{account}/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceListQueryResultSchema },
        errorFactory: SoftwareManagementReportsV1.ListAccountDevicesError,
      },
      options,
    );
  }

  listUpgradesForSpecifiedStatus(
    request: SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<UpgradeListQueryResult, SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV1(
          "/reports/{account}/status/{upgradeStatus}/index/{startIndex}",
        ),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "upgradeStatus", value: request.upgradeStatus, schema: upgradeStatusSchema },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: upgradeListQueryResultSchema },
        errorFactory: SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError,
      },
      options,
    );
  }
}

export namespace SoftwareManagementReportsV1 {
  export type GetDeviceFirmwareUpgradeHistoryRequest = {
    account: string;
    deviceId: string;
  };

  export class GetDeviceFirmwareUpgradeHistoryError extends ResponseError<
    Declared<"fotaV1Result", FotaV1Result>
  > {
    static readonly errors: ErrorDecoders<GetDeviceFirmwareUpgradeHistoryError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListAccountDevicesRequest = {
    account: string;
    startIndex: string;
  };

  export class ListAccountDevicesError extends ResponseError<Declared<"fotaV1Result", FotaV1Result>> {
    static readonly errors: ErrorDecoders<ListAccountDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListUpgradesForSpecifiedStatusRequest = {
    account: string;
    upgradeStatus: UpgradeStatus;
    startIndex: string;
  };

  export class ListUpgradesForSpecifiedStatusError extends ResponseError<
    Declared<"fotaV1Result", FotaV1Result>
  > {
    static readonly errors: ErrorDecoders<ListUpgradesForSpecifiedStatusError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
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

/**
 * Status and history information.
 */
export class SoftwareManagementReportsV1 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Returns the upgrade history of the specified device from the previous six months.
   *
   * @returns Device upgrade history.
   *
   * @throws {@link SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceFirmwareUpgradeHistory(
    request: SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceUpgradeHistory[], SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/reports/{account}/devices/{deviceId}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => deviceUpgradeHistorySchema)) },
        errorFactory: SoftwareManagementReportsV1.GetDeviceFirmwareUpgradeHistoryError,
      },
      options,
    );
  }

  /**
   * Get list of devices in the account
   *
   * @remarks
   * Returns an array of all devices in the specified account. Each device object includes
   * information needed for managing firmware, including the device make and model, MDN and IMEI,
   * and current firmware version.
   *
   * @returns List of all devices in the specified account.
   *
   * @throws {@link SoftwareManagementReportsV1.ListAccountDevicesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountDevices(
    request: SoftwareManagementReportsV1.ListAccountDevicesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceListQueryResult, SoftwareManagementReportsV1.ListAccountDevicesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1("/devices/{account}/index/{startIndex}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deviceListQueryResultSchema },
        errorFactory: SoftwareManagementReportsV1.ListAccountDevicesError,
      },
      options,
    );
  }

  /**
   * Returns a list of all upgrades with a specified status.
   *
   * @returns A list of all upgrades with a specified status.
   *
   * @throws {@link SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUpgradesForSpecifiedStatus(
    request: SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<UpgradeListQueryResult, SoftwareManagementReportsV1.ListUpgradesForSpecifiedStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV1(
          "/reports/{account}/status/{upgradeStatus}/index/{startIndex}",
        ),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "upgradeStatus", value: request.upgradeStatus, schema: upgradeStatusSchema },
          { name: "startIndex", value: request.startIndex, schema: s.string() },
        ],
        query: [],
        headers: [],
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
    /** Account identifier in "##########-#####". */
    account: string;
    /** The IMEI of the device. */
    deviceId: string;
  };

  export class GetDeviceFirmwareUpgradeHistoryError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<GetDeviceFirmwareUpgradeHistoryError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListAccountDevicesRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
    /**
     * Only return devices with IMEIs larger than this value. Use 0 for the first request. If
     * `hasMoreData`=true in the response, use the `lastSeenDeviceId` value from the response as the
     * startIndex in the next request.
     */
    startIndex: string;
  };

  export class ListAccountDevicesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<ListAccountDevicesError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }

  export type ListUpgradesForSpecifiedStatusRequest = {
    /** Account identifier in "##########-#####". */
    account: string;
    /** The status of the upgrades that you want to retrieve. */
    upgradeStatus: UpgradeStatus;
    /**
     * The zero-based number of the first record to return. Set startIndex=0 for the first request.
     * If `hasMoreFlag`=true in the response, use the `lastSeenUpgradeId` value from the response as
     * the startIndex in the next request.
     */
    startIndex: string;
  };

  export class ListUpgradesForSpecifiedStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV1Result", FotaV1Result>>;

    static readonly errors: ErrorDecoders<ListUpgradesForSpecifiedStatusError> = [
      { on: 400, kind: "fotaV1Result", decode: { kind: "json", schema: fotaV1ResultSchema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { campaignStatusSchema, type CampaignStatus } from "../models/campaign-status.js";
import {
  deviceFirmwareUpgradeSchema,
  type DeviceFirmwareUpgrade,
} from "../models/device-firmware-upgrade.js";
import { fotaV3ResultSchema, type FotaV3Result } from "../models/fota-v3-result.js";
import { v3CampaignDeviceSchema, type V3CampaignDevice } from "../models/v3-campaign-device.js";
import { v3CampaignHistorySchema, type V3CampaignHistory } from "../models/v3-campaign-history.js";
import type { Servers } from "../servers.js";

/**
 * Status of a campaign per device.
 */
export class SoftwareManagementReportsV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a campaign device status
   *
   * @remarks
   * Retrieve a list of all devices in a campaign and the status of each device.
   *
   * @returns Returns an array of campaign history.
   *
   * @throws {@link SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignDeviceStatus2(
    request: SoftwareManagementReportsV3.GetCampaignDeviceStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<V3CampaignDevice, SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/reports/{acc}/campaigns/{campaignId}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3CampaignDeviceSchema },
        errorFactory: SoftwareManagementReportsV3.GetCampaignDeviceStatus2Error,
      },
      options,
    );
  }

  /**
   * Get firmware campaign status
   *
   * @remarks
   * Retrieve a list of campaigns for an account that have a specified campaign status.
   *
   * @returns Return array of campaign history.
   *
   * @throws {@link SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignHistoryByStatus2(
    request: SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Request,
    options?: RequestOptions,
  ): ApiPromise<V3CampaignHistory, SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/reports/{acc}/firmware/campaigns"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [
          { name: "campaignStatus", value: request.campaignStatus, schema: campaignStatusSchema },
          { name: "lastSeenCampaignId", value: request.lastSeenCampaignId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3CampaignHistorySchema },
        errorFactory: SoftwareManagementReportsV3.GetCampaignHistoryByStatus2Error,
      },
      options,
    );
  }

  /**
   * Get device campaign history
   *
   * @remarks
   * Retrieve campaign history for a specific device.
   *
   * @returns Returns a list of firmware upgrades.
   *
   * @throws {@link SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceFirmwareUpgradeHistory3(
    request: SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceFirmwareUpgrade[], SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV3("/reports/{acc}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "acc", value: request.acc, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceFirmwareUpgradeSchema)) },
        errorFactory: SoftwareManagementReportsV3.GetDeviceFirmwareUpgradeHistory3Error,
      },
      options,
    );
  }
}

export namespace SoftwareManagementReportsV3 {
  export type GetCampaignDeviceStatus2Request = {
    /** Account identifier. */
    acc: string;
    /** Campaign identifier. */
    campaignId: string;
    /** Last seen device identifier. */
    lastSeenDeviceId?: string;
  };

  export class GetCampaignDeviceStatus2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<GetCampaignDeviceStatus2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type GetCampaignHistoryByStatus2Request = {
    /** Account identifier. */
    acc: string;
    /** Campaign status. */
    campaignStatus: CampaignStatus;
    /** Last seen campaign Id. */
    lastSeenCampaignId?: string;
  };

  export class GetCampaignHistoryByStatus2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<GetCampaignHistoryByStatus2Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }

  export type GetDeviceFirmwareUpgradeHistory3Request = {
    /** Account identifier. */
    acc: string;
    /** Device IMEI identifier. */
    deviceId: string;
  };

  export class GetDeviceFirmwareUpgradeHistory3Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV3Result", FotaV3Result>>;

    static readonly errors: ErrorDecoders<GetDeviceFirmwareUpgradeHistory3Error> = [
      { on: 400, kind: "fotaV3Result", decode: { kind: "json", schema: fotaV3ResultSchema } },
    ];
  }
}

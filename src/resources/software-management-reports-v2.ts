import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  deviceSoftwareUpgradeSchema,
  type DeviceSoftwareUpgrade,
} from "../models/device-software-upgrade.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import { softwarePackageSchema, type SoftwarePackage } from "../models/software-package.js";
import { v2AccountDeviceListSchema, type V2AccountDeviceList } from "../models/v2-account-device-list.js";
import { v2CampaignDeviceSchema, type V2CampaignDevice } from "../models/v2-campaign-device.js";
import { v2CampaignHistorySchema, type V2CampaignHistory } from "../models/v2-campaign-history.js";
import type { Servers } from "../servers.js";

/**
 * Status of a campaign per device.
 */
export class SoftwareManagementReportsV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a campaign device status.
   *
   * @remarks
   * The report endpoint allows user to get the full list of device of a campaign.
   *
   * @returns Return list of campaign history.
   *
   * @throws {@link SoftwareManagementReportsV2.GetCampaignDeviceStatusError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignDeviceStatus(
    request: SoftwareManagementReportsV2.GetCampaignDeviceStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V2CampaignDevice, SoftwareManagementReportsV2.GetCampaignDeviceStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/reports/{account}/campaigns/{campaignId}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2CampaignDeviceSchema },
        errorFactory: SoftwareManagementReportsV2.GetCampaignDeviceStatusError,
      },
      options,
    );
  }

  /**
   * Get campaign history for specified status.
   *
   * @remarks
   * The report endpoint allows user to get campaign history of an account for specified status.
   *
   * @returns Return list of campaign history.
   *
   * @throws {@link SoftwareManagementReportsV2.GetCampaignHistoryByStatusError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCampaignHistoryByStatus(
    request: SoftwareManagementReportsV2.GetCampaignHistoryByStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V2CampaignHistory, SoftwareManagementReportsV2.GetCampaignHistoryByStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/reports/{account}/campaigns"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "campaignStatus", value: request.campaignStatus, schema: s.string() },
          { name: "lastSeenCampaignId", value: request.lastSeenCampaignId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2CampaignHistorySchema },
        errorFactory: SoftwareManagementReportsV2.GetCampaignHistoryByStatusError,
      },
      options,
    );
  }

  /**
   * Get device software upgrade history
   *
   * @remarks
   * The endpoint allows user to get software upgrade history of a device based on device IMEI.
   *
   * @returns Return array of upgrades.
   *
   * @throws {@link SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeviceFirmwareUpgradeHistory2(
    request: SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceSoftwareUpgrade[], SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/reports/{account}/devices/{deviceId}"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => deviceSoftwareUpgradeSchema)) },
        errorFactory: SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error,
      },
      options,
    );
  }

  /**
   * Get account devices information
   *
   * @remarks
   * The device endpoint gets devices information of an account.
   *
   * @returns Return array of devices.
   *
   * @throws {@link SoftwareManagementReportsV2.ListAccountDevices2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountDevices2(
    request: SoftwareManagementReportsV2.ListAccountDevices2Request,
    options?: RequestOptions,
  ): ApiPromise<V2AccountDeviceList, SoftwareManagementReportsV2.ListAccountDevices2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/devices/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
          { name: "distributionType", value: request.distributionType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2AccountDeviceListSchema },
        errorFactory: SoftwareManagementReportsV2.ListAccountDevices2Error,
      },
      options,
    );
  }

  /**
   * Get a list of available software
   *
   * @remarks
   * This endpoint allows user to list a certain type of software of an account.
   *
   * @returns Return array of software.
   *
   * @throws {@link SoftwareManagementReportsV2.ListAvailableSoftwareError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAvailableSoftware(
    request: SoftwareManagementReportsV2.ListAvailableSoftwareRequest,
    options?: RequestOptions,
  ): ApiPromise<SoftwarePackage[], SoftwareManagementReportsV2.ListAvailableSoftwareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/software/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "distributionType", value: request.distributionType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => softwarePackageSchema)) },
        errorFactory: SoftwareManagementReportsV2.ListAvailableSoftwareError,
      },
      options,
    );
  }
}

export namespace SoftwareManagementReportsV2 {
  export type GetCampaignDeviceStatusRequest = {
    /** Account identifier. */
    account: string;
    /** Campaign identifier. */
    campaignId: string;
    /** Last seen device identifier. */
    lastSeenDeviceId?: string;
  };

  export class GetCampaignDeviceStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetCampaignDeviceStatusError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetCampaignHistoryByStatusRequest = {
    /** Account identifier. */
    account: string;
    /** Status of the campaign. */
    campaignStatus: string;
    /** Last seen campaign Id. */
    lastSeenCampaignId?: string;
  };

  export class GetCampaignHistoryByStatusError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetCampaignHistoryByStatusError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetDeviceFirmwareUpgradeHistory2Request = {
    /** Account identifier. */
    account: string;
    /** Device IMEI identifier. */
    deviceId: string;
  };

  export class GetDeviceFirmwareUpgradeHistory2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetDeviceFirmwareUpgradeHistory2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListAccountDevices2Request = {
    /** Account identifier. */
    account: string;
    /** Last seen device identifier. */
    lastSeenDeviceId?: string;
    /** Filter distributionType to get specific type of devices. Values is LWM2M, OMD-DM or HTTP. */
    distributionType?: string;
  };

  export class ListAccountDevices2Error extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ListAccountDevices2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListAvailableSoftwareRequest = {
    /** Account identifier. */
    account: string;
    /** Filter distributionType to get specific type of software. Value is LWM2M, OMD-DM or HTTP. */
    distributionType?: string;
  };

  export class ListAvailableSoftwareError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<ListAvailableSoftwareError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}

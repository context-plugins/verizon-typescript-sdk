import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

export class SoftwareManagementReportsV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getCampaignDeviceStatus(
    request: SoftwareManagementReportsV2.GetCampaignDeviceStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V2CampaignDevice, SoftwareManagementReportsV2.GetCampaignDeviceStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/reports/{account}/campaigns/{campaignId}/devices"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "campaignId", value: request.campaignId, schema: s.string() },
        ],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2CampaignDeviceSchema },
        errorFactory: SoftwareManagementReportsV2.GetCampaignDeviceStatusError,
      },
      options,
    );
  }

  getCampaignHistoryByStatus(
    request: SoftwareManagementReportsV2.GetCampaignHistoryByStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<V2CampaignHistory, SoftwareManagementReportsV2.GetCampaignHistoryByStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/reports/{account}/campaigns"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "campaignStatus", value: request.campaignStatus, schema: s.string() },
          { name: "lastSeenCampaignId", value: request.lastSeenCampaignId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2CampaignHistorySchema },
        errorFactory: SoftwareManagementReportsV2.GetCampaignHistoryByStatusError,
      },
      options,
    );
  }

  getDeviceFirmwareUpgradeHistory2(
    request: SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Request,
    options?: RequestOptions,
  ): ApiPromise<DeviceSoftwareUpgrade[], SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/reports/{account}/devices/{deviceId}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [
          { name: "account", value: request.account, schema: s.string() },
          { name: "deviceId", value: request.deviceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => deviceSoftwareUpgradeSchema)) },
        errorFactory: SoftwareManagementReportsV2.GetDeviceFirmwareUpgradeHistory2Error,
      },
      options,
    );
  }

  listAccountDevices2(
    request: SoftwareManagementReportsV2.ListAccountDevices2Request,
    options?: RequestOptions,
  ): ApiPromise<V2AccountDeviceList, SoftwareManagementReportsV2.ListAccountDevices2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/devices/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "lastSeenDeviceId", value: request.lastSeenDeviceId, schema: s.optional(s.string()) },
          { name: "distributionType", value: request.distributionType, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2AccountDeviceListSchema },
        errorFactory: SoftwareManagementReportsV2.ListAccountDevices2Error,
      },
      options,
    );
  }

  listAvailableSoftware(
    request: SoftwareManagementReportsV2.ListAvailableSoftwareRequest,
    options?: RequestOptions,
  ): ApiPromise<SoftwarePackage[], SoftwareManagementReportsV2.ListAvailableSoftwareError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/software/{account}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "account", value: request.account, schema: s.string() }],
        query: [
          { name: "distributionType", value: request.distributionType, schema: s.optional(s.string()) },
        ],
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
    account: string;
    campaignId: string;
    lastSeenDeviceId?: string;
  };

  export class GetCampaignDeviceStatusError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<GetCampaignDeviceStatusError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetCampaignHistoryByStatusRequest = {
    account: string;
    campaignStatus: string;
    lastSeenCampaignId?: string;
  };

  export class GetCampaignHistoryByStatusError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<GetCampaignHistoryByStatusError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type GetDeviceFirmwareUpgradeHistory2Request = {
    account: string;
    deviceId: string;
  };

  export class GetDeviceFirmwareUpgradeHistory2Error extends ResponseError<
    Declared<"fotaV2Result", FotaV2Result>
  > {
    static readonly errors: ErrorDecoders<GetDeviceFirmwareUpgradeHistory2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListAccountDevices2Request = {
    account: string;
    lastSeenDeviceId?: string;
    distributionType?: string;
  };

  export class ListAccountDevices2Error extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<ListAccountDevices2Error> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type ListAvailableSoftwareRequest = {
    account: string;
    distributionType?: string;
  };

  export class ListAvailableSoftwareError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<ListAvailableSoftwareError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
